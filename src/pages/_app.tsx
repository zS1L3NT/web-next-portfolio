import "tailwindcss/tailwind.css"
import "@styles/global.scss"

import { AppProps } from "next/app"

const App = ({ Component, pageProps }: AppProps) => {
	return <Component {...pageProps} />
}

export default App
