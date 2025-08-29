import { useDarkMode } from '@/_contexts/DarkModeContext';
import { useLanguageToggle } from '@/_contexts/LanguageContext';
import { Moon, Sun } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { translations } from '@/_utils/translations';

export default function Navbar({}) {
  const { isDarkMode, setIsDarkMode } = useDarkMode();

  function handleModeToggle() {
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        setIsDarkMode((prev) => !prev);
      });
    } else {
      setIsDarkMode((prev) => !prev);
    }
  }

  const sideMenuRef = useRef();
  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)';
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)';
  };
  const { language, handleLanguageToggle } = useLanguageToggle();
  const t = translations[language].navbar;

  return (
    <header>
      <nav className='w-full md:fixed px-6 py-5 md:py-6 lg:px-8 xl:px-[8%] flex items-center justify-between z-50 bg-white/40 lg:backdrop-blur-md dark:bg-primary-dark dark:text-header-dark'>
        <Link
          href='/'
          className='inline-flex items-center gap-1 text-3xl font-medium '>
          <span className='text-slate-800 dark:text-header-dark'>Veronika</span>
          <span className='text-indigo-500 text-5xl -mt-3'>.</span>{' '}
        </Link>
        <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white/80 backdrop-blur-sm shadow-sm border border-indigo-100 text-xl dark:bg-slate-800/50 dark:border-border-dark'>
          <li>
            <Link
              href='#top'
              className='hover:text-indigo-500 transition-colors font-medium'>
              {t.home}
            </Link>
          </li>

          <li>
            <Link
              href='#skills'
              className='hover:text-indigo-500 transition-colors font-medium'>
              {t.skills}
            </Link>
          </li>

          <li>
            <Link
              href='#projects'
              className='hover:text-indigo-500 transition-colors font-medium'>
              {t.projects}
            </Link>
          </li>

          <li className='hidden md:block lg:hidden'>
            <Link
              href='#contact'
              className='hover:text-indigo-500 transition-colors font-medium'>
              {t.contactShort}
            </Link>
          </li>
        </ul>
        <div className='flex items-center gap-3'>
          <button
            onClick={handleLanguageToggle}
            className='hidden md:block px-3 py-2 hover:text-indigo-500 transition-colors cursor-pointer border border-slate-300 dark:border-border-dark rounded-md text-sm font-semibold'
            role='button'
            aria-label='Toggle language'>
            {language === 'en' ? 'ES' : 'EN'}
          </button>
          <button
            onClick={handleModeToggle}
            className='p-2 hover:text-indigo-500 transition-colors cursor-pointer'
            role='button'
            aria-label='Toggle dark mode'>
            {isDarkMode ? <Sun size={25} /> : <Moon size={25} />}
          </button>

          <Link
            href='#contact'
            className='hidden lg:flex items-center gap-3 px-8 py-2.5 bg-gradient-to-r from-indigo-400 to-pink-400 text-white font-semibold rounded-full hover:from-indigo-500 hover:to-pink-500 transition-all hover:scale-105 shadow-lg text-xl dark:from-indigo-600 dark:to-pink-600'>
            {t.contact}
          </Link>

          {/* Mobile Menu */}

          <button
            onClick={openMenu}
            className='block md:hidden p-2 hover:text-indigo-500 transition-colors'
            role='button'
            aria-label='Open mobile menu'>
            <Image
              className='block dark:hidden'
              src='/menu-black.png'
              alt='Navigation menu icon'
              width={24}
              height={24}
            />
            <Image
              className='hidden dark:block'
              src='/menu-white.png'
              alt='Navigation menu icon'
              width={24}
              height={24}
            />
          </button>
        </div>
        <ul
          ref={sideMenuRef}
          className='flex flex-col md:hidden gap-6 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-[50vh] bg-gradient-to-br from-indigo-100 to-pink-100 dark:from-indigo-900/20 dark:to-pink-900/20 dark:backdrop-blur-2xl backdrop-blur-sm shadow-2xl transition-transform duration-300'>
          <button
            onClick={closeMenu}
            role='button'
            aria-label='Close mobile menu'
            className='absolute right-6 top-6 p-2 hover:text-indigo-500 transition-colors'>
            <Image
              className='block dark:hidden'
              src='/close-black.png'
              alt='Close menu button icon'
              width={20}
              height={20}
            />
            <Image
              className='hidden dark:block'
              src='/close-white.png'
              alt='Close menu button icon'
              width={20}
              height={20}
            />
          </button>

          <li>
            <Link
              onClick={closeMenu}
              href='#top'
              className='block py-2 hover:text-indigo-500 transition-colors font-semibold'>
              {t.home}
            </Link>
          </li>

          <li>
            <Link
              onClick={closeMenu}
              href='#skills'
              className='block py-2 hover:text-indigo-500 transition-colors font-semibold'>
              {t.skills}
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              href='#projects'
              className='block py-2 hover:text-indigo-500 transition-colors font-semibold'>
              {t.projects}
            </Link>
          </li>
          <li className='flex items-center gap-3'>
            <button
              onClick={handleLanguageToggle}
              className='block md:hidden px-3 py-2 hover:text-indigo-500 transition-colors cursor-pointer border border-slate-300 dark:border-pink-500 rounded-md text-sm font-semibold'
              role='button'
              aria-label='Toggle language'>
              {language === 'en' ? 'ES' : 'EN'}
            </button>

            <Link
              href='#contact'
              className='lg:hidden flex items-center gap-3 px-8 py-2.5 bg-gradient-to-r from-indigo-400 to-pink-400 text-white font-semibold rounded-full dark:from-indigo-600 dark:to-pink-600 transition-all hover:scale-105 shadow-lg text-lg'>
              {t.contactShort}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
