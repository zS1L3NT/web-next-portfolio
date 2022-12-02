import { FullRepository } from "@@types/types"

import octokit from "../octokit"

export default async (id: string): Promise<FullRepository> => {
	const { data } = await octokit.request("GET /repos/{owner}/{repo}", {
		owner: "zS1L3NT",
		repo: id
	})

	if (data.fork) throw new Error("Cannot display forked repository")

	return data
}
