import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black">
      <Head>
        <title>Avery Tran - Portfolio</title>
        <meta name="description" content="Portfolio website for Avery Tran" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex flex-col items-center justify-center flex-1 text-center p-4">
        <h1 className="text-6xl font-bold mt-8">Welcome to My Portfolio</h1>
        <p className="mt-3 text-2xl max-w-2xl">
          Graduate TA at UCF | MS Business Analytics '24 | BSBA Econ & Stats '23
        </p>
        <p className="mt-6 text-lg max-w-2xl">
          I am passionate about leveraging data to drive business insights and innovations. Explore my portfolio to see my experience and skills in data analysis, business economics, and more.
        </p>
        <a href="/about" className="mt-8 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
          Learn More About Me
        </a>
      </main>

      <footer className="w-full bg-gray-800 text-white p-4 flex justify-center">
        <p>&copy; 2024 Avery Tran</p>
      </footer>
    </div>
  )
}


