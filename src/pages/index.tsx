import { useEffect } from "react"

import AboutMe from "@/features/index/about/AboutMe"
import Featured from "@/features/index/featured/Featured"
import Landing from "@/features/index/landing/Landing"

const Index = () => {
	useEffect(() => {
		document.getElementsByTagName("canvas")[0]!.style.position = "absolute"
	}, [])

	return (
		<>
			<Landing />
			<AboutMe />
			<Featured />
		</>
	)
}

export default Index