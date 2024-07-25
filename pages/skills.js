// pages/skills.js
import Head from 'next/head'
import Header from '../components/Header'

export default function Skills() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Head>
        <title>Skills - Avery Tran</title>
        <meta name="description" content="Skills of Avery Tran" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex flex-col items-center justify-center flex-1 text-center p-4">
        <h1 className="text-4xl font-bold mt-8">Skills</h1>
        <ul className="mt-3 text-2xl max-w-4xl space-y-2">
          <li>R</li>
          <li>Python</li>
          <li>SQL</li>
          <li>SAS</li>
          <li>PowerBI</li>
          <li>Tableau</li>
        </ul>
      </main>

      <footer className="w-full bg-gray-800 text-white p-4 flex justify-center">
        <p>&copy; 2024 Avery Tran</p>
      </footer>
    </div>
  )
}
