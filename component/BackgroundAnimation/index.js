import React, { useEffect } from 'react';
import { Animated, Easing } from 'react-native';

import backgroundImage from '../../assets/background.png';
import { BackgoundImage } from './styles';
import {
  INPUT_RANGE_START,
  INPUT_RANGE_END,
  OUTPUT_RANGE_START,
  OUTPUT_RANGE_END,
  ANIMATION_TO_VALUE,
  ANIMATION_DURATION,
} from '../../config/Constants';

export default function BackgroundAnimation() {
  const inicialValue = 0;
  const translateValue = new Animated.Value(inicialValue);

  useEffect(() => {
    const translate = () => {
      translateValue.setValue(inicialValue);
      Animated.timing(translateValue, {
        toValue: ANIMATION_TO_VALUE,
        duration: ANIMATION_DURATION,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start(() => translate());
    };

    translate();
  }, [translateValue]);

  const translateAnimation = translateValue.interpolate({
    inputRange: [INPUT_RANGE_START, INPUT_RANGE_END],
    outputRange: [OUTPUT_RANGE_START, OUTPUT_RANGE_END],
  });

  const AnimetedImage = Animated.createAnimatedComponent(BackgoundImage);

  return (
    <AnimetedImage
      source={backgroundImage}
      resizeMode="repeat"
      style={{
        zIndex: 10,
        transform: [
          {
            translateX: translateAnimation,
          },
          {
            translateY: translateAnimation,
          },
        ],
      }}
    />
  );
}
