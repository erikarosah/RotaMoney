import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #202024;
        --shape: #29292E;
        --header: #121214;

        --white: #FFFFFF;
        --text-title: #E1E1E6;
        --text-placeholder: #7C7C8A;

        --green: #00875F;
        --green-dark: #015F43;
        --green-light: #00B37E;

        --red: #F75A69;
        --red-dark: #AA2834;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1000px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .react-modal-overlay {
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        inset: 0;
        
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .react-modal-content {
        width: 100%;
        max-width: 576px;

        padding: 3rem;
        position: relative;
        border-radius: 0.25rem;

        background: var(--background);
    }

    .react-modal-close {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: none;
        background: transparent;

        transition: filter 2s;
        
        &:hover {
            filter: brightness(0.8);
        }
    }
`;