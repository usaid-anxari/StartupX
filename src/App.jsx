import React from "react";

export default function StartupX() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Launch Your SaaS with StartupX</h1>
        <p className="text-lg mb-6">Modern React + TailwindCSS landing page to help you go live fast</p>
        <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl hover:bg-blue-100 transition">Buy for $19</button>
      </section>

      {/* Features */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Responsive Design</h3>
            <p>Looks great on all devices with flexible layout components.</p>
          </div>
          <div className="p-6 border rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Easy to Customize</h3>
            <p>Simple code structure with Tailwind utility classes.</p>
          </div>
          <div className="p-6 border rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Clean Code</h3>
            <p>Built with performance and best practices in mind.</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Simple Pricing</h2>
        <p className="text-lg mb-8">One-time payment. Lifetime access.</p>
        <div className="inline-block bg-white p-8 rounded-xl shadow-md">
          <h3 className="text-2xl font-bold mb-2">$19</h3>
          <p className="mb-4">For developers, indie makers, and startups</p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">Buy Now</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-gray-500">
        © 2025 StartupX. All rights reserved.
      </footer>
    </div>
  );
}
