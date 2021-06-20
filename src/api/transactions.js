import axios from "axios";

/**
 * Gets a single page of transaction records.
 * @param {*} page The page for which to get the record for.
 * @returns The response data with the totalCount representing the total number of transactions across all pages, a page integer representing the current page, and an array of transactions.
 * The shape of each transaction is: {Date: '2013-12-22', Ledger: 'ledger name', Amount: '-110.71', Company: 'Shaw CableSystems'}
 */
export const getRecords = async (page) => {
  const { data } = await axios.get(
    `https://resttest.bench.co/transactions/${page}.json`
  );
  return data;
};
