// src/components/App.js
import React, { useEffect, useState } from 'react';
import useFeatureToggleAdapter from './services/featureToggleAdapter';
import ConfigCatProvider from './services/ConfigCatProvider';
import GrowthBookProvider from './services/GrowthBookProvider';

const App = () => {
  const { getFeatureStatus } = useFeatureToggleAdapter('my-feature');
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    const fetchFeatureToggle = () => {
      const enabled = getFeatureStatus();
      setIsEnabled(enabled);
    };

    fetchFeatureToggle();
  }, [getFeatureStatus]);

  return (
    <div>
      {isEnabled ? (
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
