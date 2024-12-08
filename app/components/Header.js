import Image from "next/image";
const Header =({text})=> {
    return (
     <div className="bg-black width=full height=1/5 text-white flex justify-between items-center px-20 pt-5 pb-5 ">
        <div className="">
        <h1 className="text-2xl font-inter font-semibold leading-8 tracking-[0.01em] text-justify">{text}</h1></div>
        <div><Image
        src="/assets/logo.png"
        alt="logo"
        width="65"
        height="78"
        opacity="50%"
        /></div>
         </div>
    );
  }
  export default Header;