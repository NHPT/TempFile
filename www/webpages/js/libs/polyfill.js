"function"!=typeof Array.prototype.reduce&&(Array.prototype.reduce=function(t,r){"use strict";if(null==this)throw new TypeError("Array.prototype.reduce called on null or undefined");if("function"!=typeof t)throw new TypeError(t+" is not a function");var e,o=0,n=this.length>>>0,i=!1;for(1<arguments.length&&(e=r,i=!0);o<n;++o)this.hasOwnProperty(o)&&(i?e=t(e,this[o],o,this):(e=this[o],i=!0));if(i)return e;throw new TypeError("Reduce of empty array with no initial value")}),Function.prototype.bind||(Function.prototype.bind=function(t){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");function r(){return o.apply(this instanceof n&&t?this:t,e.concat(Array.prototype.slice.call(arguments)))}var e=Array.prototype.slice.call(arguments,1),o=this,n=function(){};return n.prototype=this.prototype,r.prototype=new n,r}),Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(t,r){if(null==this)throw new TypeError('"this" is null or not defined');var e=Object(this),o=e.length>>>0;if(0!=o)for(var n,i,r=0|r,p=Math.max(0<=r?r:o-Math.abs(r),0);p<o;){if((n=e[p])===(i=t)||"number"==typeof n&&"number"==typeof i&&isNaN(n)&&isNaN(i))return!0;p++}return!1}}),Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(t){if(null==this)throw new TypeError('"this" is null or not defined');var r=Object(this),e=r.length>>>0;if("function"!=typeof t)throw new TypeError("predicate must be a function");for(var o=arguments[1],n=0;n<e;){var i=r[n];if(t.call(o,i,n,r))return i;n++}}}),Array.prototype.indexOf||(Array.prototype.indexOf=function(t){var r=this.length>>>0,e=Number(arguments[1])||0;for((e=e<0?Math.ceil(e):Math.floor(e))<0&&(e+=r);e<r;e++)if(e in this&&this[e]===t)return e;return-1}),String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")});