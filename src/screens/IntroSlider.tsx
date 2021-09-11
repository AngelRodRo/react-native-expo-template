import * as React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';

import { Slide } from 'src/components/Slide';
import { SlideIProps } from 'src/interfaces';

import { DONE_LABEL_SLIDER, NEXT_LABEL_SLIDER } from 'src/constants';

import { slides } from './slides';

export default function IntroSlider() : React.ReactElement {

  const renderItem = ({ item } : SlideIProps) => 
    <Slide item={item} />;

  return <AppIntroSlider 
    renderItem={renderItem}
    data={slides}
    doneLabel={DONE_LABEL_SLIDER}
    nextLabel={NEXT_LABEL_SLIDER}
  />;

}
