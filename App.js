import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

import BackgroundAnimation from './component/BackgroundAnimation';

export default function App() {
  return (
    <Container>
      <Title>This project was used to study how to lead with Animated.</Title>
      <SubTitle>By - MateuVieira</SubTitle>
      <BackgroundAnimation />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #009953;
`;

const Title = styled.Text`
  font-size: 22px;
  line-height: 26px;
  text-align: center;
  color: #FFF;
`;

const SubTitle = styled.Text`
  font-size: 16px;
  line-height: 20px;
  color: #FFF;
`;