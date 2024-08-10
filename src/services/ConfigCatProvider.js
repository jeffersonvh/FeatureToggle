import React from 'react';
import { ConfigCatProvider as ConfigCatProviderReact } from 'configcat-react';

const ConfigCatProvider = ({ children }) => (
  <ConfigCatProviderReact sdkKey="configcat-sdk-1/UrfcCBz0TEuMcF0ZAS4uQA/kCUMwds9PEWvKKOma-qOMw">
    {children}
  </ConfigCatProviderReact>
);

export default ConfigCatProvider;
