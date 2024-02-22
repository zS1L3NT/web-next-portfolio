import Image from "next/image"
import Link from "next/link"

import { iProject } from "@/@types/project"

export default function Other({ projects }: { projects: iProject[] }) {
	return (
		<section className="w-full bg-white">
			<h1 className="mx-auto text-center xs:text-3xl sm:text-4xl lg:text-5xl w-fit font-montserrat-bold">
				Other Projects
			</h1>
			<div className="container grid mx-auto xs:gap-8 sm:gap-10 lg:gap-12 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xs:px-6 sm:px-10 lg:px-0 xs:my-6 sm:my-9 md:my-14">
				{projects.map(project => (
					<div
						key={project.title}
						className="flex flex-col justify-between h-full gap-4 shadow-md xs:p-4 sm:p-5 lg:p-6 shadow-slate-100 bg-slate-100 ">
						<div>
							<h1 className="xs:text-md sm:text-lg lg:text-xl font-montserrat-bold">
								{project.title}
							</h1>
							<p className="mt-1 font-montserrat-regular xs:text-sm sm:text-base lg:text-md">
								{project.description}
							</p>
						</div>
						<div className="flex flex-wrap gap-3">
							{project.tags.map(t => (
								<Image
									key={t}
									title={t[0]!.toUpperCase() + t.slice(1)}
									className="inline-block"
									src={`https://res.cloudinary.com/zs1l3nt/image/upload/icons/${t}.svg`}
									alt={t + " icon"}
									width={25}
									height={25}
								/>
							))}
						</div>
					</div>
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
