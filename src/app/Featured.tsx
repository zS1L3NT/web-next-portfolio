import Image from "next/image"

import { iProject } from "@/@types/project"

export default function Featured({ projects }: { projects: iProject[] }) {
	return (
		<section className="w-100">
			<h1 className="mx-auto text-center xs:text-3xl sm:text-4xl lg:text-5xl w-fit font-montserrat-bold">
				Featured Projects
			</h1>
			<div className="container flex flex-col mx-auto xs:gap-4 sm:gap-8 lg:gap-16 xs:px-6 sm:px-10 lg:px-0 xs:my-6 sm:my-9 md:my-14">
				{projects.map(project => (
					<div
						key={project.title}
						className="container flex flex-col items-center group even:lg:text-end even:lg:flex-row-reverse sm:gap-4 md:gap-8 lg:gap-12 lg:h-72 lg:flex-row">
						<Image
							className="sm:w-full md:w-full lg:w-fit lg:h-72"
							src={`https://res.cloudinary.com/zs1l3nt/image/upload/repositories/${project.title}.png`}
							alt={"Banner for " + project.title}
							width={1600}
							height={900}
							priority
						/>

						<div className="flex flex-col justify-center flex-1 xs:px-2 xs:py-4 sm:p-4 lg:p-0">
							<h1 className="font-montserrat-bold xs:text-xl sm:text-2xl lg:text-3xl">
								{project.title}
							</h1>
							<div className="flex flex-wrap mt-2 group-even:lg:justify-end gap-x-3 gap-y-1 xs:mb-4 sm:mb-5 lg:mb-6">
								{project.tags.map(t => (
									<Image
										key={t}
										title={t[0]!.toUpperCase() + t.substring(1)}
										className="inline-block"
										src={`https://res.cloudinary.com/zs1l3nt/image/upload/icons/${t}.svg`}
										alt={t + " icon"}
										width={30}
										height={30}
									/>
								))}
							</div>
							<p className="xs:text-sm sm:text-base lg:text-lg font-montserrat-regular">
								{project.description}
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}
