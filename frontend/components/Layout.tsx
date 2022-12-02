import React , {FC, useMemo, ReactNode} from 'react'
import Theme from "./Theme"
import Connection from "./Connection"
import Header from "./Header"

const Layout: FC<{children: ReactNode}>  = ({children}) => {
  return(
    
      <Theme>
        <Header/><Connection>
       {children} </Connection>
      </Theme>
     
)}

export default Layout