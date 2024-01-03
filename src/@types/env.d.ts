declare module NodeJS {
	interface ProcessEnv {
		readonly NEXT_PUBLIC_POSTHOG_KEY: string
		readonly NEXT_PUBLIC_POSTHOG_HOST: string
	}
}
