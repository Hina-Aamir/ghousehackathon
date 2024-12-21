
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Input } from "@/components/ui/input"

const PickDrop =({})=> {
    return (<div>



<div className=" container mx-auto p-4">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-4  ">
  <div>
  <div>
<RadioGroup defaultValue="option-one">
  <div className="flex items-center space-x-2 m-4">
    <RadioGroupItem value="option-one" id="option-one" />
    <Label htmlFor="option-one">Pick - Up</Label>
  </div>
 
</RadioGroup>
</div>
<div>
  {/* Name and Phone Number Fields */}
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
  <div className="text-left">
    <label className="">Location</label>
    <Input className="bg-gray-200" placeholder="Select your city" />
  </div>
  <div className="text-left">
    <label className="">Date</label>
    <Input className="bg-gray-200"placeholder="Select your date" />
  </div>

<div className="text-left ">
    <label className="">Time</label>
    <Input className="bg-gray-200 w-1/2"placeholder="Select your time" />
  </div>
</div>
</div>
</div>

<div>
  <div>
<RadioGroup defaultValue="option-one">
  <div className="flex items-center space-x-2 m-4">
    <RadioGroupItem value="option-one" id="option-one" />
    <Label htmlFor="option-one">Drop-off</Label>
  </div>
 
</RadioGroup>
</div>
<div>
  {/* Name and Phone Number Fields */}
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 ">
  <div className="text-left">
    <label className="">Location</label>
    <Input className="bg-gray-200" placeholder="Select your city" />
  </div>
  <div className="text-left">
    <label className="">Date</label>
    <Input className="bg-gray-200"placeholder="Select your date" />
  </div>

<div className="text-left ">
    <label className="">Time</label>
    <Input className="bg-gray-200 w-1/2"placeholder="Select your time" />
  </div>
</div>
</div>
</div>






</div>



</div>











    </div>)}
    export default PickDrop;
