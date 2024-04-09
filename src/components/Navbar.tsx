import { NavLink } from "react-router-dom"
import Email from "./Email"

export default function Navbar() {



    return (

        <div className="flex flex-row font-medium my-10 justify-between">
            <Email />
            <div className="font-bold">
                <NavLink  className={({isActive})=>
                isActive
                ? "underline"
                : "text-slate-800 font-normal"
                } to="/">projects</NavLink>
                <NavLink  className={({isActive})=>
                isActive
                ? "ml-8 underline"
                : "ml-8 text-slate-800 font-normal"} to="/about">about</NavLink>
            </div>

        </div>

    )
}