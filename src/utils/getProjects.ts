import { cache } from "react"

const getProjects = cache(async () => {
	const time = Date.now()
	console.time(`getProjects-${time}`)

	const projects = []

	do {
		projects.push(
			...(await fetch(
				`https://api.github.com/users/zS1L3NT/repos?page=${Math.floor(projects.length / 100) + 1}&per_page=100`,
				{ headers: { Authorization: `token ${process.env.GITHUB_TOKEN}` } },
			).then(res => res.json())),
		)
	} while (projects.length % 100 === 0 && projects.length !== 0)

	const rest = await Promise.all(
		projects.map(async p => {
			let readme = null
			try {
				readme = await fetch(
					`https://raw.githubusercontent.com/zS1L3NT/${p.name}/main/README.md`,
					{ headers: { Authorization: `token ${process.env.GITHUB_TOKEN}` } },
				).then(res => res.text())
			} catch {
				/* */
			}

			return {
				title: p.name,
				description: p.description || "",
				homepage: p.homepage || "",
				tags: (p.topics || []) as string[],
				readme: readme ? readme.indexOf("![License]") > -1 : false,
			}
		}),
	)

	console.timeEnd(`getProjects-${time}`)
	return rest
})

export default getProjects
