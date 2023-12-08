import { Container, Content } from "./styles";

import logoImg from "../../assets/logo.svg";

export function Header() {
    return(
        <Container>
            <Content>
                <h1>
                    <img src={logoImg} alt="rotamoney"/>
                    R Money
                </h1>
                <button type="button">Nova transação</button>
            </Content>
        </Container>
    )
}