import React, { useRef } from "react";
import { motion,spring,useScroll } from "framer-motion";
import LiIcon from "./LiIcon";



const Details = ({position,company,companyLink, time, work, address}) => {
    const ref= useRef(null)
return(
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
        <LiIcon reference={ref}/>
    <motion.div
    initial={{y:50}}
    whileInView={{y:0}}
    transition={{duration:0.5,type:spring}}
    viewport={{once: true}} 
    >
        <h3 className=" capitalize font-bold text-2xl">{position}&nbsp; <a  target="blank" className=" text-purple-500">{company}</a> </h3>
        <span className=" capitalize font-medium text-dark/75">{time} | {address}</span>
        <p className=" font-medium w-full">{work}</p>
    </motion.div>
    </li>
)
    
}


const Experience = () =>{
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
            Experiencia
            </h2>

            <div ref={ref} className="w-[75%] mx-auto relative">

                <motion.div style={{scaleY:scrollYProgress}} 
                className=" absolute left-9 top-16 w-[4px] bg-dark origin-top h-full "/>

                <ul className=" w-full flex flex-col items-start justify-between ml-4 ">
                    <Details
                    position="software Engineer Freelance" company="Award Technology"
                    companyLink="www.google.com.ar"
                    time = "2023-Presente" address="Buenos Aires, Argentina.  "
                    work="Generar documentación e integrar pasarela de pagos con lectura de QR en Apps propias de la empresa."
                    />
                    <Details
                    position="back-end Developer Freelance" company="Freelance "
                    companyLink="www.google.com.ar"
                    time = "2023-Presente" address="Latam"
                    work="Realizar mantenimiento correctivo y preventivo en sitios diferentes sitios webs.
                    Back-end : .Node, express, mongoDb.
                    Base de datos: PostgreSQL y Sequelize."
                    />
                    <Details
                    position="Full Stack Developer" company="Freelance"
                    companyLink="www.google.com"
                    time = "2022-Presente" address="Latam"
                    work="Desarrollar landing Pages y aplicaciones online utilizando HTML, CSS, React, Node, Express 
                    Diseñar interfaces y elementos frontend, mantener y optimizar sitios web e interfaces.
                    Mejorar la navegación de los sitios web."
                    />
                    <Details
                    position="QA /QC" company="Invap"
                    companyLink="www.google.com.ar"
                    time = "2012-2018" address="Buenos Aires, Argentina. "
                    work="Realizar pruebas de funcionamiento, Reportes, control y seguimiento de informes y registros.  "
                    />
                    
                </ul>
            </div>
        </div>
    )
}

export default Experience; 