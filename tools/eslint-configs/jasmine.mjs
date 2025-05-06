import tseslint from 'typescript-eslint';
import { TYPESCRIPT_FILE_PATTERNS, TEST_FILE_PATTERNS } from './util/patterns.mjs';
import globals from "globals";
import jasmine from 'eslint-plugin-jasmine';

export default tseslint.config({
  files: TEST_FILE_PATTERNS,
  languageOptions: {
    globals: {
      ...globals.jasmine
    }
  },
  plugins: {
    jasmine
  }
})
