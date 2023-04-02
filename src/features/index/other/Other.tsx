import Link from "next/link"

import { iProject } from "@/utils/fetcher"

import Project from "./Project"

const Other = ({ projects }: { projects: iProject[] }) => {
	return (
		<section className="w-full bg-white">
			<h1 className="mx-auto text-center xs:text-3xl sm:text-4xl lg:text-5xl w-fit font-montserrat-bold">
				Other Projects
			</h1>
			<div className="container grid mx-auto xs:gap-8 sm:gap-10 lg:gap-12 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xs:px-6 sm:px-10 lg:px-0 xs:my-6 sm:my-9 md:my-14">
				{projects.map(project => (
					<Project
						key={project.name}
						project={project}
					/>
				))}
			</div>
			<Link
				href="/projects"
				className="block px-4 py-3 m-auto border w-fit hover:scale-105 text-primary-400 font-montserrat-regular border-primary-400">
				View More
			</Link>
		</section>
	)
}

export default Other
