import Header from "../components/Header"
import Footer from "../components/Footer"
import Card from "../components/Card"
import Link from 'next/link'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import Image from 'next/image';

export default function DetailCar(){
    return(

<div>
<Header/>
<div>


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
<div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
  <div className="bg-white  text-white rounded">
<div>
    <div className="">
  <Image
          src="/assets/View.png" 
          alt="Car Rental"
width={520}
height={360}
              /></div>
<div className="flex justify-between ">
<div>   <Image
          src="/assets/View 1.png" 
          alt="Car Rental"
          width={148}
          height={124}/></div>
<div>  <Image
          src="/assets/View 2.png" 
          alt="Car Rental"
          width={148}
          height={124}/></div>
<div> <Image
          src="/assets/View 3.png" 
          alt="Car Rental"
width={148}
height={124}/></div></div></div>



  </div>
  <div className="bg-green-500 p-4 text-white rounded container mx-auto p-4">
<div>
    <div className="grid grid-cols-2   gap-4 m-4">
<div>
    <h3 className="text-[24px] font-bold leading-[48px] tracking-[-0.03em] text-left 
">Nissan GT - R</h3>
</div><div className="flex justify-end "> <Image
src="/assets/redheart.png" 
          alt="Heart"
width={24}
height={24}/>
</div>
</div>
<div>
    <p className="text-[20px] font-normal leading-[40px] tracking-[-0.02em] text-left ">
    NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving 
    proving ground, the "race track".
    </p>
</div>
<div className="grid grid-cols-2   gap-4 m-4">
<div>Type Car     Sport</div>
<div> Capacity   2 Person</div>
<div>Steering   Manual</div>
<div> Gasoline 70L</div>
</div>
<div className="p-4 flex justify-between items-center">
    <p className="text-lg font-bold text-gray-600">
      <b className="text-black"></b>$80.00/ days
    </p>
  <div>
    <Link href="/PaymentCarRent">
        
          <Button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
      Rent Now
    </Button>
        
        </Link></div>
  </div>


</div>





  </div>

</div>

<div className="bg-red-500 p-4 text-white container mx-auto p-4 " >
    <h1>Reviews</h1>
   <div className="grid grid-cols-2   gap-4 m-4">
   <div className=" "> <Image
src="/assets/profile.png" 
          alt="Profile"
width={30}
height={30}/>
</div>
    <div className="grid grid-cols-2   gap-4 m-4">
    <div>
<div className="container mx-auto p-4">
  <div >
 <div className=""><h4>Alex Stanton</h4><p>CEO at Bukalapak</p>
 
 </div>
<div className="flex justify-end"><p>21 July 2022</p>
<div>
<div className="flex space-x-2">
      {[...Array(5)].map((_, index) => (
        <Image
          key={index}
          src="/assets/star.png"
          alt="Star"
          width={24}
          height={24}
        />
      ))}
    </div>
</div>
</div> 
</div>
</div>

    </div>
    
    </div>
    </div> 
    
</div>
<div className="bg-yellow-500 p-4 text-white rounded">Item 4</div>



</div>









  <div>
<div className="container mx-auto p-4">
  <div className="grid grid-cols-2   gap-4 m-4">
 <div className=""><h4>Recent Car</h4></div>
<div className="flex justify-end"><h4>View All</h4></div> 
</div>
</div>

</div>

  
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
    
      


    

  </div>
  <div className="flex justify-evenly">
<Link href="/PaymentCarRent">
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