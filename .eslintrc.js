// This configuration only applies to the package manager root.
/** @type {import("eslint").Linter.Config} */
module.exports = {
    ignorePatterns: ['services/**', 'packages/**'],
    extends: ['@family-photos/eslint-config/eslint-base.js'],
};
