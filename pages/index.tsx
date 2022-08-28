import type { NextPage } from 'next'
import Head from 'next/head'
import Reservations from '../components/Reservations'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Car rental app made by Michał Piotrowski" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className='flex justify-center items-center m-4 text-5xl p-4 border-b-2'>Car Renatal Service</h1>
        <Reservations />
      </main>
    </div>
  )
}

export default Home
