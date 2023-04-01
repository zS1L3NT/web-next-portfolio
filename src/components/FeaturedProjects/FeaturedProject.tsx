import useSWR from "swr"

import fetcher from "../../utils/fetcher"
import style from "./FeaturedProject.module.scss"

const FeaturedProject = ({ name }: { name: string }) => {
	const { data, error } = useSWR(`https://api.github.com/repos/zS1L3NT/${name}`, fetcher)

	return (
		<div
			className={
				style.featuredProject +
				" container flex flex-col items-center sm:gap-4 md:gap-8 lg:gap-12 lg:h-72 lg:flex-row"
			}>
			<img
				className="sm:w-full md:w-full lg:w-fit lg:h-72"
				src={`https://res.cloudinary.com/zs1l3nt/image/upload/repositories/${name}.png`}
				alt=""
			/>
			<div className="flex flex-col justify-center flex-1 xs:px-2 xs:py-4 sm:p-4 lg:p-0">
				<h1 className="font-montserrat-bold xs:text-xl sm:text-2xl lg:text-3xl">{name}</h1>
				<div className="flex flex-wrap gap-x-3 gap-y-1 xs:mb-4 sm:mb-5 lg:mb-6">
					{data?.topics?.sort()?.map((t: any) => (
						<p
							key={t}
							className="cursor-pointer font-montserrat-regular text-secondary-400 xs:text-sm sm:text-base lg:text-lg hover:underline">
							{t}
						</p>
					))}
				</div>
				<p className="xs:text-sm sm:text-base lg:text-lg font-montserrat-regular">
					{data?.description}
				</p>
			</div>
		</div>
	)
}

export default FeaturedProject
