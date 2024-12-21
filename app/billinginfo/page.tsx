import { Input } from "@/components/ui/input"
import Header from "../components/Header"
import { Button } from "@/components/ui/button"
import Link from 'next/link';

const billing=({})=>{
    return(
        <div className="bg-white">
            <Header ></Header>

            <div className="w-full  bg-white p-6 rounded-lg shadow-lg">
     
     {/* Billing */}
     <div className="text-center mb-6">
  {/* Section Title */}
  <h2 className="text-2xl font-semibold text-gray-800 text-left">Billing Info</h2>

  {/* Instructions and Step Indicator */}
  <div className="flex justify-between m-4">
    <p className="text-sm text-gray-600">Please enter your billing info</p>
    <p className="text-sm text-gray-600">Step 1 of 4</p>
  </div>

  {/* Name and Phone Number Fields */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  <div className="text-left">
    <label className="">Name</label>
    <Input className="bg-gray-200" placeholder="Your Name" />
  </div>
  <div className="text-left">
    <label className="">Phone Number</label>
    <Input className="bg-gray-200"placeholder="Your Phone Number" />
  </div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  {/* Address Field */}
  <div className="text-left">
    <label >Address</label>
    <Input id="address" className="bg-gray-200" placeholder="Your Address" />
  </div>

  {/* Town/City Field */}

    <div className="text-left">
      <label >Town/City</label>
      <Input id="town" className="bg-gray-200" placeholder="Your Town/City" />
    </div>
  </div>
</div>

            
            
            
            </div>
            
           <div className="flex justify-center">
<Link href="/rentalinfo">
      <Button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
    Next
    </Button> 
    </Link> </div> 
            </div>
    )
}


export default billing;

