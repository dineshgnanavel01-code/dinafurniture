import React from "react";

export default function Newsletter() {
  return (
    <section className="bg-gray-100 dark:bg-gray-800 p-6 rounded shadow text-center mt-10">
      <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
      <p className="text-gray-600 mb-4">
        Subscribe to our newsletter for exclusive deals and new arrivals.
      </p>
      <div className="flex justify-center space-x-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 border rounded w-64"/>
        <button className="bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700 transition">
          Subscribe
        </button>
      </div>
    </section>
  );
}
