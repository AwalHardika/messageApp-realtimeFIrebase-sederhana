var kl=Object.defineProperty;var Nl=(e,t,n)=>t in e?kl(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Fr=(e,t,n)=>(Nl(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Ee(){}function Xo(e){return e()}function Fi(){return Object.create(null)}function ne(e){e.forEach(Xo)}function Yo(e){return typeof e=="function"}function Ms(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function xl(e){return Object.keys(e).length===0}function x(e,t){e.appendChild(t)}function lr(e,t,n){e.insertBefore(t,n||null)}function pn(e){e.parentNode&&e.parentNode.removeChild(e)}function H(e){return document.createElement(e)}function ns(e){return document.createTextNode(e)}function Et(){return ns(" ")}function fe(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function M(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Ml(e){return Array.from(e.childNodes)}function Ui(e,t){t=""+t,e.data!==t&&(e.data=t)}function bn(e,t){e.value=t??""}let Ye;function He(e){Ye=e}function Ol(){if(!Ye)throw new Error("Function called outside component initialization");return Ye}function Ll(e){Ol().$$.on_mount.push(e)}const ue=[],Bi=[];let me=[];const $i=[],Fl=Promise.resolve();let rs=!1;function Ul(){rs||(rs=!0,Fl.then(Jo))}function ss(e){me.push(e)}const Ur=new Set;let oe=0;function Jo(){if(oe!==0)return;const e=Ye;do{try{for(;oe<ue.length;){const t=ue[oe];oe++,He(t),Bl(t.$$)}}catch(t){throw ue.length=0,oe=0,t}for(He(null),ue.length=0,oe=0;Bi.length;)Bi.pop()();for(let t=0;t<me.length;t+=1){const n=me[t];Ur.has(n)||(Ur.add(n),n())}me.length=0}while(ue.length);for(;$i.length;)$i.pop()();rs=!1,Ur.clear(),He(e)}function Bl(e){if(e.fragment!==null){e.update(),ne(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(ss)}}function $l(e){const t=[],n=[];me.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),me=t}const Bn=new Set;let Kt;function jl(){Kt={r:0,c:[],p:Kt}}function ql(){Kt.r||ne(Kt.c),Kt=Kt.p}function Xt(e,t){e&&e.i&&(Bn.delete(e),e.i(t))}function Hn(e,t,n,r){if(e&&e.o){if(Bn.has(e))return;Bn.add(e),Kt.c.push(()=>{Bn.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function ji(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function zl(e,t){e.d(1),t.delete(e.key)}function Hl(e,t,n,r,s,i,o,a,u,l,c,h){let f=e.length,d=i.length,T=f;const y={};for(;T--;)y[e[T].key]=T;const g=[],A=new Map,b=new Map,L=[];for(T=d;T--;){const B=h(s,i,T),pt=n(B);let ht=o.get(pt);ht?r&&L.push(()=>ht.p(B,t)):(ht=l(pt,B),ht.c()),A.set(pt,g[T]=ht),pt in y&&b.set(pt,Math.abs(T-y[pt]))}const W=new Set,qt=new Set;function yt(B){Xt(B,1),B.m(a,c),o.set(B.key,B),c=B.first,d--}for(;f&&d;){const B=g[d-1],pt=e[f-1],ht=B.key,zt=pt.key;B===pt?(c=B.first,f--,d--):A.has(zt)?!o.has(ht)||W.has(ht)?yt(B):qt.has(zt)?f--:b.get(ht)>b.get(zt)?(qt.add(ht),yt(B)):(W.add(zt),f--):(u(pt,o),f--)}for(;f--;){const B=e[f];A.has(B.key)||u(B,o)}for(;d;)yt(g[d-1]);return ne(L),g}function Zo(e){e&&e.c()}function Os(e,t,n){const{fragment:r,after_update:s}=e.$$;r&&r.m(t,n),ss(()=>{const i=e.$$.on_mount.map(Xo).filter(Yo);e.$$.on_destroy?e.$$.on_destroy.push(...i):ne(i),e.$$.on_mount=[]}),s.forEach(ss)}function Ls(e,t){const n=e.$$;n.fragment!==null&&($l(n.after_update),ne(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Kl(e,t){e.$$.dirty[0]===-1&&(ue.push(e),Ul(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Fs(e,t,n,r,s,i,o=null,a=[-1]){const u=Ye;He(e);const l=e.$$={fragment:null,ctx:[],props:i,update:Ee,not_equal:s,bound:Fi(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(u?u.$$.context:[])),callbacks:Fi(),dirty:a,skip_bound:!1,root:t.target||u.$$.root};o&&o(l.root);let c=!1;if(l.ctx=n?n(e,t.props||{},(h,f,...d)=>{const T=d.length?d[0]:f;return l.ctx&&s(l.ctx[h],l.ctx[h]=T)&&(!l.skip_bound&&l.bound[h]&&l.bound[h](T),c&&Kl(e,h)),f}):[],l.update(),c=!0,ne(l.before_update),l.fragment=r?r(l.ctx):!1,t.target){if(t.hydrate){const h=Ml(t.target);l.fragment&&l.fragment.l(h),h.forEach(pn)}else l.fragment&&l.fragment.c();t.intro&&Xt(e.$$.fragment),Os(e,t.target,t.anchor),Jo()}He(u)}class Us{constructor(){Fr(this,"$$");Fr(this,"$$set")}$destroy(){Ls(this,1),this.$destroy=Ee}$on(t,n){if(!Yo(n))return Ee;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}$set(t){this.$$set&&!xl(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Gl="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Gl);var qi={};/**
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
 */const ta=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},Wl=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],o=e[n++],a=e[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(u>>10)),t[r++]=String.fromCharCode(56320+(u&1023))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return t.join("")},ea={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],o=s+1<e.length,a=o?e[s+1]:0,u=s+2<e.length,l=u?e[s+2]:0,c=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|l>>6,d=l&63;u||(d=64,o||(f=64)),r.push(n[c],n[h],n[f],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ta(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Wl(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],a=s<e.length?n[e.charAt(s)]:0;++s;const l=s<e.length?n[e.charAt(s)]:64;++s;const h=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new Ql;const f=i<<2|a>>4;if(r.push(f),l!==64){const d=a<<4&240|l>>2;if(r.push(d),h!==64){const T=l<<6&192|h;r.push(T)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Ql extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Xl=function(e){const t=ta(e);return ea.encodeByteArray(t,!0)},Kn=function(e){return Xl(e).replace(/\./g,"")},Yl=function(e){try{return ea.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Jl(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Zl=()=>Jl().__FIREBASE_DEFAULTS__,tc=()=>{if(typeof process>"u"||typeof qi>"u")return;const e=qi.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},ec=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Yl(e[1]);return t&&JSON.parse(t)},na=()=>{try{return Zl()||tc()||ec()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},nc=e=>{var t,n;return(n=(t=na())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},rc=e=>{const t=nc(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},ra=()=>{var e;return(e=na())===null||e===void 0?void 0:e.config};/**
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
 */class sc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function ic(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",s=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[Kn(JSON.stringify(n)),Kn(JSON.stringify(o)),a].join(".")}function oc(){try{return typeof indexedDB=="object"}catch{return!1}}function ac(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}/**
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
 */const uc="FirebaseError";class De extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=uc,Object.setPrototypeOf(this,De.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,sa.prototype.create)}}class sa{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],o=i?lc(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new De(s,a,r)}}function lc(e,t){return e.replace(cc,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const cc=/\{\$([^}]+)}/g;function is(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],o=t[s];if(zi(i)&&zi(o)){if(!is(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function zi(e){return e!==null&&typeof e=="object"}/**
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
 */function Te(e){return e&&e._delegate?e._delegate:e}class Je{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Ht="[DEFAULT]";/**
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
 */class hc{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new sc;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(dc(t))try{this.getOrInitializeService({instanceIdentifier:Ht})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=Ht){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ht){return this.instances.has(t)}getOptions(t=Ht){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&t(o,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:fc(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Ht){return this.component?this.component.multipleInstances?t:Ht:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function fc(e){return e===Ht?void 0:e}function dc(e){return e.instantiationMode==="EAGER"}/**
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
 */class mc{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new hc(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var D;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(D||(D={}));const pc={debug:D.DEBUG,verbose:D.VERBOSE,info:D.INFO,warn:D.WARN,error:D.ERROR,silent:D.SILENT},gc=D.INFO,_c={[D.DEBUG]:"log",[D.VERBOSE]:"log",[D.INFO]:"info",[D.WARN]:"warn",[D.ERROR]:"error"},yc=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=_c[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ia{constructor(t){this.name=t,this._logLevel=gc,this._logHandler=yc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in D))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?pc[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,D.DEBUG,...t),this._logHandler(this,D.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,D.VERBOSE,...t),this._logHandler(this,D.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,D.INFO,...t),this._logHandler(this,D.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,D.WARN,...t),this._logHandler(this,D.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,D.ERROR,...t),this._logHandler(this,D.ERROR,...t)}}const Ec=(e,t)=>t.some(n=>e instanceof n);let Hi,Ki;function Tc(){return Hi||(Hi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vc(){return Ki||(Ki=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const oa=new WeakMap,os=new WeakMap,aa=new WeakMap,Br=new WeakMap,Bs=new WeakMap;function Ic(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(Nt(e.result)),s()},o=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&oa.set(n,e)}).catch(()=>{}),Bs.set(t,e),t}function wc(e){if(os.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});os.set(e,t)}let as={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return os.get(e);if(t==="objectStoreNames")return e.objectStoreNames||aa.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Nt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Ac(e){as=e(as)}function Rc(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call($r(this),t,...n);return aa.set(r,t.sort?t.sort():[t]),Nt(r)}:vc().includes(e)?function(...t){return e.apply($r(this),t),Nt(oa.get(this))}:function(...t){return Nt(e.apply($r(this),t))}}function Pc(e){return typeof e=="function"?Rc(e):(e instanceof IDBTransaction&&wc(e),Ec(e,Tc())?new Proxy(e,as):e)}function Nt(e){if(e instanceof IDBRequest)return Ic(e);if(Br.has(e))return Br.get(e);const t=Pc(e);return t!==e&&(Br.set(e,t),Bs.set(t,e)),t}const $r=e=>Bs.get(e);function Sc(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=Nt(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Nt(o.result),u.oldVersion,u.newVersion,Nt(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Cc=["get","getKey","getAll","getAllKeys","count"],Vc=["put","add","delete","clear"],jr=new Map;function Gi(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(jr.get(t))return jr.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=Vc.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Cc.includes(n)))return;const i=async function(o,...a){const u=this.transaction(o,s?"readwrite":"readonly");let l=u.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&u.done]))[0]};return jr.set(t,i),i}Ac(e=>({...e,get:(t,n,r)=>Gi(t,n)||e.get(t,n,r),has:(t,n)=>!!Gi(t,n)||e.has(t,n)}));/**
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
 */class Dc{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(bc(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function bc(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const us="@firebase/app",Wi="0.9.24";/**
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
 */const Jt=new ia("@firebase/app"),kc="@firebase/app-compat",Nc="@firebase/analytics-compat",xc="@firebase/analytics",Mc="@firebase/app-check-compat",Oc="@firebase/app-check",Lc="@firebase/auth",Fc="@firebase/auth-compat",Uc="@firebase/database",Bc="@firebase/database-compat",$c="@firebase/functions",jc="@firebase/functions-compat",qc="@firebase/installations",zc="@firebase/installations-compat",Hc="@firebase/messaging",Kc="@firebase/messaging-compat",Gc="@firebase/performance",Wc="@firebase/performance-compat",Qc="@firebase/remote-config",Xc="@firebase/remote-config-compat",Yc="@firebase/storage",Jc="@firebase/storage-compat",Zc="@firebase/firestore",th="@firebase/firestore-compat",eh="firebase",nh="10.7.0";/**
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
 */const ls="[DEFAULT]",rh={[us]:"fire-core",[kc]:"fire-core-compat",[xc]:"fire-analytics",[Nc]:"fire-analytics-compat",[Oc]:"fire-app-check",[Mc]:"fire-app-check-compat",[Lc]:"fire-auth",[Fc]:"fire-auth-compat",[Uc]:"fire-rtdb",[Bc]:"fire-rtdb-compat",[$c]:"fire-fn",[jc]:"fire-fn-compat",[qc]:"fire-iid",[zc]:"fire-iid-compat",[Hc]:"fire-fcm",[Kc]:"fire-fcm-compat",[Gc]:"fire-perf",[Wc]:"fire-perf-compat",[Qc]:"fire-rc",[Xc]:"fire-rc-compat",[Yc]:"fire-gcs",[Jc]:"fire-gcs-compat",[Zc]:"fire-fst",[th]:"fire-fst-compat","fire-js":"fire-js",[eh]:"fire-js-all"};/**
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
 */const Gn=new Map,cs=new Map;function sh(e,t){try{e.container.addComponent(t)}catch(n){Jt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Wn(e){const t=e.name;if(cs.has(t))return Jt.debug(`There were multiple attempts to register component ${t}.`),!1;cs.set(t,e);for(const n of Gn.values())sh(n,e);return!0}function ih(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const oh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},xt=new sa("app","Firebase",oh);/**
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
 */class ah{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Je("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw xt.create("app-deleted",{appName:this._name})}}/**
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
 */const uh=nh;function ua(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:ls,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw xt.create("bad-app-name",{appName:String(s)});if(n||(n=ra()),!n)throw xt.create("no-options");const i=Gn.get(s);if(i){if(is(n,i.options)&&is(r,i.config))return i;throw xt.create("duplicate-app",{appName:s})}const o=new mc(s);for(const u of cs.values())o.addComponent(u);const a=new ah(n,r,o);return Gn.set(s,a),a}function lh(e=ls){const t=Gn.get(e);if(!t&&e===ls&&ra())return ua();if(!t)throw xt.create("no-app",{appName:e});return t}function pe(e,t,n){var r;let s=(r=rh[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${t}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Jt.warn(a.join(" "));return}Wn(new Je(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const ch="firebase-heartbeat-database",hh=1,Ze="firebase-heartbeat-store";let qr=null;function la(){return qr||(qr=Sc(ch,hh,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Ze)}}}).catch(e=>{throw xt.create("idb-open",{originalErrorMessage:e.message})})),qr}async function fh(e){try{return await(await la()).transaction(Ze).objectStore(Ze).get(ca(e))}catch(t){if(t instanceof De)Jt.warn(t.message);else{const n=xt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Jt.warn(n.message)}}}async function Qi(e,t){try{const r=(await la()).transaction(Ze,"readwrite");await r.objectStore(Ze).put(t,ca(e)),await r.done}catch(n){if(n instanceof De)Jt.warn(n.message);else{const r=xt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Jt.warn(r.message)}}}function ca(e){return`${e.name}!${e.options.appId}`}/**
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
 */const dh=1024,mh=30*24*60*60*1e3;class ph{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new _h(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Xi();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=mh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Xi(),{heartbeatsToSend:r,unsentEntries:s}=gh(this._heartbeatsCache.heartbeats),i=Kn(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Xi(){return new Date().toISOString().substring(0,10)}function gh(e,t=dh){const n=[];let r=e.slice();for(const s of e){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Yi(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Yi(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class _h{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return oc()?ac().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await fh(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Qi(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Qi(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Yi(e){return Kn(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function yh(e){Wn(new Je("platform-logger",t=>new Dc(t),"PRIVATE")),Wn(new Je("heartbeat",t=>new ph(t),"PRIVATE")),pe(us,Wi,e),pe(us,Wi,"esm2017"),pe("fire-js","")}yh("");var Eh="firebase",Th="10.7.0";/**
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
 */pe(Eh,Th,"app");var vh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},_,$s=$s||{},R=vh||self;function cr(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function gn(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function Ih(e){return Object.prototype.hasOwnProperty.call(e,zr)&&e[zr]||(e[zr]=++wh)}var zr="closure_uid_"+(1e9*Math.random()>>>0),wh=0;function Ah(e,t,n){return e.call.apply(e.bind,arguments)}function Rh(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),e.apply(t,s)}}return function(){return e.apply(t,arguments)}}function ot(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ot=Ah:ot=Rh,ot.apply(null,arguments)}function kn(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function Y(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[s].apply(r,o)}}function $t(){this.s=this.s,this.o=this.o}var Ph=0;$t.prototype.s=!1;$t.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Ph!=0)&&Ih(this)};$t.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ha=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function js(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function Ji(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(cr(r)){const s=e.length||0,i=r.length||0;e.length=s+i;for(let o=0;o<i;o++)e[s+o]=r[o]}else e.push(r)}}function at(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}at.prototype.h=function(){this.defaultPrevented=!0};var Sh=function(){if(!R.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const n=()=>{};R.addEventListener("test",n,t),R.removeEventListener("test",n,t)}catch{}return e}();function tn(e){return/^[\s\xa0]*$/.test(e)}function hr(){var e=R.navigator;return e&&(e=e.userAgent)?e:""}function Tt(e){return hr().indexOf(e)!=-1}function qs(e){return qs[" "](e),e}qs[" "]=function(){};function Ch(e,t){var n=vf;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var Vh=Tt("Opera"),ve=Tt("Trident")||Tt("MSIE"),fa=Tt("Edge"),hs=fa||ve,da=Tt("Gecko")&&!(hr().toLowerCase().indexOf("webkit")!=-1&&!Tt("Edge"))&&!(Tt("Trident")||Tt("MSIE"))&&!Tt("Edge"),Dh=hr().toLowerCase().indexOf("webkit")!=-1&&!Tt("Edge");function ma(){var e=R.document;return e?e.documentMode:void 0}var fs;t:{var Hr="",Kr=function(){var e=hr();if(da)return/rv:([^\);]+)(\)|;)/.exec(e);if(fa)return/Edge\/([\d\.]+)/.exec(e);if(ve)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(Dh)return/WebKit\/(\S+)/.exec(e);if(Vh)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Kr&&(Hr=Kr?Kr[1]:""),ve){var Gr=ma();if(Gr!=null&&Gr>parseFloat(Hr)){fs=String(Gr);break t}}fs=Hr}var ds;if(R.document&&ve){var Zi=ma();ds=Zi||parseInt(fs,10)||void 0}else ds=void 0;var bh=ds;function en(e,t){if(at.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(da){t:{try{qs(t.nodeName);var s=!0;break t}catch{}s=!1}s||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:kh[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&en.$.h.call(this)}}Y(en,at);var kh={2:"touch",3:"pen",4:"mouse"};en.prototype.h=function(){en.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var _n="closure_listenable_"+(1e6*Math.random()|0),Nh=0;function xh(e,t,n,r,s){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=s,this.key=++Nh,this.fa=this.ia=!1}function fr(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function zs(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function Mh(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function pa(e){const t={};for(const n in e)t[n]=e[n];return t}const to="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ga(e,t){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)e[n]=r[n];for(let i=0;i<to.length;i++)n=to[i],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function dr(e){this.src=e,this.g={},this.h=0}dr.prototype.add=function(e,t,n,r,s){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var o=ps(e,t,r,s);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new xh(t,this.src,i,!!r,s),t.ia=n,e.push(t)),t};function ms(e,t){var n=t.type;if(n in e.g){var r=e.g[n],s=ha(r,t),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(fr(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function ps(e,t,n,r){for(var s=0;s<e.length;++s){var i=e[s];if(!i.fa&&i.listener==t&&i.capture==!!n&&i.la==r)return s}return-1}var Hs="closure_lm_"+(1e6*Math.random()|0),Wr={};function _a(e,t,n,r,s){if(r&&r.once)return Ea(e,t,n,r,s);if(Array.isArray(t)){for(var i=0;i<t.length;i++)_a(e,t[i],n,r,s);return null}return n=Ws(n),e&&e[_n]?e.O(t,n,gn(r)?!!r.capture:!!r,s):ya(e,t,n,!1,r,s)}function ya(e,t,n,r,s,i){if(!t)throw Error("Invalid event type");var o=gn(s)?!!s.capture:!!s,a=Gs(e);if(a||(e[Hs]=a=new dr(e)),n=a.add(t,n,r,o,i),n.proxy)return n;if(r=Oh(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)Sh||(s=o),s===void 0&&(s=!1),e.addEventListener(t.toString(),r,s);else if(e.attachEvent)e.attachEvent(va(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Oh(){function e(n){return t.call(e.src,e.listener,n)}const t=Lh;return e}function Ea(e,t,n,r,s){if(Array.isArray(t)){for(var i=0;i<t.length;i++)Ea(e,t[i],n,r,s);return null}return n=Ws(n),e&&e[_n]?e.P(t,n,gn(r)?!!r.capture:!!r,s):ya(e,t,n,!0,r,s)}function Ta(e,t,n,r,s){if(Array.isArray(t))for(var i=0;i<t.length;i++)Ta(e,t[i],n,r,s);else r=gn(r)?!!r.capture:!!r,n=Ws(n),e&&e[_n]?(e=e.i,t=String(t).toString(),t in e.g&&(i=e.g[t],n=ps(i,n,r,s),-1<n&&(fr(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete e.g[t],e.h--)))):e&&(e=Gs(e))&&(t=e.g[t.toString()],e=-1,t&&(e=ps(t,n,r,s)),(n=-1<e?t[e]:null)&&Ks(n))}function Ks(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[_n])ms(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(va(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Gs(t))?(ms(n,e),n.h==0&&(n.src=null,t[Hs]=null)):fr(e)}}}function va(e){return e in Wr?Wr[e]:Wr[e]="on"+e}function Lh(e,t){if(e.fa)e=!0;else{t=new en(t,this);var n=e.listener,r=e.la||e.src;e.ia&&Ks(e),e=n.call(r,t)}return e}function Gs(e){return e=e[Hs],e instanceof dr?e:null}var Qr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ws(e){return typeof e=="function"?e:(e[Qr]||(e[Qr]=function(t){return e.handleEvent(t)}),e[Qr])}function X(){$t.call(this),this.i=new dr(this),this.S=this,this.J=null}Y(X,$t);X.prototype[_n]=!0;X.prototype.removeEventListener=function(e,t,n,r){Ta(this,e,t,n,r)};function et(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new at(t,e);else if(t instanceof at)t.target=t.target||e;else{var s=t;t=new at(r,e),ga(t,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];s=Nn(o,r,!0,t)&&s}if(o=t.g=e,s=Nn(o,r,!0,t)&&s,s=Nn(o,r,!1,t)&&s,n)for(i=0;i<n.length;i++)o=t.g=n[i],s=Nn(o,r,!1,t)&&s}X.prototype.N=function(){if(X.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)fr(n[r]);delete e.g[t],e.h--}}this.J=null};X.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};X.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function Nn(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var s=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,u=o.la||o.src;o.ia&&ms(e.i,o),s=a.call(u,r)!==!1&&s}}return s&&!r.defaultPrevented}var Qs=R.JSON.stringify;class Fh{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function Uh(){var e=Xs;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Bh{constructor(){this.h=this.g=null}add(t,n){const r=Ia.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Ia=new Fh(()=>new $h,e=>e.reset());class $h{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function jh(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function qh(e){R.setTimeout(()=>{throw e},0)}let nn,rn=!1,Xs=new Bh,wa=()=>{const e=R.Promise.resolve(void 0);nn=()=>{e.then(zh)}};var zh=()=>{for(var e;e=Uh();){try{e.h.call(e.g)}catch(n){qh(n)}var t=Ia;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}rn=!1};function mr(e,t){X.call(this),this.h=e||1,this.g=t||R,this.j=ot(this.qb,this),this.l=Date.now()}Y(mr,X);_=mr.prototype;_.ga=!1;_.T=null;_.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),et(this,"tick"),this.ga&&(Ys(this),this.start()))}};_.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ys(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}_.N=function(){mr.$.N.call(this),Ys(this),delete this.g};function Js(e,t,n){if(typeof e=="function")n&&(e=ot(e,n));else if(e&&typeof e.handleEvent=="function")e=ot(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:R.setTimeout(e,t||0)}function Aa(e){e.g=Js(()=>{e.g=null,e.i&&(e.i=!1,Aa(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class Hh extends $t{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Aa(this)}N(){super.N(),this.g&&(R.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function sn(e){$t.call(this),this.h=e,this.g={}}Y(sn,$t);var eo=[];function Ra(e,t,n,r){Array.isArray(n)||(n&&(eo[0]=n.toString()),n=eo);for(var s=0;s<n.length;s++){var i=_a(t,n[s],r||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function Pa(e){zs(e.g,function(t,n){this.g.hasOwnProperty(n)&&Ks(t)},e),e.g={}}sn.prototype.N=function(){sn.$.N.call(this),Pa(this)};sn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function pr(){this.g=!0}pr.prototype.Ea=function(){this.g=!1};function Kh(e,t,n,r,s,i){e.info(function(){if(e.g)if(i)for(var o="",a=i.split("&"),u=0;u<a.length;u++){var l=a[u].split("=");if(1<l.length){var c=l[0];l=l[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+l+"&"):o+(c+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+t+`
`+n+`
`+o})}function Gh(e,t,n,r,s,i,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+t+`
`+n+`
`+i+" "+o})}function de(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+Qh(e,n)+(r?" "+r:"")})}function Wh(e,t){e.info(function(){return"TIMEOUT: "+t})}pr.prototype.info=function(){};function Qh(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Qs(n)}catch{return t}}var re={},no=null;function gr(){return no=no||new X}re.Ta="serverreachability";function Sa(e){at.call(this,re.Ta,e)}Y(Sa,at);function on(e){const t=gr();et(t,new Sa(t))}re.STAT_EVENT="statevent";function Ca(e,t){at.call(this,re.STAT_EVENT,e),this.stat=t}Y(Ca,at);function lt(e){const t=gr();et(t,new Ca(t,e))}re.Ua="timingevent";function Va(e,t){at.call(this,re.Ua,e),this.size=t}Y(Va,at);function yn(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return R.setTimeout(function(){e()},t)}var _r={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Da={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Zs(){}Zs.prototype.h=null;function ro(e){return e.h||(e.h=e.i())}function ba(){}var En={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function ti(){at.call(this,"d")}Y(ti,at);function ei(){at.call(this,"c")}Y(ei,at);var gs;function yr(){}Y(yr,Zs);yr.prototype.g=function(){return new XMLHttpRequest};yr.prototype.i=function(){return{}};gs=new yr;function Tn(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new sn(this),this.P=Xh,e=hs?125:void 0,this.V=new mr(e),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new ka}function ka(){this.i=null,this.g="",this.h=!1}var Xh=45e3,Na={},_s={};_=Tn.prototype;_.setTimeout=function(e){this.P=e};function ys(e,t,n){e.L=1,e.A=Tr(Vt(t)),e.u=n,e.S=!0,xa(e,null)}function xa(e,t){e.G=Date.now(),vn(e),e.B=Vt(e.A);var n=e.B,r=e.W;Array.isArray(r)||(r=[String(r)]),ja(n.i,"t",r),e.o=0,n=e.l.J,e.h=new ka,e.g=lu(e.l,n?t:null,!e.u),0<e.O&&(e.M=new Hh(ot(e.Pa,e,e.g),e.O)),Ra(e.U,e.g,"readystatechange",e.nb),t=e.I?pa(e.I):{},e.u?(e.v||(e.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.B,e.v,e.u,t)):(e.v="GET",e.g.ha(e.B,e.v,null,t)),on(),Kh(e.j,e.v,e.B,e.m,e.W,e.u)}_.nb=function(e){e=e.target;const t=this.M;t&&vt(e)==3?t.l():this.Pa(e)};_.Pa=function(e){try{if(e==this.g)t:{const c=vt(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||hs||this.g&&(this.h.h||this.g.ja()||ao(this.g)))){this.J||c!=4||t==7||(t==8||0>=h?on(3):on(2)),Er(this);var n=this.g.da();this.ca=n;e:if(Ma(this)){var r=ao(this.g);e="";var s=r.length,i=vt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Gt(this),Ke(this);var o="";break e}this.h.i=new R.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:i&&t==s-1});r.length=0,this.h.g+=e,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,Gh(this.j,this.v,this.B,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!tn(a)){var l=a;break e}}l=null}if(n=l)de(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Es(this,n);else{this.i=!1,this.s=3,lt(12),Gt(this),Ke(this);break t}}this.S?(Oa(this,c,o),hs&&this.i&&c==3&&(Ra(this.U,this.V,"tick",this.mb),this.V.start())):(de(this.j,this.m,o,null),Es(this,o)),c==4&&Gt(this),this.i&&!this.J&&(c==4?iu(this.l,this):(this.i=!1,vn(this)))}else yf(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,lt(12)):(this.s=0,lt(13)),Gt(this),Ke(this)}}}catch{}finally{}};function Ma(e){return e.g?e.v=="GET"&&e.L!=2&&e.l.Ha:!1}function Oa(e,t,n){let r=!0,s;for(;!e.J&&e.o<n.length;)if(s=Yh(e,n),s==_s){t==4&&(e.s=4,lt(14),r=!1),de(e.j,e.m,null,"[Incomplete Response]");break}else if(s==Na){e.s=4,lt(15),de(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else de(e.j,e.m,s,null),Es(e,s);Ma(e)&&e.o!=0&&(e.h.g=e.h.g.slice(e.o),e.o=0),t!=4||n.length!=0||e.h.h||(e.s=1,lt(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),ai(t),t.M=!0,lt(11))):(de(e.j,e.m,n,"[Invalid Chunked Response]"),Gt(e),Ke(e))}_.mb=function(){if(this.g){var e=vt(this.g),t=this.g.ja();this.o<t.length&&(Er(this),Oa(this,e,t),this.i&&e!=4&&vn(this))}};function Yh(e,t){var n=e.o,r=t.indexOf(`
`,n);return r==-1?_s:(n=Number(t.substring(n,r)),isNaN(n)?Na:(r+=1,r+n>t.length?_s:(t=t.slice(r,r+n),e.o=r+n,t)))}_.cancel=function(){this.J=!0,Gt(this)};function vn(e){e.Y=Date.now()+e.P,La(e,e.P)}function La(e,t){if(e.C!=null)throw Error("WatchDog timer not null");e.C=yn(ot(e.lb,e),t)}function Er(e){e.C&&(R.clearTimeout(e.C),e.C=null)}_.lb=function(){this.C=null;const e=Date.now();0<=e-this.Y?(Wh(this.j,this.B),this.L!=2&&(on(),lt(17)),Gt(this),this.s=2,Ke(this)):La(this,this.Y-e)};function Ke(e){e.l.H==0||e.J||iu(e.l,e)}function Gt(e){Er(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,Ys(e.V),Pa(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function Es(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||Ts(n.i,e))){if(!e.K&&Ts(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){t:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)Yn(n),Ar(n);else break t;oi(n),lt(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=yn(ot(n.ib,n),6e3));if(1>=Ha(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Wt(n,11)}else if((e.K||n.g==e)&&Yn(n),!tn(t))for(s=n.Ja.g.parse(t),t=0;t<s.length;t++){let l=s[t];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const c=l[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const d=e.g;if(d){const T=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(T){var i=r.i;i.g||T.indexOf("spdy")==-1&&T.indexOf("quic")==-1&&T.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(ni(i,i.h),i.h=null))}if(r.F){const y=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(r.Da=y,F(r.I,r.F,y))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=uu(r,r.J?r.pa:null,r.Y),o.K){Ka(r.i,o);var a=o,u=r.L;u&&a.setTimeout(u),a.C&&(Er(a),vn(a)),r.g=o}else ru(r);0<n.j.length&&Rr(n)}else l[0]!="stop"&&l[0]!="close"||Wt(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Wt(n,7):ii(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}on(4)}catch{}}function Jh(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(cr(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function Zh(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(cr(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function Fa(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(cr(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=Zh(e),r=Jh(e),s=r.length,i=0;i<s;i++)t.call(void 0,r[i],n&&n[i],e)}var Ua=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function tf(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),s=null;if(0<=r){var i=e[n].substring(0,r);s=e[n].substring(r+1)}else i=e[n];t(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Yt(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Yt){this.h=e.h,Qn(this,e.j),this.s=e.s,this.g=e.g,Xn(this,e.m),this.l=e.l;var t=e.i,n=new an;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),so(this,n),this.o=e.o}else e&&(t=String(e).match(Ua))?(this.h=!1,Qn(this,t[1]||"",!0),this.s=Be(t[2]||""),this.g=Be(t[3]||"",!0),Xn(this,t[4]),this.l=Be(t[5]||"",!0),so(this,t[6]||"",!0),this.o=Be(t[7]||"")):(this.h=!1,this.i=new an(null,this.h))}Yt.prototype.toString=function(){var e=[],t=this.j;t&&e.push($e(t,io,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push($e(t,io,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push($e(n,n.charAt(0)=="/"?rf:nf,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",$e(n,of)),e.join("")};function Vt(e){return new Yt(e)}function Qn(e,t,n){e.j=n?Be(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Xn(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function so(e,t,n){t instanceof an?(e.i=t,af(e.i,e.h)):(n||(t=$e(t,sf)),e.i=new an(t,e.h))}function F(e,t,n){e.i.set(t,n)}function Tr(e){return F(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Be(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function $e(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,ef),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function ef(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var io=/[#\/\?@]/g,nf=/[#\?:]/g,rf=/[#\?]/g,sf=/[#\?@]/g,of=/#/g;function an(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function jt(e){e.g||(e.g=new Map,e.h=0,e.i&&tf(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}_=an.prototype;_.add=function(e,t){jt(this),this.i=null,e=be(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function Ba(e,t){jt(e),t=be(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function $a(e,t){return jt(e),t=be(e,t),e.g.has(t)}_.forEach=function(e,t){jt(this),this.g.forEach(function(n,r){n.forEach(function(s){e.call(t,s,r,this)},this)},this)};_.ta=function(){jt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const s=e[r];for(let i=0;i<s.length;i++)n.push(t[r])}return n};_.Z=function(e){jt(this);let t=[];if(typeof e=="string")$a(this,e)&&(t=t.concat(this.g.get(be(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};_.set=function(e,t){return jt(this),this.i=null,e=be(this,e),$a(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};_.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function ja(e,t,n){Ba(e,t),0<n.length&&(e.i=null,e.g.set(be(e,t),js(n)),e.h+=n.length)}_.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),e.push(s)}}return this.i=e.join("&")};function be(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function af(e,t){t&&!e.j&&(jt(e),e.i=null,e.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(Ba(this,r),ja(this,s,n))},e)),e.j=t}var uf=class{constructor(e,t){this.g=e,this.map=t}};function qa(e){this.l=e||lf,R.PerformanceNavigationTiming?(e=R.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(R.g&&R.g.Ka&&R.g.Ka()&&R.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var lf=10;function za(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Ha(e){return e.h?1:e.g?e.g.size:0}function Ts(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function ni(e,t){e.g?e.g.add(t):e.h=t}function Ka(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}qa.prototype.cancel=function(){if(this.i=Ga(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Ga(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return js(e.i)}var cf=class{stringify(e){return R.JSON.stringify(e,void 0)}parse(e){return R.JSON.parse(e,void 0)}};function hf(){this.g=new cf}function ff(e,t,n){const r=n||"";try{Fa(e,function(s,i){let o=s;gn(s)&&(o=Qs(s)),t.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw t.push(r+"type="+encodeURIComponent("_badmap")),s}}function df(e,t){const n=new pr;if(R.Image){const r=new Image;r.onload=kn(xn,n,r,"TestLoadImage: loaded",!0,t),r.onerror=kn(xn,n,r,"TestLoadImage: error",!1,t),r.onabort=kn(xn,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=kn(xn,n,r,"TestLoadImage: timeout",!1,t),R.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function xn(e,t,n,r,s){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,s(r)}catch{}}function vr(e){this.l=e.ec||null,this.j=e.ob||!1}Y(vr,Zs);vr.prototype.g=function(){return new Ir(this.l,this.j)};vr.prototype.i=function(e){return function(){return e}}({});function Ir(e,t){X.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=ri,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Y(Ir,X);var ri=0;_=Ir.prototype;_.open=function(e,t){if(this.readyState!=ri)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,un(this)};_.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||R).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};_.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,In(this)),this.readyState=ri};_.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,un(this)),this.g&&(this.readyState=3,un(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof R.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Wa(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function Wa(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}_.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?In(this):un(this),this.readyState==3&&Wa(this)}};_.Za=function(e){this.g&&(this.response=this.responseText=e,In(this))};_.Ya=function(e){this.g&&(this.response=e,In(this))};_.ka=function(){this.g&&In(this)};function In(e){e.readyState=4,e.l=null,e.j=null,e.A=null,un(e)}_.setRequestHeader=function(e,t){this.v.append(e,t)};_.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};_.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function un(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Ir.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var mf=R.JSON.parse;function j(e){X.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Qa,this.L=this.M=!1}Y(j,X);var Qa="",pf=/^https?$/i,gf=["POST","PUT"];_=j.prototype;_.Oa=function(e){this.M=e};_.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():gs.g(),this.C=this.u?ro(this.u):ro(gs),this.g.onreadystatechange=ot(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(i){oo(this,i);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=R.FormData&&e instanceof R.FormData,!(0<=ha(gf,t))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Ja(this),0<this.B&&((this.L=_f(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ot(this.ua,this)):this.A=Js(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){oo(this,i)}};function _f(e){return ve&&typeof e.timeout=="number"&&e.ontimeout!==void 0}_.ua=function(){typeof $s<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,et(this,"timeout"),this.abort(8))};function oo(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Xa(e),wr(e)}function Xa(e){e.F||(e.F=!0,et(e,"complete"),et(e,"error"))}_.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,et(this,"complete"),et(this,"abort"),wr(this))};_.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),wr(this,!0)),j.$.N.call(this)};_.La=function(){this.s||(this.G||this.v||this.l?Ya(this):this.kb())};_.kb=function(){Ya(this)};function Ya(e){if(e.h&&typeof $s<"u"&&(!e.C[1]||vt(e)!=4||e.da()!=2)){if(e.v&&vt(e)==4)Js(e.La,0,e);else if(et(e,"readystatechange"),vt(e)==4){e.h=!1;try{const o=e.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var s=String(e.I).match(Ua)[1]||null;!s&&R.self&&R.self.location&&(s=R.self.location.protocol.slice(0,-1)),r=!pf.test(s?s.toLowerCase():"")}n=r}if(n)et(e,"complete"),et(e,"success");else{e.m=6;try{var i=2<vt(e)?e.g.statusText:""}catch{i=""}e.j=i+" ["+e.da()+"]",Xa(e)}}finally{wr(e)}}}}function wr(e,t){if(e.g){Ja(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||et(e,"ready");try{n.onreadystatechange=r}catch{}}}function Ja(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(R.clearTimeout(e.A),e.A=null)}_.isActive=function(){return!!this.g};function vt(e){return e.g?e.g.readyState:0}_.da=function(){try{return 2<vt(this)?this.g.status:-1}catch{return-1}};_.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};_.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),mf(t)}};function ao(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case Qa:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function yf(e){const t={};e=(e.g&&2<=vt(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(tn(e[r]))continue;var n=jh(e[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=t[s]||[];t[s]=i,i.push(n)}Mh(t,function(r){return r.join(", ")})}_.Ia=function(){return this.m};_.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Za(e){let t="";return zs(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function si(e,t,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=Za(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):F(e,t,n))}function Le(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function tu(e){this.Ga=0,this.j=[],this.l=new pr,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Le("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Le("baseRetryDelayMs",5e3,e),this.hb=Le("retryDelaySeedMs",1e4,e),this.eb=Le("forwardChannelMaxRetries",2,e),this.xa=Le("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new qa(e&&e.concurrentRequestLimit),this.Ja=new hf,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}_=tu.prototype;_.ra=8;_.H=1;function ii(e){if(eu(e),e.H==3){var t=e.W++,n=Vt(e.I);if(F(n,"SID",e.K),F(n,"RID",t),F(n,"TYPE","terminate"),wn(e,n),t=new Tn(e,e.l,t),t.L=2,t.A=Tr(Vt(n)),n=!1,R.navigator&&R.navigator.sendBeacon)try{n=R.navigator.sendBeacon(t.A.toString(),"")}catch{}!n&&R.Image&&(new Image().src=t.A,n=!0),n||(t.g=lu(t.l,null),t.g.ha(t.A)),t.G=Date.now(),vn(t)}au(e)}function Ar(e){e.g&&(ai(e),e.g.cancel(),e.g=null)}function eu(e){Ar(e),e.u&&(R.clearTimeout(e.u),e.u=null),Yn(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&R.clearTimeout(e.m),e.m=null)}function Rr(e){if(!za(e.i)&&!e.m){e.m=!0;var t=e.Na;nn||wa(),rn||(nn(),rn=!0),Xs.add(t,e),e.C=0}}function Ef(e,t){return Ha(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=yn(ot(e.Na,e,t),ou(e,e.C)),e.C++,!0)}_.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const s=new Tn(this,this.l,e);let i=this.s;if(this.U&&(i?(i=pa(i),ga(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)t:{for(var t=0,n=0;n<this.j.length;n++){e:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break t}if(t===4096||n===this.j.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=nu(this,s,t),n=Vt(this.I),F(n,"RID",e),F(n,"CVER",22),this.F&&F(n,"X-HTTP-Session-Id",this.F),wn(this,n),i&&(this.O?t="headers="+encodeURIComponent(String(Za(i)))+"&"+t:this.o&&si(n,this.o,i)),ni(this.i,s),this.bb&&F(n,"TYPE","init"),this.P?(F(n,"$req",t),F(n,"SID","null"),s.aa=!0,ys(s,n,null)):ys(s,n,t),this.H=2}}else this.H==3&&(e?uo(this,e):this.j.length==0||za(this.i)||uo(this))};function uo(e,t){var n;t?n=t.m:n=e.W++;const r=Vt(e.I);F(r,"SID",e.K),F(r,"RID",n),F(r,"AID",e.V),wn(e,r),e.o&&e.s&&si(r,e.o,e.s),n=new Tn(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=nu(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),ni(e.i,n),ys(n,r,t)}function wn(e,t){e.na&&zs(e.na,function(n,r){F(t,r,n)}),e.h&&Fa({},function(n,r){F(t,r,n)})}function nu(e,t,n){n=Math.min(e.j.length,n);var r=e.h?ot(e.h.Va,e.h,e):null;t:{var s=e.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let u=0;u<n;u++){let l=s[u].g;const c=s[u].map;if(l-=i,0>l)i=Math.max(0,s[u].g-100),a=!1;else try{ff(c,o,"req"+l+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break t}}}return e=e.j.splice(0,n),t.F=e,r}function ru(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;nn||wa(),rn||(nn(),rn=!0),Xs.add(t,e),e.A=0}}function oi(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=yn(ot(e.Ma,e),ou(e,e.A)),e.A++,!0)}_.Ma=function(){if(this.u=null,su(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=yn(ot(this.jb,this),e)}};_.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,lt(10),Ar(this),su(this))};function ai(e){e.B!=null&&(R.clearTimeout(e.B),e.B=null)}function su(e){e.g=new Tn(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=Vt(e.wa);F(t,"RID","rpc"),F(t,"SID",e.K),F(t,"AID",e.V),F(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&F(t,"TO",e.qa),F(t,"TYPE","xmlhttp"),wn(e,t),e.o&&e.s&&si(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.A=Tr(Vt(t)),n.u=null,n.S=!0,xa(n,e)}_.ib=function(){this.v!=null&&(this.v=null,Ar(this),oi(this),lt(19))};function Yn(e){e.v!=null&&(R.clearTimeout(e.v),e.v=null)}function iu(e,t){var n=null;if(e.g==t){Yn(e),ai(e),e.g=null;var r=2}else if(Ts(e.i,t))n=t.F,Ka(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.u?t.u.length:0,t=Date.now()-t.G;var s=e.C;r=gr(),et(r,new Va(r,n)),Rr(e)}else ru(e);else if(s=t.s,s==3||s==0&&0<t.ca||!(r==1&&Ef(e,t)||r==2&&oi(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),s){case 1:Wt(e,5);break;case 4:Wt(e,10);break;case 3:Wt(e,6);break;default:Wt(e,2)}}}function ou(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function Wt(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=ot(e.pb,e);n||(n=new Yt("//www.google.com/images/cleardot.gif"),R.location&&R.location.protocol=="http"||Qn(n,"https"),Tr(n)),df(n.toString(),r)}else lt(2);e.H=0,e.h&&e.h.za(t),au(e),eu(e)}_.pb=function(e){e?(this.l.info("Successfully pinged google.com"),lt(2)):(this.l.info("Failed to ping google.com"),lt(1))};function au(e){if(e.H=0,e.ma=[],e.h){const t=Ga(e.i);(t.length!=0||e.j.length!=0)&&(Ji(e.ma,t),Ji(e.ma,e.j),e.i.i.length=0,js(e.j),e.j.length=0),e.h.ya()}}function uu(e,t,n){var r=n instanceof Yt?Vt(n):new Yt(n);if(r.g!="")t&&(r.g=t+"."+r.g),Xn(r,r.m);else{var s=R.location;r=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;var i=new Yt(null);r&&Qn(i,r),t&&(i.g=t),s&&Xn(i,s),n&&(i.l=n),r=i}return n=e.F,t=e.Da,n&&t&&F(r,n,t),F(r,"VER",e.ra),wn(e,r),r}function lu(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=e.Ha&&!e.va?new j(new vr({ob:n})):new j(e.va),t.Oa(e.J),t}_.isActive=function(){return!!this.h&&this.h.isActive(this)};function cu(){}_=cu.prototype;_.Ba=function(){};_.Aa=function(){};_.za=function(){};_.ya=function(){};_.isActive=function(){return!0};_.Va=function(){};function Jn(){if(ve&&!(10<=Number(bh)))throw Error("Environmental error: no available transport.")}Jn.prototype.g=function(e,t){return new ct(e,t)};function ct(e,t){X.call(this),this.g=new tu(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!tn(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!tn(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new ke(this)}Y(ct,X);ct.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;lt(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=uu(e,null,e.Y),Rr(e)};ct.prototype.close=function(){ii(this.g)};ct.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Qs(e),e=n);t.j.push(new uf(t.fb++,e)),t.H==3&&Rr(t)};ct.prototype.N=function(){this.g.h=null,delete this.j,ii(this.g),delete this.g,ct.$.N.call(this)};function hu(e){ti.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}Y(hu,ti);function fu(){ei.call(this),this.status=1}Y(fu,ei);function ke(e){this.g=e}Y(ke,cu);ke.prototype.Ba=function(){et(this.g,"a")};ke.prototype.Aa=function(e){et(this.g,new hu(e))};ke.prototype.za=function(e){et(this.g,new fu)};ke.prototype.ya=function(){et(this.g,"b")};function Tf(){this.blockSize=-1}function _t(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Y(_t,Tf);_t.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Xr(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var s=0;16>s;++s)r[s]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],s=e.g[2];var i=e.g[3],o=t+(i^n&(s^i))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[1]+3905402710&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[5]+1200080426&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[9]+2336552879&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[13]+4254626195&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(s^i&(n^s))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[6]+3225465664&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[10]+38016083&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[14]+3275163606&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[2]+4243563512&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(n^s^i)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[8]+2272392833&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[4]+1272893353&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[0]+3936430074&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[12]+3873151461&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(s^(n|~i))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[7]+1126891415&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[3]+2399980690&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[15]+4264355552&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[11]+3174756917&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+s&4294967295,e.g[3]=e.g[3]+i&4294967295}_t.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,s=this.h,i=0;i<t;){if(s==0)for(;i<=n;)Xr(this,e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[s++]=e.charCodeAt(i++),s==this.blockSize){Xr(this,r),s=0;break}}else for(;i<t;)if(r[s++]=e[i++],s==this.blockSize){Xr(this,r),s=0;break}}this.h=s,this.i+=t};_t.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function N(e,t){this.h=t;for(var n=[],r=!0,s=e.length-1;0<=s;s--){var i=e[s]|0;r&&i==t||(n[s]=i,r=!1)}this.g=n}var vf={};function ui(e){return-128<=e&&128>e?Ch(e,function(t){return new N([t|0],0>t?-1:0)}):new N([e|0],0>e?-1:0)}function It(e){if(isNaN(e)||!isFinite(e))return ge;if(0>e)return Z(It(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=vs;return new N(t,0)}function du(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return Z(du(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=It(Math.pow(t,8)),r=ge,s=0;s<e.length;s+=8){var i=Math.min(8,e.length-s),o=parseInt(e.substring(s,s+i),t);8>i?(i=It(Math.pow(t,i)),r=r.R(i).add(It(o))):(r=r.R(n),r=r.add(It(o)))}return r}var vs=4294967296,ge=ui(0),Is=ui(1),lo=ui(16777216);_=N.prototype;_.ea=function(){if(ft(this))return-Z(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:vs+r)*t,t*=vs}return e};_.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(Ct(this))return"0";if(ft(this))return"-"+Z(this).toString(e);for(var t=It(Math.pow(e,6)),n=this,r="";;){var s=tr(n,t).g;n=Zn(n,s.R(t));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=s,Ct(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};_.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function Ct(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function ft(e){return e.h==-1}_.X=function(e){return e=Zn(this,e),ft(e)?-1:Ct(e)?0:1};function Z(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new N(n,~e.h).add(Is)}_.abs=function(){return ft(this)?Z(this):this};_.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,s=0;s<=t;s++){var i=r+(this.D(s)&65535)+(e.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(e.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new N(n,n[n.length-1]&-2147483648?-1:0)};function Zn(e,t){return e.add(Z(t))}_.R=function(e){if(Ct(this)||Ct(e))return ge;if(ft(this))return ft(e)?Z(this).R(Z(e)):Z(Z(this).R(e));if(ft(e))return Z(this.R(Z(e)));if(0>this.X(lo)&&0>e.X(lo))return It(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<e.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(s)>>>16,u=e.D(s)&65535;n[2*r+2*s]+=o*u,Mn(n,2*r+2*s),n[2*r+2*s+1]+=i*u,Mn(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,Mn(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,Mn(n,2*r+2*s+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new N(n,0)};function Mn(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function Fe(e,t){this.g=e,this.h=t}function tr(e,t){if(Ct(t))throw Error("division by zero");if(Ct(e))return new Fe(ge,ge);if(ft(e))return t=tr(Z(e),t),new Fe(Z(t.g),Z(t.h));if(ft(t))return t=tr(e,Z(t)),new Fe(Z(t.g),t.h);if(30<e.g.length){if(ft(e)||ft(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Is,r=t;0>=r.X(e);)n=co(n),r=co(r);var s=ae(n,1),i=ae(r,1);for(r=ae(r,2),n=ae(n,2);!Ct(r);){var o=i.add(r);0>=o.X(e)&&(s=s.add(n),i=o),r=ae(r,1),n=ae(n,1)}return t=Zn(e,s.R(t)),new Fe(s,t)}for(s=ge;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=It(n),o=i.R(t);ft(o)||0<o.X(e);)n-=r,i=It(n),o=i.R(t);Ct(i)&&(i=Is),s=s.add(i),e=Zn(e,o)}return new Fe(s,e)}_.gb=function(e){return tr(this,e).h};_.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new N(n,this.h&e.h)};_.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new N(n,this.h|e.h)};_.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new N(n,this.h^e.h)};function co(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new N(n,e.h)}function ae(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,s=[],i=0;i<r;i++)s[i]=0<t?e.D(i+n)>>>t|e.D(i+n+1)<<32-t:e.D(i+n);return new N(s,e.h)}Jn.prototype.createWebChannel=Jn.prototype.g;ct.prototype.send=ct.prototype.u;ct.prototype.open=ct.prototype.m;ct.prototype.close=ct.prototype.close;_r.NO_ERROR=0;_r.TIMEOUT=8;_r.HTTP_ERROR=6;Da.COMPLETE="complete";ba.EventType=En;En.OPEN="a";En.CLOSE="b";En.ERROR="c";En.MESSAGE="d";X.prototype.listen=X.prototype.O;j.prototype.listenOnce=j.prototype.P;j.prototype.getLastError=j.prototype.Sa;j.prototype.getLastErrorCode=j.prototype.Ia;j.prototype.getStatus=j.prototype.da;j.prototype.getResponseJson=j.prototype.Wa;j.prototype.getResponseText=j.prototype.ja;j.prototype.send=j.prototype.ha;j.prototype.setWithCredentials=j.prototype.Oa;_t.prototype.digest=_t.prototype.l;_t.prototype.reset=_t.prototype.reset;_t.prototype.update=_t.prototype.j;N.prototype.add=N.prototype.add;N.prototype.multiply=N.prototype.R;N.prototype.modulo=N.prototype.gb;N.prototype.compare=N.prototype.X;N.prototype.toNumber=N.prototype.ea;N.prototype.toString=N.prototype.toString;N.prototype.getBits=N.prototype.D;N.fromNumber=It;N.fromString=du;var If=function(){return new Jn},wf=function(){return gr()},Yr=_r,Af=Da,Rf=re,ho={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},On=ba,Pf=j,Sf=_t,_e=N;const fo="@firebase/firestore";/**
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
 */class st{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}st.UNAUTHENTICATED=new st(null),st.GOOGLE_CREDENTIALS=new st("google-credentials-uid"),st.FIRST_PARTY=new st("first-party-uid"),st.MOCK_USER=new st("mock-user");/**
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
 */let Ne="10.7.0";/**
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
 */const Zt=new ia("@firebase/firestore");function Ue(){return Zt.logLevel}function E(e,...t){if(Zt.logLevel<=D.DEBUG){const n=t.map(li);Zt.debug(`Firestore (${Ne}): ${e}`,...n)}}function Dt(e,...t){if(Zt.logLevel<=D.ERROR){const n=t.map(li);Zt.error(`Firestore (${Ne}): ${e}`,...n)}}function Ie(e,...t){if(Zt.logLevel<=D.WARN){const n=t.map(li);Zt.warn(`Firestore (${Ne}): ${e}`,...n)}}function li(e){if(typeof e=="string")return e;try{/**
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
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
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
 */function w(e="Unexpected state"){const t=`FIRESTORE (${Ne}) INTERNAL ASSERTION FAILED: `+e;throw Dt(t),new Error(t)}function O(e,t){e||w()}function S(e,t){return e}/**
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
 */const p={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class v extends De{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Mt{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class mu{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Cf{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(st.UNAUTHENTICATED))}shutdown(){}}class Vf{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Df{constructor(t){this.t=t,this.currentUser=st.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new Mt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Mt,t.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;t.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},a=u=>{E("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(E("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Mt)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(E("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(O(typeof r.accessToken=="string"),new mu(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return O(t===null||typeof t=="string"),new st(t)}}class bf{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=st.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class kf{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new bf(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(st.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Nf{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class xf{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=i=>{i.error!=null&&E("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,E("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>r(i))};const s=i=>{E("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):E("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(O(typeof n.token=="string"),this.R=n.token,new Nf(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Mf(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class pu{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=Mf(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=t.charAt(s[i]%t.length))}return r}}function k(e,t){return e<t?-1:e>t?1:0}function we(e,t,n){return e.length===t.length&&e.every((r,s)=>n(r,t[s]))}/**
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
 */class G{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new v(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new v(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new v(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new v(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return G.fromMillis(Date.now())}static fromDate(t){return G.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new G(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?k(this.nanoseconds,t.nanoseconds):k(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class P{constructor(t){this.timestamp=t}static fromTimestamp(t){return new P(t)}static min(){return new P(new G(0,0))}static max(){return new P(new G(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class ln{constructor(t,n,r){n===void 0?n=0:n>t.length&&w(),r===void 0?r=t.length-n:r>t.length-n&&w(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return ln.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof ln?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let s=0;s<r;s++){const i=t.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class U extends ln{construct(t,n,r){return new U(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new v(p.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new U(n)}static emptyPath(){return new U([])}}const Of=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class tt extends ln{construct(t,n,r){return new tt(t,n,r)}static isValidIdentifier(t){return Of.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),tt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new tt(["__name__"])}static fromServerFormat(t){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new v(p.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<t.length;){const a=t[s];if(a==="\\"){if(s+1===t.length)throw new v(p.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new v(p.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=u,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new v(p.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new tt(n)}static emptyPath(){return new tt([])}}/**
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
 */class I{constructor(t){this.path=t}static fromPath(t){return new I(U.fromString(t))}static fromName(t){return new I(U.fromString(t).popFirst(5))}static empty(){return new I(U.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&U.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return U.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new I(new U(t.slice()))}}function Lf(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,s=P.fromTimestamp(r===1e9?new G(n+1,0):new G(n,r));return new Ft(s,I.empty(),t)}function Ff(e){return new Ft(e.readTime,e.key,-1)}class Ft{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new Ft(P.min(),I.empty(),-1)}static max(){return new Ft(P.max(),I.empty(),-1)}}function Uf(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=I.comparator(e.documentKey,t.documentKey),n!==0?n:k(e.largestBatchId,t.largestBatchId))}/**
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
 */const Bf="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class $f{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function An(e){if(e.code!==p.FAILED_PRECONDITION||e.message!==Bf)throw e;E("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class m{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&w(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new m((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof m?n:m.resolve(n)}catch(n){return m.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):m.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):m.reject(n)}static resolve(t){return new m((n,r)=>{n(t)})}static reject(t){return new m((n,r)=>{r(t)})}static waitFor(t){return new m((n,r)=>{let s=0,i=0,o=!1;t.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(t){let n=m.resolve(!1);for(const r of t)n=n.next(s=>s?m.resolve(s):r());return n}static forEach(t,n){const r=[];return t.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(t,n){return new m((r,s)=>{const i=t.length,o=new Array(i);let a=0;for(let u=0;u<i;u++){const l=u;n(t[l]).next(c=>{o[l]=c,++a,a===i&&r(o)},c=>s(c))}})}static doWhile(t,n){return new m((r,s)=>{const i=()=>{t()===!0?n().next(()=>{i()},s):r()};i()})}}function Rn(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class ci{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.oe&&this.oe(t),t}}ci._e=-1;function Pr(e){return e==null}function er(e){return e===0&&1/e==-1/0}function jf(e){return typeof e=="number"&&Number.isInteger(e)&&!er(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
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
 */function mo(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function xe(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function gu(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */class ${constructor(t,n){this.comparator=t,this.root=n||J.EMPTY}insert(t,n){return new $(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,J.BLACK,null,null))}remove(t){return new $(this.comparator,this.root.remove(t,this.comparator).copy(null,null,J.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Ln(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Ln(this.root,t,this.comparator,!1)}getReverseIterator(){return new Ln(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Ln(this.root,t,this.comparator,!0)}}class Ln{constructor(t,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?r(t.key,n):1,n&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class J{constructor(t,n,r,s,i){this.key=t,this.value=n,this.color=r??J.RED,this.left=s??J.EMPTY,this.right=i??J.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,s,i){return new J(t??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let s=this;const i=r(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(t,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return J.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,s=this;if(n(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(t,s.key)===0){if(s.right.isEmpty())return J.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,J.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,J.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw w();const t=this.left.check();if(t!==this.right.check())throw w();return t+(this.isRed()?0:1)}}J.EMPTY=null,J.RED=!0,J.BLACK=!1;J.EMPTY=new class{constructor(){this.size=0}get key(){throw w()}get value(){throw w()}get color(){throw w()}get left(){throw w()}get right(){throw w()}copy(t,n,r,s,i){return this}insert(t,n,r){return new J(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class nt{constructor(t){this.comparator=t,this.data=new $(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;n(s.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new po(this.data.getIterator())}getIteratorFrom(t){return new po(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof nt)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new nt(this.comparator);return n.data=t,n}}class po{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class gt{constructor(t){this.fields=t,t.sort(tt.comparator)}static empty(){return new gt([])}unionWith(t){let n=new nt(tt.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new gt(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return we(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class _u extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ut{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new _u("Invalid base64 string: "+i):i}}(t);return new ut(n)}static fromUint8Array(t){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(t);return new ut(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return k(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ut.EMPTY_BYTE_STRING=new ut("");const qf=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ut(e){if(O(!!e),typeof e=="string"){let t=0;const n=qf.exec(e);if(O(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:z(e.seconds),nanos:z(e.nanos)}}function z(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function te(e){return typeof e=="string"?ut.fromBase64String(e):ut.fromUint8Array(e)}/**
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
 */function hi(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function fi(e){const t=e.mapValue.fields.__previous_value__;return hi(t)?fi(t):t}function cn(e){const t=Ut(e.mapValue.fields.__local_write_time__.timestampValue);return new G(t.seconds,t.nanos)}/**
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
 */class zf{constructor(t,n,r,s,i,o,a,u,l){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=l}}class hn{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new hn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof hn&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const Fn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ee(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?hi(e)?4:Hf(e)?9007199254740991:10:w()}function Pt(e,t){if(e===t)return!0;const n=ee(e);if(n!==ee(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return cn(e).isEqual(cn(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Ut(s.timestampValue),a=Ut(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return te(s.bytesValue).isEqual(te(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return z(s.geoPointValue.latitude)===z(i.geoPointValue.latitude)&&z(s.geoPointValue.longitude)===z(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return z(s.integerValue)===z(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=z(s.doubleValue),a=z(i.doubleValue);return o===a?er(o)===er(a):isNaN(o)&&isNaN(a)}return!1}(e,t);case 9:return we(e.arrayValue.values||[],t.arrayValue.values||[],Pt);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(mo(o)!==mo(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!Pt(o[u],a[u])))return!1;return!0}(e,t);default:return w()}}function fn(e,t){return(e.values||[]).find(n=>Pt(n,t))!==void 0}function Ae(e,t){if(e===t)return 0;const n=ee(e),r=ee(t);if(n!==r)return k(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return k(e.booleanValue,t.booleanValue);case 2:return function(i,o){const a=z(i.integerValue||i.doubleValue),u=z(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(e,t);case 3:return go(e.timestampValue,t.timestampValue);case 4:return go(cn(e),cn(t));case 5:return k(e.stringValue,t.stringValue);case 6:return function(i,o){const a=te(i),u=te(o);return a.compareTo(u)}(e.bytesValue,t.bytesValue);case 7:return function(i,o){const a=i.split("/"),u=o.split("/");for(let l=0;l<a.length&&l<u.length;l++){const c=k(a[l],u[l]);if(c!==0)return c}return k(a.length,u.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,o){const a=k(z(i.latitude),z(o.latitude));return a!==0?a:k(z(i.longitude),z(o.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,o){const a=i.values||[],u=o.values||[];for(let l=0;l<a.length&&l<u.length;++l){const c=Ae(a[l],u[l]);if(c)return c}return k(a.length,u.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,o){if(i===Fn.mapValue&&o===Fn.mapValue)return 0;if(i===Fn.mapValue)return 1;if(o===Fn.mapValue)return-1;const a=i.fields||{},u=Object.keys(a),l=o.fields||{},c=Object.keys(l);u.sort(),c.sort();for(let h=0;h<u.length&&h<c.length;++h){const f=k(u[h],c[h]);if(f!==0)return f;const d=Ae(a[u[h]],l[c[h]]);if(d!==0)return d}return k(u.length,c.length)}(e.mapValue,t.mapValue);default:throw w()}}function go(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return k(e,t);const n=Ut(e),r=Ut(t),s=k(n.seconds,r.seconds);return s!==0?s:k(n.nanos,r.nanos)}function Re(e){return ws(e)}function ws(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=Ut(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return te(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return I.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=ws(i);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${ws(n.fields[o])}`;return s+"}"}(e.mapValue):w()}function As(e){return!!e&&"integerValue"in e}function di(e){return!!e&&"arrayValue"in e}function _o(e){return!!e&&"nullValue"in e}function yo(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function $n(e){return!!e&&"mapValue"in e}function Ge(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return xe(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=Ge(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Ge(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Hf(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class dt{constructor(t){this.value=t}static empty(){return new dt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!$n(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ge(n)}setAll(t){let n=tt.emptyPath(),r={},s=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Ge(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(t){const n=this.field(t.popLast());$n(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return Pt(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=n.mapValue.fields[t.get(r)];$n(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(t,n,r){xe(n,(s,i)=>t[s]=i);for(const s of r)delete t[s]}clone(){return new dt(Ge(this.value))}}function yu(e){const t=[];return xe(e.fields,(n,r)=>{const s=new tt([n]);if($n(r)){const i=yu(r.mapValue).fields;if(i.length===0)t.push(s);else for(const o of i)t.push(s.child(o))}else t.push(s)}),new gt(t)}/**
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
 */class it{constructor(t,n,r,s,i,o,a){this.key=t,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(t){return new it(t,0,P.min(),P.min(),P.min(),dt.empty(),0)}static newFoundDocument(t,n,r,s){return new it(t,1,n,P.min(),r,s,0)}static newNoDocument(t,n){return new it(t,2,n,P.min(),P.min(),dt.empty(),0)}static newUnknownDocument(t,n){return new it(t,3,n,P.min(),P.min(),dt.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(P.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=dt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=dt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=P.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof it&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new it(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class nr{constructor(t,n){this.position=t,this.inclusive=n}}function Eo(e,t,n){let r=0;for(let s=0;s<e.position.length;s++){const i=t[s],o=e.position[s];if(i.field.isKeyField()?r=I.comparator(I.fromName(o.referenceValue),n.key):r=Ae(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function To(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Pt(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class rr{constructor(t,n="asc"){this.field=t,this.dir=n}}function Kf(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
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
 */class Eu{}class K extends Eu{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new Wf(t,n,r):n==="array-contains"?new Yf(t,r):n==="in"?new Jf(t,r):n==="not-in"?new Zf(t,r):n==="array-contains-any"?new td(t,r):new K(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new Qf(t,r):new Xf(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ae(n,this.value)):n!==null&&ee(this.value)===ee(n)&&this.matchesComparison(Ae(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return w()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class St extends Eu{constructor(t,n){super(),this.filters=t,this.op=n,this.ue=null}static create(t,n){return new St(t,n)}matches(t){return Tu(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function Tu(e){return e.op==="and"}function vu(e){return Gf(e)&&Tu(e)}function Gf(e){for(const t of e.filters)if(t instanceof St)return!1;return!0}function Rs(e){if(e instanceof K)return e.field.canonicalString()+e.op.toString()+Re(e.value);if(vu(e))return e.filters.map(t=>Rs(t)).join(",");{const t=e.filters.map(n=>Rs(n)).join(",");return`${e.op}(${t})`}}function Iu(e,t){return e instanceof K?function(r,s){return s instanceof K&&r.op===s.op&&r.field.isEqual(s.field)&&Pt(r.value,s.value)}(e,t):e instanceof St?function(r,s){return s instanceof St&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&Iu(o,s.filters[a]),!0):!1}(e,t):void w()}function wu(e){return e instanceof K?function(n){return`${n.field.canonicalString()} ${n.op} ${Re(n.value)}`}(e):e instanceof St?function(n){return n.op.toString()+" {"+n.getFilters().map(wu).join(" ,")+"}"}(e):"Filter"}class Wf extends K{constructor(t,n,r){super(t,n,r),this.key=I.fromName(r.referenceValue)}matches(t){const n=I.comparator(t.key,this.key);return this.matchesComparison(n)}}class Qf extends K{constructor(t,n){super(t,"in",n),this.keys=Au("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class Xf extends K{constructor(t,n){super(t,"not-in",n),this.keys=Au("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function Au(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>I.fromName(r.referenceValue))}class Yf extends K{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return di(n)&&fn(n.arrayValue,this.value)}}class Jf extends K{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&fn(this.value.arrayValue,n)}}class Zf extends K{constructor(t,n){super(t,"not-in",n)}matches(t){if(fn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!fn(this.value.arrayValue,n)}}class td extends K{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!di(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>fn(this.value.arrayValue,r))}}/**
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
 */class ed{constructor(t,n=null,r=[],s=[],i=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ce=null}}function vo(e,t=null,n=[],r=[],s=null,i=null,o=null){return new ed(e,t,n,r,s,i,o)}function mi(e){const t=S(e);if(t.ce===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>Rs(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Pr(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>Re(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>Re(r)).join(",")),t.ce=n}return t.ce}function pi(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Kf(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Iu(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!To(e.startAt,t.startAt)&&To(e.endAt,t.endAt)}function Ps(e){return I.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
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
 */class Sr{constructor(t,n=null,r=[],s=[],i=null,o="F",a=null,u=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=u,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function nd(e,t,n,r,s,i,o,a){return new Sr(e,t,n,r,s,i,o,a)}function gi(e){return new Sr(e)}function Io(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function rd(e){return e.collectionGroup!==null}function We(e){const t=S(e);if(t.le===null){t.le=[];const n=new Set;for(const i of t.explicitOrderBy)t.le.push(i),n.add(i.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new nt(tt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(l=>{l.isInequality()&&(a=a.add(l.field))})}),a})(t).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||t.le.push(new rr(i,r))}),n.has(tt.keyField().canonicalString())||t.le.push(new rr(tt.keyField(),r))}return t.le}function wt(e){const t=S(e);return t.he||(t.he=sd(t,We(e))),t.he}function sd(e,t){if(e.limitType==="F")return vo(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new rr(s.field,i)});const n=e.endAt?new nr(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new nr(e.startAt.position,e.startAt.inclusive):null;return vo(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function Ss(e,t,n){return new Sr(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Cr(e,t){return pi(wt(e),wt(t))&&e.limitType===t.limitType}function Ru(e){return`${mi(wt(e))}|lt:${e.limitType}`}function le(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>wu(s)).join(", ")}]`),Pr(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Re(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Re(s)).join(",")),`Target(${r})`}(wt(e))}; limitType=${e.limitType})`}function Vr(e,t){return t.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):I.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(e,t)&&function(r,s){for(const i of We(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(r,s){return!(r.startAt&&!function(o,a,u){const l=Eo(o,a,u);return o.inclusive?l<=0:l<0}(r.startAt,We(r),s)||r.endAt&&!function(o,a,u){const l=Eo(o,a,u);return o.inclusive?l>=0:l>0}(r.endAt,We(r),s))}(e,t)}function id(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Pu(e){return(t,n)=>{let r=!1;for(const s of We(e)){const i=od(s,t,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function od(e,t,n){const r=e.field.isKeyField()?I.comparator(t.key,n.key):function(i,o,a){const u=o.data.field(i),l=a.data.field(i);return u!==null&&l!==null?Ae(u,l):w()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return w()}}/**
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
 */class Me{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,n]);s.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){xe(this.inner,(n,r)=>{for(const[s,i]of r)t(s,i)})}isEmpty(){return gu(this.inner)}size(){return this.innerSize}}/**
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
 */const ad=new $(I.comparator);function bt(){return ad}const Su=new $(I.comparator);function je(...e){let t=Su;for(const n of e)t=t.insert(n.key,n);return t}function Cu(e){let t=Su;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function Qt(){return Qe()}function Vu(){return Qe()}function Qe(){return new Me(e=>e.toString(),(e,t)=>e.isEqual(t))}const ud=new $(I.comparator),ld=new nt(I.comparator);function C(...e){let t=ld;for(const n of e)t=t.add(n);return t}const cd=new nt(k);function hd(){return cd}/**
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
 */function Du(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:er(t)?"-0":t}}function bu(e){return{integerValue:""+e}}function fd(e,t){return jf(t)?bu(t):Du(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Dr{constructor(){this._=void 0}}function dd(e,t,n){return e instanceof sr?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&hi(i)&&(i=fi(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,t):e instanceof dn?Nu(e,t):e instanceof mn?xu(e,t):function(s,i){const o=ku(s,i),a=wo(o)+wo(s.Ie);return As(o)&&As(s.Ie)?bu(a):Du(s.serializer,a)}(e,t)}function md(e,t,n){return e instanceof dn?Nu(e,t):e instanceof mn?xu(e,t):n}function ku(e,t){return e instanceof ir?function(r){return As(r)||function(i){return!!i&&"doubleValue"in i}(r)}(t)?t:{integerValue:0}:null}class sr extends Dr{}class dn extends Dr{constructor(t){super(),this.elements=t}}function Nu(e,t){const n=Mu(t);for(const r of e.elements)n.some(s=>Pt(s,r))||n.push(r);return{arrayValue:{values:n}}}class mn extends Dr{constructor(t){super(),this.elements=t}}function xu(e,t){let n=Mu(t);for(const r of e.elements)n=n.filter(s=>!Pt(s,r));return{arrayValue:{values:n}}}class ir extends Dr{constructor(t,n){super(),this.serializer=t,this.Ie=n}}function wo(e){return z(e.integerValue||e.doubleValue)}function Mu(e){return di(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function pd(e,t){return e.field.isEqual(t.field)&&function(r,s){return r instanceof dn&&s instanceof dn||r instanceof mn&&s instanceof mn?we(r.elements,s.elements,Pt):r instanceof ir&&s instanceof ir?Pt(r.Ie,s.Ie):r instanceof sr&&s instanceof sr}(e.transform,t.transform)}class gd{constructor(t,n){this.version=t,this.transformResults=n}}class At{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new At}static exists(t){return new At(void 0,t)}static updateTime(t){return new At(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function jn(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class br{}function Ou(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new _i(e.key,At.none()):new Pn(e.key,e.data,At.none());{const n=e.data,r=dt.empty();let s=new nt(tt.comparator);for(let i of t.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new se(e.key,r,new gt(s.toArray()),At.none())}}function _d(e,t,n){e instanceof Pn?function(s,i,o){const a=s.value.clone(),u=Ro(s.fieldTransforms,i,o.transformResults);a.setAll(u),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(e,t,n):e instanceof se?function(s,i,o){if(!jn(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Ro(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(Lu(s)),u.setAll(a),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(e,t,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,n)}function Xe(e,t,n,r){return e instanceof Pn?function(i,o,a,u){if(!jn(i.precondition,o))return a;const l=i.value.clone(),c=Po(i.fieldTransforms,u,o);return l.setAll(c),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(e,t,n,r):e instanceof se?function(i,o,a,u){if(!jn(i.precondition,o))return a;const l=Po(i.fieldTransforms,u,o),c=o.data;return c.setAll(Lu(i)),c.setAll(l),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(e,t,n,r):function(i,o,a){return jn(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(e,t,n)}function yd(e,t){let n=null;for(const r of e.fieldTransforms){const s=t.data.field(r.field),i=ku(r.transform,s||null);i!=null&&(n===null&&(n=dt.empty()),n.set(r.field,i))}return n||null}function Ao(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&we(r,s,(i,o)=>pd(i,o))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Pn extends br{constructor(t,n,r,s=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class se extends br{constructor(t,n,r,s,i=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Lu(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function Ro(e,t,n){const r=new Map;O(e.length===n.length);for(let s=0;s<n.length;s++){const i=e[s],o=i.transform,a=t.data.field(i.field);r.set(i.field,md(o,a,n[s]))}return r}function Po(e,t,n){const r=new Map;for(const s of e){const i=s.transform,o=n.data.field(s.field);r.set(s.field,dd(i,o,t))}return r}class _i extends br{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ed extends br{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Td{constructor(t,n,r,s){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&_d(i,t,r[s])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=Xe(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=Xe(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=Vu();return this.mutations.forEach(s=>{const i=t.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const u=Ou(o,a);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(P.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),C())}isEqual(t){return this.batchId===t.batchId&&we(this.mutations,t.mutations,(n,r)=>Ao(n,r))&&we(this.baseMutations,t.baseMutations,(n,r)=>Ao(n,r))}}class yi{constructor(t,n,r,s){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(t,n,r){O(t.mutations.length===r.length);let s=function(){return ud}();const i=t.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new yi(t,n,r,s)}}/**
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
 */class vd{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class Id{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
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
 */var q,V;function wd(e){switch(e){default:return w();case p.CANCELLED:case p.UNKNOWN:case p.DEADLINE_EXCEEDED:case p.RESOURCE_EXHAUSTED:case p.INTERNAL:case p.UNAVAILABLE:case p.UNAUTHENTICATED:return!1;case p.INVALID_ARGUMENT:case p.NOT_FOUND:case p.ALREADY_EXISTS:case p.PERMISSION_DENIED:case p.FAILED_PRECONDITION:case p.ABORTED:case p.OUT_OF_RANGE:case p.UNIMPLEMENTED:case p.DATA_LOSS:return!0}}function Fu(e){if(e===void 0)return Dt("GRPC error has no .code"),p.UNKNOWN;switch(e){case q.OK:return p.OK;case q.CANCELLED:return p.CANCELLED;case q.UNKNOWN:return p.UNKNOWN;case q.DEADLINE_EXCEEDED:return p.DEADLINE_EXCEEDED;case q.RESOURCE_EXHAUSTED:return p.RESOURCE_EXHAUSTED;case q.INTERNAL:return p.INTERNAL;case q.UNAVAILABLE:return p.UNAVAILABLE;case q.UNAUTHENTICATED:return p.UNAUTHENTICATED;case q.INVALID_ARGUMENT:return p.INVALID_ARGUMENT;case q.NOT_FOUND:return p.NOT_FOUND;case q.ALREADY_EXISTS:return p.ALREADY_EXISTS;case q.PERMISSION_DENIED:return p.PERMISSION_DENIED;case q.FAILED_PRECONDITION:return p.FAILED_PRECONDITION;case q.ABORTED:return p.ABORTED;case q.OUT_OF_RANGE:return p.OUT_OF_RANGE;case q.UNIMPLEMENTED:return p.UNIMPLEMENTED;case q.DATA_LOSS:return p.DATA_LOSS;default:return w()}}(V=q||(q={}))[V.OK=0]="OK",V[V.CANCELLED=1]="CANCELLED",V[V.UNKNOWN=2]="UNKNOWN",V[V.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",V[V.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",V[V.NOT_FOUND=5]="NOT_FOUND",V[V.ALREADY_EXISTS=6]="ALREADY_EXISTS",V[V.PERMISSION_DENIED=7]="PERMISSION_DENIED",V[V.UNAUTHENTICATED=16]="UNAUTHENTICATED",V[V.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",V[V.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",V[V.ABORTED=10]="ABORTED",V[V.OUT_OF_RANGE=11]="OUT_OF_RANGE",V[V.UNIMPLEMENTED=12]="UNIMPLEMENTED",V[V.INTERNAL=13]="INTERNAL",V[V.UNAVAILABLE=14]="UNAVAILABLE",V[V.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Ad(){return new TextEncoder}/**
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
 */const Rd=new _e([4294967295,4294967295],0);function So(e){const t=Ad().encode(e),n=new Sf;return n.update(t),new Uint8Array(n.digest())}function Co(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new _e([n,r],0),new _e([s,i],0)]}class Ei{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new qe(`Invalid padding: ${n}`);if(r<0)throw new qe(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new qe(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new qe(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*t.length-n,this.Ee=_e.fromNumber(this.Te)}de(t,n,r){let s=t.add(n.multiply(_e.fromNumber(r)));return s.compare(Rd)===1&&(s=new _e([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ee).toNumber()}Ae(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Te===0)return!1;const n=So(t),[r,s]=Co(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);if(!this.Ae(o))return!1}return!0}static create(t,n,r){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),o=new Ei(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.Te===0)return;const n=So(t),[r,s]=Co(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);this.Re(o)}}Re(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class qe extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class kr{constructor(t,n,r,s,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const s=new Map;return s.set(t,Sn.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new kr(P.min(),s,new $(k),bt(),C())}}class Sn{constructor(t,n,r,s,i){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new Sn(r,n,C(),C(),C())}}/**
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
 */class qn{constructor(t,n,r,s){this.Ve=t,this.removedTargetIds=n,this.key=r,this.me=s}}class Uu{constructor(t,n){this.targetId=t,this.fe=n}}class Bu{constructor(t,n,r=ut.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Vo{constructor(){this.ge=0,this.pe=bo(),this.ye=ut.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(t){t.approximateByteSize()>0&&(this.Se=!0,this.ye=t)}ve(){let t=C(),n=C(),r=C();return this.pe.forEach((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:w()}}),new Sn(this.ye,this.we,t,n,r)}Fe(){this.Se=!1,this.pe=bo()}Me(t,n){this.Se=!0,this.pe=this.pe.insert(t,n)}xe(t){this.Se=!0,this.pe=this.pe.remove(t)}Oe(){this.ge+=1}Ne(){this.ge-=1,O(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class Pd{constructor(t){this.Le=t,this.ke=new Map,this.qe=bt(),this.Qe=Do(),this.Ke=new $(k)}$e(t){for(const n of t.Ve)t.me&&t.me.isFoundDocument()?this.Ue(n,t.me):this.We(n,t.key,t.me);for(const n of t.removedTargetIds)this.We(n,t.key,t.me)}Ge(t){this.forEachTarget(t,n=>{const r=this.ze(n);switch(t.state){case 0:this.je(n)&&r.Ce(t.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(t.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(t.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(t.resumeToken));break;default:w()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.ke.forEach((r,s)=>{this.je(s)&&n(s)})}Je(t){const n=t.targetId,r=t.fe.count,s=this.Ye(n);if(s){const i=s.target;if(Ps(i))if(r===0){const o=new I(i.path);this.We(n,o,it.newNoDocument(o,P.min()))}else O(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(t),u=a?this.et(a,t,o):1;if(u!==0){this.He(n);const l=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,l)}}}}}Xe(t){const n=t.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=te(r).toUint8Array()}catch(u){if(u instanceof _u)return Ie("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new Ei(o,s,i)}catch(u){return Ie(u instanceof qe?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Te===0?null:a}et(t,n,r){return n.fe.count===r-this.rt(t,n.targetId)?0:2}rt(t,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;t.mightContain(a)||(this.We(n,i,null),s++)}),s}it(t){const n=new Map;this.ke.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&Ps(a.target)){const u=new I(a.target.path);this.qe.get(u)!==null||this.st(o,u)||this.We(o,u,it.newNoDocument(u,t))}i.De&&(n.set(o,i.ve()),i.Fe())}});let r=C();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(u=>{const l=this.Ye(u);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.qe.forEach((i,o)=>o.setReadTime(t));const s=new kr(t,n,this.Ke,this.qe,r);return this.qe=bt(),this.Qe=Do(),this.Ke=new $(k),s}Ue(t,n){if(!this.je(t))return;const r=this.st(t,n.key)?2:0;this.ze(t).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(t))}We(t,n,r){if(!this.je(t))return;const s=this.ze(t);this.st(t,n)?s.Me(n,1):s.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(t)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(t){this.ke.delete(t)}Ze(t){const n=this.ze(t).ve();return this.Le.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Oe(t){this.ze(t).Oe()}ze(t){let n=this.ke.get(t);return n||(n=new Vo,this.ke.set(t,n)),n}ot(t){let n=this.Qe.get(t);return n||(n=new nt(k),this.Qe=this.Qe.insert(t,n)),n}je(t){const n=this.Ye(t)!==null;return n||E("WatchChangeAggregator","Detected inactive target",t),n}Ye(t){const n=this.ke.get(t);return n&&n.be?null:this.Le._t(t)}He(t){this.ke.set(t,new Vo),this.Le.getRemoteKeysForTarget(t).forEach(n=>{this.We(t,n,null)})}st(t,n){return this.Le.getRemoteKeysForTarget(t).has(n)}}function Do(){return new $(I.comparator)}function bo(){return new $(I.comparator)}const Sd={asc:"ASCENDING",desc:"DESCENDING"},Cd={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Vd={and:"AND",or:"OR"};class Dd{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function Cs(e,t){return e.useProto3Json||Pr(t)?t:{value:t}}function or(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function $u(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function bd(e,t){return or(e,t.toTimestamp())}function Rt(e){return O(!!e),P.fromTimestamp(function(n){const r=Ut(n);return new G(r.seconds,r.nanos)}(e))}function Ti(e,t){return function(r){return new U(["projects",r.projectId,"databases",r.database])}(e).child("documents").child(t).canonicalString()}function ju(e){const t=U.fromString(e);return O(Ku(t)),t}function Vs(e,t){return Ti(e.databaseId,t.path)}function Jr(e,t){const n=ju(t);if(n.get(1)!==e.databaseId.projectId)throw new v(p.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new v(p.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new I(qu(n))}function Ds(e,t){return Ti(e.databaseId,t)}function kd(e){const t=ju(e);return t.length===4?U.emptyPath():qu(t)}function bs(e){return new U(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function qu(e){return O(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function ko(e,t,n){return{name:Vs(e,t),fields:n.value.mapValue.fields}}function Nd(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:w()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(l,c){return l.useProto3Json?(O(c===void 0||typeof c=="string"),ut.fromBase64String(c||"")):(O(c===void 0||c instanceof Uint8Array),ut.fromUint8Array(c||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(l){const c=l.code===void 0?p.UNKNOWN:Fu(l.code);return new v(c,l.message||"")}(o);n=new Bu(r,s,i,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=Jr(e,r.document.name),i=Rt(r.document.updateTime),o=r.document.createTime?Rt(r.document.createTime):P.min(),a=new dt({mapValue:{fields:r.document.fields}}),u=it.newFoundDocument(s,i,o,a),l=r.targetIds||[],c=r.removedTargetIds||[];n=new qn(l,c,u.key,u)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=Jr(e,r.document),i=r.readTime?Rt(r.readTime):P.min(),o=it.newNoDocument(s,i),a=r.removedTargetIds||[];n=new qn([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=Jr(e,r.document),i=r.removedTargetIds||[];n=new qn([],i,s,null)}else{if(!("filter"in t))return w();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new Id(s,i),a=r.targetId;n=new Uu(a,o)}}return n}function xd(e,t){let n;if(t instanceof Pn)n={update:ko(e,t.key,t.value)};else if(t instanceof _i)n={delete:Vs(e,t.key)};else if(t instanceof se)n={update:ko(e,t.key,t.data),updateMask:qd(t.fieldMask)};else{if(!(t instanceof Ed))return w();n={verify:Vs(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof sr)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof dn)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof mn)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof ir)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw w()}(0,r))),t.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:bd(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:w()}(e,t.precondition)),n}function Md(e,t){return e&&e.length>0?(O(t!==void 0),e.map(n=>function(s,i){let o=s.updateTime?Rt(s.updateTime):Rt(i);return o.isEqual(P.min())&&(o=Rt(i)),new gd(o,s.transformResults||[])}(n,t))):[]}function Od(e,t){return{documents:[Ds(e,t.path)]}}function Ld(e,t){const n={structuredQuery:{}},r=t.path;t.collectionGroup!==null?(n.parent=Ds(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Ds(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(u){if(u.length!==0)return Hu(St.create(u,"and"))}(t.filters);s&&(n.structuredQuery.where=s);const i=function(u){if(u.length!==0)return u.map(l=>function(h){return{field:ce(h.field),direction:Bd(h.dir)}}(l))}(t.orderBy);i&&(n.structuredQuery.orderBy=i);const o=Cs(e,t.limit);return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(t.endAt)),n}function Fd(e){let t=kd(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){O(r===1);const c=n.from[0];c.allDescendants?s=c.collectionId:t=t.child(c.collectionId)}let i=[];n.where&&(i=function(h){const f=zu(h);return f instanceof St&&vu(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(f=>function(T){return new rr(he(T.field),function(g){switch(g){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(T.direction))}(f))}(n.orderBy));let a=null;n.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,Pr(f)?null:f}(n.limit));let u=null;n.startAt&&(u=function(h){const f=!!h.before,d=h.values||[];return new nr(d,f)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const f=!h.before,d=h.values||[];return new nr(d,f)}(n.endAt)),nd(t,s,o,i,a,"F",u,l)}function Ud(e,t){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return w()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function zu(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=he(n.unaryFilter.field);return K.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=he(n.unaryFilter.field);return K.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=he(n.unaryFilter.field);return K.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=he(n.unaryFilter.field);return K.create(o,"!=",{nullValue:"NULL_VALUE"});default:return w()}}(e):e.fieldFilter!==void 0?function(n){return K.create(he(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return w()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return St.create(n.compositeFilter.filters.map(r=>zu(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return w()}}(n.compositeFilter.op))}(e):w()}function Bd(e){return Sd[e]}function $d(e){return Cd[e]}function jd(e){return Vd[e]}function ce(e){return{fieldPath:e.canonicalString()}}function he(e){return tt.fromServerFormat(e.fieldPath)}function Hu(e){return e instanceof K?function(n){if(n.op==="=="){if(yo(n.value))return{unaryFilter:{field:ce(n.field),op:"IS_NAN"}};if(_o(n.value))return{unaryFilter:{field:ce(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(yo(n.value))return{unaryFilter:{field:ce(n.field),op:"IS_NOT_NAN"}};if(_o(n.value))return{unaryFilter:{field:ce(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ce(n.field),op:$d(n.op),value:n.value}}}(e):e instanceof St?function(n){const r=n.getFilters().map(s=>Hu(s));return r.length===1?r[0]:{compositeFilter:{op:jd(n.op),filters:r}}}(e):w()}function qd(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function Ku(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
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
 */class kt{constructor(t,n,r,s,i=P.min(),o=P.min(),a=ut.EMPTY_BYTE_STRING,u=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(t){return new kt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new kt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new kt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new kt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class zd{constructor(t){this.ut=t}}function Hd(e){const t=Fd({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Ss(t,t.limit,"L"):t}/**
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
 */class Kd{constructor(){this.on=new Gd}addToCollectionParentIndex(t,n){return this.on.add(n),m.resolve()}getCollectionParents(t,n){return m.resolve(this.on.getEntries(n))}addFieldIndex(t,n){return m.resolve()}deleteFieldIndex(t,n){return m.resolve()}deleteAllFieldIndexes(t){return m.resolve()}createTargetIndexes(t,n){return m.resolve()}getDocumentsMatchingTarget(t,n){return m.resolve(null)}getIndexType(t,n){return m.resolve(0)}getFieldIndexes(t,n){return m.resolve([])}getNextCollectionGroupToUpdate(t){return m.resolve(null)}getMinOffset(t,n){return m.resolve(Ft.min())}getMinOffsetFromCollectionGroup(t,n){return m.resolve(Ft.min())}updateCollectionGroup(t,n,r){return m.resolve()}updateIndexEntries(t,n){return m.resolve()}}class Gd{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n]||new nt(U.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(t){return(this.index[t]||new nt(U.comparator)).toArray()}}/**
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
 */class Pe{constructor(t){this.xn=t}next(){return this.xn+=2,this.xn}static On(){return new Pe(0)}static Nn(){return new Pe(-1)}}/**
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
 */class Wd{constructor(){this.changes=new Me(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,it.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?m.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 *//**
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
 */class Qd{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class Xd{constructor(t,n,r,s){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,n))).next(s=>(r!==null&&Xe(r.mutation,s,gt.empty(),G.now()),s))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,C()).next(()=>r))}getLocalViewOfDocuments(t,n,r=C()){const s=Qt();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,r).next(i=>{let o=je();return i.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const r=Qt();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,C()))}populateOverlays(t,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(t,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,r,s){let i=bt();const o=Qe(),a=function(){return Qe()}();return n.forEach((u,l)=>{const c=r.get(l.key);s.has(l.key)&&(c===void 0||c.mutation instanceof se)?i=i.insert(l.key,l):c!==void 0?(o.set(l.key,c.mutation.getFieldMask()),Xe(c.mutation,l,c.mutation.getFieldMask(),G.now())):o.set(l.key,gt.empty())}),this.recalculateAndSaveOverlays(t,i).next(u=>(u.forEach((l,c)=>o.set(l,c)),n.forEach((l,c)=>{var h;return a.set(l,new Qd(c,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,n){const r=Qe();let s=new $((o,a)=>o-a),i=C();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const l=n.get(u);if(l===null)return;let c=r.get(u)||gt.empty();c=a.applyToLocalView(l,c),r.set(u,c);const h=(s.get(a.batchId)||C()).add(u);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),l=u.key,c=u.value,h=Vu();c.forEach(f=>{if(!i.has(f)){const d=Ou(n.get(f),r.get(f));d!==null&&h.set(f,d),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(t,l,h))}return m.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r,s){return function(o){return I.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):rd(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r,s):this.getDocumentsMatchingCollectionQuery(t,n,r,s)}getNextDocuments(t,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,s-i.size):m.resolve(Qt());let a=-1,u=i;return o.next(l=>m.forEach(l,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(c)?m.resolve():this.remoteDocumentCache.getEntry(t,c).next(f=>{u=u.insert(c,f)}))).next(()=>this.populateOverlays(t,l,i)).next(()=>this.computeViews(t,u,l,C())).next(c=>({batchId:a,changes:Cu(c)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new I(n)).next(r=>{let s=je();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,n,r,s){const i=n.collectionGroup;let o=je();return this.indexManager.getCollectionParents(t,i).next(a=>m.forEach(a,u=>{const l=function(h,f){return new Sr(f,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(t,l,r,s).next(c=>{c.forEach((h,f)=>{o=o.insert(h,f)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,i,s))).next(o=>{i.forEach((u,l)=>{const c=l.getKey();o.get(c)===null&&(o=o.insert(c,it.newInvalidDocument(c)))});let a=je();return o.forEach((u,l)=>{const c=i.get(u);c!==void 0&&Xe(c.mutation,l,gt.empty(),G.now()),Vr(n,l)&&(a=a.insert(u,l))}),a})}}/**
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
 */class Yd{constructor(t){this.serializer=t,this.ur=new Map,this.cr=new Map}getBundleMetadata(t,n){return m.resolve(this.ur.get(n))}saveBundleMetadata(t,n){return this.ur.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Rt(s.createTime)}}(n)),m.resolve()}getNamedQuery(t,n){return m.resolve(this.cr.get(n))}saveNamedQuery(t,n){return this.cr.set(n.name,function(s){return{name:s.name,query:Hd(s.bundledQuery),readTime:Rt(s.readTime)}}(n)),m.resolve()}}/**
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
 */class Jd{constructor(){this.overlays=new $(I.comparator),this.lr=new Map}getOverlay(t,n){return m.resolve(this.overlays.get(n))}getOverlays(t,n){const r=Qt();return m.forEach(n,s=>this.getOverlay(t,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((s,i)=>{this.lt(t,n,i)}),m.resolve()}removeOverlaysForBatchId(t,n,r){const s=this.lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.lr.delete(r)),m.resolve()}getOverlaysForCollection(t,n,r){const s=Qt(),i=n.length+1,o=new I(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,l=u.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return m.resolve(s)}getOverlaysForCollectionGroup(t,n,r,s){let i=new $((l,c)=>l-c);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let c=i.get(l.largestBatchId);c===null&&(c=Qt(),i=i.insert(l.largestBatchId,c)),c.set(l.getKey(),l)}}const a=Qt(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((l,c)=>a.set(l,c)),!(a.size()>=s)););return m.resolve(a)}lt(t,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.lr.get(s.largestBatchId).delete(r.key);this.lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new vd(n,r));let i=this.lr.get(n);i===void 0&&(i=C(),this.lr.set(n,i)),this.lr.set(n,i.add(r.key))}}/**
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
 */class vi{constructor(){this.hr=new nt(Q.Pr),this.Ir=new nt(Q.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(t,n){const r=new Q(t,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.dr(new Q(t,n))}Ar(t,n){t.forEach(r=>this.removeReference(r,n))}Rr(t){const n=new I(new U([])),r=new Q(n,t),s=new Q(n,t+1),i=[];return this.Ir.forEachInRange([r,s],o=>{this.dr(o),i.push(o.key)}),i}Vr(){this.hr.forEach(t=>this.dr(t))}dr(t){this.hr=this.hr.delete(t),this.Ir=this.Ir.delete(t)}mr(t){const n=new I(new U([])),r=new Q(n,t),s=new Q(n,t+1);let i=C();return this.Ir.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(t){const n=new Q(t,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class Q{constructor(t,n){this.key=t,this.gr=n}static Pr(t,n){return I.comparator(t.key,n.key)||k(t.gr,n.gr)}static Tr(t,n){return k(t.gr,n.gr)||I.comparator(t.key,n.key)}}/**
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
 */class Zd{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new nt(Q.Pr)}checkEmpty(t){return m.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,s){const i=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Td(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.yr=this.yr.add(new Q(a.key,i)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return m.resolve(o)}lookupMutationBatch(t,n){return m.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,s=this.Sr(r),i=s<0?0:s;return m.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return m.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(t){return m.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new Q(n,0),s=new Q(n,Number.POSITIVE_INFINITY),i=[];return this.yr.forEachInRange([r,s],o=>{const a=this.wr(o.gr);i.push(a)}),m.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new nt(k);return n.forEach(s=>{const i=new Q(s,0),o=new Q(s,Number.POSITIVE_INFINITY);this.yr.forEachInRange([i,o],a=>{r=r.add(a.gr)})}),m.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,s=r.length+1;let i=r;I.isDocumentKey(i)||(i=i.child(""));const o=new Q(new I(i),0);let a=new nt(k);return this.yr.forEachWhile(u=>{const l=u.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(u.gr)),!0)},o),m.resolve(this.br(a))}br(t){const n=[];return t.forEach(r=>{const s=this.wr(r);s!==null&&n.push(s)}),n}removeMutationBatch(t,n){O(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return m.forEach(n.mutations,s=>{const i=new Q(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.yr=r})}Fn(t){}containsKey(t,n){const r=new Q(n,0),s=this.yr.firstAfterOrEqual(r);return m.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,m.resolve()}Dr(t,n){return this.Sr(t)}Sr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}wr(t){const n=this.Sr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class tm{constructor(t){this.Cr=t,this.docs=function(){return new $(I.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return m.resolve(r?r.document.mutableCopy():it.newInvalidDocument(n))}getEntries(t,n){let r=bt();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():it.newInvalidDocument(s))}),m.resolve(r)}getDocumentsMatchingQuery(t,n,r,s){let i=bt();const o=n.path,a=new I(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:l,value:{document:c}}=u.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||Uf(Ff(c),r)<=0||(s.has(c.key)||Vr(n,c))&&(i=i.insert(c.key,c.mutableCopy()))}return m.resolve(i)}getAllFromCollectionGroup(t,n,r,s){w()}vr(t,n){return m.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new em(this)}getSize(t){return m.resolve(this.size)}}class em extends Wd{constructor(t){super(),this._r=t}applyChanges(t){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this._r.addEntry(t,s)):this._r.removeEntry(r)}),m.waitFor(n)}getFromCache(t,n){return this._r.getEntry(t,n)}getAllFromCache(t,n){return this._r.getEntries(t,n)}}/**
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
 */class nm{constructor(t){this.persistence=t,this.Fr=new Me(n=>mi(n),pi),this.lastRemoteSnapshotVersion=P.min(),this.highestTargetId=0,this.Mr=0,this.Or=new vi,this.targetCount=0,this.Nr=Pe.On()}forEachTarget(t,n){return this.Fr.forEach((r,s)=>n(s)),m.resolve()}getLastRemoteSnapshotVersion(t){return m.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return m.resolve(this.Mr)}allocateTargetId(t){return this.highestTargetId=this.Nr.next(),m.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),m.resolve()}kn(t){this.Fr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Nr=new Pe(n),this.highestTargetId=n),t.sequenceNumber>this.Mr&&(this.Mr=t.sequenceNumber)}addTargetData(t,n){return this.kn(n),this.targetCount+=1,m.resolve()}updateTargetData(t,n){return this.kn(n),m.resolve()}removeTargetData(t,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,m.resolve()}removeTargets(t,n,r){let s=0;const i=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fr.delete(o),i.push(this.removeMatchingKeysForTargetId(t,a.targetId)),s++)}),m.waitFor(i).next(()=>s)}getTargetCount(t){return m.resolve(this.targetCount)}getTargetData(t,n){const r=this.Fr.get(n)||null;return m.resolve(r)}addMatchingKeys(t,n,r){return this.Or.Er(n,r),m.resolve()}removeMatchingKeys(t,n,r){this.Or.Ar(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(t,o))}),m.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.Or.Rr(n),m.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Or.mr(n);return m.resolve(r)}containsKey(t,n){return m.resolve(this.Or.containsKey(n))}}/**
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
 */class rm{constructor(t,n){this.Br={},this.overlays={},this.Lr=new ci(0),this.kr=!1,this.kr=!0,this.referenceDelegate=t(this),this.qr=new nm(this),this.indexManager=new Kd,this.remoteDocumentCache=function(s){return new tm(s)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new zd(n),this.Kr=new Yd(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new Jd,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Br[t.toKey()];return r||(r=new Zd(n,this.referenceDelegate),this.Br[t.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(t,n,r){E("MemoryPersistence","Starting transaction:",t);const s=new sm(this.Lr.next());return this.referenceDelegate.$r(),r(s).next(i=>this.referenceDelegate.Ur(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Wr(t,n){return m.or(Object.values(this.Br).map(r=>()=>r.containsKey(t,n)))}}class sm extends $f{constructor(t){super(),this.currentSequenceNumber=t}}class Ii{constructor(t){this.persistence=t,this.Gr=new vi,this.zr=null}static jr(t){return new Ii(t)}get Hr(){if(this.zr)return this.zr;throw w()}addReference(t,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),m.resolve()}removeReference(t,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),m.resolve()}markPotentiallyOrphaned(t,n){return this.Hr.add(n.toString()),m.resolve()}removeTarget(t,n){this.Gr.Rr(n.targetId).forEach(s=>this.Hr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(s=>{s.forEach(i=>this.Hr.add(i.toString()))}).next(()=>r.removeTargetData(t,n))}$r(){this.zr=new Set}Ur(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return m.forEach(this.Hr,r=>{const s=I.fromPath(r);return this.Jr(t,s).next(i=>{i||n.removeEntry(s,P.min())})}).next(()=>(this.zr=null,n.apply(t)))}updateLimboDocument(t,n){return this.Jr(t,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(t){return 0}Jr(t,n){return m.or([()=>m.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Wr(t,n)])}}/**
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
 */class wi{constructor(t,n,r,s){this.targetId=t,this.fromCache=n,this.ki=r,this.qi=s}static Qi(t,n){let r=C(),s=C();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new wi(t,n.fromCache,r,s)}}/**
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
 */class im{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class om{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(t,n){this.Gi=t,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(t,n,r,s){const i={result:null};return this.zi(t,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ji(t,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new im;return this.Hi(t,n,o).next(a=>{if(i.result=a,this.$i)return this.Ji(t,n,o,a.size)})}).next(()=>i.result)}Ji(t,n,r,s){return r.documentReadCount<this.Ui?(Ue()<=D.DEBUG&&E("QueryEngine","SDK will not create cache indexes for query:",le(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),m.resolve()):(Ue()<=D.DEBUG&&E("QueryEngine","Query:",le(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Wi*s?(Ue()<=D.DEBUG&&E("QueryEngine","The SDK decides to create cache indexes for query:",le(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,wt(n))):m.resolve())}zi(t,n){if(Io(n))return m.resolve(null);let r=wt(n);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Ss(n,null,"F"),r=wt(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(i=>{const o=C(...i);return this.Gi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(u=>{const l=this.Yi(n,a);return this.Zi(n,l,o,u.readTime)?this.zi(t,Ss(n,null,"F")):this.Xi(t,l,n,u)}))})))}ji(t,n,r,s){return Io(n)||s.isEqual(P.min())?m.resolve(null):this.Gi.getDocuments(t,r).next(i=>{const o=this.Yi(n,i);return this.Zi(n,o,r,s)?m.resolve(null):(Ue()<=D.DEBUG&&E("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),le(n)),this.Xi(t,o,n,Lf(s,-1)).next(a=>a))})}Yi(t,n){let r=new nt(Pu(t));return n.forEach((s,i)=>{Vr(t,i)&&(r=r.add(i))}),r}Zi(t,n,r,s){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Hi(t,n,r){return Ue()<=D.DEBUG&&E("QueryEngine","Using full collection scan to execute query:",le(n)),this.Gi.getDocumentsMatchingQuery(t,n,Ft.min(),r)}Xi(t,n,r,s){return this.Gi.getDocumentsMatchingQuery(t,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class am{constructor(t,n,r,s){this.persistence=t,this.es=n,this.serializer=s,this.ts=new $(k),this.ns=new Me(i=>mi(i),pi),this.rs=new Map,this.ss=t.getRemoteDocumentCache(),this.qr=t.getTargetCache(),this.Kr=t.getBundleCache(),this.os(r)}os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Xd(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.ts))}}function um(e,t,n,r){return new am(e,t,n,r)}async function Gu(e,t){const n=S(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.os(t),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let u=C();for(const l of s){o.push(l.batchId);for(const c of l.mutations)u=u.add(c.key)}for(const l of i){a.push(l.batchId);for(const c of l.mutations)u=u.add(c.key)}return n.localDocuments.getDocuments(r,u).next(l=>({_s:l,removedBatchIds:o,addedBatchIds:a}))})})}function lm(e,t){const n=S(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),i=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,u,l,c){const h=l.batch,f=h.keys();let d=m.resolve();return f.forEach(T=>{d=d.next(()=>c.getEntry(u,T)).next(y=>{const g=l.docVersions.get(T);O(g!==null),y.version.compareTo(g)<0&&(h.applyToRemoteDocument(y,l),y.isValidDocument()&&(y.setReadTime(l.commitVersion),c.addEntry(y)))})}),d.next(()=>a.mutationQueue.removeMutationBatch(u,h))}(n,r,t,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=C();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(u=u.add(a.batch.mutations[l].key));return u}(t))).next(()=>n.localDocuments.getDocuments(r,s))})}function Wu(e){const t=S(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.qr.getLastRemoteSnapshotVersion(n))}function cm(e,t){const n=S(e),r=t.snapshotVersion;let s=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});s=n.ts;const a=[];t.targetChanges.forEach((c,h)=>{const f=s.get(h);if(!f)return;a.push(n.qr.removeMatchingKeys(i,c.removedDocuments,h).next(()=>n.qr.addMatchingKeys(i,c.addedDocuments,h)));let d=f.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(h)!==null?d=d.withResumeToken(ut.EMPTY_BYTE_STRING,P.min()).withLastLimboFreeSnapshotVersion(P.min()):c.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(c.resumeToken,r)),s=s.insert(h,d),function(y,g,A){return y.resumeToken.approximateByteSize()===0||g.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:A.addedDocuments.size+A.modifiedDocuments.size+A.removedDocuments.size>0}(f,d,c)&&a.push(n.qr.updateTargetData(i,d))});let u=bt(),l=C();if(t.documentUpdates.forEach(c=>{t.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,c))}),a.push(hm(i,o,t.documentUpdates).next(c=>{u=c.us,l=c.cs})),!r.isEqual(P.min())){const c=n.qr.getLastRemoteSnapshotVersion(i).next(h=>n.qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(c)}return m.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,l)).next(()=>u)}).then(i=>(n.ts=s,i))}function hm(e,t,n){let r=C(),s=C();return n.forEach(i=>r=r.add(i)),t.getEntries(e,r).next(i=>{let o=bt();return n.forEach((a,u)=>{const l=i.get(a);u.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),u.isNoDocument()&&u.version.isEqual(P.min())?(t.removeEntry(a,u.readTime),o=o.insert(a,u)):!l.isValidDocument()||u.version.compareTo(l.version)>0||u.version.compareTo(l.version)===0&&l.hasPendingWrites?(t.addEntry(u),o=o.insert(a,u)):E("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",u.version)}),{us:o,cs:s}})}function fm(e,t){const n=S(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function dm(e,t){const n=S(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.qr.getTargetData(r,t).next(i=>i?(s=i,m.resolve(s)):n.qr.allocateTargetId(r).next(o=>(s=new kt(t,o,"TargetPurposeListen",r.currentSequenceNumber),n.qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ts.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ts=n.ts.insert(r.targetId,r),n.ns.set(t,r.targetId)),r})}async function ks(e,t,n){const r=S(e),s=r.ts.get(t),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Rn(o))throw o;E("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.ts=r.ts.remove(t),r.ns.delete(s.target)}function No(e,t,n){const r=S(e);let s=P.min(),i=C();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,l,c){const h=S(u),f=h.ns.get(c);return f!==void 0?m.resolve(h.ts.get(f)):h.qr.getTargetData(l,c)}(r,o,wt(t)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(u=>{i=u})}).next(()=>r.es.getDocumentsMatchingQuery(o,t,n?s:P.min(),n?i:C())).next(a=>(mm(r,id(t),a),{documents:a,ls:i})))}function mm(e,t,n){let r=e.rs.get(t)||P.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),e.rs.set(t,r)}class xo{constructor(){this.activeTargetIds=hd()}ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}As(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Es(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class pm{constructor(){this.eo=new xo,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.eo.ds(t),this.no[t]||"not-current"}updateQueryState(t,n,r){this.no[t]=n}removeLocalQueryTarget(t){this.eo.As(t)}isLocalQueryTarget(t){return this.eo.activeTargetIds.has(t)}clearQueryState(t){delete this.no[t]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(t){return this.eo.activeTargetIds.has(t)}start(){return this.eo=new xo,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class gm{ro(t){}shutdown(){}}/**
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
 */class Mo{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(t){this.ao.push(t)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){E("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ao)t(0)}_o(){E("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ao)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Un=null;function Zr(){return Un===null?Un=function(){return 268435456+Math.round(2147483648*Math.random())}():Un++,"0x"+Un.toString(16)}/**
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
 */const _m={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class ym{constructor(t){this.co=t.co,this.lo=t.lo}ho(t){this.Po=t}Io(t){this.To=t}onMessage(t){this.Eo=t}close(){this.lo()}send(t){this.co(t)}Ao(){this.Po()}Ro(t){this.To(t)}Vo(t){this.Eo(t)}}/**
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
 */const rt="WebChannelConnection";class Em extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.mo=r+"://"+n.host,this.fo=`projects/${s}/databases/${i}`,this.po=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get yo(){return!1}wo(n,r,s,i,o){const a=Zr(),u=this.So(n,r);E("RestConnection",`Sending RPC '${n}' ${a}:`,u,s);const l={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(l,i,o),this.Do(n,u,l,s).then(c=>(E("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw Ie("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",u,"request:",s),c})}Co(n,r,s,i,o,a){return this.wo(n,r,s,i,o)}bo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ne}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}So(n,r){const s=_m[n];return`${this.mo}/v1/${r}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Do(t,n,r,s){const i=Zr();return new Promise((o,a)=>{const u=new Pf;u.setWithCredentials(!0),u.listenOnce(Af.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Yr.NO_ERROR:const c=u.getResponseJson();E(rt,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(c)),o(c);break;case Yr.TIMEOUT:E(rt,`RPC '${t}' ${i} timed out`),a(new v(p.DEADLINE_EXCEEDED,"Request time out"));break;case Yr.HTTP_ERROR:const h=u.getStatus();if(E(rt,`RPC '${t}' ${i} failed with status:`,h,"response text:",u.getResponseText()),h>0){let f=u.getResponseJson();Array.isArray(f)&&(f=f[0]);const d=f==null?void 0:f.error;if(d&&d.status&&d.message){const T=function(g){const A=g.toLowerCase().replace(/_/g,"-");return Object.values(p).indexOf(A)>=0?A:p.UNKNOWN}(d.status);a(new v(T,d.message))}else a(new v(p.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new v(p.UNAVAILABLE,"Connection failed."));break;default:w()}}finally{E(rt,`RPC '${t}' ${i} completed.`)}});const l=JSON.stringify(s);E(rt,`RPC '${t}' ${i} sending request:`,s),u.send(n,"POST",l,r,15)})}vo(t,n,r){const s=Zr(),i=[this.mo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=If(),a=wf(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(u.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(u.useFetchStreams=!0),this.bo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const c=i.join("");E(rt,`Creating RPC '${t}' stream ${s}: ${c}`,u);const h=o.createWebChannel(c,u);let f=!1,d=!1;const T=new ym({co:g=>{d?E(rt,`Not sending because RPC '${t}' stream ${s} is closed:`,g):(f||(E(rt,`Opening RPC '${t}' stream ${s} transport.`),h.open(),f=!0),E(rt,`RPC '${t}' stream ${s} sending:`,g),h.send(g))},lo:()=>h.close()}),y=(g,A,b)=>{g.listen(A,L=>{try{b(L)}catch(W){setTimeout(()=>{throw W},0)}})};return y(h,On.EventType.OPEN,()=>{d||E(rt,`RPC '${t}' stream ${s} transport opened.`)}),y(h,On.EventType.CLOSE,()=>{d||(d=!0,E(rt,`RPC '${t}' stream ${s} transport closed`),T.Ro())}),y(h,On.EventType.ERROR,g=>{d||(d=!0,Ie(rt,`RPC '${t}' stream ${s} transport errored:`,g),T.Ro(new v(p.UNAVAILABLE,"The operation could not be completed")))}),y(h,On.EventType.MESSAGE,g=>{var A;if(!d){const b=g.data[0];O(!!b);const L=b,W=L.error||((A=L[0])===null||A===void 0?void 0:A.error);if(W){E(rt,`RPC '${t}' stream ${s} received error:`,W);const qt=W.status;let yt=function(ht){const zt=q[ht];if(zt!==void 0)return Fu(zt)}(qt),B=W.message;yt===void 0&&(yt=p.INTERNAL,B="Unknown error status: "+qt+" with message "+W.message),d=!0,T.Ro(new v(yt,B)),h.close()}else E(rt,`RPC '${t}' stream ${s} received:`,b),T.Vo(b)}}),y(a,Rf.STAT_EVENT,g=>{g.stat===ho.PROXY?E(rt,`RPC '${t}' stream ${s} detected buffering proxy`):g.stat===ho.NOPROXY&&E(rt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{T.Ao()},0),T}}function ts(){return typeof document<"u"?document:null}/**
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
 */function Nr(e){return new Dd(e,!0)}/**
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
 */class Qu{constructor(t,n,r=1e3,s=1.5,i=6e4){this.si=t,this.timerId=n,this.Fo=r,this.Mo=s,this.xo=i,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(t){this.cancel();const n=Math.floor(this.Oo+this.qo()),r=Math.max(0,Date.now()-this.Bo),s=Math.max(0,n-r);s>0&&E("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Oo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,s,()=>(this.Bo=Date.now(),t())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
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
 */class Xu{constructor(t,n,r,s,i,o,a,u){this.si=t,this.Ko=r,this.$o=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new Qu(t,n)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(t){this.t_(),this.stream.send(t)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(t,n){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,t!==4?this.zo.reset():n&&n.code===p.RESOURCE_EXHAUSTED?(Dt(n.toString()),Dt("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):n&&n.code===p.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Io(n)}r_(){}auth(){this.state=1;const t=this.i_(this.Uo),n=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Uo===n&&this.s_(r,s)},r=>{t(()=>{const s=new v(p.UNKNOWN,"Fetching auth token failed: "+r.message);return this.o_(s)})})}s_(t,n){const r=this.i_(this.Uo);this.stream=this.__(t,n),this.stream.ho(()=>{r(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(s=>{r(()=>this.o_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(t){return E("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}i_(t){return n=>{this.si.enqueueAndForget(()=>this.Uo===t?n():(E("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Tm extends Xu{constructor(t,n,r,s,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}__(t,n){return this.connection.vo("Listen",t,n)}onMessage(t){this.zo.reset();const n=Nd(this.serializer,t),r=function(i){if(!("targetChange"in i))return P.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?P.min():o.readTime?Rt(o.readTime):P.min()}(t);return this.listener.a_(n,r)}u_(t){const n={};n.database=bs(this.serializer),n.addTarget=function(i,o){let a;const u=o.target;if(a=Ps(u)?{documents:Od(i,u)}:{query:Ld(i,u)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=$u(i,o.resumeToken);const l=Cs(i,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(P.min())>0){a.readTime=or(i,o.snapshotVersion.toTimestamp());const l=Cs(i,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,t);const r=Ud(this.serializer,t);r&&(n.labels=r),this.e_(n)}c_(t){const n={};n.database=bs(this.serializer),n.removeTarget=t,this.e_(n)}}class vm extends Xu{constructor(t,n,r,s,i,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(t,n){return this.connection.vo("Write",t,n)}onMessage(t){if(O(!!t.streamToken),this.lastStreamToken=t.streamToken,this.l_){this.zo.reset();const n=Md(t.writeResults,t.commitTime),r=Rt(t.commitTime);return this.listener.I_(r,n)}return O(!t.writeResults||t.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const t={};t.database=bs(this.serializer),this.e_(t)}P_(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>xd(this.serializer,r))};this.e_(n)}}/**
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
 */class Im extends class{}{constructor(t,n,r,s){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.d_=!1}A_(){if(this.d_)throw new v(p.FAILED_PRECONDITION,"The client has already been terminated.")}wo(t,n,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.wo(t,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new v(p.UNKNOWN,s.toString())})}Co(t,n,r,s){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Co(t,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new v(p.UNKNOWN,i.toString())})}terminate(){this.d_=!0}}class wm{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(t){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.p_("Offline")))}set(t){this.S_(),this.V_=0,t==="Online"&&(this.f_=!1),this.p_(t)}p_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}y_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(Dt(n),this.f_=!1):E("OnlineStateTracker",n)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
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
 */class Am{constructor(t,n,r,s,i){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=i,this.F_.ro(o=>{r.enqueueAndForget(async()=>{ie(this)&&(E("RemoteStore","Restarting streams for network reachability change."),await async function(u){const l=S(u);l.C_.add(4),await Cn(l),l.M_.set("Unknown"),l.C_.delete(4),await xr(l)}(this))})}),this.M_=new wm(r,s)}}async function xr(e){if(ie(e))for(const t of e.v_)await t(!0)}async function Cn(e){for(const t of e.v_)await t(!1)}function Yu(e,t){const n=S(e);n.D_.has(t.targetId)||(n.D_.set(t.targetId,t),Pi(n)?Ri(n):Oe(n).Ho()&&Ai(n,t))}function Ju(e,t){const n=S(e),r=Oe(n);n.D_.delete(t),r.Ho()&&Zu(n,t),n.D_.size===0&&(r.Ho()?r.Zo():ie(n)&&n.M_.set("Unknown"))}function Ai(e,t){if(e.x_.Oe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(P.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Oe(e).u_(t)}function Zu(e,t){e.x_.Oe(t),Oe(e).c_(t)}function Ri(e){e.x_=new Pd({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),_t:t=>e.D_.get(t)||null,nt:()=>e.datastore.serializer.databaseId}),Oe(e).start(),e.M_.g_()}function Pi(e){return ie(e)&&!Oe(e).jo()&&e.D_.size>0}function ie(e){return S(e).C_.size===0}function tl(e){e.x_=void 0}async function Rm(e){e.D_.forEach((t,n)=>{Ai(e,t)})}async function Pm(e,t){tl(e),Pi(e)?(e.M_.w_(t),Ri(e)):e.M_.set("Unknown")}async function Sm(e,t,n){if(e.M_.set("Online"),t instanceof Bu&&t.state===2&&t.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.D_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.D_.delete(a),s.x_.removeTarget(a))}(e,t)}catch(r){E("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await ar(e,r)}else if(t instanceof qn?e.x_.$e(t):t instanceof Uu?e.x_.Je(t):e.x_.Ge(t),!n.isEqual(P.min()))try{const r=await Wu(e.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.x_.it(o);return a.targetChanges.forEach((u,l)=>{if(u.resumeToken.approximateByteSize()>0){const c=i.D_.get(l);c&&i.D_.set(l,c.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,l)=>{const c=i.D_.get(u);if(!c)return;i.D_.set(u,c.withResumeToken(ut.EMPTY_BYTE_STRING,c.snapshotVersion)),Zu(i,u);const h=new kt(c.target,u,l,c.sequenceNumber);Ai(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(e,n)}catch(r){E("RemoteStore","Failed to raise snapshot:",r),await ar(e,r)}}async function ar(e,t,n){if(!Rn(t))throw t;e.C_.add(1),await Cn(e),e.M_.set("Offline"),n||(n=()=>Wu(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{E("RemoteStore","Retrying IndexedDB access"),await n(),e.C_.delete(1),await xr(e)})}function el(e,t){return t().catch(n=>ar(e,n,t))}async function Mr(e){const t=S(e),n=Bt(t);let r=t.b_.length>0?t.b_[t.b_.length-1].batchId:-1;for(;Cm(t);)try{const s=await fm(t.localStore,r);if(s===null){t.b_.length===0&&n.Zo();break}r=s.batchId,Vm(t,s)}catch(s){await ar(t,s)}nl(t)&&rl(t)}function Cm(e){return ie(e)&&e.b_.length<10}function Vm(e,t){e.b_.push(t);const n=Bt(e);n.Ho()&&n.h_&&n.P_(t.mutations)}function nl(e){return ie(e)&&!Bt(e).jo()&&e.b_.length>0}function rl(e){Bt(e).start()}async function Dm(e){Bt(e).E_()}async function bm(e){const t=Bt(e);for(const n of e.b_)t.P_(n.mutations)}async function km(e,t,n){const r=e.b_.shift(),s=yi.from(r,t,n);await el(e,()=>e.remoteSyncer.applySuccessfulWrite(s)),await Mr(e)}async function Nm(e,t){t&&Bt(e).h_&&await async function(r,s){if(function(o){return wd(o)&&o!==p.ABORTED}(s.code)){const i=r.b_.shift();Bt(r).Yo(),await el(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Mr(r)}}(e,t),nl(e)&&rl(e)}async function Oo(e,t){const n=S(e);n.asyncQueue.verifyOperationInProgress(),E("RemoteStore","RemoteStore received new credentials");const r=ie(n);n.C_.add(3),await Cn(n),r&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.C_.delete(3),await xr(n)}async function xm(e,t){const n=S(e);t?(n.C_.delete(2),await xr(n)):t||(n.C_.add(2),await Cn(n),n.M_.set("Unknown"))}function Oe(e){return e.O_||(e.O_=function(n,r,s){const i=S(n);return i.A_(),new Tm(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{ho:Rm.bind(null,e),Io:Pm.bind(null,e),a_:Sm.bind(null,e)}),e.v_.push(async t=>{t?(e.O_.Yo(),Pi(e)?Ri(e):e.M_.set("Unknown")):(await e.O_.stop(),tl(e))})),e.O_}function Bt(e){return e.N_||(e.N_=function(n,r,s){const i=S(n);return i.A_(),new vm(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{ho:Dm.bind(null,e),Io:Nm.bind(null,e),T_:bm.bind(null,e),I_:km.bind(null,e)}),e.v_.push(async t=>{t?(e.N_.Yo(),await Mr(e)):(await e.N_.stop(),e.b_.length>0&&(E("RemoteStore",`Stopping write stream with ${e.b_.length} pending writes`),e.b_=[]))})),e.N_}/**
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
 */class Si{constructor(t,n,r,s,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Mt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,s,i){const o=Date.now()+r,a=new Si(t,n,o,s,i);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new v(p.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ci(e,t){if(Dt("AsyncQueue",`${t}: ${e}`),Rn(e))return new v(p.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class ye{constructor(t){this.comparator=t?(n,r)=>t(n,r)||I.comparator(n.key,r.key):(n,r)=>I.comparator(n.key,r.key),this.keyedMap=je(),this.sortedSet=new $(this.comparator)}static emptySet(t){return new ye(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof ye)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new ye;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
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
 */class Lo{constructor(){this.B_=new $(I.comparator)}track(t){const n=t.doc.key,r=this.B_.get(n);r?t.type!==0&&r.type===3?this.B_=this.B_.insert(n,t):t.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.B_=this.B_.remove(n):t.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:t.doc}):w():this.B_=this.B_.insert(n,t)}L_(){const t=[];return this.B_.inorderTraversal((n,r)=>{t.push(r)}),t}}class Se{constructor(t,n,r,s,i,o,a,u,l){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=l}static fromInitialDocuments(t,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Se(t,n,ye.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Cr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class Mm{constructor(){this.k_=void 0,this.listeners=[]}}class Om{constructor(){this.queries=new Me(t=>Ru(t),Cr),this.onlineState="Unknown",this.q_=new Set}}async function sl(e,t){const n=S(e),r=t.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new Mm),s)try{i.k_=await n.onListen(r)}catch(o){const a=Ci(o,`Initialization of query '${le(t.query)}' failed`);return void t.onError(a)}n.queries.set(r,i),i.listeners.push(t),t.Q_(n.onlineState),i.k_&&t.K_(i.k_)&&Vi(n)}async function il(e,t){const n=S(e),r=t.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(t);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function Lm(e,t){const n=S(e);let r=!1;for(const s of t){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.K_(s)&&(r=!0);o.k_=s}}r&&Vi(n)}function Fm(e,t,n){const r=S(e),s=r.queries.get(t);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(t)}function Vi(e){e.q_.forEach(t=>{t.next()})}class ol{constructor(t,n,r){this.query=t,this.U_=n,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=r||{}}K_(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new Se(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.W_?this.z_(t)&&(this.U_.next(t),n=!0):this.j_(t,this.onlineState)&&(this.H_(t),n=!0),this.G_=t,n}onError(t){this.U_.error(t)}Q_(t){this.onlineState=t;let n=!1;return this.G_&&!this.W_&&this.j_(this.G_,t)&&(this.H_(this.G_),n=!0),n}j_(t,n){if(!t.fromCache)return!0;const r=n!=="Offline";return(!this.options.J_||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}z_(t){if(t.docChanges.length>0)return!0;const n=this.G_&&this.G_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}H_(t){t=Se.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.W_=!0,this.U_.next(t)}}/**
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
 */class al{constructor(t){this.key=t}}class ul{constructor(t){this.key=t}}class Um{constructor(t,n){this.query=t,this.ia=n,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=C(),this.mutatedKeys=C(),this._a=Pu(t),this.aa=new ye(this._a)}get ua(){return this.ia}ca(t,n){const r=n?n.la:new Lo,s=n?n.aa:this.aa;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((c,h)=>{const f=s.get(c),d=Vr(this.query,h)?h:null,T=!!f&&this.mutatedKeys.has(f.key),y=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let g=!1;f&&d?f.data.isEqual(d.data)?T!==y&&(r.track({type:3,doc:d}),g=!0):this.ha(f,d)||(r.track({type:2,doc:d}),g=!0,(u&&this._a(d,u)>0||l&&this._a(d,l)<0)&&(a=!0)):!f&&d?(r.track({type:0,doc:d}),g=!0):f&&!d&&(r.track({type:1,doc:f}),g=!0,(u||l)&&(a=!0)),g&&(d?(o=o.add(d),i=y?i.add(c):i.delete(c)):(o=o.delete(c),i=i.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),i=i.delete(c.key),r.track({type:1,doc:c})}return{aa:o,la:r,Zi:a,mutatedKeys:i}}ha(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r,s){const i=this.aa;this.aa=t.aa,this.mutatedKeys=t.mutatedKeys;const o=t.la.L_();o.sort((c,h)=>function(d,T){const y=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return w()}};return y(d)-y(T)}(c.type,h.type)||this._a(c.doc,h.doc)),this.Pa(r),s=s!=null&&s;const a=n&&!s?this.Ia():[],u=this.oa.size===0&&this.current&&!s?1:0,l=u!==this.sa;return this.sa=u,o.length!==0||l?{snapshot:new Se(this.query,t.aa,i,o,t.mutatedKeys,u===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ta:a}:{Ta:a}}Q_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new Lo,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(t){return!this.ia.has(t)&&!!this.aa.has(t)&&!this.aa.get(t).hasLocalMutations}Pa(t){t&&(t.addedDocuments.forEach(n=>this.ia=this.ia.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.ia=this.ia.delete(n)),this.current=t.current)}Ia(){if(!this.current)return[];const t=this.oa;this.oa=C(),this.aa.forEach(r=>{this.Ea(r.key)&&(this.oa=this.oa.add(r.key))});const n=[];return t.forEach(r=>{this.oa.has(r)||n.push(new ul(r))}),this.oa.forEach(r=>{t.has(r)||n.push(new al(r))}),n}da(t){this.ia=t.ls,this.oa=C();const n=this.ca(t.documents);return this.applyChanges(n,!0)}Aa(){return Se.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class Bm{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class $m{constructor(t){this.key=t,this.Ra=!1}}class jm{constructor(t,n,r,s,i,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new Me(a=>Ru(a),Cr),this.fa=new Map,this.ga=new Set,this.pa=new $(I.comparator),this.ya=new Map,this.wa=new vi,this.Sa={},this.ba=new Map,this.Da=Pe.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function qm(e,t){const n=Zm(e);let r,s;const i=n.ma.get(t);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Aa();else{const o=await dm(n.localStore,wt(t)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await zm(n,t,r,a==="current",o.resumeToken),n.isPrimaryClient&&Yu(n.remoteStore,o)}return s}async function zm(e,t,n,r,s){e.va=(h,f,d)=>async function(y,g,A,b){let L=g.view.ca(A);L.Zi&&(L=await No(y.localStore,g.query,!1).then(({documents:B})=>g.view.ca(B,L)));const W=b&&b.targetChanges.get(g.targetId),qt=b&&b.targetMismatches.get(g.targetId)!=null,yt=g.view.applyChanges(L,y.isPrimaryClient,W,qt);return Uo(y,g.targetId,yt.Ta),yt.snapshot}(e,h,f,d);const i=await No(e.localStore,t,!0),o=new Um(t,i.ls),a=o.ca(i.documents),u=Sn.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",s),l=o.applyChanges(a,e.isPrimaryClient,u);Uo(e,n,l.Ta);const c=new Bm(t,n,o);return e.ma.set(t,c),e.fa.has(n)?e.fa.get(n).push(t):e.fa.set(n,[t]),l.snapshot}async function Hm(e,t){const n=S(e),r=n.ma.get(t),s=n.fa.get(r.targetId);if(s.length>1)return n.fa.set(r.targetId,s.filter(i=>!Cr(i,t))),void n.ma.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await ks(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Ju(n.remoteStore,r.targetId),Ns(n,r.targetId)}).catch(An)):(Ns(n,r.targetId),await ks(n.localStore,r.targetId,!0))}async function Km(e,t,n){const r=tp(e);try{const s=await function(o,a){const u=S(o),l=G.now(),c=a.reduce((d,T)=>d.add(T.key),C());let h,f;return u.persistence.runTransaction("Locally write mutations","readwrite",d=>{let T=bt(),y=C();return u.ss.getEntries(d,c).next(g=>{T=g,T.forEach((A,b)=>{b.isValidDocument()||(y=y.add(A))})}).next(()=>u.localDocuments.getOverlayedDocuments(d,T)).next(g=>{h=g;const A=[];for(const b of a){const L=yd(b,h.get(b.key).overlayedDocument);L!=null&&A.push(new se(b.key,L,yu(L.value.mapValue),At.exists(!0)))}return u.mutationQueue.addMutationBatch(d,l,A,a)}).next(g=>{f=g;const A=g.applyToLocalDocumentSet(h,y);return u.documentOverlayCache.saveOverlays(d,g.batchId,A)})}).then(()=>({batchId:f.batchId,changes:Cu(h)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,u){let l=o.Sa[o.currentUser.toKey()];l||(l=new $(k)),l=l.insert(a,u),o.Sa[o.currentUser.toKey()]=l}(r,s.batchId,n),await Vn(r,s.changes),await Mr(r.remoteStore)}catch(s){const i=Ci(s,"Failed to persist write");n.reject(i)}}async function ll(e,t){const n=S(e);try{const r=await cm(n.localStore,t);t.targetChanges.forEach((s,i)=>{const o=n.ya.get(i);o&&(O(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Ra=!0:s.modifiedDocuments.size>0?O(o.Ra):s.removedDocuments.size>0&&(O(o.Ra),o.Ra=!1))}),await Vn(n,r,t)}catch(r){await An(r)}}function Fo(e,t,n){const r=S(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ma.forEach((i,o)=>{const a=o.view.Q_(t);a.snapshot&&s.push(a.snapshot)}),function(o,a){const u=S(o);u.onlineState=a;let l=!1;u.queries.forEach((c,h)=>{for(const f of h.listeners)f.Q_(a)&&(l=!0)}),l&&Vi(u)}(r.eventManager,t),s.length&&r.Va.a_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Gm(e,t,n){const r=S(e);r.sharedClientState.updateQueryState(t,"rejected",n);const s=r.ya.get(t),i=s&&s.key;if(i){let o=new $(I.comparator);o=o.insert(i,it.newNoDocument(i,P.min()));const a=C().add(i),u=new kr(P.min(),new Map,new $(k),o,a);await ll(r,u),r.pa=r.pa.remove(i),r.ya.delete(t),Di(r)}else await ks(r.localStore,t,!1).then(()=>Ns(r,t,n)).catch(An)}async function Wm(e,t){const n=S(e),r=t.batch.batchId;try{const s=await lm(n.localStore,t);hl(n,r,null),cl(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Vn(n,s)}catch(s){await An(s)}}async function Qm(e,t,n){const r=S(e);try{const s=await function(o,a){const u=S(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return u.mutationQueue.lookupMutationBatch(l,a).next(h=>(O(h!==null),c=h.keys(),u.mutationQueue.removeMutationBatch(l,h))).next(()=>u.mutationQueue.performConsistencyCheck(l)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(l,c,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,c)).next(()=>u.localDocuments.getDocuments(l,c))})}(r.localStore,t);hl(r,t,n),cl(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Vn(r,s)}catch(s){await An(s)}}function cl(e,t){(e.ba.get(t)||[]).forEach(n=>{n.resolve()}),e.ba.delete(t)}function hl(e,t,n){const r=S(e);let s=r.Sa[r.currentUser.toKey()];if(s){const i=s.get(t);i&&(n?i.reject(n):i.resolve(),s=s.remove(t)),r.Sa[r.currentUser.toKey()]=s}}function Ns(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.fa.get(t))e.ma.delete(r),n&&e.Va.Fa(r,n);e.fa.delete(t),e.isPrimaryClient&&e.wa.Rr(t).forEach(r=>{e.wa.containsKey(r)||fl(e,r)})}function fl(e,t){e.ga.delete(t.path.canonicalString());const n=e.pa.get(t);n!==null&&(Ju(e.remoteStore,n),e.pa=e.pa.remove(t),e.ya.delete(n),Di(e))}function Uo(e,t,n){for(const r of n)r instanceof al?(e.wa.addReference(r.key,t),Xm(e,r)):r instanceof ul?(E("SyncEngine","Document no longer in limbo: "+r.key),e.wa.removeReference(r.key,t),e.wa.containsKey(r.key)||fl(e,r.key)):w()}function Xm(e,t){const n=t.key,r=n.path.canonicalString();e.pa.get(n)||e.ga.has(r)||(E("SyncEngine","New document in limbo: "+n),e.ga.add(r),Di(e))}function Di(e){for(;e.ga.size>0&&e.pa.size<e.maxConcurrentLimboResolutions;){const t=e.ga.values().next().value;e.ga.delete(t);const n=new I(U.fromString(t)),r=e.Da.next();e.ya.set(r,new $m(n)),e.pa=e.pa.insert(n,r),Yu(e.remoteStore,new kt(wt(gi(n.path)),r,"TargetPurposeLimboResolution",ci._e))}}async function Vn(e,t,n){const r=S(e),s=[],i=[],o=[];r.ma.isEmpty()||(r.ma.forEach((a,u)=>{o.push(r.va(u,t,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(u.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const c=wi.Qi(u.targetId,l);i.push(c)}}))}),await Promise.all(o),r.Va.a_(s),await async function(u,l){const c=S(u);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>m.forEach(l,f=>m.forEach(f.ki,d=>c.persistence.referenceDelegate.addReference(h,f.targetId,d)).next(()=>m.forEach(f.qi,d=>c.persistence.referenceDelegate.removeReference(h,f.targetId,d)))))}catch(h){if(!Rn(h))throw h;E("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const f=h.targetId;if(!h.fromCache){const d=c.ts.get(f),T=d.snapshotVersion,y=d.withLastLimboFreeSnapshotVersion(T);c.ts=c.ts.insert(f,y)}}}(r.localStore,i))}async function Ym(e,t){const n=S(e);if(!n.currentUser.isEqual(t)){E("SyncEngine","User change. New user:",t.toKey());const r=await Gu(n.localStore,t);n.currentUser=t,function(i,o){i.ba.forEach(a=>{a.forEach(u=>{u.reject(new v(p.CANCELLED,o))})}),i.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Vn(n,r._s)}}function Jm(e,t){const n=S(e),r=n.ya.get(t);if(r&&r.Ra)return C().add(r.key);{let s=C();const i=n.fa.get(t);if(!i)return s;for(const o of i){const a=n.ma.get(o);s=s.unionWith(a.view.ua)}return s}}function Zm(e){const t=S(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=ll.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Jm.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Gm.bind(null,t),t.Va.a_=Lm.bind(null,t.eventManager),t.Va.Fa=Fm.bind(null,t.eventManager),t}function tp(e){const t=S(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Wm.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Qm.bind(null,t),t}class Bo{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Nr(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return um(this.persistence,new om,t.initialUser,this.serializer)}createPersistence(t){return new rm(Ii.jr,this.serializer)}createSharedClientState(t){return new pm}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ep{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Fo(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ym.bind(null,this.syncEngine),await xm(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Om}()}createDatastore(t){const n=Nr(t.databaseInfo.databaseId),r=function(i){return new Em(i)}(t.databaseInfo);return function(i,o,a,u){return new Im(i,o,a,u)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,s,i,o,a){return new Am(r,s,i,o,a)}(this.localStore,this.datastore,t.asyncQueue,n=>Fo(this.syncEngine,n,0),function(){return Mo.D()?new Mo:new gm}())}createSyncEngine(t,n){return function(s,i,o,a,u,l,c){const h=new jm(s,i,o,a,u,l);return c&&(h.Ca=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=S(n);E("RemoteStore","RemoteStore shutting down."),r.C_.add(5),await Cn(r),r.F_.shutdown(),r.M_.set("Unknown")}(this.remoteStore)}}/**
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
 *//**
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
 */class dl{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Oa(this.observer.next,t)}error(t){this.observer.error?this.Oa(this.observer.error,t):Dt("Uncaught Error in snapshot listener:",t.toString())}Na(){this.muted=!0}Oa(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
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
 */class np{constructor(t,n,r,s){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=st.UNAUTHENTICATED,this.clientId=pu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{E("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(E("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new v(p.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Mt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=Ci(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function es(e,t){e.asyncQueue.verifyOperationInProgress(),E("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Gu(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function $o(e,t){e.asyncQueue.verifyOperationInProgress();const n=await sp(e);E("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(s=>Oo(t.remoteStore,s)),e.setAppCheckTokenChangeListener((s,i)=>Oo(t.remoteStore,i)),e._onlineComponents=t}function rp(e){return e.name==="FirebaseError"?e.code===p.FAILED_PRECONDITION||e.code===p.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function sp(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){E("FirestoreClient","Using user provided OfflineComponentProvider");try{await es(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!rp(n))throw n;Ie("Error using user provided cache. Falling back to memory cache: "+n),await es(e,new Bo)}}else E("FirestoreClient","Using default OfflineComponentProvider"),await es(e,new Bo);return e._offlineComponents}async function ml(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(E("FirestoreClient","Using user provided OnlineComponentProvider"),await $o(e,e._uninitializedComponentsProvider._online)):(E("FirestoreClient","Using default OnlineComponentProvider"),await $o(e,new ep))),e._onlineComponents}function ip(e){return ml(e).then(t=>t.syncEngine)}async function xs(e){const t=await ml(e),n=t.eventManager;return n.onListen=qm.bind(null,t.syncEngine),n.onUnlisten=Hm.bind(null,t.syncEngine),n}function op(e,t,n={}){const r=new Mt;return e.asyncQueue.enqueueAndForget(async()=>function(i,o,a,u,l){const c=new dl({next:f=>{o.enqueueAndForget(()=>il(i,h)),f.fromCache&&u.source==="server"?l.reject(new v(p.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(f)},error:f=>l.reject(f)}),h=new ol(a,c,{includeMetadataChanges:!0,J_:!0});return sl(i,h)}(await xs(e),e.asyncQueue,t,n,r)),r.promise}/**
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
 */function pl(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */const jo=new Map;/**
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
 */function gl(e,t,n){if(!n)throw new v(p.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function ap(e,t,n,r){if(t===!0&&r===!0)throw new v(p.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function qo(e){if(!I.isDocumentKey(e))throw new v(p.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function zo(e){if(I.isDocumentKey(e))throw new v(p.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function bi(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":w()}function Ot(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new v(p.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=bi(e);throw new v(p.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */class Ho{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new v(p.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new v(p.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}ap("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=pl((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new v(p.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new v(p.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new v(p.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Or{constructor(t,n,r,s){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ho({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new v(p.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new v(p.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ho(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Cf;switch(r.type){case"firstParty":return new kf(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new v(p.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=jo.get(n);r&&(E("ComponentProvider","Removing Datastore"),jo.delete(n),r.terminate())}(this),Promise.resolve()}}function up(e,t,n,r={}){var s;const i=(e=Ot(e,Or))._getSettings(),o=`${t}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Ie("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=st.MOCK_USER;else{a=ic(r.mockUserToken,(s=e._app)===null||s===void 0?void 0:s.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new v(p.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new st(l)}e._authCredentials=new Vf(new mu(a,u))}}/**
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
 */class Dn{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Dn(this.firestore,t,this._query)}}class mt{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Lt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new mt(this.firestore,t,this._key)}}class Lt extends Dn{constructor(t,n,r){super(t,n,gi(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new mt(this.firestore,null,new I(t))}withConverter(t){return new Lt(this.firestore,t,this._path)}}function ki(e,t,...n){if(e=Te(e),gl("collection","path",t),e instanceof Or){const r=U.fromString(t,...n);return zo(r),new Lt(e,null,r)}{if(!(e instanceof mt||e instanceof Lt))throw new v(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(U.fromString(t,...n));return zo(r),new Lt(e.firestore,null,r)}}function _l(e,t,...n){if(e=Te(e),arguments.length===1&&(t=pu.newId()),gl("doc","path",t),e instanceof Or){const r=U.fromString(t,...n);return qo(r),new mt(e,null,new I(r))}{if(!(e instanceof mt||e instanceof Lt))throw new v(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(U.fromString(t,...n));return qo(r),new mt(e.firestore,e instanceof Lt?e.converter:null,new I(r))}}/**
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
 */class lp{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new Qu(this,"async_queue_retry"),this.iu=()=>{const n=ts();n&&E("AsyncQueue","Visibility state changed to "+n.visibilityState),this.zo.Qo()};const t=ts();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.su(),this.ou(t)}enterRestrictedMode(t){if(!this.Za){this.Za=!0,this.nu=t||!1;const n=ts();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.iu)}}enqueue(t){if(this.su(),this.Za)return new Promise(()=>{});const n=new Mt;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Ya.push(t),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(t){if(!Rn(t))throw t;E("AsyncQueue","Operation failed with retryable error: "+t)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(t){const n=this.Ja.then(()=>(this.tu=!0,t().catch(r=>{this.eu=r,this.tu=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Dt("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.tu=!1,r))));return this.Ja=n,n}enqueueAfterDelay(t,n,r){this.su(),this.ru.indexOf(t)>-1&&(n=0);const s=Si.createAndSchedule(this,t,n,r,i=>this.au(i));return this.Xa.push(s),s}su(){this.eu&&w()}verifyOperationInProgress(){}async uu(){let t;do t=this.Ja,await t;while(t!==this.Ja)}cu(t){for(const n of this.Xa)if(n.timerId===t)return!0;return!1}lu(t){return this.uu().then(()=>{this.Xa.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Xa)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.uu()})}hu(t){this.ru.push(t)}au(t){const n=this.Xa.indexOf(t);this.Xa.splice(n,1)}}function Ko(e){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(e,["next","error","complete"])}class Ce extends Or{constructor(t,n,r,s){super(t,n,r,s),this.type="firestore",this._queue=function(){return new lp}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||yl(this),this._firestoreClient.terminate()}}function cp(e,t){const n=typeof e=="object"?e:lh(),r=typeof e=="string"?e:t||"(default)",s=ih(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=rc("firestore");i&&up(s,...i)}return s}function Ni(e){return e._firestoreClient||yl(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function yl(e){var t,n,r;const s=e._freezeSettings(),i=function(a,u,l,c){return new zf(a,u,l,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,pl(c.experimentalLongPollingOptions),c.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,s);e._firestoreClient=new np(e._authCredentials,e._appCheckCredentials,e._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class Ve{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ve(ut.fromBase64String(t))}catch(n){throw new v(p.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Ve(ut.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class xi{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new v(p.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new tt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class El{constructor(t){this._methodName=t}}/**
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
 */class Mi{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new v(p.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new v(p.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return k(this._lat,t._lat)||k(this._long,t._long)}}/**
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
 */const hp=/^__.*__$/;class fp{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new se(t,this.data,this.fieldMask,n,this.fieldTransforms):new Pn(t,this.data,n,this.fieldTransforms)}}function Tl(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw w()}}class Oi{constructor(t,n,r,s,i,o){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Pu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(t){return new Oi(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.Tu({path:r,du:!1});return s.Au(t),s}Ru(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.Tu({path:r,du:!1});return s.Pu(),s}Vu(t){return this.Tu({path:void 0,du:!0})}mu(t){return ur(t,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Pu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Au(this.path.get(t))}Au(t){if(t.length===0)throw this.mu("Document fields must not be empty");if(Tl(this.Iu)&&hp.test(t))throw this.mu('Document fields cannot begin and end with "__"')}}class dp{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||Nr(t)}pu(t,n,r,s=!1){return new Oi({Iu:t,methodName:n,gu:r,path:tt.emptyPath(),du:!1,fu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function mp(e){const t=e._freezeSettings(),n=Nr(e._databaseId);return new dp(e._databaseId,!!t.ignoreUndefinedProperties,n)}function pp(e,t,n,r,s,i={}){const o=e.pu(i.merge||i.mergeFields?2:0,t,n,s);Al("Data must be an object, but it was:",o,r);const a=Il(r,o);let u,l;if(i.merge)u=new gt(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const c=[];for(const h of i.mergeFields){const f=gp(t,h,n);if(!o.contains(f))throw new v(p.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);yp(c,f)||c.push(f)}u=new gt(c),l=o.fieldTransforms.filter(h=>u.covers(h.field))}else u=null,l=o.fieldTransforms;return new fp(new dt(a),u,l)}function vl(e,t){if(wl(e=Te(e)))return Al("Unsupported field value:",t,e),Il(e,t);if(e instanceof El)return function(r,s){if(!Tl(s.Iu))throw s.mu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.mu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.du&&t.Iu!==4)throw t.mu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let u=vl(a,s.Vu(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(e,t)}return function(r,s){if((r=Te(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return fd(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=G.fromDate(r);return{timestampValue:or(s.serializer,i)}}if(r instanceof G){const i=new G(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:or(s.serializer,i)}}if(r instanceof Mi)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ve)return{bytesValue:$u(s.serializer,r._byteString)};if(r instanceof mt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ti(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.mu(`Unsupported field value: ${bi(r)}`)}(e,t)}function Il(e,t){const n={};return gu(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):xe(e,(r,s)=>{const i=vl(s,t.Eu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function wl(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof G||e instanceof Mi||e instanceof Ve||e instanceof mt||e instanceof El)}function Al(e,t,n){if(!wl(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=bi(n);throw r==="an object"?t.mu(e+" a custom object"):t.mu(e+" "+r)}}function gp(e,t,n){if((t=Te(t))instanceof xi)return t._internalPath;if(typeof t=="string")return Rl(e,t);throw ur("Field path arguments must be of type string or ",e,!1,void 0,n)}const _p=new RegExp("[~\\*/\\[\\]]");function Rl(e,t,n){if(t.search(_p)>=0)throw ur(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new xi(...t.split("."))._internalPath}catch{throw ur(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function ur(e,t,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new v(p.INVALID_ARGUMENT,a+e+u)}function yp(e,t){return e.some(n=>n.isEqual(t))}/**
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
 */class Pl{constructor(t,n,r,s,i){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new mt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Ep(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(Sl("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Ep extends Pl{data(){return super.data()}}function Sl(e,t){return typeof t=="string"?Rl(e,t):t instanceof xi?t._internalPath:t._delegate._internalPath}/**
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
 */function Cl(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new v(p.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Tp{convertValue(t,n="none"){switch(ee(t)){case 0:return null;case 1:return t.booleanValue;case 2:return z(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(te(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw w()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return xe(t,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(t){return new Mi(z(t.latitude),z(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=fi(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(cn(t));default:return null}}convertTimestamp(t){const n=Ut(t);return new G(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=U.fromString(t);O(Ku(r));const s=new hn(r.get(1),r.get(3)),i=new I(r.popFirst(5));return s.isEqual(n)||Dt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function vp(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}/**
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
 */class ze{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Vl extends Pl{constructor(t,n,r,s,i,o){super(t,n,r,s,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new zn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(Sl("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class zn extends Vl{data(t={}){return super.data(t)}}class Dl{constructor(t,n,r,s){this._firestore=t,this._userDataWriter=n,this._snapshot=s,this.metadata=new ze(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new zn(this._firestore,this._userDataWriter,r.key,r,new ze(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new v(p.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const u=new zn(s._firestore,s._userDataWriter,a.doc.key,a.doc,new ze(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const u=new zn(s._firestore,s._userDataWriter,a.doc.key,a.doc,new ze(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,c=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:Ip(a.type),doc:u,oldIndex:l,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Ip(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return w()}}class Li extends Tp{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ve(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new mt(this.firestore,null,n)}}function wp(e){e=Ot(e,Dn);const t=Ot(e.firestore,Ce),n=Ni(t),r=new Li(t);return Cl(e._query),op(n,e._query).then(s=>new Dl(t,r,e,s))}function Ap(e){return bl(Ot(e.firestore,Ce),[new _i(e._key,At.none())])}function Rp(e,t){const n=Ot(e.firestore,Ce),r=_l(e),s=vp(e.converter,t);return bl(n,[pp(mp(e.firestore),"addDoc",r._key,s,e.converter!==null,{}).toMutation(r._key,At.exists(!1))]).then(()=>r)}function Pp(e,...t){var n,r,s;e=Te(e);let i={includeMetadataChanges:!1},o=0;typeof t[o]!="object"||Ko(t[o])||(i=t[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(Ko(t[o])){const h=t[o];t[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),t[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),t[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let u,l,c;if(e instanceof mt)l=Ot(e.firestore,Ce),c=gi(e._key.path),u={next:h=>{t[o]&&t[o](Sp(l,e,h))},error:t[o+1],complete:t[o+2]};else{const h=Ot(e,Dn);l=Ot(h.firestore,Ce),c=h._query;const f=new Li(l);u={next:d=>{t[o]&&t[o](new Dl(l,f,h,d))},error:t[o+1],complete:t[o+2]},Cl(e._query)}return function(f,d,T,y){const g=new dl(y),A=new ol(d,g,T);return f.asyncQueue.enqueueAndForget(async()=>sl(await xs(f),A)),()=>{g.Na(),f.asyncQueue.enqueueAndForget(async()=>il(await xs(f),A))}}(Ni(l),c,a,u)}function bl(e,t){return function(r,s){const i=new Mt;return r.asyncQueue.enqueueAndForget(async()=>Km(await ip(r),s,i)),i.promise}(Ni(e),t)}function Sp(e,t,n){const r=n.docs.get(t._key),s=new Li(e);return new Vl(e,s,t._key,r,new ze(n.hasPendingWrites,n.fromCache),t.converter)}(function(t,n=!0){(function(s){Ne=s})(uh),Wn(new Je("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new Ce(new Df(r.getProvider("auth-internal")),new xf(r.getProvider("app-check-internal")),function(l,c){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new v(p.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new hn(l.options.projectId,c)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),pe(fo,"4.4.0",t),pe(fo,"4.4.0","esm2017")})();const Cp={apiKey:"AIzaSyBdrgGwW9hcM6mVwEXCAvUW57YjbGEdv6A",authDomain:"batch11-4b66d.firebaseapp.com",projectId:"batch11-4b66d",storageBucket:"batch11-4b66d.appspot.com",messagingSenderId:"31040026090",appId:"1:31040026090:web:1496704abfce15ae67ae93"},Vp=ua(Cp),Lr=cp(Vp);async function Dp(){let e=ki(Lr,"/data_message"),t=await wp(e),n=[];return t.forEach(r=>{n.push({id:r.id,...r.data()})}),n}function bp(e){let t,n,r,s,i,o,a,u,l,c,h,f,d,T,y,g,A,b;return{c(){t=H("div"),n=H("form"),r=H("div"),s=H("label"),s.textContent="fullname",i=Et(),o=H("input"),a=Et(),u=H("label"),u.textContent="Message",l=Et(),c=H("textarea"),h=Et(),f=H("div"),d=H("button"),d.textContent="Cancel",T=Et(),y=H("button"),y.textContent="Submit",M(s,"for","fullname"),M(o,"type","text"),M(o,"id","fullname"),M(o,"class","border border-gray-500 p-2 rounded-md"),M(u,"for","message"),M(c,"id","message"),M(c,"class","border border-gray-500 p-2 rounded-md"),M(d,"type","button"),M(d,"class","w-[80px] h-[40px] bg-gray-400 rounded-md"),M(y,"type","submit"),M(y,"class","w-[80px] h-[40px] bg-orange-400 rounded-md"),M(f,"class","flex gap-2 mt-3 w-full justify-end"),M(r,"class","flex flex-col w-full gap-4 p-2"),M(n,"class","w-[250px] h-[350px] bg-white rounded-md"),M(t,"class",g=`${e[2]?"hidden":"flex"} w-screen h-screen bg-black/20 fixed  justify-center items-center z-[200] top-0 left-0`)},m(L,W){lr(L,t,W),x(t,n),x(n,r),x(r,s),x(r,i),x(r,o),bn(o,e[0]),x(r,a),x(r,u),x(r,l),x(r,c),bn(c,e[1]),x(r,h),x(r,f),x(f,d),x(f,T),x(f,y),A||(b=[fe(o,"input",e[5]),fe(c,"input",e[6]),fe(d,"click",e[4]),fe(n,"submit",e[3])],A=!0)},p(L,[W]){W&1&&o.value!==L[0]&&bn(o,L[0]),W&2&&bn(c,L[1]),W&4&&g!==(g=`${L[2]?"hidden":"flex"} w-screen h-screen bg-black/20 fixed  justify-center items-center z-[200] top-0 left-0`)&&M(t,"class",g)},i:Ee,o:Ee,d(L){L&&pn(t),A=!1,ne(b)}}}function kp(e,t,n){let r,s,i=!1;async function o(){let h=ki(Lr,"/data_message");return await Rp(h,{fullname:r,message:s})}function a(h){h.preventDefault(),o().then(f=>{n(0,r=""),n(1,s="")}),n(2,i=!i)}function u(){n(2,i=!i)}console.log(i);function l(){r=this.value,n(0,r)}function c(){s=this.value,n(1,s)}return[r,s,i,a,u,l,c]}class Np extends Us{constructor(t){super(),Fs(this,t,kp,bp,Ms,{})}}async function xp(e){if(!window.confirm("yakin delete pesain ini ?"))return;let n=_l(Lr,`/data_message/${e}`);return await Ap(n)}function Go(e,t,n){const r=e.slice();return r[5]=t[n],r}function Wo(e,t){let n,r,s=t[5].fullname+"",i,o,a,u=t[5].message+"",l,c,h,f,d;function T(){return t[3](t[5])}return{key:e,first:null,c(){n=H("div"),r=H("label"),i=ns(s),o=Et(),a=H("div"),l=ns(u),c=Et(),h=H("button"),h.textContent="X",M(r,"for","fullname"),M(r,"class","text-white font-thin border border-gray-500 bg-orange-500 rounded-md p-1 absolute -top-2 -left-3 outline-none"),M(a,"class","w-full p-3 rounded-md shadow-md mt-6"),M(h,"class","bg-red-500 w-[30px] h-[30px] absolute top-0 right-0 p-1"),M(n,"class","w-[300px] bg-white relative"),this.first=n},m(y,g){lr(y,n,g),x(n,r),x(r,i),x(n,o),x(n,a),x(a,l),x(n,c),x(n,h),f||(d=fe(h,"click",T),f=!0)},p(y,g){t=y,g&2&&s!==(s=t[5].fullname+"")&&Ui(i,s),g&2&&u!==(u=t[5].message+"")&&Ui(l,u)},d(y){y&&pn(n),f=!1,d()}}}function Qo(e){let t,n;return t=new Np({}),{c(){Zo(t.$$.fragment)},m(r,s){Os(t,r,s),n=!0},i(r){n||(Xt(t.$$.fragment,r),n=!0)},o(r){Hn(t.$$.fragment,r),n=!1},d(r){Ls(t,r)}}}function Mp(e){let t,n,r,s,i=[],o=new Map,a,u,l,c,h,f,d=ji(e[1]);const T=g=>g[5].id;for(let g=0;g<d.length;g+=1){let A=Go(e,d,g),b=T(A);o.set(b,i[g]=Wo(b,A))}let y=e[0]===!0&&Qo();return{c(){t=H("section"),n=H("div"),r=H("h1"),r.textContent="CHAT TIME",s=Et();for(let g=0;g<i.length;g+=1)i[g].c();a=Et(),u=H("button"),u.textContent="+",l=Et(),y&&y.c(),M(r,"class","m-auto font-thin text-orange-500"),M(u,"class","w-[50px] h-[50px] rounded-full bg-orange-500 text-2xl flex items-center justify-center fixed bottom-6  right-[30%] max-md:top-3 max-md:right-3 z-[100]"),M(n,"class","md:w-[50%] flex flex-col gap-8 items-center bg-blue-500 p-8 rounded-3xl"),M(t,"class","w-full flex flex-col items-center")},m(g,A){lr(g,t,A),x(t,n),x(n,r),x(n,s);for(let b=0;b<i.length;b+=1)i[b]&&i[b].m(n,null);x(n,a),x(n,u),x(t,l),y&&y.m(t,null),c=!0,h||(f=fe(u,"click",e[2]),h=!0)},p(g,[A]){A&2&&(d=ji(g[1]),i=Hl(i,A,T,1,g,d,o,n,zl,Wo,a,Go)),g[0]===!0?y?A&1&&Xt(y,1):(y=Qo(),y.c(),Xt(y,1),y.m(t,null)):y&&(jl(),Hn(y,1,1,()=>{y=null}),ql())},i(g){c||(Xt(y),c=!0)},o(g){Hn(y),c=!1},d(g){g&&pn(t);for(let A=0;A<i.length;A+=1)i[A].d();y&&y.d(),h=!1,f()}}}function Op(e,t,n){let r=!1;function s(){n(0,r=!r)}let i=[];function o(){let u=ki(Lr,"/data_message");Pp(u,l=>{Dp().then(c=>{n(1,i=c)})})}return Ll(()=>{o()}),[r,i,s,u=>{xp(u.id)}]}class Lp extends Us{constructor(t){super(),Fs(this,t,Op,Mp,Ms,{})}}function Fp(e){let t,n,r;return n=new Lp({}),{c(){t=H("main"),Zo(n.$$.fragment),M(t,"class","w-screen min-h-screen bg-slate-100 p-6")},m(s,i){lr(s,t,i),Os(n,t,null),r=!0},p:Ee,i(s){r||(Xt(n.$$.fragment,s),r=!0)},o(s){Hn(n.$$.fragment,s),r=!1},d(s){s&&pn(t),Ls(n)}}}class Up extends Us{constructor(t){super(),Fs(this,t,null,Fp,Ms,{})}}new Up({target:document.getElementById("app")});
