import {IoMdCart} from 'react-icons/io'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { CiShop } from "react-icons/ci";

const Navbar = () => {
const {cart} = useSelector((state) => state);

    return (
        <div className="flex fixed top-0 left-0 w-full bg-gray-800 z-50 shadow-md">
  <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto px-4 w-full">
    <NavLink to="/">
      <div>
        <p className="relative flex text-white font-bold font-serif text-3xl items-center justify-center">
          ECOMji
        </p>
      </div>
    </NavLink>
    <div className="flex items-center font-medium text-slate-100 space-x-6">
      <NavLink to="/">
        <p>Home</p>
      </NavLink>
      <NavLink to="/cart">
        <div className="relative">
          <IoMdCart className="text-2xl" />
          {cart.length > 0 && (
            <span
              className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
              justify-center items-center animate-bounce rounded-full text-white"
            >
              {cart.length}
            </span>
          )}
        </div>
      </NavLink>
    </div>
  </nav>
</div>
    )
}
export default Navbar