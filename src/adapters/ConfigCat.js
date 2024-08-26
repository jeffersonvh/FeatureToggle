import { useFeatureFlag } from 'configcat-react';

export const ConfigCat = () => {
  const { value: isFeatureEnabled } = useFeatureFlag(featureKey, false);

  const getFeatureStatus = () => {
    return isFeatureEnabled;
  };

  return {
    getFeatureStatus
  };
};

export default ConfigCat;
