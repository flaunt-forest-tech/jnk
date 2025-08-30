import CabinetStyles from '@/components/cabinet-styles/cabinet-styles';
import { loadCabinetStyles } from '@/lib/styles.server';

export default async function Home() {
  const styles = await loadCabinetStyles();
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-12">
        <CabinetStyles styles={styles} />
      </section>
    </div>
  );
}
