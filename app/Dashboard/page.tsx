
import Image from "next/image";
import DashSideBar from "../components/DashSIdeBar"
import Header from "../components/Header"

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Input } from "@/components/ui/input"
import Recent from "../components/Recent"






export default function Dashboard(){
    return(

<div className="bg-gray-200">
<Header/>

<div  className="">


<div className="grid grid-cols-[360px,3fr] gap-4  ">
  <div className="bg-[ #FFFFFF]
p-4 hidden sm:block">

<DashSideBar/></div>

<div className="p-4 bg-[ #FFFFFF]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="text-black">Details Rental
<div><Image src="/assets/Maps.png" alt="Maps" width={486} height={272}/></div>

{/* details rental */}
<div>
    <div className=" mx-auto bg-white ">
     

      {/* Car Information */}
      <div className="flex items-center mb-6">
        <div className="w-24 h-16 mr-4">
          <Image 
            src="/assets/Look.png" 
            alt="Nissan GT-R" 
            width={96} 
            height={64} 
            className="object-cover rounded-lg" 
          />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Nissan GT-R</h3>
          <div className="flex items-center text-yellow-500">
      <p>Sport Car</p>
          </div>
        </div>
      </div>
{/* pick drop section */}
    <div className="text-black">
    <div>
  <div>
<RadioGroup defaultValue="option-one">
<div className="m-4">
    <RadioGroupItem value="option-one" id="option-one" />
    <Label htmlFor="option-one" className="p-2">Pick - Up</Label>
    </div>
 
</RadioGroup>
</div>
<div>
  {/* Name and Phone Number Fields */}
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
  <div className="text-left">
    <Label className="">Location</Label>
    <Input className="bg-gray-200" placeholder="Select your city" />
  </div>
  <div className="text-left">
    <Label className="">Date</Label>
    <Input className="bg-gray-200"placeholder="Select your date" />
  </div>

<div className="text-left ">
    <Label className="">Time</Label>
    <Input className="bg-gray-200 w-1/2"placeholder="Select your time" />
  </div>
</div>
</div>



<div>
<RadioGroup defaultValue="option-one">
<div className="m-4">
    <RadioGroupItem value="option-one" id="option-one" />
    <Label htmlFor="option-one" className="p-2">Drop-off</Label>
    </div>
 
</RadioGroup>
</div>
<div>
  {/* Name and Phone Number Fields */}
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
  <div className="text-left">
    <Label className="">Location</Label>
    <Input className="bg-gray-200" placeholder="Select your city" />
  </div>
  <div className="text-left">
    <Label className="">Date</Label>
    <Input className="bg-gray-200"placeholder="Select your date" />
  </div>

<div className="text-left ">
    <Label className="">Time</Label>
    <Input className="bg-gray-200 w-1/2"placeholder="Select your time" />
  </div>
</div>
</div>






</div>





    </div>

      {/* Total Rental Price */}
      <div className="flex justify-between text-lg font-semibold text-gray-800 border-t pt-4">
        <p>Total Rental Price</p>
        <p>$80.00</p>
      </div>
      <p className="text-sm text-gray-500 mt-2">Overall price and includes rental discount.</p>




      
    </div>













</div>




        </div>
        <div className=" ">Top 5 Car Rental
          <div><Image src="/assets/CarRental.png" alt="Top 5 Car Rental" width={486} height={272}/>

          <div className="container mx-auto p-4">
  <div className="grid grid-cols-2  ">
 <div className=""><h4>Recent Transaction</h4></div>
<div className="flex justify-end"><h4>View All</h4></div> 
</div>




       
          
          
          <Recent image="/assets/re1.png" model="Nissan GT - R" brand ="Sport Car" price="$80.00" date="20 July"/>
          <Recent image="/assets/re2.png" model="Koegnigsegg" brand ="Sport Car" price="$99.00" date="19 July"/>
          <Recent image="/assets/re3.png" model="Rolls - Royce" brand ="Sport Car" price="$96.00" date="18 July"/>
          <Recent image="/assets/re4.png" model="CR - V" brand ="SUV" price="$80.00" date="17 July"/>
           </div>
      </div>
    </div>

    </div>
    </div>

</div>


  </div>
  </div>
  
    )}