
import { techData } from "../data/techData";
import {Technology} from "./Technology";



export default function Technologies() {
  return (
    <div className="bg-customGray lg:py-14 lg:px-20 py-16 px-20 rounded-lg grid  xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-x-10 gap-y-10 ">
      
      {techData ? 
      techData.map((techItem, index) =>
      <Technology tech={techItem} key={index}/>) 
    :<div>no data found</div>}    
    </div>
  )   
}
