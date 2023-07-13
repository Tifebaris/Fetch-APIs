import Link from "next/link"

export default function Navbar() {
  return (
    <nav>
    <ul className="flex justify-evenly text-xl capitalize h-[50px] bg-sky-600 text-white items-center">
        <Link href='/'>
            <li>All</li>
        </Link>
        <Link href='/Africa'>
            <li>Africa</li>
        </Link>
        <Link href='/Europe'>
            <li>Europe</li>
        </Link>
        <Link href='/Asia'>
            <li>Asia</li>
        </Link>
        <Link href='/Oceania'>
            <li>Oceania</li>
        </Link>
    </ul>
   </nav>
  )
}
