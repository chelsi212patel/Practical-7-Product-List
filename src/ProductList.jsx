import React from "react";

function ProductList() {
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 55000,
      category: "Electronics",
    },
    {
      id: 2,
      name: "Smartphone",
      price: 25000,
      category: "Electronics",
    },
    {
      id: 3,
      name: "Headphones",
      price: 2500,
      category: "Accessories",
    },
    {
      id: 4,
      name: "Keyboard",
      price: 1500,
      category: "Accessories",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 px-6 py-10">

      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-gray-800">
            Product List 🛍️
          </h1>

          <p className="mt-2 text-gray-500">
            Explore Our Latest Products
          </p>
        </div>

        {/* Product List */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {products.map((product) => (
            <div
              key={product.id}
              className="rounded-2xl border border-white bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              {/* Product Icon */}
              <div className="mb-5 flex h-24 items-center justify-center rounded-2xl bg-blue-100">
                <span className="text-5xl">
                  {product.category === "Electronics" ? "💻" : "🎧"}
                </span>
              </div>

              {/* Product Name */}
              <h2 className="text-xl font-bold text-gray-800">
                {product.name}
              </h2>

              {/* Category */}
              <p className="mt-2 inline-block rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-600">
                {product.category}
              </p>

              {/* Price */}
              <p className="mt-5 text-2xl font-bold text-blue-600">
                ₹{product.price.toLocaleString("en-IN")}
              </p>

              {/* Button */}
              <button
                className="mt-5 w-full rounded-xl bg-blue-400 px-4 py-3 font-semibold text-white transition hover:bg-blue-500"
              >
                View Product
              </button>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

export default ProductList;