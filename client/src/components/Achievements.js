import React, { useEffect } from "react"
import AOS from "aos"
import Blur64 from "../blur64.json"

export default function Achievements() {
	const recommendations = ["COE", "FT_1", "FT_2"]
	const awards = [
		"Academic Achievement",
		"Good Progress Award",
		"Young Engineer Silver",
		"NRC",
		"UWRC",
		"IDE Sprint"
	]
	const relevant = [
		"PH MongoDB New",
		"PH ExpressJS New",
		"PH React Development",
		"PH NodeJS New",
		"PH Building a Website",
		"PH HTML",
		"PH CSS",
		"PH JavaScript",
		"PH HTML Advanced",
		"PH JavaScript Advanced",
		"PH JQuery New",
		"PH PHP",
		"PH SQL",
		"SL HTML",
		"SL CSS",
		"SL JavaScript",
		"SL React",
		"SL JQuery",
		"SL PHP",
		"SL SQL"
	]
	const general = [
		"PH Java",
		"PH Python",
		"PH C++",
		"PH Hacking",
		"SL Java",
		"SL Python",
		"SL C++",
		"PH Hacking Advanced",
		"PH Cyber Security",
		"PH Java Advanced"
	]
	const report = [1, 2, 3, 4]

	const getMinifiedFile = name => {
		if (typeof name === "string") {
			if (name.startsWith("PH")) {
				if (name.endsWith("New")) {
					return Blur64["PH New"]
				}
				return Blur64["PH Old"]
			}
			return Blur64["SL"]
		}
	}

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
				return
			}
		})
	}, [])

	return (
		<main id="achievements">
			<h1 className="lg-heading">
				My
				<div id="clear"></div>
				<span className="text-secondary">Achievements</span>
			</h1>
			<h2 className="sm-heading">
				My programming recommendation letters and online coding
				e-certificates which signify that I have a good understanding of
				the language and the modules taught
			</h2>
			<section id="recommendation">
				<h2 id="ach-section">Recommendation Letters:</h2>
				<br />
				<div id="letters">
					{recommendations.map(rec => (
						<a
							href={`docs/awards/Recommendation ${rec}.jpg`}
							target="_blank"
							rel="noopener noreferrer"
							key={rec}
							data-aos="fade-up">
							<img
								className="recommendation async-image"
								data-src={`docs/awards/Recommendation ${rec}.jpg`}
								src={Blur64[`Recommendation ${rec}`]}
								alt={`recommendation ${rec}`}
							/>
						</a>
					))}
				</div>
			</section>
			<section id="awards">
				<h2 id="ach-section">Awards:</h2>
				<br />
				<div id="letters">
					{awards.map(award => (
						<a
							href={`docs/awards/${award}.jpg`}
							target="_blank"
							rel="noopener noreferrer"
							key={award}
							data-aos="fade-right">
							<img
								className="recommendation async-image"
								data-src={`docs/awards/${award}.jpg`}
								src={Blur64[award]}
								alt={award}
							/>
						</a>
					))}
				</div>
			</section>
			<section id="report">
				<h2 id="ach-section">Report Card History:</h2>
				<div id="certs">
					{report.map(item => (
						<div className="cert" key={item} data-aos="fade-up">
							<a
								href={`img/sec_${item}_report.jpg`}
								target="_blank"
								rel="noopener noreferrer">
								<img
									src={Blur64.report}
									data-src={`img/sec_${item}_report.jpg`}
									alt={item}
									className="async-image"
								/>
							</a>
							<p>
								<b>
									Secondary {item} Report Card
								</b>
							</p>
						</div>
					))}
				</div>
			</section>
			<section id="web-development">
				<h2 id="ach-section">Web Development:</h2>
				<div id="certs">
					{relevant.map(item => (
						<div className="cert" key={item} data-aos="fade-up">
							<a
								href={`docs/relevant/${item}.jpg`}
								target="_blank"
								rel="noopener noreferrer">
								<img
									src={getMinifiedFile(item)}
									data-src={`docs/relevant/${item}.jpg`}
									alt={item}
									className="async-image"
								/>
							</a>
							<p>
								<b>
									{item[0] === "P"
										? "Programming Hub"
										: "SoloLearn"}{" "}
									Certification Name:
								</b>
								<br />
								{item.slice(-3) === "New" ? item.slice(3, -4) : item.slice(3)}
							</p>
						</div>
					))}
				</div>
			</section>
			<section id="general-programming">
				<h2 id="ach-section">General Programming:</h2>
				<div id="certs">
					{general.map(item => (
						<div className="cert" key={item} data-aos="fade-up">
							<a
								href={`docs/general/${item}.jpg`}
								target="_blank"
								rel="noopener noreferrer">
								<img
									src={getMinifiedFile(item)}
									data-src={`docs/general/${item}.jpg`}
									alt={item}
									className="async-image"
								/>
							</a>
							<p>
								<b>
									{item[0] === "P"
										? "Programming Hub"
										: "SoloLearn"}{" "}
									Certification Name:
								</b>
								<br />
								{item.slice(-3) === "New" ? item.slice(3, -4) : item.slice(3)}
							</p>
						</div>
					))}
				</div>
			</section>
		</main>
	)
}
