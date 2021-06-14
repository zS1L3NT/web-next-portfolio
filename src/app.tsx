import React, { useEffect, useState } from "react"
import "./app.scss"
import main from "./assets/images/main.jpg"
import Loader from "./components/Loader/Loader"
import Animator from "./components/Animator/Animator"
import { Redirect, Route, Switch } from "react-router-dom"

export default function App() {
	const [animation, setAnimation] = useState<string[]>([])

	useEffect(() => {
		Animator("image-scale", 0, 2000, setAnimation)
		Animator("image-radius", 2000, 1000, setAnimation)
		Animator("name", 3000, 1000, setAnimation)
		Animator("materialize", 3000, 1000, setAnimation)
		Animator("redirecting", 4000, 1000, setAnimation)
		Animator("materialize-radius", 4000, 1000, setAnimation)
		Animator("loading", 5000, 2000, setAnimation)
		setTimeout(() => {
			window.location.href = "https://www.github.com/zS1L3NT"
		}, 8000)
	}, [])

	return (
		<Switch>
			<Route exact path={"/"}>
				<main>
					<div className={`profile ${animation.join(" ")}`}>
						<img src={main} alt={"Profile"} className={`profile__image ${animation.join(" ")}`} />
						<h1 className={`profile__name ${animation.join(" ")}`}>Zechariah Tan</h1>
						<h3 className={`profile__redirecting ${animation.join(" ")}`}>Redirecting to GitHub...</h3>
						<Loader className={`profile__loader ${animation.join(" ")}`} />
					</div>
				</main>
			</Route>
			<Route exact path={"*"}>
				<Redirect to={"/"} />
			</Route>
		</Switch>
	)

}