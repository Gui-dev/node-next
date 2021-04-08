import Head from 'next/head'
import { AppProps } from 'next/app'

import GlobalStyle from './../styles/global'

export default function App ({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Moveit</title>
      </Head>
      <GlobalStyle />
      <Component { ...pageProps }/>
    </>
  )
}
