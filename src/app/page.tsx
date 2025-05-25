import Hero from '@/components/hero/hero.server';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <section className="flex-grow">
        <Hero />
      </section>

      {/* Product Styles Section - Placeholder */}
      <section className="py-12">
        Product styles
      </section>
    </div>
  );
}
