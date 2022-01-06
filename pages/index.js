import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import { Navbar } from './navbar'
import { UpNavBar } from './upnavbar'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CDBiotechnology - Venta y Mantenimiento de equipos de rayos X.</title>
        <meta name="description" content="Venta y mantenimiento de equipos médicos." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <UpNavBar />

      <Navbar />

      <main className={styles.main}>

      </main>


    </div>
  )
}
