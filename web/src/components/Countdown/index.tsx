import { Container, CountdownButton } from './style'
import { useCountdown } from '../../hooks/CountdownContext'

export const Countdown: React.FC = () => {
  const {
    minutes,
    seconds,
    hasFineshed,
    isActive,
    startCountdown,
    resetCountdown
  } = useCountdown()

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

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
