/** @type {import("prettier").Config} */
export default {
    printWidth: 80,
    tabWidth: 4,
    semi: true,
    endOfLine: "lf",
    plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
    tailwindConfig: "./tailwind.config.mjs",
};
