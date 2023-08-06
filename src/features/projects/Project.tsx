import Link from "next/link"

import { iProject } from "@/@types/project"

import Tag from "./Tag"

const tags: [string, string, string][] = [
	["special", "⭐", "This is a special repository!"],
	["hackathon", "🧑‍💻", "This project was a hackathon project and most likely won't be updated"],
	["unfinished", "🚧", "This project has yet to be completed..."],
	["deprecated", "⚠️", "This project is not getting any further updates!"],
	["broken", "💥", "This project does not work!"],
]

const Project = ({ project }: { project: iProject }) => {
	return (
		<Link
			className="flex flex-col justify-between h-full gap-4 shadow-md cursor-pointer hover:scale-105 xs:p-4 sm:p-5 lg:p-6 hover:shadow-slate-300 shadow-slate-100 bg-slate-100 "
			href={`/projects/` + project.title}>
			<div>
				<h1 className="xs:text-md sm:text-lg lg:text-xl font-montserrat-bold">
					{project.title}
					{tags
						.filter(t => project.tags.includes(t[0]))
						.map(([tag, emoji, message]) => (
							<span
								key={tag}
								title={message}
								className="inline-block ms-1 hover:scale-125">
								{emoji}
							</span>
						))}
				</h1>
				<p className="mt-1 font-montserrat-regular xs:text-sm sm:text-base lg:text-md">
					{project.description}
				</p>
			</div>
			<div className="flex flex-wrap xs:gap-1 sm:gap-2 lg:gap-3">
				{project.tags.map(t => (
					<Tag
						key={t}
						tag={t}
					/>
				))}
			</div>
		</Link>
	)
}

export default Project
