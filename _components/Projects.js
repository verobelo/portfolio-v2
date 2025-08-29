'use client';

import Image from 'next/image';
import Link from 'next/link';
import { translations } from '@/_utils/translations';
import { useLanguageToggle } from '@/_contexts/LanguageContext';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'DentalCare Pro',
      key: 'dentalcare',
      image: '/project-dental.jpg',
      tags: ['React', 'OpenAI API', 'Next.js'],
      liveUrl: 'https://dentalcare-pro.vercel.app',
      githubUrl: 'https://github.com/veronika/dentalcare-pro',
      previewImage: '/dental.jpg',
    },
    {
      id: 2,
      title: 'NomadGym',
      key: 'nomadgym',
      image: '/project-nomadgym.jpg',
      tags: ['React', 'OpenAI API', 'Next.js'],
      liveUrl: 'https://nomadgym-pro.vercel.app',
      githubUrl: 'https://github.com/veronika/nomadgym',
      previewImage: '/nomad.jpg',
    },
  ];
  const { language } = useLanguageToggle();
  const t = translations[language].projects;
  const tUnder = translations[language].underConstruction;
  return (
    <section
      id='projects'
      className='py-10 lg:py-14 bg-white dark:bg-primary-dark '>
      <div className='max-w-7xl mx-auto px-5 w-full'>
        <div className='text-center mb-8 md:mb-16'>
          <h2 className='text-2xl md:text-3xl font-bold text-slate-800 dark:text-header-dark mb-3 md:mb-4'>
            {t.header1}
            <span className='text-indigo-600'> {t.header2}</span>
          </h2>
          <p className='text-lg md:text-xl text-slate-700 dark:text-body-text-dark max-w-2xl mx-auto'>
            {t.description}
          </p>
        </div>
        <div className='bg-yellow-50 flex flex-col gap-3 items-center justify-center dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-8'>
          <p className='text-base md:text-lg lg:text-xl font-semibold text-yellow-950 dark:text-yellow-400'>
            {tUnder.title}
          </p>
          <div className='flex gap-3 items-center'>
            <span className='text-yellow-600'>⚠️</span>
            <p className='text-yellow-800 dark:text-yellow-200 text-sm md:text-base lg:text-lg'>
              {tUnder.description}
            </p>
          </div>
        </div>
        {/*<div className='grid md:grid-cols-2 gap-8 lg:gap-12 mb-12'>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              t={t}
              translations={translations[language].projects[project.key]}
            />
          ))}
        </div>
        <div className='bg-gradient-to-r from-indigo-500/10 to-pink-500/10  rounded-2xl p-4 lg:p-6 border border-indigo-100'>
          <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
            <div>
              <h3 className='text-lg lg:text-xl font-bold bg-gradient-to-br from-indigo-400 to-pink-400 bg-clip-text text-transparent mb-2 dark:from-indigo-600 dark:to-pink-600'>
                {t.additional1}
              </h3>
              <p className='text-slate-800 dark:text-body-text-dark mb-2 md:mb-4 text-lg'>
                <span className='font-semibold'>
                  {t.additional2} <span className='md:hidden text-lg'>⚡</span>:{' '}
                </span>
                <span className='block md:inline text-base md:text-lg dark:text-body-text-dark'>
                  {t.additional3} 📎 {t.additional4} 📎 {t.additional5}
                </span>
              </p>
            </div>
            <div className='hidden md:block md:text-4xl'>⚡</div>
          </div>
        </div>*/}
      </div>
    </section>
  );
}

{
  /*function ProjectCard({ project, translations, t }) {
  return (
    <div className='group relative rounded-2xl shadow-sm border border-indigo-100/50 transition-all duration-300 overflow-hidden bg-white dark:bg-slate-800/50'>
      <div
        className='h-32 md:h-48 bg-gradient-to-br from-indigo-100 to-pink-100 relative lg:hidden'
        style={{
          backgroundImage: `url(${project.previewImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
        <div className='absolute inset-0 bg-black/40 flex items-center justify-center gap-3'>
          <Link
            href={project.liveUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='bg-gradient-to-r from-indigo-400 to-pink-400 text-white px-6 py-2 rounded-lg font-semibold text-sm'>
            Live
          </Link>
          <Link
            href={project.githubUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='bg-white/75 text-slate-800 px-4 py-2 rounded-lg font-semibold text-base flex items-center gap-2'>
            <Image src='/github.svg' alt='Github' width={16} height={16} />
            {t.code}
          </Link>
        </div>
      </div>

      <div className='p-4 md:p-6'>
        <div className='mb-3 md:mb-4'>
          <h3 className='text-xl md:text-2xl font-semibold mb-1 bg-gradient-to-br from-indigo-400 to-pink-400 bg-clip-text text-transparent dark:from-indigo-600 dark:to-pink-600'>
            {project.title}
          </h3>
          <p className='text-sm md:text-base italic text-slate-700 dark:text-body-text-dark'>
            {translations.subtitle}
          </p>
        </div>

        <div className='space-y-3 md:space-y-4'>
          <div>
            <h4 className='text-lg md:text-xl font-bold mb-1 text-slate-900 dark:text-header-dark'>
              {t.problem}
            </h4>
            <p className='text-base md:text-lg leading-relaxed text-slate-800 dark:text-body-text-dark'>
              {translations.problemDesc}
            </p>
          </div>

          <div>
            <h4 className='text-lg md:text-xl font-bold mb-1 text-slate-900 dark:text-header-dark'>
              {t.solution}
            </h4>
            <p className='text-base md:text-lg leading-relaxed text-slate-800 dark:text-body-text-dark'>
              {translations.solutionDesc}
            </p>
          </div>

          <div className='flex flex-wrap gap-2'>
            {project.tags.map((tag) => (
              <span
                key={tag}
                className='bg-gradient-to-r from-indigo-50 to-pink-50 dark:from-slate-800 dark:to-slate-700 text-slate-900 dark:text-body-text-dark text-sm md:text-base px-3 py-1 rounded-full font-semibold'>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      
      <div
        className='hidden lg:flex cursor-pointer absolute inset-0 opacity-0 group-hover:opacity-95 transition-opacity duration-300 items-center justify-center'
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${project.previewImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
        <div className='flex space-x-4'>
          <Link
            href={project.liveUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-md hover:bg-white/30 transition-colors font-bold'>
            Live Demo
          </Link>
          <Link
            href={project.githubUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-md hover:bg-white/30 transition-colors font-bold flex items-center gap-2'>
            <Image src='/github.svg' alt='Github' width={20} height={20} />
            {t.code}
          </Link>
        </div>
      </div>
    </div>
  );
}*/
}
