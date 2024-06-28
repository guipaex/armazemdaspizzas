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
interface Client {
  name: string;
  address: string;
}

interface PedidosContextProps {
  quantidade: number;
  date: string;
  client: Client;
  flavor: string;
  setClient: React.Dispatch<React.SetStateAction<Client>>;
  setFlavor: React.Dispatch<React.SetStateAction<string>>;
}

const PedidosContext = createContext<PedidosContextProps | undefined>(
  undefined
);

export const PedidosProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [quantidade, setQuantidade] = useState<number>(0);
  const [client, setClient] = useState<Client>({ name: "", address: "" });
  const [flavor, setFlavor] = useState<string>("");

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
    <PedidosContext.Provider
      value={{ quantidade, date, client, setClient, flavor, setFlavor }}
    >
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
