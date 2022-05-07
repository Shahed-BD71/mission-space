import { NavLink } from "react-router-dom";

export const links = [
  {
    title: "Home",
    to: "/",
  },
  {
    title: "Mission",
    to: "/",
  },
  {
    title: "About Us",
    to: "/",
  },
  {
    title: "Contact Us",
    to: "/",
  },
];

export default function NavItem({ title, to }) {
  return (
    <>
      <li className="nav-item">
        <NavLink className="nav-link active" aria-current="page" to={to}>
          <span>{title}</span>
        </NavLink>
      </li>
    </>
  );
}
