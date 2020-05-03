import styled from 'styled-components/native';

export const BackgoundImage = styled.ImageBackground.attrs({
  imageStyle: {
    width: '400%',
    height: '400%',
    transform: [
      {
        translateX: -300,
      },
      {
        translateY: -300,
      },
      {
        rotate: '-45deg',
      },
    ],
  },
})`
  position: absolute;
  top: -100%;
  left: 0;
  flex: 1;
  width: 100%;
  height: 100%;
  opacity: 0.1;
`;
