import Image from "next/image";
import MessageButton from "@/components/Button";
import styles from "@/styles/promo.module.scss";

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <Image
          src="/logo_amz.png"
          className={styles.img_pizza}
          width={150}
          height={75}
          alt="pizza"
        />
      </header>
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
        <MessageButton />
      </main>
    </>
  );
}
