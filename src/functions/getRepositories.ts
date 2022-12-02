import { Repository } from "../@types/types"
import octokit from "../octokit"

export default async (): Promise<Repository[]> => {
	const repositories: Repository[] = []
	let page = 1

	while (true) {
		const { data } = await octokit.request("GET /user/repos", {
			affiliation: "owner",
			per_page: 100,
			page
		})

		repositories.push(...data)
		if (data.length == 100) {
			page++
		} else {
			break
		}
	}

	return repositories.filter(r => !r.fork)
}
