"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var textColor = {};
var textList = ['aliceblue', 'antiquewhite', 'aqua', 'aquamarine', 'azure', 'beige', 'bisque', 'black', 'blanchedalmond', 'blue', 'blueviolet', 'brown', 'burlywood', 'cadetblue', 'chartreuse', 'chocolate', 'coral', 'cornflowerblue', 'cornsilk', 'crimson', 'cyan', 'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray', 'darkgreen', 'darkkhaki', 'darkmagenta', 'darkolivegreen', 'darkorange', 'darkorchid', 'darkred', 'darksalmon', 'darkseagreen', 'darkslateblue', 'darkslategray', 'darkturquoise', 'darkviolet', 'deeppink', 'deepskyblue', 'dimgray', 'dodgerblue', 'feldspar', 'firebrick', 'floralwhite', 'forestgreen', 'fuchsia', 'gainsboro', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'green', 'greenyellow', 'honeydew', 'hotpink', 'indianred', 'indigo', 'ivory', 'khaki', 'lavender', 'lavenderblush', 'lawngreen', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan', 'lightgoldenrodyellow', 'lightgrey', 'lightgreen', 'lightpink', 'lightsalmon', 'lightseagreen', 'lightskyblue', 'lightslateblue', 'lightslategray', 'lightsteelblue', 'lightyellow', 'lime', 'limegreen', 'linen', 'magenta', 'maroon', 'mediumaquamarine', 'mediumblue', 'mediumorchid', 'mediumpurple', 'mediumseagreen', 'mediumslateblue', 'mediumspringgreen', 'mediumturquoise', 'mediumvioletred', 'midnightblue', 'mintcream', 'mistyrose', 'moccasin', 'navajowhite', 'navy', 'oldlace', 'olive', 'olivedrab', 'orange', 'orangered', 'orchid', 'palegoldenrod', 'palegreen', 'paleturquoise', 'palevioletred', 'papayawhip', 'peachpuff', 'peru', 'pink', 'plum', 'powderblue', 'purple', 'red', 'rosybrown', 'royalblue', 'saddlebrown', 'salmon', 'sandybrown', 'seagreen', 'seashell', 'sienna', 'silver', 'skyblue', 'slateblue', 'slategray', 'snow', 'springgreen', 'steelblue', 'tan', 'teal', 'thistle', 'tomato', 'turquoise', 'violet', 'violetred', 'wheat', 'white', 'whitesmoke', 'yellow', 'yellowgreen'];
textList.forEach(function (colorName) {
    textColor[colorName] = true;
});
var isNumber = function (value) {
    if (typeof value === 'number' && !isNaN(value)) {
        return true;
    }
    return false;
};
var isInt = function (value) {
    return Number.isInteger(value);
};
var isString = function (value) {
    if (typeof value === 'string') {
        return true;
    }
    return false;
};
var isBoolean = function (value) {
    if (value === true || value === false) {
        return true;
    }
    return false;
};
var isAny = function (value) {
    return true;
};
var isTextColor = function (value) {
    if (textColor[value] === true) {
        return true;
    }
    return false;
};
var isColor = function (value) {
    var HEXColorReg = /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/g;
    var RGBAColorReg = /^[rR][gG][Bb][Aa]?[\(]([\s]*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?),){2}[\s]*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?),?[\s]*(0?\.\d{1,2}|1|0)?[\)]{1}$/g;
    if (isString(value) && (RGBAColorReg.test(value) || HEXColorReg.test(value) || isTextColor(value.toLowerCase()))) {
        return true;
    }
    return false;
};
var isObject = function (value) {
    if (typeof value === 'object' && value !== null) {
        return true;
    }
    return false;
};
var isArray = function (value) {
    return Array.isArray(value);
};
var isFunction = function (value) {
    if (typeof value === 'function') {
        return true;
    }
    return false;
};
var isDate = function (value) {
    if (isObject(value) && value.constructor && value.constructor.name === 'Date') {
        return true;
    }
    var reg = /^(\d{1,4})(~|,|.|_|-|\/)(\d{1,2})\2(\d{1,2})$/;
    var result = value.match(reg);
    if (result === null) {
        return false;
    }
    result[3] = result[3] - 1;
    var d = new Date(result[1], result[3], result[4]);
    if (d.getFullYear() != result[1] || d.getMonth() != result[3] || d.getDate() != result[4]) {
        return false;
    }
    return true;
};
var isEmailAddress = function (value) {
    var emailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    if (emailReg.test(value)) {
        return true;
    }
    return false;
};
var isRegExp = function (value) {
    if (value && value.constructor && value.constructor.name === 'RegExp') {
        return true;
    }
    return false;
};
var typeCase = function () {
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
        ['emailaddress', isEmailAddress],
        ['regexp', isRegExp],
    ]);
};
var desclarartionIsArray = function (value, desclarartion) {
    if (isString(desclarartion) && desclarartion.slice(desclarartion.length - 2, desclarartion.length) === '[]' && isArray(value)) {
        return true;
    }
    return false;
};
var desclarartionIsArrayList = function (value, desclarartion) {
    if (isArray(value) && isArray(desclarartion)) {
        return true;
    }
    return false;
};
var desclarartionIsObject = function (value, desclarartion) {
    if (isObject(value) && isObject(desclarartion)) {
        return true;
    }
    return false;
};
var getArrayCheckThreshold = function (valueLength, threshold) {
    if (threshold !== undefined) {
        return Math.min(threshold, valueLength);
    }
    else {
        return valueLength;
    }
};
var checkOneDesclarartion = function (value, desclarartion) {
    if (desclarartion[0] === '?') {
        if (value === undefined) {
            return true;
        }
        else {
            return checkOneDesclarartion(value, desclarartion.slice(1));
        }
    }
    ;
    var typeFun = typeCase().get(desclarartion);
    if (typeof typeFun === 'function') {
        return typeFun(value);
    }
    else {
        return false;
    }
};
var checkItem = function (value, desclarartion, key) {
    if (isString(desclarartion)) {
        desclarartion = desclarartion.toLowerCase().replace(/ /g, '');
        var desclarartions = desclarartion.split('|');
        for (var i = 0; i < desclarartions.length; i++) {
            if (!checkOneDesclarartion(value, desclarartions[i])) {
                continue;
            }
            else {
                return true;
            }
        }
    }
    return false;
};
var checkArray = function (value, desclarartion, option, key) {
    var threshold = option ? option.threshold : undefined;
    var arrayItemDesclarartion = desclarartion.slice(0, desclarartion.length - 2);
    var checkThreshold = getArrayCheckThreshold(value.length, threshold);
    while (checkThreshold) {
        if (option && typeof option.onCheck === 'function') {
            option.onCheck(value[checkThreshold - 1], (desclarartion[checkThreshold - 1] || desclarartion[0]), key, checkThreshold);
        }
        if (checkItem(value[checkThreshold - 1], arrayItemDesclarartion, key)) {
            checkThreshold--;
            continue;
        }
        else {
            if (option && typeof option.onError === 'function') {
                option.onError(value[checkThreshold - 1], (desclarartion[checkThreshold - 1] || desclarartion[0]), key, checkThreshold);
            }
            return false;
        }
    }
    if (option && typeof option.onSucess === 'function') {
        option.onSucess(value[checkThreshold - 1], (desclarartion[checkThreshold - 1] || desclarartion[0]), checkThreshold);
    }
    return true;
};
var checkArrayList = function (value, desclarartion, option, key) {
    var threshold = option ? option.threshold : undefined;
    var checkThreshold = getArrayCheckThreshold(value.length, threshold);
    while (checkThreshold) {
        if (option && typeof option.onCheck === 'function') {
            option.onCheck(value[checkThreshold - 1], (desclarartion[checkThreshold - 1] || desclarartion[0]), key, checkThreshold);
        }
        if (check(value[checkThreshold - 1], (desclarartion[checkThreshold - 1] || desclarartion[0]), option, key)) {
            checkThreshold--;
            continue;
        }
        else {
            if (option && typeof option.onError === 'function') {
                option.onError(value[checkThreshold - 1], (desclarartion[checkThreshold - 1] || desclarartion[0]), key, checkThreshold);
            }
            return false;
        }
    }
    if (option && typeof option.onSucess === 'function') {
        option.onSucess(value[checkThreshold - 1], (desclarartion[checkThreshold - 1] || desclarartion[0]), checkThreshold);
    }
    return true;
};
var checkObject = function (value, desclarartion, option) {
    for (var item in desclarartion) {
        if (option && typeof option.onCheck === 'function') {
            option.onCheck(value[item], desclarartion[item], item);
        }
        if (check(value[item], desclarartion[item], option, item)) {
            continue;
        }
        else {
            if (option && typeof option.onError === 'function') {
                option.onError(value[item], desclarartion[item], item);
            }
            return false;
        }
    }
    return true;
};
var check = function (value, desclarartion, option, key) {
    if (desclarartionIsArray(value, desclarartion)) {
        return checkArray(value, desclarartion, option, key);
    }
    if (desclarartionIsArrayList(value, desclarartion)) {
        return checkArrayList(value, desclarartion, option, key);
    }
    if (desclarartionIsObject(value, desclarartion)) {
        return checkObject(value, desclarartion, option);
    }
    if (isString(desclarartion)) {
        return checkItem(value, desclarartion, key);
    }
    return false;
};
exports.default = check;
var getNextNodeInfor = function (nodeDesclarartion) {
    var nodeInfor = {
        nextNodeName: '',
        isArray: false,
        canBeUndefind: false
    };
    var nodeReg = /node/g;
    for (var item in nodeDesclarartion) {
        if (nodeReg.test(nodeDesclarartion[item])) {
            nodeInfor.nextNodeName = item;
            if (nodeDesclarartion[item].slice(nodeDesclarartion[item].length - 2, nodeDesclarartion[item].length) === '[]') {
                nodeInfor.isArray = true;
            }
            if (nodeDesclarartion[item][0] === '?') {
                nodeInfor.canBeUndefind = true;
            }
        }
    }
    return nodeInfor;
};
var checkTreeNode = function (node, nodeDesclarartion, nodeInfor, counter, option) {
    counter.checkCount++;
    if (option && typeof option.onTick === 'function') {
        option.onTick(node, counter.checkCount);
    }
    if (option && option.threshold !== undefined && counter.checkCount > option.threshold) {
        return true;
    }
    if (!isObject(node)) {
        if (option && typeof option.onError === 'function') {
            option.onError(node, nodeDesclarartion, nodeInfor.nextNodeName, counter.checkCount);
        }
        return false;
    }
    for (var item in nodeDesclarartion) {
        if (item !== nodeInfor.nextNodeName) {
            if (option && typeof option.onCheck === 'function') {
                option.onCheck(node[item], nodeDesclarartion[item], item, counter.checkCount);
            }
            if (check(node[item], nodeDesclarartion[item], option, item)) {
                continue;
            }
            else {
                if (option && typeof option.onError === 'function') {
                    option.onError(node, counter.checkCount, item);
                }
                return false;
            }
        }
        else {
            if (nodeInfor.canBeUndefind && node[nodeInfor.nextNodeName] === undefined) {
                return true;
            }
            if (nodeInfor.isArray) {
                for (var i = 0; i < node[nodeInfor.nextNodeName].length; i++) {
                    if (checkTreeNode(node[nodeInfor.nextNodeName][i], nodeDesclarartion, nodeInfor, counter, option)) {
                        if (option && option.threshold !== undefined && counter.checkCount > option.threshold) {
                            return true;
                        }
                        continue;
                    }
                    else {
                        return false;
                    }
                }
            }
            else {
                return checkTreeNode(node[nodeInfor.nextNodeName], nodeDesclarartion, nodeInfor, counter, option);
            }
        }
    }
    return true;
};
var checkTree = function (value, nodeDesclarartion, option) {
    var nodeInfor = getNextNodeInfor(nodeDesclarartion);
    var counter = { checkCount: 0 };
    var result = checkTreeNode(value, nodeDesclarartion, nodeInfor, counter, option);
    if (result && option && typeof option.onSucess === 'function') {
        option.onSucess(counter.checkCount);
    }
    return result;
};
exports.checkTree = checkTree;
//# sourceMappingURL=index.js.map