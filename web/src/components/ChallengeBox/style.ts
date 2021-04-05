import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;
  padding: 1.5rem 2rem;
  background-color: var(--white);
  border-radius: 0.5rem;
  box-shadow: 0 0 6.8rem rgba(0, 0, 0, 0.05);
`

export const ChallengeActive = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  header h2 {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--blue);
    padding: 0 2rem 1.5rem;
    border-bottom: 1px solid var(--gray-line);
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    strong {
      font-size: 2rem;
      font-weight: 600;
      color: var(--title);
      margin: 1.5rem 0 1rem;
    }

    p {
      font-size: 1.6rem;
      line-height: 1.5;
    }
  }  

  footer {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
`

export const FailedButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--white);
  height: 3rem;
  background-color: var(--red);
  border: 0;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: filter 0.2s;


  &:hover {
    filter: brightness(0.9);
  }
`

export const SucceededButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--white);
  height: 3rem;
  background-color: var(--green);
  border: 0;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`

export const ChallengeNotActive = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  strong {
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 1.4;
  }

  p {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.4;
    max-width: 78%;
    margin-top: 3rem;

    img {
      margin-bottom: 1rem;
    }
  }
`
