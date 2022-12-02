import { GetServerSideProps } from "next"

import { Repository } from "@@types/types"
import getRepositories from "@functions/getRepositories"

const getServerSideProps: GetServerSideProps = async () => {
	return {
		props: {
			repositories: await getRepositories()
		}
	}
}

const Projects = ({ repositories }: { repositories: Repository[] }) => {
	return (
		<>
			Projects
			{repositories.map(r => (
				<p>{r.name}</p>
			))}
		</>
	)
}

export { getServerSideProps }
export default Projects
