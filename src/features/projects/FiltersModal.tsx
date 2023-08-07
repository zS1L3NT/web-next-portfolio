import { Modal } from "flowbite"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

import { HIDDEN_TAGS, PNG_TAGS } from "@/constants"

export default function FiltersModal({
	tags,
	searchTags,
	getTagsLink,
}: {
	tags: string[]
	searchTags: string[]
	getTagsLink: (tags: string[]) => string
}) {
	const [selectedTags, setSelectedTags] = useState<string[]>(searchTags)

	useEffect(() => {
		setSelectedTags(searchTags)
	}, [searchTags])

	return (
		<div
			id="filters-modal"
			tabIndex={-1}
			aria-hidden="true"
			data-modal-backdrop="static"
			data-modal-placement="top-center"
			className="fixed top-0 left-0 right-0 z-50 hidden w-full h-full overflow-x-hidden overflow-y-auto xs:p-4 sm:p-6 lg:p-8 backdrop-brightness-75 backdrop-blur-sm md:inset-0">
			<div className="relative w-full h-full max-w-3xl">
				<div className="flex flex-col h-full shadow-md xs:p-4 sm:p-5 lg:p-6 bg-slate-200">
					<h1 className="xs:text-xl sm:text-2xl lg:text-3xl w-fit font-montserrat-bold">
						Filters
					</h1>
					<div className="grid flex-1 overflow-y-scroll xs:gap-2 sm:gap-3 lg:gap-3 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xs:mt-4 sm:mt-6 lg:mt-8">
						{tags
							.filter(t => !HIDDEN_TAGS.includes(t))
							.sort()
							.map(t => (
								<label
									key={t}
									htmlFor={t + "-checkbox"}
									className="flex items-center cursor-pointer">
									<input
										id={t + "-checkbox"}
										type="checkbox"
										checked={selectedTags.includes(t)}
										onChange={() =>
											setSelectedTags(st =>
												st.includes(t)
													? st.filter(tag => tag !== t)
													: [...st, t],
											)
										}
										className="w-4 h-4 rounded accent-primary-400"
									/>
									<Image
										key={t}
										title={t[0]!.toUpperCase() + t.substring(1)}
										className="inline-block mx-2 xs:scale-75 sm:scale-90"
										src={`https://res.cloudinary.com/zs1l3nt/image/upload/icons/${t}.${
											PNG_TAGS.includes(t) ? "png" : "svg"
										}`}
										alt={t + " icon"}
										width={25}
										height={25}
									/>
									<p className="xs:text-sm sm:text-base lg:text-md font-montserrat-regular">
										{t[0]!.toUpperCase() + t.slice(1)}
									</p>
								</label>
							))}
					</div>
					<div className="flex justify-end gap-4 px-4 mt-6">
						<button
							onClick={() =>
								new Modal(document.getElementById("filters-modal")).hide()
							}
							className="block px-3 py-2 border text-primary-400 xs:text-sm sm:text-base lg:text-md font-montserrat-regular hover:scale-105 border-primary-400">
							Cancel
						</button>
						<Link
							href={getTagsLink(selectedTags)}
							onClick={() =>
								new Modal(document.getElementById("filters-modal")).hide()
							}
							className="block px-3 py-2 text-white xs:text-sm sm:text-base lg:text-md font-montserrat-regular hover:scale-105 hover:shadow-primary-400 bg-primary-400">
							Save
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
