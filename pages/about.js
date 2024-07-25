// pages/about.js
import Head from 'next/head'
import Header from '../components/Header'
import Image from 'next/image'

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Head>
        <title>About Avery Tran</title>
        <meta name="description" content="About Avery Tran" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex flex-col items-center justify-center flex-1 text-center p-4">
        <h1 className="text-4xl font-bold mt-8">About Me</h1>
        <Image src="/profile.jpg" alt="Avery Tran" width={200} height={200} className="rounded-full mt-4" />
        <p className="mt-3 text-2xl max-w-4xl">
          As an aspiring data analyst on the verge of completing a Master’s in Business Analytics from UCF (expected August 2024), my foundation is solidified by a Bachelor’s in Business Economics and a minor in Statistics. My technical proficiency spans R, Python, SQL, SAS, and data visualization with PowerBI and Tableau, all sharpened by hands-on internships.
        </p>
      </main>

      <footer className="w-full bg-gray-800 text-white p-4 flex justify-center">
        <p>&copy; 2024 Avery Tran</p>
      </footer>
    </div>
  )
}
