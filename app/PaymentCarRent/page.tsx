import Header from "../components/Header"
import Footer from "../components/Footer"
import Billing from "../components/Billing"
import RentalInfo from "../components/RentalInfo"
import Payment from "../components/Payment"
import Confirmation from "../components/Confirmation"
import Summary from "../components/Summary"


export default function PaymentCarRent(){
    return(
<div>

<Header/>

<div className="flex flex-col  lg:flex-row gap-4 bg-[#F6F7F9]">
<div className=" p-6 text-center w-[500] flex-3 lg:order-2 "> <Summary/></div>
  <div className="p-6 text-center  flex-1 lg:order-1 ">   
      
        <Billing/>
        <RentalInfo/>
        <Payment/>
        <Confirmation/>
     
        </div>

</div>

<Footer/>

     </div>
    )
}