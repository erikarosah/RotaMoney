import { useEffect, useState } from "react";

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { TransactionsTable } from "./components/TransactionTable";
import { NewTransactionModal } from "./components/NewTransactionModal";

import { api } from "./services/api";


export function App() {
  const [ transations, setTransations ] = useState([])
  const [ isNewTransactionModalOpen, setIsNewTransactionModalOpen ] = useState(false)

  function handleNewtransactionModal() {
    setIsNewTransactionModalOpen(!isNewTransactionModalOpen)
  }

  useEffect(() => {
    api.get("/transactions")
    .then(response => setTransations(response.data))
  },[])

  return (
    <>
     <Header onHandleNewTransactionModal={handleNewtransactionModal}/>
     <Dashboard/>
     <TransactionsTable/>

     <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleNewtransactionModal}
      />
    </>
  );
}