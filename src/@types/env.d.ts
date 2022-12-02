declare module NodeJS {
	interface ProcessEnv {
		readonly GITHUB_ACCESS_TOKEN: string
	}
}