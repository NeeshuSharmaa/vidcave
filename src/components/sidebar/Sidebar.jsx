import {
  faEarthAmericas,
  faHouse,
  faClock,
  faPlay,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

import "./Sidebar.css";

export default function Sidebar() {
  const linkStyle = ({ isActive }) =>
    isActive ? "sidebar-child active" : "sidebar-child";
  return (
    <div className="sidebar">
      <NavLink to="/" className={linkStyle}>
        <FontAwesomeIcon icon={faHouse} className="fa-icon" />
        <span>Home</span>
      </NavLink>
      <NavLink to="/explore" className={linkStyle}>
        <FontAwesomeIcon icon={faEarthAmericas} className="fa-icon" />
        <span>Explore</span>
      </NavLink>
      <NavLink to="/playlists" className={linkStyle}>
        <div className="playlist-icon">
          <FontAwesomeIcon icon={faBars} className="fa-icon" />
          <FontAwesomeIcon icon={faPlay} className="fa-icon" />
        </div>
        <span>Playlists</span>
      </NavLink>
      <NavLink to="/watch-later" className={linkStyle}>
        <FontAwesomeIcon icon={faClock} className="fa-icon" />
        <span>Watch Later</span>
      </NavLink>
    </div>
  );
}
