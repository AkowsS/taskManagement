import { styled } from "@mui/system";

export const Container = styled("div")({
  padding:"5px 0 15px 0",
});

export const DivTask = styled("div")({
  padding:"0 20px",
  borderRadius:"10px",
  height:"50px",
  display:"flex",
  backgroundColor:"#DDDDDD",
  justifyContent:"space-between",
  div:{
    width:"80%",
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
  },
});

export const DivForm = styled("div")({
  justifyContent:"center",
  display:"flex",
  form:{
    input:{
      padding:"10px",
      borderRadius:"20px",
    },
    div:{
      width:"100%",
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
      flexDirection:"column",
      input:{
        width:"200px",
      },
    },
    button:{
      borderRadius:"5px",
      backgroundColor: "#FFCC99",
      height:"30px",
      marginBottom:"10px",
    },
    "& button.editButton":{
      backgroundColor: "#E9FFC7",
    }
  },

});

export const DeletButton = styled("img")({
  width:"50px",
  height:"50px",
});


export const TitleTask = styled("p")({
  maxWidth:"100px",
  minWidth:"100px",
});