import React from 'react';
import { Image } from 'semantic-ui-react';
import BackgroundImageUrl from '../../../assets/images/home-wallpaper.jpeg';
import './IntroductionStyle.css';


const Introduction = () => (
  <div className="ui container-fluid banner-wallpaper-layout">
    <Image className="banner-wallpaper" src={BackgroundImageUrl} fluid centered />
  </div>
);

export default Introduction;
