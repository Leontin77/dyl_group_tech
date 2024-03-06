/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import Header from 'parts/Header';
import AboutUsInfo from 'parts/AboutUsInfo';
import HeroAboutUs from 'parts/HeroAboutUs';
import Footer from 'parts/Footer';

import Data from 'json/landingPage.json';

export default class AboutUs extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Header {...this.props} />
        <HeroAboutUs {...this.props} />
        <AboutUsInfo data={Data.technologies} />
        <Footer />
      </>
    );
  }
}
