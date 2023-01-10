import React from "react";
import PageHeader from "./pagesHeader";
import MetaTags from "react-meta-tags";

export default function MemberAccess(props) {
  return (
    <div className="wrapper">
      <MetaTags>
        <title> AI-Powered Talent Search for Alternatives, Investment Banking and Technology</title>
        <meta name="description" content="We help you instantly identify, track, engage and close talent opportunities by using our proprietary blend of artificial intelligence and leading technology." />
      </MetaTags>
      <PageHeader path={props.path} setPath={props.setPath} />
      {/* <!-- Content Wrapper. Contains page content -->
            <!-- Main content --> */}
      <section className="bg_white min_hei_500">
        <div
          className="col-sm-12 col-md-6 col-lg-4 col-md-offset-3 col-lg-offset-4"
          style={{ paddingBottom: "200px" }}
        >
          <div className="mar_top_50" id="mem_log">
            <h1 className="text-center">Member Login</h1>
            <p className="form_text1 mar_top_20">Email Address</p>
            <input type="text" placeholder="Email address" />
            <p className="form_text1">Password</p>
            <input type="text" placeholder="Password" />
            <p className="form_text1">
              <a href="#" id="for_pass">
                Forgot Password
              </a>
            </p>
            <button
              type="button"
              className="main-button icon-button btn-block mar_top_20"
            >
              Sign In
            </button>
            <p className="form_text1 text-center" style={{ marginTop: "20px" }}>
              Not a Member? &nbsp; &nbsp; &nbsp;{" "}
              <a href="/more_info">Request more info</a>
            </p>
            <div className="clearfix"></div>
          </div>
          <div className="mar_top_50" id="for_pas1" style={{ display: "none" }}>
            <h1 className="text-center">
              <strong>Forgot Password</strong>
            </h1>
            <p className="form_text1  text-center">
              Please enter your email below to reset password
            </p>
            <p className="form_text1 mar_top_30">Email address</p>
            <input type="text" placeholder="Email address" />
            <button
              type="button"
              className="btn btn-primary btn-block mar_top_20"
            >
              Reset
            </button>
            <p className="form_text1 text-center mar_top_20">
              <a href="#" id="cancel">
                Cancel
              </a>
            </p>
            <div className="clearfix"></div>
          </div>
          <div className="clearfix"></div>
        </div>
        {/* <!-- /.content --> */}
        <div className="clearfix"></div>
        {/* <!-- /.content-wrapper --> */}
        <div className="clearfix"></div>
      </section>
    </div>
  );
}
