import Image from "next/image"

const Tag = ({ tag }: { tag: string }) => {
	if (["hackathon", "unfinished", "deprecated", "broken", "special", "solutions"].includes(tag))
		return null

	const pngs = ["worldskills", "octokit"]

	return (
		<Image
			title={tag[0]!.toUpperCase() + tag.substring(1)}
			className="inline-block hover:xs:scale-90 hover:sm:scale-100 hover:lg:scale-125 xs:scale-75 sm:scale-90"
			src={`https://res.cloudinary.com/zs1l3nt/image/upload/icons/${tag}.${
				pngs.includes(tag) ? "png" : "svg"
			}`}
			alt={tag + " icon"}
			width={25}
			height={25}
		/>
	)
}

export default Tag
