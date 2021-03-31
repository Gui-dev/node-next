import { Container } from './style'

export const Profile: React.FC = () => {
  return (
    <Container>
      <img src="https://github.com/Gui-dev.png" alt="Gui Silva" title="Gui Silva"/>

      <div>
        <strong>Gui Silva</strong>
        <p>
          <img src="icons/level.svg" alt="Seu level atual" title="Seu level"/>
          Level 1
        </p>
      </div>
    </Container>
  )
}
