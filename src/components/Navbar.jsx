<<<<<<< HEAD
// import Icon from "../assets/Icon.png";
// import Cart from "../assets/cart.png";

// export default function Navbar() {
//   return (
//     <nav className="w-full h-[60px] flex items-center justify-between px-8 ">
//       <div className="flex items-center gap-2">
//         <img src={Icon} alt="Logo Icon" />

//         <span className="font-poppins font-bold text-[24px] leading-[36px] text-[#22262A]">
//           E-Comm
//         </span>
//       </div>

//       <ul className="flex gap-[100px] font-poppins text-[16px] font-normal text-[#22262A]">
//         <li className="text-[#40BFFF] cursor-pointer">HOME</li>
//         <li className="hover:text-[#40BFFF] cursor-pointer">BAG</li>
//         <li className="hover:text-[#40BFFF] cursor-pointer">SNEAKERS</li>
//         <li className="hover:text-[#40BFFF] cursor-pointer">BELT</li>
//         <li className="hover:text-[#40BFFF] cursor-pointer">CONTACT</li>
//       </ul>

//       <div className="flex items-center gap-2">
//         <img
//           src={Cart}
//           alt="Cart"
//          />
//         <span className="font-poppins text-[16px] font-normal text-[#22262A]">
//           Items
//         </span>
//         <span className="text-gray-500 font-proxima text-[16px]">$0.00</span>
//       </div>
//     </nav>
//   );
// }


export default function Navbar() {
  return (
    <nav className="w-full h-[60px] flex items-center justify-between px-8">
      {/* Left Logo */}
      <div className="flex items-center gap-2">
        <img src="/Icon.png" alt="Logo Icon" className="h-6 w-6" />
        <span className="font-poppins font-bold text-[24px] leading-[36px] text-[#22262A]">
          E-Comm
        </span>
      </div>

      {/* Center Menu */}
      <ul className="flex gap-[100px] font-poppins text-[16px] font-normal text-[#22262A]">
        <li className="text-[#40BFFF] cursor-pointer">HOME</li>
        <li className="hover:text-[#40BFFF] cursor-pointer">BAG</li>
        <li className="hover:text-[#40BFFF] cursor-pointer">SNEAKERS</li>
        <li className="hover:text-[#40BFFF] cursor-pointer">BELT</li>
        <li className="hover:text-[#40BFFF] cursor-pointer">CONTACT</li>
      </ul>

      {/* Right Cart */}
      <div className="flex items-center gap-2">
        <img src="/cart.png" alt="Cart" className="h-5 w-5" />
        <span className="font-poppins text-[16px] font-normal text-[#22262A]">
          Items
        </span>
        <span className="text-gray-500 font-proxima text-[16px]">$0.00</span>
      </div>
    </nav>
  );
}
