import { FC } from "react"
import { Project } from "../../data/projectsData"
import { NavLink } from "react-router-dom"
interface ProjectCardProps {project:Project}



export const ProjectCard: FC<ProjectCardProps> = ({project}) => {
    return(
        <div className={`bg-${project.color} rounded-lg my-5`}>
    <NavLink  
    to={`/project-info/${project.id}`}>
    <p>{project.title}</p>
    <p>{project.description}</p>
    <img src={project.img} alt={project.title}/> 
    {project.githubLink && <p>{project.githubLink}</p>}
    {project.appStoreLink && <p>{project.appStoreLink}</p>}
    </NavLink>
    </div>)
}
  