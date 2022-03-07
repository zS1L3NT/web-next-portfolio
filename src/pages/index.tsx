import AboutMe from "../components/AboutMe/AboutMe"
import Landing from "../components/Landing/Landing"
import { collection, doc, getDoc } from "firebase/firestore"
import { firestore } from "../firebase"
import { GetStaticProps, NextPage } from "next"
import { StrictMode } from "react"

interface Props {
	"about-me": {
		paragraphs: string[]
	}
}

const Home: NextPage<Props> = (props: Props) => {
	return (
		<StrictMode>
			<Landing />
			<AboutMe about-me={props["about-me"]} />
		</StrictMode>
	)
}

export const getStaticProps: GetStaticProps<Props> = async () => {
	const dataRef = collection(firestore, process.env.FIREBASE__COLLECTION)

	return {
		props: {
			"about-me": await (await getDoc(doc(dataRef, "about-me"))).data()
		} as Props
	}
}

export default Home
