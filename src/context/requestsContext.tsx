"use client";
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { db } from "@/config/firebase";
import { doc, onSnapshot } from "firebase/firestore";

interface PedidosContextProps {
  quantidade: number;
  date: string;
}

const PedidosContext = createContext<PedidosContextProps | undefined>(
  undefined
);

export const PedidosProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [quantidade, setQuantidade] = useState<number>(0);
  const date = `${new Date().getDate()} de ${new Date().toLocaleString(
    "pt-BR",
    { month: "long" }
  )}`;
  useEffect(() => {
    const docRef = doc(db, "pedidos", date);
    const unsubscribe = onSnapshot(docRef, (doc) => {
      if (doc.exists()) {
        const data = doc.data();
        setQuantidade(data.counter);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <PedidosContext.Provider value={{ quantidade, date }}>
      {children}
    </PedidosContext.Provider>
  );
};

export const usePedidos = (): PedidosContextProps => {
  const context = useContext(PedidosContext);
  if (context === undefined) {
    throw new Error("usePedidos must be used within a PedidosProvider");
  }
  return context;
};
