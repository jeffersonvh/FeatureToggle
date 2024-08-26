import FeatureFlagInterface from './FeatureFlagInterface';

const FeatureFlagAdapter = (featureFlagInterface) => {

  const getFeatureStatus = (featureKey) => featureFlagInterface.getFeatureStatus(featureKey);

  return {
    getFeatureStatus
  };
};

export default FeatureFlagAdapter;
