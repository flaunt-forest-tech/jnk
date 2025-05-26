export default function About() {
  return (
    <div className="flex flex-col min-h-screen py-12">
      <div className="max-w-7xl w-full">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>
        
        {/* About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Company Description */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900">Our Story</h2>
            <p className="text-gray-600">
              J&K Cabinetry is a premier custom cabinet manufacturer dedicated to creating beautiful, 
              high-quality cabinetry for your home or business. With years of experience and a 
              commitment to excellence, we bring your vision to life.
            </p>
            <p className="text-gray-600">
              Our team of skilled craftsmen combines traditional techniques with modern technology 
              to deliver exceptional results that exceed expectations.
            </p>
          </div>

          {/* Values Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900">Our Values</h2>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50">
                <h3 className="font-medium text-gray-900 mb-2">Quality Craftsmanship</h3>
                <p className="text-gray-600">We take pride in every detail of our work.</p>
              </div>
              <div className="p-4 bg-gray-50">
                <h3 className="font-medium text-gray-900 mb-2">Customer Satisfaction</h3>
                <p className="text-gray-600">Your satisfaction is our top priority.</p>
              </div>
              <div className="p-4 bg-gray-50">
                <h3 className="font-medium text-gray-900 mb-2">Innovation</h3>
                <p className="text-gray-600">We stay ahead with the latest techniques and designs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 