import { styled } from "@mui/system";

export const Container = styled("div")({
  display:"flex",
  "& button.active": {
    backgroundColor: "#ccc",
    fontWeight: 600,
  },
  button: { 
    justifyContent:"space-between",
    display:"flex",
    width: "100%",
    cursor: "pointer",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    color: "inherit",
    outline: "none",
    backgroundColor: "#ddd",
    ":hover": {
      backgroundColor: "#ccc",
    },
    p: {
      height:"20px",
      display:"flex",
      svg:{
        margin:"0 10px",
        width:"20px",
      }, 
      fontFamily: "Roboto, sans-serif",
      fontSize: "16px",
      margin: "0",
      textAlign: "start",
      color: "#333333",
    },
  }
});

export const TitleIcon = styled("img")({
  width:"25px",
  height:"25px",
  marginRight:"5px",
});

export const DeletIcon = styled("img")({
  display:"flex",
  justifyContent:"end",
  width:"25px",
  height:"25px",
  right: 0,
});

export const DivIcon = styled("div")({
  display:"flex",
  alignItems:"center",
});