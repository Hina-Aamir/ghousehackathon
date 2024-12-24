import Image from "next/image";
const Footer =({})=> {
    return (
      <div>
<div className="container mx-auto p-4 ">
<div className="grid grid-cols-1 lg:grid-cols-2  gap-6 m-4 ">
  {/* First Column (Morent Logo and Text) */}
  <div className=""><div><Image
        src="/assets/Morent.png"
        alt="MORENT"
        width="148"
        height="44"
        style={{ opacity: '50%' }}/></div>
    <div className="font-medium text-lg leading-6 text-left text-[#13131399]">
      <p >Our vision is to provide convenience</p>
      <p>and help increase your sales business.</p>
    </div> </div>

  {/* Second Column (About, Community, Socials) */}
  <div className="">
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6  ">
      <div><h3 className="font-semibold text-xl mb-2">About</h3>
        <p>How it works</p>
        <p>Featured</p>
        <p>Partnership</p>
        <p>Business Relation</p></div>
      <div> <h3 className="font-semibold text-xl mb-2">Community</h3>
        <p>Events</p>
        <p>Blog</p>
        <p>Podcast</p>
        <p>Invite a friend</p></div>
      <div><h3 className="font-semibold text-xl mb-2">Socials</h3>
        <p>Discord</p>
        <p>Instagram</p>
        <p>Twitter</p>
        <p>Facebook</p></div>
    </div></div>


</div>

<div className="grid grid-cols-1 lg:grid-cols-2 justify-end  border-t-2 border-gray-500 p-4">
  {/* Left Column: Copyright */}
  <p className="text-center lg:text-left order-last lg:order-first col-span-1">
    ©2022 MORENT. All rights reserved.
  </p>

  {/* Right Column: Links */}
  <div className="flex  lg:justify-end space-x-0 lg:space-x-6 col-span-1">
    <div><h6>Privacy & Policy</h6></div>
    <div className="text-right"><h6>Terms & Conditions.</h6></div>
  </div>
</div>

</div>
</div>
    );
  }
  export default Footer;