import Layout from "@/components/Layout";
import React from "react";
import Image from "next/image";
import img1 from "../../../public/images/projects/ratZmenu.gif";
import AnimatedText from "@/components/AnimatedText";
import CardImg from "@/components/Cardimg";
import rat1 from "../../../public/images/projects/RatZ1.png";
import rat2 from "../../../public/images/projects/RatZ2.png";
import rat3 from "../../../public/images/projects/RatZ3.png";
import rat4 from "../../../public/images/projects/RatZ4.png";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";





const RatZ = () =>{

    return (
        <>
      
        <main className=" bg-gray-400">

        <Layout className="pt-16">

            <div className=" grid grid-cols-12 gap-2 items-center justify-center gap-y-4 ">
                
            <div className="col-span-6 ">
                <h2 className=" text-xl text-purple-950 font-bold">VideoGame Beat 'Em Up o «yo contra el barrio» </h2>
                <AnimatedText  text="RAT" className="text-8xl text-rose-950 "></AnimatedText>
        <AnimatedText  text="VS" className="  text-8xl text-rose-950 items-start justify-start grid-flow-col"></AnimatedText>
        <AnimatedText  text="ZOMBIE...!" className="  text-8xl text-rose-950"></AnimatedText>
            </div>
                 <div className=" col-span-6  bg-white w-full h-1/2 items-center justify-center flex  rounded-xl p-1 m-1 ">
            
                 <Image src={img1} alt=" No image " className="w-full h-full items-center justify-between flex rounded-xl" />
             </div>

          <div className="col-span-12 items-center justify-center flex ">
            <h2 className=" text-6xl  text-purple-950 font-bold block py-16 ">Capturas </h2>
          </div>
          

         <div className=" col-span-6  w-full h-1/2 items-center justify-center flex  ">
          <div className="w-full flex items-center justify-between rounded-2xl p-1 m-1 bg-light border-solid border-dark border  ">
             <Image src={rat1}  alt="img RvsZ" className="w-full flex items-center justify-between rounded-2xl   " />
          </div>
          </div>
          <div className=" col-span-6  w-full h-1/2 items-center justify-center flex  ">
          <div className="w-full flex items-center justify-between rounded-2xl p-1 m-1 bg-light border-solid border-dark border  ">
             <Image src={rat2}  alt="img RvsZ" className="w-full flex items-center justify-between rounded-2xl   " />
          </div>
          </div>
          <div className=" col-span-6  w-full h-1/2 items-center justify-center flex  ">
          <div className="w-full flex items-center justify-between rounded-2xl p-1 m-2 bg-light border-solid border-dark border  ">
             <Image src={rat3}  alt="img RvsZ" className="w-full flex items-center justify-between rounded-2xl   " />
          </div>
          </div>
          <div className=" col-span-6  w-full h-1/2 items-center justify-center flex  ">
          <div className="w-full flex items-center justify-between rounded-2xl p-1 m-2 bg-light border-solid border-dark border  ">
             <Image src={rat3}  alt="img RvsZ" className="w-full flex items-center justify-between rounded-2xl   " />
          </div>
          </div>

          <div className="col-span-6 items-center justify-center flex ">
            <h2 className=" text-6xl  text-purple-950 font-bold block py-16 p-1 m-2 ">Informacion:  </h2>
          </div>
          <div className="col-span-6 items-center justify-center flex font-semibold p-1 m-2">
           
            <p> Se trata de una videojuego de genero yo contra el barrio​​ (en inglés Beat 'em up, Brawler o Belt scroller),
                ofrece combate cuerpo a cuerpo entre el protagonista y un número improbable de oponentes.
                Tiene lugar en entornos urbanos y presentan tramas basadas en la lucha contra Zombies.
                 </p>
          </div>
          <div className="col-span-12 items-center justify-center flex ">
            <h2 className=" text-6xl  text-purple-950 font-bold block py-16 ">Descargas </h2>
          </div>

<div className="col-span-6 w-full items-end  justify-end flex p-2   ">

 <Link href="https://drive.google.com/file/d/1D_eS5vY-Ubi9fVjTqHDbQgdEVeozQiji/view?usp=drive_link" target={"_blank"}
                className=" flex items-center bg-sky-500  text-light p-2.5 px-6 rounded-lg font-semibold
                 hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"
                 download={true}
                >Pre-Alpha to windows <LinkArrow className=" w-6 ml-1"/> </Link>

</div>
<div className="col-span-6 w-full items-start  justify-start flex p-2 ">

 <Link href="https://drive.google.com/file/d/1aQU2CcO0xd8GSj10xSeo5vAKJsKSYmxb/view?usp=drive_link" target={"_blank"}
                className=" flex items-center bg-green-500  text-light p-2.5 px-6 rounded-lg font-semibold
                 hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"
                 download={true}
                >Pre-Alpha to Android <LinkArrow className=" w-6 ml-1"/> </Link>

</div>

         
           
          </div>
        </Layout>
        
    </main></>
    )
}

export default RatZ ;