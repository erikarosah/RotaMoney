import styled from "styled-components";

export const Container = styled.header`
    background: var(--header);
`;

export const Content = styled.div`
    max-width: 1120px;
    padding: 1rem 1rem 10rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;

    > h1{
        color: var(--white);

        display: flex;
        align-items: center;
        gap: 1rem;
    }

    > button {
        height: 2.5rem;
        padding: 0 2rem;

        border: none;
        border-radius: 0.25rem;
        font-size: 1rem;
        color:  var(--white);
        background: var(--green-dark);

        transition: filter 0.2s;
        
        &:hover {
            filter: opacity(0.9);
        }
    }

    @media(max-width: 418px) {
        h1 {
            font-size: 1.8rem;
        }
    }
    
    @media(max-width: 320px) {
        h1 {
            font-size: 1.2rem;
        }
    }
`;