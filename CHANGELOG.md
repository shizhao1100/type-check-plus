# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/shizhao1100/type-check-plus/commits/master) for commit guidelines.

<a name="1.0.7"></a>
## [1.0.7](https://github.com/shizhao1100/type-check-plus/commit/55be98a6a41b39d79b24d59eeb401c26c39ae887) (2019-6-21)

### Features

* **isRegExp** check RegExp Obj check(/[0-9]*px/, 'regexp') // true

<a name="1.0.8"></a>
## [1.0.8](https://github.com/shizhao1100/type-check-plus/commit/49ac62a8287d101d783bbfc1ad0a8d0911b7a6db) (2019-6-21)

### Features
## [1.0.7]
* **onCheck** option.onCheck?: (value: any, type: any) => void
* **onError** option.onError?: (value: any, type: any) => void
## [1.0.8]
* **onCheck** option.onCheck?: (value: any, type: any, key?: string, index?: number) => void
* **onError** option.onError?: (value: any, type: any, key?: string, index?: number) => void

<a name="1.0.9"></a>
## [1.0.9](https://github.com/shizhao1100/type-check-plus/commit/97673d4a23700349466ee79895cf776f219f09d9) (2019-6-24)

### Features
## [1.0.9]
* **useRegExp** use RegExp to check string check("14px", /[0-9]*px/) // true
