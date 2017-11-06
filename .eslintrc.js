module.exports = {
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true
    }
  },
    "extends": "eslint:recommended",
    "rules": {
      "no-undef": 0,
      "no-unused-vars": 0,
      "no-console": 0,
      "indent": ["error", 2, { "SwitchCase": 1 }],
      "max-len": ["error", { "code": 80 }],
      "no-trailing-spaces": ["error"],
      "comma-dangle": ["error", "never"],
      "semi": ["error", "always"],
      "object-curly-spacing": ["error", "always"]
    }
};
