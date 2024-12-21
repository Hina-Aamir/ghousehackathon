import Image from 'next/image';

export default function CarRentalAd2() {
  return (
    <div className="bg-blue-500  text-white p-8 rounded-lg flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
      {/* Text Section */}
      <div className="max-w-lg">
        <h1 className="text-3xl font-bold mb-4">Easy way to rent a car at a low price</h1>
        <p className="text-lg mb-6">
          Providing cheap car rental services and safe and comfortable facilities.
        </p>
        <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded">
          Rental Car
        </button>
      </div>

      {/* Image Section */}
      <div className="relative w-full lg:w-1/2 h-64">
        <Image
          src="/assets/Look.png" // Replace with your image path
          alt="Car Rental"
          layout="fill"
          objectFit="contain"
          className="rounded"
        />
      </div>
    </div>
  );
}
