import { Container } from "./styles";

interface Props {
    title: string;
    src: string;
    total: number;
    className?: boolean;
}

export function Summary(props: Props) {
    return(
        <Container className={props.className? "highlight-background" : ""}>
            <header>
                <p>{props.title}</p>
                <img src={props.src} alt="Resumo"/>
            </header>
            <strong>
                {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL"
                }).format(props.total)}
            </strong>
        </Container>
    )
}