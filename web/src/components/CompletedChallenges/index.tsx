import { useChallenges } from './../../hooks/ChallengesContext'
import { Container } from './style'

export const CompletedChallenges: React.FC = () => {
  const { challengesCompleted } = useChallenges()

  return (
    <Container>
      <span>Desafios completos</span>
      <span>{ challengesCompleted }</span>
    </Container>
  )
}
