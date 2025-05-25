export default function Products() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="flex-grow py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Our Products
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our range of custom cabinet solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product Card 1 */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Kitchen Cabinets</h3>
              <p className="text-gray-600 mb-4">
                Custom kitchen cabinets designed to maximize your space and style.
              </p>
              <a href="/contact" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                Learn More →
              </a>
            </div>

            {/* Product Card 2 */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Bathroom Vanities</h3>
              <p className="text-gray-600 mb-4">
                Elegant bathroom vanities that combine functionality with modern design.
              </p>
              <a href="/contact" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                Learn More →
              </a>
            </div>

            {/* Product Card 3 */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Storage</h3>
              <p className="text-gray-600 mb-4">
                Tailored storage solutions for any room in your home.
              </p>
              <a href="/contact" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
