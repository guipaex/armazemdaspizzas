import React, { createContext, useContext, useState, ReactNode } from "react";

const RequestsContext = createContext({});

export const RequestsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [requests, setRequests] = useState([]);
  return (
    <RequestsContext.Provider value={{ requests, setRequests }}>
      {children}
    </RequestsContext.Provider>
  );
};
