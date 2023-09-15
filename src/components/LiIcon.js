import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";

const LiIcon = ({reference}) =>{
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target:reference,
            offset: ["center end","center center"]
        }
    )

    return(
        <figure className=" absolute left-0 stroke-dark" >
            <svg className=" rotate-90" width="75" height="75" viewBox="0 0 100 100">
                <circle cx="75" cy="50" r="20" className=" stroke-purple-500 stroke-1 fill-none" ></circle>
                <motion.circle cx="75" cy="50" r="20" className=" stroke-[5px] fill-light " 
                style={
                 {pathLength: scrollYProgress}
                }>

                </motion.circle>
                <circle cx="75" cy="50" r="10" className="animate-pulse stroke-1 fill-purple-500"></circle>
            </svg>
        </figure>
    )
}

export default LiIcon;