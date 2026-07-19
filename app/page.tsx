'use client';

import dynamic from 'next/dynamic';
import { PageModeProvider, usePageMode } from '@/context/PageModeContext';
import BackgroundAnimation from '@/components/Layout/BackgroundAnimation';
import Navigation from '@/components/Layout/Navigation';
import Hero from '@/components/Sections/Hero';
import PersonalHero from '@/components/Sections/PersonalHero';
import Footer from '@/components/Layout/Footer';
import useScrollSpy from '@/hooks/useScrollSpy';
import useIsAppsDomain from '@/hooks/useIsAppsDomain';

// Lazy load below-fold sections to reduce initial bundle size
const Skills = dynamic(() => import('@/components/Sections/Skills'));
const ReadMore = dynamic(() => import('@/components/Sections/ReadMore'));
const Experience = dynamic(() => import('@/components/Sections/Experience'));
const Projects = dynamic(() => import('@/components/Sections/Projects'));
const Apps = dynamic(() => import('@/components/Sections/Apps'));
const About = dynamic(() => import('@/components/Sections/About'));
const Articles = dynamic(() => import('@/components/Sections/Articles'));
const Poetry = dynamic(() => import('@/components/Sections/Poetry'));

const AppContent = () => {
  const { mode, hasSwitched } = usePageMode();
  const isAppsDomain = useIsAppsDomain();
  const modeSwitchClass = hasSwitched ? 'mode-switch' : '';

  const professionalSections = ['home', 'skills', 'experience', 'projects', 'articles', 'about', 'contact'];
  const personalSections = ['home', 'poetry', 'contact'];
  const appsDomainSections = ['apps', 'about', 'contact'];

  const sections = isAppsDomain
    ? appsDomainSections
    : mode === 'professional' ? professionalSections : personalSections;
  const { activeSection } = useScrollSpy(sections);

  return (
    <div className={`App${!isAppsDomain && mode === 'personal' ? ' personal-mode' : ''}`}>
      <BackgroundAnimation />
      <Navigation activeSection={activeSection} />
      <main>
        {isAppsDomain ? (
          <>
            <Apps />
            <About />
            <ReadMore />
          </>
        ) : mode === 'professional' ? (
          <div key="professional" className={modeSwitchClass}>
            <Hero />
            <Skills />
            <Experience />
            <Projects />
            <Articles />
            <About />
          </div>
        ) : (
          <div key="personal" className={modeSwitchClass}>
            <PersonalHero />
            <Poetry />
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default function Home() {
  return (
    <PageModeProvider>
      <AppContent />
    </PageModeProvider>
  );
}
