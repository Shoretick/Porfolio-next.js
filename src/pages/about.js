import React, {useRef, useEffect}from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Image from "next/image";
import profilePic from "../../public/images/profile/developer-pic-3.jpeg" 
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";




const AnimateNumbers = ({value}) => {

    const ref = useRef(null);

const motionValue= useMotionValue(0)
const springValue = useSpring(motionValue, { duration: 10000});
const isInView = useInView (ref,{once:true});

useEffect(()=> {
    if (isInView) {
         motionValue.set(value);}
},[isInView,motionValue,value])

useEffect(()=>{
    springValue.on("change", (latest) => {
        if (ref.current && latest.toFixed(0) <= value) {
            ref.current.textContent = latest.toFixed(0);
        }
    })
},[springValue,value])

return <span ref={ref}></span>

}

const about = () =>{
    return (
        <>
        <Head>
            <title>Shoretick | About Page</title>
            <meta name="description" content="any description"/> 
            </Head>
            
            <main className=" w-full flex flex-col items-center justify-center">
                <Layout className="pt-16  ">
                <AnimatedText className="text-6xl" text="¡La pasión alimenta el propósito!"/>
                <div className=" grid w-full grid-cols-8 gap-16">
                    <div className="col-span-3 flex flex-col items-start justify-start">
                        <h2 className=" mb-4 text-lg font-bold uppercase text-dark ">
                            biografia :
                        </h2>
                        <p className="font-medium">
                        Hola, soy Jesús, un desarrollador web y diseñador de UI/UX
                         con una pasión por crear experiencias digitales hermosas, 
                         funcionales y centradas en el usuario. Con 2 años de experiencia en el campo, 
                         siempre estoy buscando formas nuevas e innovadoras de dar vida a las visiones de mis clientes.   
                        </p>
                        <p className="font-medium">
                        Creo que el diseño va más allá de hacer que las cosas se vean bonitas,
                         se trata de resolver problemas y crear experiencias intuitivas y agradables para los usuarios. 
                        </p>
                        <p className="font-medium">
                        Ya sea que esté trabajando en un sitio web, una aplicación móvil u otro producto digital, 
                        llevo mi compromiso con la excelencia en el diseño y el pensamiento centrado en el usuario
                         a cada proyecto en el que trabajo. Espero tener la oportunidad de aportar mis habilidades y pasión
                          a tu próximo proyecto.
                        </p>
                        




                    </div>
                    <div className=" col-span-3 relative h-max rounded-2xl border-2 border-dark bg-light p-8">
                        <div className=" absolute top-0 -right-3  -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark "></div>
                        <Image src={profilePic} alt="ImageShoretick" className=" w-full h-auto rounded-2xl"  />
                     
                     </div>
                     <div className=" col-span-2 flex  flex-col items-end justify-between">

                     <div className=" flex flex-col items-end justify-center">
                        <span className=" inline-block text-7xl font-bold ">
                           <AnimateNumbers value={50} />+
                        </span>
                        <h2 className=" text-xl font-medium capitalize text-dark/75">clientes satisfechos</h2>
                     </div>
                     <div className=" flex flex-col items-end justify-center">
                        <span className=" inline-block text-7xl font-bold ">
                        <AnimateNumbers value={20} />+
                        </span>
                        <h2 className=" text-xl font-medium capitalize text-dark/75">Proyectos completados</h2>
                     </div>
                     <div className=" flex flex-col items-end justify-center">
                        <span className=" inline-block text-7xl font-bold ">
                            2+
                        </span>
                        <h2 className=" text-xl font-medium capitalize text-dark/75">años de experiencia</h2>
                     </div>

                     </div>
                </div>
                <Skills/>
                <Experience/>
                <Education/>
                </Layout>
            </main>
        
          
        </>
    )
}
export default about;