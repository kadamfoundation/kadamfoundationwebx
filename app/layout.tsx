import type { Metadata } from 'next';
import { Lora, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SITE_URL } from '@/lib/seo';

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
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Kadam SOS Foundation | Young Steps Towards the Nation',
    template: '%s | Kadam SOS Foundation',
  },
  alternates: {
    canonical: '/',
  },
  description:
    'Kadam SOS Foundation is a youth-led nonprofit working with communities through education, women’s empowerment, and youth development.',
  openGraph: {
    title: 'Kadam SOS Foundation | Young Steps Towards the Nation',
    description:
      'A youth-led foundation working with communities through education, women’s empowerment, and youth development.',
    type: 'website',
    url: SITE_URL,
    siteName: 'Kadam SOS Foundation',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary',
    title: 'Kadam SOS Foundation | Young Steps Towards the Nation',
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
