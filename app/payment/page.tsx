import { Input } from "@/components/ui/input"
import Header from "../components/Header"
import { Button } from "@/components/ui/button"
import Link from 'next/link';
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import Image from 'next/image';

const payment=({})=>{
    return(
        <div className="bg-white">
            <Header ></Header>

            <div className="w-full  bg-white p-6 rounded-lg shadow-lg">
     
     <div className="text-center mb-6">

  <h2 className="text-2xl font-semibold text-gray-800 text-left">Payment Method</h2>

  <div className="flex justify-between m-4">
    <p className="text-sm text-gray-600">Please enter your payment method</p>
    <p className="text-sm text-gray-600">Step 3 of 4</p>
  </div >
  <div className="flex justify-between ">
  <div><RadioGroup defaultValue="option-one">
  <div className="flex items-center space-x-2 ">
    <RadioGroupItem value="option-one" id="option-one" />
    <Label htmlFor="option-one">Credit Card</Label></div>
</RadioGroup></div>
<div><Image 
            src="/assets/Visa.png" 
            alt="Visa Credit Card" 
            width={92} 
            height={20} 
            className="object-cover rounded-lg" 
          /></div>
</div>



  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-4">
  <div className="text-left">
    <label className="">Card Number</label>
    <Input className="bg-gray-200" placeholder="Card Number" />
  </div>
  <div className="text-left">
    <label className="">Expration Date</label>
    <Input className="bg-gray-200"placeholder="Select your date" />
  </div>
</div>




<div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-4">
  
  <div className="text-left">
    <label >Card Holder</label>
    <Input id="address" className="bg-gray-200" placeholder="Card Holder" />
  </div>


    <div className="text-left">
      <label >CVC</label>
      <Input id="town" className="bg-gray-200" placeholder="CVC" />
    </div>
  </div>
  

</div>            </div>

<div className="flex justify-between m-4 ">
  <div><RadioGroup defaultValue="option-one">
  <div className="flex items-center space-x-2 m-4">
    <RadioGroupItem value="option-one" id="option-one" />
    <Label htmlFor="option-one">PayPal</Label></div>
</RadioGroup></div>
<div><Image 
            src="/assets/PayPal.png" 
            alt="Paypal" 
            width={92} 
            height={20} 
            className="object-cover rounded-lg" 
          /></div>
</div>

<div className="flex justify-between m-4 ">
  <div><RadioGroup defaultValue="option-one">
  <div className="flex items-center space-x-2 m-4">
    <RadioGroupItem value="option-one" id="option-one" />
    <Label htmlFor="option-one">Bitcoin</Label></div>
</RadioGroup></div>
<div><Image 
            src="/assets/Bitcoin.png" 
            alt="Bitcoin" 
            width={92} 
            height={20} 
            className="object-cover rounded-lg" 
          /></div>
</div>



            
           <div className="flex justify-center">
<Link href="/confirmation">
      <Button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
    Next
    </Button> 
    </Link> </div> 
            </div>
    )
}


export default payment;

