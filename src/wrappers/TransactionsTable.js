import { useContext } from "react";
import TransactionsStore from "../context/TransactionsStore";
import Transactions from "../components/Transactions";
import Transaction from "../components/Transaction";
import { Spinner } from "react-bootstrap";

const Currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const TransactionsTable = () => {
  const { isLoading, transactions, balance } = useContext(TransactionsStore);

  return (
    <>
      <Transactions
        labels={{
          date: "Date",
          company: "Company",
          account: "Account",
          amount: Currency.format(balance),
        }}
      >
        {transactions.map(({ date, account, amount, company }, i) => (
          <Transaction
            key={i} // generally this is not a good key to use since the order is not guaranteed from the API, if we had a transaction ID that should be used
            date={date}
            company={company}
            account={account}
            amount={amount}
          />
        ))}
      </Transactions>
      {isLoading && <Spinner animation="border" role="status" />}
    </>
  );
};

export default TransactionsTable;
