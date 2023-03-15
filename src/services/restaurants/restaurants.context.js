import React, { useState, createContext, useEffect, useMemo } from 'react';

import { restaurantRequest, restaurantTransform } from './restaurants.service';

export const RestaurantContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  return (
    <RestaurantContext.Provider value={{ restaurants: [1, 2, 3] }}>
      {children}
    </RestaurantContext.Provider>
  );
};
