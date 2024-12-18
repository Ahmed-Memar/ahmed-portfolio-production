"use client"; // Marquer comme composant client

import { servicesData } from "@/lib/servicesData";
import { FaCheck } from "react-icons/fa";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

function ServicesCard() {
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
        threshold: 0.1, // La carte est visible lorsqu'au moins 10% est dans le viewport
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
    <div className="">
      <div className="grid gap-8 md:grid-cols-2">
        {servicesData.map((item, id) => {
          return (
            <div
                  key={id}
                  data-index={id}
                  ref={(el) => (cardsRef.current[id] = el)}
                  className={`rounded-xl shadow-md shadow-neutral-600/90 py-5 px-3 flex flex-col justify-between gap-2 
                    transform transition-transform duration-500 
                    ${visibleCards[id] ? 'opacity-100' : 'opacity-0'} 
                    hover:scale-105 hover:shadow-sky-800`}
                >
              <div>
                <h3 className="rounded-md shadow-md shadow-inherit mt-5 mb-10 title-green text-sm text-center font-black p-2 sm:text-xl">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base">{item.description}</p>
                <ul className="my-5">
                  {item.stack.map((stackItem, stackId) => (
                    <li key={stackId} className="flex items-center gap-2 my-2">
                      <div className="bg-green-900 rounded-full max-w-max p-1">
                        <FaCheck size={10} fill="gray" />
                      </div>
                      <span className="text-center text-xs sm:text-sm md:text-base">
                        {stackItem}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              {item?.contact ? (
                <Link
                  className="block text-center max-w-max mx-auto bg-pink-600 px-5 p-2 rounded-lg"
                  href="#contact"
                >
                  {item.price}
                </Link>
              ) : (
                <p className="text-center font-semibold max-w-max mx-auto px-5 py-2 rounded-lg opacity-85 text-green-500 shadow-md shadow-inherit">
                  {item.price}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ServicesCard;
