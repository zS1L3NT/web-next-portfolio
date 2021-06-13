import React from "react"
import "./Loader.scss"

interface props {
	className?: string
}

export default function Loader(props: props) {
	return (
		<section className={`loader__bars ${props.className}`}>
			<div className="loader__bar"/>
			<div className="loader__bar"/>
			<div className="loader__bar"/>
			<div className="loader__bar"/>
			<div className="loader__bar"/>
			<div className="loader__bar"/>
			<div className="loader__bar"/>
		</section>
	)
}