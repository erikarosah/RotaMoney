import { Container, Table } from "./styles";

export function TransactionsTable() {
    return(
        <Container>
            <Table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className="deposit">R$ 12,000</td>
                        <td>Desenvolvimento</td>
                        <td>08/12/2023</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">- R$ 1200,00</td>
                        <td>Casa</td>
                        <td>02/12/2023</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    )
}