import Link from "next/link"

import getProjects from "@/utils/getProjects"

import Filters from "./Filters"
import Projects from "./Projects"

export default async function Page({ searchParams }: { searchParams: Record<string, string> }) {
	const projects = await getProjects()

	const search = new URLSearchParams(searchParams)
	const tags = [...new Set(projects.flatMap(p => p.tags))]
	const searchTags = (search.get("tags")?.split(",") ?? []).filter(t => tags.includes(t))

	return (
		<main className="container mx-auto xs:px-4 sm:px-6 xs:py-8 sm:py-12 lg:py-16">
			<Link
				href="/"
				className="inline-block hover:scale-105 font-montserrat-regular xs:text-sm sm:text-base lg:text-md">
				&larr; Home
			</Link>
			<h1 className="xs:mt-2 sm:mt-4 lg:mt-6 xs:text-3xl sm:text-4xl lg:text-5xl w-fit font-montserrat-bold">
				Projects
			</h1>
			<div className="container mx-auto xs:my-6 sm:my-9 md:my-14">
				<Filters
					tags={tags}
					searchTags={searchTags}
				/>

				<Projects
					projects={projects}
					searchTags={searchTags}
				/>
			</div>
		</main>
	)
}
