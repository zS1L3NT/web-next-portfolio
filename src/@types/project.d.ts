import { Project } from "@prisma/client"

export type iProject = Omit<Project, "updated_at">