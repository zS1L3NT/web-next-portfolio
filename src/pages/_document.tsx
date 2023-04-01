import { Head, Html, Main, NextScript } from "next/document"

const _Document = () => {
	return (
		<Html lang="en">
			<Head>
				<meta charSet="UTF-8" />
				<link
					rel="icon"
					href="/favicon.ico"
				/>
				<link
					rel="apple-touch-icon"
					href="/favicon.ico"
				/>
				<link
					rel="manifest"
					href="/manifest.json"
				/>
				<meta
					name="theme-color"
					content="#000000"
				/>
				<meta
					name="title"
					content="Zechariah Tan"
				/>
				<meta
					name="description"
					content="Zechariah's Portfolio Website"
				/>
				<meta
					property="og:type"
					content="website"
				/>
				<meta
					property="og:url"
					content="http://www.zectan.com/"
				/>
				<meta
					property="og:title"
					content="Zechariah Tan"
				/>
				<meta
					property="og:description"
					content="Zechariah's Portfolio Website"
				/>
				<meta
					property="og:image"
					content="http://www.zectan.com/assets/profile.jpg"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}

export default _Document