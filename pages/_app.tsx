import '../styles/style.scss'
import '../styles/animation.scss'
import type { AppProps } from 'next/app'
import Layout from '../components/template/layout'
import { CookiesProvider } from 'react-cookie'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CookiesProvider>
      <Layout {...pageProps} > <Component {...pageProps} /> </Layout>
    </CookiesProvider>
  )
}

export default MyApp
