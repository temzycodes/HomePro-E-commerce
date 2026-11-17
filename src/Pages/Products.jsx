import { Link } from 'react-router-dom';
import {useEffect, useState} from 'react';
import { FaStar } from "react-icons/fa";
import { useSearchParams } from 'react-router-dom';
import { TbCurrencyNaira } from "react-icons/tb";



const Products = () => {
  const [products, setProducts] = useState([])
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || "";
  const selectedCategory = searchParams.get('category');
  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory
      ? product.category === selectedCategory
      : true;
    const matchesSearch =
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.brand?.toLowerCase().includes(searchQuery.toLowerCase());
  return matchesCategory && matchesSearch;
  });
  const [loading, setLoading] = useState(true);
    useEffect(() => {
      fetch("/products.json")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
      })
      .finally(() => {
        setLoading(false);
      });
    }, []);
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[300px]">
        <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
      </div>
    );
  }
  return (
    <div className='pt-[110px] w-[90%] px-[2%] mx-auto'>
      <div className="text-center">
        <h1 className="text-3xl font-bold text-[#14293E]">
          {searchQuery ? `Search results for "${searchQuery}"` : selectedCategory || "All Products"}
        </h1>
        <p className="text-gray-500 mt-2"> {selectedCategory ? `Explore our collection of ${selectedCategory.toLowerCase()}.`: "Explore our complete collection of home appliances."}
        </p>
      </div>
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,280px))] justify-center gap-6 my-[30px]">
          {filteredProducts.map((product) => (
            <Link to={`/products/${product.id}`} key={product.id} className="w-full min-w-0">
              <Prod
                name={product.title}
                image={product.image}
                ratings={product.ratings}
                price={product.price}
              />
           </Link>
         ))}
         </div>
         ) : (
          <p className="text-center text-gray-500 mt-10">
            No products found. Try searching for something else.
          </p>
        )}
      </div>
  )
}
function Prod({ image, name, ratings, price }) {
  return (
    <section className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition duration-300">
      <div className="relative h-[260px] bg-white flex items-center justify-center">
        <img
          className="h-full w-full object-contain p-6"
          src={image}
          alt={name}
        />
      </div>
      <div className="p-5 bg-gray-50">
        <h2 className="text-lg font-semibold text-gray-800 line-clamp-1">
          {name}
        </h2>
        <div className="mt-2 flex items-center gap-2">
          <Rating rating={ratings} />
          <span className="text-sm text-gray-500">
            {ratings}
          </span>
        </div>
        <p className="mt-3 text-xl font-bold text-gray-900 flex flex-row items-center gap-1">
          <TbCurrencyNaira /> {Number(price).toFixed(2)}
        </p>
        <button
          className="mt-4 w-full rounded-lg bg-[#14293E] py-3 text-white font-medium hover:bg-[#1c3a57] transition"
        >
          Add to Cart
        </button>
      </div>
    </section>
  );
}

function Rating({ rating }) {
  const fullStars = Math.floor(rating);
  const decimal = rating - fullStars;

  return (
    <div className="flex items-center">
      
      {[...Array(fullStars)].map((_, index) => (
        <FaStar
          key={index}
          className="text-yellow-400"
        />
      ))}
      {decimal > 0 && (
        <div className="relative">
          <FaStar className="text-gray-300" />
          <div
            className="absolute top-0 left-0 overflow-hidden"
            style={{ width: `${decimal * 100}%` }}
          >
            <FaStar className="text-yellow-400" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Products