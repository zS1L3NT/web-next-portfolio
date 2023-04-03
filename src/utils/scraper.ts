export type iProject = {
	name: string
	description: string
	topics: string[]
}

export default async (name: string): Promise<iProject> => {
	const html = await fetch("https://www.github.com/zS1L3NT/" + name).then(res => res.text())
	return {
		name,
		description: html.match(/<p class="f4 my-3">\n\s+(.+)/)?.[1] ?? "",
		topics: [...html.matchAll(/\/topics\/(.+?)"/g)]
			.map(i => i[1]!)
			.sort((a, b) => a.localeCompare(b))
	}
}
