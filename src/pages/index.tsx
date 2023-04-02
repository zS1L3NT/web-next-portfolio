import { useEffect } from "react"

import AboutMe from "@/features/index/about/AboutMe"
import ContactMe from "@/features/index/contact/ContactMe"
import Featured from "@/features/index/featured/Featured"
import Landing from "@/features/index/landing/Landing"
import Other from "@/features/index/other/Other"
import fetcher, { iProject } from "@/utils/fetcher"

const Index = ({ featured, other }: { featured: iProject[]; other: iProject[] }) => {
	useEffect(() => {
		document.getElementsByTagName("canvas")[0]!.style.position = "absolute"
	}, [])

	return (
		<>
			<Landing />
			<main className="flex flex-col xs:my-8 sm:my-12 lg:my-16 xs:gap-8 sm:gap-12 lg:gap-16">
				<AboutMe />
				<Featured projects={featured} />
				<Other projects={other} />
				<ContactMe />
			</main>
		</>
	)
}

export const getStaticProps = async () => {
	return {
		props: {
			featured: await Promise.all(
				["soundroid-v2", "web-formby", "rs-tauri-chess"].map(fetcher)
			),
			other: await Promise.all(
				[
					"ts-discord-soundroid",
					"web-monetary",
					"deskpower",
					"web-react-statify",
					"ts-npm-ytmusic-api",
					"ts-discord-reminder"
				].map(fetcher)
			)
		}
	}
}

export default Index
