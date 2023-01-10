import React, { useState } from "react";
import PageHeader from "./pagesHeader";
import MetaTags from "react-meta-tags";

export default function MoreInfo(props) {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
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
    } else if (!company) {
      setErrorInput("company");
      console.log("fill company");
      return "false";
    } else if (!email || !validateEmail(email)) {
      setErrorInput("email");
      console.log("fill email");
      return "false";
    } else if (!message) {
      setErrorInput("message");
      console.log("fill message");
      return "false";
    }
    // const apiCode =
    //   "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";

    // await fetch("https://api.sendgrid.com/v3/mail/send", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     personalizations: [
    //       {
    //         to: [
    //           {
    //             // email: "naveen@datashaft.in",
    //             email: "bhaskesaravanan@gmail.com",
    //             name: "Test"
    //           }
    //         ],
    //         subject: "MORE INFO"
    //       }
    //     ],
    //     from: {
    //       email: email
    //     },
    //     reply_to: {
    //       email: email
    //     },
    //     content: [
    //       {
    //         type: "text/plain",
    //         value: `Name: ${name},
    //                 Company: ${company},
    //                 Email: ${email},
    //                 Message: ${message}`
    //       }
    //     ]
    //   }),
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${apiCode}`,
    //     "Access-Control-Allow-Origin": "*"
    //   }
    // });

    // setSentEmail(true);

    const url = `https://consiliumintelligence.com/contact/emailServer.php`;
    console.log(`register twilio token`);
    try {
      const reqObj = {
        method: "POST",
        credentials: "same-origin",
        body: JSON.stringify({
          name: name,
          company: company,
          email: email,
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
        <title>
          Innovative Talent Search for Alternatives, Investments Banking and
          Technology
        </title>
        <meta
          name="description"
          content="With the power of AI and industry leading technology we keep you ahead of your competition by helping you analyze trends to understand evolving talent opportunities. Connect with us today to find out more."
        />
      </MetaTags>
      <PageHeader path={props.path} setPath={props.setPath} />
      <div className="container hero-area1" style={{ textAlign: "left" }}>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 hero-area3">
            <h1 className="text-center">Request More Information</h1>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 more_info">
            <p>
              Email
              <br />
              <a href="mailto:info@consilumintelligence.com" target="_blank">
                info@consilumintelligence.com
              </a>
            </p>
            <hr />
            <p>Phone</p>
            <p className="phone">
              Americas :{" "}
              <a href="tel:+1 732 832 1653" target="_blank">
                {" "}
                +1 732 832 1653
              </a>
            </p>
            <p className="phone">
              Global :{" "}
              <a href="tel:+44 7470 775 488" target="_blank">
                {" "}
                +44 7470 775 488
              </a>
            </p>
            <p className="phone">
              Europe :{" "}
              <a href="tel:+44 7800 581 341" target="_blank">
                {" "}
                +44 7800 581 341
              </a>
            </p>
            <hr />
            <p>Address</p>
            <p className="phone">
              60 Broad St, New York, NY 10004, United States
            </p>
            <hr />
            <a
              href="https://www.facebook.com/ConsiliumAI"
              target="_blank"
              className="so"
            >
              <i className="fa fa-facebook-official" aria-hidden="true"></i>
            </a>
            <a
              href="https://www.instagram.com/consiliumai/"
              target="_blank"
              className="so"
            >
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/consilium-intelligence/"
              target="_blank"
              className="so"
            >
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </a>
            <a
              href="https://twitter.com/ConsiliumAI"
              target="_blank"
              className="so"
            >
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </a>
            <div className="clearfix"></div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <p className="form_text1">
              Name <span className="red">*</span>
            </p>
            <input
              type="text"
              placeholder="Name"
              onChange={e => setName(e.target.value)}
              className={errorInput === "name" ? "errorborder" : ""}
            />
            <p className="form_text1">
              Company <span className="red">*</span>
            </p>
            <input
              type="text"
              placeholder="Company"
              onChange={e => setCompany(e.target.value)}
              className={errorInput === "company" ? "errorborder" : ""}
            />
            <p className="form_text1">
              Email <span className="red">*</span>
            </p>
            <input
              type="text"
              placeholder="Email"
              onChange={e => setEmail(e.target.value)}
              className={errorInput === "email" ? "errorborder" : ""}
            />
            <p className="form_text1">
              Message <span className="red">*</span>
            </p>
            <textarea
              className={errorInput === "message" ? "errorborder" : ""}
              onChange={e => setMessage(e.target.value)}
            ></textarea>
            <button
              className="main-button icon-button"
              href="#"
              style={{ color: "white" }}
              onClick={() => sendEmail()}
            >
              <img
                height="1"
                width="1"
                style={{ display: "none" }}
                alt=""
                src={`https://px.ads.linkedin.com/collect/?pid=1712268&conversionId=1677276&fmt=gif`}
              />
              Send
            </button>
            {sentEmail && (
              <p
                className="alert-success"
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
        </div>
      </div>
      {/* <div id='preloader'>
                <div className='preloader'></div>
            </div> */}
    </React.Fragment>
  );
}
