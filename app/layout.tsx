import type { Metadata } from 'next';
import { Lora, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Kadam SOS Foundation — Young Steps Towards the Nation',
  description:
    'Kadam SOS Foundation is a youth-led nonprofit working with communities through education, women’s empowerment, and youth development.',
  openGraph: {
    title: 'Kadam SOS Foundation — Young Steps Towards the Nation',
    description:
      'A youth-led foundation working with communities through education, women’s empowerment, and youth development.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kadam SOS Foundation — Young Steps Towards the Nation',
    description:
      'A youth-led foundation working with communities through education, women’s empowerment, and youth development.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${lora.variable} ${inter.variable} scroll-smooth`}>
      <body
        suppressHydrationWarning
        className="bg-surface-canvas text-text-primary font-body-md antialiased selection:bg-surface-clay-soft selection:text-text-primary min-h-screen flex flex-col justify-between"
      >
        <Navbar />
        <div className="flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
