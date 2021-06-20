import { useContext } from "react";
import TransactionsStore from "../context/TransactionsStore";
import Transactions from "../components/Transactions";
import Transaction from "../components/Transaction";

export const TransactionsTable = () => {
  const { isLoading, transactions } = useContext(TransactionsStore);

  if (isLoading) {
    return "Loading...";
  }

  return (
    <Transactions
      labels={{
        date: "Date",
        company: "Company",
        account: "Account",
        amount: "Amount",
      }}
    >
      {transactions.map(({ date, account, amount, company }) => (
        <Transaction
          date={date}
          company={company}
          account={account}
          amount={amount}
        />
      ))}
    </Transactions>
  );
};

export default TransactionsTable;
