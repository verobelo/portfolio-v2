import Image from 'next/image';
import { translations } from '@/_utils/translations';
import { useLanguageToggle } from '@/_contexts/LanguageContext';

export default function Skills() {
  const skills = [
    { name: 'React 19', img: '/react.svg' },
    {
      name: 'Redux',
      img: '/redux.svg',
    },
    {
      name: 'TypeScript',
      img: '/typescript.svg',
    },
    {
      name: 'WCAG',
      img: '/acc.svg',
    },

    {
      name: 'Next.js 15',
      img: '/next.svg',
    },
    {
      name: 'Tailwind',
      img: '/tailwind.svg',
    },
    {
      name: 'REST APIs',
      img: '/api.svg',
    },
    { name: 'Git', img: '/git.svg' },
    { name: 'Vite / st', img: '/vitest.svg' },
    {
      name: 'AI',
      img: '/ai.svg',
    },
  ];
  const { language } = useLanguageToggle();
  const t = translations[language].skills;

  return (
    <section
      className='py-16 md:py-18 bg-gradient-to-br from-indigo-50/50 to-pink-50/50 dark:bg-primary-dark dark:bg-none '
      id='skills'>
      <div className='max-w-7xl mx-auto px-5'>
        <div className='text-center mb-12 lg:mb-16'>
          <h2 className='text-2xl md:text-3xl font-bold text-slate-800 mb-4 dark:text-header-dark'>
            {t.title1}
            <span className='text-indigo-600 dark:text-indigo-700'>
              {' '}
              {t.title2}
            </span>
          </h2>
        </div>

        <div className='grid md:grid-cols-2 gap-8 lg:gap-12'>
          <div>
            <h3 className='text-lg md:text-xl lg:text-2xl font-semibold text-slate-700 dark:text-header-dark mb-6 lg:mb-8 flex items-center gap-3'>
              <span className='w-2 h-8 bg-gradient-to-b from-indigo-400 to-pink-400 dark:from-indigo-600 dark:to-pink-600 rounded-full'></span>
              {t.stack}
            </h3>

            <div className='grid grid-cols-2 gap-3 lg:gap-4'>
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className='bg-white dark:bg-slate-800/50 p-3 md:p-4 rounded-2xl shadow-sm border border-indigo-100/50'>
                  <div className='flex items-center gap-2 md:justify-between md:gap-0'>
                    <Image
                      src={skill.img}
                      alt={`${skill.name} icon`}
                      width={24}
                      height={24}
                      className='md:w-[28px] md:h-[28px] lg:w-[30px] lg:h-[30px] flex-shrink-0'
                    />
                    <span className='font-semibold text-slate-700 dark:text-body-text-dark text-base lg:text-lg'>
                      {skill.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className='text-lg md:text-xl lg:text-2xl font-semibold text-slate-700 dark:text-header-dark mb-8 flex items-center gap-3'>
              <span className='w-2 h-8 bg-gradient-to-b from-indigo-400 to-pink-400 dark:from-indigo-600 dark:to-pink-600 rounded-full'></span>
              {t.soft}
            </h3>

            <div className='space-y-3 md:space-y-4 mb-6'>
              <div className='flex items-center gap-3 md:gap-4 bg-white dark:bg-slate-800/50 p-3 md:p-4 rounded-2xl shadow-sm border border-pink-100/50'>
                <div className='w-3 h-3 bg-gradient-to-r from-indigo-400 to-pink-400 dark:from-indigo-600 dark:to-pink-600 rounded-full'></div>
                <span className='font-medium text-slate-700 dark:text-body-text-dark text-base lg:text-lg'>
                  {t.soft1}
                </span>
              </div>

              <div className='flex items-center gap-3 md:gap-4 bg-white dark:bg-slate-800/50 p-3 md:p-4 rounded-2xl shadow-sm border border-pink-100/50'>
                <div className='w-3 h-3 bg-gradient-to-r from-indigo-400 to-pink-400 dark:from-indigo-600 dark:to-pink-600 rounded-full'></div>
                <span className='font-medium text-slate-700 dark:text-body-text-dark text-base lg:text-lg'>
                  {t.soft2}
                </span>
              </div>

              <div className='flex items-center gap-3 md:gap-4 bg-white dark:bg-slate-800/50 p-3 md:p-4 rounded-2xl shadow-sm border border-pink-100/50'>
                <div className='w-3 h-3 bg-gradient-to-r from-indigo-400 to-pink-400 dark:from-indigo-600 dark:to-pink-600 rounded-full'></div>
                <span className='font-medium text-slate-700 dark:text-body-text-dark text-base lg:text-lg'>
                  {t.soft3}
                </span>
              </div>

              <div className='bg-gradient-to-br from-indigo-500/10 to-pink-500/10 p-6 rounded-2xl border border-indigo-200'>
                <div className='flex flex-col items-center justify-center md:flex-row md:items-start gap-4'>
                  <div className='w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-indigo-400 to-pink-400 dark:from-indigo-600 dark:to-pink-600 rounded-full flex items-center justify-center flex-shrink-0'>
                    <span className='text-lg md:text-xl'>☕</span>
                  </div>
                  <div>
                    <h4 className='font-semibold text-slate-700 dark:text-body-text-dark mb-2 text-base md:text-lg text-center md:text-left lg:text-xl'>
                      {t.fun1}
                    </h4>
                    <p className='text-slate-700 dark:text-body-text-dark text-base md:text-lg leading-relaxed'>
                      {t.fun2}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
