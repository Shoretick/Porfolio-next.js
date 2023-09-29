import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from 'next/router'; 
import {GithubIcon,TwitterIcon,LinkedInIcon,PinterestIcon,DribbbleIcon,SunIcon,MoonIcon,CircularText} from "./Icons"
import { motion } from "framer-motion";



const CustomLink=({href,title, className=""})=>{

    const router= useRouter();
   

    return <Link href={href} className={`${className} relative group`}>
               {title}
               <span className={`h-[1px] inline-block bg-dark absolute left-0 bottom-0.5
                group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? "w-full": "w-0"}`} >
                &nbsp;
               </span>
           </Link>
}

const NavBar= ({className}) =>{
    return (
    <header
    className= {`w-full px-32 py-8 font-medium flex items-center justify-between ${className}`}
    >
        <nav>
            <CustomLink href="/" title="Home" className=" mx-4"/>
            <CustomLink href="/about" title="About" className=" mx-4"/>
            <CustomLink href="/projects" title="Projects" className=" mx-4"/>
            <CustomLink href="/articles" title="Articles" className=" ml-4"/>
        </nav>
        
        <nav className="flex items-center justify-center flex-wrap">
        <motion.a className="w-6 mr-3" 
        href="https://github.com/Shoretick" target={"_blank"} whileHover={{y:-2}} whileTap={{scale:0.9}} >
            <GithubIcon/>
            </motion.a>

            <motion.a className="w-6 mx-3" href="https://www.linkedin.com/in/jesus-emmanuel-castro/" target={"_blank"} 
            whileHover={{y:-2}}whileTap={{scale:0.9}}><LinkedInIcon/>
            </motion.a>

            <motion.a className="w-6 mx-3"
            href="https://ar.pinterest.com/" target={"_blank"} whileHover={{y:-2}} whileTap={{scale:0.9}} >
                <PinterestIcon/>
                </motion.a>

            <motion.a className="w-6 mx-3"
            href="https://dribbble.com/" target={"_blank"} whileHover={{y:-2}} whileTap={{scale:0.9}} >
                <DribbbleIcon/>
                </motion.a>

            <motion.a className="w-6 ml-3"
            href="https://twitter.com/" target={"_blank"} whileHover={{y:-2}}whileTap={{scale:0.9}} >
                <TwitterIcon/>
                </motion.a>
            
        </nav>
        <div className="absolute left-[50%] top-translate-x-[-50%] "   >
            <Logo/>
        </div>
    </header>
        )
        
}

export default NavBar;