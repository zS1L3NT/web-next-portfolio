import Image from "next/image"
import Link from "next/link"

import getProjects from "@/utils/getProjects"

import Featured from "./Featured"
import Footer from "./Footer"
import Landing from "./Landing"
import Other from "./Other"

export default async function Page() {
	const projects = await getProjects()

	return (
		<>
			<Landing />

			<main className="flex flex-col xs:my-8 sm:my-12 lg:my-16 xs:gap-8 sm:gap-12 lg:gap-16">
				<section className="w-full bg-white">
					<h1 className="mx-auto text-center xs:text-3xl sm:text-4xl lg:text-5xl w-fit font-montserrat-bold">
						About Me
					</h1>
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
								Hello! My name is Zechariah, and I am a React, TypeScript and Rust
								Developer from Singapore. I enjoy doing Full-Stack Web Development,
								App Development and solving programming problems. I really enjoy
								taking on side-projects that I know I can definitely learn from or
								help me fix real life issues that I encounter.
							</p>
							<p>
								Currently, I am a CSIT Diploma Scholar in Temasek Polytechnic (TP),
								Information Technology, Year 3. In TP, I am a World Skills Web
								Technologies competitor, so I often have to go far beyond my school
								curriculum to learn other technologies and frameworks to be
								competent in my skill trade.
							</p>
							<p>
								Outside schoolwork, I am usually only either watching KDramas or
								working on a new side project that I have in mind. Most of my side
								projects are build using TypeScript or Rust, but I also do enjoy
								trying out new technologies in the web development space. I
								wouldn&apos;t mind doing mobile app development using Flutter, that
								is if I find the project interesting.
							</p>
						</div>
					</div>
				</section>

				<Featured
					projects={projects.filter(p =>
						["soundroid-v2", "web-formby", "rs-tauri-chess"].includes(p.title),
					)}
				/>

				<Other
					projects={projects.filter(p =>
						[
							"ts-discord-soundroid",
							"web-monetary",
							"deskpower",
							"web-react-statify",
							"ts-npm-ytmusic-api",
							"ts-discord-reminder",
						].includes(p.title),
					)}
				/>

				<section className="w-100">
					<div className="container flex flex-col items-center mx-auto xs:my-6 sm:my-9 md:my-14">
						<h1 className="w-fit font-montserrat-bold xs:text-md sm:text-lg lg:text-xl">
							Interested in working with me?
						</h1>
						<p className="mt-2 text-center xs:w-10/12 sm:w-8/12 lg:w-1/2 font-montserrat-regular xs:text-base sm:text-md lg:text-lg">
							If you have any questions for me, feel free to reach out to me via
							email! I&apos;ll get back to you as soon as I can :D
						</p>
						<Link
							href="mailto:dev@zectan.com"
							className="px-4 py-3 mt-8 text-white font-montserrat-regular hover:scale-105 hover:shadow-primary-400 bg-primary-400">
							Contact Me
						</Link>
					</div>
				</section>

				<Footer />
			</main>
		</>
	)
}
