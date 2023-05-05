import SideNavLayout from '@/components/SideNavLayout'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <body>
      <SideNavLayout>Main</SideNavLayout>
    </body>
  )
}
