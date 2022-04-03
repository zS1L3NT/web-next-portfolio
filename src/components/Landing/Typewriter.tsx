import { useEffect, useState } from "react"

const time = (ms: number) => new Promise(res => setTimeout(res, ms))

const Typewriter = () => {
	const [blink, setBlink] = useState(false)
	const [message, setMessage] = useState("")

	useEffect(() => {
		const words = [
			"Full Stack Developer",
			"Discord Bot Developer",
			"World Skills Competitor",
			"student from Temasek Poly"
		]

		let cancelled = false
		time(1000).then(async () => {
			if (cancelled) return

			for (const letter of "and I'm a ") {
				setMessage(message => message + letter)
				await time(80)
				if (cancelled) return
			}

			while (true) {
				for (const word of words) {
					for (const letter of word + " ") {
						setMessage(message => message + letter)
						await time(80)
						if (cancelled) return
					}

					setBlink(true)
					await time(3000)
					if (cancelled) return
					setBlink(false)

					for (const _ of word + " ") {
						setMessage(message => message.slice(0, -1))
						await time(40)
						if (cancelled) return
					}

					setBlink(true)
					await time(1000)
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
					<span key={i}>{letter}</span>
				))}
				<div className={"inline-block -ml-1" + (blink ? " animate-cursor-blink" : "")}>
					|
				</div>
			</div>
		</h1>
	)
}

export default Typewriter
