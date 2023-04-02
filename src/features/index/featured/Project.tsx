import Image from "next/image"
import Link from "next/link"

import { iProject } from "@/utils/scraper"

const Project = ({ project }: { project: iProject }) => {
	return (
		<div
			className={
				"group even:lg:text-end even:lg:flex-row-reverse container flex flex-col items-center sm:gap-4 md:gap-8 lg:gap-12 lg:h-72 lg:flex-row"
			}>
			<Link href={"/projects/" + project.name}>
				<Image
					className="hover:scale-105 sm:w-full md:w-full lg:w-fit lg:h-72"
					src={`https://res.cloudinary.com/zs1l3nt/image/upload/repositories/${project.name}.png`}
					alt={"Banner for " + project.name}
					width={1600}
					height={900}
					priority
				/>
			</Link>

			<div className="flex flex-col justify-center flex-1 xs:px-2 xs:py-4 sm:p-4 lg:p-0">
				<Link
					href={"/projects/" + project.name}
					className="cursor-pointer hover:text-secondary-400 font-montserrat-bold xs:text-xl sm:text-2xl lg:text-3xl">
					{project.name}
				</Link>
				<div className="flex flex-wrap mt-2 group-even:lg:justify-end gap-x-3 gap-y-1 xs:mb-4 sm:mb-5 lg:mb-6">
					{project.topics.map(t => (
						<Image
							key={t}
							title={t[0]!.toUpperCase() + t.substring(1)}
							className="inline-block hover:scale-125"
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
	)
}

export default Project
