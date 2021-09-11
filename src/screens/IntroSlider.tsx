import * as React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';

import { Slide } from 'src/components/Slide';
import { SlideIProps } from 'src/interfaces';

import { slides } from './slides';

export default function IntroSlider() : React.ReactElement {
  const renderItem = ({ item, index } : SlideIProps) => 
    <Slide item={item} />;

  return <AppIntroSlider 
    renderItem={renderItem}
    data={slides}
  />;

}
