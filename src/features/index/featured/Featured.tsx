import { iProject } from "@/utils/scraper"

import Project from "./Project"

const Featured = ({ projects }: { projects: iProject[] }) => {
	return (
		<section className="w-100">
			<h1 className="mx-auto text-center xs:text-3xl sm:text-4xl lg:text-5xl w-fit font-montserrat-bold">
				Featured Projects
			</h1>
			<div className="container flex flex-col mx-auto xs:gap-4 sm:gap-8 lg:gap-16 xs:px-6 sm:px-10 lg:px-0 xs:my-6 sm:my-9 md:my-14">
				{projects.map(project => (
					<Project
						key={project.name}
						project={project}
					/>
				))}
			</div>
		</section>
	)
}

export default Featured
