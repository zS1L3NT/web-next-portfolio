import { useEffect, useState } from "react"

const time = (ms: number) => new Promise(res => setTimeout(res, ms))

const Typewriter = () => {
	const [blink, setBlink] = useState(false)
	const [message, setMessage] = useState("")

	useEffect(() => {
		const words = [
			"WorldSkills Web Tech Winner",
			"Full Stack Web Developer",
			"Android App Developer",
			"student from Temasek Poly",
		]

		let cancelled = false
		time(500).then(async () => {
			if (cancelled) return

			for (const letter of "and I'm a ") {
				setMessage(message => message + letter)
				await time(40)
				if (cancelled) return
			}

			while (!cancelled) {
				for (const word of words) {
					for (const letter of word + " ") {
						setMessage(message => message + letter)
						await time(40)
						if (cancelled) return
					}

					setBlink(true)
					await time(2000)
					if (cancelled) return
					setBlink(false)

					// eslint-disable-next-line @typescript-eslint/no-unused-vars
					for (const _ of word + " ") {
						setMessage(message => message.slice(0, -1))
						await time(20)
						if (cancelled) return
					}

					setBlink(true)
					await time(500)
					if (cancelled) return
					setBlink(false)
				}
			}
		})

		return () => {
			cancelled = true
			setMessage("")
			setBlink(false)
		}
	}, [])

	return (
		<h1 className="flex mx-auto text-white select-none sm:mt-2 md:mt-4 xs:text-3xl sm:text-4xl md:text-6xl w-fit font-montserrat-regular">
			<div>
				{message.split("").map((letter, i) => (
					<span
						key={i}
						className="text-white">
						{letter}
					</span>
				))}
				<div
					className={
						"text-white inline-block -ml-1" + (blink ? " animate-cursor-blink" : "")
					}>
					|
				</div>
			</div>
		</h1>
	)
}

export default Typewriter
