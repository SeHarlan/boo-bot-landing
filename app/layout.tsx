import type { GetServerSideProps, Metadata } from 'next';
import clsx from 'clsx';
import './globals.css'
import { Oswald } from 'next/font/google'
import localFont from 'next/font/local'
import PixelBG from '@/components/PixelBg';
import Header from '@/components/Header';
import AuthProvider from '@/context/AuthProvider';
import { Session, getServerSession } from 'next-auth';
import { ReactNode } from 'react';
import { authOptions } from './api/auth/[...nextauth]/route';
import HelioProvider from '@/context/HelioProvider';
// import SolanaProvider from '@/context/SolanaProvider';


interface LayoutProps {
  children: ReactNode;
  pageProps: {
    session: Session;
    [key: string]: any;
  };
}


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
  twitter: {
    card: 'summary_large_image',
  }
}

export default async function RootLayout({
  children, 
}: LayoutProps) {
  const session = await getServerSession(authOptions)
  return (
    <html lang="en">
      <body className={clsx(avenir.variable, oswald.variable)}>
        {/* <SolanaProvider> */}
          <AuthProvider session={session}>
            <Header />
            {children}
            <PixelBG />
          </AuthProvider>
        {/* </SolanaProvider> */}
      </body>
    </html>
  )
}
