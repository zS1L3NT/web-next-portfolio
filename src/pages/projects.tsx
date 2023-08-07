import { Modal } from "flowbite"
import { GetServerSideProps } from "next"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

import { Prisma } from "@prisma/client"

import { iProject } from "@/@types/project"
import { PNG_TAGS } from "@/constants"
import FiltersModal from "@/features/projects/FiltersModal"
import Project from "@/features/projects/Project"
import { prisma } from "@/prisma"

type Props = {
	projects: iProject[]
	tags: string[]
	page: number
	pages: number
}

const Projects = ({ projects, tags, page, pages }: Props) => {
	const search = useSearchParams()

	const searchTags = (search.get("tags")?.split(",") ?? []).filter(t => tags.includes(t))

	const getTagsLink = (tags: string[]) => {
		const newSearch = new URLSearchParams(search.toString())

		if (tags.length) {
			newSearch.set("tags", tags.join(","))
		} else {
			newSearch.delete("tags")
		}
		newSearch.delete("page")

		const newSearchString = newSearch.toString().replace(/%2C/g, ",")
		return "/projects" + (newSearchString.length ? "?" + newSearchString : "")
	}

	const getPageLink = (page: number) => {
		const newSearch = new URLSearchParams(search.toString())

		if (page !== 1) {
			newSearch.set("page", Math.max(1, Math.min(pages, page)) + "")
		} else {
			newSearch.delete("page")
		}

		const newSearchString = newSearch.toString().replace(/%2C/g, ",")
		return "/projects" + (newSearchString.length ? "?" + newSearchString : "")
	}

	return (
		<>
			<Head>
				<title>Projects</title>
			</Head>
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
					<div className="flex xs:gap-2 sm:gap-3 lg:gap-4 xs:mb-8 sm:mb-10 lg:mb-12">
						<button
							className="flex items-center justify-center shadow-md cursor-pointer hover:scale-105 xs:text-xs sm:text-sm xs:p-2 sm:p-3 hover:shadow-slate-300 shadow-slate-200 bg-slate-200 font-montserrat-regular"
							type="button"
							onClick={() =>
								new Modal(document.getElementById("filters-modal")).toggle()
							}>
							<Image
								src="/assets/images/filter.png"
								alt="Filter"
								width={16}
								height={16}
							/>
						</button>

						<FiltersModal
							tags={tags}
							searchTags={searchTags}
							getTagsLink={getTagsLink}
						/>

						{searchTags.map(t => (
							<div
								key={t}
								className="flex items-center gap-2 shadow-md xs:text-xs sm:text-sm xs:py-2 sm:py-3 xs:px-3 sm:px-4 font-montserrat-regular bg-slate-200">
								<Image
									title={t[0]!.toUpperCase() + t.slice(1)}
									className="inline-block"
									src={`https://res.cloudinary.com/zs1l3nt/image/upload/icons/${t}.${
										PNG_TAGS.includes(t) ? "png" : "svg"
									}`}
									alt={t + " icon"}
									width={16}
									height={16}
								/>
								{t[0]!.toUpperCase() + t.slice(1)}
								<Link href={getTagsLink(searchTags.filter(t_ => t !== t_))}>
									<Image
										className="ml-1 cursor-pointer hover:scale-105"
										src="/assets/images/close.png"
										alt="Filter"
										width={13}
										height={13}
									/>
								</Link>
							</div>
						))}
					</div>
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
								className={
									"font-montserrat-regular p-3 hover:shadow-md " +
									(page === i ? "bg-primary-400 text-white" : "bg-slate-100")
								}>
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
		</>
	)
}

export const getServerSideProps: GetServerSideProps<Props> = async context => {
	const page = "page" in context.query ? +context.query.page! : 1
	const searchTags = Array.isArray(context.query.tags)
		? context.query.tags
		: context.query.tags?.split(",") ?? []

	const projects = await prisma.$queryRaw<iProject[]>`
		WITH selected AS (
			SELECT *
			FROM (
				SELECT DISTINCT UNNEST(tags) AS tag
				FROM "Project"
			)
			${searchTags.length ? Prisma.sql`WHERE tag IN (${Prisma.join(searchTags)})` : Prisma.sql``}
		)
		(
			SELECT title, description, tags
			FROM "Project"
			${searchTags.length ? Prisma.sql`WHERE tags @> array(SELECT * FROM selected)` : Prisma.sql``}
			ORDER BY updated_at DESC
			OFFSET ${(page - 1) * 15}
			LIMIT 15
		)
		UNION
		(
			SELECT
				(
					SELECT COUNT(*)
					FROM "Project"
					${searchTags.length ? Prisma.sql`WHERE tags @> array(SELECT * FROM selected)` : Prisma.sql``}
				)::TEXT,
				'',
				ARRAY(
					SELECT DISTINCT UNNEST(tags)
					FROM "Project"
				)
		)
	`

	const { title: total, tags } = projects.pop()!

	return {
		props: {
			projects,
			tags,
			page,
			pages: Math.ceil(+total / 16),
		},
	}
}

export default Projects
