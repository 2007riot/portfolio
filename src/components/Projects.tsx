import { myConstants } from "../constants";
import ProjectCard from "./ProjectCard";

export default function Projects() {
    const numbers: number[] = Array.from(Array(10).keys())

    return (
        <div id={myConstants.portfolioId}>
            <h1>Projects:</h1> 
            {
                numbers.map(num => 
                    <ProjectCard num={num} />
                )
            }
        </div>
    )
}