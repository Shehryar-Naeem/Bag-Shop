import { TextField, styled } from "@mui/material";
import { Box } from "@mui/system";
import { Colors, theme } from "../theme";

export const SearchContainer=styled(Box)(()=>({
    position:'fixed',
    top:0,
    left:0,
    width:'100%',
    height:'100%',
    background:Colors.primary,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    zIndex:9999,
    opacity:0.9
}))

export const SearchField= styled(TextField)(({theme})=>({
    ".MuiInputLabel-root":{
        color:Colors.secondary
    },
    ".MuiInput-root":{
        fontSize:"1rem",
        [theme.breakpoints.up("md")]:{
            fontSize:"2rem"
        },
        color:Colors.secondary
    },
    ".MuiInput-root::before":{
        borderBottom:`1px solid ${Colors.secondary}`
    },
    padding:'0 0 0 40px'
}))