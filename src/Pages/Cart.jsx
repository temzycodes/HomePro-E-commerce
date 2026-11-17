import { FaRegTrashAlt } from "react-icons/fa";
import { TbCurrencyNaira } from "react-icons/tb";

const Cart = ({cart, increaseQuantity, decreaseQuantity, removeProduct,}) => {
  const subtotal = cart.reduce(
    (total, product) =>
      total + Number(product.price) * product.quantity,
    0
  );

  return (
    <div className="w-[90%] max-w-[1400px] mx-auto my-[110px] grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-[35px]">
      <div>
        <h2 className="text-3xl font-semibold text-[#222] mb-[25px]">
          Shopping Cart
        </h2>
        <div className="flex flex-col gap-5">
          {cart.length === 0 ? (
            <p className="text-gray-500 bg-white p-6 rounded-2xl shadow-sm">
              Your cart is currently empty.
            </p>
          ) : (
            cart.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl p-6 min-h-[180px] flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_5px_20px_rgba(0,0,0,0.07)] hover:shadow-[0_8px_25px_rgba(124,58,237,0.12)] transition duration-200"
              >


                <div className="flex flex-col sm:flex-row items-center gap-6 flex-1 w-full">

                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-[130px] h-[130px] object-contain bg-white shadow-xl rounded-xl p-2.5"
                  />

                  <div className="flex flex-col gap-2.5 text-center sm:text-left">
                    <h3 className="text-lg font-medium text-[#222]">
                      {product.title}
                    </h3>

                    <p className="text-gray-500">
                      {product.brand || ""}
                    </p>

                    <p className="text-lg font-bold text-[#7C3AED] flex flex-row items-center gap-1">
                      <TbCurrencyNaira/>{Number(product.price).toFixed(2)}
                    </p>
                  </div>

                </div>

             
                <div className="flex items-center gap-4">

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => decreaseQuantity(product.id)}
                      className="w-[38px] h-[38px] rounded-full bg-gray-100 text-gray-700 text-lg hover:bg-[#7C3AED] hover:text-white transition"
                    >
                      -
                    </button>

                    <span className="min-w-5 text-center font-bold">
                      {product.quantity}
                    </span>

                    <button
                      onClick={() => increaseQuantity(product.id)}
                      className="w-[38px] h-[38px] rounded-full bg-gray-100 text-gray-700 text-lg hover:bg-[#7C3AED] hover:text-white transition"
                    >
                      +
                    </button>
                  </div>

                 
                  <button
                    onClick={() => removeProduct(product.id)}
                    className="bg-red-100 text-red-600 p-3 rounded-lg hover:bg-red-600 hover:text-white transition"
                  >
                    <FaRegTrashAlt />
                  </button>

                </div>

              </div>
            ))
          )}

        </div>
      </div>
      <div className="bg-white p-[30px] rounded-2xl h-fit shadow-[0_5px_20px_rgba(0,0,0,0.07)] lg:sticky lg:top-[130px]">
        <h3 className="text-xl font-semibold text-[#222] mb-[25px]">
          Order Summary
        </h3>
      <div className="space-y-4 mb-6">
        {cart.map((product) => (
        <div key={product.id} className="flex justify-between items-start gap-4 text-gray-600">

          <div>
            <p className="font-medium text-[#222]">
              {product.title}
            </p>
            <p className="text-sm flex flex-row items-center gap-1">
              Qty: {product.quantity} × <TbCurrencyNaira/>{Number(product.price).toFixed(2)}
            </p>
          </div>
          <span className="font-medium text-[#222] whitespace-nowrap flex flex-row items-center gap-1">
            <TbCurrencyNaira />{(product.price * product.quantity).toFixed(2)}
          </span>
        </div>
        ))}
      </div>
      <hr className="border-0 border-t border-gray-200 my-5" />
      <div className="flex justify-between items-center my-[18px] text-gray-600">
        <span>Subtotal</span>
        <span className="font-medium text-[#222] flex flex-row items-center gap-1">
          <TbCurrencyNaira /> {subtotal.toFixed(2)}
        </span>
      </div>
      <div className="flex justify-between items-center my-[18px] text-gray-600">
        <span>Delivery</span>
        <span>Free</span>
      </div>

      <hr className="border-0 border-t border-gray-200 my-5" />
      <div className="flex justify-between items-center">
        <strong className="text-[#222]">Total</strong>
        <strong className="text-[#222] text-lg flex flex-row items-center gap-1">
          <TbCurrencyNaira /> {subtotal.toFixed(2)}
        </strong>
      </div>

    </div>
  </div>
  );
}


export default Cart;