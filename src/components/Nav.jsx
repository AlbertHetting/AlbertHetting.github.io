import { NavLink } from "react-router-dom";
import "../index.css";

const NAV = [
  { label: "Home", to: "/" },
  { label: "Works", to: "/projects" /*, children: [] */ },
  { label: "About", to: "/about" },
];

function LinkLabel({ text }) {
  const chars = Array.from(text); // Holder underlige tegn og emoji i teksten
  return (
    <>
      <span className="sr-only">{text}</span>
      <span className="nav-letters" aria-hidden="true">
        {chars.map((ch, i) => (
          <span className="nav-letter" 
          key={`${ch}-${i}`} 
          style={{ ['--i']: i }}>

            <span className="nav-letter-inner">
              <span className="nav-line">{ch}</span>
              <span className="nav-line">{ch}</span>
            </span>
          </span>
        ))}
      </span>
    </>
  ); //Her laves et unikt ID hvor hver bogstav (ch) som laves ud fra deres position (i), derefter laves der flere forskellige 
  // I keys der kan bruges til at offset animationen
  // Derefter laves to linjer af det samme ord som bruges til animationen!
}

export default function NavBar() {
  return (
    <header>
      <nav className="navigation" aria-label="Main">
        <ul>
          {NAV.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                <LinkLabel text={item.label} />
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}