import Image from "next/image"

const Topic = ({ topic }: { topic: string }) => {
	if (["hackathon", "unfinished", "deprecated", "broken", "special", "solutions"].includes(topic))
		return null

	const pngs = ["worldskills", "octokit"]

	return (
		<Image
			title={topic[0]!.toUpperCase() + topic.substring(1)}
			className="inline-block hover:xs:scale-90 hover:sm:scale-100 hover:lg:scale-125 xs:scale-75 sm:scale-90"
			src={`https://res.cloudinary.com/zs1l3nt/image/upload/icons/${topic}.${
				pngs.includes(topic) ? "png" : "svg"
			}`}
			alt={topic + " icon"}
			width={30}
			height={30}
		/>
	)
}

export default Topic
