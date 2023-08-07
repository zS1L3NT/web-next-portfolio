import Link from "next/link"

const ContactMe = () => {
	return (
		<section className="w-100">
			<div className="container flex flex-col items-center mx-auto xs:my-6 sm:my-9 md:my-14">
				<h1 className="w-fit font-montserrat-bold xs:text-md sm:text-lg lg:text-xl">
					Interested in working with me?
				</h1>
				<p className="mt-2 text-center xs:w-10/12 sm:w-8/12 lg:w-1/2 font-montserrat-regular xs:text-base sm:text-md lg:text-lg">
					If you have any questions for me, feel free to reach out to me via email!
					I&apos;ll get back to you as soon as I can :D
				</p>
				<Link
					href="mailto:dev@zectan.com"
					className="px-4 py-3 mt-8 text-white font-montserrat-regular hover:scale-105 hover:shadow-primary-400 bg-primary-400">
					Contact Me
				</Link>
			</div>
		</section>
	)
}

export default ContactMe
