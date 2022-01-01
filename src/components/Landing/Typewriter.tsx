import Typewriter, { TypewriterClass } from "typewriter-effect"

const LandingTypewriter = () => {
	const handleTypewriter = (typewriter: TypewriterClass) => {
		const roles = ["Full Stack Developer", "Discord Bot Developer"]

		typewriter.pauseFor(1000).typeString("and I'm a ")
		roles.forEach(role =>
			typewriter.typeString(role).pauseFor(3000).deleteChars(role.length).pauseFor(1000)
		)
		typewriter.start()
	}
	
	return (
		<Typewriter
			onInit={handleTypewriter}
			options={{
				autoStart: true,
				loop: true,
				skipAddStyles: true
			}}
		/>
	)
}

export default LandingTypewriter
