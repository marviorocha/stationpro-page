import Head from 'next/head'

import styles from '../styles/Home.module.css'
import Hero from './components/UI/hero'


export default function Home() {

  return (


    <div className={styles.container}>

      <Head>
        <title>Station Pro - Internet Radio Broadcasting</title>
        <meta name="description" content="Web Radio Streaming Player" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />


    </div>

  )
}
