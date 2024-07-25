// components/Header.js
import Link from 'next/link'

export default function Header() {
  return (
    <header className="w-full bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">Avery Tran</h1>
        <ul className="flex space-x-4">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/experience">Experience</Link></li>
          <li><Link href="/skills">Skills</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

