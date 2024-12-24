
import Image from "next/image";
export default  function DashSideBar(){
    return(

        <div>
<div className=" font-[500] text-[16px] leading-[24px] 
tracking-[-0.02em] text-justify decoration-skip-ink-auto w-116 text-gray-500
h- 40 ">
  <div className=" m-4 "><h3 >MAIN MENU</h3></div>
  <div className=" m-4 flex bg-blue-400 text-white"><div><Image src="/assets/home.png" alt="Dashboard" width={24} height={24}/></div>
  <div className='p-2'><h2>Dashboard</h2></div></div>
  <div className=" m-4 flex"><div><Image src="/assets/carrent.png" alt="Car Rent" width={24} height={24}/></div>
  <div  className='p-2'><h2>Car Rent</h2></div></div>
  <div className=" m-4 flex"><div><Image src="/assets/chart.png" alt="Insight" width={24} height={24}/></div>
  
  <div className='p-2'><h2>Insight</h2></div></div>
  <div className=" m-4 flex"><div><Image src="/assets/Group.png" alt="Reimburse" width={24} height={24}/></div>
 
  <div className='p-2'> <h2>Reimburse</h2></div></div>
  <div className=" m-4 flex"><div><Image src="/assets/message.png" alt="Inbox" width={24} height={24}/></div>
 
  <div className='p-2'> <h2>Inbox</h2></div></div>
  <div className=" m-4 flex"><div><Image src="/assets/calendar.png" alt="Calender" width={24} height={24}/></div>
  <div className='p-2'><h2>Calender</h2></div></div>
 <div className='p-2'><h2>PREFERENCES</h2>
  <div className=" m-4 flex"><div><Image src="/assets/setting.png" alt="Settings" width={24} height={24}/></div>
  <div className='p-2'></div><h2>Settings</h2></div></div>
  <div className=" m-4 flex"><div><Image src="/assets/info-circle.png" alt="Help & Center" width={24} height={24}/></div>
  <div className='p-2'> <h2>Help & Center</h2></div></div>
  <div className=" m-4 flex"><div><Image src="/assets/briefcase.png" alt="Dark MOde" width={24} height={24}/></div>
  <div className='p-2'><h2>Dark MOde</h2></div></div>


  <div className=" m-4 flex"><div><Image src="/assets/logout.png" alt="Log Out" width={24} height={24}/></div>
  <div className='p-2'><h2>Log Out</h2></div></div>
  </div>

  </div>
 
        
    )
}