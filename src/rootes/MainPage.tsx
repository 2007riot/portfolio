import Header from "../components/Header";
import Heading3 from "../components/Heading3";
import Highlights from "../components/Highlights";
import Technologies from "../components/Technologies";
import { ProjectCard } from "../components/small-views(molecules)/ProjectCard";
import { myContent } from "../constants";
import { projectData } from "../data/projectsData";
export default function MainPage() {
  return (
    <div className="flex flex-col gap-12">
    <Header />
    {/* <Heading3 title={myContent.highlights}/> */}
    {/* <Highlights /> */}
    <Heading3 title={myContent.technologies} />
    <Technologies />
    <Heading3 title={myContent.projects}/>
    
    {
    projectData && projectData.length > 0 ? 
    projectData.map((projectItem, index) =>
      <ProjectCard project={projectItem} key={index} />
      
      
    ) 
    : <div>No projects found</div> }

    </div>
)
}
