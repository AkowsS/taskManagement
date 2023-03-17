import { styled } from "@mui/system";

export const Container = styled("div")({
  padding:"20px 10px 0 0",
  width:"80%",
  display:"flex",
  flexDirection:"column",
  marginLeft:"15px",
  form:{
    marginTop:"25px",
    marginBottom:"10px",
    display:"flex",
    flexDirection:"column",
    input:{
      marginBottom:"10px",
    }
  }
});

export const ButtonAddTask = styled("button")({
  borderRadius: "20px",
  borderStyle: "groove",
  marginTop: "20px",
  backgroundColor: "#D5E4CF",
  width: "50px",
  height: "40px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderColor: "#BCB7B8",  
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
      backgroundColor: "#6EB4",
      height:"30px",
      marginBottom:"10px",
    },
  },
});

export const AddOrCancelTask = styled("img")({
  width:"20px",
  height:"20px",
});