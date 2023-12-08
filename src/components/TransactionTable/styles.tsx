import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 5rem auto 0;
  padding: 0 1.5rem;

`;

export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  text-align: center;

  th {
    color: var(--text-title);
  }

  td {
    padding: 1.25rem 2rem;
    background: var(--shape);
    color: var(--text-title);

    &:first-child {
      border-top-left-radius: 0.25rem;
      border-bottom-left-radius: 0.25rem;
    }

    &:last-child {
      border-top-right-radius: 0.25rem;
      border-bottom-right-radius: 0.25rem;
    }

    &.deposit {
      color: var(--green-light);
    }

    &.withdraw {
      color: var(--red);
    }
  }

  @media(max-width: 418px) {
    thead {
      display: none;
    }

    tr {
      display: flex;
      flex-direction: column;
        
      &:first-child {
        margin-bottom: 1rem;
      }

      &:last-child {
        margin-bottom: 1rem;
      }

      td:last-child {
        text-align: right;
        color: var(--text-placeholder);
      }

      td:nth-child(3) {
        display: none;
      }
    }

    td {
      &.deposit, &.withdraw {
        font-size: 1.8rem;
      }
    }
  }
`;