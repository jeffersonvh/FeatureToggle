import React, { useEffect } from 'react';
import { GrowthBook, GrowthBookProvider as GrowthBookProviderReact } from "@growthbook/growthbook-react";

const gb = new GrowthBook({
  apiHost: "https://cdn.growthbook.io",
  clientKey: "sdk-lmLKL9O9FsYuRwrH",
  enableDevMode: true
});

const GrowthBookProvider = ({ children }) => {
  useEffect(() => {
    // Load features from the GrowthBook API
    gb.loadFeatures();
  }, []);
  
  return (
    <GrowthBookProviderReact growthbook={gb}>
      {children}
    </GrowthBookProviderReact>
  );
};

export default GrowthBookProvider;
