import React from 'react'
import ServicesCard from './ui/ServicesCard';

function Services() {
  return (
    <section className="scroll-mt-20 p-4 mt-10" id="services">
      <h2 className="title-blue text-3xl font-black mb-8 p-1 sm:text-5xl">Services</h2>
      <ServicesCard />
    </section>
  );
}

export default Services;