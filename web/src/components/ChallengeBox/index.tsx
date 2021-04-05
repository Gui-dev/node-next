import { Container, ChallengeActive, FailedButton, SucceededButton, ChallengeNotActive } from './style'

export const ChallengeBox: React.FC = () => {
  const hasActiveChallenge = true

  return (
    <Container>
      { hasActiveChallenge
        ? (
          <ChallengeActive>
            <header>
              <h2>Ganhe 400 xp</h2>
            </header>

            <main>
              <img src="icons/body.svg" alt="Novo Desafio"/>
              <strong>Novo desafio</strong>
              <p>Levante e faça uma caminhada de 3 minutos</p>
            </main>

            <footer>
              <FailedButton>Falhei</FailedButton>

              <SucceededButton>Completei</SucceededButton>
            </footer>
          </ChallengeActive>
          )
        : (
          <ChallengeNotActive>
            <strong>Finalize um ciclo para receber um desafio</strong>
            <p>
              <img src="icons/level-up.svg" alt="Level Up" title="Level Up"/>
              Avance de level completando desafios
            </p>
          </ChallengeNotActive>
          )
      }
    </Container>
  )
}
