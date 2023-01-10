import React, { useState } from "react";
import PageHeader from "./pagesHeader";
import ContactSection from "./contactSection";
import home_icon1 from "../images/homeicon1.png";
import home_icon2 from "../images/homeicon2.png";
import home_icon5 from "../images/homeicon5.png";
import home_icon6 from "../images/homeicon6.png";
import home_icon7 from "../images/homeicon7.png";
import home_icon8 from "../images/homeicon8.png";
import services_bg1 from "../images/servicesbg1.jpg";
import services_image1 from "../images/servicesImage1.jpg";
import MetaTags from "react-meta-tags";


export default function Services(props) {
  const [accordian, setAccordian] = useState("accordian1");
  return (
    <React.Fragment>
      <MetaTags>
        <title>Premier Talent Analysis Platform for Alternatives, Investment Banking and Technology</title>
        <meta name="description" content="Our AI-Powered talent search platform offers top competitive intelligence to help you identify and engage with the candidates you are looking for." />
      </MetaTags>
      <PageHeader path={props.path} setPath={props.setPath} />
      <div id="home" className="hero-area">
        {/* <!-- Backgound Image --> */}
        <div
          className="bg-image bg-parallax overlay"
          style={{ backgroundImage: `url(${services_bg1})` }}
        ></div>
        {/* <!-- /Backgound Image --> */}
        <div className="home-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-7">
                <h1 className="white-text">Market Leading Solutions</h1>
                <p className="lead white-text" style={{ fontWeight: "500" }}>
                  Context and understanding driving better management decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-area2">
        {/* <!-- container --> */}
        <div className="container">
          <div id="accordion" role="tablist" aria-multiselectable="true">
            <div className="panel panel-default">
              <div
                className="panel-heading"
                role="tab"
                id="headingOne"
                onClick={() => setAccordian("accordian1")}
              >
                <h4 className="panel-title">
                  <a
                    className="collaped"
                    role="button"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    <i
                      className={
                        accordian === "accordian1"
                          ? "more-less glyphicon glyphicon-minus"
                          : "more-less glyphicon glyphicon-plus"
                      }
                    ></i>
                    Competitive Intelligence
                  </a>
                </h4>
              </div>
              <div
                id="collapseOne"
                className={
                  accordian === "accordian1"
                    ? "panel-collapse collapse in"
                    : "panel-collapse collapse"
                }
                role="tabpanel"
                aria-labelledby="headingOne"
              >
                <div className="panel-body">
                  Connected and competitive market intelligence fuels better
                  decision making. Track key competitor organization models and
                  seamlessly centralize content. Consilium Intelligence can
                  provide bespoke research for clients.
                </div>
              </div>
            </div>

            <div className="panel panel-default">
              <div
                className="panel-heading"
                role="tab"
                id="headingTwo"
                onClick={() => setAccordian("accordian2")}
              >
                <h4 className="panel-title">
                  <a
                    className="collapsed"
                    role="button"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    <i
                      className={
                        accordian === "accordian2"
                          ? "more-less glyphicon glyphicon-minus"
                          : "more-less glyphicon glyphicon-plus"
                      }
                    ></i>
                    Identify & Engage Strategic Talent
                  </a>
                </h4>
              </div>
              <div
                id="collapseTwo"
                className={
                  accordian === "accordian2"
                    ? "panel-collapse collapse in"
                    : "panel-collapse collapse"
                }
                role="tabpanel"
                aria-labelledby="headingTwo"
              >
                <div className="panel-body">
                  In a competitive and ever changing world, identifying the
                  right talent is more critical than ever. We track key
                  professionals globally at the most influential firms by
                  seniority, location and function. Profiles are updated as soon
                  as new information becomes available. Our clients can better
                  prepare for succession planning and unforeseen attrition and
                  expansion.
                </div>
              </div>
            </div>

            <div className="panel panel-default">
              <div
                className="panel-heading"
                role="tab"
                id="headingThree"
                onClick={() => setAccordian("accordian3")}
              >
                <h4 className="panel-title">
                  <a
                    className="collapsed"
                    role="button"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    <i
                      className={
                        accordian === "accordian3"
                          ? "more-less glyphicon glyphicon-minus"
                          : "more-less glyphicon glyphicon-plus"
                      }
                    ></i>
                    Seamless Management
                  </a>
                </h4>
              </div>
              <div
                id="collapseThree"
                className={
                  accordian === "accordian3"
                    ? "panel-collapse collapse in"
                    : "panel-collapse collapse"
                }
                role="tabpanel"
                aria-labelledby="headingThree"
              >
                <div className="panel-body">
                  Consilium Intelligence provides a hollistic approach to ensure
                  all stakeholders are connected and data available on demand.
                  Our platform ensures that your talent IP is not lost as team
                  members move on or change roles. You can also monitor for
                  inclusion and diversity and utilize for current staff
                  benchmarking.
                </div>
              </div>
            </div>

            <div className="panel panel-default">
              <div
                className="panel-heading"
                role="tab"
                id="headingFour"
                onClick={() => setAccordian("accordian4")}
              >
                <h4 className="panel-title">
                  <a
                    className="collapsed"
                    role="button"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    <i
                      className={
                        accordian === "accordian4"
                          ? "more-less glyphicon glyphicon-minus"
                          : "more-less glyphicon glyphicon-plus"
                      }
                    ></i>
                    Value Added Engagement
                  </a>
                </h4>
              </div>
              <div
                id="collapseFour"
                className={
                  accordian === "accordian4"
                    ? "panel-collapse collapse in"
                    : "panel-collapse collapse"
                }
                role="tabpanel"
                aria-labelledby="headingFour"
              >
                <div className="panel-body">
                  Our platform provides the benefit of self-service or value
                  added engagement around deeper-dive sector, market or
                  individual firm intelligence, introductions, referencing or
                  placement.
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- /container --> */}
      </div>
      <hr />
      <div id="about" className="hero-area3">
        {/* <!-- container --> */}
        <div className="container">
          {/* <!-- row --> */}
          <div className="row">
            <div className="col-sm-6 col-md-6 col-lg-4">
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
            <div className="col-sm-6 col-md-6 col-lg-4">
              <div className="home_icons">
                <img src={home_icon2} alt="" />
                <h3>Innovative/Intelligent Search</h3>
                <p className="lead">
                  Navigate talent seamlessly to target specific needs
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4">
              <div className="home_icons">
                <img src={home_icon5} alt="" />
                <h3>Analyze Trends and Opportunities</h3>
                <p className="lead">
                  Oversee the industry and stay alert with new or evolving
                  trends
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4">
              <div className="home_icons">
                <img src={home_icon6} alt="" />
                <h3>A New Way to Hire</h3>
                <p className="lead">
                  Organize potential talent and accelerate your hiring process
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4">
              <div className="home_icons">
                <img src={home_icon7} alt="" />
                <h3>Competitive Analysis</h3>
                <p className="lead">
                  Evaluate and analyze competitor information
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4">
              <div className="home_icons">
                <img src={home_icon8} alt="" />
                <h3>Talent Organization</h3>
                <p className="lead">
                  Group and classify talent easily and effectively
                </p>
              </div>
            </div>
          </div>
          {/* <!-- row --> */}
        </div>
        {/* <!-- container --> */}
      </div>
      <div id="about_bg1">
        {/* <!-- container --> */}
        <div className="container">
          {/* <!-- row --> */}
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-5">
              <h1>Keeping The Competitive Edge</h1>
              <p className="lead">
                In a world that is changing more rapidly than ever before,
                market disruption is not a one-off event; it's an increasingly
                normal environment. Effective talent management and market
                understanding empowers winning cultures. However, it's becoming
                increasingly difficult to plan and resource talent needs in an
                ever changing world.
                <br />
                <br />
                The Consilium Intelligence platform will grow and evolve with
                your business. Our approach is founded on the belief that
                superior data and momentum creates more targeted and focused
                placement opportunities.
              </p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-7">
              <img src={services_image1} alt="" className="img-responsive" />
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
