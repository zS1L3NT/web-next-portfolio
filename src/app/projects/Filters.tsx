"use client"

import { Modal } from "flowbite"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useMemo, useState } from "react"

import { HIDDEN_TAGS, TAG_CATEGORIES } from "@/constants"

export default function Filters({
	searchParams,
	tags,
}: {
	searchParams: Record<string, string>
	tags: string[]
}) {
	const search = useMemo(() => new URLSearchParams(searchParams), [searchParams])
	const searchTags = useMemo(
		() => (search.get("tags")?.split(",") ?? []).filter(t => tags.includes(t)),
		[search, tags],
	)

	const [selectedTags, setSelectedTags] = useState<string[]>(searchTags)

	useEffect(() => {
		setSelectedTags(searchTags)
	}, [searchTags])

	const getTagsLink = (tags: string[]) => {
		const newSearch = new URLSearchParams(search.toString())

		if (tags.length) {
			newSearch.set("tags", tags.join(","))
		} else {
			newSearch.delete("tags")
		}
		newSearch.delete("page")

		const newSearchString = newSearch.toString().replace(/%2C/g, ",")
		return "/projects" + (newSearchString.length ? "?" + newSearchString : "")
	}

	const OTHER_TAGS = tags.filter(
		t =>
			!TAG_CATEGORIES.map(c => c[1])
				.flat()
				.includes(t) && !HIDDEN_TAGS.includes(t),
	)

	return (
		<div className="flex xs:gap-2 sm:gap-3 lg:gap-4 xs:mb-8 sm:mb-10 lg:mb-12">
			<button
				className="flex items-center justify-center shadow-md cursor-pointer hover:scale-105 xs:text-xs sm:text-sm xs:p-2 sm:p-3 hover:shadow-slate-300 shadow-slate-200 bg-slate-200 font-montserrat-regular"
				type="button"
				onClick={() => new Modal(document.getElementById("filters-modal")).toggle()}>
				<Image
					src="/assets/images/filter.png"
					alt="Filter"
					width={16}
					height={16}
				/>
			</button>

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
						<div className="flex flex-col flex-1 overflow-x-hidden overflow-y-scroll xs:mt-4 sm:mt-6 lg:mt-8 xs:gap-4 sm:gap-5 lg:gap-6">
							{[...TAG_CATEGORIES, ["Other", OTHER_TAGS] as const].map(
								([name, tags]) => (
									<div key={name}>
										<h1 className="xs:mb-1 sm:mb-1.5 lg:mb-2 xs:text-sm sm:text-base lg:text-md font-montserrat-bold">
											{name}
										</h1>
										<div className="grid xs:gap-2 sm:gap-3 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
											{tags.sort().map(t => (
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
														src={`https://res.cloudinary.com/zs1l3nt/image/upload/icons/${t}.svg`}
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
									</div>
								),
							)}
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

			{searchTags.map(t => (
				<div
					key={t}
					className="flex items-center gap-2 shadow-md xs:text-xs sm:text-sm xs:py-2 sm:py-3 xs:px-3 sm:px-4 font-montserrat-regular bg-slate-200">
					<Image
						title={t[0]!.toUpperCase() + t.slice(1)}
						className="inline-block"
						src={`https://res.cloudinary.com/zs1l3nt/image/upload/icons/${t}.svg`}
						alt={t + " icon"}
						width={16}
						height={16}
					/>
					{t[0]!.toUpperCase() + t.slice(1)}
					<Link href={getTagsLink(searchTags.filter(t_ => t !== t_))}>
						<Image
							className="ml-1 cursor-pointer hover:scale-105"
							src="/assets/images/close.png"
							alt="Filter"
							width={13}
							height={13}
						/>
					</Link>
				</div>
			))}
		</div>
	)
}
