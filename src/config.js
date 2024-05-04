const defaultConfig = {
  // basename: only at build time to set, and Don't add '/' at end off BASENAME for breadcrumbs, also Don't put only '/' use blank('') instead,
  // like '/berry-material-react/react/default'
  basename: '/',
  defaultPath: '/',
  fontFamily: `'Roboto', sans-serif`,
  borderRadius: 12
};

// Retrieve values from local storage if they exist, otherwise use default values
const localStorageConfig = {
  basename: localStorage.getItem('basename') || defaultConfig.basename,
  defaultPath: localStorage.getItem('defaultPath') || defaultConfig.defaultPath,
  fontFamily: localStorage.getItem('fontFamily') || defaultConfig.fontFamily,
  borderRadius: parseInt(localStorage.getItem('borderRadius')) || defaultConfig.borderRadius
};

const config = {
  ...localStorageConfig
};

export default config;
