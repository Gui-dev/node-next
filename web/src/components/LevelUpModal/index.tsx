import { Overlay, Container } from './style'

import { useChallenges } from '../../hooks/ChallengesContext'

export const LevelUpModal: React.FC = () => {
  const { level, closeLevelUpModal } = useChallenges()

  return (
    <Overlay>
      <Container>
        <header>
          <h2>{ level }</h2>
        </header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level</p>

        <button onClick={ closeLevelUpModal }>
          <img src="/icons/close.svg" alt="Fechar Modal" title="Fechar Modal"/>
        </button>
      </Container>
    </Overlay>
  )
}
