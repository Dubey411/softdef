
import Sneaker from "../assets/MainSneaker.png";

export default function HeroSection() {
  return (
    <div className="absolute top-[95.27px] left-[404.4px] w-[1069px] h-[350px]">
      <div className="bg-blue-400 flex items-center justify-between px-12 py-10 
                      w-full h-full shadow-md">

        <div className="text-white max-w-md">
          <h2 className="text-[28px] leading-tight font-semibold font-[Poppins]">
            Adidas Men Running Sneakers
          </h2>
          <p className="mt-3 text-[18px] font-[Poppins] mb-6">
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












