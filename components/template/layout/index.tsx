import React from 'react'
import { useRouter } from 'next/router'
import { LayoutType } from '../../../types'
import Navbar from '../navbar'
import Footer from '../footer'
import Head from 'next/head'

export const getStatic = () => {
  return ({
    url: process.env.url
  })
}

const Layout: React.FC = ({statusCode, children}: LayoutType) => {
  const router = useRouter()
  const isSetting = router.asPath.includes('settings')
  const isForm = router.asPath.includes('form')
  const isError = router.pathname.includes('404')
  const isDownload = router.pathname.includes('downloads')

  const { url } = getStatic()

  const checkRoute = () => {
    if (!isSetting && !isForm && !isError && !isDownload) return (
      <>
        <Navbar />
          <main>
          { children }
        </main>
        <Footer />
      </>
    )
    return children
  }

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
        { checkRoute() }
      </>
    )
}

export default Layout