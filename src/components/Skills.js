import react from "react";
import {motion} from "framer-motion"

const Skill = ({name,x,y}) => {
    return(
        <motion.div className="flex items-center justify-center rounded-full font-semibold bg-dark text-light 
           py-3 px-8 cursor-pointer shadow-dark absolute"
            whileHover={{scale : 1.05 }}
            initial={{x:0,y:0}}
        whileInView={{x:x,y:y}}
            transition={{duration:5}}
            viewport={{once: true}}>{name}</motion.div>
    )

}


const Skills = () => {
    return (
        <>
        <h2 className="font-bold text-8xl mt-64 w-full text-center ">Skills</h2>
        <div className=" w-full h-screen relative flex items-center justify-center rounded-full bg-circularLigth">
            <motion.div className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8
            cursor-pointer" whileHover={{scale : 1.1 }}>
                 Web
            </motion.div>

            <Skill name="Css" x="-7vw" y="-10vw" />
            <Skill name="Frontend" x="7vw" y="-10vw" />
            <Skill name="Backend" x="-7vw" y="10vw" />
            <Skill name=" React.js" x="7vw" y="10vw" />
            <Skill name="Next.js" x="-15vw" y="-0vw" />
            <Skill name="MongoDb" x="15vw" y="0vw" />
            <Skill name="Express.js" x="10vw" y="-20vw" />
            <Skill name="Node.js" x="-10vw" y="20vw" />
            <Skill name="Github" x="10vw" y="20vw" />
            <Skill name="Redux" x="-10vw" y="-20vw" />
            <Skill name="HTML5" x="30vw" y="0vw" /> 
            <Skill name="PostgreSQL" x="-30vw" y="0vw" />
            <Skill name="JavaScript" x="-25vw" y="-10vw" />
            <Skill name="Sequelize" x="25vw" y="-10vw" />
            <Skill name="Mongoose" x="-25vw" y="10vw" />
            <Skill name="tailwind" x="25vw" y="10vw" />
            



           
         </div>
       </>
    )
}

export default Skills;