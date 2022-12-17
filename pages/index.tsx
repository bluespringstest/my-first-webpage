import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { JsonObjectExpressionStatement } from 'typescript'

const inter = Inter({ subsets: ['latin'] })

 interface data{
  data: [{
    id: string
  title: string,
  city: string,
  description: string,
  image: string,
  emails_registered: string[]
  }]
 }

export async function getServerSideProps() {
  const data = await import('../data/test.data.json');
  console.log(data.events_categories);
  return {
    props: {
      data: data.events_categories
    }
  }
}

export default function Home({data}: data) {
  return (
    <>
      <Head>
        <title>About me</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav>
          <img />
          <a href='/'>Home</a>
          <a href='/about-me'>About me</a>
          <a href='/key-moments'>Timeline of me</a>
          <a href=''>Current projects</a>
        </nav>
      </header>
      <main className={styles.main}>
        {
        data.map((me): JSX.Element => (
          <a key={me.id} href={`/key-moments/${me.id}`}>
              <Image alt='is a stock image' width={50} height={50} src={me.image} /> 
              <h2>{me.title}</h2>
            
            </a>))}
        <a href='/key-moments/sectionForLondon'>
          <img />
          <div>
          <h2>Section for London</h2>
          <p>Life in London pre-breakup</p>
          </div>
        </a>
        <a href='/key-moments/sectionForConsulting'>
          <img />
          <div>
          <h2>Section for consulting</h2>
          <p>Life post-breakup</p>
          </div>
        </a>
        <a href='/key-moments/sectionForPostCapita'>
          <img />
          <div>
          <h2>Section for post Capita</h2>
          <p>Life after consulting </p>
          </div>
        </a>
      </main>
      <footer className={styles.footer}>
          Foot the bill
        </footer>
    </>
  )
}