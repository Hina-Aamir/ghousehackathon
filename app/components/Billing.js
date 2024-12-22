import { Input } from "@/components/ui/input"



const Billing=({})=>{
    return(
        <div className="bg-white">
        

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
            
    
            </div>
    )
}


export default Billing;

