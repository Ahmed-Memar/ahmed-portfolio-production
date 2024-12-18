"use client";

import { useEffect, useRef, useState } from "react";
import { degreesData } from "@/lib/resumeData";
import Icon from "./Icon";
import { PiStudent } from "react-icons/pi";
import { FaBookReader } from "react-icons/fa";

function EducationCard() {
  const [isVisible, setIsVisible] = useState(false);
  const educationRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Déconnecte l'observateur après l'apparition
        }
      },
      { threshold: 0.1 } // Déclenche quand 10% de l'élément est visible
    );

    if (educationRef.current) {
      observer.observe(educationRef.current);
    }

    return () => {
      if (educationRef.current) {
        observer.unobserve(educationRef.current);
      }
    };
  }, []);

  return (
    <div ref={educationRef} className="shadow-md shadow-neutral-600/90 rounded-md py-5 px-2">
      <h2 className="shadow-md rounded-md shadow-neutral-700 mb-10 title-green text-2xl text-center font-black p-4 sm:text-3xl">
        Education
      </h2>
      <div className="flex flex-col md:flex-row justify-evenly gap-5 p-2 pb-6">
        <div
          className={`self-center bg-gray-400 p-10 rounded-full ${
            isVisible ? "animate-slide-in-left" : "opacity-0"
          }`}
        >
          <FaBookReader className="md:h-[180px] md:w-[180px]" fill="black" size={150} />
        </div>
        <div className="grid gap-5">
          {degreesData.map((item, id) => (
            <div
              className={`flex items-center gap-6 shadow-md shadow-neutral-600/90 rounded-md p-3 ${
                isVisible ? "animate-slide-in-right" : "opacity-0"
              }`}
              key={id}
            >
              <div>
                <Icon>
                  <PiStudent fill="black" size={60} />
                </Icon>
              </div>
              <div className="w-full max-w-md grid gap-1">
                <h3 className="title-green text-sm text-center rounded-md">{item.year}</h3>
                <p className="mb-1 text-xs sm:text-sm">{item.degree}</p>
                <p className="text-xs text-indigo-400 sm:uppercase sm:tracking-widest">
                  {item.university}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EducationCard;
