import { Metadata } from "next"
import dynamic from "next/dynamic"
import { PropsWithChildren } from "react"

import { SpeedInsights } from "@vercel/speed-insights/next"

import { Provider as PostHogProvider } from "./posthog"

import "@/style.scss"

const PostHogPageView = dynamic(() => import("./posthog"), { ssr: false })

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html lang="en">
			<body>
				<PostHogProvider>
					<PostHogPageView />
					<SpeedInsights />
					{children}
				</PostHogProvider>
			</body>
		</html>
	)
}

export const metadata: Metadata = {
	metadataBase: new URL("https://www.zectan.com/"),
	icons: {
		icon: "/favicon.ico",
		apple: "/favicon.ico",
	},
	manifest: "/manifest.json",
	title: "Zechariah Tan",
	description: "Zechariah's Portfolio Website",
	openGraph: {
		type: "profile",
		url: "https://www.zectan.com/",
		title: "Zechariah Tan",
		description: "Zechariah's Portfolio Website",
		images: ["/assets/images/profile.jpg"],
	},
}
