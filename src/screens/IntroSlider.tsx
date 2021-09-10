import * as React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';

import { Slide } from '~components/Slide';
import { SlideIProps } from '~interfaces';

import { slides } from './slides';

export default function IntroSlider() : React.ReactElement {
  const renderItem = ({ item } : SlideIProps) => 
    <Slide item={item} />;

  const onDone = () => {};

  return <AppIntroSlider 
    renderItem={renderItem}
    data={slides}
    onDone={onDone}
  />;

}
