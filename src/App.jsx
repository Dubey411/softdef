import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import Filter from "./components/Filter";
import ProductList from "./components/ProductList";
import Pagination from "./components/Pagination";
import { useState } from "react";

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Navbar */}
      <Navbar setPage={setPage} />

      <main className="flex-1 flex gap-8 px-6 mt-6">
        {/* Left Sidebar */}
        <aside className="w-[355px] shrink-0">
          <Sidebar />
        </aside>

        {/* Right Section (Hero + Filter + Products) */}
        <section className="flex-1 flex flex-col gap-8">
          {page === "home" && (
            <>
              <Hero />
              <Filter />
              <ProductList />
               <Pagination />
            </>
          )}

          {page === "mart" && <Mart />}
        </section>
      </main>
    </div>
  );
}

