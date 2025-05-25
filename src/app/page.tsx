import Hero from '@/components/hero/hero.server';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <section className="flex-grow py-12">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
          <Hero />
        </div>
      </section>

      {/* Product Styles Section - Placeholder */}
      <section className="">
        Product styles
      </section>
    </div>
  );
}
