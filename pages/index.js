import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../component/navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-3xl font-bold underline">
      Hello Charles!
    </h1>


    </div>
  )
}
