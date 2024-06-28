"use client";
import { usePedidos } from "@/context/requestsContext";

export function BasicRegisterForm() {
  const { client, setClient } = usePedidos();
  return (
    <form>
      <input
        type="text"
        name="name"
        placeholder="Digite seu nome"
        onChange={(e) => setClient({ ...client, name: e.target.value })}
      />
      <input
        type="text"
        name="adress"
        placeholder="Digite seu endereço"
        onChange={(e) => setClient({ ...client, address: e.target.value })}
      />
    </form>
  );
}
