import { useFeatureFlag } from 'configcat-react';
import { useFeatureIsOn } from "@growthbook/growthbook-react";

const SERVICE = 'growthbook';

const useFeatureToggleAdapter = (featureKey) => {
  const { value: isFeatureEnabled } = useFeatureFlag(featureKey, false);
  const enabled = useFeatureIsOn(featureKey);

  const getFeatureStatus = () => {
    switch (SERVICE) {
      case 'configcat':
        return isFeatureEnabled;
      case 'growthbook':
        return enabled;
      default:
        throw new Error(`Unsupported service: ${SERVICE}`);
    }
  };

  return { getFeatureStatus };
};

export default useFeatureToggleAdapter;
