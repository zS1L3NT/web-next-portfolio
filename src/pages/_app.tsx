import type { AppProps } from "next/app"

import "flowbite"
import "@/style.scss"

const _App = ({ Component, pageProps }: AppProps) => {
	return <Component {...pageProps} />
}

export default _App
