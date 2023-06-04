import { createContext, useContext, useState } from "react";

export const UiContext= createContext()
export const UseUIContext= ()=>useContext(UiContext)

export const UIProvider= ({children})=>{
    const [drawerOpen,setDrawerOpen]= useState(false)
    const [searchOpen,setSearchOpen]= useState(false)
    const value={
        drawerOpen,setDrawerOpen,searchOpen,setSearchOpen
    }
    return <UiContext.Provider value={value}>{children}</UiContext.Provider>
}