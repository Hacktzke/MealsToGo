import * as React from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';
import { Card } from 'react-native-paper';

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
const Title = styled(Text)`
  color: ${(props) => props.theme.colors.ui.primary};
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.body};
`;

const Address = styled.Text``;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = 'Some Restaurant',
    icon,
    photos = [
      'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
    ],
    address = '100 Some Random Street',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover
        key={name}
        source={{ uri: photos[0] }}
      ></RestaurantCardCover>
      <Info>
        <Title>{name}</Title>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};