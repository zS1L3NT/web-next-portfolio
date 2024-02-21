import Link from "next/link"

import cn from "@/utils/cn"
import getProjects from "@/utils/getProjects"

import Filters from "./Filters"
import Project from "./Project"

export default async function Page({ searchParams }: { searchParams?: any }) {
	const projects = await getProjects()
	const search = new URLSearchParams(searchParams)
	const tags = [...new Set(projects.flatMap(p => p.tags))]
	const pages = 1
	const page = 1

	const getPageLink = (page: number) => {
		const newSearch = new URLSearchParams(search?.toString())

		if (page !== 1) {
			newSearch.set("page", Math.max(1, Math.min(pages, page)) + "")
		} else {
			newSearch.delete("page")
		}

		const newSearchString = newSearch.toString().replace(/%2C/g, ",")
		return "/projects" + (newSearchString.length ? "?" + newSearchString : "")
	}

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
				<Filters
					tags={tags}
					searchParams={searchParams}
				/>

				<div className="grid xs:gap-8 sm:gap-10 lg:gap-12 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
					{projects.map(project => (
						<Project
							key={project.title}
							project={project}
						/>
					))}
				</div>
			</div>
			<div className="flex justify-center gap-1">
				{page === 1 ? null : (
					<Link
						href={getPageLink(page - 1)}
						className="p-3 font-montserrat-regular hover:shadow-md bg-slate-100">
						&laquo;
					</Link>
				)}

				{Array(pages)
					.fill(0)
					.map((_, i) => i + 1)
					.map(i => (
						<Link
							key={i}
							href={getPageLink(i)}
							className={cn(
								"font-montserrat-regular p-3 hover:shadow-md ",
								page === i ? "bg-primary-400 text-white" : "bg-slate-100",
							)}>
							{i}
						</Link>
					))}

				{page >= pages ? null : (
					<Link
						href={getPageLink(page + 1)}
						className="p-3 font-montserrat-regular hover:shadow-md bg-slate-100">
						&raquo;
					</Link>
				)}
			</div>
		</main>
	)
}
