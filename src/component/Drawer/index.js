import { Button, Divider, Drawer, List, ListItemButton, ListItemText, styled } from '@mui/material'
import React from 'react'
import { UseUIContext } from '../../context/ui';
import { CloseDrawer } from '../../styles/Appbar';
import { Close } from '@mui/icons-material';
import { lighten } from 'polished';
import { Colors } from '../../styles/theme';
const MiddleDivider = styled((props) => (
    <Divider variant="middle" {...props} />
  ))``;
export default function AppDrawer() {
    const {drawerOpen,setDrawerOpen}=UseUIContext()
  return (
    <>
    {
        drawerOpen&&<CloseDrawer onClick={()=>setDrawerOpen(false)}> 
            <Close sx={{fontSize:"2.5rem",
                color:lighten(0.09, Colors.secondary)}}/>
        </CloseDrawer>
    }
        <Drawer open={drawerOpen}>
            <List>
                <ListItemButton>
                    <ListItemText>
                        Home
                    </ListItemText>
                </ListItemButton>
                <MiddleDivider/>
                <ListItemButton>
                    <ListItemText>
                        Categories
                    </ListItemText>
                </ListItemButton>
                <MiddleDivider/>
                <ListItemButton>
                    <ListItemText>
                        Products
                    </ListItemText>
                </ListItemButton>
                <MiddleDivider/>
                <ListItemButton>
                    <ListItemText>
                        About us
                    </ListItemText>
                </ListItemButton>
                <MiddleDivider/>
                <ListItemButton>
                    <ListItemText>
                        Contact us
                    </ListItemText>
                </ListItemButton>
                <MiddleDivider/>
            </List>
        </Drawer>
    </>
  )
}
