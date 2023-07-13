import './globals.scss'
import { Dosis } from 'next/font/google'
import Image from 'next/image'
import { GlobalContextProvider } from './context/store'

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
        <GlobalContextProvider>
          <header>
              <Image
              src={"/logo.png"}
              alt="logo"
              width={20}
              height={20}/>
            <span>done</span>
          </header>
        {children}
        </GlobalContextProvider>
        </body>
    </html>
  )
}
