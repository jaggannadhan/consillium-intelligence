import React from "react";
import PageHeader from "./pagesHeader";
import ContactSection from "./contactSection";
import about_bg1 from "../images/aboutbg1.jpg";
import about_image1 from "../images/aboutImage1.jpg";
import about_image2 from "../images/aboutImage2.jpg";
import peter_smith from "../images/peterSmith.jpg";
import oscar_newson from "../images/oscarNewson.jpg";
import terry from "../images/terry.png";
import mark_bright from "../images/markBright.jpg";
import paul from "../images/Paul.jpg";
import about_bg2 from "../images/aboutbg2.jpg";
import { Link } from "react-router-dom";
import AboutPopupEvents from "../helper/AboutPopupEvents";
import AboutPopup from "./AboutPopup";
import MetaTags from "react-meta-tags";

const aboutPopupEvent = new AboutPopupEvents();

export default function About(props) {
  return (
    <React.Fragment>
      <MetaTags>
        <title>Competitive Market Intelligence Platform for Alternatives, Investment Banking and Technology</title>
        <meta name="description" content="Consilium Intelligence helps simplify and accelerate the talent search process with the latest in AI and technology.
" />
      </MetaTags>
      <PageHeader path={props.path} setPath={props.setPath} />
      <div
        id="home"
        className="hero-area white_bg"
        style={{ marginBottom: 0 + "em" }}
      >
        {/* <!-- Backgound Image --> */}
        <div
          className="bg-image bg-parallax overlay"
          style={{ backgroundImage: `url(${about_bg1})` }}
        ></div>
        {/* <!-- /Backgound Image --> */}
        <div className="home-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-7">
                <h1 className="white-text">
                  Modernising competitive intelligence and placement across
                  financial markets
                </h1>
                <p className="lead white-text" style={{ fontWeight: "500" }}>
                  Alternatives, Investment Banking and Technology
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="about_bg1" className="section white_bg">
        {/* <!-- container --> */}
        <div className="container">
          {/* <!-- row --> */}
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-5">
              <h1
              // style={{
              //   fontSize: "35px",
              //   lineHeight: "50px"
              // }}
              >
                Transforming Placement &amp; Competitive Positioning
              </h1>
              <p className="lead">
                Real time benchmarking, identify the talent, create new
                opportunities or grow and protect existing businesses. Reducing
                execution risk and time to market.
              </p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-7">
              <img src={about_image1} alt="" className="img-responsive" />
            </div>
          </div>
          {/* <!-- /row --> */}
        </div>
        {/* <!-- /container --> */}
      </div>
      <a id="methodology"></a>
      <div id="home_bg1" className="section">
        {/* <!-- container --> */}
        <div className="container">
          {/* <!-- row --> */}
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-7">
              <img src={about_image2} alt="" className="img-responsive" />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-5">
              <h1>Combining Domain Expertise With Latest Technology</h1>
              <p className="lead">
                By visualising large data in a consistent and cohesive manner,
                we simplify and accelerate the decision making process. An
                interactive platform providing clean information giving
                transparency to Alternatives, Investment Banking and Technology.
              </p>
            </div>
          </div>
          {/* <!-- /row --> */}
        </div>
        {/* <!-- /container --> */}
      </div>

      <div className="home_text1 hero-area1">
        <div className="container">
          <h1 className="white-text">Management Team</h1>
          Trusted advisors in our respective industries, we have a proven track
          record of providing innovative solutions to CEOs, Business Leaders,
          Global Heads of Talent / Heads of Human Resources and Boards.
        </div>
      </div>
      <div className="hero-area1">
        <div className="container">
          <div className="row home-doctors">
            {/* <!-- entry2 --> */}
            <div className="col-lg-3 col-md-3 col-sm-6 text-center doc-item">
              <div className="common-doctor animated fadeInUp clearfix ae-animation-fadeInUp">
                {/* <ul className="list-inline social-lists animate">
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-linkedin-square"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                </ul> */}
                <figure
                  onClick={() =>
                    aboutPopupEvent.emitEvent({
                      show: true,
                      who: "Peter Smith",
                      designation: "Co-Founder, CEO",
                      content:
                        "Peter is the Founder of the Consilium Group and Co-Founder and CEO of Consilium Intelligence.  He is responsible for Corporate & Client Strategy, Business Development and Client Solutions at Consilium Intelligence. With over 20 year's experience within global executive search Peter has completed 100's strategic searches across Investment Banking and Global Markets, Alternatives and Fintech.  He is a trusted advisor to Global CEO's, Business leaders, Principals and Boards across US, Europe and Asia. He is also the Founder & CEO of Consilium Global Advisors, a leadership search & talent advisory boutique delivering search solutions to the world's leading Banking, Alternatives and Fintech firms.  Prior to Consilium Global Advisors Peter was a senior Partner, Global Markets & Banking Leader for 8 years at Heidrick & Struggles."
                    })
                  }
                >
                  <img
                    src={peter_smith}
                    className="doc-img animate attachment-gallery-post-single wp-post-image img-responsive"
                    alt=""
                  />
                </figure>
                <div className="text-content">
                  <h5>Peter Smith</h5>
                </div>
              </div>
            </div>
            {/* <!-- entry3 --> */}

            <div className="col-lg-3 col-md-3 col-sm-6 text-center doc-item">
              <div className="common-doctor animated fadeInUp clearfix ae-animation-fadeInUp">
                {/* <ul className="list-inline social-lists animate">
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-linkedin-square"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                </ul> */}
                <figure
                  onClick={() =>
                    aboutPopupEvent.emitEvent({
                      show: true,
                      who: "Mark Bright",
                      designation: "Co-Founder, COO",
                      content:
                        "Mark is a Co-Founder and COO of Consilium Intelligence, responsible for business strategy, operations, finance and technology. Before Consilium, Mark was a co-founder and senior partner of the award winning businesses of GFP Juniper and Juniper Place which are focused on institutional investor intelligence and capital raising for the alternatives industry. Prior to that Mark was at Citi as a Managing Director and Global Head of Emerging Markets for Prime Brokerage and Futures. During his 17 years at Citi he held a number of senior management positions across Equities, Derivatives, Risk Management and Operations."
                    })
                  }
                >
                  <img
                    src={mark_bright}
                    className="doc-img animate attachment-gallery-post-single wp-post-image img-responsive"
                    alt=""
                  />
                </figure>
                <div className="text-content">
                  <h5>Mark Bright</h5>
                </div>
              </div>
            </div>
            {/* <!-- entry4 --> */}
            <br />
            <div className="col-lg-3 col-md-3 col-sm-6 text-center doc-item">
              <div className="common-doctor animated fadeInUp clearfix ae-animation-fadeInUp">
                {/* <ul className="list-inline social-lists animate">
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-linkedin-square"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                </ul> */}
                <figure
                  onClick={() =>
                    aboutPopupEvent.emitEvent({
                      show: true,
                      who: "Oscar Newson",
                      designation: "Director, Senior Analyst",
                      content:
                        "Oscar is a senior data analyst at Consilium Intelligence with coverage of alternatives, investment banking and global markets. He is responsible for building and developing bespoke data solutions for clients. Oscar is also director of research for Consilium Global Advisors, an executive search firm. He has worked directly for CEOs and heads of business on strategic mandates across alternatives, investment banking and global markets in EMEA, the Americas and Asia Pacific. Previously, he was an engagement manager in the financial services practice at Heidrick & Struggles for five years. Oscar has 14 years’ experience in executive search."
                    })
                  }
                >
                  <img
                    src={oscar_newson}
                    className="doc-img animate attachment-gallery-post-single wp-post-image img-responsive"
                    alt=""
                  />
                </figure>
                <div className="text-content">
                  <h5>Oscar Newson</h5>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6 text-center doc-item">
              <div class="common-doctor animated fadeInUp clearfix ae-animation-fadeInUp">
                <figure
                  onClick={() =>
                    aboutPopupEvent.emitEvent({
                      show: true,
                      who: "Terry Tateossian",
                      designation: "Technology, Media Marketing Advisor",
                      content:
                        "Terry is a MIT Blockchain Technology and AI graduate, thought leader, decorated entrepreneur, speaker, and philanthropic activist. She comes from a fourth-generational background of serial entrepreneurship—launching multiple companies that have significantly contributed to digital transformation and the start-up ecosystem. She’s a board member and advisor for several transformational start-ups and has earned multiple recognitions and awards for innovations and leadership in technology, media and marketing."
                    })
                  }
                >
                  <a href="#" data-toggle="modal" data-target="#TerryModal">
                    <img
                      src={terry}
                      class="doc-img animate attachment-gallery-post-single wp-post-image img-responsive"
                      alt=""
                    />{" "}
                  </a>
                </figure>
                <div class="text-content">
                  <h5>Terry Tateossian</h5>
                </div>
              </div>
            </div>
            

            <div className="col-lg-3 col-md-3 col-sm-6 text-center doc-item">
              <div className="common-doctor animated fadeInUp clearfix ae-animation-fadeInUp">
                <figure
                  onClick={() =>
                    aboutPopupEvent.emitEvent({
                      show: true,
                      who: "Paul Clauss",
                      designation: "Intelligence Analyst",
                      content:
                        "Paul joined Consilium as an Intelligence Analyst in 2019.  Paul's prior experience includes time spent as a Business Analyst at JP Morgan, a Category Specialist at e-commerce startup Jet and subsequently Walmart E-commerce after its acquisition of Jet.  Most recently Paul was a Program Manager at a rapidly scaling logistics company helping to launch new operations."
                    })
                  }
                >
                  <img
                    src={paul}
                    className="doc-img animate attachment-gallery-post-single wp-post-image img-responsive"
                    alt=""
                  />
                </figure>
                <div className="text-content">
                  <h5>Paul Clauss</h5>
                </div>
              </div>
            </div>
            {/* <!-- // --> */}
            <div className="visible-sm clearfix margin-gap"></div>
          </div>
        </div>
      </div>

      <div id="contact" className="section hero-area">
        {/* <!-- Backgound Image --> */}
        <div
          className="bg-image bg-parallax overlay"
          style={{ backgroundImage: `url(${about_bg2})` }}
        ></div>
        {/* <!-- Backgound Image --> */}
        {/* <!-- container --> */}
        <div className="container">
          {/* <!-- row --> */}
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center">
              <h2 className="white-text">
                <Link to="/more_info">Join the Consilium Team</Link>
              </h2>
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
      <AboutPopup aboutPopupEvent={aboutPopupEvent} />
    </React.Fragment>
  );
}
