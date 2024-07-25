// pages/experience.js
import Head from 'next/head'
import Header from '../components/Header'

export default function Experience() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <Head>
        <title>Experience - Avery Tran</title>
        <meta name="description" content="Experience of Avery Tran" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex flex-col items-center justify-center flex-1 text-center p-4 max-w-5xl w-full">
        <h1 className="text-4xl font-bold mt-8 mb-4">Experience</h1>
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-3xl font-semibold">Graduate Teaching Assistant</h2>
          <p className="text-gray-600">University of Central Florida | Aug 2023 - Present</p>
          <p>For Quantitative Business Statistics I and II (QMB 3003, QMB3200), Principles of Microeconomics (ECO2023), Principles of Macroeconomics (ECO2013)</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-3xl font-semibold">Mobalytics Remote Extern</h2>
          <p className="text-gray-600">Extern - Internship | May 2024 - Jun 2024</p>
          <p>Data Analyst for Extern&apos;s MOBALytics May-June 2024.</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-3xl font-semibold">Financial Analyst</h2>
          <p className="text-gray-600">Blackstone PortCo - Simply Self Storage - Internship | Jun 2023 - Aug 2023</p>
          <p>Contributed to PSA&apos;s $2.2 billion acquisition of Blackstone&apos;s BREIT through detailed reforecasting, leading to a 36% IRR in under 3 years.</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-3xl font-semibold">Data Analyst</h2>
          <p className="text-gray-600">PureCycle Technologies - Internship | May 2022 - Aug 2022</p>
          <p>Improved key areas for the company&apos;s operational processes through exceptional industry research, digestible reports, and strong visualization tools for advanced analysis and innovation.</p>
          <ul className="list-disc list-inside text-left mt-2">
            <li>Constructed 2 databases (MRF Masterlist, Post-Consumer Recyclers) in Excel to improve business strategies, vendor relations, and market forecasting.</li>
            <li>Contacted 700+ material recovery sites and sustainability vendors to establish rapport, capture YoY operation data, and compile them into dynamic data trackers.</li>
            <li>Created 3 dashboards in PowerBI for company executives (“MRF Dashboard”, “Plastic Recyclers Dashboard”, “Florida Dashboard”) to provide an industry deep-dive into historic & newly released data.</li>
            <li>Analyzed YoY changes in market prices, tonnage, unique demographic insights, etc. by county, state, & nation.</li>
          </ul>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-3xl font-semibold">Market Research Intern</h2>
          <p className="text-gray-600">ecoSPEARS - Internship | Jun 2021 - Sep 2021</p>
          <p>Generated over 500 lead sites where ecoSPEARS technology may be applied. Tracked 100+ government databases (Federal Superfund sites, State Level Brownfields), compiled contact information for respective project managers, imported validated sites into Excel spreadsheets.</p>
          <ul className="list-disc list-inside text-left mt-2">
            <li>Analyzed and summarized dozens of recent grants, environmental initiatives, and policy changes for team members to take advantage of in client meetings and sale proposals.</li>
            <li>Drafted 50+ word documents compiling research of polluted areas, affected citizens, and raw data.</li>
            <li>Collaborated with marketing team to develop new ecoSPEARS website, draft executives&apos; biographies, mission statements, client technology solutions, and trial all links and images before publishing.</li>
          </ul>
        </div>
      </main>

      <footer className="w-full bg-gray-800 text-white p-4 flex justify-center">
        <p>&copy; 2024 Avery Tran</p>
      </footer>
    </div>
  )
}
