import styled from "styled-components";
import { transparentize } from "polished";

export const Container = styled.form`
    h2 {
        color: var(--text-title);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    input {
        width: 100%;
        height: 4rem;
        padding: 0 1.5rem;

        border-radius: 0.25rem;
        border: none;
        
        font-weight: 400;
        font-size: 1rem;

        background: var(--header);

        color: var(--text-placeholder);
        
        &::placeholder {
            color: var(--text-placeholder);
        }

        & + input {
            margin-top: 1rem;
        }
    }

    button[type="submit"] {
        width: 100%;
        height: 4rem;
        padding: 0 1.5rem;
        background: var(--green);
        color: var(--white);
        border-radius: 0.25rem;
        border: none;
        font-size: 1rem;
        margin-top: 1.5rem;

        transition: filter 0.2s;
        
        &:hover {
            filter: opacity(0.9);
        }
    }

    input[type=number]::-webkit-inner-spin-button { 
        -webkit-appearance: none;
    
    }

    input[type=number] { 
    -moz-appearance: textfield;
    appearance: textfield;
    }
`;

export const TransactionTypeContainer = styled.div`
    margin: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
`;

interface RadioBox {
    isActive: boolean,
    activeColor: "green" | "red"
}

const colors = {
    green: "#00875F",
    red: "#F75A69"
}

export const RadioBox = styled.button<RadioBox>`
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid var(--background);
    border-radius: 0.25rem;
    
    background: ${(props ) => props.isActive? 
        transparentize(0.9, colors[props.activeColor])
        : 
        "var(--shape)"
    };

    transition: border 0.2s;
    
    &:hover {
        border: 1px solid var(--shape);
    }
    
    img {
        width: 20px;
        height: 20px;
    }

    span {
        display: inline-block;
        margin-left: 1rem;
        font-size: 1rem;
        color: var(--text-title);
    }
`;