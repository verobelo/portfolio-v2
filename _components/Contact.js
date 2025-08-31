'use client';
import Image from 'next/image';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { translations } from '@/_utils/translations';
import { useLanguageToggle } from '@/_contexts/LanguageContext';
import { MoveUpRight } from 'lucide-react';

export default function Contact() {
  const { language } = useLanguageToggle();
  const t = translations[language].contact;

  const notify = () => {
    toast.success(t.toast);
  };

  function copyToClipboard() {
    const email = 'v.belozerova.dev@gmail.com';
    navigator.clipboard.writeText(email);
    notify();
  }

  return (
    <section
      id='contact'
      className='bg-gradient-to-br from-indigo-50/50 to-pink-50/50 dark:bg-primary-dark dark:bg-none py-16 md:py-18'>
      <div className='max-w-4xl mx-auto px-5 text-center'>
        <h2 className='text-2xl md:text-3xl font-bold text-slate-800 dark:text-header-dark mb-4 lg:mb-8'>
          {t.title1}
          <span className='text-indigo-700'>{t.title2}</span>
        </h2>

        <p className='text-lg md:text-xl text-slate-700 mb-12 max-w-4xl mx-auto dark:text-body-text-dark'>
          {t.description1} <span className='font-bold'>{t.description2}</span>{' '}
        </p>

        <ul className='grid justify-center md:grid-cols-3 gap-4 lg:gap-6 max-w-3xl mx-auto'>
          <li className='bg-white dark:bg-slate-800/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all hover:scale-105 border border-indigo-100 group text-lg w-50 md:w-auto'>
            <Link
              href='https://www.linkedin.com/in/veronika-belozerova/'
              target='_blank'
              rel='noopener noreferrer'>
              <div className='text-3xl mb-3 group-hover:scale-110 transition-transform flex items-center justify-center'>
                <Image
                  src='/linkedin.svg'
                  alt='Linkedin icon'
                  width={28}
                  height={28}
                  className='lg:w-[30px] lg:h-[30px]'
                />
              </div>
              <h3 className='flex items-center justify-center gap-2 font-semibold text-slate-700 dark:text-body-text-dark mb-1 text-base lg:text-lg'>
                <span>Linkedin</span>
                <MoveUpRight size={20} />
              </h3>
              <p className='text-sm md:text-base lg:text-lg text-slate-700 dark:text-muted-text-dark'>
                - {t.linkedin} -
              </p>
            </Link>
          </li>

          <li className='bg-white dark:bg-slate-800/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all hover:scale-105 border border-indigo-100 group text-lg w-50 md:w-auto flex flex-col justify-center items-center'>
            <Link
              href='https://github.com/verobelo'
              target='_blank'
              rel='noopener noreferrer'>
              <div className='text-3xl mb-3 group-hover:scale-110 transition-transform flex items-center justify-center'>
                <Image
                  src='/github-blue.svg'
                  alt='Github icon'
                  width={28}
                  height={28}
                  className='lg:w-[30px] lg:h-[30px]'
                />
              </div>
              <h3 className='flex items-center justify-center gap-2 font-semibold text-slate-700 dark:text-body-text-dark mb-1 text-base lg:text-lg'>
                <span>Github</span>
                <MoveUpRight size={18} />
              </h3>
              <p className='text-sm md:text-base lg:text-lg text-slate-700 dark:text-muted-text-dark'>
                - {t.github} -
              </p>
            </Link>
          </li>

          <li className='bg-white dark:bg-slate-800/50  p-6 rounded-2xl shadow-sm hover:shadow-md transition-all hover:scale-105 border border-indigo-100 group cursor-pointer w-50 md:w-auto'>
            <button
              className='cursor-pointer'
              type='button'
              aria-label='Copy email address'
              onClick={copyToClipboard}>
              <div className='text-3xl mb-3 group-hover:scale-110 transition-transform flex items-center justify-center'>
                <Image
                  src='/mail.svg'
                  alt='Email icon'
                  width={30}
                  height={30}
                />
              </div>
              <h3 className='font-semibold text-slate-700 dark:text-body-text-dark mb-1 text-base lg:text-lg'>
                {t.email}
              </h3>
              <p className='text-sm md:text-base lg:text-lg text-slate-700 dark:text-muted-text-dark'>
                - {t.emailComment} -
              </p>
            </button>
          </li>
        </ul>

        <div className='mt-12 bg-gradient-to-r from-indigo-500/10 to-pink-500/10 p-6 rounded-2xl border border-indigo-100 max-w-2xl mx-auto'>
          <p className='text-slate-700 dark:text-body-text-dark'>
            <span className='font-semibold text-base lg:text-lg'>
              {t.curr1}
            </span>
            {t.curr2}{' '}
            <Image
              src='/spain.svg'
              alt='Spanish flag'
              width={16}
              height={16}
              className='inline ml-1 -mt-2'
            />
            <br />
            <span className='font-semibold text-base lg:text-lg'>
              {t.curr3}
            </span>
            {t.curr4} (
            <Image
              src='/spain.svg'
              alt='Spanish flag'
              width={16}
              height={16}
              className='inline -mt-2'
            />
            )
          </p>
        </div>
      </div>
    </section>
  );
}
