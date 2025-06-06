import React from 'react'
import { Link } from 'react-router-dom';

function ProductAbout() {

        const product = {
        name: "Tomatoes",
        category: "Vegetable",
        Price: 40,
        images: [],
        description: [
          <span>"......................."</span>
    
        ]
    };

    const [thumbnail, setThumbnail] = React.useState(product.images[0]);

  return (
    <div className='flex justify-center mt-20'>
      
             <div className="max-w-6xl w-full px-6">
          
            <div className="flex flex-col md:flex-row gap-16 mt-4">
                <div className="flex gap-3">
                    <div className="flex flex-col gap-3">
                        {product.images.map((image, index) => (
                            <div key={index} onClick={() => setThumbnail(image)} className="border max-w-24 border-gray-500/30 rounded overflow-hidden cursor-pointer" >
                                <img src={image} alt={`Thumbnail ${index + 1}`} />
                            </div>
                        ))}
                    </div>

                    <div className="border border-gray-500/30 max-w-100 rounded overflow-hidden">
                        <img src={thumbnail} alt="Selected product" />
                    </div>
                </div>

                <div className="text-sm w-full md:w-1/2">
                    <h1 className="text-3xl font-medium">{product.name}</h1>

                   

                    <div className="mt-6">
                       
                        <p className="text-lg font-medium">MRP: Rs.{product.Price}</p>
                        
                    </div>

                    <p className="text-base font-medium mt-6">About Product</p>
                    <ul className="list-disc ml-4 text-gray-500/70">
                        {product.description.map((desc, index) => (
                            <li key={index}>{desc}</li>
                        ))}
                    </ul>

                    <div className="flex items-center mt-10 gap-4 text-base">
                        <button className="w-full py-3.5 cursor-pointer font-medium bg-gray-200 text-gray-800/80 hover:bg-gray-100 transition" >
                            Add to Cart
                        </button>
                        <button className="w-full py-3.5 cursor-pointer font-medium bg-green-700 text-white hover:bg-green-500 transition" >
                           <Link to="/ShoppingCart"> Buy now</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default ProductAbout
