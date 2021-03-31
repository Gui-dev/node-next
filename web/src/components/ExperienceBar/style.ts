import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  align-items: center;

  span {
    font-size: 1.6rem;
  }

  > div {
    position: relative;
    flex: 1;
    height: 0.4rem;
    margin: 0 1.5rem;
    background-color: var(--gray-line);
    border-radius: 0.4rem;

    > div {
      height: 0.4rem;
      background-color: var(--green);
      border-radius: 0.4rem;
    }

    > .current-experience {
      position: absolute;
      top: 1.2rem;
      transform: translateX(-50%);
    }
  }
`
