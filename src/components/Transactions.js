import { Table } from "react-bootstrap";
import { string, shape } from "prop-types";

const Transactions = ({ labels: { date, company, account, amount } }) => {
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
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr className="green">
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan="2">Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
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
