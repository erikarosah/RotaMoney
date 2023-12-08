import { Container, Content } from "./styles";

import logoImg from "../../assets/logo.svg";

interface HeaderProps {
    onHandleNewTransactionModal: () => void
}

export function Header({onHandleNewTransactionModal}: HeaderProps) {
    
    return(
        <Container>
            <Content>
                <h1>
                    <img src={logoImg} alt="rotamoney"/>
                    R Money
                </h1>
                <button type="button" onClick={onHandleNewTransactionModal}>Nova transação</button>
            </Content>
        </Container>
    )
}