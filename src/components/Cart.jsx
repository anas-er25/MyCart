import { useDispatch, useSelector } from "react-redux"
import { clearCart, removeFromCart, updateQuantity } from "../rtk/slices/Cart-slice";

export default function Cart() {
  const cart = useSelector(state => state.cart);
  console.log(cart);
  const dispatch = useDispatch();
  const totalPrice = cart.reduce((sum, item) =>{
    sum +=item.price * item.quantity;
    return sum;
  },0)
  const handleIncrement = (item) => {
    // Dispatch an action to increment quantity
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };
  const handleDecrement = (item) => {
    // Dispatch an action to decrement quantity
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    }
  };
  return (
    <>
      

<div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
      <button onClick={() => dispatch(clearCart())} className="text-white flex bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Clear All</button>
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-16 py-3">
                    <span className="sr-only">Image</span>
                </th>
                <th scope="col" className="px-6 py-3">
                    Product
                </th>
                <th scope="col" className="px-6 py-3">
                    Quantity
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            
            <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="p-4">
                    <img src={item.image} className="w-16 md:w-32 max-w-full max-h-full" alt={item.title}/>
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                {item.title}
                </td>
                <td className="px-6 py-4">
                    <div className="flex items-center">
                        <button onClick={() => handleDecrement(item)} className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                            <span className="sr-only">Quantity button</span>
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16"/>
                            </svg>
                        </button>
                        <div>
                            <input type="number" id="first_product" className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={item.quantity} required />
                        </div>
                        <button  onClick={() => handleIncrement(item)} className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                            <span className="sr-only">Quantity button</span>
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                            </svg>
                        </button>
                    </div>
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {item.price * item.quantity}MAD
                </td>
                <td className="px-6 py-4">
                    <button className="font-medium text-red-600 dark:text-red-500 text-xl" onClick={()=> dispatch(removeFromCart(item))}><i className="ri-delete-bin-7-fill"></i></button>
                </td>
            </tr>
          ))}
            
        </tbody>
    </table>
    <span className="bg-green-100 flex text-green-800 text-md font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Total Price : {totalPrice.toFixed(2)} MAD</span>
</div>

    </>
  )
}
