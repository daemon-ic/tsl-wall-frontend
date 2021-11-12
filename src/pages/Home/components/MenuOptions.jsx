import { Divider, Paper } from "@mui/material";
import { Home, Person, Settings, Logout, ExitToApp } from "@mui/icons-material";
import { useHistory } from "react-router-dom";
import { useStyles } from "../styles";
import { useUserContext } from "../../../context/UserContext";
import { axiosLogout } from "../../../api/userCalls";
import { pathAndButtonMatch } from "../utils";

const ICON_MAP = {
  Home: <Home />,
  Profile: <Person />,
  Settings: <Settings />,
  Logout: <Logout />,
  "Log In": <ExitToApp />,
};

const MenuOptions = ({ getProfile, options }) => {
  const classes = useStyles();
  const history = useHistory();
  const { user, setUser } = useUserContext();

  const changePage = async (path, id) => {
    if (path === "/logout") {
      console.log("LOGOUT FIRED");
      await axiosLogout();
      setUser(null);
      history.push("/");
      return;
    }

    if (path === "/profile") {
      history.push(path + "/" + user.username);
      if (getProfile) getProfile(user.username);
      return;
    }

    if (path === null) return;

    history.push(path);
  };

  pathAndButtonMatch("Profile");

  return (
    <Paper
      elevation={0}
      style={{
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        dispay: "flex",
        width: "90%",
      }}
    >
      <div style={{ width: "90%" }}>
        {options.map((button, index) => (
          <>
            <div
              key={index}
              style={
                pathAndButtonMatch(button.title) ? { color: "#1976d2" } : null
              }
              className={classes.menuButtons}
              onClick={() => changePage(button.path)}
            >
              <div style={{ marginRight: "10px" }}>
                {ICON_MAP[button.title]}
              </div>
              <h3 className={classes.menuText}>{button.title}</h3>
            </div>
            {index !== options.length - 1 ? <Divider /> : null}
          </>
        ))}
      </div>
    </Paper>
  );
};

export default MenuOptions;
