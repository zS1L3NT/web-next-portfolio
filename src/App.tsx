import { useEffect } from "react"

import AboutMe from "./components/AboutMe/AboutMe"
import FeaturedProjects from "./components/FeaturedProjects/FeaturedProjects"
import Landing from "./components/Landing/Landing"

const App = () => {
	useEffect(() => {
		document.getElementsByTagName("canvas")[0]!.style.position = "absolute"
	}, [])

	return (
		<>
			<Landing />
			<AboutMe />
			<FeaturedProjects />
		</>
	)
}

export default App
