

import { Grid, List } from "lucide-react"; 

const Filter = () => {
  return (
    <div className="absolute top-[480px] left-[404.4px] w-[1069px] h-[62.57px]  bg-[#F6F7F8] rounded-xl shadow-md flex items-center justify-between px-8">

      <div className="flex items-center gap-12">
        <span className="text-gray-700 font-[Poppins] text-[16px]">13 Items</span>

        <div className="flex items-center gap-12">
          <span className="text-gray-700 font-[Poppins] text-[16px]">Sort By</span>
          <select className="rounded-lg px-3 py-2 text-[14px] font-[Poppins] focus:outline-none cursor-pointer">
            <option>Name</option>
            <option>Price</option>
            <option>Newest</option>
          </select>
        </div>

        <div className="flex items-center gap-12">
          <span className="text-gray-700 font-[Poppins] text-[16px]">Show</span>
          <select className=" rounded-lg px-3 py-2 text-[14px] font-[Poppins] focus:outline-none cursor-pointer">
            <option>12</option>
            <option>24</option>
            <option>36</option>
          </select>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 rounded-md hover:bg-gray-200">
          <Grid className="w-5 h-5 text-blue-500" />
        </button>
        <button className="p-2 rounded-md hover:bg-gray-200">
          <List className="w-5 h-5 text-gray-500" />
        </button>
      </div>
    </div>
  );
};

export default Filter;
