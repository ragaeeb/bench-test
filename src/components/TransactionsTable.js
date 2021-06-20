import { Table } from "react-bootstrap";
import { string, shape } from "prop-types";

// For the purpose of this exercise I just list all the records in one page. In a real-world app we would want to use paging so that we don't show so many transactions at the same time on the user
// which would also have performance implications if the list of records is very large. It also makes it hard for the user to find anything, and they may not care about transactions from way in the past.
const TransactionsTable = ({
  labels: { date, company, account, amount },
  children,
}) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr style={{ background: "#fff" }}>
          <th>{date}</th>
          <th>{company}</th>
          <th>{account}</th>
          <th>{amount}</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </Table>
  );
};

TransactionsTable.propTypes = {
  labels: shape({
    date: string,
    company: string,
    account: string,
    amount: string,
  }),
};

export default TransactionsTable;
