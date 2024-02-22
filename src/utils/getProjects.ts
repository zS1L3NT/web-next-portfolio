export default async () => {
	const time = Date.now()
	console.log("fetching projects...")

	const repositories = []
	do {
		repositories.push(
			...(await fetch(
				`https://api.github.com/users/zS1L3NT/repos?page=${Math.floor(repositories.length / 100) + 1}&per_page=100`,
				{
					headers: { Authorization: `token ${process.env.GITHUB_TOKEN}` },
					next: { tags: ["cached"] },
				},
			).then(res => res.json())),
		)
	} while (repositories.length % 100 === 0 && repositories.length !== 0)

	const projects = await Promise.all(
		repositories.map(async p => {
			let readme = null
			try {
				readme = await fetch(
					`https://raw.githubusercontent.com/zS1L3NT/${p.name}/main/README.md`,
					{
						headers: { Authorization: `token ${process.env.GITHUB_TOKEN}` },
						next: { tags: ["cached"] },
					},
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

	console.log(`fetched projects in ${Date.now() - time}ms`)
	return projects
}
