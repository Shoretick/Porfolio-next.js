import React, { useRef } from "react";
import { motion,spring,useScroll } from "framer-motion";
import LiIcon from "./LiIcon";



const Details = ({type,time,place,info}) => {
    const ref= useRef(null)
return(
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between">
        <LiIcon reference={ref}/>
    <motion.div
    initial={{y:50}}
    whileInView={{y:0}}
    transition={{duration:0.5,type:spring}}
    viewport={{once: true}} 
    >
        <h3 className=" capitalize font-bold text-2xl">{type} </h3>
        <span className=" capitalize font-medium text-dark/75">{time} | {place}</span>
        <p className=" font-medium w-full">{info}</p>
    </motion.div>
    </li>
)
    
}


const Education = () =>{
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target:ref,
            offset: ["start end","center start"]
        }
    )

    return (
        <div className="my-64">
            <h2 className=" font-bold mb-32 text-8xl w-full text-center">
            Educación
            </h2>

            <div ref={ref} className="w-[75%] mx-auto relative">

                <motion.div style={{scaleY:scrollYProgress}} 
                className=" absolute left-9 top-16 w-[4px] bg-dark origin-top h-full "/>

                <ul className=" w-full flex flex-col items-start justify-between ml-4 ">
                    <Details
                    type="Full Stack Web Developer" 
                    time = "2022" place="Henry"
                   info="
                   Bootcamp. 800 horas de cursado teórico-práctico. "
                    />

                    <Details
                    type=" Desarrollo de Videojuegos" 
                    time = "2020" place="Universidad Tecnológica Nacional FRR."
                   info="
                   Diseñar y desarrollar Apps interactivas : modelado 3D, programación de objetos, mecánicas, diseño de
                   niveles.
                   Tecnologias : Unity, blender, makeHuman, C#, entre otras."
                    />

                    <Details
                    type="cursos UTN de  .NET | MYSQL" 
                    time = "2020" place="Universidad Tecnológica Nacional FRR."
                   info="
                   curso"
                    />

                    <Details
                    type="Licenciatura en Informática      " 
                    time = "2019-Presente" place="Universidad UNO"
                   info="
                   Licenciatura en informatica"
                    />

                    <Details
                    type="Montajes Electromecánica" 
                    time = "2000-2005" place="EET Nro2"
                   info="
                   Técnico Electromecánico "
                    />
                    
                   
                </ul>
            </div>
        </div>
    )
}

export default Education; 