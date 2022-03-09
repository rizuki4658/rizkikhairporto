import Navbar from '../navbar'
import Footer from '../footer'
import Head from 'next/head';

interface LayoutType {
  statusCode?: number;
  children?: any
}


export default function Layout({statusCode, children}: LayoutType) {
  const code = statusCode ? statusCode.toString().split('') : []
  if (code.length) {
    if (code[0].includes('4') || code[0].includes('5')) {
      return (children)
    }
  }
  return (
    <>
      <Head>
        <title>Rizki Khair | Web Front-end Developer</title>
      </Head>
      <Navbar />
      <main>
        { children }
      </main>
      <Footer />
    </>
  )
}
