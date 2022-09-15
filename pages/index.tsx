import type { NextPage, GetServerSideProps } from 'next'
import Head from 'next/head'
import Reservations from '../components/Reservations'

const Home: NextPage = ({ cars }: any) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Car rental app made by Michał Piotrowski" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className='flex justify-center items-center m-4 text-3xl md:text-5xl p-4 border-b-2'>Car Renatal Service</h1>
        <Reservations cars={cars} />
      </main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const apiUrl = 'https://localhost:3001/api'
  let cars

  try {
    process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";
    const res = await fetch(apiUrl)
    cars = await res.json()
  } catch (err) {
    console.log(err)
  }

  return {
    props: {
      cars
    }
  }
}


export default Home
