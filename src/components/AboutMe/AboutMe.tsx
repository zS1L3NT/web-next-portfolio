import Image from "next/image"

interface Props {
	"about-me": {
		paragraphs: string[]
	}
}

const AboutMe: React.FC<Props> = (props: Props) => {
	const { paragraphs } = props["about-me"]

	return (
		<section className="w-full h-full bg-white">
			<h1 className="xs:pt-4 sm:pt-8 md:pt-12 w-fit mx-auto font-montserrat-bold text-5xl">
				About Me
			</h1>
			<div className="xs:px-8 xs:py-6 sm:px-6 sm:py-10 md:px-4 lg:flex-row mx-auto py-16 container flex flex-col">
				<div className="lg:mb-0 lg:items-center flex-1 flex justify-center items-start mb-12">
					<div className="sm:w-56 sm:h-56 lg:w-64 lg:h-64 relative w-52 h-52">
						<Image
							className="rounded-full"
							src="/assets/images/profile.jpg"
							layout="fill"
						/>
					</div>
				</div>
				<div className="flex-2">
					<p className="font-montserrat-regular xs:text-sm md:text-lg">
						<span className="block mb-4">{paragraphs[0]}</span>
						<span className="block mb-4">{paragraphs[1]}</span>
						<span className="block">{paragraphs[2]}</span>
					</p>
				</div>
			</div>
		</section>
	)
}

export default AboutMe
