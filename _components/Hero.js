'use client';
import Image from 'next/image';
import Link from 'next/link';
import { translations } from '@/_utils/translations';
import { useLanguageToggle } from '@/_contexts/LanguageContext';

export default function Hero() {
  const { language } = useLanguageToggle();

  const t = translations[language].hero;
  return (
    <section
      className='min-h-screen flex flex-col pt-16 md:pt-36 xl:pt-48 pb-16 md:pb-18'
      id='home'>
      <div className='max-w-5xl mx-auto px-5 flex-1 flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 gap-8 lg:gap-12 items-center'>
          <div className='space-y-4 md:space-y-6 order-2 md:order-1'>
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 leading-tight text-center md:text-left dark:text-header-dark'>
              {t.header1}
              <span className='text-indigo-600'> {t.header2} </span>
              {t.header3}
            </h1>

            <div className='bg-gradient-to-r dark:bg-slate-800/50 dark:bg-none from-indigo-50 to-pink-50 p-4 lg:p-6 rounded-2xl border border-indigo-100'>
              <div className='grid grid-cols-3 gap-2 md:gap-4 text-center'>
                <div>
                  <div className='text-lg md:text-xl lg:text-2xl font-bold text-indigo-700'>
                    10
                  </div>
                  <div className='text-sm md:text-base lg:text-lg text-slate-600 dark:text-body-text-dark'>
                    {t.stats1}
                  </div>
                </div>
                <div>
                  <div className='text-lg md:text-xl lg:text-2xl font-bold text-indigo-700'>
                    4
                  </div>
                  <div className='text-sm md:text-base lg:text-lg text-slate-600 dark:text-body-text-dark'>
                    {t.stats2}
                  </div>
                </div>
                <div>
                  <div className='text-lg md:text-xl lg:text-2xl font-bold text-indigo-700'>
                    2+
                  </div>
                  <div className='text-sm md:text-base lg:text-lg text-slate-600 dark:text-body-text-dark'>
                    {t.stats3}
                  </div>
                </div>
              </div>
            </div>

            <p className='text-lg md:text-xl text-slate-700 leading-relaxed text-center md:text-left dark:text-body-text-dark'>
              {t.description1}
              <span className='font-semibold text-slate-800 dark:text-body-text-dark'>
                {' '}
                {t.description2}{' '}
              </span>
              {t.description3}
            </p>

            <div className='flex flex-col md:flex-row gap-3 items-center justify-center grow-0 md:grow md:justify-start mt-6 lg:mt-8'>
              <Link
                href='/'
                className='bg-white dark:bg-primary-dark text-indigo-600 border-2 border-indigo-600  px-5 md:px-6 py-2 md:py-3 rounded-full hover:bg-indigo-700 hover:text-white transition-all hover:scale-105 font-semibold shadow-lg text-base md:text-lg flex items-center gap-2 w-full sm:w-auto justify-center'>
                <Image
                  src='/case1.svg'
                  alt='Case icon'
                  width={18}
                  height={18}
                  className='hidden md:inline lg:hidden'
                />
                <span className='hidden md:inline lg:hidden'>{t.cvshort}</span>
                <span className='md:hidden lg:inline'> {t.cvlong}</span>
              </Link>

              <Link
                href='/certificates.pdf'
                target='_blank'
                rel='noopener noreferrer'
                className='border-2 border-pink-500 text-pink-600 px-5 md:px-6 py-2 md:py-3 rounded-full hover:bg-pink-500 hover:text-white transition-all font-semibold text-base md:text-lg flex items-center gap-2 w-full sm:w-auto justify-center'>
                <Image
                  className='hidden md:inline lg:hidden'
                  src='/scroll.svg'
                  alt='Certificate icon'
                  width={18}
                  height={18}
                />
                <span className='hidden md:inline lg:hidden'>
                  {' '}
                  {t.certsshort}
                </span>
                <span className='md:hidden lg:inline'> {t.certslong}</span>
              </Link>
            </div>
          </div>

          <div className='relative order-1 md:order-2 mb-6 md:mb-0 flex justify-center'>
            <div className='relative'>
              <Image
                quality={100}
                className='rounded-2xl object-cover shadow-2xl md:w-[350px] md:h-[430px] lg:w-[400px] lg:h-[500px]'
                src='/test2.webp'
                alt='Veronika image'
                width={300}
                height={380}
              />

              <div className='absolute -left-2 -bottom-6 bg-white p-3 lg:p-4 rounded-2xl shadow-xl border border-indigo-100 dark:bg-slate-800/90 '>
                <div className='flex items-center gap-2 lg:gap-3'>
                  <div className='w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-indigo-600 to-pink-500 rounded-full flex items-center justify-center'>
                    <span className='text-white font-bold text-lg lg:text-xl'>
                      🚀
                    </span>
                  </div>
                  <div>
                    <div className='font-bold text-sm lg:text-base text-slate-800 dark:text-header-dark'>
                      {t.curr1}
                    </div>
                    <div className='text-xs lg:text-sm text-slate-700  dark:text-muted-text-dark'>
                      {t.curr2}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='text-center hidden xl:flex xl:justify-center mt-40'>
          <Link
            href='#skills'
            className='inline-block animate-bounce hover:animate-none transition-all group'>
            <span className='group-hover:text-pink-600 transition-colors cursor-pointer font-bold text-xl dark:text-body-text-dark'>
              {t.cta1} <span className='text-pink-600'>{t.cta2}</span> ↓
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
