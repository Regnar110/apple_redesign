import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Landing from '../components/Landing'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Apple E-commerce</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main className='relative h-[200vh] bg-[#E7ECEE]'>
        <Landing />
      </main>
      <section className='relative z-40 -mt-[100vh] min-h-screen bg-[#1B1B1B]'>
        <h1 className='text-center txt-4xl font-medium 
          tracking-wide text-white md:text-5xl'>
          New Promos
        </h1>
      </section>
    </div>
  )
}

export default Home


//Pages directory to cos na zasadzie wbudowane routera w next.js - coś jak React Router DOM W vanilla React.js

