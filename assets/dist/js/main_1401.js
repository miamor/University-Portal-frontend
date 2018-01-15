/*! jQuery v1.9.1 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license
*/
!function(e,t){function n(e){var t=e.length,n=se.type(e);return!se.isWindow(e)&&(!(1!==e.nodeType||!t)||("array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)))}function r(e){var t=we[e]={};return se.each(e.match(le)||[],function(e,n){t[n]=!0}),t}function i(e,n,r,i){if(se.acceptData(e)){var o,a,s=se.expando,u="string"==typeof n,l=e.nodeType,c=l?se.cache:e,f=l?e[s]:e[s]&&s;if(f&&c[f]&&(i||c[f].data)||!u||r!==t)return f||(l?e[s]=f=K.pop()||se.guid++:f=s),c[f]||(c[f]={},l||(c[f].toJSON=se.noop)),("object"==typeof n||"function"==typeof n)&&(i?c[f]=se.extend(c[f],n):c[f].data=se.extend(c[f].data,n)),o=c[f],i||(o.data||(o.data={}),o=o.data),r!==t&&(o[se.camelCase(n)]=r),u?null==(a=o[n])&&(a=o[se.camelCase(n)]):a=o,a}}function o(e,t,n){if(se.acceptData(e)){var r,i,o,a=e.nodeType,u=a?se.cache:e,l=a?e[se.expando]:se.expando;if(u[l]){if(t&&(o=n?u[l]:u[l].data)){se.isArray(t)?t=t.concat(se.map(t,se.camelCase)):t in o?t=[t]:(t=se.camelCase(t),t=t in o?[t]:t.split(" "));for(r=0,i=t.length;i>r;r++)delete o[t[r]];if(!(n?s:se.isEmptyObject)(o))return}(n||(delete u[l].data,s(u[l])))&&(a?se.cleanData([e],!0):se.support.deleteExpando||u!=u.window?delete u[l]:u[l]=null)}}}function a(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(Ce,"-$1").toLowerCase();if("string"==typeof(r=e.getAttribute(i))){try{r="true"===r||"false"!==r&&("null"===r?null:+r+""===r?+r:Ne.test(r)?se.parseJSON(r):r)}catch(e){}se.data(e,n,r)}else r=t}return r}function s(e){var t;for(t in e)if(("data"!==t||!se.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}function u(){return!0}function l(){return!1}function c(e,t){do{e=e[t]}while(e&&1!==e.nodeType);return e}function f(e,t,n){if(t=t||0,se.isFunction(t))return se.grep(e,function(e,r){return!!t.call(e,r,e)===n});if(t.nodeType)return se.grep(e,function(e){return e===t===n});if("string"==typeof t){var r=se.grep(e,function(e){return 1===e.nodeType});if($e.test(t))return se.filter(t,r,!n);t=se.filter(t,r)}return se.grep(e,function(e){return se.inArray(e,t)>=0===n})}function p(e){var t=Xe.split("|"),n=e.createDocumentFragment();if(n.createElement)for(;t.length;)n.createElement(t.pop());return n}function d(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function h(e){var t=e.getAttributeNode("type");return e.type=(t&&t.specified)+"/"+e.type,e}function g(e){var t=rt.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function m(e,t){for(var n,r=0;null!=(n=e[r]);r++)se._data(n,"globalEval",!t||se._data(t[r],"globalEval"))}function y(e,t){if(1===t.nodeType&&se.hasData(e)){var n,r,i,o=se._data(e),a=se._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)se.event.add(t,n,s[n][r])}a.data&&(a.data=se.extend({},a.data))}}function v(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!se.support.noCloneEvent&&t[se.expando]){i=se._data(t);for(r in i.events)se.removeEvent(t,r,i.handle);t.removeAttribute(se.expando)}"script"===n&&t.text!==e.text?(h(t).text=e.text,g(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),se.support.html5Clone&&e.innerHTML&&!se.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&et.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}function b(e,n){var r,i,o=0,a=typeof e.getElementsByTagName!==U?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==U?e.querySelectorAll(n||"*"):t;if(!a)for(a=[],r=e.childNodes||e;null!=(i=r[o]);o++)!n||se.nodeName(i,n)?a.push(i):se.merge(a,b(i,n));return n===t||n&&se.nodeName(e,n)?se.merge([e],a):a}function x(e){et.test(e.type)&&(e.defaultChecked=e.checked)}function T(e,t){if(t in e)return t;for(var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=wt.length;i--;)if((t=wt[i]+n)in e)return t;return r}function w(e,t){return e=t||e,"none"===se.css(e,"display")||!se.contains(e.ownerDocument,e)}function N(e,t){for(var n,r,i,o=[],a=0,s=e.length;s>a;a++)(r=e[a]).style&&(o[a]=se._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&w(r)&&(o[a]=se._data(r,"olddisplay",S(r.nodeName)))):o[a]||(i=w(r),(n&&"none"!==n||!i)&&se._data(r,"olddisplay",i?n:se.css(r,"display"))));for(a=0;s>a;a++)(r=e[a]).style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}function C(e,t,n){var r=gt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function k(e,t,n,r,i){for(var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;4>o;o+=2)"margin"===n&&(a+=se.css(e,n+Tt[o],!0,i)),r?("content"===n&&(a-=se.css(e,"padding"+Tt[o],!0,i)),"margin"!==n&&(a-=se.css(e,"border"+Tt[o]+"Width",!0,i))):(a+=se.css(e,"padding"+Tt[o],!0,i),"padding"!==n&&(a+=se.css(e,"border"+Tt[o]+"Width",!0,i)));return a}function E(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=ut(e),a=se.support.boxSizing&&"border-box"===se.css(e,"boxSizing",!1,o);if(0>=i||null==i){if((0>(i=lt(e,t,o))||null==i)&&(i=e.style[t]),mt.test(i))return i;r=a&&(se.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+k(e,t,n||(a?"border":"content"),r,o)+"px"}function S(e){var t=V,n=vt[e];return n||("none"!==(n=A(e,t))&&n||(st=(st||se("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),(t=(st[0].contentWindow||st[0].contentDocument).document).write("<!doctype html><html><body>"),t.close(),n=A(e,t),st.detach()),vt[e]=n),n}function A(e,t){var n=se(t.createElement(e)).appendTo(t.body),r=se.css(n[0],"display");return n.remove(),r}function j(e,t,n,r){var i;if(se.isArray(t))se.each(t,function(t,i){n||Ct.test(e)?r(e,i):j(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==se.type(t))r(e,t);else for(i in t)j(e+"["+i+"]",t[i],n,r)}function D(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(le)||[];if(se.isFunction(n))for(;r=o[i++];)"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function L(e,n,r,i){function o(u){var l;return a[u]=!0,se.each(e[u]||[],function(e,u){var c=u(n,r,i);return"string"!=typeof c||s||a[c]?s?!(l=c):t:(n.dataTypes.unshift(c),o(c),!1)}),l}var a={},s=e===Wt;return o(n.dataTypes[0])||!a["*"]&&o("*")}function H(e,n){var r,i,o=se.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&se.extend(!0,e,r),e}function q(e,n,r){var i,o,a,s,u=e.contents,l=e.dataTypes,c=e.responseFields;for(s in c)s in r&&(n[c[s]]=r[s]);for(;"*"===l[0];)l.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in u)if(u[s]&&u[s].test(o)){l.unshift(s);break}if(l[0]in r)a=l[0];else{for(s in r){if(!l[0]||e.converters[s+" "+l[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==l[0]&&l.unshift(a),r[a]):t}function M(e,t){var n,r,i,o,a={},s=0,u=e.dataTypes.slice(),l=u[0];if(e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u[1])for(i in e.converters)a[i.toLowerCase()]=e.converters[i];for(;r=u[++s];)if("*"!==r){if("*"!==l&&l!==r){if(!(i=a[l+" "+r]||a["* "+r]))for(n in a)if((o=n.split(" "))[1]===r&&(i=a[l+" "+o[0]]||a["* "+o[0]])){!0===i?i=a[n]:!0!==a[n]&&(r=o[0],u.splice(s--,0,r));break}if(!0!==i)if(i&&e.throws)t=i(t);else try{t=i(t)}catch(e){return{state:"parsererror",error:i?e:"No conversion from "+l+" to "+r}}}l=r}return{state:"success",data:t}}function _(){try{return new e.XMLHttpRequest}catch(e){}}function F(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(e){}}function O(){return setTimeout(function(){Jt=t}),Jt=se.now()}function B(e,t){se.each(t,function(t,n){for(var r=(tn[t]||[]).concat(tn["*"]),i=0,o=r.length;o>i;i++)if(r[i].call(e,t,n))return})}function P(e,t,n){var r,i,o=0,a=en.length,s=se.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=Jt||O(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;a>o;o++)l.tweens[o].run(r);return s.notifyWith(e,[l,r,n]),1>r&&a?n:(s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:se.extend({},t),opts:se.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Jt||O(),duration:n.duration,tweens:[],createTween:function(t,n){var r=se.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?s.resolveWith(e,[l,t]):s.rejectWith(e,[l,t]),this}}),c=l.props;for(R(c,l.opts.specialEasing);a>o;o++)if(r=en[o].call(l,e,c,l.opts))return r;return B(l,c),se.isFunction(l.opts.start)&&l.opts.start.call(e,l),se.fx.timer(se.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function R(e,t){var n,r,i,o,a;for(i in e)if(r=se.camelCase(i),o=t[r],n=e[i],se.isArray(n)&&(o=n[1],n=e[i]=n[0]),i!==r&&(e[r]=n,delete e[i]),(a=se.cssHooks[r])&&"expand"in a){n=a.expand(n),delete e[r];for(i in n)i in e||(e[i]=n[i],t[i]=o)}else t[r]=o}function W(e,t,n,r,i){return new W.prototype.init(e,t,n,r,i)}function $(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Tt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function I(e){return se.isWindow(e)?e:9===e.nodeType&&(e.defaultView||e.parentWindow)}var z,X,U=typeof t,V=e.document,Y=e.location,J=e.jQuery,G=e.$,Q={},K=[],Z="1.9.1",ee=K.concat,te=K.push,ne=K.slice,re=K.indexOf,ie=Q.toString,oe=Q.hasOwnProperty,ae=Z.trim,se=function(e,t){return new se.fn.init(e,t,X)},ue=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,le=/\S+/g,ce=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,fe=/^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,pe=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,de=/^[\],:{}\s]*$/,he=/(?:^|:|,)(?:\s*\[)+/g,ge=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,me=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,ye=/^-ms-/,ve=/-([\da-z])/gi,be=function(e,t){return t.toUpperCase()},xe=function(e){(V.addEventListener||"load"===e.type||"complete"===V.readyState)&&(Te(),se.ready())},Te=function(){V.addEventListener?(V.removeEventListener("DOMContentLoaded",xe,!1),e.removeEventListener("load",xe,!1)):(V.detachEvent("onreadystatechange",xe),e.detachEvent("onload",xe))};se.fn=se.prototype={jquery:Z,constructor:se,init:function(e,n,r){var i,o;if(!e)return this;if("string"==typeof e){if(!(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:fe.exec(e))||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof se?n[0]:n,se.merge(this,se.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:V,!0)),pe.test(i[1])&&se.isPlainObject(n))for(i in n)se.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if((o=V.getElementById(i[2]))&&o.parentNode){if(o.id!==i[2])return r.find(e);this.length=1,this[0]=o}return this.context=V,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):se.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),se.makeArray(e,this))},selector:"",length:0,size:function(){return this.length},toArray:function(){return ne.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=se.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return se.each(this,e,t)},ready:function(e){return se.ready.promise().done(e),this},slice:function(){return this.pushStack(ne.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(se.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:te,sort:[].sort,splice:[].splice},se.fn.init.prototype=se.fn,se.extend=se.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},u=1,l=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},u=2),"object"==typeof s||se.isFunction(s)||(s={}),l===u&&(s=this,--u);l>u;u++)if(null!=(o=arguments[u]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(se.isPlainObject(r)||(n=se.isArray(r)))?(n?(n=!1,a=e&&se.isArray(e)?e:[]):a=e&&se.isPlainObject(e)?e:{},s[i]=se.extend(c,a,r)):r!==t&&(s[i]=r));return s},se.extend({noConflict:function(t){return e.$===se&&(e.$=G),t&&e.jQuery===se&&(e.jQuery=J),se},isReady:!1,readyWait:1,holdReady:function(e){e?se.readyWait++:se.ready(!0)},ready:function(e){if(!0===e?!--se.readyWait:!se.isReady){if(!V.body)return setTimeout(se.ready);se.isReady=!0,!0!==e&&--se.readyWait>0||(z.resolveWith(V,[se]),se.fn.trigger&&se(V).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===se.type(e)},isArray:Array.isArray||function(e){return"array"===se.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?Q[ie.call(e)]||"object":typeof e},isPlainObject:function(e){if(!e||"object"!==se.type(e)||e.nodeType||se.isWindow(e))return!1;try{if(e.constructor&&!oe.call(e,"constructor")&&!oe.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(e){return!1}var n;for(n in e);return n===t||oe.call(e,n)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||V;var r=pe.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=se.buildFragment([e],t,i),i&&se(i).remove(),se.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=se.trim(n))&&de.test(n.replace(ge,"@").replace(me,"]").replace(he,""))?Function("return "+n)():(se.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(e){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||se.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&se.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(ye,"ms-").replace(ve,be)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,r){var i=0,o=e.length,a=n(e);if(r){if(a)for(;o>i&&!1!==t.apply(e[i],r);i++);else for(i in e)if(!1===t.apply(e[i],r))break}else if(a)for(;o>i&&!1!==t.call(e[i],i,e[i]);i++);else for(i in e)if(!1===t.call(e[i],i,e[i]))break;return e},trim:ae&&!ae.call("\ufeff ")?function(e){return null==e?"":ae.call(e)}:function(e){return null==e?"":(e+"").replace(ce,"")},makeArray:function(e,t){var r=t||[];return null!=e&&(n(Object(e))?se.merge(r,"string"==typeof e?[e]:e):te.call(r,e)),r},inArray:function(e,t,n){var r;if(t){if(re)return re.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else for(;n[o]!==t;)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,r){var i,o=0,a=e.length,s=[];if(n(e))for(;a>o;o++)null!=(i=t(e[o],o,r))&&(s[s.length]=i);else for(o in e)null!=(i=t(e[o],o,r))&&(s[s.length]=i);return ee.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),se.isFunction(e)?(r=ne.call(arguments,2),i=function(){return e.apply(n||this,r.concat(ne.call(arguments)))},i.guid=e.guid=e.guid||se.guid++,i):t},access:function(e,n,r,i,o,a,s){var u=0,l=e.length,c=null==r;if("object"===se.type(r)){o=!0;for(u in r)se.access(e,n,u,r[u],!0,a,s)}else if(i!==t&&(o=!0,se.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(se(e),n)})),n))for(;l>u;u++)n(e[u],r,s?i:i.call(e[u],u,n(e[u],r)));return o?e:c?n.call(e):l?n(e[0],r):a},now:function(){return(new Date).getTime()}}),se.ready.promise=function(t){if(!z)if(z=se.Deferred(),"complete"===V.readyState)setTimeout(se.ready);else if(V.addEventListener)V.addEventListener("DOMContentLoaded",xe,!1),e.addEventListener("load",xe,!1);else{V.attachEvent("onreadystatechange",xe),e.attachEvent("onload",xe);var n=!1;try{n=null==e.frameElement&&V.documentElement}catch(e){}n&&n.doScroll&&function e(){if(!se.isReady){try{n.doScroll("left")}catch(t){return setTimeout(e,50)}Te(),se.ready()}}()}return z.promise(t)},se.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){Q["[object "+t+"]"]=t.toLowerCase()}),X=se(V);var we={};se.Callbacks=function(e){var n,i,o,a,s,u,l=[],c=!(e="string"==typeof e?we[e]||r(e):se.extend({},e)).once&&[],f=function(t){for(i=e.memory&&t,o=!0,s=u||0,u=0,a=l.length,n=!0;l&&a>s;s++)if(!1===l[s].apply(t[0],t[1])&&e.stopOnFalse){i=!1;break}n=!1,l&&(c?c.length&&f(c.shift()):i?l=[]:p.disable())},p={add:function(){if(l){var t=l.length;(function t(n){se.each(n,function(n,r){var i=se.type(r);"function"===i?e.unique&&p.has(r)||l.push(r):r&&r.length&&"string"!==i&&t(r)})})(arguments),n?a=l.length:i&&(u=t,f(i))}return this},remove:function(){return l&&se.each(arguments,function(e,t){for(var r;(r=se.inArray(t,l,r))>-1;)l.splice(r,1),n&&(a>=r&&a--,s>=r&&s--)}),this},has:function(e){return e?se.inArray(e,l)>-1:!(!l||!l.length)},empty:function(){return l=[],this},disable:function(){return l=c=i=t,this},disabled:function(){return!l},lock:function(){return c=t,i||p.disable(),this},locked:function(){return!c},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!l||o&&!c||(n?c.push(t):f(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!o}};return p},se.extend({Deferred:function(e){var t=[["resolve","done",se.Callbacks("once memory"),"resolved"],["reject","fail",se.Callbacks("once memory"),"rejected"],["notify","progress",se.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return se.Deferred(function(n){se.each(t,function(t,o){var a=o[0],s=se.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&se.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?se.extend(e,r):r}},i={};return r.pipe=r.then,se.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t,n,r,i=0,o=ne.call(arguments),a=o.length,s=1!==a||e&&se.isFunction(e.promise)?a:0,u=1===s?e:se.Deferred(),l=function(e,n,r){return function(i){n[e]=this,r[e]=arguments.length>1?ne.call(arguments):i,r===t?u.notifyWith(n,r):--s||u.resolveWith(n,r)}};if(a>1)for(t=Array(a),n=Array(a),r=Array(a);a>i;i++)o[i]&&se.isFunction(o[i].promise)?o[i].promise().done(l(i,r,o)).fail(u.reject).progress(l(i,n,t)):--s;return s||u.resolveWith(r,o),u.promise()}}),se.support=function(){var t,n,r,i,o,a,s,u,l,c,f=V.createElement("div");if(f.setAttribute("className","t"),f.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=f.getElementsByTagName("*"),r=f.getElementsByTagName("a")[0],!n||!r||!n.length)return{};s=(o=V.createElement("select")).appendChild(V.createElement("option")),i=f.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={getSetAttribute:"t"!==f.className,leadingWhitespace:3===f.firstChild.nodeType,tbody:!f.getElementsByTagName("tbody").length,htmlSerialize:!!f.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:"/a"===r.getAttribute("href"),opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:!!i.value,optSelected:s.selected,enctype:!!V.createElement("form").enctype,html5Clone:"<:nav></:nav>"!==V.createElement("nav").cloneNode(!0).outerHTML,boxModel:"CSS1Compat"===V.compatMode,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},i.checked=!0,t.noCloneChecked=i.cloneNode(!0).checked,o.disabled=!0,t.optDisabled=!s.disabled;try{delete f.test}catch(e){t.deleteExpando=!1}(i=V.createElement("input")).setAttribute("value",""),t.input=""===i.getAttribute("value"),i.value="t",i.setAttribute("type","radio"),t.radioValue="t"===i.value,i.setAttribute("checked","t"),i.setAttribute("name","t"),(a=V.createDocumentFragment()).appendChild(i),t.appendChecked=i.checked,t.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,f.attachEvent&&(f.attachEvent("onclick",function(){t.noCloneEvent=!1}),f.cloneNode(!0).click());for(c in{submit:!0,change:!0,focusin:!0})f.setAttribute(u="on"+c,"t"),t[c+"Bubbles"]=u in e||!1===f.attributes[u].expando;return f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===f.style.backgroundClip,se(function(){var n,r,i,o="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",a=V.getElementsByTagName("body")[0];a&&(n=V.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",a.appendChild(n).appendChild(f),f.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=f.getElementsByTagName("td"),i[0].style.cssText="padding:0;margin:0;border:0;display:none",l=0===i[0].offsetHeight,i[0].style.display="",i[1].style.display="none",t.reliableHiddenOffsets=l&&0===i[0].offsetHeight,f.innerHTML="",f.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=4===f.offsetWidth,t.doesNotIncludeMarginInBodyOffset=1!==a.offsetTop,e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(f,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(f,null)||{width:"4px"}).width,r=f.appendChild(V.createElement("div")),r.style.cssText=f.style.cssText=o,r.style.marginRight=r.style.width="0",f.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof f.style.zoom!==U&&(f.innerHTML="",f.style.cssText=o+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===f.offsetWidth,f.style.display="block",f.innerHTML="<div></div>",f.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==f.offsetWidth,t.inlineBlockNeedsLayout&&(a.style.zoom=1)),a.removeChild(n),n=f=i=r=null)}),n=o=a=s=r=i=null,t}();var Ne=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,Ce=/([A-Z])/g;se.extend({cache:{},expando:"jQuery"+(Z+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return!!(e=e.nodeType?se.cache[e[se.expando]]:e[se.expando])&&!s(e)},data:function(e,t,n){return i(e,t,n)},removeData:function(e,t){return o(e,t)},_data:function(e,t,n){return i(e,t,n,!0)},_removeData:function(e,t){return o(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&se.noData[e.nodeName.toLowerCase()];return!t||!0!==t&&e.getAttribute("classid")===t}}),se.fn.extend({data:function(e,n){var r,i,o=this[0],s=0,u=null;if(e===t){if(this.length&&(u=se.data(o),1===o.nodeType&&!se._data(o,"parsedAttrs"))){for(r=o.attributes;r.length>s;s++)(i=r[s].name).indexOf("data-")||(i=se.camelCase(i.slice(5)),a(o,i,u[i]));se._data(o,"parsedAttrs",!0)}return u}return"object"==typeof e?this.each(function(){se.data(this,e)}):se.access(this,function(n){return n===t?o?a(o,e,se.data(o,e)):null:(this.each(function(){se.data(this,e,n)}),t)},null,n,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){se.removeData(this,e)})}}),se.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=se._data(e,n),r&&(!i||se.isArray(r)?i=se._data(e,n,se.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=se.queue(e,t),r=n.length,i=n.shift(),o=se._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),o.cur=i,i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){se.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return se._data(e,n)||se._data(e,n,{empty:se.Callbacks("once memory").add(function(){se._removeData(e,t+"queue"),se._removeData(e,n)})})}}),se.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?se.queue(this[0],e):n===t?this:this.each(function(){var t=se.queue(this,e,n);se._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&se.dequeue(this,e)})},dequeue:function(e){return this.each(function(){se.dequeue(this,e)})},delay:function(e,t){return e=se.fx?se.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=se.Deferred(),a=this,s=this.length,u=function(){--i||o.resolveWith(a,[a])};for("string"!=typeof e&&(n=e,e=t),e=e||"fx";s--;)(r=se._data(a[s],e+"queueHooks"))&&r.empty&&(i++,r.empty.add(u));return u(),o.promise(n)}});var ke,Ee,Se=/[\t\r\n]/g,Ae=/\r/g,je=/^(?:input|select|textarea|button|object)$/i,De=/^(?:a|area)$/i,Le=/^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,He=/^(?:checked|selected)$/i,qe=se.support.getSetAttribute,Me=se.support.input;se.fn.extend({attr:function(e,t){return se.access(this,se.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){se.removeAttr(this,e)})},prop:function(e,t){return se.access(this,se.prop,e,t,arguments.length>1)},removeProp:function(e){return e=se.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(e){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,u="string"==typeof e&&e;if(se.isFunction(e))return this.each(function(t){se(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(le)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(Se," "):" ")){for(o=0;i=t[o++];)0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=se.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,u=0===arguments.length||"string"==typeof e&&e;if(se.isFunction(e))return this.each(function(t){se(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(le)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(Se," "):"")){for(o=0;i=t[o++];)for(;r.indexOf(" "+i+" ")>=0;)r=r.replace(" "+i+" "," ");n.className=e?se.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e,r="boolean"==typeof t;return se.isFunction(e)?this.each(function(n){se(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n)for(var i,o=0,a=se(this),s=t,u=e.match(le)||[];i=u[o++];)s=r?s:!a.hasClass(i),a[s?"addClass":"removeClass"](i);else(n===U||"boolean"===n)&&(this.className&&se._data(this,"__className__",this.className),this.className=this.className||!1===e?"":se._data(this,"__className__")||"")})},hasClass:function(e){for(var t=" "+e+" ",n=0,r=this.length;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(Se," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];return arguments.length?(i=se.isFunction(e),this.each(function(n){var o,a=se(this);1===this.nodeType&&(o=i?e.call(this,n,a.val()):e,null==o?o="":"number"==typeof o?o+="":se.isArray(o)&&(o=se.map(o,function(e){return null==e?"":e+""})),(r=se.valHooks[this.type]||se.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))})):o?(r=se.valHooks[o.type]||se.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(Ae,""):null==n?"":n)):void 0}}),se.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){for(var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,u=0>i?s:o?i:0;s>u;u++)if(!(!(n=r[u]).selected&&u!==i||(se.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&se.nodeName(n.parentNode,"optgroup"))){if(t=se(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n=se.makeArray(t);return se(e).find("option").each(function(){this.selected=se.inArray(se(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attr:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===U?se.prop(e,n,r):((o=1!==s||!se.isXMLDoc(e))&&(n=n.toLowerCase(),i=se.attrHooks[n]||(Le.test(n)?Ee:ke)),r===t?i&&o&&"get"in i&&null!==(a=i.get(e,n))?a:(typeof e.getAttribute!==U&&(a=e.getAttribute(n)),null==a?t:a):null!==r?i&&o&&"set"in i&&(a=i.set(e,r,n))!==t?a:(e.setAttribute(n,r+""),r):(se.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(le);if(o&&1===e.nodeType)for(;n=o[i++];)r=se.propFix[n]||n,Le.test(n)?!qe&&He.test(n)?e[se.camelCase("default-"+n)]=e[r]=!1:e[r]=!1:se.attr(e,n,""),e.removeAttribute(qe?n:r)},attrHooks:{type:{set:function(e,t){if(!se.support.radioValue&&"radio"===t&&se.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{tabindex:"tabIndex",readonly:"readOnly",for:"htmlFor",class:"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,o,a=e.nodeType;if(e&&3!==a&&8!==a&&2!==a)return(1!==a||!se.isXMLDoc(e))&&(n=se.propFix[n]||n,o=se.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):je.test(e.nodeName)||De.test(e.nodeName)&&e.href?0:t}}}}),Ee={get:function(e,n){var r=se.prop(e,n),i="boolean"==typeof r&&e.getAttribute(n),o="boolean"==typeof r?Me&&qe?null!=i:He.test(n)?e[se.camelCase("default-"+n)]:!!i:e.getAttributeNode(n);return o&&!1!==o.value?n.toLowerCase():t},set:function(e,t,n){return!1===t?se.removeAttr(e,n):Me&&qe||!He.test(n)?e.setAttribute(!qe&&se.propFix[n]||n,n):e[se.camelCase("default-"+n)]=e[n]=!0,n}},Me&&qe||(se.attrHooks.value={get:function(e,n){var r=e.getAttributeNode(n);return se.nodeName(e,"input")?e.defaultValue:r&&r.specified?r.value:t},set:function(e,n,r){return se.nodeName(e,"input")?(e.defaultValue=n,t):ke&&ke.set(e,n,r)}}),qe||(ke=se.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&("id"===n||"name"===n||"coords"===n?""!==r.value:r.specified)?r.value:t},set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},se.attrHooks.contenteditable={get:ke.get,set:function(e,t,n){ke.set(e,""!==t&&t,n)}},se.each(["width","height"],function(e,n){se.attrHooks[n]=se.extend(se.attrHooks[n],{set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}})})),se.support.hrefNormalized||(se.each(["href","src","width","height"],function(e,n){se.attrHooks[n]=se.extend(se.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return null==r?t:r}})}),se.each(["href","src"],function(e,t){se.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}})),se.support.style||(se.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),se.support.optSelected||(se.propHooks.selected=se.extend(se.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),se.support.enctype||(se.propFix.enctype="encoding"),se.support.checkOn||se.each(["radio","checkbox"],function(){se.valHooks[this]={get:function(e){return null===e.getAttribute("value")?"on":e.value}}}),se.each(["radio","checkbox"],function(){se.valHooks[this]=se.extend(se.valHooks[this],{set:function(e,n){return se.isArray(n)?e.checked=se.inArray(se(e).val(),n)>=0:t}})});var _e=/^(?:input|select|textarea)$/i,Fe=/^key/,Oe=/^(?:mouse|contextmenu)|click/,Be=/^(?:focusinfocus|focusoutblur)$/,Pe=/^([^.]*)(?:\.(.+)|)$/;se.event={global:{},add:function(e,n,r,i,o){var a,s,u,l,c,f,p,d,h,g,m,y=se._data(e);if(y){for(r.handler&&(l=r,r=l.handler,o=l.selector),r.guid||(r.guid=se.guid++),(s=y.events)||(s=y.events={}),(f=y.handle)||(f=y.handle=function(e){return typeof se===U||e&&se.event.triggered===e.type?t:se.event.dispatch.apply(f.elem,arguments)},f.elem=e),u=(n=(n||"").match(le)||[""]).length;u--;)a=Pe.exec(n[u])||[],h=m=a[1],g=(a[2]||"").split(".").sort(),c=se.event.special[h]||{},h=(o?c.delegateType:c.bindType)||h,c=se.event.special[h]||{},p=se.extend({type:h,origType:m,data:i,handler:r,guid:r.guid,selector:o,needsContext:o&&se.expr.match.needsContext.test(o),namespace:g.join(".")},l),(d=s[h])||(d=s[h]=[],d.delegateCount=0,c.setup&&!1!==c.setup.call(e,i,g,f)||(e.addEventListener?e.addEventListener(h,f,!1):e.attachEvent&&e.attachEvent("on"+h,f))),c.add&&(c.add.call(e,p),p.handler.guid||(p.handler.guid=r.guid)),o?d.splice(d.delegateCount++,0,p):d.push(p),se.event.global[h]=!0;e=null}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,m=se.hasData(e)&&se._data(e);if(m&&(c=m.events)){for(l=(t=(t||"").match(le)||[""]).length;l--;)if(s=Pe.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){for(f=se.event.special[d]||{},p=c[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),u=o=p.length;o--;)a=p[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(p.splice(o,1),a.selector&&p.delegateCount--,f.remove&&f.remove.call(e,a));u&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,m.handle)||se.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)se.event.remove(e,d+t[l],n,r,!0);se.isEmptyObject(c)&&(delete m.handle,se._removeData(e,"events"))}},trigger:function(n,r,i,o){var a,s,u,l,c,f,p,d=[i||V],h=oe.call(n,"type")?n.type:n,g=oe.call(n,"namespace")?n.namespace.split("."):[];if(u=f=i=i||V,3!==i.nodeType&&8!==i.nodeType&&!Be.test(h+se.event.triggered)&&(h.indexOf(".")>=0&&(g=h.split("."),h=g.shift(),g.sort()),s=0>h.indexOf(":")&&"on"+h,n=n[se.expando]?n:new se.Event(h,"object"==typeof n&&n),n.isTrigger=!0,n.namespace=g.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:se.makeArray(r,[n]),c=se.event.special[h]||{},o||!c.trigger||!1!==c.trigger.apply(i,r))){if(!o&&!c.noBubble&&!se.isWindow(i)){for(l=c.delegateType||h,Be.test(l+h)||(u=u.parentNode);u;u=u.parentNode)d.push(u),f=u;f===(i.ownerDocument||V)&&d.push(f.defaultView||f.parentWindow||e)}for(p=0;(u=d[p++])&&!n.isPropagationStopped();)n.type=p>1?l:c.bindType||h,(a=(se._data(u,"events")||{})[n.type]&&se._data(u,"handle"))&&a.apply(u,r),(a=s&&u[s])&&se.acceptData(u)&&a.apply&&!1===a.apply(u,r)&&n.preventDefault();if(n.type=h,!(o||n.isDefaultPrevented()||c._default&&!1!==c._default.apply(i.ownerDocument,r)||"click"===h&&se.nodeName(i,"a")||!se.acceptData(i)||!s||!i[h]||se.isWindow(i))){(f=i[s])&&(i[s]=null),se.event.triggered=h;try{i[h]()}catch(e){}se.event.triggered=t,f&&(i[s]=f)}return n.result}},dispatch:function(e){e=se.event.fix(e);var n,r,i,o,a,s=[],u=ne.call(arguments),l=(se._data(this,"events")||{})[e.type]||[],c=se.event.special[e.type]||{};if(u[0]=e,e.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,e)){for(s=se.event.handlers.call(this,e,l),n=0;(o=s[n++])&&!e.isPropagationStopped();)for(e.currentTarget=o.elem,a=0;(i=o.handlers[a++])&&!e.isImmediatePropagationStopped();)(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,(r=((se.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,u))!==t&&!1===(e.result=r)&&(e.preventDefault(),e.stopPropagation()));return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],u=n.delegateCount,l=e.target;if(u&&l.nodeType&&(!e.button||"click"!==e.type))for(;l!=this;l=l.parentNode||this)if(1===l.nodeType&&(!0!==l.disabled||"click"!==e.type)){for(o=[],a=0;u>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?se(r,this).index(l)>=0:se.find(r,this,null,[l]).length),o[r]&&o.push(i);o.length&&s.push({elem:l,handlers:o})}return n.length>u&&s.push({elem:this,handlers:n.slice(u)}),s},fix:function(e){if(e[se.expando])return e;var t,n,r,i=e.type,o=e,a=this.fixHooks[i];for(a||(this.fixHooks[i]=a=Oe.test(i)?this.mouseHooks:Fe.test(i)?this.keyHooks:{}),r=a.props?this.props.concat(a.props):this.props,e=new se.Event(o),t=r.length;t--;)n=r[t],e[n]=o[n];return e.target||(e.target=o.srcElement||V),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,a.filter?a.filter(e,o):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,o,a=n.button,s=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||V,o=i.documentElement,r=i.body,e.pageX=n.clientX+(o&&o.scrollLeft||r&&r.scrollLeft||0)-(o&&o.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(o&&o.scrollTop||r&&r.scrollTop||0)-(o&&o.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&s&&(e.relatedTarget=s===e.target?n.toElement:s),e.which||a===t||(e.which=1&a?1:2&a?3:4&a?2:0),e}},special:{load:{noBubble:!0},click:{trigger:function(){return se.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t}},focus:{trigger:function(){if(this!==V.activeElement&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===V.activeElement&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=se.extend(new se.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?se.event.trigger(i,null,t):se.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},se.removeEvent=V.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===U&&(e[r]=null),e.detachEvent(r,n))},se.Event=function(e,n){return this instanceof se.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||!1===e.returnValue||e.defaultPrevented&&e.defaultPrevented()?u:l):this.type=e,n&&se.extend(this,n),this.timeStamp=e&&e.timeStamp||se.now(),this[se.expando]=!0,t):new se.Event(e,n)},se.Event.prototype={isDefaultPrevented:l,isPropagationStopped:l,isImmediatePropagationStopped:l,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=u,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=u,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=u,this.stopPropagation()}},se.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){se.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!se.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),se.support.submitBubbles||(se.event.special.submit={setup:function(){return!se.nodeName(this,"form")&&(se.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=se.nodeName(n,"input")||se.nodeName(n,"button")?n.form:t;r&&!se._data(r,"submitBubbles")&&(se.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),se._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&se.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return!se.nodeName(this,"form")&&(se.event.remove(this,"._submit"),t)}}),se.support.changeBubbles||(se.event.special.change={setup:function(){return _e.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(se.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),se.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),se.event.simulate("change",this,e,!0)})),!1):(se.event.add(this,"beforeactivate._change",function(e){var t=e.target;_e.test(t.nodeName)&&!se._data(t,"changeBubbles")&&(se.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||se.event.simulate("change",this.parentNode,e,!0)}),se._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return se.event.remove(this,"._change"),!_e.test(this.nodeName)}}),se.support.focusinBubbles||se.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){se.event.simulate(t,e.target,se.event.fix(e),!0)};se.event.special[t]={setup:function(){0==n++&&V.addEventListener(e,r,!0)},teardown:function(){0==--n&&V.removeEventListener(e,r,!0)}}}),se.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),!1===i)i=l;else if(!i)return this;return 1===o&&(s=i,i=function(e){return se().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=se.guid++)),this.each(function(){se.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,se(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(!1===n||"function"==typeof n)&&(r=n,n=t),!1===r&&(r=l),this.each(function(){se.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){se.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?se.event.trigger(e,n,r,!0):t}}),function(e,t){function n(e){return fe.test(e+"")}function r(){var e,t=[];return e=function(n,r){return t.push(n+=" ")>w.cacheLength&&delete e[t.shift()],e[n]=r}}function i(e){return e[O]=!0,e}function o(e){var t=j.createElement("div");try{return e(t)}catch(e){return!1}finally{t=null}}function a(e,t,n,r){var i,o,a,s,u,f,p,d,h,g;if((t?t.ownerDocument||t:B)!==j&&A(t),t=t||j,n=n||[],!e||"string"!=typeof e)return n;if(1!==(s=t.nodeType)&&9!==s)return[];if(!L&&!r){if(i=pe.exec(e))if(a=i[1]){if(9===s){if(!(o=t.getElementById(a))||!o.parentNode)return n;if(o.id===a)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(a))&&_(t,o)&&o.id===a)return n.push(o),n}else{if(i[2])return J.apply(n,G.call(t.getElementsByTagName(e),0)),n;if((a=i[3])&&P.getByClassName&&t.getElementsByClassName)return J.apply(n,G.call(t.getElementsByClassName(a),0)),n}if(P.qsa&&!H.test(e)){if(p=!0,d=O,h=t,g=9===s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){for(f=l(e),(p=t.getAttribute("id"))?d=p.replace(ge,"\\$&"):t.setAttribute("id",d),d="[id='"+d+"'] ",u=f.length;u--;)f[u]=d+c(f[u]);h=ce.test(e)&&t.parentNode||t,g=f.join(",")}if(g)try{return J.apply(n,G.call(h.querySelectorAll(g),0)),n}catch(e){}finally{p||t.removeAttribute("id")}}}return v(e.replace(re,"$1"),t,n,r)}function s(e,t){var n=t&&e,r=n&&(~t.sourceIndex||U)-(~e.sourceIndex||U);if(r)return r;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function u(e){return i(function(t){return t=+t,i(function(n,r){for(var i,o=e([],n.length,t),a=o.length;a--;)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function l(e,t){var n,r,i,o,s,u,l,c=I[e+" "];if(c)return t?0:c.slice(0);for(s=e,u=[],l=w.preFilter;s;){(!n||(r=ie.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),u.push(i=[])),n=!1,(r=oe.exec(s))&&(n=r.shift(),i.push({value:n,type:r[0].replace(re," ")}),s=s.slice(n.length));for(o in w.filter)!(r=le[o].exec(s))||l[o]&&!(r=l[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?a.error(e):I(e,u).slice(0)}function c(e){for(var t=0,n=e.length,r="";n>t;t++)r+=e[t].value;return r}function f(e,t,n){var r=t.dir,i=n&&"parentNode"===r,o=W++;return t.first?function(t,n,o){for(;t=t[r];)if(1===t.nodeType||i)return e(t,n,o)}:function(t,n,a){var s,u,l,c=R+" "+o;if(a){for(;t=t[r];)if((1===t.nodeType||i)&&e(t,n,a))return!0}else for(;t=t[r];)if(1===t.nodeType||i)if(l=t[O]||(t[O]={}),(u=l[r])&&u[0]===c){if(!0===(s=u[1])||s===T)return!0===s}else if(u=l[r]=[c],u[1]=e(t,n,a)||T,!0===u[1])return!0}}function p(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1;return!0}:e[0]}function d(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;u>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),l&&t.push(s));return a}function h(e,t,n,r,o,a){return r&&!r[O]&&(r=h(r)),o&&!o[O]&&(o=h(o,a)),i(function(i,a,s,u){var l,c,f,p=[],h=[],g=a.length,m=i||y(t||"*",s.nodeType?[s]:s,[]),v=!e||!i&&t?m:d(m,p,e,s,u),b=n?o||(i?e:g||r)?[]:a:v;if(n&&n(v,b,s,u),r)for(l=d(b,h),r(l,[],s,u),c=l.length;c--;)(f=l[c])&&(b[h[c]]=!(v[h[c]]=f));if(i){if(o||e){if(o){for(l=[],c=b.length;c--;)(f=b[c])&&l.push(v[c]=f);o(null,b=[],l,u)}for(c=b.length;c--;)(f=b[c])&&(l=o?Q.call(i,f):p[c])>-1&&(i[l]=!(a[l]=f))}}else b=d(b===a?b.splice(g,b.length):b),o?o(null,a,b,u):J.apply(a,b)})}function g(e){for(var t,n,r,i=e.length,o=w.relative[e[0].type],a=o||w.relative[" "],s=o?1:0,u=f(function(e){return e===t},a,!0),l=f(function(e){return Q.call(t,e)>-1},a,!0),d=[function(e,n,r){return!o&&(r||n!==S)||((t=n).nodeType?u(e,n,r):l(e,n,r))}];i>s;s++)if(n=w.relative[e[s].type])d=[f(p(d),n)];else{if((n=w.filter[e[s].type].apply(null,e[s].matches))[O]){for(r=++s;i>r&&!w.relative[e[r].type];r++);return h(s>1&&p(d),s>1&&c(e.slice(0,s-1)).replace(re,"$1"),n,r>s&&g(e.slice(s,r)),i>r&&g(e=e.slice(r)),i>r&&c(e))}d.push(n)}return p(d)}function m(e,t){var n=0,r=t.length>0,o=e.length>0,s=function(i,s,u,l,c){var f,p,h,g=[],m=0,y="0",v=i&&[],b=null!=c,x=S,N=i||o&&w.find.TAG("*",c&&s.parentNode||s),C=R+=null==x?1:Math.random()||.1;for(b&&(S=s!==j&&s,T=n);null!=(f=N[y]);y++){if(o&&f){for(p=0;h=e[p++];)if(h(f,s,u)){l.push(f);break}b&&(R=C,T=++n)}r&&((f=!h&&f)&&m--,i&&v.push(f))}if(m+=y,r&&y!==m){for(p=0;h=t[p++];)h(v,g,s,u);if(i){if(m>0)for(;y--;)v[y]||g[y]||(g[y]=Y.call(l));g=d(g)}J.apply(l,g),b&&!i&&g.length>0&&m+t.length>1&&a.uniqueSort(l)}return b&&(R=C,S=x),v};return r?i(s):s}function y(e,t,n){for(var r=0,i=t.length;i>r;r++)a(e,t[r],n);return n}function v(e,t,n,r){var i,o,a,s,u,f=l(e);if(!r&&1===f.length){if((o=f[0]=f[0].slice(0)).length>2&&"ID"===(a=o[0]).type&&9===t.nodeType&&!L&&w.relative[o[1].type]){if(!(t=w.find.ID(a.matches[0].replace(ye,ve),t)[0]))return n;e=e.slice(o.shift().value.length)}for(i=le.needsContext.test(e)?0:o.length;i--&&(a=o[i],!w.relative[s=a.type]);)if((u=w.find[s])&&(r=u(a.matches[0].replace(ye,ve),ce.test(o[0].type)&&t.parentNode||t))){if(o.splice(i,1),!(e=r.length&&c(o)))return J.apply(n,G.call(r,0)),n;break}}return k(e,f)(r,t,L,n,ce.test(e)),n}function b(){}var x,T,w,N,C,k,E,S,A,j,D,L,H,q,M,_,F,O="sizzle"+-new Date,B=e.document,P={},R=0,W=0,$=r(),I=r(),z=r(),X=typeof t,U=1<<31,V=[],Y=V.pop,J=V.push,G=V.slice,Q=V.indexOf||function(e){for(var t=0,n=this.length;n>t;t++)if(this[t]===e)return t;return-1},K="[\\x20\\t\\r\\n\\f]",Z="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",ee=Z.replace("w","w#"),te="\\["+K+"*("+Z+")"+K+"*(?:([*^$|!~]?=)"+K+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+ee+")|)|)"+K+"*\\]",ne=":("+Z+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+te.replace(3,8)+")*)|.*)\\)|)",re=RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),ie=RegExp("^"+K+"*,"+K+"*"),oe=RegExp("^"+K+"*([\\x20\\t\\r\\n\\f>+~])"+K+"*"),ae=RegExp(ne),ue=RegExp("^"+ee+"$"),le={ID:RegExp("^#("+Z+")"),CLASS:RegExp("^\\.("+Z+")"),NAME:RegExp("^\\[name=['\"]?("+Z+")['\"]?\\]"),TAG:RegExp("^("+Z.replace("w","w*")+")"),ATTR:RegExp("^"+te),PSEUDO:RegExp("^"+ne),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),needsContext:RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},ce=/[\x20\t\r\n\f]*[+~]/,fe=/^[^{]+\{\s*\[native code/,pe=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,de=/^(?:input|select|textarea|button)$/i,he=/^h\d$/i,ge=/'|\\/g,me=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,ye=/\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,ve=function(e,t){var n="0x"+t-65536;return n!==n?t:0>n?String.fromCharCode(n+65536):String.fromCharCode(55296|n>>10,56320|1023&n)};try{G.call(B.documentElement.childNodes,0)[0].nodeType}catch(e){G=function(e){for(var t,n=[];t=this[e++];)n.push(t);return n}}C=a.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},A=a.setDocument=function(e){var r=e?e.ownerDocument||e:B;return r!==j&&9===r.nodeType&&r.documentElement?(j=r,D=r.documentElement,L=C(r),P.tagNameNoComments=o(function(e){return e.appendChild(r.createComment("")),!e.getElementsByTagName("*").length}),P.attributes=o(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return"boolean"!==t&&"string"!==t}),P.getByClassName=o(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!(!e.getElementsByClassName||!e.getElementsByClassName("e").length)&&(e.lastChild.className="e",2===e.getElementsByClassName("e").length)}),P.getByName=o(function(e){e.id=O+0,e.innerHTML="<a name='"+O+"'></a><div name='"+O+"'></div>",D.insertBefore(e,D.firstChild);var t=r.getElementsByName&&r.getElementsByName(O).length===2+r.getElementsByName(O+0).length;return P.getIdNotName=!r.getElementById(O),D.removeChild(e),t}),w.attrHandle=o(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==X&&"#"===e.firstChild.getAttribute("href")})?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},P.getIdNotName?(w.find.ID=function(e,t){if(typeof t.getElementById!==X&&!L){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},w.filter.ID=function(e){var t=e.replace(ye,ve);return function(e){return e.getAttribute("id")===t}}):(w.find.ID=function(e,n){if(typeof n.getElementById!==X&&!L){var r=n.getElementById(e);return r?r.id===e||typeof r.getAttributeNode!==X&&r.getAttributeNode("id").value===e?[r]:t:[]}},w.filter.ID=function(e){var t=e.replace(ye,ve);return function(e){var n=typeof e.getAttributeNode!==X&&e.getAttributeNode("id");return n&&n.value===t}}),w.find.TAG=P.tagNameNoComments?function(e,n){return typeof n.getElementsByTagName!==X?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){for(;n=o[i++];)1===n.nodeType&&r.push(n);return r}return o},w.find.NAME=P.getByName&&function(e,n){return typeof n.getElementsByName!==X?n.getElementsByName(name):t},w.find.CLASS=P.getByClassName&&function(e,n){return typeof n.getElementsByClassName===X||L?t:n.getElementsByClassName(e)},q=[],H=[":focus"],(P.qsa=n(r.querySelectorAll))&&(o(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||H.push("\\["+K+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||H.push(":checked")}),o(function(e){e.innerHTML="<input type='hidden' i=''/>",e.querySelectorAll("[i^='']").length&&H.push("[*^$]="+K+"*(?:\"\"|'')"),e.querySelectorAll(":enabled").length||H.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),H.push(",.*:")})),(P.matchesSelector=n(M=D.matchesSelector||D.mozMatchesSelector||D.webkitMatchesSelector||D.oMatchesSelector||D.msMatchesSelector))&&o(function(e){P.disconnectedMatch=M.call(e,"div"),M.call(e,"[s!='']:x"),q.push("!=",ne)}),H=RegExp(H.join("|")),q=RegExp(q.join("|")),_=n(D.contains)||D.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},F=D.compareDocumentPosition?function(e,t){var n;return e===t?(E=!0,0):(n=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t))?1&n||e.parentNode&&11===e.parentNode.nodeType?e===r||_(B,e)?-1:t===r||_(B,t)?1:0:4&n?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var n,i=0,o=e.parentNode,a=t.parentNode,u=[e],l=[t];if(e===t)return E=!0,0;if(!o||!a)return e===r?-1:t===r?1:o?-1:a?1:0;if(o===a)return s(e,t);for(n=e;n=n.parentNode;)u.unshift(n);for(n=t;n=n.parentNode;)l.unshift(n);for(;u[i]===l[i];)i++;return i?s(u[i],l[i]):u[i]===B?-1:l[i]===B?1:0},E=!1,[0,0].sort(F),P.detectDuplicates=E,j):j},a.matches=function(e,t){return a(e,null,null,t)},a.matchesSelector=function(e,t){if((e.ownerDocument||e)!==j&&A(e),t=t.replace(me,"='$1']"),!(!P.matchesSelector||L||q&&q.test(t)||H.test(t)))try{var n=M.call(e,t);if(n||P.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){}return a(t,j,null,[e]).length>0},a.contains=function(e,t){return(e.ownerDocument||e)!==j&&A(e),_(e,t)},a.attr=function(e,t){var n;return(e.ownerDocument||e)!==j&&A(e),L||(t=t.toLowerCase()),(n=w.attrHandle[t])?n(e):L||P.attributes?e.getAttribute(t):((n=e.getAttributeNode(t))||e.getAttribute(t))&&!0===e[t]?t:n&&n.specified?n.value:null},a.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},a.uniqueSort=function(e){var t,n=[],r=1,i=0;if(E=!P.detectDuplicates,e.sort(F),E){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));for(;i--;)e.splice(n[i],1)}return e},N=a.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=N(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=N(t);return n},w=a.selectors={cacheLength:50,createPseudo:i,match:le,find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(ye,ve),e[3]=(e[4]||e[5]||"").replace(ye,ve),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||a.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&a.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return le.CHILD.test(e[0])?null:(e[4]?e[2]=e[4]:n&&ae.test(n)&&(t=l(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){return"*"===e?function(){return!0}:(e=e.replace(ye,ve).toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=$[e+" "];return t||(t=RegExp("(^|"+K+")"+e+"("+K+"|$)"))&&$(e,function(e){return t.test(e.className||typeof e.getAttribute!==X&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=a.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!u&&!s;if(m){if(o){for(;g;){for(f=t;f=f[g];)if(s?f.nodeName.toLowerCase()===y:1===f.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){for(d=(l=(c=m[O]||(m[O]={}))[e]||[])[0]===R&&l[1],p=l[0]===R&&l[2],f=d&&m.childNodes[d];f=++d&&f&&f[g]||(p=d=0)||h.pop();)if(1===f.nodeType&&++p&&f===t){c[e]=[R,d,p];break}}else if(v&&(l=(t[O]||(t[O]={}))[e])&&l[0]===R)p=l[1];else for(;(f=++d&&f&&f[g]||(p=d=0)||h.pop())&&((s?f.nodeName.toLowerCase()!==y:1!==f.nodeType)||!++p||(v&&((f[O]||(f[O]={}))[e]=[R,p]),f!==t)););return(p-=i)===r||0==p%r&&p/r>=0}}},PSEUDO:function(e,t){var n,r=w.pseudos[e]||w.setFilters[e.toLowerCase()]||a.error("unsupported pseudo: "+e);return r[O]?r(t):r.length>1?(n=[e,e,"",t],w.setFilters.hasOwnProperty(e.toLowerCase())?i(function(e,n){for(var i,o=r(e,t),a=o.length;a--;)i=Q.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:i(function(e){var t=[],n=[],r=k(e.replace(re,"$1"));return r[O]?i(function(e,t,n,i){for(var o,a=r(e,null,i,[]),s=e.length;s--;)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:i(function(e){return function(t){return a(e,t).length>0}}),contains:i(function(e){return function(t){return(t.textContent||t.innerText||N(t)).indexOf(e)>-1}}),lang:i(function(e){return ue.test(e||"")||a.error("unsupported lang: "+e),e=e.replace(ye,ve).toLowerCase(),function(t){var n;do{if(n=L?t.getAttribute("xml:lang")||t.getAttribute("lang"):t.lang)return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===D},focus:function(e){return e===j.activeElement&&(!j.hasFocus||j.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return!1===e.disabled},disabled:function(e){return!0===e.disabled},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!w.pseudos.empty(e)},header:function(e){return he.test(e.nodeName)},input:function(e){return de.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:u(function(){return[0]}),last:u(function(e,t){return[t-1]}),eq:u(function(e,t,n){return[0>n?n+t:n]}),even:u(function(e,t){for(var n=0;t>n;n+=2)e.push(n);return e}),odd:u(function(e,t){for(var n=1;t>n;n+=2)e.push(n);return e}),lt:u(function(e,t,n){for(var r=0>n?n+t:n;--r>=0;)e.push(r);return e}),gt:u(function(e,t,n){for(var r=0>n?n+t:n;t>++r;)e.push(r);return e})}};for(x in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})w.pseudos[x]=function(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}(x);for(x in{submit:!0,reset:!0})w.pseudos[x]=function(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}(x);k=a.compile=function(e,t){var n,r=[],i=[],o=z[e+" "];if(!o){for(t||(t=l(e)),n=t.length;n--;)o=g(t[n]),o[O]?r.push(o):i.push(o);o=z(e,m(i,r))}return o},w.pseudos.nth=w.pseudos.eq,w.filters=b.prototype=w.pseudos,w.setFilters=new b,A(),a.attr=se.attr,se.find=a,se.expr=a.selectors,se.expr[":"]=se.expr.pseudos,se.unique=a.uniqueSort,se.text=a.getText,se.isXMLDoc=a.isXML,se.contains=a.contains}(e);var Re=/Until$/,We=/^(?:parents|prev(?:Until|All))/,$e=/^.[^:#\[\.,]*$/,Ie=se.expr.match.needsContext,ze={children:!0,contents:!0,next:!0,prev:!0};se.fn.extend({find:function(e){var t,n,r,i=this.length;if("string"!=typeof e)return r=this,this.pushStack(se(e).filter(function(){for(t=0;i>t;t++)if(se.contains(r[t],this))return!0}));for(n=[],t=0;i>t;t++)se.find(e,this[t],n);return n=this.pushStack(i>1?se.unique(n):n),n.selector=(this.selector?this.selector+" ":"")+e,n},has:function(e){var t,n=se(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(se.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(f(this,e,!1))},filter:function(e){return this.pushStack(f(this,e,!0))},is:function(e){return!!e&&("string"==typeof e?Ie.test(e)?se(e,this.context).index(this[0])>=0:se.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){for(var n,r=0,i=this.length,o=[],a=Ie.test(e)||"string"!=typeof e?se(e,t||this.context):0;i>r;r++)for(n=this[r];n&&n.ownerDocument&&n!==t&&11!==n.nodeType;){if(a?a.index(n)>-1:se.find.matchesSelector(n,e)){o.push(n);break}n=n.parentNode}return this.pushStack(o.length>1?se.unique(o):o)},index:function(e){return e?"string"==typeof e?se.inArray(this[0],se(e)):se.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?se(e,t):se.makeArray(e&&e.nodeType?[e]:e),r=se.merge(this.get(),n);return this.pushStack(se.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),se.fn.andSelf=se.fn.addBack,se.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return se.dir(e,"parentNode")},parentsUntil:function(e,t,n){return se.dir(e,"parentNode",n)},next:function(e){return c(e,"nextSibling")},prev:function(e){return c(e,"previousSibling")},nextAll:function(e){return se.dir(e,"nextSibling")},prevAll:function(e){return se.dir(e,"previousSibling")},nextUntil:function(e,t,n){return se.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return se.dir(e,"previousSibling",n)},siblings:function(e){return se.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return se.sibling(e.firstChild)},contents:function(e){return se.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:se.merge([],e.childNodes)}},function(e,t){se.fn[e]=function(n,r){var i=se.map(this,t,n);return Re.test(e)||(r=n),r&&"string"==typeof r&&(i=se.filter(r,i)),i=this.length>1&&!ze[e]?se.unique(i):i,this.length>1&&We.test(e)&&(i=i.reverse()),this.pushStack(i)}}),se.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),1===t.length?se.find.matchesSelector(t[0],e)?[t[0]]:[]:se.find.matches(e,t)},dir:function(e,n,r){for(var i=[],o=e[n];o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!se(o).is(r));)1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});var Xe="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",Ue=/ jQuery\d+="(?:null|\d+)"/g,Ve=RegExp("<(?:"+Xe+")[\\s/>]","i"),Ye=/^\s+/,Je=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,Ge=/<([\w:]+)/,Qe=/<tbody/i,Ke=/<|&#?\w+;/,Ze=/<(?:script|style|link)/i,et=/^(?:checkbox|radio)$/i,tt=/checked\s*(?:[^=]|=\s*.checked.)/i,nt=/^$|\/(?:java|ecma)script/i,rt=/^true\/(.*)/,it=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ot={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:se.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},at=p(V).appendChild(V.createElement("div"));ot.optgroup=ot.option,ot.tbody=ot.tfoot=ot.colgroup=ot.caption=ot.thead,ot.th=ot.td,se.fn.extend({text:function(e){return se.access(this,function(e){return e===t?se.text(this):this.empty().append((this[0]&&this[0].ownerDocument||V).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(se.isFunction(e))return this.each(function(t){se(this).wrapAll(e.call(this,t))});if(this[0]){var t=se(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstChild&&1===e.firstChild.nodeType;)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return se.isFunction(e)?this.each(function(t){se(this).wrapInner(e.call(this,t))}):this.each(function(){var t=se(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=se.isFunction(e);return this.each(function(n){se(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){se.nodeName(this,"body")||se(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.insertBefore(e,this.firstChild)})},before:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){for(var n,r=0;null!=(n=this[r]);r++)(!e||se.filter(e,[n]).length>0)&&(t||1!==n.nodeType||se.cleanData(b(n)),n.parentNode&&(t&&se.contains(n.ownerDocument,n)&&m(b(n,"script")),n.parentNode.removeChild(n)));return this},empty:function(){for(var e,t=0;null!=(e=this[t]);t++){for(1===e.nodeType&&se.cleanData(b(e,!1));e.firstChild;)e.removeChild(e.firstChild);e.options&&se.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return se.clone(this,e,t)})},html:function(e){return se.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(Ue,""):t;if(!("string"!=typeof e||Ze.test(e)||!se.support.htmlSerialize&&Ve.test(e)||!se.support.leadingWhitespace&&Ye.test(e)||ot[(Ge.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(Je,"<$1></$2>");try{for(;i>r;r++)1===(n=this[r]||{}).nodeType&&(se.cleanData(b(n,!1)),n.innerHTML=e);n=0}catch(e){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){return se.isFunction(e)||"string"==typeof e||(e=se(e).not(this).detach()),this.domManip([e],!0,function(e){var t=this.nextSibling,n=this.parentNode;n&&(se(this).remove(),n.insertBefore(e,t))})},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=ee.apply([],e);var i,o,a,s,u,l,c=0,f=this.length,p=this,m=f-1,y=e[0],v=se.isFunction(y);if(v||!(1>=f||"string"!=typeof y||se.support.checkClone)&&tt.test(y))return this.each(function(i){var o=p.eq(i);v&&(e[0]=y.call(this,i,n?o.html():t)),o.domManip(e,n,r)});if(f&&(l=se.buildFragment(e,this[0].ownerDocument,!1,this),i=l.firstChild,1===l.childNodes.length&&(l=i),i)){for(n=n&&se.nodeName(i,"tr"),a=(s=se.map(b(l,"script"),h)).length;f>c;c++)o=l,c!==m&&(o=se.clone(o,!0,!0),a&&se.merge(s,b(o,"script"))),r.call(n&&se.nodeName(this[c],"table")?d(this[c],"tbody"):this[c],o,c);if(a)for(u=s[s.length-1].ownerDocument,se.map(s,g),c=0;a>c;c++)o=s[c],nt.test(o.type||"")&&!se._data(o,"globalEval")&&se.contains(u,o)&&(o.src?se.ajax({url:o.src,type:"GET",dataType:"script",async:!1,global:!1,throws:!0}):se.globalEval((o.text||o.textContent||o.innerHTML||"").replace(it,"")));l=i=null}return this}}),se.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){se.fn[e]=function(e){for(var n,r=0,i=[],o=se(e),a=o.length-1;a>=r;r++)n=r===a?this:this.clone(!0),se(o[r])[t](n),te.apply(i,n.get());return this.pushStack(i)}}),se.extend({clone:function(e,t,n){var r,i,o,a,s,u=se.contains(e.ownerDocument,e);if(se.support.html5Clone||se.isXMLDoc(e)||!Ve.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(at.innerHTML=e.outerHTML,at.removeChild(o=at.firstChild)),!(se.support.noCloneEvent&&se.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||se.isXMLDoc(e)))for(r=b(o),s=b(e),a=0;null!=(i=s[a]);++a)r[a]&&v(i,r[a]);if(t)if(n)for(s=s||b(e),r=r||b(o),a=0;null!=(i=s[a]);a++)y(i,r[a]);else y(e,o);return(r=b(o,"script")).length>0&&m(r,!u&&b(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){for(var i,o,a,s,u,l,c,f=e.length,d=p(t),h=[],g=0;f>g;g++)if((o=e[g])||0===o)if("object"===se.type(o))se.merge(h,o.nodeType?[o]:o);else if(Ke.test(o)){for(s=s||d.appendChild(t.createElement("div")),u=(Ge.exec(o)||["",""])[1].toLowerCase(),c=ot[u]||ot._default,s.innerHTML=c[1]+o.replace(Je,"<$1></$2>")+c[2],i=c[0];i--;)s=s.lastChild;if(!se.support.leadingWhitespace&&Ye.test(o)&&h.push(t.createTextNode(Ye.exec(o)[0])),!se.support.tbody)for(i=(o="table"!==u||Qe.test(o)?"<table>"!==c[1]||Qe.test(o)?0:s:s.firstChild)&&o.childNodes.length;i--;)se.nodeName(l=o.childNodes[i],"tbody")&&!l.childNodes.length&&o.removeChild(l);for(se.merge(h,s.childNodes),s.textContent="";s.firstChild;)s.removeChild(s.firstChild);s=d.lastChild}else h.push(t.createTextNode(o));for(s&&d.removeChild(s),se.support.appendChecked||se.grep(b(h,"input"),x),g=0;o=h[g++];)if((!r||-1===se.inArray(o,r))&&(a=se.contains(o.ownerDocument,o),s=b(d.appendChild(o),"script"),a&&m(s),n))for(i=0;o=s[i++];)nt.test(o.type||"")&&n.push(o);return s=null,d},cleanData:function(e,t){for(var n,r,i,o,a=0,s=se.expando,u=se.cache,l=se.support.deleteExpando,c=se.event.special;null!=(n=e[a]);a++)if((t||se.acceptData(n))&&(i=n[s],o=i&&u[i])){if(o.events)for(r in o.events)c[r]?se.event.remove(n,r):se.removeEvent(n,r,o.handle);u[i]&&(delete u[i],l?delete n[s]:typeof n.removeAttribute!==U?n.removeAttribute(s):n[s]=null,K.push(i))}}});var st,ut,lt,ct=/alpha\([^)]*\)/i,ft=/opacity\s*=\s*([^)]*)/,pt=/^(top|right|bottom|left)$/,dt=/^(none|table(?!-c[ea]).+)/,ht=/^margin/,gt=RegExp("^("+ue+")(.*)$","i"),mt=RegExp("^("+ue+")(?!px)[a-z%]+$","i"),yt=RegExp("^([+-])=("+ue+")","i"),vt={BODY:"block"},bt={position:"absolute",visibility:"hidden",display:"block"},xt={letterSpacing:0,fontWeight:400},Tt=["Top","Right","Bottom","Left"],wt=["Webkit","O","Moz","ms"];se.fn.extend({css:function(e,n){return se.access(this,function(e,n,r){var i,o,a={},s=0;if(se.isArray(n)){for(o=ut(e),i=n.length;i>s;s++)a[n[s]]=se.css(e,n[s],!1,o);return a}return r!==t?se.style(e,n,r):se.css(e,n)},e,n,arguments.length>1)},show:function(){return N(this,!0)},hide:function(){return N(this)},toggle:function(e){var t="boolean"==typeof e;return this.each(function(){(t?e:w(this))?se(this).show():se(this).hide()})}}),se.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=lt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{float:se.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,u=se.camelCase(n),l=e.style;if(n=se.cssProps[u]||(se.cssProps[u]=T(l,u)),s=se.cssHooks[n]||se.cssHooks[u],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:l[n];if("string"===(a=typeof r)&&(o=yt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(se.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||se.cssNumber[u]||(r+="px"),se.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(l[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{l[n]=r}catch(e){}}},css:function(e,n,r,i){var o,a,s,u=se.camelCase(n);return n=se.cssProps[u]||(se.cssProps[u]=T(e.style,u)),(s=se.cssHooks[n]||se.cssHooks[u])&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=lt(e,n,i)),"normal"===a&&n in xt&&(a=xt[n]),""===r||r?(o=parseFloat(a),!0===r||se.isNumeric(o)?o||0:a):a},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),e.getComputedStyle?(ut=function(t){return e.getComputedStyle(t,null)},lt=function(e,n,r){var i,o,a,s=r||ut(e),u=s?s.getPropertyValue(n)||s[n]:t,l=e.style;return s&&(""!==u||se.contains(e.ownerDocument,e)||(u=se.style(e,n)),mt.test(u)&&ht.test(n)&&(i=l.width,o=l.minWidth,a=l.maxWidth,l.minWidth=l.maxWidth=l.width=u,u=s.width,l.width=i,l.minWidth=o,l.maxWidth=a)),u}):V.documentElement.currentStyle&&(ut=function(e){return e.currentStyle},lt=function(e,n,r){var i,o,a,s=r||ut(e),u=s?s[n]:t,l=e.style;return null==u&&l&&l[n]&&(u=l[n]),mt.test(u)&&!pt.test(n)&&(i=l.left,o=e.runtimeStyle,(a=o&&o.left)&&(o.left=e.currentStyle.left),l.left="fontSize"===n?"1em":u,u=l.pixelLeft+"px",l.left=i,a&&(o.left=a)),""===u?"auto":u}),se.each(["height","width"],function(e,n){se.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&dt.test(se.css(e,"display"))?se.swap(e,bt,function(){return E(e,n,i)}):E(e,n,i):t},set:function(e,t,r){var i=r&&ut(e);return C(e,t,r?k(e,n,r,se.support.boxSizing&&"border-box"===se.css(e,"boxSizing",!1,i),i):0)}}}),se.support.opacity||(se.cssHooks.opacity={get:function(e,t){return ft.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=se.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===se.trim(o.replace(ct,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=ct.test(o)?o.replace(ct,i):o+" "+i)}}),se(function(){se.support.reliableMarginRight||(se.cssHooks.marginRight={get:function(e,n){return n?se.swap(e,{display:"inline-block"},lt,[e,"marginRight"]):t}}),!se.support.pixelPosition&&se.fn.position&&se.each(["top","left"],function(e,n){se.cssHooks[n]={get:function(e,r){return r?(r=lt(e,n),mt.test(r)?se(e).position()[n]+"px":r):t}}})}),se.expr&&se.expr.filters&&(se.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!se.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||se.css(e,"display"))},se.expr.filters.visible=function(e){return!se.expr.filters.hidden(e)}),se.each({margin:"",padding:"",border:"Width"},function(e,t){se.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];4>r;r++)i[e+Tt[r]+t]=o[r]||o[r-2]||o[0];return i}},ht.test(e)||(se.cssHooks[e+t].set=C)});var Nt=/%20/g,Ct=/\[\]$/,kt=/\r?\n/g,Et=/^(?:submit|button|image|reset|file)$/i,St=/^(?:input|select|textarea|keygen)/i;se.fn.extend({serialize:function(){return se.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=se.prop(this,"elements");return e?se.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!se(this).is(":disabled")&&St.test(this.nodeName)&&!Et.test(e)&&(this.checked||!et.test(e))}).map(function(e,t){var n=se(this).val();return null==n?null:se.isArray(n)?se.map(n,function(e){return{name:t.name,value:e.replace(kt,"\r\n")}}):{name:t.name,value:n.replace(kt,"\r\n")}}).get()}}),se.param=function(e,n){var r,i=[],o=function(e,t){t=se.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=se.ajaxSettings&&se.ajaxSettings.traditional),se.isArray(e)||e.jquery&&!se.isPlainObject(e))se.each(e,function(){o(this.name,this.value)});else for(r in e)j(r,e[r],n,o);return i.join("&").replace(Nt,"+")},se.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){se.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),se.fn.hover=function(e,t){return this.mouseenter(e).mouseleave(t||e)};var At,jt,Dt=se.now(),Lt=/\?/,Ht=/#.*$/,qt=/([?&])_=[^&]*/,Mt=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,_t=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ft=/^(?:GET|HEAD)$/,Ot=/^\/\//,Bt=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Pt=se.fn.load,Rt={},Wt={},$t="*/".concat("*");try{jt=Y.href}catch(e){(jt=V.createElement("a")).href="",jt=jt.href}At=Bt.exec(jt.toLowerCase())||[],se.fn.load=function(e,n,r){if("string"!=typeof e&&Pt)return Pt.apply(this,arguments);var i,o,a,s=this,u=e.indexOf(" ");return u>=0&&(i=e.slice(u,e.length),e=e.slice(0,u)),se.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&se.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?se("<div>").append(se.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},se.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){se.fn[t]=function(e){return this.on(t,e)}}),se.each(["get","post"],function(e,n){se[n]=function(e,r,i,o){return se.isFunction(r)&&(o=o||i,i=r,r=t),se.ajax({url:e,type:n,dataType:o,data:r,success:i})}}),se.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:jt,type:"GET",isLocal:_t.test(At[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":se.parseJSON,"text xml":se.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?H(H(e,se.ajaxSettings),t):H(se.ajaxSettings,e)},ajaxPrefilter:D(Rt),ajaxTransport:D(Wt),ajax:function(e,n){function r(e,n,r,i){var o,f,v,b,T,N=n;2!==x&&(x=2,u&&clearTimeout(u),c=t,s=i||"",w.readyState=e>0?4:0,r&&(b=q(p,w,r)),e>=200&&300>e||304===e?(p.ifModified&&((T=w.getResponseHeader("Last-Modified"))&&(se.lastModified[a]=T),(T=w.getResponseHeader("etag"))&&(se.etag[a]=T)),204===e?(o=!0,N="nocontent"):304===e?(o=!0,N="notmodified"):(o=M(p,b),N=o.state,f=o.data,v=o.error,o=!v)):(v=N,(e||!N)&&(N="error",0>e&&(e=0))),w.status=e,w.statusText=(n||N)+"",o?g.resolveWith(d,[f,N,w]):g.rejectWith(d,[w,N,v]),w.statusCode(y),y=t,l&&h.trigger(o?"ajaxSuccess":"ajaxError",[w,p,o?f:v]),m.fireWith(d,[w,N]),l&&(h.trigger("ajaxComplete",[w,p]),--se.active||se.event.trigger("ajaxStop")))}"object"==typeof e&&(n=e,e=t),n=n||{};var i,o,a,s,u,l,c,f,p=se.ajaxSetup({},n),d=p.context||p,h=p.context&&(d.nodeType||d.jquery)?se(d):se.event,g=se.Deferred(),m=se.Callbacks("once memory"),y=p.statusCode||{},v={},b={},x=0,T="canceled",w={readyState:0,getResponseHeader:function(e){var t;if(2===x){if(!f)for(f={};t=Mt.exec(s);)f[t[1].toLowerCase()]=t[2];t=f[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===x?s:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return x||(e=b[n]=b[n]||e,v[e]=t),this},overrideMimeType:function(e){return x||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>x)for(t in e)y[t]=[y[t],e[t]];else w.always(e[w.status]);return this},abort:function(e){var t=e||T;return c&&c.abort(t),r(0,t),this}};if(g.promise(w).complete=m.add,w.success=w.done,w.error=w.fail,p.url=((e||p.url||jt)+"").replace(Ht,"").replace(Ot,At[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=se.trim(p.dataType||"*").toLowerCase().match(le)||[""],null==p.crossDomain&&(i=Bt.exec(p.url.toLowerCase()),p.crossDomain=!(!i||i[1]===At[1]&&i[2]===At[2]&&(i[3]||("http:"===i[1]?80:443))==(At[3]||("http:"===At[1]?80:443)))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=se.param(p.data,p.traditional)),L(Rt,p,n,w),2===x)return w;(l=p.global)&&0==se.active++&&se.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Ft.test(p.type),a=p.url,p.hasContent||(p.data&&(a=p.url+=(Lt.test(a)?"&":"?")+p.data,delete p.data),!1===p.cache&&(p.url=qt.test(a)?a.replace(qt,"$1_="+Dt++):a+(Lt.test(a)?"&":"?")+"_="+Dt++)),p.ifModified&&(se.lastModified[a]&&w.setRequestHeader("If-Modified-Since",se.lastModified[a]),se.etag[a]&&w.setRequestHeader("If-None-Match",se.etag[a])),(p.data&&p.hasContent&&!1!==p.contentType||n.contentType)&&w.setRequestHeader("Content-Type",p.contentType),w.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+$t+"; q=0.01":""):p.accepts["*"]);for(o in p.headers)w.setRequestHeader(o,p.headers[o]);if(p.beforeSend&&(!1===p.beforeSend.call(d,w,p)||2===x))return w.abort();T="abort";for(o in{success:1,error:1,complete:1})w[o](p[o]);if(c=L(Wt,p,n,w)){w.readyState=1,l&&h.trigger("ajaxSend",[w,p]),p.async&&p.timeout>0&&(u=setTimeout(function(){w.abort("timeout")},p.timeout));try{x=1,c.send(v,r)}catch(e){if(!(2>x))throw e;r(-1,e)}}else r(-1,"No Transport");return w},getScript:function(e,n){return se.get(e,t,n,"script")},getJSON:function(e,t,n){return se.get(e,t,n,"json")}}),se.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return se.globalEval(e),e}}}),se.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),se.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=V.head||se("head")[0]||V.documentElement;return{send:function(t,i){(n=V.createElement("script")).async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var It=[],zt=/(=)\?(?=&|$)|\?\?/;se.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=It.pop()||se.expando+"_"+Dt++;return this[e]=!0,e}}),se.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,u=!1!==n.jsonp&&(zt.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&zt.test(n.data)&&"data");return u||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=se.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,u?n[u]=n[u].replace(zt,"$1"+o):!1!==n.jsonp&&(n.url+=(Lt.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||se.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,It.push(o)),s&&se.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Xt,Ut,Vt=0,Yt=e.ActiveXObject&&function(){var e;for(e in Xt)Xt[e](t,!0)};se.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&_()||F()}:_,Ut=se.ajaxSettings.xhr(),se.support.cors=!!Ut&&"withCredentials"in Ut,(Ut=se.support.ajax=!!Ut)&&se.ajaxTransport(function(n){if(!n.crossDomain||se.support.cors){var r;return{send:function(i,o){var a,s,u=n.xhr();if(n.username?u.open(n.type,n.url,n.async,n.username,n.password):u.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)u[s]=n.xhrFields[s];n.mimeType&&u.overrideMimeType&&u.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)u.setRequestHeader(s,i[s])}catch(e){}u.send(n.hasContent&&n.data||null),r=function(e,i){var s,l,c,f;try{if(r&&(i||4===u.readyState))if(r=t,a&&(u.onreadystatechange=se.noop,Yt&&delete Xt[a]),i)4!==u.readyState&&u.abort();else{f={},s=u.status,l=u.getAllResponseHeaders(),"string"==typeof u.responseText&&(f.text=u.responseText);try{c=u.statusText}catch(e){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=f.text?200:404}}catch(e){i||o(-1,e)}f&&o(s,c,f,l)},n.async?4===u.readyState?setTimeout(r):(a=++Vt,Yt&&(Xt||(Xt={},se(e).unload(Yt)),Xt[a]=r),u.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Jt,Gt,Qt=/^(?:toggle|show|hide)$/,Kt=RegExp("^(?:([+-])=|)("+ue+")([a-z%]*)$","i"),Zt=/queueHooks$/,en=[function(e,t,n){var r,i,o,a,s,u,l,c,f,p=this,d=e.style,h={},g=[],m=e.nodeType&&w(e);n.queue||(null==(c=se._queueHooks(e,"fx")).unqueued&&(c.unqueued=0,f=c.empty.fire,c.empty.fire=function(){c.unqueued||f()}),c.unqueued++,p.always(function(){p.always(function(){c.unqueued--,se.queue(e,"fx").length||c.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],"inline"===se.css(e,"display")&&"none"===se.css(e,"float")&&(se.support.inlineBlockNeedsLayout&&"inline"!==S(e.nodeName)?d.zoom=1:d.display="inline-block")),n.overflow&&(d.overflow="hidden",se.support.shrinkWrapBlocks||p.always(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]}));for(i in t)if(a=t[i],Qt.exec(a)){if(delete t[i],u=u||"toggle"===a,a===(m?"hide":"show"))continue;g.push(i)}if(o=g.length){"hidden"in(s=se._data(e,"fxshow")||se._data(e,"fxshow",{}))&&(m=s.hidden),u&&(s.hidden=!m),m?se(e).show():p.done(function(){se(e).hide()}),p.done(function(){var t;se._removeData(e,"fxshow");for(t in h)se.style(e,t,h[t])});for(i=0;o>i;i++)r=g[i],l=p.createTween(r,m?s[r]:0),h[r]=s[r]||se.style(e,r),r in s||(s[r]=l.start,m&&(l.end=l.start,l.start="width"===r||"height"===r?1:0))}}],tn={"*":[function(e,t){var n,r,i=this.createTween(e,t),o=Kt.exec(t),a=i.cur(),s=+a||0,u=1,l=20;if(o){if(n=+o[2],"px"!==(r=o[3]||(se.cssNumber[e]?"":"px"))&&s){s=se.css(i.elem,e,!0)||n||1;do{u=u||".5",s/=u,se.style(i.elem,e,s+r)}while(u!==(u=i.cur()/a)&&1!==u&&--l)}i.unit=r,i.start=s,i.end=o[1]?s+(o[1]+1)*n:n}return i}]};se.Animation=se.extend(P,{tweener:function(e,t){se.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");for(var n,r=0,i=e.length;i>r;r++)n=e[r],tn[n]=tn[n]||[],tn[n].unshift(t)},prefilter:function(e,t){t?en.unshift(e):en.push(e)}}),se.Tween=W,W.prototype={constructor:W,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(se.cssNumber[n]?"":"px")},cur:function(){var e=W.propHooks[this.prop];return e&&e.get?e.get(this):W.propHooks._default.get(this)},run:function(e){var t,n=W.propHooks[this.prop];return this.pos=t=this.options.duration?se.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):W.propHooks._default.set(this),this}},W.prototype.init.prototype=W.prototype,W.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=se.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){se.fx.step[e.prop]?se.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[se.cssProps[e.prop]]||se.cssHooks[e.prop])?se.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},W.propHooks.scrollTop=W.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},se.each(["toggle","show","hide"],function(e,t){var n=se.fn[t];se.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate($(t,!0),e,r,i)}}),se.fn.extend({fadeTo:function(e,t,n,r){return this.filter(w).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=se.isEmptyObject(e),o=se.speed(t,n,r),a=function(){var t=P(this,se.extend({},e),o);a.finish=function(){t.stop(!0)},(i||se._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=se.timers,a=se._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Zt.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&se.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=se._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=se.timers,a=r?r.length:0;for(n.finish=!0,se.queue(this,e,[]),i&&i.cur&&i.cur.finish&&i.cur.finish.call(this),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),se.each({slideDown:$("show"),slideUp:$("hide"),slideToggle:$("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){se.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),se.speed=function(e,t,n){var r=e&&"object"==typeof e?se.extend({},e):{complete:n||!n&&t||se.isFunction(e)&&e,duration:e,easing:n&&t||t&&!se.isFunction(t)&&t};return r.duration=se.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in se.fx.speeds?se.fx.speeds[r.duration]:se.fx.speeds._default,(null==r.queue||!0===r.queue)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){se.isFunction(r.old)&&r.old.call(this),r.queue&&se.dequeue(this,r.queue)},r},se.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},se.timers=[],se.fx=W.prototype.init,se.fx.tick=function(){var e,n=se.timers,r=0;for(Jt=se.now();n.length>r;r++)(e=n[r])()||n[r]!==e||n.splice(r--,1);n.length||se.fx.stop(),Jt=t},se.fx.timer=function(e){e()&&se.timers.push(e)&&se.fx.start()},se.fx.interval=13,se.fx.start=function(){Gt||(Gt=setInterval(se.fx.tick,se.fx.interval))},se.fx.stop=function(){clearInterval(Gt),Gt=null},se.fx.speeds={slow:600,fast:200,_default:400},se.fx.step={},se.expr&&se.expr.filters&&(se.expr.filters.animated=function(e){return se.grep(se.timers,function(t){return e===t.elem}).length}),se.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){se.offset.setOffset(this,e,t)});var n,r,i={top:0,left:0},o=this[0],a=o&&o.ownerDocument;return a?(n=a.documentElement,se.contains(n,o)?(typeof o.getBoundingClientRect!==U&&(i=o.getBoundingClientRect()),r=I(a),{top:i.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:i.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):i):void 0},se.offset={setOffset:function(e,t,n){var r=se.css(e,"position");"static"===r&&(e.style.position="relative");var i,o,a=se(e),s=a.offset(),u=se.css(e,"top"),l=se.css(e,"left"),c={},f={};("absolute"===r||"fixed"===r)&&se.inArray("auto",[u,l])>-1?(f=a.position(),i=f.top,o=f.left):(i=parseFloat(u)||0,o=parseFloat(l)||0),se.isFunction(t)&&(t=t.call(e,n,s)),null!=t.top&&(c.top=t.top-s.top+i),null!=t.left&&(c.left=t.left-s.left+o),"using"in t?t.using.call(e,c):a.css(c)}},se.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===se.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),se.nodeName(e[0],"html")||(n=e.offset()),n.top+=se.css(e[0],"borderTopWidth",!0),n.left+=se.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-se.css(r,"marginTop",!0),left:t.left-n.left-se.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent||V.documentElement;e&&!se.nodeName(e,"html")&&"static"===se.css(e,"position");)e=e.offsetParent;return e||V.documentElement})}}),se.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);se.fn[e]=function(i){return se.access(this,function(e,i,o){var a=I(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?se(a).scrollLeft():o,r?o:se(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}}),se.each({Height:"height",Width:"width"},function(e,n){se.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){se.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(!0===i||!0===o?"margin":"border");return se.access(this,function(n,r,i){var o;return se.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?se.css(n,r,s):se.style(n,r,i,s)},n,a?i:t,a,null)}})}),e.jQuery=e.$=se,"function"==typeof define&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return se})}(window);
/*
 * jQuery doTimeout: Like setTimeout, but better! - v1.0 - 3/3/2010
 * http://benalman.com/projects/jquery-dotimeout-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function ($) {
    var a = {},
        c = "doTimeout",
        d = Array.prototype.slice;
    $[c] = function () {
        return b.apply(window, [0].concat(d.call(arguments)))
    };
    $.fn[c] = function () {
        var f = d.call(arguments),
            e = b.apply(this, [c + f[0]].concat(f));
        return typeof f[0] === "number" || typeof f[1] === "number" ? this : e
    };

    function b(l) {
        var m = this,
            h, k = {},
            g = l ? $.fn : $,
            n = arguments,
            i = 4,
            f = n[1],
            j = n[2],
            p = n[3];
        if (typeof f !== "string") {
            i--;
            f = l = 0;
            j = n[1];
            p = n[2]
        }
        if (l) {
            h = m.eq(0);
            h.data(l, k = h.data(l) || {})
        } else {
            if (f) {
                k = a[f] || (a[f] = {})
            }
        }
        k.id && clearTimeout(k.id);
        delete k.id;

        function e() {
            if (l) {
                h.removeData(l)
            } else {
                if (f) {
                    delete a[f]
                }
            }
        }

        function o() {
            k.id = setTimeout(function () {
                k.fn()
            }, j)
        }
        if (p) {
            k.fn = function (q) {
                if (typeof p === "string") {
                    p = g[p]
                }
                p.apply(m, d.call(n, i)) === true && !q ? o() : e()
            };
            o()
        } else {
            if (k.fn) {
                j === undefined ? e() : k.fn(j === false);
                return true
            } else {
                e()
            }
        }
    }
})(jQuery);

/**
 * hoverIntent r6 // 2011.02.26 // jQuery 1.5.1+
 * <http://cherne.net/brian/resources/jquery.hoverIntent.html>
 * 
 * @param  f  onMouseOver function || An object with configuration options
 * @param  g  onMouseOut function  || Nothing (use configuration options object)
 * @author    Brian Cherne brian(at)cherne(dot)net
 */
(function ($) {
    $.fn.hoverIntent = function (f, g) {
        var cfg = {
            sensitivity: 7,
            interval: 100,
            timeout: 0
        };
        cfg = $.extend(cfg, g ? {
            over: f,
            out: g
        } : f);
        var cX, cY, pX, pY;
        var track = function (ev) {
            cX = ev.pageX;
            cY = ev.pageY
        };
        var compare = function (ev, ob) {
            ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
            if ((Math.abs(pX - cX) + Math.abs(pY - cY)) < cfg.sensitivity) {
                $(ob).unbind("mousemove", track);
                ob.hoverIntent_s = 1;
                return cfg.over.apply(ob, [ev])
            } else {
                pX = cX;
                pY = cY;
                ob.hoverIntent_t = setTimeout(function () {
                    compare(ev, ob)
                }, cfg.interval)
            }
        };
        var delay = function (ev, ob) {
            ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
            ob.hoverIntent_s = 0;
            return cfg.out.apply(ob, [ev])
        };
        var handleHover = function (e) {
            var ev = jQuery.extend({}, e);
            var ob = this;
            if (ob.hoverIntent_t) {
                ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t)
            }
            if (e.type == "mouseenter") {
                pX = ev.pageX;
                pY = ev.pageY;
                $(ob).bind("mousemove", track);
                if (ob.hoverIntent_s != 1) {
                    ob.hoverIntent_t = setTimeout(function () {
                        compare(ev, ob)
                    }, cfg.interval)
                }
            } else {
                $(ob).unbind("mousemove", track);
                if (ob.hoverIntent_s == 1) {
                    ob.hoverIntent_t = setTimeout(function () {
                        delay(ev, ob)
                    }, cfg.timeout)
                }
            }
        };
        return this.bind('mouseenter', handleHover).bind('mouseleave', handleHover)
    }
})(jQuery);
/*
 * Tabber [Formstone Library]
 * @author Ben Plum
 * @version 0.1.0
 *
 * Copyright Â© 2013 Ben Plum <mr@benplum.com>
 * Released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
 */

if (jQuery) (function ($) {

    // Public Methods
    var pub = {

        // Destroy
        destroy: function (index) {
            return $(this).each(function (i) {
                $(this).removeClass("active")
                    .off(".tabber")
                    .data("tabber", null);
            });
        },

        // Select tab
        select: function (index) {
            return $(this).each(function (i) {
                var data = $(this).data("tabber");
                _set(data, index);
            });
        }
    };

    // Initalize
    function _init() {
        return $(this).each(_build);
    }

    // Build
    function _build() {
        var $tabber = $(this),
            data = {
                $tabber: $tabber,
                $menu: $tabber.find(".tabber-tabs"),
                $menuItems: $tabber.find(".tabber-tab"),
                $content: $tabber.find(".tabber-contents"),
                $contentItems: $tabber.find(".tabber-content")
            };

        $tabber.addClass("active")
            .on("click.tabber", ".tabber-tab", data, _onClick)
            .data("tabber", data);
    }

    // Handle click
    function _onClick(e) {
        e.preventDefault();
        e.stopPropagation();

        var $target = $(this),
            data = e.data,
            index = data.$menuItems.index($target);

        _set(data, index);
    }

    // Set Active Tab
    function _set(data, index) {
        if (!data.$menuItems.eq(index).hasClass("active")) {
            data.$menuItems.filter(".active").removeClass("active");
            data.$menuItems.eq(index).addClass("active");

            data.$contentItems.filter(".active").removeClass("active");
            data.$contentItems.eq(index).addClass("active");
        }
    }

    $.fn.tabber = function (method) {
        if (pub[method]) {
            return pub[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return _init.apply(this, arguments);
        }
        return this;
    };
})(jQuery);
/*
 * Boxer [Formstone Library]
 * @author Ben Plum
 * @version 1.6.8
 *
 * Copyright Â© 2013 Ben Plum <mr@benplum.com>
 * Released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
 */

if (jQuery) (function (c) {
    function C(a) {
        p.formatter = D;
        return c(this).on("click.boxer", c.extend({}, p, a || {}), t)
    }

    function t(b) {
        b.preventDefault();
        b.stopPropagation();
        var d = c(this),
            h = b.data.$object,
            g = d[0].attributes ? d.attr("href") || "" : "",
            l = g.toLowerCase().split("."),
            l = l[l.length - 1],
            f = d.data("type") || "",
            e = "image" == f || "jpeg" == l || "jpg" == l || "gif" == l || "png" == l || "data:image" == g.substr(0, 10),
            n = -1 < g.indexOf("youtube.com/embed") || -1 < g.indexOf("player.vimeo.com/video"),
            k = "url" == f || !e && !n && "http" == g.substr(0, 4),
            m = "element" == f || !e && !n && !k && "#" == g.substr(0, 1),
            q = "undefined" !== typeof h;
        if (1 > c("#boxer").length && (e || n || k || m || q)) {
            a = {
                $target: d,
                $object: h,
                gallery: {
                    active: !1
                },
                options: b.data
            };
            a.type = e ? "image" : n ? "video" : "element";
            if (e || n) b = a.$target.attr("rel"), "undefined" !== typeof b && !1 !== b && (a.gallery.active = !0, a.gallery.rel = b, a.gallery.$items = c("a[rel= " + a.gallery.rel + "]"), a.gallery.index = a.gallery.$items.index(a.$target), a.gallery.total = a.gallery.$items.length - 1);
            b = '<div id="boxer-overlay" class="' + a.options.customClass + '" style="opacity: 0"></div>';
            b += '<div id="boxer" class="' + a.options.customClass;
            k && (b += " iframe");
            if (m || q) b += " inline";
            b += '" style="opacity: 0;';
            !0 === a.options.fixed && (b += " position: fixed;");
            b += '"><span class="boxer-close">Close</span>';
            b += '<div class="boxer-container" style="opacity: 0; height: ' + a.options.height + "px; width: " + a.options.width + 'px">';
            b += '<div class="boxer-content">';
            if (e || n) b += '<div class="boxer-meta">', a.gallery.active ? (b += '<p class="boxer-position"', 1 > a.gallery.total && (b += ' style="display: none;"'), b += ">", b += '<span class="current">' + (a.gallery.index + 1) + '</span> of <span class="total">' + (a.gallery.total + 1) + "</span>", b += "</p>", b += '<div class="boxer-arrow previous">Previous</div>', b += '<div class="boxer-arrow next">Next</div>', b += '<div class="boxer-caption gallery">') : b += '<div class="boxer-caption">', b += a.options.formatter.apply(c("body"), [a.$target]), b += "</div></div>";
            b += "</div></div></div>";
            c("body").append(b);
            a.$overlay = c("#boxer-overlay");
            a.$boxer = c("#boxer");
            a.$container = a.$boxer.find(".boxer-container");
            a.$content = a.$boxer.find(".boxer-content");
            a.$meta = a.$boxer.find(".boxer-meta");
            a.$position = a.$boxer.find(".boxer-position");
            a.$caption = a.$boxer.find(".boxer-caption");
            a.$arrows = a.$boxer.find(".boxer-arrow");
            a.$animatables = c("#boxer-overlay, #boxer, .boxer-container");
            a.padding = 2 * parseInt(a.$boxer.css("paddingTop"), 10);
            u();
            a.gallery.active && v();
            c(window).on("resize.boxer", E).on("keydown.boxer", F);
            c("body").on("click.boxer", "#boxer-overlay, #boxer .boxer-close", w);
            if (a.gallery.active) a.$boxer.on("click.boxer", ".boxer-arrow", G);
            a.$overlay.stop().animate({
                opacity: a.options.opacity
            }, a.options.duration);
            a.$boxer.stop().animate({
                opacity: 1
            }, a.options.duration, function () {
                if (e) x(g);
                else if (n) y(g);
                else if (k) {
                    var b = g,
                        b = b + (-1 < b.indexOf("?") ? "&" + p.requestKey + "=true" : "?" + p.requestKey + "=true"),
                        b = c('<iframe class="boxer-iframe" src="' + b + '" />');
                    r(b)
                } else m ? (b = c(g).find(">:first-child").clone(), r(b)) : q ? r(a.$object) : c.error("BOXER: '" + g + "' is not valid.")
            })
        }
        if (q) return a.$boxer
    }

    function m() {
        var b = (c(window).width() - a.contentWidth - a.padding) / 2,
            d = 0 >= a.options.top ? (c(window).height() - a.contentHeight - a.padding) / 2 : a.options.top;
        !0 !== a.options.fixed && (d += c(window).scrollTop());
        var h = a.$arrows.outerHeight();
        a.$arrows.css({
            marginTop: (a.contentHeight - a.metaHeight - h) / 2
        });
        a.$boxer.stop().animate({
            left: b,
            top: d
        }, a.options.duration);
        a.$container.show().stop().animate({
            height: a.contentHeight,
            width: a.contentWidth
        }, a.options.duration, function (b) {
            a.$container.stop().animate({
                opacity: 1
            }, a.options.duration);
            a.$boxer.find(".boxer-close").stop().animate({
                opacity: 1
            }, a.options.duration);
            a.options.callback.apply(a.$boxer)
        })
    }

    function w(b) {
        b.preventDefault();
        b.stopPropagation();
        "undefined" !== typeof a.$animatables && (a.$animatables.stop().animate({
            opacity: 0
        }, a.options.duration, function () {
            c(this).remove()
        }), clearTimeout(k), k = null, c(window).off(".boxer"), c("body").off(".boxer"), a.gallery.active && a.$boxer.off(".boxer"), a = {})
    }

    function E() {
        null !== k && (clearTimeout(k), k = null);
        k = setTimeout(function () {
            u()
        }, 10)
    }

    function u() {
        var b = (c(window).width() - a.$boxer.width() - a.padding) / 2,
            d = 0 >= a.options.top ? (c(window).height() - a.$boxer.height() - a.padding) / 2 : a.options.top;
        !0 !== a.options.fixed && (d += c(window).scrollTop());
        a.$boxer.css({
            left: b,
            top: d
        })
    }

    function x(b) {
        a.$image = c("<img />");
        a.$image.one("load.boxer", function () {
            a.originalHeight = a.$image[0].height;
            a.originalWidth = a.$image[0].width;
            a.options.retina && (a.originalHeight /= 2, a.originalWidth /= 2);
            a.$content.prepend(a.$image);
            "" == a.$caption.html() ? a.$caption.hide() : a.$caption.show();
            s(0) && m()
        }).attr("src", b).addClass("boxer-image");
        a.$image[0].complete && a.$image.trigger("load")
    }

    function y(b) {
        a.$videoWrapper = c('<div class="boxer-video-wrapper" />');
        a.$video = c('<iframe class="boxer-video" />');
        a.$video.attr("src", b).addClass("boxer-video").prependTo(a.$videoWrapper);
        a.$content.prepend(a.$videoWrapper);
        z();
        m()
    }

    function D(a) {
        a = a.attr("title");
        return "" != a && void 0 !== a ? '<p class="caption">' + a + "</p>" : ""
    }

    function s(b) {
        var d = 0 == b ? a.originalHeight : a.$image.outerHeight(),
            h = 0 == b ? a.originalWidth : a.$image.outerWidth(),
            g = 0 == b ? 0 : a.metaHeight,
            l = c(window).width() - a.options.margin - a.padding,
            g = c(window).height() - a.options.margin - a.padding - g;
        d < a.options.minHeight && (a.options.minHeight = d);
        h < a.options.minWidth && (a.options.minWidth = h);
        var f = h,
            e = d;
        h > d ? (f = l, e = f * (d / h), e > g && (e = g, f = e * (h / d))) : (e = g, f = e * (h / d), f > l && (f = l, e = f * (d / h)));
        if (f > h || e > d) f = h, e = d;
        if (f < a.options.minWidth || e < a.options.minHeight) h < d ? (f = a.options.minWidth, e = f * (d / h)) : (e = a.options.minHeight, f = e * (h / d));
        a.$content.css({
            width: f
        });
        a.$meta.css({
            width: f
        });
        a.$image.css({
            height: e,
            width: f
        });
        a.metaHeight = a.$meta.outerHeight(!0);
        a.contentWidth = f;
        a.contentHeight = e + a.metaHeight;
        return a.contentHeight > g && 2 > b ? s(b + 1) : !0
    }

    function z() {
        var b = c(window).width() - a.options.margin - a.padding,
            b = a.options.videoWidth > b ? b : a.options.videoWidth,
            d = 0.5625 * b;
        a.$videoWrapper.css({
            height: d,
            width: b
        });
        a.$content.css({
            width: b
        });
        a.$meta.css({
            width: b
        });
        a.metaHeight = a.$meta.outerHeight(!0);
        a.contentWidth = b;
        a.contentHeight = d + a.metaHeight
    }

    function G(b) {
        b.preventDefault();
        b.stopPropagation();
        b = c(this);
        b.hasClass("disabled") || (a.gallery.index += b.hasClass("next") ? 1 : -1, a.gallery.index > a.gallery.total && (a.gallery.index = a.gallery.total), 0 > a.gallery.index && (a.gallery.index = 0), a.$container.stop().animate({
            opacity: 0
        }, a.options.duration, function () {
            "undefined" !== typeof a.$image && a.$image.remove();
            "undefined" !== typeof a.$videoWrapper && a.$videoWrapper.remove();
            a.$target = a.gallery.$items.eq(a.gallery.index);
            a.$caption.html(a.options.formatter.apply(c("body"), [a.$target]));
            a.$position.find(".current").html(a.gallery.index + 1);
            var b = a.$target.attr("href"); - 1 < b.indexOf("youtube.com/embed") || -1 < b.indexOf("player.vimeo.com/video") ? y(b) : x(b);
            v()
        }))
    }

    function v() {
        a.$arrows.removeClass("disabled");
        0 == a.gallery.index && a.$arrows.filter(".previous").addClass("disabled");
        a.gallery.index == a.gallery.total && a.$arrows.filter(".next").addClass("disabled")
    }

    function F(b) {
        !a.gallery.active || 37 != b.keyCode && 39 != b.keyCode ? 27 == b.keyCode && a.$boxer.find(".boxer-close").trigger("click") : (b.preventDefault(), b.stopPropagation(), a.$arrows.filter(37 == b.keyCode ? ".previous" : ".next").trigger("click"))
    }

    function r(b) {
        a.$content.append(b);
        A(b);
        m()
    }

    function A(b) {
        var d = b.outerHeight(!0),
            h = b.outerWidth(!0),
            g = c(window).height() - a.options.margin - a.padding,
            l = c(window).width() - a.options.margin - a.padding,
            f = a.$target.data("height"),
            e = a.$target.data("width"),
            k = 0 > g ? p.minHeight : g;
        b = b.is("iframe");
        a.contentHeight = void 0 != f ? f : b ? g : d;
        a.contentWidth = void 0 != e ? e : b ? l : h;
        a.contentHeight > k ? (a.contentHeight = k, b || a.$content.css({
            overflowY: "scroll"
        })) : a.$content.css({
            overflowY: "auto"
        });
        a.$content.css({
            height: a.contentHeight,
            width: a.contentWidth
        })
    }
    var p = {
        callback: c.noop,
        customClass: "",
        duration: 250,
        fixed: !1,
        formatter: c.noop,
        height: 100,
        margin: 100,
        minHeight: 200,
        minWidth: 200,
        opacity: 0.75,
        retina: !1,
        requestKey: "boxer",
        top: 0,
        videoWidth: 600,
        width: 100
    },
        a = {},
        k = null,
        B = {
            destroy: function () {
                w(c.Event("click"));
                return c(this).off(".boxer")
            },
            resize: function (b, c, h) {
                "undefined" != typeof a.$boxer && ("element" == a.type ? A(a.$content.find(">:first-child")) : "image" == a.type ? s(1) : "video" == a.type && z(), m())
            }
        };
    c.fn.boxer = function (a) {
        return B[a] ? B[a].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" !== typeof a && a ? this : C.apply(this, arguments)
    };
    c.boxer = function (a, d) {
        return t(c.Event("click", {
            data: c.extend({
                $object: a
            }, p, d || {})
        }))
    }
})(jQuery);
/*
 * Macaroon Plugin - Simple cookie access
 * @author Ben Plum
 * @version 1.2.2
 *
 * Copyright Â© 2013 Ben Plum <mr@benplum.com>
 * Released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
 */

if (jQuery) (function (f) {
    function g(a, d, c) {
        var b = new Date;
        b.setTime(b.getTime() + 864E5 * c.expires);
        b = "; expires=" + b.toGMTString();
        document.cookie = a + "=" + d + b + (null != c.domain ? "; domain=" + c.domain : "") + ("; path=" + c.path)
    }
    var e = {
        domain: null,
        expires: 7,
        path: "/"
    };
    f.macaroon = function (a, d, c) {
        if ("object" == typeof a) return e = jQuery.extend(e, a), null;
        c = jQuery.extend(e, c);
        if ("undefined" != typeof a)
            if ("undefined" != typeof d) null == d ? g(a, "", f.extend({}, e, {
                expires: -1
            })) : g(a, d, c);
            else {
                a: {
                    a += "="; d = document.cookie.split(";");
                    for (c = 0; c < d.length; c++) {
                        for (var b = d[c];
                            " " == b.charAt(0);) b = b.substring(1, b.length);
                        if (0 == b.indexOf(a)) {
                            a = b.substring(a.length, b.length);
                            break a
                        }
                    }
                    a = null
                }
                return a
            }
    }
})(jQuery);
/*
 * Rubberband - Responsive breakpoint events
 * @author Ben Plum
 * @version 2.0.5
 *
 * Copyright Â© 2013 Ben Plum <mr@benplum.com>
 * Released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
 */

if (jQuery) (function (e) {
    function m(b) {
        b = b || {};
        for (var a in f) options[a] = b[a] ? e.merge(b[a], options[a]) : options[a];
        options = e.extend(options, b);
        options.minWidth.sort(h);
        options.maxWidth.sort(j);
        options.minHeight.sort(h);
        options.maxHeight.sort(j);
        for (a in f) {
            g[a] = {};
            for (var d in options[a]) b = window.matchMedia("(" + f[a] + ": " + (Infinity == options[a][d] ? 1E5 : options[a][d]) + options.unit + ")"), b.addListener(k), g[a][options[a][d]] = b
        }
        k()
    }

    function k() {
        null != c && (clearTimeout(c), c = null);
        c = setTimeout(function () {
            var b = {},
                a;
            for (a in f)
                for (var d in g[a])
                    if (g[a][d].matches) {
                        var c = "Infinity" == d ? Infinity : parseInt(d, 10);
                        if (-1 < a.indexOf("max")) {
                            if (!b[a] || c < b[a]) b[a] = c
                        } else if (!b[a] || c > b[a]) b[a] = c
                    }
            e(window).trigger("snap", [b])
        }, options.debouce)
    }

    function j(b, a) {
        return a - b
    }

    function h(b, a) {
        return b - a
    }
    var n = void 0 !== window.matchMedia;
    options = {
        debounce: 5,
        minWidth: [0],
        maxWidth: [Infinity],
        minHeight: [0],
        maxHeight: [Infinity],
        unit: "px"
    };
    var g = {},
        f = {
            minWidth: "min-width",
            maxWidth: "max-width",
            minHeight: "min-height",
            maxHeight: "max-height"
        },
        c = null,
        l = {};
    e.rubberband = function (b) {
        if (n) {
            if (l[b]) return l[b].apply(this, Array.prototype.slice.call(arguments, 1));
            if ("object" === typeof b || !b) return m.apply(this, arguments)
        }
        return this
    }
})(jQuery);
/*
 * Scout Plugin - Simple Google Analytics Events
 * @author Ben Plum
 * @version 0.0.6
 *
 * Copyright (c) 2013 Ben Plum <mr@benplum.com>
 * Released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
 *
 */

if (jQuery) (function (b) {
    function h(a) {
        b.extend(d, a);
        if (!b("body").data("scouting")) {
            b("body").data("scouting", !0).on("click.scout", "[data-scout-event]", j);
            for (var c in b.scout.extensions) b.scout.extensions[c](d.extensions[c] || null)
        }
    }

    function j(a) {
        a.preventDefault();
        var c = b(this),
            e = c.attr("href");
        a = c.data("scout-event").split(",");
        for (var f in a) a[f] = b.trim(a[f]);
        g(a[0], a[1], e || a[2], a[3], a[4]);
        e && !c.data("scout-stop") && setTimeout(function () {
            c.attr("target") ? window.open(e, c.attr("target")) : document.MAIN_URL = e
        }, d.delay)
    }

    function g(a, c, b, f, d) {
        "undefined" == typeof _gaq && (_gaq = []);
        _gaq.push(["_trackEvent", a, c, b, f, d])
    }
    var d = {
        delay: 100,
        extensions: {}
    };
    b.scout = function () {
        arguments.length && "object" !== typeof arguments[0] ? g.apply(this, arguments) : h.apply(this, arguments)
    };
    b.scout.extensions = {}
})(jQuery);
/*
 * Scout - Scroll Plugin - Track user scroll positions
 * @author Ben Plum
 * @version 0.0.3
 *
 * Copyright (c) 2013 Ben Plum <mr@benplum.com>
 * Released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
 *
 */

if (jQuery) (function (c) {
    function e() {
        var a = f.scrollTop();
        g = g > a ? g : a;
        null !== b && (clearTimeout(b), b = null);
        b = setTimeout(j, 1E3 * d.time)
    }

    function j() {
        null !== b && (clearTimeout(b), b = null);
        var a = f.width(),
            d = f.height(),
            e = k.outerHeight(!1),
            h = "Mobile";
        460 < a && (h = "Tablet");
        740 < a && (h = "Desktop");
        a = Math.floor(100 * (g / (e - d)));
        0 > a && (a = 0);
        100 < a && (a = 100);
        c.scout("ScrollPosition", "Device:" + h, window.location.pathname, a)
    }
    var d = {
        time: 60
    },
        f = c(window),
        k = c(document),
        b = null,
        g = 0;
    c.scout && (c.scout.extensions.maxScroll = function (a) {
        d = c.extend(d, a);
        f.on("scroll.scout-maxscroll", e).on("unload.scout-maxscroll, pronto.request", j);
        e()
    })
})(jQuery);
/*! formstone v0.8.41 [core.js] 2016-03-13 | MIT License | formstone.it */

var Formstone = window.Formstone = function (a, b, c, d) {
    "use strict";

    function e(a) {
        n.Plugins[a].initialized || (n.Plugins[a].methods._setup.call(c), n.Plugins[a].initialized = !0)
    }

    function f(a, b, c, d) {
        var e, f = {
            raw: {}
        };
        d = d || {};
        for (e in d) d.hasOwnProperty(e) && ("classes" === a ? (f.raw[d[e]] = b + "-" + d[e], f[d[e]] = "." + b + "-" + d[e]) : (f.raw[e] = d[e], f[e] = d[e] + "." + b));
        for (e in c) c.hasOwnProperty(e) && ("classes" === a ? (f.raw[e] = c[e].replace(/{ns}/g, b), f[e] = c[e].replace(/{ns}/g, "." + b)) : (f.raw[e] = c[e].replace(/.{ns}/g, ""), f[e] = c[e].replace(/{ns}/g, b)));
        return f
    }

    function g() {
        var a, b = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "otransitionend",
            transition: "transitionend"
        },
            d = ["transition", "-webkit-transition"],
            e = {
                transform: "transform",
                MozTransform: "-moz-transform",
                OTransform: "-o-transform",
                msTransform: "-ms-transform",
                webkitTransform: "-webkit-transform"
            },
            f = "transitionend",
            g = "",
            h = "",
            i = c.createElement("div");
        for (a in b)
            if (b.hasOwnProperty(a) && a in i.style) {
                f = b[a], n.support.transition = !0;
                break
            }
        q.transitionEnd = f + ".{ns}";
        for (a in d)
            if (d.hasOwnProperty(a) && d[a] in i.style) {
                g = d[a];
                break
            }
        n.transition = g;
        for (a in e)
            if (e.hasOwnProperty(a) && e[a] in i.style) {
                n.support.transform = !0, h = e[a];
                break
            }
        n.transform = h
    }

    function h() {
        n.windowWidth = n.$window.width(), n.windowHeight = n.$window.height(), r = m.startTimer(r, s, i)
    }

    function i() {
        for (var a in n.ResizeHandlers) n.ResizeHandlers.hasOwnProperty(a) && n.ResizeHandlers[a].callback.call(b, n.windowWidth, n.windowHeight)
    }

    function j() {
        if (n.support.raf) {
            n.window.requestAnimationFrame(j);
            for (var a in n.RAFHandlers) n.RAFHandlers.hasOwnProperty(a) && n.RAFHandlers[a].callback.call(b)
        }
    }

    function k(a, b) {
        return parseInt(a.priority) - parseInt(b.priority)
    }
    var l = function () {
        this.Version = "0.8.41", this.Plugins = {}, this.DontConflict = !1, this.Conflicts = {
            fn: {}
        }, this.ResizeHandlers = [], this.RAFHandlers = [], this.window = b, this.$window = a(b), this.document = c, this.$document = a(c), this.$body = null, this.windowWidth = 0, this.windowHeight = 0, this.fallbackWidth = 1024, this.fallbackHeight = 768, this.userAgent = b.navigator.userAgent || b.navigator.vendor || b.opera, this.isFirefox = /Firefox/i.test(this.userAgent), this.isChrome = /Chrome/i.test(this.userAgent), this.isSafari = /Safari/i.test(this.userAgent) && !this.isChrome, this.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(this.userAgent), this.isIEMobile = /IEMobile/i.test(this.userAgent), this.isFirefoxMobile = this.isFirefox && this.isMobile, this.transform = null, this.transition = null, this.support = {
            file: !!(b.File && b.FileList && b.FileReader),
            history: !!(b.history && b.history.pushState && b.history.replaceState),
            matchMedia: !(!b.matchMedia && !b.msMatchMedia),
            pointer: !!b.PointerEvent,
            raf: !(!b.requestAnimationFrame || !b.cancelAnimationFrame),
            touch: !!("ontouchstart" in b || b.DocumentTouch && c instanceof b.DocumentTouch),
            transition: !1,
            transform: !1
        }
    },
        m = {
            killEvent: function (a, b) {
                try {
                    a.preventDefault(), a.stopPropagation(), b && a.stopImmediatePropagation()
                } catch (c) { }
            },
            startTimer: function (a, b, c, d) {
                return m.clearTimer(a), d ? setInterval(c, b) : setTimeout(c, b)
            },
            clearTimer: function (a, b) {
                a && (b ? clearInterval(a) : clearTimeout(a), a = null)
            },
            sortAsc: function (a, b) {
                return parseInt(a, 10) - parseInt(b, 10)
            },
            sortDesc: function (a, b) {
                return parseInt(b, 10) - parseInt(a, 10)
            },
            decodeEntities: function (a) {
                var b = n.document.createElement("textarea");
                return b.innerHTML = a, b.value
            },
            parseQueryString: function (a) {
                for (var b = {}, c = a.slice(a.indexOf("?") + 1).split("&"), d = 0; d < c.length; d++) {
                    var e = c[d].split("=");
                    b[e[0]] = e[1]
                }
                return b
            }
        },
        n = new l,
        o = a.Deferred(),
        p = {
            base: "{ns}",
            element: "{ns}-element"
        },
        q = {
            namespace: ".{ns}",
            beforeUnload: "beforeunload.{ns}",
            blur: "blur.{ns}",
            change: "change.{ns}",
            click: "click.{ns}",
            dblClick: "dblclick.{ns}",
            drag: "drag.{ns}",
            dragEnd: "dragend.{ns}",
            dragEnter: "dragenter.{ns}",
            dragLeave: "dragleave.{ns}",
            dragOver: "dragover.{ns}",
            dragStart: "dragstart.{ns}",
            drop: "drop.{ns}",
            error: "error.{ns}",
            focus: "focus.{ns}",
            focusIn: "focusin.{ns}",
            focusOut: "focusout.{ns}",
            input: "input.{ns}",
            keyDown: "keydown.{ns}",
            keyPress: "keypress.{ns}",
            keyUp: "keyup.{ns}",
            load: "load.{ns}",
            mouseDown: "mousedown.{ns}",
            mouseEnter: "mouseenter.{ns}",
            mouseLeave: "mouseleave.{ns}",
            mouseMove: "mousemove.{ns}",
            mouseOut: "mouseout.{ns}",
            mouseOver: "mouseover.{ns}",
            mouseUp: "mouseup.{ns}",
            panStart: "panstart.{ns}",
            pan: "pan.{ns}",
            panEnd: "panend.{ns}",
            resize: "resize.{ns}",
            scaleStart: "scalestart.{ns}",
            scaleEnd: "scaleend.{ns}",
            scale: "scale.{ns}",
            scroll: "scroll.{ns}",
            select: "select.{ns}",
            swipe: "swipe.{ns}",
            touchCancel: "touchcancel.{ns}",
            touchEnd: "touchend.{ns}",
            touchLeave: "touchleave.{ns}",
            touchMove: "touchmove.{ns}",
            touchStart: "touchstart.{ns}"
        };
    l.prototype.NoConflict = function () {
        n.DontConflict = !0;
        for (var b in n.Plugins) n.Plugins.hasOwnProperty(b) && (a[b] = n.Conflicts[b], a.fn[b] = n.Conflicts.fn[b])
    }, l.prototype.Plugin = function (c, d) {
        return n.Plugins[c] = function (c, d) {
            function e(b) {
                var e, f, g, i = "object" === a.type(b),
                    j = this,
                    k = a();
                for (b = a.extend(!0, {}, d.defaults || {}, i ? b : {}), f = 0, g = j.length; g > f; f++)
                    if (e = j.eq(f), !h(e)) {
                        var l = "__" + d.guid++,
                            m = d.classes.raw.base + l,
                            n = e.data(c + "-options"),
                            o = a.extend(!0, {
                                $el: e,
                                guid: l,
                                rawGuid: m,
                                dotGuid: "." + m
                            }, b, "object" === a.type(n) ? n : {});
                        e.addClass(d.classes.raw.element).data(s, o), d.methods._construct.apply(e, [o].concat(Array.prototype.slice.call(arguments, i ? 1 : 0))), k = k.add(e)
                    }
                for (f = 0, g = k.length; g > f; f++) e = k.eq(f), d.methods._postConstruct.apply(e, [h(e)]);
                return j
            }

            function g(a) {
                d.functions.iterate.apply(this, [d.methods._destruct].concat(Array.prototype.slice.call(arguments, 1))), this.removeClass(d.classes.raw.element).removeData(s)
            }

            function h(a) {
                return a.data(s)
            }

            function i(b) {
                if (this instanceof a) {
                    var c = d.methods[b];
                    return "object" !== a.type(b) && b ? c && 0 !== b.indexOf("_") ? d.functions.iterate.apply(this, [c].concat(Array.prototype.slice.call(arguments, 1))) : this : e.apply(this, arguments)
                }
            }

            function j(c) {
                var e = d.utilities[c] || d.utilities._initialize || !1;
                return e ? e.apply(b, Array.prototype.slice.call(arguments, "object" === a.type(c) ? 0 : 1)) : void 0
            }

            function l(b) {
                d.defaults = a.extend(!0, d.defaults, b || {})
            }

            function o(b) {
                for (var c = this, d = 0, e = c.length; e > d; d++) {
                    var f = c.eq(d),
                        g = h(f) || {};
                    "undefined" !== a.type(g.$el) && b.apply(f, [g].concat(Array.prototype.slice.call(arguments, 1)))
                }
                return c
            }
            var r = "fs-" + c,
                s = "fs" + c.replace(/(^|\s)([a-z])/g, function (a, b, c) {
                    return b + c.toUpperCase()
                });
            return d.initialized = !1, d.priority = d.priority || 10, d.classes = f("classes", r, p, d.classes), d.events = f("events", c, q, d.events), d.functions = a.extend({
                getData: h,
                iterate: o
            }, m, d.functions), d.methods = a.extend(!0, {
                _setup: a.noop,
                _construct: a.noop,
                _postConstruct: a.noop,
                _destruct: a.noop,
                _resize: !1,
                destroy: g
            }, d.methods), d.utilities = a.extend(!0, {
                _initialize: !1,
                _delegate: !1,
                defaults: l
            }, d.utilities), d.widget && (n.Conflicts.fn[c] = a.fn[c], a.fn[s] = i, n.DontConflict || (a.fn[c] = a.fn[s])), n.Conflicts[c] = a[c], a[s] = d.utilities._delegate || j, n.DontConflict || (a[c] = a[s]), d.namespace = c, d.namespaceClean = s, d.guid = 0, d.methods._resize && (n.ResizeHandlers.push({
                namespace: c,
                priority: d.priority,
                callback: d.methods._resize
            }), n.ResizeHandlers.sort(k)), d.methods._raf && (n.RAFHandlers.push({
                namespace: c,
                priority: d.priority,
                callback: d.methods._raf
            }), n.RAFHandlers.sort(k)), d
        }(c, d), o.then(function () {
            e(c)
        }), n.Plugins[c]
    };
    var r = null,
        s = 20;
    return n.$window.on("resize.fs", h), h(), j(), a(function () {
        n.$body = a("body"), o.resolve(), n.support.nativeMatchMedia = n.support.matchMedia && !a("html").hasClass("no-matchmedia")
    }), q.clickTouchStart = q.click + " " + q.touchStart, g(), n
}(jQuery, window, document);
/*! formstone v0.8.41 [background.js] 2016-03-13 | MIT License | formstone.it */

! function (a, b, c) {
    "use strict";

    function d(a) {
        z.iterate.call(B, s)
    }

    function e() {
        B = a(w.base)
    }

    function f(b) {
        b.youTubeGuid = 0, b.$container = a('<div class="' + x.container + '"></div>').appendTo(this), this.addClass([x.base, b.customClass].join(" "));
        var c = b.source;
        b.source = null, h(b, c, !0), e()
    }

    function g(a) {
        a.$container.remove(), this.removeClass([x.base, a.customClass].join(" ")).off(y.namespace), e()
    }

    function h(b, c, d) {
        if (c !== b.source) {
            if (b.source = c, b.responsive = !1, b.isYouTube = !1, "object" === a.type(c) && "string" === a.type(c.video)) {
                var e = c.video.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i);
                e && e.length >= 1 && (b.isYouTube = !0, b.videoId = e[1])
            }
            var f = !b.isYouTube && "object" === a.type(c) && (c.hasOwnProperty("mp4") || c.hasOwnProperty("ogg") || c.hasOwnProperty("webm"));
            if (b.video = b.isYouTube || f, b.playing = !1, b.isYouTube) b.playerReady = !1, b.posterLoaded = !1, l(b, c, d);
            else if ("object" === a.type(c) && c.hasOwnProperty("poster")) k(b, c, d);
            else {
                var g = c;
                if ("object" === a.type(c)) {
                    var h, m = [],
                        n = [];
                    for (h in c) c.hasOwnProperty(h) && n.push(h);
                    n.sort(z.sortAsc);
                    for (h in n) n.hasOwnProperty(h) && m.push({
                        width: parseInt(n[h]),
                        url: c[n[h]],
                        mq: window.matchMedia("(min-width: " + parseInt(n[h]) + "px)")
                    });
                    b.responsive = !0, b.sources = m, g = i(b)
                }
                j(b, g, !1, d)
            }
        } else b.$el.trigger(y.loaded)
    }

    function i(a) {
        var c = a.source;
        if (a.responsive) {
            c = a.sources[0].url;
            for (var d in a.sources) a.sources.hasOwnProperty(d) && (b.support.nativeMatchMedia ? a.sources[d].mq.matches && (c = a.sources[d].url) : a.sources[d].width < b.fallbackWidth && (c = a.sources[d].url))
        }
        return c
    }

    function j(b, c, d, e) {
        var f = [x.media, x.image, e !== !0 ? x.animated : ""].join(" "),
            g = a('<div class="' + f + '" aria-hidden="true"><img alt=""></div>'),
            h = g.find("img"),
            i = c;
        h.one(y.load, function () {
            C && g.addClass(x["native"]).css({
                backgroundImage: "url('" + i + "')"
            }), g.fsTransition({
                property: "opacity"
            }, function () {
                d || m(b)
            }).css({
                opacity: 1
            }), t(b), (!d || e) && b.$el.trigger(y.loaded)
        }).attr("src", i), b.responsive && g.addClass(x.responsive), b.$container.append(g), (h[0].complete || 4 === h[0].readyState) && h.trigger(y.load), b.currentSource = i
    }

    function k(c, d, e) {
        if (c.source && c.source.poster && (j(c, c.source.poster, !0, !0), e = !1), !b.isMobile) {
            var f = [x.media, x.video, e !== !0 ? x.animated : ""].join(" "),
                g = '<div class="' + f + '" aria-hidden="true">';
            g += "<video", c.loop && (g += " loop"), c.mute && (g += " muted"), g += ">", c.source.webm && (g += '<source src="' + c.source.webm + '" type="video/webm" />'), c.source.mp4 && (g += '<source src="' + c.source.mp4 + '" type="video/mp4" />'), c.source.ogg && (g += '<source src="' + c.source.ogg + '" type="video/ogg" />'), g += "</video>", g += "</div>";
            var h = a(g),
                i = h.find("video");
            i.one(y.loadedMetaData, function (a) {
                h.fsTransition({
                    property: "opacity"
                }, function () {
                    m(c)
                }).css({
                    opacity: 1
                }), t(c), c.$el.trigger(y.loaded), c.autoPlay && p(c)
            }), c.$container.append(h)
        }
    }

    function l(c, d, e) {
        if (!c.videoId) {
            var f = d.match(/^.*(?:youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*/);
            c.videoId = f[1]
        }
        if (c.posterLoaded || (c.source.poster || (c.source.poster = "http://img.youtube.com/vi/" + c.videoId + "/0.jpg"), c.posterLoaded = !0, j(c, c.source.poster, !0, e), e = !1), !b.isMobile)
            if (a("script[src*='youtube.com/iframe_api']").length || a("head").append('<script src="//www.youtube.com/iframe_api"></script>'), D) {
                var g = c.guid + "_" + c.youTubeGuid++,
                    h = [x.media, x.embed, e !== !0 ? x.animated : ""].join(" "),
                    i = '<div class="' + h + '" aria-hidden="true">';
                i += '<div id="' + g + '"></div>', i += "</div>";
                var k = a(i),
                    l = a.extend(!0, {}, {
                        controls: 0,
                        rel: 0,
                        showinfo: 0,
                        wmode: "transparent",
                        enablejsapi: 1,
                        version: 3,
                        playerapiid: g,
                        loop: c.loop ? 1 : 0,
                        autoplay: 1,
                        origin: A.location.protocol + "//" + A.location.host
                    }, c.youtubeOptions);
                l.autoplay = 1, c.$container.append(k), c.player && (c.oldPlayer = c.player, c.player = null), c.player = new A.YT.Player(g, {
                    videoId: c.videoId,
                    playerVars: l,
                    events: {
                        onReady: function (a) {
                            c.playerReady = !0, c.mute && c.player.mute(), c.autoPlay && c.player.playVideo()
                        },
                        onStateChange: function (a) {
                            c.playing || a.data !== A.YT.PlayerState.PLAYING ? c.loop && c.playing && a.data === A.YT.PlayerState.ENDED && c.player.playVideo() : (c.playing = !0, c.autoPlay || c.player.pauseVideo(), k.fsTransition({
                                property: "opacity"
                            }, function () {
                                m(c)
                            }).css({
                                opacity: 1
                            }), t(c), c.$el.trigger(y.loaded)), c.$el.find(w.embed).addClass(x.ready)
                        },
                        onPlaybackQualityChange: function (a) { },
                        onPlaybackRateChange: function (a) { },
                        onError: function (a) { },
                        onApiChange: function (a) { }
                    }
                }), t(c)
            } else E.push({
                data: c,
                source: d
            })
    }

    function m(a) {
        var b = a.$container.find(w.media);
        b.length >= 1 && (b.not(":last").remove(), a.oldPlayer = null)
    }

    function n(a) {
        var b = a.$container.find(w.media);
        b.length >= 1 && b.fsTransition({
            property: "opacity"
        }, function () {
            b.remove(), delete a.source
        }).css({
            opacity: 0
        })
    }

    function o(a) {
        if (a.video) {
            if (a.isYouTube && a.playerReady) a.player.pauseVideo();
            else {
                var b = a.$container.find("video");
                b.length && b[0].pause()
            }
            a.playing = !1
        }
    }

    function p(a) {
        if (a.video) {
            if (a.isYouTube && a.playerReady) a.player.playVideo();
            else {
                var b = a.$container.find("video");
                b.length && b[0].play()
            }
            a.playing = !0
        }
    }

    function q(a) {
        if (a.video) {
            if (a.isYouTube && a.playerReady) a.player.mute();
            else {
                var b = a.$container.find("video");
                b.length && (b[0].muted = !0)
            }
            a.playing = !0
        }
        a.mute = !0
    }

    function r(a) {
        if (a.video) {
            if (a.isYouTube && a.playerReady) a.player.unMute();
            else {
                var b = a.$container.find("video");
                b.length && (b[0].muted = !1)
            }
            a.playing = !0
        }
        a.mute = !1
    }

    function s(a) {
        if (a.responsive) {
            var b = i(a);
            b !== a.currentSource ? j(a, b, !1, !0) : t(a)
        } else t(a)
    }

    function t(a) {
        for (var b = a.$container.find(w.media), c = 0, d = b.length; d > c; c++) {
            var e = b.eq(c),
                f = a.isYouTube ? "iframe" : e.find("video").length ? "video" : "img",
                g = e.find(f);
            if (g.length && ("img" !== f || !C)) {
                var h = a.$el.outerWidth(),
                    i = a.$el.outerHeight(),
                    j = u(a, g);
                a.width = j.width, a.height = j.height, a.left = 0, a.top = 0;
                var k = a.isYouTube ? a.embedRatio : a.width / a.height;
                a.height = i, a.width = a.height * k, a.width < h && (a.width = h, a.height = a.width / k), a.left = -(a.width - h) / 2, a.top = -(a.height - i) / 2, e.css({
                    height: a.height,
                    width: a.width,
                    left: a.left,
                    top: a.top
                })
            }
        }
    }

    function u(b, c) {
        if (b.isYouTube) return {
            height: 500,
            width: 500 / b.embedRatio
        };
        if (c.is("img")) {
            var d = c[0];
            if ("undefined" !== a.type(d.naturalHeight)) return {
                height: d.naturalHeight,
                width: d.naturalWidth
            };
            var e = new Image;
            return e.src = d.src, {
                height: e.height,
                width: e.width
            }
        }
        return {
            height: c[0].videoHeight,
            width: c[0].videoWidth
        }
    }
    var v = b.Plugin("background", {
        widget: !0,
        defaults: {
            autoPlay: !0,
            customClass: "",
            embedRatio: 1.777777,
            loop: !0,
            mute: !0,
            source: null,
            youtubeOptions: {}
        },
        classes: ["container", "media", "animated", "responsive", "native", "fixed", "ready"],
        events: {
            loaded: "loaded",
            ready: "ready",
            loadedMetaData: "loadedmetadata"
        },
        methods: {
            _construct: f,
            _destruct: g,
            _resize: d,
            play: p,
            pause: o,
            mute: q,
            unmute: r,
            resize: t,
            load: h,
            unload: n
        }
    }),
        w = v.classes,
        x = w.raw,
        y = v.events,
        z = v.functions,
        A = b.window,
        B = [],
        C = "backgroundSize" in b.document.documentElement.style,
        D = !1,
        E = [];
    A.onYouTubeIframeAPIReady = function () {
        D = !0;
        for (var a in E) E.hasOwnProperty(a) && l(E[a].data, E[a].source);
        E = []
    }
}(jQuery, Formstone);
/*! formstone v0.8.41 [transition.js] 2016-03-13 | MIT License | formstone.it */

! function (a, b, c) {
    "use strict";

    function d(a, c) {
        if (c) {
            a.$target = this.find(a.target), a.$check = a.target ? a.$target : this, a.callback = c, a.styles = i(a.$check), a.timer = null;
            var d = a.$check.css(b.transition + "-duration"),
                e = parseFloat(d);
            b.support.transition && d && e ? this.on(l.transitionEnd, a, f) : a.timer = m.startTimer(a.timer, 50, function () {
                h(a)
            }, !0)
        }
    }

    function e(a) {
        m.clearTimer(a.timer, !0), this.off(l.namespace)
    }

    function f(b) {
        b.stopPropagation(), b.preventDefault();
        var c = b.data,
            d = b.originalEvent,
            e = c.target ? c.$target : c.$el;
        c.property && d.propertyName !== c.property || !a(d.target).is(e) || g(c)
    }

    function g(a) {
        a.always || a.$el[k.namespaceClean]("destroy"), a.callback.apply(a.$el)
    }

    function h(a) {
        var b = i(a.$check);
        j(a.styles, b) || g(a), a.styles = b
    }

    function i(b) {
        var c, d, e, f = {};
        if (b instanceof a && (b = b[0]), n.getComputedStyle) {
            c = n.getComputedStyle(b, null);
            for (var g = 0, h = c.length; h > g; g++) d = c[g], e = c.getPropertyValue(d), f[d] = e
        } else if (b.currentStyle) {
            c = b.currentStyle;
            for (d in c) c[d] && (f[d] = c[d])
        }
        return f
    }

    function j(b, c) {
        if (a.type(b) !== a.type(c)) return !1;
        for (var d in b)
            if (!b.hasOwnProperty(d) || !c.hasOwnProperty(d) || b[d] !== c[d]) return !1;
        return !0
    }
    var k = b.Plugin("transition", {
        widget: !0,
        defaults: {
            always: !1,
            property: null,
            target: null
        },
        methods: {
            _construct: d,
            _destruct: e,
            resolve: g
        }
    }),
        l = k.events,
        m = k.functions,
        n = b.window
}(jQuery, Formstone);
// IE HTML5 DOM Fix | http://jdbartlett.github.com/innershiv | WTFPL License
window.innerShiv = (function () {
    var d, r;
    return function (h, u) {
        if (!d) {
            d = document.createElement('div');
            r = document.createDocumentFragment(); /*@cc_on d.style.display = 'none'@*/
        }
        var e = d.cloneNode(true); /*@cc_on document.body.appendChild(e);@*/
        e.innerHTML = h.replace(/^\s\s*/, '').replace(/\s\s*$/, ''); /*@cc_on document.body.removeChild(e);@*/
        if (u === false) {
            return e.childNodes;
        }
        var f = r.cloneNode(true),
            i = e.childNodes.length;
        while (i--) {
            f.appendChild(e.firstChild);
        }
        return f;
    }
}());
// Create Missing Console
if (window.console === undefined) {
    window.console = {
        log: function () { },
        error: function () { },
        warn: function () { }
    };
}

var OLDIE = OLDIE || false;

/* !Web Font Config */
var WebFontConfig = {
    typekit: {
        id: "dqd6cvb"
    },
    active: function () {
        $.doTimeout("web-font-timer", 5, function () {
            $(".sizer").trigger("resize.sizer");
            $(".roller").trigger("resize.roller");
            $(window).trigger("resize");
            HomeFeature._resize();
            HomeMP._resize();
            ExplorePictures._resize();
            Site._mason();

            Site._checkHash();
        });
    }
};


var Site = {
    maxWidth: Infinity,
    maxHeight: Infinity,

    masonryOptions: {
        itemSelector: "article, .sitemap_item",
        isResizable: false
    },

    _init: function () {
        $.scout();
        $.rubberband({
            maxWidth: [1440, 1220, 980, 740, 500, 320],
            maxHeight: [750]
        });

        Header._init();
        Subnavigation._init();
        HomeFeature._init();
        AdmissionsFeature._init();
        AcademicsFeature._init();
        Timeline._init();
        MiddlePath._init();
        Alerts._init();
        MobileSearch.init();

        $.scout();

        // Plugins
        $(".sizer").sizer();
        $(".background_sizer").backgroundSizer();
        $(".roller").roller();
        $(".tabber").tabber();

        $(".lightbox").boxer({
            fixed: true
        });

        $(".scrollto, a[href^='#']").not(".no_scroll, .recent_graduates nav a").click(Site._scrollTo);
        $(".video, .youtube").on("click", ".video_replace", Site._displayVideo);
        $(".grouped_list").on("click", ".title", Site._expandList);

        $(window).one("snap", function () {
            HomeMP._init();
            ExplorePictures._init();
            Site._checkHash();
        })
            .on("snap", Site._respond)
            .on("hashchange", Site._checkHash)
            .on("openbigtreebar closebigtreebar", function () {
                $(window).trigger("resize");
            });

        $(".nav_slider_handle").on("click", Site._toggleNav);

        // ------------------------------
        Site.CustomControls();

        // Recent Graduates
        $(".recent_graduates nav").on("click", "a", function (e) {
            e.preventDefault();
            e.stopPropagation();
            id = $(this).attr("href").substr(1);
            $(".recent_graduates").find("article").hide();
            $("#" + id).show();
            $(".recent_graduates nav > a").removeClass("active");
            $(this).addClass("active");
        });

        // Middle Path Dropdowns
        $(".mp_dropdown .currently").click(function (ev) {
            ev.stopPropagation();
            ev.preventDefault();
            p = $(this).parent();
            $(".mp_dropdown").not(p).removeClass("mp_dropdown_active");
            p.toggleClass("mp_dropdown_active");
        });
        $(".mp_dropdown .options a").click(function (ev) {
            ev.stopPropagation();
            ev.preventDefault();
            variable_name = $(this).attr("data-var");
            variable_value = $(this).attr("data-value");
            vars = {
                type: $("#mp_dropdown_type").attr("data-value"),
                category: $("#mp_dropdown_category").attr("data-value"),
                source: $("#mp_dropdown_source").attr("data-value"),
                semester: $("#mp_dropdown_semester").attr("data-value")
            };
            vars[variable_name] = variable_value;
            url = $("#mp_filters").attr("data-url") + "?";
            if (vars.type) {
                url += "type=" + vars.type + "&";
            }
            if (vars.category) {
                url += "category=" + vars.category + "&";
            }
            if (vars.source) {
                url += "source=" + vars.source + "&";
            }
            if (vars.semester) {
                url += "semester=" + vars.semester;
            }
            document.MAIN_URL = url;
        });
    },

    _checkHash: function () {
        if (window.location.hash != "") {
            var href = window.location.hash,
                $el = $(href);
            if (!$el.length) {
                $el = $("[name=" + href.substring(1) + "]");
            }
            if ($el.length) {
                var pos = $el.offset(),
                    offset = 20;
                if (href == "#top") {
                    pos.top = 0;
                } else {
                    if (Site.maxHeight > 750 && Site.maxWidth > 980) {
                        offset += $("#header").outerHeight(true);
                    }
                }
                $(window).scrollTop(pos.top - offset);
            }
        } else {
            $(window).scrollTop(0);
        }
    },

    _respond: function (e, point) {
        Site.maxWidth = point.maxWidth;
        Site.maxHeight = point.maxHeight;

        $(".sizer").trigger("resize.sizer");
        $(".roller").trigger("resize.roller");

        HomeMP._respond();
        Subnavigation._respond();
        ExplorePictures._respond();
        Timeline._respond();
        AcademicsFeature._reset();
        HomeFeature._resize();

        //MiddlePath._closeRelated();

        //Site.$masons.masonry(Site.masonryOptions);

        $("#boxer").boxer("resize");

        $.scout("Window", "Resize:MaxWidth", window.MAIN_URL, Site.maxWidth);
        $.scout("Window", "Resize:MaxHeight", window.MAIN_URL, Site.maxHeight);

        /* Site._closeNav(e); */
    },

    _displayVideo: function (e) {
        e.preventDefault();
        var $target = $(this);

        if (!$target.hasClass("video_active")) {
            $target.parents(".roller").find(".video, .youtube").each(function () {
                Site._removeVideo($(this));
            });
            $iframe = $('<iframe src="' + $target.data("video") + '" frameborder="0" allowfullscreen />');
            $target.addClass("video_active").append($iframe);
            $target.parents(".roller_item, .video_item").addClass("video_is_active");
        }
    },

    _removeVideo: function ($target) {
        $target.removeClass("video_active").find("iframe").remove();
        $target.parents(".roller_item, .video_item").removeClass("video_is_active");
    },

    _mason: function () {
        Site.$masons = $(".masonry");
        Site.$masons.imagesLoaded(function () {
            Site.$masons.masonry(Site.masonryOptions);
        });
    },

    _scrollTo: function (e) {
        var $target = $(this),
            href = $target.attr("href");

        if (href != "#") {
            e.stopPropagation();
            e.preventDefault();
            Site._scrollToElement(href);
        }
    },

    _scrollToElement: function (href) {
        var $el = $(href);

        if (!$el.length) {
            $el = $("[name=" + href.substring(1) + "]");
        }

        if ($el.length) {
            var pos = $el.offset(),
                offset = 20;

            if (href == "#top") {
                pos.top = 0;
            } else {
                if (Site.maxHeight > 750 && Site.maxWidth > 740) {
                    offset += Header.$header.outerHeight(true);
                }
            }

            Site._scrollToPos(pos.top - offset);
        }
    },

    _scrollToPos: function (pos) {
        $("html, body").animate({
            scrollTop: pos
        });
        $(window).on("mousedown DOMMouseScroll mousewheel keyup", Site._clearScroll);
    },

    _clearScroll: function (e) {
        if (e.which > 0 || e.type === "mousedown" || e.type === "mousewheel") {
            $("html, body").stop();
            $(window).off("mousedown DOMMouseScroll mousewheel keyup", Site._clearScroll);
        }
    },

    _expandList: function (e) {
        e.preventDefault();
        $(this).parent().toggleClass("expanded");
    },

    // -----------------------------------

    CustomControls: function () {
        // Setup custom checkboxes
        $("form.styled input[type=checkbox]").each(function () {
            if (!$(this).hasClass("custom_control")) {
                this.customControl = new BigTreeCheckbox(this);
                $(this).addClass("custom_control");
            }
        });

        // Setup custom select boxes
        $("form.styled select").each(function () {
            if (!$(this).hasClass("custom_control")) {
                this.customControl = new BigTreeSelect(this);
                $(this).addClass("custom_control");
            }
        });

        // Setup custom file boxes.
        /*
        $("form.styled input[type=file]").each(function() {
        	if (!$(this).hasClass("custom_control")) {
        		this.customControl = new BigTreeFileInput(this);
        		$(this).addClass("custom_control");
        	}
        });
        */

        // Setup custom radio buttons.
        $("form.styled input[type=radio]").each(function () {
            if (!$(this).hasClass("custom_control")) {
                this.customControl = new BigTreeRadioButton(this);
                $(this).addClass("custom_control");
            }
        });
    },

    _toggleNav: function (e) {
        e.preventDefault();
        e.stopPropagation();
        if ($("body").hasClass("nav_slider_open")) {
            Site._closeNav(e);
        } else {
            $("body").addClass("nav_slider_open");
            $(".nav_slider_page").one("click", Site._closeNav);
            $(".nav_slider_navigation").off("touchstart click", Site._mobileNavClick);
        }
    },

    _closeNav: function (e) {
        e.preventDefault();
        e.stopPropagation();
        $("body").removeClass("nav_slider_open");
        $(".nav_slider_navigation").on("touchstart click", Site._mobileNavClick);
    },

    _mobileNavClick: function (e) {
        e.preventDefault();
        e.stopPropagation();
    }
};



// !Header
var Header = {
    delay: 100,
    isOver: false,

    _init: function () {
        Header.$header = $("#header");
        Header.$nav = $("nav");

        Header.$nav.on("mouseenter", ".handle", Header._showDropdown)
            .on("mouseleave", Header._hideDropdown)
            .on("mouseleave", ".hoverout", Header._hideDropdown);
    },
    _showDropdown: function () {
        if (Site.maxWidth >= 980) { // DESKTOP ONLY
            var $target = $(this),
                $nav = $target.parents("nav");

            if (!$nav.hasClass("over")) {
                $.doTimeout("header-navigation", 100, $.proxy(Header._doShowDropdown, $target));
            } else {
                Header._doShowDropdown.apply($target);
            }
        }
    },
    _doShowDropdown: function () {
        var $target = $(this),
            $nav = $target.parents("nav");

        $nav.addClass("over").find(".handle").removeClass("active");
        $target.addClass("active");
    },
    _hideDropdown: function () {
        $nav = $(this);

        $nav.find(".handle").removeClass("active");
        $nav.removeClass("over");

        $.doTimeout("header-navigation");
    }
};


// !Subnavigation
var Subnavigation = {
    initialized: false,

    _init: function () {
        Subnavigation.$nav = $(".subnavigation");
        if (Subnavigation.$nav.length) {
            Subnavigation.$handle = Subnavigation.$nav.find(".naver-handle");
            Subnavigation.$wrapper = Subnavigation.$nav.find(".naver-wrapper");
            Subnavigation.$container = Subnavigation.$nav.find(".naver-container");

            Subnavigation.$nav.on("click.sunbavigation", Subnavigation._toggleMobile);

            Subnavigation.initialized = true;
        }
    },
    _respond: function () {
        Subnavigation._closeMobile();
    },
    _toggleMobile: function () {
        if (Subnavigation.initialized) {
            if (Subnavigation.$nav.hasClass("naver-open")) {
                Subnavigation._closeMobile();
            } else {
                Subnavigation.$wrapper.css({
                    height: Subnavigation.$container.outerHeight(true)
                });
                Subnavigation.$nav.addClass("naver-open");
            }
        }
    },
    _closeMobile: function () {
        if (Subnavigation.initialized) {
            Subnavigation.$wrapper.css("height", "");
            Subnavigation.$nav.removeClass("naver-open");
        }
    }
};


// !Home Feature
var HomeFeature = {
    transitionSpeed: 1000,
    bottomEdge: 0,
    minHeight: 300,
    animate: false,
    initialized: false,

    _init: function () {
        HomeFeature.$feature = $("#home_features");
        if (HomeFeature.$feature.length > 0) {

            HomeFeature.$wrapper = $("#feature_wrapper");
            HomeFeature.$viewport = HomeFeature.$feature.find(".viewport");
            HomeFeature.$overlay = HomeFeature.$feature.find(".overlay");
            HomeFeature.$positioner = HomeFeature.$feature.find(".positioner");
            HomeFeature.$articles = HomeFeature.$feature.find(".info");
            HomeFeature.$arrows = HomeFeature.$feature.find(".next, .previous");
            HomeFeature.$first_image = HomeFeature.$feature.find(".active .background_image");


            HomeFeature.controlHeight = 150;

            HomeFeature.index = 0;
            HomeFeature.total = HomeFeature.$articles.length - 1;

            HomeFeature._updateControls();


            $(window).on("scroll.home_feature", HomeFeature._scroll)
                .on("resize.home_feature", HomeFeature._resize);

            HomeFeature.$feature.on("click", ".next, .previous", HomeFeature._advance);


            HomeFeature.initialized = true;
            HomeFeature._resize();


            var background = HomeFeature.$feature.find("article.active").data("background");

            if (Formstone.isMobile) {
                background = HomeFeature.$feature.find("article.active").data("mobile-background");
            }

            HomeFeature.$viewport.background({
                source: background
            });
        }
    },
    _scroll: function () {
        var scrollTop = $(window).scrollTop();

        if (Site.maxWidth >= 1220) { // DESKTOP ONLY
            var diff = scrollTop - HomeFeature.viewportSplit;
            if (Site.maxHeight <= 750) {
                diff -= HomeMP.headerHeight;
            }
            if (diff < 0) {
                HomeFeature.$overlay.css({
                    opacity: (-diff / HomeFeature.viewportSplit)
                });
            } else {
                HomeFeature.$overlay.css({
                    opacity: 0
                });
            }
        } else {
            HomeFeature.$overlay.css({
                opacity: 1
            });
        }

        if (HomeMP.initialized) {
            var edge = HomeMP.$container.outerHeight(true) - Lib.WindowHeight() + HomeMP.headerHeight /*  + 80 */;

            if (Site.maxWidth > 980 && Site.maxHeight <= 750) {
                var top = HomeMP.headerHeight - scrollTop;
                if (scrollTop > HomeMP.headerHeight) {
                    top = 0;
                }
                if (top > HomeMP.headerHeight) {
                    top = HomeMP.headerHeight;
                }
                HomeFeature.$feature.css({
                    top: top
                });
            } else {
                HomeFeature.$feature.css({
                    top: ''
                });
            }


            if (scrollTop >= edge) {
                HomeFeature.$wrapper.addClass("stuck");
            } else {
                HomeFeature.$wrapper.removeClass("stuck");
            }
        }
    },
    _resize: function (e) {
        if (HomeFeature.initialized) {
            var minHeight = 0;
            HomeFeature.$articles.each(function () {
                var h = $(this).outerHeight();
                if (h > minHeight) {
                    minHeight = h;
                }
                var t = (h - HomeFeature.controlHeight) / 2;
                $(this).css({
                    marginTop: -t
                });
            });

            if (Site.maxWidth < 740) {
                HomeFeature.minHeight = minHeight + 100;
                HomeMP.minMargin = minHeight + 100;
            } else {
                if (minHeight + 175 < 400) {
                    HomeFeature.minHeight = 400;
                    HomeMP.minMargin = 400;
                } else {
                    HomeFeature.minHeight = minHeight + 175;
                    HomeMP.minMargin = minHeight + 185;
                }
            }

            if (Site.maxWidth > 980) {
                var featureHeight = Lib.WindowHeight();
                if (Site.maxHeight > 750 && Site.maxWidth > 740) {
                    featureHeight -= (typeof HomeMP.headerHeight != "undefined") ? HomeMP.headerHeight : parseInt(Header.$header.outerHeight(true));
                }
            } else {
                var featureHeight = HomeFeature.minHeight;
            }

            HomeFeature.$feature.css({
                height: featureHeight,
                width: $(window).outerWidth()
            });

            var viewportHeight = HomeFeature.$viewport.outerHeight();
            if (viewportHeight < HomeFeature.minHeight) {
                viewportHeight = HomeFeature.minHeight;
            }

            if (Site.maxWidth <= 980) {
                newMargin = ((HomeFeature.minHeight - HomeFeature.controlHeight) / 2);
            } else if (Site.maxHeight <= 750) {
                newMargin = (HomeMP.minMargin / 2) - 75;
            } else {
                newMargin = ((viewportHeight - HomeFeature.controlHeight) / 2);
                if (Site.maxWidth >= 740) {
                    newMargin -= 35;
                }
            }

            HomeFeature.$positioner.css({
                marginTop: newMargin
            });

            HomeFeature.viewportSplit = viewportHeight / 2;
            HomeFeature.bottomEdge = $(".home_bottom").offset().top;

            HomeFeature._scroll();

            //fade up if it's invisible
            if (!HomeFeature.$feature.hasClass("ready")) {
                $.doTimeout(200, function () {
                    HomeFeature.$feature.addClass("ready");
                });
            }

        }
    },
    _advance: function (e) {
        if (HomeFeature.animate == true) return false;

        var $taget = $(e.target),
            index = HomeFeature.index + ($taget.hasClass("previous") ? -1 : 1);

        if (index < 0) index = 0;
        if (index > HomeFeature.total) index = HomeFeature.total;

        if (index != HomeFeature.index) {
            HomeFeature.animate = true;
            HomeFeature.$feature.addClass("animated");

            HomeFeature.$articles.filter(".active").addClass("was_active").removeClass("active");
            HomeFeature.$articles.each(function (i) {
                var $t = $(this);
                $t.removeClass("before after");
                if (i < index) {
                    $t.addClass("before");
                } else if (i == index) {
                    $t.addClass("active");
                } else {
                    $t.addClass("after");
                }
            });

            var background = HomeFeature.$feature.find("article.active").data("background");

            if (Formstone.isMobile) {
                background = HomeFeature.$feature.find("article.active").data("mobile-background");
            }

            HomeFeature.$viewport.background("load", background);

            var darker = HomeFeature.$feature.find("article.active").data("darker") == "on";
            if (darker) {
                HomeFeature.$viewport.addClass("darker");
            } else {
                HomeFeature.$viewport.removeClass("darker");
            }

            HomeFeature.$viewport.hasClass("darker");

            $.doTimeout("home-feature-reset", (OLDIE) ? 0 : HomeFeature.transitionSpeed, function () {
                HomeFeature.$articles.filter(".was_active").removeClass("was_active");
                HomeFeature.animate = false;
                HomeFeature.$feature.removeClass("animated");
            });

            HomeFeature.index = index;

            HomeFeature._updateControls();
        }
    },
    _updateControls: function () {
        HomeFeature.$next = HomeFeature.$feature.find(".next");
        HomeFeature.$nextTitle = HomeFeature.$feature.find("article.active").next("article").data("title");
        HomeFeature.$nextImage = HomeFeature.$feature.find("article.active").next("article").data("image");

        HomeFeature.$arrows.removeClass("disabled");
        if (HomeFeature.index <= 0) {
            HomeFeature.$arrows.filter(".previous").addClass("disabled");
        } else if (HomeFeature.index >= HomeFeature.total) {
            HomeFeature.$arrows.filter(".next").addClass("disabled");
        }

        HomeFeature.$feature.find(".next_preview_title").text(HomeFeature.$nextTitle);
        HomeFeature.$feature.find(".next_preview_image img").attr("src", HomeFeature.$nextImage);
    }
};


// !HomeMP
var HomeMP = {
    initialized: false,
    minMargin: 300,
    page: 0,
    perPage: 5,
    maxPages: 3,
    loadingStarted: false,
    firstRun: true,

    _init: function () {
        HomeMP.$container = $("#home_middlepath");
        if (HomeMP.$container.length) {
            HomeMP.$button = $("#home_middlepath_load_more");
            HomeMP.$elements = $("#home_middlepath_elements");
            HomeMP.$topicsHandle = HomeMP.$container.find(".topics_handle");
            HomeMP.$topics = HomeMP.$container.find(".topics");

            HomeMP.initialized = true;

            //Site._mason();
            HomeMP._resize();

            $(window).on("scroll.home_mp", HomeMP._scroll).on("resize.home_mp", HomeMP._resize);

            HomeMP.$topicsHandle.on("click", HomeMP._toggleTopics);
            HomeMP.$button.on("click", HomeMP._loadMore);
        }
    },
    _scroll: function () {
        var edge = HomeMP.margin;
        if (Site.maxWidth >= 1220 && Site.maxHeight > 750) {
            edge += 10;
        }
        if (Site.maxHeight <= 750) {
            edge += HomeMP.headerHeight + 10;
        }

        if (window.scrollY >= edge && Site.maxWidth >= 1220) {
            edge += HomeMP.height - Lib.WindowHeight();
            if (window.scrollY < edge) {
                HomeMP.$container.addClass("stuck").removeClass("hidden");
            } else {
                HomeMP.$container.addClass("hidden");
                HomeMP._closeTopics();
            }
        } else {
            HomeMP.$container.removeClass("stuck").removeClass("hidden");
        }
    },
    _respond: function () {
        if (HomeMP.initialized) {
            if (Site.maxWidth > 740) {
                HomeMP.perPage = 9;
            } else if (Site.maxWidth < 740) {
                HomeMP.perPage = 5;
            }

            HomeMP._resize();
            HomeMP._closeTopics();

            if (HomeMP.firstRun) {
                HomeMP.$button.trigger("click");
                HomeMP.firstRun = false;
            }
        }
    },
    _resize: function (e) {
        if (HomeMP.initialized) {
            HomeMP.headerHeight = parseInt(Header.$header.outerHeight(true));

            if (Site.maxWidth <= 980) {
                HomeMP.margin = HomeFeature.minHeight + 60;
            } else if (Site.maxHeight <= 750) {
                HomeMP.margin = HomeMP.minMargin;
            } else {
                HomeMP.margin = Lib.WindowHeight() - HomeMP.headerHeight - 70;
            }

            HomeMP.height = HomeMP.$elements.height();
            HomeMP.$container.css({
                paddingTop: HomeMP.margin + 10
            });

            HomeMP._scroll();
        }
    },
    _loadMore: function (e) {
        if (!$(this).hasClass("disabled")) {
            HomeMP.page++;
            e.preventDefault();
            e.stopPropagation();

            $.ajax({
                url: MAIN_URL + "/request/home-middle-path",
                data: {
                    page: HomeMP.page,
                    perPage: HomeMP.perPage
                },
                complete: function (r) {
                    //console.log(r);
                    var json = $.parseJSON(r.responseText),
                        $content = $(json.content);
                    console.log(json);
                    HomeMP.$elements.append($content);
                    /*HomeMP.$elements.append($content).masonry("appended", $content).imagesLoaded(function () {
                        $content.addClass("ready");
                        HomeMP.$elements.masonry(Site.masonryOptions);
                        $(window).trigger("resize").trigger("scroll");

                        if (!HomeMP.loadingStarted) {
                            HomeMP.loadingStarted = true;
                            HomeMP.$elements.addClass("animated");
                        }
                    });
                    HomeFeature._scroll();

                    if (!json.more || HomeMP.page >= HomeMP.maxPages) {
                        HomeMP.$button.addClass("disabled").text("Explore Middle Path");
                    }*/
                }
            });
        }
    },
    _toggleTopics: function () {
        if (HomeMP.$topics.hasClass("open")) {
            HomeMP._closeTopics();
        } else {
            HomeMP.$topicsHandle.addClass("open");
            HomeMP.$topics.addClass("open");
            Site._scrollToElement("#home_middlepath_elements");
        }
    },
    _closeTopics: function () {
        if (HomeMP.initialized) {
            HomeMP.$topicsHandle.removeClass("open");
            HomeMP.$topics.removeClass("open");
        }
    }
};


/* !Middle Path */
var MiddlePath = {
    relatedActive: false,
    resetTime: 350,

    _init: function () {
        //Site._mason();

        MiddlePath.$related = $("#middlepath_related");
        MiddlePath.$relatedContent = $();
        MiddlePath.$relatedLoading = $("#middlepath_related_loading");

        $(".middlepath_sidebar .expand").click(MiddlePath._expandTags);

        //$("body").on("click", ".middlepath_related", MiddlePath._loadRelated);
        //MiddlePath.$related.on("click", "header .close", MiddlePath._closeRelated);

        $(window).on("resize.middlepath", MiddlePath._resize);
    },
    _expandTags: function () {
        $(this).parents(".links").find(".hidden").show();
        $(this).parent().remove();
    },

    _resize: function () {
        MiddlePath.$related.css({
            height: (Lib.WindowHeight() * 0.6)
        });
    }
};


/* !Explore picture */
var ExplorePictures = {
    initialized: false,
    loading: false,
    loadingStarted: false,
    perPage: 5,
    page: 0,
    buffer: 5,
    category: "all",
    reached: false,

    _init: function () {
        ExplorePictures.$container = $("#explore");
        if (ExplorePictures.$container.length) {
            ExplorePictures.initialized = true;

            ExplorePictures.$grid = ExplorePictures.$container.find(".grid");
            ExplorePictures.$topicsHandle = ExplorePictures.$container.find(".topics_handle");
            ExplorePictures.$topics = ExplorePictures.$container.find(".topics");
            ExplorePictures.$loadButton = ExplorePictures.$container.find(".load_more");

            $(window).on("resize.explore", ExplorePictures._resize);

            ExplorePictures.$topicsHandle.on("click", ExplorePictures._toggleTopics);
            ExplorePictures.$topics.on("click", "span", ExplorePictures._loadTopic);
            ExplorePictures.$loadButton.on("click", ExplorePictures._load);

            ExplorePictures._respond();
            ExplorePictures._loadImages();
        }
    },
    _respond: function () {
        if (ExplorePictures.initialized) {
            ExplorePictures.$images = ExplorePictures.$container.find("figure");

            if (Site.maxWidth >= 1220 || Site.maxWidth <= 740) {
                ExplorePictures.perPage = 8;
            } else {
                ExplorePictures.perPage = 6;
            }

            var count = 5;
            if (Site.maxWidth <= 1440) count = 4;
            if (Site.maxWidth <= 1220) count = 3;
            if (Site.maxWidth <= 980) count = 3;
            if (Site.maxWidth <= 740) count = 2;

            var end = ExplorePictures.$images.length - (ExplorePictures.$images.length % count);
            if (ExplorePictures.$images.length == count) {
                end = count;
            }

            ExplorePictures.$images.hide()
                .slice(0, end)
                .show();

            ExplorePictures._resize();
        }
    },
    _resize: function () {
        $.doTimeout("explore-pictures", 10, ExplorePictures._doResize);
    },
    _doResize: function () {
        if (ExplorePictures.initialized) {
            var offset = ExplorePictures.$container.offset();
            ExplorePictures.margin = offset.top;

            if (Site.maxHeight > 750 && Site.maxWidth >= 980) {
                ExplorePictures.margin -= Header.$header.outerHeight(true);
            }

            ExplorePictures.maxScroll = $(document).outerHeight() - $(window).height() - 50;

            ExplorePictures._scroll();
        }
    },
    _toggleTopics: function () {
        if (ExplorePictures.$topics.hasClass("open")) {
            ExplorePictures._closeTopics();
        } else {
            ExplorePictures.$topicsHandle.addClass("open");
            ExplorePictures.$topics.addClass("open");
        }
    },
    _closeTopics: function () {
        if (ExplorePictures.initialized) {
            ExplorePictures.$topicsHandle.removeClass("open");
            ExplorePictures.$topics.removeClass("open");
        }
    },
    _scroll: function () {
        if (ExplorePictures.initialized) {
            if (ExplorePictures.loadingStarted && !ExplorePictures.loading && (Lib.WindowHeight() + $(window).scrollTop()) >= $("body").height()) {
                ExplorePictures._load();
            }
            // Sticky
            if (window.scrollY >= ExplorePictures.margin && Site.maxWidth >= 1220) {
                ExplorePictures.$container.addClass("stuck");
            } else {
                ExplorePictures.$container.removeClass("stuck");
            }

            if (window.scrollY >= ExplorePictures.maxScroll && !ExplorePictures.reached) {
                ExplorePictures.reached = true;
                //var _gaq = window._gaq || [];
                _gaq.push(['_trackEvent', "Footer:Explore", "Viewed"]);
            }
        }
    },
    _loadTopic: function () {
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
        ExplorePictures.category = $(this).data("id");
        ExplorePictures.page = 0;
        ExplorePictures.buffer = 0;
        ExplorePictures._load(false);
    },
    _load: function (doAppend) {
        ExplorePictures._closeTopics();

        ExplorePictures.page++;
        ExplorePictures.loading = true;

        ExplorePictures.$loadButton.addClass("loading");
        ExplorePictures.windowPos = $(window).scrollTop();

        $.ajax({
            url: MAIN_URL + "/request/footer-pictures",
            data: {
                page: ExplorePictures.page,
                perPage: ExplorePictures.perPage,
                category: ExplorePictures.category,
                buffer: ExplorePictures.buffer
            },
            complete: function (response) {
                var json = $.parseJSON(response.responseText);
                if (doAppend === false) {
                    ExplorePictures.$grid.html(json.content);
                } else {
                    ExplorePictures.$grid.append(json.content);
                }
                ExplorePictures.loading = !json.more;
                if (!json.more) {
                    ExplorePictures.$loadButton.remove();
                }
                ExplorePictures._respond();
                ExplorePictures._loadImages();

                $(window).scrollTop(ExplorePictures.windowPos);

                if (!ExplorePictures.loadingStarted) {
                    ExplorePictures.loadingStarted = true;

                    var pos = $("#explore").offset().top;
                    if (Site.maxHeight > 750 && Site.maxWidth > 980) {
                        pos -= Header.$header.outerHeight(true);
                    }

                    Site._scrollToPos(pos);
                }
            }
        });
    },
    _loadImages: function () {
        ExplorePictures.$grid.find("img:not(.loaded)").each(function () {
            var $img = $(this);
            $img.one("load", function () {
                $img.addClass("loaded");
            });

            if ($img[0].complete || $img[0].height > 0) {
                $img.trigger("load");
            }
        });
    }
};
/* !Alerts */
var Alerts = {
    _init: function () {
        Alerts.$alerts = $("#alerts .alert");
        Alerts.$alerts.on("click", ".close", Alerts._close);
    },
    _close: function (e) {
        var $this = $(this),
            id = $this.data("id");
        $this.parent().addClass("disabled");
        $.doTimeout((OLDIE) ? 0 : 450, function () {
            $this.parent().remove();
            $.macaroon("kenyon-alert-" + id, "closed");
        });
    }
};
/* !Timeline */
var Timeline = {
    initialized: false,

    _init: function () {
        Timeline.$container = $(".timeline");
        if (Timeline.$container.length) {
            Timeline.$items = Timeline.$container.find(".roller_item");

            Timeline.initialized = true;

            Timeline.$container.on("click.timeline", ".roller_item.visible", Timeline._expand)
                .on("click.timeline", ".roller_arrow, .roller_item.active", Timeline._collapse);
        }
    },
    _respond: function () {
        Timeline._collapse();
    },
    _expand: function (e) {
        if (Timeline.initialized) {
            var $target = $(this);

            Timeline.$items.removeClass("active").addClass("faded");
            $target.addClass("active").removeClass("faded");
        }
    },
    _collapse: function () {
        if (Timeline.initialized) {
            Timeline.$items.removeClass("active").removeClass("faded");
        }
    }
};


/* ! Admissions Feature */
var AdmissionsFeature = {
    transitionSpeed: 1000,
    animate: false,

    _init: function () {
        AdmissionsFeature.$feature = $(".admissions_feature");
        if (AdmissionsFeature.$feature.length > 0) {
            AdmissionsFeature.$images = AdmissionsFeature.$feature.find(".background_item");
            AdmissionsFeature.$articles = AdmissionsFeature.$feature.find(".info");
            AdmissionsFeature.$arrows = AdmissionsFeature.$feature.find(".next, .previous");

            AdmissionsFeature.index = 0;
            AdmissionsFeature.total = AdmissionsFeature.$images.length - 1;

            AdmissionsFeature._updateControls();

            AdmissionsFeature.$feature.on("click", ".next, .previous", AdmissionsFeature._advance);
        }
    },
    _advance: function (e) {
        if (AdmissionsFeature.animate == true) return false;

        var $taget = $(e.target),
            index = AdmissionsFeature.index + ($taget.hasClass("previous") ? -1 : 1);

        if (index < 0) index = 0;
        if (index > AdmissionsFeature.total) index = AdmissionsFeature.total;

        if (index != AdmissionsFeature.index) {
            AdmissionsFeature.animate = true;
            AdmissionsFeature.$feature.addClass("animated");

            AdmissionsFeature.$images.filter(".active").addClass("was_active").removeClass("active");
            AdmissionsFeature.$images.eq(index).addClass("active");

            AdmissionsFeature.$articles.filter(".active").addClass("was_active").removeClass("active");
            AdmissionsFeature.$articles.each(function (i) {
                var $t = $(this);
                $t.removeClass("before after");
                if (i < index) {
                    $t.addClass("before");
                } else if (i == index) {
                    $t.addClass("active");
                } else {
                    $t.addClass("after");
                }
            });

            $.doTimeout("admissions-feature-reset", (OLDIE) ? 0 : AdmissionsFeature.transitionSpeed, function () {
                AdmissionsFeature.$articles.filter(".was_active").removeClass("was_active");
                AdmissionsFeature.$images.filter(".was_active").removeClass("was_active");
                AdmissionsFeature.animate = false;
                AdmissionsFeature.$feature.removeClass("animated");
            });

            AdmissionsFeature.index = index;

            AdmissionsFeature._updateControls();
        }
    },
    _updateControls: function () {
        AdmissionsFeature.$arrows.removeClass("disabled");
        if (AdmissionsFeature.index <= 0) {
            AdmissionsFeature.$arrows.filter(".previous").addClass("disabled");
        } else if (AdmissionsFeature.index >= AdmissionsFeature.total) {
            AdmissionsFeature.$arrows.filter(".next").addClass("disabled");
        }
    }
};


/* !Academics Feature */
var AcademicsFeature = {
    initialized: false,

    _init: function () {
        AcademicsFeature.$feature = $(".academics_feature");
        if (AcademicsFeature.$feature.length && !AcademicsFeature.initialized) {
            AcademicsFeature.$items = AcademicsFeature.$feature.find(".roller_item");

            AcademicsFeature.$feature.on("click", ".roller_item", AcademicsFeature._toggleActive)
                .on("click", ".roller_arrow", AcademicsFeature._reset);

            AcademicsFeature.initialized = true;
        }
    },
    _toggleActive: function () {
        if (AcademicsFeature.initialized) {
            var $target = $(this);

            if ($target.hasClass("active")) {
                $target.removeClass("active");
                AcademicsFeature.$items.removeClass("active faded");
            } else {
                AcademicsFeature.$items.removeClass("active faded");
                $target.addClass("active");
                AcademicsFeature.$items.not(".active").addClass("faded");
            }
        }
    },
    _reset: function () {
        if (AcademicsFeature.initialized) {
            $.doTimeout("academics-feature-reset", (OLDIE) ? 0 : 100, function () {
                AcademicsFeature.$items.removeClass("active faded");
                AcademicsFeature.$items.find(".content").removeClass("display_left");

                var start = 3;
                var end = 4;
                if (Site.maxWidth <= 1220) {
                    start = 2;
                    end = 3;
                }

                AcademicsFeature.$items.filter(".visible").slice(start, end).find(".content").addClass("display_left");
            });
        }
    }
};



/* !Roller */
(function ($) {
    var options = {
        transitionSpeed: 510
    };
    var pub = {
        resize: function (e) {
            var data = $(e.delegateTarget).data("roller");
            $.doTimeout("sizer-roller-" + data.guid, 10, _doResize, data);
        },
        reset: function (e) {
            var data = $(e.delegateTarget).data("roller");

            data.$canister.css({
                left: 0
            });
        }
    };
    var guid = 0;

    function _init() {
        return $(this).each(_build);
    }

    function _build() {
        var $roller = $(this),
            data = {
                $roller: $roller,
                $canister: $roller.find(".roller_canister"),
                $items: $roller.find(".roller_item"),
                $menuArrows: $roller.find(".roller_arrow"),
                $menuPagination: $roller.find(".pagination"),
                $menuItems: $roller.find(".roller_menu_item"),
                $controls: $roller.find(".controls"),
                $images: $roller.find("img"),
                isAnimating: false,
                index: -1,
                paged: $(this).hasClass("roller_paged"),
                guid: guid++
            };

        data.count = data.$items.length;
        data.totalImages = data.$images.length;

        data.$roller.data("roller", data)
            .on("click.roller", ".roller_arrow", _advance)
            .on("click.roller", ".roller_menu_item", _select)
            .on("click.roller", '.roller_item:not(".active, .visible")', _jump)
            .on("resize.roller", data, pub.resize)
            .on("reset.roller", data, pub.reset)
            .trigger("resize.roller");

        if (data.totalImages > 0) {
            data.loadedImages = 0;
            for (var i = 0; i < data.totalImages; i++) {
                var $img = data.$images.eq(i);
                $img.one("load", data, _onImageLoad);
                if ($img[0].complete || $img[0].height > 0) {
                    $img.trigger("load");
                }
            }
        }
    }

    function _onImageLoad(e) {
        var data = e.data;
        data.loadedImages++;
        if (data.loadedImages == data.totalImages) {
            data.$roller.find(".sizer").trigger("resize.sizer");
            data.$roller.addClass("images_loaded")
                .trigger("resize.roller");
        }
        data.$roller.data("roller", data);
    }

    function _swipe(e) {
        e.preventDefault();

        var data = $(e.delegateTarget).data("roller");
        if (!data.isAnimating) {
            var index = data.index + ((e.direction == "left") ? 1 : -1);
            _position(data, index, true);
        }
    }

    function _advance(e) {
        e.preventDefault();

        var data = $(e.delegateTarget).data("roller");
        if (!data.isAnimating) {
            var index = data.index + (($(e.currentTarget).hasClass("next")) ? 1 : -1);
            _position(data, index, true);
        }
    }

    function _select(e) {
        e.preventDefault();

        var data = $(e.delegateTarget).data("roller");
        var $target = $(e.currentTarget);
        if ((!data.usePaged && !$target.hasClass("visible")) || (data.usePaged && !$target.hasClass("active"))) {
            var index = data.$menuItems.index($target);
            _position(data, index, true);
        }
    }

    function _jump(e) {
        e.preventDefault();
        var data = $(e.delegateTarget).data("roller");
        var $target = $(e.currentTarget);

        if ((!data.usePaged && !$target.hasClass("visible")) || (data.usePaged && !$target.hasClass("active"))) {
            var index = (data.usePaged) ? data.$items.index($target) : Math.floor(data.$items.index($target) / data.perPage);
            _position(data, index, true);
        }
    }

    function _position(data, index, animate) {
        if (animate) {
            data.isAnimating = true;
            data.$roller.addClass("animated");
        }

        if (index < 0) {
            index = 0;
        }

        if (index > data.pageCount) {
            index = data.pageCount;
        }

        var newLeft = -(index * data.pageMove);
        if (newLeft < data.maxMove && !(data.usePaged)) {
            newLeft = data.maxMove;
        }
        data.$canister.css({
            left: newLeft
        });

        data.$menuItems.filter(".active").removeClass("active");
        data.$menuItems.eq(index).addClass("active");

        if (data.usePaged) {
            data.$items.filter(".active").removeClass("active")
            data.$items.eq(index).addClass("active");
        } else if (data.perPage != "Infinity") {
            data.$items.removeClass("visible").removeClass("active");
            for (var i = 0; i < data.perPage; i++) {
                if (newLeft == data.maxMove) {
                    data.$items.eq(data.itemsTotal - i).addClass("visible");
                } else {
                    data.$items.eq((data.perPage * index) + i).addClass("visible");
                }
            }
        }

        data.index = index;
        data.$roller.data("roller", data);

        _updateControls(data);

        data.$items.not(".active").find(".video_active").each(function () {
            Site._removeVideo($(this));
        });

        if (animate) {
            $.doTimeout((OLDIE) ? 0 : options.transitionSpeed, function () {
                data.isAnimating = false;
                data.$roller.removeClass("animated");
            });
        }
    }

    function _updateControls(data) {
        if (data.pageCount <= 0) {
            data.$menuArrows.addClass("disabled");
        } else {
            data.$menuArrows.removeClass("disabled");
            if (data.index <= 0) {
                data.$menuArrows.filter(".previous").addClass("disabled");
            } else if (data.index >= data.pageCount) {
                data.$menuArrows.filter(".next").addClass("disabled");
            }
        }
    }

    function _doResize(data) {
        data.$roller.addClass("initialized")
            .css({
                height: data.$canister.outerHeight(true)
            });

        data.pageWidth = data.$roller.outerWidth(true);
        data.itemWidth = data.$items.eq(0).outerWidth(true);
        data.perPage = Math.round(data.pageWidth / data.itemWidth);
        data.pageCount = Math.ceil(data.count / data.perPage) - 1;
        data.itemsTotal = data.$items.length - 1;
        data.pageMove = data.itemWidth * data.perPage;
        data.maxWidth = data.itemWidth * (data.itemsTotal + 1);
        data.maxMove = -data.maxWidth + data.pageWidth + parseInt(data.$items.eq(0).css("margin-right"), 10);
        if (data.maxMove > 0) data.maxMove = 0;

        data.usePaged = data.paged && (Site.maxWidth > 980);

        if (data.usePaged) {
            data.itemWidth = data.$items.eq(0).find(".roller_page_sizer").outerWidth(true);
            data.pageCount = data.itemsTotal;
            data.pageMove = data.itemWidth;
            data.maxMove = -data.itemWidth * data.pageCount
        }

        // Reset Page Count
        if (data.pageCount != "Infinity") {
            var html = '';
            for (var i = 0; i <= data.pageCount; i++) {
                html += '<span class="roller_menu_item page">' + i + '</span>';
            }
            data.$menuPagination.html(html);
        }
        if (data.pageCount < 1) {
            data.$controls.addClass("hidden");
            data.$menuPagination.addClass("hidden");
        } else {
            data.$controls.removeClass("hidden");
            data.$menuPagination.removeClass("hidden");
        }
        data.$menuItems = data.$roller.find(".roller_menu_item");

        if (data.usePaged) {
            var index = data.index;
        } else {
            var index = -Math.ceil(parseInt(data.$canister.css("left"), 10) / data.pageWidth);
        }
        _position(data, index, false);
    }

    $.fn.roller = function (method) {
        if (pub[method]) {
            return pub[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return _init.apply(this, arguments);
        }
        return this;
    };
})(jQuery);


/* !Sizer */
(function ($) {
    var pub = {}
    guid = 0;

    function _init() {
        return $(this).each(_build);
    }

    function _build() {
        var $sizer = $(this),
            data = {
                $sizer: $sizer,
                $items: $sizer.find(".sizer_item"),
                updateParent: ($sizer.hasClass("sizer_update")),
                guid: guid++
            };
        data.$items.wrapInner('<div class="sizer_size"></div>');
        data.$sizer.on("resize.sizer", data, _resize)
            .trigger("resize.sizer");

        data.$sizer.one("load", "img", function () {
            $(this).trigger("resize.sizer");
        });
    }

    function _resize(e) {
        var data = e.data;
        $.doTimeout("sizer-resize-" + data.guid, 10, _doResize, data);
    }

    function _doResize(data) {
        var height = 0;

        data.$items.css({
            height: ''
        });

        for (var i = 0; i < data.$items.length; i++) {
            var itemHeight = data.$items.eq(i).find(".sizer_size").outerHeight(true);
            if (itemHeight > height) {
                height = itemHeight;
            }
        }

        data.$items.css({
            height: height
        });
        if (data.updateParent) {
            data.$sizer.css({
                height: height
            });
        }
    }

    $.fn.sizer = function (method) {
        if (pub[method]) {
            return pub[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return _init.apply(this, arguments);
        }
        return this;
    };
})(jQuery);


/* !Background Sizer */
(function ($) {
    var pub = {},
        guid = 0;

    function _init() {
        return $(this).each(_build);
    }

    function _build() {
        var $sizer = $(this),
            data = {
                $sizer: $sizer,
                $items: $sizer.find(".background_item"),
                $images: $sizer.find(".background_image"),
                guid: guid++
            };

        if ($sizer.parents("#home_features").length) {
            data.imageHeight = 700;
            data.imageWidth = 1440;
        } else {
            data.imageHeight = data.$images.eq(0)[0].height;
            data.imageWidth = data.$images.eq(0)[0].width;

            data.$images.eq(0).one("load", data, function (e) {
                data.imageHeight = $(this)[0].height;
                data.imageWidth = $(this)[0].width;
                _resize(e);
            });
        }

        $(window).on("resize.backgroundsizer", data, _resize)
            .trigger("resize.backgroundsizer");
    }

    function _resize(e) {
        var data = e.data;
        $.doTimeout("background-sizer-resize-" + data.guid, 10, _doResize, data);
    }

    function _doResize(data) {
        data.ratioVertical = (data.imageHeight / data.imageWidth);
        data.ratioHorizontal = (data.imageWidth / data.imageHeight);

        var viewportWidth = data.$sizer.outerWidth(true);
        var viewportHeight = data.$sizer.outerHeight(true);

        var newWidth = viewportWidth;
        var newHeight = newWidth / data.ratioHorizontal;

        if (newHeight < viewportHeight) {
            newHeight = viewportHeight;
            newWidth = newHeight / data.ratioVertical;
        }

        var newLeft = (newWidth - viewportWidth) / 2;
        var newTop = (newHeight - viewportHeight) / 2;

        data.$items.css({
            height: newHeight,
            width: newWidth,
            left: -newLeft,
            top: -newTop
        });
    }
    $.fn.backgroundSizer = function (method) {
        if (pub[method]) {
            return pub[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return _init.apply(this, arguments);
        }
        return this;
    };
})(jQuery);

// Mobile search toggles
var MobileSearch = (function () {
    function init() {
        var $Form = $(".nav_slider_navigation form");
        var $Labels = $(".nav_slider_navigation form label");
        var $Slider = $(".mobile_search_type");

        $Labels.click(function (ev) {
            // Don't do anything if we're on this state
            if ($(this).hasClass("mobile_search_type_active")) {
                return;
            }

            // Get URL based on what we clicked
            var url = $(this).data("target");

            // Set new active label
            $Labels.removeClass("mobile_search_type_active");
            $(this).addClass("mobile_search_type_active");

            // Set new form target
            $Form.attr("action", url);

            // Move the slider around
            $Slider.toggleClass("directory");
        });

        $Slider.click(function (ev) {
            // Move slider around
            $(this).toggleClass("directory");

            // Get non-active URL
            var $non_active_label = $Labels.not(".mobile_search_type_active");
            var url = $non_active_label.data("target");

            // Toggle classes
            $Labels.removeClass("mobile_search_type_active");
            $non_active_label.addClass("mobile_search_type_active");

            // Set new form URL
            $Form.attr("action", url);
        });
    };

    return {
        init: init
    };
})();

// Site Ready
$(document).ready(function () {
    Site._init();
});

var Lib = {
    WindowHeight: function () {
        if (window.innerHeight) {
            windowHeight = window.innerHeight;
        } else if (document.documentElement && document.documentElement.clientHeight) {
            windowHeight = document.documentElement.clientHeight;
        } else if (document.body) {
            windowHeight = document.body.clientHeight;
        }
        return windowHeight;
    }
};

/* Simple JavaScript Inheritance
 * By John Resig http://ejohn.org/
 * MIT Licensed.
 */
// Inspired by base2 and Prototype
(function () {
    var a = false,
        b = /xyz/.test(function () {
            xyz
        }) ? /\b_super\b/ : /.*/;
    this.Class = function () { };
    Class.extend = function (g) {
        var f = this.prototype;
        a = true;
        var e = new this();
        a = false;
        for (var d in g) {
            e[d] = typeof g[d] == "function" && typeof f[d] == "function" && b.test(g[d]) ? (function (h, i) {
                return function () {
                    var k = this._super;
                    this._super = f[h];
                    var j = i.apply(this, arguments);
                    this._super = k;
                    return j
                }
            })(d, g[d]) : g[d]
        }

        function c() {
            if (!a && this.init) {
                this.init.apply(this, arguments)
            }
        }
        c.prototype = e;
        c.prototype.constructor = c;
        c.extend = arguments.callee;
        return c
    }
})();

// !BigTreeCheckbox Class
var BigTreeCheckbox = Class.extend({

    Element: false,
    Link: false,

    init: function (element, text) {
        this.Element = $(element);

        div = $("<div>").addClass("checkbox");
        a = $("<a>").attr("href", "#checkbox");
        a.click($.proxy(this.click, this));
        a.focus($.proxy(this.focus, this));
        a.blur($.proxy(this.blur, this));
        a.keydown($.proxy(this.keydown, this));
        this.Element.next("label").click($.proxy(this.click, this));

        if (element.checked) {
            a.addClass("checked");
        }

        if (element.disabled) {
            a.addClass("disabled");
        }

        if (element.tabIndex) {
            a.attr("tabindex", element.tabIndex);
        }

        this.Link = a;

        div.append(a);
        $(element).hide().after(div);
    },

    focus: function () {
        this.Link.addClass("focused");
    },

    blur: function () {
        this.Link.removeClass("focused");
    },

    keydown: function (event) {
        if (event.keyCode == 32) {
            $.proxy(this.click, this)();
            return false;
        }
    },

    click: function () {
        if (!this.Element.attr("disabled")) {
            if (this.Link.hasClass("checked")) {
                this.Link.removeClass("checked");
            } else {
                this.Link.addClass("checked");
            }
            this.Element.trigger("click");
        }
        return false;
    }
});

// !BigTreeSelect Class
var BigTreeSelect = Class.extend({

    Element: false,
    Container: false,
    Open: false,
    Options: [],
    BoundWindowClick: false,
    BoundOverflowScroll: false,
    WasRelative: false,
    KeyDownBind: false,

    init: function (element) {
        this.Element = $(element);

        $(element).css({
            position: "absolute",
            left: "-1000000px"
        });
        div = $("<div>").addClass("select");
        tester = $("<div>").css({
            position: "absolute",
            top: "-1000px",
            left: "-1000px",
            "font-size": "13px",
            "font-family": "ff-meta-web",
            "white-space": "nowrap"
        });
        $("body").append(tester);
        maxwidth = 0;

        html = "";
        selected = "";
        selected_option = "";

        // Need to find all children since we have to account for options in and out of optgroups
        first_level = $(element).children();
        y = 0;
        for (i = 0; i < first_level.length; i++) {
            el = first_level.get(i);
            if (el.nodeName.toLowerCase() == "optgroup") {
                l = $(el).attr("label");
                html += '<div class="group">' + l + '</div>';
                // Get the size of this text.
                tester.html(l);
                width = tester.width();
                if (width > maxwidth) {
                    maxwidth = width;
                }

                options = $(el).find("option");
                for (x = 0; x < options.length; x++) {
                    y++;
                    option = options.eq(x);
                    text = option.html();
                    val = option.attr("value");
                    if (!val) {
                        val = text;
                    }

                    // Get the size of this text.
                    tester.html(text);
                    width = tester.width();
                    if (width + 20 > maxwidth) {
                        maxwidth = width + 20;
                    }

                    if (y == 1) {
                        selected_option = text;
                    }

                    if (option.attr("selected")) {
                        html += '<a class="optgroup active" href="#" data-value="' + val + '">' + text + '</a>';
                        selected_option = text;
                    } else {
                        html += '<a class="optgroup" href="#" data-value="' + val + '">' + text + '</a>';
                    }
                }
            } else {
                y++;
                option = $(el);
                text = option.html();
                val = option.attr("value");
                if (!val) {
                    val = text;
                }

                // Get the size of this text.
                tester.html(text);
                width = tester.width();
                if (width > maxwidth) {
                    maxwidth = width;
                }

                if (y == 1) {
                    selected_option = text;
                }


                if (option.attr("selected")) {
                    html += '<a class="active" href="#" data-value="' + val + '">' + text + '</a>';
                    selected_option = text;
                } else {
                    html += '<a href="#" data-value="' + val + '">' + text + '</a>';
                }
            }
        }

        div.html('<span><figure class="handle"></figure>' + selected_option + '</span><div class="select_options" style="display: none;">' + html + '</div>');

        spanwidth = maxwidth;
        // If we're in a section cell we may need to be smaller.
        if ($(element).parent().get(0).tagName.toLowerCase() == "section") {
            sectionwidth = $(element).parent().width();
            if (sectionwidth < (maxwidth + 56)) {
                spanwidth = sectionwidth - 80;
                div.find("span").css({
                    overflow: "hidden",
                    padding: "0 0 0 10px"
                });
            }
        }

        div.find("span").css({
            width: spanwidth + "px",
            height: "30px"
        }).html('<figure class="handle"></figure>' + selected_option).click($.proxy(this.click, this));
        div.find(".select_options").css({
            width: (maxwidth + 54) + "px"
        });
        div.on("click", "a", $.proxy(this.select, this));
        div.find(".handle").click($.proxy(this.click, this));

        $(element).after(div);

        this.Container = div;

        // See if this select is disabled
        if (this.Element.attr("disabled")) {
            this.Container.addClass("disabled");
        }

        // Observe focus on the select that's been hidden.
        this.Element.focus($.proxy(this.focus, this));
        this.Element.blur($.proxy(this.blur, this));
        // Custom event to force open lists closed when another select opens.
        this.Element.on("closeNow", $.proxy(this.close, this));
    },

    add: function (value, text) {
        // Add to the actual select.
        op = new Option(text, value);
        this.Element[0].options[this.Element[0].options.length] = op;
        // Add to the styled select.
        a = $('<a href="#">' + text + '</a>');
        a.attr("data-value", value);
        this.Container.find(".select_options").append(a);
    },

    blur: function () {
        this.Container.removeClass("focused");
        this.Element.unbind("keydown");
    },

    click: function () {
        if (!this.Open) {
            $("select").not(this.Element).trigger("closeNow");
            this.Element.focus();

            // Check if we're in a sortable row and disable it's relative position if so.
            li = this.Element.parent("li");
            if (li.length) {
                if (li.css("position") == "relative") {
                    li.css("position", "");
                    this.WasRelative = true;
                }
            }

            dList = this.Container.find(".select_options");
            this.Open = true;
            dList.show();
            this.Container.addClass("open");
            this.BoundWindowClick = $.proxy(this.close, this);
            $("body").click(this.BoundWindowClick);

            // Find out if we're in a dialog and have an overflow
            overflow = this.Container.parents(".overflow");
            if (overflow.length) {
                // WebKit needs fixin.
                if ($.browser.webkit) {
                    dList.css("marginTop", -1 * overflow.scrollTop() + "px");
                }

                // When someone scrolls the overflow, close the select or the dropdown will detach.
                this.BoundOverflowScroll = $.proxy(this.close, this);
                setTimeout($.proxy(function () {
                    overflow.scroll(this.BoundOverflowScroll);
                }, this), 500);
            } else {
                // If the select drops below the visible area, scroll down a bit.
                dOffset = dList.offset().top + dList.height();
                toScroll = dOffset - window.scrollY - $(window).height();
                if (toScroll > 0) {
                    $('html, body').animate({
                        scrollTop: window.scrollY + toScroll + 5
                    }, 200);
                }
            }
        } else {
            this.close();
        }

        return false;
    },

    close: function () {
        this.Open = false;
        this.Container.removeClass("open");
        this.Container.find(".select_options").hide();
        $("body").unbind("click", this.BoundWindowClick);

        if (this.BoundOverflowScroll) {
            this.Container.parents(".overflow").unbind("scroll", this.BoundOverflowScroll);
            this.BoundOverflowScroll = false;
        }

        // Reset relative position if applicable
        if (this.WasRelative) {
            this.Element.parent("li").css("position", "relative");
            this.WasRelative = false;
        }

        return false;
    },

    disable: function () {
        this.Element.attr("disabled", "disabled");
        this.Container.addClass("disabled");
    },

    enable: function () {
        this.Element.attr("disabled", "");
        this.Container.removeClass("disabled");
    },

    focus: function () {
        this.Container.addClass("focused");
        this.KeyBindDown = $.proxy(this.keydown, this);
        this.Element.keydown(this.KeyBindDown);
    },

    keydown: function (ev) {
        // The original select element that's hidden off screen.
        el = this.Element.get(0);

        // If a modifier has been pressed, ignore this.
        if (ev.ctrlKey || ev.altKey || ev.metaKey) {
            return true;
        }

        // Get the original index and save it so we know when it changes.
        index = el.selectedIndex;
        oindex = index;

        // Up arrow pressed
        if (ev.keyCode == 38) {
            index--;
            if (index < 0) {
                index = 0;
            }
            // Down arrow pressed
        } else if (ev.keyCode == 40) {
            index++;
            if (index == el.options.length) {
                index--;
            }
            // A letter key was pressed
        } else if (ev.keyCode > 64 && ev.keyCode < 91) {
            spot = ev.keyCode - 65;
            letters = "abcdefghijklmnopqrstuvwxyz";
            letter = letters[spot];

            // Go through all the options in the select to see if any of them start with the letter that was pressed.
            for (i = index + 1; i < el.options.length; i++) {
                text = el.options[i].text;
                first_letter = text[0].toLowerCase();
                if (first_letter == letter) {
                    index = i;
                    break;
                }
            }

            // If we were already on that letter, find the next one with that same letter.
            if (index == oindex) {
                for (i = 0; i < oindex; i++) {
                    text = el.options[i].text;
                    first_letter = text[0].toLowerCase();
                    if (first_letter == letter) {
                        index = i;
                        break;
                    }
                }
            }
        }

        // We found a new element, fire an event saying the select changed and update the description in the styled dropdown.
        if (index != oindex) {
            // For some reason Firefox doesn't care that we stop the event and still changes the index of the hidden select area, so we're not going to update it if we're in Firefox.
            if (navigator.userAgent.indexOf("Firefox") == -1) {
                el.selectedIndex = index;
            }
            this.Container.find("span").html('<figure class="handle"></figure>' + el.options[index].text);
            this.Element.trigger("change", {
                value: el.options[index].value,
                text: el.options[index].text
            });
            return false;
        }

        // Stop the event if it's not a tab.
        if (ev.keyCode != 9) {
            return false;
        }
    },

    remove: function (value) {
        // Remove it from the actual select.
        ops = this.Element.find("option");
        for (i = 0; i < ops.length; i++) {
            if (ops.eq(i).val() == value) {
                ops.eq(i).remove();
            }
        }
        // Remove it from the styled one.
        as = this.Container.find(".select_options a");
        for (i = 0; i < as.length; i++) {
            if (as.eq(i).attr("data-value") == value) {
                text_was = as.eq(i).html();
                as.eq(i).remove();
            }
        }
        // If the current selected state is the value we're removing, switch to the first available.
        sel = this.Container.find("span").eq(0);
        if (sel.html() == text_was) {
            sel.html('<figure class="handle"></figure>' + this.Container.find(".select_options a").eq(0).html());
        }
    },

    select: function (event) {
        el = $(event.target);
        this.Element.val(el.attr("data-value"));
        this.Container.find("span").html('<figure class="handle"></figure>' + el.html());
        this.Container.find("a").removeClass("active");
        el.addClass("active");

        this.close();

        this.Element.trigger("change", {
            value: el.attr("data-value"),
            text: el.innerHTML
        });
        return false;
    }
});

// !BigTreeFileInput Class
var BigTreeFileInput = Class.extend({

    Container: false,
    Element: false,
    Timer: false,
    Top: 0,
    Left: 0,

    init: function (element) {
        this.Element = $(element);

        div = $("<div>").addClass("file_wrapper").html('<span class="handle">Upload</span><span class="data"></span>');
        this.Element.before(div);
        div.append(this.Element);
        div.mousemove($.proxy(this.watchMouse, this));

        this.Timer = setInterval($.proxy(this.checkInput, this), 250);

        this.Container = div;
    },

    // Special thanks to http://www.shauninman.com/archive/2007/09/10/styling_file_inputs_with_css_and_the_dom
    watchMouse: function (e) {
        if (typeof e.pageY == 'undefined' && typeof e.clientX == 'number' && document.documentElement) {
            e.pageX = e.clientX + document.documentElement.scrollLeft;
            e.pageY = e.clientY + document.documentElement.scrollTop;
        };

        offset = this.Container.offset();
        this.Left = offset.left;
        this.Top = offset.top;

        if (e.pageX < this.Left || e.pageY < this.Top || e.pageX > (this.Left + 300) || e.pageY > (this.Top + 30)) {
            this.Element.hide();
            return;
        } else {
            this.Element.show();
        }

        var ox = oy = 0;
        var elem = this;
        if (elem.offsetParent) {
            ox = elem.offsetLeft;
            oy = elem.offsetTop;
            while (elem = elem.offsetParent) {
                ox += elem.offsetLeft;
                oy += elem.offsetTop;
            };
        };

        var x = e.pageX - ox;
        var y = e.pageY - oy;

        if (this.Element.parents(".bigtree_dialog_window").length) {
            x -= this.Element.parents(".bigtree_dialog_form").offset().left;
            y -= this.Element.parents(".bigtree_dialog_form").offset().top - 30;
        }

        var w = this.Element.get(0).offsetWidth;
        var h = this.Element.get(0).offsetHeight;

        this.Element.css({
            top: (y - (h / 2) + 'px'),
            left: (x - (w - 30) + 'px')
        });
    },

    showInput: function () {
        this.Element.show();
    },

    hideInput: function () {
        this.Element.hide();
    },

    checkInput: function () {
        pinfo = basename(this.Element.val());
        this.Container.find(".data").html(pinfo);
    },

    destroy: function () {
        clearInterval(this.Timer);
    },

    connect: function (el) {
        this.Element = $(el);
        this.Timer = setInterval($.proxy(this.checkInput, this), 250);
        return this;
    }
});

// !BigTreeRadioButton Class
var BigTreeRadioButton = Class.extend({

    Element: false,
    Link: false,

    init: function (element, text) {
        this.Element = $(element);

        div = $("<div>").addClass("radio_button");
        a = $("<a>").attr("href", "#radio");
        a.click($.proxy(this.click, this));
        a.focus($.proxy(this.focus, this));
        a.blur($.proxy(this.blur, this));
        a.keydown($.proxy(this.keydown, this));
        this.Element.next("label").click($.proxy(this.click, this));

        if (element.checked) {
            a.addClass("checked");
        }

        if (element.tabIndex) {
            a.attr("tabIndex", element.tabIndex);
        }

        this.Link = a;

        div.append(a);
        this.Element.hide();
        this.Element.after(div);
    },

    focus: function (ev) {
        this.Link.addClass("focused");
    },

    blur: function (ev) {
        this.Link.removeClass("focused");
    },

    keydown: function (ev) {
        if (ev.keyCode == 32) {
            this.click(ev);
            return false;
        }
        if (ev.keyCode == 39 || ev.keyCode == 40) {
            this.next(ev);
            return false;
        }
        if (ev.keyCode == 37 || ev.keyCode == 38) {
            this.previous(ev);
            return false;
        }
    },

    click: function (ev) {
        if (this.Link.hasClass("checked")) {
            // If it's already clicked, nothing happens for radio buttons.
        } else {
            this.Link.addClass("checked");
            this.Element.attr("checked", true);
            $('input[name="' + this.Element.attr("name") + '"]').not(this.Element).each(function () {
                this.customControl.Link.removeClass("checked");
            });
        }
        this.Element.trigger("click");
        return false;
    },

    next: function (ev) {
        all = $('input[name="' + this.Element.attr("name") + '"]');
        index = all.index(this.Element);
        if (index != all.length - 1) {
            all[index + 1].customControl.Link.focus();
            all[index + 1].customControl.click(ev);
        }
    },

    previous: function (ev) {
        all = $('input[name="' + this.Element.attr("name") + '"]');
        index = all.index(this.Element);
        if (index != 0) {
            all[index - 1].customControl.Link.focus();
            all[index - 1].customControl.click(ev);
        }
    }
});

function basename(path, suffix) {
    var b = path.replace(/^.*[\/\\]/g, "");
    if (typeof (suffix) == "string" && b.substr(b.length - suffix.length) == suffix) {
        b = b.substr(0, b.length - suffix.length);
    }
    return b;
}
/*
 * Copyright 2013 Small Batch, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
;
(function (window, document, undefined) {
    var j = void 0,
        k = !0,
        l = null,
        m = !1;

    function n(a) {
        return function () {
            return this[a]
        }
    }
    var o;

    function t(a, b, c) {
        var d = 2 < arguments.length ? Array.prototype.slice.call(arguments, 2) : [];
        return function () {
            d.push.apply(d, arguments);
            return b.apply(a, d)
        }
    };

    function aa(a, b) {
        this.P = a;
        this.K = b || a;
        this.R = this.K.document;
        this.ba = j
    }
    aa.prototype.createElement = function (a, b, c) {
        a = this.R.createElement(a);
        if (b)
            for (var d in b)
                if (b.hasOwnProperty(d))
                    if ("style" == d) {
                        var e = a,
                            f = b[d];
                        ba(this) ? e.setAttribute("style", f) : e.style.cssText = f
                    } else a.setAttribute(d, b[d]);
        c && a.appendChild(this.R.createTextNode(c));
        return a
    };

    function u(a, b, c) {
        a = a.R.getElementsByTagName(b)[0];
        a || (a = document.documentElement);
        a && a.lastChild && a.insertBefore(c, a.lastChild)
    }

    function ca(a) {
        function b() {
            document.body ? a() : setTimeout(b, 0)
        }
        b()
    }

    function v(a, b) {
        return a.createElement("link", {
            rel: "stylesheet",
            href: b
        })
    }

    function da(a, b) {
        return a.createElement("script", {
            src: b
        })
    }

    function w(a, b) {
        for (var c = a.className.split(/\s+/), d = 0, e = c.length; d < e; d++)
            if (c[d] == b) return;
        c.push(b);
        a.className = c.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "")
    }

    function x(a, b) {
        for (var c = a.className.split(/\s+/), d = [], e = 0, f = c.length; e < f; e++) c[e] != b && d.push(c[e]);
        a.className = d.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "")
    }

    function ea(a, b) {
        for (var c = a.className.split(/\s+/), d = 0, e = c.length; d < e; d++)
            if (c[d] == b) return k;
        return m
    }

    function ba(a) {
        if (a.ba === j) {
            var b = a.R.createElement("p");
            b.innerHTML = '<a style="top:1px;">w</a>';
            a.ba = /top/.test(b.getElementsByTagName("a")[0].getAttribute("style"))
        }
        return a.ba
    }

    function y(a) {
        var b = a.K.location.protocol;
        "about:" == b && (b = a.P.location.protocol);
        return "https:" == b ? "https:" : "http:"
    };

    function z(a, b, c) {
        this.Ta = a;
        this.Ra = b;
        this.Sa = c
    }
    z.prototype.J = n("Ta");
    z.prototype.Y = n("Ra");

    function A(a, b, c, d, e, f, g, i) {
        this.Ja = a;
        this.Qa = b;
        this.wa = c;
        this.va = d;
        this.Na = e;
        this.Ma = f;
        this.ua = g;
        this.v = i
    }
    o = A.prototype;
    o.getName = n("Ja");
    o.Da = n("Qa");
    o.fa = n("wa");
    o.Aa = n("va");
    o.Ba = n("Na");
    o.Ca = n("Ma");
    o.za = n("ua");
    o.z = n("v");

    function B(a, b) {
        this.a = a;
        this.q = b
    }
    var fa = new A("Unknown", "Unknown", "Unknown", "Unknown", "Unknown", "Unknown", j, new z(m, m, m));
    B.prototype.parse = function () {
        var a;
        if (-1 != this.a.indexOf("MSIE")) {
            a = C(this);
            var b = D(this),
                c = E(this.a, /(MSIE [\d\w\.]+)/, 1);
            if ("" != c) {
                var d = c.split(" "),
                    c = d[0],
                    d = d[1],
                    e = F(d),
                    f = F(b);
                a = new A(c, d, c, d, a, b, G(this.q), new z("Windows" == a && 6 <= e.e || "Windows Phone" == a && 8 <= f.e, m, m))
            } else a = new A("MSIE", "Unknown", "MSIE", "Unknown", a, b, G(this.q), new z(m, m, m))
        } else if (-1 != this.a.indexOf("Opera")) a = ga(this);
        else if (/AppleWeb(K|k)it/.test(this.a)) {
            a = C(this);
            var b = D(this),
                c = E(this.a, /AppleWeb(?:K|k)it\/([\d\.\+]+)/,
                    1),
                g = m;
            "" == c && (c = "Unknown");
            d = F(c);
            g = F(b);
            e = "Unknown"; - 1 != this.a.indexOf("Chrome") || -1 != this.a.indexOf("CrMo") || -1 != this.a.indexOf("CriOS") ? e = "Chrome" : "BlackBerry" == a || "Android" == a ? e = "BuiltinBrowser" : -1 != this.a.indexOf("Safari") ? e = "Safari" : -1 != this.a.indexOf("AdobeAIR") && (e = "AdobeAIR");
            f = "Unknown";
            "BuiltinBrowser" == e ? f = "Unknown" : -1 != this.a.indexOf("Version/") ? f = E(this.a, /Version\/([\d\.\w]+)/, 1) : "Chrome" == e ? f = E(this.a, /(Chrome|CrMo|CriOS)\/([\d\.]+)/, 2) : "AdobeAIR" == e && (f = E(this.a, /AdobeAIR\/([\d\.]+)/,
                1));
            "AdobeAIR" == e ? (g = F(f), g = 2 < g.e || 2 == g.e && 5 <= g.A) : g = "BlackBerry" == a ? 10 <= g.e : "Android" == a ? 2 < g.e || 2 == g.e && 1 < g.A : 526 <= d.e || 525 <= d.e && 13 <= d.A;
            a = new A(e, f, "AppleWebKit", c, a, b, G(this.q), new z(g, 536 > d.e || 536 == d.e && 11 > d.A, "iPhone" == a || "iPad" == a || "iPod" == a || "Macintosh" == a))
        } else -1 != this.a.indexOf("Gecko") ? (b = a = "Unknown", c = m, -1 != this.a.indexOf("Firefox") ? (a = "Firefox", d = E(this.a, /Firefox\/([\d\w\.]+)/, 1), "" != d && (c = F(d), b = d, c = 3 <= c.e && 5 <= c.A)) : -1 != this.a.indexOf("Mozilla") && (a = "Mozilla"), d = E(this.a, /rv:([^\)]+)/,
            1), "" == d ? d = "Unknown" : c || (c = F(d), c = 1 < c.e || 1 == c.e && 9 < c.A || 1 == c.e && 9 == c.A && 2 <= c.La || d.match(/1\.9\.1b[123]/) != l || d.match(/1\.9\.1\.[\d\.]+/) != l), a = new A(a, b, "Gecko", d, C(this), D(this), G(this.q), new z(c, m, m))) : a = fa;
        return a
    };

    function C(a) {
        var b = E(a.a, /(iPod|iPad|iPhone|Android|Windows Phone|BB\d{2}|BlackBerry)/, 1);
        if ("" != b) return /BB\d{2}/.test(b) && (b = "BlackBerry"), b;
        a = E(a.a, /(Linux|Mac_PowerPC|Macintosh|Windows|CrOS)/, 1);
        return "" != a ? ("Mac_PowerPC" == a && (a = "Macintosh"), a) : "Unknown"
    }

    function D(a) {
        var b = E(a.a, /(OS X|Windows NT|Android|CrOS) ([^;)]+)/, 2);
        if (b || (b = E(a.a, /Windows Phone( OS)? ([^;)]+)/, 2))) return b;
        if (b = E(a.a, /(iPhone )?OS ([\d_]+)/, 2)) return b;
        if (b = E(a.a, /Linux ([i\d]+)/, 1)) return b;
        return (a = E(a.a, /(BB\d{2}|BlackBerry).*?Version\/([^\s]*)/, 2)) ? a : "Unknown"
    }

    function ga(a) {
        var b = "Unknown",
            c = "Unknown",
            d = E(a.a, /(Presto\/[\d\w\.]+)/, 1);
        "" != d ? (c = d.split("/"), b = c[0], c = c[1]) : (-1 != a.a.indexOf("Gecko") && (b = "Gecko"), d = E(a.a, /rv:([^\)]+)/, 1), "" != d && (c = d));
        if (-1 != a.a.indexOf("Opera Mini/")) return d = E(a.a, /Opera Mini\/([\d\.]+)/, 1), "" == d && (d = "Unknown"), new A("OperaMini", d, b, c, C(a), D(a), G(a.q), new z(m, m, m));
        if (-1 != a.a.indexOf("Version/")) {
            var e = E(a.a, /Version\/([\d\.]+)/, 1);
            if ("" != e) return d = F(e), new A("Opera", e, b, c, C(a), D(a), G(a.q), new z(10 <= d.e, m, m))
        }
        e = E(a.a, /Opera[\/ ]([\d\.]+)/,
            1);
        return "" != e ? (d = F(e), new A("Opera", e, b, c, C(a), D(a), G(a.q), new z(10 <= d.e, m, m))) : new A("Opera", "Unknown", b, c, C(a), D(a), G(a.q), new z(m, m, m))
    }

    function F(a) {
        var a = /([0-9]+)(?:\.([0-9]+)(?:\.([0-9]+)?)?)?/.exec(a),
            b = {};
        a && (b.e = parseInt(a[1] || -1, 10), b.A = parseInt(a[2] || -1, 10), b.La = parseInt(a[3] || -1, 10));
        return b
    }

    function E(a, b, c) {
        return (a = a.match(b)) && a[c] ? a[c] : ""
    }

    function G(a) {
        if (a.documentMode) return a.documentMode
    };

    function ha(a, b, c) {
        this.c = a;
        this.j = b;
        this.da = c;
        this.k = "wf";
        this.h = new ja("-")
    }

    function ka(a) {
        w(a.j, a.h.f(a.k, "loading"));
        H(a, "loading")
    }

    function I(a) {
        x(a.j, a.h.f(a.k, "loading"));
        ea(a.j, a.h.f(a.k, "active")) || w(a.j, a.h.f(a.k, "inactive"));
        H(a, "inactive")
    }

    function H(a, b, c, d) {
        if (a.da[b]) a.da[b](c, d)
    };

    function la() {
        this.ma = {}
    }

    function ma(a, b, c) {
        var d = [],
            e;
        for (e in b)
            if (b.hasOwnProperty(e)) {
                var f = a.ma[e];
                f && d.push(f(b[e], c))
            }
        return d
    };

    function na(a, b) {
        this.width = a;
        this.height = b
    };

    function J(a, b, c, d, e, f, g) {
        this.c = b;
        this.D = c;
        this.t = d;
        this.C = e;
        this.O = f;
        this.X = 0;
        this.qa = this.ka = m;
        this.ca = g;
        this.v = a.z()
    }
    J.prototype.watch = function (a, b, c, d, e) {
        var f = a.length;
        if (0 === f) I(this.D);
        else {
            for (var g = 0; g < f; g++) {
                var i = a[g];
                b[i] || (b[i] = ["n4"]);
                this.X += b[i].length
            }
            e && (this.ka = e);
            for (g = 0; g < f; g++)
                for (var i = a[g], e = b[i], p = c[i], h = 0, q = e.length; h < q; h++) {
                    var s = e[h],
                        r = this.D,
                        S = i,
                        ia = s;
                    w(r.j, r.h.f(r.k, S, ia, "loading"));
                    H(r, "fontloading", S, ia);
                    r = t(this, this.xa);
                    S = t(this, this.ya);
                    (new d(r, S, this.c, this.t, this.C, this.O, i, s, this.v, this.ca, l, p)).start()
                }
        }
    };
    J.prototype.xa = function (a, b) {
        var c = this.D;
        x(c.j, c.h.f(c.k, a, b, "loading"));
        x(c.j, c.h.f(c.k, a, b, "inactive"));
        w(c.j, c.h.f(c.k, a, b, "active"));
        H(c, "fontactive", a, b);
        this.qa = k;
        oa(this)
    };
    J.prototype.ya = function (a, b) {
        var c = this.D;
        x(c.j, c.h.f(c.k, a, b, "loading"));
        ea(c.j, c.h.f(c.k, a, b, "active")) || w(c.j, c.h.f(c.k, a, b, "inactive"));
        H(c, "fontinactive", a, b);
        oa(this)
    };

    function oa(a) {
        0 == --a.X && a.ka && (a.qa ? (a = a.D, x(a.j, a.h.f(a.k, "loading")), x(a.j, a.h.f(a.k, "inactive")), w(a.j, a.h.f(a.k, "active")), H(a, "active")) : I(a.D))
    };

    function K(a, b, c, d, e, f, g, i, p, h, q, s) {
        this.Q = a;
        this.ha = b;
        this.c = c;
        this.t = d;
        this.C = e;
        this.O = f;
        this.M = g;
        this.s = i;
        this.H = s || "BESbswy";
        this.v = p;
        this.o = {};
        this.ca = h || 5E3;
        this.la = q || l;
        this.G = this.F = l;
        a = new L(this.c, this.t, this.H);
        M(a);
        for (var r in N) N.hasOwnProperty(r) && (O(a, N[r], this.s), this.o[N[r]] = a.m());
        a.remove()
    }
    var N = {
        Xa: "serif",
        Wa: "sans-serif",
        Va: "monospace",
        Ua: "Apple Color Emoji"
    };
    K.prototype.start = function () {
        this.F = new L(this.c, this.t, this.H);
        M(this.F);
        this.G = new L(this.c, this.t, this.H);
        M(this.G);
        this.pa = this.O();
        O(this.F, this.M + ",serif", this.s);
        O(this.G, this.M + ",sans-serif", this.s);
        this.W()
    };

    function P(a, b, c) {
        return a.v.Sa ? !!a.o[c] && b.width == a.o[c].width : !!a.o[c] && b.width == a.o[c].width && !!a.o[c] && b.height == a.o[c].height
    }

    function pa(a, b, c) {
        for (var d in N)
            if (N.hasOwnProperty(d) && P(a, b, N[d]) && P(a, c, N[d])) return k;
        return m
    }
    K.prototype.W = function () {
        var a = this.F.m(),
            b = this.G.m();
        P(this, a, "serif") && P(this, b, "sans-serif") || this.v.Y() && pa(this, a, b) ? this.O() - this.pa >= this.ca ? this.v.Y() && pa(this, a, b) && (this.la === l || this.la.hasOwnProperty(this.M)) ? Q(this, this.Q) : Q(this, this.ha) : qa(this) : Q(this, this.Q)
    };

    function qa(a) {
        a.C(function (a, c) {
            return function () {
                c.call(a)
            }
        }(a, a.W), 25)
    }

    function Q(a, b) {
        a.F.remove();
        a.G.remove();
        b(a.M, a.s)
    };

    function L(a, b, c) {
        this.c = a;
        this.t = b;
        this.H = c;
        this.Ia = new ra;
        this.I = new R;
        this.S = this.c.createElement("span", {}, this.H)
    }

    function O(a, b, c) {
        var d = a.c,
            e = a.S,
            c = c ? a.I.expand(c) : "",
            a = "position:absolute;top:-999px;left:-999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + a.Ia.quote(b) + ";" + c;
        ba(d) ? e.setAttribute("style", a) : e.style.cssText = a
    }

    function M(a) {
        u(a.c, "body", a.S)
    }
    L.prototype.m = function () {
        return this.t.m(this.S)
    };
    L.prototype.remove = function () {
        var a = this.S;
        a.parentNode && a.parentNode.removeChild(a)
    };

    function T(a, b, c, d) {
        this.P = a;
        this.ea = b;
        this.C = c;
        this.a = d;
        this.Z = this.$ = 0
    }
    T.prototype.u = function (a, b) {
        this.ea.ma[a] = b
    };
    T.prototype.load = function (a) {
        var b = a.context || this.P;
        this.c = new aa(this.P, b);
        b = new ha(this.c, b.document.documentElement, a);
        this.a.z().J() ? sa(this, b, a) : I(b)
    };
    T.prototype.Ea = function (a, b, c, d) {
        var e = a.ga ? a.ga() : K;
        d ? a.load(t(this, this.Ka, b, c, e)) : (a = 0 == --this.$, this.Z-- , a && (0 == this.Z ? I(b) : ka(b)), c.watch([], {}, {}, e, a))
    };
    T.prototype.Ka = function (a, b, c, d, e, f) {
        var g = 0 == --this.$;
        g && ka(a);
        this.C(t(this, function (a, b, c, d, e, f) {
            a.watch(b, c || {}, d || {}, e, f)
        }, b, d, e, f, c, g))
    };

    function sa(a, b, c) {
        var d = ma(a.ea, c, a.c),
            c = c.timeout;
        a.Z = a.$ = d.length;
        for (var c = new J(a.a, a.c, b, {
            m: function (a) {
                return new na(a.offsetWidth, a.offsetHeight)
            }
        }, a.C, function () {
            return (new Date).getTime()
        }, c), e = 0, f = d.length; e < f; e++) {
            var g = d[e];
            g.L(a.a, t(a, a.Ea, g, b, c))
        }
    };

    function ja(a) {
        this.Fa = a || "-"
    }
    ja.prototype.f = function (a) {
        for (var b = [], c = 0; c < arguments.length; c++) b.push(arguments[c].replace(/[\W_]+/g, "").toLowerCase());
        return b.join(this.Fa)
    };

    function ra() {
        this.oa = "'"
    }
    ra.prototype.quote = function (a) {
        for (var b = [], a = a.split(/,\s*/), c = 0; c < a.length; c++) {
            var d = a[c].replace(/['"]/g, ""); - 1 == d.indexOf(" ") ? b.push(d) : b.push(this.oa + d + this.oa)
        }
        return b.join(",")
    };

    function R() {
        this.U = ta;
        this.p = ua
    }
    var ta = ["font-style", "font-weight"],
        ua = {
            "font-style": [
                ["n", "normal"],
                ["i", "italic"],
                ["o", "oblique"]
            ],
            "font-weight": [
                ["1", "100"],
                ["2", "200"],
                ["3", "300"],
                ["4", "400"],
                ["5", "500"],
                ["6", "600"],
                ["7", "700"],
                ["8", "800"],
                ["9", "900"],
                ["4", "normal"],
                ["7", "bold"]
            ]
        };

    function U(a, b, c) {
        this.ia = a;
        this.Oa = b;
        this.p = c
    }
    U.prototype.compact = function (a, b) {
        for (var c = 0; c < this.p.length; c++)
            if (b == this.p[c][1]) {
                a[this.ia] = this.p[c][0];
                break
            }
    };
    U.prototype.expand = function (a, b) {
        for (var c = 0; c < this.p.length; c++)
            if (b == this.p[c][0]) {
                a[this.ia] = this.Oa + ":" + this.p[c][1];
                break
            }
    };
    R.prototype.compact = function (a) {
        for (var b = ["n", "4"], a = a.split(";"), c = 0, d = a.length; c < d; c++) {
            var e = a[c].replace(/\s+/g, "").split(":");
            if (2 == e.length) {
                var f = e[1];
                a: {
                    for (var e = e[0], g = 0; g < this.U.length; g++)
                        if (e == this.U[g]) {
                            e = new U(g, e, this.p[e]);
                            break a
                        }
                    e = l
                }
                e && e.compact(b, f)
            }
        }
        return b.join("")
    };
    R.prototype.expand = function (a) {
        if (2 != a.length) return l;
        for (var b = [l, l], c = 0, d = this.U.length; c < d; c++) {
            var e = this.U[c];
            (new U(c, e, this.p[e])).expand(b, a.substr(c, 1))
        }
        return b[0] && b[1] ? b.join(";") + ";" : l
    };
    var V = window.WebFont = function () {
        var a = (new B(navigator.userAgent, document)).parse();
        return new T(window, new la, function (a, c) {
            setTimeout(a, c)
        }, a)
    }();
    V.load = V.load;
    V.addModule = V.u;
    A.prototype.getName = A.prototype.getName;
    A.prototype.getVersion = A.prototype.Da;
    A.prototype.getEngine = A.prototype.fa;
    A.prototype.getEngineVersion = A.prototype.Aa;
    A.prototype.getPlatform = A.prototype.Ba;
    A.prototype.getPlatformVersion = A.prototype.Ca;
    A.prototype.getDocumentMode = A.prototype.za;
    A.prototype.getBrowserInfo = A.prototype.z;
    z.prototype.hasWebFontSupport = z.prototype.J;
    z.prototype.hasWebKitFallbackBug = z.prototype.Y;

    function W(a, b, c) {
        this.a = a;
        this.c = b;
        this.d = c;
        this.g = [];
        this.w = {}
    }
    W.prototype.L = function (a, b) {
        var c = this,
            d = c.d.projectId,
            e = c.d.version;
        if (d) {
            var f = c.c.createElement("script");
            f.id = "__MonotypeAPIScript__" + d;
            var g = this.c.K,
                i = m;
            f.onload = f.onreadystatechange = function () {
                if (!i && (!this.readyState || "loaded" === this.readyState || "complete" === this.readyState)) {
                    i = k;
                    if (g["__mti_fntLst" + d]) {
                        var e = g["__mti_fntLst" + d]();
                        if (e && e.length) {
                            var h;
                            for (h = 0; h < e.length; h++) c.g.push(e[h].fontfamily)
                        }
                    }
                    b(a.z().J());
                    f.onload = f.onreadystatechange = l
                }
            };
            f.src = c.N(d, e);
            u(this.c, "head", f)
        } else b(k)
    };
    W.prototype.N = function (a, b) {
        var c = y(this.c),
            d = (this.d.api || "fast.fonts.com/jsapi").replace(/^.*http(s?):(\/\/)?/, "");
        return c + "//" + d + "/" + a + ".js" + (b ? "?v=" + b : "")
    };
    W.prototype.load = function (a) {
        a(this.g, this.w)
    };
    V.u("monotype", function (a, b) {
        var c = (new B(navigator.userAgent, document)).parse();
        return new W(c, b, a)
    });

    function X(a, b) {
        this.c = a;
        this.d = b;
        this.g = [];
        this.w = {}
    }
    X.prototype.N = function (a) {
        var b = y(this.c);
        return (this.d.api || b + "//use.typekit.net") + "/" + a + ".js"
    };
    X.prototype.L = function (a, b) {
        var c = this.d.id,
            d = this.d,
            e = this.c.K,
            f = this;
        c ? (e.__webfonttypekitmodule__ || (e.__webfonttypekitmodule__ = {}), e.__webfonttypekitmodule__[c] = function (c) {
            c(a, d, function (a, c, d) {
                f.g = c;
                f.w = d;
                b(a)
            })
        }, u(this.c, "head", da(this.c, this.N(c)))) : b(k)
    };
    X.prototype.load = function (a) {
        a(this.g, this.w)
    };
    V.u("typekit", function (a, b) {
        return new X(b, a)
    });

    function va(a, b) {
        this.c = a;
        this.d = b
    }
    va.prototype.load = function (a) {
        var b, c, d = this.d.urls || [],
            e = this.d.families || [];
        for (b = 0, c = d.length; b < c; b++) u(this.c, "head", v(this.c, d[b]));
        var d = [],
            f = {};
        for (b = 0, c = e.length; b < c; b++) {
            var g = e[b].split(":"),
                i = g[0],
                g = g[1];
            d.push(i);
            g && (f[i] = (f[i] || []).concat(g.split(",")))
        }
        a(d, f)
    };
    va.prototype.L = function (a, b) {
        return b(a.z().J())
    };
    V.u("custom", function (a, b) {
        return new va(b, a)
    });

    function Y(a, b, c, d, e, f, g, i, p, h) {
        Y.Pa.call(this, a, b, c, d, e, f, g, i, p, h);
        a = ["Times New Roman", "Arial", "Times", "Sans", "Serif"];
        b = a.length;
        c = {};
        d = new L(this.c, this.t, this.H);
        M(d);
        O(d, a[0], this.s);
        c[d.m().width] = k;
        for (e = 1; e < b; e++) f = a[e], O(d, f, this.s), c[d.m().width] = k, "4" != this.s[1] && (O(d, f, this.s[0] + "4"), c[d.m().width] = k);
        d.remove();
        this.B = c;
        this.ta = m;
        this.Ga = this.o.serif;
        this.Ha = this.o["sans-serif"]
    } (function (a, b) {
        function c() { }
        c.prototype = a.prototype;
        b.prototype = new c;
        b.Pa = a;
        b.Ya = a.prototype
    })(K, Y);
    var wa = {
        Arimo: k,
        Cousine: k,
        Tinos: k
    };
    Y.prototype.W = function () {
        var a = this.F.m(),
            b = this.G.m();
        !this.ta && a.width == b.width && this.B[a.width] && (this.B = {}, this.ta = this.B[a.width] = k);
        (this.Ga.width != a.width || this.Ha.width != b.width) && !this.B[a.width] && !this.B[b.width] ? Q(this, this.Q) : 5E3 <= this.O() - this.pa ? this.B[a.width] && this.B[b.width] && wa[this.M] ? Q(this, this.Q) : Q(this, this.ha) : qa(this)
    };

    function xa(a, b, c) {
        this.V = a ? a : b + ya;
        this.g = [];
        this.aa = [];
        this.ra = c || ""
    }
    var ya = "//fonts.googleapis.com/css";
    xa.prototype.f = function () {
        if (0 == this.g.length) throw Error("No fonts to load !");
        if (-1 != this.V.indexOf("kit=")) return this.V;
        for (var a = this.g.length, b = [], c = 0; c < a; c++) b.push(this.g[c].replace(/ /g, "+"));
        a = this.V + "?family=" + b.join("%7C");
        0 < this.aa.length && (a += "&subset=" + this.aa.join(","));
        0 < this.ra.length && (a += "&text=" + encodeURIComponent(this.ra));
        return a
    };

    function za(a) {
        this.g = a;
        this.na = [];
        this.sa = {};
        this.T = {};
        this.I = new R
    }
    var Aa = {
        latin: "BESbswy",
        cyrillic: "&#1081;&#1103;&#1046;",
        greek: "&#945;&#946;&#931;",
        khmer: "&#x1780;&#x1781;&#x1782;",
        Hanuman: "&#x1780;&#x1781;&#x1782;"
    },
        Ba = {
            thin: "1",
            extralight: "2",
            "extra-light": "2",
            ultralight: "2",
            "ultra-light": "2",
            light: "3",
            regular: "4",
            book: "4",
            medium: "5",
            "semi-bold": "6",
            semibold: "6",
            "demi-bold": "6",
            demibold: "6",
            bold: "7",
            "extra-bold": "8",
            extrabold: "8",
            "ultra-bold": "8",
            ultrabold: "8",
            black: "9",
            heavy: "9",
            l: "3",
            r: "4",
            b: "7"
        },
        Ca = {
            i: "i",
            italic: "i",
            n: "n",
            normal: "n"
        },
        Da = RegExp("^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$");
    za.prototype.parse = function () {
        for (var a = this.g.length, b = 0; b < a; b++) {
            var c = this.g[b].split(":"),
                d = c[0].replace(/\+/g, " "),
                e = ["n4"];
            if (2 <= c.length) {
                var f;
                var g = c[1];
                f = [];
                if (g)
                    for (var g = g.split(","), i = g.length, p = 0; p < i; p++) {
                        var h;
                        h = g[p];
                        if (h.match(/^[\w]+$/))
                            if (h = Da.exec(h.toLowerCase()), h == l) h = "";
                            else {
                                var q = j;
                                q = h[1];
                                if (q == l) q = "4";
                                else var s = Ba[q],
                                    q = s ? s : isNaN(q) ? "4" : q.substr(0, 1);
                                h = (h = this.I.expand([h[2] == l ? "n" : Ca[h[2]], q].join(""))) ? this.I.compact(h) : l
                            }
                        else h = "";
                        h && f.push(h)
                    }
                0 < f.length && (e = f);
                3 == c.length &&
                    (c = c[2], f = [], c = !c ? f : c.split(","), 0 < c.length && (c = Aa[c[0]]) && (this.T[d] = c))
            }
            this.T[d] || (c = Aa[d]) && (this.T[d] = c);
            this.na.push(d);
            this.sa[d] = e
        }
    };

    function Z(a, b, c) {
        this.a = a;
        this.c = b;
        this.d = c
    }
    Z.prototype.L = function (a, b) {
        b(a.z().J())
    };
    Z.prototype.ga = function () {
        return "AppleWebKit" == this.a.fa() ? Y : K
    };
    Z.prototype.load = function (a) {
        "MSIE" == this.a.getName() && this.d.blocking != k ? ca(t(this, this.ja, a)) : this.ja(a)
    };
    Z.prototype.ja = function (a) {
        for (var b = this.c, c = new xa(this.d.api, y(b), this.d.text), d = this.d.families, e = d.length, f = 0; f < e; f++) {
            var g = d[f].split(":");
            3 == g.length && c.aa.push(g.pop());
            var i = "";
            2 == g.length && "" != g[1] && (i = ":");
            c.g.push(g.join(i))
        }
        d = new za(d);
        d.parse();
        u(b, "head", v(b, c.f()));
        a(d.na, d.sa, d.T)
    };
    V.u("google", function (a, b) {
        var c = (new B(navigator.userAgent, document)).parse();
        return new Z(c, b, a)
    });

    function Ea(a, b) {
        this.c = a;
        this.d = b
    }
    var Fa = {
        regular: "n4",
        bold: "n7",
        italic: "i4",
        bolditalic: "i7",
        r: "n4",
        b: "n7",
        i: "i4",
        bi: "i7"
    };
    Ea.prototype.L = function (a, b) {
        return b(a.z().J())
    };
    Ea.prototype.load = function (a) {
        var b, c;
        u(this.c, "head", v(this.c, y(this.c) + "//webfonts.fontslive.com/css/" + this.d.key + ".css"));
        var d = this.d.families,
            e, f;
        e = [];
        f = {};
        for (var g = 0, i = d.length; g < i; g++) {
            c = c = b = j;
            c = d[g].split(":");
            b = c[0];
            if (c[1]) {
                c = c[1].split(",");
                for (var p = [], h = 0, q = c.length; h < q; h++) {
                    var s = c[h];
                    if (s) {
                        var r = Fa[s];
                        p.push(r ? r : s)
                    }
                }
                c = p
            } else c = ["n4"];
            e.push(b);
            f[b] = c
        }
        a(e, f)
    };
    V.u("ascender", function (a, b) {
        return new Ea(b, a)
    });

    function $(a, b) {
        this.c = a;
        this.d = b;
        this.g = [];
        this.w = {};
        this.I = new R
    }
    $.prototype.N = function (a) {
        return y(this.c) + (this.d.api || "//f.fontdeck.com/s/css/js/") + (this.c.K.location.hostname || this.c.P.location.hostname) + "/" + a + ".js"
    };
    $.prototype.L = function (a, b) {
        var c = this.d.id,
            d = this.c.K,
            e = this;
        c ? (d.__webfontfontdeckmodule__ || (d.__webfontfontdeckmodule__ = {}), d.__webfontfontdeckmodule__[c] = function (a, c) {
            for (var d = 0, p = c.fonts.length; d < p; ++d) {
                var h = c.fonts[d];
                e.g.push(h.name);
                e.w[h.name] = [e.I.compact("font-weight:" + h.weight + ";font-style:" + h.style)]
            }
            b(a)
        }, u(this.c, "head", da(this.c, this.N(c)))) : b(k)
    };
    $.prototype.load = function (a) {
        a(this.g, this.w)
    };
    V.u("fontdeck", function (a, b) {
        return new $(b, a)
    });
    window.WebFontConfig && V.load(window.WebFontConfig);
})(this, document);


var API_URL = 'http://localhost:3003';
var __CURRENT_URL = location.href;
var splitURL = __CURRENT_URL.split(MAIN_URL + '/');
var __url = splitURL[splitURL.length - 1];
var split__url = __url.split('/');
var __page = split__url[0];
var __menu = split__url[split__url.length-1];
var __modules = (localStorage.getItem('__modules') ? JSON.parse(localStorage.getItem('__modules')) : null);
//console.log(__modules);

function showNav(response) {
    if (!localStorage.getItem('__modules')) {
        __modules = {};
    }

    // get navs in this page
    for (var i in response) {
        if (response.hasOwnProperty(i)) {
            if (!localStorage.getItem('__modules')) {
                __modules[response[i].id] = response[i];
            }
            if (response[i].parent != null) {
                $('.navigation_desktop > nav.main > .header_nav_' + response[i].parent + ' > .more > ul').append('<li class="header_nav_' + response[i].link + '"><a href="' + MAIN_URL + '/' + response[i].parent + '/' + response[i].link + '">' + response[i].text + '</a></li>');
            } else {
                $('.navigation_desktop > nav.main').append('<div class="item handle header_nav_' + response[i].link + '"><div class="more dropdown"><h4><a href="' + MAIN_URL + '/' + response[i].link + '">' + response[i].text + '</a></h4><ul></ul></div><h4><a href="' + MAIN_URL + '/' + response[i].link + '">' + response[i].text + '</a></h4><span class="plus"></span></div>');
                $('.navigation_mobile_main > ul').append('<li><a href="' + MAIN_URL + '/' + response[i].link + '">' + response[i].text + '</a></li>')
            }
        }
    }
    if (!localStorage.getItem('__modules')) {
        localStorage.setItem('__modules', JSON.stringify(__modules));
    }
}

$(document).ready(function () {
    // get header nav
    if (!__modules) {
        $.getJSON(API_URL+'/modules', function (response) {
            showNav(response);
        });
    } else {
        showNav(__modules);
    }
})