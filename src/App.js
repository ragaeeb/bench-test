import "./App.css";
import { Container } from "react-bootstrap";
import { TransactionsStore } from "./context/TransactionsStore.js";
import Header from "./components/Header";
import Transactions from "./components/Transactions";

const App = () => {
  return (
    <TransactionsStore>
      <div className="App">
        <Header title="Bench Test" />
        <section className="content">
          <Container>
            <Transactions
              labels={{
                date: "Date",
                company: "Company",
                account: "Account",
                amount: "Amount",
              }}
            />
          </Container>
        </section>
      </div>
    </TransactionsStore>
  );
};

export default App;
