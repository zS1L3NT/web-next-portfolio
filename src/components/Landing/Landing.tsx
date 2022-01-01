import Center from "../Center"
import LandingIcon from "./Icon"
import LandingTypewriter from "./Typewriter"
import Particles from "react-tsparticles"
import ParticlesConfig from "../../particles.config"
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"

const Landing: React.FC = () => {
	const [showBackground, setShowBackground] = useState(false)

	useEffect(() => {
		setTimeout(() => {
			setShowBackground(true)
		}, 1000)
	}, [])

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
					Hello, I'm <span className="text-secondary">Zechariah Tan</span>
				</h1>
				<h1 className="sm:mt-2 md:mt-4 xs:text-3xl sm:text-4xl md:text-6xl w-fit flex mx-auto text-white font-montserrat-regular">
					<LandingTypewriter />
				</h1>

				<Center className="xs:mt-8 sm:mt-12 md:mt-16 flex w-fit">
					<LandingIcon
						icon="github"
						className="xs:mx-2 sm:mx-3 md:mx-4 xs:w-12 xs:h-12 sm:w-14 h-14 md:w-16 md:h-16 my-1 p-1 fill-white cursor-pointer hover:scale-125 hover:fill-secondary-dark"
					/>
					<LandingIcon
						icon="linkedin"
						className="xs:mx-2 xs:w-14 xs:h-14 sm:mx-3 sm:w-16 sm:h-16 md:mx-4 md:w-18 md:h-18 p-1 fill-white cursor-pointer hover:scale-125 hover:fill-secondary-dark"
					/>
					<LandingIcon
						icon="stackoverflow"
						className="xs:mx-2 xs:w-12 xs:h-12 sm:mx-3 sm:w-14 sm:h-14 md:mx-4 md:w-16 md:h-16 my-1 p-1 fill-white cursor-pointer hover:scale-125 hover:fill-secondary-dark"
					/>
				</Center>
			</Center>
		</section>
	)
}

export default Landing
