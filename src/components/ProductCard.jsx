
import { Star } from "lucide-react";

export default function ProductCard({ product }) {
  return (
    <div className="relative w-full h-[420px] border border-gray-200 rounded-lg bg-white overflow-hidden hover:border-blue-400 transition flex flex-col">

      {product.hot && (
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded">
          HOT
        </span>
      )}

      <div className="w-full h-[260px] flex items-center justify-center">
        <img src={product.image} alt={product.name} className="object-contain" />
      </div>
      <div className="flex-1 flex flex-col items-center justify-center px-4 pb-4 bg-white">

        <h3 className="font-poppins font-semibold text-[16px] text-[#22262A] mb-1 text-center">
          {product.name}
        </h3>

        <div className="flex justify-center gap-1 text-yellow-400 mb-1">
          {[...Array(4)].map((_, i) => (
            <Star key={i} size={14} fill="currentColor" />
          ))}
          <Star size={14} className="text-gray-300" />
        </div>

        <div className="flex justify-center items-center gap-2">
          <span className="text-[#40BFFF] font-bold text-[18px]">
            ${product.price}
          </span>
          <span className="text-gray-400 line-through text-[13px]">
            ${product.oldPrice}
          </span>
          <span className="text-red-500 font-medium text-[13px]">
            {product.discount}
          </span>
        </div>
      </div>
    </div>
  );
}
