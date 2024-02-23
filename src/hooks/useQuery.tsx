import { useSearchParams } from "next/navigation"
import { useMemo } from "react"

export default (projectsTags: string[]) => {
	const search = useSearchParams()

	return useMemo(
		() => ({
			tags: (search.get("tags")?.split(",") ?? []).filter(t => projectsTags.includes(t)),
			order: search.get("order") ?? "desc",
			orderBy: search.get("orderBy") ?? "date",
		}),
		[search, projectsTags],
	)
}
