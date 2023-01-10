import React, { useState } from "react";
import apple_podcasts from "../images/apple_podcasts.png";
import google_podcasts from "../images/google_podcasts.png";
import spotify from "../images/spotify.png";
import banner_image from "../images/banner_image.jpg";
import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";
import icon3 from "../images/icon3.png";
import icon4 from "../images/icon4.png";
import icon5 from "../images/icon5.png";
import peter from "../images/peter.jpg";
import mark from "../images/mark.jpg";
import PageHeader from "./pagesHeader";
import MetaTags from "react-meta-tags";

export default function PodCast(props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [position, setposition] = useState("");
  const [message, setMessage] = useState("");
  const [errorInput, setErrorInput] = useState("");
  const [sentEmail, setSentEmail] = useState(false);

  function validateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    return false;
  }

  async function sendEmail() {
    if (!name) {
      setErrorInput("name");
      console.log("fill name");
      return "false";
    } else if (!phone) {
      setErrorInput("phone");
      console.log("fill phone");
      return "false";
    } else if (!email || !validateEmail(email)) {
      setErrorInput("email");
      console.log("fill email");
      return "false";
    } else if (!company) {
      setErrorInput("company");
      console.log("fill company");
      return "false";
    } else if (!position) {
      setErrorInput("position");
      console.log("fill position");
      return "false";
    } else if (!message) {
      setErrorInput("message");
      console.log("fill message");
      return "false";
    }

    const url = `https://consiliumintelligence.com/contact/podsemailServer.php`;
    console.log(`register twilio token`);
    try {
      const reqObj = {
        method: "POST",
        credentials: "same-origin",
        body: JSON.stringify({
          name: name,
          company: company,
          phone: phone,
          email: email,
          position: position,
          message: message
        })
      };
      const result = await fetch(url, reqObj);
      const response = await result.json();
      if (response.sent) {
        return setSentEmail(true);
      } else if (!response.sent) {
        return setSentEmail(false);
      }
      return response;
    } catch (err) {
      console.log(err);
    }
    return null;
  }

  return (
    <React.Fragment>
      <MetaTags>
        <title>Talent Acquisition Podcast | Recruiting Platform for Hedge Funds | Data Driven Executive Search</title>
        <meta name="description" content="Immerse yourself in the world of data science, cultural alignment, and technology with your hosts -- Peter and Mark" />
      </MetaTags>
      {<PageHeader path={props.path} setPath={props.setPath} />}
      <div id="home" className="hero-area">
        {/* <!-- Backgound Image --> */}
        <div
          className="bg-image bg-parallax overlay"
          style={{ backgroundImage: `url(${banner_image})` }}
        ></div>
        {/* <!-- /Backgound Image --> */}
        <div className="home-wrapper">
          <div className="container podcast">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12">
                <h1 className="white-textnw">
                  The Talent Intelligence Podcast
                </h1>
                <p className="lead nw white-text">
                  Conversations on how to Identify, Track & Engage
                  <br />
                  Top Strategic Talent
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-area2">
        <div className="container">
          <h4 className="text-center">LISTEN TODAY</h4>
          <div className="image_center">
            <img src={apple_podcasts} alt="apple" />
            <img src={spotify} alt="spotify" />
            <img src={google_podcasts} alt="google" />
          </div>
        </div>
      </div>
      <div className="hero-arean1 home_textn1 ">
        <div className="container">
          Join Peter and Mark as they dive into the world of data science,
          cultural alignment, and technology in the competitive fields of
          alternatives, investment banking and tech verticals. Listen in as they
          debate the latest techniques in identifying, connecting and retaining
          the world's top minds and most sought-after talent.
        </div>
      </div>
      <div id="about">
        {/* <!-- container --> */}
        <div className="container">
          {/* <!-- row --> */}
          <div className="row">
            <div className="home_iconswn">
              <img src={icon1} alt="icon1" />
              <h3>Young Talent</h3>
            </div>
            <div className="home_iconswn">
              <img src={icon2} alt="icon2" />
              <h3>Top Firms</h3>
            </div>
            <div className="home_iconswn">
              <img src={icon3} alt="icon3" />
              <h3>Succession Planning</h3>
            </div>
            <div className="home_iconswn">
              <img src={icon4} alt="icon4" />
              <h3>Diversity</h3>
            </div>
            <div className="home_iconswn">
              <img src={icon5} alt="icon5" />
              <h3>Talent Value</h3>
            </div>
          </div>
          {/* <!-- row --> */}
        </div>
        {/* <!-- container --> */}
      </div>
      <div id="home_bg1" className="section mar_bot_50">
        {/* <!-- container --> */}
        <div className="container">
          {/* <!-- row --> */}
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-8 col-lg-offset-2">
              <h1 className="text-center podhmbg">Your Hosts</h1>
              <div className="row">
                <div className="col-sm-12 col-md-8 col-lg-8">
                  <h2>Peter Smith</h2>
                  <p className="lead">
                    Peter is the Founder of the Consilium Group and Co-Founder
                    and CEO of Consilium Intelligence. He is responsible for
                    corporate and client strategy, business development and
                    client solutions at Consilium Intelligence. With over 20
                    years’ experience within global executive search, Peter has
                    completed hundreds of strategic searches across investment
                    banking and global markets, alternatives and fintech. He is
                    a trusted advisor to global CEOs, business leaders,
                    principals and boards across the US, Europe and Asia. He is
                    also the Founder and CEO of Consilium Global Advisors, a
                    leadership search and talent advisory boutique delivering
                    search solutions to the world’s leading banking,
                    alternatives and fintech firms. Prior to Consilium Global
                    Advisors, Peter was a senior partner, global markets and
                    banking leader for 8 years at Heidrick & Struggles.
                  </p>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4 image_center">
                  <img src={peter} alt="peter" className="img-responsive" />
                </div>
              </div>
              <div className="row hide986">
                <div className="col-sm-12 col-md-4 col-lg-4 image_center">
                  <img src={mark} alt="mark" className="img-responsive" />
                </div>
                <div className="col-sm-12 col-md-8 col-lg-8">
                  <h2>Mark Bright</h2>
                  <p className="lead">
                    Mark is a Co-Founder and COO of Consilium Intelligence,
                    responsible for business strategy, operations, finance and
                    technology. Before Consilium, Mark was a co-founder and
                    senior partner of the award-winning businesses, GFP Juniper
                    and Juniper Place, which are focused on institutional
                    investor intelligence and capital raising for the
                    alternatives industry. Prior to that, Mark was at Citi as
                    Managing Director and Global Head of Emerging Markets for
                    Prime Brokerage and Futures. During his 17 years at Citi, he
                    held a number of senior management positions across
                    equities, derivatives, risk management and operations.
                  </p>
                </div>
              </div>
              <div className="row show986">
                <div className="col-sm-12 col-md-8 col-lg-8">
                  <h2>Mark Bright</h2>
                  <p className="lead">
                    Mark is a Co-Founder and COO of Consilium Intelligence,
                    responsible for business strategy, operations, finance and
                    technology. Before Consilium, Mark was a co-founder and
                    senior partner of the award-winning businesses, GFP Juniper
                    and Juniper Place, which are focused on institutional
                    investor intelligence and capital raising for the
                    alternatives industry. Prior to that, Mark was at Citi as
                    Managing Director and Global Head of Emerging Markets for
                    Prime Brokerage and Futures. During his 17 years at Citi, he
                    held a number of senior management positions across
                    equities, derivatives, risk management and operations.
                  </p>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4 image_center">
                  <img src={mark} alt="mark" className="img-responsive" />
                </div>
              </div>
            </div>
          </div>
          {/* <!-- /row --> */}
        </div>
        {/* <!-- /container --> */}
      </div>
      <div id="contact" className="mar_bot_50">
        {/* <!-- container --> */}
        <div className="container">
          {/* <!-- row --> */}
          <div className="row">
            <div className="col-sm-12 col-md-8 col-lg-8 col-lg-offset-2">
              <h1 className="text-center podh1guest">
                Interested in being a guest?
              </h1>
              <p className="lead text-center">Tell us about yourself</p>
              <form name="" method="post">
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-12">
                    <p className="form_text1">Name *</p>
                    <input
                      type="text"
                      placeholder="Name"
                      name="name"
                      id="name"
                      onChange={e => setName(e.target.value)}
                      className={errorInput === "name" ? "errorborder" : ""}
                    />
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-6">
                    <p className="form_text1">Phone *</p>
                    <input
                      type="text"
                      placeholder="Phone"
                      name="phone"
                      id="phone"
                      onChange={e => setPhone(e.target.value)}
                      className={errorInput === "phone" ? "errorborder" : ""}
                    />
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-6">
                    <p className="form_text1">Email *</p>
                    <input
                      type="text"
                      placeholder="Email"
                      name="email"
                      id="email"
                      onChange={e => setEmail(e.target.value)}
                      className={errorInput === "email" ? "errorborder" : ""}
                    />
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-6">
                    <p className="form_text1">Company *</p>
                    <input
                      type="text"
                      placeholder="Company"
                      name="company"
                      id="company"
                      onChange={e => setCompany(e.target.value)}
                      className={errorInput === "company" ? "errorborder" : ""}
                    />
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-6">
                    <p className="form_text1">Position *</p>
                    <input
                      type="text"
                      placeholder="Position"
                      name="position"
                      id="position"
                      onChange={e => setposition(e.target.value)}
                      className={errorInput === "position" ? "errorborder" : ""}
                    />
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-12">
                    <p className="form_text1">Message *</p>
                    <textarea
                      placeholder="Message"
                      name="message"
                      id="message"
                      className={errorInput === "message" ? "errorborder" : ""}
                      onChange={e => setMessage(e.target.value)}
                    ></textarea>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-6 col-lg-offset-3 text-center">
                    <button
                      type="button"
                      className="submit_bt"
                      onClick={() => sendEmail()}
                    >
                      Submit
                    </button>
                  </div>
                </div>
                <div
                  style={{
                    textAlign: "center"
                  }}
                >
                  {" "}
                  {sentEmail && (
                    <p
                      style={{
                        color: "cadetblue",
                        marginTop: "17px",
                        fontWeight: "bold",
                        textAlign: "center"
                      }}
                    >
                      Thank you for contacting us, We will get in touch with you
                      shortly.
                    </p>
                  )}
                </div>
                <div className="clearfix"></div>
              </form>
            </div>
          </div>
          {/* <!-- /row --> */}
        </div>
        <div className="clearfix"></div>
        {/* <!-- /container --> */}
      </div>
    </React.Fragment>
  );
}
