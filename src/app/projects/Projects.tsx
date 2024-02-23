"use client"

import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link"

import TagImage from "@/components/TagImage"
import { HIDDEN_TAGS, SPECIAL_TAGS } from "@/constants"
import useQuery from "@/hooks/useQuery"
import { Project } from "@/utils/getProjects"

export default function Projects({
	projects,
	projectsTags,
}: {
	projects: Project[]
	projectsTags: string[]
}) {
	const { tags, order, orderBy } = useQuery(projectsTags)

	return (
		<div className="grid xs:gap-8 sm:gap-10 lg:gap-12 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
			<AnimatePresence>
				{[...projects]
					.sort((a, b) =>
						orderBy === "title"
							? order === "asc"
								? a.title.localeCompare(b.title)
								: b.title.localeCompare(a.title)
							: order === "asc"
								? a.updated - b.updated
								: b.updated - a.updated,
					)
					.filter(p => tags.every(t => p.tags.includes(t)))
					.map(project => (
						<motion.div
							key={project.title}
							layoutId={project.title}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							whileHover={{ scale: 1.05 }}
							exit={{ opacity: 0 }}
							className="flex flex-col justify-between h-full gap-4 transition-shadow shadow-md no-transition shadow-slate-100 bg-slate-100 hover:shadow-slate-300">
							<Link
								href={`https://github.com/zS1L3NT/${project.title}`}
								target="_blank"
								className="flex flex-col justify-between gap-4 xs:p-4 sm:p-5 lg:p-6 size-full">
								<div>
									<h1 className="xs:text-md sm:text-lg lg:text-xl font-montserrat-bold">
										{project.title}
										{SPECIAL_TAGS.filter(t => project.tags.includes(t[0])).map(
											([tag, emoji, message]) => (
												<span
													key={tag}
													title={message}
													className="inline-block ms-1 hover:scale-125">
													{emoji}
												</span>
											),
										)}
									</h1>
									<p className="mt-1 font-montserrat-regular xs:text-sm sm:text-base lg:text-md">
										{project.description}
									</p>
								</div>
								<div className="flex flex-wrap xs:gap-1 sm:gap-2 lg:gap-3">
									{project.tags
										.filter(t => !HIDDEN_TAGS.includes(t))
										.map(t => (
											<TagImage
												key={t}
												tag={t}
											/>
										))}
								</div>
							</Link>
						</motion.div>
					))}
			</AnimatePresence>
		</div>
	)
}
