import { useEffect,useState } from "react";
import { useSelector } from "react-redux";
import CartItem from '../components/CartItem'
import { NavLink } from "react-router-dom";

const Cart = () => {

const {cart} = useSelector((state) => state);
const [totalAmount, setTotalAmount] = useState(0);

useEffect(() => {
setTotalAmount(cart.reduce( (acc, curr) => acc + curr.price,0));
},[cart])

  return (
<div className="mt-24 flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-6">
  {/* Left Section: Product List */}
  <div className="flex flex-col w-full md:w-1/2 space-y-6">
    {cart.length > 0 ? (
      cart.map((item, index) => (
        <CartItem key={item.id} item={item} itemIndex={index} />
      ))
    ) : (
      <div className="text-center">
        <h1 className="text-2xl font-bold">Your cart is empty!</h1>
        <NavLink to="/">
          <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600">
            Shop Now
          </button>
        </NavLink>
      </div>
    )}
  </div>

  {/* Right Section: Sticky Summary */}
  <div className="p-4 border rounded-lg shadow-md bg-gray-50 md:w-1/4 md:sticky md:top-24">
    <div className="text-green-600 font-bold">
      <div className="text-2xl">Your Cart</div>
      <div className="text-4xl">Summary</div>
      <p>
        <span>Total Items: {cart.length}</span>
      </p>
    </div>
    <div>
      <p>Total Amount: ${totalAmount}</p>
      <button className="mt-4 w-full px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600">
        Checkout Now
      </button>
    </div>
  </div>
</div>

  );
};

export default Cart;
