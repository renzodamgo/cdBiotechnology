import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import { Navbar } from '../components/shared/navbar'
import { UpNavBar } from '../components/shared/upnavbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>CDBiotechnology - Venta y Mantenimiento de equipos de rayos X.</title>
        <meta name="description" content="Venta y mantenimiento de equipos médicos." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <UpNavBar />

      <Navbar />

      <main className={styles.main}>
        <section id={styles.slider}>

        </section>
        <section id={styles.stats}>

        </section>
        <section id={styles.marcas}>
          <div className={styles.container}>
            <div className={styles.titles}>

            <span className={styles.subtitle}>Partners</span>
            <h1 className={styles.title}>Marcas con las<br/> que trabajamos</h1>
            </div>
            <div className={styles.logos}>
              <img src="imgs/siemens_logo.svg" alt="" />
              <img src="imgs/philips_logo.svg" alt="" />
              <img src="imgs/ge_logo.png" alt="" />
              <img src="imgs/shimadzu_logo.svg" alt="" />
            </div>
          </div>


        </section>
      </main>


    </div>
  )
}
