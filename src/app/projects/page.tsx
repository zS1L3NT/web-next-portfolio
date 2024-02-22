import Image from "next/image"
import Link from "next/link"

import { HIDDEN_TAGS, SPECIAL_TAGS } from "@/constants"
import getProjects from "@/utils/getProjects"

export default async function Page() {
	const projects = await getProjects()

	return (
		<main className="container mx-auto xs:px-4 sm:px-6 xs:py-8 sm:py-12 lg:py-16">
			<Link
				href="/"
				className="inline-block hover:scale-105 font-montserrat-regular xs:text-sm sm:text-base lg:text-md">
				&larr; Home
			</Link>
			<h1 className="xs:mt-2 sm:mt-4 lg:mt-6 xs:text-3xl sm:text-4xl lg:text-5xl w-fit font-montserrat-bold">
				Projects
			</h1>
			<div className="container mx-auto xs:my-6 sm:my-9 md:my-14">
				<div className="grid xs:gap-8 sm:gap-10 lg:gap-12 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
					{projects.map(project => (
						<div
							key={project.title}
							className="flex flex-col justify-between h-full gap-4 shadow-md xs:p-4 sm:p-5 lg:p-6 shadow-slate-100 bg-slate-100 ">
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
						</div>
					))}
				</div>
			</div>
		</main>
	)
}
