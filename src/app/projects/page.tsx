import getProjects from "@/utils/getProjects"

import ClientPage from "./client"

export default async function Page({ searchParams }: { searchParams: Record<string, string> }) {
	return (
		<ClientPage
			searchParams={searchParams}
			projects={await getProjects()}
		/>
	)
}
