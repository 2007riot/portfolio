import { FC } from "react"
import { Project, projectData } from "../data/projectsData"
import { useParams } from "react-router-dom"

export const ProjectPage: FC = () => {
  const {id} = useParams<{id: string} >()
  const project: Project | undefined = typeof id === "string" ? projectData.find((proj) => proj.id === parseInt(id)) : undefined

  return (
      project ?
      <div>
      <p className="text-3xl my-6">{project?.title}</p>
      <p>{project.detailedDescription}</p>
      </div>
      : <div>nothing found</div>
  )
}
