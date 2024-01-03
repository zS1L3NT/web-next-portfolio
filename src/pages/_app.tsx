import type { AppProps } from "next/app"
import { useRouter } from "next/router"
import posthog from "posthog-js"
import { PostHogProvider } from "posthog-js/react"
import { useEffect } from "react"

import "flowbite"
import "@/style.scss"

if (typeof window !== "undefined") {
	posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
		api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://app.posthog.com",
		loaded: posthog => {
			if (process.env.NODE_ENV === "development") posthog.debug()
		},
	})
}

const _App = ({ Component, pageProps }: AppProps) => {
	const router = useRouter()

	useEffect(() => {
		const handleRouteChange = () => posthog?.capture("$pageview")

		router.events.on("routeChangeComplete", handleRouteChange)
		return () => router.events.off("routeChangeComplete", handleRouteChange)
	}, [router.events])

	return (
		<PostHogProvider client={posthog}>
			<Component {...pageProps} />
		</PostHogProvider>
	)
}

export default _App
