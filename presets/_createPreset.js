let common = require("./rules/common")
let deprecated = require("./rules/deprecated")
let eslintRecommended = require("./rules/eslint-recommended")

/**
 *
 * @param {"node" | "browser"} target
 * @param {"script" | "module"} sourceType
 */
module.exports = function createPreset(target, sourceType = "module") {
  return {
    root: true,
    env: {
      browser: target === "browser",
      node: target === "node",
      es2021: true,
    },

    parserOptions: {
      sourceType,
    },

    plugins: [...common.plugins],

    rules: {
      ...deprecated.rules,
      ...eslintRecommended.rules,
      ...common.rules,
    },
  }
}
