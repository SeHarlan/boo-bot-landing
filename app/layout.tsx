import type { Metadata } from 'next';
import clsx from 'clsx';
import './globals.css'
import { Oswald } from 'next/font/google'
import localFont from 'next/font/local'
import PixelBG from '@/components/PixelBg';
import Header from '@/components/Header';

const oswald = Oswald({
  variable: "--oswald",
  subsets:["latin"]
})
const avenir = localFont({
  variable: '--avenir',
  src: [
    {
      path: './fonts/Avenir Black.ttf',
      weight: '700',
    },
    {
      path: './fonts/Avenir Heavy.ttf',
      weight: '600',
    },
    {
      path: './fonts/Avenir Regular.ttf',
      weight: '500',
    },
    {
      path: './fonts/Avenir Book.ttf',
      weight: '400',
    },
    {
      path: './fonts/Avenir Light.ttf',
      weight: '300',
    },
  ],
});

export const metadata: Metadata = {
  title: 'Boo Bot',
  description: 'Next Gen Web3 services for your Discord server',

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={clsx(avenir.variable, oswald.variable)}>
        <Header />
        {children}
        <PixelBG />
      </body>
    </html>
  )
}
