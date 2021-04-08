import React, { useState } from "react"
import { useHistory } from "react-router-dom"

export default function Navbar() {
	const [show, SETshow] = useState(false)
	const history = useHistory()

	const redir = href => {
		history.push(href)
		SETshow(!show)
	}

	const links = [
		{
			href: "/",
			html: "Home"
		},
		{
			href: "/about",
			html: "About me"
		},
		{
			href: "/projects",
			html: "My Projects"
		},
		{
			href: "/achievements",
			html: "Achievements"
		}
	]

	return (
		<header>
			<div
				className={"menu-btn" + [show ? " close" : ""]}
				onClick={() => SETshow(!show)}>
				<div className="btn-line"></div>
				<div className="btn-line"></div>
				<div className="btn-line"></div>
			</div>

			<nav className={"menu" + [show ? " show" : ""]}>
				<div className={"menu-branding" + [show ? " show" : ""]}>
					<div className="portrait"></div>
				</div>
				<ul className={"menu-nav" + [show ? " show" : ""]}>
					{links.map(link => (
						<li
							key={link.href}
							className={
								"nav-item" +
								[show ? " show" : ""] +
								[
									window.location.pathname === link.href
										? " current"
										: ""
								]
							}>
							<button
								className="nav-link"
								id={link.href.slice(1) + "_btn"}
								onClick={() => redir(link.href)}>
								{link.html}
							</button>
						</li>
					))}
				</ul>
			</nav>
		</header>
	)
}
