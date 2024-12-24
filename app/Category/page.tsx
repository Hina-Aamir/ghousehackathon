import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Link from "next/link";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import PickDrop from "../components/pickdrop";

export default function Category() {
  return (
    <div className="container mx-auto p-4">
      <Header />
      <div className="container mx-auto p-4 sm:text-center">
        <div className="grid grid-cols-1 lg:grid-cols-[360px,3fr] gap-4">
          {/* Sidebar (Filters) */}
          <div className="bg-white p-4 hidden lg:block border rounded-lg shadow-md">
            {/* TYPE Filter */}
            <div className="mb-6">
              <h1 className="text-lg font-semibold mb-4">TYPE</h1>
              <RadioGroup>
                {["Sport", "SUV", "MPV"].map((type, index) => (
                  <div key={index} className="flex items-center space-x-2 m-2">
                    <RadioGroupItem value={`option-${type}`} />
                    <Label>{type}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            {/* CAPACITY Filter */}
            <div className="mb-6">
              <h1 className="text-lg font-semibold mb-4">CAPACITY</h1>
              <RadioGroup>
                {[
                  { label: "2 Person (10)", value: "2-person" },
                  { label: "4 Person (14)", value: "4-person" },
                  { label: "6 Person (12)", value: "6-person" },
                  { label: "8 or More (16)", value: "8-more" },
                ].map((capacity, index) => (
                  <div key={index} className="flex items-center space-x-2 m-2">
                    <RadioGroupItem value={capacity.value} />
                    <Label>{capacity.label}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            {/* PRICE Filter */}
            <div>
              <h1 className="text-lg font-semibold mb-4">PRICE</h1>
              <p>Max. $100.00</p>
            </div>
          </div>

          {/* Main Content (Cards) */}
          <div className="container mx-auto bg-gray-100 p-4 rounded-lg shadow-md">
            <PickDrop />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { car: "/assets/car1.png", model: "Koenigsegg", brand: "Sport" },
                { car: "/assets/car2.png", model: "Nissan GT", brand: "Sport" },
                { car: "/assets/car3.png", model: "Rolls-Royce", brand: "Sedan" },
                { car: "/assets/car5.png", model: "All New Rush", brand: "SUV" },
                { car: "/assets/car6.png", model: "CR - V", brand: "SUV" },
                { car: "/assets/car7.png", model: "All New Terios", brand: "SUV" },
                { car: "/assets/car9.png", model: "MG ZX Exclusive", brand: "Hatchback" },
                { car: "/assets/car10.png", model: "New MG ZS", brand: "SUV" },
                { car: "/assets/car11.png", model: "MG ZX Exclusive", brand: "Hatchback" },
              ].map((car, index) => (
                <Card
                  key={index}
                  car={car.car}
                  model={car.model}
                  brand={car.brand}
                  miles="80"
                  type="Manual"
                  sitting="6"
                  price="80.00"
                />
              ))}
            </div>

            {/* Show More Button */}
            <div className="flex justify-center mt-6">
              <Link href="/DetailCar">
                <Button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
                  Show More Cars
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
