import { useEffect, useState } from 'react'

import { useChallenges } from './../../hooks/ChallengesContext'
import { Container, CountdownButton } from './style'

export const Countdown: React.FC = () => {
  const [time, setTime] = useState(0.1 * 60)
  const [isActive, setIsActive] = useState(false)
  const [hasFineshed, setHasFineshed] = useState(false)
  let countdownTimeout: ReturnType<typeof setTimeout>

  const minutes = Math.floor(time / 60)
  const seconds = time % 60
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

  const { startNewChallenge } = useChallenges()

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    } else if (isActive && time === 0) {
      setHasFineshed(true)
      setIsActive(false)
      startNewChallenge()
    }
  }, [isActive, time])

  const startCountdown = () => {
    setIsActive(true)
  }

  const resetCountdown = () => {
    clearTimeout(countdownTimeout)
    setIsActive(false)
    setTime(0.1 * 60)
  }

  return (
    <>
      <Container>
        <div>
          <span>{ minuteLeft }</span>
          <span>{ minuteRight }</span>
        </div>
        <span>:</span>
        <div>
          <span>{ secondLeft }</span>
          <span>{ secondRight }</span>
        </div>
      </Container>

      { hasFineshed
        ? (
          <CountdownButton disabled>
            Ciclo encerrado
          </CountdownButton>
          )
        : (
          <>
          { isActive
            ? (
              <CountdownButton
                buttonActive={ isActive }
                onClick={ resetCountdown }
              >
                Abandonar ciclo
              </CountdownButton>
              )
            : (
              <CountdownButton
                buttonActive={ isActive }
                onClick={ startCountdown }
              >
                Iniciar um ciclo
              </CountdownButton>
              )
            }
          </>
          )
    }

    </>
  )
}
