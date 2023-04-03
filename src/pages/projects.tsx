import { GetServerSideProps } from "next"
import Head from "next/head"
import Link from "next/link"

import Project from "@/features/projects/Project"
import { iProject } from "@/utils/scraper"
import { Octokit as Github } from "@octokit/core"

type Props = {
	projects: iProject[]
	page: number
	pages: number
}

const Projects = ({ projects, page, pages }: Props) => {
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
				<div className="container grid mx-auto xs:gap-8 sm:gap-10 lg:gap-12 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xs:my-6 sm:my-9 md:my-14">
					{projects.map(project => (
						<Project
							key={project.name}
							project={project}
						/>
					))}
				</div>
				<div className="flex justify-center gap-1">
					{page === 1 ? null : (
						<Link
							href={`/projects?page=` + (page - 1)}
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
								href={`/projects?page=` + i}
								className={
									"font-montserrat-regular p-3 hover:shadow-md " +
									(page === i ? "bg-primary-400 text-white" : "bg-slate-100")
								}>
								{i}
							</Link>
						))}

					{page === pages ? null : (
						<Link
							href={`/projects?page=` + (page + 1)}
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
	const github = new Github({ auth: process.env.GITHUB_TOKEN })
	const page = "page" in context.query ? +context.query.page! : 1

	const pages = Math.ceil((await github.request("GET /user")).data.public_repos / 30)
	const projects = (
		await github.request("GET /user/repos", {
			type: "public",
			page,
			per_page: 30,
			sort: "pushed",
			direction: "desc",
			topic: "special"
		})
	).data
		.filter(r => !r.fork)
		.filter(r => r.owner.login === "zS1L3NT")
		.map(r => ({
			name: r.name,
			description: r.description ?? "",
			topics: r.topics ?? []
		}))

	return projects.length ? { props: { projects, page, pages } } : { notFound: true }
}

export default Projects
