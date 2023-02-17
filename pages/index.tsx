import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Apple E-commerce</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
    </div>
  )
}

export default Home


//Pages directory to cos na zasadzie wbudowane routera w next.js - coś jak React Router DOM W vanilla React.js