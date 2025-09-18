import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Filter from './components/Filter'
import Badge from './components/Badge'
import ProductCard from './components/ProductCard'
import Pagination from './components/Pagination'
import Footer from './components/Footer'
import Mart from './Pages/Mart'

function App() {
  return (
    <div className="min-h-screen flex flex-col">

      <Navbar />

      <div className="flex flex-1">

        {/* <Sidebar /> */}

        <main className="flex-1 p-6">

          {/* <Badge /> */}


          {/* <Filter /> */}

          {/* <Mart /> */}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
            {/* <ProductCard /> */}
            {/* <ProductCard /> */}
            {/* <ProductCard /> */}
          </div>


          {/* <Pagination /> */}
        </main>
      </div>

      {/* <Footer /> */}
    </div>
  )
}

export default App


