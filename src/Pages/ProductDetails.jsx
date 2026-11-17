import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { TbCurrencyNaira } from "react-icons/tb";

const ProductDetails = ({ addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const handleAddToCart = () => {
    addToCart(product);
    setMessage("Product added to cart successfully!");
    setTimeout(() => {
      setMessage("");
    }, 3000);
  };
  useEffect(() => {
    fetch("/products.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        return response.json();
      })
      .then((data) => {
        const selectedProduct = data.find(
          (product) => product.id === Number(id)
        );

        setProduct(selectedProduct);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Loading product...</p>;
  if(!product){
      return(
        <div className="flex justify-center items-center min-h-[300px]">
          <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
        </div>
      )  
  }

    
  return (
    <div className="min-h-screen bg-[#F4F6F8] pt-[120px] px-5 pb-16">
      <div className="max-w-6xl mx-auto">
        <Link to="/products" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#1E6E73] mb-8 transition">
           <FaArrowLeft /> Back to Products
        </Link>
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-2">
          <div className="bg-white flex items-center justify-center p-10 md:p-14 min-h-[400px]">
            <img className="w-full max-w-[420px] h-[380px] object-contain hover:scale-105 transition duration-500" src={product.image} alt={product.title}/>
          </div>
          <div className="p-8 md:p-12 bg-[#F4F6F8] flex flex-col justify-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#1E6E73]">{product.category}</span>
            <h1 className="text-3xl md:text-4xl font-bold text-[#14293E] mt-3">{product.title}</h1>
            <div className="flex items-center gap-2 mt-5">
              <div className="text-yellow-400 text-lg">★★★★★</div>
                <span className="text-sm text-gray-500">{product.ratings}</span>
              </div>
              <div className="mt-7">
                <p className="text-sm text-gray-400">Price</p>
                <h2 className="text-3xl font-bold text-[#14293E] mt-1 flex flex-row items-center gap-1">
                  <TbCurrencyNaira /> {Number(product.price).toFixed(2)}
                </h2>
              </div>
              <p className="text-gray-500 leading-7 mt-6">{product.description}</p>
              <div className="border-t border-gray-100 mt-8 pt-7">
                <div>
                <button className="flex-1 w-full bg-[#14293E] text-white py-4 rounded font-semibold hover:bg-[#1E6E73] transition duration-300"  onClick={() => handleAddToCart()}>
                  Add to Cart
                </button>
              </div>
              {message && (
                  <p className="text-[#1E6E73] text-sm font-medium mt-3">
                    {message}
                  </p>
                )}
              <p className="text-xs text-gray-400 text-center mt-5">
                Quality appliances. Smarter living.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default ProductDetails