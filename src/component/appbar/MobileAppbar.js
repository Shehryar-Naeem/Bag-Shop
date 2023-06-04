import { IconButton } from "@mui/material"
import { AppbarContainer, AppbarHeader } from "../../styles/Appbar"
import { Menu, Search } from "@mui/icons-material"
import { AppbarAction } from "./Action"
import { UseUIContext } from "../../context/ui"

const MobileAppbar=({matches})=>{
    const {setDrawerOpen,setSearchOpen} =UseUIContext()
    return (
        <>
            <AppbarContainer>
                <IconButton onClick={()=>setDrawerOpen(true)}>
                    <Menu/>
                </IconButton>
                <AppbarHeader textAlign={"center"} variant="h4">
                    My Bags
                </AppbarHeader>
                <IconButton onClick={()=>setSearchOpen(true)}>
                    <Search/>
                </IconButton>
                <AppbarAction  matches={matches}/>
            </AppbarContainer>
        </>
    )
}

export default MobileAppbar