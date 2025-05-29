import Hero from '@/components/hero/hero.server';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <section className="flex-grow">
        <Hero />
      </section>

      {/* Most Loved Styles Section - Placeholder  reference: https://c21b33-75.myshopify.com/*/}
      {/*White Shaker (S8) 
         Dove (E1)
         Charcoal (E2)
         Sage (E3)
         Pebble (B6)
         Pure (B5)*/}
      <section className="py-12">
        Most Loved Styles
      </section>

      {/* Explore More Styles Section - Placeholder reference: https://c21b33-75.myshopify.com/*/}
      {/*Naval (S7) 
         Butterscotch (B8)
         Java Coffee (S1)
         Castle Grey (S5)
         Greige (K3)
         Espresso (K8)
         Mocha Glazed (K10)
         Hazel (H8)
         Pearl Glazed (H9)
         Creme Glazed (A7)
         Mahogany (J5)
         Chocolate Glazed (M01)*/}
      <section className="py-12">
        Explore More Styles
      </section>
    </div>
  );
}
