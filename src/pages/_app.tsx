import { AppProps } from "next/app"
import Head from "next/head"
import "tailwindcss/tailwind.css"
import "../styles/globals.scss"

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Zechariah Tan</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
