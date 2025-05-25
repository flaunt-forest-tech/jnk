

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <section className="flex-grow py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Welcome to J&K Cabinets
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Your trusted partner for custom cabinet solutions. We bring quality craftsmanship and innovative design to transform your space.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
