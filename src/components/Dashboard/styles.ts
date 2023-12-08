import styled from "styled-components";

export const Container = styled.header`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -4rem;
    padding: 0 2rem;

    @media (max-width: 688px){
        display: flex;
        flex-direction: column;
    }

    @media (max-width: 418px){
        display: flex;
        flex-direction: row;
 
        overflow-x: scroll;
        scroll-behavior: smooth;
        
        &::-webkit-scrollbar {
        display: none;
        }
    }
`;

