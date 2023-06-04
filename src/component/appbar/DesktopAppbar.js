import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { AppbarContainer, AppbarHeader, AppbarList } from "../../styles/Appbar"
import { Search } from "@mui/icons-material"
import { AppbarAction } from "./Action"
import { UseUIContext } from "../../context/ui"

const DesktopAppbar=({matches})=>{
    const {setSearchOpen} =UseUIContext()

    return (
        <>
            <AppbarContainer>
                <AppbarHeader>
                    My Bags
                </AppbarHeader>
                <AppbarList type="row">
                    <ListItemText primary="Home"/>
                    <ListItemText primary="Categories"/>
                    <ListItemText primary="Product"/>
                    <ListItemText primary="Contact us"/>
                    <ListItemButton onClick={()=>setSearchOpen(true)}>
                        <ListItemIcon>
                            <Search/>
                        </ListItemIcon>
                    </ListItemButton>
                </AppbarList>
                <AppbarAction matches={matches}/>
            </AppbarContainer>
        </>
    )
}

export default DesktopAppbar