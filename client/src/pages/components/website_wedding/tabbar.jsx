import Image from "next/image";
import icHome from "../../../assets/icHome.svg";
import icCalender from "../../../assets/icCalender.svg";
import icImage from "../../../assets/icImage.svg";
import icRing from "../../../assets/icRing.svg";

const Tabbar = () => {
  return (
    <div className="w-[80%] p-4 boder bg-white mx-auto  border-gray-200 rounded-xl shadow-lg  flex gap-2 justify-between fixed z-50  bottom-3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
      <a href="#" className="icon">
        <Image src={icHome} className="w-8 h-8" alt="icon" />
      </a>
      <a href="#mempelai" className="icon">
        <Image src={icRing} className="w-8 h-8" alt="icon" />
      </a>
      <a href="#dateWedding" className="icon">
        <Image src={icCalender} className="w-8 h-8" alt="icon" />
      </a>
      <a href="#galleries" className="icon">
        <Image src={icImage} className="w-8 h-8" alt="icon" />
      </a>
    </div>
  );
};

export default Tabbar;
