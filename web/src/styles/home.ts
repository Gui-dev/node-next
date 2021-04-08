import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 99.2rem;
  margin: 0 auto;
  padding: 2.5rem 2rem;

  section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10rem;
    flex: 1;
    align-content: center;
  }
`
