// @ts-check
import eslint from "@eslint/js";
import angular from "angular-eslint";
import rxjs from "eslint-plugin-rxjs-x";
import globals from "globals";
import tseslint from "typescript-eslint";
import {
  ANGULAR_COMPONENT_FILE_PATTERNS,
  ANGULAR_PIPE_FILE_PATTERNS,
  HTML_FILE_PATTERNS,
  negatePatterns,
  STORYBOOK_FILE_PATTERNS,
  TEST_FILE_PATTERNS,
  TEST_FILE_PATTERNS_INLINE_TEMPLATES,
  TYPESCRIPT_FILE_PATTERNS,
} from "./util/patterns.mjs";
import {
  NAMING_CONVENTION_OPTIONS_ANGULAR,
  NAMING_CONVENTION_OPTIONS_STORYBOOK,
} from "./util/rule-options.mjs";
import typescript from "./typescript.mjs";

const recommended = tseslint.config(
  {
    files: ["**/*.ts"],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "app",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "app",
          style: "kebab-case",
        },
      ],
      "@angular-eslint/prefer-on-push-component-change-detection": "error",
      "@angular-eslint/prefer-standalone": "error",
      "@angular-eslint/prefer-signals": "error",
    },
  },
  {
    files: ["**/*.html"],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    rules: {
      "@angular-eslint/template/prefer-control-flow": "error",
      "@angular-eslint/template/prefer-ngsrc": "error",
      "@angular-eslint/template/prefer-self-closing-tags": "error",
    },
  },
);

const minimal = tseslint.config(
  {
    languageOptions: {
      parser: tseslint.parser,
    },
    plugins: {
      "@angular-eslint": angular.tsPlugin,
      "@angular-eslint/template": angular.templatePlugin,
    },
  },
  {
    files: TYPESCRIPT_FILE_PATTERNS,
    processor: angular.processInlineTemplates,
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    extends: [
      {
        name: "angular/ts",
        rules: {
          "@angular-eslint/prefer-on-push-component-change-detection": "error",
        },
      },
    ],
  },
  {
    files: HTML_FILE_PATTERNS,
    languageOptions: {
      parser: angular.templateParser,
    },
    extends: [
      {
        rules: {
          "@angular-eslint/template/prefer-control-flow": "error",
          "@angular-eslint/template/prefer-ngsrc": "error",
          "@angular-eslint/template/prefer-self-closing-tags": "error",
        },
      },
    ],
  },
);

export default {
  minimal,
  recommended,
};
