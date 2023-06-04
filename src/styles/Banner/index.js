import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../theme";

// const theme = useTheme()

export const BannerContainer= styled(Box)(({theme})=>({
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    padding: "0px 0px",
    background: Colors.light_gray,
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center"
    }
}))
export const BannerImage= styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  // backgroundImage: `url(${src})`,
  // backgroundRepeat: "no-repeat",
  // backgroundPosition: "center",
  width: "35 0px",
  height:"300px",
  [theme.breakpoints.down("md")]: {
    width: "350px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "320px",
    height: "300px",
  },
}));
export const BannerContent = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    maxWidth: 420,
    padding: "30px",
  }));
  export const BannerTitle = styled(Typography)(({ matches, theme }) => ({
    lineHeight: 1.5,
    fontSize: "72px",
    marginBottom: "20px",
    [theme.breakpoints.down('sm')]: {
      fontSize: '42px',    
    }
  }));
  
  export const BannerDescription = styled(Typography)(({ theme }) => ({
    lineHeight: 1.25,
    letterSpacing: 1.25,
    marginBottom: "3em",
    [theme.breakpoints.down("md")]: {
      lineHeight: 1.15,
      letterSpacing: 1.15,
      marginBottom: "1.5em",
    },
  }))

  export const BannerShopButton= styled(Button, 
    {
      shouldForwardProp:(prop)=>prop!=='color',
      name:'MyShopButton',
      slot:'root',
      overridesResolver:(prop,styles)=>[
        styles.root,
        prop.color==='primary'&& styles.primary,
        prop.color==='secondary' && styles.secondary
      ]
    }
    )(({theme})=>({
      padding:'20px 0px',
      color:Colors.white,
      fontWeight:'bold',
      fontSize:'16px',
      [theme.breakpoints.down("sm")]: {
        padding: "10px 0px",
        fontSize: "14px",
      },
  }))