import Head from 'next/head'
import { AppProps } from 'next/app'

import GlobalStyle from './../styles/global'
import { ExperienceBar } from './../components/ExperienceBar'
import { Hooks } from './../hooks'

export default function App ({ Component, pageProps }: AppProps) {
  return (
    <Hooks>
      <Head>
        <title>Moveit</title>
      </Head>
      <GlobalStyle />
      <ExperienceBar />
      <Component { ...pageProps }/>
    </Hooks>
  )
}
