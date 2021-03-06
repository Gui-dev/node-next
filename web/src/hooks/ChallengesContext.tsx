import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie'

import { LevelUpModal } from '../components/LevelUpModal'
import challenges from './../../challenges.json'

interface IChallengeProps {
  type: string
  description: string
  amount: number
}

interface IChallengesContextProps {
  level: number
  currentExperience: number
  challengesCompleted: number
  activeChallenge: IChallengeProps | null
  experienceToNextLevel: number
  levelUp: () => void
  startNewChallenge: () => void
  completeChallenge: () => void
  resetChallenge: () => void
  closeLevelUpModal: () => void
}

interface IChallengesProviderProps {
  children: ReactNode
  level: number
  currentExperience: number
  challengesCompleted: number
}

export const ChallengesContext = createContext({} as IChallengesContextProps)

export const ChallengesProvider = ({ children, ...rest }: IChallengesProviderProps) => {
  const [level, setLevel] = useState(rest.level ?? 1)
  const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0)
  const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted ?? 0)
  const [activeChallenge, setActiveChallenge] = useState<IChallengeProps | null>(null)
  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false)
  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

  useEffect(() => {
    Notification.requestPermission()
  }, [])

  useEffect(() => {
    Cookies.set('level', String(level))
    Cookies.set('currentExperience', String(currentExperience))
    Cookies.set('challengesCompleted', String(challengesCompleted))
  }, [level, currentExperience, challengesCompleted])

  const levelUp = () => {
    setLevel(level + 1)
    setIsLevelUpModalOpen(true)
  }

  const closeLevelUpModal = () => {
    setIsLevelUpModalOpen(false)
  }

  const startNewChallenge = () => {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChallengeIndex]
    setActiveChallenge(challenge)

    new Audio('/notification.mp3').play()

    if (Notification.permission === 'granted') {
      new Notification('Novo desafio', {
        body: `Valendo ${challenge.amount}xp!`
      })
    }
  }

  const completeChallenge = () => {
    if (!activeChallenge) {
      return
    }

    const { amount } = activeChallenge
    let finalExperience = currentExperience + amount

    if (finalExperience >= experienceToNextLevel) {
      finalExperience -= experienceToNextLevel
      levelUp()
    }

    setCurrentExperience(finalExperience)
    setActiveChallenge(null)
    setChallengesCompleted(challengesCompleted + 1)
  }

  const resetChallenge = () => {
    setActiveChallenge(null)
  }

  return (
    <ChallengesContext.Provider value={{
      level,
      currentExperience,
      challengesCompleted,
      activeChallenge,
      experienceToNextLevel,
      levelUp,
      startNewChallenge,
      completeChallenge,
      resetChallenge,
      closeLevelUpModal
    }}
    >
      { children }
      { isLevelUpModalOpen && (
        <LevelUpModal />
      ) }
    </ChallengesContext.Provider>
  )
}

export const useChallenges = () => {
  const context = useContext(ChallengesContext)
  return context
}
