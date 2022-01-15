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
			<h1 className="mx-auto xs:text-3xl sm:text-4xl lg:text-5xl xs:pt-6 sm:pt-9 md:pt-12 w-fit font-montserrat-bold">
				About Me
			</h1>
			<div className="container flex flex-col mx-auto md:py-14 xs:px-8 xs:py-6 sm:px-6 sm:py-9 md:px-4 lg:flex-row">
				<div className="flex items-start justify-center flex-1 xs:mb-6 sm:mb-9 md:mb-12 lg:mb-0 lg:items-center">
					<div className="relative xs:w-40 xs:h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64">
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
