import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export default function AppNavbar() {
  const cart = useSelector((state) => state.cart);
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Cart-APP
          </span>
        </Link>
        <div className="flex justify-between md:order-2 ml-auto">
          
        
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 text-2xl text-white bg-blue-700 rounded md:bg-transparent hover:text-blue-500 md:p-0 "
                aria-current="page"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="Cart"
                className="relative block py-2 px-3 text-2xl text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Cart <i className="ri-shopping-cart-line text-1xl"></i>
                <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900 text-1xl">
                  {cart.length}
                </div>
              </Link>
            </li>
          </ul>
          </div>
      </div>
    </nav>
  );
}
