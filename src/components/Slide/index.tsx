import React from 'react';
import styled from 'styled-components/native';

import { SlideIProps } from 'src/interfaces';

type containerTypes = {
  bgColor: string;
}

const StyledImage = styled.Image`
  width: 300px;
  height: 300px;
  margin: 10px;
`;

const Container = styled.View<containerTypes>`
	flex: 1;
	background-color: ${ props => props.bgColor };
	justify-content: center;
	align-items: center;
`;

const Title = styled.Text`
  font-size: 50px;
`;

const Summary = styled.Text`
  font-size: 12px;
`;

export const Slide = ({ item } : SlideIProps) : React.ReactElement => {
  return (
    <Container bgColor={item.backgroundColor}>
      <StyledImage source={{ uri: item.imageSrc }}/>
      <Title>{item.title}</Title>
      <Summary>{item.text}</Summary>
    </Container>
  );
};

