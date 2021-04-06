import { useChallenges } from './../../hooks/ChallengesContext'
import { Container } from './style'

export const ExperienceBar: React.FC = () => {
  const { currentExperience, experienceToNextLevel } = useChallenges()

  const percentToNextLevel = Math.round((currentExperience * 100) / experienceToNextLevel)

  return (
    <Container>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }}/>
        <span
          style={{ left: `${percentToNextLevel}%` }}
          className="current-experience"
        >
          {currentExperience} xp
        </span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </Container>
  )
}
