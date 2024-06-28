"use client";
import React from "react";
import { db } from "@/config/firebase";
import style from "@/styles/buttons.module.scss";
import { doc, setDoc, increment } from "firebase/firestore";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";
import { usePedidos } from "@/context/requestsContext";

export default function MessageButton() {
  const { quantidade, date, client, flavor } = usePedidos();
  const count = quantidade;

  async function handleClick() {
    await setDoc(
      doc(db, "pedidos", date),
      {
        counter: increment(1),
      },
      { merge: true }
    );
  }

  const message = `Oi, meu nome é ${client.name}. Vi a sua promoção da Pizza Gigante com o Kuat 2L, e gostaria de pedir no sabor ${flavor}. Meu endereço é: ${client.address}.`;

  const num = "5521970993261";

  return (
    <Link
      className={style.wppButton}
      onClick={handleClick}
      href={`https://wa.me/${num}?text=${message}`}
      target="_blank"
    >
      <FaWhatsapp className={style.icon} />
      Pedir pelo Whatsapp
    </Link>
  );
}
