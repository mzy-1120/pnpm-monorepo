"use strict";var e={deepCopy:function e(t){if(null===t||"object"!=typeof t)return t;if(t instanceof Date)return new Date(t.getTime());if(t instanceof RegExp)return new RegExp(t);if(Array.isArray(t)){const r=[];for(let n=0;n<t.length;n++)r[n]=e(t[n]);return r}const r={};for(const n in t)t.hasOwnProperty(n)&&(r[n]=e(t[n]));return r}};module.exports=e;
//# sourceMappingURL=utils.cjs.js.map
