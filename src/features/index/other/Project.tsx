import Image from "next/image"
import Link from "next/link"

import { iProject } from "@/utils/scraper"

const Project = ({ project }: { project: iProject }) => {
	return (
		<Link
			className="flex flex-col justify-between h-full gap-4 shadow-md cursor-pointer hover:scale-105 xs:p-4 sm:p-5 lg:p-6 hover:shadow-slate-300 shadow-slate-100 bg-slate-100 "
			href={`/projects/` + project.name}>
			<div>
				<h1 className="xs:text-md sm:text-lg lg:text-xl font-montserrat-bold">
					{project.name}
				</h1>
				<p className="mt-1 font-montserrat-regular xs:text-sm sm:text-base lg:text-md">
					{project.description}
				</p>
			</div>
			<div className="flex flex-wrap gap-3">
				{project.topics.map(t => (
					<Image
						key={t}
						src={`https://res.cloudinary.com/zs1l3nt/image/upload/icons/${t}.svg`}
						alt={t + " icon"}
						width={25}
						height={25}
					/>
				))}
			</div>
		</Link>
	)
}

export default Project
