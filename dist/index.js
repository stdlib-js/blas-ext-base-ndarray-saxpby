"use strict";var c=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var d=c(function(g,q){
var l=require('@stdlib/ndarray-base-numel-dimension/dist'),u=require('@stdlib/ndarray-base-stride/dist'),v=require('@stdlib/ndarray-base-offset/dist'),n=require('@stdlib/ndarray-base-data-buffer/dist'),o=require('@stdlib/blas-ext-base-saxpby/dist').ndarray,s=require('@stdlib/ndarray-base-ndarraylike2scalar/dist');function p(e){var r,t,a,i;return a=e[0],i=e[1],r=s(e[2]),t=s(e[3]),o(l(a,0),r,n(a),u(a,0),v(a),t,n(i),u(i,0),v(i)),i}q.exports=p
});var x=d();module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
