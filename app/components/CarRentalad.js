import Image from 'next/image';

export default function CarRentalad() {
  return (
    <div className="bg-blue-500 text-white p-8 rounded-lg flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
    {/* Text Section */}
    <div className="max-w-lg">
      <h1 className="text-3xl font-bold mb-4">The Best Platform for Car Rental</h1>
      <p className="text-lg mb-6">
      Ease of doing a car rental safely and reliably. Of course at a low price.
      </p>
      <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded">
        Rental Car
      </button>
    </div>

    {/* Image Section */}
    <div className="relative w-full lg:w-1/2 h-64">
      <Image
        src="/assets/ad1.png" // Replace with your image path
        alt="Car Rental"
      width="500"
      height="500"
      />
    </div>
  </div>
  );
}