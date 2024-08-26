// src/components/App.js
import React, { useEffect, useState } from 'react';

import ConfigCatProvider from './services/ConfigCatProvider';
import GrowthBookProvider from './services/GrowthBookProvider';
import ConfigCat from './adapters/ConfigCat';
import FeatureFlagAdapter from './adapters/FeatureFlagAdapter';

const App = () => {
  const configCat = ConfigCat('my-feature');
  const featureFlagAdapter = FeatureFlagAdapter(configCat);

  const isFeatureEnabled = featureFlagAdapter.getFeatureStatus('my-feature');
  return (
    <div>
      {isFeatureEnabled ? (
        <p>Feature está habilitada!</p>
      ) : (
        <p>Feature está desabilitada!</p>
      )}
    </div>
  );
};

const AppWrapper = () => (
  <GrowthBookProvider>
    <ConfigCatProvider>
      <App />
    </ConfigCatProvider>
  </GrowthBookProvider>
);

export default AppWrapper;
