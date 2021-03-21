<div align="center">
<h1>eslint-preset</h1>

<p>An opinionated ready to use preset for eslint.</p>
</div>

---

<!-- prettier-ignore-start -->
[![build][build-badge]][build]
[![version][version-badge]][package]
[![downloads][downloads-badge]][npmtrends]
[![MIT License][license-badge]][license]
<!-- prettier-ignore-end -->

## Install

```sh
# npm
npm install --dev eslint @vasiliicuhar/eslint-preset

# yarn
yarn add --dev eslint @vasiliicuhar/eslint-preset
```

# Usage

```js
// .eslintrc.cjs
module.exports = {
  extends: [
    require.resolve("@vasiliicuhar/eslint-preset/presets/node"),
    require.resolve("@vasiliicuhar/eslint-preset/mixins/jest"),
  ],
}
```

<!-- prettier-ignore-start -->
[version-badge]: https://img.shields.io/npm/v/@vasiliicuhar/eslint-preset.svg?style=flat-square
[package]: https://www.npmjs.com/package/@vasiliicuhar/eslint-preset
[downloads-badge]: https://img.shields.io/npm/dm/@vasiliicuhar/eslint-preset.svg?style=flat-square
[build-badge]: https://github.com/vasiliicuhar/eslint-preset/actions/workflows/build.yml/badge.svg
[npmtrends]: http://www.npmtrends.com/@vasiliicuhar/eslint-preset
[license-badge]: https://img.shields.io/npm/l/@vasiliicuhar/eslint-preset.svg?style=flat-square
[license]: /LICENSE
[build]: https://github.com/vasiliicuhar/eslint-preset/actions/workflows/build.yml
<!-- prettier-ignore-end -->
