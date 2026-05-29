import { Link } from "react-router-dom";

import {
  FaHome,
  FaNewspaper,
  FaChartPie,
  FaCog
} from "react-icons/fa";

function Sidebar() {

  return (

    <div className="sidebar">

      <h2 className="logo">
        AI News
      </h2>

      <ul>

        <li>

          <Link
            to="/"
            className="nav-link"
          >

            <FaHome />

            Dashboard

          </Link>

        </li>

        <li>

          <Link
            to="/news"
            className="nav-link"
          >

            <FaNewspaper />

            News Feed

          </Link>

        </li>

        <li>

          <Link
            to="/analytics"
            className="nav-link"
          >

            <FaChartPie />

            Analytics

          </Link>

        </li>

        <li>

          <Link
            to="/settings"
            className="nav-link"
          >

            <FaCog />

            Settings

          </Link>

        </li>

      </ul>

    </div>

  );
}

export default Sidebar;