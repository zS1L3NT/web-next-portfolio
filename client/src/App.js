import "aos/dist/aos"
import AOS from "aos/dist/aos"
import "aos/dist/aos.css"
import "font-awesome/css/font-awesome.min.css"
import React, { useEffect } from "react"
import { Redirect, Route, Switch } from "react-router-dom"
import About from "./components/About"
import Achievements from "./components/Achievements"
import Index from "./components/Index"
import Navbar from "./components/Navbar"
import PNF from "./components/PNF"
import Projects from "./components/Projects"
import "./scss/main.scss"
AOS.init({
	duration: 1000,
	easing: "ease-out-back",
	delay: 100
})

function App() {
	useEffect(() => {
		document
			.querySelectorAll("img")
			.forEach(img => img.addEventListener("load", () => AOS.refresh()))
		document.getElementById("main-footer").style.display = "block"
	}, [])
	return (
		<>
			<Navbar />
			<Switch>
				<Route exact path="/">
					<Index />
				</Route>
				<Route exact path="/about">
					<About />
				</Route>
				<Route exact path="/projects">
					<Projects />
				</Route>
				<Route exact path="/achievements">
					<Achievements />
				</Route>
				<Route exact path="/defaultsite">
					<Redirect to="/" />
				</Route>
				<Route exact path="*">
					<PNF />
				</Route>
			</Switch>
		</>
	)
}

export default App
