parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"tLuV":[function(require,module,exports) {
const e=document.getElementById("search-form"),t=document.querySelector(".body"),o=document.getElementsByTagName("button");function n(e){e.preventDefault();const t=e.currentTarget.elements.searchQuery.value;console.log(t),a(t)}function a(e){if(e){return fetch(`https://pixabay.com/api/?key=24572731-dd81b25f4ab1454a48aca0751&q=${e}&image_type=photo&orientation=horizontal&safesearch=true?fields=webformatURL,largeImageURL,tags,likes,views,comments,downloads`).then(e=>{if(!e.ok)throw Error(e.statusText);return e.json()})}}e.addEventListener("submit",n);
},{}],"Focm":[function(require,module,exports) {
"use strict";require("./work.js");
},{"./work.js":"tLuV"}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-11/src.d758cdd2.js.map