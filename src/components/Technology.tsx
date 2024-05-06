import { FC } from "react"
import { Tech } from "../data/techData"
interface TechnologyProp { tech:Tech}

export const Technology: FC<TechnologyProp> = ({tech}) =>{
  return (
    <div className="text-2xl font-semibold flex flex-row gap-3 items-center"> 
        <img className="size-10" src={tech.iconPath}></img>
        <p>{tech.title}</p>
    </div>
  )
}
