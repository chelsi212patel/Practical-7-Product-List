import React from "react";

function ProductList() {
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 55000,
      category: "Electronics",
      icon: "💻",
    },
    {
      id: 2,
      name: "Smartphone",
      price: 25000,
      category: "Electronics",
      icon: "📱",
    },
    {
      id: 3,
      name: "Headphones",
      price: 2500,
      category: "Accessories",
      icon: "🎧",
    },
    {
      id: 4,
      name: "Keyboard",
      price: 1500,
      category: "Accessories",
      icon: "⌨️",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="mx-auto max-w-6xl">

        <h1 className="mb-8 text-center text-4xl font-bold text-gray-800">
          Product List
        </h1>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {products.map((product) => (
            <div
              key={product.id}
              className="rounded-xl bg-white p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >

              <div className="mb-4 flex h-24 items-center justify-center rounded-lg bg-blue-100">
                <span className="text-5xl">
                  {product.icon}
                </span>
              </div>

              <h2 className="text-xl font-bold text-gray-800">
                {product.name}
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                {product.category}
              </p>

              <p className="mt-4 text-2xl font-bold text-blue-600">
                ₹{product.price}
              </p>

            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default ProductList;
