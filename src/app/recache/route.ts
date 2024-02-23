import { revalidateTag } from "next/cache"

export const dynamic = "force-dynamic"

export async function GET(req: Request) {
	revalidateTag("cached")
	await fetch(new URL(req.url).origin)
	return new Response("recached")
}
