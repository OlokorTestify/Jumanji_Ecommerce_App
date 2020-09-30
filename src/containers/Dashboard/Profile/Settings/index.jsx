import React, { useState } from "react";
import Account from "./Account";
import Security from "./Security";
import "./style.css";

const Settings = () => {
  const [state, setState] = useState("account");
  return (
    <>
      <div className="settings_section">
        <div className="item-header">
          <p
            className={state === "account" ? "active_tab" : null}
            onClick={() => setState("account")}
          >
            Account
          </p>
          <p
            className={`security_tab ${
              state === "security" ? "active_tab" : null
            }`}
            onClick={() => setState("security")}
          >
            Security
          </p>
        </div>
        <div>
          {state === "account" && <Account />}
          {state === "security" && <Security />}
        </div>
      </div>
    </>
  );
};

export default Settings;
