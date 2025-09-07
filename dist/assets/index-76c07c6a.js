function e(e,t){for(var n=0;n<t.length;n++){const r=t[n];if("string"!=typeof r&&!Array.isArray(r))for(const t in r)if("default"!==t&&!(t in e)){const n=Object.getOwnPropertyDescriptor(r,t);n&&Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:()=>r[t]})}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)}).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function n(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var r={exports:{}},a={},i={exports:{}},o={},s=Symbol.for("react.element"),l=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),f=Symbol.for("react.provider"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),y=Symbol.iterator;var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,k={};function _(e,t,n){this.props=e,this.context=t,this.refs=k,this.updater=n||b}function S(){}function E(e,t,n){this.props=e,this.context=t,this.refs=k,this.updater=n||b}_.prototype.isReactComponent={},_.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},S.prototype=_.prototype;var I=E.prototype=new S;I.constructor=E,w(I,_.prototype),I.isPureReactComponent=!0;var C=Array.isArray,T=Object.prototype.hasOwnProperty,P={current:null},x={key:!0,ref:!0,__self:!0,__source:!0};function R(e,t,n){var r,a={},i=null,o=null;if(null!=t)for(r in void 0!==t.ref&&(o=t.ref),void 0!==t.key&&(i=""+t.key),t)T.call(t,r)&&!x.hasOwnProperty(r)&&(a[r]=t[r]);var l=arguments.length-2;if(1===l)a.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];a.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===a[r]&&(a[r]=l[r]);return{$$typeof:s,type:e,key:i,ref:o,props:a,_owner:P.current}}function N(e){return"object"==typeof e&&null!==e&&e.$$typeof===s}var O=/\/+/g;function L(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(e){return t[e]})}(""+e.key):t.toString(36)}function A(e,t,n,r,a){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var o=!1;if(null===e)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case s:case l:o=!0}}if(o)return a=a(o=e),e=""===r?"."+L(o,0):r,C(a)?(n="",null!=e&&(n=e.replace(O,"$&/")+"/"),A(a,t,n,"",function(e){return e})):null!=a&&(N(a)&&(a=function(e,t){return{$$typeof:s,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,n+(!a.key||o&&o.key===a.key?"":(""+a.key).replace(O,"$&/")+"/")+e)),t.push(a)),1;if(o=0,r=""===r?".":r+":",C(e))for(var u=0;u<e.length;u++){var c=r+L(i=e[u],u);o+=A(i,t,n,c,a)}else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=y&&e[y]||e["@@iterator"])?e:null}(e),"function"==typeof c)for(e=c.call(e),u=0;!(i=e.next()).done;)o+=A(i=i.value,t,n,c=r+L(i,u++),a);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function D(e,t,n){if(null==e)return e;var r=[],a=0;return A(e,r,"","",function(e){return t.call(n,e,a++)}),r}function M(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)},function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var U={current:null},z={transition:null},j={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:z,ReactCurrentOwner:P};function F(){throw Error("act(...) is not supported in production builds of React.")}o.Children={map:D,forEach:function(e,t,n){D(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return D(e,function(){t++}),t},toArray:function(e){return D(e,function(e){return e})||[]},only:function(e){if(!N(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},o.Component=_,o.Fragment=u,o.Profiler=d,o.PureComponent=E,o.StrictMode=c,o.Suspense=m,o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=j,o.act=F,o.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=w({},e.props),a=e.key,i=e.ref,o=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,o=P.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)T.call(t,u)&&!x.hasOwnProperty(u)&&(r[u]=void 0===t[u]&&void 0!==l?l[u]:t[u])}var u=arguments.length-2;if(1===u)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:s,type:e.type,key:a,ref:i,props:r,_owner:o}},o.createContext=function(e){return(e={$$typeof:h,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:f,_context:e},e.Consumer=e},o.createElement=R,o.createFactory=function(e){var t=R.bind(null,e);return t.type=e,t},o.createRef=function(){return{current:null}},o.forwardRef=function(e){return{$$typeof:p,render:e}},o.isValidElement=N,o.lazy=function(e){return{$$typeof:v,_payload:{_status:-1,_result:e},_init:M}},o.memo=function(e,t){return{$$typeof:g,type:e,compare:void 0===t?null:t}},o.startTransition=function(e){var t=z.transition;z.transition={};try{e()}finally{z.transition=t}},o.unstable_act=F,o.useCallback=function(e,t){return U.current.useCallback(e,t)},o.useContext=function(e){return U.current.useContext(e)},o.useDebugValue=function(){},o.useDeferredValue=function(e){return U.current.useDeferredValue(e)},o.useEffect=function(e,t){return U.current.useEffect(e,t)},o.useId=function(){return U.current.useId()},o.useImperativeHandle=function(e,t,n){return U.current.useImperativeHandle(e,t,n)},o.useInsertionEffect=function(e,t){return U.current.useInsertionEffect(e,t)},o.useLayoutEffect=function(e,t){return U.current.useLayoutEffect(e,t)},o.useMemo=function(e,t){return U.current.useMemo(e,t)},o.useReducer=function(e,t,n){return U.current.useReducer(e,t,n)},o.useRef=function(e){return U.current.useRef(e)},o.useState=function(e){return U.current.useState(e)},o.useSyncExternalStore=function(e,t,n){return U.current.useSyncExternalStore(e,t,n)},o.useTransition=function(){return U.current.useTransition()},o.version="18.3.1",i.exports=o;var V=i.exports;const H=n(V),$=e({__proto__:null,default:H},[V]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var B=V,W=Symbol.for("react.element"),K=Symbol.for("react.fragment"),q=Object.prototype.hasOwnProperty,G=B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Q={key:!0,ref:!0,__self:!0,__source:!0};function J(e,t,n){var r,a={},i=null,o=null;for(r in void 0!==n&&(i=""+n),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(o=t.ref),t)q.call(t,r)&&!Q.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:W,type:e,key:i,ref:o,props:a,_owner:G.current}}a.Fragment=K,a.jsx=J,a.jsxs=J,r.exports=a;var Y=r.exports,X={},Z={exports:{}},ee={},te={exports:{}},ne={};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
!function(e){function t(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,i=e[r];if(!(0<a(i,t)))break e;e[r]=t,e[n]=i,n=r}}function n(e){return 0===e.length?null:e[0]}function r(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,i=e.length,o=i>>>1;r<o;){var s=2*(r+1)-1,l=e[s],u=s+1,c=e[u];if(0>a(l,n))u<i&&0>a(c,l)?(e[r]=c,e[u]=n,r=u):(e[r]=l,e[s]=n,r=s);else{if(!(u<i&&0>a(c,n)))break e;e[r]=c,e[u]=n,r=u}}}return t}function a(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"==typeof performance&&"function"==typeof performance.now){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var l=[],u=[],c=1,d=null,f=3,h=!1,p=!1,m=!1,g="function"==typeof setTimeout?setTimeout:null,v="function"==typeof clearTimeout?clearTimeout:null,y="undefined"!=typeof setImmediate?setImmediate:null;function b(e){for(var a=n(u);null!==a;){if(null===a.callback)r(u);else{if(!(a.startTime<=e))break;r(u),a.sortIndex=a.expirationTime,t(l,a)}a=n(u)}}function w(e){if(m=!1,b(e),!p)if(null!==n(l))p=!0,O(k);else{var t=n(u);null!==t&&L(w,t.startTime-e)}}function k(t,a){p=!1,m&&(m=!1,v(I),I=-1),h=!0;var i=f;try{for(b(a),d=n(l);null!==d&&(!(d.expirationTime>a)||t&&!P());){var o=d.callback;if("function"==typeof o){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=a);a=e.unstable_now(),"function"==typeof s?d.callback=s:d===n(l)&&r(l),b(a)}else r(l);d=n(l)}if(null!==d)var c=!0;else{var g=n(u);null!==g&&L(w,g.startTime-a),c=!1}return c}finally{d=null,f=i,h=!1}}"undefined"!=typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var _,S=!1,E=null,I=-1,C=5,T=-1;function P(){return!(e.unstable_now()-T<C)}function x(){if(null!==E){var t=e.unstable_now();T=t;var n=!0;try{n=E(!0,t)}finally{n?_():(S=!1,E=null)}}else S=!1}if("function"==typeof y)_=function(){y(x)};else if("undefined"!=typeof MessageChannel){var R=new MessageChannel,N=R.port2;R.port1.onmessage=x,_=function(){N.postMessage(null)}}else _=function(){g(x,0)};function O(e){E=e,S||(S=!0,_())}function L(t,n){I=g(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_continueExecution=function(){p||h||(p=!0,O(k))},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,a,i){var o=e.unstable_now();switch("object"==typeof i&&null!==i?i="number"==typeof(i=i.delay)&&0<i?o+i:o:i=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return r={id:c++,callback:a,priorityLevel:r,startTime:i,expirationTime:s=i+s,sortIndex:-1},i>o?(r.sortIndex=i,t(u,r),null===n(l)&&r===n(u)&&(m?(v(I),I=-1):m=!0,L(w,i-o))):(r.sortIndex=s,t(l,r),p||h||(p=!0,O(k))),r},e.unstable_shouldYield=P,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}}(ne),te.exports=ne;var re=te.exports,ae=V,ie=re;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function oe(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var se=new Set,le={};function ue(e,t){ce(e,t),ce(e+"Capture",t)}function ce(e,t){for(le[e]=t,e=0;e<t.length;e++)se.add(t[e])}var de=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement),fe=Object.prototype.hasOwnProperty,he=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,pe={},me={};function ge(e,t,n,r,a,i,o){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var ve={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ve[e]=new ge(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ve[t]=new ge(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){ve[e]=new ge(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ve[e]=new ge(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ve[e]=new ge(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){ve[e]=new ge(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){ve[e]=new ge(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){ve[e]=new ge(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){ve[e]=new ge(e,5,!1,e.toLowerCase(),null,!1,!1)});var ye=/[\-:]([a-z])/g;function be(e){return e[1].toUpperCase()}function we(e,t,n,r){var a=ve.hasOwnProperty(t)?ve[t]:null;(null!==a?0!==a.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null==t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,a,r)&&(n=null),r||null===a?function(e){return!!fe.call(me,e)||!fe.call(pe,e)&&(he.test(e)?me[e]=!0:(pe[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=null===n?3!==a.type&&"":n:(t=a.attributeName,r=a.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(a=a.type)||4===a&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ye,be);ve[t]=new ge(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ye,be);ve[t]=new ge(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ye,be);ve[t]=new ge(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){ve[e]=new ge(e,1,!1,e.toLowerCase(),null,!1,!1)}),ve.xlinkHref=new ge("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){ve[e]=new ge(e,1,!1,e.toLowerCase(),null,!0,!0)});var ke=ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,_e=Symbol.for("react.element"),Se=Symbol.for("react.portal"),Ee=Symbol.for("react.fragment"),Ie=Symbol.for("react.strict_mode"),Ce=Symbol.for("react.profiler"),Te=Symbol.for("react.provider"),Pe=Symbol.for("react.context"),xe=Symbol.for("react.forward_ref"),Re=Symbol.for("react.suspense"),Ne=Symbol.for("react.suspense_list"),Oe=Symbol.for("react.memo"),Le=Symbol.for("react.lazy"),Ae=Symbol.for("react.offscreen"),De=Symbol.iterator;function Me(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=De&&e[De]||e["@@iterator"])?e:null}var Ue,ze=Object.assign;function je(e){if(void 0===Ue)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ue=t&&t[1]||""}return"\n"+Ue+e}var Fe=!1;function Ve(e,t){if(!e||Fe)return"";Fe=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&"string"==typeof u.stack){for(var a=u.stack.split("\n"),i=r.stack.split("\n"),o=a.length-1,s=i.length-1;1<=o&&0<=s&&a[o]!==i[s];)s--;for(;1<=o&&0<=s;o--,s--)if(a[o]!==i[s]){if(1!==o||1!==s)do{if(o--,0>--s||a[o]!==i[s]){var l="\n"+a[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}}while(1<=o&&0<=s);break}}}finally{Fe=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?je(e):""}function He(e){switch(e.tag){case 5:return je(e.type);case 16:return je("Lazy");case 13:return je("Suspense");case 19:return je("SuspenseList");case 0:case 2:case 15:return e=Ve(e.type,!1);case 11:return e=Ve(e.type.render,!1);case 1:return e=Ve(e.type,!0);default:return""}}function $e(e){if(null==e)return null;if("function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case Ee:return"Fragment";case Se:return"Portal";case Ce:return"Profiler";case Ie:return"StrictMode";case Re:return"Suspense";case Ne:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case Pe:return(e.displayName||"Context")+".Consumer";case Te:return(e._context.displayName||"Context")+".Provider";case xe:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case Oe:return null!==(t=e.displayName||null)?t:$e(e.type)||"Memo";case Le:t=e._payload,e=e._init;try{return $e(e(t))}catch(n){}}return null}function Be(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $e(t);case 8:return t===Ie?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"==typeof t)return t.displayName||t.name||null;if("string"==typeof t)return t}return null}function We(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function Ke(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function qe(e){e._valueTracker||(e._valueTracker=function(e){var t=Ke(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&void 0!==n&&"function"==typeof n.get&&"function"==typeof n.set){var a=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(e){r=""+e,i.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function Ge(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ke(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function Qe(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function Je(e,t){var n=t.checked;return ze({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function Ye(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=We(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function Xe(e,t){null!=(t=t.checked)&&we(e,"checked",t,!1)}function Ze(e,t){Xe(e,t);var n=We(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?tt(e,t.type,n):t.hasOwnProperty("defaultValue")&&tt(e,t.type,We(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function et(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function tt(e,t,n){"number"===t&&Qe(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var nt=Array.isArray;function rt(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+We(n),t=null,a=0;a<e.length;a++){if(e[a].value===n)return e[a].selected=!0,void(r&&(e[a].defaultSelected=!0));null!==t||e[a].disabled||(t=e[a])}null!==t&&(t.selected=!0)}}function at(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(oe(91));return ze({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function it(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(oe(92));if(nt(n)){if(1<n.length)throw Error(oe(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:We(n)}}function ot(e,t){var n=We(t.value),r=We(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function st(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function lt(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ut(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?lt(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ct,dt,ft=(dt=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ct=ct||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ct.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction(function(){return dt(e,t)})}:dt);function ht(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var pt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},mt=["Webkit","ms","Moz","O"];function gt(e,t,n){return null==t||"boolean"==typeof t||""===t?"":n||"number"!=typeof t||0===t||pt.hasOwnProperty(e)&&pt[e]?(""+t).trim():t+"px"}function vt(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),a=gt(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}Object.keys(pt).forEach(function(e){mt.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),pt[t]=pt[e]})});var yt=ze({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function bt(e,t){if(t){if(yt[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(oe(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(oe(60));if("object"!=typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(oe(61))}if(null!=t.style&&"object"!=typeof t.style)throw Error(oe(62))}}function wt(e,t){if(-1===e.indexOf("-"))return"string"==typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var kt=null;function _t(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var St=null,Et=null,It=null;function Ct(e){if(e=wi(e)){if("function"!=typeof St)throw Error(oe(280));var t=e.stateNode;t&&(t=_i(t),St(e.stateNode,e.type,t))}}function Tt(e){Et?It?It.push(e):It=[e]:Et=e}function Pt(){if(Et){var e=Et,t=It;if(It=Et=null,Ct(e),t)for(e=0;e<t.length;e++)Ct(t[e])}}function xt(e,t){return e(t)}function Rt(){}var Nt=!1;function Ot(e,t,n){if(Nt)return e(t,n);Nt=!0;try{return xt(e,t,n)}finally{Nt=!1,(null!==Et||null!==It)&&(Rt(),Pt())}}function Lt(e,t){var n=e.stateNode;if(null===n)return null;var r=_i(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!=typeof n)throw Error(oe(231,t,typeof n));return n}var At=!1;if(de)try{var Dt={};Object.defineProperty(Dt,"passive",{get:function(){At=!0}}),window.addEventListener("test",Dt,Dt),window.removeEventListener("test",Dt,Dt)}catch(dt){At=!1}function Mt(e,t,n,r,a,i,o,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Ut=!1,zt=null,jt=!1,Ft=null,Vt={onError:function(e){Ut=!0,zt=e}};function Ht(e,t,n,r,a,i,o,s,l){Ut=!1,zt=null,Mt.apply(Vt,arguments)}function $t(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{!!(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function Bt(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function Wt(e){if($t(e)!==e)throw Error(oe(188))}function Kt(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=$t(e)))throw Error(oe(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(null===a)break;var i=a.alternate;if(null===i){if(null!==(r=a.return)){n=r;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===n)return Wt(a),e;if(i===r)return Wt(a),t;i=i.sibling}throw Error(oe(188))}if(n.return!==r.return)n=a,r=i;else{for(var o=!1,s=a.child;s;){if(s===n){o=!0,n=a,r=i;break}if(s===r){o=!0,r=a,n=i;break}s=s.sibling}if(!o){for(s=i.child;s;){if(s===n){o=!0,n=i,r=a;break}if(s===r){o=!0,r=i,n=a;break}s=s.sibling}if(!o)throw Error(oe(189))}}if(n.alternate!==r)throw Error(oe(190))}if(3!==n.tag)throw Error(oe(188));return n.stateNode.current===n?e:t}(e))?qt(e):null}function qt(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=qt(e);if(null!==t)return t;e=e.sibling}return null}var Gt=ie.unstable_scheduleCallback,Qt=ie.unstable_cancelCallback,Jt=ie.unstable_shouldYield,Yt=ie.unstable_requestPaint,Xt=ie.unstable_now,Zt=ie.unstable_getCurrentPriorityLevel,en=ie.unstable_ImmediatePriority,tn=ie.unstable_UserBlockingPriority,nn=ie.unstable_NormalPriority,rn=ie.unstable_LowPriority,an=ie.unstable_IdlePriority,on=null,sn=null;var ln=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(un(e)/cn|0)|0},un=Math.log,cn=Math.LN2;var dn=64,fn=4194304;function hn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function pn(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,a=e.suspendedLanes,i=e.pingedLanes,o=268435455&n;if(0!==o){var s=o&~a;0!==s?r=hn(s):0!==(i&=o)&&(r=hn(i))}else 0!==(o=n&~a)?r=hn(o):0!==i&&(r=hn(i));if(0===r)return 0;if(0!==t&&t!==r&&0===(t&a)&&((a=r&-r)>=(i=t&-t)||16===a&&4194240&i))return t;if(4&r&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)a=1<<(n=31-ln(t)),r|=e[n],t&=~a;return r}function mn(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function gn(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function vn(){var e=dn;return!(4194240&(dn<<=1))&&(dn=64),e}function yn(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function bn(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-ln(t)]=n}function wn(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ln(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var kn=0;function _n(e){return 1<(e&=-e)?4<e?268435455&e?16:536870912:4:1}var Sn,En,In,Cn,Tn,Pn=!1,xn=[],Rn=null,Nn=null,On=null,Ln=new Map,An=new Map,Dn=[],Mn="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Un(e,t){switch(e){case"focusin":case"focusout":Rn=null;break;case"dragenter":case"dragleave":Nn=null;break;case"mouseover":case"mouseout":On=null;break;case"pointerover":case"pointerout":Ln.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":An.delete(t.pointerId)}}function zn(e,t,n,r,a,i){return null===e||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[a]},null!==t&&(null!==(t=wi(t))&&En(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==a&&-1===t.indexOf(a)&&t.push(a),e)}function jn(e){var t=bi(e.target);if(null!==t){var n=$t(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=Bt(n)))return e.blockedOn=t,void Tn(e.priority,function(){In(n)})}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Fn(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Yn(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=wi(n))&&En(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);kt=r,n.target.dispatchEvent(r),kt=null,t.shift()}return!0}function Vn(e,t,n){Fn(e)&&n.delete(t)}function Hn(){Pn=!1,null!==Rn&&Fn(Rn)&&(Rn=null),null!==Nn&&Fn(Nn)&&(Nn=null),null!==On&&Fn(On)&&(On=null),Ln.forEach(Vn),An.forEach(Vn)}function $n(e,t){e.blockedOn===t&&(e.blockedOn=null,Pn||(Pn=!0,ie.unstable_scheduleCallback(ie.unstable_NormalPriority,Hn)))}function Bn(e){function t(t){return $n(t,e)}if(0<xn.length){$n(xn[0],e);for(var n=1;n<xn.length;n++){var r=xn[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==Rn&&$n(Rn,e),null!==Nn&&$n(Nn,e),null!==On&&$n(On,e),Ln.forEach(t),An.forEach(t),n=0;n<Dn.length;n++)(r=Dn[n]).blockedOn===e&&(r.blockedOn=null);for(;0<Dn.length&&null===(n=Dn[0]).blockedOn;)jn(n),null===n.blockedOn&&Dn.shift()}var Wn=ke.ReactCurrentBatchConfig,Kn=!0;function qn(e,t,n,r){var a=kn,i=Wn.transition;Wn.transition=null;try{kn=1,Qn(e,t,n,r)}finally{kn=a,Wn.transition=i}}function Gn(e,t,n,r){var a=kn,i=Wn.transition;Wn.transition=null;try{kn=4,Qn(e,t,n,r)}finally{kn=a,Wn.transition=i}}function Qn(e,t,n,r){if(Kn){var a=Yn(e,t,n,r);if(null===a)Wa(e,t,r,Jn,n),Un(e,r);else if(function(e,t,n,r,a){switch(t){case"focusin":return Rn=zn(Rn,e,t,n,r,a),!0;case"dragenter":return Nn=zn(Nn,e,t,n,r,a),!0;case"mouseover":return On=zn(On,e,t,n,r,a),!0;case"pointerover":var i=a.pointerId;return Ln.set(i,zn(Ln.get(i)||null,e,t,n,r,a)),!0;case"gotpointercapture":return i=a.pointerId,An.set(i,zn(An.get(i)||null,e,t,n,r,a)),!0}return!1}(a,e,t,n,r))r.stopPropagation();else if(Un(e,r),4&t&&-1<Mn.indexOf(e)){for(;null!==a;){var i=wi(a);if(null!==i&&Sn(i),null===(i=Yn(e,t,n,r))&&Wa(e,t,r,Jn,n),i===a)break;a=i}null!==a&&r.stopPropagation()}else Wa(e,t,r,null,n)}}var Jn=null;function Yn(e,t,n,r){if(Jn=null,null!==(e=bi(e=_t(r))))if(null===(t=$t(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=Bt(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Jn=e,null}function Xn(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Zt()){case en:return 1;case tn:return 4;case nn:case rn:return 16;case an:return 536870912;default:return 16}default:return 16}}var Zn=null,er=null,tr=null;function nr(){if(tr)return tr;var e,t,n=er,r=n.length,a="value"in Zn?Zn.value:Zn.textContent,i=a.length;for(e=0;e<r&&n[e]===a[e];e++);var o=r-e;for(t=1;t<=o&&n[r-t]===a[i-t];t++);return tr=a.slice(e,1<t?1-t:void 0)}function rr(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function ar(){return!0}function ir(){return!1}function or(e){function t(t,n,r,a,i){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=a,this.target=i,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(a):a[o]);return this.isDefaultPrevented=(null!=a.defaultPrevented?a.defaultPrevented:!1===a.returnValue)?ar:ir,this.isPropagationStopped=ir,this}return ze(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=ar)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=ar)},persist:function(){},isPersistent:ar}),t}var sr,lr,ur,cr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},dr=or(cr),fr=ze({},cr,{view:0,detail:0}),hr=or(fr),pr=ze({},fr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cr,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ur&&(ur&&"mousemove"===e.type?(sr=e.screenX-ur.screenX,lr=e.screenY-ur.screenY):lr=sr=0,ur=e),sr)},movementY:function(e){return"movementY"in e?e.movementY:lr}}),mr=or(pr),gr=or(ze({},pr,{dataTransfer:0})),vr=or(ze({},fr,{relatedTarget:0})),yr=or(ze({},cr,{animationName:0,elapsedTime:0,pseudoElement:0})),br=ze({},cr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),wr=or(br),kr=or(ze({},cr,{data:0})),_r={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sr={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Er={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ir(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=Er[e])&&!!t[e]}function Cr(){return Ir}var Tr=ze({},fr,{key:function(e){if(e.key){var t=_r[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=rr(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?Sr[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cr,charCode:function(e){return"keypress"===e.type?rr(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?rr(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),Pr=or(Tr),xr=or(ze({},pr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Rr=or(ze({},fr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cr})),Nr=or(ze({},cr,{propertyName:0,elapsedTime:0,pseudoElement:0})),Or=ze({},pr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Lr=or(Or),Ar=[9,13,27,32],Dr=de&&"CompositionEvent"in window,Mr=null;de&&"documentMode"in document&&(Mr=document.documentMode);var Ur=de&&"TextEvent"in window&&!Mr,zr=de&&(!Dr||Mr&&8<Mr&&11>=Mr),jr=String.fromCharCode(32),Fr=!1;function Vr(e,t){switch(e){case"keyup":return-1!==Ar.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hr(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}var $r=!1;var Br={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Br[e.type]:"textarea"===t}function Kr(e,t,n,r){Tt(r),0<(t=qa(t,"onChange")).length&&(n=new dr("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var qr=null,Gr=null;function Qr(e){ja(e,0)}function Jr(e){if(Ge(ki(e)))return e}function Yr(e,t){if("change"===e)return t}var Xr=!1;if(de){var Zr;if(de){var ea="oninput"in document;if(!ea){var ta=document.createElement("div");ta.setAttribute("oninput","return;"),ea="function"==typeof ta.oninput}Zr=ea}else Zr=!1;Xr=Zr&&(!document.documentMode||9<document.documentMode)}function na(){qr&&(qr.detachEvent("onpropertychange",ra),Gr=qr=null)}function ra(e){if("value"===e.propertyName&&Jr(Gr)){var t=[];Kr(t,Gr,e,_t(e)),Ot(Qr,t)}}function aa(e,t,n){"focusin"===e?(na(),Gr=n,(qr=t).attachEvent("onpropertychange",ra)):"focusout"===e&&na()}function ia(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Jr(Gr)}function oa(e,t){if("click"===e)return Jr(t)}function sa(e,t){if("input"===e||"change"===e)return Jr(t)}var la="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t};function ua(e,t){if(la(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!fe.call(t,a)||!la(e[a],t[a]))return!1}return!0}function ca(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function da(e,t){var n,r=ca(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=ca(r)}}function fa(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?fa(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function ha(){for(var e=window,t=Qe();t instanceof e.HTMLIFrameElement;){try{var n="string"==typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=Qe((e=t.contentWindow).document)}return t}function pa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function ma(e){var t=ha(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&fa(n.ownerDocument.documentElement,n)){if(null!==r&&pa(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var a=n.textContent.length,i=Math.min(r.start,a);r=void 0===r.end?i:Math.min(r.end,a),!e.extend&&i>r&&(a=r,r=i,i=a),a=da(n,i);var o=da(n,r);a&&o&&(1!==e.rangeCount||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&((t=t.createRange()).setStart(a.node,a.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"==typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ga=de&&"documentMode"in document&&11>=document.documentMode,va=null,ya=null,ba=null,wa=!1;function ka(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;wa||null==va||va!==Qe(r)||("selectionStart"in(r=va)&&pa(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},ba&&ua(ba,r)||(ba=r,0<(r=qa(ya,"onSelect")).length&&(t=new dr("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=va)))}function _a(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Sa={animationend:_a("Animation","AnimationEnd"),animationiteration:_a("Animation","AnimationIteration"),animationstart:_a("Animation","AnimationStart"),transitionend:_a("Transition","TransitionEnd")},Ea={},Ia={};function Ca(e){if(Ea[e])return Ea[e];if(!Sa[e])return e;var t,n=Sa[e];for(t in n)if(n.hasOwnProperty(t)&&t in Ia)return Ea[e]=n[t];return e}de&&(Ia=document.createElement("div").style,"AnimationEvent"in window||(delete Sa.animationend.animation,delete Sa.animationiteration.animation,delete Sa.animationstart.animation),"TransitionEvent"in window||delete Sa.transitionend.transition);var Ta=Ca("animationend"),Pa=Ca("animationiteration"),xa=Ca("animationstart"),Ra=Ca("transitionend"),Na=new Map,Oa="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function La(e,t){Na.set(e,t),ue(t,[e])}for(var Aa=0;Aa<Oa.length;Aa++){var Da=Oa[Aa];La(Da.toLowerCase(),"on"+(Da[0].toUpperCase()+Da.slice(1)))}La(Ta,"onAnimationEnd"),La(Pa,"onAnimationIteration"),La(xa,"onAnimationStart"),La("dblclick","onDoubleClick"),La("focusin","onFocus"),La("focusout","onBlur"),La(Ra,"onTransitionEnd"),ce("onMouseEnter",["mouseout","mouseover"]),ce("onMouseLeave",["mouseout","mouseover"]),ce("onPointerEnter",["pointerout","pointerover"]),ce("onPointerLeave",["pointerout","pointerover"]),ue("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ue("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ue("onBeforeInput",["compositionend","keypress","textInput","paste"]),ue("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ue("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ue("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ma="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ua=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ma));function za(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,a,i,o,s,l){if(Ht.apply(this,arguments),Ut){if(!Ut)throw Error(oe(198));var u=zt;Ut=!1,zt=null,jt||(jt=!0,Ft=u)}}(r,t,void 0,e),e.currentTarget=null}function ja(e,t){t=!!(4&t);for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==i&&a.isPropagationStopped())break e;za(a,s,u),i=l}else for(o=0;o<r.length;o++){if(l=(s=r[o]).instance,u=s.currentTarget,s=s.listener,l!==i&&a.isPropagationStopped())break e;za(a,s,u),i=l}}}if(jt)throw e=Ft,jt=!1,Ft=null,e}function Fa(e,t){var n=t[gi];void 0===n&&(n=t[gi]=new Set);var r=e+"__bubble";n.has(r)||(Ba(t,e,2,!1),n.add(r))}function Va(e,t,n){var r=0;t&&(r|=4),Ba(n,e,r,t)}var Ha="_reactListening"+Math.random().toString(36).slice(2);function $a(e){if(!e[Ha]){e[Ha]=!0,se.forEach(function(t){"selectionchange"!==t&&(Ua.has(t)||Va(t,!1,e),Va(t,!0,e))});var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Ha]||(t[Ha]=!0,Va("selectionchange",!1,t))}}function Ba(e,t,n,r){switch(Xn(t)){case 1:var a=qn;break;case 4:a=Gn;break;default:a=Qn}n=a.bind(null,t,n,e),a=void 0,!At||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(a=!0),r?void 0!==a?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):void 0!==a?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Wa(e,t,n,r,a){var i=r;if(!(1&t||2&t||null===r))e:for(;;){if(null===r)return;var o=r.tag;if(3===o||4===o){var s=r.stateNode.containerInfo;if(s===a||8===s.nodeType&&s.parentNode===a)break;if(4===o)for(o=r.return;null!==o;){var l=o.tag;if((3===l||4===l)&&((l=o.stateNode.containerInfo)===a||8===l.nodeType&&l.parentNode===a))return;o=o.return}for(;null!==s;){if(null===(o=bi(s)))return;if(5===(l=o.tag)||6===l){r=i=o;continue e}s=s.parentNode}}r=r.return}Ot(function(){var r=i,a=_t(n),o=[];e:{var s=Na.get(e);if(void 0!==s){var l=dr,u=e;switch(e){case"keypress":if(0===rr(n))break e;case"keydown":case"keyup":l=Pr;break;case"focusin":u="focus",l=vr;break;case"focusout":u="blur",l=vr;break;case"beforeblur":case"afterblur":l=vr;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":l=mr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":l=gr;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":l=Rr;break;case Ta:case Pa:case xa:l=yr;break;case Ra:l=Nr;break;case"scroll":l=hr;break;case"wheel":l=Lr;break;case"copy":case"cut":case"paste":l=wr;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":l=xr}var c=!!(4&t),d=!c&&"scroll"===e,f=c?null!==s?s+"Capture":null:s;c=[];for(var h,p=r;null!==p;){var m=(h=p).stateNode;if(5===h.tag&&null!==m&&(h=m,null!==f&&(null!=(m=Lt(p,f))&&c.push(Ka(p,m,h)))),d)break;p=p.return}0<c.length&&(s=new l(s,u,null,n,a),o.push({event:s,listeners:c}))}}if(!(7&t)){if(l="mouseout"===e||"pointerout"===e,(!(s="mouseover"===e||"pointerover"===e)||n===kt||!(u=n.relatedTarget||n.fromElement)||!bi(u)&&!u[mi])&&(l||s)&&(s=a.window===a?a:(s=a.ownerDocument)?s.defaultView||s.parentWindow:window,l?(l=r,null!==(u=(u=n.relatedTarget||n.toElement)?bi(u):null)&&(u!==(d=$t(u))||5!==u.tag&&6!==u.tag)&&(u=null)):(l=null,u=r),l!==u)){if(c=mr,m="onMouseLeave",f="onMouseEnter",p="mouse","pointerout"!==e&&"pointerover"!==e||(c=xr,m="onPointerLeave",f="onPointerEnter",p="pointer"),d=null==l?s:ki(l),h=null==u?s:ki(u),(s=new c(m,p+"leave",l,n,a)).target=d,s.relatedTarget=h,m=null,bi(a)===r&&((c=new c(f,p+"enter",u,n,a)).target=h,c.relatedTarget=d,m=c),d=m,l&&u)e:{for(f=u,p=0,h=c=l;h;h=Ga(h))p++;for(h=0,m=f;m;m=Ga(m))h++;for(;0<p-h;)c=Ga(c),p--;for(;0<h-p;)f=Ga(f),h--;for(;p--;){if(c===f||null!==f&&c===f.alternate)break e;c=Ga(c),f=Ga(f)}c=null}else c=null;null!==l&&Qa(o,s,l,c,!1),null!==u&&null!==d&&Qa(o,d,u,c,!0)}if("select"===(l=(s=r?ki(r):window).nodeName&&s.nodeName.toLowerCase())||"input"===l&&"file"===s.type)var g=Yr;else if(Wr(s))if(Xr)g=sa;else{g=ia;var v=aa}else(l=s.nodeName)&&"input"===l.toLowerCase()&&("checkbox"===s.type||"radio"===s.type)&&(g=oa);switch(g&&(g=g(e,r))?Kr(o,g,n,a):(v&&v(e,s,r),"focusout"===e&&(v=s._wrapperState)&&v.controlled&&"number"===s.type&&tt(s,"number",s.value)),v=r?ki(r):window,e){case"focusin":(Wr(v)||"true"===v.contentEditable)&&(va=v,ya=r,ba=null);break;case"focusout":ba=ya=va=null;break;case"mousedown":wa=!0;break;case"contextmenu":case"mouseup":case"dragend":wa=!1,ka(o,n,a);break;case"selectionchange":if(ga)break;case"keydown":case"keyup":ka(o,n,a)}var y;if(Dr)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else $r?Vr(e,n)&&(b="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(b="onCompositionStart");b&&(zr&&"ko"!==n.locale&&($r||"onCompositionStart"!==b?"onCompositionEnd"===b&&$r&&(y=nr()):(er="value"in(Zn=a)?Zn.value:Zn.textContent,$r=!0)),0<(v=qa(r,b)).length&&(b=new kr(b,e,null,n,a),o.push({event:b,listeners:v}),y?b.data=y:null!==(y=Hr(n))&&(b.data=y))),(y=Ur?function(e,t){switch(e){case"compositionend":return Hr(t);case"keypress":return 32!==t.which?null:(Fr=!0,jr);case"textInput":return(e=t.data)===jr&&Fr?null:e;default:return null}}(e,n):function(e,t){if($r)return"compositionend"===e||!Dr&&Vr(e,t)?(e=nr(),tr=er=Zn=null,$r=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return zr&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=qa(r,"onBeforeInput")).length&&(a=new kr("onBeforeInput","beforeinput",null,n,a),o.push({event:a,listeners:r}),a.data=y))}ja(o,t)})}function Ka(e,t,n){return{instance:e,listener:t,currentTarget:n}}function qa(e,t){for(var n=t+"Capture",r=[];null!==e;){var a=e,i=a.stateNode;5===a.tag&&null!==i&&(a=i,null!=(i=Lt(e,n))&&r.unshift(Ka(e,i,a)),null!=(i=Lt(e,t))&&r.push(Ka(e,i,a))),e=e.return}return r}function Ga(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Qa(e,t,n,r,a){for(var i=t._reactName,o=[];null!==n&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(null!==l&&l===r)break;5===s.tag&&null!==u&&(s=u,a?null!=(l=Lt(n,i))&&o.unshift(Ka(n,l,s)):a||null!=(l=Lt(n,i))&&o.push(Ka(n,l,s))),n=n.return}0!==o.length&&e.push({event:t,listeners:o})}var Ja=/\r\n?/g,Ya=/\u0000|\uFFFD/g;function Xa(e){return("string"==typeof e?e:""+e).replace(Ja,"\n").replace(Ya,"")}function Za(e,t,n){if(t=Xa(t),Xa(e)!==t&&n)throw Error(oe(425))}function ei(){}var ti=null,ni=null;function ri(e,t){return"textarea"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ai="function"==typeof setTimeout?setTimeout:void 0,ii="function"==typeof clearTimeout?clearTimeout:void 0,oi="function"==typeof Promise?Promise:void 0,si="function"==typeof queueMicrotask?queueMicrotask:void 0!==oi?function(e){return oi.resolve(null).then(e).catch(li)}:ai;function li(e){setTimeout(function(){throw e})}function ui(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&8===a.nodeType)if("/$"===(n=a.data)){if(0===r)return e.removeChild(a),void Bn(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=a}while(n);Bn(t)}function ci(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function di(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var fi=Math.random().toString(36).slice(2),hi="__reactFiber$"+fi,pi="__reactProps$"+fi,mi="__reactContainer$"+fi,gi="__reactEvents$"+fi,vi="__reactListeners$"+fi,yi="__reactHandles$"+fi;function bi(e){var t=e[hi];if(t)return t;for(var n=e.parentNode;n;){if(t=n[mi]||n[hi]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=di(e);null!==e;){if(n=e[hi])return n;e=di(e)}return t}n=(e=n).parentNode}return null}function wi(e){return!(e=e[hi]||e[mi])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function ki(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(oe(33))}function _i(e){return e[pi]||null}var Si=[],Ei=-1;function Ii(e){return{current:e}}function Ci(e){0>Ei||(e.current=Si[Ei],Si[Ei]=null,Ei--)}function Ti(e,t){Ei++,Si[Ei]=e.current,e.current=t}var Pi={},xi=Ii(Pi),Ri=Ii(!1),Ni=Pi;function Oi(e,t){var n=e.type.contextTypes;if(!n)return Pi;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a,i={};for(a in n)i[a]=t[a];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Li(e){return null!=(e=e.childContextTypes)}function Ai(){Ci(Ri),Ci(xi)}function Di(e,t,n){if(xi.current!==Pi)throw Error(oe(168));Ti(xi,t),Ti(Ri,n)}function Mi(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!=typeof r.getChildContext)return n;for(var a in r=r.getChildContext())if(!(a in t))throw Error(oe(108,Be(e)||"Unknown",a));return ze({},n,r)}function Ui(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Pi,Ni=xi.current,Ti(xi,e),Ti(Ri,Ri.current),!0}function zi(e,t,n){var r=e.stateNode;if(!r)throw Error(oe(169));n?(e=Mi(e,t,Ni),r.__reactInternalMemoizedMergedChildContext=e,Ci(Ri),Ci(xi),Ti(xi,e)):Ci(Ri),Ti(Ri,n)}var ji=null,Fi=!1,Vi=!1;function Hi(e){null===ji?ji=[e]:ji.push(e)}function $i(){if(!Vi&&null!==ji){Vi=!0;var e=0,t=kn;try{var n=ji;for(kn=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}ji=null,Fi=!1}catch(a){throw null!==ji&&(ji=ji.slice(e+1)),Gt(en,$i),a}finally{kn=t,Vi=!1}}return null}var Bi=[],Wi=0,Ki=null,qi=0,Gi=[],Qi=0,Ji=null,Yi=1,Xi="";function Zi(e,t){Bi[Wi++]=qi,Bi[Wi++]=Ki,Ki=e,qi=t}function eo(e,t,n){Gi[Qi++]=Yi,Gi[Qi++]=Xi,Gi[Qi++]=Ji,Ji=e;var r=Yi;e=Xi;var a=32-ln(r)-1;r&=~(1<<a),n+=1;var i=32-ln(t)+a;if(30<i){var o=a-a%5;i=(r&(1<<o)-1).toString(32),r>>=o,a-=o,Yi=1<<32-ln(t)+a|n<<a|r,Xi=i+e}else Yi=1<<i|n<<a|r,Xi=e}function to(e){null!==e.return&&(Zi(e,1),eo(e,1,0))}function no(e){for(;e===Ki;)Ki=Bi[--Wi],Bi[Wi]=null,qi=Bi[--Wi],Bi[Wi]=null;for(;e===Ji;)Ji=Gi[--Qi],Gi[Qi]=null,Xi=Gi[--Qi],Gi[Qi]=null,Yi=Gi[--Qi],Gi[Qi]=null}var ro=null,ao=null,io=!1,oo=null;function so(e,t){var n=Oc(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function lo(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,ro=e,ao=ci(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,ro=e,ao=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==Ji?{id:Yi,overflow:Xi}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Oc(18,null,null,0)).stateNode=t,n.return=e,e.child=n,ro=e,ao=null,!0);default:return!1}}function uo(e){return!(!(1&e.mode)||128&e.flags)}function co(e){if(io){var t=ao;if(t){var n=t;if(!lo(e,t)){if(uo(e))throw Error(oe(418));t=ci(n.nextSibling);var r=ro;t&&lo(e,t)?so(r,n):(e.flags=-4097&e.flags|2,io=!1,ro=e)}}else{if(uo(e))throw Error(oe(418));e.flags=-4097&e.flags|2,io=!1,ro=e}}}function fo(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;ro=e}function ho(e){if(e!==ro)return!1;if(!io)return fo(e),io=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!ri(e.type,e.memoizedProps)),t&&(t=ao)){if(uo(e))throw po(),Error(oe(418));for(;t;)so(e,t),t=ci(t.nextSibling)}if(fo(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(oe(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){ao=ci(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}ao=null}}else ao=ro?ci(e.stateNode.nextSibling):null;return!0}function po(){for(var e=ao;e;)e=ci(e.nextSibling)}function mo(){ao=ro=null,io=!1}function go(e){null===oo?oo=[e]:oo.push(e)}var vo=ke.ReactCurrentBatchConfig;function yo(e,t,n){if(null!==(e=n.ref)&&"function"!=typeof e&&"object"!=typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(oe(309));var r=n.stateNode}if(!r)throw Error(oe(147,e));var a=r,i=""+e;return null!==t&&null!==t.ref&&"function"==typeof t.ref&&t.ref._stringRef===i?t.ref:((t=function(e){var t=a.refs;null===e?delete t[i]:t[i]=e})._stringRef=i,t)}if("string"!=typeof e)throw Error(oe(284));if(!n._owner)throw Error(oe(290,e))}return e}function bo(e,t){throw e=Object.prototype.toString.call(t),Error(oe(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function wo(e){return(0,e._init)(e._payload)}function ko(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function a(e,t){return(e=Ac(e,t)).index=0,e.sibling=null,e}function i(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function o(t){return e&&null===t.alternate&&(t.flags|=2),t}function s(e,t,n,r){return null===t||6!==t.tag?((t=zc(n,e.mode,r)).return=e,t):((t=a(t,n)).return=e,t)}function l(e,t,n,r){var i=n.type;return i===Ee?c(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===i||"object"==typeof i&&null!==i&&i.$$typeof===Le&&wo(i)===t.type)?((r=a(t,n.props)).ref=yo(e,t,n),r.return=e,r):((r=Dc(n.type,n.key,n.props,null,e.mode,r)).ref=yo(e,t,n),r.return=e,r)}function u(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=jc(n,e.mode,r)).return=e,t):((t=a(t,n.children||[])).return=e,t)}function c(e,t,n,r,i){return null===t||7!==t.tag?((t=Mc(n,e.mode,r,i)).return=e,t):((t=a(t,n)).return=e,t)}function d(e,t,n){if("string"==typeof t&&""!==t||"number"==typeof t)return(t=zc(""+t,e.mode,n)).return=e,t;if("object"==typeof t&&null!==t){switch(t.$$typeof){case _e:return(n=Dc(t.type,t.key,t.props,null,e.mode,n)).ref=yo(e,null,t),n.return=e,n;case Se:return(t=jc(t,e.mode,n)).return=e,t;case Le:return d(e,(0,t._init)(t._payload),n)}if(nt(t)||Me(t))return(t=Mc(t,e.mode,n,null)).return=e,t;bo(e,t)}return null}function f(e,t,n,r){var a=null!==t?t.key:null;if("string"==typeof n&&""!==n||"number"==typeof n)return null!==a?null:s(e,t,""+n,r);if("object"==typeof n&&null!==n){switch(n.$$typeof){case _e:return n.key===a?l(e,t,n,r):null;case Se:return n.key===a?u(e,t,n,r):null;case Le:return f(e,t,(a=n._init)(n._payload),r)}if(nt(n)||Me(n))return null!==a?null:c(e,t,n,r,null);bo(e,n)}return null}function h(e,t,n,r,a){if("string"==typeof r&&""!==r||"number"==typeof r)return s(t,e=e.get(n)||null,""+r,a);if("object"==typeof r&&null!==r){switch(r.$$typeof){case _e:return l(t,e=e.get(null===r.key?n:r.key)||null,r,a);case Se:return u(t,e=e.get(null===r.key?n:r.key)||null,r,a);case Le:return h(e,t,n,(0,r._init)(r._payload),a)}if(nt(r)||Me(r))return c(t,e=e.get(n)||null,r,a,null);bo(t,r)}return null}return function s(l,u,c,p){if("object"==typeof c&&null!==c&&c.type===Ee&&null===c.key&&(c=c.props.children),"object"==typeof c&&null!==c){switch(c.$$typeof){case _e:e:{for(var m=c.key,g=u;null!==g;){if(g.key===m){if((m=c.type)===Ee){if(7===g.tag){n(l,g.sibling),(u=a(g,c.props.children)).return=l,l=u;break e}}else if(g.elementType===m||"object"==typeof m&&null!==m&&m.$$typeof===Le&&wo(m)===g.type){n(l,g.sibling),(u=a(g,c.props)).ref=yo(l,g,c),u.return=l,l=u;break e}n(l,g);break}t(l,g),g=g.sibling}c.type===Ee?((u=Mc(c.props.children,l.mode,p,c.key)).return=l,l=u):((p=Dc(c.type,c.key,c.props,null,l.mode,p)).ref=yo(l,u,c),p.return=l,l=p)}return o(l);case Se:e:{for(g=c.key;null!==u;){if(u.key===g){if(4===u.tag&&u.stateNode.containerInfo===c.containerInfo&&u.stateNode.implementation===c.implementation){n(l,u.sibling),(u=a(u,c.children||[])).return=l,l=u;break e}n(l,u);break}t(l,u),u=u.sibling}(u=jc(c,l.mode,p)).return=l,l=u}return o(l);case Le:return s(l,u,(g=c._init)(c._payload),p)}if(nt(c))return function(a,o,s,l){for(var u=null,c=null,p=o,m=o=0,g=null;null!==p&&m<s.length;m++){p.index>m?(g=p,p=null):g=p.sibling;var v=f(a,p,s[m],l);if(null===v){null===p&&(p=g);break}e&&p&&null===v.alternate&&t(a,p),o=i(v,o,m),null===c?u=v:c.sibling=v,c=v,p=g}if(m===s.length)return n(a,p),io&&Zi(a,m),u;if(null===p){for(;m<s.length;m++)null!==(p=d(a,s[m],l))&&(o=i(p,o,m),null===c?u=p:c.sibling=p,c=p);return io&&Zi(a,m),u}for(p=r(a,p);m<s.length;m++)null!==(g=h(p,a,m,s[m],l))&&(e&&null!==g.alternate&&p.delete(null===g.key?m:g.key),o=i(g,o,m),null===c?u=g:c.sibling=g,c=g);return e&&p.forEach(function(e){return t(a,e)}),io&&Zi(a,m),u}(l,u,c,p);if(Me(c))return function(a,o,s,l){var u=Me(s);if("function"!=typeof u)throw Error(oe(150));if(null==(s=u.call(s)))throw Error(oe(151));for(var c=u=null,p=o,m=o=0,g=null,v=s.next();null!==p&&!v.done;m++,v=s.next()){p.index>m?(g=p,p=null):g=p.sibling;var y=f(a,p,v.value,l);if(null===y){null===p&&(p=g);break}e&&p&&null===y.alternate&&t(a,p),o=i(y,o,m),null===c?u=y:c.sibling=y,c=y,p=g}if(v.done)return n(a,p),io&&Zi(a,m),u;if(null===p){for(;!v.done;m++,v=s.next())null!==(v=d(a,v.value,l))&&(o=i(v,o,m),null===c?u=v:c.sibling=v,c=v);return io&&Zi(a,m),u}for(p=r(a,p);!v.done;m++,v=s.next())null!==(v=h(p,a,m,v.value,l))&&(e&&null!==v.alternate&&p.delete(null===v.key?m:v.key),o=i(v,o,m),null===c?u=v:c.sibling=v,c=v);return e&&p.forEach(function(e){return t(a,e)}),io&&Zi(a,m),u}(l,u,c,p);bo(l,c)}return"string"==typeof c&&""!==c||"number"==typeof c?(c=""+c,null!==u&&6===u.tag?(n(l,u.sibling),(u=a(u,c)).return=l,l=u):(n(l,u),(u=zc(c,l.mode,p)).return=l,l=u),o(l)):n(l,u)}}var _o=ko(!0),So=ko(!1),Eo=Ii(null),Io=null,Co=null,To=null;function Po(){To=Co=Io=null}function xo(e){var t=Eo.current;Ci(Eo),e._currentValue=t}function Ro(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function No(e,t){Io=e,To=Co=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(wl=!0),e.firstContext=null)}function Oo(e){var t=e._currentValue;if(To!==e)if(e={context:e,memoizedValue:t,next:null},null===Co){if(null===Io)throw Error(oe(308));Co=e,Io.dependencies={lanes:0,firstContext:e}}else Co=Co.next=e;return t}var Lo=null;function Ao(e){null===Lo?Lo=[e]:Lo.push(e)}function Do(e,t,n,r){var a=t.interleaved;return null===a?(n.next=n,Ao(t)):(n.next=a.next,a.next=n),t.interleaved=n,Mo(e,r)}function Mo(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var Uo=!1;function zo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function jo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Fo(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Vo(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,2&xu){var a=r.pending;return null===a?t.next=t:(t.next=a.next,a.next=t),r.pending=t,Mo(e,n)}return null===(a=r.interleaved)?(t.next=t,Ao(r)):(t.next=a.next,a.next=t),r.interleaved=t,Mo(e,n)}function Ho(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,wn(e,n)}}function $o(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var a=null,i=null;if(null!==(n=n.firstBaseUpdate)){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===i?a=i=o:i=i.next=o,n=n.next}while(null!==n);null===i?a=i=t:i=i.next=t}else a=i=t;return n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Bo(e,t,n,r){var a=e.updateQueue;Uo=!1;var i=a.firstBaseUpdate,o=a.lastBaseUpdate,s=a.shared.pending;if(null!==s){a.shared.pending=null;var l=s,u=l.next;l.next=null,null===o?i=u:o.next=u,o=l;var c=e.alternate;null!==c&&((s=(c=c.updateQueue).lastBaseUpdate)!==o&&(null===s?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l))}if(null!==i){var d=a.baseState;for(o=0,c=u=l=null,s=i;;){var f=s.lane,h=s.eventTime;if((r&f)===f){null!==c&&(c=c.next={eventTime:h,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var p=e,m=s;switch(f=t,h=n,m.tag){case 1:if("function"==typeof(p=m.payload)){d=p.call(h,d,f);break e}d=p;break e;case 3:p.flags=-65537&p.flags|128;case 0:if(null==(f="function"==typeof(p=m.payload)?p.call(h,d,f):p))break e;d=ze({},d,f);break e;case 2:Uo=!0}}null!==s.callback&&0!==s.lane&&(e.flags|=64,null===(f=a.effects)?a.effects=[s]:f.push(s))}else h={eventTime:h,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},null===c?(u=c=h,l=d):c=c.next=h,o|=f;if(null===(s=s.next)){if(null===(s=a.shared.pending))break;s=(f=s).next,f.next=null,a.lastBaseUpdate=f,a.shared.pending=null}}if(null===c&&(l=d),a.baseState=l,a.firstBaseUpdate=u,a.lastBaseUpdate=c,null!==(t=a.shared.interleaved)){a=t;do{o|=a.lane,a=a.next}while(a!==t)}else null===i&&(a.shared.lanes=0);Uu|=o,e.lanes=o,e.memoizedState=d}}function Wo(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(null!==a){if(r.callback=null,r=n,"function"!=typeof a)throw Error(oe(191,a));a.call(r)}}}var Ko={},qo=Ii(Ko),Go=Ii(Ko),Qo=Ii(Ko);function Jo(e){if(e===Ko)throw Error(oe(174));return e}function Yo(e,t){switch(Ti(Qo,t),Ti(Go,e),Ti(qo,Ko),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ut(null,"");break;default:t=ut(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Ci(qo),Ti(qo,t)}function Xo(){Ci(qo),Ci(Go),Ci(Qo)}function Zo(e){Jo(Qo.current);var t=Jo(qo.current),n=ut(t,e.type);t!==n&&(Ti(Go,e),Ti(qo,n))}function es(e){Go.current===e&&(Ci(qo),Ci(Go))}var ts=Ii(0);function ns(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(128&t.flags)return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var rs=[];function as(){for(var e=0;e<rs.length;e++)rs[e]._workInProgressVersionPrimary=null;rs.length=0}var is=ke.ReactCurrentDispatcher,os=ke.ReactCurrentBatchConfig,ss=0,ls=null,us=null,cs=null,ds=!1,fs=!1,hs=0,ps=0;function ms(){throw Error(oe(321))}function gs(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!la(e[n],t[n]))return!1;return!0}function vs(e,t,n,r,a,i){if(ss=i,ls=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,is.current=null===e||null===e.memoizedState?el:tl,e=n(r,a),fs){i=0;do{if(fs=!1,hs=0,25<=i)throw Error(oe(301));i+=1,cs=us=null,t.updateQueue=null,is.current=nl,e=n(r,a)}while(fs)}if(is.current=Zs,t=null!==us&&null!==us.next,ss=0,cs=us=ls=null,ds=!1,t)throw Error(oe(300));return e}function ys(){var e=0!==hs;return hs=0,e}function bs(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===cs?ls.memoizedState=cs=e:cs=cs.next=e,cs}function ws(){if(null===us){var e=ls.alternate;e=null!==e?e.memoizedState:null}else e=us.next;var t=null===cs?ls.memoizedState:cs.next;if(null!==t)cs=t,us=e;else{if(null===e)throw Error(oe(310));e={memoizedState:(us=e).memoizedState,baseState:us.baseState,baseQueue:us.baseQueue,queue:us.queue,next:null},null===cs?ls.memoizedState=cs=e:cs=cs.next=e}return cs}function ks(e,t){return"function"==typeof t?t(e):t}function _s(e){var t=ws(),n=t.queue;if(null===n)throw Error(oe(311));n.lastRenderedReducer=e;var r=us,a=r.baseQueue,i=n.pending;if(null!==i){if(null!==a){var o=a.next;a.next=i.next,i.next=o}r.baseQueue=a=i,n.pending=null}if(null!==a){i=a.next,r=r.baseState;var s=o=null,l=null,u=i;do{var c=u.lane;if((ss&c)===c)null!==l&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};null===l?(s=l=d,o=r):l=l.next=d,ls.lanes|=c,Uu|=c}u=u.next}while(null!==u&&u!==i);null===l?o=r:l.next=s,la(r,t.memoizedState)||(wl=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(null!==(e=n.interleaved)){a=e;do{i=a.lane,ls.lanes|=i,Uu|=i,a=a.next}while(a!==e)}else null===a&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ss(e){var t=ws(),n=t.queue;if(null===n)throw Error(oe(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,i=t.memoizedState;if(null!==a){n.pending=null;var o=a=a.next;do{i=e(i,o.action),o=o.next}while(o!==a);la(i,t.memoizedState)||(wl=!0),t.memoizedState=i,null===t.baseQueue&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Es(){}function Is(e,t){var n=ls,r=ws(),a=t(),i=!la(r.memoizedState,a);if(i&&(r.memoizedState=a,wl=!0),r=r.queue,Us(Ps.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||null!==cs&&1&cs.memoizedState.tag){if(n.flags|=2048,Os(9,Ts.bind(null,n,r,a,t),void 0,null),null===Ru)throw Error(oe(349));30&ss||Cs(n,t,a)}return a}function Cs(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=ls.updateQueue)?(t={lastEffect:null,stores:null},ls.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Ts(e,t,n,r){t.value=n,t.getSnapshot=r,xs(t)&&Rs(e)}function Ps(e,t,n){return n(function(){xs(t)&&Rs(e)})}function xs(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!la(e,n)}catch(r){return!0}}function Rs(e){var t=Mo(e,1);null!==t&&rc(t,e,1,-1)}function Ns(e){var t=bs();return"function"==typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ks,lastRenderedState:e},t.queue=e,e=e.dispatch=Qs.bind(null,ls,e),[t.memoizedState,e]}function Os(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=ls.updateQueue)?(t={lastEffect:null,stores:null},ls.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Ls(){return ws().memoizedState}function As(e,t,n,r){var a=bs();ls.flags|=e,a.memoizedState=Os(1|t,n,void 0,void 0===r?null:r)}function Ds(e,t,n,r){var a=ws();r=void 0===r?null:r;var i=void 0;if(null!==us){var o=us.memoizedState;if(i=o.destroy,null!==r&&gs(r,o.deps))return void(a.memoizedState=Os(t,n,i,r))}ls.flags|=e,a.memoizedState=Os(1|t,n,i,r)}function Ms(e,t){return As(8390656,8,e,t)}function Us(e,t){return Ds(2048,8,e,t)}function zs(e,t){return Ds(4,2,e,t)}function js(e,t){return Ds(4,4,e,t)}function Fs(e,t){return"function"==typeof t?(e=e(),t(e),function(){t(null)}):null!=t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Vs(e,t,n){return n=null!=n?n.concat([e]):null,Ds(4,4,Fs.bind(null,t,e),n)}function Hs(){}function $s(e,t){var n=ws();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&gs(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Bs(e,t){var n=ws();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&gs(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ws(e,t,n){return 21&ss?(la(n,t)||(n=vn(),ls.lanes|=n,Uu|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,wl=!0),e.memoizedState=n)}function Ks(e,t){var n=kn;kn=0!==n&&4>n?n:4,e(!0);var r=os.transition;os.transition={};try{e(!1),t()}finally{kn=n,os.transition=r}}function qs(){return ws().memoizedState}function Gs(e,t,n){var r=nc(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Js(e))Ys(t,n);else if(null!==(n=Do(e,t,n,r))){rc(n,e,r,tc()),Xs(n,t,r)}}function Qs(e,t,n){var r=nc(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Js(e))Ys(t,a);else{var i=e.alternate;if(0===e.lanes&&(null===i||0===i.lanes)&&null!==(i=t.lastRenderedReducer))try{var o=t.lastRenderedState,s=i(o,n);if(a.hasEagerState=!0,a.eagerState=s,la(s,o)){var l=t.interleaved;return null===l?(a.next=a,Ao(t)):(a.next=l.next,l.next=a),void(t.interleaved=a)}}catch(u){}null!==(n=Do(e,t,a,r))&&(rc(n,e,r,a=tc()),Xs(n,t,r))}}function Js(e){var t=e.alternate;return e===ls||null!==t&&t===ls}function Ys(e,t){fs=ds=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Xs(e,t,n){if(4194240&n){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,wn(e,n)}}var Zs={readContext:Oo,useCallback:ms,useContext:ms,useEffect:ms,useImperativeHandle:ms,useInsertionEffect:ms,useLayoutEffect:ms,useMemo:ms,useReducer:ms,useRef:ms,useState:ms,useDebugValue:ms,useDeferredValue:ms,useTransition:ms,useMutableSource:ms,useSyncExternalStore:ms,useId:ms,unstable_isNewReconciler:!1},el={readContext:Oo,useCallback:function(e,t){return bs().memoizedState=[e,void 0===t?null:t],e},useContext:Oo,useEffect:Ms,useImperativeHandle:function(e,t,n){return n=null!=n?n.concat([e]):null,As(4194308,4,Fs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return As(4194308,4,e,t)},useInsertionEffect:function(e,t){return As(4,2,e,t)},useMemo:function(e,t){var n=bs();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=bs();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Gs.bind(null,ls,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},bs().memoizedState=e},useState:Ns,useDebugValue:Hs,useDeferredValue:function(e){return bs().memoizedState=e},useTransition:function(){var e=Ns(!1),t=e[0];return e=Ks.bind(null,e[1]),bs().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ls,a=bs();if(io){if(void 0===n)throw Error(oe(407));n=n()}else{if(n=t(),null===Ru)throw Error(oe(349));30&ss||Cs(r,t,n)}a.memoizedState=n;var i={value:n,getSnapshot:t};return a.queue=i,Ms(Ps.bind(null,r,i,e),[e]),r.flags|=2048,Os(9,Ts.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=bs(),t=Ru.identifierPrefix;if(io){var n=Xi;t=":"+t+"R"+(n=(Yi&~(1<<32-ln(Yi)-1)).toString(32)+n),0<(n=hs++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=ps++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},tl={readContext:Oo,useCallback:$s,useContext:Oo,useEffect:Us,useImperativeHandle:Vs,useInsertionEffect:zs,useLayoutEffect:js,useMemo:Bs,useReducer:_s,useRef:Ls,useState:function(){return _s(ks)},useDebugValue:Hs,useDeferredValue:function(e){return Ws(ws(),us.memoizedState,e)},useTransition:function(){return[_s(ks)[0],ws().memoizedState]},useMutableSource:Es,useSyncExternalStore:Is,useId:qs,unstable_isNewReconciler:!1},nl={readContext:Oo,useCallback:$s,useContext:Oo,useEffect:Us,useImperativeHandle:Vs,useInsertionEffect:zs,useLayoutEffect:js,useMemo:Bs,useReducer:Ss,useRef:Ls,useState:function(){return Ss(ks)},useDebugValue:Hs,useDeferredValue:function(e){var t=ws();return null===us?t.memoizedState=e:Ws(t,us.memoizedState,e)},useTransition:function(){return[Ss(ks)[0],ws().memoizedState]},useMutableSource:Es,useSyncExternalStore:Is,useId:qs,unstable_isNewReconciler:!1};function rl(e,t){if(e&&e.defaultProps){for(var n in t=ze({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function al(e,t,n,r){n=null==(n=n(r,t=e.memoizedState))?t:ze({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var il={isMounted:function(e){return!!(e=e._reactInternals)&&$t(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=tc(),a=nc(e),i=Fo(r,a);i.payload=t,null!=n&&(i.callback=n),null!==(t=Vo(e,i,a))&&(rc(t,e,a,r),Ho(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=tc(),a=nc(e),i=Fo(r,a);i.tag=1,i.payload=t,null!=n&&(i.callback=n),null!==(t=Vo(e,i,a))&&(rc(t,e,a,r),Ho(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=tc(),r=nc(e),a=Fo(n,r);a.tag=2,null!=t&&(a.callback=t),null!==(t=Vo(e,a,r))&&(rc(t,e,r,n),Ho(t,e,r))}};function ol(e,t,n,r,a,i,o){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,i,o):!t.prototype||!t.prototype.isPureReactComponent||(!ua(n,r)||!ua(a,i))}function sl(e,t,n){var r=!1,a=Pi,i=t.contextType;return"object"==typeof i&&null!==i?i=Oo(i):(a=Li(t)?Ni:xi.current,i=(r=null!=(r=t.contextTypes))?Oi(e,a):Pi),t=new t(n,i),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=il,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i),t}function ll(e,t,n,r){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&il.enqueueReplaceState(t,t.state,null)}function ul(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},zo(e);var i=t.contextType;"object"==typeof i&&null!==i?a.context=Oo(i):(i=Li(t)?Ni:xi.current,a.context=Oi(e,i)),a.state=e.memoizedState,"function"==typeof(i=t.getDerivedStateFromProps)&&(al(e,t,i,n),a.state=e.memoizedState),"function"==typeof t.getDerivedStateFromProps||"function"==typeof a.getSnapshotBeforeUpdate||"function"!=typeof a.UNSAFE_componentWillMount&&"function"!=typeof a.componentWillMount||(t=a.state,"function"==typeof a.componentWillMount&&a.componentWillMount(),"function"==typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount(),t!==a.state&&il.enqueueReplaceState(a,a.state,null),Bo(e,n,a,r),a.state=e.memoizedState),"function"==typeof a.componentDidMount&&(e.flags|=4194308)}function cl(e,t){try{var n="",r=t;do{n+=He(r),r=r.return}while(r);var a=n}catch(i){a="\nError generating stack: "+i.message+"\n"+i.stack}return{value:e,source:t,stack:a,digest:null}}function dl(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function fl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var hl="function"==typeof WeakMap?WeakMap:Map;function pl(e,t,n){(n=Fo(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Wu||(Wu=!0,Ku=r),fl(0,t)},n}function ml(e,t,n){(n=Fo(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"==typeof r){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){fl(0,t)}}var i=e.stateNode;return null!==i&&"function"==typeof i.componentDidCatch&&(n.callback=function(){fl(0,t),"function"!=typeof r&&(null===qu?qu=new Set([this]):qu.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function gl(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new hl;var a=new Set;r.set(t,a)}else void 0===(a=r.get(t))&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=Cc.bind(null,e,t,n),t.then(e,e))}function vl(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function yl(e,t,n,r,a){return 1&e.mode?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Fo(-1,1)).tag=2,Vo(n,t,1))),n.lanes|=1),e)}var bl=ke.ReactCurrentOwner,wl=!1;function kl(e,t,n,r){t.child=null===e?So(t,null,n,r):_o(t,e.child,n,r)}function _l(e,t,n,r,a){n=n.render;var i=t.ref;return No(t,a),r=vs(e,t,n,r,i,a),n=ys(),null===e||wl?(io&&n&&to(t),t.flags|=1,kl(e,t,r,a),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Wl(e,t,a))}function Sl(e,t,n,r,a){if(null===e){var i=n.type;return"function"!=typeof i||Lc(i)||void 0!==i.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Dc(n.type,null,r,t,t.mode,a)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=i,El(e,t,i,r,a))}if(i=e.child,0===(e.lanes&a)){var o=i.memoizedProps;if((n=null!==(n=n.compare)?n:ua)(o,r)&&e.ref===t.ref)return Wl(e,t,a)}return t.flags|=1,(e=Ac(i,r)).ref=t.ref,e.return=t,t.child=e}function El(e,t,n,r,a){if(null!==e){var i=e.memoizedProps;if(ua(i,r)&&e.ref===t.ref){if(wl=!1,t.pendingProps=r=i,0===(e.lanes&a))return t.lanes=e.lanes,Wl(e,t,a);131072&e.flags&&(wl=!0)}}return Tl(e,t,n,r,a)}function Il(e,t,n){var r=t.pendingProps,a=r.children,i=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(1&t.mode){if(!(1073741824&n))return e=null!==i?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ti(Au,Lu),Lu|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==i?i.baseLanes:n,Ti(Au,Lu),Lu|=r}else t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ti(Au,Lu),Lu|=n;else null!==i?(r=i.baseLanes|n,t.memoizedState=null):r=n,Ti(Au,Lu),Lu|=r;return kl(e,t,a,n),t.child}function Cl(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Tl(e,t,n,r,a){var i=Li(n)?Ni:xi.current;return i=Oi(t,i),No(t,a),n=vs(e,t,n,r,i,a),r=ys(),null===e||wl?(io&&r&&to(t),t.flags|=1,kl(e,t,n,a),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Wl(e,t,a))}function Pl(e,t,n,r,a){if(Li(n)){var i=!0;Ui(t)}else i=!1;if(No(t,a),null===t.stateNode)Bl(e,t),sl(t,n,r),ul(t,n,r,a),r=!0;else if(null===e){var o=t.stateNode,s=t.memoizedProps;o.props=s;var l=o.context,u=n.contextType;"object"==typeof u&&null!==u?u=Oo(u):u=Oi(t,u=Li(n)?Ni:xi.current);var c=n.getDerivedStateFromProps,d="function"==typeof c||"function"==typeof o.getSnapshotBeforeUpdate;d||"function"!=typeof o.UNSAFE_componentWillReceiveProps&&"function"!=typeof o.componentWillReceiveProps||(s!==r||l!==u)&&ll(t,o,r,u),Uo=!1;var f=t.memoizedState;o.state=f,Bo(t,r,o,a),l=t.memoizedState,s!==r||f!==l||Ri.current||Uo?("function"==typeof c&&(al(t,n,c,r),l=t.memoizedState),(s=Uo||ol(t,n,s,r,f,l,u))?(d||"function"!=typeof o.UNSAFE_componentWillMount&&"function"!=typeof o.componentWillMount||("function"==typeof o.componentWillMount&&o.componentWillMount(),"function"==typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount()),"function"==typeof o.componentDidMount&&(t.flags|=4194308)):("function"==typeof o.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=s):("function"==typeof o.componentDidMount&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,jo(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:rl(t.type,s),o.props=u,d=t.pendingProps,f=o.context,"object"==typeof(l=n.contextType)&&null!==l?l=Oo(l):l=Oi(t,l=Li(n)?Ni:xi.current);var h=n.getDerivedStateFromProps;(c="function"==typeof h||"function"==typeof o.getSnapshotBeforeUpdate)||"function"!=typeof o.UNSAFE_componentWillReceiveProps&&"function"!=typeof o.componentWillReceiveProps||(s!==d||f!==l)&&ll(t,o,r,l),Uo=!1,f=t.memoizedState,o.state=f,Bo(t,r,o,a);var p=t.memoizedState;s!==d||f!==p||Ri.current||Uo?("function"==typeof h&&(al(t,n,h,r),p=t.memoizedState),(u=Uo||ol(t,n,u,r,f,p,l)||!1)?(c||"function"!=typeof o.UNSAFE_componentWillUpdate&&"function"!=typeof o.componentWillUpdate||("function"==typeof o.componentWillUpdate&&o.componentWillUpdate(r,p,l),"function"==typeof o.UNSAFE_componentWillUpdate&&o.UNSAFE_componentWillUpdate(r,p,l)),"function"==typeof o.componentDidUpdate&&(t.flags|=4),"function"==typeof o.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!=typeof o.componentDidUpdate||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!=typeof o.getSnapshotBeforeUpdate||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),o.props=r,o.state=p,o.context=l,r=u):("function"!=typeof o.componentDidUpdate||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!=typeof o.getSnapshotBeforeUpdate||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return xl(e,t,n,r,i,a)}function xl(e,t,n,r,a,i){Cl(e,t);var o=!!(128&t.flags);if(!r&&!o)return a&&zi(t,n,!1),Wl(e,t,i);r=t.stateNode,bl.current=t;var s=o&&"function"!=typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&o?(t.child=_o(t,e.child,null,i),t.child=_o(t,null,s,i)):kl(e,t,s,i),t.memoizedState=r.state,a&&zi(t,n,!0),t.child}function Rl(e){var t=e.stateNode;t.pendingContext?Di(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Di(0,t.context,!1),Yo(e,t.containerInfo)}function Nl(e,t,n,r,a){return mo(),go(a),t.flags|=256,kl(e,t,n,r),t.child}var Ol,Ll,Al,Dl,Ml={dehydrated:null,treeContext:null,retryLane:0};function Ul(e){return{baseLanes:e,cachePool:null,transitions:null}}function zl(e,t,n){var r,a=t.pendingProps,i=ts.current,o=!1,s=!!(128&t.flags);if((r=s)||(r=(null===e||null!==e.memoizedState)&&!!(2&i)),r?(o=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(i|=1),Ti(ts,1&i),null===e)return co(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(1&t.mode?"$!"===e.data?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=a.children,e=a.fallback,o?(a=t.mode,o=t.child,s={mode:"hidden",children:s},1&a||null===o?o=Uc(s,a,0,null):(o.childLanes=0,o.pendingProps=s),e=Mc(e,a,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Ul(n),t.memoizedState=Ml,e):jl(t,s));if(null!==(i=e.memoizedState)&&null!==(r=i.dehydrated))return function(e,t,n,r,a,i,o){if(n)return 256&t.flags?(t.flags&=-257,Fl(e,t,o,r=dl(Error(oe(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(i=r.fallback,a=t.mode,r=Uc({mode:"visible",children:r.children},a,0,null),(i=Mc(i,a,o,null)).flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,1&t.mode&&_o(t,e.child,null,o),t.child.memoizedState=Ul(o),t.memoizedState=Ml,i);if(!(1&t.mode))return Fl(e,t,o,null);if("$!"===a.data){if(r=a.nextSibling&&a.nextSibling.dataset)var s=r.dgst;return r=s,Fl(e,t,o,r=dl(i=Error(oe(419)),r,void 0))}if(s=0!==(o&e.childLanes),wl||s){if(null!==(r=Ru)){switch(o&-o){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}0!==(a=0!==(a&(r.suspendedLanes|o))?0:a)&&a!==i.retryLane&&(i.retryLane=a,Mo(e,a),rc(r,e,a,-1))}return gc(),Fl(e,t,o,r=dl(Error(oe(421))))}return"$?"===a.data?(t.flags|=128,t.child=e.child,t=Pc.bind(null,e),a._reactRetry=t,null):(e=i.treeContext,ao=ci(a.nextSibling),ro=t,io=!0,oo=null,null!==e&&(Gi[Qi++]=Yi,Gi[Qi++]=Xi,Gi[Qi++]=Ji,Yi=e.id,Xi=e.overflow,Ji=t),t=jl(t,r.children),t.flags|=4096,t)}(e,t,s,a,r,i,n);if(o){o=a.fallback,s=t.mode,r=(i=e.child).sibling;var l={mode:"hidden",children:a.children};return 1&s||t.child===i?(a=Ac(i,l)).subtreeFlags=14680064&i.subtreeFlags:((a=t.child).childLanes=0,a.pendingProps=l,t.deletions=null),null!==r?o=Ac(r,o):(o=Mc(o,s,n,null)).flags|=2,o.return=t,a.return=t,a.sibling=o,t.child=a,a=o,o=t.child,s=null===(s=e.child.memoizedState)?Ul(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=Ml,a}return e=(o=e.child).sibling,a=Ac(o,{mode:"visible",children:a.children}),!(1&t.mode)&&(a.lanes=n),a.return=t,a.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=a,t.memoizedState=null,a}function jl(e,t){return(t=Uc({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Fl(e,t,n,r){return null!==r&&go(r),_o(t,e.child,null,n),(e=jl(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Vl(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),Ro(e.return,t,n)}function Hl(e,t,n,r,a){var i=e.memoizedState;null===i?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=a)}function $l(e,t,n){var r=t.pendingProps,a=r.revealOrder,i=r.tail;if(kl(e,t,r.children,n),2&(r=ts.current))r=1&r|2,t.flags|=128;else{if(null!==e&&128&e.flags)e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Vl(e,n,t);else if(19===e.tag)Vl(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ti(ts,r),1&t.mode)switch(a){case"forwards":for(n=t.child,a=null;null!==n;)null!==(e=n.alternate)&&null===ns(e)&&(a=n),n=n.sibling;null===(n=a)?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Hl(t,!1,a,n,i);break;case"backwards":for(n=null,a=t.child,t.child=null;null!==a;){if(null!==(e=a.alternate)&&null===ns(e)){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Hl(t,!0,n,null,i);break;case"together":Hl(t,!1,null,null,void 0);break;default:t.memoizedState=null}else t.memoizedState=null;return t.child}function Bl(e,t){!(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Wl(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Uu|=t.lanes,0===(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(oe(153));if(null!==t.child){for(n=Ac(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Ac(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Kl(e,t){if(!io)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ql(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=14680064&a.subtreeFlags,r|=14680064&a.flags,a.return=e,a=a.sibling;else for(a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Gl(e,t,n){var r=t.pendingProps;switch(no(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ql(t),null;case 1:case 17:return Li(t.type)&&Ai(),ql(t),null;case 3:return r=t.stateNode,Xo(),Ci(Ri),Ci(xi),as(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(ho(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&!(256&t.flags)||(t.flags|=1024,null!==oo&&(sc(oo),oo=null))),Ll(e,t),ql(t),null;case 5:es(t);var a=Jo(Qo.current);if(n=t.type,null!==e&&null!=t.stateNode)Al(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(oe(166));return ql(t),null}if(e=Jo(qo.current),ho(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[hi]=t,r[pi]=i,e=!!(1&t.mode),n){case"dialog":Fa("cancel",r),Fa("close",r);break;case"iframe":case"object":case"embed":Fa("load",r);break;case"video":case"audio":for(a=0;a<Ma.length;a++)Fa(Ma[a],r);break;case"source":Fa("error",r);break;case"img":case"image":case"link":Fa("error",r),Fa("load",r);break;case"details":Fa("toggle",r);break;case"input":Ye(r,i),Fa("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Fa("invalid",r);break;case"textarea":it(r,i),Fa("invalid",r)}for(var o in bt(n,i),a=null,i)if(i.hasOwnProperty(o)){var s=i[o];"children"===o?"string"==typeof s?r.textContent!==s&&(!0!==i.suppressHydrationWarning&&Za(r.textContent,s,e),a=["children",s]):"number"==typeof s&&r.textContent!==""+s&&(!0!==i.suppressHydrationWarning&&Za(r.textContent,s,e),a=["children",""+s]):le.hasOwnProperty(o)&&null!=s&&"onScroll"===o&&Fa("scroll",r)}switch(n){case"input":qe(r),et(r,i,!0);break;case"textarea":qe(r),st(r);break;case"select":case"option":break;default:"function"==typeof i.onClick&&(r.onclick=ei)}r=a,t.updateQueue=r,null!==r&&(t.flags|=4)}else{o=9===a.nodeType?a:a.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=lt(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=o.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"==typeof r.is?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),"select"===n&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[hi]=t,e[pi]=r,Ol(e,t,!1,!1),t.stateNode=e;e:{switch(o=wt(n,r),n){case"dialog":Fa("cancel",e),Fa("close",e),a=r;break;case"iframe":case"object":case"embed":Fa("load",e),a=r;break;case"video":case"audio":for(a=0;a<Ma.length;a++)Fa(Ma[a],e);a=r;break;case"source":Fa("error",e),a=r;break;case"img":case"image":case"link":Fa("error",e),Fa("load",e),a=r;break;case"details":Fa("toggle",e),a=r;break;case"input":Ye(e,r),a=Je(e,r),Fa("invalid",e);break;case"option":default:a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=ze({},r,{value:void 0}),Fa("invalid",e);break;case"textarea":it(e,r),a=at(e,r),Fa("invalid",e)}for(i in bt(n,a),s=a)if(s.hasOwnProperty(i)){var l=s[i];"style"===i?vt(e,l):"dangerouslySetInnerHTML"===i?null!=(l=l?l.__html:void 0)&&ft(e,l):"children"===i?"string"==typeof l?("textarea"!==n||""!==l)&&ht(e,l):"number"==typeof l&&ht(e,""+l):"suppressContentEditableWarning"!==i&&"suppressHydrationWarning"!==i&&"autoFocus"!==i&&(le.hasOwnProperty(i)?null!=l&&"onScroll"===i&&Fa("scroll",e):null!=l&&we(e,i,l,o))}switch(n){case"input":qe(e),et(e,r,!1);break;case"textarea":qe(e),st(e);break;case"option":null!=r.value&&e.setAttribute("value",""+We(r.value));break;case"select":e.multiple=!!r.multiple,null!=(i=r.value)?rt(e,!!r.multiple,i,!1):null!=r.defaultValue&&rt(e,!!r.multiple,r.defaultValue,!0);break;default:"function"==typeof a.onClick&&(e.onclick=ei)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return ql(t),null;case 6:if(e&&null!=t.stateNode)Dl(e,t,e.memoizedProps,r);else{if("string"!=typeof r&&null===t.stateNode)throw Error(oe(166));if(n=Jo(Qo.current),Jo(qo.current),ho(t)){if(r=t.stateNode,n=t.memoizedProps,r[hi]=t,(i=r.nodeValue!==n)&&null!==(e=ro))switch(e.tag){case 3:Za(r.nodeValue,n,!!(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Za(r.nodeValue,n,!!(1&e.mode))}i&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[hi]=t,t.stateNode=r}return ql(t),null;case 13:if(Ci(ts),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(io&&null!==ao&&1&t.mode&&!(128&t.flags))po(),mo(),t.flags|=98560,i=!1;else if(i=ho(t),null!==r&&null!==r.dehydrated){if(null===e){if(!i)throw Error(oe(318));if(!(i=null!==(i=t.memoizedState)?i.dehydrated:null))throw Error(oe(317));i[hi]=t}else mo(),!(128&t.flags)&&(t.memoizedState=null),t.flags|=4;ql(t),i=!1}else null!==oo&&(sc(oo),oo=null),i=!0;if(!i)return 65536&t.flags?t:null}return 128&t.flags?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,1&t.mode&&(null===e||1&ts.current?0===Du&&(Du=3):gc())),null!==t.updateQueue&&(t.flags|=4),ql(t),null);case 4:return Xo(),Ll(e,t),null===e&&$a(t.stateNode.containerInfo),ql(t),null;case 10:return xo(t.type._context),ql(t),null;case 19:if(Ci(ts),null===(i=t.memoizedState))return ql(t),null;if(r=!!(128&t.flags),null===(o=i.rendering))if(r)Kl(i,!1);else{if(0!==Du||null!==e&&128&e.flags)for(e=t.child;null!==e;){if(null!==(o=ns(e))){for(t.flags|=128,Kl(i,!1),null!==(r=o.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(i=n).flags&=14680066,null===(o=i.alternate)?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ti(ts,1&ts.current|2),t.child}e=e.sibling}null!==i.tail&&Xt()>$u&&(t.flags|=128,r=!0,Kl(i,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=ns(o))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),Kl(i,!0),null===i.tail&&"hidden"===i.tailMode&&!o.alternate&&!io)return ql(t),null}else 2*Xt()-i.renderingStartTime>$u&&1073741824!==n&&(t.flags|=128,r=!0,Kl(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(null!==(n=i.last)?n.sibling=o:t.child=o,i.last=o)}return null!==i.tail?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Xt(),t.sibling=null,n=ts.current,Ti(ts,r?1&n|2:1&n),t):(ql(t),null);case 22:case 23:return fc(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&1&t.mode?!!(1073741824&Lu)&&(ql(t),6&t.subtreeFlags&&(t.flags|=8192)):ql(t),null;case 24:case 25:return null}throw Error(oe(156,t.tag))}function Ql(e,t){switch(no(t),t.tag){case 1:return Li(t.type)&&Ai(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Xo(),Ci(Ri),Ci(xi),as(),65536&(e=t.flags)&&!(128&e)?(t.flags=-65537&e|128,t):null;case 5:return es(t),null;case 13:if(Ci(ts),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(oe(340));mo()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Ci(ts),null;case 4:return Xo(),null;case 10:return xo(t.type._context),null;case 22:case 23:return fc(),null;default:return null}}Ol=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Ll=function(){},Al=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,Jo(qo.current);var i,o=null;switch(n){case"input":a=Je(e,a),r=Je(e,r),o=[];break;case"select":a=ze({},a,{value:void 0}),r=ze({},r,{value:void 0}),o=[];break;case"textarea":a=at(e,a),r=at(e,r),o=[];break;default:"function"!=typeof a.onClick&&"function"==typeof r.onClick&&(e.onclick=ei)}for(u in bt(n,r),n=null,a)if(!r.hasOwnProperty(u)&&a.hasOwnProperty(u)&&null!=a[u])if("style"===u){var s=a[u];for(i in s)s.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else"dangerouslySetInnerHTML"!==u&&"children"!==u&&"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(le.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(s=null!=a?a[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(null!=l||null!=s))if("style"===u)if(s){for(i in s)!s.hasOwnProperty(i)||l&&l.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in l)l.hasOwnProperty(i)&&s[i]!==l[i]&&(n||(n={}),n[i]=l[i])}else n||(o||(o=[]),o.push(u,n)),n=l;else"dangerouslySetInnerHTML"===u?(l=l?l.__html:void 0,s=s?s.__html:void 0,null!=l&&s!==l&&(o=o||[]).push(u,l)):"children"===u?"string"!=typeof l&&"number"!=typeof l||(o=o||[]).push(u,""+l):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&(le.hasOwnProperty(u)?(null!=l&&"onScroll"===u&&Fa("scroll",e),o||s===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}},Dl=function(e,t,n,r){n!==r&&(t.flags|=4)};var Jl=!1,Yl=!1,Xl="function"==typeof WeakSet?WeakSet:Set,Zl=null;function eu(e,t){var n=e.ref;if(null!==n)if("function"==typeof n)try{n(null)}catch(r){Ic(e,t,r)}else n.current=null}function tu(e,t,n){try{n()}catch(r){Ic(e,t,r)}}var nu=!1;function ru(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var a=r=r.next;do{if((a.tag&e)===e){var i=a.destroy;a.destroy=void 0,void 0!==i&&tu(t,n,i)}a=a.next}while(a!==r)}}function au(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function iu(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"==typeof t?t(e):t.current=e}}function ou(e){var t=e.alternate;null!==t&&(e.alternate=null,ou(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[hi],delete t[pi],delete t[gi],delete t[vi],delete t[yi])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function su(e){return 5===e.tag||3===e.tag||4===e.tag}function lu(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||su(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function uu(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!=(n=n._reactRootContainer)||null!==t.onclick||(t.onclick=ei));else if(4!==r&&null!==(e=e.child))for(uu(e,t,n),e=e.sibling;null!==e;)uu(e,t,n),e=e.sibling}function cu(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(cu(e,t,n),e=e.sibling;null!==e;)cu(e,t,n),e=e.sibling}var du=null,fu=!1;function hu(e,t,n){for(n=n.child;null!==n;)pu(e,t,n),n=n.sibling}function pu(e,t,n){if(sn&&"function"==typeof sn.onCommitFiberUnmount)try{sn.onCommitFiberUnmount(on,n)}catch(s){}switch(n.tag){case 5:Yl||eu(n,t);case 6:var r=du,a=fu;du=null,hu(e,t,n),fu=a,null!==(du=r)&&(fu?(e=du,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):du.removeChild(n.stateNode));break;case 18:null!==du&&(fu?(e=du,n=n.stateNode,8===e.nodeType?ui(e.parentNode,n):1===e.nodeType&&ui(e,n),Bn(e)):ui(du,n.stateNode));break;case 4:r=du,a=fu,du=n.stateNode.containerInfo,fu=!0,hu(e,t,n),du=r,fu=a;break;case 0:case 11:case 14:case 15:if(!Yl&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){a=r=r.next;do{var i=a,o=i.destroy;i=i.tag,void 0!==o&&(2&i||4&i)&&tu(n,t,o),a=a.next}while(a!==r)}hu(e,t,n);break;case 1:if(!Yl&&(eu(n,t),"function"==typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Ic(n,t,s)}hu(e,t,n);break;case 21:hu(e,t,n);break;case 22:1&n.mode?(Yl=(r=Yl)||null!==n.memoizedState,hu(e,t,n),Yl=r):hu(e,t,n);break;default:hu(e,t,n)}}function mu(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Xl),t.forEach(function(t){var r=xc.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))})}}function gu(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var a=n[r];try{var i=e,o=t,s=o;e:for(;null!==s;){switch(s.tag){case 5:du=s.stateNode,fu=!1;break e;case 3:case 4:du=s.stateNode.containerInfo,fu=!0;break e}s=s.return}if(null===du)throw Error(oe(160));pu(i,o,a),du=null,fu=!1;var l=a.alternate;null!==l&&(l.return=null),a.return=null}catch(u){Ic(a,t,u)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)vu(t,e),t=t.sibling}function vu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(gu(t,e),yu(e),4&r){try{ru(3,e,e.return),au(3,e)}catch(m){Ic(e,e.return,m)}try{ru(5,e,e.return)}catch(m){Ic(e,e.return,m)}}break;case 1:gu(t,e),yu(e),512&r&&null!==n&&eu(n,n.return);break;case 5:if(gu(t,e),yu(e),512&r&&null!==n&&eu(n,n.return),32&e.flags){var a=e.stateNode;try{ht(a,"")}catch(m){Ic(e,e.return,m)}}if(4&r&&null!=(a=e.stateNode)){var i=e.memoizedProps,o=null!==n?n.memoizedProps:i,s=e.type,l=e.updateQueue;if(e.updateQueue=null,null!==l)try{"input"===s&&"radio"===i.type&&null!=i.name&&Xe(a,i),wt(s,o);var u=wt(s,i);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];"style"===c?vt(a,d):"dangerouslySetInnerHTML"===c?ft(a,d):"children"===c?ht(a,d):we(a,c,d,u)}switch(s){case"input":Ze(a,i);break;case"textarea":ot(a,i);break;case"select":var f=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var h=i.value;null!=h?rt(a,!!i.multiple,h,!1):f!==!!i.multiple&&(null!=i.defaultValue?rt(a,!!i.multiple,i.defaultValue,!0):rt(a,!!i.multiple,i.multiple?[]:"",!1))}a[pi]=i}catch(m){Ic(e,e.return,m)}}break;case 6:if(gu(t,e),yu(e),4&r){if(null===e.stateNode)throw Error(oe(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch(m){Ic(e,e.return,m)}}break;case 3:if(gu(t,e),yu(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Bn(t.containerInfo)}catch(m){Ic(e,e.return,m)}break;case 4:default:gu(t,e),yu(e);break;case 13:gu(t,e),yu(e),8192&(a=e.child).flags&&(i=null!==a.memoizedState,a.stateNode.isHidden=i,!i||null!==a.alternate&&null!==a.alternate.memoizedState||(Hu=Xt())),4&r&&mu(e);break;case 22:if(c=null!==n&&null!==n.memoizedState,1&e.mode?(Yl=(u=Yl)||c,gu(t,e),Yl=u):gu(t,e),yu(e),8192&r){if(u=null!==e.memoizedState,(e.stateNode.isHidden=u)&&!c&&1&e.mode)for(Zl=e,c=e.child;null!==c;){for(d=Zl=c;null!==Zl;){switch(h=(f=Zl).child,f.tag){case 0:case 11:case 14:case 15:ru(4,f,f.return);break;case 1:eu(f,f.return);var p=f.stateNode;if("function"==typeof p.componentWillUnmount){r=f,n=f.return;try{t=r,p.props=t.memoizedProps,p.state=t.memoizedState,p.componentWillUnmount()}catch(m){Ic(r,n,m)}}break;case 5:eu(f,f.return);break;case 22:if(null!==f.memoizedState){_u(d);continue}}null!==h?(h.return=f,Zl=h):_u(d)}c=c.sibling}e:for(c=null,d=e;;){if(5===d.tag){if(null===c){c=d;try{a=d.stateNode,u?"function"==typeof(i=a.style).setProperty?i.setProperty("display","none","important"):i.display="none":(s=d.stateNode,o=null!=(l=d.memoizedProps.style)&&l.hasOwnProperty("display")?l.display:null,s.style.display=gt("display",o))}catch(m){Ic(e,e.return,m)}}}else if(6===d.tag){if(null===c)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(m){Ic(e,e.return,m)}}else if((22!==d.tag&&23!==d.tag||null===d.memoizedState||d===e)&&null!==d.child){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;null===d.sibling;){if(null===d.return||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:gu(t,e),yu(e),4&r&&mu(e);case 21:}}function yu(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(su(n)){var r=n;break e}n=n.return}throw Error(oe(160))}switch(r.tag){case 5:var a=r.stateNode;32&r.flags&&(ht(a,""),r.flags&=-33),cu(e,lu(e),a);break;case 3:case 4:var i=r.stateNode.containerInfo;uu(e,lu(e),i);break;default:throw Error(oe(161))}}catch(o){Ic(e,e.return,o)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function bu(e,t,n){Zl=e,wu(e)}function wu(e,t,n){for(var r=!!(1&e.mode);null!==Zl;){var a=Zl,i=a.child;if(22===a.tag&&r){var o=null!==a.memoizedState||Jl;if(!o){var s=a.alternate,l=null!==s&&null!==s.memoizedState||Yl;s=Jl;var u=Yl;if(Jl=o,(Yl=l)&&!u)for(Zl=a;null!==Zl;)l=(o=Zl).child,22===o.tag&&null!==o.memoizedState?Su(a):null!==l?(l.return=o,Zl=l):Su(a);for(;null!==i;)Zl=i,wu(i),i=i.sibling;Zl=a,Jl=s,Yl=u}ku(e)}else 8772&a.subtreeFlags&&null!==i?(i.return=a,Zl=i):ku(e)}}function ku(e){for(;null!==Zl;){var t=Zl;if(8772&t.flags){var n=t.alternate;try{if(8772&t.flags)switch(t.tag){case 0:case 11:case 15:Yl||au(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!Yl)if(null===n)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:rl(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;null!==i&&Wo(t,i,r);break;case 3:var o=t.updateQueue;if(null!==o){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}Wo(t,o,n)}break;case 5:var s=t.stateNode;if(null===n&&4&t.flags){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var u=t.alternate;if(null!==u){var c=u.memoizedState;if(null!==c){var d=c.dehydrated;null!==d&&Bn(d)}}}break;default:throw Error(oe(163))}Yl||512&t.flags&&iu(t)}catch(f){Ic(t,t.return,f)}}if(t===e){Zl=null;break}if(null!==(n=t.sibling)){n.return=t.return,Zl=n;break}Zl=t.return}}function _u(e){for(;null!==Zl;){var t=Zl;if(t===e){Zl=null;break}var n=t.sibling;if(null!==n){n.return=t.return,Zl=n;break}Zl=t.return}}function Su(e){for(;null!==Zl;){var t=Zl;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{au(4,t)}catch(l){Ic(t,n,l)}break;case 1:var r=t.stateNode;if("function"==typeof r.componentDidMount){var a=t.return;try{r.componentDidMount()}catch(l){Ic(t,a,l)}}var i=t.return;try{iu(t)}catch(l){Ic(t,i,l)}break;case 5:var o=t.return;try{iu(t)}catch(l){Ic(t,o,l)}}}catch(l){Ic(t,t.return,l)}if(t===e){Zl=null;break}var s=t.sibling;if(null!==s){s.return=t.return,Zl=s;break}Zl=t.return}}var Eu,Iu=Math.ceil,Cu=ke.ReactCurrentDispatcher,Tu=ke.ReactCurrentOwner,Pu=ke.ReactCurrentBatchConfig,xu=0,Ru=null,Nu=null,Ou=0,Lu=0,Au=Ii(0),Du=0,Mu=null,Uu=0,zu=0,ju=0,Fu=null,Vu=null,Hu=0,$u=1/0,Bu=null,Wu=!1,Ku=null,qu=null,Gu=!1,Qu=null,Ju=0,Yu=0,Xu=null,Zu=-1,ec=0;function tc(){return 6&xu?Xt():-1!==Zu?Zu:Zu=Xt()}function nc(e){return 1&e.mode?2&xu&&0!==Ou?Ou&-Ou:null!==vo.transition?(0===ec&&(ec=vn()),ec):0!==(e=kn)?e:e=void 0===(e=window.event)?16:Xn(e.type):1}function rc(e,t,n,r){if(50<Yu)throw Yu=0,Xu=null,Error(oe(185));bn(e,n,r),2&xu&&e===Ru||(e===Ru&&(!(2&xu)&&(zu|=n),4===Du&&lc(e,Ou)),ac(e,r),1===n&&0===xu&&!(1&t.mode)&&($u=Xt()+500,Fi&&$i()))}function ac(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-ln(i),s=1<<o,l=a[o];-1===l?0!==(s&n)&&0===(s&r)||(a[o]=mn(s,t)):l<=t&&(e.expiredLanes|=s),i&=~s}}(e,t);var r=pn(e,e===Ru?Ou:0);if(0===r)null!==n&&Qt(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&Qt(n),1===t)0===e.tag?function(e){Fi=!0,Hi(e)}(uc.bind(null,e)):Hi(uc.bind(null,e)),si(function(){!(6&xu)&&$i()}),n=null;else{switch(_n(r)){case 1:n=en;break;case 4:n=tn;break;case 16:default:n=nn;break;case 536870912:n=an}n=Rc(n,ic.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ic(e,t){if(Zu=-1,ec=0,6&xu)throw Error(oe(327));var n=e.callbackNode;if(Sc()&&e.callbackNode!==n)return null;var r=pn(e,e===Ru?Ou:0);if(0===r)return null;if(30&r||0!==(r&e.expiredLanes)||t)t=vc(e,r);else{t=r;var a=xu;xu|=2;var i=mc();for(Ru===e&&Ou===t||(Bu=null,$u=Xt()+500,hc(e,t));;)try{bc();break}catch(s){pc(e,s)}Po(),Cu.current=i,xu=a,null!==Nu?t=0:(Ru=null,Ou=0,t=Du)}if(0!==t){if(2===t&&(0!==(a=gn(e))&&(r=a,t=oc(e,a))),1===t)throw n=Mu,hc(e,0),lc(e,r),ac(e,Xt()),n;if(6===t)lc(e,r);else{if(a=e.current.alternate,!(30&r||function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var a=n[r],i=a.getSnapshot;a=a.value;try{if(!la(i(),a))return!1}catch(o){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(a)||(t=vc(e,r),2===t&&(i=gn(e),0!==i&&(r=i,t=oc(e,i))),1!==t)))throw n=Mu,hc(e,0),lc(e,r),ac(e,Xt()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(oe(345));case 2:case 5:_c(e,Vu,Bu);break;case 3:if(lc(e,r),(130023424&r)===r&&10<(t=Hu+500-Xt())){if(0!==pn(e,0))break;if(((a=e.suspendedLanes)&r)!==r){tc(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=ai(_c.bind(null,e,Vu,Bu),t);break}_c(e,Vu,Bu);break;case 4:if(lc(e,r),(4194240&r)===r)break;for(t=e.eventTimes,a=-1;0<r;){var o=31-ln(r);i=1<<o,(o=t[o])>a&&(a=o),r&=~i}if(r=a,10<(r=(120>(r=Xt()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Iu(r/1960))-r)){e.timeoutHandle=ai(_c.bind(null,e,Vu,Bu),r);break}_c(e,Vu,Bu);break;default:throw Error(oe(329))}}}return ac(e,Xt()),e.callbackNode===n?ic.bind(null,e):null}function oc(e,t){var n=Fu;return e.current.memoizedState.isDehydrated&&(hc(e,t).flags|=256),2!==(e=vc(e,t))&&(t=Vu,Vu=n,null!==t&&sc(t)),e}function sc(e){null===Vu?Vu=e:Vu.push.apply(Vu,e)}function lc(e,t){for(t&=~ju,t&=~zu,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ln(t),r=1<<n;e[n]=-1,t&=~r}}function uc(e){if(6&xu)throw Error(oe(327));Sc();var t=pn(e,0);if(!(1&t))return ac(e,Xt()),null;var n=vc(e,t);if(0!==e.tag&&2===n){var r=gn(e);0!==r&&(t=r,n=oc(e,r))}if(1===n)throw n=Mu,hc(e,0),lc(e,t),ac(e,Xt()),n;if(6===n)throw Error(oe(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,_c(e,Vu,Bu),ac(e,Xt()),null}function cc(e,t){var n=xu;xu|=1;try{return e(t)}finally{0===(xu=n)&&($u=Xt()+500,Fi&&$i())}}function dc(e){null!==Qu&&0===Qu.tag&&!(6&xu)&&Sc();var t=xu;xu|=1;var n=Pu.transition,r=kn;try{if(Pu.transition=null,kn=1,e)return e()}finally{kn=r,Pu.transition=n,!(6&(xu=t))&&$i()}}function fc(){Lu=Au.current,Ci(Au)}function hc(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,ii(n)),null!==Nu)for(n=Nu.return;null!==n;){var r=n;switch(no(r),r.tag){case 1:null!=(r=r.type.childContextTypes)&&Ai();break;case 3:Xo(),Ci(Ri),Ci(xi),as();break;case 5:es(r);break;case 4:Xo();break;case 13:case 19:Ci(ts);break;case 10:xo(r.type._context);break;case 22:case 23:fc()}n=n.return}if(Ru=e,Nu=e=Ac(e.current,null),Ou=Lu=t,Du=0,Mu=null,ju=zu=Uu=0,Vu=Fu=null,null!==Lo){for(t=0;t<Lo.length;t++)if(null!==(r=(n=Lo[t]).interleaved)){n.interleaved=null;var a=r.next,i=n.pending;if(null!==i){var o=i.next;i.next=a,r.next=o}n.pending=r}Lo=null}return e}function pc(e,t){for(;;){var n=Nu;try{if(Po(),is.current=Zs,ds){for(var r=ls.memoizedState;null!==r;){var a=r.queue;null!==a&&(a.pending=null),r=r.next}ds=!1}if(ss=0,cs=us=ls=null,fs=!1,hs=0,Tu.current=null,null===n||null===n.return){Du=1,Mu=t,Nu=null;break}e:{var i=e,o=n.return,s=n,l=t;if(t=Ou,s.flags|=32768,null!==l&&"object"==typeof l&&"function"==typeof l.then){var u=l,c=s,d=c.tag;if(!(1&c.mode||0!==d&&11!==d&&15!==d)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var h=vl(o);if(null!==h){h.flags&=-257,yl(h,o,s,0,t),1&h.mode&&gl(i,u,t),l=u;var p=(t=h).updateQueue;if(null===p){var m=new Set;m.add(l),t.updateQueue=m}else p.add(l);break e}if(!(1&t)){gl(i,u,t),gc();break e}l=Error(oe(426))}else if(io&&1&s.mode){var g=vl(o);if(null!==g){!(65536&g.flags)&&(g.flags|=256),yl(g,o,s,0,t),go(cl(l,s));break e}}i=l=cl(l,s),4!==Du&&(Du=2),null===Fu?Fu=[i]:Fu.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t,$o(i,pl(0,l,t));break e;case 1:s=l;var v=i.type,y=i.stateNode;if(!(128&i.flags||"function"!=typeof v.getDerivedStateFromError&&(null===y||"function"!=typeof y.componentDidCatch||null!==qu&&qu.has(y)))){i.flags|=65536,t&=-t,i.lanes|=t,$o(i,ml(i,s,t));break e}}i=i.return}while(null!==i)}kc(n)}catch(b){t=b,Nu===n&&null!==n&&(Nu=n=n.return);continue}break}}function mc(){var e=Cu.current;return Cu.current=Zs,null===e?Zs:e}function gc(){0!==Du&&3!==Du&&2!==Du||(Du=4),null===Ru||!(268435455&Uu)&&!(268435455&zu)||lc(Ru,Ou)}function vc(e,t){var n=xu;xu|=2;var r=mc();for(Ru===e&&Ou===t||(Bu=null,hc(e,t));;)try{yc();break}catch(a){pc(e,a)}if(Po(),xu=n,Cu.current=r,null!==Nu)throw Error(oe(261));return Ru=null,Ou=0,Du}function yc(){for(;null!==Nu;)wc(Nu)}function bc(){for(;null!==Nu&&!Jt();)wc(Nu)}function wc(e){var t=Eu(e.alternate,e,Lu);e.memoizedProps=e.pendingProps,null===t?kc(e):Nu=t,Tu.current=null}function kc(e){var t=e;do{var n=t.alternate;if(e=t.return,32768&t.flags){if(null!==(n=Ql(n,t)))return n.flags&=32767,void(Nu=n);if(null===e)return Du=6,void(Nu=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}else if(null!==(n=Gl(n,t,Lu)))return void(Nu=n);if(null!==(t=t.sibling))return void(Nu=t);Nu=t=e}while(null!==t);0===Du&&(Du=5)}function _c(e,t,n){var r=kn,a=Pu.transition;try{Pu.transition=null,kn=1,function(e,t,n,r){do{Sc()}while(null!==Qu);if(6&xu)throw Error(oe(327));n=e.finishedWork;var a=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(oe(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-ln(n),i=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~i}}(e,i),e===Ru&&(Nu=Ru=null,Ou=0),!(2064&n.subtreeFlags)&&!(2064&n.flags)||Gu||(Gu=!0,Rc(nn,function(){return Sc(),null})),i=!!(15990&n.flags),!!(15990&n.subtreeFlags)||i){i=Pu.transition,Pu.transition=null;var o=kn;kn=1;var s=xu;xu|=4,Tu.current=null,function(e,t){if(ti=Kn,pa(e=ha())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var a=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch(w){n=null;break e}var o=0,s=-1,l=-1,u=0,c=0,d=e,f=null;t:for(;;){for(var h;d!==n||0!==a&&3!==d.nodeType||(s=o+a),d!==i||0!==r&&3!==d.nodeType||(l=o+r),3===d.nodeType&&(o+=d.nodeValue.length),null!==(h=d.firstChild);)f=d,d=h;for(;;){if(d===e)break t;if(f===n&&++u===a&&(s=o),f===i&&++c===r&&(l=o),null!==(h=d.nextSibling))break;f=(d=f).parentNode}d=h}n=-1===s||-1===l?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ni={focusedElem:e,selectionRange:n},Kn=!1,Zl=t;null!==Zl;)if(e=(t=Zl).child,1028&t.subtreeFlags&&null!==e)e.return=t,Zl=e;else for(;null!==Zl;){t=Zl;try{var p=t.alternate;if(1024&t.flags)switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==p){var m=p.memoizedProps,g=p.memoizedState,v=t.stateNode,y=v.getSnapshotBeforeUpdate(t.elementType===t.type?m:rl(t.type,m),g);v.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var b=t.stateNode.containerInfo;1===b.nodeType?b.textContent="":9===b.nodeType&&b.documentElement&&b.removeChild(b.documentElement);break;default:throw Error(oe(163))}}catch(w){Ic(t,t.return,w)}if(null!==(e=t.sibling)){e.return=t.return,Zl=e;break}Zl=t.return}p=nu,nu=!1}(e,n),vu(n,e),ma(ni),Kn=!!ti,ni=ti=null,e.current=n,bu(n),Yt(),xu=s,kn=o,Pu.transition=i}else e.current=n;if(Gu&&(Gu=!1,Qu=e,Ju=a),i=e.pendingLanes,0===i&&(qu=null),function(e){if(sn&&"function"==typeof sn.onCommitFiberRoot)try{sn.onCommitFiberRoot(on,e,void 0,!(128&~e.current.flags))}catch(t){}}(n.stateNode),ac(e,Xt()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(Wu)throw Wu=!1,e=Ku,Ku=null,e;!!(1&Ju)&&0!==e.tag&&Sc(),i=e.pendingLanes,1&i?e===Xu?Yu++:(Yu=0,Xu=e):Yu=0,$i()}(e,t,n,r)}finally{Pu.transition=a,kn=r}return null}function Sc(){if(null!==Qu){var e=_n(Ju),t=Pu.transition,n=kn;try{if(Pu.transition=null,kn=16>e?16:e,null===Qu)var r=!1;else{if(e=Qu,Qu=null,Ju=0,6&xu)throw Error(oe(331));var a=xu;for(xu|=4,Zl=e.current;null!==Zl;){var i=Zl,o=i.child;if(16&Zl.flags){var s=i.deletions;if(null!==s){for(var l=0;l<s.length;l++){var u=s[l];for(Zl=u;null!==Zl;){var c=Zl;switch(c.tag){case 0:case 11:case 15:ru(8,c,i)}var d=c.child;if(null!==d)d.return=c,Zl=d;else for(;null!==Zl;){var f=(c=Zl).sibling,h=c.return;if(ou(c),c===u){Zl=null;break}if(null!==f){f.return=h,Zl=f;break}Zl=h}}}var p=i.alternate;if(null!==p){var m=p.child;if(null!==m){p.child=null;do{var g=m.sibling;m.sibling=null,m=g}while(null!==m)}}Zl=i}}if(2064&i.subtreeFlags&&null!==o)o.return=i,Zl=o;else e:for(;null!==Zl;){if(2048&(i=Zl).flags)switch(i.tag){case 0:case 11:case 15:ru(9,i,i.return)}var v=i.sibling;if(null!==v){v.return=i.return,Zl=v;break e}Zl=i.return}}var y=e.current;for(Zl=y;null!==Zl;){var b=(o=Zl).child;if(2064&o.subtreeFlags&&null!==b)b.return=o,Zl=b;else e:for(o=y;null!==Zl;){if(2048&(s=Zl).flags)try{switch(s.tag){case 0:case 11:case 15:au(9,s)}}catch(k){Ic(s,s.return,k)}if(s===o){Zl=null;break e}var w=s.sibling;if(null!==w){w.return=s.return,Zl=w;break e}Zl=s.return}}if(xu=a,$i(),sn&&"function"==typeof sn.onPostCommitFiberRoot)try{sn.onPostCommitFiberRoot(on,e)}catch(k){}r=!0}return r}finally{kn=n,Pu.transition=t}}return!1}function Ec(e,t,n){e=Vo(e,t=pl(0,t=cl(n,t),1),1),t=tc(),null!==e&&(bn(e,1,t),ac(e,t))}function Ic(e,t,n){if(3===e.tag)Ec(e,e,n);else for(;null!==t;){if(3===t.tag){Ec(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"==typeof t.type.getDerivedStateFromError||"function"==typeof r.componentDidCatch&&(null===qu||!qu.has(r))){t=Vo(t,e=ml(t,e=cl(n,e),1),1),e=tc(),null!==t&&(bn(t,1,e),ac(t,e));break}}t=t.return}}function Cc(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=tc(),e.pingedLanes|=e.suspendedLanes&n,Ru===e&&(Ou&n)===n&&(4===Du||3===Du&&(130023424&Ou)===Ou&&500>Xt()-Hu?hc(e,0):ju|=n),ac(e,t)}function Tc(e,t){0===t&&(1&e.mode?(t=fn,!(130023424&(fn<<=1))&&(fn=4194304)):t=1);var n=tc();null!==(e=Mo(e,t))&&(bn(e,t,n),ac(e,n))}function Pc(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),Tc(e,n)}function xc(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;null!==a&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(oe(314))}null!==r&&r.delete(t),Tc(e,n)}function Rc(e,t){return Gt(e,t)}function Nc(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Oc(e,t,n,r){return new Nc(e,t,n,r)}function Lc(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Ac(e,t){var n=e.alternate;return null===n?((n=Oc(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Dc(e,t,n,r,a,i){var o=2;if(r=e,"function"==typeof e)Lc(e)&&(o=1);else if("string"==typeof e)o=5;else e:switch(e){case Ee:return Mc(n.children,a,i,t);case Ie:o=8,a|=8;break;case Ce:return(e=Oc(12,n,t,2|a)).elementType=Ce,e.lanes=i,e;case Re:return(e=Oc(13,n,t,a)).elementType=Re,e.lanes=i,e;case Ne:return(e=Oc(19,n,t,a)).elementType=Ne,e.lanes=i,e;case Ae:return Uc(n,a,i,t);default:if("object"==typeof e&&null!==e)switch(e.$$typeof){case Te:o=10;break e;case Pe:o=9;break e;case xe:o=11;break e;case Oe:o=14;break e;case Le:o=16,r=null;break e}throw Error(oe(130,null==e?e:typeof e,""))}return(t=Oc(o,n,t,a)).elementType=e,t.type=r,t.lanes=i,t}function Mc(e,t,n,r){return(e=Oc(7,e,r,t)).lanes=n,e}function Uc(e,t,n,r){return(e=Oc(22,e,r,t)).elementType=Ae,e.lanes=n,e.stateNode={isHidden:!1},e}function zc(e,t,n){return(e=Oc(6,e,null,t)).lanes=n,e}function jc(e,t,n){return(t=Oc(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Fc(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=yn(0),this.expirationTimes=yn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yn(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Vc(e,t,n,r,a,i,o,s,l){return e=new Fc(e,t,n,s,l),1===t?(t=1,!0===i&&(t|=8)):t=0,i=Oc(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},zo(i),e}function Hc(e){if(!e)return Pi;e:{if($t(e=e._reactInternals)!==e||1!==e.tag)throw Error(oe(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Li(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(oe(171))}if(1===e.tag){var n=e.type;if(Li(n))return Mi(e,n,t)}return t}function $c(e,t,n,r,a,i,o,s,l){return(e=Vc(n,r,!0,e,0,i,0,s,l)).context=Hc(null),n=e.current,(i=Fo(r=tc(),a=nc(n))).callback=null!=t?t:null,Vo(n,i,a),e.current.lanes=a,bn(e,a,r),ac(e,r),e}function Bc(e,t,n,r){var a=t.current,i=tc(),o=nc(a);return n=Hc(n),null===t.context?t.context=n:t.pendingContext=n,(t=Fo(i,o)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=Vo(a,t,o))&&(rc(e,a,o,i),Ho(e,a,o)),o}function Wc(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Kc(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function qc(e,t){Kc(e,t),(e=e.alternate)&&Kc(e,t)}Eu=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||Ri.current)wl=!0;else{if(0===(e.lanes&n)&&!(128&t.flags))return wl=!1,function(e,t,n){switch(t.tag){case 3:Rl(t),mo();break;case 5:Zo(t);break;case 1:Li(t.type)&&Ui(t);break;case 4:Yo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;Ti(Eo,r._currentValue),r._currentValue=a;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(Ti(ts,1&ts.current),t.flags|=128,null):0!==(n&t.child.childLanes)?zl(e,t,n):(Ti(ts,1&ts.current),null!==(e=Wl(e,t,n))?e.sibling:null);Ti(ts,1&ts.current);break;case 19:if(r=0!==(n&t.childLanes),128&e.flags){if(r)return $l(e,t,n);t.flags|=128}if(null!==(a=t.memoizedState)&&(a.rendering=null,a.tail=null,a.lastEffect=null),Ti(ts,ts.current),r)break;return null;case 22:case 23:return t.lanes=0,Il(e,t,n)}return Wl(e,t,n)}(e,t,n);wl=!!(131072&e.flags)}else wl=!1,io&&1048576&t.flags&&eo(t,qi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Bl(e,t),e=t.pendingProps;var a=Oi(t,xi.current);No(t,n),a=vs(null,t,r,e,a,n);var i=ys();return t.flags|=1,"object"==typeof a&&null!==a&&"function"==typeof a.render&&void 0===a.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Li(r)?(i=!0,Ui(t)):i=!1,t.memoizedState=null!==a.state&&void 0!==a.state?a.state:null,zo(t),a.updater=il,t.stateNode=a,a._reactInternals=t,ul(t,r,e,n),t=xl(null,t,r,!0,i,n)):(t.tag=0,io&&i&&to(t),kl(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Bl(e,t),e=t.pendingProps,r=(a=r._init)(r._payload),t.type=r,a=t.tag=function(e){if("function"==typeof e)return Lc(e)?1:0;if(null!=e){if((e=e.$$typeof)===xe)return 11;if(e===Oe)return 14}return 2}(r),e=rl(r,e),a){case 0:t=Tl(null,t,r,e,n);break e;case 1:t=Pl(null,t,r,e,n);break e;case 11:t=_l(null,t,r,e,n);break e;case 14:t=Sl(null,t,r,rl(r.type,e),n);break e}throw Error(oe(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,Tl(e,t,r,a=t.elementType===r?a:rl(r,a),n);case 1:return r=t.type,a=t.pendingProps,Pl(e,t,r,a=t.elementType===r?a:rl(r,a),n);case 3:e:{if(Rl(t),null===e)throw Error(oe(387));r=t.pendingProps,a=(i=t.memoizedState).element,jo(e,t),Bo(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated){if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,256&t.flags){t=Nl(e,t,r,n,a=cl(Error(oe(423)),t));break e}if(r!==a){t=Nl(e,t,r,n,a=cl(Error(oe(424)),t));break e}for(ao=ci(t.stateNode.containerInfo.firstChild),ro=t,io=!0,oo=null,n=So(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(mo(),r===a){t=Wl(e,t,n);break e}kl(e,t,r,n)}t=t.child}return t;case 5:return Zo(t),null===e&&co(t),r=t.type,a=t.pendingProps,i=null!==e?e.memoizedProps:null,o=a.children,ri(r,a)?o=null:null!==i&&ri(r,i)&&(t.flags|=32),Cl(e,t),kl(e,t,o,n),t.child;case 6:return null===e&&co(t),null;case 13:return zl(e,t,n);case 4:return Yo(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=_o(t,null,r,n):kl(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,_l(e,t,r,a=t.elementType===r?a:rl(r,a),n);case 7:return kl(e,t,t.pendingProps,n),t.child;case 8:case 12:return kl(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,i=t.memoizedProps,o=a.value,Ti(Eo,r._currentValue),r._currentValue=o,null!==i)if(la(i.value,o)){if(i.children===a.children&&!Ri.current){t=Wl(e,t,n);break e}}else for(null!==(i=t.child)&&(i.return=t);null!==i;){var s=i.dependencies;if(null!==s){o=i.child;for(var l=s.firstContext;null!==l;){if(l.context===r){if(1===i.tag){(l=Fo(-1,n&-n)).tag=2;var u=i.updateQueue;if(null!==u){var c=(u=u.shared).pending;null===c?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}i.lanes|=n,null!==(l=i.alternate)&&(l.lanes|=n),Ro(i.return,n,t),s.lanes|=n;break}l=l.next}}else if(10===i.tag)o=i.type===t.type?null:i.child;else if(18===i.tag){if(null===(o=i.return))throw Error(oe(341));o.lanes|=n,null!==(s=o.alternate)&&(s.lanes|=n),Ro(o,n,t),o=i.sibling}else o=i.child;if(null!==o)o.return=i;else for(o=i;null!==o;){if(o===t){o=null;break}if(null!==(i=o.sibling)){i.return=o.return,o=i;break}o=o.return}i=o}kl(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,No(t,n),r=r(a=Oo(a)),t.flags|=1,kl(e,t,r,n),t.child;case 14:return a=rl(r=t.type,t.pendingProps),Sl(e,t,r,a=rl(r.type,a),n);case 15:return El(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:rl(r,a),Bl(e,t),t.tag=1,Li(r)?(e=!0,Ui(t)):e=!1,No(t,n),sl(t,r,a),ul(t,r,a,n),xl(null,t,r,!0,e,n);case 19:return $l(e,t,n);case 22:return Il(e,t,n)}throw Error(oe(156,t.tag))};var Gc="function"==typeof reportError?reportError:function(e){console.error(e)};function Qc(e){this._internalRoot=e}function Jc(e){this._internalRoot=e}function Yc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Xc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Zc(){}function ed(e,t,n,r,a){var i=n._reactRootContainer;if(i){var o=i;if("function"==typeof a){var s=a;a=function(){var e=Wc(o);s.call(e)}}Bc(t,o,e,a)}else o=function(e,t,n,r,a){if(a){if("function"==typeof r){var i=r;r=function(){var e=Wc(o);i.call(e)}}var o=$c(t,r,e,0,null,!1,0,"",Zc);return e._reactRootContainer=o,e[mi]=o.current,$a(8===e.nodeType?e.parentNode:e),dc(),o}for(;a=e.lastChild;)e.removeChild(a);if("function"==typeof r){var s=r;r=function(){var e=Wc(l);s.call(e)}}var l=Vc(e,0,!1,null,0,!1,0,"",Zc);return e._reactRootContainer=l,e[mi]=l.current,$a(8===e.nodeType?e.parentNode:e),dc(function(){Bc(t,l,n,r)}),l}(n,t,e,a,r);return Wc(o)}Jc.prototype.render=Qc.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(oe(409));Bc(e,t,null,null)},Jc.prototype.unmount=Qc.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;dc(function(){Bc(null,e,null,null)}),t[mi]=null}},Jc.prototype.unstable_scheduleHydration=function(e){if(e){var t=Cn();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Dn.length&&0!==t&&t<Dn[n].priority;n++);Dn.splice(n,0,e),0===n&&jn(e)}},Sn=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=hn(t.pendingLanes);0!==n&&(wn(t,1|n),ac(t,Xt()),!(6&xu)&&($u=Xt()+500,$i()))}break;case 13:dc(function(){var t=Mo(e,1);if(null!==t){var n=tc();rc(t,e,1,n)}}),qc(e,1)}},En=function(e){if(13===e.tag){var t=Mo(e,134217728);if(null!==t)rc(t,e,134217728,tc());qc(e,134217728)}},In=function(e){if(13===e.tag){var t=nc(e),n=Mo(e,t);if(null!==n)rc(n,e,t,tc());qc(e,t)}},Cn=function(){return kn},Tn=function(e,t){var n=kn;try{return kn=e,t()}finally{kn=n}},St=function(e,t,n){switch(t){case"input":if(Ze(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=_i(r);if(!a)throw Error(oe(90));Ge(r),Ze(r,a)}}}break;case"textarea":ot(e,n);break;case"select":null!=(t=n.value)&&rt(e,!!n.multiple,t,!1)}},xt=cc,Rt=dc;var td={usingClientEntryPoint:!1,Events:[wi,ki,_i,Tt,Pt,cc]},nd={findFiberByHostInstance:bi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},rd={bundleType:nd.bundleType,version:nd.version,rendererPackageName:nd.rendererPackageName,rendererConfig:nd.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ke.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=Kt(e))?null:e.stateNode},findFiberByHostInstance:nd.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var ad=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ad.isDisabled&&ad.supportsFiber)try{on=ad.inject(rd),sn=ad}catch(dt){}}ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=td,ee.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Yc(t))throw Error(oe(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:Se,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},ee.createRoot=function(e,t){if(!Yc(e))throw Error(oe(299));var n=!1,r="",a=Gc;return null!=t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(a=t.onRecoverableError)),t=Vc(e,1,!1,null,0,n,0,r,a),e[mi]=t.current,$a(8===e.nodeType?e.parentNode:e),new Qc(t)},ee.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"==typeof e.render)throw Error(oe(188));throw e=Object.keys(e).join(","),Error(oe(268,e))}return e=null===(e=Kt(t))?null:e.stateNode},ee.flushSync=function(e){return dc(e)},ee.hydrate=function(e,t,n){if(!Xc(t))throw Error(oe(200));return ed(null,e,t,!0,n)},ee.hydrateRoot=function(e,t,n){if(!Yc(e))throw Error(oe(405));var r=null!=n&&n.hydratedSources||null,a=!1,i="",o=Gc;if(null!=n&&(!0===n.unstable_strictMode&&(a=!0),void 0!==n.identifierPrefix&&(i=n.identifierPrefix),void 0!==n.onRecoverableError&&(o=n.onRecoverableError)),t=$c(t,null,e,1,null!=n?n:null,a,0,i,o),e[mi]=t.current,$a(e),r)for(e=0;e<r.length;e++)a=(a=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new Jc(t)},ee.render=function(e,t,n){if(!Xc(t))throw Error(oe(200));return ed(null,e,t,!1,n)},ee.unmountComponentAtNode=function(e){if(!Xc(e))throw Error(oe(40));return!!e._reactRootContainer&&(dc(function(){ed(null,null,e,!1,function(){e._reactRootContainer=null,e[mi]=null})}),!0)},ee.unstable_batchedUpdates=cc,ee.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Xc(n))throw Error(oe(200));if(null==e||void 0===e._reactInternals)throw Error(oe(38));return ed(e,t,n,!1,r)},ee.version="18.3.1-next-f1338f8080-20240426",function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),Z.exports=ee;var id,od,sd=Z.exports,ld=sd;
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ud(){return ud=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ud.apply(this,arguments)}X.createRoot=ld.createRoot,X.hydrateRoot=ld.hydrateRoot,(od=id||(id={})).Pop="POP",od.Push="PUSH",od.Replace="REPLACE";const cd="popstate";function dd(e){return void 0===e&&(e={}),function(e,t,n,r){void 0===r&&(r={});let{window:a=document.defaultView,v5Compat:i=!1}=r,o=a.history,s=id.Pop,l=null,u=c();null==u&&(u=0,o.replaceState(ud({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){s=id.Pop;let e=c(),t=null==e?null:e-u;u=e,l&&l({action:s,location:m.location,delta:t})}function f(e,t){s=id.Push;let r=md(m.location,e,t);n&&n(r,e),u=c()+1;let d=pd(r,u),f=m.createHref(r);try{o.pushState(d,"",f)}catch(h){if(h instanceof DOMException&&"DataCloneError"===h.name)throw h;a.location.assign(f)}i&&l&&l({action:s,location:m.location,delta:1})}function h(e,t){s=id.Replace;let r=md(m.location,e,t);n&&n(r,e),u=c();let a=pd(r,u),d=m.createHref(r);o.replaceState(a,"",d),i&&l&&l({action:s,location:m.location,delta:0})}function p(e){let t="null"!==a.location.origin?a.location.origin:a.location.href,n="string"==typeof e?e:gd(e);return n=n.replace(/ $/,"%20"),fd(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}let m={get action(){return s},get location(){return e(a,o)},listen(e){if(l)throw new Error("A history only accepts one active listener");return a.addEventListener(cd,d),l=e,()=>{a.removeEventListener(cd,d),l=null}},createHref:e=>t(a,e),createURL:p,encodeLocation(e){let t=p(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:h,go:e=>o.go(e)};return m}(function(e,t){let{pathname:n,search:r,hash:a}=e.location;return md("",{pathname:n,search:r,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||"default")},function(e,t){return"string"==typeof t?t:gd(t)},null,e)}function fd(e,t){if(!1===e||null==e)throw new Error(t)}function hd(e,t){if(!e){"undefined"!=typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function pd(e,t){return{usr:e.state,key:e.key,idx:t}}function md(e,t,n,r){return void 0===n&&(n=null),ud({pathname:"string"==typeof e?e:e.pathname,search:"",hash:""},"string"==typeof t?vd(t):t,{state:n,key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}function gd(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function vd(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}var yd,bd;function wd(e,t,n){return void 0===n&&(n="/"),function(e,t,n,r){let a="string"==typeof t?vd(t):t,i=Ad(a.pathname||"/",n);if(null==i)return null;let o=kd(e);!function(e){e.sort((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n]);return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)))}(o);let s=null;for(let l=0;null==s&&l<o.length;++l){let e=Ld(i);s=Nd(o[l],e,r)}return s}(e,t,n,!1)}function kd(e,t,n,r){void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r="");let a=(e,a,i)=>{let o={relativePath:void 0===i?e.path||"":i,caseSensitive:!0===e.caseSensitive,childrenIndex:a,route:e};o.relativePath.startsWith("/")&&(fd(o.relativePath.startsWith(r),'Absolute route path "'+o.relativePath+'" nested under path "'+r+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),o.relativePath=o.relativePath.slice(r.length));let s=zd([r,o.relativePath]),l=n.concat(o);e.children&&e.children.length>0&&(fd(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+s+'".'),kd(e.children,t,l,s)),(null!=e.path||e.index)&&t.push({path:s,score:Rd(s,e.index),routesMeta:l})};return e.forEach((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let r of _d(e.path))a(e,t,r);else a(e,t)}),t}function _d(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,a=n.endsWith("?"),i=n.replace(/\?$/,"");if(0===r.length)return a?[i,""]:[i];let o=_d(r.join("/")),s=[];return s.push(...o.map(e=>""===e?i:[i,e].join("/"))),a&&s.push(...o),s.map(t=>e.startsWith("/")&&""===t?"/":t)}(bd=yd||(yd={})).data="data",bd.deferred="deferred",bd.redirect="redirect",bd.error="error";const Sd=/^:[\w-]+$/,Ed=3,Id=2,Cd=1,Td=10,Pd=-2,xd=e=>"*"===e;function Rd(e,t){let n=e.split("/"),r=n.length;return n.some(xd)&&(r+=Pd),t&&(r+=Id),n.filter(e=>!xd(e)).reduce((e,t)=>e+(Sd.test(t)?Ed:""===t?Cd:Td),r)}function Nd(e,t,n){void 0===n&&(n=!1);let{routesMeta:r}=e,a={},i="/",o=[];for(let s=0;s<r.length;++s){let e=r[s],l=s===r.length-1,u="/"===i?t:t.slice(i.length)||"/",c=Od({path:e.relativePath,caseSensitive:e.caseSensitive,end:l},u),d=e.route;if(!c&&l&&n&&!r[r.length-1].route.index&&(c=Od({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},u)),!c)return null;Object.assign(a,c.params),o.push({params:a,pathname:zd([i,c.pathname]),pathnameBase:jd(zd([i,c.pathnameBase])),route:d}),"/"!==c.pathnameBase&&(i=zd([i,c.pathnameBase]))}return o}function Od(e,t){"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=!0);hd("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)"));e.endsWith("*")?(r.push({paramName:"*"}),a+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":""!==e&&"/"!==e&&(a+="(?:(?=\\/|$))");let i=new RegExp(a,t?void 0:"i");return[i,r]}(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let i=a[0],o=i.replace(/(.)\/+$/,"$1"),s=a.slice(1);return{params:r.reduce((e,t,n)=>{let{paramName:r,isOptional:a}=t;if("*"===r){let e=s[n]||"";o=i.slice(0,i.length-e.length).replace(/(.)\/+$/,"$1")}const l=s[n];return e[r]=a&&!l?void 0:(l||"").replace(/%2F/g,"/"),e},{}),pathname:i,pathnameBase:o,pattern:e}}function Ld(e){try{return e.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(t){return hd(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function Ad(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function Dd(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function Md(e,t){let n=function(e){return e.filter((e,t)=>0===t||e.route.path&&e.route.path.length>0)}(e);return t?n.map((e,t)=>t===n.length-1?e.pathname:e.pathnameBase):n.map(e=>e.pathnameBase)}function Ud(e,t,n,r){let a;void 0===r&&(r=!1),"string"==typeof e?a=vd(e):(a=ud({},e),fd(!a.pathname||!a.pathname.includes("?"),Dd("?","pathname","search",a)),fd(!a.pathname||!a.pathname.includes("#"),Dd("#","pathname","hash",a)),fd(!a.search||!a.search.includes("#"),Dd("#","search","hash",a)));let i,o=""===e||""===a.pathname,s=o?"/":a.pathname;if(null==s)i=n;else{let e=t.length-1;if(!r&&s.startsWith("..")){let t=s.split("/");for(;".."===t[0];)t.shift(),e-=1;a.pathname=t.join("/")}i=e>=0?t[e]:"/"}let l=function(e,t){void 0===t&&(t="/");let{pathname:n,search:r="",hash:a=""}="string"==typeof e?vd(e):e,i=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)}),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:i,search:Fd(r),hash:Vd(a)}}(a,i),u=s&&"/"!==s&&s.endsWith("/"),c=(o||"."===s)&&n.endsWith("/");return l.pathname.endsWith("/")||!u&&!c||(l.pathname+="/"),l}const zd=e=>e.join("/").replace(/\/\/+/g,"/"),jd=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Fd=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",Vd=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";const Hd=["post","put","patch","delete"];new Set(Hd);const $d=["get",...Hd];
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Bd(){return Bd=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Bd.apply(this,arguments)}new Set($d);const Wd=V.createContext(null),Kd=V.createContext(null),qd=V.createContext(null),Gd=V.createContext(null),Qd=V.createContext({outlet:null,matches:[],isDataRoute:!1}),Jd=V.createContext(null);function Yd(){return null!=V.useContext(Gd)}function Xd(){return Yd()||fd(!1),V.useContext(Gd).location}function Zd(e){V.useContext(qd).static||V.useLayoutEffect(e)}function ef(){let{isDataRoute:e}=V.useContext(Qd);return e?function(){let{router:e}=function(){let e=V.useContext(Wd);return e||fd(!1),e}(uf.UseNavigateStable),t=df(cf.UseNavigateStable),n=V.useRef(!1);return Zd(()=>{n.current=!0}),V.useCallback(function(r,a){void 0===a&&(a={}),n.current&&("number"==typeof r?e.navigate(r):e.navigate(r,Bd({fromRouteId:t},a)))},[e,t])}():function(){Yd()||fd(!1);let e=V.useContext(Wd),{basename:t,future:n,navigator:r}=V.useContext(qd),{matches:a}=V.useContext(Qd),{pathname:i}=Xd(),o=JSON.stringify(Md(a,n.v7_relativeSplatPath)),s=V.useRef(!1);return Zd(()=>{s.current=!0}),V.useCallback(function(n,a){if(void 0===a&&(a={}),!s.current)return;if("number"==typeof n)return void r.go(n);let l=Ud(n,JSON.parse(o),i,"path"===a.relative);null==e&&"/"!==t&&(l.pathname="/"===l.pathname?t:zd([t,l.pathname])),(a.replace?r.replace:r.push)(l,a.state,a)},[t,r,o,i,e])}()}function tf(){let{matches:e}=V.useContext(Qd),t=e[e.length-1];return t?t.params:{}}function nf(e,t){let{relative:n}=void 0===t?{}:t,{future:r}=V.useContext(qd),{matches:a}=V.useContext(Qd),{pathname:i}=Xd(),o=JSON.stringify(Md(a,r.v7_relativeSplatPath));return V.useMemo(()=>Ud(e,JSON.parse(o),i,"path"===n),[e,o,i,n])}function rf(e,t){return function(e,t,n,r){Yd()||fd(!1);let{navigator:a}=V.useContext(qd),{matches:i}=V.useContext(Qd),o=i[i.length-1],s=o?o.params:{};!o||o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u,c=Xd();if(t){var d;let e="string"==typeof t?vd(t):t;"/"===l||(null==(d=e.pathname)?void 0:d.startsWith(l))||fd(!1),u=e}else u=c;let f=u.pathname||"/",h=f;if("/"!==l){let e=l.replace(/^\//,"").split("/");h="/"+f.replace(/^\//,"").split("/").slice(e.length).join("/")}let p=wd(e,{pathname:h}),m=function(e,t,n,r){var a;void 0===t&&(t=[]);void 0===n&&(n=null);void 0===r&&(r=null);if(null==e){var i;if(!n)return null;if(n.errors)e=n.matches;else{if(!(null!=(i=r)&&i.v7_partialHydration&&0===t.length&&!n.initialized&&n.matches.length>0))return null;e=n.matches}}let o=e,s=null==(a=n)?void 0:a.errors;if(null!=s){let e=o.findIndex(e=>e.route.id&&void 0!==(null==s?void 0:s[e.route.id]));e>=0||fd(!1),o=o.slice(0,Math.min(o.length,e+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<o.length;c++){let e=o[c];if((e.route.HydrateFallback||e.route.hydrateFallbackElement)&&(u=c),e.route.id){let{loaderData:t,errors:r}=n,a=e.route.loader&&void 0===t[e.route.id]&&(!r||void 0===r[e.route.id]);if(e.route.lazy||a){l=!0,o=u>=0?o.slice(0,u+1):[o[0]];break}}}return o.reduceRight((e,r,a)=>{let i,c=!1,d=null,f=null;var h;n&&(i=s&&r.route.id?s[r.route.id]:void 0,d=r.route.errorElement||of,l&&(u<0&&0===a?(h="route-fallback",!1||ff[h]||(ff[h]=!0),c=!0,f=null):u===a&&(c=!0,f=r.route.hydrateFallbackElement||null)));let p=t.concat(o.slice(0,a+1)),m=()=>{let t;return t=i?d:c?f:r.route.Component?V.createElement(r.route.Component,null):r.route.element?r.route.element:e,V.createElement(lf,{match:r,routeContext:{outlet:e,matches:p,isDataRoute:null!=n},children:t})};return n&&(r.route.ErrorBoundary||r.route.errorElement||0===a)?V.createElement(sf,{location:n.location,revalidation:n.revalidation,component:d,error:i,children:m(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):m()},null)}(p&&p.map(e=>Object.assign({},e,{params:Object.assign({},s,e.params),pathname:zd([l,a.encodeLocation?a.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?l:zd([l,a.encodeLocation?a.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])})),i,n,r);if(t&&m)return V.createElement(Gd.Provider,{value:{location:Bd({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:id.Pop}},m);return m}(e,t)}function af(){let e=function(){var e;let t=V.useContext(Jd),n=function(){let e=V.useContext(Kd);return e||fd(!1),e}(cf.UseRouteError),r=df(cf.UseRouteError);if(void 0!==t)return t;return null==(e=n.errors)?void 0:e[r]}(),t=function(e){return null!=e&&"number"==typeof e.status&&"string"==typeof e.statusText&&"boolean"==typeof e.internal&&"data"in e}(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return V.createElement(V.Fragment,null,V.createElement("h2",null,"Unexpected Application Error!"),V.createElement("h3",{style:{fontStyle:"italic"}},t),n?V.createElement("pre",{style:r},n):null,null)}const of=V.createElement(af,null);class sf extends V.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?V.createElement(Qd.Provider,{value:this.props.routeContext},V.createElement(Jd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function lf(e){let{routeContext:t,match:n,children:r}=e,a=V.useContext(Wd);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),V.createElement(Qd.Provider,{value:t},r)}var uf=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(uf||{}),cf=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(cf||{});function df(e){let t=function(){let e=V.useContext(Qd);return e||fd(!1),e}(),n=t.matches[t.matches.length-1];return n.route.id||fd(!1),n.route.id}const ff={};function hf(e){let{to:t,replace:n,state:r,relative:a}=e;Yd()||fd(!1);let{future:i,static:o}=V.useContext(qd),{matches:s}=V.useContext(Qd),{pathname:l}=Xd(),u=ef(),c=Ud(t,Md(s,i.v7_relativeSplatPath),l,"path"===a),d=JSON.stringify(c);return V.useEffect(()=>u(JSON.parse(d),{replace:n,state:r,relative:a}),[u,d,a,n,r]),null}function pf(e){fd(!1)}function mf(e){let{basename:t="/",children:n=null,location:r,navigationType:a=id.Pop,navigator:i,static:o=!1,future:s}=e;Yd()&&fd(!1);let l=t.replace(/^\/*/,"/"),u=V.useMemo(()=>({basename:l,navigator:i,static:o,future:Bd({v7_relativeSplatPath:!1},s)}),[l,s,i,o]);"string"==typeof r&&(r=vd(r));let{pathname:c="/",search:d="",hash:f="",state:h=null,key:p="default"}=r,m=V.useMemo(()=>{let e=Ad(c,l);return null==e?null:{location:{pathname:e,search:d,hash:f,state:h,key:p},navigationType:a}},[l,c,d,f,h,p,a]);return null==m?null:V.createElement(qd.Provider,{value:u},V.createElement(Gd.Provider,{children:n,value:m}))}function gf(e){let{children:t,location:n}=e;return rf(vf(t),n)}function vf(e,t){void 0===t&&(t=[]);let n=[];return V.Children.forEach(e,(e,r)=>{if(!V.isValidElement(e))return;let a=[...t,r];if(e.type===V.Fragment)return void n.push.apply(n,vf(e.props.children,a));e.type!==pf&&fd(!1),e.props.index&&e.props.children&&fd(!1);let i={id:e.props.id||a.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(i.children=vf(e.props.children,a)),n.push(i)}),n}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function yf(){return yf=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},yf.apply(this,arguments)}function bf(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}new Promise(()=>{});const wf=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],kf=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"];try{window.__reactRouterVersion="6"}catch(Ub){}const _f=V.createContext({isTransitioning:!1}),Sf=$.startTransition;function Ef(e){let{basename:t,children:n,future:r,window:a}=e,i=V.useRef();null==i.current&&(i.current=dd({window:a,v5Compat:!0}));let o=i.current,[s,l]=V.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=V.useCallback(e=>{u&&Sf?Sf(()=>l(e)):l(e)},[l,u]);return V.useLayoutEffect(()=>o.listen(c),[o,c]),V.useEffect(()=>{return null==(e=r)||e.v7_startTransition,void 0===(null==e?void 0:e.v7_relativeSplatPath)&&(!t||t.v7_relativeSplatPath),void(t&&(t.v7_fetcherPersist,t.v7_normalizeFormMethod,t.v7_partialHydration,t.v7_skipActionErrorRevalidation));var e,t},[r]),V.createElement(mf,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:o,future:r})}const If="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement,Cf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Tf=V.forwardRef(function(e,t){let n,{onClick:r,relative:a,reloadDocument:i,replace:o,state:s,target:l,to:u,preventScrollReset:c,viewTransition:d}=e,f=bf(e,wf),{basename:h}=V.useContext(qd),p=!1;if("string"==typeof u&&Cf.test(u)&&(n=u,If))try{let e=new URL(window.location.href),t=u.startsWith("//")?new URL(e.protocol+u):new URL(u),n=Ad(t.pathname,h);t.origin===e.origin&&null!=n?u=n+t.search+t.hash:p=!0}catch(Ub){}let m=function(e,t){let{relative:n}=void 0===t?{}:t;Yd()||fd(!1);let{basename:r,navigator:a}=V.useContext(qd),{hash:i,pathname:o,search:s}=nf(e,{relative:n}),l=o;return"/"!==r&&(l="/"===o?r:zd([r,o])),a.createHref({pathname:l,search:s,hash:i})}(u,{relative:a}),g=function(e,t){let{target:n,replace:r,state:a,preventScrollReset:i,relative:o,viewTransition:s}=void 0===t?{}:t,l=ef(),u=Xd(),c=nf(e,{relative:o});return V.useCallback(t=>{if(function(e,t){return!(0!==e.button||t&&"_self"!==t||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e))}(t,n)){t.preventDefault();let n=void 0!==r?r:gd(u)===gd(c);l(e,{replace:n,state:a,preventScrollReset:i,relative:o,viewTransition:s})}},[u,l,c,r,a,n,e,i,o,s])}(u,{replace:o,state:s,target:l,preventScrollReset:c,relative:a,viewTransition:d});return V.createElement("a",yf({},f,{href:n||m,onClick:p||i?r:function(e){r&&r(e),e.defaultPrevented||g(e)},ref:t,target:l}))}),Pf=V.forwardRef(function(e,t){let{"aria-current":n="page",caseSensitive:r=!1,className:a="",end:i=!1,style:o,to:s,viewTransition:l,children:u}=e,c=bf(e,kf),d=nf(s,{relative:c.relative}),f=Xd(),h=V.useContext(Kd),{navigator:p,basename:m}=V.useContext(qd),g=null!=h&&function(e,t){void 0===t&&(t={});let n=V.useContext(_f);null==n&&fd(!1);let{basename:r}=function(){let e=V.useContext(Wd);return e||fd(!1),e}(xf.useViewTransitionState),a=nf(e,{relative:t.relative});if(!n.isTransitioning)return!1;let i=Ad(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Ad(n.nextLocation.pathname,r)||n.nextLocation.pathname;return null!=Od(a.pathname,o)||null!=Od(a.pathname,i)}(d)&&!0===l,v=p.encodeLocation?p.encodeLocation(d).pathname:d.pathname,y=f.pathname,b=h&&h.navigation&&h.navigation.location?h.navigation.location.pathname:null;r||(y=y.toLowerCase(),b=b?b.toLowerCase():null,v=v.toLowerCase()),b&&m&&(b=Ad(b,m)||b);const w="/"!==v&&v.endsWith("/")?v.length-1:v.length;let k,_=y===v||!i&&y.startsWith(v)&&"/"===y.charAt(w),S=null!=b&&(b===v||!i&&b.startsWith(v)&&"/"===b.charAt(v.length)),E={isActive:_,isPending:S,isTransitioning:g},I=_?n:void 0;k="function"==typeof a?a(E):[a,_?"active":null,S?"pending":null,g?"transitioning":null].filter(Boolean).join(" ");let C="function"==typeof o?o(E):o;return V.createElement(Tf,yf({},c,{"aria-current":I,className:k,ref:t,style:C,to:s,viewTransition:l}),"function"==typeof u?u(E):u)});var xf,Rf,Nf,Of;(Rf=xf||(xf={})).UseScrollRestoration="useScrollRestoration",Rf.UseSubmit="useSubmit",Rf.UseSubmitFetcher="useSubmitFetcher",Rf.UseFetcher="useFetcher",Rf.useViewTransitionState="useViewTransitionState",(Of=Nf||(Nf={})).UseFetcher="useFetcher",Of.UseFetchers="useFetchers",Of.UseScrollRestoration="useScrollRestoration";const Lf={},Af=function(e,t,n){if(!t||0===t.length)return e();const r=document.getElementsByTagName("link");return Promise.all(t.map(e=>{if((e=function(e){return"/"+e}(e))in Lf)return;Lf[e]=!0;const t=e.endsWith(".css"),a=t?'[rel="stylesheet"]':"";if(!!n)for(let n=r.length-1;n>=0;n--){const a=r[n];if(a.href===e&&(!t||"stylesheet"===a.rel))return}else if(document.querySelector(`link[href="${e}"]${a}`))return;const i=document.createElement("link");return i.rel=t?"stylesheet":"modulepreload",t||(i.as="script",i.crossOrigin=""),i.href=e,document.head.appendChild(i),t?new Promise((t,n)=>{i.addEventListener("load",t),i.addEventListener("error",()=>n(new Error(`Unable to preload CSS for ${e}`)))}):void 0})).then(()=>e()).catch(e=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e})},Df=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let a=e.charCodeAt(r);a<128?t[n++]=a:a<2048?(t[n++]=a>>6|192,t[n++]=63&a|128):55296==(64512&a)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(a=65536+((1023&a)<<10)+(1023&e.charCodeAt(++r)),t[n++]=a>>18|240,t[n++]=a>>12&63|128,t[n++]=a>>6&63|128,t[n++]=63&a|128):(t[n++]=a>>12|224,t[n++]=a>>6&63|128,t[n++]=63&a|128)}return t},Mf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let a=0;a<e.length;a+=3){const t=e[a],i=a+1<e.length,o=i?e[a+1]:0,s=a+2<e.length,l=s?e[a+2]:0,u=t>>2,c=(3&t)<<4|o>>4;let d=(15&o)<<2|l>>6,f=63&l;s||(f=64,i||(d=64)),r.push(n[u],n[c],n[d],n[f])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Df(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const a=e[n++];if(a<128)t[r++]=String.fromCharCode(a);else if(a>191&&a<224){const i=e[n++];t[r++]=String.fromCharCode((31&a)<<6|63&i)}else if(a>239&&a<365){const i=((7&a)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(i>>10)),t[r++]=String.fromCharCode(56320+(1023&i))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&a)<<12|(63&i)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let a=0;a<e.length;){const t=n[e.charAt(a++)],i=a<e.length?n[e.charAt(a)]:0;++a;const o=a<e.length?n[e.charAt(a)]:64;++a;const s=a<e.length?n[e.charAt(a)]:64;if(++a,null==t||null==i||null==o||null==s)throw new Uf;const l=t<<2|i>>4;if(r.push(l),64!==o){const e=i<<4&240|o>>2;if(r.push(e),64!==s){const e=o<<6&192|s;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Uf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const zf=function(e){return function(e){const t=Df(e);return Mf.encodeByteArray(t,!0)}(e).replace(/\./g,"")},jf=function(e){try{return Mf.decodeString(e,!0)}catch(Ub){console.error("base64Decode failed: ",Ub)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ff=()=>
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,Vf=()=>{try{return Ff()||(()=>{if("undefined"==typeof process||void 0===process.env)return;const e={}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(Ub){return}const t=e&&jf(e[1]);return t&&JSON.parse(t)})()}catch(Ub){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${Ub}`)}},Hf=()=>{var e;return null==(e=Vf())?void 0:e.config},$f=e=>{var t;return null==(t=Vf())?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wf(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}const Kf={};let qf=!1;function Gf(e,t){if("undefined"==typeof window||"undefined"==typeof document||!Wf(window.location.host)||Kf[e]===t||Kf[e]||qf)return;function n(e){return`__firebase__banner__${e}`}Kf[e]=t;const r="__firebase__banner",a=function(){const e={prod:[],emulator:[]};for(const t of Object.keys(Kf))Kf[t]?e.emulator.push(t):e.prod.push(t);return e}().prod.length>0;function i(){const e=document.createElement("span");return e.style.cursor="pointer",e.style.marginLeft="16px",e.style.fontSize="24px",e.innerHTML=" &times;",e.onclick=()=>{qf=!0,function(){const e=document.getElementById(r);e&&e.remove()}()},e}function o(){const e=function(e){let t=document.getElementById(e),n=!1;return t||(t=document.createElement("div"),t.setAttribute("id",e),n=!0),{created:n,element:t}}(r),t=n("text"),o=document.getElementById(t)||document.createElement("span"),s=n("learnmore"),l=document.getElementById(s)||document.createElement("a"),u=n("preprendIcon"),c=document.getElementById(u)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(e.created){const t=e.element;!function(e){e.style.display="flex",e.style.background="#7faaf0",e.style.position="fixed",e.style.bottom="5px",e.style.left="5px",e.style.padding=".5em",e.style.borderRadius="5px",e.style.alignItems="center"}(t),function(e,t){e.setAttribute("id",t),e.innerText="Learn more",e.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",e.setAttribute("target","__blank"),e.style.paddingLeft="5px",e.style.textDecoration="underline"}(l,s);const n=i();!function(e,t){e.setAttribute("width","24"),e.setAttribute("id",t),e.setAttribute("height","24"),e.setAttribute("viewBox","0 0 24 24"),e.setAttribute("fill","none"),e.style.marginLeft="-6px"}(c,u),t.append(c,o,l,n),document.body.appendChild(t)}a?(o.innerText="Preview backend disconnected.",c.innerHTML='<g clip-path="url(#clip0_6013_33858)">\n<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>\n</g>\n<defs>\n<clipPath id="clip0_6013_33858">\n<rect width="24" height="24" fill="white"/>\n</clipPath>\n</defs>'):(c.innerHTML='<g clip-path="url(#clip0_6083_34804)">\n<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>\n</g>\n<defs>\n<clipPath id="clip0_6083_34804">\n<rect width="24" height="24" fill="white"/>\n</clipPath>\n</defs>',o.innerText="Preview backend running in this workspace."),o.setAttribute("id",t)}"loading"===document.readyState?window.addEventListener("DOMContentLoaded",o):o()}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qf(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function Jf(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function Yf(){try{return"object"==typeof indexedDB}catch(Ub){return!1}}function Xf(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(r);a.onsuccess=()=>{a.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},a.onupgradeneeded=()=>{n=!1},a.onerror=()=>{var e;t((null==(e=a.error)?void 0:e.message)||"")}}catch(n){t(n)}})}class Zf extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,Zf.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,eh.prototype.create)}}class eh{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,a=this.errors[e],i=a?function(e,t){return e.replace(th,(e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`})}(a,n):"Error",o=`${this.serviceName}: ${i} (${r}).`;return new Zf(r,o,n)}}const th=/\{\$([^}]+)}/g;function nh(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const a of n){if(!r.includes(a))return!1;const n=e[a],i=t[a];if(rh(n)&&rh(i)){if(!nh(n,i))return!1}else if(n!==i)return!1}for(const a of r)if(!n.includes(a))return!1;return!0}function rh(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ah(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function ih(e){const t={};return e.replace(/^\?/,"").split("&").forEach(e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}}),t}function oh(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}class sh{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=lh),void 0===r.error&&(r.error=lh),void 0===r.complete&&(r.complete=lh);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(Ub){}}),this.observers.push(r),a}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(Ub){"undefined"!=typeof console&&console.error&&console.error(Ub)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function lh(){}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uh(e,t=1e3,n=2){const r=t*Math.pow(n,e),a=Math.round(.5*r*(Math.random()-.5)*2);return Math.min(144e5,r+a)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ch(e){return e&&e._delegate?e._delegate:e}class dh{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fh="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new Bf;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(Ub){}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),n=(null==e?void 0:e.optional)??!1;if(!this.isInitialized(t)&&!this.shouldAutoInitialize()){if(n)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:t})}catch(Ub){if(n)return null;throw Ub}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:fh})}catch(Ub){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(Ub){}}}}clearInstance(e=fh){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=fh){return this.instances.has(e)}getOptions(e=fh){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[a,i]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(a)&&i.resolve(r)}return r}onInit(e,t){const n=this.normalizeInstanceIdentifier(t),r=this.onInitCallbacks.get(n)??new Set;r.add(e),this.onInitCallbacks.set(n,r);const a=this.instances.get(n);return a&&e(a,n),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,r===fh?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}var r;return n||null}normalizeInstanceIdentifier(e=fh){return this.component?this.component.multipleInstances?e:fh:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class ph{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new hh(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var mh,gh;(gh=mh||(mh={}))[gh.DEBUG=0]="DEBUG",gh[gh.VERBOSE=1]="VERBOSE",gh[gh.INFO=2]="INFO",gh[gh.WARN=3]="WARN",gh[gh.ERROR=4]="ERROR",gh[gh.SILENT=5]="SILENT";const vh={debug:mh.DEBUG,verbose:mh.VERBOSE,info:mh.INFO,warn:mh.WARN,error:mh.ERROR,silent:mh.SILENT},yh=mh.INFO,bh={[mh.DEBUG]:"log",[mh.VERBOSE]:"log",[mh.INFO]:"info",[mh.WARN]:"warn",[mh.ERROR]:"error"},wh=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),a=bh[t];if(!a)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[a](`[${r}]  ${e.name}:`,...n)};class kh{constructor(e){this.name=e,this._logLevel=yh,this._logHandler=wh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in mh))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?vh[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,mh.DEBUG,...e),this._logHandler(this,mh.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,mh.VERBOSE,...e),this._logHandler(this,mh.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,mh.INFO,...e),this._logHandler(this,mh.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,mh.WARN,...e),this._logHandler(this,mh.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,mh.ERROR,...e),this._logHandler(this,mh.ERROR,...e)}}let _h,Sh;const Eh=new WeakMap,Ih=new WeakMap,Ch=new WeakMap,Th=new WeakMap,Ph=new WeakMap;let xh={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Ih.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Ch.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Oh(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Rh(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Sh||(Sh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(Lh(this),t),Oh(Eh.get(this))}:function(...t){return Oh(e.apply(Lh(this),t))}:function(t,...n){const r=e.call(Lh(this),t,...n);return Ch.set(r,t.sort?t.sort():[t]),Oh(r)}}function Nh(e){return"function"==typeof e?Rh(e):(e instanceof IDBTransaction&&function(e){if(Ih.has(e))return;const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",i),e.removeEventListener("abort",i)},a=()=>{t(),r()},i=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",a),e.addEventListener("error",i),e.addEventListener("abort",i)});Ih.set(e,t)}(e),t=e,(_h||(_h=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some(e=>t instanceof e)?new Proxy(e,xh):e);var t}function Oh(e){if(e instanceof IDBRequest)return function(e){const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("success",a),e.removeEventListener("error",i)},a=()=>{t(Oh(e.result)),r()},i=()=>{n(e.error),r()};e.addEventListener("success",a),e.addEventListener("error",i)});return t.then(t=>{t instanceof IDBCursor&&Eh.set(t,e)}).catch(()=>{}),Ph.set(t,e),t}(e);if(Th.has(e))return Th.get(e);const t=Nh(e);return t!==e&&(Th.set(e,t),Ph.set(t,e)),t}const Lh=e=>Ph.get(e);function Ah(e,t,{blocked:n,upgrade:r,blocking:a,terminated:i}={}){const o=indexedDB.open(e,t),s=Oh(o);return r&&o.addEventListener("upgradeneeded",e=>{r(Oh(o.result),e.oldVersion,e.newVersion,Oh(o.transaction),e)}),n&&o.addEventListener("blocked",e=>n(e.oldVersion,e.newVersion,e)),s.then(e=>{i&&e.addEventListener("close",()=>i()),a&&e.addEventListener("versionchange",e=>a(e.oldVersion,e.newVersion,e))}).catch(()=>{}),s}const Dh=["get","getKey","getAll","getAllKeys","count"],Mh=["put","add","delete","clear"],Uh=new Map;function zh(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(Uh.get(t))return Uh.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,a=Mh.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!a&&!Dh.includes(n))return;const i=async function(e,...t){const i=this.transaction(e,a?"readwrite":"readonly");let o=i.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),a&&i.done]))[0]};return Uh.set(t,i),i}xh=(e=>({...e,get:(t,n,r)=>zh(t,n)||e.get(t,n,r),has:(t,n)=>!!zh(t,n)||e.has(t,n)}))(xh);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jh{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}const Fh="@firebase/app",Vh="0.14.2",Hh=new kh("@firebase/app"),$h="@firebase/app-compat",Bh="@firebase/analytics-compat",Wh="@firebase/analytics",Kh="@firebase/app-check-compat",qh="@firebase/app-check",Gh="@firebase/auth",Qh="@firebase/auth-compat",Jh="@firebase/database",Yh="@firebase/data-connect",Xh="@firebase/database-compat",Zh="@firebase/functions",ep="@firebase/functions-compat",tp="@firebase/installations",np="@firebase/installations-compat",rp="@firebase/messaging",ap="@firebase/messaging-compat",ip="@firebase/performance",op="@firebase/performance-compat",sp="@firebase/remote-config",lp="@firebase/remote-config-compat",up="@firebase/storage",cp="@firebase/storage-compat",dp="@firebase/firestore",fp="@firebase/ai",hp="@firebase/firestore-compat",pp="firebase",mp="[DEFAULT]",gp={[Fh]:"fire-core",[$h]:"fire-core-compat",[Wh]:"fire-analytics",[Bh]:"fire-analytics-compat",[qh]:"fire-app-check",[Kh]:"fire-app-check-compat",[Gh]:"fire-auth",[Qh]:"fire-auth-compat",[Jh]:"fire-rtdb",[Yh]:"fire-data-connect",[Xh]:"fire-rtdb-compat",[Zh]:"fire-fn",[ep]:"fire-fn-compat",[tp]:"fire-iid",[np]:"fire-iid-compat",[rp]:"fire-fcm",[ap]:"fire-fcm-compat",[ip]:"fire-perf",[op]:"fire-perf-compat",[sp]:"fire-rc",[lp]:"fire-rc-compat",[up]:"fire-gcs",[cp]:"fire-gcs-compat",[dp]:"fire-fst",[hp]:"fire-fst-compat",[fp]:"fire-vertex","fire-js":"fire-js",[pp]:"fire-js-all"},vp=new Map,yp=new Map,bp=new Map;function wp(e,t){try{e.container.addComponent(t)}catch(Ub){Hh.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,Ub)}}function kp(e){const t=e.name;if(bp.has(t))return Hh.debug(`There were multiple attempts to register component ${t}.`),!1;bp.set(t,e);for(const n of vp.values())wp(n,e);for(const n of yp.values())wp(n,e);return!0}function _p(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function Sp(e){return null!=e&&void 0!==e.settings}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ep=new eh("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ip{constructor(e,t,n){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new dh("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ep.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cp="12.2.0";function Tp(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const r={name:mp,automaticDataCollectionEnabled:!0,...t},a=r.name;if("string"!=typeof a||!a)throw Ep.create("bad-app-name",{appName:String(a)});if(n||(n=Hf()),!n)throw Ep.create("no-options");const i=vp.get(a);if(i){if(nh(n,i.options)&&nh(r,i.config))return i;throw Ep.create("duplicate-app",{appName:a})}const o=new ph(a);for(const l of bp.values())o.addComponent(l);const s=new Ip(n,r,o);return vp.set(a,s),s}function Pp(e=mp){const t=vp.get(e);if(!t&&e===mp&&Hf())return Tp();if(!t)throw Ep.create("no-app",{appName:e});return t}function xp(e,t,n){let r=gp[e]??e;n&&(r+=`-${n}`);const a=r.match(/\s|\//),i=t.match(/\s|\//);if(a||i){const e=[`Unable to register library "${r}" with version "${t}":`];return a&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),a&&i&&e.push("and"),i&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Hh.warn(e.join(" "))}kp(new dh(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rp="firebase-heartbeat-store";let Np=null;function Op(){return Np||(Np=Ah("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(Rp)}catch(Ub){console.warn(Ub)}}}).catch(e=>{throw Ep.create("idb-open",{originalErrorMessage:e.message})})),Np}async function Lp(e,t){try{const n=(await Op()).transaction(Rp,"readwrite"),r=n.objectStore(Rp);await r.put(t,Ap(e)),await n.done}catch(Ub){if(Ub instanceof Zf)Hh.warn(Ub.message);else{const t=Ep.create("idb-set",{originalErrorMessage:null==Ub?void 0:Ub.message});Hh.warn(t.message)}}}function Ap(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Up(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){var e,t;try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Mp();if(null==(null==(e=this._heartbeatsCache)?void 0:e.heartbeats)&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==(null==(t=this._heartbeatsCache)?void 0:t.heartbeats)))return;if(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(e=>e.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>30){const e=function(e){if(0===e.length)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(e,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(Ub){Hh.warn(Ub)}}async getHeartbeatsHeader(){var e;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null==(e=this._heartbeatsCache)?void 0:e.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const t=Mp(),{heartbeatsToSend:n,unsentEntries:r}=function(e,t=1024){const n=[];let r=e.slice();for(const a of e){const e=n.find(e=>e.agent===a.agent);if(e){if(e.dates.push(a.date),zp(n)>t){e.dates.pop();break}}else if(n.push({agent:a.agent,dates:[a.date]}),zp(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),a=zf(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(Ub){return Hh.warn(Ub),""}}}function Mp(){return(new Date).toISOString().substring(0,10)}class Up{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!Yf()&&Xf().then(()=>!0).catch(()=>!1)}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{const t=(await Op()).transaction(Rp),n=await t.objectStore(Rp).get(Ap(e));return await t.done,n}catch(Ub){if(Ub instanceof Zf)Hh.warn(Ub.message);else{const t=Ep.create("idb-get",{originalErrorMessage:null==Ub?void 0:Ub.message});Hh.warn(t.message)}}}(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const t=await this.read();return Lp(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){if(await this._canUseIndexedDBPromise){const t=await this.read();return Lp(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:[...t.heartbeats,...e.heartbeats]})}}}function zp(e){return zf(JSON.stringify({version:2,heartbeats:e})).length}var jp;jp="",kp(new dh("platform-logger",e=>new jh(e),"PRIVATE")),kp(new dh("heartbeat",e=>new Dp(e),"PRIVATE")),xp(Fh,Vh,jp),xp(Fh,Vh,"esm2020"),xp("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
xp("firebase","12.2.1","app");const Fp="@firebase/installations",Vp="0.6.19",Hp=1e4,$p=`w:${Vp}`,Bp="FIS_v2",Wp=36e5,Kp=new eh("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function qp(e){return e instanceof Zf&&e.code.includes("request-failed")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gp({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function Qp(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}async function Jp(e,t){const n=(await t.json()).error;return Kp.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function Yp({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Xp(e,{refreshToken:t}){const n=Yp(e);return n.append("Authorization",function(e){return`${Bp} ${e}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)),n}async function Zp(e){const t=await e();return t.status>=500&&t.status<600?e():t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function em(e){return new Promise(t=>{setTimeout(t,e)})}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const tm=/^[cdef][\w-]{21}$/;function nm(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const t=function(e){const t=(n=e,btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_"));var n;return t.substr(0,22)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);return tm.test(t)?t:""}catch{return""}}function rm(e){return`${e.appName}!${e.appId}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const am=new Map;function im(e,t){const n=rm(e);om(n,t),function(e,t){const n=function(){!sm&&"BroadcastChannel"in self&&(sm=new BroadcastChannel("[Firebase] FID Change"),sm.onmessage=e=>{om(e.data.key,e.data.fid)});return sm}();n&&n.postMessage({key:e,fid:t});0===am.size&&sm&&(sm.close(),sm=null)}(n,t)}function om(e,t){const n=am.get(e);if(n)for(const r of n)r(t)}let sm=null;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const lm="firebase-installations-store";let um=null;function cm(){return um||(um=Ah("firebase-installations-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(lm)}})),um}async function dm(e,t){const n=rm(e),r=(await cm()).transaction(lm,"readwrite"),a=r.objectStore(lm),i=await a.get(n);return await a.put(t,n),await r.done,i&&i.fid===t.fid||im(e,t.fid),t}async function fm(e){const t=rm(e),n=(await cm()).transaction(lm,"readwrite");await n.objectStore(lm).delete(t),await n.done}async function hm(e,t){const n=rm(e),r=(await cm()).transaction(lm,"readwrite"),a=r.objectStore(lm),i=await a.get(n),o=t(i);return void 0===o?await a.delete(n):await a.put(o,n),await r.done,!o||i&&i.fid===o.fid||im(e,o.fid),o}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pm(e){let t;const n=await hm(e.appConfig,n=>{const r=function(e){const t=e||{fid:nm(),registrationStatus:0};return vm(t)}(n),a=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){return{installationEntry:t,registrationPromise:Promise.reject(Kp.create("app-offline"))}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=async function(e,t){try{const n=await async function({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=Gp(e),a=Yp(e),i=t.getImmediate({optional:!0});if(i){const e=await i.getHeartbeatsHeader();e&&a.append("x-firebase-client",e)}const o={fid:n,authVersion:Bp,appId:e.appId,sdkVersion:$p},s={method:"POST",headers:a,body:JSON.stringify(o)},l=await Zp(()=>fetch(r,s));if(l.ok){const e=await l.json();return{fid:e.fid||n,registrationStatus:2,refreshToken:e.refreshToken,authToken:Qp(e.authToken)}}throw await Jp("Create Installation",l)}(e,t);return dm(e.appConfig,n)}catch(Ub){throw qp(Ub)&&409===Ub.customData.serverCode?await fm(e.appConfig):await dm(e.appConfig,{fid:t.fid,registrationStatus:0}),Ub}}(e,n);return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:mm(e)}:{installationEntry:t}}(e,r);return t=a.registrationPromise,a.installationEntry});return""===n.fid?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function mm(e){let t=await gm(e.appConfig);for(;1===t.registrationStatus;)await em(100),t=await gm(e.appConfig);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await pm(e);return n||t}return t}function gm(e){return hm(e,e=>{if(!e)throw Kp.create("installation-not-found");return vm(e)})}function vm(e){return 1===(t=e).registrationStatus&&t.registrationTime+Hp<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}async function ym({appConfig:e,heartbeatServiceProvider:t},n){const r=function(e,{fid:t}){return`${Gp(e)}/${t}/authTokens:generate`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,n),a=Xp(e,n),i=t.getImmediate({optional:!0});if(i){const e=await i.getHeartbeatsHeader();e&&a.append("x-firebase-client",e)}const o={installation:{sdkVersion:$p,appId:e.appId}},s={method:"POST",headers:a,body:JSON.stringify(o)},l=await Zp(()=>fetch(r,s));if(l.ok){return Qp(await l.json())}throw await Jp("Generate Auth Token",l)}async function bm(e,t=!1){let n;const r=await hm(e.appConfig,r=>{if(!km(r))throw Kp.create("not-registered");const a=r.authToken;if(!t&&function(e){return 2===e.requestStatus&&!function(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Wp}(e)}(a))return r;if(1===a.requestStatus)return n=async function(e,t){let n=await wm(e.appConfig);for(;1===n.authToken.requestStatus;)await em(100),n=await wm(e.appConfig);const r=n.authToken;return 0===r.requestStatus?bm(e,t):r}(e,t),r;{if(!navigator.onLine)throw Kp.create("app-offline");const t=function(e){const t={requestStatus:1,requestTime:Date.now()};return{...e,authToken:t}}(r);return n=async function(e,t){try{const n=await ym(e,t),r={...t,authToken:n};return await dm(e.appConfig,r),n}catch(Ub){if(!qp(Ub)||401!==Ub.customData.serverCode&&404!==Ub.customData.serverCode){const n={...t,authToken:{requestStatus:0}};await dm(e.appConfig,n)}else await fm(e.appConfig);throw Ub}}(e,t),t}});return n?await n:r.authToken}function wm(e){return hm(e,e=>{if(!km(e))throw Kp.create("not-registered");const t=e.authToken;return 1===(n=t).requestStatus&&n.requestTime+Hp<Date.now()?{...e,authToken:{requestStatus:0}}:e;var n;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */})}function km(e){return void 0!==e&&2===e.registrationStatus}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function _m(e,t=!1){const n=e;await async function(e){const{registrationPromise:t}=await pm(e);t&&await t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n);return(await bm(n,t)).token}function Sm(e){return Kp.create("missing-app-config-values",{valueName:e})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Em="installations",Im=e=>{const t=_p(e.getProvider("app").getImmediate(),Em).getImmediate();return{getId:()=>async function(e){const t=e,{installationEntry:n,registrationPromise:r}=await pm(t);return r?r.catch(console.error):bm(t).catch(console.error),n.fid}(t),getToken:e=>_m(t,e)}};kp(new dh(Em,e=>{const t=e.getProvider("app").getImmediate(),n=function(e){if(!e||!e.options)throw Sm("App Configuration");if(!e.name)throw Sm("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Sm(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t);return{app:t,appConfig:n,heartbeatServiceProvider:_p(t,"heartbeat"),_delete:()=>Promise.resolve()}},"PUBLIC")),kp(new dh("installations-internal",Im,"PRIVATE")),xp(Fp,Vp),xp(Fp,Vp,"esm2020");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Cm="analytics",Tm="https://www.googletagmanager.com/gtag/js",Pm=new kh("@firebase/analytics"),xm=new eh("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Rm(e){if(!e.startsWith(Tm)){const t=xm.create("invalid-gtag-resource",{gtagURL:e});return Pm.warn(t.message),""}return e}function Nm(e){return Promise.all(e.map(e=>e.catch(e=>e)))}function Om(e,t){const n=function(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}("firebase-js-sdk-policy",{createScriptURL:Rm}),r=document.createElement("script"),a=`${Tm}?l=${e}&id=${t}`;r.src=n?null==n?void 0:n.createScriptURL(a):a,r.async=!0,document.head.appendChild(r)}function Lm(e,t,n,r){return async function(a,...i){try{if("event"===a){const[r,a]=i;await async function(e,t,n,r,a){try{let i=[];if(a&&a.send_to){let e=a.send_to;Array.isArray(e)||(e=[e]);const r=await Nm(n);for(const n of e){const e=r.find(e=>e.measurementId===n),a=e&&t[e.appId];if(!a){i=[];break}i.push(a)}}0===i.length&&(i=Object.values(t)),await Promise.all(i),e("event",r,a||{})}catch(Ub){Pm.error(Ub)}}(e,t,n,r,a)}else if("config"===a){const[a,o]=i;await async function(e,t,n,r,a,i){const o=r[a];try{if(o)await t[o];else{const e=(await Nm(n)).find(e=>e.measurementId===a);e&&await t[e.appId]}}catch(Ub){Pm.error(Ub)}e("config",a,i)}(e,t,n,r,a,o)}else if("consent"===a){const[t,n]=i;e("consent",t,n)}else if("get"===a){const[t,n,r]=i;e("get",t,n,r)}else if("set"===a){const[t]=i;e("set",t)}else e(a,...i)}catch(Ub){Pm.error(Ub)}}}const Am=new class{constructor(e={},t=1e3){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}};function Dm(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Mm(e,t=Am,n){const{appId:r,apiKey:a,measurementId:i}=e.options;if(!r)throw xm.create("no-app-id");if(!a){if(i)return{measurementId:i,appId:r};throw xm.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},s=new zm;return setTimeout(async()=>{s.abort()},void 0!==n?n:6e4),Um({appId:r,apiKey:a,measurementId:i},o,s,t)}async function Um(e,{throttleEndTimeMillis:t,backoffCount:n},r,a=Am){var i;const{appId:o,measurementId:s}=e;try{await function(e,t){return new Promise((n,r)=>{const a=Math.max(t-Date.now(),0),i=setTimeout(n,a);e.addEventListener(()=>{clearTimeout(i),r(xm.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}(r,t)}catch(Ub){if(s)return Pm.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${null==Ub?void 0:Ub.message}]`),{appId:o,measurementId:s};throw Ub}try{const t=await async function(e){var t;const{appId:n,apiKey:r}=e,a={method:"GET",headers:Dm(r)},i="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",n),o=await fetch(i,a);if(200!==o.status&&304!==o.status){let e="";try{const n=await o.json();(null==(t=n.error)?void 0:t.message)&&(e=n.error.message)}catch(s){}throw xm.create("config-fetch-failed",{httpStatus:o.status,responseMessage:e})}return o.json()}(e);return a.deleteThrottleMetadata(o),t}catch(Ub){const l=Ub;if(!function(e){if(!(e instanceof Zf&&e.customData))return!1;const t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}(l)){if(a.deleteThrottleMetadata(o),s)return Pm.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${null==l?void 0:l.message}]`),{appId:o,measurementId:s};throw Ub}const u=503===Number(null==(i=null==l?void 0:l.customData)?void 0:i.httpStatus)?uh(n,a.intervalMillis,30):uh(n,a.intervalMillis),c={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return a.setThrottleMetadata(o,c),Pm.debug(`Calling attemptFetch again in ${u} millis`),Um(e,c,r,a)}}class zm{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function jm(e,t,n,r,a,i,o){const s=Mm(e);s.then(t=>{n[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&Pm.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(e=>Pm.error(e)),t.push(s);const l=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(){if(!Yf())return Pm.warn(xm.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await Xf()}catch(Ub){return Pm.warn(xm.create("indexeddb-unavailable",{errorInfo:null==Ub?void 0:Ub.toString()}).message),!1}return!0}().then(e=>e?r.getId():void 0),[u,c]=await Promise.all([s,l]);(function(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Tm)&&n.src.includes(e))return n;return null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)(i)||Om(i,u.measurementId),a("js",new Date);const d=(null==o?void 0:o.config)??{};return d.origin="firebase",d.update=!0,null!=c&&(d.firebase_id=c),a("config",u.measurementId,d),u.measurementId}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{constructor(e){this.app=e}_delete(){return delete Vm[this.app.options.appId],Promise.resolve()}}let Vm={},Hm=[];const $m={};let Bm,Wm,Km="dataLayer",qm=!1;function Gm(){const e=[];if(Jf()&&e.push("This is a browser extension environment."),"undefined"!=typeof navigator&&navigator.cookieEnabled||e.push("Cookies are not available."),e.length>0){const t=e.map((e,t)=>`(${t+1}) ${e}`).join(" "),n=xm.create("invalid-analytics-context",{errorInfo:t});Pm.warn(n.message)}}function Qm(e,t,n){Gm();const r=e.options.appId;if(!r)throw xm.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw xm.create("no-api-key");Pm.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=Vm[r])throw xm.create("already-exists",{id:r});if(!qm){!function(e){let t=[];Array.isArray(window[e])?t=window[e]:window[e]=t}(Km);const{wrappedGtag:e,gtagCore:t}=function(e,t,n,r,a){let i=function(...e){window[r].push(arguments)};return window[a]&&"function"==typeof window[a]&&(i=window[a]),window[a]=Lm(i,e,t,n),{gtagCore:i,wrappedGtag:window[a]}}(Vm,Hm,$m,Km,"gtag");Wm=e,Bm=t,qm=!0}Vm[r]=jm(e,Hm,$m,t,Bm,Km,n);return new Fm(e)}const Jm="@firebase/analytics",Ym="0.10.18";function Xm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}kp(new dh(Cm,(e,{options:t})=>Qm(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),t),"PUBLIC")),kp(new dh("analytics-internal",function(e){try{const t=e.getProvider(Cm).getImmediate();return{logEvent:(e,n,r)=>function(e,t,n,r){e=ch(e),async function(e,t,n,r,a){if(a&&a.global)e("event",n,r);else{const a=await t;e("event",n,{...r,send_to:a})}}(Wm,Vm[e.app.options.appId],t,n,r).catch(e=>Pm.error(e))}(t,e,n,r)}}catch(Ub){throw xm.create("interop-component-reg-failed",{reason:Ub})}},"PRIVATE")),xp(Jm,Ym),xp(Jm,Ym,"esm2020");const Zm=Xm,eg=new eh("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),tg=new kh("@firebase/auth");function ng(e,...t){tg.logLevel<=mh.ERROR&&tg.error(`Auth (${Cp}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rg(e,...t){throw sg(e,...t)}function ag(e,...t){return sg(e,...t)}function ig(e,t,n){const r={...Zm(),[t]:n};return new eh("auth","Firebase",r).create(t,{appName:e.name})}function og(e){return ig(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function sg(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return eg.create(e,...t)}function lg(e,t,...n){if(!e)throw sg(t,...n)}function ug(e){const t="INTERNAL ASSERTION FAILED: "+e;throw ng(t),new Error(t)}function cg(e,t){e||ug(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dg(){var e;return"undefined"!=typeof self&&(null==(e=self.location)?void 0:e.href)||""}function fg(){var e;return"undefined"!=typeof self&&(null==(e=self.location)?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hg(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==fg()&&"https:"!==fg()&&!Jf()&&!("connection"in navigator)||navigator.onLine}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pg{constructor(e,t){this.shortDelay=e,this.longDelay=t,cg(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Qf())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return hg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mg(e,t){cg(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:"undefined"!=typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!=typeof fetch?fetch:void ug("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:"undefined"!=typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!=typeof Headers?Headers:void ug("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:"undefined"!=typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!=typeof Response?Response:void ug("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},yg=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],bg=new pg(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wg(e,t){return e.tenantId&&!t.tenantId?{...t,tenantId:e.tenantId}:t}async function kg(e,t,n,r,a={}){return _g(e,a,async()=>{let a={},i={};r&&("GET"===t?i=r:a={body:JSON.stringify(r)});const o=ah({key:e.config.apiKey,...i}).slice(1),s=await e._getAdditionalHeaders();s["Content-Type"]="application/json",e.languageCode&&(s["X-Firebase-Locale"]=e.languageCode);const l={method:t,headers:s,...a};return"undefined"!=typeof navigator&&"Cloudflare-Workers"===navigator.userAgent||(l.referrerPolicy="no-referrer"),e.emulatorConfig&&Wf(e.emulatorConfig.host)&&(l.credentials="include"),gg.fetch()(await Eg(e,e.config.apiHost,n,o),l)})}async function _g(e,t,n){e._canInitEmulator=!1;const r={...vg,...t};try{const t=new Cg(e),a=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const i=await a.json();if("needConfirmation"in i)throw Tg(e,"account-exists-with-different-credential",i);if(a.ok&&!("errorMessage"in i))return i;{const t=a.ok?i.errorMessage:i.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Tg(e,"credential-already-in-use",i);if("EMAIL_EXISTS"===n)throw Tg(e,"email-already-in-use",i);if("USER_DISABLED"===n)throw Tg(e,"user-disabled",i);const s=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw ig(e,s,o);rg(e,s)}}catch(Ub){if(Ub instanceof Zf)throw Ub;rg(e,"network-request-failed",{message:String(Ub)})}}async function Sg(e,t,n,r,a={}){const i=await kg(e,t,n,r,a);return"mfaPendingCredential"in i&&rg(e,"multi-factor-auth-required",{_serverResponse:i}),i}async function Eg(e,t,n,r){const a=`${t}${n}?${r}`,i=e,o=i.config.emulator?mg(e.config,a):`${e.config.apiScheme}://${a}`;if(yg.includes(n)&&(await i._persistenceManagerAvailable,"COOKIE"===i._getPersistenceType())){return i._getPersistence()._getFinalTarget(o).toString()}return o}function Ig(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Cg{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(ag(this.auth,"network-request-failed")),bg.get())})}}function Tg(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const a=ag(e,t,r);return a.customData._tokenResponse=n,a}function Pg(e){return void 0!==e&&void 0!==e.enterprise}class xg{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Ig(t.enforcementState);return null}isProviderEnabled(e){return"ENFORCE"===this.getProviderEnforcementState(e)||"AUDIT"===this.getProviderEnforcementState(e)}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Rg(e,t){return kg(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ng(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(Ub){}}function Og(e){return 1e3*Number(e)}function Lg(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return ng("JWT malformed, contained fewer than 3 sections"),null;try{const e=jf(n);return e?JSON.parse(e):(ng("Failed to decode base64 JWT payload"),null)}catch(Ub){return ng("Caught error parsing JWT payload as JSON",null==Ub?void 0:Ub.toString()),null}}function Ag(e){const t=Lg(e);return lg(t,"internal-error"),lg(void 0!==t.exp,"internal-error"),lg(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dg(e,t,n=!1){if(n)return t;try{return await t}catch(Ub){throw Ub instanceof Zf&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(Ub)&&e.auth.currentUser===e&&await e.auth.signOut(),Ub}}class Mg{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(Ub){return void("auth/network-request-failed"===(null==Ub?void 0:Ub.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ng(this.lastLoginAt),this.creationTime=Ng(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zg(e){var t;const n=e.auth,r=await e.getIdToken(),a=await Dg(e,Rg(n,{idToken:r}));lg(null==a?void 0:a.users.length,n,"internal-error");const i=a.users[0];e._notifyReloadListener(i);const o=(null==(t=i.providerUserInfo)?void 0:t.length)?jg(i.providerUserInfo):[],s=(l=e.providerData,u=o,[...l.filter(e=>!u.some(t=>t.providerId===e.providerId)),...u]);var l,u;const c=e.isAnonymous,d=!(e.email&&i.passwordHash||(null==s?void 0:s.length)),f=!!c&&d,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Ug(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(e,h)}function jg(e){return e.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fg{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){lg(e.idToken,"internal-error"),lg(void 0!==e.idToken,"internal-error"),lg(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):Ag(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){lg(0!==e.length,"internal-error");const t=Ag(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return t||!this.accessToken||this.isExpired?(lg(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null):this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:a}=await async function(e,t){const n=await _g(e,{},async()=>{const n=ah({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:a}=e.config,i=await Eg(e,r,"/v1/token",`key=${a}`),o=await e._getAdditionalHeaders();o["Content-Type"]="application/x-www-form-urlencoded";const s={method:"POST",headers:o,body:n};return e.emulatorConfig&&Wf(e.emulatorConfig.host)&&(s.credentials="include"),gg.fetch()(i,s)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(a))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:a}=t,i=new Fg;return n&&(lg("string"==typeof n,"internal-error",{appName:e}),i.refreshToken=n),r&&(lg("string"==typeof r,"internal-error",{appName:e}),i.accessToken=r),a&&(lg("number"==typeof a,"internal-error",{appName:e}),i.expirationTime=a),i}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Fg,this.toJSON())}_performRefresh(){return ug("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vg(e,t){lg("string"==typeof e||void 0===e,"internal-error",{appName:t})}class Hg{constructor({uid:e,auth:t,stsTokenManager:n,...r}){this.providerId="firebase",this.proactiveRefresh=new Mg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Ug(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Dg(this,this.stsTokenManager.getToken(this.auth,e));return lg(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=ch(e),r=await n.getIdToken(t),a=Lg(r);lg(a&&a.exp&&a.auth_time&&a.iat,n.auth,"internal-error");const i="object"==typeof a.firebase?a.firebase:void 0,o=null==i?void 0:i.sign_in_provider;return{claims:a,token:r,authTime:Ng(Og(a.auth_time)),issuedAtTime:Ng(Og(a.iat)),expirationTime:Ng(Og(a.exp)),signInProvider:o||null,signInSecondFactor:(null==i?void 0:i.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=ch(e);await zg(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(lg(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>({...e})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Hg({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){lg(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await zg(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Sp(this.auth.app))return Promise.reject(og(this.auth));const e=await this.getIdToken();return await Dg(this,
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){return kg(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const n=t.displayName??void 0,r=t.email??void 0,a=t.phoneNumber??void 0,i=t.photoURL??void 0,o=t.tenantId??void 0,s=t._redirectEventId??void 0,l=t.createdAt??void 0,u=t.lastLoginAt??void 0,{uid:c,emailVerified:d,isAnonymous:f,providerData:h,stsTokenManager:p}=t;lg(c&&p,e,"internal-error");const m=Fg.fromJSON(this.name,p);lg("string"==typeof c,e,"internal-error"),Vg(n,e.name),Vg(r,e.name),lg("boolean"==typeof d,e,"internal-error"),lg("boolean"==typeof f,e,"internal-error"),Vg(a,e.name),Vg(i,e.name),Vg(o,e.name),Vg(s,e.name),Vg(l,e.name),Vg(u,e.name);const g=new Hg({uid:c,auth:e,email:r,emailVerified:d,displayName:n,isAnonymous:f,photoURL:i,phoneNumber:a,tenantId:o,stsTokenManager:m,createdAt:l,lastLoginAt:u});return h&&Array.isArray(h)&&(g.providerData=h.map(e=>({...e}))),s&&(g._redirectEventId=s),g}static async _fromIdTokenResponse(e,t,n=!1){const r=new Fg;r.updateFromServerResponse(t);const a=new Hg({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await zg(a),a}static async _fromGetAccountInfoResponse(e,t,n){const r=t.users[0];lg(void 0!==r.localId,"internal-error");const a=void 0!==r.providerUserInfo?jg(r.providerUserInfo):[],i=!(r.email&&r.passwordHash||(null==a?void 0:a.length)),o=new Fg;o.updateFromIdToken(n);const s=new Hg({uid:r.localId,auth:e,stsTokenManager:o,isAnonymous:i}),l={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Ug(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash||(null==a?void 0:a.length))};return Object.assign(s,l),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $g=new Map;function Bg(e){cg(e instanceof Function,"Expected a class definition");let t=$g.get(e);return t?(cg(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,$g.set(e,t),t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Wg.type="NONE";const Kg=Wg;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qg(e,t,n){return`firebase:${e}:${t}:${n}`}class Gg{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:a}=this.auth;this.fullUserKey=qg(this.userKey,r.apiKey,a),this.fullPersistenceKey=qg("persistence",r.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if("string"==typeof e){const t=await Rg(this.auth,{idToken:e}).catch(()=>{});return t?Hg._fromGetAccountInfoResponse(this.auth,t,e):null}return Hg._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Gg(Bg(Kg),e,n);const r=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e);let a=r[0]||Bg(Kg);const i=qg(n,e.config.apiKey,e.name);let o=null;for(const l of t)try{const t=await l._get(i);if(t){let n;if("string"==typeof t){const r=await Rg(e,{idToken:t}).catch(()=>{});if(!r)break;n=await Hg._fromGetAccountInfoResponse(e,r,t)}else n=Hg._fromJSON(e,t);l!==a&&(o=n),a=l;break}}catch{}const s=r.filter(e=>e._shouldAllowMigration);return a._shouldAllowMigration&&s.length?(a=s[0],o&&await a._set(i,o.toJSON()),await Promise.all(t.map(async e=>{if(e!==a)try{await e._remove(i)}catch{}})),new Gg(a,e,n)):new Gg(a,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qg(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Zg(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Jg(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(tv(t))return"Blackberry";if(nv(t))return"Webos";if(Yg(t))return"Safari";if((t.includes("chrome/")||Xg(t))&&!t.includes("edge/"))return"Chrome";if(ev(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Jg(e=Qf()){return/firefox\//i.test(e)}function Yg(e=Qf()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Xg(e=Qf()){return/crios\//i.test(e)}function Zg(e=Qf()){return/iemobile/i.test(e)}function ev(e=Qf()){return/android/i.test(e)}function tv(e=Qf()){return/blackberry/i.test(e)}function nv(e=Qf()){return/webos/i.test(e)}function rv(e=Qf()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function av(){return function(){const e=Qf();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}()&&10===document.documentMode}function iv(e=Qf()){return rv(e)||ev(e)||nv(e)||tv(e)||/windows phone/i.test(e)||Zg(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ov(e,t=[]){let n;switch(e){case"Browser":n=Qg(Qf());break;case"Worker":n=`${Qg(Qf())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Cp}/${r}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise((n,r)=>{try{n(e(t))}catch(Ub){r(Ub)}});n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(Ub){t.reverse();for(const r of t)try{r()}catch(n){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==Ub?void 0:Ub.message})}}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv{constructor(e){var t;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??6,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),void 0!==n.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),void 0!==n.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),void 0!==n.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),void 0!==n.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(null==(t=e.allowedNonAlphanumericCharacters)?void 0:t.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){let n;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,r,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uv{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new dv(this),this.idTokenSubscription=new dv(this),this.beforeStateQueue=new sv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=eg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(e=>this._resolvePersistenceManagerAvailable=e)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Bg(t)),this._initializationPromise=this.queue(async()=>{var n,r,a;if(!this._deleted&&(this.persistenceManager=await Gg.create(this,e),null==(n=this._resolvePersistenceManagerAvailable)||n.call(this),!this._deleted)){if(null==(r=this._popupRedirectResolver)?void 0:r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(Ub){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null==(a=this.currentUser)?void 0:a.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void(await this.currentUser.getIdToken())):void(await this._updateCurrentUser(e,!0)):void 0}async initializeCurrentUserFromIdToken(e){try{const t=await Rg(this,{idToken:e}),n=await Hg._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Sp(this.app)){const e=this.app.settings.authIdToken;return e?new Promise(t=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(e).then(t,t))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null==(t=this.redirectUser)?void 0:t._redirectEventId,i=null==r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==i||!(null==o?void 0:o.user)||(r=o.user,a=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(r)}catch(Ub){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(Ub))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return lg(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(Ub){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await zg(e)}catch(Ub){if("auth/network-request-failed"!==(null==Ub?void 0:Ub.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Sp(this.app))return Promise.reject(og(this));const t=e?ch(e):null;return t&&lg(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&lg(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Sp(this.app)?Promise.reject(og(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Sp(this.app)?Promise.reject(og(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Bg(e))})}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await async function(e,t={}){return kg(e,"GET","/v2/passwordPolicy",wg(e,t))}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this),t=new lv(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new eh("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:await this.currentUser.getIdToken()};null!=this.tenantId&&(t.tenantId=this.tenantId),await async function(e,t){return kg(e,"POST","/v2/accounts:revokeToken",wg(e,t))}(this,t)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null==(e=this._currentUser)?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Bg(e)||this._popupRedirectResolver;lg(t,this,"argument-error"),this.redirectPersistenceManager=await Gg.create(this,[Bg(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),(null==(t=this._currentUser)?void 0:t._redirectEventId)===e?this._currentUser:(null==(n=this.redirectUser)?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=(null==(e=this.currentUser)?void 0:e.uid)??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const a="function"==typeof t?t:t.next.bind(t);let i=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(lg(o,this,"internal-error"),o.then(()=>{i||a(this.currentUser)}),"function"==typeof t){const a=e.addObserver(t,n,r);return()=>{i=!0,a()}}{const n=e.addObserver(t);return()=>{i=!0,n()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return lg(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ov(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null==(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;if(Sp(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await(null==(e=this.appCheckServiceProvider.getImmediate({optional:!0}))?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){tg.logLevel<=mh.WARN&&tg.warn(`Auth (${Cp}): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}}function cv(e){return ch(e)}class dv{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){const n=new sh(e,t);return n.subscribe.bind(n)}(e=>this.observer=e)}get next(){return lg(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fv={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function hv(e){return fv.loadJS(e)}class pv{constructor(){this.enterprise=new mv}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class mv{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const gv="NO_RECAPTCHA";class vv{constructor(e){this.type="recaptcha-enterprise",this.auth=cv(e)}async verify(e="verify",t=!1){async function n(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise(async(t,n)=>{(async function(e,t){return kg(e,"GET","/v2/recaptchaConfig",wg(e,t))})(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(r=>{if(void 0!==r.recaptchaKey){const n=new xg(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))}).catch(e=>{n(e)})})}function r(t,n,r){const a=window.grecaptcha;Pg(a)?a.enterprise.ready(()=>{a.enterprise.execute(t,{action:e}).then(e=>{n(e)}).catch(()=>{n(gv)})}):r(Error("No reCAPTCHA enterprise script loaded."))}if(this.auth.settings.appVerificationDisabledForTesting){return(new pv).execute("siteKey",{action:"verify"})}return new Promise((e,a)=>{n(this.auth).then(n=>{if(!t&&Pg(window.grecaptcha))r(n,e,a);else{if("undefined"==typeof window)return void a(new Error("RecaptchaVerifier is only supported in browser"));let t=fv.recaptchaEnterpriseScript;0!==t.length&&(t+=n),hv(t).then(()=>{r(n,e,a)}).catch(e=>{a(e)})}}).catch(e=>{a(e)})})}}async function yv(e,t,n,r=!1,a=!1){const i=new vv(e);let o;if(a)o=gv;else try{o=await i.verify(n)}catch(l){o=await i.verify(n,!0)}const s={...t};if("mfaSmsEnrollment"===n||"mfaSmsSignIn"===n){if("phoneEnrollmentInfo"in s){const e=s.phoneEnrollmentInfo.phoneNumber,t=s.phoneEnrollmentInfo.recaptchaToken;Object.assign(s,{phoneEnrollmentInfo:{phoneNumber:e,recaptchaToken:t,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in s){const e=s.phoneSignInInfo.recaptchaToken;Object.assign(s,{phoneSignInInfo:{recaptchaToken:e,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return s}return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}async function bv(e,t,n,r,a){var i,o;if("EMAIL_PASSWORD_PROVIDER"===a){if(null==(i=e._getRecaptchaConfig())?void 0:i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await yv(e,t,n,"getOobCode"===n);return r(e,a)}return r(e,t).catch(async a=>{if("auth/missing-recaptcha-token"===a.code){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await yv(e,t,n,"getOobCode"===n);return r(e,a)}return Promise.reject(a)})}if("PHONE_PROVIDER"===a){if(null==(o=e._getRecaptchaConfig())?void 0:o.isProviderEnabled("PHONE_PROVIDER")){const a=await yv(e,t,n);return r(e,a).catch(async a=>{var i;if("AUDIT"===(null==(i=e._getRecaptchaConfig())?void 0:i.getProviderEnforcementState("PHONE_PROVIDER"))&&("auth/missing-recaptcha-token"===a.code||"auth/invalid-app-credential"===a.code)){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const a=await yv(e,t,n,!1,!0);return r(e,a)}return Promise.reject(a)})}{const a=await yv(e,t,n,!1,!0);return r(e,a)}}return Promise.reject(a+" provider is not supported.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wv(e,t,n){const r=cv(e);lg(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const a=!!(null==n?void 0:n.disableWarnings),i=kv(t),{host:o,port:s}=function(e){const t=kv(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(r);if(a){const e=a[1];return{host:e,port:_v(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:_v(t)}}}(t),l=null===s?"":`:${s}`,u={url:`${i}//${o}${l}/`},c=Object.freeze({host:o,port:s,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!r._canInitEmulator)return lg(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),void lg(nh(u,r.config.emulator)&&nh(c,r.emulatorConfig),r,"emulator-config-failed");r.config.emulator=u,r.emulatorConfig=c,r.settings.appVerificationDisabledForTesting=!0,Wf(o)?(!async function(e){(await fetch(e,{credentials:"include"})).ok}(`${i}//${o}${l}`),Gf("Auth",!0)):a||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function kv(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function _v(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class Sv{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ug("not implemented")}_getIdTokenResponse(e){return ug("not implemented")}_linkToIdToken(e,t){return ug("not implemented")}_getReauthenticationResolver(e){return ug("not implemented")}}async function Ev(e,t){return kg(e,"POST","/v1/accounts:signUp",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Iv(e,t){return Sg(e,"POST","/v1/accounts:signInWithPassword",wg(e,t))}async function Cv(e,t){return async function(e,t){return kg(e,"POST","/v1/accounts:sendOobCode",wg(e,t))}(e,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tv extends Sv{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Tv(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Tv(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return bv(e,{returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signInWithPassword",Iv,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return async function(e,t){return Sg(e,"POST","/v1/accounts:signInWithEmailLink",wg(e,t))}(e,{email:this._email,oobCode:this._password});default:rg(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return bv(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Ev,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return async function(e,t){return Sg(e,"POST","/v1/accounts:signInWithEmailLink",wg(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:rg(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pv(e,t){return Sg(e,"POST","/v1/accounts:signInWithIdp",wg(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xv extends Sv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new xv(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):rg("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r,...a}=t;if(!n||!r)return null;const i=new xv(n,r);return i.idToken=a.idToken||void 0,i.accessToken=a.accessToken||void 0,i.secret=a.secret,i.nonce=a.nonce,i.pendingToken=a.pendingToken||null,i}_getIdTokenResponse(e){return Pv(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Pv(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Pv(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ah(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rv{constructor(e){const t=ih(oh(e)),n=t.apiKey??null,r=t.oobCode??null,a=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(t.mode??null);lg(n&&r&&a,"argument-error"),this.apiKey=n,this.operation=a,this.code=r,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=function(e){const t=ih(oh(e)).link,n=t?ih(oh(t)).deep_link_id:null,r=ih(oh(e)).deep_link_id;return(r?ih(oh(r)).link:null)||r||n||t||e}(e);try{return new Rv(t)}catch{return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nv{constructor(){this.providerId=Nv.PROVIDER_ID}static credential(e,t){return Tv._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Rv.parseLink(t);return lg(n,"argument-error"),Tv._fromEmailAndCode(e,n.code,n.tenantId)}}Nv.PROVIDER_ID="password",Nv.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Nv.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ov{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lv extends Ov{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av extends Lv{constructor(){super("facebook.com")}static credential(e){return xv._fromParams({providerId:Av.PROVIDER_ID,signInMethod:Av.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Av.credentialFromTaggedObject(e)}static credentialFromError(e){return Av.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Av.credential(e.oauthAccessToken)}catch{return null}}}Av.FACEBOOK_SIGN_IN_METHOD="facebook.com",Av.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Dv extends Lv{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return xv._fromParams({providerId:Dv.PROVIDER_ID,signInMethod:Dv.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Dv.credentialFromTaggedObject(e)}static credentialFromError(e){return Dv.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Dv.credential(t,n)}catch{return null}}}Dv.GOOGLE_SIGN_IN_METHOD="google.com",Dv.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mv extends Lv{constructor(){super("github.com")}static credential(e){return xv._fromParams({providerId:Mv.PROVIDER_ID,signInMethod:Mv.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mv.credentialFromTaggedObject(e)}static credentialFromError(e){return Mv.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Mv.credential(e.oauthAccessToken)}catch{return null}}}Mv.GITHUB_SIGN_IN_METHOD="github.com",Mv.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Uv extends Lv{constructor(){super("twitter.com")}static credential(e,t){return xv._fromParams({providerId:Uv.PROVIDER_ID,signInMethod:Uv.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Uv.credentialFromTaggedObject(e)}static credentialFromError(e){return Uv.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Uv.credential(t,n)}catch{return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function zv(e,t){return Sg(e,"POST","/v1/accounts:signUp",wg(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Uv.TWITTER_SIGN_IN_METHOD="twitter.com",Uv.PROVIDER_ID="twitter.com";class jv{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const a=await Hg._fromIdTokenResponse(e,n,r),i=Fv(n);return new jv({user:a,providerId:i,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Fv(n);return new jv({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Fv(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vv extends Zf{constructor(e,t,n,r){super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Vv.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new Vv(e,t,n,r)}}function Hv(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw Vv._fromErrorAndOperation(e,n,t,r);throw n})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function $v(e,t,n=!1){if(Sp(e.app))return Promise.reject(og(e));const r="signIn",a=await Hv(e,r,t),i=await jv._fromIdTokenResponse(e,r,a);return n||await e._updateCurrentUser(i.user),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Bv(e){const t=cv(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function Wv(e,t){await async function(e,t){return kg(e,"POST","/v1/accounts:update",wg(e,t))}(ch(e),{oobCode:t})}async function Kv(e,t,n){if(Sp(e.app))return Promise.reject(og(e));const r=cv(e),a=bv(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",zv,"EMAIL_PASSWORD_PROVIDER"),i=await a.catch(t=>{throw"auth/password-does-not-meet-requirements"===t.code&&Bv(e),t}),o=await jv._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(o.user),o}function qv(e,t,n){return Sp(e.app)?Promise.reject(og(e)):async function(e,t){return $v(cv(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(ch(e),Nv.credential(t,n)).catch(async t=>{throw"auth/password-does-not-meet-requirements"===t.code&&Bv(e),t})}async function Gv(e,t){const n=ch(e),r={requestType:"VERIFY_EMAIL",idToken:await e.getIdToken()};t&&function(e,t,n){var r;lg((null==(r=n.url)?void 0:r.length)>0,e,"invalid-continue-uri"),lg(void 0===n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),lg(void 0===n.linkDomain||n.linkDomain.length>0,e,"invalid-hosting-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.linkDomain=n.linkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(lg(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(lg(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}(n.auth,r,t);const{email:a}=await Cv(n.auth,r);a!==e.email&&await e.reload()}const Qv="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jv{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Qv,"1"),this.storage.removeItem(Qv),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yv extends Jv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=iv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});const n=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},a=this.storage.getItem(n);av()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Yv.type="LOCAL";const Xv=Yv;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zv extends Jv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Zv.type="SESSION";const ey=Zv;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ty{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;const n=new ty(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:a}=t.data,i=this.handlersMap[r];if(!(null==i?void 0:i.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(i).map(async e=>e(t.origin,a)),s=await function(e){return Promise.all(e.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:s})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ny(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ty.receivers=[];class ry{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let a,i;return new Promise((o,s)=>{const l=ny("",20);r.port1.start();const u=setTimeout(()=>{s(new Error("unsupported_event"))},n);i={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(u),a=setTimeout(()=>{s(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),o(t.data.response);break;default:clearTimeout(u),clearTimeout(a),s(new Error("invalid_response"))}}},this.handlers.add(i),r.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])}).finally(()=>{i&&this.removeMessageHandler(i)})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ay(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function iy(){return void 0!==ay().WorkerGlobalScope&&"function"==typeof ay().importScripts}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const oy="firebaseLocalStorageDb",sy="firebaseLocalStorage",ly="fbase_key";class uy{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function cy(e,t){return e.transaction([sy],t?"readwrite":"readonly").objectStore(sy)}function dy(){const e=indexedDB.open(oy,1);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const t=e.result;try{t.createObjectStore(sy,{keyPath:ly})}catch(Ub){n(Ub)}}),e.addEventListener("success",async()=>{const n=e.result;n.objectStoreNames.contains(sy)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(oy);return new uy(e).toPromise()}(),t(await dy()))})})}async function fy(e,t,n){const r=cy(e,!0).put({[ly]:t,value:n});return new uy(r).toPromise()}function hy(e,t){const n=cy(e,!0).delete(t);return new uy(n).toPromise()}class py{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await dy()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(Ub){if(t++>3)throw Ub;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return iy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ty._getInstance(iy()?self:null),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null==navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}(),!this.activeServiceWorker)return;this.sender=new ry(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null==(e=n[0])?void 0:e.fulfilled)&&(null==(t=n[0])?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null==(t=null==navigator?void 0:navigator.serviceWorker)?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await dy();return await fy(e,Qv,"1"),await hy(e,Qv),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>fy(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(t=>async function(e,t){const n=cy(e,!1).get(t),r=await new uy(n).toPromise();return void 0===r?null:r.value}(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>hy(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(e=>{const t=cy(e,!1).getAll();return new uy(t).toPromise()});if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;if(0!==e.length)for(const{fbase_key:r,value:a}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(a)&&(this.notifyListeners(r,a),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}py.type="LOCAL";const my=py;new pg(3e4,6e4);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gy extends Sv{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Pv(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Pv(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Pv(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function vy(e){return $v(e.auth,new gy(e),e.bypassAuthState)}function yy(e){const{auth:t,user:n}=e;return lg(n,t,"internal-error"),
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t,n=!1){const{auth:r}=e;if(Sp(r.app))return Promise.reject(og(r));const a="reauthenticate";try{const i=await Dg(e,Hv(r,a,t,e),n);lg(i.idToken,r,"internal-error");const o=Lg(i.idToken);lg(o,r,"internal-error");const{sub:s}=o;return lg(e.uid===s,r,"user-mismatch"),jv._forOperation(e,a,i)}catch(Ub){throw"auth/user-not-found"===(null==Ub?void 0:Ub.code)&&rg(r,"user-mismatch"),Ub}}(n,new gy(e),e.bypassAuthState)}async function by(e){const{auth:t,user:n}=e;return lg(n,t,"internal-error"),async function(e,t,n=!1){const r=await Dg(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return jv._forOperation(e,"link",r)}(n,new gy(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy{constructor(e,t,n,r,a=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(Ub){this.reject(Ub)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:a,error:i,type:o}=e;if(i)return void this.reject(i);const s={auth:this.auth,requestUri:t,sessionId:n,tenantId:a||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(s))}catch(Ub){this.reject(Ub)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return vy;case"linkViaPopup":case"linkViaRedirect":return by;case"reauthViaPopup":case"reauthViaRedirect":return yy;default:rg(this.auth,"internal-error")}}resolve(e){cg(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){cg(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ky=new pg(2e3,1e4);class _y extends wy{constructor(e,t,n,r,a){super(e,t,r,a),this.provider=n,this.authWindow=null,this.pollId=null,_y.currentPopupAction&&_y.currentPopupAction.cancel(),_y.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return lg(e,this.auth,"internal-error"),e}async onExecution(){cg(1===this.filter.length,"Popup operations only handle one event");const e=ny();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(ag(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null==(e=this.authWindow)?void 0:e.associatedEvent)||null}cancel(){this.reject(ag(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,_y.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null==(n=null==(t=this.authWindow)?void 0:t.window)?void 0:n.closed)?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ag(this.auth,"popup-closed-by-user"))},8e3):this.pollId=window.setTimeout(e,ky.get())};e()}}_y.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Sy="pendingRedirect",Ey=new Map;class Iy extends wy{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Ey.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=function(e){return qg(Sy,e.config.apiKey,e.name)}(t),r=function(e){return Bg(e._redirectPersistence)}(e);if(!(await r._isAvailable()))return!1;const a="true"===await r._get(n);return await r._remove(n),a}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(Ub){e=()=>Promise.reject(Ub)}Ey.set(this.auth._key(),e)}return this.bypassAuthState||Ey.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function Cy(e,t){Ey.set(e._key(),t)}async function Ty(e,t,n=!1){if(Sp(e.app))return Promise.reject(og(e));const r=cv(e),a=
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return t?Bg(t):(lg(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}(r,t),i=new Iy(r,a,n),o=await i.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ry(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Ry(e)){const r=(null==(n=e.error.code)?void 0:n.split("auth/")[1])||"internal-error";t.onError(ag(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(xy(e))}saveEventToCache(e){this.cachedEventUids.add(xy(e)),this.lastProcessedEventTime=Date.now()}}function xy(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function Ry({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ny=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Oy=/^https?/;async function Ly(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return kg(e,"GET","/v1/projects",t)}(e);for(const n of t)try{if(Ay(n))return}catch{}rg(e,"unauthorized-domain")}function Ay(e){const t=dg(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const a=new URL(e);return""===a.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&a.hostname===r}if(!Oy.test(n))return!1;if(Ny.test(e))return r===e;const a=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dy=new pg(3e4,6e4);function My(){const e=ay().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function Uy(e){return new Promise((t,n)=>{var r,a,i;function o(){My(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{My(),n(ag(e,"network-request-failed"))},timeout:Dy.get()})}if(null==(a=null==(r=ay().gapi)?void 0:r.iframes)?void 0:a.Iframe)t(gapi.iframes.getContext());else{if(!(null==(i=ay().gapi)?void 0:i.load)){const t=`__${"iframefcb"}${Math.floor(1e6*Math.random())}`;return ay()[t]=()=>{gapi.load?o():n(ag(e,"network-request-failed"))},hv(`${fv.gapiScript}?onload=${t}`).catch(e=>n(e))}o()}}).catch(e=>{throw zy=null,e})}let zy=null;
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const jy=new pg(5e3,15e3),Fy={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Vy=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Hy(e){const t=e.config;lg(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?mg(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:Cp},a=Vy.get(e.config.apiHost);a&&(r.eid=a);const i=e._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ah(r).slice(1)}`}async function $y(e){const t=await function(e){return zy=zy||Uy(e),zy}(e),n=ay().gapi;return lg(n,e,"internal-error"),t.open({where:document.body,url:Hy(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Fy,dontclear:!0},t=>new Promise(async(n,r)=>{await t.restyle({setHideOnLeave:!1});const a=ag(e,"network-request-failed"),i=ay().setTimeout(()=>{r(a)},jy.get());function o(){ay().clearTimeout(i),n(t)}t.ping(o).then(o,()=>{r(a)})}))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const By={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Wy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(Ub){}}}function Ky(e,t,n,r=500,a=600){const i=Math.max((window.screen.availHeight-a)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let s="";const l={...By,width:r.toString(),height:a.toString(),top:i,left:o},u=Qf().toLowerCase();n&&(s=Xg(u)?"_blank":n),Jg(u)&&(t=t||"http://localhost",l.scrollbars="yes");const c=Object.entries(l).reduce((e,[t,n])=>`${e}${t}=${n},`,"");if(function(e=Qf()){var t;return rv(e)&&!!(null==(t=window.navigator)?void 0:t.standalone)}(u)&&"_self"!==s)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",s),new Wy(null);const d=window.open(t||"",s,c);lg(d,e,"popup-blocked");try{d.focus()}catch(Ub){}return new Wy(d)}const qy="__/auth/handler",Gy="emulator/auth/handler",Qy=encodeURIComponent("fac");async function Jy(e,t,n,r,a,i){lg(e.config.authDomain,e,"auth-domain-config-required"),lg(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Cp,eventId:a};if(t instanceof Ov){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(i||{}))o[e]=t}if(t instanceof Lv){const e=t.getScopes().filter(e=>""!==e);e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const s=o;for(const c of Object.keys(s))void 0===s[c]&&delete s[c];const l=await e._getAppCheckToken(),u=l?`#${Qy}=${encodeURIComponent(l)}`:"";return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/${qy}`;return mg(e,Gy)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${ah(s).slice(1)}${u}`}const Yy="webStorageSupport";const Xy=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ey,this._completeRedirectFn=Ty,this._overrideRedirectResult=Cy}async _openPopup(e,t,n,r){var a;cg(null==(a=this.eventManagers[e._key()])?void 0:a.manager,"_initialize() not called before _openPopup()");return Ky(e,await Jy(e,t,n,dg(),r),ny())}async _openRedirect(e,t,n,r){await this._originValidation(e);return function(e){ay().location.href=e}(await Jy(e,t,n,dg(),r)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(cg(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await $y(e),n=new Py(e);return t.register("authEvent",t=>{lg(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Yy,{type:Yy},n=>{var r;const a=null==(r=null==n?void 0:n[0])?void 0:r[Yy];void 0!==a&&t(!!a),rg(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Ly(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return iv()||Yg()||rv()}};var Zy="@firebase/auth",eb="1.11.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null==(e=this.auth.currentUser)?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){lg(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const nb=$f("authIdTokenMaxAge")||300;let rb=null;var ab;fv={loadJS:e=>new Promise((t,n)=>{const r=document.createElement("script");var a;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=ag("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",((null==(a=document.getElementsByTagName("head"))?void 0:a[0])??document).appendChild(r)}),gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="},ab="Browser",kp(new dh("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:i,authDomain:o}=n.options;lg(i&&!i.includes(":"),"invalid-api-key",{appName:n.name});const s={apiKey:i,authDomain:o,clientPlatform:ab,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ov(ab)},l=new uv(n,r,a,s);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Bg);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),kp(new dh("auth-internal",e=>{const t=cv(e.getProvider("auth").getImmediate());return new tb(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),xp(Zy,eb,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}(ab)),xp(Zy,eb,"esm2020");const ib=Tp({apiKey:"AIzaSyB2X3THVraoQUaMsdtVwUvF-DnoLaG4kXM",authDomain:"cse3cap-team-b.firebaseapp.com",projectId:"cse3cap-team-b",storageBucket:"cse3cap-team-b.firebasestorage.app",messagingSenderId:"1071871267605",appId:"1:1071871267605:web:ac06f8b24199c1bf4c8f1c",measurementId:"G-6Q60VEX9WT"});!function(e=Pp()){const t=_p(e=ch(e),Cm);t.isInitialized()?t.getImmediate():function(e,t={}){const n=_p(e,Cm);if(n.isInitialized()){const e=n.getImmediate();if(nh(t,n.getOptions()))return e;throw xm.create("already-initialized")}const r=n.initialize({options:t})}(e)}(ib);const ob=function(e=Pp()){const t=_p(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=_p(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(nh(n.getOptions(),t??{}))return e;rg(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:Xy,persistence:[my,Xv,ey]}),r=$f("authTokenSyncURL");if(r&&"boolean"==typeof isSecureContext&&isSecureContext){const e=new URL(r,location.origin);if(location.origin===e.origin){const t=(a=e.toString(),async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>nb)return;const r=null==t?void 0:t.token;rb!==r&&(rb=r,await fetch(a,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))});!function(e,t,n){ch(e).beforeAuthStateChanged(t,n)}(n,t,()=>t(n.currentUser)),function(e,t,n,r){ch(e).onIdTokenChanged(t,n,r)}(n,e=>t(e))}}var a;const i=(o="auth",null==(l=null==(s=Vf())?void 0:s.emulatorHosts)?void 0:l[o]);var o,s,l;return i&&wv(n,`http://${i}`),n}(ib),sb=V.createContext();function lb({children:e}){const[t,n]=V.useState(null),[r,a]=V.useState(!0);V.useEffect(()=>{const e=(t=e=>{n(e),a(!1)},ch(ob).onAuthStateChanged(t,r,i));var t,r,i;return()=>e()},[]);const i=()=>{},o=i;return Y.jsx(sb.Provider,{value:{user:t,loading:r,login:i,signup:o,logout:async()=>{var e;await(e=ob,ch(e).signOut())}},children:!r&&e})}function ub(){return V.useContext(sb)}function cb({children:e}){const{user:t}=ub(),n=Xd();return t?e:Y.jsx(hf,{to:"/login",state:{from:n},replace:!0})}const db=H.forwardRef(({className:e="",...t},n)=>Y.jsx("input",{ref:n,className:`w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${e}`,...t}));function fb({className:e="",...t}){return Y.jsx("button",{className:`inline-flex h-10 w-10 items-center justify-center rounded-full text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500/40 ${e}`,...t})}function hb(){return Y.jsxs("div",{className:"flex items-center space-x-2",children:[Y.jsxs("svg",{className:"h-8 w-8 text-primary",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:[Y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 6.25278C12 6.25278 10.5 3.75278 7.5 3.75278C4.5 3.75278 3 6.25278 3 9.25278C3 12.2528 4.5 14.7528 7.5 14.7528C10.5 14.7528 12 11.7528 12 11.7528"}),Y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 17.7528C12 17.7528 13.5 20.2528 16.5 20.2528C19.5 20.2528 21 17.7528 21 14.7528C21 11.7528 19.5 9.25278 16.5 9.25278C13.5 9.25278 12 12.2528 12 12.2528"})]}),Y.jsx("span",{className:"text-2xl font-bold text-text-offset",children:"StudyFlex"})]})}function pb(){const e="text-primary font-semibold",t="text-text-muted hover:text-text-offset";return Y.jsx("header",{className:"bg-surface border-b border-border sticky top-0 z-20",children:Y.jsxs("nav",{className:"flex items-center justify-between px-6 py-3",children:[Y.jsxs("div",{className:"flex items-center space-x-8",children:[Y.jsx(Pf,{to:"/dashboard",children:Y.jsx(hb,{})}),Y.jsxs("div",{className:"hidden md:flex items-center space-x-6 text-sm font-medium",children:[Y.jsx(Pf,{to:"/dashboard",className:({isActive:n})=>n?e:t,children:"Home"}),Y.jsx(Pf,{to:"/schedule",className:({isActive:n})=>n?e:t,children:"Schedule"}),Y.jsx(Pf,{to:"/progress",className:({isActive:n})=>n?e:t,children:"Progress"}),Y.jsx(Pf,{to:"/wizard/1",className:({isActive:n})=>n?e:t,children:"Wizard"}),Y.jsx(Pf,{to:"/settings",className:({isActive:n})=>n?e:t,children:"Settings"})]})]}),Y.jsxs("div",{className:"flex items-center space-x-4",children:[Y.jsxs("div",{className:"relative hidden md:block",children:[Y.jsx(db,{type:"search",placeholder:"Search...",className:"input w-48 pl-9"}),Y.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:Y.jsx("svg",{className:"h-5 w-5 text-text-muted",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Y.jsx("path",{fillRule:"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",clipRule:"evenodd"})})})]}),Y.jsx(fb,{"aria-label":"notifications",children:Y.jsx("svg",{className:"h-6 w-6 text-text-muted hover:text-text-offset",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"})})}),Y.jsx("div",{className:"h-9 w-9 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer",children:Y.jsx("svg",{className:"h-6 w-6 text-gray-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})})})]})]})})}function mb(){return Y.jsx("footer",{className:"border-t border-gray-200 bg-white px-4 py-2 text-sm text-gray-500",children:Y.jsxs("div",{className:"mx-auto flex max-w-6xl items-center justify-between",children:[Y.jsx("div",{children:"Company · Legal · Contact"}),Y.jsxs("div",{className:"flex space-x-2 text-lg",children:[Y.jsx("span",{children:"📘"}),Y.jsx("span",{children:"🐦"}),Y.jsx("span",{children:"💼"}),Y.jsx("span",{children:"📸"})]})]})})}function gb({children:e}){return Y.jsxs("div",{className:"flex min-h-screen flex-col bg-[#f9fafb]",children:[Y.jsx(pb,{}),Y.jsx("main",{className:"flex-1 p-6",children:Y.jsx("div",{className:"mx-auto max-w-6xl space-y-8",children:e})}),Y.jsx(mb,{})]})}const vb=[{id:"c1",code:"BUSN301",title:"Business Strategy",instructor:"Dr. Adams",color:"#ef4444",active:!0,weeklyTargetHours:4,fixedSlots:[{type:"lecture",day:"Mon",start:"09:00",end:"10:00"}],assessments:[{title:"Market Report",deadlineISO:new Date(Date.now()+6048e5).toISOString(),estHours:4,priority:"high"}]},{id:"c2",code:"PSYCH205",title:"Psychology",instructor:"Dr. Grey",color:"#10b981",active:!0,weeklyTargetHours:4,fixedSlots:[{type:"tutorial",day:"Wed",start:"11:00",end:"12:00"}],assessments:[{title:"Chapter Review",deadlineISO:new Date(Date.now()+864e6).toISOString(),estHours:3,priority:"medium"}]},{id:"c3",code:"MATH150",title:"Calculus",instructor:"Prof. Lin",color:"#f59e0b",active:!0,weeklyTargetHours:3,fixedSlots:[{type:"lecture",day:"Thu",start:"10:00",end:"11:00"}],assessments:[{title:"Problem Set",deadlineISO:new Date(Date.now()+10368e5).toISOString(),estHours:2,priority:"low"}]}],yb=[{id:"e1",title:"Lecture",day:"Mon",start:"09:00",end:"10:00",courseId:"c1",kind:"class"},{id:"e2",title:"Tutorial",day:"Wed",start:"11:00",end:"12:00",courseId:"c2",kind:"class"},{id:"e3",title:"Lecture",day:"Thu",start:"10:00",end:"11:00",courseId:"c3",kind:"class"},{id:"e4",title:"Study: BUSN301",day:"Mon",start:"10:30",end:"11:30",courseId:"c1",kind:"study"}],bb=[{id:"t1",title:"Submit Market Report",subjectId:"c1",dueISO:new Date(Date.now()+2592e5).toISOString(),priority:"high",estimateHrs:4,actualHrs:0,status:"inprogress"},{id:"t2",title:"Chapter Review",subjectId:"c2",dueISO:new Date(Date.now()+432e6).toISOString(),priority:"medium",estimateHrs:3,actualHrs:0,status:"backlog"},{id:"t3",title:"Problem Set",subjectId:"c3",dueISO:new Date(Date.now()+6912e5).toISOString(),priority:"low",estimateHrs:2,actualHrs:0,status:"backlog"}],wb={timeZone:"Australia/Melbourne",sessionMinutes:60,dailyMaxHours:4,preferredTimes:{morning:!0,afternoon:!0,evening:!1},snapMinutes:30,workingHours:{start:7,end:22}},kb=V.createContext(null);function _b({children:e}){const t=function(e,t){try{const n=localStorage.getItem(e);return n?JSON.parse(n):t}catch(Ub){return t}}("sf_data_v1",{courses:vb,events:yb,tasks:bb,prefs:wb}),[n,r]=V.useState(t.courses),[a,i]=V.useState(t.events),[o,s]=V.useState(t.tasks||[]),[l,u]=V.useState(t.prefs);return V.useEffect(()=>{!function(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch(Ub){}}("sf_data_v1",{courses:n,events:a,tasks:o,prefs:l})},[n,a,o,l]),Y.jsx(kb.Provider,{value:{courses:n,setCourses:r,events:a,setEvents:i,tasks:o,setTasks:s,prefs:l,setPrefs:u},children:e})}function Sb(){return V.useContext(kb)}const Eb=V.lazy(()=>Af(()=>import("./Login-f772b5fd.js"),[])),Ib=V.lazy(()=>Af(()=>import("./Signup-0b16d5ed.js"),["assets/Signup-0b16d5ed.js","assets/Card-39a532c0.js","assets/Button-062e88f2.js","assets/Checkbox-6b3e04c0.js"])),Cb=V.lazy(()=>Af(()=>import("./VerifyEmail-f65d0053.js"),[])),Tb=V.lazy(()=>Af(()=>import("./Dashboard-c9a9e9cc.js"),["assets/Dashboard-c9a9e9cc.js","assets/Button-062e88f2.js","assets/Card-39a532c0.js","assets/useScheduler-24b2466a.js"])),Pb=V.lazy(()=>Af(()=>import("./Settings-4b157323.js"),["assets/Settings-4b157323.js","assets/Card-39a532c0.js","assets/Button-062e88f2.js","assets/Switch-80743774.js","assets/Accordion-26654bd1.js"])),xb=V.lazy(()=>Af(()=>import("./WizardStep1-5401fcbd.js"),["assets/WizardStep1-5401fcbd.js","assets/Button-062e88f2.js","assets/Select-d6f2aabd.js","assets/Textarea-82004f9a.js","assets/Accordion-26654bd1.js","assets/Card-39a532c0.js"])),Rb=V.lazy(()=>Af(()=>import("./WizardStep2-3fdb72d5.js"),["assets/WizardStep2-3fdb72d5.js","assets/Button-062e88f2.js","assets/Card-39a532c0.js","assets/Select-d6f2aabd.js","assets/Textarea-82004f9a.js"])),Nb=V.lazy(()=>Af(()=>import("./WizardStep3-82499d93.js"),["assets/WizardStep3-82499d93.js","assets/Button-062e88f2.js","assets/Card-39a532c0.js","assets/Checkbox-6b3e04c0.js","assets/Select-d6f2aabd.js","assets/Switch-80743774.js","assets/useScheduler-24b2466a.js"])),Ob=V.lazy(()=>Af(()=>import("./TaskDetails-d35f6f34.js"),["assets/TaskDetails-d35f6f34.js","assets/Card-39a532c0.js","assets/Button-062e88f2.js","assets/Checkbox-6b3e04c0.js"])),Lb=V.lazy(()=>Af(()=>import("./Schedule-e71f9ed2.js"),["assets/Schedule-e71f9ed2.js","assets/Button-062e88f2.js","assets/time-f6c7f5b8.js"])),Ab=V.lazy(()=>Af(()=>import("./Progress-459ab092.js"),["assets/Progress-459ab092.js","assets/time-f6c7f5b8.js"]));function Db(){const{user:e}=ub();return Y.jsx(hf,{to:e?"/dashboard":"/login",replace:!0})}function Mb(){return Y.jsx(lb,{children:Y.jsx(_b,{children:Y.jsx(V.Suspense,{fallback:Y.jsx("div",{children:"Loading..."}),children:Y.jsxs(gf,{children:[Y.jsx(pf,{path:"/login",element:Y.jsx(Eb,{})}),Y.jsx(pf,{path:"/signup",element:Y.jsx(Ib,{})}),Y.jsx(pf,{path:"/verify-email",element:Y.jsx(Cb,{})}),Y.jsx(pf,{path:"/dashboard",element:Y.jsx(cb,{children:Y.jsx(gb,{children:Y.jsx(Tb,{})})})}),Y.jsx(pf,{path:"/settings",element:Y.jsx(cb,{children:Y.jsx(gb,{children:Y.jsx(Pb,{})})})}),Y.jsx(pf,{path:"/schedule",element:Y.jsx(cb,{children:Y.jsx(gb,{children:Y.jsx(Lb,{})})})}),Y.jsx(pf,{path:"/progress",element:Y.jsx(cb,{children:Y.jsx(gb,{children:Y.jsx(Ab,{})})})}),Y.jsx(pf,{path:"/wizard/1",element:Y.jsx(cb,{children:Y.jsx(gb,{children:Y.jsx(xb,{})})})}),Y.jsx(pf,{path:"/wizard/2",element:Y.jsx(cb,{children:Y.jsx(gb,{children:Y.jsx(Rb,{})})})}),Y.jsx(pf,{path:"/wizard/3",element:Y.jsx(cb,{children:Y.jsx(gb,{children:Y.jsx(Nb,{})})})}),Y.jsx(pf,{path:"/task/:id",element:Y.jsx(cb,{children:Y.jsx(gb,{children:Y.jsx(Ob,{})})})}),Y.jsx(pf,{path:"/",element:Y.jsx(Db,{})})]})})})})}X.createRoot(document.getElementById("root")).render(Y.jsx(H.StrictMode,{children:Y.jsx(Ef,{children:Y.jsx(Mb,{})})}));export{db as I,Tf as L,H as R,ub as a,ob as b,Kv as c,Gv as d,Xd as e,Wv as f,Sb as g,tf as h,fb as i,Y as j,t as k,n as l,sd as m,V as r,qv as s,ef as u};
