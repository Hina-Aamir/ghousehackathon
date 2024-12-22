import Image from "next/image";
const Header =({})=> {
    return (
     <div   >
      <div className="bg-[#FFFFFF] 
 width=full height=1/5 text-white flex justify-between items-center m-4 ">
<div >

<div className="flex justify-between space-10">
        <div><Image
        src="/assets/Morent.png"
        alt="logo"
        width="148"
        height="44"
        opacity="50%"
        /></div>
  <div><Image
        src="/assets/Search.png"
        alt="logo"
        width="492"
        height="44"
        opacity="50%"
        /></div>

</div>
</div>
<div>

  <div className="flex justify-evenly">

  
  <div className="hidden sm:block"><Image
        src="/assets/Like.png"
        alt="logo"
        width="44"
        height="44"
        opacity="50%"
        /></div>
  
  <div className="hidden sm:block"><Image
        src="/assets/Notification.png"
        alt="logo"
        width="44"
        height="44"
        opacity="50%"
        /></div>
  
  <div className="hidden sm:block"><Image
        src="/assets/Settings.png"
        alt="logo"
        width="44"
        height="44"
        opacity="50%"
        /></div>
<div><Image
        src="/assets/profile.png"
        alt="logo"
        width="44"
        height="44"
        opacity="50%"
        /></div>

</div>
</div>
</div>
         </div>
    );
  }
  export default Header;