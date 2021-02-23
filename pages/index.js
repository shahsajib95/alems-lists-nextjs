import Head from 'next/head'
import Footer from '../comopnent/Footer'
import Navbar from '../comopnent/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>Homepage</h1>
      <p>Lorem Data Lorem Data Lorem Data Lorem Data Lorem Data Lorem Data Lorem Data Lorem Data Lorem Data Lorem Data Lorem Data Lorem Data</p>
      <p>Lorem Data Lorem Data Lorem Data Lorem Data Lorem Data Lorem Data Lorem Data Lorem Data Lorem Data Lorem Data Lorem Data Lorem Data</p>
      <Link href="/alems">
        <a>All Alems</a>
      </Link>
    </div>
  )
}
