import "./App.css";
import { Container } from "react-bootstrap";
import { TransactionsStore } from "./context/TransactionsStore.js";
import Header from "./components/Header";
import TransactionsTable from "./wrappers/TransactionsTable";

const App = () => {
  return (
    <TransactionsStore>
      <div className="App">
        <Header title="Bench Test" />
        <section className="content">
          <Container>
            <TransactionsTable />
          </Container>
        </section>
      </div>
    </TransactionsStore>
  );
};

export default App;
