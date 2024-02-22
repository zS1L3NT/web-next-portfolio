export type Project = {
	title: string
	description: string
	tags: string[]
}
export default async (): Promise<Project[]> => {
	const time = new Date().toLocaleString("en-SG")

	console.time(`caching at "${time}" took`)
	const projects = []
	do {
		projects.push(
			...(await fetch(
				`https://api.github.com/users/zS1L3NT/repos?page=${Math.floor(projects.length / 100) + 1}&per_page=100`,
				{
					headers: { Authorization: `token ${process.env.GITHUB_TOKEN}` },
					next: { tags: ["cached"] },
				},
			)
				.then(res => res.json())
				.then(projects =>
					projects.map((p: any) => ({
						title: p.name,
						description: p.description || "",
						tags: (p.topics || []) as string[],
					})),
				)),
		)
	} while (projects.length % 100 === 0 && projects.length !== 0)
	console.timeEnd(`caching at "${time}" took`)

	return projects
}
