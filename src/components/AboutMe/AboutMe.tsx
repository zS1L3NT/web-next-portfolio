const AboutMe = ({}: {}) => {
	return (
		<section className="w-full h-full bg-white">
			<h1 className="mx-auto xs:text-3xl sm:text-4xl lg:text-5xl xs:pt-6 sm:pt-9 md:pt-12 w-fit font-montserrat-bold">
				About Me
			</h1>
			<div className="container flex flex-col mx-auto md:py-14 xs:px-8 xs:py-6 sm:px-6 sm:py-9 md:px-4 lg:flex-row">
				<div className="flex items-start justify-center flex-1 xs:mb-6 sm:mb-9 md:mb-12 lg:mb-0 lg:items-center">
					<div className="relative xs:w-40 xs:h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64">
						<img className="rounded-full" src="/assets/images/profile.jpg" />
					</div>
				</div>
				<div className="flex-2">
					<p className="font-montserrat-regular xs:text-sm md:text-lg">
						<span className="block mb-4">
							Hello! My name is Zechariah, and I am a React, TypeScript and Rust
							Developer from Singapore. Building enjoy doing Full-Stack Web
							Development, App Development and solving programming problems. I really
							enjoy taking on side-projects that I know I can definitely learn from or
							help me fix real life issues that I encounter.
						</span>
						<span className="block">
							Currently, I am a CSIT Diploma Scholar in Temasek Polytechnic (TP),
							Information Technology, Year 3. In TP, I am a World Skills Web
							Technologies competitor, so I often have to go far beyond my school
							curriculum to learn other technologies and frameworks to be competent in
							my skill trade.
						</span>
					</p>
				</div>
			</div>
		</section>
	)
}

export default AboutMe
