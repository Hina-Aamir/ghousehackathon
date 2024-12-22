import Header from "../components/Header"
import Footer from "../components/Footer"
import Billing from "../components/Billing"
import RentalInfo from "../components/RentalInfo"
import Payment from "../components/Payment"
import Confirmation from "../components/Confirmation"


export default function PaymentCarRent(){
    return(

        <div>
        <Header/>
        <Billing/>
        <RentalInfo/>
        <Payment/>
        <Confirmation/>
        <Footer/>
        </div>
    )
}