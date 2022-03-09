import type { NextPageContext } from 'next'
import Head from 'next/head'
import Link from 'next/link'

interface ErrorComponentProps {
	statusCode?: number;
}

function Error({ statusCode }: ErrorComponentProps): JSX.Element {
  return (
    <>
      <Head>
        <title>
          { statusCode ? `${statusCode}: This page could not be found.` : 'Something is going wrong.'  }
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <section
        className="min-h-screen flex items-center justify-center gap-x-8 gap-y-6 text-center md:text-left">
        <Link href="/">
          <a
            className="bg-primary-gradient flex items-center py-2 px-4 font-poppins font-bold text-2xl rounded-lg">
            {statusCode}
          </a>
        </Link>
        <div className="w-1 bg-white h-14 rounded-lg" />
        <div className="font-poppins text-xl text-white">
          { statusCode ? `This page could not be found.` : 'Something is going wrong.'  }
        </div>
      </section>
    </>
  )
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error