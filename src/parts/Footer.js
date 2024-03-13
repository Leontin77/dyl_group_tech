/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import BrandIcon from 'parts/BrandIcon';
import Button from 'elements/Button';

export default function Footer() {
  return (
    <div className="bg-gray-50 border-t border-gray-200 pb-6">
      <div className="container flex-col mx-auto ">
        <div className="flex flex-col sm:flex-row mt-8 mb-12 justify-center">
          <div className="w-1/3 flex-col ml-16 mr-8">
            <BrandIcon />
            <p className="w-full mt-4 text-lg text-gray-400 font-light">
              Sealing the Deal
              {' '}
              <br />
              on Your Digital Dreams
            </p>
          </div>
          <div className="w-1/3 mt-0 ml-16 mr-0 sm:ml-0 sm:mr-5">
            <h1 className="text-xl text-theme-blue pt-4 pb-5">
              Office
            </h1>
            <a href="mailto:dyl.group.tech@ukr.net" className="text-lg text-gray-400 font-light hover:underline">
              dyl.group.tech@ukr.net
            </a>
            <p className="text-lg mt-2 text-gray-400 font-light">
              Lviv, Ukraine
            </p>
          </div>
          <div className="w-1/3 ml-16 sm:ml-0 mt-0">
            <h1 className="text-xl text-theme-blue pt-4 pb-5">
              Social
            </h1>
            {/* <Button href="https://www.instagram.com/racmathafidz/" type="link" target="_blank" className="flex text-lg text-gray-400 font-light hover:underline" isExternal>
              Instagram
            </Button> */}
            <Button href="https://www.linkedin.com/in/racmat-hafidz-89982a156/" type="link" target="_blank" className="flex text-lg text-gray-400 font-light hover:underline" isExternal>
              LinkedIn
            </Button>
            {/* <Button href="https://github.com/racmathafidz" type="link" target="_blank" className="flex text-lg text-gray-400 font-light hover:underline" isExternal>
              Github
            </Button> */}
          </div>
        </div>
        <div className="flex-col text-center mt-7">
          <p className="text-lg text-gray-400 font-light">
            Copyright 2021 - All rights reserved - DYLGroupTech
          </p>
          {/* <div className="flex-row">
            <p className="inline-block text-lg text-gray-400 font-light">
              Made with &#x2764; by&nbsp;
            </p>
            <Button href="https://github.com/racmathafidz" type="link" target="_blank" className="text-lg text-theme-blue font-light" isExternal>
              Racmat Hafidz Fadli
            </Button>
          </div> */}
        </div>
      </div>
    </div>
  );
}
