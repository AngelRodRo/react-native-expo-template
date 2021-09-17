
import { NavigatorScreenParams } from '@react-navigation/native';

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
};

export type SlideItemType = {
  key: string | number;
  title: string;
  text: string;
  backgroundColor: string;
  imageSrc: string;
};


export type RootTabParamList = {
};


