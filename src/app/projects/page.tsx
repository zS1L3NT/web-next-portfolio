import Link from "next/link"
import { Suspense } from "react"

import getProjects from "@/utils/getProjects"

import Projects from "./Projects"
import Query from "./Query"

export default async function Page() {
	const projects = await getProjects()
	const projectsTags = [...new Set(projects.flatMap(p => p.tags))]

	return (
		<main className="container mx-auto xs:px-4 sm:px-6 xs:py-8 sm:py-12 lg:py-16">
			<Link
				href="/#projects"
				className="inline-block hover:scale-105 font-montserrat-regular xs:text-sm sm:text-base lg:text-md">
				&larr; Home
			</Link>

			<h1 className="xs:mt-2 sm:mt-4 lg:mt-6 xs:text-3xl sm:text-4xl lg:text-5xl w-fit font-montserrat-bold">
				Projects
			</h1>

			<Suspense>
				<Query projectsTags={projectsTags} />

				<Projects
					projects={projects}
					projectsTags={projectsTags}
				/>
			</Suspense>
		</main>
	)
}
