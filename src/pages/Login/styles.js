import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  main: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  mainContainer: {
    display: "flex",
    height: "500px",
    width: "80vw",
    minWidth: "800px",
    [theme.breakpoints.down("md")]: { width: "60vw", minWidth: "350px" },
  },
  containerLeft: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "60%",
    backgroundColor: "#bbd9ed",
    borderRadius: "5px 0px 0px 5px",

    backgroundImage: `url(/images/blue-bg.jpeg)`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",

    [theme.breakpoints.down("md")]: { display: "none" },
  },
  containerRight: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "40%",
    height: "100%",
    borderRadius: "0px 5px 5px 0px",
    [theme.breakpoints.down("md")]: { width: "100%" },
  },

  inputContiner: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "70%",
  },

  input: {
    paddingLeft: "20px",
    paddingRight: "20px",
    borderRadius: "50px",
    height: "40px",
    display: "flex",
    marginBottom: "20px",
    width: "100%",
    backgroundColor: "#F8F9FF",
  },
  switcher: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  },
}));
