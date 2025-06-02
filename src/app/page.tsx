import BestSellingCabinetStyle from '@/components/cabinet-styles/best-selling';
import OtherCabinetStyle from '@/components/cabinet-styles/other-styles';
import Hero from '@/components/hero/hero.server';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <section className="flex-grow">
        <Hero />
      </section>

      <section className="py-12">
        <BestSellingCabinetStyle />
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
        <OtherCabinetStyle />
      </section>
    </div>
  );
}
