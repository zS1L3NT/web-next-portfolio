"use client"

import Image from "next/image"
import Link from "next/link"

import cn from "@/utils/cn"

export default function Sorters({ order, orderBy }: { order: string; orderBy: string }) {
	const getSortLink = (order: string, orderBy: string) => {
		const url = new URL(location.href)
		url.searchParams.set("orderBy", orderBy)
		url.searchParams.set("order", order)
		return (url + "").replaceAll("%2C", ",")
	}

	return (
		<div className="flex xs:gap-2 sm:gap-3 lg:gap-4 xs:mb-2 sm:mb-3 lg:mb-4">
			<div className="flex">
				<Link
					href={getSortLink(order, "date")}
					className={cn(
						"shadow-md cursor-pointer hover:scale-105 xs:p-2 sm:p-3 hover:shadow-slate-300 shadow-slate-200",
						orderBy === "date" ? "bg-primary-400" : "bg-slate-200",
					)}>
					<Image
						src="/assets/images/sort-date.svg"
						alt="Filter"
						width={20}
						height={20}
						className={cn(orderBy === "date" ? "invert" : "")}
					/>
				</Link>

				<Link
					href={getSortLink(order, "title")}
					className={cn(
						"shadow-md cursor-pointer hover:scale-105 xs:p-2 sm:p-3 hover:shadow-slate-300 shadow-slate-200 bg-slate-200",
						orderBy === "title" ? "bg-primary-400" : "bg-slate-200",
					)}>
					<Image
						src="/assets/images/sort-title.svg"
						alt="Filter"
						width={20}
						height={20}
						className={cn(orderBy === "title" ? "invert" : "")}
					/>
				</Link>
			</div>

			<div className="flex">
				<Link
					href={getSortLink("asc", orderBy)}
					className={cn(
						"shadow-md cursor-pointer hover:scale-105 xs:p-2 sm:p-3 hover:shadow-slate-300 shadow-slate-200",
						order === "asc" ? "bg-primary-400" : "bg-slate-200",
					)}>
					<p
						className={cn(
							"xs:text-sm sm:text-base lg:text-md font-montserrat-regular",
							order === "asc" ? "text-white" : "",
						)}>
						Ascending
					</p>
				</Link>

				<Link
					href={getSortLink("desc", orderBy)}
					className={cn(
						"shadow-md cursor-pointer hover:scale-105 xs:p-2 sm:p-3 hover:shadow-slate-300 shadow-slate-200 bg-slate-200",
						order === "desc" ? "bg-primary-400" : "bg-slate-200",
					)}>
					<p
						className={cn(
							"xs:text-sm sm:text-base lg:text-md font-montserrat-regular",
							order === "desc" ? "text-white" : "",
						)}>
						Descending
					</p>
				</Link>
			</div>
		</div>
	)
}
