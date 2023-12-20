import React from 'react';
import Image from "next/image";
const ProjectCards = ({ title, description, image, tag }) => {
  return (
    <div h-72>
        <div className="h-52 md:h-72 rounded-t-xl relative group">
          <Image src={image} width={500} height={500} alt="img" />
          <div className="overlay absolute top-0 left-0 w-5 h-full bg-[#181818] bg-opacity-0 hidden"></div>
        </div>
        
        <div className="text-white rounded-b-xl  py-6 px-4">
          <h5 className="text-xl font-semibold mb-2">{title}</h5>
          <p className="text-[#ADB7BE]">{description}</p>
        </div>
    </div>
  );
};
export default ProjectCards;