import js from "@eslint/js";
import globals from "globals";
import pluginReact, { rules } from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
    {
        files: ["**/*.{js,mjs,cjs,jsx}"],
        plugins: { js },
        extends: ["js/recommended"],
        parser: "babel-eslint",
        languageOptions: { globals: globals.browser },
        rules: {
            "react/react-in-jsx-scope": "off",
        },
    },
    pluginReact.configs.flat.recommended,
]);
