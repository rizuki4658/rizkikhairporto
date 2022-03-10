import React from 'react';
import Navbar from '../navbar'
import Footer from '../footer'
import Head from 'next/head'

interface LayoutType {
  statusCode?: number;
  children?: any
}

export const getStatic = () => {
  return ({
    url: process.env.url
  })
}

const Layout: React.FC = ({statusCode, children}: LayoutType) => {
  const code = statusCode ? statusCode.toString().split('') : []
  if (code.length) {
    if (code[0].includes('4') || code[0].includes('5')) {
      return (children)
    }
  }
  const { url } = getStatic()

  getStatic()
    return (
      <>
        <Head>
          <title>Rizki Khair | Web Front-end Developer</title>
          <meta property="og:url" content={url} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Hey, I'm Rizki FrontEnd Developer" />
          <meta property="og:description" content="" />
          <meta property="og:image" content={`${url}/img/share-image.png`} />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@rizkikahir" />
          <meta name="twitter:creator" content="@rizkikhair" />
          <meta name="twitter:description" content="Hey, I'm Rizki FrontEnd Developer" />
          <meta name="twitter:image" content={`${url}/img/share-image.png`} />
        </Head>
        <Navbar />
        <main>
          { children }
        </main>
        <Footer />
      </>
    )
}

export default Layout