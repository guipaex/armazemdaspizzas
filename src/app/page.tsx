import Image from "next/image";
import MessageButton from "@/components/Button";
import styles from "@/styles/promo.module.scss";
import Header from "@/components/Header";
import { PedidosProvider } from "@/context/requestsContext";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.promoPage}>
        <h1>Promoção</h1>
        <h2>Pizza Gigante + Guaraná Kuat 2L</h2>
        <div className={styles.banner}>
          <Image
            src="/pizza.webp"
            className={styles.img_pizza}
            width={1300}
            height={715}
            alt="pizza"
          />
          <Image
            src="/refri.webp"
            className={styles.img_refri}
            width={340}
            height={710}
            alt="pizza"
          />
        </div>
        <PedidosProvider>
          <MessageButton />
        </PedidosProvider>
      </main>
    </>
  );
}
