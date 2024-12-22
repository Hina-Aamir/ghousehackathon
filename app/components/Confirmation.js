

import { Button } from "@/components/ui/button"
import Link from 'next/link';
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import Image from 'next/image';


const Confirmation=({})=>{
    return(
        <div className="bg-white">
         
            <div className="w-full  bg-white p-6 rounded-lg shadow-lg">
     
     <div className="text-center mb-6">

  <h2 className="text-2xl font-semibold text-gray-800 text-left">Confirmation</h2>

  <div className="flex justify-between m-4">
    <p className="text-sm text-gray-600">We are getting to the end. Just few clicks and your rental is ready!</p>
    <p className="text-sm text-gray-600">Step 4 of 4</p>
  </div >
 </div>
 </div>

 <div className="m-4">
<RadioGroup defaultValue="option-one">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-one" id="option-one" />
    <Label htmlFor="option-one">I agree with sending an Marketing and newsletter emails. No spam, promissed!</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-two" id="option-two" />
    <Label htmlFor="option-two">I agree with our terms and conditions and privacy policy.</Label>
  </div>
</RadioGroup>






</div>
            
           <div className="flex justify-center">
<Link href="./thank">
      <Button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
    Rent Now
    </Button> 
    </Link> </div> 

<div className="m-4">
<Image 
            src="/assets/Layer.png" 
            alt="Layer" 
            width={32} 
            height={32} 
            className="object-cover rounded-lg" 
          />

<h4 className="text-1xl font-semibold text-gray-800 text-left">All your data are safe</h4>
<p>We are using the most advanced security to provide you the best experience ever.</p>

</div>





            </div>
    )
}


export default Confirmation;