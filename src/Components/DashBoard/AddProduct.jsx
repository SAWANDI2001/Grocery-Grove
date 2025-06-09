// import React, { useState } from "react";

// function AddProduct() {
//   const [productName, setProductName] = useState("");
//   const [productDescription, setProductDescription] = useState("");
//   const [category, setCategory] = useState("");
//   const [productPrice, setProductPrice] = useState("");
//   const [image, setImage] = useState(null);

//   const [formData, setFormData] = useState({
//     productName: "",
//     productDescription: "",
//   });

//   const addClick = () => {
//     console.log("Button clicked by method!", formData);
//   };

//   const handleImageChange = (e) => {
//     setImage(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Check if all required fields are filled
//     if (!productName || !category || !productPrice) {
//       alert("Please fill all required fields!");
//       return;
//     }

//     // Prepare form data for sending to the backend
//     const formData = new FormData();
//     formData.append("name", productName);
//     formData.append("description", productDescription);
//     formData.append("category", category);
//     formData.append("price", productPrice);
//     if (image) {
//       formData.append("image", image);
//     }

//     try {
//       console.log("form data", formData);
//       // const response = await fetch('http://localhost:5000/api/products', {
//       //   method: 'POST',
//       //   body: formData,
//       // });

//       // if (response.ok) {
//       //   alert('Product added successfully!');
//       //   // Reset form
//       //   setProductName('');
//       //   setProductDescription('');
//       //   setCategory('');
//       //   setProductPrice('');
//       //   setImage(null);
//       // } else {
//       //   alert('Failed to add product.');
//       // }
//     } catch (error) {
//       console.error("Error adding product:", error);
//       alert("An error occurred. Please try again.");
//     }
//   };

//   return (
//     <div>
//       <div className="py-10 flex justify-center bg-white">
//         <form className="md:p-10 p-4 space-y-5 max-w-lg">
//           {/* <div>
//                     <p className="text-base font-medium">Product Image</p>
//                     <div className="flex flex-wrap items-center gap-3 mt-2">
//                         {Array(1).fill('').map((_, index) => (
//                             <label key={index} htmlFor={`image${index}`}>
//                                 <input accept="image/*" type="file" id={`image${index}`} hidden />
//                                 <img className="max-w-24 cursor-pointer" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/e-commerce/uploadArea.png" alt="uploadArea" width={150} height={150} />
//                             </label>
//                         ))}
//                     </div>
//                 </div> */}
//           <div className="flex flex-col gap-1 max-w-md">
//             <label className="text-base font-medium" htmlFor="product-name">
//               Product Name
//             </label>
//             <input
//               id="product-name"
//               type="text"
//               placeholder="Type here"
//               className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
//               required
//             />
//           </div>
//           <div className="flex flex-col gap-1 max-w-md">
//             <label
//               className="text-base font-medium"
//               htmlFor="product-description"
//             >
//               Product Description
//             </label>
//             <textarea
//               id="product-description"
//               rows={4}
//               className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40 resize-none"
//               placeholder="Type here"
//             ></textarea>
//           </div>
//           <div className="w-full flex flex-col gap-1">
//             <label className="text-base font-medium" htmlFor="category">
//               Category
//             </label>
//             <select
//               id="category"
//               className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
//             >
//               <option value="">Select Category</option>
//               {[
//                 { name: "Vegetable" },
//                 { name: "Fruit" },
//                 { name: "Baby Products" },
//                 { name: "Dairy" },
//                 { name: "Bevarages" },
//                 { name: "Snacks and Confection" },
//               ].map((item, index) => (
//                 <option key={index} value={item.name}>
//                   {item.name}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <div className="flex items-center gap-5 flex-wrap">
//             <div className="flex-1 flex flex-col gap-1 w-32">
//               <label className="text-base font-medium" htmlFor="product-price">
//                 Product Price
//               </label>
//               <input
//                 id="product-price"
//                 type="number"
//                 placeholder="0"
//                 className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
//                 required
//               />
//             </div>
//           </div>
//           <button
//             className="px-8 py-2.5 bg-green-700  hover:bg-green-500 text-white font-medium rounded"
//             onClick={addClick}
//           >
//             Add
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default AddProduct;

// New Code
import React, { useState } from 'react';

function AddProduct() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    price: 0,
  });

  

  const handleChange = (e) => {
    // console.log('checking e value', e.target.value);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    console.log("Form Data:", formData);

    fetch('http://localhost:5000/api/products', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log('Product created:', data);
    })
    .catch((err) => console.error(err));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-semibold text-center mb-6 text-gray-700">Add Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Enter Product Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
        />

        <input
          type="text"
          name="description"
          placeholder="Enter Product Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
        />

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          <option value="">Select Category</option>
          {[
            { name: "Vegetable" },
            { name: "Fruits" },
            { name: "Baby Products" },
            { name: "Dairy" },
            { name: "Bevarage" },
            { name: "Snacks and Confection" },
          ].map((item, index) => (
            <option key={index} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>

        <input
          type="number"
          name="price"
          placeholder="Enter Product Price"
          value={formData.price}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
        />

        <button
          type="submit"
          className="w-full bg-green-500 font-bold text-white py-2 rounded-lg hover:bg-green-600 transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddProduct;