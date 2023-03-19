import React, { useContext, useState, useEffect } from 'react';
import MapView, { Marker, Callout } from 'react-native-maps';
import styled from 'styled-components/native';
import { Search } from '../components/search.component';
import { RestaurantContext } from '../../../services/restaurants/restaurants.context';
import { LocationContext } from '../../../services/location/location.context';
import { MapCallout } from '../components/map-callout.component';

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

export const MapScreen = ({ navigation }) => {
  const { location } = useContext(LocationContext);
  const { lat, lng, viewport } = location;
  const { restaurants } = useContext(RestaurantContext);
  const [latDelta, setLatDelta] = useState(0);

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;
    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport]);

  return (
    <>
      <Search />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant) => {
          return (
            <Marker
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
            >
              <Callout
                onPress={() => {
                  navigation.navigate('RestaurantDetail', { restaurant });
                }}
              >
                <MapCallout restaurant={restaurant} />
              </Callout>
            </Marker>
          );
        })}
      </Map>
    </>
  );
};
