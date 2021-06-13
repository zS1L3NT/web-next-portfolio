import React from "react"

export default (animation: string, delay: number, length: number, set: React.Dispatch<React.SetStateAction<string[]>>) => {
	setTimeout(() => {
		set(prev => prev.concat(`animate-${animation}`))
	}, delay)
	setTimeout(() => {
		set(prev => prev.filter(anim => anim !== `animate-${animation}`).concat(`state-${animation}`))
	}, delay + length)
}