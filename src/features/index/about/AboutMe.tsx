import Image from "next/image"

import globals from "../../../globals.module.scss"

const AboutMe = ({}: {}) => {
	return (
		<section className="w-full bg-white">
			<h1 className={globals.heading}>About Me</h1>
			<div className="container flex flex-col mx-auto xs:gap-8 sm:gap-12 lg:gap-16 xs:my-6 sm:my-9 md:my-14 lg:flex-row">
				<Image
					className="m-auto rounded-full xs:w-40 xs:h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64"
					src="/assets/images/profile.jpg"
					alt="Profile Picture"
					width={512}
					height={512}
				/>
				<div className="flex flex-col gap-4 flex-2 xs:px-6 sm:px-10 lg:px-0 font-montserrat-regular xs:text-sm md:text-lg">
					<p>
						Hello! My name is Zechariah, and I am a React, TypeScript and Rust Developer
						from Singapore. Building enjoy doing Full-Stack Web Development, App
						Development and solving programming problems. I really enjoy taking on
						side-projects that I know I can definitely learn from or help me fix real
						life issues that I encounter.
					</p>
					<p>
						Currently, I am a CSIT Diploma Scholar in Temasek Polytechnic (TP),
						Information Technology, Year 3. In TP, I am a World Skills Web Technologies
						competitor, so I often have to go far beyond my school curriculum to learn
						other technologies and frameworks to be competent in my skill trade.
					</p>
					<p>
						Outside schoolwork, I am usually only either watching KDramas or working on
						a new side project that I have in mind. Most of my side projects are build
						using TypeScript or Rust, but I also do enjoy trying out new technologies in
						the web development space. I wouldn't mind doing mobile app development
						using Flutter, that is if I find the project interesting.
					</p>
				</div>
			</div>
		</section>
	)
}

export default AboutMe
