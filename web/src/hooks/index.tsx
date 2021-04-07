import { ReactNode } from 'react'

import { ChallengesProvider } from './ChallengesContext'
import { CountdownProvider } from './CountdownContext'

interface IHooksProps {
  children: ReactNode
}

export const Hooks = ({ children }: IHooksProps) => {
  return (
    <ChallengesProvider>
      <CountdownProvider>
        { children }
      </CountdownProvider>
    </ChallengesProvider>
  )
}
