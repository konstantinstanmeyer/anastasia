import Head from 'next/head'
import './globals.css'
import Navbar from "@/components/Navbar"

export const metadata = {
  title: 'Anastasia Stanmeyer',
  description: 'Personal Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link></link>
      </Head>
      <body className={""}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
