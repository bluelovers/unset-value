/*!
 * unset-value <https://github.com/jonschlinkert/unset-value>
 *
 * Copyright (c) 2015, 2017, Jon Schlinkert.
 * Released under the MIT License.
 */

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isobject_1 = __importDefault(require("isobject"));
const split_string_1 = __importDefault(require("split-string"));
function _unset(obj, paths) {
  if (!isobject_1.default(obj)) {
    throw new TypeError('expected an object.');
  }
  if (!Array.isArray(paths)) {
    paths = split_string_1.default(paths);
  }
  else {
    paths = paths.slice();
  }
  let prop;
  let target = obj;
  let latest = paths.pop();
  for (prop of paths) {
    if (prop in target) {
      target = target[prop];
    }
    else {
      return true;
    }
  }
  if (latest in target) {
    return (delete target[latest]);
  }
  return true;
}
module.exports = _unset;
exports.default = _unset;
