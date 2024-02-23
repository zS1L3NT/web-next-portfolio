export type Project = {
	title: string
	description: string
	tags: string[]
	updated: number
}

export default async (): Promise<Project[]> => {
	const time = new Date().toLocaleString("en-SG", {
		timeZone: "Asia/Singapore",
		day: "2-digit",
		month: "short",
		year: "numeric",
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
		fractionalSecondDigits: 3,
	})

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
						updated: new Date(p.pushed_at).getTime(),
					})),
				)),
		)
	} while (projects.length % 100 === 0 && projects.length !== 0)
	console.timeEnd(`caching at "${time}" took`)

	return projects
}
