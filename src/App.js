import "./App.css";
import { Container } from "react-bootstrap";
import { TransactionsStore } from "./context/TransactionsStore";
import Header from "./components/Header";
import TransactionRecords from "./wrappers/TransactionRecords";

const App = () => {
  return (
    <TransactionsStore>
      <div className="App">
        <Header title="Bench Test" />
        <section className="content">
          <Container>
            <TransactionRecords />
          </Container>
        </section>
      </div>
    </TransactionsStore>
  );
};

export default App;
