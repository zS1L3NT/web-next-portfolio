const Footer = ({ updated }: { updated: string | null }) => {
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
							year: "numeric"
						})}
						{" at "}
						{date.toLocaleTimeString("en-SG", {
							hour: "2-digit",
							minute: "2-digit"
						})}
					</>
				) : (
					"Failed to fetch last updated"
				)}
			</h1>
		</footer>
	)
}

export default Footer
