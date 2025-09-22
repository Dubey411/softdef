

import Sneaker from "../assets/MainSneaker.png";

export default function Hero() {
  return (
    <div className="w-full h-[350px] -mb-4">
      <div className="bg-blue-400 w-full h-full shadow-md px-12 py-8 flex items-center justify-between">
        <div className="text-white max-w-md">
          <h2 className="text-[28px] leading-tight font-semibold font-[Poppins]">
            Adidas Men Running Sneakers
          </h2>
          <p className="mt-3 text-[18px] font-[Poppins] mb-4">
            Performance and design. Taken right to the edge.
          </p>
          <button className="font-[Poppins] text-white underline text-[16px]">
            Shop Now
          </button>
        </div>

        <img
          src={Sneaker}
          alt="Adidas Shoe"
          className="object-contain w-[442.76px] h-[221.56px] scale-x-[-1]"
        />
      </div>
    </div>
  );
}