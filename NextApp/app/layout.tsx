import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { SessionProvider } from 'next-auth/react';
import { auth } from '@/auth';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'some cool name',
  description: 'Generated by create next app',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body
          className={`bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-sky-400 to-blue-950 ${inter.className}`}
        >
          {children}
        </body>
      </html>
    </SessionProvider>
  );
}
