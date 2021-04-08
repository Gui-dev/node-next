import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(242, 243, 245, 0.8);
`

export const Container = styled.div`
  position: relative;
  text-align: center;
  width: 100%;
  max-width: 40rem;
  padding: 2rem 3rem;
  background-color: var(--white);
  border-radius: .5rem;
  box-shadow: 0 0 6rem rgba(0, 0, 0, 0.05);

  header h2 {
    font-size: 8.75rem;
    font-weight: 600;
    color: var(--blue);
    background: url('/icons/levelup.svg') no-repeat center;
    background-size: contain;
  }

  strong {
    font-size: 2.25rem;
    color: var(--title);
  }

  p {
    font-size: 1.25rem;
    color: var(--text);
    margin-top: 0.4rem;
  }

  button {
    position: absolute;
    top: .5rem;
    right: .5rem;
    font-size: 0;
    background: transparent;
    border: 0;
  }
`
