import React from "react";

 const Layout = ({children, className=""}) =>{

    return (
        <div className={`w-full h-full inline-block border-t-2 border-black z-0 p-32 ${className}`} >{children}</div>
    )
}

export default Layout;