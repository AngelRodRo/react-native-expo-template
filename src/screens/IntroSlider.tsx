import * as React from 'react';
import { View, Text } from 'react-native';

import AppIntroSlider from 'react-native-app-intro-slider';

const slides : SlideItemIProp[] = [
  {
    key: 1,
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    backgroundColor: '#59b2ab',
  },
  {
    key: 2,
    title: 'Title 2',
    text: 'Other cool stuff',
    backgroundColor: '#febe29',
  },
  {
    key: 3,
    title: 'Rocket guy',
    text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
    backgroundColor: '#22bcb5',
  }
];

type SlideItemIProp = {
    key: number;
    title: string;
    text: string;
    backgroundColor: string;
};

interface SlideIProps {
    item: SlideItemIProp;
}

export default function IntroSlider() : React.ReactElement {
  const renderItem = ({ item } : SlideIProps) => {
    return (
      <View style={{ backgroundColor: item.backgroundColor, flex: 1, alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Text style={{ color: 'white' }}>{item.title}</Text>
        <Text style={{ color: 'white' }}>{item.text}</Text>
      </View>
    );
  };

  const onDone = () => {};


  return <AppIntroSlider 
    renderItem={renderItem}
    data={slides}
    onDone={onDone}
  />;

}
