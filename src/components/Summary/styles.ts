import styled from "styled-components";

export const Container = styled.header`
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    strong {
        min-width: max-content;
        display: block;
        margin-top: 1rem;
        font-size: 2rem;
        font-weight: 500;
        line-height: 3rem;
    }

    &.highlight-background {
      background-color: var(--green);
    }

    @media (max-width: 418px){
        header {
            gap: 8rem;
        }
    }
`;

