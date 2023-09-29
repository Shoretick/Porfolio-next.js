import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import img1 from "../../public/images/articles/pagination component in reactjs.jpg"


const FeaturedArticle = ({img,title,time,summary,link})=>{
    return (
        
        <li className=" col-span-1 w-full  justify-between rounded-2xl border border-solid border-dark bg-light shadow-2xl p-12  "> 
            <Link href={link} target="_blank"
            className=" w-full rounded-lg overflow-hidden cursor-pointer">
                <Image src={img} alt={title} className=" w-full h-auto" />
            </Link>
            <Link href={link} target="_blank">
                <h2 className=" capitalize text-2xl font-bold my-2 ">{title} </h2>
            </Link>
            <p className=" text-sm mb-2 ">{summary}</p>
            <span className=" text-purple-500 font-semibold">{time}</span>
        </li>
    )
}

const Articles = () => {
    return (
        <>
        <Head ><title>Shoretick | Articles Page</title>
        <meta name="description" content="any description"/> </Head>
        
        <main className=" w-full mb-16 flex flex-col items-center justify-center overflow-hidden">

            <Layout className=" pt-16">

            <AnimatedText text="¡Las palabras pueden cambiar el mundo!" className="text-5xl mb-16"></AnimatedText>
            <ul className=" grid grid-cols-1 gap-16">
                
                <FeaturedArticle 
                img={img1}
                title="Cómo crear paginación personalizada con React"
                summary="A menudo tenemos que crear aplicaciones web en las que necesitamos buscar grandes conjuntos de 
                registros de datos de un servidor remoto, API o una base de datos. Si está creando un sistema de pago,
                 por ejemplo, podría ser buscar miles de transacciones. Si es una aplicación de redes sociales, 
                 podría ser buscar muchos comentarios de usuarios, perfiles o actividades. Sea cual sea la aplicación, 
                 existen varias soluciones para presentar los datos de una forma que no abrume al usuario final que 
                 interactúa con la aplicación."
                time="45 min de lectura"
                link="https://www.digitalocean.com/community/tutorials/how-to-build-custom-pagination-with-react-es"
                />
            </ul>

            </Layout>
        </main>
        </>
        
    )
}

export default Articles;