import React from 'react';
import { Platform } from 'react-native';
import styled from 'styled-components/native';
import { Text } from '../typography/text.component';
import Webview from 'react-native-webview';

const Item = styled.View`
  padding: 10px;
  width: 120px;
  align-items: center;
`;
const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const CompactWebview = styled(Webview)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const isAndroid = Platform.OS === 'android';

export const CompactRestaurantInfo = ({ restaurant, isMap }) => {
  const Image = isAndroid && isMap ? CompactWebview : CompactImage;
  return (
    <Item>
      <Image source={{ uri: restaurant.photos[0] }} />
      <Text>{restaurant.name}</Text>
    </Item>
  );
};
