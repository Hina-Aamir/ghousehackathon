
import Header from "./components/Header"

import Link from 'next/link';


import Card from "./components/Card"
import Footer from "./components/Footer"
import { Button } from "@/components/ui/button"
import CarRentalad from "./components/CarRentalAd"
import CarRentalAd2 from "./components/CarRentalAd2"
import PickDrop from './components/pickdrop'
export default function Home() {
  return (
    <div className="bg-gray-200">
    <Header ></Header>

<div className="container mx-auto p-4">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4  ">
  <div>
    <CarRentalad/>
  </div>
  <div className="hidden md:block"><CarRentalAd2/></div>
</div>
</div>


<PickDrop/>

<div>
<div className="container mx-auto p-4">
  <div className="grid grid-cols-2   gap-4 m-4">
 <div className=""><h4>Popular Car</h4></div>
<div className="flex justify-end"><h4>View All</h4></div> 
</div>
</div>

</div>

{/* popular section */}
<div className="container mx-auto p-4">
  <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-4">
   <div> <Card car='/assets/car1.png' model="Koenigsegg" brand="Sport" miles="80" type="Manual" sitting="6" price="80.00">
       </Card></div>
       <div><Card car='/assets/car2.png' model="Nissan GT" brand="Sport" miles="80" type="Manual" sitting="6" price="80.00">
       </Card> </div>
       <div><Card car='/assets/car3.png' model="Rolls - Royce" brand="Sedan" miles="80" type="Manual" sitting="6" price="80.00">
       </Card></div>
       <div> <Card car='/assets/car4.png' model="Nissan GT - R" brand="Sport" miles="80" type="Manual" sitting="6" price="80.00">
       </Card> </div>
       </div>
       </div>
{/* recommended car section */}
<div className="container mx-auto p-4">
  <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-4">

       <div>
       <Card  car='/assets/car5.png' model="All New Rush" brand="SUV" miles="80" type="Manual" sitting="6" price="80.00">
       </Card></div>
      <div> <Card  car='/assets/car6.png' model="CR  - V" brand="SUV" miles="80" type="Manual" sitting="6" price="80.00">
       </Card></div>
       <div> <Card  car='/assets/car7.png' model="All New Terios" brand="SUV"  miles="80" type="Manual" sitting="6" price="80.00">
       </Card></div>
       <div><Card  car='/assets/car8.png' model="CR  - V" brand="SUV" miles="80" type="Manual" sitting="6" price="80.00">
       </Card></div>
      <div> <Card  car='/assets/car9.png' model ="MG ZX Exclusice" brand="Hatchback" miles="80" type="Manual" sitting="6" price="80.00">
       </Card></div>
       <div><Card  car='/assets/car10.png' model="New MG ZS" brand="SUV" miles="80" type="Manual" sitting="6" price="80.00">
       </Card></div>
       <div><Card  car='/assets/car11.png' model="MG ZX Exclusice" brand="Hatchback" miles="80" type="Manual" sitting="6" price="80.00">
       </Card></div>
      <div> <Card  car='/assets/car12.png' model ="New MG ZS" brand="SUV" miles="80" type="Manual" sitting="6" price="80.00">
       </Card></div>
       
       </div>
       </div>
       <div className="flex justify-center">
<Link href="/Category">
      <Button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
    Show More Car
    </Button> 
    </Link> </div> 

<Footer/>
   </div>

  );
}
