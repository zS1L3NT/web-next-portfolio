export default async function Footer() {
	const updated = await fetch(
		"https://api.github.com/repos/zS1L3NT/web-next-portfolio/commits/main",
		{ next: { revalidate: 24 * 60 * 60 } },
	)
		.then(res => res.json())
		.then(res => res.commit.author.date)
		.catch(() => null)
	const date = new Date(updated ?? Date.now())

	return (
		<footer className="flex items-center justify-center h-20 bg-slate-100 w-100">
			<h1 className="opacity-50 w-fit font-montserrat-regular xs:text-sm sm:text-base lg:text-md">
				{updated ? (
					<>
						{"Last updated on "}
						{date.toLocaleDateString("en-SG", {
							day: "2-digit",
							month: "long",
							year: "numeric",
						})}
						{" at "}
						{date.toLocaleTimeString("en-SG", {
							hour: "2-digit",
							minute: "2-digit",
						})}
					</>
				) : (
					"Failed to fetch last updated"
				)}
			</h1>
		</footer>
	)
}
