import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

import PageHeader from "./pagesHeader";
import ContactSection from "./contactSection";
import home_bg1 from "../images/homebg1.jpg";
import home_icon1 from "../images/homeicon1.png";
import home_icon2 from "../images/homeicon2.png";
import home_icon3 from "../images/homeicon3.png";
import home_icon4 from "../images/homeicon4.png";
import home_image1 from "../images/homeimage1.jpg";
import home_bg2 from "../images/homebg2.jpg";
// import "../css/style.css";
import MetaTags from "react-meta-tags";

function HomePage(props) {
  return (
    <React.Fragment>
      <MetaTags>
        <title>Industry Leading AI-Powered Executive Search Platform</title>
        <meta name="description" content="Consilium Intelligence uses a proprietary blend of technology and artificial intelligence to enable clients to efficiently and precisely find executive talent." />
      </MetaTags>
      <PageHeader path={props.path} setPath={props.setPath} />
      <div id="home" className="hero-area">
        {/* <!-- Backgound Image --> */}
        <div
          className="bg-image bg-parallax overlay"
          style={{ backgroundImage: `url(${home_bg1})` }}
        ></div>
        {/* <!-- /Backgound Image --> */}
        <div className="home-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-7 btext">
                <h1 className="white-text">Identify, Understand, Execute</h1>
                <p className="lead white-text">
                  Transparency and context to opaque talent markets
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home_text1 hero-area">
        <div className="container">
          Identify talent and corporate opportunities from our platform. We use
          a proprietary blend of technology and artificial intelligence with
          data validated by world class research.
        </div>
      </div>
      <div id="about" className="section">
        {/* <!-- container --> */}
        <div className="container">
          {/* <!-- row --> */}
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-5">
              <div className="section-header">
                <h2>Real Time Market &amp; Talent Insights</h2>
                <p className="lead">
                  Using artificial intelligence and advanced natural language
                  processing techniques, we provide context and data to enable
                  clients to realize their strategic vision
                </p>
                <Link
                  className="main-button icon-button"
                  to="/services"
                  style={{ color: "white" }}
                >
                  See Services
                </Link>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 col-lg-offset-1">
              <div className="row">
                <div className="col-sm-6 col-md-6 col-lg-6">
                  <div className="home_icons">
                    <img src={home_icon1} alt="" />
                    <h3>
                      Real Time
                      <br />
                      Data
                    </h3>
                    <p className="lead">
                      Get live information on trends and opportunities
                    </p>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-6">
                  <div className="home_icons">
                    <img src={home_icon2} alt="" />
                    <h3>Informed &amp; Intelligent Placement</h3>
                    <p className="lead">
                      Navigate talent seamlessly to target specific needs
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6 col-md-6 col-lg-6">
                  <div className="home_icons">
                    <img src={home_icon3} alt="" />
                    <h3>Analyze Trends and Opportunities</h3>
                    <p className="lead">
                      Be ahead of competition - understand evolving talent
                      opportunities
                    </p>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-6">
                  <div className="home_icons">
                    <img src={home_icon4} alt="" />
                    <h3>A Better Way to Manage</h3>
                    <p className="lead">
                      Instantly identify, track, engage and close talent
                      opportunities faster
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- row --> */}
        </div>
        {/* <!-- container --> */}
      </div>
      <div id="home_bg1" className="section">
        {/* <!-- container --> */}
        <div className="container">
          {/* <!-- row --> */}
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-7">
              <img src={home_image1} alt="" className="img-responsive" />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 col-lg-offset-1">
              <h1>Competitive Intelligence On Demand</h1>
              <p className="lead">
                Enabling clients to understand new industry, market, sector and
                geographic opportunities
              </p>
              <Link
                className="main-button icon-button"
                to="/about"
                style={{ color: "white" }}
              >
                Our Methodology
              </Link>
            </div>
          </div>
          {/* <!-- /row --> */}
        </div>
        {/* <!-- /container --> */}
      </div>
      <ContactSection setPath={props.setPath} />
      {/* <div id="preloader">
        <div className="preloader"></div>
      </div> */}
    </React.Fragment>
  );
}

export default withRouter(HomePage);
