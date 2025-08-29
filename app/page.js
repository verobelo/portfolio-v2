'use client';
import Contact from '@/_components/Contact';
import Hero from '@/_components/Hero';
import Navbar from '@/_components/Navbar';
import Projects from '@/_components/Projects';
import SectionSeparator from '@/_components/SectionSeparator';
import Skills from '@/_components/Skills';
import { useLanguageToggle } from '@/_contexts/LanguageContext';
import { translations } from '@/_utils/translations';
import ScrollToTop from 'react-scroll-to-top';

export default function Home() {
  const { language } = useLanguageToggle();
  const t = translations[language].footer;
  return (
    <div className='grid grid-rows-[auto_1fr_auto] dark:bg-primary-dark'>
      <Navbar />
      <main className='mt-10 md:mt-0 lg:mt-24 md:mx-10'>
        <Hero />
        <SectionSeparator variant='shadow' className='hidden dark:flex' />
        <Skills />
        <SectionSeparator variant='shadow' className='hidden dark:flex' />
        <Projects />
        <SectionSeparator variant='shadow' className='hidden dark:flex' />
        <Contact />
        <SectionSeparator variant='shadow' className='hidden dark:flex' />
      </main>
      <footer className='p-3 lg:p-6 text-center text-slate-800 dark:text-muted-text-dark leading-tight md:leading-relaxed'>
        <small className='text-xs lg:text-sm'>{t}</small>
      </footer>
      <div className='md:hidden'>
        <ScrollToTop
          aria-label='Scroll to Top'
          smooth
          color='#db2777'
          style={{
            backgroundColor: 'rgb(99 102 241 / 0.5)',
            boxShadow: 'none',
            right: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />
      </div>
    </div>
  );
}
