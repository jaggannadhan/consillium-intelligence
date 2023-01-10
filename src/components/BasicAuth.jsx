import React, { useState } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

function BasicAuth(props) {
  const [pass, setPass] = useState("");

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "2%",
        width: "15%",
        marginLeft: "45%"
      }}
    >
      <p>Please Enter your Password</p>
      <input
        type="password"
        onChange={e => setPass(e.target.value)}
        value={pass}
      />
      {pass === "Consilium2019!" ? (
        <Link to="/home">
          <button onClick={() => props.setAuth(false)}>Enter</button>
        </Link>
      ) : (
        ""
      )}
    </div>
  );
}

export default withRouter(BasicAuth);
