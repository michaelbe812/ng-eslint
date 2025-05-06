import tseslint from "typescript-eslint";
 import angular from "angular-eslint";
 import eslint from "@eslint/js"
export default tseslint.config(
  {
    files: ["**/*.ts"],
    extends: [
      ...angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      '@angular-eslint/prefer-on-push-component-change-detection': 'error',
    },
  },
  {
    files: ["**/*.html"],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    rules: {},
  }
);
