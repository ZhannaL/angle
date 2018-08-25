module.exports = {
  "extends": "airbnb",
  "rules": {
    "react/prop-types": "off",
    "jsx-a11y/anchor-has-content": "off", 
     // `.jsx` extension cannot be used with React Native
     // https://github.com/airbnb/javascript/issues/982
     "react/jsx-filename-extension": ["error", { "extensions": [".js", ".jsx"] }]
  },
  "env": {
    "browser": true
  },
};
