import { useState } from "react";
import * as Slider from "@radix-ui/react-slider";

const Sidebar = () => {
  const deals = [
    { name: "Nike", count: 2 },
    { name: "Airmax", count: 48, active: true },
    { name: "Nike", count: 14 },
    { name: "Adidas", count: 15 },
    { name: "Vans", count: 23 },
    { name: "All Stars", count: 1 },
    { name: "Adidas", count: 95 },
  ];

  const colors = [
    "#3b82f6",
    "#ef4444",
    "#000000",
    "#facc15",
    "#ec4899",
    "#f5f5f5",
  ];

  const brands = [
    { name: "Nike", count: 99 },
    { name: "Nike", count: 99, active: true },
    { name: "Adidas", count: 99 },
    { name: "Siemens", count: 99 },
  ];

  const [selectedColor, setSelectedColor] = useState("#3b82f6");
  const [priceRange, setPriceRange] = useState([13, 25]);

  return (
    <div className=" w-[355px] h-[1385px] top-[95.27px] left-[21.4px] opacity-100 space-y-6">
      <div className="w-[349.23px] h-[548.57px] bg-[#F6F7F8] rounded-xl shadow-md p-5">
        <h3 className="font-semibold font-[Poppins] text-[20px] mb-10 text-[#22262A]">
          Hot Deals
        </h3>
        <ul className="space-y-9">
          {deals.map((deal, index) => (
            <li key={index} className="flex justify-between items-center">
              <span
                className={
                  deal.active
                    ? "text-blue-600 text-[18px] cursor-pointer"
                    : "text-gray-800 text-[18px] cursor-pointer hover:text-gray-900"
                }
              >
                {deal.name}
              </span>
              <span
                className={
                  deal.active
                    ? "text-blue-600 font-semibold text-sm"
                    : "text-gray-400 text-sm"
                }
              >
                {deal.count}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-[347.94px] h-[190.35px] bg-[#F6F7F8] rounded-xl shadow-md p-8">
        <h3 className="font-semibold text-[18px] mb-12">PRICES</h3>
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Range:</span>
          <span>
            ${priceRange[0]}.99 - ${priceRange[1]}.99
          </span>
        </div>
        <Slider.Root
          className="relative flex items-center select-none w-full h-5"
          value={priceRange}
          onValueChange={setPriceRange}
          min={10}
          max={25}
          step={1}
        >
          <Slider.Track className="bg-gray-300 relative grow rounded-full h-[6px]">
            <Slider.Range className="absolute bg-blue-500 rounded-full h-full" />
          </Slider.Track>
          <Slider.Thumb className="block w-5 h-5 bg-blue-500 rounded-full shadow -translate-x-1/2" />
          <Slider.Thumb className="block w-5 h-5 bg-blue-500 rounded-full shadow" />
        </Slider.Root>
      </div>

      <div className="w-[347.94px] h-[144.22px] bg-[#F6F7F8] rounded-xl shadow-md p-6">
        <h3 className="font-semibold text-[18px] mb-8">COLOR</h3>
        <div className="flex gap-7">
          {colors.map((c, idx) => (
            <button
              key={idx}
              type="button"
              aria-label={`Select color ${c}`}
              onClick={() => setSelectedColor(c)}
              className={`w-7 h-7 rounded-full transition 
                ${
                  selectedColor === c
                    ? "ring-2 ring-green-500"
                    : "border-2 border-gray-300"
                }`}
              style={{ backgroundColor: c }}
            />
          ))}
        </div>
      </div>

      <div className="w-[347.94px] h-[303.15px] bg-[#F6F7F8] rounded-xl shadow-md p-6">
        <h3 className="font-semibold text-[18px] mb-6">BRAND</h3>
        <ul className="space-y-8">
          {brands.map((brand, index) => (
            <li key={index} className="flex justify-between items-center">
              <span
                className={
                  brand.active
                    ? "text-blue-600 text-[18px] cursor-pointer"
                    : "text-gray-800 text-[18px] cursor-pointer hover:text-gray-900"
                }
              >
                {brand.name}
              </span>
              <span
                className={
                  brand.active
                    ? "text-blue-600 font-semibold text-sm"
                    : "text-gray-400 text-sm"
                }
              >
                {brand.count}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-[347.94px] h-[69.29px] bg-[#F6F7F8] rounded-xl shadow-md p-4 text-center cursor-pointer">
        <span className="text-gray-700 font-semibold font-[Poppins]">MORE</span>
      </div>
    </div>
  );
};

export default Sidebar;
