import { Summary } from "../Summary";
import { Container } from "./styles";

import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import total from "../../assets/total.svg";

export function Dashboard() {
    return(
        <Container>
            <Summary 
                title="Entradas"
                src={incomeImg}
                total="1.000,00"
            />
            <Summary 
                title="Saídas"
                src={outcomeImg}
                total="500,00"
            />
            <Summary 
                title="Total"
                src={total}
                total="500,00"
                className
            />
        </Container>
    )
}