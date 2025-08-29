import { Ovo } from 'next/font/google';
import './globals.css';
import { Toaster } from 'react-hot-toast';
import { DarkModeProvider } from '@/_contexts/DarkModeContext';
import { LanguageProvider } from '@/_contexts/LanguageContext';

const ovoFont = Ovo({
  subsets: ['latin'],
  weight: ['400'],
});

export const metadata = {
  metadataBase: new URL('https://veronikacodes.com'),
  title: 'Veronika Belozerova | React Developer Portfolio',
  description:
    'Customer-focused React developer building accessible, multilingual web applications. TypeScript, Next.js, Tailwind CSS. 10+ years service experience.',
  // OG
  openGraph: {
    title: 'Veronika Belozerova | React Developer Portfolio',
    description:
      'Customer-focused React developer building accessible, multilingual web applications. TypeScript, Next.js, Tailwind CSS. 10+ years service experience.',
    url: 'https://veronikacodes.com',
    siteName: 'Veronika Belozerova Portfolio',
    images: [
      {
        url: 'https://veronikacodes.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Veronika Belozerova - Customer-Centric React Developer',
      },
    ],
    locale: 'en_US',
    alternateLocale: ['es_ES'],
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${ovoFont.className} antialiased leading-8 overflow-x-hidden`}>
        <LanguageProvider>
          <DarkModeProvider>{children}</DarkModeProvider>
        </LanguageProvider>
        <Toaster
          position='bottom-center'
          toastOptions={{
            style: {
              background: '#10b981',
              color: 'white',
              fontSize: '16px',
            },
          }}
        />
        ç
      </body>
    </html>
  );
}
