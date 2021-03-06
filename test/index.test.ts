import check, { checkTree } from '../dist/src/index';
const testTree = {
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
          id: 2,
          children: [

          ]
        }
      ]
    },
    {
      name: 'aa',
      value: 2,
      id: 2,
      children: [

      ]
    },
    {
      name: 'aa',
      value: 2,
      id: 3,
      children: [

      ]
    },
    {
      name: 'aa',
      value: 2,
      id: 3,
      children: [

      ]
    }
  ]
}
const testArray: any[] = [
  ["0 isNumber", 0, 'number', true],
  ["1.111 isNumber", 1.111, 'number', true],
  ["NaN isNumber", NaN, 'number', false],
  ["Infinity isNumber", Infinity, 'number', true],
  ["’1‘ isNumber", "1", 'number', false],

  ["1 isInt", 1, 'int', true],
  ["1.1 isInt", 1.1, 'int', false],
  ["NaN isInt", NaN, 'int', false],
  ["Infinity isInt", Infinity, 'int', false],

  ["1.1 isString", 1.1, 'string', false],
  ["‘1.1’ isString", "1.1", 'string', true],
  ["‘string’ isString", "string", 'string', true],
  ["new Date isString", new Date, 'string', false],

  ["new Date isAny", new Date, 'any', true],
  ["null isAny", null, 'any', true],
  ["undefined isAny", undefined, 'any', true],

  ["undefined isObject", undefined, 'object', false],
  ["[] isObject", [], 'object', true],
  ["null isObject", null, 'object', false],
  ["()=>{} isObject", (() => { }), 'object', false],

  ["#000000 isColor", '#000000', 'color', true],
  ["rgb(0,0,0) isColor", 'rgb(0,0,0)', 'color', true],
  ["rgba(255,255,255,100) isColor", 'rgba(255,255,255,100)', 'color', false],
  ["rgba(255,255,255,80) isColor", 'rgba(255,255,255,80)', 'color', false],
  ["rgba(255,255,255,0.1) isColor", 'rgba(255,255,255,0.1)', 'color', true],
  ["rgba(255,255,255,.1) isColor", 'rgba(255,255,255,.1)', 'color', true],
  ["rgba(255,255,255,.99) isColor", 'rgba(255,255,255,.99)', 'color', true],
  ["rgba(255,255,255,1) isColor", 'rgba(255,255,255,1)', 'color', true],

  ["red isColor", 'red', 'color', true],
  ["RED isColor", 'RED', 'color', true],
  ["black isColor", 'black', 'color', true],
  ["#fffffff isColor", '#fffffff', 'color', false],

  ["new Date() isDate", new Date(), 'date', true],
  ["2018-08-08 isDate", '2018-08-08', 'date', true],
  ["2018-8-8 isDate", '2018-8-8', 'date', true],
  ["2018-8-8g isDate", '2018-8-8g', 'date', false],
  ["2018/8/8 isDate", '2018/8/8', 'date', true],
  ["2018-02-31 isDate", '2018-02-31', 'date', false],
  ["2018_8_8 isDate", '2018_8_8', 'date', true],

  ["[] isArray", [], 'array', true],
  ["[1,2,3] isArray", [1, 2, 3], 'array', true],
  ["['1','2','3'] isArray", ['1', '2', '3'], 'array', true],

  ["function(){} isFunction", (function () { }), 'function', true],
  ["()=>{} isFunction", (() => { }), 'function', true],

  ["[1,2.0,3] isIntArray", [1, 2.0, 3], "int[]", true],
  ["[1,2,3.1] isIntArray", [1, 2, 3.1], "int[]", false],
  ["[1,'2',3] isIntArray", [1, '2', 3], "int[]", false],
  ["[1.0,2.1,3.2] isNumberArray", [1.0, 2.1, 3.2], "number[]", true],

  ["/[0-9]*px/ isRegExp", /[0-9]*px/, "regexp", true],
  ["/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/ isRegExp", /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/, "regexp", true],

  ["use RegExp check 14px", '14px', /[0-9]*px/, true],
  ["use RegExp check outlook@outlook.com", 'outlook@outlook.com', /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/, true],

  ["object check", {}, {}, true],
  ["object check", { name: 'sz-p', age: 12 }, { age: 'int' }, true],
  ["object check", { name: 'sz-p', age: 12 }, {}, true],
  ["object check", { name: 'sz-p' }, { age: 'int' }, false],
  ["object check", {
    name: 'sz-p',
    age: 24,
    infor: {
      hight: 183,
      weight: 90
    },
    friends: ['liu', 'zhang', 'li']
  }, {
      name: 'string',
      age: 'int',
      infor: {
        hight: 'number',
        weight: 'number'
      },
      friends: 'string[]'
    }, true],

  ["arrayList check", [1, '2', 3.0, (() => { }), {}], ['int', 'string', 'number', 'function', 'object'], true],
  ["arrayList check", [1, '2', 3.0, (() => { }), {}], ['int', 'string', 'number', 'function'], false],
  ["arrayList check", [1, '2', 3.0, (() => { })], ['int', 'string', 'number', 'function', 'object'], true],
  ["arrayList check", [{
    name: 'sz-p',
    age: 24,
    infor: {
      hight: 183,
      weight: 90
    },
    friends: ['liu', 'zhang', 'li']
  }, {
    name: 'er-p',
    age: 22,
    infor: {
      hight: 111,
      weight: 50
    }
  }], [{
    name: 'string',
    age: 'int',
    infor: {
      hight: 'number',
      weight: 'number'
    },
    friends: '?string[]'
  }], true],
];
testArray.forEach(item =>
  test(item[0], () => {
    expect(check(item[1], item[2])).toBe(item[3]);
  })
)


test("[1,2,3.2] isIntArray", () => {
  expect(check([1, 2, 3.2], 'int[]', { threshold: 2 })).toBe(true);
})

test("throw check", () => {
  expect(check([1, 2, 3.2], 'int[]', { threshold: 2 })).toBe(true);
})

test("checkTree", () => {
  expect(checkTree(testTree, {
    name: 'string',
    value: 'int',
    id: 'int',
    children: '?node[]'
  })).toBe(true);
})
const obj = {
  name: 'sz-p',
  value: 123,
  arrayList: [123, "text"]
}
const objDefind = {
  name: 'string',
  value: 'int',
  arrayList: ['int', 'string']
}
test("trow check object", () => {
  const mock = jest.fn();
  check(obj, objDefind, {
    onCheck: mock
  })
  expect(mock).toHaveBeenNthCalledWith(1, 'sz-p', 'string', 'name');
  expect(mock).toHaveBeenNthCalledWith(2, 123, 'int', 'value');
  expect(mock).toHaveBeenNthCalledWith(3, [123, "text"], ['int', 'string'], 'arrayList');
  expect(mock).toHaveBeenNthCalledWith(4, 'text', 'string', 'arrayList', 2);
  expect(mock).toHaveBeenNthCalledWith(5, 123, 'int', 'arrayList', 1);
})
test("trow check tree", () => {
  const mock = jest.fn();
  expect(checkTree(testTree, {
    name: 'string',
    value: 'int',
    id: 'int',
    children: '?node[]'
  }, { onCheck: mock }));
  expect(mock).toHaveBeenNthCalledWith(1, 'aa', 'string', 'name', 1);
  expect(mock).toHaveBeenNthCalledWith(2, 1, 'int', 'value', 1);
  expect(mock).toHaveBeenNthCalledWith(3, 1, 'int', 'id', 1);
  expect(mock).toHaveBeenNthCalledWith(4, 'aa', 'string', 'name', 2);
  expect(mock).toHaveBeenNthCalledWith(5, 2, 'int', 'value', 2);
})