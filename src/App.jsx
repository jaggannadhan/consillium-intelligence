import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
// import "./css/App.css";
import FooterComponent from "./components/commonComponents/FooterComponent";
// import BasicAuth from "./components/BasicAuth";

import HomePage from "./pages/homePage";
import About from "./pages/about";
import Services from "./pages/services";
import MoreInfo from "./pages/moreInfo";
import Privacy from "./pages/privacy";
import MemberAccess from "./pages/memberAccess";
import AuthMethod from "./pages/authenticationMethods";
import MobileAuth from "./pages/mobileAuth";
import EmailAuth from "./pages/emailAuth";
import PodCast from "./pages/podCast";
import ReactGA from "react-ga";
import TagManager from "react-gtm-module";
import LinkedInTag from "react-linkedin-insight";

LinkedInTag.init("1712268");
LinkedInTag.track("1677276");

const tagManagerArgs = {
  gtmId: "GTM-KTTNDKW" // Replace with your tag manager id
};

TagManager.initialize(tagManagerArgs);

const trackingId = "UA-148373290-1"; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);

ReactGA.event({
  category: "User",
  action: "Sent message"
});

function App() {
  const [path, setPath] = useState("home");
  const [auth, setAuth] = useState(true);

  ReactGA.pageview(window.location.pathname + window.location.search);

  return (
    <div className="App">
      {/* {auth ? (
        <Route exact path="/" render={() => <BasicAuth setAuth={setAuth} />} />
      ) : ( */}
      <React.Fragment>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <HomePage path={path} setPath={setPath} />}
          />
          <Route
            exact
            path="/about"
            render={() => <About path={path} setPath={setPath} />}
          />
          <Route
            exact
            path="/services"
            render={() => <Services path={path} setPath={setPath} />}
          />
          <Route
            exact
            path="/more_info"
            render={() => <MoreInfo path={path} setPath={setPath} />}
          />
          <Route
            exact
            path="/member_access"
            render={() => <MemberAccess path={path} setPath={setPath} />}
          />
          <Route
            exact
            path="/privacy"
            render={() => <Privacy tab="privacy" />}
          />
          <Route exact path="/terms" render={() => <Privacy tab="terms" />} />
          <Route exact path="/auth_method" render={() => <AuthMethod />} />
          <Route exact path="/mobile_auth" render={() => <MobileAuth />} />
          <Route exact path="/email_auth" render={() => <EmailAuth />} />
          <Route
            exact
            path="/podcast"
            render={() => <PodCast path={path} setPath={setPath} />}
          />
        </Switch>
        <FooterComponent setPath={setPath} />
      </React.Fragment>
      {/* )} */}
    </div>
  );
}

export default App;
