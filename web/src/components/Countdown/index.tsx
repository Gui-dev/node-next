import { useEffect, useState } from 'react'
import { Container, CountdownButton } from './style'

export const Countdown: React.FC = () => {
  const [time, setTime] = useState(25 * 60)
  const [isActive, setIsActive] = useState(false)

  const minutes = Math.floor(time / 60)
  const seconds = time % 60
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

  useEffect(() => {
    if (isActive && time > 0) {
      setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    }
  }, [isActive, time])

  const startCountdown = () => {
    setIsActive(!isActive)
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

      <CountdownButton
        onClick={ startCountdown }
      >
        Iniciar um ciclo
      </CountdownButton>
    </>
  )
}
