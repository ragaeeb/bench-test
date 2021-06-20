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
      <Transaction date="2021" company="C" account="A" amount="$" />
      <Transaction
        date="2021"
        company="D"
        account="B"
        amount="$"
        active={true}
      />
    </Transactions>
  );
};

export default TransactionsTable;