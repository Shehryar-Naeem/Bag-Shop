    import { IconButton, List, Typography } from "@mui/material";
    import { styled } from "@mui/material/styles";
    import { Box,  } from "@mui/system";
    import { Colors } from "../theme";
    import "@fontsource/montez"

    export const AppbarContainer= styled(Box)(()=>({
        display:"flex",
        marginTop:4,
        justifyContent:"center",
        alignItems:"center",
        padding:"2px 8px"
    }))

    export const AppbarHeader= styled(Typography)(()=>({
        padding:"4px",
        flexGrow:1,
        fontSize:"2em",
        color:Colors.secondary,
        fontFamily: '"Montez", "cursive"',
    }))
    export const AppbarList= styled(List)(({type})=>({
        display:type==="row"?"flex":"block",
        flexGrow:3,
        justifyContent:"center",
        alignItems:"center"
    }))

    export const ActionIconContainerDesktop= styled(Box)(()=>({
        flexGrow:0
    }))
    export const ActionIconContainerMobile= styled(Box)(()=>({
        display: 'flex',
        background: Colors.shaft,
        position: "fixed",
        bottom: 0,
        left: 0,
        width: '100%',
        alignItems: 'center',
        zIndex: 99,  
        borderTop: `1px solid ${Colors.border}`
    }))
export const CloseDrawer=styled(IconButton)(()=>({
    position:"absolute",
    top:"10px",
    left:"250px",
    zIndex:1999
}))