import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useRouter } from "next/router";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();
  return (
    <div>red</div>
  )
}
