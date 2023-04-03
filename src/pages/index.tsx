import { GetStaticProps } from "next"
import { useEffect } from "react"

import AboutMe from "@/features/index/about/AboutMe"
import ContactMe from "@/features/index/contact/ContactMe"
import Featured from "@/features/index/featured/Featured"
import Footer from "@/features/index/footer/Footer"
import Landing from "@/features/index/landing/Landing"
import Other from "@/features/index/other/Other"
import scraper, { iProject } from "@/utils/scraper"

type Props = {
	featured: iProject[]
	other: iProject[]
	updated: string | null
}

const Index = ({ featured, other, updated }: Props) => {
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
				<Footer updated={updated} />
			</main>
		</>
	)
}

export const getStaticProps: GetStaticProps<Props> = async () => {
	return {
		props: {
			featured: await Promise.all(
				["soundroid-v2", "web-formby", "rs-tauri-chess"].map(scraper)
			),
			other: await Promise.all(
				[
					"ts-discord-soundroid",
					"web-monetary",
					"deskpower",
					"web-react-statify",
					"ts-npm-ytmusic-api",
					"ts-discord-reminder"
				].map(scraper)
			),
			updated: await fetch(
				"https://api.github.com/repos/zS1L3NT/web-react-portfolio/commits/main"
			)
				.then(res => res.json())
				.then(res => res.commit.author.date)
				.catch(() => null)
		},
		revalidate: 60
	}
}

export default Index
