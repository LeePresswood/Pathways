import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    { ignores: ['dist'] },
    {
        extends: [js.configs.recommended, ...tseslint.configs.recommended],
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser
        },
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            'react-refresh/only-export-components': [
                'warn',
                { allowConstantExport: true }
            ],

            // TypeScript-specific rules
            '@typescript-eslint/no-explicit-any': 'error', // Ban `any`
            '@typescript-eslint/strict-boolean-expressions': 'error', // Enforce strict boolean handling
            '@typescript-eslint/no-floating-promises': 'error', // Ensure promises are handled
            '@typescript-eslint/no-unnecessary-condition': 'error', // Flag unnecessary conditions
            '@typescript-eslint/no-unused-vars': [
                'error',
                { argsIgnorePattern: '^_', varsIgnorePattern: '^_' } // Allow unused variables prefixed with `_`
            ],
            '@typescript-eslint/no-non-null-assertion': 'error', // Ban non-null assertions (`!`)
            '@typescript-eslint/prefer-nullish-coalescing': 'error', // Prefer `??` over `||` for nullish checks
            '@typescript-eslint/prefer-optional-chain': 'error' // Prefer optional chaining (`?.`)
        }
    }
);
