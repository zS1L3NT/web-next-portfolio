import { Octokit } from "@octokit/core"

export default new Octokit({
	auth: process.env.GITHUB_ACCESS_TOKEN
})
