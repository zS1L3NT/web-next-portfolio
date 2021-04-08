import React, { useEffect, useState, useRef, useCallback } from "react"
import AOS from "aos"
import Blur64 from "../blur64.json"

export default function About() {
	const [scroll, SETscroll] = useState(0)
	const [margin, SETmargin] = useState(0)
	const bio = useRef(null)
	const icon = (name, producer, color) => (
		<img
			className="lang"
			src={`https://img.icons8.com/${producer || "color"}/64/${
				color || "000000"
			}/${name}.png`}
			alt={name}
			data-aos="fade-down-right"
			data-aos-delay="200"
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
				return
			}
		})
	}, [])

	const toAchievements = () => {
		document.getElementsByClassName("menu-btn")[0].click()
		setTimeout(() => {
			document.getElementById("achievements_btn").click()
		}, 1000)
	}

	const change_scroll = () => SETscroll(window.scrollY)
	const change_margin = () => {
		let height_in_string = getComputedStyle(bio.current).height
		let height_in_float = parseFloat(height_in_string.slice(0, -2))
		SETmargin(height_in_float - 256)
	}

	const change_both = useCallback(() => {
		change_scroll()
		change_margin()
	}, [])

	useEffect(() => {
		window.addEventListener("scroll", change_both)
		window.addEventListener("resize", change_margin)
		change_both()
		return () => {
			window.removeEventListener("scroll", change_both)
			window.removeEventListener("resize", change_margin)
		}
	}, [change_both])

	return (
		<main id="about">
			<h1 className="lg-heading">
				About
				<span className="text-secondary">Me</span>
			</h1>
			<h2 className="sm-heading">
				Let me tell you a few things about me...
			</h2>
			<div className="about-info">
				<img
					data-src="img/portrait.jpg"
					src={Blur64["portait"]}
					alt="Profile"
					id="bio-image"
					className="async-image"
					style={{ marginTop: scroll <= margin ? scroll : margin }}
				/>

				<div className="bio" ref={bio}>
					<h3 className="text-secondary">About Me</h3>
					<p data-aos="fade-up" style={{ marginBottom: 0 }}>
						I am a programmer who is passionate about Web Design and
						Development. I have build two websites with the MERN
						(MongoDB, ExpressJS, ReactJS and NodeJS) Stack. I aim to
						familiarize myself with many web technologies so as to
						increase my spectrum of knowledge.
					</p>
					<p data-aos="fade-down">
						I am working at a start-up official registered company
						called Zoomcek at{" "}
						<a
							href="http://www.zoomcek.com"
							target="_blank"
							rel="noopener noreferrer">
							zoomcek.com
						</a>{" "}
						as their CTO (Chief Technology Officer). I am tasked to
						build their website from scratch. I have a
						recommendation letter from the person who hired me. Go
						under{" "}
						<button onClick={toAchievements}>Achievements</button>{" "}
						to view this. View our{" "}
						<a
							href="docs/company.pdf"
							target="_blank"
							rel="noopener noreferrer">
							company's official registration documents
						</a>{" "}
						for proof that we are a real company
					</p>
					<p
						data-aos="zoom-in-down"
						style={{ marginBottom: "0.5rem" }}>
						I have three major plans for my future career.
					</p>
					<ol style={{ marginTop: "0.5rem" }}>
						<li data-aos="fade-right">
							To work at Google and help them continue making
							amazing web applications that feel like Native
							applications
						</li>
						<li data-aos="fade-right">
							To work with Microsoft's TypeScript team with
							building and developing Typescript so that one day
							it will be directly supported by browsers
						</li>
						<li data-aos="fade-right">
							To work with Facebook's React Development team to
							help React newbies have an easier time learning
							because of its learning curve.
						</li>
					</ol>

					<h3 className="text-secondary">What I have accomplished</h3>
					<div className="accomplishments">
						<p data-aos="fade-up" style={{ marginBottom: 0 }}>
							<b>Leadership roles in class:</b>
						</p>
						<ul>
							<li data-aos="zoom-in">
								I have been the IT Captain of my class since sec
								1.
							</li>
							<li data-aos="zoom-in">
								This year, I am the Vice-Chairman.
							</li>
						</ul>
						<p data-aos="fade-up" style={{ marginBottom: 0 }}>
							<b>Certificates related to Academics:</b>
						</p>
						<ul>
							<li data-aos="fade-left">Good Progress Award</li>
							<li data-aos="fade-left">
								Certificate Of Academic Achievement
							</li>
						</ul>
						<p data-aos="fade-up" style={{ marginBottom: 0 }}>
							<b>Other Certificates:</b>
						</p>
						<ul>
							<li data-aos="fade-down-right">
								National Youth Achievement Award (Silver)
							</li>
							<li data-aos="fade-down-right">
								Young Engineer Award (Silver)
							</li>
							<li data-aos="fade-down-right">
								Underwater Robotics Olympiad UWRC
								(Participation)
							</li>
							<li data-aos="fade-down-right">
								Robotics IDE Sprint (Participation)
							</li>
							<li data-aos="fade-down-right">
								National Robotics Competition NRC
								(Participation)
							</li>
						</ul>
						<p data-aos="fade-up" style={{ marginBottom: 0 }}>
							<b>VIA and School Events</b>
						</p>
						<ul>
							<li data-aos="fade-up-left">Beach Cleaning (6h)</li>
							<li data-aos="fade-up-left">Buddy Reading (32h)</li>
							<li data-aos="fade-up-left">
								Zero Waste Movement (6h)
							</li>
						</ul>
					</div>
				</div>
				<div className="langs">
					<h2 className="langs-title">
						Technologies I work well with:
					</h2>
					<div className="lang-list">
						{icon("python")}
						{icon("c-plus-plus-logo")}
						{icon("java-coffee-cup-logo")}
						{icon("html-5")}
						{icon("css3")}
						{icon("sass")}
						{icon("bootstrap")}
						{icon("javascript-logo-1")}
						{icon("typescript")}
						{icon("node-js", "windows", "4CAF50")}
						{icon("react-native", "color", "53C1DE")}
						{icon("redux")}
						{icon("npm")}
						{icon("yarn-logo", "windows", "2C8EBB")}
						{icon("git")}
						{icon("mongodb")}
						{icon("mysql-logo", "ios", "00758F")}
						{icon("php-logo", "ios-filled", "8F9ED1")}
					</div>
				</div>
			</div>
		</main>
	)
}
