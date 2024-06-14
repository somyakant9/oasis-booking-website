import Link from "next/link";

export default function Navigation() {
  return (
    <div className="flex-col" >
        <Link href='/'>Home</Link>
        <Link href='/cabins'>Cabins</Link>
        <Link href='/about'>About</Link>
        <Link href='/account'>Your Account</Link>
    </div>
  )
}
