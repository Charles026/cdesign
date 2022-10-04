import Head from 'next/head'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div className='antialiased font-sans '>
      <Head>
        <title>Charles Design Portfolio</title>
        <meta name="charles design about me" content="Generated by create next app"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <main className="flex flex-col">
        <div className="text-white text-center flex justify-center mt-20 h-180 items-center">
        Hello Charles!
        </div>
      </main>
    </div>
  )
}