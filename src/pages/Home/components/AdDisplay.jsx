import { Paper } from "@mui/material";

const AdDisplay = ({ ads }) => {
  return (
    <>
      {ads.map((ad, index) => (
        <Paper
          onClick={() => {
            window.open(`${ad.url}`);
          }}
          key={index}
          elevation={0}
          style={{
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "90%",
            height: "120px",
            marginBottom: "10px",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              margin: "10px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <div
              style={{
                minHeight: "100px",
                minWidth: "100px",
                borderRadius: "5px",
                marginRight: "10px",

                backgroundImage: `url(${ad.photo})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            ></div>
            <div>
              <div
                style={{
                  // display: "flex",
                  // flexDirection: "column",
                  // flexWrap: "wrap",

                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  height: "52px",
                }}
              >
                {ad.headline}
              </div>
              <p>{ad.url}</p>
            </div>
          </div>
        </Paper>
      ))}
    </>
  );
};

export default AdDisplay;
