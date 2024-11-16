import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {toast} from 'react-hot-toast'
import { remove } from "../redux/Slices/CartSlice";


const CartItem = ({item, itemIndex}) => {
    const dispatch = useDispatch();

    const removeFromCart = () => {
        dispatch(remove(item.id));
        toast.success("Item Removed");
    }
    return (
        <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6 p-4 border rounded-lg shadow-md bg-white">
  {/* Product Image */}
  <div>
    <img src={item.image} alt="img" className="w-full md:w-40 rounded-lg shadow-md" />
  </div>

  {/* Product Details */}
  <div className="flex flex-col space-y-2 w-full">
    <h1 className="text-lg font-semibold">{item.title}</h1>
    <p className="text-gray-700">{item.description}</p>
    <div className="flex items-center justify-between w-full">
      {/* Price */}
      <p className="text-xl font-bold text-green-600">${item.price}</p>
      {/* Delete Button */}
      <button
        onClick={removeFromCart}
        className="text-red-500 hover:text-red-700 text-2xl"
      >
        <MdDelete />
      </button>
    </div>
  </div>
</div>
    )
}
export default CartItem