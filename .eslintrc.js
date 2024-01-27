module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ['plugin:react/recommended', 'standard'],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: ['react'],
    rules: {
        indent: ['error', 4, { SwitchCase: 1 }],
        'spaced-comment': ['off'],
        semi: [2, 'always'],
        'space-before-function-paren': [
            'error',
            { anonymous: 'always', named: 'never' }
        ],
        "react/prop-types": 0,
        quotes: ['error', 'single', { allowTemplateLiterals: true }],
        'multiline-ternary': ['off']
    }
};
