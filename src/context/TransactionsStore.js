import React, { createContext, useEffect, useState } from "react";
import { getRecords } from "../api/transactions.js";

const Context = createContext();

export const TransactionsStore = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const load = async () => {
      let total = 0;

      getRecords(1).then(({ totalCount, page, transactions: records }) => {
        // In general this approach is a bad-pattern to use because it seems like the API is giving us the transactions with the most recent one first. This means that once we fetch the first page,
        // and then begin fetching the rest of the pages based on that initial total, if one more record gets added in between our GET requests, that one will be missed. If on the back-end one of
        // the records gets deleted, then we may end up with a 404 when we try to fetch one of the pages.
        total += records.length;

        // I am doing this so in case the shape of the data changes from the back-end in the future, we only have one place in the code to change instead of it bleeding through the UI components
        const transformed = records.map(
          ({ Date, Ledger, Amount, Company }) => ({
            date: Date,
            account: Ledger,
            amount: Amount,
            company: Company,
          })
        );
        setTransactions(transformed);

        if (total === totalCount) {
          setIsLoading(false);
        }
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
