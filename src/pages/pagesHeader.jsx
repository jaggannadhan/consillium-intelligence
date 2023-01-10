import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

function PageHeader(props) {
  return (
    <header className="main-header">
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar2"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
            </button>

            <a
              href="#"
              className="hidden-lg hidden-md sidebar-toggle"
              data-toggle="offcanvas"
              role="button"
            >
              {" "}
              <span className="sr-only">Toggle navigation</span>{" "}
            </a>
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div id="navbar2" className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right">
              <li onClick={() => props.setPath("about")}>
                <Link
                  to="/about"
                  className={props.path === "about" ? "active" : ""}
                >
                  About Us
                </Link>
              </li>
              <li onClick={() => props.setPath("service")}>
                <Link
                  to="/services"
                  className={props.path === "service" ? "active" : ""}
                >
                  Services
                </Link>
              </li>
              <li onClick={() => props.setPath("podcast")}>
                <Link
                  to="/podcast"
                  className={props.path === "podcast" ? "active" : ""}
                >
                  Podcast
                </Link>
              </li>
              <li onClick={() => props.setPath("moreInfo")}>
                <Link
                  to="/more_info"
                  className={props.path === "moreInfo" ? "active" : ""}
                >
                  Request More Info
                </Link>
              </li>
              <li onClick={() => props.setPath("memberAccess")}>
                <Link
                  to="/member_access"
                  className={props.path === "memberAccess" ? "active" : ""}
                >
                  Member Access
                </Link>
              </li>
            </ul>
          </div>
          {/* <!--/.nav-collapse --> */}
        </div>
        {/* <!--/.container-fluid --> */}
      </nav>
    </header>
  );
}

export default withRouter(PageHeader);
