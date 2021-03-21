module.exports = {
  plugins: ["promise", "prefer-let"],

  rules: {
    "promise/always-return": "error",
    "promise/no-return-wrap": "error",
    "promise/param-names": "error",
    "promise/catch-or-return": "error",
    "promise/no-nesting": "warn",
    "promise/no-promise-in-callback": "warn",
    "promise/no-callback-in-promise": "warn",
    "promise/avoid-new": "warn",
    "promise/no-new-statics": "error",
    "promise/no-return-in-finally": "error",
    "promise/valid-params": "error",

    "prefer-let/prefer-let": "error",

    "max-lines": ["warn", { max: 2000 }],

    "accessor-pairs": "error",
    "guard-for-in": "error",
    "no-extra-label": "error",
    "no-label-var": "error",
    "no-lone-blocks": "error",
    "no-return-assign": "error",
    "no-script-url": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-unmodified-loop-condition": "error",
    "no-unused-expressions": "error",
    "no-new": "warn",

    "dot-notation": [
      "warn",
      {
        allowPattern: "^_",
      },
    ],

    // catch bitwise operators that look similar to their boolean operator counterpart
    // source: https://github.com/microsoft/rushstack/tree/master/stack/eslint-config
    "no-bitwise": [
      "warn",
      {
        allow: [
          "^",
          // "|",
          // "&",
          "<<",
          ">>",
          ">>>",
          "^=",
          // "|=",
          //"&=",
          "<<=",
          ">>=",
          ">>>=",
          "~",
        ],
      },
    ],
  },
}
