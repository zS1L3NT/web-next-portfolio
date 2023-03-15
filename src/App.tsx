import { useEffect } from "react"

import AboutMe from "./components/AboutMe/AboutMe"
import Landing from "./components/Landing/Landing"

const App = () => {
	useEffect(() => {
		document.getElementsByTagName("canvas")[0]!.style.position = "absolute"
	}, [])

	return (
		<>
			<Landing />
			<AboutMe />
		</>
	)
}

export default App
