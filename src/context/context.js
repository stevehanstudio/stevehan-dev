import React, { useState, createContext } from "react"

const defaultState = {
   themeMode: false, 
   toggleThemeMode: () => {},
   isMobileMenuOpen: false,
   showMobileMenu: () => {}, 
   hideMobileMenu: () => {}
//   navLinks: [],
//   socialLinks: [], 
}

const GatsbyContext = createContext(defaultState)

const GatsbyProvider = ({ children }) => {
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
   const [themeMode, setThemeMode] = useState(false)

   const hideMobileMenu = () => {
      setIsMobileMenuOpen(false)
   }

   const showMobileMenu = () => {
      setIsMobileMenuOpen(true)
   }

   const toggleThemeMode = () => {
      setThemeMode(!themeMode)
   }

   return (
      <GatsbyContext.Provider
         value={{
            themeMode, 
            toggleThemeMode,
            isMobileMenuOpen,
            hideMobileMenu,
            showMobileMenu 
         }}
      >
         {children}
      </GatsbyContext.Provider>
   )
}

export { GatsbyContext, GatsbyProvider }