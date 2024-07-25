// pages/index.js
import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Head>
        <title>Avery Tran - Portfolio</title>
        <meta name="description" content="Portfolio website for Avery Tran" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex flex-col items-center justify-center flex-1 text-center">
        <h1 className="text-6xl font-bold mt-8">Welcome to My Portfolio</h1>
        <p className="mt-3 text-2xl">
          Graduate TA at UCF | MS Business Analytics '24 | BSBA Econ & Stats '23
        </p>
      </main>

      <footer className="w-full bg-gray-800 text-white p-4 flex justify-center">
        <p>&copy; 2024 Avery Tran</p>
      </footer>
    </div>
  )
}
