import React, { createContext, useEffect, useState } from "react";
import { getRecords } from "../api/transactions.js";

const Context = createContext();

export const TransactionsStore = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [transactions, setTransactions] = useState([]);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const load = async () => {
      let total = 0;
      const allTransactions = [];
      let currentPage = 1;
      let totalBalance = 0;

      // Tech-Debt: Generally doing a await inside a loop is a very bad idea since each await is going to expand out the code block inside with the V8 engine, but I'm doing it here for the sake of
      // simplicity since we need to fetch all the records initially to be able to generate the sum of the amount. Ideally, we would want the backend to give us the total amount in a separate field
      // in the response payload. If the API can't provide us that, another idea is for the API to provide to the total number of pages (instead of just the totalCount), and this way we can do
      // a axios.all() or Promise.all() to be able to fetch the records in parallel, or process all the requests in one await instead of doing it in a loop like this.
      while (true) {
        const {
          totalCount,
          page,
          transactions: records,
        } = await getRecords(currentPage);

        total += records.length;

        // I am doing this so in case the shape of the data changes from the back-end in the future, we only have one place in the code to change instead of it bleeding through the UI components
        const transformed = records.map(
          ({ Date: date, Ledger, Amount, Company }) => ({
            timestamp: new Date(Date.parse(date)),
            account: Ledger,
            amount: Amount,
            company: Company,
          })
        );

        totalBalance = transformed.reduce(
          (total, { amount }) => total + parseFloat(amount),
          totalBalance
        );
        setBalance(totalBalance);

        allTransactions.push(...transformed);
        setTransactions(allTransactions);

        // Potential area of bug: if one more record gets added while our loop is executing, then we may receive an additional page that contains one or more transactions from one of the previous
        // pages. The way to properly fix this would be to provide unique IDs for the transactions, so we can keep track of which one was the last transaction we fetched so that we do not duplicate it.
        // In the event that while our loop is executing a record is deleted on the server, and the totalCount will < total, then we should receive a 404 and it will throw.
        if (total >= totalCount) {
          break;
        }

        currentPage = page + 1;
      }

      setIsLoading(false);
    };

    load();
  }, []);

  return (
    <Context.Provider
      value={{
        balance,
        isLoading,
        transactions,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
