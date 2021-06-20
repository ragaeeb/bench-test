import { bool, string } from "prop-types";

export const Transaction = ({ date, company, account, amount, active }) => (
  <tr className={active && "green"}>
    <td>{date}</td>
    <td>{company}</td>
    <td>{account}</td>
    <td>{amount}</td>
  </tr>
);

Transaction.propTypes = {
  active: bool,
  date: string,
  company: string,
  account: string,
  amount: string,
};

export default Transaction;
