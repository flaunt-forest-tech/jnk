export default function Gallery() {
  return (
    <div className="flex flex-col min-h-screen py-12">
      <div className="max-w-7xl w-full">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Gallery</h1>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="aspect-square bg-gray-100 overflow-hidden"
            >
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                Image {item}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 