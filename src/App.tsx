import AboutMe from "./components/AboutMe/AboutMe"
import firebaseApp from "./firebaseApp"
import Landing from "./components/Landing/Landing"
import { collection, doc, getDoc, getFirestore } from "firebase/firestore"
import { useEffect, useState } from "react"

const App = () => {
	const [paragraphs, setParagraphs] = useState<string[]>([])

	useEffect(() => {
		const firestore = getFirestore(firebaseApp)
		const collRef = collection(firestore, "web-react-portfolio")
		const docRef = doc(collRef, "about-me")
		getDoc(docRef)
			.then(doc => {
				if (doc.exists()) {
					setParagraphs(doc.data().paragraphs)
				}
			})
			.catch(console.error)
	}, [])

	return (
		<>
			<Landing />
			<AboutMe paragraphs={paragraphs} />
		</>
	)
}

export default App
