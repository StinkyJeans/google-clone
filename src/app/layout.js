import { Inter } from 'next/font/google'
import './globals.css'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Google Clone',
  description: 'Google Clone created by Next js 13',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.svg"/>
      <body className={inter.className}>
        {children}
        
        {/*Footer*/}

        <Footer/>
        
        </body>
    </html>
  )
}
