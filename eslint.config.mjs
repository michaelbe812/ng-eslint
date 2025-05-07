// @ts-check
// import eslint from "@eslint/js"
import tseslint from "typescript-eslint";
// import angular from "angular-eslint";
import typescript from "./tools/eslint-configs/typescript.mjs";
import angular from "./tools/eslint-configs/angular.mjs";
import ngrx from "./tools/eslint-configs/ngrx.mjs";
import jasmin from "./tools/eslint-configs/jasmine.mjs";
import modernAngular from "./tools/eslint-configs/modern-angular.config.mjs";

export default tseslint.config(
  //...typescript,
  //...angular,
  //...ngrx,
  //...jasmin,
  ...modernAngular.minimal,
);

// export default tseslint.config(
//   {
//     files: ["**/*.ts"],
//     extends: [
//       eslint.configs.recommended,
//       ...tseslint.configs.recommended,
//       ...tseslint.configs.stylistic,
//       ...angular.configs.tsRecommended,
//     ],
//     processor: angular.processInlineTemplates,
//     rules: {
//       "@angular-eslint/directive-selector": [
//         "error",
//         {
//           type: "attribute",
//           prefix: "app",
//           style: "camelCase",
//         },
//       ],
//       "@angular-eslint/component-selector": [
//         "error",
//         {
//           type: "element",
//           prefix: "app",
//           style: "kebab-case",
//         },
//       ],
//     },
//   },
//   {
//     files: ["**/*.html"],
//     extends: [
//       ...angular.configs.templateRecommended,
//       ...angular.configs.templateAccessibility,
//     ],
//     rules: {},
//   }
// );
