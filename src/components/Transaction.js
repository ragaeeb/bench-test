import { string } from "prop-types";

export const Transaction = ({ date, company, account, amount, active }) => (
  <tr>
    <td>{date}</td>
    <td>{company}</td>
    <td>{account}</td>
    <td>{amount}</td>
  </tr>
);

Transaction.propTypes = {
  date: string,
  company: string,
  account: string,
  amount: string,
};

export default Transaction;
