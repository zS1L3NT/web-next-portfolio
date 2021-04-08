import React, { useEffect } from "react"

export default function Index() {
	useEffect(() => {
		window.document.getElementsByTagName("body")[0].id = "bg-img"
		return () => {
			window.document.getElementsByTagName("body")[0].id = ""
		}
	}, [])

	const icon = (name, producer, color) => (
		<img
			className="lang"
			src={`https://img.icons8.com/${producer || "color"}/64/${
				color || "000000"
			}/${name}.png`}
			alt={name}
		/>
	)

	return (
		<main id="home">
			<h1 className="lg-heading">
				Zechariah
				<div id="clear"></div>
				<span className="text-secondary">Tan</span>
			</h1>
			<h2 className="sm-heading">Web Developer, Designer, Programmer and EAE Candidate</h2>
			<div className="icons">
				<a
					href="https://instagram.com/zec.har.iah"
					target="_blank"
					rel="noopener noreferrer">
					{icon("instagram-new", "fluent")}
				</a>
				<a
					href="https://github.com/zS1L3NT"
					target="_blank"
					rel="noopener noreferrer">
					{icon("github", "fluent")}
				</a>
			</div>
		</main>
	)
}
