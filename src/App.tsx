import { useState } from "react";

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { TransactionsTable } from "./components/TransactionTable";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionProvider } from "./hooks/useTransactions";

export function App() {
  const [ isNewTransactionModalOpen, setIsNewTransactionModalOpen ] = useState(false)

  function handleNewtransactionModal() {
    setIsNewTransactionModalOpen(!isNewTransactionModalOpen)
  }

  return (
    <TransactionProvider>

      <Header onHandleNewTransactionModal={handleNewtransactionModal}/>
      <Dashboard/>
      <TransactionsTable/>
 
      <NewTransactionModal
         isOpen={isNewTransactionModalOpen}
         onRequestClose={handleNewtransactionModal}
       />
    </TransactionProvider>

  );
}