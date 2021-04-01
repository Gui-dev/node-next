import { CompletedChallenges } from '../components/CompletedChallenges'
import { Profile } from '../components/Profile'
import { Container } from './../styles/home'

export default function Home () {
  return (
    <Container>
      <section>
        <div>
          <Profile />
          <CompletedChallenges />
        </div>

        <div></div>
      </section>
    </Container>
  )
}
