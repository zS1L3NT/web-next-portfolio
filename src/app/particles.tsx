"use client"

import { AnimatePresence, motion } from "framer-motion"
import { type ElementRef, useEffect, useRef, useState } from "react"
import resolveConfig from "tailwindcss/resolveConfig"

import { PARTICLES } from "@/constants"

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

	const [count, setCount] = useState(0)

	useEffect(() => {
		const onResize = () => {
			setCount(document.body.clientWidth / PARTICLES.SCREEN_WIDTH_DIVISOR)
		}

		onResize()
		window.addEventListener("resize", onResize)
		return () => window.removeEventListener("resize", onResize)
	}, [])

	useEffect(() => {
		const canvas = canvasRef.current
		if (!canvas) return

		const ctx = canvas.getContext("2d")
		if (!ctx) return

		canvas.width = document.body.clientWidth
		canvas.height = document.body.clientHeight

		let mouse: { x: number; y: number } | null = null
		const particles: Particle[] = Array.from({ length: count }).map(() => ({
			x: Math.random() * canvas.width,
			y: Math.random() * canvas.height,
			size: Math.random() * PARTICLES.MAX_SIZE,
			speedX: Math.random() ** 2 * (Math.random() > 0.5 ? 1 : -1) * PARTICLES.MAX_SPEED_X,
			speedY: Math.random() ** 2 * PARTICLES.MAX_SPEED_Y,
			neighbours: [],
		}))

		const draw = async () => {
			ctx.fillStyle = tailwind.theme.backgroundColor.bgcolor as string
			ctx.fillRect(0, 0, canvas.width, canvas.height)

			for (const p of particles) {
				p.x += p.speedX
				p.y += p.speedY

				if (p.x < 0) {
					p.x = canvas.width
				}

				if (p.x > canvas.width) {
					p.x = 0
				}

				if (p.y > canvas.height) {
					p.y = 0
				}

				ctx.moveTo(p.x, p.y)
				ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
			}

			ctx.fillStyle = `rgb(${PARTICLES.COLOR}, ${PARTICLES.OPACITY})`
			ctx.fill()

			for (const p of particles) {
				p.neighbours = particles.filter(
					n =>
						((n.x - p.x) ** 2 + (n.y - p.y) ** 2) ** 0.5 <
						PARTICLES.MAX_NEIGHBOUR_DISTANCE,
				)
			}

			for (const p of particles) {
				if (mouse) {
					const distance = ((mouse.x - p.x) ** 2 + (mouse.y - p.y) ** 2) ** 0.5
					const opacity =
						PARTICLES.MOUSE_LINE_OPACITY * (1 - distance / PARTICLES.MAX_MOUSE_DISTANCE)

					ctx.strokeStyle = `rgb(${PARTICLES.COLOR}, ${opacity})`
					ctx.beginPath()
					ctx.moveTo(p.x, p.y)
					ctx.lineTo(mouse.x, mouse.y)
					ctx.stroke()
				}

				for (const n of p.neighbours) {
					const distance = ((n.x - p.x) ** 2 + (n.y - p.y) ** 2) ** 0.5
					const opacity =
						PARTICLES.NEIGHBOUR_LINE_OPACITY *
						(1 - distance / PARTICLES.MAX_NEIGHBOUR_DISTANCE)

					ctx.strokeStyle = `rgb(${PARTICLES.COLOR}, ${opacity})`
					ctx.beginPath()
					ctx.moveTo(p.x, p.y)
					ctx.lineTo(n.x, n.y)
					ctx.stroke()
				}
			}

			frameId = requestAnimationFrame(draw)
		}

		const onMouseMove = (e: MouseEvent) => {
			mouse = { x: e.offsetX, y: e.offsetY }
		}

		const onMouseLeave = () => {
			mouse = null
		}

		let frameId = requestAnimationFrame(draw)
		canvas.addEventListener("mousemove", onMouseMove)
		canvas.addEventListener("mouseleave", onMouseLeave)

		return () => {
			cancelAnimationFrame(frameId)
			ctx.clearRect(0, 0, canvas.width, canvas.height)
			canvas.removeEventListener("mousemove", onMouseMove)
			canvas.removeEventListener("mouseleave", onMouseLeave)
		}
	}, [count])

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
