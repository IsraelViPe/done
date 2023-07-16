import './globals.scss'
import { Dosis } from 'next/font/google'
import Image from 'next/image'

const inter = Dosis({ subsets: ['latin'] })

export const metadata = {
  title: 'done',
  description: 'Um app para gerenciamento de hábitos.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
       
          <header>
              <Image
              src={"/logo.png"}
              alt="logo"
              width={20}
              height={20}/>
            <span>done</span>
          </header>
        {children}
        </body>
    </html>
  )
}
