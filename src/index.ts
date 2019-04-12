export interface Ioption {
  threshold?: number,
  onError?: any,
  onSucess?: any,
  onTick?: any,
  onCheck?: any
}
interface InodeInfor {
  nextNodeName: string,
  canBeUndefind: boolean,
  isArray: boolean
}
let textColor = {};
const textList = ['aliceblue', 'antiquewhite', 'aqua', 'aquamarine', 'azure', 'beige', 'bisque', 'black', 'blanchedalmond', 'blue', 'blueviolet', 'brown', 'burlywood', 'cadetblue', 'chartreuse', 'chocolate', 'coral', 'cornflowerblue', 'cornsilk', 'crimson', 'cyan', 'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray', 'darkgreen', 'darkkhaki', 'darkmagenta', 'darkolivegreen', 'darkorange', 'darkorchid', 'darkred', 'darksalmon', 'darkseagreen', 'darkslateblue', 'darkslategray', 'darkturquoise', 'darkviolet', 'deeppink', 'deepskyblue', 'dimgray', 'dodgerblue', 'feldspar', 'firebrick', 'floralwhite', 'forestgreen', 'fuchsia', 'gainsboro', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'green', 'greenyellow', 'honeydew', 'hotpink', 'indianred', 'indigo', 'ivory', 'khaki', 'lavender', 'lavenderblush', 'lawngreen', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan', 'lightgoldenrodyellow', 'lightgrey', 'lightgreen', 'lightpink', 'lightsalmon', 'lightseagreen', 'lightskyblue', 'lightslateblue', 'lightslategray', 'lightsteelblue', 'lightyellow', 'lime', 'limegreen', 'linen', 'magenta', 'maroon', 'mediumaquamarine', 'mediumblue', 'mediumorchid', 'mediumpurple', 'mediumseagreen', 'mediumslateblue', 'mediumspringgreen', 'mediumturquoise', 'mediumvioletred', 'midnightblue', 'mintcream', 'mistyrose', 'moccasin', 'navajowhite', 'navy', 'oldlace', 'olive', 'olivedrab', 'orange', 'orangered', 'orchid', 'palegoldenrod', 'palegreen', 'paleturquoise', 'palevioletred', 'papayawhip', 'peachpuff', 'peru', 'pink', 'plum', 'powderblue', 'purple', 'red', 'rosybrown', 'royalblue', 'saddlebrown', 'salmon', 'sandybrown', 'seagreen', 'seashell', 'sienna', 'silver', 'skyblue', 'slateblue', 'slategray', 'snow', 'springgreen', 'steelblue', 'tan', 'teal', 'thistle', 'tomato', 'turquoise', 'violet', 'violetred', 'wheat', 'white', 'whitesmoke', 'yellow', 'yellowgreen'];
textList.forEach((colorName) => {
  textColor[colorName] = true;
})
const isNumber = function (value: any): boolean {
  if (typeof value === 'number' && !isNaN(value)) {
    return true;
  }
  return false;
}
const isInt = function (value: any): boolean {
  return Number.isInteger(value);
}
const isString = function (value: any): boolean {
  if (typeof value === 'string') {
    return true;
  }
  return false
}
const isBoolean = function (value: any): boolean {
  if (value === true || value === false) {
    return true;
  }
  return false;
}
const isAny = function (value: any): boolean {
  return true;
}
const isTextColor = function (value: string): boolean {
  if (textColor[value] === true) {
    return true
  }
  return false
}
const isColor = function (value: any): boolean {
  const HEXColorReg = /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/g;
  const RGBAColorReg = /^[rR][gG][Bb][Aa]?[\(]([\s]*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?),){2}[\s]*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?),?[\s]*(0?\.\d{1,2}|1|0)?[\)]{1}$/g;
  if (isString(value) && (RGBAColorReg.test(value) || HEXColorReg.test(value) || isTextColor(value.toLowerCase()))) {
    return true;
  }
  return false;
}
const isObject = function (value: any): boolean {
  if (typeof value === 'object' && value !== null) {
    return true;
  }
  return false;
}
const isArray = function (value: any): boolean {
  return Array.isArray(value);
}
const isFunction = function (value: any): boolean {
  if (typeof value === 'function') {
    return true;
  }
  return false;
}
const isDate = function (value: any): boolean {
  if (isObject(value) && value.constructor && value.constructor.name === 'Date') {
    return true;
  }
  const reg = /^(\d{1,4})(~|,|.|_|-|\/)(\d{1,2})\2(\d{1,2})$/;
  let result = value.match(reg);
  if (result === null) {
    return false;
  }
  result[3] = result[3] - 1;
  const d = new Date(result[1], result[3], result[4]);
  if (d.getFullYear() != result[1] || d.getMonth() != result[3] || d.getDate() != result[4]) {
    return false
  }
  return true;
}
// const isDateTime = function (value: any): boolean {
//   var dateTimeReg = /^(\d+)-(\d{ 1,2})-(\d{ 1,2})(\d{ 1,2}):(\d{1,2}):(\d{1,2})$/;
//   var d = new Date(r[1], r[2], r[3], r[4], r[5], r[6]);

//   //TODO isDateTime
//   return true;
// }
// const isTime = function (value: any): boolean {
//   //TODO isTime
//   return true;
// }
const isEmailAddress = function (value: string): boolean {
  const emailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
  if (emailReg.test(value)) {
    return true;
  }
  return false;
}

const typeCase = function (): any {
  return new Map([
    ['number', isNumber],
    ['int', isInt],
    ['string', isString],
    ['boolean', isBoolean],
    ['any', isAny],
    ['object', isObject],
    ['color', isColor],
    ['date', isDate],
    ['array', isArray],
    ['function', isFunction],
    ['emailaddress', isEmailAddress]
  ]);
}
const desclarartionIsArray = function (value: any, desclarartion: any): boolean {
  if (isString(desclarartion) && desclarartion.slice(desclarartion.length - 2, desclarartion.length) === '[]' && isArray(value)) {
    return true;
  }
  return false;
};
const desclarartionIsArrayList = function (value: any, desclarartion: any): boolean {
  if (isArray(value) && isArray(desclarartion)) {
    return true;
  }
  return false;
};
const desclarartionIsObject = function (value: any, desclarartion: any): boolean {
  if (isObject(value) && isObject(desclarartion)) {
    return true;
  }
  return false;
}
const getArrayCheckThreshold = function (valueLength: number, threshold?: number, ): number {
  if (threshold !== undefined) {
    return Math.min(threshold, valueLength);
  } else {
    return valueLength;
  }
}
const checkOneDesclarartion = function (value: any, desclarartion: string): boolean {
  if (desclarartion[0] === '?') {
    if (value === undefined) {
      return true;
    } else {
      return checkOneDesclarartion(value, desclarartion.slice(1))
    }
  };
  const typeFun = typeCase().get(desclarartion);
  if (typeof typeFun === 'function') {
    return typeFun(value);
  } else {
    return false;
  }
}
const checkItem = function (value: any, desclarartion: string): boolean {
  if (isString(desclarartion)) {
    desclarartion = desclarartion.toLowerCase().replace(/ /g, '');
    let desclarartions = desclarartion.split('|');
    for (let i = 0; i < desclarartions.length; i++) {
      if (!checkOneDesclarartion(value, desclarartions[i])) {
        continue;
      } else {
        return true;
      }
    }
  }
  return false;
}
const checkArray = function (value: any[], desclarartion: string, option?: Ioption): boolean {
  const threshold = option ? option.threshold : undefined;
  const arrayItemDesclarartion = desclarartion.slice(0, desclarartion.length - 2);
  let checkThreshold = getArrayCheckThreshold(value.length, threshold);
  while (checkThreshold) {
    if (option && typeof option.onCheck === 'function') {
      option.onCheck(value[checkThreshold - 1], (desclarartion[checkThreshold - 1] || desclarartion[0]), checkThreshold);
    }
    if (checkItem(value[checkThreshold - 1], arrayItemDesclarartion)) {
      checkThreshold--;
      continue;
    } else {
      if (option && typeof option.onError === 'function') {
        option.onError(value[checkThreshold - 1], (desclarartion[checkThreshold - 1] || desclarartion[0]), checkThreshold);
      }
      return false;
    }
  }
  if (option && typeof option.onSucess === 'function') {
    option.onSucess(value[checkThreshold - 1], (desclarartion[checkThreshold - 1] || desclarartion[0]), checkThreshold);
  }
  return true;
}
const checkArrayList = function (value: any[], desclarartion: any[], option?: Ioption): boolean {
  const threshold = option ? option.threshold : undefined;

  let checkThreshold = getArrayCheckThreshold(value.length, threshold);
  while (checkThreshold) {
    if (option && typeof option.onCheck === 'function') {
      option.onCheck(value[checkThreshold - 1], (desclarartion[checkThreshold - 1] || desclarartion[0]), checkThreshold);
    }
    if (check(value[checkThreshold - 1], (desclarartion[checkThreshold - 1] || desclarartion[0]))) {
      checkThreshold--;
      continue;
    } else {
      if (option && typeof option.onError === 'function') {
        option.onError(value[checkThreshold - 1], (desclarartion[checkThreshold - 1] || desclarartion[0]), checkThreshold);
      }
      return false;
    }
  }
  if (option && typeof option.onSucess === 'function') {
    option.onSucess(value[checkThreshold - 1], (desclarartion[checkThreshold - 1] || desclarartion[0]), checkThreshold);
  }
  return true;
}

const checkObject = function (value: object, desclarartion: object, option?: Ioption) {
  for (let item in desclarartion) {
    if (option && typeof option.onCheck === 'function') {
      option.onCheck(value[item], desclarartion[item]);
    }
    if (check(value[item], desclarartion[item], option)) {
      continue;
    } else {
      if (option && typeof option.onError === 'function') {
        option.onError(value[item], desclarartion[item]);
      }
      return false;
    }
  }
  return true;
}

const check = function (value: any, desclarartion: any, option?: Ioption): boolean {
  if (desclarartionIsArray(value, desclarartion)) {
    return checkArray(value, desclarartion, option);
  }
  if (desclarartionIsArrayList(value, desclarartion)) {
    return checkArrayList(value, desclarartion, option);
  }
  if (desclarartionIsObject(value, desclarartion)) {
    return checkObject(value, desclarartion, option);
  }
  if (isString(desclarartion)) {
    return checkItem(value, desclarartion);
  }
  return false;
}

/**
 * get next node information
 * like next node name isArray? canBeUndefind？
 *
 * @param {object} nodeDesclarartion
 * @returns {InodeInfor}
 */
const getNextNodeInfor = function (nodeDesclarartion: object): InodeInfor {
  const nodeInfor = {
    nextNodeName: '',
    isArray: false,
    canBeUndefind: false
  };
  const nodeReg = /node/g;
  for (let item in nodeDesclarartion) {
    if (nodeReg.test(nodeDesclarartion[item])) {
      nodeInfor.nextNodeName = item;
      if (nodeDesclarartion[item].slice(nodeDesclarartion[item].length - 2, nodeDesclarartion[item].length) === '[]') {
        nodeInfor.isArray = true;
      }
      if (nodeDesclarartion[item][0] === '?') {
        nodeInfor.canBeUndefind = true
      }
    }
  }
  return nodeInfor;
}

const checkTreeNode = function (node: any, nodeDesclarartion: object, nodeInfor: InodeInfor, counter: { checkCount: number }, option?: Ioption): boolean {
  counter.checkCount++;
  if (option && typeof option.onTick === 'function') {
    option.onTick(node, counter.checkCount);
  }
  if (option && option.threshold !== undefined && counter.checkCount > option.threshold) {
    return true;
  }
  if (!isObject(node)) {
    if (option && typeof option.onError === 'function') {
      option.onError(node, counter.checkCount);
    }
    return false;
  }
  for (let item in nodeDesclarartion) {
    if (item !== nodeInfor.nextNodeName) {
      if (option && typeof option.onCheck === 'function') {
        option.onCheck(node[item], nodeDesclarartion[item], counter.checkCount);
      }
      if (check(node[item], nodeDesclarartion[item])) {
        continue;
      } else {
        if (option && typeof option.onError === 'function') {
          option.onError(node, counter.checkCount);
        }
        return false;
      }
    } else {
      if (nodeInfor.canBeUndefind && node[nodeInfor.nextNodeName] === undefined) {
        return true;
      }
      if (nodeInfor.isArray) {
        for (let i = 0; i < node[nodeInfor.nextNodeName].length; i++) {
          if (checkTreeNode(node[nodeInfor.nextNodeName][i], nodeDesclarartion, nodeInfor, counter, option)) {
            if (option && option.threshold !== undefined && counter.checkCount > option.threshold) {
              return true;
            }
            continue;
          } else {
            return false;
          }
        }
      } else {
        return checkTreeNode(node[nodeInfor.nextNodeName], nodeDesclarartion, nodeInfor, counter, option);
      }
    }
  }
  return true;
}

/**
 * checkTree 
 *
 * @param {*} value valueBeCheck
 * @param {object} nodeDesclarartion node desclarartion use 'node' to define next node name
 * @param {Ioption} [option]
 * @returns {boolean}
 */
const checkTree = function (value: any, nodeDesclarartion: object, option?: Ioption): boolean {
  const nodeInfor = getNextNodeInfor(nodeDesclarartion);
  let counter: { checkCount: number } = { checkCount: 0 };
  const result = checkTreeNode(value, nodeDesclarartion, nodeInfor, counter, option);
  if (result && option && typeof option.onSucess === 'function') {
    option.onSucess(counter.checkCount);
  }
  return result;
}
export { check as default, checkTree };