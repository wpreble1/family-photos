const { resolve } = require('node:path');

const project = resolve(process.cwd(), 'tsconfig.json');

module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react-hooks/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
    ],
    globals: {
        JSX: true,
    },
    ignorePatterns: ['node_modules/'],
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            extends: [
                'eslint:recommended',
                'plugin:@typescript-eslint/recommended',
                'plugin:react-hooks/recommended',
            ],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                ecmaVersion: 13,
                sourceType: 'module',
            },
            plugins: [
                'react',
                'import',
                'react-refresh',
                '@stylistic',
            ],
            rules: {
                '@typescript-eslint/no-explicit-any': ['warn'],
                '@typescript-eslint/no-unused-vars': ['warn'],
                '@typescript-eslint/no-var-requires': ['warn'],
            },
            settings: {
                'import/resolver': {
                    typescript: {
                        project,
                    },
                },
            },
        },
    ],
    plugins: [
        'react',
        'import',
        'react-refresh',
        '@stylistic',
    ],
    rules: {
        'import/no-default-export': 'warn',
        'import/no-cycle': 'error',
        'max-lines-per-function': 0,
        'no-console': ['warn'],
        'no-empty': ['error', { allowEmptyCatch: true }],
        'no-unused-vars': 'warn',
        'prefer-template': 'warn',
        'react/boolean-prop-naming': ['error'],
        'react/jsx-key': 'error',
        'react/jsx-curly-brace-presence': ['error', 'never'],
        'react/no-array-index-key': ['error'],
        'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
        'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
        '@stylistic/array-bracket-newline': ['error', { multiline: true }],
        '@stylistic/array-bracket-spacing': ['error', 'never'],
        '@stylistic/array-element-newline': [
            'error',
            {
                ArrayExpression: 'consistent',
                ArrayPattern: 'consistent',
            },
        ],
        '@stylistic/arrow-parens': ['error', 'always'],
        '@stylistic/arrow-spacing': [
            'error',
            {
                before: true,
                after: true,
            },
        ],
        '@stylistic/block-spacing': ['error', 'always'],
        '@stylistic/brace-style': ['error', '1tbs'],
        '@stylistic/comma-spacing': [
            'error',
            {
                before: false,
                after: true,
            },
        ],
        '@stylistic/comma-style': ['error', 'last'],
        '@stylistic/comma-dangle': [
            'warn',
            {
                arrays: 'always-multiline',
                functions: 'only-multiline',
                objects: 'always-multiline',
            },
        ],
        '@stylistic/computed-property-spacing': ['error', 'never'],
        '@stylistic/dot-location': ['error', 'property'],
        '@stylistic/eol-last': ['error', 'always'],
        '@stylistic/function-call-argument-newline': ['error', 'consistent'],
        '@stylistic/function-call-spacing': ['error', 'never'],
        '@stylistic/function-paren-newline': ['error', 'consistent'],
        '@stylistic/generator-star-spacing': [
            'error',
            {
                before: true,
                after: false,
            },
        ],
        '@stylistic/implicit-arrow-linebreak': ['error', 'beside'],
        '@stylistic/indent': ['error', 4],
        '@stylistic/jsx-child-element-spacing': 'error',
        '@stylistic/jsx-closing-bracket-location': ['error', 'line-aligned'],
        '@stylistic/jsx-closing-tag-location': 'error',
        '@stylistic/jsx-curly-spacing': [
            'warn',
            {
                when: 'never',
                children: true,
            },
        ],
        '@stylistic/jsx-equals-spacing': ['error', 'never'],
        '@stylistic/jsx-first-prop-new-line': ['error', 'multiline'],
        '@stylistic/jsx-indent': ['error', 4],
        '@stylistic/jsx-indent-props': ['error', 4],
        '@stylistic/jsx-max-props-per-line': [
            'error',
            {
                maximum: {
                    single: 2,
                    multi: 1,
                },
            },
        ],
        '@stylistic/jsx-one-expression-per-line': ['error', { allow: 'single-child' }],
        '@stylistic/jsx-props-no-multi-spaces': ['error'],
        '@stylistic/jsx-quotes': ['error', 'prefer-double'],
        '@stylistic/jsx-self-closing-comp': [
            'error',
            {
                component: true,
                html: true,
            },
        ],
        '@stylistic/jsx-sort-props': ['error', { ignoreCase: true }],
        '@stylistic/jsx-tag-spacing': [
            'error',
            {
                afterOpening: 'never',
                beforeClosing: 'never',
                beforeSelfClosing: 'always',
                closingSlash: 'never',
            },
        ],
        '@stylistic/jsx-wrap-multilines': [
            'error',
            {
                declaration: 'parens-new-line',
                assignment: 'parens-new-line',
                return: 'parens-new-line',
                arrow: 'parens-new-line',
                condition: 'parens-new-line',
                logical: 'parens-new-line',
                prop: 'parens-new-line',
            },
        ],
        '@stylistic/key-spacing': [
            'error',
            {
                beforeColon: false,
                afterColon: true,
            },
        ],
        '@stylistic/keyword-spacing': [
            'error',
            {
                before: true,
                after: true,
            },
        ],
        '@stylistic/linebreak-style': ['error', 'unix'],
        '@stylistic/lines-between-class-members': ['error', 'always'],
        '@stylistic/max-len': [
            'error',
            {
                code: 120,
                ignoreComments: true,
                ignoreRegExpLiterals: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
            },
        ],
        '@stylistic/max-statements-per-line': ['error', { max: 1 }],
        '@stylistic/member-delimiter-style': [
            'error',
            {
                multiline: {
                    delimiter: 'semi',
                    requireLast: true,
                },
                singleline: {
                    delimiter: 'semi',
                    requireLast: false,
                },
                multilineDetection: 'brackets',
            },
        ],
        '@stylistic/multiline-ternary': ['error', 'always-multiline'],
        '@stylistic/new-parens': ['error', 'always'],
        '@stylistic/newline-per-chained-call': ['error', { ignoreChainWithDepth: 3 }],
        '@stylistic/no-confusing-arrow': [
            'error',
            {
                allowParens: true,
                onlyOneSimpleParam: false,
            },
        ],
        '@stylistic/no-multi-spaces': ['error'],
        '@stylistic/no-multiple-empty-lines': ['error', { max: 1 }],
        '@stylistic/no-trailing-spaces': ['error'],
        '@stylistic/no-whitespace-before-property': ['error'],
        '@stylistic/nonblock-statement-body-position': ['error', 'beside'],
        '@stylistic/object-curly-newline': [
            'error',
            {
                ObjectExpression: {
                    consistent: true,
                    multiline: true,
                    minProperties: 3,
                },
                ObjectPattern: {
                    consistent: true,
                    multiline: true,
                    // minProperties: 4,
                },
                ImportDeclaration: 'never',
                ExportDeclaration: {
                    multiline: true,
                    minProperties: 3,
                },
            },
        ],
        '@stylistic/object-curly-spacing': ['error', 'always'],
        '@stylistic/object-property-newline': ['error'],
        '@stylistic/one-var-declaration-per-line': ['error', 'initializations'],
        '@stylistic/operator-linebreak': [
            'error',
            'after',
            {
                overrides: {
                    '?': 'before',
                    ':': 'before',
                },
            },
        ],
        '@stylistic/padded-blocks': ['error', 'never'],
        '@stylistic/padding-line-between-statements': [
            'warn',
            {
                blankLine: 'always',
                prev: 'import',
                next: 'export',
            },
            {
                blankLine: 'always',
                prev: 'switch',
                next: '*',
            },
            {
                blankLine: 'always',
                prev: '*',
                next: 'multiline-const',
            },
            {
                blankLine: 'always',
                prev: 'multiline-const',
                next: '*',
            },
            {
                blankLine: 'always',
                prev: '*',
                next: 'multiline-expression',
            },
            {
                blankLine: 'always',
                prev: 'multiline-expression',
                next: '*',
            },
            {
                blankLine: 'always',
                prev: '*',
                next: 'multiline-let',
            },
            {
                blankLine: 'always',
                prev: 'multiline-let',
                next: '*',
            },
            {
                blankLine: 'always',
                prev: '*',
                next: 'multiline-block-like',
            },
            {
                blankLine: 'always',
                prev: 'multiline-block-like',
                next: '*',
            },
        ],
        '@stylistic/quote-props': ['error', 'as-needed'],
        '@stylistic/quotes': [
            'error',
            'single',
            { avoidEscape: true },
        ],
        '@stylistic/rest-spread-spacing': ['error', 'never'],
        '@stylistic/semi': ['error', 'always'],
        '@stylistic/semi-spacing': [
            'error',
            {
                before: false,
                after: true,
            },
        ],
        '@stylistic/semi-style': ['error', 'last'],
        '@stylistic/space-before-blocks': ['error', 'always'],
        '@stylistic/space-before-function-paren': [
            'error',
            {
                anonymous: 'never',
                named: 'never',
                asyncArrow: 'always',
            },
        ],
        '@stylistic/space-in-parens': ['error', 'never'],
        '@stylistic/switch-colon-spacing': [
            'error',
            {
                after: true,
                before: false,
            },
        ],
        '@stylistic/template-curly-spacing': ['error', 'never'],
        '@stylistic/template-tag-spacing': ['error', 'never'],
    },
    settings: {
        'import/ignore': ['i18next'],
        react: {
            version: 'detect',
        },
    },
};
