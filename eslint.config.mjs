import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
    {
        files: ["**/*.{js,mjs,cjs,jsx}"],
        ignores: [
            ".cache/**",
            "public/**",
            "node_modules/**",
            "dist/**",
        ],
        plugins: {
            js,
            react: pluginReact,
        },
        settings: {
            react: {
                version: "detect",
            },
        },
        rules: {
            ...js.configs.recommended.rules,
            ...pluginReact.configs.recommended.rules,
            // Ajustes comuns para projetos Gatsby:
            "react/react-in-jsx-scope": "off", // React 17+
            "react/prop-types": "off", // se não usar PropTypes
            "no-unused-vars": ["warn", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],
            "no-console": ["warn", { allow: ["warn", "error"] }],
            quotes: ["error", "double", { avoidEscape: true }],
            "quote-props": ["error", "as-needed"],
            semi: ["error", "always"],
            "semi-style": ["error", "last"],
            "semi-spacing": ["error", { before: false, after: true }],
            "no-unexpected-multiline": "error", // evita problemas em return \n (...)
            "object-curly-spacing": ["error", "always"], // espaço dentro de {}
            "react/jsx-curly-spacing": ["error", {
                when: "always",
                children: true,
                spacing: { objectLiterals: "always" }
            }] // Espaço em chaves JSX: { value } e também em children { children }
        },
        extends: ["js/recommended"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                ...globals.browser,
                ...globals.node, // Gatsby usa APIs Node em gatsby-*.js
            },
            parserOptions: {
                ecmaFeatures: { jsx: true },
            },
        }
    },
    //pluginReact.configs.flat.recommended,
]);
