import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Paper } from "@mui/material";

import { HEX, LOGIN_COMPANY_SUMMARY } from "../../misc/constants";
import { random, titleCase } from "../../misc/utils";
import { useStyles } from "./styles";
import { axiosSignup, axiosLogin } from "../../api/userCalls";
import InputForms from "./components/InputForms";
import { useFormInput } from "../../hooks/common";

export const VIEWS = {
  LOGIN: "LOGIN",
  SIGNUP: "SIGNUP",
};

const CORRESPONDING_VIEWS = {
  [VIEWS.LOGIN]: VIEWS.SIGNUP,
  [VIEWS.SIGNUP]: VIEWS.LOGIN,
};

const LoginPage = () => {
  const classes = useStyles();
  const history = useHistory();
  const nameInput = useFormInput("");
  const usernameInput = useFormInput("");
  const emailInput = useFormInput("");
  const passwordInput = useFormInput("");

  const [view, setView] = useState(VIEWS.LOGIN);

  const onLogin = async () => {
    try {
      const response = await axiosLogin({
        username: usernameInput.value,
        password: passwordInput.value,
      });

      if (response !== "OK") throw new Error("Login not successfull");

      window.location.href = "/home";
    } catch (e) {
      inputCleanup();
      alert("There was an error: " + e.message + " Please try again.");
    }
  };

  const onSignup = async () => {
    try {
      const response = await axiosSignup({
        name: titleCase(nameInput.value),
        username: usernameInput.value.toLowerCase(),
        email: emailInput.value.toLowerCase(),
        password: passwordInput.value,
        hex: random(HEX),
      });

      if (response !== "OK") throw new Error("Not able to sign up");

      setView(VIEWS.LOGIN);
      inputCleanup();
      alert("Account Created!");
    } catch (e) {
      inputCleanup();
      alert("There was an error. " + e.message + " Please try again.");
    }
  };

  const guestLogin = () => {
    history.push("/home");
  };

  const switchView = () => {
    setView(CORRESPONDING_VIEWS[view]);
  };

  const inputCleanup = () => {
    nameInput.clear();
    usernameInput.clear();
    emailInput.clear();
    passwordInput.clear();
  };

  return (
    <div className={classes.main}>
      <Paper elevation={6} className={classes.mainContainer}>
        <div className={classes.containerLeft}>
          <div style={{ marginLeft: "50px" }}>
            <h1
              style={{
                fontWeight: "800",
                fontSize: "60px",
                color: "white",
              }}
            >
              The Wall
            </h1>
            <h3
              style={{
                color: "white",
                marginLeft: "10px",
                marginBottom: "30px",
              }}
            >
              by Alvin Sewram
            </h3>
            <h3 style={{ color: "white", width: "90%" }}>
              {LOGIN_COMPANY_SUMMARY}
            </h3>
          </div>
        </div>
        <div className={classes.containerRight}>
          <h1
            style={{
              marginTop: "70px",
              marginBottom: "30px",
            }}
          >
            {view === VIEWS.LOGIN ? "Welcome Back" : "Create Account"}
          </h1>

          <InputForms
            onLogin={onLogin}
            guestLogin={guestLogin}
            onSignup={onSignup}
            nameInput={nameInput}
            usernameInput={usernameInput}
            emailInput={emailInput}
            passwordInput={passwordInput}
            view={view}
          />

          <h6
            style={{ marginBottom: "30px" }}
            className={classes.switcher}
            onClick={switchView}
          >
            {view === VIEWS.LOGIN
              ? "Want to make an account?"
              : "Already have an account?"}
          </h6>
        </div>
      </Paper>
    </div>
  );
};

export default LoginPage;
