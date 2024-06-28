"use client";
import { usePedidos } from "@/context/requestsContext";
import { FLAVORS } from "@/utils/flavors";

export default function FlavorSelector() {
  const { setFlavor } = usePedidos();
  return (
    <select onChange={(e) => setFlavor(e.target.value)}>
      <option value="">Selecione o sabor</option>
      {FLAVORS.map((flavor) => (
        <option key={flavor} value={flavor}>
          {flavor}
        </option>
      ))}
    </select>
  );
}
