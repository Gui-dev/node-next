import { Container, ChallengeActive, FailedButton, SucceededButton, ChallengeNotActive } from './style'
import { useChallenges } from './../../hooks/ChallengesContext'

export const ChallengeBox: React.FC = () => {
  const { activeChallenge, resetChallenge } = useChallenges()

  return (
    <Container>
      { activeChallenge
        ? (
          <ChallengeActive>
            <header>
              <h2>Ganhe { activeChallenge.amount } xp</h2>
            </header>

            <main>
              <img src={`icons/${activeChallenge.type}.svg`} alt="Novo Desafio"/>
              <strong>Novo desafio</strong>
              <p>{ activeChallenge.description }</p>
            </main>

            <footer>
              <FailedButton
                onClick={ resetChallenge }
              >
                Falhei
              </FailedButton>

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
