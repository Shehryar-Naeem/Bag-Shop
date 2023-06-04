import { Divider, ListItemButton, ListItemIcon } from "@mui/material"
import { ActionIconContainerDesktop, ActionIconContainerMobile, AppbarList } from "../../styles/Appbar"
import { Favorite, Person, ShoppingCart } from "@mui/icons-material"
import { Colors } from "../../styles/theme"

export const AppbarAction = ({ matches }) => {
    const Component = matches ? ActionIconContainerMobile : ActionIconContainerDesktop
    return (
        <>
            <Component>

                <AppbarList type="row">
                    <ListItemButton sx={{ justifyContent: "center" }}>
                        <ListItemIcon sx={{ display: "flex", justifyContent: "center", color:matches&& Colors.secondary}}>
                            <ShoppingCart />
                        </ListItemIcon>
                    </ListItemButton>
                    <Divider orientation="vertical" flexItem />
                    <ListItemButton sx={{ justifyContent: "center" }}>
                        <ListItemIcon sx={{ display: "flex", justifyContent: "center" , color:matches&& Colors.secondary}}>
                            <Favorite />
                        </ListItemIcon>
                    </ListItemButton>
                    <Divider orientation="vertical" flexItem />

                    <ListItemButton sx={{ justifyContent: "center" }}>
                        <ListItemIcon sx={{ display: "flex", justifyContent: "center", color:matches&& Colors.secondary }}>
                            <Person />
                        </ListItemIcon>
                    </ListItemButton>
                    <Divider orientation="vertical" flexItem />

                </AppbarList>
            </Component>
        </>
    )

}