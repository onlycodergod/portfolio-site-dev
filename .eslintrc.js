module.exports = {
    env: {
        es6: true,
        amd: true,
        browser: true,
        jest: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: '**/tsconfig.json',
    },
    plugins: ['@typescript-eslint'],
    extends: [
        'airbnb',
        'airbnb/hooks',
        'airbnb-typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
    ],
    settings: {
        react: {
            version: 'detect',
            pragma: 'React',
        },
    },
    rules: {
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/require-default-props': 'error',
        'react/prop-types': 'error',
        'react/jsx-props-no-spreading': 'error',
        'react/jsx-no-useless-fragment': ['error', {'allowExpressions': true}],
        'react/no-array-index-key': 'error',

        'react/function-component-definition': 'error',

        // require specify output of functions
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md
        '@typescript-eslint/explicit-module-boundary-types': 'error',

        '@typescript-eslint/indent': ['error', 4],

        "quotes": "off",

        "@typescript-eslint/quotes": ["error", "double"],

        '@typescript-eslint/object-curly-spacing': ['error', 'never'], // https://eslint.org/docs/rules/object-curly-spacing

        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-explicit-any.md
        '@typescript-eslint/no-explicit-any': ['error', {ignoreRestArgs: true}],

        '@typescript-eslint/no-unsafe-argument': 'error',

        '@typescript-eslint/unbound-method': 'error',

        'max-len': ['error', {'code': 125}],

        'import/prefer-default-export': 'off', // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/prefer-default-export.md

        'no-import-assign': 'error', // https://eslint.org/docs/rules/no-import-assign

        'default-case-last': 'error', // https://eslint.org/docs/rules/default-case-last

        'default-param-last': 'error',

        'no-promise-executor-return': 'error',

        'react/jsx-max-props-per-line': [1, { "maximum": 1 }],

        'init-declarations': ['off', 'always'], // https://eslint.org/docs/rules/init-declarations

        // not require onClick be accompanied by onKeyUp/onKeyDown/onKeyPress
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/click-events-have-key-events.md
        'jsx-a11y/click-events-have-key-events': 'error',
        // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
        'jsx-a11y/no-static-element-interactions': 'error',

        // allow use of void operator as statement
        'no-void': ['error', {'allowAsStatement': true}], // https://eslint.org/docs/rules/no-void

        // allow parens in arrow function arguments as-needed
        'arrow-parens': ['error', 'as-needed'], // https://eslint.org/docs/rules/arrow-parens

        // allow use of console
        'no-console': ["error", {allow: ["info", "error", "warn"]}], // https://eslint.org/docs/rules/no-console

        // Forbid the use of extraneous packages
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
        'import/no-extraneous-dependencies': ['error', {'devDependencies': ['**/*.test.{ts,tsx,js,jsx}']}],
        'import/order': ['error', {
            'newlines-between': 'always',
             'groups': [
                 'builtin',
                 'external',
                 'internal',
                 'parent',
                 'sibling',
                 'index',
                 'object'
             ],
             'pathGroups': [
                 {
                     'pattern': '@*/**',
                     'group': 'internal',
                     'position': 'before'
                 },
                 {
                     'pattern': '*.+(scss|json)',
                     'group': 'index',
                     'patternOptions': {matchBase: true},
                     'position': 'after'
                 }
             ],
             'pathGroupsExcludedImportTypes': ['builtin']
         }]
    },
    ignorePatterns: [
        '.eslintrc.js',
        '.babelrc.js',
        'jest.config.js',
        'coverage',
        'node_modules',
        'build',
        'webpack',
    ],
};
