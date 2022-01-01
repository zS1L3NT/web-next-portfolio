import Center from "../Center"
import Icon from "./Icon"
import Particles from "react-tsparticles"
import ParticlesConfig from "../../particles.config"
import Typewriter from "./Typewriter"
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"

const Landing: React.FC = () => {
	//#region Hooks
	const [showBackground, setShowBackground] = useState(false)
	//#endregion

	//#region Effects
	useEffect(() => {
		setTimeout(() => {
			setShowBackground(true)
		}, 1000)
	}, [])
	//#endregion

	return (
		<section className="w-full h-full">
			<AnimatePresence>
				{showBackground ? (
					<motion.div
						transition={{ duration: 3 }}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}>
						<Particles params={ParticlesConfig} />
					</motion.div>
				) : null}
			</AnimatePresence>
			<Center className="text-center">
				<h1 className="xs:text-3xl sm:text-4xl md:text-6xl text-white font-montserrat-regular">
					Hello, I&apos;m <span className="text-secondary">Zechariah Tan</span>
				</h1>
				<Typewriter />

				<Center className="xs:mt-8 sm:mt-12 md:mt-16 flex w-fit">
					<Icon
						icon="github"
						className="xs:mx-2 xs:w-12 xs:h-12 sm:mx-3 sm:w-14 sm:h-14 md:mx-4 md:w-16 md:h-16 my-1 p-1"
					/>
					<Icon
						icon="linkedin"
						className="xs:mx-2 xs:w-14 xs:h-14 sm:mx-3 sm:w-16 sm:h-16 md:mx-4 md:w-18 md:h-18 p-1"
					/>
					<Icon
						icon="stackoverflow"
						className="xs:mx-2 xs:w-12 xs:h-12 sm:mx-3 sm:w-14 sm:h-14 md:mx-4 md:w-16 md:h-16 my-1 p-1"
					/>
				</Center>
			</Center>
		</section>
	)
}

export default Landing
