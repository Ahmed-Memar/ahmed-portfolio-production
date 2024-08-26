import React, { lazy, Suspense } from 'react'
import EducationCard from './ui/EducationCard';
import LoadingSkills from './ui/LoadingSkills';
import Experience from './ui/Experience';
import ProjectCard from './ui/ProjectCard';

const LazySkillsCard = lazy(() => import('./ui/SkillsCard'));

function Resume() {
  return (
    <section className="scroll-mt-20 p-4 mt-10" id="resume">
      <h2 className="title-blue text-3xl font-black mb-8 p-1 sm:text-5xl">Resume</h2>
      <Experience />
      <ProjectCard />
      <Suspense fallback={<LoadingSkills />} >
        <LazySkillsCard />
      </Suspense>
      <EducationCard />
    </section>
    );
}

export default Resume;