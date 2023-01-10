import React from "react";
import home_bg2 from "../images/homebg2.jpg";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

function ContactSection(props) {
  return (
    <div id="contact" className="section">
      {/* <!-- Backgound Image --> */}
      <div
        className="bg-image bg-parallax overlay"
        style={{ backgroundImage: `url(${home_bg2})` }}
      ></div>
      {/* <!-- Backgound Image --> */}
      {/* <!-- container --> */}
      <div className="container">
        {/* <!-- row --> */}
        <div className="row">
          <div
            className="col-md-8 col-md-offset-2 text-center"
            onClick={() => props.setPath("moreInfo")}
          >
            <h2 className="white-text">Explore the World of Talent</h2>
            <Link className="contact-button icon-button" to="/more_info">
              Request More Information{" "}
            </Link>
          </div>
        </div>
        {/* <!-- /row --> */}
      </div>
      {/* <!-- /container --> */}
    </div>
  );
}

export default withRouter(ContactSection);
