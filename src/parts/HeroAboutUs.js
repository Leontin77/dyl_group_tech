/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import Fade from 'react-reveal/Fade';

// import Team from 'assets/images/aboutUs.jpeg';

export default function HeroAboutUs() {
  return (
    <section className="hero sm:items-center lg:items-start sm:flex-row">
      <Fade bottom>
        <div className="w-full sm:w-1/2 flex flex-col px-5 mb-5 sm:mb-0 sm:px-12 sm:mt-6 lg:mt-6 xl:mt-20">
          <h1 className="text-6xl text-theme-blue font-bold leading-tight mb-5">
            About Us
          </h1>
          <p className="font-light text-2xl text-gray-400 leading-relaxed mt-10">
            At DYL Group Tech, we embody a culture of innovation and excellence
            in the realm of IT solutions.
          </p>
        </div>
        <div className="w-full sm:w-1/2 sm:pr-12">
          <div className="flex flex-wrap mt-20 w-full justify-center">
            <div className="h-40 border-2 flex justify-center items-center flex-row px-5 py-5 gap-5" style={{ width: '260px' }}>
              <h1 className="text-4xl text-theme-blue font-bold leading-tight">3+</h1>
              <p className="font-light text-xl text-400 text-theme-blue leading-relaxed text-center">Years of comercial experience</p>
            </div>
            <div className="h-40 border-2 flex justify-center items-center flex-row px-5 py-5 gap-5" style={{ width: '260px' }}>
              <h1 className="text-4xl text-theme-blue font-bold leading-tight">10+ </h1>
              <p className="font-light text-xl text-400 text-theme-blue leading-relaxed text-center">Successful completion of large projects</p>
            </div>
            <div className="h-40 border-2 flex justify-center items-center flex-row px-5 py-5 gap-5" style={{ width: '260px' }}>
              <h1 className="text-4xl text-theme-blue font-bold leading-tight">20+</h1>
              <p className="font-light text-xl text-400 text-theme-blue leading-relaxed text-center">Successful partnership agreements</p>
            </div>
            <div className="h-40 border-2 flex justify-center items-center flex-row px-5 py-5 gap-5" style={{ width: '260px' }}>
              <h1 className="text-4xl text-theme-blue font-bold leading-tight">100%</h1>
              <p className="font-light text-xl text-400 text-theme-blue leading-relaxed text-center">Satisfied users</p>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
}
