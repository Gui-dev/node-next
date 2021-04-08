import { GetServerSideProps } from 'next'

import { ChallengeBox } from '../components/ChallengeBox'
import { CompletedChallenges } from '../components/CompletedChallenges'
import { Countdown } from '../components/Countdown'
import { ExperienceBar } from '../components/ExperienceBar'
import { Profile } from '../components/Profile'
import { ChallengesProvider } from '../hooks/ChallengesContext'
import { CountdownProvider } from '../hooks/CountdownContext'
import { Container } from './../styles/home'

interface IHomeProps {
  level: number
  currentExperience: number
  challengesCompleted: number
}

export default function Home (props: IHomeProps) {
  return (
    <ChallengesProvider
      level={ props.level }
      currentExperience={ props.currentExperience }
      challengesCompleted={ props.challengesCompleted }
    >
      <Container>
        <ExperienceBar />
        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>

            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </Container>
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { level, currentExperience, challengesCompleted } = context.req.cookies
  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}
