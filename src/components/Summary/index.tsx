import { Container } from "./styles";

interface Props {
    title: string;
    src: string;
    total: string;
    className?: boolean;
}

export function Summary(props: Props) {
    return(
        <Container className={props.className? "highlight-background" : ""}>
            <header>
                <p>{props.title}</p>
                <img src={props.src} alt="Resumo"/>
            </header>
            <strong>R$ {props.total}</strong>
        </Container>
    )
}