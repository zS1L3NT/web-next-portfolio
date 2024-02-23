declare module NodeJS {
	interface ProcessEnv {
		readonly GITHUB_TOKEN: string
		readonly NEXT_PUBLIC_POSTHOG_KEY: string
		readonly NEXT_PUBLIC_POSTHOG_HOST: string
	}
}
