import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
import project1 from "../../../public/images/projects/tetron00.png";
import project2 from "../../../public/images/projects/pet eShop.png";
import project3 from "../../../public/images/projects/little Paws.png";
import project4 from "../../../public/images/projects/RatZ3.png";
import project5 from "../../../public/images/projects/Porfolio.png";






const FeaturedProjects = ({type,title,summary,img,link,github}) =>{
    return (
        <article className=" w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative ">
            <div className=" absolute top-0 -right-3  -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark "></div>
            
            <Link href={link} target="_blank"
            className=" w-1/4  rounded-lg overflow-hidden cursor-pointer">
                <Image src={img} alt={title} className=" w-full h-auto" />
            </Link>
            <div className=" w-1/2 flex flex-col items-start justify-between pl-6">
                <span className=" text-purple-500 font-medium text-xl">{type}</span>
                <Link href={link} target="_blank" className=" hover:underline underline-offset-2" >
                    <h2 className=" my-2 w-full text-left font-bold text-4xl ">{title}</h2> 
                    </Link>
                    <p className=" my-2 font-medium text-dark">{summary}</p>
                    <div className=" mt-2 flex items-center ">
                        <Link href={github} target="_blank" className=" w-10 "> <GithubIcon/> </Link>
                        <Link href={link} target="_blank" className=" rounded-lg ml-4 bg-dark text-light p-2 px-6 font-semibold "> Visit Project </Link>
            </div>
            </div>
            

        </article>
    )
}
const Project = ({type,title,img,link,github}) =>{
    return (
        <article className=" w-full flex-col flex items-center justify-center rounded-3xl border border-solid border-dark bg-light shadow-2xl p-6 relative ">
<div className=" absolute top-0 -right-3  -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark "></div>
                      
            <Link href={link} target="_blank"
            className="h-1/4 w-full items-center justify-center flex  overflow-hidden cursor-pointer">
                <Image src={img} alt={title} className=" w-3/5 h-48 rounded-lg" />
            </Link>
            <div className=" w-full flex flex-col items-start justify-between mt-4">
                <span className=" text-purple-500 font-medium text-xl">{type}</span>
                <Link href={link} target="_blank" className=" hover:underline underline-offset-2" >
                    <h2 className=" my-2 w-full text-left font-bold text-3xl ">{title}</h2> 
                    </Link>
                    
                    <div className=" w-full mt-2 flex items-center justify-between ">
                    <Link href={link} target="_blank" className=" rounded-lg  bg-dark
                         text-light p-2 px-6 font-semibold "> Visit  </Link>

                        <Link href={github} target="_blank" className=" w-10 "> <GithubIcon/> </Link>
                        
            </div>
            </div>
            

        </article>
    )
}


const Projects= () => {

    return (
<>


        <Head>
        <title>Shoretick | Projects Page</title>
        <meta name="description" content="any description"/> 
        </Head>
        
        <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
            <AnimatedText  text="Construyendo el mañana con visiones creativas." className="text-5xl mb-16"></AnimatedText>
        

        <div className=" grid grid-cols-12 gap-24 items-center justify-center gap-y-32 ">
            <div className=" col-span-12">
                <FeaturedProjects
                title="Tetron-Tetronic"
                img = {project1}
                summary="Es un videoGame web desarrollado en C#, Unity con Sprites en 2d "
                type="Proyecto destacado"
                link="https://simmer.io/@shoretick/tetronic"
                github="https://github.com/Shoretick/Tetron-Tetronic"
                />
            </div>
            <div className=" col-span-6">
            <Project
                title="Little Paws (ONG)"
                img = {project3}
                summary="Little Paws es una ONG que tiene como objetivo encontrar un hogar y buenas condiciones de vida 
                a los animales sin hogar."
                type="Proyecto destacado"
                link="https://proyecto-final-pf.vercel.app/home"
                github="https://github.com/Shoretick/proyecto-final-pf/tree/development/client/pages"
                />
            </div>
            <div className=" col-span-6">
            <Project
                title="Pet e-Shop "
                img = {project2}
                summary="Tienda con productos para todo tipo de mascotas ."
                type="Proyecto destacado"
                link="https://proyecto-final-pf.vercel.app/eShop"
                github="https://github.com/Shoretick/proyecto-final-pf/tree/development/client/pages/eShop"
                />
            </div>
            <div className=" col-span-12">
            <FeaturedProjects
                title="Rat Vs Z"
                img = {project4}
                summary="Rat vs Z es un videoGame desarrollado en C# Unity con modelos en 3d realizados en blender. "
                type="Proyecto destacado"
                link="/projects/ratz"
                github="/"
                />
            </div>
            
            <div className=" col-span-6 ">
            <Project
                title="Porfolio"
                img = {project5}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency."
                type="Proyecto destacado"
                link="/"
                github="https://github.com/Shoretick/Porfolio-next.js"
                />
            </div>
            
            

        </div>
        </Layout>
        </main>
        </>
        
        
        
    )
}

export default Projects;