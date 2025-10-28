import{m as e,_ as t,n,o as r,p as a,q as i,t as s,F as o,v as c,C as u,w as l,x as d}from"./index-BcRcl4eo.js";
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
 */function h(e,t){const n={};for(const r in e)e.hasOwnProperty(r)&&(n[r]=t(e[r]));return n}function p(e){if(null==e)return null;if(e instanceof Number&&(e=e.valueOf()),"number"==typeof e&&isFinite(e))return e;if(!0===e||!1===e)return e;if("[object String]"===Object.prototype.toString.call(e))return e;if(e instanceof Date)return e.toISOString();if(Array.isArray(e))return e.map(e=>p(e));if("function"==typeof e||"object"==typeof e)return h(e,e=>p(e));throw new Error("Data cannot be encoded in JSON: "+e)}function m(e){if(null==e)return e;if(e["@type"])switch(e["@type"]){case"type.googleapis.com/google.protobuf.Int64Value":case"type.googleapis.com/google.protobuf.UInt64Value":{const t=Number(e.value);if(isNaN(t))throw new Error("Data cannot be decoded from JSON: "+e);return t}default:throw new Error("Data cannot be decoded from JSON: "+e)}return Array.isArray(e)?e.map(e=>m(e)):"function"==typeof e||"object"==typeof e?h(e,e=>m(e)):e}
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
 */const f="functions",g={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};
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
 */class w extends o{constructor(e,t,n){super(`${f}/${e}`,t||""),this.details=n,Object.setPrototypeOf(this,w.prototype)}}function k(e,t){let n,r=function(e){if(e>=200&&e<300)return"ok";switch(e){case 0:case 500:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}(e),a=r;try{const e=t&&t.error;if(e){const t=e.status;if("string"==typeof t){if(!g[t])return new w("internal","internal");r=g[t],a=t}const i=e.message;"string"==typeof i&&(a=i),n=e.details,void 0!==n&&(n=m(n))}}catch(i){}return"ok"===r?null:new w(r,a,n)}
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
 */class y{constructor(e,t,n,r){this.app=e,this.auth=null,this.messaging=null,this.appCheck=null,this.serverAppAppCheckToken=null,d(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.auth=t.getImmediate({optional:!0}),this.messaging=n.getImmediate({optional:!0}),this.auth||t.get().then(e=>this.auth=e,()=>{}),this.messaging||n.get().then(e=>this.messaging=e,()=>{}),this.appCheck||null==r||r.get().then(e=>this.appCheck=e,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return null==e?void 0:e.accessToken}catch(e){return}}async getMessagingToken(){if(this.messaging&&"Notification"in self&&"granted"===Notification.permission)try{return await this.messaging.getToken()}catch(e){return}}async getAppCheckToken(e){if(this.serverAppAppCheckToken)return this.serverAppAppCheckToken;if(this.appCheck){const t=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return t.error?null:t.token}return null}async getContext(e){return{authToken:await this.getAuthToken(),messagingToken:await this.getMessagingToken(),appCheckToken:await this.getAppCheckToken(e)}}}
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
 */const T="us-central1",v=/^data: (.*?)(?:\n|$)/;class A{constructor(e,t,n,r,a=T,i=(...e)=>fetch(...e)){this.app=e,this.fetchImpl=i,this.emulatorOrigin=null,this.contextProvider=new y(e,t,n,r),this.cancelAllRequests=new Promise(e=>{this.deleteService=()=>Promise.resolve(e())});try{const e=new URL(a);this.customDomain=e.origin+("/"===e.pathname?"":e.pathname),this.region=T}catch(s){this.customDomain=null,this.region=a}}_delete(){return this.deleteService()}_url(e){const t=this.app.options.projectId;if(null!==this.emulatorOrigin){return`${this.emulatorOrigin}/${t}/${this.region}/${e}`}return null!==this.customDomain?`${this.customDomain}/${e}`:`https://${this.region}-${t}.cloudfunctions.net/${e}`}}function E(e,t,n){const r=n=>function(e,t,n,r){const a=e._url(t);return async function(e,t,n,r){n=p(n);const a={data:n},i=await O(e,r),s=r.timeout||7e4,o=function(e){let t=null;return{promise:new Promise((n,r)=>{t=setTimeout(()=>{r(new w("deadline-exceeded","deadline-exceeded"))},e)}),cancel:()=>{t&&clearTimeout(t)}}}(s),c=await Promise.race([N(t,a,i,e.fetchImpl,e),o.promise,e.cancelAllRequests]);if(o.cancel(),!c)throw new w("cancelled","Firebase Functions instance was deleted.");const u=k(c.status,c.json);if(u)throw u;if(!c.json)throw new w("internal","Response is not valid JSON object.");let l=c.json.data;void 0===l&&(l=c.json.result);if(void 0===l)throw new w("internal","Response is missing data field.");return{data:m(l)}}(e,a,n,r)}(e,t,n,{});return r.stream=(n,r)=>function(e,t,n,r){const a=e._url(t);return async function(e,t,n,r){var a;n=p(n);const i={data:n},s=await O(e,r);let o,c,u;s["Content-Type"]="application/json",s.Accept="text/event-stream";try{o=await e.fetchImpl(t,{method:"POST",body:JSON.stringify(i),headers:s,signal:null==r?void 0:r.signal,credentials:b(e)})}catch(h){if(h instanceof Error&&"AbortError"===h.name){const e=new w("cancelled","Request was cancelled.");return{data:Promise.reject(e),stream:{[Symbol.asyncIterator]:()=>({next:()=>Promise.reject(e)})}}}const e=k(0,null);return{data:Promise.reject(e),stream:{[Symbol.asyncIterator]:()=>({next:()=>Promise.reject(e)})}}}const l=new Promise((e,t)=>{c=e,u=t});null==(a=null==r?void 0:r.signal)||a.addEventListener("abort",()=>{const e=new w("cancelled","Request was cancelled.");u(e)});const d=function(e,t,n,r){const a=(e,r)=>{const a=e.match(v);if(!a)return;const i=a[1];try{const e=JSON.parse(i);if("result"in e)return void t(m(e.result));if("message"in e)return void r.enqueue(m(e.message));if("error"in e){const t=k(0,e);return r.error(t),void n(t)}}catch(s){if(s instanceof w)return r.error(s),void n(s)}},i=new TextDecoder;return new ReadableStream({start(t){let s="";return o();async function o(){if(null==r?void 0:r.aborted){const e=new w("cancelled","Request was cancelled");return t.error(e),n(e),Promise.resolve()}try{const{value:c,done:u}=await e.read();if(u)return s.trim()&&a(s.trim(),t),void t.close();if(null==r?void 0:r.aborted){const r=new w("cancelled","Request was cancelled");return t.error(r),n(r),void(await e.cancel())}s+=i.decode(c,{stream:!0});const l=s.split("\n");s=l.pop()||"";for(const e of l)e.trim()&&a(e.trim(),t);return o()}catch(c){const e=c instanceof w?c:k(0,null);t.error(e),n(e)}}},cancel:()=>e.cancel()})}(o.body.getReader(),c,u,null==r?void 0:r.signal);return{stream:{[Symbol.asyncIterator](){const e=d.getReader();return{async next(){const{value:t,done:n}=await e.read();return{value:t,done:n}},return:async()=>(await e.cancel(),{done:!0,value:void 0})}}},data:l}}(e,a,n,r||{})}(e,t,n,r),r}function b(e){return e.emulatorOrigin&&a(e.emulatorOrigin)?"include":void 0}async function N(e,t,n,r,a){let i;n["Content-Type"]="application/json";try{i=await r(e,{method:"POST",body:JSON.stringify(t),headers:n,credentials:b(a)})}catch(o){return{status:0,json:null}}let s=null;try{s=await i.json()}catch(o){}return{status:i.status,json:s}}async function O(e,t){const n={},r=await e.contextProvider.getContext(t.limitedUseAppCheckTokens);return r.authToken&&(n.Authorization="Bearer "+r.authToken),r.messagingToken&&(n["Firebase-Instance-ID-Token"]=r.messagingToken),null!==r.appCheckToken&&(n["X-Firebase-AppCheck"]=r.appCheckToken),n}const I="@firebase/functions",C="0.13.1";
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
function D(o=e(),c=T){const u=t(n(o),f).getImmediate({identifier:c}),l=r("functions");return l&&function(e,t,r){!function(e,t,n){const r=a(t);e.emulatorOrigin=`http${r?"s":""}://${t}:${n}`,r&&(i(e.emulatorOrigin+"/backends"),s("Functions",!0))}(n(e),t,r)}(u,...l),u}function S(e,t,r){return E(n(e),t)}var P;c(new u(f,(e,{instanceIdentifier:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),a=e.getProvider("messaging-internal"),i=e.getProvider("app-check-internal");return new A(n,r,a,i,t)},"PUBLIC").setMultipleInstances(!0)),l(I,C,P),l(I,C,"esm2020");export{D as g,S as h};
//# sourceMappingURL=index.esm-DaNM0Ui_.js.map
