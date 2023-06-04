import React from 'react'
import { UseUIContext } from '../../context/ui'
import { IconButton, Slide } from '@mui/material'
import { SearchContainer, SearchField } from '../../styles/Search'
import { Close, Search } from '@mui/icons-material'

export default function SearchBox() {
    const {searchOpen,setSearchOpen}=UseUIContext()
  return (
    <>
        <Slide direction='down' in={searchOpen} timeout={500}>
            <SearchContainer>
                <SearchField color='secondary' fullWidth variant='standard' placeholder='search...'/>
                <IconButton>
                    <Search sx={{fontSize:{xs:'2rem',md:'3rem'}}} color='secondary'/>
                </IconButton>
                <IconButton sx={{position:'absolute', top:10,right:10}} onClick={()=>setSearchOpen(false)}>
                    <Close sx={{fontSize:'4rem'}} color='secondary'/>
                </IconButton>
            </SearchContainer>
        </Slide>
    </>
  )
}
