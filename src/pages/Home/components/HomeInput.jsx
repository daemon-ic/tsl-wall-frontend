import { TextField, Button, Paper, InputBase } from "@mui/material/";

const HomeInput = ({ input, makePost }) => {
  return (
    <Paper
      elevation={0}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        width: "95%",
        marginBottom: "30px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "90%",
        }}
      >
        <InputBase
          style={{
            width: "100%",
            paddingTop: "5px",
            paddingBottom: "5px",
            height: "60px",
          }}
          placeholder="What's on your mind?"
          {...input}
        />
        <Button onClick={makePost}>Post</Button>
      </div>
    </Paper>
  );
};

export default HomeInput;
