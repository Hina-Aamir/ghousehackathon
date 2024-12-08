import Image from "next/image";
import { Button } from "@/components/ui/button"
import Link from 'next/link';

const Card=({model,brand,miles,type,sitting,price}) =>{
    return (
        <div className="w-full max-w-xs mx-auto border border-gray-300 bg-white m-6 rounded-lg shadow-lg overflow-hidden">
  {/* Card Header */}
  <div className="p-4 flex justify-between items-center">
    <div>
      <h4 className="text-xl font-semibold">{model}</h4>
      <p className="text-gray-600 text-sm">{brand}</p>
    </div>
    <Image src="/assets/heart.png" alt="Add to favorites" width={24} height={24} />
  </div>

  {/* Car Image */}
  
  <div className="w-full">
    <Image 
      src="/assets/Car.png" 
      alt={`${model} image`} 
      width={600} 
      height={300} 
      className="w-full object-cover" 
    />
  </div>

  {/* Car Details */}
  <div className="p-4 text-gray-600 text-sm">
    <div className="flex justify-between mb-2">
      <span className="flex items-center space-x-1">
        <Image 
          src="/assets/gas.png" 
          alt="gas-station" 
          width={24} 
          height={24} 
        />
        <span>{miles}L</span>
      </span>
      <span className="flex items-center space-x-1">
        <Image 
          src="/assets/wheel.png" 
          alt="Manual/Automatic" 
          width={24} 
          height={24} 
        />
        <span>{type}</span>
      </span>
      <span className="flex items-center space-x-1">
        <Image 
          src="/assets/people.png" 
          alt="number of persons" 
          width={24} 
          height={24} 
        />
        <span>{sitting} People</span>
      </span>
    </div>
  </div>

  {/* Pricing and Rent Button */}
  <div className="p-4 flex justify-between items-center">
    <p className="text-lg font-bold text-gray-600">
      <b className="text-black">${price}</b>/day
    </p>
  
    <Link href="/rental">
        
          <Button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
      Rent Now
    </Button>
        
        </Link>
  </div>
</div>

      

      
    );
  }
  export default  Card;