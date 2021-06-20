import { useContext } from "react";
import TransactionsStore from "../context/TransactionsStore";
import Transactions from "../components/TransactionsTable";
import Transaction from "../components/Transaction";
import { Alert, Spinner } from "react-bootstrap";

const Currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const TransactionRecords = () => {
  const { isLoading, transactions, balance, error } =
    useContext(TransactionsStore);

  return (
    <>
      <Transactions
        labels={{
          date: "Date",
          company: "Company",
          account: "Account",
          amount: isLoading && !balance ? "Amount" : Currency.format(balance),
        }}
      >
        {transactions.map(({ timestamp, account, amount, company }, i) => (
          <Transaction
            key={i} // generally this is not a good key to use since the order is not guaranteed from the API, if we had a transaction ID that should be used
            date={timestamp.toDateString()}
            company={company}
            account={account || "[Uncategorized]"}
            amount={Currency.format(amount)}
          />
        ))}
      </Transactions>
      {isLoading && <Spinner animation="border" role="status" />}
      {error && <Alert variant="danger">{error}</Alert>}
    </>
  );
};

export default TransactionRecords;
