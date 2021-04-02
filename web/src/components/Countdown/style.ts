import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  font-family: Rajdhani;
  font-weight: 600;
  color: var(--title);

  > div {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-size: 8.5rem;
    text-align: center;
    background-color: var(--white);
    border-radius: 5px;
    box-shadow: 0 0 6.8rem rgba(0, 0, 0, 0.05);

    span {
      flex: 1;
    }
  }

  > span {
    font-size: 6.25rem;
    margin: 0 .5rem;
  }

  > div span:first-child {
    border-right: 1px solid #F0F1F3;
  }

  > div span:last-child {
    border-left: 1px solid #F0F1F3;
  }
`

export const CountdownButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  font-weight: 600;
  color: #FFF;
  width: 100%;
  height: 5rem;
  margin-top: 2rem;
  background-color: var(--blue);
  border: 0;
  border-radius: 5px;
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--blue-dark);
  }
`
