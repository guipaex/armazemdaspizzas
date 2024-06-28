import MessageButton from "@/components/Button";
import styles from "@/styles/promo.module.scss";
import { PedidosProvider } from "@/context/requestsContext";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <main className={styles.promoPage}>
      <Banner url="/banner.png" />
      <PedidosProvider>
        <MessageButton />
      </PedidosProvider>
    </main>
  );
}
