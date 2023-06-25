module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "eslint:recommended",
    "@vue/eslint-config-typescript/recommended",
    "plugin:storybook/recommended",
  ],
  rules: {
    "vue/multi-word-component-names": "off",
  },
};
