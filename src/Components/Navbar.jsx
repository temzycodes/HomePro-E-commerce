import { NavLink, useNavigate, useSearchParams  } from "react-router-dom"
import { useState } from "react"
import logo from "../assets/HomePro Smart Living Logo.png"
import { FaSearch, FaUser, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa"

const Navbar = ({cart}) => {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Contact", path: "/contact" }
  ]
    const cartCount = cart.reduce(
    (total, product) => total + product.quantity,
    0
  );
  const [searchTerm, setSearchTerm] = useState("")

const handleSearch = (e) => {
  e.preventDefault()

  const query = searchTerm.trim()

  if (!query) return

  navigate(`/products?search=${encodeURIComponent(query)}`)
  setSearchTerm("")
  setIsOpen(false)
}


  return (
    <nav className="w-full flex justify-between items-center px-[5%] h-[80px] fixed top-0 left-0 bg-white z-[100] shadow-[0_0_30px_0_rgba(0,0,0,0.1)]">
      <img className="w-[120px] md:w-[150px] cursor-pointer" src={logo} alt="HomePro logo" onClick={() => navigate("/")}/>
      <ul className="hidden lg:flex items-center gap-5">
        {navLinks.map((link) => (
          <li key={link.path}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                `px-2 py-2 font-semibold hover:text-[#1E6E73] transition-colors
                ${isActive ? "border-b-2 border-[#1E6E73]" : "text-black"}`
              }
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSearch} className="hidden lg:block relative w-[220px] xl:w-[280px]">
        <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search for appliances..." className="w-full h-[42px] pl-4 pr-10 rounded-full border border-[#D1D5DB] bg-gray-50 text-sm outline-none focus:border-[#1E6E73] focus:ring-1 focus:ring-[#1E6E73] transition-all duration-300"/>
        <button type="submit" className="absolute right-4 top-1/2 -translate-y-1/2">
          <FaSearch className="text-[#14293E] text-sm cursor-pointer" />
        </button>
      </form>
      <section className="flex items-center gap-3 md:gap-[15px]">
        <div className="relative p-3 rounded-full bg-[#14293E] text-white cursor-pointer shadow-md hover:bg-white hover:text-[#14293E] transition-colors duration-300" onClick={() => navigate("/cart")}>
          <FaShoppingCart />
          {cartCount > 0 && (
            <span className="absolute -bottom-1 -right-1 bg-red-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </div>
        <button className="lg:hidden text-[#14293E] text-xl ml-2" onClick={() => setIsOpen(!isOpen)}aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={isOpen}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </section>
      
      {isOpen && (
        <div className="absolute top-[80px] left-0 w-full bg-white shadow-lg px-[5%] py-6 flex flex-col gap-5 lg:hidden">
          <form onSubmit={handleSearch} className="relative w-full">
            <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search for appliances..." className="w-full h-[42px] pl-4 pr-10 rounded-full border border-gray-300 bg-gray-50 text-sm outline-none focus:border-[#1E6E73]"/>
            <button type="submit" className="absolute right-4 top-1/2 -translate-y-1/2">
              <FaSearch className="text-[#14293E]" />
            </button>
          </form>
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => 
              (<li key={link.path}>
                <NavLink to={link.path} onClick={() => setIsOpen(false)} className={({  isActive }) =>`block font-semibold hover:text-[#1E6E73] ${isActive ? "text-[#1E6E73]" : "text-black"}`}>{link.name}</NavLink>
              </li>
            ))}
          </ul>

        </div>
      )}

    </nav>
  )
}

export default Navbar