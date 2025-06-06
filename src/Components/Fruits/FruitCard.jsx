import './Fruits.css';
import { HiShoppingCart } from "react-icons/hi";

function FruitCard({ name, price, image, index, onDelete }) {

      
    

  return (
    <div key={index} className="border rounded shadow-sm p-4 flex flex-col items-center hover:shadow-md transition">
                             <img src={image} alt={name} className="w-40 h-40 object-contain mb-3"/>
            
                            <p className="font-bold text-[16px] text-gray-800 mb-1 text-center">{name}</p>
                            <p className="text-black text-[16px] mb-2 text-center">{price}</p>
                            <button className="bg-green-600 text-white px-4 py-1 text-sm font-semibold rounded w-[150px] h-[30px] hover:bg-green-700 flex items-center justify-center gap-2">
                               <HiShoppingCart className="text-lg" />
                              Add to Cart
                            </button>
                            <button onClick={onDelete}
          className="bg-red-600 text-white px-3 py-1 text-sm rounded hover:bg-red-700">Delete</button>
                          </div>
  )
}

export default FruitCard
