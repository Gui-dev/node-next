import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 8.5rem;
    height: 8.5rem;
    border-radius: 50%;
  }

  div {
    margin-left: 1rem;

    strong {
      font-size: 1.8rem;
      font-weight: 600;
      color: var(--title);
    }

    p {
      font-size: 1.6rem;
      margin-top: 0.5rem;

      img {
        margin-right: 0.5rem;
      }
    }
  }


`
