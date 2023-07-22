import React, { createContext, useState } from 'react';

export const RouteContext = createContext();

const RouteProvider = ({ children }) => {
  const [clickedRoute, setClickedRoute] = useState(null);

  const handleRouteClick = (route) => {
    setClickedRoute(route);
  };

  return (
    <RouteContext.Provider value={{ clickedRoute, handleRouteClick }}>
      {children}
    </RouteContext.Provider>
  );
};
export default RouteProvider;
