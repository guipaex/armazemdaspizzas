import Image from "next/image";
import styles from "@/styles/header.module.scss";
import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa6";

export default function Header() {
  return (
    <header className={styles.header}>
      <Image
        src="/logo_amz.png"
        className={styles.logo}
        width={160}
        height={75}
        alt="pizza"
      />
      <div className={styles.links}>
        <Link href="https://www.instagram.com/armazemdaspizzas00/">
          <FaInstagram className={styles.icon} />
        </Link>
        <Link href="https://www.facebook.com/armazemdaspizzas001">
          <FaFacebook className={styles.icon} />
        </Link>
      </div>
    </header>
  );
}
