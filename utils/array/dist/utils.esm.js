var e={deepCopy:function e(t){if(null===t||"object"!=typeof t)return t;if(t instanceof Date)return new Date(t.getTime());if(t instanceof RegExp)return new RegExp(t);if(Array.isArray(t)){const n=[];for(let r=0;r<t.length;r++)n[r]=e(t[r]);return n}const n={};for(const r in t)t.hasOwnProperty(r)&&(n[r]=e(t[r]));return n}};export{e as default};
//# sourceMappingURL=utils.esm.js.map
