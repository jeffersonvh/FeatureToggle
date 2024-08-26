import { useFeatureIsOn } from '@growthbook/growthbook-react';

export const GrowthBook = (featureKey) => {
  const { value: isFeatureEnabled } = useFeatureIsOn(featureKey);

  const getFeatureStatus = () => {
    return isFeatureEnabled;
  };

  return {
    getFeatureStatus
  };
}

export default GrowthBook;
