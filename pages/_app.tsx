import '../styles/style.scss'
import '../styles/animation.scss'
import type { AppProps } from 'next/app'
import Layout from '../components/template/layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (<Layout {...pageProps} > <Component {...pageProps} /> </Layout>)
}

export default MyApp
