import { styled } from "@mui/system";

export const Container = styled("div")({
  position:"absolute",
  bottom:"0",
  width: "100%",
  height: "50px",
  backgroundColor: "#333",
  div:{
    display:"flex",
    justifyContent:"center",
  },
  p:{
    color:"white",
    textAlign:"center",
  },
});