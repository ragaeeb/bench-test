import { Table } from "react-bootstrap";
import { string, shape } from "prop-types";

const Transactions = ({
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

Transactions.propTypes = {
  labels: shape({
    date: string,
    company: string,
    account: string,
    amount: string,
  }),
};

export default Transactions;
