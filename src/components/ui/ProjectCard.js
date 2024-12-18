"use client"; // Marquer comme composant client

import { projectsData } from "@/lib/resumeData";
import { skillsImage } from "@/lib/skillsImage";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function ProjectCard() {
  const [visibleCards, setVisibleCards] = useState({});
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.dataset.index;
            setVisibleCards((prevVisibleCards) => ({
              ...prevVisibleCards,
              [index]: true,
            }));
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <div className="my-10">
      <h2 className="shadow-md shadow-neutral-600/90 mb-10 title-green text-2xl text-center font-black py-4 sm:text-3xl rounded-md">
        Latest Projects
      </h2>

      <div className="grid gap-8 md:grid-cols-2">
        {projectsData.map((item, id) => {
          return (
            <div
              key={id}
              data-index={id}
              ref={(el) => (cardsRef.current[id] = el)}
              className={`shadow-md shadow-neutral-600/90 py-5 px-3 gap-2 rounded-2xl transform transition-transform duration-500 
                ${visibleCards[id] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
                hover:scale-105 hover:shadow-sky-800`}
            >
              <h3 className="shadow-md shadow-inherit mt-5 mb-10 title-green text-sm text-center font-black p-2 sm:text-xl rounded-md">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base mb-4">{item.desciption}</p>
              <p className="mt-5 text-sm text-indigo-400 sm:text-base">
                Technologies: {item.technologies}
              </p>
              <div className="flex flex-wrap gap-3 mt-5">
                {item.skills &&
                  item.skills.map((skill, index) => (
                    <div
                      key={index}
                      className="h-8 w-8 sm:h-10 sm:w-10 flex items-center justify-center"
                    >
                      <Image
                        src={skillsImage(skill)?.src}
                        alt={skill}
                        width={40}
                        height={40}
                        className="h-full w-auto rounded-lg"
                      />
                    </div>
                  ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectCard;
