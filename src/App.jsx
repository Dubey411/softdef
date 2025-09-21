// import './App.css'
// import Navbar from './components/Navbar'
// import Sidebar from './components/Sidebar'
// import Filter from './components/Filter'
// import Badge from './components/Badge'
// import Hero from './components/Hero'
// import Pagination from './components/Pagination'
// import Footer from './components/Footer'
// import Mart from './Pages/Mart'

// function App() {
//   return (
//     <div className="min-h-screen flex flex-col">

//       <Navbar />

//       <div className="flex flex-1">

//         <Sidebar />

//         <main className="flex-1 p-6">

//            <Hero/>
//           <Filter/>

//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">

//             {/* <ProductCard /> */}
//             {/* <ProductCard /> */}
//           </div>

//           {/* <Pagination /> */}
//         </main>
//       </div>

//       {/* <Footer /> */}
//     </div>
//   )
// }

// export default App

import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Filter from "./components/Filter";
import Hero from "./components/Hero";
import Mart from "./Pages/Mart";
import { useState } from "react";

function App() {
  const [page, setPage] = useState("home"); // 👈 track which page is active

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar setPage={setPage} />{" "}
      {/* pass setPage to Navbar if you want navigation */}
      <div className="flex flex-1 gap-6 p-6">
        <Sidebar />

        {/* <main className="flex-1 p-6">
          {page === "home" && (
            <>
              <Hero />
              <Filter />
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
              
              </div>
            </>
          )}

          {page === "mart" && <Mart />}
        </main> */}

        <main className="flex-1 p-6 flex flex-col gap-6">
          {page === "home" && (
            <>
              {/* Hero fixed width */}
              <div className="flex justify-start">
                <Hero />
              </div>

              <Filter />

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {/* Product grid */}
              </div>
            </>
          )}

          {page === "mart" && <Mart />}
        </main>
      </div>
    </div>
  );
}

export default App;
