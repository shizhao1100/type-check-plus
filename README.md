# type-check-plus
A library for javascript to check value is equal or not with the definition

# Install
```shell
npm install type-check-plus
```
# How to use
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
    }
}]；
const objDefine = [{
    name: 'string',
    age: 'int',
    infor: {
        hight: 'number',
        weight: 'number'
    },
    // if 'friends' can be undefind use '?' in first char
    friends: '?string[]'
}]
const option = {
  // if objValue is very large use 'threshold' to limit check count
  threshold: 1,
  onError: (value,define,key,index)=>{console.log(value,define,key,index)},
  onCheck: (value,define,key,index)=>{console.log(value,define,key,index)}
}
check(objValue,objDefine,option)  // true                    
```

# ParameterList
## int
|Parameter|Example|return|description|
|:---:|:---:|:---:|:---:|
|int|check(1, 'int')|true||
|int|check(1.0, 'int')|false||
## number
|Parameter|Example|return|description|
|:---:|:---:|:---:|:---:|
|number|check(1.0, 'number')|true||
|number|check(NaN, 'number')|false||
## string
|Parameter|Example|return|description|
|:---:|:---:|:---:|:---:|
|string|check('string', 'string')|true||
## boolean
|Parameter|Example|return|description|
|:---:|:---:|:---:|:---:|
|boolean|check(true, 'boolean')|true||
|boolean|check(1, 'boolean')|false| 0 or 1 is not 'boolean' use true or false|
## any
|Parameter|Example|return|description|
|:---:|:---:|:---:|:---:|
|any|check(undefined, 'boolean')|true|any input can be 'any'|
## object
|Parameter|Example|return|description|
|:---:|:---:|:---:|:---:|
|object|check({}, 'object')|true|
## color
|Parameter|Example|return|description|
|:---:|:---:|:---:|:---:|
|color|check('rgba(0,0,0,100)', 'color')|false|alpha:[0-100]|
|color|check('#000000', 'color')|true|
|color|check('black', 'color')|true|[colorName](http://www.w3school.com.cn/cssref/css_colorsfull.asp)|
## date
|Parameter|Example|return|description|
|:---:|:---:|:---:|:---:|
|date|check('2018-08-08', 'date')|true|
|date|check('2018-02-31', 'date')|false|
## function
|Parameter|Example|return|description|
|:---:|:---:|:---:|:---:|
|function|check((function () { }), 'function')|true|
## emailaddress
|Parameter|Example|return|description|
|:---:|:---:|:---:|:---:|
|emailaddress|check('sz_p@outlook.com', 'emailaddress)'|true|
## array
use '[]' to define array like `'[parameter][]'` Example:`'int[]'`,`'number[]'` all parameter is in [ParameterList](#ParameterList)
### example
|Parameter|Example|return|description|
|:---:|:---:|:---:|:---:|
|array|check([], 'array')|true|
|int[]|check([1,2,3,4], 'int[]')|true||
|int[]|check([1,2,3,4], '['int']')|true||
|date[]|check(['2018-08-08','2018-08-09','2018-08-10','2018-08-11'], 'date[]')|true||
## object
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

## arrayList
use `[[parameter],[parameter],[parameter]]` to define arrayList all parameter is in [ParameterList](#ParameterList).
### example
|Example|return|
|:---:|:---:|
|check([1, '2', 3.0, (() => { }), {}], '['int', 'string', 'number', 'function', 'object']')|true|
|check([1, '2', 3.0, (() => { })], '['int', 'string', 'number', 'function', 'object']')|true|
|check([1, '2', 3.0, (() => { })], '['int', 'string', 'number', 'function']')|false|

## objectArray
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

check(objValue,objDefine) // true
```
# Use RegExp
|Parameter|Example|return|
|:---:|:---:|:---:|
|RegExp|check("outlook@outlook.com", /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/)|true|

# CheckMoreType
```javascript
import check, { checkTree } from 'type-check-plus';
const style = {
  position:'absolute'
  width:'1080px',
  height:'1920px',
  fontSize:'14px'
}
const styleDefine = {
    position:'string',
    width: 'string|int',
    height: 'string|int',
    fontSize: 'string|int'
}
checkTree(style,styleDefine) // true
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

# Options
|option|type|description|
|:---:|:---:|:---:|
|threshold|int|if value is very large use 'threshold' to limit check count|
|onError|function(value:string,define:string,key:?string,index?:number):void|before return false call onError|
|onCheck|function(value:string,define:string,key:?string,index?:number):void|before check value or value's attribute call onCheck|

# Test
```shell
yarn test
```