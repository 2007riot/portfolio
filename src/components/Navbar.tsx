import { NavLink } from "react-router-dom";
import Email from "./Email";

export default function Navbar() {
  return (
    <div className="flex md:flex-row flex-col gap-4 md:gap-0 font-medium my-10 justify-between">
      <div className="font-bold">
        <NavLink
          className={({ isActive }) =>
            isActive ? "underline" : "text-slate-800 font-normal"
          }
          to="/"
        >
          projects
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "ml-8 underline" : "ml-8 text-slate-800 font-normal"
          }
          to="/about"
        >
          about
        </NavLink>
      </div>
      <Email />
    </div>
  );
}
