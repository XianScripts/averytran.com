import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="text-lg font-bold">
        <Link href="/">Avery Tran</Link>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/experience">Experience</Link></li>
          <li><Link href="/skills">Skills</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
