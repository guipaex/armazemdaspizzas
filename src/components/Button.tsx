"use client";
import React from "react";
import { db } from "@/config/firebase";
import style from "@/styles/buttons.module.scss";
import { doc, setDoc, increment } from "firebase/firestore";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";
import { usePedidos } from "@/context/requestsContext";

export default function MessageButton() {
  const { quantidade, date } = usePedidos();

  async function handleClick() {
    console.log("Clicou no botão");
    console.log(date);
    await setDoc(
      doc(db, "pedidos", date),
      {
        counter: increment(1),
      },
      { merge: true }
    );
  }

  const message = "FAÇA O L IMEDIATAMENTE";
  const num = "5521996505223";
  return (
    // <Link
    //   className={style.wppButton}
    //   onClick={handleClick}
    //   href={`https://wa.me/${num}?text=${message}`}
    //   target="_blank"
    // >
    //   <FaWhatsapp className={style.icon} />
    //   Pedir pelo Whatsapp
    // </Link>
    <button className={style.wppButton} onClick={handleClick}>
      <FaWhatsapp className={style.icon} />
      Pedir pelo Whatsapp
    </button>
  );
}
