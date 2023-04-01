import globals from "../../../globals.module.scss"
import Project from "./Project"

const Featured = ({}: {}) => {
	return (
		<section className="w-100">
			<h1 className={globals.heading}>Featured Projects</h1>
			<div className="container flex flex-col mx-auto xs:gap-4 sm:gap-8 lg:gap-16 xs:px-6 sm:px-10 lg:px-0 xs:my-6 sm:my-9 md:my-14">
				<Project name="soundroid-v2" />
				<Project name="web-formby" />
				<Project name="rs-tauri-chess" />
			</div>
		</section>
	)
}

export default Featured
