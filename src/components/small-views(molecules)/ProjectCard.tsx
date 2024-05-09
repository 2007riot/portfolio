import { FC } from "react"
import { Project } from "../../data/projectsData"
import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub"
import { faAppStoreIos } from "@fortawesome/free-brands-svg-icons"

interface ProjectCardProps {project:Project}

export const ProjectCard: FC<ProjectCardProps> = ({project}) => {
    return (
        <div className="bg-customGray rounded-lg my-5 shadow-xl px-10 py-10">
            <NavLink to={`/project-info/${project.id}`} >
                <img src={project.img} alt={project.title} className="block mx-auto" />
            </NavLink>
                <p className="font-bold text-3xl my-4">{project.title}</p>
                <p className="mb-4 md:text-2xl text-lg">{project.description}</p>

                <div className="flex text-xl flex-row gap-4 font-semibold mb-2">
                {project.githubLink && (
                    <a className="hover:underline" href={project.githubLink} target="_blank" >
                    <FontAwesomeIcon icon={faGithub} className="mr-2" />
                     GitHub
                    </a>
                )}
                {project.appStoreLink && (
                    <div>
                       
                    <a className="hover:underline" href={project.appStoreLink}>
                    <FontAwesomeIcon className="mr-2" icon={faAppStoreIos}/> App Store
                    </a>
                    </div>
                )}
                </div>


                {/* <p className="mt-2">Tech stack: {project.tech}</p> */}
                
                
        </div>
    )
}
  