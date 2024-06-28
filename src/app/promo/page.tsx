import MessageButton from "@/components/Button";
import styles from "@/styles/promo.module.scss";
import { PedidosProvider } from "@/context/requestsContext";
import Image from "next/image";
import { BasicRegisterForm } from "@/components/Forms/Register";
import FlavorSelector from "@/components/Forms/Flavor";
export default function Promo() {
  return (
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
      <p>Promocao por tempo limitado</p>
      <p>Pizza de 45cm + refrigerante Guaraná Kuat 2L</p>
      <PedidosProvider>
        <BasicRegisterForm />
        <FlavorSelector />
        <MessageButton />
      </PedidosProvider>
    </main>
  );
}
