import { styled } from "@mui/system";

export const Container = styled("div")({
  display:"flex",
  width: "100%",
  height: "auto",
  h1:{
    fontSize:"1.5em",
    fontFamily: "Roboto, sans-serif",
    padding:"10px",
    margin:"0",
    marginTop:"10px",
    color:"#333333",
  },
});

export const Menu = styled("div")({
  minWidth: "210px",
  maxWidth:"260px",
  width: "20%",
  height: "calc(100vh - 154px)",
  background: "#ddd",
  padding: "20px",
  display:"flex",
  flexDirection:"column",
  ul:{
    paddingLeft:"0",
  },
  button: {
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
      alignItems:"center",
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
  },
});

export const DivInput = styled("div")({
  width:"100%",
  marginLeft:"5px",
  display:"flex",
  flexDirection:"column",
  justifyContent:"center",
  alignItems:"center",
  padding:"10px",
  boxSizing:"border-box",
  input:{
    width:"-webkit-fill-available",
    height:"19px",
    padding:"10px",
    borderRadius:"5px",
    border:"1px solid #aaa",
    outline:"none",
    marginBottom:"10px",
    textarea:{
      padding: "20px",
    },
  }, 
  div:{
    display:"flex",
    width:"100%",
    height:"41px",
    justifyContent:"space-between",
    gap:"20px",
  },
});

export const AddButton = styled("button")({
  width:"100% !important",
  border:"1px solid #99dd99 !important",
  backgroundColor:"#aaffaa !important",
  fontWeight:"bold",
  outline:"none",
  borderRadius:"5px",
});

export const CancelButton = styled("button")({
  width:"100% !important",
  border:"1px solid #eeadad !important",
  backgroundColor:"#ffbebe !important",
  fontWeight:"bold",
  outline:"none",
  borderRadius:"5px",
});