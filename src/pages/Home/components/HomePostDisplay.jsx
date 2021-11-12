import { Paper } from "@mui/material";
import { smartTimestamp } from "../utils";

const HomePostDisplay = ({ posts, goToUser }) => {
  return (
    <>
      {posts.map((post, index) => (
        <Paper
          key={post.id}
          elevation={0}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: "95%",
            marginBottom: "10px",
            paddingTop: "25px",
            paddingBottom: "15px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              flexDirection: "column",
              height: "80%",
              width: "90%",
            }}
          >
            <div style={{ width: "100%" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  marginBottom: "10px",
                }}
              >
                <div
                  onClick={() => goToUser(post.userId)}
                  style={{
                    height: "50px",
                    width: "50px",
                    color: "white",
                    backgroundColor: `${!post.userHex ? "grey" : post.userHex}`,
                    marginRight: "15px",
                    borderRadius: "5px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "40px",
                    cursor: "pointer",
                  }}
                >
                  {post.name && post.name[0] && post.name[0].toUpperCase()}
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-around",
                    flexDirection: "column",
                  }}
                >
                  <h3
                    style={{ cursor: "pointer" }}
                    onClick={() => goToUser(post.username)}
                  >
                    {post.name}
                  </h3>
                  <p>{smartTimestamp(post.timestamp)}</p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: "10px" }}>{post.postMessage}</div>
          </div>
        </Paper>
      ))}
    </>
  );
};

export default HomePostDisplay;
