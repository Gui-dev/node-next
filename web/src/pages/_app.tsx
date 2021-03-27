import { AppProps } from 'next/app'

import GlobalStyle from './../styles/global'
import { ExperienceBar } from './../components/ExperienceBar'

export default function App ({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ExperienceBar />
      <Component { ...pageProps }/>
    </>
  )
}
