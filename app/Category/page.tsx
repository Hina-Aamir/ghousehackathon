import Header from "../components/Header"
import Footer from "../components/Footer"
import Card from "../components/Card"
import Link from 'next/link'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import PickDrop from '../components/pickdrop'

export default function Category(){
    return(

<div className="container mx-auto p-4">
<Header/>
<div  className="container mx-auto p-4 sm:text-center">


<div className="grid grid-cols-[360px,3fr] gap-4">
  <div className="bg-[ #FFFFFF]
p-4 hidden sm:block">

<div><h1 >TYPE</h1></div>
<div>
<RadioGroup >
  <div className="flex items-center space-x-2 m-2">
    <RadioGroupItem value="optionp-one"  />
    <Label >SPORT</Label>
  </div>
  <div className="flex items-center space-x-2 m-2">
    <RadioGroupItem value="option-one" />
    <Label >SUV</Label>
  </div>
  <div className="flex items-center space-x-2 m-2">
    <RadioGroupItem value="option-one" />
    <Label >MPV</Label>
  </div>
  <div className="flex items-center space-x-2 m-2">
    <RadioGroupItem value="option-one"  />
    <Label >MPV</Label>
  </div>
  <div className="flex items-center space-x-2 m-2">
    <RadioGroupItem value="option-one" id="option-five" />
    <Label >MPV</Label>
  </div>
  <div className="flex items-center space-x-2 m-2">
    <RadioGroupItem value="option-one" />
    <Label >MPV</Label>
  </div>
</RadioGroup>
</div>


<div><h1 >CAPACITY</h1></div>

<div>
<RadioGroup >
  <div className="flex items-center space-x-2 m-2">
    <RadioGroupItem value="optionp-one"/>
    <Label >S2 Person  (10)</Label>
  </div>
  <div className="flex items-center space-x-2 m-2">
    <RadioGroupItem value="option-one" />
    <Label >4 Person  (14)</Label>
  </div>
  <div className="flex items-center space-x-2 m-2">
    <RadioGroupItem value="option-one" />
    <Label >6 Person  (12)</Label>
  </div>
  <div className="flex items-center space-x-2 m-2">
    <RadioGroupItem value="option-one"  />
    <Label >8 or More  (16)</Label>
  </div>

</RadioGroup>
</div>
<div><h1 ></h1>PRICE</div>

<p>Max. $100.00</p>






  </div>

  <div className="container mx-auto p-4 bg-gray-100 m-2">
    
  <PickDrop/>
  
  <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4">

   <div> <Card car='/assets/car1.png' model="Koenigsegg" brand="Sport" miles="80" type="Manual" sitting="6" price="80.00">
       </Card></div>
       <div><Card car='/assets/car2.png' model="Nissan GT" brand="Sport" miles="80" type="Manual" sitting="6" price="80.00">
       </Card> </div>
       <div><Card car='/assets/car3.png' model="Rolls - Royce" brand="Sedan" miles="80" type="Manual" sitting="6" price="80.00">
       </Card></div>
       <div>
       <Card  car='/assets/car5.png' model="All New Rush" brand="SUV" miles="80" type="Manual" sitting="6" price="80.00">
       </Card></div>
      <div> <Card  car='/assets/car6.png' model="CR  - V" brand="SUV" miles="80" type="Manual" sitting="6" price="80.00">
       </Card></div>
       <div> <Card  car='/assets/car7.png' model="All New Terios" brand="SUV"  miles="80" type="Manual" sitting="6" price="80.00">
       </Card></div>
    
      <div> <Card  car='/assets/car9.png' model ="MG ZX Exclusice" brand="Hatchback" miles="80" type="Manual" sitting="6" price="80.00">
       </Card></div>
       <div><Card  car='/assets/car10.png' model="New MG ZS" brand="SUV" miles="80" type="Manual" sitting="6" price="80.00">
       </Card></div>
       <div><Card  car='/assets/car11.png' model="MG ZX Exclusice" brand="Hatchback" miles="80" type="Manual" sitting="6" price="80.00">
       </Card></div>


    

  </div>
  <div className="flex justify-evenly">
<Link href="/DetailCar">
      <Button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
    Show More Car
    </Button> 
    </Link> </div> 
  </div>
</div>


</div>

<Footer/>



</div>
    );
}