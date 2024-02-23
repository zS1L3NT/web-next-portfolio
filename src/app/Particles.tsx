"use client"

import { AnimatePresence, motion } from "framer-motion"
import { ElementRef, useEffect, useRef } from "react"
import resolveConfig from "tailwindcss/resolveConfig"

import tailwindConfig from "../../tailwind.config"

type Particle = {
	x: number
	y: number
	size: number
	speedX: number
	speedY: number
	neighbours: Particle[]
}

const tailwind = resolveConfig(tailwindConfig)

export default function Particles() {
	const canvasRef = useRef<ElementRef<"canvas">>(null)

	useEffect(() => {
		const canvas = canvasRef.current
		if (!canvas) return

		const ctx = canvas.getContext("2d")!
		canvas.width = document.body.clientWidth
		canvas.height = document.body.clientHeight

		let mouse: { x: number; y: number } | null = null
		const particles: Particle[] = Array.from({ length: 150 }).map(() => ({
			x: Math.floor(Math.random() * canvas.width),
			y: Math.floor(Math.random() * canvas.height),
			size: Math.random() * 3,
			speedX: Math.random() * (Math.random() > 0.5 ? 0.8 : -0.8),
			speedY: Math.random() * 1.2,
			neighbours: [],
		}))

		const draw = async () => {
			ctx.fillStyle = tailwind.theme.backgroundColor.bgcolor as string
			ctx.fillRect(0, 0, canvas.width, canvas.height)

			for (const p of particles) {
				p.x += p.speedX
				p.y += p.speedY

				if (p.x < 0 || p.x > canvas.width || p.y < 0 || p.y > canvas.height) {
					p.x = Math.floor(Math.random() * canvas.width)
					p.y = 0
				}

				ctx.moveTo(p.x, p.y)
				ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
			}

			ctx.fillStyle = `rgb(204, 214, 246, 0.1)`
			ctx.fill()

			for (const p of particles) {
				p.neighbours = particles.filter(
					n => ((n.x - p.x) ** 2 + (n.y - p.y) ** 2) ** 0.5 < 200,
				)
			}

			for (const p of particles) {
				if (mouse) {
					const distance = ((mouse.x - p.x) ** 2 + (mouse.y - p.y) ** 2) ** 0.5
					if (distance < 400) {
						ctx.strokeStyle = `rgb(204, 214, 246, ${0.15 * (1 - distance / 400)})`
						ctx.beginPath()
						ctx.moveTo(p.x, p.y)
						ctx.lineTo(mouse.x, mouse.y)
						ctx.stroke()
					}
				}

				for (const n of p.neighbours) {
					const distance = ((n.x - p.x) ** 2 + (n.y - p.y) ** 2) ** 0.5

					ctx.strokeStyle = `rgb(204, 214, 246, ${0.075 * (1 - distance / 200)})`
					ctx.beginPath()
					ctx.moveTo(p.x, p.y)
					ctx.lineTo(n.x, n.y)
					ctx.stroke()
				}
			}

			requestAnimationFrame(draw)
		}

		const onMouseMove = (e: MouseEvent) => {
			mouse = { x: e.offsetX, y: e.offsetY }
		}

		const onMouseLeave = () => {
			mouse = null
		}

		requestAnimationFrame(draw)
		canvas.addEventListener("mousemove", onMouseMove)
		canvas.addEventListener("mouseleave", onMouseLeave)

		return () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height)
			canvas.removeEventListener("mousemove", onMouseMove)
			canvas.removeEventListener("mouseleave", onMouseLeave)
		}
	}, [])

	return (
		<AnimatePresence>
			<motion.canvas
				transition={{ duration: 3 }}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				className="absolute size-full"
				ref={canvasRef}
			/>
		</AnimatePresence>
	)
}
