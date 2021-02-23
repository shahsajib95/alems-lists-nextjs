import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Developer List | Home</title>
        <meta name="keywords" content="developers"/>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>This is my <a target="_blank" href="http://shahsajib.me/">ShahSajib</a> first project on Next.js</p>
        <p className={styles.text}> I have learnt next.js. How to create a project, managing routes, dynamic routes and deploying project in vercel.</p>
        <Link href="/developers">
          <a className={styles.btn}>All developers</a>
        </Link>
      </div>
    </>
  )
}
