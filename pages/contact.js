// pages/contact.js
import Head from 'next/head'
import Header from '../components/Header'

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Head>
        <title>Contact - Avery Tran</title>
        <meta name="description" content="Contact Avery Tran" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex flex-col items-center justify-center flex-1 text-center p-4">
        <h1 className="text-4xl font-bold mt-8">Contact</h1>
        <p className="mt-3 text-2xl">
          You can reach me via email at <a href="mailto:averyjtran@gmail.com" className="text-blue-500">averyjtran@gmail.com</a>
        </p>
      </main>

      <footer className="w-full bg-gray-800 text-white p-4 flex justify-center">
        <p>&copy; 2024 Avery Tran</p>
      </footer>
    </div>
  )
}
