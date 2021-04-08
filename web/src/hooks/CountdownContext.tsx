import { createContext, ReactNode, useContext, useEffect, useState } from 'react'

import { useChallenges } from './ChallengesContext'

interface ICountdownProviderProps {
  children: ReactNode
}

interface ICountdownContextProps {
  minutes: number
  seconds: number
  hasFineshed: boolean
  isActive: boolean
  startCountdown: () => void
  resetCountdown: () => void
}

export const CountdownContext = createContext({} as ICountdownContextProps)

export const CountdownProvider = ({ children }: ICountdownProviderProps) => {
  const [time, setTime] = useState(25 * 60)
  const [isActive, setIsActive] = useState(false)
  const [hasFineshed, setHasFineshed] = useState(false)
  let countdownTimeout: ReturnType<typeof setTimeout>

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

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
    setTime(25 * 60)
    setHasFineshed(false)
  }

  return (
    <CountdownContext.Provider value={{
      minutes,
      seconds,
      hasFineshed,
      isActive,
      startCountdown,
      resetCountdown
    }}>
      { children }
    </CountdownContext.Provider>
  )
}

export const useCountdown = () => {
  const context = useContext(CountdownContext)
  return context
}
