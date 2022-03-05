import type { ReactElement } from 'react'
import Navbar from '../navbar'
import Footer from '../footer'

// @ts-ignore
export default function Layout({children}) {
  return (
    <>
      <Navbar />
      <section>
        { children }
      </section>
      <Footer />
    </>
  )
}
