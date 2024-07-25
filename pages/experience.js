// pages/experience.js
import Head from 'next/head'
import Header from '../components/Header'

export default function Experience() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Head>
        <title>Experience - Avery Tran</title>
        <meta name="description" content="Experience of Avery Tran" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex flex-col items-center justify-center flex-1 text-center p-4">
        <h1 className="text-4xl font-bold mt-8">Experience</h1>
        <div className="mt-3 text-2xl max-w-4xl space-y-4">
          <div>
            <h2 className="text-3xl font-semibold">Graduate Teaching Assistant</h2>
            <p>University of Central Florida | Aug 2023 - Present</p>
            <p>For Quantitative Business Statistics I and II (QMB 3003, QMB3200), Principles of Microeconomics (ECO2023), Principles of Macroeconomics (ECO2013)</p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold">Mobalytics Remote Extern</h2>
            <p>Extern - Internship | May 2024 - Jun 2024</p>
            <p>Data Analyst for Extern's MOBALytics May-June 2024.</p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold">Financial Analyst</h2>
            <p>Blackstone PortCo - Simply Self Storage - Internship | Jun 2023 - Aug 2023</p>
            <p>Contributed to PSA's $2.2 billion acquisition of Blackstone's BREIT through detailed reforecasting, leading to a 36% IRR in under 3 years.</p>
          </div>
        </div>
      </main>

      <footer className="w-full bg-gray-800 text-white p-4 flex justify-center">
        <p>&copy; 2024 Avery Tran</p>
      </footer>
    </div>
  )
}
