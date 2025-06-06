import React, { useEffect, useState } from "react";

function ProductList() {
  const [products, setProduct] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "",
    Price: "",
    inStock: false,
    image: "",
  });

  const UpdateClicked = (product) => {
    // console.log("updateClicked", product);
    const id = product._id;
    fetch(`http://localhost:5000/api/products/${id}`, {
      method: "PUT", // or PATCH
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Product updated:", data);
      })
      .catch((err) => console.error(err));
  };

  // Fetch all products
  const fetchProducts = () => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error("Error fetching products:", err));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Add new product
  const handleAddProduct = () => {
    fetch("http://localhost:5000/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then(() => {
        fetchProducts(); // reload products
        setNewProduct({
          name: "",
          category: "",
          Price: "",
          inStock: false,
          image: "",
        });
      })
      .catch((err) => console.error("Error adding product:", err));
  };

  // Delete product
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/api/products/${id}`, {
      method: "DELETE",
    })
      .then(() => fetchProducts())
      .catch((err) => console.error("Error deleting product:", err));
  };

  const Products = [
    {
      name: "Woodapple",
      category: "Fruits",
      Price: 200,
      inStock: true,
      image:
        "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage.png",
    },
  ];

  return (
    <div>
      <div className="flex-1 py-10 flex flex-col justify-between">
        <div className="w-full md:p-10 p-4">
          <h2 className="pb-4 text-2xl font-semibold">All Products</h2>

          <div className="w-100 h-20 bg-amber-100">
            <button
              className="flex items-center justify-between w-44 px-4 py-2 border border-green-500 rounded text-green-600 font-semibold focus:outline-none"
              type="button"
            >
              Add Product
            </button>
          </div>

          <div className="flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md bg-white border border-gray-500/20">
            <table className="md:table-auto table-fixed w-full overflow-hidden">
              <thead className="text-gray-900 text-sm text-left">
                <tr>
                  <th className="px-4 py-3 font-semibold truncate">Product</th>
                  <th className="px-4 py-3 font-semibold truncate">Category</th>
                  <th className="px-4 py-3 font-semibold truncate hidden md:block">
                    {" "}
                    Price
                  </th>
                  <th className="px-4 py-3 font-semibold truncate">In Stock</th>
                </tr>
              </thead>

              <tbody className="text-sm text-gray-500">
                {products.map((product, index) => (
                  <tr key={index} className="border-t border-gray-500/20">
                    <td className="md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3 truncate">
                      <div className="border border-gray-300 rounded p-2">
                        <img
                          src={product.image}
                          alt="Product"
                          className="w-16"
                        />
                      </div>
                      <span className="truncate max-sm:hidden w-full">
                        {product.name}
                      </span>
                    </td>
                    <td className="px-4 py-3">{product.category}</td>
                    <td className="px-4 py-3 max-sm:hidden">
                      Rs.{product.price}
                    </td>
                    <td className="px-4 py-3">
                      <label className="relative inline-flex items-center cursor-pointer text-gray-900 gap-3">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          defaultChecked={product.inStock}
                        />
                        <div className="w-12 h-7 bg-slate-300 rounded-full peer peer-checked:bg-green-600 transition-colors duration-200"></div>
                        <span className="dot absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-5"></span>
                      </label>
                    </td>
                    <td>
                      <button onClick={() => UpdateClicked(product)}>
                        Update
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
