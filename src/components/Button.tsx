"use client";
import { db } from "@/config/firebase";
import style from "@/styles/buttons.module.scss";
import { doc, setDoc } from "firebase/firestore";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";

export default function MessageButton() {
  async function handleClick() {
    console.log("Clicou no botão");
    await setDoc(doc(db, "pedidos", "index"), {
      counter: 0,
    });
  }

  const message = "FAÇA O L IMEDIATAMENTE";
  const num = "5521996505223";
  return (
    <Link
      className={style.wppButton}
      onClick={handleClick}
      href={`https://wa.me/${num}?text=${message}`}
    >
      <FaWhatsapp className={style.icon} />
      Pedir pelo Whatsapp
    </Link>
  );
}
