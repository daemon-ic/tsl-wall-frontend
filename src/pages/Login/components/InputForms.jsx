import { InputBase, Button } from "@mui/material";
import { VIEWS } from "..";
import { useStyles } from "../styles";

const InputForms = ({
  onLogin,
  onSignup,
  guestLogin,
  nameInput,
  usernameInput,
  emailInput,
  passwordInput,
  view,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.inputContiner}>
      {view === VIEWS.SIGNUP && (
        <>
          <InputBase
            className={classes.input}
            placeholder="Name"
            {...nameInput}
          />
          <InputBase
            className={classes.input}
            placeholder="Email"
            {...emailInput}
          />
        </>
      )}
      <InputBase
        className={classes.input}
        placeholder="Username ( Numbers and letters only )"
        {...usernameInput}
      />

      <InputBase
        type={"password"}
        className={classes.input}
        placeholder="Password"
        {...passwordInput}
      />

      {view === VIEWS.LOGIN ? (
        <>
          <Button onClick={onLogin}>Login</Button>
          <Button style={{ marginTop: "20px" }} onClick={guestLogin}>
            Login As Guest
          </Button>
        </>
      ) : (
        <Button
          style={{ marginTop: "20px", marginBottom: "20px" }}
          onClick={onSignup}
        >
          Sign up
        </Button>
      )}
    </div>
  );
};

export default InputForms;
