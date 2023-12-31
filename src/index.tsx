import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';

import { Model, createServer } from 'miragejs';
import { GlobalStyle } from './styles/global';

createServer({
  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id:1,
          title:"Freelance de website",
          type:"deposit",
          category: "Dev",
          amount: 5000,
          createdAt: new Date("12/10/2023 10:38:00")
        },
        {
          id:2,
          title:"Aluguel",
          type:"withdraw",
          category: "Casa",
          amount: 1100,
          createdAt: new Date("12/10/2023 08:15:00")
        }
      ],
    })
  },
  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all("transaction")
    })

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create("transaction", data)
    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    <GlobalStyle/>
  </React.StrictMode>
);