import React from "react";
import favicon from "../../images/favicon.png";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

function FooterComponent(props) {
  return (
    <footer className="common-footer">
      <div className="row">
        <div className="col-sm-12 col-md-3 col-lg-3">
          <img src={favicon} alt="favicon" />
          <h3>+1 212 547 8860</h3>
        </div>
        <div className="col-sm-12 col-md-5 col-lg-5">
          <ul>
          {/* <li onClick={() => props.setPath("podcast")}>
              <Link to="/podcast">Media Kit</Link>
            </li> */}
            <li onClick={() => props.setPath("privacy")}>
              <Link to="/privacy">Privacy Policy</Link>
            </li>
            <li onClick={() => props.setPath("terms")}>
              <Link to="/terms">Terms and Conditions</Link>
            </li>
          </ul>          
          <div className="clearfix" />
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4">
			<ul>
            <li>
                <Link to="/privacy">Do Not Sell my personal information</Link>
            </li>
          </ul>
        </div>
      </div>
	  <div className="row">
        <div className="col-sm-12 col-md-3 col-lg-3">
		   <a href="mailto:info@consiliumintelligence.com">
            info@consiliumintelligence.com
          </a>
        </div>
        <div className="col-sm-12 col-md-5 col-lg-5">
          <p>&copy; 2019 Consilium Intelligence. All Rights Reserved</p>
                  
          <div className="clearfix" />
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4">
			<ul className="fot-soc">
            <li>
              <a href="https://www.facebook.com/ConsiliumAI" target="_blank">
                <i className="fa fa-facebook-official" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/consiliumai/" target="_blank">
                <i className="fa fa-instagram" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/consilium-intelligence/" target="_blank">
                <i className="fa fa-linkedin" />
              </a>
            </li>
			 <li>
              <a href="https://twitter.com/ConsiliumAI" target="_blank">
                <i className="fa fa-twitter" />
              </a>
            </li>
          </ul>  
        </div>
      </div>
      <div className="clearfix" />
    </footer>
  );
}

export default withRouter(FooterComponent);
