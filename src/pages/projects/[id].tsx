import { GetServerSideProps } from "next"

import { FullRepository } from "@@types/types"
import getRepository from "@functions/getRepository"

const getServerSideProps: GetServerSideProps = async ({ params }) => {
	try {
		return {
			props: {
				repository: await getRepository(params!.id as string)
			}
		}
	} catch {
		return {
			props: {
				repository: null
			}
		}
	}
}

const Project = ({ repository }: { repository: FullRepository | null }) => {
	return (
		<>
			<pre>{JSON.stringify(repository, null, 4)}</pre>
		</>
	)
}

export { getServerSideProps }
export default Project
