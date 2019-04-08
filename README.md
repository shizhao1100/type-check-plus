# type-check-plus
use this to check javascript value's type,return true or false

# Install
```shell
npm install type-check-plus
```

# ParameterList
|Parameter|Example|true|false|description|
|:---:|:---:|:---:|:---:|:---:|
|int|check(1, 'int')|true|||
|int|check(1.0, 'int')||false||
|number|check(1.0, 'number')|true|||
|number|check(NaN, 'number')||false||
|string|check('string', 'string')|true|||
|boolean|check(true, 'boolean')|true|| 0 or 1 is not 'boolean' use true or false|
|boolean|check(1, 'boolean')||false||
|any|check(undefined, 'boolean')|true||any imput can be 'any'|
|object|check({}, 'object')|true||
|color|check('rgba(0,0,0,100)', 'color')|true||alpha:[0-100]|
|color|check('#000000', 'color')|true||
|color|check('black', 'color')|true||[colorName](http://www.w3school.com.cn/cssref/css_colorsfull.asp)|
|date|check('2018-08-08', 'date')|true||
|date|check('2018-02-31', 'date')||false|
|array|check([], 'array')|true||
|function|check((function () { }), 'function')|true||
|emailaddress|check('sz_p@outlook.com', 'emailaddress)'|true||

# CheckArray
use '[]' to define array like `[parameter][]` Example:`int[]`,`number[]` all parameter is in [ParameterList](#ParameterList)
## example
|Parameter|Example|true|false|description|
|:---:|:---:|:---:|:---:|:---:|
|int[]|check([1,2,3,4], 'int[]')|true|||
|date[]|check(['2018-08-08','2018-08-09','2018-08-10','2018-08-11'], 'date[]')|true|||

# CheckObject
```javascript
import check, { checkTree } from 'type-check-plus';
const objValue = {
    name: 'sz-p',
    age: 24,
    infor: {
      hight: 183,
      weight: 90
    },
    friends: ['liu', 'zhang', 'li']
}；
const objDefine = {
    name: 'string',
    age: 'int',
    infor: {
        hight: 'number',
        weight: 'number'
    },
    friends: 'string[]'
}

check(objValue, objDefine) // true
```

# CheckArrayList
use `[[parameter],[parameter],[parameter]]` to define arrayList all parameter is in [ParameterList](#ParameterList).
## example
|Example|true|false|
|:---:|:---:|:---:|
|check([1, '2', 3.0, (() => { }), {}], '['int', 'string', 'number', 'function', 'object']')|true||
|check([1, '2', 3.0, (() => { })], '['int', 'string', 'number', 'function', 'object']')|true||
|check([1, '2', 3.0, (() => { })], '['int', 'string', 'number', 'function']')||false|

# CheckObjectArray
```javascript
import check, { checkTree } from 'type-check-plus';
const objValue = [{
    name: 'sz-p',
    age: 1,
    infor: {
      hight: 1.0,
      weight: 2.0
    },
    friends: ['liu', 'zhang', 'li']
},{
    name: 'j-l',
    age: 1,
    infor: {
      hight: 1.0,
      weight: 2.0
    },
    friends: ['p', 'll', 'li']
}]；
const objDefine = [{
    name: 'string',
    age: 'int',
    infor: {
        hight: 'number',
        weight: 'number'
    },
    friends: 'string[]'
}]

check(objValue, objDefine) // true
```
# CheckTree
```javascript
import check, { checkTree } from 'type-check-plus';
const treeValue = {
  name: 'aa',
  value: 1,
  id: 1,
  children: [
    {
      name: 'aa',
      value: 2,
      id: 1,
      children: [
        {
          name: 'aa',
          value: 3,
          id: 1,
          children: [
          ]
        },
        {
          name: 'aa',
          value: 3,
          id: 2
        }
      ]
    }
  ]
}
const treeDefine = {
    name: 'string',
    value: 'int',
    id: 'int',
    children: '?node[]'
}
checkTree(treeValue,treeDefine) // true
```

# Test
```shell
yarn test
```