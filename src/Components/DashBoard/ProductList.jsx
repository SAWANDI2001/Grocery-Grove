import React, { useEffect, useState } from "react";

function ProductList() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editProduct, setEditProduct] = useState(null);

  const [products, setProduct] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "",
    price: "",
    inStock: false,
    image: "",
  });

  const openUpdateModal = (product) => {
    setEditProduct({ ...product }); // clone product data
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditProduct(null);
  };

  const handleUpdateChange = (e) => {
    const { name, value } = e.target;
    setEditProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitUpdatedProduct = () => {
    if (!editProduct || !editProduct._id) return;

    fetch(`http://localhost:5000/api/products/${editProduct._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Product updated:", data);
        fetchProducts();
        closeModal();
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
          price: "",
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

  //Instock button
  const toggleInStock = (prod) => {
    const updated = { ...prod, inStock: !prod.inStock };

    console.log("Toggling checkbox for:", prod.name); 
    console.log(
      "Previous inStock:",
      prod.inStock,
      "| New inStock:",
      updated.inStock
    ); 

    fetch(`http://localhost:5000/api/products/${prod._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updated),
    })
      .then((res) => res.json())
      .then(() => {
        setProduct((prev) =>
          prev.map((p) => (p._id === prod._id ? updated : p))
        );
      })
      .catch((err) => console.error("inStock update error:", err));
  };

  return (
    <div>
      <div className="flex-1 py-10 flex flex-col justify-between">
        <div className="w-full md:p-10 p-4">
          <h2 className="pb-4 text-2xl font-semibold">All Products</h2>

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
                          onChange={() => {
                            console.log("Checkbox clicked for:", product.name);
                            toggleInStock(product);
                          }}
                        />
                        <div className="w-12 h-7 bg-slate-300 rounded-full peer peer-checked:bg-green-600 transition-colors duration-200"></div>
                        <span className="dot absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-5"></span>
                      </label>
                    </td>

                    <td>
                      {/* <button onClick={() => UpdateClicked(product)}>
                        Update
                      </button> */}
                      <button
                        onClick={() => openUpdateModal(product)}
                        className="w-[60px] bg-green-700 text-white font-semibold py-1 rounded hover:bg-green-800 transition duration-200 ml-[50px] mt-1 "
                      >
                        Update
                      </button>
                    </td>

                    <td>
                      <button
                        onClick={() => handleDelete(product._id)}
                        className="w-[60px] bg-green-700 text-white font-semibold py-1 rounded hover:bg-green-800 transition duration-200 ml-[50px] mt-1 "
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* update modal */}
      {isModalOpen && editProduct && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Update Product</h2>

            <input
              type="text"
              name="name"
              value={editProduct.name}
              onChange={handleUpdateChange}
              placeholder="Product Name"
              className="w-full mb-3 px-4 py-2 border rounded"
            />
            <input
              type="text"
              name="category"
              value={editProduct.category}
              onChange={handleUpdateChange}
              placeholder="Category"
              className="w-full mb-3 px-4 py-2 border rounded"
            />
            <input
              type="number"
              name="price"
              value={editProduct.price}
              onChange={handleUpdateChange}
              placeholder="Price"
              className="w-full mb-3 px-4 py-2 border rounded"
            />
            <input
              type="text"
              name="image"
              value={editProduct.image}
              onChange={handleUpdateChange}
              placeholder="Image URL"
              className="w-full mb-3 px-4 py-2 border rounded"
            />

            <div className="flex justify-end gap-2">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={submitUpdatedProduct}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductList;
