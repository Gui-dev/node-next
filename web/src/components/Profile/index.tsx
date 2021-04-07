import { Container } from './style'
import { useChallenges } from './../../hooks/ChallengesContext'

export const Profile: React.FC = () => {
  const { level } = useChallenges()

  return (
    <Container>
      <img src="https://github.com/Gui-dev.png" alt="Gui Silva" title="Gui Silva"/>

      <div>
        <strong>Gui Silva</strong>
        <p>
          <img src="icons/level.svg" alt="Seu level atual" title="Seu level"/>
          Level { level }
        </p>
      </div>
    </Container>
  )
}
