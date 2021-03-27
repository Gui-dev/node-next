import { Container } from './style'

export const ExperienceBar: React.FC = () => {
  return (
    <Container>
      <span>0 xp</span>
      <div>
        <div style={{ width: '50%' }}/>
        <span
          style={{ left: '50%' }}
          className="current-experience"
        >
          300xp
        </span>
      </div>
      <span>600xp</span>
    </Container>
  )
}
