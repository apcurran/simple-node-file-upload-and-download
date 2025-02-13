import globals from "globals";
import pluginJs from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";

/** @type {import('eslint').Linter.Config[]} */
export default [
    {
        files: ["**/*.js"], languageOptions: { sourceType: "commonjs" },
    },
    {
        languageOptions: {
            globals: globals.node,
        },
        plugins: {
            "@stylistic": stylistic,
        },
        rules: {
            "@stylistic/indent": ["error", 4],
            "@stylistic/semi": "error",
            "@stylistic/arrow-parens": ["error", "always"],
            "@stylistic/quotes": ["error", "double"],
            "@stylistic/brace-style": "error",
            "@stylistic/comma-dangle": ["error", "always-multiline"],
            "@stylistic/eol-last": ["error", "always"],
        },
    },
    pluginJs.configs.recommended,
];