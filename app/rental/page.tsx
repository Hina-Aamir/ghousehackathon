import Image from 'next/image';
import { Button } from "@/components/ui/button"
import Link from 'next/link';
import Header from "../components/Header"
const RentalSummary=({})=> {
  return (
    <div>
        <Header text="Content"></Header>
    <div className="w-full max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
     
      {/* Rental Summary Header */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Rental Summary</h2>
        <p className="text-sm text-gray-600">Prices may change depending on the length of the rental and the price of your rental car.</p>
      </div>

      {/* Car Information */}
      <div className="flex items-center mb-6">
        <div className="w-24 h-16 mr-4">
          <Image 
            src="/assets/Look.png" 
            alt="Nissan GT-R" 
            width={132} 
            height={108} 
            className="object-cover rounded-lg" 
          />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Nissan GT-R</h3>
          <div className="flex items-center text-yellow-500">
            <span className="text-lg">★★★★☆</span>
            <span className="text-sm text-gray-600 ml-2">440+ Reviews</span>L
          </div>
        </div>
      </div>

      {/* Pricing Details */}
      <div className="mb-6">
        <div className="flex justify-between text-gray-600">
          <p>Subtotal</p>
          <p>$80.00</p>
        </div>
        <div className="flex justify-between text-gray-600">
          <p>Tax</p>
          <p>$0</p>
        </div>
      </div>

      {/* Promo Code */}
      <div className="flex justify-between mb-6">
        <input 
          type="text" 
          placeholder="Apply promo code" 
          className="border border-gray-300 rounded-lg p-2 w-2/3 text-sm"
        />
        <button className="bg-blue-500 text-white rounded-lg px-4 py-2 ml-4 text-sm hover:bg-blue-600">
          Apply now
        </button>
      </div>

      {/* Total Rental Price */}
      <div>
      <div className="flex justify-between text-lg font-semibold text-gray-800 border-t pt-4">
        <p>Total Rental Price</p>
        <p>$80.00</p>
      </div>
      <p className="text-sm text-gray-500 mt-2">Overall price and includes rental discount.</p>
      </div>

      <Link href="/billinginfo">
      <Button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
    Next
    </Button>
    </Link>
    </div></div>
  );
}
export default RentalSummary;