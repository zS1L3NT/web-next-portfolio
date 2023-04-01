import { useEffect } from "react"

import AboutMe from "@/features/index/about/AboutMe"
import Featured from "@/features/index/featured/Featured"
import Landing from "@/features/index/landing/Landing"
import fetcher from "@/utils/fetcher"

const Index = ({ featured }: { featured: any[] }) => {
	useEffect(() => {
		document.getElementsByTagName("canvas")[0]!.style.position = "absolute"
	}, [])

	return (
		<>
			<Landing />
			<AboutMe />
			<Featured projects={featured} />
		</>
	)
}

export const getStaticProps = async () => {
	return {
		props: {
			featured: await Promise.all(
				["soundroid-v2", "web-formby", "rs-tauri-chess"].map(name =>
					fetcher(`https://api.github.com/repos/zS1L3NT/${name}`)
				)
			)
		}
	}
}

export default Index
