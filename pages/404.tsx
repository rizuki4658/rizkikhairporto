import Head from 'next/head'
import Link from 'next/link'


export default function Custom404() {
  return (
    <>
      <Head>
        <title>
          404: This page could not be found.
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <section
        className="min-h-screen flex items-center justify-center gap-x-8 gap-y-6 text-center md:text-left">
        <Link href="/">
          <a
            className="bg-primary-gradient flex items-center py-2 px-4 font-poppins font-bold text-2xl rounded-lg">
            404
          </a>
        </Link>
        <div className="w-1 bg-white h-14 rounded-lg" />
        <div className="font-poppins text-xl text-white">
          This page could not be found.
        </div>
      </section>
    </>
  )
}
