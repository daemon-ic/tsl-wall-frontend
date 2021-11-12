import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    minHeight: "80vh",
    alignItems: "flex-start",
    marginTop: "30px",
  },
  menu: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "25%",
    minWidth: "50px",
    [theme.breakpoints.down("md")]: {
      width: "10%",
    },
  },
  ads: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "25%",
    minWidth: "300px",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  wall: {
    display: "flex",
    flexDirection: "column",
    width: "50%",
    justifyContent: "flex-start",
    alignItems: "center",
    minWidth: "300px",
    overflow: "auto",
    height: "85vh",
    [theme.breakpoints.down("md")]: {
      width: "90%",
    },
  },
  menuText: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  menuButtons: {
    display: "flex",
    height: "50px",
    alignItems: "center",
    cursor: "pointer",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  },
}));
