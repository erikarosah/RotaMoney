import { Summary } from "../Summary";
import { Container } from "./styles";

import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import total from "../../assets/total.svg";
import { useTransactions } from "../../hooks/useTransactions";

export function Dashboard() {
    const { transactions } = useTransactions()

    const summary = transactions.reduce((acc, transactions) => {
        if(transactions.type === "deposit") {
            acc.deposits += transactions.amount
            acc.total += transactions.amount
        } else {
            acc.withdraws += transactions.amount
            acc.total -= transactions.amount
        }

        return acc
    }, {
        deposits: 0,
        withdraws:0,
        total:0
    })
    return(
        <Container>
            <Summary 
                title="Entradas"
                src={incomeImg}
                total={summary.deposits}
            />
            <Summary 
                title="Saídas"
                src={outcomeImg}
                total={-summary.withdraws}
            />
            <Summary 
                title="Total"
                src={total}
                total={summary.total}
            />
        </Container>
    )
}