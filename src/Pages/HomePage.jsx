import {useNavigate} from 'react-router-dom'
import { useState, useEffect } from 'react'
import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import heroImage from '../assets/heroImage.png'
import cookingImage from '../assets/cookingImage.jpg'
import cleaningImage from '../assets/cleaningImage.jpg'
import homeComfortImage from '../assets/homeComfort.jpg'
import kitchenImage from '../assets/kitchenImage.jpg'
import refrigeratorImage from '../assets/refrigeratorImage.jpg'
import tvImage from '../assets/tvImage.jpg'
import washingMachineImage from '../assets/washingMachineImage.jpg'
import waterImage from '../assets/waterImage.jpg'
import { BiSolidShoppingBags } from "react-icons/bi";
import { TiShoppingCart } from "react-icons/ti";
import { AiFillHome } from "react-icons/ai";
const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://6aad1570a2413bf0ec11569c.mockapi.io/products/products")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }

      return response.json();
    })
    .then((data) => {
      setProducts(data.slice(0, 4));
    })
    .catch((error) => {
      console.error("Error fetching featured products:", error);
    })
    .finally(() => {
      setLoading(false);
    });
  }, []);
  const navigate = useNavigate()
  return (
    <div>
      <div className="flex flex-col md:flex-row mt-[80px] w-full items-center">
        <div className="w-full md:w-1/2 min-h-[400px] md:h-[500px] bg-[#14293E] text-white flex flex-col justify-center px-6 sm:px-10 md:px-[5%] py-12">
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
            Smart Living,<br />Starts Here.
          </h2> 
          <p className="max-w-[650px] text-base sm:text-lg leading-7 sm:leading-8 mt-4">
            Discover modern home appliances designed to make
            your everyday life easier, smarter, and more comfortable.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <button className="bg-[#1E6E73] text-white rounded-xl px-5 py-3 cursor-pointer text-sm sm:text-base" onClick={() => navigate('/products')}>Shop Now</button>
            <button className="bg-transparent border border-white text-white rounded-xl px-5 py-3 cursor-pointer text-sm sm:text-base" onClick={() => navigate('/products')}>Explore Products</button>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-[300px] sm:h-[400px] md:h-[500px] bg-[#14293E]">
          <img className="w-full h-full object-contain" src={heroImage} alt="Home appliances"/>
        </div>
      </div>
      <section className="w-[95%] mx-auto px-2 sm:px-4 md:px-6 lg:px-10 py-10 sm:py-12 md:py-16">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#14293E]">
            Shop by Category
          </h2>
          <p className="text-gray-500 mt-3 text-sm sm:text-base">
            Find the perfect appliances for every corner of your home.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 text-center cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300" onClick={() => navigate('/products?category=Kitchen Appliances')}>
            <div className="h-36 sm:h-40 flex items-center justify-center mb-3">
              <img src={kitchenImage} alt="Kitchen appliances" className="w-full h-full object-contain"/>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Kitchen Appliances</h3>
            <p className="text-gray-500 text-sm sm:text-base">Upgrade your kitchen with our smart appliances.</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 text-center cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300" onClick={() => navigate('/products?category=Laundry Appliances')}>
            <div className="h-36 sm:h-40 flex items-center justify-center mb-3">
              <img src={washingMachineImage} alt="Washing machines" className="w-full h-full object-contain"/>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Laundry Appliances</h3>
            <p className="text-gray-500 text-sm sm:text-base">Keep your clothes looking fresh with our advanced laundry solutions.</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 text-center cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300" onClick={() => navigate('/products?category=Cleaning Appliances')}>
            <div className="h-36 sm:h-40 flex items-center justify-center mb-3">
              <img src={cleaningImage} alt="Cleaning appliances" className="w-full h-full object-contain"/>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Cleaning Appliances</h3>
            <p className="text-gray-500 text-sm sm:text-base">Maintain a spotless home with our efficient cleaning solutions.</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 text-center cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300" onClick={() => navigate('/products?category=Refrigerators')}>
            <div className="h-36 sm:h-40 flex items-center justify-center mb-3">
              <img src={refrigeratorImage} alt="Refrigerator" className="w-full h-full object-contain"/>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Refrigerator</h3>
            <p className="text-gray-500 text-sm sm:text-base">Keep your food fresh and organized with our smart refrigerators.</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 text-center cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300" onClick={() => navigate('/products?category=Home Comfort')}>
            <div className="h-36 sm:h-40 flex items-center justify-center mb-3">
              <img src={homeComfortImage} alt="Home comfort" className="w-full h-full object-contain"/>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Home Comfort</h3>
            <p className="text-gray-500 text-sm sm:text-base">Create a comfortable living space with our innovative home comfort solutions.</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 text-center cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300" onClick={() => navigate('/products?category=TV & Entertainment')}>
            <div className="h-36 sm:h-40 flex items-center justify-center mb-3">
              <img src={tvImage} alt="TV & Entertainment" className="w-full h-full object-contain"/>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">TV & Entertainment</h3>
            <p className="text-gray-500 text-sm sm:text-base">Enjoy your favorite shows and movies with our high-quality entertainment systems.</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 text-center cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300" onClick={() => navigate('/products?category=Cooking Appliances')}>
            <div className="h-36 sm:h-40 flex items-center justify-center mb-3">
              <img src={cookingImage} alt="Cooking appliances" className="w-full h-full object-contain"/>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Cooking Appliances</h3>
            <p className="text-gray-500 text-sm sm:text-base">Enhance your culinary experience with our versatile cooking solutions.</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 text-center cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300" onClick={() => navigate('/products?category=Water Appliances')}>
            <div className="h-36 sm:h-40 flex items-center justify-center mb-3">
              <img src={waterImage} alt="Water appliances" className="w-full h-full object-contain"/>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Water Appliances</h3>
            <p className="text-gray-500 text-sm sm:text-base">Stay hydrated with our efficient water appliances.</p>
          </div>
        </div>
      </section>
      <section className=" px-6 md:px-10 py-16 bg-gray-50">
        <div className=" w-[95%] text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#14293E]">
            Featured Products
          </h2>
          <p className="text-gray-500 mt-3">
            Our top picks to make everyday living smarter.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center py-12">
            <div className="w-10 h-10 border-4 border-gray-300 border-t-[#14293E] rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="w-[95%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition duration-300"
            >
              <Link to={`/products/${product.id}`}>
                <div className="h-56 flex items-center justify-center p-5">
                  <img src={product.image} alt={product.title} className="w-full h-full object-contain" />
                </div>
              </Link>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-[#14293E] truncate">{product.title}</h3>
                <div className="flex items-center gap-2 mt-2">
                  <FaStar className="text-yellow-400" />
                  <span className="text-sm text-gray-500">
                    {product.ratings}
                  </span>
                </div>
                <p className="text-xl font-bold text-[#14293E] mt-3">₦{Number(product.price).toLocaleString()}</p>
                <Link to={`/products/${product.id}`} className="block text-center mt-4 bg-[#14293E] text-white py-3 rounded-lg hover:bg-[#1c3a57] transition" >View Detail </Link>
              </div>
            </div>
          ))}
        </div>
        )}
        <div className="text-center mt-12">
          <Link to="/products" className="inline-block border-2 border-[#14293E] text-[#14293E] px-8 py-3 rounded-lg font-semibold hover:bg-[#14293E] hover:text-white transition">Explore All Products</Link>
        </div>
      </section>
      <section className="mx-auto mt-16 w-[90%] rounded-2xl bg-[#14293E] px-8 py-12 text-center text-white md:px-16">
        <p className="mb-3 text-sm uppercase tracking-[3px] text-blue-200">More About HomePro</p>
        <h2 className="mx-auto max-w-md text-3xl font-bold md:text-4xl"> Transform Your Home. Simplify Your Life.</h2>
        <p className="mx-auto mt-4 max-w-xl text-gray-300"> We believe the right appliances can make everyday living
        easier. Discover our vision for smarter, more convenient living.</p>
        <button onClick={() => navigate('/about')} className="mt-7 rounded-lg bg-[#1E6E73] px-6 py-3 font-semibold text-white transition hover:bg-[#1c3a57]">Get to Know Us</button>
      </section>
      <section className="mx-auto mt-20 w-[90%] py-10">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[3px] text-[#1E6E73]">
            The HomePro Difference
          </p>
          <h2 className="text-3xl font-bold text-[#14293E] md:text-4xl">Why Choose HomePro?</h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-600">Making everyday living simpler, one appliance at a time.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-gray-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-2xl hover:bg-[#1E6E73] hover:text-white transition-colors duration-300">
              <BiSolidShoppingBags />
            </div>
            <h3 className="mb-3 text-xl font-bold text-[#14293E]">Quality Products</h3>
            <p className="leading-7 text-gray-600">Discover appliances selected to bring convenience and functionality to your home.</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-2xl hover:bg-[#1E6E73] hover:text-white transition-colors duration-300">
              <TiShoppingCart />
            </div>
            <h3 className="mb-3 text-xl font-bold text-[#14293E]">
              Convenient Shopping
            </h3>
            <p className="leading-7 text-gray-600">Find the appliances you need in one place and browse products with ease.</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-2xl hover:bg-[#1E6E73] hover:text-white transition-colors duration-300">
              <AiFillHome />
            </div>
            <h3 className="mb-3 text-xl font-bold text-[#14293E]">A Smarter Home</h3>
            <p className="leading-7 text-gray-600">Explore appliances designed to make everyday household tasks easier.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage