import { NavigatorScreenParams } from '@react-navigation/native';

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
};

export type RootTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type SlideItemType = {
  key: number;
  title: string;
  text: string;
  backgroundColor: string;
  imageSrc: string;
};