/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from 'react';

import Fade from 'react-reveal/Fade';
import {
  Tab, Tabs, TabList, TabPanel,
} from 'react-tabs';

export default function AboutUsInfo({ data }) {
  const frontend = data.filter((item) => item.type === 'Frontend');
  const backend = data.filter((item) => item.type === 'Backend');
  const testing = data.filter((item) => item.type === 'Testing');
  const other = data.filter((item) => item.type === 'Other');
  const language = data.filter((item) => item.type === 'Language');
  const UI = data.filter((item) => item.type === 'UI');
  const stateManager = data.filter((item) => item.type === 'State Management');
  const mobile = data.filter((item) => item.type === 'Mobile');
  const firstTabRef = useRef(null);

  useEffect(() => {
    if (firstTabRef.current) {
      firstTabRef.current.focus();
    }
  }, []);

  return (
    <Fade bottom>
      <section className="container mx-auto">
        <h1 className="text-3xl text-theme-blue font-bold mx-5 mb-5">
          Utilized technologies
        </h1>
        <Tabs className="flex flex-col px-4">
          <TabList className="mb-10">
            <div className="flex flex-row flex-wrap mb-5 gap-4">
              <Tab>
                <button ref={firstTabRef} className="font-normal px-5 py-2 mr-3 text-theme-blue text-lg border border-theme-blue rounded-full transition duration-300 hover:bg-theme-blue hover:text-white focus:outline-none focus:bg-theme-blue focus:text-white">
                  All
                </button>
              </Tab>
              <Tab>
                <button className="font-normal px-5 py-2 mr-3 text-theme-blue text-lg border border-theme-blue rounded-full transition duration-300 hover:bg-theme-blue hover:text-white focus:outline-none focus:bg-theme-blue focus:text-white">
                  Language
                </button>
              </Tab>
              <Tab>
                <button className="font-normal px-5 py-2 mr-3 text-theme-blue text-lg border border-theme-blue rounded-full transition duration-300 hover:bg-theme-blue hover:text-white focus:outline-none focus:bg-theme-blue focus:text-white">
                  Front-end
                </button>
              </Tab>
              <Tab>
                <button className="font-normal px-5 py-2 mr-3 text-theme-blue text-lg border border-theme-blue rounded-full transition duration-300 hover:bg-theme-blue hover:text-white focus:outline-none focus:bg-theme-blue focus:text-white">
                  Mobile
                </button>
              </Tab>
              <Tab>
                <button className="font-normal px-8 py-2 text-theme-blue text-lg border border-theme-blue rounded-full transition duration-300 hover:bg-theme-blue hover:text-white focus:outline-none focus:bg-theme-blue focus:text-white">
                  Back-end
                </button>
              </Tab>
              <Tab>
                <button className="font-normal px-5 py-2 mr-3 text-theme-blue text-lg border border-theme-blue rounded-full transition duration-300 hover:bg-theme-blue hover:text-white focus:outline-none focus:bg-theme-blue focus:text-white">
                  UI Libreries
                </button>
              </Tab>
              <Tab>
                <button className="font-normal px-8 py-2 text-theme-blue text-lg border border-theme-blue rounded-full transition duration-300 hover:bg-theme-blue hover:text-white focus:outline-none focus:bg-theme-blue focus:text-white">
                  State Management
                </button>
              </Tab>
              <Tab>
                <button className="font-normal px-8 py-2 text-theme-blue text-lg border border-theme-blue rounded-full transition duration-300 hover:bg-theme-blue hover:text-white focus:outline-none focus:bg-theme-blue focus:text-white">
                  Testing
                </button>
              </Tab>
              <Tab>
                <button className="font-normal px-5 py-2 mr-3 text-theme-blue text-lg border border-theme-blue rounded-full transition duration-300 hover:bg-theme-blue hover:text-white focus:outline-none focus:bg-theme-blue focus:text-white">
                  Other
                </button>
              </Tab>
            </div>
          </TabList>
          <TabPanel>
            <div className="flex flex-row ml-1 flex-wrap gap-3">
              {data.map((stack) => (
                <div className="mr-4 px-6 py-3 text-theme-blue border border-theme-green rounded-full shadow-lg">
                  {stack.name}
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="flex flex-row ml-1 flex-wrap gap-3">
              {language.map((stack) => (
                <div className="mr-4 px-6 py-3 text-theme-blue border border-theme-green rounded-full shadow-lg">
                  {stack.name}
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="flex flex-row ml-1 flex-wrap gap-3">
              {frontend.map((stack) => (
                <div className="mr-4 px-6 py-3 text-theme-blue border border-theme-green rounded-full shadow-lg">
                  {stack.name}
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="flex flex-row ml-1 flex-wrap gap-3">
              {mobile.map((stack) => (
                <div className="mr-4 px-6 py-3 text-theme-blue border border-theme-green rounded-full shadow-lg">
                  {stack.name}
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="flex flex-row ml-1 flex-wrap gap-3">
              {backend.map((stack) => (
                <div className="mr-4 px-6 py-3 text-theme-blue border border-theme-green rounded-full shadow-lg">
                  {stack.name}
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="flex flex-row ml-1 flex-wrap gap-3">
              {UI.map((stack) => (
                <div className="mr-4 px-6 py-3 text-theme-blue border border-theme-green rounded-full shadow-lg">
                  {stack.name}
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="flex flex-row ml-1 flex-wrap gap-3">
              {stateManager.map((stack) => (
                <div className="mr-4 px-6 py-3 text-theme-blue border border-theme-green rounded-full shadow-lg">
                  {stack.name}
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="flex flex-row ml-1 flex-wrap gap-3">
              {testing.map((stack) => (
                <div className="mr-4 px-6 py-3 text-theme-blue border border-theme-green rounded-full shadow-lg">
                  {stack.name}
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="flex flex-row ml-1 flex-wrap gap-3">
              {other.map((stack) => (
                <div className="mr-4 px-6 py-3 text-theme-blue border border-theme-green rounded-full shadow-lg">
                  {stack.name}
                </div>
              ))}
            </div>
          </TabPanel>
        </Tabs>
        <h1 className="text-3xl text-theme-blue font-bold mx-5 mt-14 text-center">
          About DYL Group Tech
        </h1>
        <div className="mx-5 mt-10 mb-8 font-light text-xl text-black-400 leading-relaxed">
          <p style={{ textIndent: '40px' }}>
            Our team is composed of highly motivated individuals, each driven by
            a passion for crafting elegant and efficient code. With extensive
            experience in real commercial projects spanning over 3.5 years, we
            bring a wealth of expertise to every endeavor. Our proficiency
            extends across a wide array of technologies, ensuring that we
            deliver cutting-edge solutions tailored to meet the unique needs of
            our clients.
          </p>
          <br />
          <p style={{ textIndent: '40px' }}>
            Leveraging our strong command of HTML, CSS (including SCSS), and
            JavaScript (ES6), we create dynamic and visually appealing web
            applications. Additionally, our mastery of TypeScript enhances the
            scalability and maintainability of our codebase.
          </p>
          <br />
          <p style={{ textIndent: '40px' }}>
            We are adept at harnessing the power of leading front-end frameworks
            such as React, Vue.js, and Angular to build robust and responsive
            user interfaces. Our proficiency in Redux (including Redux-Toolkit)
            enables seamless state management, while our expertise in Ionic
            empowers us to develop high-performance cross-platform mobile
            applications. In the realm of backend development, we excel in
            implementing WebSocket and REST API protocols to facilitate
            real-time communication and data exchange.
          </p>
          <br />
          <p style={{ textIndent: '40px' }}>
            Our familiarity with frameworks like Next.js and Nuxt.js enhances
            our capabilities in building server-side rendered and static web
            applications. Furthermore, our dedication to quality assurance is
            evident through our utilization of JEST for comprehensive testing of
            our applications. We embrace modern development practices such as
            Styled Components for modular and maintainable styling, while our
            proficiency in Git ensures efficient collaboration and version
            control.
          </p>
          <br />
          <p style={{ textIndent: '40px' }}>
            At DYL Group Tech, we prioritize transparency and collaboration in
            our workflow. Leveraging tools such as Jira and Bitbucket
            (Atlassian), we streamline project management and foster seamless
            communication within our team. Our commitment to delivering
            exceptional user experiences is further augmented by our proficiency
            in design tools like Figma. By seamlessly integrating design and
            development processes, we ensure that our solutions are not only
            functional but also aesthetically pleasing.
          </p>
          <br />
          <p style={{ textIndent: '40px' }}>
            In summary, at DYL Group Tech, we are dedicated to pushing the
            boundaries of technological innovation. With a relentless focus on
            continuous learning and improvement, we are poised to tackle even
            the most complex challenges and deliver transformative solutions
            that exceed expectations.
          </p>
        </div>
      </section>
    </Fade>
  );
}
