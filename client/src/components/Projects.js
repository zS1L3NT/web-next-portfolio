import React, { useEffect } from "react"
import AOS from "aos"
import Blur64 from "../blur64.json"
import Base64 from "../base64.json"

export default function Work() {

	const icon = (name, producer, color) => (
		<img
			className="lang"
			src={`https://img.icons8.com/${producer || "color"}/24/${
				color || "000000"
			}/${name}.png`}
			alt={name}
		/>
	)

	useEffect(() => {
		const objects = document.getElementsByClassName("async-image")
		const images = Array.from(objects)
		let count = 0

		images.forEach(item => {
			const img = new Image()
			img.src = item.dataset.src
			img.onload = () => {
				item.classList.remove("async-image")
				if (item.nodeName === "IMG") {
					item.src = item.dataset.src
				} else {
					item.style.backgroundImage = `url(${item.dataset.src})`
				}
				if (count === images.length) {
					// Last image
					AOS.refresh()
				}
			}
		})
	}, [])

	const projects = [
		{
			data: "chatbubble",
			href: "http://chat.bubblejs.com",
			img: (<img
					src={Base64["chatbubble"]}
					className="lang"
					width="24"
					height="24"
					alt="ChatBubble"
				/>),
			span: "ChatBubble [JavaScript MERN]"
		},
		{
			data: "cryptor",
			href: "https://github.com/zS1L3Nt/crypt",
			img: icon("github", "fluent"),
			span: "Cryptor [Python]"
		},
		{
			data: "interest",
			href: "https://github.com/zS1L3Nt/interest",
			img: icon("github", "fluent"),
			span: "Interest Calculator [C++]"
		},
		{
			data: "fxscript",
			href: "https://github.com/zS1L3Nt/fxscript",
			img: icon("github", "fluent"),
			span: "FXScript (In development...)"
		},
		{
			data: "zoomcek",
			href: "http://www.zoomcek.com",
			img: (<img
				src={Base64["zoomcek"]}
				width="24"
				height="24"
				alt="ChatBubble"
				style={{
					borderRadius: "50%"
				}}
			/>),
			span: "Zoomcek (In development...)"
		}
	]

	return (
		<main id="projects">
			<h1 className="lg-heading">
				My
				<span className="text-secondary">Projects</span>
			</h1>

			<h2 className="sm-heading">Check out some of my projects...</h2>
			<div className="projects">
				{projects.map(({ data, href, img, span }) => (
					<div
					key={data}
					data-aos="fade-up"
					className="item"
					title="Click link title for more info">
					<a
						href={`img/${data}.jpg`}
						target="_blank"
						rel="noopener noreferrer">
						<img
							className="project-img async-image"
							data-src={`img/${data}.jpg`}
							src={Blur64[data]}
							alt="icon"
						/>
					</a>
					<a
						href={href}
						className="btn-dark"
						target="_blank"
						rel="noopener noreferrer">
						{img}{" "}
						<span>{span}</span>
					</a>
				</div>
				))}
			</div>
		</main>
	)
}
