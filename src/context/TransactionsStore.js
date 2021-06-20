import React, { createContext, useEffect, useState } from "react";
import { getRecords } from "../api/transactions.js";

const Context = createContext();

export const TransactionsStore = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const load = async () => {
      getRecords(1).then(({ totalCount, page, transactions: records }) => {
        setIsLoading(false);
        setTransactions(records);
      });
    };

    load();
  }, []);

  return (
    <Context.Provider
      value={{
        isLoading,
        transactions,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
