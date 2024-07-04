import Image from "next/image";
import React from "react";
import logoGif from "../../../../public/assets/education-gif-30.gif";

const Part = () => {
  return (
    <div>
      <Image width={60} alt="image" src={logoGif}></Image>
    </div>
  );
};

export default Part;
