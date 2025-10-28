const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Signup-CW_XXvmU.js","assets/Card-oX1d5raC.js","assets/Input-COPS-Y84.js","assets/Button-6eMtmBLB.js","assets/Checkbox-DYh2M-Iu.js","assets/Dashboard-8lKCuVUO.js","assets/Settings-BPstx0Z8.js","assets/TaskDetails-BwuBOROE.js","assets/index.esm-DaNM0Ui_.js","assets/EditTask-CZk-wiZf.js","assets/Schedule-D24r1FNR.js","assets/time-vicycg6B.js","assets/Progress-DnbM0dvD.js","assets/Wizard-mtRibr1X.js"])))=>i.map(i=>d[i]);
function e(e,t){for(var n=0;n<t.length;n++){const r=t[n];if("string"!=typeof r&&!Array.isArray(r))for(const t in r)if("default"!==t&&!(t in e)){const n=Object.getOwnPropertyDescriptor(r,t);n&&Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:()=>r[t]})}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)}).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function n(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var r,a,i,o,s={exports:{}},l={},u={exports:{}},c={};function d(){if(r)return c;r=1;var e=Symbol.for("react.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),s=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),h=Symbol.iterator;var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function v(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||p}function y(){}function b(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||p}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=v.prototype;var w=b.prototype=new y;w.constructor=b,m(w,v.prototype),w.isPureReactComponent=!0;var k=Array.isArray,_=Object.prototype.hasOwnProperty,S={current:null},E={key:!0,ref:!0,__self:!0,__source:!0};function I(t,n,r){var a,i={},o=null,s=null;if(null!=n)for(a in void 0!==n.ref&&(s=n.ref),void 0!==n.key&&(o=""+n.key),n)_.call(n,a)&&!E.hasOwnProperty(a)&&(i[a]=n[a]);var l=arguments.length-2;if(1===l)i.children=r;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(a in l=t.defaultProps)void 0===i[a]&&(i[a]=l[a]);return{$$typeof:e,type:t,key:o,ref:s,props:i,_owner:S.current}}function C(t){return"object"==typeof t&&null!==t&&t.$$typeof===e}var T=/\/+/g;function P(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(e){return t[e]})}(""+e.key):t.toString(36)}function x(n,r,a,i,o){var s=typeof n;"undefined"!==s&&"boolean"!==s||(n=null);var l=!1;if(null===n)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(n.$$typeof){case e:case t:l=!0}}if(l)return o=o(l=n),n=""===i?"."+P(l,0):i,k(o)?(a="",null!=n&&(a=n.replace(T,"$&/")+"/"),x(o,r,a,"",function(e){return e})):null!=o&&(C(o)&&(o=function(t,n){return{$$typeof:e,type:t.type,key:n,ref:t.ref,props:t.props,_owner:t._owner}}(o,a+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(T,"$&/")+"/")+n)),r.push(o)),1;if(l=0,i=""===i?".":i+":",k(n))for(var u=0;u<n.length;u++){var c=i+P(s=n[u],u);l+=x(s,r,a,c,o)}else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=h&&e[h]||e["@@iterator"])?e:null}(n),"function"==typeof c)for(n=c.call(n),u=0;!(s=n.next()).done;)l+=x(s=s.value,r,a,c=i+P(s,u++),o);else if("object"===s)throw r=String(n),Error("Objects are not valid as a React child (found: "+("[object Object]"===r?"object with keys {"+Object.keys(n).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return l}function N(e,t,n){if(null==e)return e;var r=[],a=0;return x(e,r,"","",function(e){return t.call(n,e,a++)}),r}function R(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)},function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var O={current:null},L={transition:null},A={ReactCurrentDispatcher:O,ReactCurrentBatchConfig:L,ReactCurrentOwner:S};function D(){throw Error("act(...) is not supported in production builds of React.")}return c.Children={map:N,forEach:function(e,t,n){N(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return N(e,function(){t++}),t},toArray:function(e){return N(e,function(e){return e})||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},c.Component=v,c.Fragment=n,c.Profiler=i,c.PureComponent=b,c.StrictMode=a,c.Suspense=u,c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,c.act=D,c.cloneElement=function(t,n,r){if(null==t)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var a=m({},t.props),i=t.key,o=t.ref,s=t._owner;if(null!=n){if(void 0!==n.ref&&(o=n.ref,s=S.current),void 0!==n.key&&(i=""+n.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in n)_.call(n,u)&&!E.hasOwnProperty(u)&&(a[u]=void 0===n[u]&&void 0!==l?l[u]:n[u])}var u=arguments.length-2;if(1===u)a.children=r;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];a.children=l}return{$$typeof:e,type:t.type,key:i,ref:o,props:a,_owner:s}},c.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:o,_context:e},e.Consumer=e},c.createElement=I,c.createFactory=function(e){var t=I.bind(null,e);return t.type=e,t},c.createRef=function(){return{current:null}},c.forwardRef=function(e){return{$$typeof:l,render:e}},c.isValidElement=C,c.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:R}},c.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},c.startTransition=function(e){var t=L.transition;L.transition={};try{e()}finally{L.transition=t}},c.unstable_act=D,c.useCallback=function(e,t){return O.current.useCallback(e,t)},c.useContext=function(e){return O.current.useContext(e)},c.useDebugValue=function(){},c.useDeferredValue=function(e){return O.current.useDeferredValue(e)},c.useEffect=function(e,t){return O.current.useEffect(e,t)},c.useId=function(){return O.current.useId()},c.useImperativeHandle=function(e,t,n){return O.current.useImperativeHandle(e,t,n)},c.useInsertionEffect=function(e,t){return O.current.useInsertionEffect(e,t)},c.useLayoutEffect=function(e,t){return O.current.useLayoutEffect(e,t)},c.useMemo=function(e,t){return O.current.useMemo(e,t)},c.useReducer=function(e,t,n){return O.current.useReducer(e,t,n)},c.useRef=function(e){return O.current.useRef(e)},c.useState=function(e){return O.current.useState(e)},c.useSyncExternalStore=function(e,t,n){return O.current.useSyncExternalStore(e,t,n)},c.useTransition=function(){return O.current.useTransition()},c.version="18.3.1",c}function f(){return a||(a=1,u.exports=d()),u.exports}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h=(o||(o=1,s.exports=function(){if(i)return l;i=1;var e=f(),t=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function s(e,n,i){var s,l={},u=null,c=null;for(s in void 0!==i&&(u=""+i),void 0!==n.key&&(u=""+n.key),void 0!==n.ref&&(c=n.ref),n)r.call(n,s)&&!o.hasOwnProperty(s)&&(l[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===l[s]&&(l[s]=n[s]);return{$$typeof:t,type:e,key:u,ref:c,props:l,_owner:a.current}}return l.Fragment=n,l.jsx=s,l.jsxs=s,l}()),s.exports),p=f();const m=n(p),g=e({__proto__:null,default:m},[p]);var v,y,b,w,k,_={},S={exports:{}},E={},I={exports:{}},C={};function T(){return y||(y=1,I.exports=(v||(v=1,function(e){function t(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,i=e[r];if(!(0<a(i,t)))break e;e[r]=t,e[n]=i,n=r}}function n(e){return 0===e.length?null:e[0]}function r(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,i=e.length,o=i>>>1;r<o;){var s=2*(r+1)-1,l=e[s],u=s+1,c=e[u];if(0>a(l,n))u<i&&0>a(c,l)?(e[r]=c,e[u]=n,r=u):(e[r]=l,e[s]=n,r=s);else{if(!(u<i&&0>a(c,n)))break e;e[r]=c,e[u]=n,r=u}}}return t}function a(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"==typeof performance&&"function"==typeof performance.now){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var l=[],u=[],c=1,d=null,f=3,h=!1,p=!1,m=!1,g="function"==typeof setTimeout?setTimeout:null,v="function"==typeof clearTimeout?clearTimeout:null,y="undefined"!=typeof setImmediate?setImmediate:null;function b(e){for(var a=n(u);null!==a;){if(null===a.callback)r(u);else{if(!(a.startTime<=e))break;r(u),a.sortIndex=a.expirationTime,t(l,a)}a=n(u)}}function w(e){if(m=!1,b(e),!p)if(null!==n(l))p=!0,O(k);else{var t=n(u);null!==t&&L(w,t.startTime-e)}}function k(t,a){p=!1,m&&(m=!1,v(I),I=-1),h=!0;var i=f;try{for(b(a),d=n(l);null!==d&&(!(d.expirationTime>a)||t&&!P());){var o=d.callback;if("function"==typeof o){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=a);a=e.unstable_now(),"function"==typeof s?d.callback=s:d===n(l)&&r(l),b(a)}else r(l);d=n(l)}if(null!==d)var c=!0;else{var g=n(u);null!==g&&L(w,g.startTime-a),c=!1}return c}finally{d=null,f=i,h=!1}}"undefined"!=typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var _,S=!1,E=null,I=-1,C=5,T=-1;function P(){return!(e.unstable_now()-T<C)}function x(){if(null!==E){var t=e.unstable_now();T=t;var n=!0;try{n=E(!0,t)}finally{n?_():(S=!1,E=null)}}else S=!1}if("function"==typeof y)_=function(){y(x)};else if("undefined"!=typeof MessageChannel){var N=new MessageChannel,R=N.port2;N.port1.onmessage=x,_=function(){R.postMessage(null)}}else _=function(){g(x,0)};function O(e){E=e,S||(S=!0,_())}function L(t,n){I=g(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_continueExecution=function(){p||h||(p=!0,O(k))},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,a,i){var o=e.unstable_now();switch(i="object"==typeof i&&null!==i&&"number"==typeof(i=i.delay)&&0<i?o+i:o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return r={id:c++,callback:a,priorityLevel:r,startTime:i,expirationTime:s=i+s,sortIndex:-1},i>o?(r.sortIndex=i,t(u,r),null===n(l)&&r===n(u)&&(m?(v(I),I=-1):m=!0,L(w,i-o))):(r.sortIndex=s,t(l,r),p||h||(p=!0,O(k))),r},e.unstable_shouldYield=P,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}}(C)),C)),I.exports}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function P(){if(b)return E;b=1;var e=f(),t=T();function n(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function i(e,t){o(e,t),o(e+"Capture",t)}function o(e,t){for(a[e]=t,e=0;e<t.length;e++)r.add(t[e])}var s=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement),l=Object.prototype.hasOwnProperty,u=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,c={},d={};function h(e,t,n,r,a,i,o){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var p={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){p[e]=new h(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];p[t]=new h(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){p[e]=new h(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){p[e]=new h(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){p[e]=new h(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){p[e]=new h(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){p[e]=new h(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){p[e]=new h(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){p[e]=new h(e,5,!1,e.toLowerCase(),null,!1,!1)});var m=/[\-:]([a-z])/g;function g(e){return e[1].toUpperCase()}function v(e,t,n,r){var a=p.hasOwnProperty(t)?p[t]:null;(null!==a?0!==a.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null==t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,a,r)&&(n=null),r||null===a?function(e){return!!l.call(d,e)||!l.call(c,e)&&(u.test(e)?d[e]=!0:(c[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=null===n?3!==a.type&&"":n:(t=a.attributeName,r=a.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(a=a.type)||4===a&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(m,g);p[t]=new h(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(m,g);p[t]=new h(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(m,g);p[t]=new h(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){p[e]=new h(e,1,!1,e.toLowerCase(),null,!1,!1)}),p.xlinkHref=new h("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){p[e]=new h(e,1,!1,e.toLowerCase(),null,!0,!0)});var y=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for("react.element"),k=Symbol.for("react.portal"),_=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),I=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),P=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),R=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),L=Symbol.for("react.lazy"),A=Symbol.for("react.offscreen"),D=Symbol.iterator;function M(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=D&&e[D]||e["@@iterator"])?e:null}var U,z=Object.assign;function F(e){if(void 0===U)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);U=t&&t[1]||""}return"\n"+U+e}var j=!1;function V(e,t){if(!e||j)return"";j=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&"string"==typeof u.stack){for(var a=u.stack.split("\n"),i=r.stack.split("\n"),o=a.length-1,s=i.length-1;1<=o&&0<=s&&a[o]!==i[s];)s--;for(;1<=o&&0<=s;o--,s--)if(a[o]!==i[s]){if(1!==o||1!==s)do{if(o--,0>--s||a[o]!==i[s]){var l="\n"+a[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}}while(1<=o&&0<=s);break}}}finally{j=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?F(e):""}function $(e){switch(e.tag){case 5:return F(e.type);case 16:return F("Lazy");case 13:return F("Suspense");case 19:return F("SuspenseList");case 0:case 2:case 15:return e=V(e.type,!1);case 11:return e=V(e.type.render,!1);case 1:return e=V(e.type,!0);default:return""}}function H(e){if(null==e)return null;if("function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case _:return"Fragment";case k:return"Portal";case I:return"Profiler";case S:return"StrictMode";case N:return"Suspense";case R:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case P:return(e.displayName||"Context")+".Consumer";case C:return(e._context.displayName||"Context")+".Provider";case x:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case O:return null!==(t=e.displayName||null)?t:H(e.type)||"Memo";case L:t=e._payload,e=e._init;try{return H(e(t))}catch(n){}}return null}function B(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return H(t);case 8:return t===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"==typeof t)return t.displayName||t.name||null;if("string"==typeof t)return t}return null}function W(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function q(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function K(e){e._valueTracker||(e._valueTracker=function(e){var t=q(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&void 0!==n&&"function"==typeof n.get&&"function"==typeof n.set){var a=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(e){r=""+e,i.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function G(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=q(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function Q(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function J(e,t){var n=t.checked;return z({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function Y(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=W(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function X(e,t){null!=(t=t.checked)&&v(e,"checked",t,!1)}function Z(e,t){X(e,t);var n=W(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?te(e,t.type,n):t.hasOwnProperty("defaultValue")&&te(e,t.type,W(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function ee(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function te(e,t,n){"number"===t&&Q(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ne=Array.isArray;function re(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+W(n),t=null,a=0;a<e.length;a++){if(e[a].value===n)return e[a].selected=!0,void(r&&(e[a].defaultSelected=!0));null!==t||e[a].disabled||(t=e[a])}null!==t&&(t.selected=!0)}}function ae(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(n(91));return z({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ie(e,t){var r=t.value;if(null==r){if(r=t.children,t=t.defaultValue,null!=r){if(null!=t)throw Error(n(92));if(ne(r)){if(1<r.length)throw Error(n(93));r=r[0]}t=r}null==t&&(t=""),r=t}e._wrapperState={initialValue:W(r)}}function oe(e,t){var n=W(t.value),r=W(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function se(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function le(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ue(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?le(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ce,de,fe=(de=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ce=ce||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ce.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction(function(){return de(e,t)})}:de);function he(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var pe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},me=["Webkit","ms","Moz","O"];function ge(e,t,n){return null==t||"boolean"==typeof t||""===t?"":n||"number"!=typeof t||0===t||pe.hasOwnProperty(e)&&pe[e]?(""+t).trim():t+"px"}function ve(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),a=ge(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}Object.keys(pe).forEach(function(e){me.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),pe[t]=pe[e]})});var ye=z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function be(e,t){if(t){if(ye[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(n(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(n(60));if("object"!=typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(n(61))}if(null!=t.style&&"object"!=typeof t.style)throw Error(n(62))}}function we(e,t){if(-1===e.indexOf("-"))return"string"==typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ke=null;function _e(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Se=null,Ee=null,Ie=null;function Ce(e){if(e=wa(e)){if("function"!=typeof Se)throw Error(n(280));var t=e.stateNode;t&&(t=_a(t),Se(e.stateNode,e.type,t))}}function Te(e){Ee?Ie?Ie.push(e):Ie=[e]:Ee=e}function Pe(){if(Ee){var e=Ee,t=Ie;if(Ie=Ee=null,Ce(e),t)for(e=0;e<t.length;e++)Ce(t[e])}}function xe(e,t){return e(t)}function Ne(){}var Re=!1;function Oe(e,t,n){if(Re)return e(t,n);Re=!0;try{return xe(e,t,n)}finally{Re=!1,(null!==Ee||null!==Ie)&&(Ne(),Pe())}}function Le(e,t){var r=e.stateNode;if(null===r)return null;var a=_a(r);if(null===a)return null;r=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(a=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!a;break e;default:e=!1}if(e)return null;if(r&&"function"!=typeof r)throw Error(n(231,t,typeof r));return r}var Ae=!1;if(s)try{var De={};Object.defineProperty(De,"passive",{get:function(){Ae=!0}}),window.addEventListener("test",De,De),window.removeEventListener("test",De,De)}catch(de){Ae=!1}function Me(e,t,n,r,a,i,o,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Ue=!1,ze=null,Fe=!1,je=null,Ve={onError:function(e){Ue=!0,ze=e}};function $e(e,t,n,r,a,i,o,s,l){Ue=!1,ze=null,Me.apply(Ve,arguments)}function He(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{!!(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function Be(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function We(e){if(He(e)!==e)throw Error(n(188))}function qe(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=He(e)))throw Error(n(188));return t!==e?null:e}for(var r=e,a=t;;){var i=r.return;if(null===i)break;var o=i.alternate;if(null===o){if(null!==(a=i.return)){r=a;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===r)return We(i),e;if(o===a)return We(i),t;o=o.sibling}throw Error(n(188))}if(r.return!==a.return)r=i,a=o;else{for(var s=!1,l=i.child;l;){if(l===r){s=!0,r=i,a=o;break}if(l===a){s=!0,a=i,r=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===r){s=!0,r=o,a=i;break}if(l===a){s=!0,a=o,r=i;break}l=l.sibling}if(!s)throw Error(n(189))}}if(r.alternate!==a)throw Error(n(190))}if(3!==r.tag)throw Error(n(188));return r.stateNode.current===r?e:t}(e))?Ke(e):null}function Ke(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=Ke(e);if(null!==t)return t;e=e.sibling}return null}var Ge=t.unstable_scheduleCallback,Qe=t.unstable_cancelCallback,Je=t.unstable_shouldYield,Ye=t.unstable_requestPaint,Xe=t.unstable_now,Ze=t.unstable_getCurrentPriorityLevel,et=t.unstable_ImmediatePriority,tt=t.unstable_UserBlockingPriority,nt=t.unstable_NormalPriority,rt=t.unstable_LowPriority,at=t.unstable_IdlePriority,it=null,ot=null;var st=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(lt(e)/ut|0)|0},lt=Math.log,ut=Math.LN2;var ct=64,dt=4194304;function ft(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ht(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,a=e.suspendedLanes,i=e.pingedLanes,o=268435455&n;if(0!==o){var s=o&~a;0!==s?r=ft(s):0!==(i&=o)&&(r=ft(i))}else 0!==(o=n&~a)?r=ft(o):0!==i&&(r=ft(i));if(0===r)return 0;if(0!==t&&t!==r&&0===(t&a)&&((a=r&-r)>=(i=t&-t)||16===a&&4194240&i))return t;if(4&r&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)a=1<<(n=31-st(t)),r|=e[n],t&=~a;return r}function pt(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function mt(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function gt(){var e=ct;return!(4194240&(ct<<=1))&&(ct=64),e}function vt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function yt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-st(t)]=n}function bt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-st(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var wt=0;function kt(e){return 1<(e&=-e)?4<e?268435455&e?16:536870912:4:1}var _t,St,Et,It,Ct,Tt=!1,Pt=[],xt=null,Nt=null,Rt=null,Ot=new Map,Lt=new Map,At=[],Dt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Mt(e,t){switch(e){case"focusin":case"focusout":xt=null;break;case"dragenter":case"dragleave":Nt=null;break;case"mouseover":case"mouseout":Rt=null;break;case"pointerover":case"pointerout":Ot.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Lt.delete(t.pointerId)}}function Ut(e,t,n,r,a,i){return null===e||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[a]},null!==t&&(null!==(t=wa(t))&&St(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==a&&-1===t.indexOf(a)&&t.push(a),e)}function zt(e){var t=ba(e.target);if(null!==t){var n=He(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=Be(n)))return e.blockedOn=t,void Ct(e.priority,function(){Et(n)})}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Ft(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Jt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=wa(n))&&St(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);ke=r,n.target.dispatchEvent(r),ke=null,t.shift()}return!0}function jt(e,t,n){Ft(e)&&n.delete(t)}function Vt(){Tt=!1,null!==xt&&Ft(xt)&&(xt=null),null!==Nt&&Ft(Nt)&&(Nt=null),null!==Rt&&Ft(Rt)&&(Rt=null),Ot.forEach(jt),Lt.forEach(jt)}function $t(e,n){e.blockedOn===n&&(e.blockedOn=null,Tt||(Tt=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Vt)))}function Ht(e){function t(t){return $t(t,e)}if(0<Pt.length){$t(Pt[0],e);for(var n=1;n<Pt.length;n++){var r=Pt[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==xt&&$t(xt,e),null!==Nt&&$t(Nt,e),null!==Rt&&$t(Rt,e),Ot.forEach(t),Lt.forEach(t),n=0;n<At.length;n++)(r=At[n]).blockedOn===e&&(r.blockedOn=null);for(;0<At.length&&null===(n=At[0]).blockedOn;)zt(n),null===n.blockedOn&&At.shift()}var Bt=y.ReactCurrentBatchConfig,Wt=!0;function qt(e,t,n,r){var a=wt,i=Bt.transition;Bt.transition=null;try{wt=1,Gt(e,t,n,r)}finally{wt=a,Bt.transition=i}}function Kt(e,t,n,r){var a=wt,i=Bt.transition;Bt.transition=null;try{wt=4,Gt(e,t,n,r)}finally{wt=a,Bt.transition=i}}function Gt(e,t,n,r){if(Wt){var a=Jt(e,t,n,r);if(null===a)Wr(e,t,r,Qt,n),Mt(e,r);else if(function(e,t,n,r,a){switch(t){case"focusin":return xt=Ut(xt,e,t,n,r,a),!0;case"dragenter":return Nt=Ut(Nt,e,t,n,r,a),!0;case"mouseover":return Rt=Ut(Rt,e,t,n,r,a),!0;case"pointerover":var i=a.pointerId;return Ot.set(i,Ut(Ot.get(i)||null,e,t,n,r,a)),!0;case"gotpointercapture":return i=a.pointerId,Lt.set(i,Ut(Lt.get(i)||null,e,t,n,r,a)),!0}return!1}(a,e,t,n,r))r.stopPropagation();else if(Mt(e,r),4&t&&-1<Dt.indexOf(e)){for(;null!==a;){var i=wa(a);if(null!==i&&_t(i),null===(i=Jt(e,t,n,r))&&Wr(e,t,r,Qt,n),i===a)break;a=i}null!==a&&r.stopPropagation()}else Wr(e,t,r,null,n)}}var Qt=null;function Jt(e,t,n,r){if(Qt=null,null!==(e=ba(e=_e(r))))if(null===(t=He(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=Be(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Qt=e,null}function Yt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ze()){case et:return 1;case tt:return 4;case nt:case rt:return 16;case at:return 536870912;default:return 16}default:return 16}}var Xt=null,Zt=null,en=null;function tn(){if(en)return en;var e,t,n=Zt,r=n.length,a="value"in Xt?Xt.value:Xt.textContent,i=a.length;for(e=0;e<r&&n[e]===a[e];e++);var o=r-e;for(t=1;t<=o&&n[r-t]===a[i-t];t++);return en=a.slice(e,1<t?1-t:void 0)}function nn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function rn(){return!0}function an(){return!1}function on(e){function t(t,n,r,a,i){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=a,this.target=i,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(a):a[o]);return this.isDefaultPrevented=(null!=a.defaultPrevented?a.defaultPrevented:!1===a.returnValue)?rn:an,this.isPropagationStopped=an,this}return z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=rn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=rn)},persist:function(){},isPersistent:rn}),t}var sn,ln,un,cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},dn=on(cn),fn=z({},cn,{view:0,detail:0}),hn=on(fn),pn=z({},fn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==un&&(un&&"mousemove"===e.type?(sn=e.screenX-un.screenX,ln=e.screenY-un.screenY):ln=sn=0,un=e),sn)},movementY:function(e){return"movementY"in e?e.movementY:ln}}),mn=on(pn),gn=on(z({},pn,{dataTransfer:0})),vn=on(z({},fn,{relatedTarget:0})),yn=on(z({},cn,{animationName:0,elapsedTime:0,pseudoElement:0})),bn=z({},cn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),wn=on(bn),kn=on(z({},cn,{data:0})),_n={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},En={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function In(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=En[e])&&!!t[e]}function Cn(){return In}var Tn=z({},fn,{key:function(e){if(e.key){var t=_n[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=nn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?Sn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cn,charCode:function(e){return"keypress"===e.type?nn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?nn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),Pn=on(Tn),xn=on(z({},pn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Nn=on(z({},fn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cn})),Rn=on(z({},cn,{propertyName:0,elapsedTime:0,pseudoElement:0})),On=z({},pn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ln=on(On),An=[9,13,27,32],Dn=s&&"CompositionEvent"in window,Mn=null;s&&"documentMode"in document&&(Mn=document.documentMode);var Un=s&&"TextEvent"in window&&!Mn,zn=s&&(!Dn||Mn&&8<Mn&&11>=Mn),Fn=String.fromCharCode(32),jn=!1;function Vn(e,t){switch(e){case"keyup":return-1!==An.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $n(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}var Hn=!1;var Bn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Bn[e.type]:"textarea"===t}function qn(e,t,n,r){Te(r),0<(t=Kr(t,"onChange")).length&&(n=new dn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Kn=null,Gn=null;function Qn(e){Fr(e,0)}function Jn(e){if(G(ka(e)))return e}function Yn(e,t){if("change"===e)return t}var Xn=!1;if(s){var Zn;if(s){var er="oninput"in document;if(!er){var tr=document.createElement("div");tr.setAttribute("oninput","return;"),er="function"==typeof tr.oninput}Zn=er}else Zn=!1;Xn=Zn&&(!document.documentMode||9<document.documentMode)}function nr(){Kn&&(Kn.detachEvent("onpropertychange",rr),Gn=Kn=null)}function rr(e){if("value"===e.propertyName&&Jn(Gn)){var t=[];qn(t,Gn,e,_e(e)),Oe(Qn,t)}}function ar(e,t,n){"focusin"===e?(nr(),Gn=n,(Kn=t).attachEvent("onpropertychange",rr)):"focusout"===e&&nr()}function ir(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Jn(Gn)}function or(e,t){if("click"===e)return Jn(t)}function sr(e,t){if("input"===e||"change"===e)return Jn(t)}var lr="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t};function ur(e,t){if(lr(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!l.call(t,a)||!lr(e[a],t[a]))return!1}return!0}function cr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function dr(e,t){var n,r=cr(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=cr(r)}}function fr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?fr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function hr(){for(var e=window,t=Q();t instanceof e.HTMLIFrameElement;){try{var n="string"==typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=Q((e=t.contentWindow).document)}return t}function pr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function mr(e){var t=hr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&fr(n.ownerDocument.documentElement,n)){if(null!==r&&pr(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var a=n.textContent.length,i=Math.min(r.start,a);r=void 0===r.end?i:Math.min(r.end,a),!e.extend&&i>r&&(a=r,r=i,i=a),a=dr(n,i);var o=dr(n,r);a&&o&&(1!==e.rangeCount||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&((t=t.createRange()).setStart(a.node,a.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"==typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var gr=s&&"documentMode"in document&&11>=document.documentMode,vr=null,yr=null,br=null,wr=!1;function kr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;wr||null==vr||vr!==Q(r)||("selectionStart"in(r=vr)&&pr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},br&&ur(br,r)||(br=r,0<(r=Kr(yr,"onSelect")).length&&(t=new dn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=vr)))}function _r(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Sr={animationend:_r("Animation","AnimationEnd"),animationiteration:_r("Animation","AnimationIteration"),animationstart:_r("Animation","AnimationStart"),transitionend:_r("Transition","TransitionEnd")},Er={},Ir={};function Cr(e){if(Er[e])return Er[e];if(!Sr[e])return e;var t,n=Sr[e];for(t in n)if(n.hasOwnProperty(t)&&t in Ir)return Er[e]=n[t];return e}s&&(Ir=document.createElement("div").style,"AnimationEvent"in window||(delete Sr.animationend.animation,delete Sr.animationiteration.animation,delete Sr.animationstart.animation),"TransitionEvent"in window||delete Sr.transitionend.transition);var Tr=Cr("animationend"),Pr=Cr("animationiteration"),xr=Cr("animationstart"),Nr=Cr("transitionend"),Rr=new Map,Or="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Lr(e,t){Rr.set(e,t),i(t,[e])}for(var Ar=0;Ar<Or.length;Ar++){var Dr=Or[Ar];Lr(Dr.toLowerCase(),"on"+(Dr[0].toUpperCase()+Dr.slice(1)))}Lr(Tr,"onAnimationEnd"),Lr(Pr,"onAnimationIteration"),Lr(xr,"onAnimationStart"),Lr("dblclick","onDoubleClick"),Lr("focusin","onFocus"),Lr("focusout","onBlur"),Lr(Nr,"onTransitionEnd"),o("onMouseEnter",["mouseout","mouseover"]),o("onMouseLeave",["mouseout","mouseover"]),o("onPointerEnter",["pointerout","pointerover"]),o("onPointerLeave",["pointerout","pointerover"]),i("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),i("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),i("onBeforeInput",["compositionend","keypress","textInput","paste"]),i("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),i("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),i("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ur=new Set("cancel close invalid load scroll toggle".split(" ").concat(Mr));function zr(e,t,r){var a=e.type||"unknown-event";e.currentTarget=r,function(e,t,r,a,i,o,s,l,u){if($e.apply(this,arguments),Ue){if(!Ue)throw Error(n(198));var c=ze;Ue=!1,ze=null,Fe||(Fe=!0,je=c)}}(a,t,void 0,e),e.currentTarget=null}function Fr(e,t){t=!!(4&t);for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==i&&a.isPropagationStopped())break e;zr(a,s,u),i=l}else for(o=0;o<r.length;o++){if(l=(s=r[o]).instance,u=s.currentTarget,s=s.listener,l!==i&&a.isPropagationStopped())break e;zr(a,s,u),i=l}}}if(Fe)throw e=je,Fe=!1,je=null,e}function jr(e,t){var n=t[ga];void 0===n&&(n=t[ga]=new Set);var r=e+"__bubble";n.has(r)||(Br(t,e,2,!1),n.add(r))}function Vr(e,t,n){var r=0;t&&(r|=4),Br(n,e,r,t)}var $r="_reactListening"+Math.random().toString(36).slice(2);function Hr(e){if(!e[$r]){e[$r]=!0,r.forEach(function(t){"selectionchange"!==t&&(Ur.has(t)||Vr(t,!1,e),Vr(t,!0,e))});var t=9===e.nodeType?e:e.ownerDocument;null===t||t[$r]||(t[$r]=!0,Vr("selectionchange",!1,t))}}function Br(e,t,n,r){switch(Yt(t)){case 1:var a=qt;break;case 4:a=Kt;break;default:a=Gt}n=a.bind(null,t,n,e),a=void 0,!Ae||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(a=!0),r?void 0!==a?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):void 0!==a?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Wr(e,t,n,r,a){var i=r;if(!(1&t||2&t||null===r))e:for(;;){if(null===r)return;var o=r.tag;if(3===o||4===o){var s=r.stateNode.containerInfo;if(s===a||8===s.nodeType&&s.parentNode===a)break;if(4===o)for(o=r.return;null!==o;){var l=o.tag;if((3===l||4===l)&&((l=o.stateNode.containerInfo)===a||8===l.nodeType&&l.parentNode===a))return;o=o.return}for(;null!==s;){if(null===(o=ba(s)))return;if(5===(l=o.tag)||6===l){r=i=o;continue e}s=s.parentNode}}r=r.return}Oe(function(){var r=i,a=_e(n),o=[];e:{var s=Rr.get(e);if(void 0!==s){var l=dn,u=e;switch(e){case"keypress":if(0===nn(n))break e;case"keydown":case"keyup":l=Pn;break;case"focusin":u="focus",l=vn;break;case"focusout":u="blur",l=vn;break;case"beforeblur":case"afterblur":l=vn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":l=mn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":l=gn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":l=Nn;break;case Tr:case Pr:case xr:l=yn;break;case Nr:l=Rn;break;case"scroll":l=hn;break;case"wheel":l=Ln;break;case"copy":case"cut":case"paste":l=wn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":l=xn}var c=!!(4&t),d=!c&&"scroll"===e,f=c?null!==s?s+"Capture":null:s;c=[];for(var h,p=r;null!==p;){var m=(h=p).stateNode;if(5===h.tag&&null!==m&&(h=m,null!==f&&(null!=(m=Le(p,f))&&c.push(qr(p,m,h)))),d)break;p=p.return}0<c.length&&(s=new l(s,u,null,n,a),o.push({event:s,listeners:c}))}}if(!(7&t)){if(l="mouseout"===e||"pointerout"===e,(!(s="mouseover"===e||"pointerover"===e)||n===ke||!(u=n.relatedTarget||n.fromElement)||!ba(u)&&!u[ma])&&(l||s)&&(s=a.window===a?a:(s=a.ownerDocument)?s.defaultView||s.parentWindow:window,l?(l=r,null!==(u=(u=n.relatedTarget||n.toElement)?ba(u):null)&&(u!==(d=He(u))||5!==u.tag&&6!==u.tag)&&(u=null)):(l=null,u=r),l!==u)){if(c=mn,m="onMouseLeave",f="onMouseEnter",p="mouse","pointerout"!==e&&"pointerover"!==e||(c=xn,m="onPointerLeave",f="onPointerEnter",p="pointer"),d=null==l?s:ka(l),h=null==u?s:ka(u),(s=new c(m,p+"leave",l,n,a)).target=d,s.relatedTarget=h,m=null,ba(a)===r&&((c=new c(f,p+"enter",u,n,a)).target=h,c.relatedTarget=d,m=c),d=m,l&&u)e:{for(f=u,p=0,h=c=l;h;h=Gr(h))p++;for(h=0,m=f;m;m=Gr(m))h++;for(;0<p-h;)c=Gr(c),p--;for(;0<h-p;)f=Gr(f),h--;for(;p--;){if(c===f||null!==f&&c===f.alternate)break e;c=Gr(c),f=Gr(f)}c=null}else c=null;null!==l&&Qr(o,s,l,c,!1),null!==u&&null!==d&&Qr(o,d,u,c,!0)}if("select"===(l=(s=r?ka(r):window).nodeName&&s.nodeName.toLowerCase())||"input"===l&&"file"===s.type)var g=Yn;else if(Wn(s))if(Xn)g=sr;else{g=ir;var v=ar}else(l=s.nodeName)&&"input"===l.toLowerCase()&&("checkbox"===s.type||"radio"===s.type)&&(g=or);switch(g&&(g=g(e,r))?qn(o,g,n,a):(v&&v(e,s,r),"focusout"===e&&(v=s._wrapperState)&&v.controlled&&"number"===s.type&&te(s,"number",s.value)),v=r?ka(r):window,e){case"focusin":(Wn(v)||"true"===v.contentEditable)&&(vr=v,yr=r,br=null);break;case"focusout":br=yr=vr=null;break;case"mousedown":wr=!0;break;case"contextmenu":case"mouseup":case"dragend":wr=!1,kr(o,n,a);break;case"selectionchange":if(gr)break;case"keydown":case"keyup":kr(o,n,a)}var y;if(Dn)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Hn?Vn(e,n)&&(b="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(b="onCompositionStart");b&&(zn&&"ko"!==n.locale&&(Hn||"onCompositionStart"!==b?"onCompositionEnd"===b&&Hn&&(y=tn()):(Zt="value"in(Xt=a)?Xt.value:Xt.textContent,Hn=!0)),0<(v=Kr(r,b)).length&&(b=new kn(b,e,null,n,a),o.push({event:b,listeners:v}),y?b.data=y:null!==(y=$n(n))&&(b.data=y))),(y=Un?function(e,t){switch(e){case"compositionend":return $n(t);case"keypress":return 32!==t.which?null:(jn=!0,Fn);case"textInput":return(e=t.data)===Fn&&jn?null:e;default:return null}}(e,n):function(e,t){if(Hn)return"compositionend"===e||!Dn&&Vn(e,t)?(e=tn(),en=Zt=Xt=null,Hn=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return zn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=Kr(r,"onBeforeInput")).length&&(a=new kn("onBeforeInput","beforeinput",null,n,a),o.push({event:a,listeners:r}),a.data=y))}Fr(o,t)})}function qr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Kr(e,t){for(var n=t+"Capture",r=[];null!==e;){var a=e,i=a.stateNode;5===a.tag&&null!==i&&(a=i,null!=(i=Le(e,n))&&r.unshift(qr(e,i,a)),null!=(i=Le(e,t))&&r.push(qr(e,i,a))),e=e.return}return r}function Gr(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Qr(e,t,n,r,a){for(var i=t._reactName,o=[];null!==n&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(null!==l&&l===r)break;5===s.tag&&null!==u&&(s=u,a?null!=(l=Le(n,i))&&o.unshift(qr(n,l,s)):a||null!=(l=Le(n,i))&&o.push(qr(n,l,s))),n=n.return}0!==o.length&&e.push({event:t,listeners:o})}var Jr=/\r\n?/g,Yr=/\u0000|\uFFFD/g;function Xr(e){return("string"==typeof e?e:""+e).replace(Jr,"\n").replace(Yr,"")}function Zr(e,t,r){if(t=Xr(t),Xr(e)!==t&&r)throw Error(n(425))}function ea(){}var ta=null,na=null;function ra(e,t){return"textarea"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var aa="function"==typeof setTimeout?setTimeout:void 0,ia="function"==typeof clearTimeout?clearTimeout:void 0,oa="function"==typeof Promise?Promise:void 0,sa="function"==typeof queueMicrotask?queueMicrotask:void 0!==oa?function(e){return oa.resolve(null).then(e).catch(la)}:aa;function la(e){setTimeout(function(){throw e})}function ua(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&8===a.nodeType)if("/$"===(n=a.data)){if(0===r)return e.removeChild(a),void Ht(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=a}while(n);Ht(t)}function ca(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function da(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var fa=Math.random().toString(36).slice(2),ha="__reactFiber$"+fa,pa="__reactProps$"+fa,ma="__reactContainer$"+fa,ga="__reactEvents$"+fa,va="__reactListeners$"+fa,ya="__reactHandles$"+fa;function ba(e){var t=e[ha];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ma]||n[ha]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=da(e);null!==e;){if(n=e[ha])return n;e=da(e)}return t}n=(e=n).parentNode}return null}function wa(e){return!(e=e[ha]||e[ma])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function ka(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(n(33))}function _a(e){return e[pa]||null}var Sa=[],Ea=-1;function Ia(e){return{current:e}}function Ca(e){0>Ea||(e.current=Sa[Ea],Sa[Ea]=null,Ea--)}function Ta(e,t){Ea++,Sa[Ea]=e.current,e.current=t}var Pa={},xa=Ia(Pa),Na=Ia(!1),Ra=Pa;function Oa(e,t){var n=e.type.contextTypes;if(!n)return Pa;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a,i={};for(a in n)i[a]=t[a];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function La(e){return null!=(e=e.childContextTypes)}function Aa(){Ca(Na),Ca(xa)}function Da(e,t,r){if(xa.current!==Pa)throw Error(n(168));Ta(xa,t),Ta(Na,r)}function Ma(e,t,r){var a=e.stateNode;if(t=t.childContextTypes,"function"!=typeof a.getChildContext)return r;for(var i in a=a.getChildContext())if(!(i in t))throw Error(n(108,B(e)||"Unknown",i));return z({},r,a)}function Ua(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Pa,Ra=xa.current,Ta(xa,e),Ta(Na,Na.current),!0}function za(e,t,r){var a=e.stateNode;if(!a)throw Error(n(169));r?(e=Ma(e,t,Ra),a.__reactInternalMemoizedMergedChildContext=e,Ca(Na),Ca(xa),Ta(xa,e)):Ca(Na),Ta(Na,r)}var Fa=null,ja=!1,Va=!1;function $a(e){null===Fa?Fa=[e]:Fa.push(e)}function Ha(){if(!Va&&null!==Fa){Va=!0;var e=0,t=wt;try{var n=Fa;for(wt=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Fa=null,ja=!1}catch(a){throw null!==Fa&&(Fa=Fa.slice(e+1)),Ge(et,Ha),a}finally{wt=t,Va=!1}}return null}var Ba=[],Wa=0,qa=null,Ka=0,Ga=[],Qa=0,Ja=null,Ya=1,Xa="";function Za(e,t){Ba[Wa++]=Ka,Ba[Wa++]=qa,qa=e,Ka=t}function ei(e,t,n){Ga[Qa++]=Ya,Ga[Qa++]=Xa,Ga[Qa++]=Ja,Ja=e;var r=Ya;e=Xa;var a=32-st(r)-1;r&=~(1<<a),n+=1;var i=32-st(t)+a;if(30<i){var o=a-a%5;i=(r&(1<<o)-1).toString(32),r>>=o,a-=o,Ya=1<<32-st(t)+a|n<<a|r,Xa=i+e}else Ya=1<<i|n<<a|r,Xa=e}function ti(e){null!==e.return&&(Za(e,1),ei(e,1,0))}function ni(e){for(;e===qa;)qa=Ba[--Wa],Ba[Wa]=null,Ka=Ba[--Wa],Ba[Wa]=null;for(;e===Ja;)Ja=Ga[--Qa],Ga[Qa]=null,Xa=Ga[--Qa],Ga[Qa]=null,Ya=Ga[--Qa],Ga[Qa]=null}var ri=null,ai=null,ii=!1,oi=null;function si(e,t){var n=Ou(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function li(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,ri=e,ai=ca(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,ri=e,ai=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==Ja?{id:Ya,overflow:Xa}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Ou(18,null,null,0)).stateNode=t,n.return=e,e.child=n,ri=e,ai=null,!0);default:return!1}}function ui(e){return!(!(1&e.mode)||128&e.flags)}function ci(e){if(ii){var t=ai;if(t){var r=t;if(!li(e,t)){if(ui(e))throw Error(n(418));t=ca(r.nextSibling);var a=ri;t&&li(e,t)?si(a,r):(e.flags=-4097&e.flags|2,ii=!1,ri=e)}}else{if(ui(e))throw Error(n(418));e.flags=-4097&e.flags|2,ii=!1,ri=e}}}function di(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;ri=e}function fi(e){if(e!==ri)return!1;if(!ii)return di(e),ii=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!ra(e.type,e.memoizedProps)),t&&(t=ai)){if(ui(e))throw hi(),Error(n(418));for(;t;)si(e,t),t=ca(t.nextSibling)}if(di(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(n(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var r=e.data;if("/$"===r){if(0===t){ai=ca(e.nextSibling);break e}t--}else"$"!==r&&"$!"!==r&&"$?"!==r||t++}e=e.nextSibling}ai=null}}else ai=ri?ca(e.stateNode.nextSibling):null;return!0}function hi(){for(var e=ai;e;)e=ca(e.nextSibling)}function pi(){ai=ri=null,ii=!1}function mi(e){null===oi?oi=[e]:oi.push(e)}var gi=y.ReactCurrentBatchConfig;function vi(e,t,r){if(null!==(e=r.ref)&&"function"!=typeof e&&"object"!=typeof e){if(r._owner){if(r=r._owner){if(1!==r.tag)throw Error(n(309));var a=r.stateNode}if(!a)throw Error(n(147,e));var i=a,o=""+e;return null!==t&&null!==t.ref&&"function"==typeof t.ref&&t.ref._stringRef===o?t.ref:((t=function(e){var t=i.refs;null===e?delete t[o]:t[o]=e})._stringRef=o,t)}if("string"!=typeof e)throw Error(n(284));if(!r._owner)throw Error(n(290,e))}return e}function yi(e,t){throw e=Object.prototype.toString.call(t),Error(n(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function bi(e){return(0,e._init)(e._payload)}function wi(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function r(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function a(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function i(e,t){return(e=Au(e,t)).index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function s(t){return e&&null===t.alternate&&(t.flags|=2),t}function l(e,t,n,r){return null===t||6!==t.tag?((t=zu(n,e.mode,r)).return=e,t):((t=i(t,n)).return=e,t)}function u(e,t,n,r){var a=n.type;return a===_?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===a||"object"==typeof a&&null!==a&&a.$$typeof===L&&bi(a)===t.type)?((r=i(t,n.props)).ref=vi(e,t,n),r.return=e,r):((r=Du(n.type,n.key,n.props,null,e.mode,r)).ref=vi(e,t,n),r.return=e,r)}function c(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Fu(n,e.mode,r)).return=e,t):((t=i(t,n.children||[])).return=e,t)}function d(e,t,n,r,a){return null===t||7!==t.tag?((t=Mu(n,e.mode,r,a)).return=e,t):((t=i(t,n)).return=e,t)}function f(e,t,n){if("string"==typeof t&&""!==t||"number"==typeof t)return(t=zu(""+t,e.mode,n)).return=e,t;if("object"==typeof t&&null!==t){switch(t.$$typeof){case w:return(n=Du(t.type,t.key,t.props,null,e.mode,n)).ref=vi(e,null,t),n.return=e,n;case k:return(t=Fu(t,e.mode,n)).return=e,t;case L:return f(e,(0,t._init)(t._payload),n)}if(ne(t)||M(t))return(t=Mu(t,e.mode,n,null)).return=e,t;yi(e,t)}return null}function h(e,t,n,r){var a=null!==t?t.key:null;if("string"==typeof n&&""!==n||"number"==typeof n)return null!==a?null:l(e,t,""+n,r);if("object"==typeof n&&null!==n){switch(n.$$typeof){case w:return n.key===a?u(e,t,n,r):null;case k:return n.key===a?c(e,t,n,r):null;case L:return h(e,t,(a=n._init)(n._payload),r)}if(ne(n)||M(n))return null!==a?null:d(e,t,n,r,null);yi(e,n)}return null}function p(e,t,n,r,a){if("string"==typeof r&&""!==r||"number"==typeof r)return l(t,e=e.get(n)||null,""+r,a);if("object"==typeof r&&null!==r){switch(r.$$typeof){case w:return u(t,e=e.get(null===r.key?n:r.key)||null,r,a);case k:return c(t,e=e.get(null===r.key?n:r.key)||null,r,a);case L:return p(e,t,n,(0,r._init)(r._payload),a)}if(ne(r)||M(r))return d(t,e=e.get(n)||null,r,a,null);yi(t,r)}return null}return function l(u,c,d,m){if("object"==typeof d&&null!==d&&d.type===_&&null===d.key&&(d=d.props.children),"object"==typeof d&&null!==d){switch(d.$$typeof){case w:e:{for(var g=d.key,v=c;null!==v;){if(v.key===g){if((g=d.type)===_){if(7===v.tag){r(u,v.sibling),(c=i(v,d.props.children)).return=u,u=c;break e}}else if(v.elementType===g||"object"==typeof g&&null!==g&&g.$$typeof===L&&bi(g)===v.type){r(u,v.sibling),(c=i(v,d.props)).ref=vi(u,v,d),c.return=u,u=c;break e}r(u,v);break}t(u,v),v=v.sibling}d.type===_?((c=Mu(d.props.children,u.mode,m,d.key)).return=u,u=c):((m=Du(d.type,d.key,d.props,null,u.mode,m)).ref=vi(u,c,d),m.return=u,u=m)}return s(u);case k:e:{for(v=d.key;null!==c;){if(c.key===v){if(4===c.tag&&c.stateNode.containerInfo===d.containerInfo&&c.stateNode.implementation===d.implementation){r(u,c.sibling),(c=i(c,d.children||[])).return=u,u=c;break e}r(u,c);break}t(u,c),c=c.sibling}(c=Fu(d,u.mode,m)).return=u,u=c}return s(u);case L:return l(u,c,(v=d._init)(d._payload),m)}if(ne(d))return function(n,i,s,l){for(var u=null,c=null,d=i,m=i=0,g=null;null!==d&&m<s.length;m++){d.index>m?(g=d,d=null):g=d.sibling;var v=h(n,d,s[m],l);if(null===v){null===d&&(d=g);break}e&&d&&null===v.alternate&&t(n,d),i=o(v,i,m),null===c?u=v:c.sibling=v,c=v,d=g}if(m===s.length)return r(n,d),ii&&Za(n,m),u;if(null===d){for(;m<s.length;m++)null!==(d=f(n,s[m],l))&&(i=o(d,i,m),null===c?u=d:c.sibling=d,c=d);return ii&&Za(n,m),u}for(d=a(n,d);m<s.length;m++)null!==(g=p(d,n,m,s[m],l))&&(e&&null!==g.alternate&&d.delete(null===g.key?m:g.key),i=o(g,i,m),null===c?u=g:c.sibling=g,c=g);return e&&d.forEach(function(e){return t(n,e)}),ii&&Za(n,m),u}(u,c,d,m);if(M(d))return function(i,s,l,u){var c=M(l);if("function"!=typeof c)throw Error(n(150));if(null==(l=c.call(l)))throw Error(n(151));for(var d=c=null,m=s,g=s=0,v=null,y=l.next();null!==m&&!y.done;g++,y=l.next()){m.index>g?(v=m,m=null):v=m.sibling;var b=h(i,m,y.value,u);if(null===b){null===m&&(m=v);break}e&&m&&null===b.alternate&&t(i,m),s=o(b,s,g),null===d?c=b:d.sibling=b,d=b,m=v}if(y.done)return r(i,m),ii&&Za(i,g),c;if(null===m){for(;!y.done;g++,y=l.next())null!==(y=f(i,y.value,u))&&(s=o(y,s,g),null===d?c=y:d.sibling=y,d=y);return ii&&Za(i,g),c}for(m=a(i,m);!y.done;g++,y=l.next())null!==(y=p(m,i,g,y.value,u))&&(e&&null!==y.alternate&&m.delete(null===y.key?g:y.key),s=o(y,s,g),null===d?c=y:d.sibling=y,d=y);return e&&m.forEach(function(e){return t(i,e)}),ii&&Za(i,g),c}(u,c,d,m);yi(u,d)}return"string"==typeof d&&""!==d||"number"==typeof d?(d=""+d,null!==c&&6===c.tag?(r(u,c.sibling),(c=i(c,d)).return=u,u=c):(r(u,c),(c=zu(d,u.mode,m)).return=u,u=c),s(u)):r(u,c)}}var ki=wi(!0),_i=wi(!1),Si=Ia(null),Ei=null,Ii=null,Ci=null;function Ti(){Ci=Ii=Ei=null}function Pi(e){var t=Si.current;Ca(Si),e._currentValue=t}function xi(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ni(e,t){Ei=e,Ci=Ii=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(ws=!0),e.firstContext=null)}function Ri(e){var t=e._currentValue;if(Ci!==e)if(e={context:e,memoizedValue:t,next:null},null===Ii){if(null===Ei)throw Error(n(308));Ii=e,Ei.dependencies={lanes:0,firstContext:e}}else Ii=Ii.next=e;return t}var Oi=null;function Li(e){null===Oi?Oi=[e]:Oi.push(e)}function Ai(e,t,n,r){var a=t.interleaved;return null===a?(n.next=n,Li(t)):(n.next=a.next,a.next=n),t.interleaved=n,Di(e,r)}function Di(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var Mi=!1;function Ui(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function zi(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Fi(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ji(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,2&xl){var a=r.pending;return null===a?t.next=t:(t.next=a.next,a.next=t),r.pending=t,Di(e,n)}return null===(a=r.interleaved)?(t.next=t,Li(r)):(t.next=a.next,a.next=t),r.interleaved=t,Di(e,n)}function Vi(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,bt(e,n)}}function $i(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var a=null,i=null;if(null!==(n=n.firstBaseUpdate)){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===i?a=i=o:i=i.next=o,n=n.next}while(null!==n);null===i?a=i=t:i=i.next=t}else a=i=t;return n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Hi(e,t,n,r){var a=e.updateQueue;Mi=!1;var i=a.firstBaseUpdate,o=a.lastBaseUpdate,s=a.shared.pending;if(null!==s){a.shared.pending=null;var l=s,u=l.next;l.next=null,null===o?i=u:o.next=u,o=l;var c=e.alternate;null!==c&&((s=(c=c.updateQueue).lastBaseUpdate)!==o&&(null===s?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l))}if(null!==i){var d=a.baseState;for(o=0,c=u=l=null,s=i;;){var f=s.lane,h=s.eventTime;if((r&f)===f){null!==c&&(c=c.next={eventTime:h,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var p=e,m=s;switch(f=t,h=n,m.tag){case 1:if("function"==typeof(p=m.payload)){d=p.call(h,d,f);break e}d=p;break e;case 3:p.flags=-65537&p.flags|128;case 0:if(null==(f="function"==typeof(p=m.payload)?p.call(h,d,f):p))break e;d=z({},d,f);break e;case 2:Mi=!0}}null!==s.callback&&0!==s.lane&&(e.flags|=64,null===(f=a.effects)?a.effects=[s]:f.push(s))}else h={eventTime:h,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},null===c?(u=c=h,l=d):c=c.next=h,o|=f;if(null===(s=s.next)){if(null===(s=a.shared.pending))break;s=(f=s).next,f.next=null,a.lastBaseUpdate=f,a.shared.pending=null}}if(null===c&&(l=d),a.baseState=l,a.firstBaseUpdate=u,a.lastBaseUpdate=c,null!==(t=a.shared.interleaved)){a=t;do{o|=a.lane,a=a.next}while(a!==t)}else null===i&&(a.shared.lanes=0);Ul|=o,e.lanes=o,e.memoizedState=d}}function Bi(e,t,r){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var a=e[t],i=a.callback;if(null!==i){if(a.callback=null,a=r,"function"!=typeof i)throw Error(n(191,i));i.call(a)}}}var Wi={},qi=Ia(Wi),Ki=Ia(Wi),Gi=Ia(Wi);function Qi(e){if(e===Wi)throw Error(n(174));return e}function Ji(e,t){switch(Ta(Gi,t),Ta(Ki,e),Ta(qi,Wi),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ue(null,"");break;default:t=ue(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Ca(qi),Ta(qi,t)}function Yi(){Ca(qi),Ca(Ki),Ca(Gi)}function Xi(e){Qi(Gi.current);var t=Qi(qi.current),n=ue(t,e.type);t!==n&&(Ta(Ki,e),Ta(qi,n))}function Zi(e){Ki.current===e&&(Ca(qi),Ca(Ki))}var eo=Ia(0);function to(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(128&t.flags)return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var no=[];function ro(){for(var e=0;e<no.length;e++)no[e]._workInProgressVersionPrimary=null;no.length=0}var ao=y.ReactCurrentDispatcher,io=y.ReactCurrentBatchConfig,oo=0,so=null,lo=null,uo=null,co=!1,fo=!1,ho=0,po=0;function mo(){throw Error(n(321))}function go(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!lr(e[n],t[n]))return!1;return!0}function vo(e,t,r,a,i,o){if(oo=o,so=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ao.current=null===e||null===e.memoizedState?es:ts,e=r(a,i),fo){o=0;do{if(fo=!1,ho=0,25<=o)throw Error(n(301));o+=1,uo=lo=null,t.updateQueue=null,ao.current=ns,e=r(a,i)}while(fo)}if(ao.current=Zo,t=null!==lo&&null!==lo.next,oo=0,uo=lo=so=null,co=!1,t)throw Error(n(300));return e}function yo(){var e=0!==ho;return ho=0,e}function bo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===uo?so.memoizedState=uo=e:uo=uo.next=e,uo}function wo(){if(null===lo){var e=so.alternate;e=null!==e?e.memoizedState:null}else e=lo.next;var t=null===uo?so.memoizedState:uo.next;if(null!==t)uo=t,lo=e;else{if(null===e)throw Error(n(310));e={memoizedState:(lo=e).memoizedState,baseState:lo.baseState,baseQueue:lo.baseQueue,queue:lo.queue,next:null},null===uo?so.memoizedState=uo=e:uo=uo.next=e}return uo}function ko(e,t){return"function"==typeof t?t(e):t}function _o(e){var t=wo(),r=t.queue;if(null===r)throw Error(n(311));r.lastRenderedReducer=e;var a=lo,i=a.baseQueue,o=r.pending;if(null!==o){if(null!==i){var s=i.next;i.next=o.next,o.next=s}a.baseQueue=i=o,r.pending=null}if(null!==i){o=i.next,a=a.baseState;var l=s=null,u=null,c=o;do{var d=c.lane;if((oo&d)===d)null!==u&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),a=c.hasEagerState?c.eagerState:e(a,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};null===u?(l=u=f,s=a):u=u.next=f,so.lanes|=d,Ul|=d}c=c.next}while(null!==c&&c!==o);null===u?s=a:u.next=l,lr(a,t.memoizedState)||(ws=!0),t.memoizedState=a,t.baseState=s,t.baseQueue=u,r.lastRenderedState=a}if(null!==(e=r.interleaved)){i=e;do{o=i.lane,so.lanes|=o,Ul|=o,i=i.next}while(i!==e)}else null===i&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function So(e){var t=wo(),r=t.queue;if(null===r)throw Error(n(311));r.lastRenderedReducer=e;var a=r.dispatch,i=r.pending,o=t.memoizedState;if(null!==i){r.pending=null;var s=i=i.next;do{o=e(o,s.action),s=s.next}while(s!==i);lr(o,t.memoizedState)||(ws=!0),t.memoizedState=o,null===t.baseQueue&&(t.baseState=o),r.lastRenderedState=o}return[o,a]}function Eo(){}function Io(e,t){var r=so,a=wo(),i=t(),o=!lr(a.memoizedState,i);if(o&&(a.memoizedState=i,ws=!0),a=a.queue,Uo(Po.bind(null,r,a,e),[e]),a.getSnapshot!==t||o||null!==uo&&1&uo.memoizedState.tag){if(r.flags|=2048,Oo(9,To.bind(null,r,a,i,t),void 0,null),null===Nl)throw Error(n(349));30&oo||Co(r,t,i)}return i}function Co(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=so.updateQueue)?(t={lastEffect:null,stores:null},so.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function To(e,t,n,r){t.value=n,t.getSnapshot=r,xo(t)&&No(e)}function Po(e,t,n){return n(function(){xo(t)&&No(e)})}function xo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!lr(e,n)}catch(r){return!0}}function No(e){var t=Di(e,1);null!==t&&ru(t,e,1,-1)}function Ro(e){var t=bo();return"function"==typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ko,lastRenderedState:e},t.queue=e,e=e.dispatch=Qo.bind(null,so,e),[t.memoizedState,e]}function Oo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=so.updateQueue)?(t={lastEffect:null,stores:null},so.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Lo(){return wo().memoizedState}function Ao(e,t,n,r){var a=bo();so.flags|=e,a.memoizedState=Oo(1|t,n,void 0,void 0===r?null:r)}function Do(e,t,n,r){var a=wo();r=void 0===r?null:r;var i=void 0;if(null!==lo){var o=lo.memoizedState;if(i=o.destroy,null!==r&&go(r,o.deps))return void(a.memoizedState=Oo(t,n,i,r))}so.flags|=e,a.memoizedState=Oo(1|t,n,i,r)}function Mo(e,t){return Ao(8390656,8,e,t)}function Uo(e,t){return Do(2048,8,e,t)}function zo(e,t){return Do(4,2,e,t)}function Fo(e,t){return Do(4,4,e,t)}function jo(e,t){return"function"==typeof t?(e=e(),t(e),function(){t(null)}):null!=t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Vo(e,t,n){return n=null!=n?n.concat([e]):null,Do(4,4,jo.bind(null,t,e),n)}function $o(){}function Ho(e,t){var n=wo();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&go(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Bo(e,t){var n=wo();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&go(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Wo(e,t,n){return 21&oo?(lr(n,t)||(n=gt(),so.lanes|=n,Ul|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ws=!0),e.memoizedState=n)}function qo(e,t){var n=wt;wt=0!==n&&4>n?n:4,e(!0);var r=io.transition;io.transition={};try{e(!1),t()}finally{wt=n,io.transition=r}}function Ko(){return wo().memoizedState}function Go(e,t,n){var r=nu(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Jo(e))Yo(t,n);else if(null!==(n=Ai(e,t,n,r))){ru(n,e,r,tu()),Xo(n,t,r)}}function Qo(e,t,n){var r=nu(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Jo(e))Yo(t,a);else{var i=e.alternate;if(0===e.lanes&&(null===i||0===i.lanes)&&null!==(i=t.lastRenderedReducer))try{var o=t.lastRenderedState,s=i(o,n);if(a.hasEagerState=!0,a.eagerState=s,lr(s,o)){var l=t.interleaved;return null===l?(a.next=a,Li(t)):(a.next=l.next,l.next=a),void(t.interleaved=a)}}catch(u){}null!==(n=Ai(e,t,a,r))&&(ru(n,e,r,a=tu()),Xo(n,t,r))}}function Jo(e){var t=e.alternate;return e===so||null!==t&&t===so}function Yo(e,t){fo=co=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Xo(e,t,n){if(4194240&n){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,bt(e,n)}}var Zo={readContext:Ri,useCallback:mo,useContext:mo,useEffect:mo,useImperativeHandle:mo,useInsertionEffect:mo,useLayoutEffect:mo,useMemo:mo,useReducer:mo,useRef:mo,useState:mo,useDebugValue:mo,useDeferredValue:mo,useTransition:mo,useMutableSource:mo,useSyncExternalStore:mo,useId:mo,unstable_isNewReconciler:!1},es={readContext:Ri,useCallback:function(e,t){return bo().memoizedState=[e,void 0===t?null:t],e},useContext:Ri,useEffect:Mo,useImperativeHandle:function(e,t,n){return n=null!=n?n.concat([e]):null,Ao(4194308,4,jo.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ao(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ao(4,2,e,t)},useMemo:function(e,t){var n=bo();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=bo();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Go.bind(null,so,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},bo().memoizedState=e},useState:Ro,useDebugValue:$o,useDeferredValue:function(e){return bo().memoizedState=e},useTransition:function(){var e=Ro(!1),t=e[0];return e=qo.bind(null,e[1]),bo().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var a=so,i=bo();if(ii){if(void 0===r)throw Error(n(407));r=r()}else{if(r=t(),null===Nl)throw Error(n(349));30&oo||Co(a,t,r)}i.memoizedState=r;var o={value:r,getSnapshot:t};return i.queue=o,Mo(Po.bind(null,a,o,e),[e]),a.flags|=2048,Oo(9,To.bind(null,a,o,r,t),void 0,null),r},useId:function(){var e=bo(),t=Nl.identifierPrefix;if(ii){var n=Xa;t=":"+t+"R"+(n=(Ya&~(1<<32-st(Ya)-1)).toString(32)+n),0<(n=ho++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=po++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ts={readContext:Ri,useCallback:Ho,useContext:Ri,useEffect:Uo,useImperativeHandle:Vo,useInsertionEffect:zo,useLayoutEffect:Fo,useMemo:Bo,useReducer:_o,useRef:Lo,useState:function(){return _o(ko)},useDebugValue:$o,useDeferredValue:function(e){return Wo(wo(),lo.memoizedState,e)},useTransition:function(){return[_o(ko)[0],wo().memoizedState]},useMutableSource:Eo,useSyncExternalStore:Io,useId:Ko,unstable_isNewReconciler:!1},ns={readContext:Ri,useCallback:Ho,useContext:Ri,useEffect:Uo,useImperativeHandle:Vo,useInsertionEffect:zo,useLayoutEffect:Fo,useMemo:Bo,useReducer:So,useRef:Lo,useState:function(){return So(ko)},useDebugValue:$o,useDeferredValue:function(e){var t=wo();return null===lo?t.memoizedState=e:Wo(t,lo.memoizedState,e)},useTransition:function(){return[So(ko)[0],wo().memoizedState]},useMutableSource:Eo,useSyncExternalStore:Io,useId:Ko,unstable_isNewReconciler:!1};function rs(e,t){if(e&&e.defaultProps){for(var n in t=z({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function as(e,t,n,r){n=null==(n=n(r,t=e.memoizedState))?t:z({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var is={isMounted:function(e){return!!(e=e._reactInternals)&&He(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=tu(),a=nu(e),i=Fi(r,a);i.payload=t,null!=n&&(i.callback=n),null!==(t=ji(e,i,a))&&(ru(t,e,a,r),Vi(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=tu(),a=nu(e),i=Fi(r,a);i.tag=1,i.payload=t,null!=n&&(i.callback=n),null!==(t=ji(e,i,a))&&(ru(t,e,a,r),Vi(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=tu(),r=nu(e),a=Fi(n,r);a.tag=2,null!=t&&(a.callback=t),null!==(t=ji(e,a,r))&&(ru(t,e,r,n),Vi(t,e,r))}};function os(e,t,n,r,a,i,o){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,i,o):!t.prototype||!t.prototype.isPureReactComponent||(!ur(n,r)||!ur(a,i))}function ss(e,t,n){var r=!1,a=Pa,i=t.contextType;return"object"==typeof i&&null!==i?i=Ri(i):(a=La(t)?Ra:xa.current,i=(r=null!=(r=t.contextTypes))?Oa(e,a):Pa),t=new t(n,i),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=is,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i),t}function ls(e,t,n,r){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&is.enqueueReplaceState(t,t.state,null)}function us(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},Ui(e);var i=t.contextType;"object"==typeof i&&null!==i?a.context=Ri(i):(i=La(t)?Ra:xa.current,a.context=Oa(e,i)),a.state=e.memoizedState,"function"==typeof(i=t.getDerivedStateFromProps)&&(as(e,t,i,n),a.state=e.memoizedState),"function"==typeof t.getDerivedStateFromProps||"function"==typeof a.getSnapshotBeforeUpdate||"function"!=typeof a.UNSAFE_componentWillMount&&"function"!=typeof a.componentWillMount||(t=a.state,"function"==typeof a.componentWillMount&&a.componentWillMount(),"function"==typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount(),t!==a.state&&is.enqueueReplaceState(a,a.state,null),Hi(e,n,a,r),a.state=e.memoizedState),"function"==typeof a.componentDidMount&&(e.flags|=4194308)}function cs(e,t){try{var n="",r=t;do{n+=$(r),r=r.return}while(r);var a=n}catch(i){a="\nError generating stack: "+i.message+"\n"+i.stack}return{value:e,source:t,stack:a,digest:null}}function ds(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function fs(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var hs="function"==typeof WeakMap?WeakMap:Map;function ps(e,t,n){(n=Fi(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Wl||(Wl=!0,ql=r),fs(0,t)},n}function ms(e,t,n){(n=Fi(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"==typeof r){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){fs(0,t)}}var i=e.stateNode;return null!==i&&"function"==typeof i.componentDidCatch&&(n.callback=function(){fs(0,t),"function"!=typeof r&&(null===Kl?Kl=new Set([this]):Kl.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function gs(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new hs;var a=new Set;r.set(t,a)}else void 0===(a=r.get(t))&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=Cu.bind(null,e,t,n),t.then(e,e))}function vs(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function ys(e,t,n,r,a){return 1&e.mode?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Fi(-1,1)).tag=2,ji(n,t,1))),n.lanes|=1),e)}var bs=y.ReactCurrentOwner,ws=!1;function ks(e,t,n,r){t.child=null===e?_i(t,null,n,r):ki(t,e.child,n,r)}function _s(e,t,n,r,a){n=n.render;var i=t.ref;return Ni(t,a),r=vo(e,t,n,r,i,a),n=yo(),null===e||ws?(ii&&n&&ti(t),t.flags|=1,ks(e,t,r,a),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Ws(e,t,a))}function Ss(e,t,n,r,a){if(null===e){var i=n.type;return"function"!=typeof i||Lu(i)||void 0!==i.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Du(n.type,null,r,t,t.mode,a)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=i,Es(e,t,i,r,a))}if(i=e.child,0===(e.lanes&a)){var o=i.memoizedProps;if((n=null!==(n=n.compare)?n:ur)(o,r)&&e.ref===t.ref)return Ws(e,t,a)}return t.flags|=1,(e=Au(i,r)).ref=t.ref,e.return=t,t.child=e}function Es(e,t,n,r,a){if(null!==e){var i=e.memoizedProps;if(ur(i,r)&&e.ref===t.ref){if(ws=!1,t.pendingProps=r=i,0===(e.lanes&a))return t.lanes=e.lanes,Ws(e,t,a);131072&e.flags&&(ws=!0)}}return Ts(e,t,n,r,a)}function Is(e,t,n){var r=t.pendingProps,a=r.children,i=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(1&t.mode){if(!(1073741824&n))return e=null!==i?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ta(Al,Ll),Ll|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==i?i.baseLanes:n,Ta(Al,Ll),Ll|=r}else t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ta(Al,Ll),Ll|=n;else null!==i?(r=i.baseLanes|n,t.memoizedState=null):r=n,Ta(Al,Ll),Ll|=r;return ks(e,t,a,n),t.child}function Cs(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ts(e,t,n,r,a){var i=La(n)?Ra:xa.current;return i=Oa(t,i),Ni(t,a),n=vo(e,t,n,r,i,a),r=yo(),null===e||ws?(ii&&r&&ti(t),t.flags|=1,ks(e,t,n,a),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Ws(e,t,a))}function Ps(e,t,n,r,a){if(La(n)){var i=!0;Ua(t)}else i=!1;if(Ni(t,a),null===t.stateNode)Bs(e,t),ss(t,n,r),us(t,n,r,a),r=!0;else if(null===e){var o=t.stateNode,s=t.memoizedProps;o.props=s;var l=o.context,u=n.contextType;"object"==typeof u&&null!==u?u=Ri(u):u=Oa(t,u=La(n)?Ra:xa.current);var c=n.getDerivedStateFromProps,d="function"==typeof c||"function"==typeof o.getSnapshotBeforeUpdate;d||"function"!=typeof o.UNSAFE_componentWillReceiveProps&&"function"!=typeof o.componentWillReceiveProps||(s!==r||l!==u)&&ls(t,o,r,u),Mi=!1;var f=t.memoizedState;o.state=f,Hi(t,r,o,a),l=t.memoizedState,s!==r||f!==l||Na.current||Mi?("function"==typeof c&&(as(t,n,c,r),l=t.memoizedState),(s=Mi||os(t,n,s,r,f,l,u))?(d||"function"!=typeof o.UNSAFE_componentWillMount&&"function"!=typeof o.componentWillMount||("function"==typeof o.componentWillMount&&o.componentWillMount(),"function"==typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount()),"function"==typeof o.componentDidMount&&(t.flags|=4194308)):("function"==typeof o.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=s):("function"==typeof o.componentDidMount&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,zi(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:rs(t.type,s),o.props=u,d=t.pendingProps,f=o.context,"object"==typeof(l=n.contextType)&&null!==l?l=Ri(l):l=Oa(t,l=La(n)?Ra:xa.current);var h=n.getDerivedStateFromProps;(c="function"==typeof h||"function"==typeof o.getSnapshotBeforeUpdate)||"function"!=typeof o.UNSAFE_componentWillReceiveProps&&"function"!=typeof o.componentWillReceiveProps||(s!==d||f!==l)&&ls(t,o,r,l),Mi=!1,f=t.memoizedState,o.state=f,Hi(t,r,o,a);var p=t.memoizedState;s!==d||f!==p||Na.current||Mi?("function"==typeof h&&(as(t,n,h,r),p=t.memoizedState),(u=Mi||os(t,n,u,r,f,p,l)||!1)?(c||"function"!=typeof o.UNSAFE_componentWillUpdate&&"function"!=typeof o.componentWillUpdate||("function"==typeof o.componentWillUpdate&&o.componentWillUpdate(r,p,l),"function"==typeof o.UNSAFE_componentWillUpdate&&o.UNSAFE_componentWillUpdate(r,p,l)),"function"==typeof o.componentDidUpdate&&(t.flags|=4),"function"==typeof o.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!=typeof o.componentDidUpdate||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!=typeof o.getSnapshotBeforeUpdate||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),o.props=r,o.state=p,o.context=l,r=u):("function"!=typeof o.componentDidUpdate||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!=typeof o.getSnapshotBeforeUpdate||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return xs(e,t,n,r,i,a)}function xs(e,t,n,r,a,i){Cs(e,t);var o=!!(128&t.flags);if(!r&&!o)return a&&za(t,n,!1),Ws(e,t,i);r=t.stateNode,bs.current=t;var s=o&&"function"!=typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&o?(t.child=ki(t,e.child,null,i),t.child=ki(t,null,s,i)):ks(e,t,s,i),t.memoizedState=r.state,a&&za(t,n,!0),t.child}function Ns(e){var t=e.stateNode;t.pendingContext?Da(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Da(0,t.context,!1),Ji(e,t.containerInfo)}function Rs(e,t,n,r,a){return pi(),mi(a),t.flags|=256,ks(e,t,n,r),t.child}var Os,Ls,As,Ds,Ms={dehydrated:null,treeContext:null,retryLane:0};function Us(e){return{baseLanes:e,cachePool:null,transitions:null}}function zs(e,t,r){var a,i=t.pendingProps,o=eo.current,s=!1,l=!!(128&t.flags);if((a=l)||(a=(null===e||null!==e.memoizedState)&&!!(2&o)),a?(s=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(o|=1),Ta(eo,1&o),null===e)return ci(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(1&t.mode?"$!"===e.data?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=i.children,e=i.fallback,s?(i=t.mode,s=t.child,l={mode:"hidden",children:l},1&i||null===s?s=Uu(l,i,0,null):(s.childLanes=0,s.pendingProps=l),e=Mu(e,i,r,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Us(r),t.memoizedState=Ms,e):Fs(t,l));if(null!==(o=e.memoizedState)&&null!==(a=o.dehydrated))return function(e,t,r,a,i,o,s){if(r)return 256&t.flags?(t.flags&=-257,js(e,t,s,a=ds(Error(n(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(o=a.fallback,i=t.mode,a=Uu({mode:"visible",children:a.children},i,0,null),(o=Mu(o,i,s,null)).flags|=2,a.return=t,o.return=t,a.sibling=o,t.child=a,1&t.mode&&ki(t,e.child,null,s),t.child.memoizedState=Us(s),t.memoizedState=Ms,o);if(!(1&t.mode))return js(e,t,s,null);if("$!"===i.data){if(a=i.nextSibling&&i.nextSibling.dataset)var l=a.dgst;return a=l,js(e,t,s,a=ds(o=Error(n(419)),a,void 0))}if(l=0!==(s&e.childLanes),ws||l){if(null!==(a=Nl)){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}0!==(i=0!==(i&(a.suspendedLanes|s))?0:i)&&i!==o.retryLane&&(o.retryLane=i,Di(e,i),ru(a,e,i,-1))}return gu(),js(e,t,s,a=ds(Error(n(421))))}return"$?"===i.data?(t.flags|=128,t.child=e.child,t=Pu.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,ai=ca(i.nextSibling),ri=t,ii=!0,oi=null,null!==e&&(Ga[Qa++]=Ya,Ga[Qa++]=Xa,Ga[Qa++]=Ja,Ya=e.id,Xa=e.overflow,Ja=t),t=Fs(t,a.children),t.flags|=4096,t)}(e,t,l,i,a,o,r);if(s){s=i.fallback,l=t.mode,a=(o=e.child).sibling;var u={mode:"hidden",children:i.children};return 1&l||t.child===o?(i=Au(o,u)).subtreeFlags=14680064&o.subtreeFlags:((i=t.child).childLanes=0,i.pendingProps=u,t.deletions=null),null!==a?s=Au(a,s):(s=Mu(s,l,r,null)).flags|=2,s.return=t,i.return=t,i.sibling=s,t.child=i,i=s,s=t.child,l=null===(l=e.child.memoizedState)?Us(r):{baseLanes:l.baseLanes|r,cachePool:null,transitions:l.transitions},s.memoizedState=l,s.childLanes=e.childLanes&~r,t.memoizedState=Ms,i}return e=(s=e.child).sibling,i=Au(s,{mode:"visible",children:i.children}),!(1&t.mode)&&(i.lanes=r),i.return=t,i.sibling=null,null!==e&&(null===(r=t.deletions)?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=i,t.memoizedState=null,i}function Fs(e,t){return(t=Uu({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function js(e,t,n,r){return null!==r&&mi(r),ki(t,e.child,null,n),(e=Fs(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Vs(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),xi(e.return,t,n)}function $s(e,t,n,r,a){var i=e.memoizedState;null===i?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=a)}function Hs(e,t,n){var r=t.pendingProps,a=r.revealOrder,i=r.tail;if(ks(e,t,r.children,n),2&(r=eo.current))r=1&r|2,t.flags|=128;else{if(null!==e&&128&e.flags)e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Vs(e,n,t);else if(19===e.tag)Vs(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ta(eo,r),1&t.mode)switch(a){case"forwards":for(n=t.child,a=null;null!==n;)null!==(e=n.alternate)&&null===to(e)&&(a=n),n=n.sibling;null===(n=a)?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),$s(t,!1,a,n,i);break;case"backwards":for(n=null,a=t.child,t.child=null;null!==a;){if(null!==(e=a.alternate)&&null===to(e)){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}$s(t,!0,n,null,i);break;case"together":$s(t,!1,null,null,void 0);break;default:t.memoizedState=null}else t.memoizedState=null;return t.child}function Bs(e,t){!(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ws(e,t,r){if(null!==e&&(t.dependencies=e.dependencies),Ul|=t.lanes,0===(r&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(n(153));if(null!==t.child){for(r=Au(e=t.child,e.pendingProps),t.child=r,r.return=t;null!==e.sibling;)e=e.sibling,(r=r.sibling=Au(e,e.pendingProps)).return=t;r.sibling=null}return t.child}function qs(e,t){if(!ii)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ks(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=14680064&a.subtreeFlags,r|=14680064&a.flags,a.return=e,a=a.sibling;else for(a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Gs(e,t,r){var i=t.pendingProps;switch(ni(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ks(t),null;case 1:case 17:return La(t.type)&&Aa(),Ks(t),null;case 3:return i=t.stateNode,Yi(),Ca(Na),Ca(xa),ro(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),null!==e&&null!==e.child||(fi(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&!(256&t.flags)||(t.flags|=1024,null!==oi&&(su(oi),oi=null))),Ls(e,t),Ks(t),null;case 5:Zi(t);var o=Qi(Gi.current);if(r=t.type,null!==e&&null!=t.stateNode)As(e,t,r,i,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(null===t.stateNode)throw Error(n(166));return Ks(t),null}if(e=Qi(qi.current),fi(t)){i=t.stateNode,r=t.type;var s=t.memoizedProps;switch(i[ha]=t,i[pa]=s,e=!!(1&t.mode),r){case"dialog":jr("cancel",i),jr("close",i);break;case"iframe":case"object":case"embed":jr("load",i);break;case"video":case"audio":for(o=0;o<Mr.length;o++)jr(Mr[o],i);break;case"source":jr("error",i);break;case"img":case"image":case"link":jr("error",i),jr("load",i);break;case"details":jr("toggle",i);break;case"input":Y(i,s),jr("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},jr("invalid",i);break;case"textarea":ie(i,s),jr("invalid",i)}for(var l in be(r,s),o=null,s)if(s.hasOwnProperty(l)){var u=s[l];"children"===l?"string"==typeof u?i.textContent!==u&&(!0!==s.suppressHydrationWarning&&Zr(i.textContent,u,e),o=["children",u]):"number"==typeof u&&i.textContent!==""+u&&(!0!==s.suppressHydrationWarning&&Zr(i.textContent,u,e),o=["children",""+u]):a.hasOwnProperty(l)&&null!=u&&"onScroll"===l&&jr("scroll",i)}switch(r){case"input":K(i),ee(i,s,!0);break;case"textarea":K(i),se(i);break;case"select":case"option":break;default:"function"==typeof s.onClick&&(i.onclick=ea)}i=o,t.updateQueue=i,null!==i&&(t.flags|=4)}else{l=9===o.nodeType?o:o.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=le(r)),"http://www.w3.org/1999/xhtml"===e?"script"===r?((e=l.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"==typeof i.is?e=l.createElement(r,{is:i.is}):(e=l.createElement(r),"select"===r&&(l=e,i.multiple?l.multiple=!0:i.size&&(l.size=i.size))):e=l.createElementNS(e,r),e[ha]=t,e[pa]=i,Os(e,t,!1,!1),t.stateNode=e;e:{switch(l=we(r,i),r){case"dialog":jr("cancel",e),jr("close",e),o=i;break;case"iframe":case"object":case"embed":jr("load",e),o=i;break;case"video":case"audio":for(o=0;o<Mr.length;o++)jr(Mr[o],e);o=i;break;case"source":jr("error",e),o=i;break;case"img":case"image":case"link":jr("error",e),jr("load",e),o=i;break;case"details":jr("toggle",e),o=i;break;case"input":Y(e,i),o=J(e,i),jr("invalid",e);break;case"option":default:o=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},o=z({},i,{value:void 0}),jr("invalid",e);break;case"textarea":ie(e,i),o=ae(e,i),jr("invalid",e)}for(s in be(r,o),u=o)if(u.hasOwnProperty(s)){var c=u[s];"style"===s?ve(e,c):"dangerouslySetInnerHTML"===s?null!=(c=c?c.__html:void 0)&&fe(e,c):"children"===s?"string"==typeof c?("textarea"!==r||""!==c)&&he(e,c):"number"==typeof c&&he(e,""+c):"suppressContentEditableWarning"!==s&&"suppressHydrationWarning"!==s&&"autoFocus"!==s&&(a.hasOwnProperty(s)?null!=c&&"onScroll"===s&&jr("scroll",e):null!=c&&v(e,s,c,l))}switch(r){case"input":K(e),ee(e,i,!1);break;case"textarea":K(e),se(e);break;case"option":null!=i.value&&e.setAttribute("value",""+W(i.value));break;case"select":e.multiple=!!i.multiple,null!=(s=i.value)?re(e,!!i.multiple,s,!1):null!=i.defaultValue&&re(e,!!i.multiple,i.defaultValue,!0);break;default:"function"==typeof o.onClick&&(e.onclick=ea)}switch(r){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return Ks(t),null;case 6:if(e&&null!=t.stateNode)Ds(e,t,e.memoizedProps,i);else{if("string"!=typeof i&&null===t.stateNode)throw Error(n(166));if(r=Qi(Gi.current),Qi(qi.current),fi(t)){if(i=t.stateNode,r=t.memoizedProps,i[ha]=t,(s=i.nodeValue!==r)&&null!==(e=ri))switch(e.tag){case 3:Zr(i.nodeValue,r,!!(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Zr(i.nodeValue,r,!!(1&e.mode))}s&&(t.flags|=4)}else(i=(9===r.nodeType?r:r.ownerDocument).createTextNode(i))[ha]=t,t.stateNode=i}return Ks(t),null;case 13:if(Ca(eo),i=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(ii&&null!==ai&&1&t.mode&&!(128&t.flags))hi(),pi(),t.flags|=98560,s=!1;else if(s=fi(t),null!==i&&null!==i.dehydrated){if(null===e){if(!s)throw Error(n(318));if(!(s=null!==(s=t.memoizedState)?s.dehydrated:null))throw Error(n(317));s[ha]=t}else pi(),!(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Ks(t),s=!1}else null!==oi&&(su(oi),oi=null),s=!0;if(!s)return 65536&t.flags?t:null}return 128&t.flags?(t.lanes=r,t):((i=null!==i)!==(null!==e&&null!==e.memoizedState)&&i&&(t.child.flags|=8192,1&t.mode&&(null===e||1&eo.current?0===Dl&&(Dl=3):gu())),null!==t.updateQueue&&(t.flags|=4),Ks(t),null);case 4:return Yi(),Ls(e,t),null===e&&Hr(t.stateNode.containerInfo),Ks(t),null;case 10:return Pi(t.type._context),Ks(t),null;case 19:if(Ca(eo),null===(s=t.memoizedState))return Ks(t),null;if(i=!!(128&t.flags),null===(l=s.rendering))if(i)qs(s,!1);else{if(0!==Dl||null!==e&&128&e.flags)for(e=t.child;null!==e;){if(null!==(l=to(e))){for(t.flags|=128,qs(s,!1),null!==(i=l.updateQueue)&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=r,r=t.child;null!==r;)e=i,(s=r).flags&=14680066,null===(l=s.alternate)?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=l.childLanes,s.lanes=l.lanes,s.child=l.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=l.memoizedProps,s.memoizedState=l.memoizedState,s.updateQueue=l.updateQueue,s.type=l.type,e=l.dependencies,s.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return Ta(eo,1&eo.current|2),t.child}e=e.sibling}null!==s.tail&&Xe()>Hl&&(t.flags|=128,i=!0,qs(s,!1),t.lanes=4194304)}else{if(!i)if(null!==(e=to(l))){if(t.flags|=128,i=!0,null!==(r=e.updateQueue)&&(t.updateQueue=r,t.flags|=4),qs(s,!0),null===s.tail&&"hidden"===s.tailMode&&!l.alternate&&!ii)return Ks(t),null}else 2*Xe()-s.renderingStartTime>Hl&&1073741824!==r&&(t.flags|=128,i=!0,qs(s,!1),t.lanes=4194304);s.isBackwards?(l.sibling=t.child,t.child=l):(null!==(r=s.last)?r.sibling=l:t.child=l,s.last=l)}return null!==s.tail?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Xe(),t.sibling=null,r=eo.current,Ta(eo,i?1&r|2:1&r),t):(Ks(t),null);case 22:case 23:return fu(),i=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==i&&(t.flags|=8192),i&&1&t.mode?!!(1073741824&Ll)&&(Ks(t),6&t.subtreeFlags&&(t.flags|=8192)):Ks(t),null;case 24:case 25:return null}throw Error(n(156,t.tag))}function Qs(e,t){switch(ni(t),t.tag){case 1:return La(t.type)&&Aa(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Yi(),Ca(Na),Ca(xa),ro(),65536&(e=t.flags)&&!(128&e)?(t.flags=-65537&e|128,t):null;case 5:return Zi(t),null;case 13:if(Ca(eo),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(n(340));pi()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Ca(eo),null;case 4:return Yi(),null;case 10:return Pi(t.type._context),null;case 22:case 23:return fu(),null;default:return null}}Os=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Ls=function(){},As=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Qi(qi.current);var o,s=null;switch(n){case"input":i=J(e,i),r=J(e,r),s=[];break;case"select":i=z({},i,{value:void 0}),r=z({},r,{value:void 0}),s=[];break;case"textarea":i=ae(e,i),r=ae(e,r),s=[];break;default:"function"!=typeof i.onClick&&"function"==typeof r.onClick&&(e.onclick=ea)}for(c in be(n,r),n=null,i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&null!=i[c])if("style"===c){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else"dangerouslySetInnerHTML"!==c&&"children"!==c&&"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(a.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=null!=i?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(null!=u||null!=l))if("style"===c)if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else"dangerouslySetInnerHTML"===c?(u=u?u.__html:void 0,l=l?l.__html:void 0,null!=u&&l!==u&&(s=s||[]).push(c,u)):"children"===c?"string"!=typeof u&&"number"!=typeof u||(s=s||[]).push(c,""+u):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&(a.hasOwnProperty(c)?(null!=u&&"onScroll"===c&&jr("scroll",e),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(t.updateQueue=c)&&(t.flags|=4)}},Ds=function(e,t,n,r){n!==r&&(t.flags|=4)};var Js=!1,Ys=!1,Xs="function"==typeof WeakSet?WeakSet:Set,Zs=null;function el(e,t){var n=e.ref;if(null!==n)if("function"==typeof n)try{n(null)}catch(r){Iu(e,t,r)}else n.current=null}function tl(e,t,n){try{n()}catch(r){Iu(e,t,r)}}var nl=!1;function rl(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var a=r=r.next;do{if((a.tag&e)===e){var i=a.destroy;a.destroy=void 0,void 0!==i&&tl(t,n,i)}a=a.next}while(a!==r)}}function al(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function il(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"==typeof t?t(e):t.current=e}}function ol(e){var t=e.alternate;null!==t&&(e.alternate=null,ol(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[ha],delete t[pa],delete t[ga],delete t[va],delete t[ya])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function sl(e){return 5===e.tag||3===e.tag||4===e.tag}function ll(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||sl(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ul(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!=(n=n._reactRootContainer)||null!==t.onclick||(t.onclick=ea));else if(4!==r&&null!==(e=e.child))for(ul(e,t,n),e=e.sibling;null!==e;)ul(e,t,n),e=e.sibling}function cl(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(cl(e,t,n),e=e.sibling;null!==e;)cl(e,t,n),e=e.sibling}var dl=null,fl=!1;function hl(e,t,n){for(n=n.child;null!==n;)pl(e,t,n),n=n.sibling}function pl(e,t,n){if(ot&&"function"==typeof ot.onCommitFiberUnmount)try{ot.onCommitFiberUnmount(it,n)}catch(s){}switch(n.tag){case 5:Ys||el(n,t);case 6:var r=dl,a=fl;dl=null,hl(e,t,n),fl=a,null!==(dl=r)&&(fl?(e=dl,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):dl.removeChild(n.stateNode));break;case 18:null!==dl&&(fl?(e=dl,n=n.stateNode,8===e.nodeType?ua(e.parentNode,n):1===e.nodeType&&ua(e,n),Ht(e)):ua(dl,n.stateNode));break;case 4:r=dl,a=fl,dl=n.stateNode.containerInfo,fl=!0,hl(e,t,n),dl=r,fl=a;break;case 0:case 11:case 14:case 15:if(!Ys&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){a=r=r.next;do{var i=a,o=i.destroy;i=i.tag,void 0!==o&&(2&i||4&i)&&tl(n,t,o),a=a.next}while(a!==r)}hl(e,t,n);break;case 1:if(!Ys&&(el(n,t),"function"==typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Iu(n,t,s)}hl(e,t,n);break;case 21:hl(e,t,n);break;case 22:1&n.mode?(Ys=(r=Ys)||null!==n.memoizedState,hl(e,t,n),Ys=r):hl(e,t,n);break;default:hl(e,t,n)}}function ml(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Xs),t.forEach(function(t){var r=xu.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))})}}function gl(e,t){var r=t.deletions;if(null!==r)for(var a=0;a<r.length;a++){var i=r[a];try{var o=e,s=t,l=s;e:for(;null!==l;){switch(l.tag){case 5:dl=l.stateNode,fl=!1;break e;case 3:case 4:dl=l.stateNode.containerInfo,fl=!0;break e}l=l.return}if(null===dl)throw Error(n(160));pl(o,s,i),dl=null,fl=!1;var u=i.alternate;null!==u&&(u.return=null),i.return=null}catch(c){Iu(i,t,c)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)vl(t,e),t=t.sibling}function vl(e,t){var r=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(gl(t,e),yl(e),4&a){try{rl(3,e,e.return),al(3,e)}catch(g){Iu(e,e.return,g)}try{rl(5,e,e.return)}catch(g){Iu(e,e.return,g)}}break;case 1:gl(t,e),yl(e),512&a&&null!==r&&el(r,r.return);break;case 5:if(gl(t,e),yl(e),512&a&&null!==r&&el(r,r.return),32&e.flags){var i=e.stateNode;try{he(i,"")}catch(g){Iu(e,e.return,g)}}if(4&a&&null!=(i=e.stateNode)){var o=e.memoizedProps,s=null!==r?r.memoizedProps:o,l=e.type,u=e.updateQueue;if(e.updateQueue=null,null!==u)try{"input"===l&&"radio"===o.type&&null!=o.name&&X(i,o),we(l,s);var c=we(l,o);for(s=0;s<u.length;s+=2){var d=u[s],f=u[s+1];"style"===d?ve(i,f):"dangerouslySetInnerHTML"===d?fe(i,f):"children"===d?he(i,f):v(i,d,f,c)}switch(l){case"input":Z(i,o);break;case"textarea":oe(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var p=o.value;null!=p?re(i,!!o.multiple,p,!1):h!==!!o.multiple&&(null!=o.defaultValue?re(i,!!o.multiple,o.defaultValue,!0):re(i,!!o.multiple,o.multiple?[]:"",!1))}i[pa]=o}catch(g){Iu(e,e.return,g)}}break;case 6:if(gl(t,e),yl(e),4&a){if(null===e.stateNode)throw Error(n(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(g){Iu(e,e.return,g)}}break;case 3:if(gl(t,e),yl(e),4&a&&null!==r&&r.memoizedState.isDehydrated)try{Ht(t.containerInfo)}catch(g){Iu(e,e.return,g)}break;case 4:default:gl(t,e),yl(e);break;case 13:gl(t,e),yl(e),8192&(i=e.child).flags&&(o=null!==i.memoizedState,i.stateNode.isHidden=o,!o||null!==i.alternate&&null!==i.alternate.memoizedState||($l=Xe())),4&a&&ml(e);break;case 22:if(d=null!==r&&null!==r.memoizedState,1&e.mode?(Ys=(c=Ys)||d,gl(t,e),Ys=c):gl(t,e),yl(e),8192&a){if(c=null!==e.memoizedState,(e.stateNode.isHidden=c)&&!d&&1&e.mode)for(Zs=e,d=e.child;null!==d;){for(f=Zs=d;null!==Zs;){switch(p=(h=Zs).child,h.tag){case 0:case 11:case 14:case 15:rl(4,h,h.return);break;case 1:el(h,h.return);var m=h.stateNode;if("function"==typeof m.componentWillUnmount){a=h,r=h.return;try{t=a,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(g){Iu(a,r,g)}}break;case 5:el(h,h.return);break;case 22:if(null!==h.memoizedState){_l(f);continue}}null!==p?(p.return=h,Zs=p):_l(f)}d=d.sibling}e:for(d=null,f=e;;){if(5===f.tag){if(null===d){d=f;try{i=f.stateNode,c?"function"==typeof(o=i.style).setProperty?o.setProperty("display","none","important"):o.display="none":(l=f.stateNode,s=null!=(u=f.memoizedProps.style)&&u.hasOwnProperty("display")?u.display:null,l.style.display=ge("display",s))}catch(g){Iu(e,e.return,g)}}}else if(6===f.tag){if(null===d)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(g){Iu(e,e.return,g)}}else if((22!==f.tag&&23!==f.tag||null===f.memoizedState||f===e)&&null!==f.child){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;null===f.sibling;){if(null===f.return||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:gl(t,e),yl(e),4&a&&ml(e);case 21:}}function yl(e){var t=e.flags;if(2&t){try{e:{for(var r=e.return;null!==r;){if(sl(r)){var a=r;break e}r=r.return}throw Error(n(160))}switch(a.tag){case 5:var i=a.stateNode;32&a.flags&&(he(i,""),a.flags&=-33),cl(e,ll(e),i);break;case 3:case 4:var o=a.stateNode.containerInfo;ul(e,ll(e),o);break;default:throw Error(n(161))}}catch(s){Iu(e,e.return,s)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function bl(e,t,n){Zs=e,wl(e)}function wl(e,t,n){for(var r=!!(1&e.mode);null!==Zs;){var a=Zs,i=a.child;if(22===a.tag&&r){var o=null!==a.memoizedState||Js;if(!o){var s=a.alternate,l=null!==s&&null!==s.memoizedState||Ys;s=Js;var u=Ys;if(Js=o,(Ys=l)&&!u)for(Zs=a;null!==Zs;)l=(o=Zs).child,22===o.tag&&null!==o.memoizedState?Sl(a):null!==l?(l.return=o,Zs=l):Sl(a);for(;null!==i;)Zs=i,wl(i),i=i.sibling;Zs=a,Js=s,Ys=u}kl(e)}else 8772&a.subtreeFlags&&null!==i?(i.return=a,Zs=i):kl(e)}}function kl(e){for(;null!==Zs;){var t=Zs;if(8772&t.flags){var r=t.alternate;try{if(8772&t.flags)switch(t.tag){case 0:case 11:case 15:Ys||al(5,t);break;case 1:var a=t.stateNode;if(4&t.flags&&!Ys)if(null===r)a.componentDidMount();else{var i=t.elementType===t.type?r.memoizedProps:rs(t.type,r.memoizedProps);a.componentDidUpdate(i,r.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;null!==o&&Bi(t,o,a);break;case 3:var s=t.updateQueue;if(null!==s){if(r=null,null!==t.child)switch(t.child.tag){case 5:case 1:r=t.child.stateNode}Bi(t,s,r)}break;case 5:var l=t.stateNode;if(null===r&&4&t.flags){r=l;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&r.focus();break;case"img":u.src&&(r.src=u.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var c=t.alternate;if(null!==c){var d=c.memoizedState;if(null!==d){var f=d.dehydrated;null!==f&&Ht(f)}}}break;default:throw Error(n(163))}Ys||512&t.flags&&il(t)}catch(h){Iu(t,t.return,h)}}if(t===e){Zs=null;break}if(null!==(r=t.sibling)){r.return=t.return,Zs=r;break}Zs=t.return}}function _l(e){for(;null!==Zs;){var t=Zs;if(t===e){Zs=null;break}var n=t.sibling;if(null!==n){n.return=t.return,Zs=n;break}Zs=t.return}}function Sl(e){for(;null!==Zs;){var t=Zs;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{al(4,t)}catch(l){Iu(t,n,l)}break;case 1:var r=t.stateNode;if("function"==typeof r.componentDidMount){var a=t.return;try{r.componentDidMount()}catch(l){Iu(t,a,l)}}var i=t.return;try{il(t)}catch(l){Iu(t,i,l)}break;case 5:var o=t.return;try{il(t)}catch(l){Iu(t,o,l)}}}catch(l){Iu(t,t.return,l)}if(t===e){Zs=null;break}var s=t.sibling;if(null!==s){s.return=t.return,Zs=s;break}Zs=t.return}}var El,Il=Math.ceil,Cl=y.ReactCurrentDispatcher,Tl=y.ReactCurrentOwner,Pl=y.ReactCurrentBatchConfig,xl=0,Nl=null,Rl=null,Ol=0,Ll=0,Al=Ia(0),Dl=0,Ml=null,Ul=0,zl=0,Fl=0,jl=null,Vl=null,$l=0,Hl=1/0,Bl=null,Wl=!1,ql=null,Kl=null,Gl=!1,Ql=null,Jl=0,Yl=0,Xl=null,Zl=-1,eu=0;function tu(){return 6&xl?Xe():-1!==Zl?Zl:Zl=Xe()}function nu(e){return 1&e.mode?2&xl&&0!==Ol?Ol&-Ol:null!==gi.transition?(0===eu&&(eu=gt()),eu):0!==(e=wt)?e:e=void 0===(e=window.event)?16:Yt(e.type):1}function ru(e,t,r,a){if(50<Yl)throw Yl=0,Xl=null,Error(n(185));yt(e,r,a),2&xl&&e===Nl||(e===Nl&&(!(2&xl)&&(zl|=r),4===Dl&&lu(e,Ol)),au(e,a),1===r&&0===xl&&!(1&t.mode)&&(Hl=Xe()+500,ja&&Ha()))}function au(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-st(i),s=1<<o,l=a[o];-1===l?0!==(s&n)&&0===(s&r)||(a[o]=pt(s,t)):l<=t&&(e.expiredLanes|=s),i&=~s}}(e,t);var r=ht(e,e===Nl?Ol:0);if(0===r)null!==n&&Qe(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&Qe(n),1===t)0===e.tag?function(e){ja=!0,$a(e)}(uu.bind(null,e)):$a(uu.bind(null,e)),sa(function(){!(6&xl)&&Ha()}),n=null;else{switch(kt(r)){case 1:n=et;break;case 4:n=tt;break;case 16:default:n=nt;break;case 536870912:n=at}n=Nu(n,iu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function iu(e,t){if(Zl=-1,eu=0,6&xl)throw Error(n(327));var r=e.callbackNode;if(Su()&&e.callbackNode!==r)return null;var a=ht(e,e===Nl?Ol:0);if(0===a)return null;if(30&a||0!==(a&e.expiredLanes)||t)t=vu(e,a);else{t=a;var i=xl;xl|=2;var o=mu();for(Nl===e&&Ol===t||(Bl=null,Hl=Xe()+500,hu(e,t));;)try{bu();break}catch(l){pu(e,l)}Ti(),Cl.current=o,xl=i,null!==Rl?t=0:(Nl=null,Ol=0,t=Dl)}if(0!==t){if(2===t&&(0!==(i=mt(e))&&(a=i,t=ou(e,i))),1===t)throw r=Ml,hu(e,0),lu(e,a),au(e,Xe()),r;if(6===t)lu(e,a);else{if(i=e.current.alternate,!(30&a||function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var a=n[r],i=a.getSnapshot;a=a.value;try{if(!lr(i(),a))return!1}catch(s){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(i)||(t=vu(e,a),2===t&&(o=mt(e),0!==o&&(a=o,t=ou(e,o))),1!==t)))throw r=Ml,hu(e,0),lu(e,a),au(e,Xe()),r;switch(e.finishedWork=i,e.finishedLanes=a,t){case 0:case 1:throw Error(n(345));case 2:case 5:_u(e,Vl,Bl);break;case 3:if(lu(e,a),(130023424&a)===a&&10<(t=$l+500-Xe())){if(0!==ht(e,0))break;if(((i=e.suspendedLanes)&a)!==a){tu(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=aa(_u.bind(null,e,Vl,Bl),t);break}_u(e,Vl,Bl);break;case 4:if(lu(e,a),(4194240&a)===a)break;for(t=e.eventTimes,i=-1;0<a;){var s=31-st(a);o=1<<s,(s=t[s])>i&&(i=s),a&=~o}if(a=i,10<(a=(120>(a=Xe()-a)?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*Il(a/1960))-a)){e.timeoutHandle=aa(_u.bind(null,e,Vl,Bl),a);break}_u(e,Vl,Bl);break;default:throw Error(n(329))}}}return au(e,Xe()),e.callbackNode===r?iu.bind(null,e):null}function ou(e,t){var n=jl;return e.current.memoizedState.isDehydrated&&(hu(e,t).flags|=256),2!==(e=vu(e,t))&&(t=Vl,Vl=n,null!==t&&su(t)),e}function su(e){null===Vl?Vl=e:Vl.push.apply(Vl,e)}function lu(e,t){for(t&=~Fl,t&=~zl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-st(t),r=1<<n;e[n]=-1,t&=~r}}function uu(e){if(6&xl)throw Error(n(327));Su();var t=ht(e,0);if(!(1&t))return au(e,Xe()),null;var r=vu(e,t);if(0!==e.tag&&2===r){var a=mt(e);0!==a&&(t=a,r=ou(e,a))}if(1===r)throw r=Ml,hu(e,0),lu(e,t),au(e,Xe()),r;if(6===r)throw Error(n(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,_u(e,Vl,Bl),au(e,Xe()),null}function cu(e,t){var n=xl;xl|=1;try{return e(t)}finally{0===(xl=n)&&(Hl=Xe()+500,ja&&Ha())}}function du(e){null!==Ql&&0===Ql.tag&&!(6&xl)&&Su();var t=xl;xl|=1;var n=Pl.transition,r=wt;try{if(Pl.transition=null,wt=1,e)return e()}finally{wt=r,Pl.transition=n,!(6&(xl=t))&&Ha()}}function fu(){Ll=Al.current,Ca(Al)}function hu(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,ia(n)),null!==Rl)for(n=Rl.return;null!==n;){var r=n;switch(ni(r),r.tag){case 1:null!=(r=r.type.childContextTypes)&&Aa();break;case 3:Yi(),Ca(Na),Ca(xa),ro();break;case 5:Zi(r);break;case 4:Yi();break;case 13:case 19:Ca(eo);break;case 10:Pi(r.type._context);break;case 22:case 23:fu()}n=n.return}if(Nl=e,Rl=e=Au(e.current,null),Ol=Ll=t,Dl=0,Ml=null,Fl=zl=Ul=0,Vl=jl=null,null!==Oi){for(t=0;t<Oi.length;t++)if(null!==(r=(n=Oi[t]).interleaved)){n.interleaved=null;var a=r.next,i=n.pending;if(null!==i){var o=i.next;i.next=a,r.next=o}n.pending=r}Oi=null}return e}function pu(e,t){for(;;){var r=Rl;try{if(Ti(),ao.current=Zo,co){for(var a=so.memoizedState;null!==a;){var i=a.queue;null!==i&&(i.pending=null),a=a.next}co=!1}if(oo=0,uo=lo=so=null,fo=!1,ho=0,Tl.current=null,null===r||null===r.return){Dl=1,Ml=t,Rl=null;break}e:{var o=e,s=r.return,l=r,u=t;if(t=Ol,l.flags|=32768,null!==u&&"object"==typeof u&&"function"==typeof u.then){var c=u,d=l,f=d.tag;if(!(1&d.mode||0!==f&&11!==f&&15!==f)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=vs(s);if(null!==p){p.flags&=-257,ys(p,s,l,0,t),1&p.mode&&gs(o,c,t),u=c;var m=(t=p).updateQueue;if(null===m){var g=new Set;g.add(u),t.updateQueue=g}else m.add(u);break e}if(!(1&t)){gs(o,c,t),gu();break e}u=Error(n(426))}else if(ii&&1&l.mode){var v=vs(s);if(null!==v){!(65536&v.flags)&&(v.flags|=256),ys(v,s,l,0,t),mi(cs(u,l));break e}}o=u=cs(u,l),4!==Dl&&(Dl=2),null===jl?jl=[o]:jl.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t,$i(o,ps(0,u,t));break e;case 1:l=u;var y=o.type,b=o.stateNode;if(!(128&o.flags||"function"!=typeof y.getDerivedStateFromError&&(null===b||"function"!=typeof b.componentDidCatch||null!==Kl&&Kl.has(b)))){o.flags|=65536,t&=-t,o.lanes|=t,$i(o,ms(o,l,t));break e}}o=o.return}while(null!==o)}ku(r)}catch(w){t=w,Rl===r&&null!==r&&(Rl=r=r.return);continue}break}}function mu(){var e=Cl.current;return Cl.current=Zo,null===e?Zo:e}function gu(){0!==Dl&&3!==Dl&&2!==Dl||(Dl=4),null===Nl||!(268435455&Ul)&&!(268435455&zl)||lu(Nl,Ol)}function vu(e,t){var r=xl;xl|=2;var a=mu();for(Nl===e&&Ol===t||(Bl=null,hu(e,t));;)try{yu();break}catch(i){pu(e,i)}if(Ti(),xl=r,Cl.current=a,null!==Rl)throw Error(n(261));return Nl=null,Ol=0,Dl}function yu(){for(;null!==Rl;)wu(Rl)}function bu(){for(;null!==Rl&&!Je();)wu(Rl)}function wu(e){var t=El(e.alternate,e,Ll);e.memoizedProps=e.pendingProps,null===t?ku(e):Rl=t,Tl.current=null}function ku(e){var t=e;do{var n=t.alternate;if(e=t.return,32768&t.flags){if(null!==(n=Qs(n,t)))return n.flags&=32767,void(Rl=n);if(null===e)return Dl=6,void(Rl=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}else if(null!==(n=Gs(n,t,Ll)))return void(Rl=n);if(null!==(t=t.sibling))return void(Rl=t);Rl=t=e}while(null!==t);0===Dl&&(Dl=5)}function _u(e,t,r){var a=wt,i=Pl.transition;try{Pl.transition=null,wt=1,function(e,t,r,a){do{Su()}while(null!==Ql);if(6&xl)throw Error(n(327));r=e.finishedWork;var i=e.finishedLanes;if(null===r)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(n(177));e.callbackNode=null,e.callbackPriority=0;var o=r.lanes|r.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-st(n),i=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~i}}(e,o),e===Nl&&(Rl=Nl=null,Ol=0),!(2064&r.subtreeFlags)&&!(2064&r.flags)||Gl||(Gl=!0,Nu(nt,function(){return Su(),null})),o=!!(15990&r.flags),!!(15990&r.subtreeFlags)||o){o=Pl.transition,Pl.transition=null;var s=wt;wt=1;var l=xl;xl|=4,Tl.current=null,function(e,t){if(ta=Wt,pr(e=hr())){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{var a=(r=(r=e.ownerDocument)&&r.defaultView||window).getSelection&&r.getSelection();if(a&&0!==a.rangeCount){r=a.anchorNode;var i=a.anchorOffset,o=a.focusNode;a=a.focusOffset;try{r.nodeType,o.nodeType}catch(k){r=null;break e}var s=0,l=-1,u=-1,c=0,d=0,f=e,h=null;t:for(;;){for(var p;f!==r||0!==i&&3!==f.nodeType||(l=s+i),f!==o||0!==a&&3!==f.nodeType||(u=s+a),3===f.nodeType&&(s+=f.nodeValue.length),null!==(p=f.firstChild);)h=f,f=p;for(;;){if(f===e)break t;if(h===r&&++c===i&&(l=s),h===o&&++d===a&&(u=s),null!==(p=f.nextSibling))break;h=(f=h).parentNode}f=p}r=-1===l||-1===u?null:{start:l,end:u}}else r=null}r=r||{start:0,end:0}}else r=null;for(na={focusedElem:e,selectionRange:r},Wt=!1,Zs=t;null!==Zs;)if(e=(t=Zs).child,1028&t.subtreeFlags&&null!==e)e.return=t,Zs=e;else for(;null!==Zs;){t=Zs;try{var m=t.alternate;if(1024&t.flags)switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==m){var g=m.memoizedProps,v=m.memoizedState,y=t.stateNode,b=y.getSnapshotBeforeUpdate(t.elementType===t.type?g:rs(t.type,g),v);y.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var w=t.stateNode.containerInfo;1===w.nodeType?w.textContent="":9===w.nodeType&&w.documentElement&&w.removeChild(w.documentElement);break;default:throw Error(n(163))}}catch(k){Iu(t,t.return,k)}if(null!==(e=t.sibling)){e.return=t.return,Zs=e;break}Zs=t.return}m=nl,nl=!1}(e,r),vl(r,e),mr(na),Wt=!!ta,na=ta=null,e.current=r,bl(r),Ye(),xl=l,wt=s,Pl.transition=o}else e.current=r;if(Gl&&(Gl=!1,Ql=e,Jl=i),o=e.pendingLanes,0===o&&(Kl=null),function(e){if(ot&&"function"==typeof ot.onCommitFiberRoot)try{ot.onCommitFiberRoot(it,e,void 0,!(128&~e.current.flags))}catch(t){}}(r.stateNode),au(e,Xe()),null!==t)for(a=e.onRecoverableError,r=0;r<t.length;r++)i=t[r],a(i.value,{componentStack:i.stack,digest:i.digest});if(Wl)throw Wl=!1,e=ql,ql=null,e;!!(1&Jl)&&0!==e.tag&&Su(),o=e.pendingLanes,1&o?e===Xl?Yl++:(Yl=0,Xl=e):Yl=0,Ha()}(e,t,r,a)}finally{Pl.transition=i,wt=a}return null}function Su(){if(null!==Ql){var e=kt(Jl),t=Pl.transition,r=wt;try{if(Pl.transition=null,wt=16>e?16:e,null===Ql)var a=!1;else{if(e=Ql,Ql=null,Jl=0,6&xl)throw Error(n(331));var i=xl;for(xl|=4,Zs=e.current;null!==Zs;){var o=Zs,s=o.child;if(16&Zs.flags){var l=o.deletions;if(null!==l){for(var u=0;u<l.length;u++){var c=l[u];for(Zs=c;null!==Zs;){var d=Zs;switch(d.tag){case 0:case 11:case 15:rl(8,d,o)}var f=d.child;if(null!==f)f.return=d,Zs=f;else for(;null!==Zs;){var h=(d=Zs).sibling,p=d.return;if(ol(d),d===c){Zs=null;break}if(null!==h){h.return=p,Zs=h;break}Zs=p}}}var m=o.alternate;if(null!==m){var g=m.child;if(null!==g){m.child=null;do{var v=g.sibling;g.sibling=null,g=v}while(null!==g)}}Zs=o}}if(2064&o.subtreeFlags&&null!==s)s.return=o,Zs=s;else e:for(;null!==Zs;){if(2048&(o=Zs).flags)switch(o.tag){case 0:case 11:case 15:rl(9,o,o.return)}var y=o.sibling;if(null!==y){y.return=o.return,Zs=y;break e}Zs=o.return}}var b=e.current;for(Zs=b;null!==Zs;){var w=(s=Zs).child;if(2064&s.subtreeFlags&&null!==w)w.return=s,Zs=w;else e:for(s=b;null!==Zs;){if(2048&(l=Zs).flags)try{switch(l.tag){case 0:case 11:case 15:al(9,l)}}catch(_){Iu(l,l.return,_)}if(l===s){Zs=null;break e}var k=l.sibling;if(null!==k){k.return=l.return,Zs=k;break e}Zs=l.return}}if(xl=i,Ha(),ot&&"function"==typeof ot.onPostCommitFiberRoot)try{ot.onPostCommitFiberRoot(it,e)}catch(_){}a=!0}return a}finally{wt=r,Pl.transition=t}}return!1}function Eu(e,t,n){e=ji(e,t=ps(0,t=cs(n,t),1),1),t=tu(),null!==e&&(yt(e,1,t),au(e,t))}function Iu(e,t,n){if(3===e.tag)Eu(e,e,n);else for(;null!==t;){if(3===t.tag){Eu(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"==typeof t.type.getDerivedStateFromError||"function"==typeof r.componentDidCatch&&(null===Kl||!Kl.has(r))){t=ji(t,e=ms(t,e=cs(n,e),1),1),e=tu(),null!==t&&(yt(t,1,e),au(t,e));break}}t=t.return}}function Cu(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=tu(),e.pingedLanes|=e.suspendedLanes&n,Nl===e&&(Ol&n)===n&&(4===Dl||3===Dl&&(130023424&Ol)===Ol&&500>Xe()-$l?hu(e,0):Fl|=n),au(e,t)}function Tu(e,t){0===t&&(1&e.mode?(t=dt,!(130023424&(dt<<=1))&&(dt=4194304)):t=1);var n=tu();null!==(e=Di(e,t))&&(yt(e,t,n),au(e,n))}function Pu(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),Tu(e,n)}function xu(e,t){var r=0;switch(e.tag){case 13:var a=e.stateNode,i=e.memoizedState;null!==i&&(r=i.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(n(314))}null!==a&&a.delete(t),Tu(e,r)}function Nu(e,t){return Ge(e,t)}function Ru(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ou(e,t,n,r){return new Ru(e,t,n,r)}function Lu(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Au(e,t){var n=e.alternate;return null===n?((n=Ou(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Du(e,t,r,a,i,o){var s=2;if(a=e,"function"==typeof e)Lu(e)&&(s=1);else if("string"==typeof e)s=5;else e:switch(e){case _:return Mu(r.children,i,o,t);case S:s=8,i|=8;break;case I:return(e=Ou(12,r,t,2|i)).elementType=I,e.lanes=o,e;case N:return(e=Ou(13,r,t,i)).elementType=N,e.lanes=o,e;case R:return(e=Ou(19,r,t,i)).elementType=R,e.lanes=o,e;case A:return Uu(r,i,o,t);default:if("object"==typeof e&&null!==e)switch(e.$$typeof){case C:s=10;break e;case P:s=9;break e;case x:s=11;break e;case O:s=14;break e;case L:s=16,a=null;break e}throw Error(n(130,null==e?e:typeof e,""))}return(t=Ou(s,r,t,i)).elementType=e,t.type=a,t.lanes=o,t}function Mu(e,t,n,r){return(e=Ou(7,e,r,t)).lanes=n,e}function Uu(e,t,n,r){return(e=Ou(22,e,r,t)).elementType=A,e.lanes=n,e.stateNode={isHidden:!1},e}function zu(e,t,n){return(e=Ou(6,e,null,t)).lanes=n,e}function Fu(e,t,n){return(t=Ou(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ju(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=vt(0),this.expirationTimes=vt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vt(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Vu(e,t,n,r,a,i,o,s,l){return e=new ju(e,t,n,s,l),1===t?(t=1,!0===i&&(t|=8)):t=0,i=Ou(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ui(i),e}function $u(e){if(!e)return Pa;e:{if(He(e=e._reactInternals)!==e||1!==e.tag)throw Error(n(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(La(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(n(171))}if(1===e.tag){var r=e.type;if(La(r))return Ma(e,r,t)}return t}function Hu(e,t,n,r,a,i,o,s,l){return(e=Vu(n,r,!0,e,0,i,0,s,l)).context=$u(null),n=e.current,(i=Fi(r=tu(),a=nu(n))).callback=null!=t?t:null,ji(n,i,a),e.current.lanes=a,yt(e,a,r),au(e,r),e}function Bu(e,t,n,r){var a=t.current,i=tu(),o=nu(a);return n=$u(n),null===t.context?t.context=n:t.pendingContext=n,(t=Fi(i,o)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=ji(a,t,o))&&(ru(e,a,o,i),Vi(e,a,o)),o}function Wu(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function qu(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function Ku(e,t){qu(e,t),(e=e.alternate)&&qu(e,t)}El=function(e,t,r){if(null!==e)if(e.memoizedProps!==t.pendingProps||Na.current)ws=!0;else{if(0===(e.lanes&r)&&!(128&t.flags))return ws=!1,function(e,t,n){switch(t.tag){case 3:Ns(t),pi();break;case 5:Xi(t);break;case 1:La(t.type)&&Ua(t);break;case 4:Ji(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;Ta(Si,r._currentValue),r._currentValue=a;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(Ta(eo,1&eo.current),t.flags|=128,null):0!==(n&t.child.childLanes)?zs(e,t,n):(Ta(eo,1&eo.current),null!==(e=Ws(e,t,n))?e.sibling:null);Ta(eo,1&eo.current);break;case 19:if(r=0!==(n&t.childLanes),128&e.flags){if(r)return Hs(e,t,n);t.flags|=128}if(null!==(a=t.memoizedState)&&(a.rendering=null,a.tail=null,a.lastEffect=null),Ta(eo,eo.current),r)break;return null;case 22:case 23:return t.lanes=0,Is(e,t,n)}return Ws(e,t,n)}(e,t,r);ws=!!(131072&e.flags)}else ws=!1,ii&&1048576&t.flags&&ei(t,Ka,t.index);switch(t.lanes=0,t.tag){case 2:var a=t.type;Bs(e,t),e=t.pendingProps;var i=Oa(t,xa.current);Ni(t,r),i=vo(null,t,a,e,i,r);var o=yo();return t.flags|=1,"object"==typeof i&&null!==i&&"function"==typeof i.render&&void 0===i.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,La(a)?(o=!0,Ua(t)):o=!1,t.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,Ui(t),i.updater=is,t.stateNode=i,i._reactInternals=t,us(t,a,e,r),t=xs(null,t,a,!0,o,r)):(t.tag=0,ii&&o&&ti(t),ks(null,t,i,r),t=t.child),t;case 16:a=t.elementType;e:{switch(Bs(e,t),e=t.pendingProps,a=(i=a._init)(a._payload),t.type=a,i=t.tag=function(e){if("function"==typeof e)return Lu(e)?1:0;if(null!=e){if((e=e.$$typeof)===x)return 11;if(e===O)return 14}return 2}(a),e=rs(a,e),i){case 0:t=Ts(null,t,a,e,r);break e;case 1:t=Ps(null,t,a,e,r);break e;case 11:t=_s(null,t,a,e,r);break e;case 14:t=Ss(null,t,a,rs(a.type,e),r);break e}throw Error(n(306,a,""))}return t;case 0:return a=t.type,i=t.pendingProps,Ts(e,t,a,i=t.elementType===a?i:rs(a,i),r);case 1:return a=t.type,i=t.pendingProps,Ps(e,t,a,i=t.elementType===a?i:rs(a,i),r);case 3:e:{if(Ns(t),null===e)throw Error(n(387));a=t.pendingProps,i=(o=t.memoizedState).element,zi(e,t),Hi(t,a,null,r);var s=t.memoizedState;if(a=s.element,o.isDehydrated){if(o={element:a,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,256&t.flags){t=Rs(e,t,a,r,i=cs(Error(n(423)),t));break e}if(a!==i){t=Rs(e,t,a,r,i=cs(Error(n(424)),t));break e}for(ai=ca(t.stateNode.containerInfo.firstChild),ri=t,ii=!0,oi=null,r=_i(t,null,a,r),t.child=r;r;)r.flags=-3&r.flags|4096,r=r.sibling}else{if(pi(),a===i){t=Ws(e,t,r);break e}ks(e,t,a,r)}t=t.child}return t;case 5:return Xi(t),null===e&&ci(t),a=t.type,i=t.pendingProps,o=null!==e?e.memoizedProps:null,s=i.children,ra(a,i)?s=null:null!==o&&ra(a,o)&&(t.flags|=32),Cs(e,t),ks(e,t,s,r),t.child;case 6:return null===e&&ci(t),null;case 13:return zs(e,t,r);case 4:return Ji(t,t.stateNode.containerInfo),a=t.pendingProps,null===e?t.child=ki(t,null,a,r):ks(e,t,a,r),t.child;case 11:return a=t.type,i=t.pendingProps,_s(e,t,a,i=t.elementType===a?i:rs(a,i),r);case 7:return ks(e,t,t.pendingProps,r),t.child;case 8:case 12:return ks(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(a=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,Ta(Si,a._currentValue),a._currentValue=s,null!==o)if(lr(o.value,s)){if(o.children===i.children&&!Na.current){t=Ws(e,t,r);break e}}else for(null!==(o=t.child)&&(o.return=t);null!==o;){var l=o.dependencies;if(null!==l){s=o.child;for(var u=l.firstContext;null!==u;){if(u.context===a){if(1===o.tag){(u=Fi(-1,r&-r)).tag=2;var c=o.updateQueue;if(null!==c){var d=(c=c.shared).pending;null===d?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}o.lanes|=r,null!==(u=o.alternate)&&(u.lanes|=r),xi(o.return,r,t),l.lanes|=r;break}u=u.next}}else if(10===o.tag)s=o.type===t.type?null:o.child;else if(18===o.tag){if(null===(s=o.return))throw Error(n(341));s.lanes|=r,null!==(l=s.alternate)&&(l.lanes|=r),xi(s,r,t),s=o.sibling}else s=o.child;if(null!==s)s.return=o;else for(s=o;null!==s;){if(s===t){s=null;break}if(null!==(o=s.sibling)){o.return=s.return,s=o;break}s=s.return}o=s}ks(e,t,i.children,r),t=t.child}return t;case 9:return i=t.type,a=t.pendingProps.children,Ni(t,r),a=a(i=Ri(i)),t.flags|=1,ks(e,t,a,r),t.child;case 14:return i=rs(a=t.type,t.pendingProps),Ss(e,t,a,i=rs(a.type,i),r);case 15:return Es(e,t,t.type,t.pendingProps,r);case 17:return a=t.type,i=t.pendingProps,i=t.elementType===a?i:rs(a,i),Bs(e,t),t.tag=1,La(a)?(e=!0,Ua(t)):e=!1,Ni(t,r),ss(t,a,i),us(t,a,i,r),xs(null,t,a,!0,e,r);case 19:return Hs(e,t,r);case 22:return Is(e,t,r)}throw Error(n(156,t.tag))};var Gu="function"==typeof reportError?reportError:function(e){console.error(e)};function Qu(e){this._internalRoot=e}function Ju(e){this._internalRoot=e}function Yu(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Xu(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Zu(){}function ec(e,t,n,r,a){var i=n._reactRootContainer;if(i){var o=i;if("function"==typeof a){var s=a;a=function(){var e=Wu(o);s.call(e)}}Bu(t,o,e,a)}else o=function(e,t,n,r,a){if(a){if("function"==typeof r){var i=r;r=function(){var e=Wu(o);i.call(e)}}var o=Hu(t,r,e,0,null,!1,0,"",Zu);return e._reactRootContainer=o,e[ma]=o.current,Hr(8===e.nodeType?e.parentNode:e),du(),o}for(;a=e.lastChild;)e.removeChild(a);if("function"==typeof r){var s=r;r=function(){var e=Wu(l);s.call(e)}}var l=Vu(e,0,!1,null,0,!1,0,"",Zu);return e._reactRootContainer=l,e[ma]=l.current,Hr(8===e.nodeType?e.parentNode:e),du(function(){Bu(t,l,n,r)}),l}(n,t,e,a,r);return Wu(o)}Ju.prototype.render=Qu.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(n(409));Bu(e,t,null,null)},Ju.prototype.unmount=Qu.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;du(function(){Bu(null,e,null,null)}),t[ma]=null}},Ju.prototype.unstable_scheduleHydration=function(e){if(e){var t=It();e={blockedOn:null,target:e,priority:t};for(var n=0;n<At.length&&0!==t&&t<At[n].priority;n++);At.splice(n,0,e),0===n&&zt(e)}},_t=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ft(t.pendingLanes);0!==n&&(bt(t,1|n),au(t,Xe()),!(6&xl)&&(Hl=Xe()+500,Ha()))}break;case 13:du(function(){var t=Di(e,1);if(null!==t){var n=tu();ru(t,e,1,n)}}),Ku(e,1)}},St=function(e){if(13===e.tag){var t=Di(e,134217728);if(null!==t)ru(t,e,134217728,tu());Ku(e,134217728)}},Et=function(e){if(13===e.tag){var t=nu(e),n=Di(e,t);if(null!==n)ru(n,e,t,tu());Ku(e,t)}},It=function(){return wt},Ct=function(e,t){var n=wt;try{return wt=e,t()}finally{wt=n}},Se=function(e,t,r){switch(t){case"input":if(Z(e,r),t=r.name,"radio"===r.type&&null!=t){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var a=r[t];if(a!==e&&a.form===e.form){var i=_a(a);if(!i)throw Error(n(90));G(a),Z(a,i)}}}break;case"textarea":oe(e,r);break;case"select":null!=(t=r.value)&&re(e,!!r.multiple,t,!1)}},xe=cu,Ne=du;var tc={usingClientEntryPoint:!1,Events:[wa,ka,_a,Te,Pe,cu]},nc={findFiberByHostInstance:ba,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},rc={bundleType:nc.bundleType,version:nc.version,rendererPackageName:nc.rendererPackageName,rendererConfig:nc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:y.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=qe(e))?null:e.stateNode},findFiberByHostInstance:nc.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var ac=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ac.isDisabled&&ac.supportsFiber)try{it=ac.inject(rc),ot=ac}catch(de){}}return E.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tc,E.createPortal=function(e,t){var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Yu(t))throw Error(n(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:k,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,r)},E.createRoot=function(e,t){if(!Yu(e))throw Error(n(299));var r=!1,a="",i=Gu;return null!=t&&(!0===t.unstable_strictMode&&(r=!0),void 0!==t.identifierPrefix&&(a=t.identifierPrefix),void 0!==t.onRecoverableError&&(i=t.onRecoverableError)),t=Vu(e,1,!1,null,0,r,0,a,i),e[ma]=t.current,Hr(8===e.nodeType?e.parentNode:e),new Qu(t)},E.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"==typeof e.render)throw Error(n(188));throw e=Object.keys(e).join(","),Error(n(268,e))}return e=null===(e=qe(t))?null:e.stateNode},E.flushSync=function(e){return du(e)},E.hydrate=function(e,t,r){if(!Xu(t))throw Error(n(200));return ec(null,e,t,!0,r)},E.hydrateRoot=function(e,t,r){if(!Yu(e))throw Error(n(405));var a=null!=r&&r.hydratedSources||null,i=!1,o="",s=Gu;if(null!=r&&(!0===r.unstable_strictMode&&(i=!0),void 0!==r.identifierPrefix&&(o=r.identifierPrefix),void 0!==r.onRecoverableError&&(s=r.onRecoverableError)),t=Hu(t,null,e,1,null!=r?r:null,i,0,o,s),e[ma]=t.current,Hr(e),a)for(e=0;e<a.length;e++)i=(i=(r=a[e])._getVersion)(r._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[r,i]:t.mutableSourceEagerHydrationData.push(r,i);return new Ju(t)},E.render=function(e,t,r){if(!Xu(t))throw Error(n(200));return ec(null,e,t,!1,r)},E.unmountComponentAtNode=function(e){if(!Xu(e))throw Error(n(40));return!!e._reactRootContainer&&(du(function(){ec(null,null,e,!1,function(){e._reactRootContainer=null,e[ma]=null})}),!0)},E.unstable_batchedUpdates=cu,E.unstable_renderSubtreeIntoContainer=function(e,t,r,a){if(!Xu(r))throw Error(n(200));if(null==e||void 0===e._reactInternals)throw Error(n(38));return ec(e,t,r,!1,a)},E.version="18.3.1-next-f1338f8080-20240426",E}function x(){if(w)return S.exports;return w=1,function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),S.exports=P(),S.exports}const N=n(function(){if(k)return _;k=1;var e=x();return _.createRoot=e.createRoot,_.hydrateRoot=e.hydrateRoot,_}());var R,O,L=x();
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function A(){return A=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},A.apply(this,arguments)}(O=R||(R={})).Pop="POP",O.Push="PUSH",O.Replace="REPLACE";const D="popstate";function M(e){return void 0===e&&(e={}),function(e,t,n,r){void 0===r&&(r={});let{window:a=document.defaultView,v5Compat:i=!1}=r,o=a.history,s=R.Pop,l=null,u=c();null==u&&(u=0,o.replaceState(A({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){s=R.Pop;let e=c(),t=null==e?null:e-u;u=e,l&&l({action:s,location:m.location,delta:t})}function f(e,t){s=R.Push;let n=j(m.location,e,t);u=c()+1;let r=F(n,u),d=m.createHref(n);try{o.pushState(r,"",d)}catch(f){if(f instanceof DOMException&&"DataCloneError"===f.name)throw f;a.location.assign(d)}i&&l&&l({action:s,location:m.location,delta:1})}function h(e,t){s=R.Replace;let n=j(m.location,e,t);u=c();let r=F(n,u),a=m.createHref(n);o.replaceState(r,"",a),i&&l&&l({action:s,location:m.location,delta:0})}function p(e){let t="null"!==a.location.origin?a.location.origin:a.location.href,n="string"==typeof e?e:V(e);return n=n.replace(/ $/,"%20"),U(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}let m={get action(){return s},get location(){return e(a,o)},listen(e){if(l)throw new Error("A history only accepts one active listener");return a.addEventListener(D,d),l=e,()=>{a.removeEventListener(D,d),l=null}},createHref:e=>t(a,e),createURL:p,encodeLocation(e){let t=p(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:h,go:e=>o.go(e)};return m}(function(e,t){let{pathname:n,search:r,hash:a}=e.location;return j("",{pathname:n,search:r,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||"default")},function(e,t){return"string"==typeof t?t:V(t)},0,e)}function U(e,t){if(!1===e||null==e)throw new Error(t)}function z(e,t){if(!e){"undefined"!=typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function F(e,t){return{usr:e.state,key:e.key,idx:t}}function j(e,t,n,r){return void 0===n&&(n=null),A({pathname:"string"==typeof e?e:e.pathname,search:"",hash:""},"string"==typeof t?$(t):t,{state:n,key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}function V(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function $(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}var H,B;function W(e,t,n){return void 0===n&&(n="/"),function(e,t,n){let r="string"==typeof t?$(t):t,a=ie(r.pathname||"/",n);if(null==a)return null;let i=q(e);!function(e){e.sort((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n]);return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)))}(i);let o=null;for(let s=0;null==o&&s<i.length;++s){let e=ae(a);o=ne(i[s],e)}return o}(e,t,n)}function q(e,t,n,r){void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r="");let a=(e,a,i)=>{let o={relativePath:void 0===i?e.path||"":i,caseSensitive:!0===e.caseSensitive,childrenIndex:a,route:e};o.relativePath.startsWith("/")&&(U(o.relativePath.startsWith(r),'Absolute route path "'+o.relativePath+'" nested under path "'+r+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),o.relativePath=o.relativePath.slice(r.length));let s=ue([r,o.relativePath]),l=n.concat(o);e.children&&e.children.length>0&&(U(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+s+'".'),q(e.children,t,l,s)),(null!=e.path||e.index)&&t.push({path:s,score:te(s,e.index),routesMeta:l})};return e.forEach((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let r of K(e.path))a(e,t,r);else a(e,t)}),t}function K(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,a=n.endsWith("?"),i=n.replace(/\?$/,"");if(0===r.length)return a?[i,""]:[i];let o=K(r.join("/")),s=[];return s.push(...o.map(e=>""===e?i:[i,e].join("/"))),a&&s.push(...o),s.map(t=>e.startsWith("/")&&""===t?"/":t)}(B=H||(H={})).data="data",B.deferred="deferred",B.redirect="redirect",B.error="error";const G=/^:[\w-]+$/,Q=3,J=2,Y=1,X=10,Z=-2,ee=e=>"*"===e;function te(e,t){let n=e.split("/"),r=n.length;return n.some(ee)&&(r+=Z),t&&(r+=J),n.filter(e=>!ee(e)).reduce((e,t)=>e+(G.test(t)?Q:""===t?Y:X),r)}function ne(e,t,n){let{routesMeta:r}=e,a={},i="/",o=[];for(let s=0;s<r.length;++s){let e=r[s],n=s===r.length-1,l="/"===i?t:t.slice(i.length)||"/",u=re({path:e.relativePath,caseSensitive:e.caseSensitive,end:n},l),c=e.route;if(!u)return null;Object.assign(a,u.params),o.push({params:a,pathname:ue([i,u.pathname]),pathnameBase:ce(ue([i,u.pathnameBase])),route:c}),"/"!==u.pathnameBase&&(i=ue([i,u.pathnameBase]))}return o}function re(e,t){"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=!0);z("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)"));e.endsWith("*")?(r.push({paramName:"*"}),a+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":""!==e&&"/"!==e&&(a+="(?:(?=\\/|$))");let i=new RegExp(a,t?void 0:"i");return[i,r]}(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let i=a[0],o=i.replace(/(.)\/+$/,"$1"),s=a.slice(1);return{params:r.reduce((e,t,n)=>{let{paramName:r,isOptional:a}=t;if("*"===r){let e=s[n]||"";o=i.slice(0,i.length-e.length).replace(/(.)\/+$/,"$1")}const l=s[n];return e[r]=a&&!l?void 0:(l||"").replace(/%2F/g,"/"),e},{}),pathname:i,pathnameBase:o,pattern:e}}function ae(e){try{return e.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(t){return z(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function ie(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function oe(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function se(e,t){let n=function(e){return e.filter((e,t)=>0===t||e.route.path&&e.route.path.length>0)}(e);return t?n.map((e,t)=>t===n.length-1?e.pathname:e.pathnameBase):n.map(e=>e.pathnameBase)}function le(e,t,n,r){let a;void 0===r&&(r=!1),"string"==typeof e?a=$(e):(a=A({},e),U(!a.pathname||!a.pathname.includes("?"),oe("?","pathname","search",a)),U(!a.pathname||!a.pathname.includes("#"),oe("#","pathname","hash",a)),U(!a.search||!a.search.includes("#"),oe("#","search","hash",a)));let i,o=""===e||""===a.pathname,s=o?"/":a.pathname;if(null==s)i=n;else{let e=t.length-1;if(!r&&s.startsWith("..")){let t=s.split("/");for(;".."===t[0];)t.shift(),e-=1;a.pathname=t.join("/")}i=e>=0?t[e]:"/"}let l=function(e,t){void 0===t&&(t="/");let{pathname:n,search:r="",hash:a=""}="string"==typeof e?$(e):e,i=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)}),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:i,search:de(r),hash:fe(a)}}(a,i),u=s&&"/"!==s&&s.endsWith("/"),c=(o||"."===s)&&n.endsWith("/");return l.pathname.endsWith("/")||!u&&!c||(l.pathname+="/"),l}const ue=e=>e.join("/").replace(/\/\/+/g,"/"),ce=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),de=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",fe=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";const he=["post","put","patch","delete"];new Set(he);const pe=["get",...he];
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
function me(){return me=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},me.apply(this,arguments)}new Set(pe);const ge=p.createContext(null),ve=p.createContext(null),ye=p.createContext(null),be=p.createContext(null),we=p.createContext({outlet:null,matches:[],isDataRoute:!1}),ke=p.createContext(null);function _e(){return null!=p.useContext(be)}function Se(){return _e()||U(!1),p.useContext(be).location}function Ee(e){p.useContext(ye).static||p.useLayoutEffect(e)}function Ie(){let{isDataRoute:e}=p.useContext(we);return e?function(){let{router:e}=function(){let e=p.useContext(ge);return e||U(!1),e}(Le.UseNavigateStable),t=De(Ae.UseNavigateStable),n=p.useRef(!1);return Ee(()=>{n.current=!0}),p.useCallback(function(r,a){void 0===a&&(a={}),n.current&&("number"==typeof r?e.navigate(r):e.navigate(r,me({fromRouteId:t},a)))},[e,t])}():function(){_e()||U(!1);let e=p.useContext(ge),{basename:t,future:n,navigator:r}=p.useContext(ye),{matches:a}=p.useContext(we),{pathname:i}=Se(),o=JSON.stringify(se(a,n.v7_relativeSplatPath)),s=p.useRef(!1);return Ee(()=>{s.current=!0}),p.useCallback(function(n,a){if(void 0===a&&(a={}),!s.current)return;if("number"==typeof n)return void r.go(n);let l=le(n,JSON.parse(o),i,"path"===a.relative);null==e&&"/"!==t&&(l.pathname="/"===l.pathname?t:ue([t,l.pathname])),(a.replace?r.replace:r.push)(l,a.state,a)},[t,r,o,i,e])}()}function Ce(){let{matches:e}=p.useContext(we),t=e[e.length-1];return t?t.params:{}}function Te(e,t){let{relative:n}=void 0===t?{}:t,{future:r}=p.useContext(ye),{matches:a}=p.useContext(we),{pathname:i}=Se(),o=JSON.stringify(se(a,r.v7_relativeSplatPath));return p.useMemo(()=>le(e,JSON.parse(o),i,"path"===n),[e,o,i,n])}function Pe(e,t){return function(e,t,n,r){_e()||U(!1);let{navigator:a}=p.useContext(ye),{matches:i}=p.useContext(we),o=i[i.length-1],s=o?o.params:{};!o||o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u,c=Se();if(t){var d;let e="string"==typeof t?$(t):t;"/"===l||(null==(d=e.pathname)?void 0:d.startsWith(l))||U(!1),u=e}else u=c;let f=u.pathname||"/",h=f;if("/"!==l){let e=l.replace(/^\//,"").split("/");h="/"+f.replace(/^\//,"").split("/").slice(e.length).join("/")}let m=W(e,{pathname:h}),g=function(e,t,n,r){var a;void 0===t&&(t=[]);void 0===n&&(n=null);void 0===r&&(r=null);if(null==e){var i;if(!n)return null;if(n.errors)e=n.matches;else{if(!(null!=(i=r)&&i.v7_partialHydration&&0===t.length&&!n.initialized&&n.matches.length>0))return null;e=n.matches}}let o=e,s=null==(a=n)?void 0:a.errors;if(null!=s){let e=o.findIndex(e=>e.route.id&&void 0!==(null==s?void 0:s[e.route.id]));e>=0||U(!1),o=o.slice(0,Math.min(o.length,e+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<o.length;c++){let e=o[c];if((e.route.HydrateFallback||e.route.hydrateFallbackElement)&&(u=c),e.route.id){let{loaderData:t,errors:r}=n,a=e.route.loader&&void 0===t[e.route.id]&&(!r||void 0===r[e.route.id]);if(e.route.lazy||a){l=!0,o=u>=0?o.slice(0,u+1):[o[0]];break}}}return o.reduceRight((e,r,a)=>{let i,c=!1,d=null,f=null;var h;n&&(i=s&&r.route.id?s[r.route.id]:void 0,d=r.route.errorElement||Ne,l&&(u<0&&0===a?(Me[h="route-fallback"]||(Me[h]=!0),c=!0,f=null):u===a&&(c=!0,f=r.route.hydrateFallbackElement||null)));let m=t.concat(o.slice(0,a+1)),g=()=>{let t;return t=i?d:c?f:r.route.Component?p.createElement(r.route.Component,null):r.route.element?r.route.element:e,p.createElement(Oe,{match:r,routeContext:{outlet:e,matches:m,isDataRoute:null!=n},children:t})};return n&&(r.route.ErrorBoundary||r.route.errorElement||0===a)?p.createElement(Re,{location:n.location,revalidation:n.revalidation,component:d,error:i,children:g(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):g()},null)}(m&&m.map(e=>Object.assign({},e,{params:Object.assign({},s,e.params),pathname:ue([l,a.encodeLocation?a.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?l:ue([l,a.encodeLocation?a.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])})),i,n,r);if(t&&g)return p.createElement(be.Provider,{value:{location:me({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:R.Pop}},g);return g}(e,t)}function xe(){let e=function(){var e;let t=p.useContext(ke),n=function(){let e=p.useContext(ve);return e||U(!1),e}(),r=De();if(void 0!==t)return t;return null==(e=n.errors)?void 0:e[r]}(),t=function(e){return null!=e&&"number"==typeof e.status&&"string"==typeof e.statusText&&"boolean"==typeof e.internal&&"data"in e}(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return p.createElement(p.Fragment,null,p.createElement("h2",null,"Unexpected Application Error!"),p.createElement("h3",{style:{fontStyle:"italic"}},t),n?p.createElement("pre",{style:r},n):null,null)}const Ne=p.createElement(xe,null);class Re extends p.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?p.createElement(we.Provider,{value:this.props.routeContext},p.createElement(ke.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Oe(e){let{routeContext:t,match:n,children:r}=e,a=p.useContext(ge);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),p.createElement(we.Provider,{value:t},r)}var Le=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Le||{}),Ae=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Ae||{});function De(e){let t=function(){let e=p.useContext(we);return e||U(!1),e}(),n=t.matches[t.matches.length-1];return n.route.id||U(!1),n.route.id}const Me={};function Ue(e){let{to:t,replace:n,state:r,relative:a}=e;_e()||U(!1);let{future:i,static:o}=p.useContext(ye),{matches:s}=p.useContext(we),{pathname:l}=Se(),u=Ie(),c=le(t,se(s,i.v7_relativeSplatPath),l,"path"===a),d=JSON.stringify(c);return p.useEffect(()=>u(JSON.parse(d),{replace:n,state:r,relative:a}),[u,d,a,n,r]),null}function ze(e){U(!1)}function Fe(e){let{basename:t="/",children:n=null,location:r,navigationType:a=R.Pop,navigator:i,static:o=!1,future:s}=e;_e()&&U(!1);let l=t.replace(/^\/*/,"/"),u=p.useMemo(()=>({basename:l,navigator:i,static:o,future:me({v7_relativeSplatPath:!1},s)}),[l,s,i,o]);"string"==typeof r&&(r=$(r));let{pathname:c="/",search:d="",hash:f="",state:h=null,key:m="default"}=r,g=p.useMemo(()=>{let e=ie(c,l);return null==e?null:{location:{pathname:e,search:d,hash:f,state:h,key:m},navigationType:a}},[l,c,d,f,h,m,a]);return null==g?null:p.createElement(ye.Provider,{value:u},p.createElement(be.Provider,{children:n,value:g}))}function je(e){let{children:t,location:n}=e;return Pe(Ve(t),n)}function Ve(e,t){void 0===t&&(t=[]);let n=[];return p.Children.forEach(e,(e,r)=>{if(!p.isValidElement(e))return;let a=[...t,r];if(e.type===p.Fragment)return void n.push.apply(n,Ve(e.props.children,a));e.type!==ze&&U(!1),e.props.index&&e.props.children&&U(!1);let i={id:e.props.id||a.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(i.children=Ve(e.props.children,a)),n.push(i)}),n}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $e(){return $e=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$e.apply(this,arguments)}function He(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}new Promise(()=>{});const Be=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],We=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"];try{window.__reactRouterVersion="6"}catch(cl){}const qe=p.createContext({isTransitioning:!1}),Ke=g.startTransition;function Ge(e){let{basename:t,children:n,future:r,window:a}=e,i=p.useRef();null==i.current&&(i.current=M({window:a,v5Compat:!0}));let o=i.current,[s,l]=p.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=p.useCallback(e=>{u&&Ke?Ke(()=>l(e)):l(e)},[l,u]);return p.useLayoutEffect(()=>o.listen(c),[o,c]),p.useEffect(()=>{return null==(e=r)||e.v7_startTransition,void(null==e||e.v7_relativeSplatPath);var e},[r]),p.createElement(Fe,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:o,future:r})}const Qe="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement,Je=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ye=p.forwardRef(function(e,t){let n,{onClick:r,relative:a,reloadDocument:i,replace:o,state:s,target:l,to:u,preventScrollReset:c,viewTransition:d}=e,f=He(e,Be),{basename:h}=p.useContext(ye),m=!1;if("string"==typeof u&&Je.test(u)&&(n=u,Qe))try{let e=new URL(window.location.href),t=u.startsWith("//")?new URL(e.protocol+u):new URL(u),n=ie(t.pathname,h);t.origin===e.origin&&null!=n?u=n+t.search+t.hash:m=!0}catch(cl){}let g=function(e,t){let{relative:n}=void 0===t?{}:t;_e()||U(!1);let{basename:r,navigator:a}=p.useContext(ye),{hash:i,pathname:o,search:s}=Te(e,{relative:n}),l=o;return"/"!==r&&(l="/"===o?r:ue([r,o])),a.createHref({pathname:l,search:s,hash:i})}(u,{relative:a}),v=function(e,t){let{target:n,replace:r,state:a,preventScrollReset:i,relative:o,viewTransition:s}=void 0===t?{}:t,l=Ie(),u=Se(),c=Te(e,{relative:o});return p.useCallback(t=>{if(function(e,t){return!(0!==e.button||t&&"_self"!==t||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e))}(t,n)){t.preventDefault();let n=void 0!==r?r:V(u)===V(c);l(e,{replace:n,state:a,preventScrollReset:i,relative:o,viewTransition:s})}},[u,l,c,r,a,n,e,i,o,s])}(u,{replace:o,state:s,target:l,preventScrollReset:c,relative:a,viewTransition:d});return p.createElement("a",$e({},f,{href:n||g,onClick:m||i?r:function(e){r&&r(e),e.defaultPrevented||v(e)},ref:t,target:l}))}),Xe=p.forwardRef(function(e,t){let{"aria-current":n="page",caseSensitive:r=!1,className:a="",end:i=!1,style:o,to:s,viewTransition:l,children:u}=e,c=He(e,We),d=Te(s,{relative:c.relative}),f=Se(),h=p.useContext(ve),{navigator:m,basename:g}=p.useContext(ye),v=null!=h&&function(e,t){void 0===t&&(t={});let n=p.useContext(qe);null==n&&U(!1);let{basename:r}=function(){let e=p.useContext(ge);return e||U(!1),e}(Ze.useViewTransitionState),a=Te(e,{relative:t.relative});if(!n.isTransitioning)return!1;let i=ie(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=ie(n.nextLocation.pathname,r)||n.nextLocation.pathname;return null!=re(a.pathname,o)||null!=re(a.pathname,i)}(d)&&!0===l,y=m.encodeLocation?m.encodeLocation(d).pathname:d.pathname,b=f.pathname,w=h&&h.navigation&&h.navigation.location?h.navigation.location.pathname:null;r||(b=b.toLowerCase(),w=w?w.toLowerCase():null,y=y.toLowerCase()),w&&g&&(w=ie(w,g)||w);const k="/"!==y&&y.endsWith("/")?y.length-1:y.length;let _,S=b===y||!i&&b.startsWith(y)&&"/"===b.charAt(k),E=null!=w&&(w===y||!i&&w.startsWith(y)&&"/"===w.charAt(y.length)),I={isActive:S,isPending:E,isTransitioning:v},C=S?n:void 0;_="function"==typeof a?a(I):[a,S?"active":null,E?"pending":null,v?"transitioning":null].filter(Boolean).join(" ");let T="function"==typeof o?o(I):o;return p.createElement(Ye,$e({},c,{"aria-current":C,className:_,ref:t,style:T,to:s,viewTransition:l}),"function"==typeof u?u(I):u)});var Ze,et,tt,nt;(et=Ze||(Ze={})).UseScrollRestoration="useScrollRestoration",et.UseSubmit="useSubmit",et.UseSubmitFetcher="useSubmitFetcher",et.UseFetcher="useFetcher",et.useViewTransitionState="useViewTransitionState",(nt=tt||(tt={})).UseFetcher="useFetcher",nt.UseFetchers="useFetchers",nt.UseScrollRestoration="useScrollRestoration";const rt={},at=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=function(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:"fulfilled",value:e}),e=>({status:"rejected",reason:e}))))};document.getElementsByTagName("link");const n=document.querySelector("meta[property=csp-nonce]"),a=(null==n?void 0:n.nonce)||(null==n?void 0:n.getAttribute("nonce"));r=e(t.map(e=>{if((e=function(e){return"/"+e}(e))in rt)return;rt[e]=!0;const t=e.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const r=document.createElement("link");return r.rel=t?"stylesheet":"modulepreload",t||(r.as="script"),r.crossOrigin="",r.href=e,a&&r.setAttribute("nonce",a),document.head.appendChild(r),t?new Promise((t,n)=>{r.addEventListener("load",t),r.addEventListener("error",()=>n(new Error(`Unable to preload CSS for ${e}`)))}):void 0}))}function a(e){const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(const e of t||[])"rejected"===e.status&&a(e.reason);return e().catch(a)})};var it={};
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
 */const ot=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let a=e.charCodeAt(r);a<128?t[n++]=a:a<2048?(t[n++]=a>>6|192,t[n++]=63&a|128):55296==(64512&a)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(a=65536+((1023&a)<<10)+(1023&e.charCodeAt(++r)),t[n++]=a>>18|240,t[n++]=a>>12&63|128,t[n++]=a>>6&63|128,t[n++]=63&a|128):(t[n++]=a>>12|224,t[n++]=a>>6&63|128,t[n++]=63&a|128)}return t},st={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let a=0;a<e.length;a+=3){const t=e[a],i=a+1<e.length,o=i?e[a+1]:0,s=a+2<e.length,l=s?e[a+2]:0,u=t>>2,c=(3&t)<<4|o>>4;let d=(15&o)<<2|l>>6,f=63&l;s||(f=64,i||(d=64)),r.push(n[u],n[c],n[d],n[f])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ot(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const a=e[n++];if(a<128)t[r++]=String.fromCharCode(a);else if(a>191&&a<224){const i=e[n++];t[r++]=String.fromCharCode((31&a)<<6|63&i)}else if(a>239&&a<365){const i=((7&a)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(i>>10)),t[r++]=String.fromCharCode(56320+(1023&i))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&a)<<12|(63&i)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let a=0;a<e.length;){const t=n[e.charAt(a++)],i=a<e.length?n[e.charAt(a)]:0;++a;const o=a<e.length?n[e.charAt(a)]:64;++a;const s=a<e.length?n[e.charAt(a)]:64;if(++a,null==t||null==i||null==o||null==s)throw new lt;const l=t<<2|i>>4;if(r.push(l),64!==o){const e=i<<4&240|o>>2;if(r.push(e),64!==s){const e=o<<6&192|s;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class lt extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ut=function(e){return function(e){const t=ot(e);return st.encodeByteArray(t,!0)}(e).replace(/\./g,"")},ct=function(e){try{return st.decodeString(e,!0)}catch(cl){console.error("base64Decode failed: ",cl)}return null};
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
const dt=()=>
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
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,ft=()=>{try{return dt()||(()=>{if("undefined"==typeof process)return;const e=it.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(cl){return}const t=e&&ct(e[1]);return t&&JSON.parse(t)})()}catch(cl){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${cl}`)}},ht=e=>{var t,n;return null==(n=null==(t=ft())?void 0:t.emulatorHosts)?void 0:n[e]},pt=e=>{const t=ht(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},mt=()=>{var e;return null==(e=ft())?void 0:e.config},gt=e=>{var t;return null==(t=ft())?void 0:t[`_${e}`]};
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
class vt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}
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
 */function yt(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}async function bt(e){return(await fetch(e,{credentials:"include"})).ok}const wt={};let kt=!1;function _t(e,t){if("undefined"==typeof window||"undefined"==typeof document||!yt(window.location.host)||wt[e]===t||wt[e]||kt)return;function n(e){return`__firebase__banner__${e}`}wt[e]=t;const r="__firebase__banner",a=function(){const e={prod:[],emulator:[]};for(const t of Object.keys(wt))wt[t]?e.emulator.push(t):e.prod.push(t);return e}().prod.length>0;function i(){const e=document.createElement("span");return e.style.cursor="pointer",e.style.marginLeft="16px",e.style.fontSize="24px",e.innerHTML=" &times;",e.onclick=()=>{kt=!0,function(){const e=document.getElementById(r);e&&e.remove()}()},e}function o(){const e=function(e){let t=document.getElementById(e),n=!1;return t||(t=document.createElement("div"),t.setAttribute("id",e),n=!0),{created:n,element:t}}(r),t=n("text"),o=document.getElementById(t)||document.createElement("span"),s=n("learnmore"),l=document.getElementById(s)||document.createElement("a"),u=n("preprendIcon"),c=document.getElementById(u)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(e.created){const t=e.element;!function(e){e.style.display="flex",e.style.background="#7faaf0",e.style.position="fixed",e.style.bottom="5px",e.style.left="5px",e.style.padding=".5em",e.style.borderRadius="5px",e.style.alignItems="center"}(t),function(e,t){e.setAttribute("id",t),e.innerText="Learn more",e.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",e.setAttribute("target","__blank"),e.style.paddingLeft="5px",e.style.textDecoration="underline"}(l,s);const n=i();!function(e,t){e.setAttribute("width","24"),e.setAttribute("id",t),e.setAttribute("height","24"),e.setAttribute("viewBox","0 0 24 24"),e.setAttribute("fill","none"),e.style.marginLeft="-6px"}(c,u),t.append(c,o,l,n),document.body.appendChild(t)}a?(o.innerText="Preview backend disconnected.",c.innerHTML='<g clip-path="url(#clip0_6013_33858)">\n<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>\n</g>\n<defs>\n<clipPath id="clip0_6013_33858">\n<rect width="24" height="24" fill="white"/>\n</clipPath>\n</defs>'):(c.innerHTML='<g clip-path="url(#clip0_6083_34804)">\n<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>\n</g>\n<defs>\n<clipPath id="clip0_6083_34804">\n<rect width="24" height="24" fill="white"/>\n</clipPath>\n</defs>',o.innerText="Preview backend running in this workspace."),o.setAttribute("id",t)}"loading"===document.readyState?window.addEventListener("DOMContentLoaded",o):o()}
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
 */function St(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function Et(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function It(){try{return"object"==typeof indexedDB}catch(cl){return!1}}function Ct(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(r);a.onsuccess=()=>{a.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},a.onupgradeneeded=()=>{n=!1},a.onerror=()=>{var e;t((null==(e=a.error)?void 0:e.message)||"")}}catch(n){t(n)}})}class Tt extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,Tt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Pt.prototype.create)}}class Pt{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,a=this.errors[e],i=a?function(e,t){return e.replace(xt,(e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`})}(a,n):"Error",o=`${this.serviceName}: ${i} (${r}).`;return new Tt(r,o,n)}}const xt=/\{\$([^}]+)}/g;function Nt(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const a of n){if(!r.includes(a))return!1;const n=e[a],i=t[a];if(Rt(n)&&Rt(i)){if(!Nt(n,i))return!1}else if(n!==i)return!1}for(const a of r)if(!n.includes(a))return!1;return!0}function Rt(e){return null!==e&&"object"==typeof e}
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
 */function Ot(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Lt(e){const t={};return e.replace(/^\?/,"").split("&").forEach(e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}}),t}function At(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}class Dt{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=Mt),void 0===r.error&&(r.error=Mt),void 0===r.complete&&(r.complete=Mt);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(cl){}}),this.observers.push(r),a}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(cl){"undefined"!=typeof console&&console.error&&console.error(cl)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Mt(){}
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
 */function Ut(e,t=1e3,n=2){const r=t*Math.pow(n,e),a=Math.round(.5*r*(Math.random()-.5)*2);return Math.min(144e5,r+a)}
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
 */function zt(e){return e&&e._delegate?e._delegate:e}class Ft{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
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
 */const jt="[DEFAULT]";
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
 */class Vt{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new vt;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(cl){}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),n=(null==e?void 0:e.optional)??!1;if(!this.isInitialized(t)&&!this.shouldAutoInitialize()){if(n)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:t})}catch(cl){if(n)return null;throw cl}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:jt})}catch(cl){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(cl){}}}}clearInstance(e=jt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=jt){return this.instances.has(e)}getOptions(e=jt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[a,i]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(a)&&i.resolve(r)}return r}onInit(e,t){const n=this.normalizeInstanceIdentifier(t),r=this.onInitCallbacks.get(n)??new Set;r.add(e),this.onInitCallbacks.set(n,r);const a=this.instances.get(n);return a&&e(a,n),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,r===jt?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}var r;return n||null}normalizeInstanceIdentifier(e=jt){return this.component?this.component.multipleInstances?e:jt:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class $t{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Vt(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
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
 */var Ht,Bt;(Bt=Ht||(Ht={}))[Bt.DEBUG=0]="DEBUG",Bt[Bt.VERBOSE=1]="VERBOSE",Bt[Bt.INFO=2]="INFO",Bt[Bt.WARN=3]="WARN",Bt[Bt.ERROR=4]="ERROR",Bt[Bt.SILENT=5]="SILENT";const Wt={debug:Ht.DEBUG,verbose:Ht.VERBOSE,info:Ht.INFO,warn:Ht.WARN,error:Ht.ERROR,silent:Ht.SILENT},qt=Ht.INFO,Kt={[Ht.DEBUG]:"log",[Ht.VERBOSE]:"log",[Ht.INFO]:"info",[Ht.WARN]:"warn",[Ht.ERROR]:"error"},Gt=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),a=Kt[t];if(!a)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[a](`[${r}]  ${e.name}:`,...n)};class Qt{constructor(e){this.name=e,this._logLevel=qt,this._logHandler=Gt,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ht))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?Wt[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ht.DEBUG,...e),this._logHandler(this,Ht.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ht.VERBOSE,...e),this._logHandler(this,Ht.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ht.INFO,...e),this._logHandler(this,Ht.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ht.WARN,...e),this._logHandler(this,Ht.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ht.ERROR,...e),this._logHandler(this,Ht.ERROR,...e)}}let Jt,Yt;const Xt=new WeakMap,Zt=new WeakMap,en=new WeakMap,tn=new WeakMap,nn=new WeakMap;let rn={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Zt.get(e);if("objectStoreNames"===t)return e.objectStoreNames||en.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return sn(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function an(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Yt||(Yt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(ln(this),t),sn(Xt.get(this))}:function(...t){return sn(e.apply(ln(this),t))}:function(t,...n){const r=e.call(ln(this),t,...n);return en.set(r,t.sort?t.sort():[t]),sn(r)}}function on(e){return"function"==typeof e?an(e):(e instanceof IDBTransaction&&function(e){if(Zt.has(e))return;const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",i),e.removeEventListener("abort",i)},a=()=>{t(),r()},i=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",a),e.addEventListener("error",i),e.addEventListener("abort",i)});Zt.set(e,t)}(e),t=e,(Jt||(Jt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some(e=>t instanceof e)?new Proxy(e,rn):e);var t}function sn(e){if(e instanceof IDBRequest)return function(e){const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("success",a),e.removeEventListener("error",i)},a=()=>{t(sn(e.result)),r()},i=()=>{n(e.error),r()};e.addEventListener("success",a),e.addEventListener("error",i)});return t.then(t=>{t instanceof IDBCursor&&Xt.set(t,e)}).catch(()=>{}),nn.set(t,e),t}(e);if(tn.has(e))return tn.get(e);const t=on(e);return t!==e&&(tn.set(e,t),nn.set(t,e)),t}const ln=e=>nn.get(e);function un(e,t,{blocked:n,upgrade:r,blocking:a,terminated:i}={}){const o=indexedDB.open(e,t),s=sn(o);return r&&o.addEventListener("upgradeneeded",e=>{r(sn(o.result),e.oldVersion,e.newVersion,sn(o.transaction),e)}),n&&o.addEventListener("blocked",e=>n(e.oldVersion,e.newVersion,e)),s.then(e=>{i&&e.addEventListener("close",()=>i()),a&&e.addEventListener("versionchange",e=>a(e.oldVersion,e.newVersion,e))}).catch(()=>{}),s}const cn=["get","getKey","getAll","getAllKeys","count"],dn=["put","add","delete","clear"],fn=new Map;function hn(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(fn.get(t))return fn.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,a=dn.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!a&&!cn.includes(n))return;const i=async function(e,...t){const i=this.transaction(e,a?"readwrite":"readonly");let o=i.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),a&&i.done]))[0]};return fn.set(t,i),i}rn=(e=>({...e,get:(t,n,r)=>hn(t,n)||e.get(t,n,r),has:(t,n)=>!!hn(t,n)||e.has(t,n)}))(rn);
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
class pn{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}const mn="@firebase/app",gn="0.14.2",vn=new Qt("@firebase/app"),yn="@firebase/app-compat",bn="@firebase/analytics-compat",wn="@firebase/analytics",kn="@firebase/app-check-compat",_n="@firebase/app-check",Sn="@firebase/auth",En="@firebase/auth-compat",In="@firebase/database",Cn="@firebase/data-connect",Tn="@firebase/database-compat",Pn="@firebase/functions",xn="@firebase/functions-compat",Nn="@firebase/installations",Rn="@firebase/installations-compat",On="@firebase/messaging",Ln="@firebase/messaging-compat",An="@firebase/performance",Dn="@firebase/performance-compat",Mn="@firebase/remote-config",Un="@firebase/remote-config-compat",zn="@firebase/storage",Fn="@firebase/storage-compat",jn="@firebase/firestore",Vn="@firebase/ai",$n="@firebase/firestore-compat",Hn="firebase",Bn="[DEFAULT]",Wn={[mn]:"fire-core",[yn]:"fire-core-compat",[wn]:"fire-analytics",[bn]:"fire-analytics-compat",[_n]:"fire-app-check",[kn]:"fire-app-check-compat",[Sn]:"fire-auth",[En]:"fire-auth-compat",[In]:"fire-rtdb",[Cn]:"fire-data-connect",[Tn]:"fire-rtdb-compat",[Pn]:"fire-fn",[xn]:"fire-fn-compat",[Nn]:"fire-iid",[Rn]:"fire-iid-compat",[On]:"fire-fcm",[Ln]:"fire-fcm-compat",[An]:"fire-perf",[Dn]:"fire-perf-compat",[Mn]:"fire-rc",[Un]:"fire-rc-compat",[zn]:"fire-gcs",[Fn]:"fire-gcs-compat",[jn]:"fire-fst",[$n]:"fire-fst-compat",[Vn]:"fire-vertex","fire-js":"fire-js",[Hn]:"fire-js-all"},qn=new Map,Kn=new Map,Gn=new Map;function Qn(e,t){try{e.container.addComponent(t)}catch(cl){vn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,cl)}}function Jn(e){const t=e.name;if(Gn.has(t))return vn.debug(`There were multiple attempts to register component ${t}.`),!1;Gn.set(t,e);for(const n of qn.values())Qn(n,e);for(const n of Kn.values())Qn(n,e);return!0}function Yn(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function Xn(e){return null!=e&&void 0!==e.settings}
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
 */const Zn=new Pt("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});
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
class er{constructor(e,t,n){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Ft("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Zn.create("app-deleted",{appName:this._name})}}
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
 */const tr="12.2.0";function nr(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const r={name:Bn,automaticDataCollectionEnabled:!0,...t},a=r.name;if("string"!=typeof a||!a)throw Zn.create("bad-app-name",{appName:String(a)});if(n||(n=mt()),!n)throw Zn.create("no-options");const i=qn.get(a);if(i){if(Nt(n,i.options)&&Nt(r,i.config))return i;throw Zn.create("duplicate-app",{appName:a})}const o=new $t(a);for(const l of Gn.values())o.addComponent(l);const s=new er(n,r,o);return qn.set(a,s),s}function rr(e=Bn){const t=qn.get(e);if(!t&&e===Bn&&mt())return nr();if(!t)throw Zn.create("no-app",{appName:e});return t}function ar(e,t,n){let r=Wn[e]??e;n&&(r+=`-${n}`);const a=r.match(/\s|\//),i=t.match(/\s|\//);if(a||i){const e=[`Unable to register library "${r}" with version "${t}":`];return a&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),a&&i&&e.push("and"),i&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void vn.warn(e.join(" "))}Jn(new Ft(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}
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
 */const ir="firebase-heartbeat-store";let or=null;function sr(){return or||(or=un("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(ir)}catch(cl){console.warn(cl)}}}).catch(e=>{throw Zn.create("idb-open",{originalErrorMessage:e.message})})),or}async function lr(e,t){try{const n=(await sr()).transaction(ir,"readwrite"),r=n.objectStore(ir);await r.put(t,ur(e)),await n.done}catch(cl){if(cl instanceof Tt)vn.warn(cl.message);else{const t=Zn.create("idb-set",{originalErrorMessage:null==cl?void 0:cl.message});vn.warn(t.message)}}}function ur(e){return`${e.name}!${e.options.appId}`}
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
 */class cr{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new fr(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){var e,t;try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=dr();if(null==(null==(e=this._heartbeatsCache)?void 0:e.heartbeats)&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==(null==(t=this._heartbeatsCache)?void 0:t.heartbeats)))return;if(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(e=>e.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>30){const e=function(e){if(0===e.length)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}
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
 */(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(e,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(cl){vn.warn(cl)}}async getHeartbeatsHeader(){var e;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null==(e=this._heartbeatsCache)?void 0:e.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const t=dr(),{heartbeatsToSend:n,unsentEntries:r}=function(e,t=1024){const n=[];let r=e.slice();for(const a of e){const e=n.find(e=>e.agent===a.agent);if(e){if(e.dates.push(a.date),hr(n)>t){e.dates.pop();break}}else if(n.push({agent:a.agent,dates:[a.date]}),hr(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),a=ut(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(cl){return vn.warn(cl),""}}}function dr(){return(new Date).toISOString().substring(0,10)}class fr{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!It()&&Ct().then(()=>!0).catch(()=>!1)}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{const t=(await sr()).transaction(ir),n=await t.objectStore(ir).get(ur(e));return await t.done,n}catch(cl){if(cl instanceof Tt)vn.warn(cl.message);else{const t=Zn.create("idb-get",{originalErrorMessage:null==cl?void 0:cl.message});vn.warn(t.message)}}}(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const t=await this.read();return lr(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){if(await this._canUseIndexedDBPromise){const t=await this.read();return lr(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:[...t.heartbeats,...e.heartbeats]})}}}function hr(e){return ut(JSON.stringify({version:2,heartbeats:e})).length}var pr;pr="",Jn(new Ft("platform-logger",e=>new pn(e),"PRIVATE")),Jn(new Ft("heartbeat",e=>new cr(e),"PRIVATE")),ar(mn,gn,pr),ar(mn,gn,"esm2020"),ar("fire-js","");
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
ar("firebase","12.2.1","app");const mr="@firebase/installations",gr="0.6.19",vr=1e4,yr=`w:${gr}`,br="FIS_v2",wr=36e5,kr=new Pt("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function _r(e){return e instanceof Tt&&e.code.includes("request-failed")}
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
 */function Sr({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function Er(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}async function Ir(e,t){const n=(await t.json()).error;return kr.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function Cr({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Tr(e,{refreshToken:t}){const n=Cr(e);return n.append("Authorization",function(e){return`${br} ${e}`}
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
 */(t)),n}async function Pr(e){const t=await e();return t.status>=500&&t.status<600?e():t}
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
function xr(e){return new Promise(t=>{setTimeout(t,e)})}
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
const Nr=/^[cdef][\w-]{21}$/;function Rr(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const t=function(e){const t=(n=e,btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_"));var n;return t.substr(0,22)}
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
 */(e);return Nr.test(t)?t:""}catch{return""}}function Or(e){return`${e.appName}!${e.appId}`}
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
 */const Lr=new Map;function Ar(e,t){const n=Or(e);Dr(n,t),function(e,t){const n=function(){!Mr&&"BroadcastChannel"in self&&(Mr=new BroadcastChannel("[Firebase] FID Change"),Mr.onmessage=e=>{Dr(e.data.key,e.data.fid)});return Mr}();n&&n.postMessage({key:e,fid:t});0===Lr.size&&Mr&&(Mr.close(),Mr=null)}(n,t)}function Dr(e,t){const n=Lr.get(e);if(n)for(const r of n)r(t)}let Mr=null;
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
const Ur="firebase-installations-store";let zr=null;function Fr(){return zr||(zr=un("firebase-installations-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(Ur)}})),zr}async function jr(e,t){const n=Or(e),r=(await Fr()).transaction(Ur,"readwrite"),a=r.objectStore(Ur),i=await a.get(n);return await a.put(t,n),await r.done,i&&i.fid===t.fid||Ar(e,t.fid),t}async function Vr(e){const t=Or(e),n=(await Fr()).transaction(Ur,"readwrite");await n.objectStore(Ur).delete(t),await n.done}async function $r(e,t){const n=Or(e),r=(await Fr()).transaction(Ur,"readwrite"),a=r.objectStore(Ur),i=await a.get(n),o=t(i);return void 0===o?await a.delete(n):await a.put(o,n),await r.done,!o||i&&i.fid===o.fid||Ar(e,o.fid),o}
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
 */async function Hr(e){let t;const n=await $r(e.appConfig,n=>{const r=function(e){const t=e||{fid:Rr(),registrationStatus:0};return qr(t)}(n),a=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){return{installationEntry:t,registrationPromise:Promise.reject(kr.create("app-offline"))}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=async function(e,t){try{const n=await async function({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=Sr(e),a=Cr(e),i=t.getImmediate({optional:!0});if(i){const e=await i.getHeartbeatsHeader();e&&a.append("x-firebase-client",e)}const o={fid:n,authVersion:br,appId:e.appId,sdkVersion:yr},s={method:"POST",headers:a,body:JSON.stringify(o)},l=await Pr(()=>fetch(r,s));if(l.ok){const e=await l.json();return{fid:e.fid||n,registrationStatus:2,refreshToken:e.refreshToken,authToken:Er(e.authToken)}}throw await Ir("Create Installation",l)}(e,t);return jr(e.appConfig,n)}catch(cl){throw _r(cl)&&409===cl.customData.serverCode?await Vr(e.appConfig):await jr(e.appConfig,{fid:t.fid,registrationStatus:0}),cl}}(e,n);return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:Br(e)}:{installationEntry:t}}(e,r);return t=a.registrationPromise,a.installationEntry});return""===n.fid?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function Br(e){let t=await Wr(e.appConfig);for(;1===t.registrationStatus;)await xr(100),t=await Wr(e.appConfig);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await Hr(e);return n||t}return t}function Wr(e){return $r(e,e=>{if(!e)throw kr.create("installation-not-found");return qr(e)})}function qr(e){return 1===(t=e).registrationStatus&&t.registrationTime+vr<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t;
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
 */}async function Kr({appConfig:e,heartbeatServiceProvider:t},n){const r=function(e,{fid:t}){return`${Sr(e)}/${t}/authTokens:generate`}
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
 */(e,n),a=Tr(e,n),i=t.getImmediate({optional:!0});if(i){const e=await i.getHeartbeatsHeader();e&&a.append("x-firebase-client",e)}const o={installation:{sdkVersion:yr,appId:e.appId}},s={method:"POST",headers:a,body:JSON.stringify(o)},l=await Pr(()=>fetch(r,s));if(l.ok){return Er(await l.json())}throw await Ir("Generate Auth Token",l)}async function Gr(e,t=!1){let n;const r=await $r(e.appConfig,r=>{if(!Jr(r))throw kr.create("not-registered");const a=r.authToken;if(!t&&function(e){return 2===e.requestStatus&&!function(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+wr}(e)}(a))return r;if(1===a.requestStatus)return n=async function(e,t){let n=await Qr(e.appConfig);for(;1===n.authToken.requestStatus;)await xr(100),n=await Qr(e.appConfig);const r=n.authToken;return 0===r.requestStatus?Gr(e,t):r}(e,t),r;{if(!navigator.onLine)throw kr.create("app-offline");const t=function(e){const t={requestStatus:1,requestTime:Date.now()};return{...e,authToken:t}}(r);return n=async function(e,t){try{const n=await Kr(e,t),r={...t,authToken:n};return await jr(e.appConfig,r),n}catch(cl){if(!_r(cl)||401!==cl.customData.serverCode&&404!==cl.customData.serverCode){const n={...t,authToken:{requestStatus:0}};await jr(e.appConfig,n)}else await Vr(e.appConfig);throw cl}}(e,t),t}});return n?await n:r.authToken}function Qr(e){return $r(e,e=>{if(!Jr(e))throw kr.create("not-registered");const t=e.authToken;return 1===(n=t).requestStatus&&n.requestTime+vr<Date.now()?{...e,authToken:{requestStatus:0}}:e;var n;
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
 */})}function Jr(e){return void 0!==e&&2===e.registrationStatus}
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
async function Yr(e,t=!1){const n=e;await async function(e){const{registrationPromise:t}=await Hr(e);t&&await t}
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
 */(n);return(await Gr(n,t)).token}function Xr(e){return kr.create("missing-app-config-values",{valueName:e})}
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
 */const Zr="installations",ea=e=>{const t=Yn(e.getProvider("app").getImmediate(),Zr).getImmediate();return{getId:()=>async function(e){const t=e,{installationEntry:n,registrationPromise:r}=await Hr(t);return r?r.catch(console.error):Gr(t).catch(console.error),n.fid}(t),getToken:e=>Yr(t,e)}};Jn(new Ft(Zr,e=>{const t=e.getProvider("app").getImmediate(),n=function(e){if(!e||!e.options)throw Xr("App Configuration");if(!e.name)throw Xr("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Xr(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t);return{app:t,appConfig:n,heartbeatServiceProvider:Yn(t,"heartbeat"),_delete:()=>Promise.resolve()}},"PUBLIC")),Jn(new Ft("installations-internal",ea,"PRIVATE")),ar(mr,gr),ar(mr,gr,"esm2020");
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
const ta="analytics",na="https://www.googletagmanager.com/gtag/js",ra=new Qt("@firebase/analytics"),aa=new Pt("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."});
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
function ia(e){if(!e.startsWith(na)){const t=aa.create("invalid-gtag-resource",{gtagURL:e});return ra.warn(t.message),""}return e}function oa(e){return Promise.all(e.map(e=>e.catch(e=>e)))}function sa(e,t){const n=function(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}("firebase-js-sdk-policy",{createScriptURL:ia}),r=document.createElement("script"),a=`${na}?l=${e}&id=${t}`;r.src=n?null==n?void 0:n.createScriptURL(a):a,r.async=!0,document.head.appendChild(r)}function la(e,t,n,r){return async function(a,...i){try{if("event"===a){const[r,a]=i;await async function(e,t,n,r,a){try{let i=[];if(a&&a.send_to){let e=a.send_to;Array.isArray(e)||(e=[e]);const r=await oa(n);for(const n of e){const e=r.find(e=>e.measurementId===n),a=e&&t[e.appId];if(!a){i=[];break}i.push(a)}}0===i.length&&(i=Object.values(t)),await Promise.all(i),e("event",r,a||{})}catch(cl){ra.error(cl)}}(e,t,n,r,a)}else if("config"===a){const[a,o]=i;await async function(e,t,n,r,a,i){const o=r[a];try{if(o)await t[o];else{const e=(await oa(n)).find(e=>e.measurementId===a);e&&await t[e.appId]}}catch(cl){ra.error(cl)}e("config",a,i)}(e,t,n,r,a,o)}else if("consent"===a){const[t,n]=i;e("consent",t,n)}else if("get"===a){const[t,n,r]=i;e("get",t,n,r)}else if("set"===a){const[t]=i;e("set",t)}else e(a,...i)}catch(cl){ra.error(cl)}}}const ua=new class{constructor(e={},t=1e3){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}};function ca(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function da(e,t=ua,n){const{appId:r,apiKey:a,measurementId:i}=e.options;if(!r)throw aa.create("no-app-id");if(!a){if(i)return{measurementId:i,appId:r};throw aa.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},s=new ha;return setTimeout(async()=>{s.abort()},6e4),fa({appId:r,apiKey:a,measurementId:i},o,s,t)}async function fa(e,{throttleEndTimeMillis:t,backoffCount:n},r,a=ua){var i;const{appId:o,measurementId:s}=e;try{await function(e,t){return new Promise((n,r)=>{const a=Math.max(t-Date.now(),0),i=setTimeout(n,a);e.addEventListener(()=>{clearTimeout(i),r(aa.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}(r,t)}catch(cl){if(s)return ra.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${null==cl?void 0:cl.message}]`),{appId:o,measurementId:s};throw cl}try{const t=await async function(e){var t;const{appId:n,apiKey:r}=e,a={method:"GET",headers:ca(r)},i="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",n),o=await fetch(i,a);if(200!==o.status&&304!==o.status){let e="";try{const n=await o.json();(null==(t=n.error)?void 0:t.message)&&(e=n.error.message)}catch(s){}throw aa.create("config-fetch-failed",{httpStatus:o.status,responseMessage:e})}return o.json()}(e);return a.deleteThrottleMetadata(o),t}catch(cl){const l=cl;if(!function(e){if(!(e instanceof Tt&&e.customData))return!1;const t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}(l)){if(a.deleteThrottleMetadata(o),s)return ra.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${null==l?void 0:l.message}]`),{appId:o,measurementId:s};throw cl}const u=503===Number(null==(i=null==l?void 0:l.customData)?void 0:i.httpStatus)?Ut(n,a.intervalMillis,30):Ut(n,a.intervalMillis),c={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return a.setThrottleMetadata(o,c),ra.debug(`Calling attemptFetch again in ${u} millis`),fa(e,c,r,a)}}class ha{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function pa(e,t,n,r,a,i,o){const s=da(e);s.then(t=>{n[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&ra.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(e=>ra.error(e)),t.push(s);const l=
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
async function(){if(!It())return ra.warn(aa.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await Ct()}catch(cl){return ra.warn(aa.create("indexeddb-unavailable",{errorInfo:null==cl?void 0:cl.toString()}).message),!1}return!0}().then(e=>e?r.getId():void 0),[u,c]=await Promise.all([s,l]);(function(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(na)&&n.src.includes(e))return n;return null}
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
 */)(i)||sa(i,u.measurementId),a("js",new Date);const d=(null==o?void 0:o.config)??{};return d.origin="firebase",d.update=!0,null!=c&&(d.firebase_id=c),a("config",u.measurementId,d),u.measurementId}
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
 */class ma{constructor(e){this.app=e}_delete(){return delete ga[this.app.options.appId],Promise.resolve()}}let ga={},va=[];const ya={};let ba,wa,ka="dataLayer",_a=!1;function Sa(){const e=[];if(Et()&&e.push("This is a browser extension environment."),"undefined"!=typeof navigator&&navigator.cookieEnabled||e.push("Cookies are not available."),e.length>0){const t=e.map((e,t)=>`(${t+1}) ${e}`).join(" "),n=aa.create("invalid-analytics-context",{errorInfo:t});ra.warn(n.message)}}function Ea(e,t,n){Sa();const r=e.options.appId;if(!r)throw aa.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw aa.create("no-api-key");ra.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=ga[r])throw aa.create("already-exists",{id:r});if(!_a){!function(e){let t=[];Array.isArray(window[e])?t=window[e]:window[e]=t}(ka);const{wrappedGtag:e,gtagCore:t}=function(e,t,n,r,a){let i=function(...e){window[r].push(arguments)};return window[a]&&"function"==typeof window[a]&&(i=window[a]),window[a]=la(i,e,t,n),{gtagCore:i,wrappedGtag:window[a]}}(ga,va,ya,ka,"gtag");wa=e,ba=t,_a=!0}ga[r]=pa(e,va,ya,t,ba,ka,n);return new ma(e)}const Ia="@firebase/analytics",Ca="0.10.18";function Ta(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}Jn(new Ft(ta,(e,{options:t})=>Ea(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),t),"PUBLIC")),Jn(new Ft("analytics-internal",function(e){try{const t=e.getProvider(ta).getImmediate();return{logEvent:(e,n,r)=>function(e,t,n,r){e=zt(e),async function(e,t,n,r,a){if(a&&a.global)e("event",n,r);else{const a=await t;e("event",n,{...r,send_to:a})}}(wa,ga[e.app.options.appId],t,n,r).catch(e=>ra.error(e))}(t,e,n,r)}}catch(cl){throw aa.create("interop-component-reg-failed",{reason:cl})}},"PRIVATE")),ar(Ia,Ca),ar(Ia,Ca,"esm2020");const Pa=Ta,xa=new Pt("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Na=new Qt("@firebase/auth");function Ra(e,...t){Na.logLevel<=Ht.ERROR&&Na.error(`Auth (${tr}): ${e}`,...t)}
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
 */function Oa(e,...t){throw Ma(e,...t)}function La(e,...t){return Ma(e,...t)}function Aa(e,t,n){const r={...Pa(),[t]:n};return new Pt("auth","Firebase",r).create(t,{appName:e.name})}function Da(e){return Aa(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ma(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return xa.create(e,...t)}function Ua(e,t,...n){if(!e)throw Ma(t,...n)}function za(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Ra(t),new Error(t)}function Fa(e,t){e||za(t)}
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
 */function ja(){var e;return"undefined"!=typeof self&&(null==(e=self.location)?void 0:e.href)||""}function Va(){var e;return"undefined"!=typeof self&&(null==(e=self.location)?void 0:e.protocol)||null}
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
 */function $a(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==Va()&&"https:"!==Va()&&!Et()&&!("connection"in navigator)||navigator.onLine}
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
class Ha{constructor(e,t){this.shortDelay=e,this.longDelay=t,Fa(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(St())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return $a()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
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
 */function Ba(e,t){Fa(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
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
 */class Wa{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:"undefined"!=typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!=typeof fetch?fetch:void za("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:"undefined"!=typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!=typeof Headers?Headers:void za("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:"undefined"!=typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!=typeof Response?Response:void za("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const qa={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},Ka=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Ga=new Ha(3e4,6e4);
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
 */function Qa(e,t){return e.tenantId&&!t.tenantId?{...t,tenantId:e.tenantId}:t}async function Ja(e,t,n,r,a={}){return Ya(e,a,async()=>{let a={},i={};r&&("GET"===t?i=r:a={body:JSON.stringify(r)});const o=Ot({key:e.config.apiKey,...i}).slice(1),s=await e._getAdditionalHeaders();s["Content-Type"]="application/json",e.languageCode&&(s["X-Firebase-Locale"]=e.languageCode);const l={method:t,headers:s,...a};return"undefined"!=typeof navigator&&"Cloudflare-Workers"===navigator.userAgent||(l.referrerPolicy="no-referrer"),e.emulatorConfig&&yt(e.emulatorConfig.host)&&(l.credentials="include"),Wa.fetch()(await Za(e,e.config.apiHost,n,o),l)})}async function Ya(e,t,n){e._canInitEmulator=!1;const r={...qa,...t};try{const t=new ti(e),a=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const i=await a.json();if("needConfirmation"in i)throw ni(e,"account-exists-with-different-credential",i);if(a.ok&&!("errorMessage"in i))return i;{const t=a.ok?i.errorMessage:i.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw ni(e,"credential-already-in-use",i);if("EMAIL_EXISTS"===n)throw ni(e,"email-already-in-use",i);if("USER_DISABLED"===n)throw ni(e,"user-disabled",i);const s=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw Aa(e,s,o);Oa(e,s)}}catch(cl){if(cl instanceof Tt)throw cl;Oa(e,"network-request-failed",{message:String(cl)})}}async function Xa(e,t,n,r,a={}){const i=await Ja(e,t,n,r,a);return"mfaPendingCredential"in i&&Oa(e,"multi-factor-auth-required",{_serverResponse:i}),i}async function Za(e,t,n,r){const a=`${t}${n}?${r}`,i=e,o=i.config.emulator?Ba(e.config,a):`${e.config.apiScheme}://${a}`;if(Ka.includes(n)&&(await i._persistenceManagerAvailable,"COOKIE"===i._getPersistenceType())){return i._getPersistence()._getFinalTarget(o).toString()}return o}function ei(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class ti{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(La(this.auth,"network-request-failed")),Ga.get())})}}function ni(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const a=La(e,t,r);return a.customData._tokenResponse=n,a}function ri(e){return void 0!==e&&void 0!==e.enterprise}class ai{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return ei(t.enforcementState);return null}isProviderEnabled(e){return"ENFORCE"===this.getProviderEnforcementState(e)||"AUDIT"===this.getProviderEnforcementState(e)}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function ii(e,t){return Ja(e,"POST","/v1/accounts:lookup",t)}
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
 */function oi(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(cl){}}function si(e){return 1e3*Number(e)}function li(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return Ra("JWT malformed, contained fewer than 3 sections"),null;try{const e=ct(n);return e?JSON.parse(e):(Ra("Failed to decode base64 JWT payload"),null)}catch(cl){return Ra("Caught error parsing JWT payload as JSON",null==cl?void 0:cl.toString()),null}}function ui(e){const t=li(e);return Ua(t,"internal-error"),Ua(void 0!==t.exp,"internal-error"),Ua(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
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
 */async function ci(e,t,n=!1){if(n)return t;try{return await t}catch(cl){throw cl instanceof Tt&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
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
 */(cl)&&e.auth.currentUser===e&&await e.auth.signOut(),cl}}class di{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(cl){return void("auth/network-request-failed"===(null==cl?void 0:cl.code)&&this.schedule(!0))}this.schedule()}}
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
 */class fi{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=oi(this.lastLoginAt),this.creationTime=oi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
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
 */async function hi(e){var t;const n=e.auth,r=await e.getIdToken(),a=await ci(e,ii(n,{idToken:r}));Ua(null==a?void 0:a.users.length,n,"internal-error");const i=a.users[0];e._notifyReloadListener(i);const o=(null==(t=i.providerUserInfo)?void 0:t.length)?pi(i.providerUserInfo):[],s=(l=e.providerData,u=o,[...l.filter(e=>!u.some(t=>t.providerId===e.providerId)),...u]);var l,u;const c=e.isAnonymous,d=!(e.email&&i.passwordHash||(null==s?void 0:s.length)),f=!!c&&d,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new fi(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(e,h)}function pi(e){return e.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}
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
class mi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ua(e.idToken,"internal-error"),Ua(void 0!==e.idToken,"internal-error"),Ua(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):ui(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Ua(0!==e.length,"internal-error");const t=ui(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return t||!this.accessToken||this.isExpired?(Ua(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null):this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:a}=await async function(e,t){const n=await Ya(e,{},async()=>{const n=Ot({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:a}=e.config,i=await Za(e,r,"/v1/token",`key=${a}`),o=await e._getAdditionalHeaders();o["Content-Type"]="application/x-www-form-urlencoded";const s={method:"POST",headers:o,body:n};return e.emulatorConfig&&yt(e.emulatorConfig.host)&&(s.credentials="include"),Wa.fetch()(i,s)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(a))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:a}=t,i=new mi;return n&&(Ua("string"==typeof n,"internal-error",{appName:e}),i.refreshToken=n),r&&(Ua("string"==typeof r,"internal-error",{appName:e}),i.accessToken=r),a&&(Ua("number"==typeof a,"internal-error",{appName:e}),i.expirationTime=a),i}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new mi,this.toJSON())}_performRefresh(){return za("not implemented")}}
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
 */function gi(e,t){Ua("string"==typeof e||void 0===e,"internal-error",{appName:t})}class vi{constructor({uid:e,auth:t,stsTokenManager:n,...r}){this.providerId="firebase",this.proactiveRefresh=new di(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new fi(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await ci(this,this.stsTokenManager.getToken(this.auth,e));return Ua(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=zt(e),r=await n.getIdToken(t),a=li(r);Ua(a&&a.exp&&a.auth_time&&a.iat,n.auth,"internal-error");const i="object"==typeof a.firebase?a.firebase:void 0,o=null==i?void 0:i.sign_in_provider;return{claims:a,token:r,authTime:oi(si(a.auth_time)),issuedAtTime:oi(si(a.iat)),expirationTime:oi(si(a.exp)),signInProvider:o||null,signInSecondFactor:(null==i?void 0:i.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=zt(e);await hi(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(Ua(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>({...e})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new vi({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){Ua(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await hi(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Xn(this.auth.app))return Promise.reject(Da(this.auth));const e=await this.getIdToken();return await ci(this,
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
async function(e,t){return Ja(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const n=t.displayName??void 0,r=t.email??void 0,a=t.phoneNumber??void 0,i=t.photoURL??void 0,o=t.tenantId??void 0,s=t._redirectEventId??void 0,l=t.createdAt??void 0,u=t.lastLoginAt??void 0,{uid:c,emailVerified:d,isAnonymous:f,providerData:h,stsTokenManager:p}=t;Ua(c&&p,e,"internal-error");const m=mi.fromJSON(this.name,p);Ua("string"==typeof c,e,"internal-error"),gi(n,e.name),gi(r,e.name),Ua("boolean"==typeof d,e,"internal-error"),Ua("boolean"==typeof f,e,"internal-error"),gi(a,e.name),gi(i,e.name),gi(o,e.name),gi(s,e.name),gi(l,e.name),gi(u,e.name);const g=new vi({uid:c,auth:e,email:r,emailVerified:d,displayName:n,isAnonymous:f,photoURL:i,phoneNumber:a,tenantId:o,stsTokenManager:m,createdAt:l,lastLoginAt:u});return h&&Array.isArray(h)&&(g.providerData=h.map(e=>({...e}))),s&&(g._redirectEventId=s),g}static async _fromIdTokenResponse(e,t,n=!1){const r=new mi;r.updateFromServerResponse(t);const a=new vi({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await hi(a),a}static async _fromGetAccountInfoResponse(e,t,n){const r=t.users[0];Ua(void 0!==r.localId,"internal-error");const a=void 0!==r.providerUserInfo?pi(r.providerUserInfo):[],i=!(r.email&&r.passwordHash||(null==a?void 0:a.length)),o=new mi;o.updateFromIdToken(n);const s=new vi({uid:r.localId,auth:e,stsTokenManager:o,isAnonymous:i}),l={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new fi(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash||(null==a?void 0:a.length))};return Object.assign(s,l),s}}
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
 */const yi=new Map;function bi(e){Fa(e instanceof Function,"Expected a class definition");let t=yi.get(e);return t?(Fa(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,yi.set(e,t),t)}
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
 */class wi{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}wi.type="NONE";const ki=wi;
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
 */function _i(e,t,n){return`firebase:${e}:${t}:${n}`}class Si{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:a}=this.auth;this.fullUserKey=_i(this.userKey,r.apiKey,a),this.fullPersistenceKey=_i("persistence",r.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if("string"==typeof e){const t=await ii(this.auth,{idToken:e}).catch(()=>{});return t?vi._fromGetAccountInfoResponse(this.auth,t,e):null}return vi._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Si(bi(ki),e,n);const r=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e);let a=r[0]||bi(ki);const i=_i(n,e.config.apiKey,e.name);let o=null;for(const l of t)try{const t=await l._get(i);if(t){let n;if("string"==typeof t){const r=await ii(e,{idToken:t}).catch(()=>{});if(!r)break;n=await vi._fromGetAccountInfoResponse(e,r,t)}else n=vi._fromJSON(e,t);l!==a&&(o=n),a=l;break}}catch{}const s=r.filter(e=>e._shouldAllowMigration);return a._shouldAllowMigration&&s.length?(a=s[0],o&&await a._set(i,o.toJSON()),await Promise.all(t.map(async e=>{if(e!==a)try{await e._remove(i)}catch{}})),new Si(a,e,n)):new Si(a,e,n)}}
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
 */function Ei(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Pi(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Ii(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Ni(t))return"Blackberry";if(Ri(t))return"Webos";if(Ci(t))return"Safari";if((t.includes("chrome/")||Ti(t))&&!t.includes("edge/"))return"Chrome";if(xi(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Ii(e=St()){return/firefox\//i.test(e)}function Ci(e=St()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Ti(e=St()){return/crios\//i.test(e)}function Pi(e=St()){return/iemobile/i.test(e)}function xi(e=St()){return/android/i.test(e)}function Ni(e=St()){return/blackberry/i.test(e)}function Ri(e=St()){return/webos/i.test(e)}function Oi(e=St()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Li(){return function(){const e=St();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}()&&10===document.documentMode}function Ai(e=St()){return Oi(e)||xi(e)||Ri(e)||Ni(e)||/windows phone/i.test(e)||Pi(e)}
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
 */function Di(e,t=[]){let n;switch(e){case"Browser":n=Ei(St());break;case"Worker":n=`${Ei(St())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${tr}/${r}`}
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
 */class Mi{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise((n,r)=>{try{n(e(t))}catch(cl){r(cl)}});n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(cl){t.reverse();for(const r of t)try{r()}catch(n){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==cl?void 0:cl.message})}}}
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
 */class Ui{constructor(e){var t;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??6,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),void 0!==n.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),void 0!==n.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),void 0!==n.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),void 0!==n.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(null==(t=e.allowedNonAlphanumericCharacters)?void 0:t.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){let n;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,r,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}
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
 */class zi{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ji(this),this.idTokenSubscription=new ji(this),this.beforeStateQueue=new Mi(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=xa,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(e=>this._resolvePersistenceManagerAvailable=e)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=bi(t)),this._initializationPromise=this.queue(async()=>{var n,r,a;if(!this._deleted&&(this.persistenceManager=await Si.create(this,e),null==(n=this._resolvePersistenceManagerAvailable)||n.call(this),!this._deleted)){if(null==(r=this._popupRedirectResolver)?void 0:r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(cl){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null==(a=this.currentUser)?void 0:a.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void(await this.currentUser.getIdToken())):void(await this._updateCurrentUser(e,!0)):void 0}async initializeCurrentUserFromIdToken(e){try{const t=await ii(this,{idToken:e}),n=await vi._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Xn(this.app)){const e=this.app.settings.authIdToken;return e?new Promise(t=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(e).then(t,t))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null==(t=this.redirectUser)?void 0:t._redirectEventId,i=null==r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==i||!(null==o?void 0:o.user)||(r=o.user,a=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(r)}catch(cl){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(cl))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Ua(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(cl){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await hi(e)}catch(cl){if("auth/network-request-failed"!==(null==cl?void 0:cl.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Xn(this.app))return Promise.reject(Da(this));const t=e?zt(e):null;return t&&Ua(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ua(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Xn(this.app)?Promise.reject(Da(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Xn(this.app)?Promise.reject(Da(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(bi(e))})}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await async function(e,t={}){return Ja(e,"GET","/v2/passwordPolicy",Qa(e,t))}
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
 */(this),t=new Ui(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Pt("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:await this.currentUser.getIdToken()};null!=this.tenantId&&(t.tenantId=this.tenantId),await async function(e,t){return Ja(e,"POST","/v2/accounts:revokeToken",Qa(e,t))}(this,t)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null==(e=this._currentUser)?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&bi(e)||this._popupRedirectResolver;Ua(t,this,"argument-error"),this.redirectPersistenceManager=await Si.create(this,[bi(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),(null==(t=this._currentUser)?void 0:t._redirectEventId)===e?this._currentUser:(null==(n=this.redirectUser)?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=(null==(e=this.currentUser)?void 0:e.uid)??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const a="function"==typeof t?t:t.next.bind(t);let i=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ua(o,this,"internal-error"),o.then(()=>{i||a(this.currentUser)}),"function"==typeof t){const a=e.addObserver(t,n,r);return()=>{i=!0,a()}}{const n=e.addObserver(t);return()=>{i=!0,n()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ua(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Di(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null==(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;if(Xn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await(null==(e=this.appCheckServiceProvider.getImmediate({optional:!0}))?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){Na.logLevel<=Ht.WARN&&Na.warn(`Auth (${tr}): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}}function Fi(e){return zt(e)}class ji{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){const n=new Dt(e,t);return n.subscribe.bind(n)}(e=>this.observer=e)}get next(){return Ua(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
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
 */let Vi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function $i(e){return Vi.loadJS(e)}class Hi{constructor(){this.enterprise=new Bi}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Bi{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const Wi="NO_RECAPTCHA";class qi{constructor(e){this.type="recaptcha-enterprise",this.auth=Fi(e)}async verify(e="verify",t=!1){async function n(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise(async(t,n)=>{(async function(e,t){return Ja(e,"GET","/v2/recaptchaConfig",Qa(e,t))})(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(r=>{if(void 0!==r.recaptchaKey){const n=new ai(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))}).catch(e=>{n(e)})})}function r(t,n,r){const a=window.grecaptcha;ri(a)?a.enterprise.ready(()=>{a.enterprise.execute(t,{action:e}).then(e=>{n(e)}).catch(()=>{n(Wi)})}):r(Error("No reCAPTCHA enterprise script loaded."))}if(this.auth.settings.appVerificationDisabledForTesting){return(new Hi).execute("siteKey",{action:"verify"})}return new Promise((e,a)=>{n(this.auth).then(n=>{if(!t&&ri(window.grecaptcha))r(n,e,a);else{if("undefined"==typeof window)return void a(new Error("RecaptchaVerifier is only supported in browser"));let t=Vi.recaptchaEnterpriseScript;0!==t.length&&(t+=n),$i(t).then(()=>{r(n,e,a)}).catch(e=>{a(e)})}}).catch(e=>{a(e)})})}}async function Ki(e,t,n,r=!1,a=!1){const i=new qi(e);let o;if(a)o=Wi;else try{o=await i.verify(n)}catch(l){o=await i.verify(n,!0)}const s={...t};if("mfaSmsEnrollment"===n||"mfaSmsSignIn"===n){if("phoneEnrollmentInfo"in s){const e=s.phoneEnrollmentInfo.phoneNumber,t=s.phoneEnrollmentInfo.recaptchaToken;Object.assign(s,{phoneEnrollmentInfo:{phoneNumber:e,recaptchaToken:t,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in s){const e=s.phoneSignInInfo.recaptchaToken;Object.assign(s,{phoneSignInInfo:{recaptchaToken:e,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return s}return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}async function Gi(e,t,n,r,a){var i;if(null==(i=e._getRecaptchaConfig())?void 0:i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await Ki(e,t,n,"getOobCode"===n);return r(e,a)}return r(e,t).catch(async a=>{if("auth/missing-recaptcha-token"===a.code){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Ki(e,t,n,"getOobCode"===n);return r(e,a)}return Promise.reject(a)})}
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
 */function Qi(e,t,n){const r=Fi(e);Ua(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const a=Ji(t),{host:i,port:o}=function(e){const t=Ji(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(r);if(a){const e=a[1];return{host:e,port:Yi(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:Yi(t)}}}(t),s=null===o?"":`:${o}`,l={url:`${a}//${i}${s}/`},u=Object.freeze({host:i,port:o,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:!1})});if(!r._canInitEmulator)return Ua(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),void Ua(Nt(l,r.config.emulator)&&Nt(u,r.emulatorConfig),r,"emulator-config-failed");r.config.emulator=l,r.emulatorConfig=u,r.settings.appVerificationDisabledForTesting=!0,yt(i)?(bt(`${a}//${i}${s}`),_t("Auth",!0)):function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
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
 */()}function Ji(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Yi(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class Xi{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return za("not implemented")}_getIdTokenResponse(e){return za("not implemented")}_linkToIdToken(e,t){return za("not implemented")}_getReauthenticationResolver(e){return za("not implemented")}}async function Zi(e,t){return Ja(e,"POST","/v1/accounts:signUp",t)}
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
async function eo(e,t){return Xa(e,"POST","/v1/accounts:signInWithPassword",Qa(e,t))}async function to(e,t){return async function(e,t){return Ja(e,"POST","/v1/accounts:sendOobCode",Qa(e,t))}(e,t)}
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
class no extends Xi{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new no(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new no(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Gi(e,{returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signInWithPassword",eo);case"emailLink":return async function(e,t){return Xa(e,"POST","/v1/accounts:signInWithEmailLink",Qa(e,t))}(e,{email:this._email,oobCode:this._password});default:Oa(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Gi(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Zi);case"emailLink":return async function(e,t){return Xa(e,"POST","/v1/accounts:signInWithEmailLink",Qa(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:Oa(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
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
 */async function ro(e,t){return Xa(e,"POST","/v1/accounts:signInWithIdp",Qa(e,t))}
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
 */class ao extends Xi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ao(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Oa("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r,...a}=t;if(!n||!r)return null;const i=new ao(n,r);return i.idToken=a.idToken||void 0,i.accessToken=a.accessToken||void 0,i.secret=a.secret,i.nonce=a.nonce,i.pendingToken=a.pendingToken||null,i}_getIdTokenResponse(e){return ro(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,ro(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ro(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ot(t)}return e}}
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
 */class io{constructor(e){const t=Lt(At(e)),n=t.apiKey??null,r=t.oobCode??null,a=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(t.mode??null);Ua(n&&r&&a,"argument-error"),this.apiKey=n,this.operation=a,this.code=r,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=function(e){const t=Lt(At(e)).link,n=t?Lt(At(t)).deep_link_id:null,r=Lt(At(e)).deep_link_id;return(r?Lt(At(r)).link:null)||r||n||t||e}(e);try{return new io(t)}catch{return null}}}
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
 */class oo{constructor(){this.providerId=oo.PROVIDER_ID}static credential(e,t){return no._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=io.parseLink(t);return Ua(n,"argument-error"),no._fromEmailAndCode(e,n.code,n.tenantId)}}oo.PROVIDER_ID="password",oo.EMAIL_PASSWORD_SIGN_IN_METHOD="password",oo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class so{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
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
 */class lo extends so{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
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
 */class uo extends lo{constructor(){super("facebook.com")}static credential(e){return ao._fromParams({providerId:uo.PROVIDER_ID,signInMethod:uo.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return uo.credentialFromTaggedObject(e)}static credentialFromError(e){return uo.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return uo.credential(e.oauthAccessToken)}catch{return null}}}uo.FACEBOOK_SIGN_IN_METHOD="facebook.com",uo.PROVIDER_ID="facebook.com";
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
class co extends lo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ao._fromParams({providerId:co.PROVIDER_ID,signInMethod:co.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return co.credentialFromTaggedObject(e)}static credentialFromError(e){return co.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return co.credential(t,n)}catch{return null}}}co.GOOGLE_SIGN_IN_METHOD="google.com",co.PROVIDER_ID="google.com";
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
class fo extends lo{constructor(){super("github.com")}static credential(e){return ao._fromParams({providerId:fo.PROVIDER_ID,signInMethod:fo.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fo.credentialFromTaggedObject(e)}static credentialFromError(e){return fo.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return fo.credential(e.oauthAccessToken)}catch{return null}}}fo.GITHUB_SIGN_IN_METHOD="github.com",fo.PROVIDER_ID="github.com";
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
class ho extends lo{constructor(){super("twitter.com")}static credential(e,t){return ao._fromParams({providerId:ho.PROVIDER_ID,signInMethod:ho.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ho.credentialFromTaggedObject(e)}static credentialFromError(e){return ho.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return ho.credential(t,n)}catch{return null}}}
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
async function po(e,t){return Xa(e,"POST","/v1/accounts:signUp",Qa(e,t))}
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
 */ho.TWITTER_SIGN_IN_METHOD="twitter.com",ho.PROVIDER_ID="twitter.com";class mo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const a=await vi._fromIdTokenResponse(e,n,r),i=go(n);return new mo({user:a,providerId:i,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=go(n);return new mo({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function go(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
 */class vo extends Tt{constructor(e,t,n,r){super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,vo.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new vo(e,t,n,r)}}function yo(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw vo._fromErrorAndOperation(e,n,t,r);throw n})}
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
async function bo(e,t,n=!1){if(Xn(e.app))return Promise.reject(Da(e));const r="signIn",a=await yo(e,r,t),i=await mo._fromIdTokenResponse(e,r,a);return n||await e._updateCurrentUser(i.user),i}
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
async function wo(e){const t=Fi(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function ko(e,t){await async function(e,t){return Ja(e,"POST","/v1/accounts:update",Qa(e,t))}(zt(e),{oobCode:t})}async function _o(e,t,n){if(Xn(e.app))return Promise.reject(Da(e));const r=Fi(e),a=Gi(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",po),i=await a.catch(t=>{throw"auth/password-does-not-meet-requirements"===t.code&&wo(e),t}),o=await mo._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(o.user),o}function So(e,t,n){return Xn(e.app)?Promise.reject(Da(e)):async function(e,t){return bo(Fi(e),t)}(zt(e),oo.credential(t,n)).catch(async t=>{throw"auth/password-does-not-meet-requirements"===t.code&&wo(e),t})}async function Eo(e,t){const n=zt(e),r={requestType:"VERIFY_EMAIL",idToken:await e.getIdToken()},{email:a}=await to(n.auth,r);a!==e.email&&await e.reload()}const Io="__sak";
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
 */class Co{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Io,"1"),this.storage.removeItem(Io),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
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
 */class To extends Co{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ai(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});const n=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},a=this.storage.getItem(n);Li()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}To.type="LOCAL";const Po=To;
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
 */class xo extends Co{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}xo.type="SESSION";const No=xo;
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
class Ro{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;const n=new Ro(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:a}=t.data,i=this.handlersMap[r];if(!(null==i?void 0:i.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(i).map(async e=>e(t.origin,a)),s=await function(e){return Promise.all(e.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:s})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
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
function Oo(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
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
 */Ro.receivers=[];class Lo{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let a,i;return new Promise((o,s)=>{const l=Oo("",20);r.port1.start();const u=setTimeout(()=>{s(new Error("unsupported_event"))},n);i={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(u),a=setTimeout(()=>{s(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),o(t.data.response);break;default:clearTimeout(u),clearTimeout(a),s(new Error("invalid_response"))}}},this.handlers.add(i),r.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])}).finally(()=>{i&&this.removeMessageHandler(i)})}}
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
 */function Ao(){return window}
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
function Do(){return void 0!==Ao().WorkerGlobalScope&&"function"==typeof Ao().importScripts}
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
const Mo="firebaseLocalStorageDb",Uo="firebaseLocalStorage",zo="fbase_key";class Fo{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function jo(e,t){return e.transaction([Uo],t?"readwrite":"readonly").objectStore(Uo)}function Vo(){const e=indexedDB.open(Mo,1);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const t=e.result;try{t.createObjectStore(Uo,{keyPath:zo})}catch(cl){n(cl)}}),e.addEventListener("success",async()=>{const n=e.result;n.objectStoreNames.contains(Uo)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(Mo);return new Fo(e).toPromise()}(),t(await Vo()))})})}async function $o(e,t,n){const r=jo(e,!0).put({[zo]:t,value:n});return new Fo(r).toPromise()}function Ho(e,t){const n=jo(e,!0).delete(t);return new Fo(n).toPromise()}class Bo{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await Vo()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(cl){if(t++>3)throw cl;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Do()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ro._getInstance(Do()?self:null),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null==navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}(),!this.activeServiceWorker)return;this.sender=new Lo(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null==(e=n[0])?void 0:e.fulfilled)&&(null==(t=n[0])?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null==(t=null==navigator?void 0:navigator.serviceWorker)?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Vo();return await $o(e,Io,"1"),await Ho(e,Io),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>$o(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(t=>async function(e,t){const n=jo(e,!1).get(t),r=await new Fo(n).toPromise();return void 0===r?null:r.value}(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ho(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(e=>{const t=jo(e,!1).getAll();return new Fo(t).toPromise()});if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;if(0!==e.length)for(const{fbase_key:r,value:a}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(a)&&(this.notifyListeners(r,a),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Bo.type="LOCAL";const Wo=Bo;new Ha(3e4,6e4);
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
class qo extends Xi{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ro(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ro(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ro(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Ko(e){return bo(e.auth,new qo(e),e.bypassAuthState)}function Go(e){const{auth:t,user:n}=e;return Ua(n,t,"internal-error"),
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
async function(e,t,n=!1){const{auth:r}=e;if(Xn(r.app))return Promise.reject(Da(r));const a="reauthenticate";try{const i=await ci(e,yo(r,a,t,e),n);Ua(i.idToken,r,"internal-error");const o=li(i.idToken);Ua(o,r,"internal-error");const{sub:s}=o;return Ua(e.uid===s,r,"user-mismatch"),mo._forOperation(e,a,i)}catch(cl){throw"auth/user-not-found"===(null==cl?void 0:cl.code)&&Oa(r,"user-mismatch"),cl}}(n,new qo(e),e.bypassAuthState)}async function Qo(e){const{auth:t,user:n}=e;return Ua(n,t,"internal-error"),async function(e,t,n=!1){const r=await ci(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return mo._forOperation(e,"link",r)}(n,new qo(e),e.bypassAuthState)}
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
 */class Jo{constructor(e,t,n,r,a=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(cl){this.reject(cl)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:a,error:i,type:o}=e;if(i)return void this.reject(i);const s={auth:this.auth,requestUri:t,sessionId:n,tenantId:a||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(s))}catch(cl){this.reject(cl)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ko;case"linkViaPopup":case"linkViaRedirect":return Qo;case"reauthViaPopup":case"reauthViaRedirect":return Go;default:Oa(this.auth,"internal-error")}}resolve(e){Fa(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Fa(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
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
 */const Yo=new Ha(2e3,1e4);class Xo extends Jo{constructor(e,t,n,r,a){super(e,t,r,a),this.provider=n,this.authWindow=null,this.pollId=null,Xo.currentPopupAction&&Xo.currentPopupAction.cancel(),Xo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ua(e,this.auth,"internal-error"),e}async onExecution(){Fa(1===this.filter.length,"Popup operations only handle one event");const e=Oo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(La(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null==(e=this.authWindow)?void 0:e.associatedEvent)||null}cancel(){this.reject(La(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null==(n=null==(t=this.authWindow)?void 0:t.window)?void 0:n.closed)?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(La(this.auth,"popup-closed-by-user"))},8e3):this.pollId=window.setTimeout(e,Yo.get())};e()}}Xo.currentPopupAction=null;
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
const Zo="pendingRedirect",es=new Map;class ts extends Jo{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=es.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=function(e){return _i(Zo,e.config.apiKey,e.name)}(t),r=function(e){return bi(e._redirectPersistence)}(e);if(!(await r._isAvailable()))return!1;const a="true"===await r._get(n);return await r._remove(n),a}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(cl){e=()=>Promise.reject(cl)}es.set(this.auth._key(),e)}return this.bypassAuthState||es.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function ns(e,t){es.set(e._key(),t)}async function rs(e,t,n=!1){if(Xn(e.app))return Promise.reject(Da(e));const r=Fi(e),a=
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
function(e,t){return t?bi(t):(Ua(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}(r,t),i=new ts(r,a,n),o=await i.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}
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
 */class as{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return os(e);default:return!1}}
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
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!os(e)){const r=(null==(n=e.error.code)?void 0:n.split("auth/")[1])||"internal-error";t.onError(La(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(is(e))}saveEventToCache(e){this.cachedEventUids.add(is(e)),this.lastProcessedEventTime=Date.now()}}function is(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function os({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
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
const ss=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ls=/^https?/;async function us(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return Ja(e,"GET","/v1/projects",t)}(e);for(const n of t)try{if(cs(n))return}catch{}Oa(e,"unauthorized-domain")}function cs(e){const t=ja(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const a=new URL(e);return""===a.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&a.hostname===r}if(!ls.test(n))return!1;if(ss.test(e))return r===e;const a=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(r)}
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
 */const ds=new Ha(3e4,6e4);function fs(){const e=Ao().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function hs(e){return new Promise((t,n)=>{var r,a,i;function o(){fs(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{fs(),n(La(e,"network-request-failed"))},timeout:ds.get()})}if(null==(a=null==(r=Ao().gapi)?void 0:r.iframes)?void 0:a.Iframe)t(gapi.iframes.getContext());else{if(!(null==(i=Ao().gapi)?void 0:i.load)){const t=`__${"iframefcb"}${Math.floor(1e6*Math.random())}`;return Ao()[t]=()=>{gapi.load?o():n(La(e,"network-request-failed"))},$i(`${Vi.gapiScript}?onload=${t}`).catch(e=>n(e))}o()}}).catch(e=>{throw ps=null,e})}let ps=null;
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
const ms=new Ha(5e3,15e3),gs={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},vs=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ys(e){const t=e.config;Ua(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Ba(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:tr},a=vs.get(e.config.apiHost);a&&(r.eid=a);const i=e._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ot(r).slice(1)}`}async function bs(e){const t=await function(e){return ps=ps||hs(e),ps}(e),n=Ao().gapi;return Ua(n,e,"internal-error"),t.open({where:document.body,url:ys(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:gs,dontclear:!0},t=>new Promise(async(n,r)=>{await t.restyle({setHideOnLeave:!1});const a=La(e,"network-request-failed"),i=Ao().setTimeout(()=>{r(a)},ms.get());function o(){Ao().clearTimeout(i),n(t)}t.ping(o).then(o,()=>{r(a)})}))}
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
 */const ws={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class ks{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(cl){}}}function _s(e,t,n,r=500,a=600){const i=Math.max((window.screen.availHeight-a)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let s="";const l={...ws,width:r.toString(),height:a.toString(),top:i,left:o},u=St().toLowerCase();n&&(s=Ti(u)?"_blank":n),Ii(u)&&(t=t||"http://localhost",l.scrollbars="yes");const c=Object.entries(l).reduce((e,[t,n])=>`${e}${t}=${n},`,"");if(function(e=St()){var t;return Oi(e)&&!!(null==(t=window.navigator)?void 0:t.standalone)}(u)&&"_self"!==s)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
 */(t||"",s),new ks(null);const d=window.open(t||"",s,c);Ua(d,e,"popup-blocked");try{d.focus()}catch(cl){}return new ks(d)}const Ss="__/auth/handler",Es="emulator/auth/handler",Is=encodeURIComponent("fac");async function Cs(e,t,n,r,a,i){Ua(e.config.authDomain,e,"auth-domain-config-required"),Ua(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:tr,eventId:a};if(t instanceof so){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries({}))o[e]=t}if(t instanceof lo){const e=t.getScopes().filter(e=>""!==e);e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const s=o;for(const c of Object.keys(s))void 0===s[c]&&delete s[c];const l=await e._getAppCheckToken(),u=l?`#${Is}=${encodeURIComponent(l)}`:"";return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/${Ss}`;return Ba(e,Es)}
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
 */(e)}?${Ot(s).slice(1)}${u}`}const Ts="webStorageSupport";const Ps=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=No,this._completeRedirectFn=rs,this._overrideRedirectResult=ns}async _openPopup(e,t,n,r){var a;Fa(null==(a=this.eventManagers[e._key()])?void 0:a.manager,"_initialize() not called before _openPopup()");return _s(e,await Cs(e,t,n,ja(),r),Oo())}async _openRedirect(e,t,n,r){await this._originValidation(e);return function(e){Ao().location.href=e}(await Cs(e,t,n,ja(),r)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(Fa(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await bs(e),n=new as(e);return t.register("authEvent",t=>{Ua(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ts,{type:Ts},n=>{var r;const a=null==(r=null==n?void 0:n[0])?void 0:r[Ts];void 0!==a&&t(!!a),Oa(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=us(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ai()||Ci()||Oi()}};var xs="@firebase/auth",Ns="1.11.0";
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
class Rs{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null==(e=this.auth.currentUser)?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ua(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
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
const Os=gt("authIdTokenMaxAge")||300;let Ls=null;var As;Vi={loadJS:e=>new Promise((t,n)=>{const r=document.createElement("script");var a;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=La("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",((null==(a=document.getElementsByTagName("head"))?void 0:a[0])??document).appendChild(r)}),gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="},As="Browser",Jn(new Ft("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:i,authDomain:o}=n.options;Ua(i&&!i.includes(":"),"invalid-api-key",{appName:n.name});const s={apiKey:i,authDomain:o,clientPlatform:As,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Di(As)},l=new zi(n,r,a,s);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(bi);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),Jn(new Ft("auth-internal",e=>{const t=Fi(e.getProvider("auth").getImmediate());return new Rs(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ar(xs,Ns,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}(As)),ar(xs,Ns,"esm2020");const Ds=nr({apiKey:"AIzaSyB2X3THVraoQUaMsdtVwUvF-DnoLaG4kXM",authDomain:"cse3cap-team-b.firebaseapp.com",projectId:"cse3cap-team-b",storageBucket:"cse3cap-team-b.firebasestorage.app",messagingSenderId:"1071871267605",appId:"1:1071871267605:web:ac06f8b24199c1bf4c8f1c",measurementId:"G-6Q60VEX9WT"});!function(e=rr()){const t=Yn(e=zt(e),ta);t.isInitialized()?t.getImmediate():function(e,t={}){const n=Yn(e,ta);if(n.isInitialized()){const e=n.getImmediate();if(Nt(t,n.getOptions()))return e;throw aa.create("already-initialized")}const r=n.initialize({options:t})}(e)}(Ds);const Ms=function(e=rr()){const t=Yn(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=Yn(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(Nt(n.getOptions(),t??{}))return e;Oa(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:Ps,persistence:[Wo,Po,No]}),r=gt("authTokenSyncURL");if(r&&"boolean"==typeof isSecureContext&&isSecureContext){const e=new URL(r,location.origin);if(location.origin===e.origin){const t=(a=e.toString(),async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>Os)return;const r=null==t?void 0:t.token;Ls!==r&&(Ls=r,await fetch(a,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))});!function(e,t,n){zt(e).beforeAuthStateChanged(t,n)}(n,t,()=>t(n.currentUser)),function(e,t,n,r){zt(e).onIdTokenChanged(t,n,r)}(n,e=>t(e))}}var a;const i=ht("auth");return i&&Qi(n,`http://${i}`),n}(Ds),Us=p.createContext();function zs({children:e}){const[t,n]=p.useState(null),[r,a]=p.useState(!0);p.useEffect(()=>{const e=(t=e=>{n(e),a(!1)},zt(Ms).onAuthStateChanged(t,r,i));var t,r,i;return()=>e()},[]);const i=()=>{},o=i;return h.jsx(Us.Provider,{value:{user:t,loading:r,login:i,signup:o,logout:async()=>{var e;await(e=Ms,zt(e).signOut())}},children:!r&&e})}function Fs(){return p.useContext(Us)}function js({children:e}){const{user:t}=Fs(),n=Se();return t?e:h.jsx(Ue,{to:"/login",state:{from:n},replace:!0})}function Vs(){return h.jsxs("div",{className:"flex items-center space-x-2",children:[h.jsxs("svg",{className:"h-8 w-8 text-primary",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:[h.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 6.25278C12 6.25278 10.5 3.75278 7.5 3.75278C4.5 3.75278 3 6.25278 3 9.25278C3 12.2528 4.5 14.7528 7.5 14.7528C10.5 14.7528 12 11.7528 12 11.7528"}),h.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 17.7528C12 17.7528 13.5 20.2528 16.5 20.2528C19.5 20.2528 21 17.7528 21 14.7528C21 11.7528 19.5 9.25278 16.5 9.25278C13.5 9.25278 12 12.2528 12 12.2528"})]}),h.jsx("span",{className:"text-2xl font-bold text-text-offset",children:"StudyFlex"})]})}function $s(){const e="text-primary font-semibold",t="text-text-muted hover:text-text-offset";return h.jsx("header",{className:"bg-surface border-b border-border sticky top-0 z-20",children:h.jsx("nav",{className:"flex items-center justify-between px-6 py-3",children:h.jsxs("div",{className:"flex items-center space-x-8",children:[h.jsx(Xe,{to:"/dashboard",children:h.jsx(Vs,{})}),h.jsxs("div",{className:"hidden md:flex items-center space-x-6 text-sm font-medium",children:[h.jsx(Xe,{to:"/dashboard",className:({isActive:n})=>n?e:t,children:"Home"}),h.jsx(Xe,{to:"/schedule",className:({isActive:n})=>n?e:t,children:"Schedule"}),h.jsx(Xe,{to:"/progress",className:({isActive:n})=>n?e:t,children:"Progress"}),h.jsx(Xe,{to:"/settings",className:({isActive:n})=>n?e:t,children:"Settings"})]})]})})})}function Hs(){return h.jsx("footer",{className:"border-t border-gray-200 bg-white px-4 py-2 text-sm text-gray-500",children:h.jsxs("div",{className:"mx-auto flex max-w-6xl items-center justify-between",children:[h.jsx("div",{children:"Company · Legal · Contact"}),h.jsxs("div",{className:"flex space-x-2 text-lg",children:[h.jsx("span",{children:"📘"}),h.jsx("span",{children:"🐦"}),h.jsx("span",{children:"💼"}),h.jsx("span",{children:"📸"})]})]})})}function Bs({children:e}){return h.jsxs("div",{className:"flex min-h-screen flex-col bg-[#f9fafb]",children:[h.jsx($s,{}),h.jsx("main",{className:"flex-1 p-6",children:h.jsx("div",{className:"mx-auto max-w-6xl space-y-8",children:e})}),h.jsx(Hs,{})]})}const Ws=[{id:"c1",code:"BUSN301",title:"Business Strategy",instructor:"Dr. Adams",color:"#ef4444",active:!0,weeklyTargetHours:4,fixedSlots:[{type:"lecture",day:"Mon",start:"09:00",end:"10:00"}],assessments:[{title:"Market Report",deadlineISO:new Date(Date.now()+6048e5).toISOString(),estHours:4,priority:"high"}]},{id:"c2",code:"PSYCH205",title:"Psychology",instructor:"Dr. Grey",color:"#10b981",active:!0,weeklyTargetHours:4,fixedSlots:[{type:"tutorial",day:"Wed",start:"11:00",end:"12:00"}],assessments:[{title:"Chapter Review",deadlineISO:new Date(Date.now()+864e6).toISOString(),estHours:3,priority:"medium"}]},{id:"c3",code:"MATH150",title:"Calculus",instructor:"Prof. Lin",color:"#f59e0b",active:!0,weeklyTargetHours:3,fixedSlots:[{type:"lecture",day:"Thu",start:"10:00",end:"11:00"}],assessments:[{title:"Problem Set",deadlineISO:new Date(Date.now()+10368e5).toISOString(),estHours:2,priority:"low"}]}],qs=[{id:"e1",title:"Lecture",day:"Mon",start:"09:00",end:"10:00",courseId:"c1",kind:"class"},{id:"e2",title:"Tutorial",day:"Wed",start:"11:00",end:"12:00",courseId:"c2",kind:"class"},{id:"e3",title:"Lecture",day:"Thu",start:"10:00",end:"11:00",courseId:"c3",kind:"class"},{id:"e4",title:"Study: BUSN301",day:"Mon",start:"10:30",end:"11:30",courseId:"c1",kind:"study"}],Ks=[{id:"t1",title:"Submit Market Report",subjectId:"c1",dueISO:new Date(Date.now()+2592e5).toISOString(),priority:"high",estimateHrs:4,actualHrs:0,status:"inprogress"},{id:"t2",title:"Chapter Review",subjectId:"c2",dueISO:new Date(Date.now()+432e6).toISOString(),priority:"medium",estimateHrs:3,actualHrs:0,status:"backlog"},{id:"t3",title:"Problem Set",subjectId:"c3",dueISO:new Date(Date.now()+6912e5).toISOString(),priority:"low",estimateHrs:2,actualHrs:0,status:"backlog"}],Gs={timeZone:"Australia/Melbourne",sessionMinutes:60,dailyMaxHours:4,preferredTimes:{morning:!0,afternoon:!0,evening:!1},snapMinutes:30,workingHours:{start:7,end:22}},Qs=p.createContext(null);function Js({children:e}){const t=function(e,t){try{const n=localStorage.getItem(e);return n?JSON.parse(n):t}catch(cl){return t}}("sf_data_v1",{courses:Ws,events:qs,tasks:Ks,prefs:Gs}),[n,r]=p.useState(t.courses),[a,i]=p.useState(t.events),[o,s]=p.useState(t.tasks||[]),[l,u]=p.useState(t.prefs);p.useEffect(()=>{!function(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch(cl){}}("sf_data_v1",{courses:n,events:a,tasks:o,prefs:l})},[n,a,o,l]);return h.jsx(Qs.Provider,{value:{courses:n,setCourses:r,events:a,setEvents:i,tasks:o,setTasks:s,prefs:l,setPrefs:u,addSubject:e=>{const t=["#ef4444","#10b981","#f59e0b","#3b82f6","#6366f1","#8b5cf6"],n={id:`c${(new Date).getTime()}`,code:e.course_code,title:e.title,instructor:"TBD",color:t[Math.floor(Math.random()*t.length)],active:!0,weeklyTargetHours:3,fixedSlots:[],assessments:[]};r(e=>[...e,n])},addAssessment:(e,t)=>{r(n=>n.map(n=>{if(n.code===e){const e={title:t.title,deadlineISO:t.deadline,estHours:3,priority:"medium"};return{...n,assessments:[...n.assessments,e]}}return n}))},addFixedSlot:(e,t)=>{r(n=>n.map(n=>{if(n.code===e){const e={type:t.type,day:t.day,start:t.start_time,end:t.end_time};return{...n,fixedSlots:[...n.fixedSlots,e]}}return n}))},addTask:e=>{const t=n.find(t=>t.code===e.course_code);if(t){const n={id:`t${(new Date).getTime()}`,title:e.title,subjectId:t.id,dueISO:e.due_date,priority:"medium",estimateHrs:2,actualHrs:0,status:"backlog"};s(e=>[...e,n])}},addStudySession:e=>{const t=o.find(t=>t.title.includes(e.task_title));if(t){const r=n.find(e=>e.id===t.subjectId);if(r){const n={id:`e${(new Date).getTime()}`,title:`Study: ${t.title}`,day:new Date(e.start_time).toLocaleString("en-US",{weekday:"short"}),start:new Date(e.start_time).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!1}),end:new Date(e.end_time).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!1}),courseId:r.id,kind:"study"};i(e=>[...e,n])}}}},children:e})}function Ys(){return p.useContext(Qs)}const Xs=p.lazy(()=>at(()=>import("./Login-ClB7el86.js"),[])),Zs=p.lazy(()=>at(()=>import("./Signup-CW_XXvmU.js"),__vite__mapDeps([0,1,2,3,4]))),el=p.lazy(()=>at(()=>import("./VerifyEmail-CINvkjkU.js"),[])),tl=p.lazy(()=>at(()=>import("./Dashboard-8lKCuVUO.js"),__vite__mapDeps([5,3,1]))),nl=p.lazy(()=>at(()=>import("./Settings-BPstx0Z8.js"),__vite__mapDeps([6,1,2,3]))),rl=p.lazy(()=>at(()=>import("./TaskDetails-BwuBOROE.js"),__vite__mapDeps([7,8,1,3,4]))),al=p.lazy(()=>at(()=>import("./EditTask-CZk-wiZf.js"),__vite__mapDeps([9,1,3,2]))),il=p.lazy(()=>at(()=>import("./Schedule-D24r1FNR.js"),__vite__mapDeps([10,2,3,11]))),ol=p.lazy(()=>at(()=>import("./Progress-DnbM0dvD.js"),__vite__mapDeps([12,11]))),sl=p.lazy(()=>at(()=>import("./Wizard-mtRibr1X.js"),__vite__mapDeps([13,8])));function ll(){const{user:e}=Fs();return h.jsx(Ue,{to:e?"/wizard":"/login",replace:!0})}function ul(){return h.jsx(zs,{children:h.jsx(Js,{children:h.jsx(p.Suspense,{fallback:h.jsx("div",{children:"Loading..."}),children:h.jsxs(je,{children:[h.jsx(ze,{path:"/login",element:h.jsx(Xs,{})}),h.jsx(ze,{path:"/signup",element:h.jsx(Zs,{})}),h.jsx(ze,{path:"/verify-email",element:h.jsx(el,{})}),h.jsx(ze,{path:"/dashboard",element:h.jsx(js,{children:h.jsx(Bs,{children:h.jsx(tl,{})})})}),h.jsx(ze,{path:"/settings",element:h.jsx(js,{children:h.jsx(Bs,{children:h.jsx(nl,{})})})}),h.jsx(ze,{path:"/schedule",element:h.jsx(js,{children:h.jsx(Bs,{children:h.jsx(il,{})})})}),h.jsx(ze,{path:"/progress",element:h.jsx(js,{children:h.jsx(Bs,{children:h.jsx(ol,{})})})}),h.jsx(ze,{path:"/wizard",element:h.jsx(js,{children:h.jsx(Bs,{children:h.jsx(sl,{})})})}),h.jsx(ze,{path:"/task/:id",element:h.jsx(js,{children:h.jsx(Bs,{children:h.jsx(rl,{})})})}),h.jsx(ze,{path:"/task/edit/:id",element:h.jsx(js,{children:h.jsx(Bs,{children:h.jsx(al,{})})})}),h.jsx(ze,{path:"/",element:h.jsx(ll,{})})]})})})})}N.createRoot(document.getElementById("root")).render(h.jsx(m.StrictMode,{children:h.jsx(Ge,{children:h.jsx(ul,{})})}));export{Ft as C,Tt as F,Ye as L,m as R,Yn as _,Fs as a,Ms as b,_o as c,Eo as d,Se as e,ko as f,Ys as g,Ce as h,t as i,h as j,n as k,L as l,rr as m,zt as n,pt as o,yt as p,bt as q,p as r,So as s,_t as t,Ie as u,Jn as v,ar as w,Xn as x};
//# sourceMappingURL=index-BcRcl4eo.js.map
