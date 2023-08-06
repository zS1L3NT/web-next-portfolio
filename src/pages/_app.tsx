import type { AppProps } from "next/app"

import "@/style.scss"

const _App = ({ Component, pageProps }: AppProps) => {
	return <Component {...pageProps} />
}

export default _App
