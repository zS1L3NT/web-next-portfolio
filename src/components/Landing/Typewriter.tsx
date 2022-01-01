import { useEffect, useState } from "react"

const time = (ms: number) => new Promise(res => setTimeout(res, ms))

const Typewriter = () => {
	//#region Hooks
	const [message, setMessage] = useState("")
	//#endregion

	//#region Effects
	useEffect(() => {
		const words = [
			"Full Stack Developer",
			"Discord Bot Developer",
			"World Skills Competitor",
			"student from Temasek Poly"
		]

		time(1000).then(async () => {
			for (const letter of "and I'm a ") {
				setMessage(message => message + letter)
				await time(100)
			}

			while (true) {
				for (const word of words) {
					for (const letter of word + " ") {
						setMessage(message => message + letter)
						await time(100)
					}

					await time(3000)

					for (const _ of word + " ") {
						setMessage(message => message.slice(0, -1))
						await time(50)
					}

					await time(1000)
				}
			}
		})
	}, [])
	//#endregion

	return (
		<h1 className="sm:mt-2 md:mt-4 xs:text-3xl sm:text-4xl md:text-6xl w-fit flex mx-auto text-white font-montserrat-regular">
			<div>
				{message.split("").map((letter, i) => (
					<span key={i}>{letter}</span>
				))}
				<div className="inline-block -ml-1 animate-cursor-blink">|</div>
			</div>
		</h1>
	)
}

export default Typewriter
