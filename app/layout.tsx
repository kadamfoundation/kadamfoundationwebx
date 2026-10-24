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
  title: 'Kadam Foundation — Young Steps Towards the Nation',
  description:
    'Youth-led nonprofit organization empowering communities through grassroots education, civic engagement, and social welfare across India.',
  openGraph: {
    title: 'Kadam Foundation — Young Steps Towards the Nation',
    description:
      'Youth-led nonprofit organization empowering communities through grassroots education, civic engagement, and social welfare across India.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kadam Foundation — Young Steps Towards the Nation',
    description:
      'Youth-led nonprofit organization empowering communities through grassroots education, civic engagement, and social welfare across India.',
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
