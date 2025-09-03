import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="NaviagtionBar">
      <NavLink to="/" end>
        Home{"   "}
      </NavLink>
      <NavLink to="/Projects">Projects </NavLink>
      <NavLink to="/about">About </NavLink>
      <NavLink to="/contact">Contact </NavLink>
      
    </nav>
  );
}
