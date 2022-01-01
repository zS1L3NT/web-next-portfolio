import Head from "next/head"
import { AppProps } from "next/app"
import "tailwindcss/tailwind.css"
import "../styles/globals.scss"

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<Head>
				<title>Zechariah Tan</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link rel="icon" href="favicon.ico" />
				<link rel="apple-touch-icon" href="favicon.ico"></link>
				<link rel="manifest" href="manifest.json" />
				<meta name="theme-color" content="#000000" />
				<meta name="title" content="Zechariah Tan" />
				<meta name="description" content="Zechariah's Portfolio Website" />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="http://www.zectan.com/" />
				<meta property="og:title" content="Zechariah Tan" />
				<meta property="og:description" content="Zechariah's Portfolio Website" />
				<meta property="og:image" content="http://www.zectan.com/assets/profile.jpg" />
			</Head>
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
