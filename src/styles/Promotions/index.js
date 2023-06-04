import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import { Colors } from "../theme";

export const PromotionsContainer= styled(Box)(({theme})=>({
    [theme.breakpoints.up("md")]:{
        padding:"40px 0px",
    },
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    overflow:"hidden",
    padding:"20px 0px",
    background:Colors.secondary
}))

export const MessageText=styled(Typography)(({theme})=>({
   fontFamily:'"Montez","cursive"',
   [theme.breakpoints.up("md")]:{
        fontSize:"3rem"
   },
   color:Colors.white,
   fontSize:"1.5rem"
}))