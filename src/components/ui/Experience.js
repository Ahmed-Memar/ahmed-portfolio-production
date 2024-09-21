"use client"; // Marquer comme composant client

import { experiencesData } from "@/lib/resumeData";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function Experience() {
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
        threshold: 0.01,
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
    <div className="my-5">
      <h2 className="shadow-md shadow-gray-600/90 mb-10 title-green text-2xl text-center font-black p-4 rounded-md sm:text-3xl">
        Experiences
      </h2>

      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2">
        {experiencesData.map((item, id) => {
          return (
            <div
              key={id}
              data-index={id}
              ref={(el) => (cardsRef.current[id] = el)}
              className={`shadow-md shadow-neutral-600/90 py-5 px-3 gap-2 rounded-2xl 
              transform transition-transform duration-1000 
              hover:scale-105 hover:shadow-sky-800 
              ${visibleCards[id] ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
            >
              <h3 className="shadow-md shadow-inherit mt-5 mb-10 title-green text-sm text-center font-black p-2 sm:text-xl rounded-md">
                {item.title}
              </h3>
              <p className="text-pink-600 uppercase tracking-widest text-xs sm:text-sm text-center">
                {item.date}
              </p>
              <p className="text-sky-600 uppercase tracking-widest font-semibold text-xs sm:text-sm text-center">
                {item.company}
              </p>
              {item.image && (
                <Image
                  src={item.image.url}
                  alt={item.image.title}
                  width={400}
                  height={300}
                  className="mx-auto rounded-xl shadow-md shadow-slate-600 items-center"
                />
              )}
              <div className="text-sm sm:text-base text-center">
                {item.desciption.map((ligne, index) => (
                  <p key={index}> {ligne} </p>
                ))}
              </div>
              <p className="text-indigo-400 mt-4 text-sm sm:text-sm text-center">
                {id === 0 ? "Skills acquired: " : "Skills acquired: "}
                {item.technologies}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Experience;
