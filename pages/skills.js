import Head from 'next/head';
import Header from '../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faChartBar, faCode } from '@fortawesome/free-solid-svg-icons';

export default function Skills() {
  return (
    <>
      <Head>
        <title>Avery Tran - Skills</title>
        <meta name="description" content="Skills of Avery Tran" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black">
        <h1 className="text-5xl font-bold mb-8">Skills</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <FontAwesomeIcon icon={faDatabase} size="4x" className="mb-4 text-blue-500" />
            <p className="text-xl font-semibold">R</p>
          </div>
          <div className="flex flex-col items-center">
            <FontAwesomeIcon icon={faCode} size="4x" className="mb-4 text-yellow-500" />
            <p className="text-xl font-semibold">Python</p>
          </div>
          <div className="flex flex-col items-center">
            <FontAwesomeIcon icon={faDatabase} size="4x" className="mb-4 text-green-500" />
            <p className="text-xl font-semibold">SQL</p>
          </div>
          <div className="flex flex-col items-center">
            <FontAwesomeIcon icon={faDatabase} size="4x" className="mb-4 text-red-500" />
            <p className="text-xl font-semibold">SAS</p>
          </div>
          <div className="flex flex-col items-center">
            <FontAwesomeIcon icon={faChartBar} size="4x" className="mb-4 text-purple-500" />
            <p className="text-xl font-semibold">PowerBI</p>
          </div>
          <div className="flex flex-col items-center">
            <FontAwesomeIcon icon={faChartBar} size="4x" className="mb-4 text-pink-500" />
            <p className="text-xl font-semibold">Tableau</p>
          </div>
        </div>
      </div>
    </>
  );
}
