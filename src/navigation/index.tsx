import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackParamList } from 'src/types';
import LinkingConfiguration from 'src/navigation/LinkingConfiguration';
import IntroSlider from 'src/screens/IntroSlider';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={IntroSlider} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}>
      <RootNavigator />
    </NavigationContainer>
  );
}
