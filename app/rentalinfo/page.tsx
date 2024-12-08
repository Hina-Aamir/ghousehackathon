import { Input } from "@/components/ui/input"
import Header from "../components/Header"
import { Button } from "@/components/ui/button"
import Link from 'next/link';
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const rentalinfo=({})=>{
    return(
        <div className="bg-white">
            <Header text="Content"></Header>

            <div className="w-full  bg-white p-6 rounded-lg shadow-lg">
     
     <div className="text-center mb-6">
  {/* Section Title */}
  <h2 className="text-2xl font-semibold text-gray-800 text-left">Rental Info</h2>

  {/* Instructions and Step Indicator */}
  <div className="flex justify-between m-4">
    <p className="text-sm text-gray-600">Please select your rental date</p>
    <p className="text-sm text-gray-600">Step 2 of 4</p>
  </div >
  <RadioGroup defaultValue="option-one">
  <div className="flex items-center space-x-2 m-4">
    <RadioGroupItem value="option-one" id="option-one" />
    <Label htmlFor="option-one">Pick - Up</Label>
  </div>

</RadioGroup>



  {/* Name and Phone Number Fields */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-4">
  <div className="text-left">
    <label className="">Location</label>
    <Input className="bg-gray-200" placeholder="Select your city" />
  </div>
  <div className="text-left">
    <label className="">Date</label>
    <Input className="bg-gray-200"placeholder="Select your date" />
  </div>
</div>
<div className="text-left m-4">
    <label className="">Time</label>
    <Input className="bg-gray-200 w-1/2"placeholder="Select your time" />
  </div>

  <RadioGroup defaultValue="option-one">
  <div className="flex items-center space-x-2 m-4">
    <RadioGroupItem value="option-one" id="option-one" />
    <Label htmlFor="option-one">Drop - Off</Label>
  </div>

</RadioGroup>


<div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-4">
  
  <div className="text-left">
    <label >Location</label>
    <Input id="address" className="bg-gray-200" placeholder="Select your city" />
  </div>


    <div className="text-left">
      <label >Date</label>
      <Input id="town" className="bg-gray-200" placeholder="Select your date" />
    </div>
  </div>
  <div className="text-left m-4">
      <label >Time</label>
      <Input id="town" className="bg-gray-200 w-1/2" placeholder="Select your time" />
    </div>

</div>

            
            
            
            </div>
            
           <div className="flex justify-center">
<Link href="/payment">
      <Button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
    Next
    </Button> 
    </Link> </div> 
            </div>
    )
}


export default rentalinfo;

