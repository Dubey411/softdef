
import ProductCard from "./ProductCard";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";

const products = [
  { id: 1, name: "Nike Air Max 270 React", price: 130, oldPrice: 200, discount: "35% Off", image: img1, hot: true },
  { id: 2, name: "Nike Air Max 270 React", price: 110, oldPrice: 180, discount: "39% Off", image: img2, hot: true },
  { id: 3, name: "Nike Air Max 270 React", price: 140, oldPrice: 210, discount: "33% Off", image: img3, hot: false },
  { id: 4, name: "Nike Air Max 270 React", price: 150, oldPrice: 220, discount: "32% Off", image: img4, hot: true },
  { id: 5, name: "Nike Air Max 270 React", price: 120, oldPrice: 170, discount: "29% Off", image: img5, hot: false },
  { id: 6, name: "Nike Air Max 270 React", price: 125, oldPrice: 175, discount: "28% Off", image: img6, hot: true },
];

export default function ProductList() {
  return (
    <div className="w-full mt-6">

      <div className="grid grid-cols-3 gap-x-8 gap-y-6 justify-items-center ">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}

