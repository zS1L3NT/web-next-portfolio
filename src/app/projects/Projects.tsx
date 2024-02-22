"use client"

import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"

import { HIDDEN_TAGS, SPECIAL_TAGS } from "@/constants"
import { Project } from "@/utils/getProjects"

export default function Projects({
	projects,
	searchTags,
}: {
	projects: Project[]
	searchTags: string[]
}) {
	return (
		<div className="grid xs:gap-8 sm:gap-10 lg:gap-12 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
			<AnimatePresence>
				{projects
					.filter(p => searchTags.every(t => p.tags.includes(t)))
					.map(project => (
						<motion.div
							key={project.title}
							layoutId={project.title}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className="flex flex-col justify-between h-full gap-4 shadow-md no-transition xs:p-4 sm:p-5 lg:p-6 shadow-slate-100 bg-slate-100">
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
										<Image
											key={t}
											title={t[0]!.toUpperCase() + t.substring(1)}
											className="inline-block xs:scale-75 sm:scale-90"
											src={`https://res.cloudinary.com/zs1l3nt/image/upload/icons/${t}.svg`}
											alt={t + " icon"}
											width={25}
											height={25}
										/>
									))}
							</div>
						</motion.div>
					))}
			</AnimatePresence>
		</div>
	)
}
