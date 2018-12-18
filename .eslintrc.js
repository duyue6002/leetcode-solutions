module.exports = {
    "extends": "airbnb-base",
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "rules": {
        "func-names": 0,
        "no-param-reassign": 0,
        "no-plusplus": 0,
        "no-console": 0,
        "no-bitwise": 0,
        "max-len": 0,
        "prefer-const": 0,
        "no-restricted-syntax": 0,
        "no-use-before-define": 0,
        "no-unused-vars": 0,
        "import/no-named-as-default": 0,
        "import/no-named-as-default-member": 0,
        "no-array-constructor": 0,
        "no-undef": 0,
        "prefer-destructuring": ["error", {
            "VariableDeclarator": {
                "array": false,
                "object": true
            },
            "AssignmentExpression": {
                "array": true,
                "object": false
            }
        }, {
            "enforceForRenamedProperties": false
        }],
        "operator-assignment": 0,
        "no-shadow": 0,
        "no-mixed-operators": 0
    }
};