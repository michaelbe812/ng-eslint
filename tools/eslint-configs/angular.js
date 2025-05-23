// @ts-check

import angular from 'angular-eslint';
import rxjs from 'eslint-plugin-rxjs-x';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import {
  ANGULAR_COMPONENT_FILE_PATTERNS,
  ANGULAR_PIPE_FILE_PATTERNS,
  HTML_FILE_PATTERNS,
  negatePatterns,
  STORYBOOK_FILE_PATTERNS,
  TEST_FILE_PATTERNS,
  TEST_FILE_PATTERNS_INLINE_TEMPLATES,
  TYPESCRIPT_FILE_PATTERNS,
} from './util/patterns.js';
import {
  NAMING_CONVENTION_OPTIONS_ANGULAR,
  NAMING_CONVENTION_OPTIONS_STORYBOOK,
} from './util/rule-options.js';
import typescript from './typescript.js';

export default tseslint.config(
  ...typescript,
  {
    plugins: {
      '@angular-eslint': angular.tsPlugin,
    },
  },
  {
    files: TYPESCRIPT_FILE_PATTERNS,
    processor: angular.processInlineTemplates,
    languageOptions: {
      globals: globals.browser,
    },
    extends: [
      ...angular.configs.tsRecommended,
      rxjs.configs.recommended,
      {
        name: 'custom/angular/customized',
        rules: {
          '@angular-eslint/component-class-suffix': 'warn',
          '@angular-eslint/directive-class-suffix': 'warn',
          '@angular-eslint/no-empty-lifecycle-method': 'warn',
          '@angular-eslint/no-input-rename': 'warn',
          '@angular-eslint/no-inputs-metadata-property': 'warn',
          '@angular-eslint/no-output-native': 'warn',
          '@angular-eslint/no-output-on-prefix': 'warn',
          '@angular-eslint/no-output-rename': 'warn',
          '@angular-eslint/no-outputs-metadata-property': 'warn',
          '@angular-eslint/prefer-standalone': 'warn',
          'rxjs-x/no-async-subscribe': 'warn',
          'rxjs-x/no-create': 'warn',
          'rxjs-x/no-nested-subscribe': 'warn',
          'rxjs-x/no-subscribe-in-pipe': 'warn',
          'rxjs-x/no-topromise': 'warn',
          'rxjs-x/prefer-observer': 'warn',
          'rxjs-x/prefer-root-operators': 'warn',
          'rxjs-x/throw-error': 'warn',
          '@typescript-eslint/naming-convention': [
            'warn',
            ...NAMING_CONVENTION_OPTIONS_ANGULAR,
          ],
        },
      },
      {
        name: 'custom/angular/disabled',
        rules: {
          '@typescript-eslint/class-methods-use-this': 'off',
          '@typescript-eslint/no-extraneous-class': 'off',
          '@typescript-eslint/no-floating-promises': 'off', // because of router.navigate
          'promise/catch-or-return': 'off',
          'unicorn/prefer-top-level-await': 'off',
          'unicorn/prefer-event-target': 'off',
          'unicorn/prefer-global-this': 'off',
        },
      },
      {
        name: 'custom/angular/additional',
        rules: {
          // https://github.com/angular-eslint/angular-eslint/tree/main/packages/eslint-plugin#rules
          '@angular-eslint/component-max-inline-declarations': 'warn',
          '@angular-eslint/component-selector': [
            'warn',
            { type: 'element', style: 'kebab-case' },
          ],
          '@angular-eslint/contextual-decorator': 'error',
          '@angular-eslint/directive-selector': [
            'warn',
            { type: 'attribute', style: 'camelCase' },
          ],
          '@angular-eslint/no-attribute-decorator': 'warn',
          '@angular-eslint/no-conflicting-lifecycle': 'error',
          '@angular-eslint/no-lifecycle-call': 'error',
          '@angular-eslint/no-pipe-impure': 'warn',
          '@angular-eslint/no-queries-metadata-property': 'warn',
          '@angular-eslint/prefer-on-push-component-change-detection': 'warn',
          '@angular-eslint/prefer-output-readonly': 'warn',
          '@angular-eslint/relative-url-prefix': 'warn',
          '@angular-eslint/sort-lifecycle-methods': 'warn',
          '@angular-eslint/use-component-selector': 'warn',
          '@angular-eslint/use-component-view-encapsulation': 'error',
          '@angular-eslint/use-injectable-provided-in': 'warn',
          '@angular-eslint/use-lifecycle-interface': 'warn',
          // https://github.com/JasonWeinzierl/eslint-plugin-rxjs-x#rules
          'rxjs-x/finnish': 'error',
          'rxjs-x/no-compat': 'error',
          'rxjs-x/no-exposed-subjects': 'error',
          'rxjs-x/no-floating-observables': 'error',
          // https://github.com/import-js/eslint-plugin-import#rules
          'import/no-namespace': 'error',
          'import/no-nodejs-modules': 'error',
        },
      },
    ],
  },
  {
    files: HTML_FILE_PATTERNS,
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
      {
        name: 'custom/angular/template/customized',
        rules: {
          '@angular-eslint/template/eqeqeq': [
            'error',
            { allowNullOrUndefined: true },
          ],
          '@angular-eslint/template/no-autofocus': 'warn',
        },
      },
      {
        name: 'custom/angular/template/additional',
        rules: {
          // https://github.com/angular-eslint/angular-eslint/tree/main/packages/eslint-plugin-template#rules
          '@angular-eslint/template/conditional-complexity': 'warn',
          '@angular-eslint/template/cyclomatic-complexity': [
            'warn',
            { maxComplexity: 20 },
          ],
          '@angular-eslint/template/no-any': 'error',
          '@angular-eslint/template/no-duplicate-attributes': 'error',
          '@angular-eslint/template/no-inline-styles': [
            'warn',
            { allowNgStyle: true, allowBindToStyle: true },
          ],
          '@angular-eslint/template/no-interpolation-in-attributes': 'warn',
          '@angular-eslint/template/no-positive-tabindex': 'warn',
          '@angular-eslint/template/prefer-control-flow': 'warn',
          '@angular-eslint/template/prefer-ngsrc': 'warn',
          '@angular-eslint/template/prefer-self-closing-tags': 'warn',
          '@angular-eslint/template/use-track-by-function': 'warn',
        },
      },
    ],
  },
  {
    files: TEST_FILE_PATTERNS,
    ignores: negatePatterns(TYPESCRIPT_FILE_PATTERNS),
    extends: [
      {
        name: 'custom/angular/tests/customized',
        rules: {
          '@angular-eslint/no-lifecycle-call': 'warn',
        },
      },
      {
        name: 'custom/angular/tests/disabled',
        rules: {
          '@angular-eslint/component-max-inline-declarations': 'off',
          '@angular-eslint/prefer-on-push-component-change-detection': 'off',
          '@angular-eslint/use-component-selector': 'off',
          '@angular-eslint/use-injectable-provided-in': 'off',
          'rxjs-x/finnish': 'off',
        },
      },
    ],
  },
  {
    // duplicated from typescript config to re-apply over angular's naming convention
    name: 'custom/angular/storybook/customized',
    files: STORYBOOK_FILE_PATTERNS,
    ignores: negatePatterns(TYPESCRIPT_FILE_PATTERNS),
    rules: {
      '@typescript-eslint/naming-convention': [
        'warn',
        ...NAMING_CONVENTION_OPTIONS_STORYBOOK,
      ],
    },
  },
  {
    name: 'custom/angular/components/customized',
    files: [ANGULAR_COMPONENT_FILE_PATTERNS],
    rules: {
      'max-lines': [
        'warn',
        { max: 400, skipBlankLines: true, skipComments: true },
      ],
    },
  },
  {
    name: 'custom/angular/pipes/customized',
    files: [ANGULAR_PIPE_FILE_PATTERNS],
    rules: {
      'functional/prefer-tacit': 'off',
    },
  },
  {
    name: 'custom/angular/templates/inline/disabled',
    files: TEST_FILE_PATTERNS_INLINE_TEMPLATES,
    rules: {
      '@angular-eslint/template/no-inline-styles': 'off',
      '@angular-eslint/template/no-any': 'off',
      '@angular-eslint/template/prefer-ngsrc': 'off',
      '@angular-eslint/template/use-track-by-function': 'off',
    },
  },
);
