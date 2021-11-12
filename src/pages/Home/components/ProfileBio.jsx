import { Paper } from "@mui/material";

const ProfileBio = ({ profile }) => {
  console.log("profile bio profile", profile);
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
          justifyContent: "center",
          flexDirection: "column",
          width: "90%",
          marginTop: "30px",
          marginBottom: "30px",
        }}
      >
        <div
          style={{
            height: "70px",
            width: "70px",
            color: "white",
            backgroundColor: `${!profile.hex ? "grey" : profile.hex}`,
            borderRadius: "5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "50px",
            cursor: "pointer",
            marginBottom: "15px",
          }}
        >
          {profile.name && profile.name[0].toUpperCase()}
        </div>
        <h3 style={{ fontSize: "20px" }}>{profile.name}</h3>
        <h3 style={{ color: "grey" }}>@{profile.username}</h3>
      </div>
    </Paper>
  );
};

export default ProfileBio;
