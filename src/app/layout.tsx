import { Metadata } from "next"
import { PropsWithChildren } from "react"

import "@/style.scss"

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

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	)
}
