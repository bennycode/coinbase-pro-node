### 1.3.0 (2020-03-02)

##### Chores

- **deps-dev:**
  - bump @types/jasmine from 3.5.6 to 3.5.7 ([#76](https://github.com/bennyn/coinbase-pro-node/pull/76)) ([7fdbdeef](https://github.com/bennyn/coinbase-pro-node/commit/7fdbdeefced1c3e8b126a5abd42425df160358f2))
  - bump lint-staged from 10.0.7 to 10.0.8 ([#73](https://github.com/bennyn/coinbase-pro-node/pull/73)) ([4a3daa8f](https://github.com/bennyn/coinbase-pro-node/commit/4a3daa8f6a79034d9479fae6e288f0f97f4dd6f5))
  - bump @typescript-eslint/eslint-plugin ([#72](https://github.com/bennyn/coinbase-pro-node/pull/72)) ([163b10be](https://github.com/bennyn/coinbase-pro-node/commit/163b10be8982b528e204941403c556ecb21b68ae))
  - bump @typescript-eslint/parser from 2.20.0 to 2.21.0 ([#74](https://github.com/bennyn/coinbase-pro-node/pull/74)) ([9e887104](https://github.com/bennyn/coinbase-pro-node/commit/9e887104ab742638319629b66c1cd4e4d87fa514))
  - bump nock from 12.0.1 to 12.0.2 ([#75](https://github.com/bennyn/coinbase-pro-node/pull/75)) ([14a88455](https://github.com/bennyn/coinbase-pro-node/commit/14a88455a8f1b27fb48fb392273a9e5396700ccc))
  - bump typescript from 3.8.2 to 3.8.3 ([#71](https://github.com/bennyn/coinbase-pro-node/pull/71)) ([5f3ae007](https://github.com/bennyn/coinbase-pro-node/commit/5f3ae0071640b5c41f4eeabee0f7b1ecd5282b0c))
- **deps:** bump @types/ws from 7.2.1 to 7.2.2 ([#77](https://github.com/bennyn/coinbase-pro-node/pull/77)) ([b0393780](https://github.com/bennyn/coinbase-pro-node/commit/b03937801f0e4e9503bfa479b5ae81957b6451b6))
- Report errors on unused parameters ([a64f8fd2](https://github.com/bennyn/coinbase-pro-node/commit/a64f8fd260953e5cd239eceabe6db00fe21efabe))

##### Documentation Changes

- Document account resources ([#78](https://github.com/bennyn/coinbase-pro-node/pull/78)) ([ba32406f](https://github.com/bennyn/coinbase-pro-node/commit/ba32406f460ea0d8af9d90b292ee92d91eaa911e))
- Document product resources ([#68](https://github.com/bennyn/coinbase-pro-node/pull/68)) ([e7df8204](https://github.com/bennyn/coinbase-pro-node/commit/e7df820414806ee5a6f17f792be594903554cbf5))

##### New Features

- Add automatic request throttling for rate limits ([#70](https://github.com/bennyn/coinbase-pro-node/pull/70)) ([a07260c0](https://github.com/bennyn/coinbase-pro-node/commit/a07260c0d347d7bf470cf821832090578ea837f2))
- Add utility to determine candle buckets ([#69](https://github.com/bennyn/coinbase-pro-node/pull/69)) ([1e5f9237](https://github.com/bennyn/coinbase-pro-node/commit/1e5f9237cb86248be94cf4148b7fee5b6d4c82ca))

### 1.2.0 (2020-02-24)

##### Chores

- **deps-dev:**
  - bump @typescript-eslint/parser from 2.19.2 to 2.20.0 ([#61](https://github.com/bennyn/coinbase-pro-node/pull/61)) ([c2594b8e](https://github.com/bennyn/coinbase-pro-node/commit/c2594b8ee7f19363f7547c7081a4f909b1ee7a4f))
  - bump @typescript-eslint/eslint-plugin ([#64](https://github.com/bennyn/coinbase-pro-node/pull/64)) ([17db6bdf](https://github.com/bennyn/coinbase-pro-node/commit/17db6bdf4cf814281d94ba6ec85b9c1e5578c9b7))
  - bump nock from 12.0.0 to 12.0.1 ([#65](https://github.com/bennyn/coinbase-pro-node/pull/65)) ([73af81b9](https://github.com/bennyn/coinbase-pro-node/commit/73af81b9fd23287132e7281fcccc68fb1f6de791))
  - bump @types/jasmine from 3.5.4 to 3.5.6 ([#63](https://github.com/bennyn/coinbase-pro-node/pull/63)) ([950390f1](https://github.com/bennyn/coinbase-pro-node/commit/950390f15d6188535a22af097e7c7e0439872576))
  - bump typescript from 3.7.5 to 3.8.2 ([#62](https://github.com/bennyn/coinbase-pro-node/pull/62)) ([e3262249](https://github.com/bennyn/coinbase-pro-node/commit/e32622497ea19d2486eb326eea839b00adaa2fec))

##### New Features

- Export type for "matches" channel from WebSocket ([#67](https://github.com/bennyn/coinbase-pro-node/pull/67)) ([b84de740](https://github.com/bennyn/coinbase-pro-node/commit/b84de7404fd0f7c2c14c26ee47571b5f971dc373))
- Export type for ticker message from WebSocket ([#66](https://github.com/bennyn/coinbase-pro-node/pull/66)) ([5329ff6b](https://github.com/bennyn/coinbase-pro-node/commit/5329ff6b48c1e3581d8e5dc609a2b079914f5a8b))

### 1.1.0 (2020-02-21)

##### Chores

- Always do releases from master branch ([291c854c](https://github.com/bennyn/coinbase-pro-node/commit/291c854c54a86b2e09263ad2b3ececf251b79e3c))

##### Documentation Changes

- updated CHANGELOG.md ([22b66cf0](https://github.com/bennyn/coinbase-pro-node/commit/22b66cf0eea3b77aa9ac851b9f54bb419110cd57))

##### New Features

- Export WebSocket response types ([#60](https://github.com/bennyn/coinbase-pro-node/pull/60)) ([ad4c985e](https://github.com/bennyn/coinbase-pro-node/commit/ad4c985efb4ec1e02e35042c18d4cacf195ce001))

##### Refactors

- Set public access modifiers by default ([#59](https://github.com/bennyn/coinbase-pro-node/pull/59)) ([9cb1ba86](https://github.com/bennyn/coinbase-pro-node/commit/9cb1ba86d02f7c4b773c19d35f92ffde9fa21739))

### 1.1.0 (2020-02-21)

##### Chores

- Always do releases from master branch ([291c854c](https://github.com/bennyn/coinbase-pro-node/commit/291c854c54a86b2e09263ad2b3ececf251b79e3c))

##### New Features

- Export WebSocket response types ([#60](https://github.com/bennyn/coinbase-pro-node/pull/60)) ([ad4c985e](https://github.com/bennyn/coinbase-pro-node/commit/ad4c985efb4ec1e02e35042c18d4cacf195ce001))

##### Refactors

- Set public access modifiers by default ([#59](https://github.com/bennyn/coinbase-pro-node/pull/59)) ([9cb1ba86](https://github.com/bennyn/coinbase-pro-node/commit/9cb1ba86d02f7c4b773c19d35f92ffde9fa21739))

#### 1.0.1 (2020-02-20)

##### Bug Fixes

- `EventEmitter` constructor function type in `WebSocketClient` ([#57](https://github.com/bennyn/coinbase-pro-node/pull/57)) ([bd1a358c](https://github.com/bennyn/coinbase-pro-node/commit/bd1a358c12f18ff09500e549f36c4962fc39b702))

## 1.0.0 (2020-02-20)

##### New Features

- Export response types ([#56](https://github.com/bennyn/coinbase-pro-node/pull/56)) ([7fff578c](https://github.com/bennyn/coinbase-pro-node/commit/7fff578cf7e757c7bc408d56fc4414239b12f87c))

#### 0.11.2 (2020-02-18)

##### Chores

- Publish tests ([d751ba23](https://github.com/bennyn/coinbase-pro-node/commit/d751ba23422e1b48dd2cd0f76bbbc9f9f87e1ac0))

#### 0.11.1 (2020-02-18)

##### Chores

- Remove start script from publication ([#55](https://github.com/bennyn/coinbase-pro-node/pull/55)) ([a480e769](https://github.com/bennyn/coinbase-pro-node/commit/a480e76937a8ffd10296f8b4f1dc51190608426a))
- Adjust badge url to be found with "node-detect-readme-badges" ([b6eb427c](https://github.com/bennyn/coinbase-pro-node/commit/b6eb427c7b151bd76fa2ca764e9530a72cb73230))

### 0.11.0 (2020-02-18)

##### Chores

- Adjust line endings ([#53](https://github.com/bennyn/coinbase-pro-node/pull/53)) ([b51086d1](https://github.com/bennyn/coinbase-pro-node/commit/b51086d18a5ff63831c7828265a9c7b33dc7f979))
- Add custom homepage ([63c63f03](https://github.com/bennyn/coinbase-pro-node/commit/63c63f039c70e9f397455fbac478c76de00e6604))
- Adjust badge urls to be found with "node-detect-readme-badges" ([2f38a459](https://github.com/bennyn/coinbase-pro-node/commit/2f38a459bdd5061b37a4c06fc964d0f42df9dcb8))
- Add EditorConfig ([9ed33222](https://github.com/bennyn/coinbase-pro-node/commit/9ed3322278a7779c0f4560b471d80bc233d65a22))

##### New Features

- Expose WebSocket channels for "status" and "user" ([#54](https://github.com/bennyn/coinbase-pro-node/pull/54)) ([f922ab81](https://github.com/bennyn/coinbase-pro-node/commit/f922ab81bdf3e5e7305e71e485b4c03b4abe3eed))

### 0.10.0 (2020-02-17)

##### Chores

- **deps-dev:**
  - bump @typescript-eslint/parser from 2.19.0 to 2.19.2 ([#51](https://github.com/bennyn/coinbase-pro-node/pull/51)) ([5b6e55bb](https://github.com/bennyn/coinbase-pro-node/commit/5b6e55bb5346e4a6d006b861bec4da49904fed29))
  - bump @typescript-eslint/eslint-plugin ([#50](https://github.com/bennyn/coinbase-pro-node/pull/50)) ([785c0aca](https://github.com/bennyn/coinbase-pro-node/commit/785c0acad62d23a2b7ddca822e2e9db7df677f9e))
  - bump nock from 11.7.2 to 12.0.0 ([#48](https://github.com/bennyn/coinbase-pro-node/pull/48)) ([c6473912](https://github.com/bennyn/coinbase-pro-node/commit/c64739129f9f5923c7756f750f68a06c3816a34a))
  - bump @types/jasmine from 3.5.3 to 3.5.4 ([#49](https://github.com/bennyn/coinbase-pro-node/pull/49)) ([7807ffdb](https://github.com/bennyn/coinbase-pro-node/commit/7807ffdbb09219ba0047960e75baae6f8fe19855))
  - bump husky from 4.2.1 to 4.2.3 ([#47](https://github.com/bennyn/coinbase-pro-node/pull/47)) ([8383c695](https://github.com/bennyn/coinbase-pro-node/commit/8383c6954f6b80c8790908771cba2051bd2be410))

##### New Features

- Get Trades ([#52](https://github.com/bennyn/coinbase-pro-node/pull/52)) ([722fab5d](https://github.com/bennyn/coinbase-pro-node/commit/722fab5d303d8e3d0a7af896b0d72393fcaf0b33))

##### Bug Fixes

- Correct return type for order book depth of level 3 ([#46](https://github.com/bennyn/coinbase-pro-node/pull/46)) ([695afb94](https://github.com/bennyn/coinbase-pro-node/commit/695afb94fd5f85ea2d8ef56ee86880693fc7f3fd))

#### 0.9.5 (2020-02-11)

##### Chores

- Upload coverage reports to Codecov ([#44](https://github.com/bennyn/coinbase-pro-node/pull/44)) ([593e2c6a](https://github.com/bennyn/coinbase-pro-node/commit/593e2c6afc1d88eb9b0f0e23c434924e1f7eefdf))
- Don't publish test directory ([81c367db](https://github.com/bennyn/coinbase-pro-node/commit/81c367db10577be807542d23268dbf7aeb7b5014))
- **deps-dev:**
  - bump @types/jasmine from 3.5.2 to 3.5.3 ([#41](https://github.com/bennyn/coinbase-pro-node/pull/41)) ([4b2246d5](https://github.com/bennyn/coinbase-pro-node/commit/4b2246d52b9e3bdcadea58fcd8c7082eaa8d6c0c))
  - bump @typescript-eslint/parser from 2.18.0 to 2.19.0 ([#43](https://github.com/bennyn/coinbase-pro-node/pull/43)) ([83274d16](https://github.com/bennyn/coinbase-pro-node/commit/83274d1639c09ea39b971b443b941c82b28a967e))
  - bump rimraf from 3.0.1 to 3.0.2 ([#42](https://github.com/bennyn/coinbase-pro-node/pull/42)) ([4db51e45](https://github.com/bennyn/coinbase-pro-node/commit/4db51e45442444c338da85efbd9b7f3629e56012))
  - bump @typescript-eslint/eslint-plugin ([#39](https://github.com/bennyn/coinbase-pro-node/pull/39)) ([eceed887](https://github.com/bennyn/coinbase-pro-node/commit/eceed8878bd9d4c7edfbe2562558333e69f41eea))
- **deps:** bump reconnecting-websocket from 4.3.0 to 4.4.0 ([#40](https://github.com/bennyn/coinbase-pro-node/pull/40)) ([69b16258](https://github.com/bennyn/coinbase-pro-node/commit/69b16258d0a05b2fc3f305edd56e734e5c132c93))

##### Documentation Changes

- Update example titles ([d3856360](https://github.com/bennyn/coinbase-pro-node/commit/d38563607cb6166aabb4a2456fd6c2b6831eb243))
- Add badges ([8f1f05c4](https://github.com/bennyn/coinbase-pro-node/commit/8f1f05c4da9b718675732ff57e1aac6d1ed0f2b4))

##### New Features

- Get Product Order Book ([#45](https://github.com/bennyn/coinbase-pro-node/pull/45)) ([976b2a79](https://github.com/bennyn/coinbase-pro-node/commit/976b2a797508e2b313d2b01632e90068f3d08b75))

#### 0.9.4 (2020-02-09)

##### New Features

- Add profile / portfolio resource ([#38](https://github.com/bennyn/coinbase-pro-node/pull/38)) ([452af03a](https://github.com/bennyn/coinbase-pro-node/commit/452af03aa2d2f6c923c46688ee4891568aa0c413))

##### Refactors

- Export common types ([13a9bef8](https://github.com/bennyn/coinbase-pro-node/commit/13a9bef8220a3db71a5f3f0c88a4003355a9539e))

#### 0.9.3 (2020-02-09)

##### Chores

- Lint staged TypeScript files ([1da88850](https://github.com/bennyn/coinbase-pro-node/commit/1da88850433bea75e0ca8e8b50757aa2f305b0d5))

##### Refactors

- Add `useSandbox` to `ClientAuthentication` ([#37](https://github.com/bennyn/coinbase-pro-node/pull/37)) ([72e9b556](https://github.com/bennyn/coinbase-pro-node/commit/72e9b5565abe9efc88a15b687814b9f20ad2aa9e))

##### Tests

- Check types on test run ([10754003](https://github.com/bennyn/coinbase-pro-node/commit/10754003bf57f39511c141627534136c7d6ac5fb))

#### 0.9.2 (2020-02-05)

##### New Features

- Request trailing volume ([#29](https://github.com/bennyn/coinbase-pro-node/pull/29)) ([8a150fec](https://github.com/bennyn/coinbase-pro-node/commit/8a150fecb7d32b7b7cd39a8109985f665aaee26e))

### 0.9.0 (2020-01-26)

##### New Features

- List recent fills ([#18](https://github.com/bennyn/coinbase-pro-node/pull/18)) ([1d8edc30](https://github.com/bennyn/coinbase-pro-node/commit/1d8edc3009d4d9be3d2abba69954ea2642bbea6b))
