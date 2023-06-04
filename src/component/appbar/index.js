import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MobileAppbar from "./MobileAppbar";
import DesktopAppbar from "./DesktopAppbar";

const Appbar=()=>{
    const theme= useTheme()
    const matches=useMediaQuery(theme.breakpoints.down("md"))
    return (
        <>
            <h1>{matches?<MobileAppbar matches={matches}/>:<DesktopAppbar matches={matches}/>}</h1>
        </>
    )
}

export default Appbar;