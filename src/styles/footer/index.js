import { TextField, Typography, styled } from "@mui/material";
import { Colors } from "../theme";

export const FooterTitle= styled(Typography)(()=>({
    textTransform:'uppercase',
    marginTop:  "1em"
}))

export const SubscrbeTextField= styled(TextField)(() => ({
    ".MuiInputLabel-root": {
      color: Colors.secondary,
    },
  
    ".MuiInput-root::before": {
      borderBottom: `1px solid ${Colors.secondary}`,
    },
  }));