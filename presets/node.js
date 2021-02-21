let createPreset = require("./_createPreset")

/** @type {"module" | "script"} */
let sourceType = process.env.npm_package_type === "module" ? "module" : "script"

module.exports = {
  ...createPreset("node", sourceType),

  overrides: [
    {
      files: ["*.cjs"],
      parserOptions: {
        sourceType: "script",
      },
    },
    {
      files: ["*.mjs"],
      parserOptions: {
        sourceType: "module",
      },
    },
  ],
}
