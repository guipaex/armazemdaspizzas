import styles from "@/styles/banner.module.scss";
import Image from "next/image";
export default function Banner({ url }: { url: string }) {
  return (
    <div className={styles.banner}>
      <Image
        src={url}
        className={styles.img}
        width={1920}
        height={1080}
        alt="imagem de uma pizza, escrito 'Armazém das Pizzas, delivery.'"
      />
    </div>
  );
}
