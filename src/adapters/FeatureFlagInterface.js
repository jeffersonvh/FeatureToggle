export const FeatureFlagInterface = () => {
  const getFeatureStatus = (featureKey) => {
    throw new Error("Function 'getFeatureStatus' must be implemented.");
  };

  return {
    getFeatureStatus,
  };
};

export default FeatureFlagInterface;
