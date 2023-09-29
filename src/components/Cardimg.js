import Image from "next/image";
import React from 'react'



 const CardImg = ({ name, img, info }) => {
  return (
    <div className="">
      
      
      <Image src={img}  alt="img RvsZ" className=" rounded-2xl- flex items-center justify-between "/>
    </div>
  );
}

export default CardImg;