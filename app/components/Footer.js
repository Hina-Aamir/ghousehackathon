import Image from "next/image";
const Footer =({})=> {
    return (
<div>
<div className="grid grid-cols-1 lg:grid-cols-2  gap-6 p-6 m-6">
  {/* First Column (Morent Logo and Text) */}
  <div className="w-full">
    <div>
      <Image
        src="/assets/Morent.png"
        alt="MORENT"
        width="148"
        height="44"
        style={{ opacity: '50%' }}
      />
    </div>
    <div>
      <p className="font-medium text-lg leading-6 text-left text-[#13131399]">
        Our vision is to provide convenience
      </p>
      <p>and help increase your sales business.</p>
    </div>
  </div>

  {/* Second Column (About, Community, Socials) */}
  <div className="w-full">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-6 m-6 justify-items-end lg:justify-items-end items-start">
      <div>
        <h3 className="font-semibold text-xl mb-2">About</h3>
        <p>How it works</p>
        <p>Featured</p>
        <p>Partnership</p>
        <p>Business Relation</p>
      </div>
      <div>
        <h3 className="font-semibold text-xl mb-2">Community</h3>
        <p>Events</p>
        <p>Blog</p>
        <p>Podcast</p>
        <p>Invite a friend</p>
      </div>
      <div>
        <h3 className="font-semibold text-xl mb-2">Socials</h3>
        <p>Discord</p>
        <p>Instagram</p>
        <p>Twitter</p>
        <p>Facebook</p>
      </div>
    </div>
  </div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 justify-end  border-t-2 border-gray-500 p-4">
  {/* Left Column: Copyright */}
  <p className="text-center lg:text-left order-last lg:order-first col-span-1">
    ©2022 MORENT. All rights reserved.
  </p>

  {/* Right Column: Links */}
  <div className="flex justify-end lg:justify-end space-x-0 lg:space-x-6 col-span-1">
    <div>Privacy & Policy</div>
    <div>Terms & Conditions</div>
  </div>
</div>

</div>

    );
  }
  export default Footer;