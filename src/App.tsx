import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { TransactionsTable } from "./components/TransactionTable";

export function App() {
  return (
    <>
     <Header/>
     <Dashboard/>
     <TransactionsTable/>
    </>
  );
}