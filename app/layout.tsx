import Head from 'next/head'
import './globals.css'

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
      <body className={""}>{children}</body>
    </html>
  )
}
