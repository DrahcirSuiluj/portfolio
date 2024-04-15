import React, { useEffect, useRef } from 'react';
import Home from './Home';
import Skills from './Skills';
import TechStacks from './TechStacks';
import Experiences from './Experiences';
import AboutMe from './AboutMe';
import Contact from './Contact';

interface PageProp {
  sectionToScroll: number;
  setActiveSection: (index: number) => void;
  setSectionToScroll: (index: number) => void;
}

const Page: React.FC<PageProp> = ({ sectionToScroll, setActiveSection, setSectionToScroll }) => {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const techStacksRef = useRef<HTMLDivElement>(null);
  const experiencesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const sectionRefs = [homeRef, aboutMeRef,skillsRef, techStacksRef, experiencesRef, contactRef];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          switch (entry.target) {
            case homeRef.current:
              setActiveSection(0);
              break;
            case aboutMeRef.current:
              setActiveSection(1);
              break;
            case skillsRef.current:
              setActiveSection(2);
              break;
            case techStacksRef.current:
              setActiveSection(3);
              break;
            case experiencesRef.current:
              setActiveSection(4);
              break;
            case contactRef.current:
              setActiveSection(5);
              break;
            default:
              break;
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    if (homeRef.current) observer.observe(homeRef.current);
    if (aboutMeRef.current) observer.observe(aboutMeRef.current);
    if (skillsRef.current) observer.observe(skillsRef.current);
    if (techStacksRef.current) observer.observe(techStacksRef.current);
    if (experiencesRef.current) observer.observe(experiencesRef.current);
    if (contactRef.current) observer.observe(contactRef.current);

    if (sectionToScroll != -1) {
      setSectionToScroll(-1);
      sectionRefs[sectionToScroll].current?.scrollIntoView({ behavior: 'smooth' });
    }

    return () => {
      observer.disconnect();
    };
  }, [setActiveSection, sectionToScroll, sectionRefs]);

  return (
    <>
      <div ref={homeRef}><Home /></div>
      <div ref={aboutMeRef}><AboutMe /></div>
      <div ref={skillsRef}><Skills /></div>
      <div ref={techStacksRef}><TechStacks /></div>
      <div ref={experiencesRef}><Experiences /></div>
      <div ref={contactRef}><Contact /></div>
    </>
  );
};

export default Page;
