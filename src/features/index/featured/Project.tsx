import useSWR from "swr"

import fetcher from "../../../utils/fetcher"
import style from "./Project.module.scss"

const Project = ({ name }: { name: string }) => {
	const { data, error } = useSWR(`https://api.github.com/repos/zS1L3NT/${name}`, fetcher)

	return (
		<div
			className={
				style.project +
				" container flex flex-col items-center sm:gap-4 md:gap-8 lg:gap-12 lg:h-72 lg:flex-row"
			}>
			<a href={"/projects/" + name}>
				<img
					className="sm:w-full md:w-full lg:w-fit lg:h-72"
					src={`https://res.cloudinary.com/zs1l3nt/image/upload/repositories/${name}.png`}
					alt=""
				/>
			</a>

			<div className="flex flex-col justify-center flex-1 xs:px-2 xs:py-4 sm:p-4 lg:p-0">
				<a
					href={"/projects/" + name}
					className="cursor-pointer hover:text-secondary-400 font-montserrat-bold xs:text-xl sm:text-2xl lg:text-3xl">
					{name}
				</a>
				<div className="flex flex-wrap gap-x-3 gap-y-1 xs:mb-4 sm:mb-5 lg:mb-6">
					{data?.topics?.sort()?.map((t: any) => (
						<a
							key={t}
							href={"/projects?topic=" + t}
							className="cursor-pointer font-montserrat-regular text-secondary-400 xs:text-sm sm:text-base lg:text-lg hover:underline">
							{t}
						</a>
					))}
				</div>
				<p className="xs:text-sm sm:text-base lg:text-lg font-montserrat-regular">
					{data?.description}
				</p>
			</div>
		</div>
	)
}

export default Project
