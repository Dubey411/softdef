
export default function ProductCard({ product }) {
  return (
    <div className="relative w-[328px] h-[385px] bg-white rounded-lg shadow-md overflow-hidden -mt-1">
      {/* Hot badge */}
      {product.hot && (
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
          HOT
        </span>
      )}

      {/* Product Image */}
      <div className="w-full h-[220px] bg-gray-100 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Product Info */}
      <div className="p-4 flex flex-col gap-2">
        <h3 className="font-poppins font-semibold text-lg text-[#22262A]">
          {product.name}
        </h3>

        {/* Prices */}
        <div className="flex items-center gap-2">
          <span className="text-[#40BFFF] font-bold text-lg">
            ${product.price}
          </span>
          <span className="text-gray-400 line-through text-sm">
            ${product.oldPrice}
          </span>
          <span className="text-red-500 font-medium text-sm">
            {product.discount}
          </span>
        </div>
      </div>
    </div>
  );
}
