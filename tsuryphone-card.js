/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$2=globalThis,e$2=t$2.ShadowRoot&&(void 0===t$2.ShadyCSS||t$2.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$2=Symbol(),o$4=new WeakMap;let n$3 = class n{constructor(t,e,o){if(this._$cssResult$=true,o!==s$2)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$2&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=o$4.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o$4.set(s,t));}return t}toString(){return this.cssText}};const r$4=t=>new n$3("string"==typeof t?t:t+"",void 0,s$2),i$3=(t,...e)=>{const o=1===t.length?t[0]:e.reduce(((e,s,o)=>e+(t=>{if(true===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[o+1]),t[0]);return new n$3(o,t,s$2)},S$1=(s,o)=>{if(e$2)s.adoptedStyleSheets=o.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of o){const o=document.createElement("style"),n=t$2.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,s.appendChild(o);}},c$2=e$2?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$4(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:i$2,defineProperty:e$1,getOwnPropertyDescriptor:h$1,getOwnPropertyNames:r$3,getOwnPropertySymbols:o$3,getPrototypeOf:n$2}=Object,a$1=globalThis,c$1=a$1.trustedTypes,l$1=c$1?c$1.emptyScript:"",p$1=a$1.reactiveElementPolyfillSupport,d$1=(t,s)=>t,u$1={toAttribute(t,s){switch(s){case Boolean:t=t?l$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,s){let i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t);}catch(t){i=null;}}return i}},f$1=(t,s)=>!i$2(t,s),b={attribute:true,type:String,converter:u$1,reflect:false,useDefault:false,hasChanged:f$1};Symbol.metadata??=Symbol("metadata"),a$1.litPropertyMetadata??=new WeakMap;let y$1 = class y extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t);}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=b){if(s.state&&(s.attribute=false),this._$Ei(),this.prototype.hasOwnProperty(t)&&((s=Object.create(s)).wrapped=true),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),h=this.getPropertyDescriptor(t,i,s);void 0!==h&&e$1(this.prototype,t,h);}}static getPropertyDescriptor(t,s,i){const{get:e,set:r}=h$1(this.prototype,t)??{get(){return this[s]},set(t){this[s]=t;}};return {get:e,set(s){const h=e?.call(this);r?.call(this,s),this.requestUpdate(t,h,i);},configurable:true,enumerable:true}}static getPropertyOptions(t){return this.elementProperties.get(t)??b}static _$Ei(){if(this.hasOwnProperty(d$1("elementProperties")))return;const t=n$2(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties);}static finalize(){if(this.hasOwnProperty(d$1("finalized")))return;if(this.finalized=true,this._$Ei(),this.hasOwnProperty(d$1("properties"))){const t=this.properties,s=[...r$3(t),...o$3(t)];for(const i of s)this.createProperty(i,t[i]);}const t=this[Symbol.metadata];if(null!==t){const s=litPropertyMetadata.get(t);if(void 0!==s)for(const[t,i]of s)this.elementProperties.set(t,i);}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);void 0!==i&&this._$Eh.set(i,t);}this.elementStyles=this.finalizeStyles(this.styles);}static finalizeStyles(s){const i=[];if(Array.isArray(s)){const e=new Set(s.flat(1/0).reverse());for(const s of e)i.unshift(c$2(s));}else void 0!==s&&i.push(c$2(s));return i}static _$Eu(t,s){const i=s.attribute;return  false===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=false,this.hasUpdated=false,this._$Em=null,this._$Ev();}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)));}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.();}removeController(t){this._$EO?.delete(t);}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t);}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S$1(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(true),this._$EO?.forEach((t=>t.hostConnected?.()));}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()));}attributeChangedCallback(t,s,i){this._$AK(t,i);}_$ET(t,s){const i=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,i);if(void 0!==e&&true===i.reflect){const h=(void 0!==i.converter?.toAttribute?i.converter:u$1).toAttribute(s,i.type);this._$Em=t,null==h?this.removeAttribute(e):this.setAttribute(e,h),this._$Em=null;}}_$AK(t,s){const i=this.constructor,e=i._$Eh.get(t);if(void 0!==e&&this._$Em!==e){const t=i.getPropertyOptions(e),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:u$1;this._$Em=e;const r=h.fromAttribute(s,t.type);this[e]=r??this._$Ej?.get(e)??r,this._$Em=null;}}requestUpdate(t,s,i){if(void 0!==t){const e=this.constructor,h=this[t];if(i??=e.getPropertyOptions(t),!((i.hasChanged??f$1)(h,s)||i.useDefault&&i.reflect&&h===this._$Ej?.get(t)&&!this.hasAttribute(e._$Eu(t,i))))return;this.C(t,s,i);} false===this.isUpdatePending&&(this._$ES=this._$EP());}C(t,s,{useDefault:i,reflect:e,wrapped:h},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??s??this[t]),true!==h||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||i||(s=void 0),this._$AL.set(t,s)),true===e&&this._$Em!==t&&(this._$Eq??=new Set).add(t));}async _$EP(){this.isUpdatePending=true;try{await this._$ES;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,s]of this._$Ep)this[t]=s;this._$Ep=void 0;}const t=this.constructor.elementProperties;if(t.size>0)for(const[s,i]of t){const{wrapped:t}=i,e=this[s];true!==t||this._$AL.has(s)||void 0===e||this.C(s,void 0,i,e);}}let t=false;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(s)):this._$EM();}catch(s){throw t=false,this._$EM(),s}t&&this._$AE(s);}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=true,this.firstUpdated(t)),this.updated(t);}_$EM(){this._$AL=new Map,this.isUpdatePending=false;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return  true}update(t){this._$Eq&&=this._$Eq.forEach((t=>this._$ET(t,this[t]))),this._$EM();}updated(t){}firstUpdated(t){}};y$1.elementStyles=[],y$1.shadowRootOptions={mode:"open"},y$1[d$1("elementProperties")]=new Map,y$1[d$1("finalized")]=new Map,p$1?.({ReactiveElement:y$1}),(a$1.reactiveElementVersions??=[]).push("2.1.1");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1=globalThis,i$1=t$1.trustedTypes,s$1=i$1?i$1.createPolicy("lit-html",{createHTML:t=>t}):void 0,e="$lit$",h=`lit$${Math.random().toFixed(9).slice(2)}$`,o$2="?"+h,n$1=`<${o$2}>`,r$2=document,l=()=>r$2.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof t?.[Symbol.iterator],d="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=y(1),T=Symbol.for("lit-noChange"),E=Symbol.for("lit-nothing"),A=new WeakMap,C=r$2.createTreeWalker(r$2,129);function P(t,i){if(!a(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s$1?s$1.createHTML(i):i}const V=(t,i)=>{const s=t.length-1,o=[];let r,l=2===i?"<svg>":3===i?"<math>":"",c=f;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,y=0;for(;y<s.length&&(c.lastIndex=y,u=c.exec(s),null!==u);)y=c.lastIndex,c===f?"!--"===u[1]?c=v:void 0!==u[1]?c=_:void 0!==u[2]?($.test(u[2])&&(r=RegExp("</"+u[2],"g")),c=m):void 0!==u[3]&&(c=m):c===m?">"===u[0]?(c=r??f,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?m:'"'===u[3]?g:p):c===g||c===p?c=m:c===v||c===_?c=f:(c=m,r=void 0);const x=c===m&&t[i+1].startsWith("/>")?" ":"";l+=c===f?s+n$1:d>=0?(o.push(a),s.slice(0,d)+e+s.slice(d)+h+x):s+h+(-2===d?i:x);}return [P(t,l+(t[s]||"<?>")+(2===i?"</svg>":3===i?"</math>":"")),o]};class N{constructor({strings:t,_$litType$:s},n){let r;this.parts=[];let c=0,a=0;const u=t.length-1,d=this.parts,[f,v]=V(t,s);if(this.el=N.createElement(f,n),C.currentNode=this.el.content,2===s||3===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes);}for(;null!==(r=C.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(e)){const i=v[a++],s=r.getAttribute(t).split(h),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:c,name:e[2],strings:s,ctor:"."===e[1]?H:"?"===e[1]?I:"@"===e[1]?L:k}),r.removeAttribute(t);}else t.startsWith(h)&&(d.push({type:6,index:c}),r.removeAttribute(t));if($.test(r.tagName)){const t=r.textContent.split(h),s=t.length-1;if(s>0){r.textContent=i$1?i$1.emptyScript:"";for(let i=0;i<s;i++)r.append(t[i],l()),C.nextNode(),d.push({type:2,index:++c});r.append(t[s],l());}}}else if(8===r.nodeType)if(r.data===o$2)d.push({type:2,index:c});else {let t=-1;for(;-1!==(t=r.data.indexOf(h,t+1));)d.push({type:7,index:c}),t+=h.length-1;}c++;}}static createElement(t,i){const s=r$2.createElement("template");return s.innerHTML=t,s}}function S(t,i,s=t,e){if(i===T)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=c(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(false),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=S(t,h._$AS(t,i.values),h,e)),i}class M{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??r$2).importNode(i,true);C.currentNode=e;let h=C.nextNode(),o=0,n=0,l=s[0];for(;void 0!==l;){if(o===l.index){let i;2===l.type?i=new R(h,h.nextSibling,this,t):1===l.type?i=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(i=new z(h,this,t)),this._$AV.push(i),l=s[++n];}o!==l?.index&&(h=C.nextNode(),o++);}return C.currentNode=r$2,e}p(t){let i=0;for(const s of this._$AV) void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class R{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=E,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??true;}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=S(this,t,i),c(t)?t===E||null==t||""===t?(this._$AH!==E&&this._$AR(),this._$AH=E):t!==this._$AH&&t!==T&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):u(t)?this.k(t):this._(t);}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t));}_(t){this._$AH!==E&&c(this._$AH)?this._$AA.nextSibling.data=t:this.T(r$2.createTextNode(t)),this._$AH=t;}$(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=N.createElement(P(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else {const t=new M(e,this),s=t.u(this.options);t.p(i),this.T(s),this._$AH=t;}}_$AC(t){let i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new N(t)),i}k(t){a(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new R(this.O(l()),this.O(l()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(false,true,i);t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){ void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t));}}class k{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=E,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=E;}_$AI(t,i=this,s,e){const h=this.strings;let o=false;if(void 0===h)t=S(this,t,i,0),o=!c(t)||t!==this._$AH&&t!==T,o&&(this._$AH=t);else {const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=S(this,e[s+n],i,n),r===T&&(r=this._$AH[n]),o||=!c(r)||r!==this._$AH[n],r===E?t=E:t!==E&&(t+=(r??"")+h[n+1]),this._$AH[n]=r;}o&&!e&&this.j(t);}j(t){t===E?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"");}}class H extends k{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===E?void 0:t;}}class I extends k{constructor(){super(...arguments),this.type=4;}j(t){this.element.toggleAttribute(this.name,!!t&&t!==E);}}class L extends k{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5;}_$AI(t,i=this){if((t=S(this,t,i,0)??E)===T)return;const s=this._$AH,e=t===E&&s!==E||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==E&&(s===E||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t);}}class z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t);}}const j=t$1.litHtmlPolyfillSupport;j?.(N,R),(t$1.litHtmlVersions??=[]).push("3.3.1");const B=(t,i,s)=>{const e=s?.renderBefore??i;let h=e._$litPart$;if(void 0===h){const t=s?.renderBefore??null;e._$litPart$=h=new R(i.insertBefore(l(),t),t,void 0,s??{});}return h._$AI(t),h};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const s=globalThis;class i extends y$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=B(r,this.renderRoot,this.renderOptions);}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(true);}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(false);}render(){return T}}i._$litElement$=true,i["finalized"]=true,s.litElementHydrateSupport?.({LitElement:i});const o$1=s.litElementPolyfillSupport;o$1?.({LitElement:i});(s.litElementVersions??=[]).push("4.2.1");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=t=>(e,o)=>{ void 0!==o?o.addInitializer((()=>{customElements.define(t,e);})):customElements.define(t,e);};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o={attribute:true,type:String,converter:u$1,reflect:false,hasChanged:f$1},r$1=(t=o,e,r)=>{const{kind:n,metadata:i}=r;let s=globalThis.litPropertyMetadata.get(i);if(void 0===s&&globalThis.litPropertyMetadata.set(i,s=new Map),"setter"===n&&((t=Object.create(t)).wrapped=true),s.set(r.name,t),"accessor"===n){const{name:o}=r;return {set(r){const n=e.get.call(this);e.set.call(this,r),this.requestUpdate(o,n,t);},init(e){return void 0!==e&&this.C(o,void 0,t,e),e}}}if("setter"===n){const{name:o}=r;return function(r){const n=this[o];e.call(this,r),this.requestUpdate(o,n,t);}}throw Error("Unsupported decorator location: "+n)};function n(t){return (e,o)=>"object"==typeof o?r$1(t,e,o):((t,e,o)=>{const r=e.hasOwnProperty(o);return e.constructor.createProperty(o,t),r?Object.getOwnPropertyDescriptor(e,o):void 0})(t,e,o)}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function r(r){return n({...r,state:true,attribute:false})}

/**
 * Common HA theme CSS variables for consistent styling
 */
const haThemeVariables = i$3 `
  /* Primary colors */
  --tsury-primary-color: var(--primary-color);
  --tsury-primary-text-color: var(--primary-text-color);
  --tsury-secondary-text-color: var(--secondary-text-color);
  --tsury-disabled-text-color: var(--disabled-text-color);
  --tsury-text-primary-color: var(--text-primary-color);

  /* Background colors */
  --tsury-card-background-color: var(--card-background-color);
  --tsury-primary-background-color: var(--primary-background-color);
  --tsury-secondary-background-color: var(--secondary-background-color);

  /* State colors */
  --tsury-success-color: var(--success-color, #4caf50);
  --tsury-error-color: var(--error-color, #f44336);
  --tsury-warning-color: var(--warning-color, #ff9800);
  --tsury-info-color: var(--info-color, #2196f3);

  /* Dividers and borders */
  --tsury-divider-color: var(--divider-color);
  --tsury-outline-color: var(--outline-color, var(--divider-color));

  /* Shadows */
  --tsury-card-box-shadow: var(--ha-card-box-shadow);

  /* Interactive states */
  --tsury-state-active-color: var(--state-active-color, var(--primary-color));
  --tsury-state-hover-opacity: 0.08;
  --tsury-state-focus-opacity: 0.12;
  --tsury-state-selected-opacity: 0.12;
  --tsury-state-pressed-opacity: 0.12;

  /* Spacing */
  --tsury-spacing-xs: 4px;
  --tsury-spacing-sm: 8px;
  --tsury-spacing-md: 16px;
  --tsury-spacing-lg: 24px;
  --tsury-spacing-xl: 32px;

  /* Border radius */
  --tsury-border-radius-sm: 4px;
  --tsury-border-radius-md: 8px;
  --tsury-border-radius-lg: 12px;
  --tsury-border-radius-xl: 16px;

  /* Typography */
  --tsury-font-family: var(
    --paper-font-common-base_-_font-family,
    "Roboto",
    sans-serif
  );
  --tsury-font-size-sm: 12px;
  --tsury-font-size-md: 14px;
  --tsury-font-size-lg: 16px;
  --tsury-font-size-xl: 20px;
  --tsury-font-size-xxl: 24px;
  --tsury-font-weight-regular: 400;
  --tsury-font-weight-medium: 500;
  --tsury-font-weight-bold: 700;

  /* Transitions */
  --tsury-transition-duration: 200ms;
  --tsury-transition-timing: cubic-bezier(0.4, 0, 0.2, 1);
`;
/**
 * Helper function to determine if dark mode is active
 */
function isDarkMode$1(hass) {
    return hass?.themes?.darkMode ?? false;
}
/**
 * Common button styles respecting HA theme
 */
const haButtonStyles = i$3 `
  button {
    font-family: var(--tsury-font-family);
    font-size: var(--tsury-font-size-md);
    font-weight: var(--tsury-font-weight-medium);
    border: none;
    border-radius: var(--tsury-border-radius-md);
    padding: var(--tsury-spacing-sm) var(--tsury-spacing-md);
    cursor: pointer;
    transition: all var(--tsury-transition-duration)
      var(--tsury-transition-timing);
    outline: none;
    position: relative;
    overflow: hidden;
  }

  button:disabled {
    opacity: 0.38;
    cursor: not-allowed;
  }

  button:not(:disabled):hover {
    filter: brightness(1.1);
  }

  button:not(:disabled):active {
    filter: brightness(0.9);
  }

  button.primary {
    background-color: var(--tsury-primary-color);
    color: var(--text-primary-color);
  }

  button.success {
    background-color: var(--tsury-success-color);
    color: white;
  }

  button.error {
    background-color: var(--tsury-error-color);
    color: white;
  }

  button.text {
    background-color: transparent;
    color: var(--tsury-primary-color);
  }

  button.outlined {
    background-color: transparent;
    color: var(--tsury-primary-color);
    border: 1px solid var(--tsury-outline-color);
  }

  /* Ripple effect */
  button::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.3);
    transform: translate(-50%, -50%);
    transition:
      width 0.6s,
      height 0.6s;
  }

  button:active::before {
    width: 300px;
    height: 300px;
  }
`;
/**
 * Common card styles respecting HA theme
 */
const haCardStyles = i$3 `
  .card {
    background-color: var(--tsury-card-background-color);
    border-radius: var(--ha-card-border-radius, var(--tsury-border-radius-lg));
    box-shadow: var(--tsury-card-box-shadow);
    padding: var(--tsury-spacing-md);
  }

  .card-header {
    font-size: var(--tsury-font-size-xl);
    font-weight: var(--tsury-font-weight-medium);
    color: var(--tsury-primary-text-color);
    margin-bottom: var(--tsury-spacing-md);
  }

  .card-content {
    color: var(--tsury-primary-text-color);
  }
`;
/**
 * Common list item styles
 */
i$3 `
  .list-item {
    display: flex;
    align-items: center;
    padding: var(--tsury-spacing-md);
    min-height: 48px;
    cursor: pointer;
    transition: background-color var(--tsury-transition-duration)
      var(--tsury-transition-timing);
    border-radius: var(--tsury-border-radius-md);
  }

  .list-item:hover {
    background-color: rgba(
      var(--rgb-primary-color),
      var(--tsury-state-hover-opacity)
    );
  }

  .list-item:active {
    background-color: rgba(
      var(--rgb-primary-color),
      var(--tsury-state-pressed-opacity)
    );
  }

  .list-item-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: var(--tsury-spacing-md);
    font-size: var(--tsury-font-size-lg);
    font-weight: var(--tsury-font-weight-medium);
  }

  .list-item-text {
    flex: 1;
    display: flex;
    flex-direction: column;
    min-width: 0;
  }

  .list-item-primary {
    font-size: var(--tsury-font-size-md);
    color: var(--tsury-primary-text-color);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .list-item-secondary {
    font-size: var(--tsury-font-size-sm);
    color: var(--tsury-secondary-text-color);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .divider {
    height: 1px;
    background-color: var(--tsury-divider-color);
    margin: var(--tsury-spacing-sm) 0;
  }
`;

/**
 * Formatting Utilities
 * Reusable formatters for phone numbers, dates, durations
 */
/**
 * Format phone number for display
 */
/**
 * Generate consistent color from string (for avatars)
 */
function generateColor(input) {
    if (!input)
        return "hsl(200, 60%, 45%)"; // Default color
    let hash = 0;
    for (let i = 0; i < input.length; i++) {
        hash = input.charCodeAt(i) + ((hash << 5) - hash);
    }
    const hue = Math.abs(hash % 360);
    // Check if dark mode - simple heuristic
    const isDark = (() => {
        if (typeof document !== 'undefined') {
            const html = document.documentElement;
            const themeStyle = getComputedStyle(html);
            const cardBg = themeStyle.getPropertyValue('--card-background-color');
            if (cardBg && cardBg.includes('rgb')) {
                const values = cardBg.match(/\d+/g);
                if (values && values.length >= 3) {
                    const brightness = (parseInt(values[0]) + parseInt(values[1]) + parseInt(values[2])) / 3;
                    return brightness < 128;
                }
            }
        }
        return true; // default to dark
    })();
    // Dark mode: darker, more saturated colors
    // Light mode: lighter, less saturated colors
    if (isDark) {
        return `hsl(${hue}, 65%, 45%)`; // Darker for dark mode
    }
    else {
        return `hsl(${hue}, 60%, 60%)`; // Lighter for light mode
    }
}
/**
 * Get first letter of name for avatar
 */
function getAvatarLetter(name) {
    if (!name)
        return "?";
    return name.trim()[0].toUpperCase();
}
/**
 * Normalize phone number for display based on default dial code
 * If number starts with the default dial code (e.g., +972), replace it with 0
 */
function normalizePhoneNumberForDisplay(number, defaultDialCode) {
    if (!number) {
        return number;
    }
    if (!defaultDialCode) {
        return number;
    }
    // Remove any + prefix and whitespace from both number and code
    const cleanNumber = number.replace(/^\+/, "").replace(/\s/g, "");
    const cleanDefaultCode = defaultDialCode.replace(/^\+/, "").replace(/\s/g, "");
    // Check if number starts with the default code
    if (cleanNumber.startsWith(cleanDefaultCode)) {
        const normalized = "0" + cleanNumber.substring(cleanDefaultCode.length);
        return normalized;
    }
    return number;
}

/**
 * Common utility styles used across components
 */
const commonStyles = i$3 `
  * {
    box-sizing: border-box;
  }

  .flex {
    display: flex;
  }

  .flex-column {
    display: flex;
    flex-direction: column;
  }

  .flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .flex-1 {
    flex: 1;
  }

  .text-center {
    text-align: center;
  }

  .text-ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .clickable {
    cursor: pointer;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
  }

  .disabled {
    opacity: 0.38;
    pointer-events: none;
  }

  .hidden {
    display: none !important;
  }

  .scrollable {
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }

  .scrollable::-webkit-scrollbar {
    width: 8px;
  }

  .scrollable::-webkit-scrollbar-track {
    background: transparent;
  }

  .scrollable::-webkit-scrollbar-thumb {
    background-color: rgba(128, 128, 128, 0.3);
    border-radius: 4px;
  }

  .scrollable::-webkit-scrollbar-thumb:hover {
    background-color: rgba(128, 128, 128, 0.5);
  }

  /* Fade animations */
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  @keyframes slideInUp {
    from {
      transform: translateY(100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slideOutDown {
    from {
      transform: translateY(0);
      opacity: 1;
    }
    to {
      transform: translateY(100%);
      opacity: 0;
    }
  }

  .fade-in {
    animation: fadeIn var(--tsury-transition-duration)
      var(--tsury-transition-timing);
  }

  .fade-out {
    animation: fadeOut var(--tsury-transition-duration)
      var(--tsury-transition-timing);
  }

  .slide-in-up {
    animation: slideInUp var(--tsury-transition-duration)
      var(--tsury-transition-timing);
  }

  .slide-out-down {
    animation: slideOutDown var(--tsury-transition-duration)
      var(--tsury-transition-timing);
  }
`;

/**
 * TsuryPhone Navigation Component
 * Bottom navigation bar with three tabs: Home, Keypad, Contacts
 */
let TsuryPhoneNavigation = class TsuryPhoneNavigation extends i {
    constructor() {
        super(...arguments);
        this.activeTab = "home";
        this.disabled = false;
    }
    _handleTabClick(tab) {
        if (this.disabled || tab === this.activeTab) {
            return;
        }
        // Dispatch custom event for parent to handle
        this.dispatchEvent(new CustomEvent("tab-change", {
            detail: { tab },
            bubbles: true,
            composed: true,
        }));
    }
    render() {
        return x `
      <nav class="navigation ${this.disabled ? "disabled" : ""}" role="tablist">
        ${this._renderTab("contacts", "mdi:contacts", "Contacts")}
        ${this._renderTab("home", "mdi:home", "Home")}
        ${this._renderTab("keypad", "mdi:dialpad", "Keypad")}
      </nav>
    `;
    }
    _renderTab(tab, icon, label) {
        const isActive = this.activeTab === tab;
        return x `
      <button
        class="nav-tab ${isActive ? "active" : ""}"
        role="tab"
        aria-selected="${isActive}"
        aria-label="${label}"
        @click=${() => this._handleTabClick(tab)}
        ?disabled=${this.disabled}
      >
        <ha-icon icon="${icon}"></ha-icon>
        <span class="nav-label">${label}</span>
      </button>
    `;
    }
    static get styles() {
        return [
            haThemeVariables,
            i$3 `
        :host {
          display: block;
        }

        .navigation {
          display: flex;
          justify-content: space-around;
          align-items: center;
          background: color-mix(in srgb, var(--card-background-color) 85%, var(--primary-background-color) 15%);
          border-top: 1px solid var(--tsury-divider-color);
          padding: var(--tsury-spacing-xs) 0;
          min-height: 56px;
          position: relative;
        }

        .navigation.disabled {
          opacity: 0.5;
          pointer-events: none;
        }

        .nav-tab {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          flex: 1;
          gap: 4px;
          padding: var(--tsury-spacing-sm);
          padding-bottom: calc(var(--tsury-spacing-sm) + 6px);
          background: transparent;
          border: none;
          cursor: pointer;
          color: var(--tsury-secondary-text-color);
          transition: all var(--tsury-transition-duration)
            var(--tsury-transition-timing);
          position: relative;
          min-width: 64px;
          outline: none;
          -webkit-tap-highlight-color: transparent;
        }

        .nav-tab:disabled {
          cursor: not-allowed;
        }

        .nav-tab:not(:disabled):hover {
          background: rgba(
            var(--rgb-primary-color, 128, 128, 128),
            var(--tsury-state-hover-opacity)
          );
        }

        .nav-tab:not(:disabled):active {
          background: rgba(
            var(--rgb-primary-color, 128, 128, 128),
            var(--tsury-state-pressed-opacity)
          );
        }

        .nav-tab:not(:disabled):focus-visible {
          outline: 2px solid var(--tsury-primary-color);
          outline-offset: -2px;
        }

        .nav-tab ha-icon {
          --mdc-icon-size: 24px;
          display: block;
          padding: 8px;
          border-radius: 12px;
          transition: background-color 0.2s ease;
        }

        .nav-tab.active {
          color: var(--tsury-primary-color);
        }

        .nav-tab.active ha-icon {
          background: rgba(var(--rgb-primary-color, 128, 128, 128), 0.2);
        }

        .nav-tab.active::before {
          content: "";
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 64px;
          height: 3px;
          background: var(--tsury-primary-color);
          border-radius: 0 0 3px 3px;
          animation: slideIn 200ms var(--tsury-transition-timing);
        }

        @keyframes slideIn {
          from {
            width: 0;
            opacity: 0;
          }
          to {
            width: 64px;
            opacity: 1;
          }
        }

        .nav-label {
          font-size: 12px;
          font-weight: var(--tsury-font-weight-medium);
          white-space: nowrap;
        }

        /* Ripple effect on tap */
        .nav-tab::after {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(var(--rgb-primary-color, 128, 128, 128), 0.2);
          transform: translate(-50%, -50%);
          transition:
            width 0.4s,
            height 0.4s;
          pointer-events: none;
        }

        .nav-tab:active::after {
          width: 100px;
          height: 100px;
        }

        /* Mobile optimization */
        @media (max-width: 600px) {
          .nav-label {
            font-size: 11px;
          }

          .nav-tab {
            min-width: 56px;
          }
        }

        /* Desktop optimization */
        @media (min-width: 1024px) {
          .navigation {
            min-height: 64px;
          }

          .nav-tab {
            min-width: 80px;
          }

          .nav-label {
            font-size: 13px;
          }
        }
      `,
        ];
    }
};
__decorate([
    n({ type: String })
], TsuryPhoneNavigation.prototype, "activeTab", void 0);
__decorate([
    n({ type: Boolean })
], TsuryPhoneNavigation.prototype, "disabled", void 0);
TsuryPhoneNavigation = __decorate([
    t("tsuryphone-navigation")
], TsuryPhoneNavigation);

let TsuryPhoneSideMenu = class TsuryPhoneSideMenu extends i {
    constructor() {
        super(...arguments);
        this.open = false;
    }
    _emitClose() {
        this.dispatchEvent(new CustomEvent("close-menu", { bubbles: true, composed: true }));
    }
    _handleOverlayClick(e) {
        if (e.target === e.currentTarget) {
            this._emitClose();
        }
    }
    _handleNavigate(target) {
        this.dispatchEvent(new CustomEvent("menu-navigate", {
            detail: { target },
            bubbles: true,
            composed: true,
        }));
        this._emitClose();
    }
    render() {
        return x `
      <div
        class="overlay ${this.open ? "open" : ""}"
        @click=${this._handleOverlayClick}
        aria-hidden=${this.open ? "false" : "true"}
      >
        <div class="panel" role="navigation" @click=${(e) => e.stopPropagation()}>
          <div class="panel-header">
            <div class="panel-title">
              <h2>TsuryPhone</h2>
              <span>Manage your device</span>
            </div>
            <button
              class="close-button"
              @click=${this._emitClose}
              aria-label="Close menu"
            >
              <ha-icon icon="mdi:close"></ha-icon>
            </button>
          </div>

          <div class="menu-section" role="group" aria-label="Navigation">
            <div class="section-label">Navigate</div>
            <button
              class="menu-item"
              @click=${() => this._handleNavigate("blocked")}
            >
              <span class="menu-item-content">
                <ha-icon icon="mdi:block-helper"></ha-icon>
                Blocked Numbers
              </span>
              <ha-icon class="chevron" icon="mdi:chevron-right"></ha-icon>
            </button>

            <button
              class="menu-item"
              @click=${() => this._handleNavigate("settings")}
            >
              <span class="menu-item-content">
                <ha-icon icon="mdi:cog"></ha-icon>
                Settings
              </span>
              <ha-icon class="chevron" icon="mdi:chevron-right"></ha-icon>
            </button>
          </div>
        </div>
      </div>
    `;
    }
};
TsuryPhoneSideMenu.styles = i$3 `
    :host {
      position: absolute;
      inset: 0;
      pointer-events: none;
      z-index: 120;
      display: block;
    }

    :host([open]) {
      pointer-events: auto;
    }

    .overlay {
      position: absolute;
      inset: 0;
      background: var(--mdc-dialog-scrim-color, rgba(0, 0, 0, 0.32));
      opacity: 0;
      transition: opacity 200ms ease;
      display: flex;
      justify-content: flex-start;
    }

    .overlay.open {
      opacity: 1;
      pointer-events: auto;
    }

    .panel {
      width: min(320px, 80vw);
      height: 100%;
      background: var(--card-background-color);
      box-shadow: var(--ha-card-box-shadow, 0 12px 32px rgba(0, 0, 0, 0.3));
      transform: translateX(-100%);
      transition: transform 240ms ease;
      display: flex;
      flex-direction: column;
      padding: 28px 24px 32px;
      box-sizing: border-box;
      gap: 24px;
    }

    .overlay.open .panel {
      transform: translateX(0);
    }

    .panel-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .panel-title {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .panel-title h2 {
      margin: 0;
      font-size: 22px;
      font-weight: 600;
      color: var(--primary-text-color);
    }

    .panel-title span {
      font-size: 13px;
      color: var(--secondary-text-color);
    }

    .close-button {
      width: 36px;
      height: 36px;
      border-radius: 12px;
      border: none;
      background: transparent;
      color: var(--primary-text-color);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.2s ease, transform 0.2s ease;
    }

    .close-button:hover {
      background: var(--divider-color);
    }

    .close-button:active {
      transform: scale(0.95);
    }

    .menu-section {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .section-label {
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--secondary-text-color);
    }

    .menu-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 14px 12px;
      border-radius: 12px;
      background: transparent;
      border: none;
      cursor: pointer;
      transition: background 0.2s ease;
      color: var(--primary-text-color);
    }

    .menu-item:hover {
      background: var(--divider-color);
    }

    .menu-item:active {
      background: var(--secondary-background-color);
    }

    .menu-item-content {
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 16px;
      font-weight: 500;
    }

    .menu-item ha-icon.chevron {
      color: var(--secondary-text-color);
      --mdc-icon-size: 20px;
    }

    .menu-item-content ha-icon {
      color: var(--primary-color);
      --mdc-icon-size: 20px;
    }

    @media (max-width: 480px) {
      .panel {
        width: min(280px, 82vw);
        padding: 24px 20px 28px;
      }

      .menu-item {
        padding: 12px 10px;
      }
    }
  `;
__decorate([
    n({ type: Boolean, reflect: true })
], TsuryPhoneSideMenu.prototype, "open", void 0);
TsuryPhoneSideMenu = __decorate([
    t("tsuryphone-side-menu")
], TsuryPhoneSideMenu);

/**
 * Format dates for call history display
 */
/**
 * Format a timestamp for display in call log
 */
function formatCallTime(timestamp) {
    const date = typeof timestamp === "string" ? new Date(timestamp) : timestamp;
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const diffMinutes = Math.floor(diff / 60000);
    const diffHours = Math.floor(diff / 3600000);
    // Just now (< 1 minute)
    if (diffMinutes < 1) {
        return "Just now";
    }
    // Minutes ago (< 1 hour)
    if (diffMinutes < 60) {
        return `${diffMinutes}m ago`;
    }
    // Hours ago (< 24 hours)
    if (diffHours < 24) {
        return `${diffHours}h ago`;
    }
    // For calls within the same week, show day and time (e.g., "Fri 23:50")
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const callDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    const diffDays = Math.floor((today.getTime() - callDate.getTime()) / 86400000);
    if (diffDays < 7) {
        const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const dayName = days[date.getDay()];
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");
        return `${dayName} ${hours}:${minutes}`;
    }
    // For older calls, show month, day, and time (e.g., "Oct 25, 16:23")
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    const monthName = months[date.getMonth()];
    const day = date.getDate();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${monthName} ${day}, ${hours}:${minutes}`;
}
/**
 * Get group label for call history grouping
 */
function getCallHistoryGroup(timestamp) {
    const date = typeof timestamp === "string" ? new Date(timestamp) : timestamp;
    const now = new Date();
    // Reset time to midnight for comparison
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const callDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    const diffTime = today.getTime() - callDate.getTime();
    const diffDays = Math.floor(diffTime / 86400000);
    // Cap at 365 days
    if (diffDays > 365) {
        return ""; // Will be filtered out
    }
    if (diffDays === 0) {
        return "Today";
    }
    if (diffDays === 1) {
        return "Yesterday";
    }
    // Everything else is "Older"
    return "Older";
}
/**
 * Format call duration in seconds to readable format
 */
function formatDuration(seconds) {
    if (seconds < 60) {
        return `${seconds}s`;
    }
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    if (minutes < 60) {
        return remainingSeconds > 0
            ? `${minutes}m ${remainingSeconds}s`
            : `${minutes}m`;
    }
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return remainingMinutes > 0 ? `${hours}h ${remainingMinutes}m` : `${hours}h`;
}

/**
 * Group and filter call history entries
 */
/**
 * Filter call history by type
 */
function filterCallHistory(calls, filter) {
    if (filter === "all") {
        return calls;
    }
    return calls.filter((call) => call.type === filter);
}
/**
 * Group call history by date ranges
 */
function groupCallHistory(calls) {
    // Create a map of groups
    const groups = new Map();
    // Sort calls by timestamp (newest first)
    const sortedCalls = [...calls].sort((a, b) => {
        return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
    });
    // Group calls and stack adjacent calls from same contact
    sortedCalls.forEach((call) => {
        const groupLabel = getCallHistoryGroup(call.timestamp);
        // Filter out calls older than 365 days
        if (!groupLabel) {
            return;
        }
        if (!groups.has(groupLabel)) {
            groups.set(groupLabel, []);
        }
        const groupCalls = groups.get(groupLabel);
        const lastCall = groupCalls[groupCalls.length - 1];
        // Stack if: same phone number, same type, and adjacent
        if (lastCall &&
            lastCall.phoneNumber === call.phoneNumber &&
            lastCall.type === call.type) {
            // Increment count on the last call
            lastCall.count = (lastCall.count || 1) + 1;
            // Don't add the current call - it's now stacked
        }
        else {
            // Add as new call (count defaults to undefined, showing as single call)
            groupCalls.push({ ...call });
        }
    });
    // Convert to array and maintain order
    const groupOrder = ["Today", "Yesterday", "Older"];
    const result = [];
    // Add known groups in order
    groupOrder.forEach((label) => {
        if (groups.has(label)) {
            result.push({
                groupLabel: label,
                calls: groups.get(label),
            });
        }
    });
    return result;
}
/**
 * Get frequent contacts from call history (top N most called)
 */
function getFrequentContacts(calls, limit = 6) {
    // Count calls per contact
    const contactCounts = new Map();
    calls.forEach((call) => {
        const key = call.phoneNumber;
        if (contactCounts.has(key)) {
            contactCounts.get(key).count++;
        }
        else {
            contactCounts.set(key, {
                name: call.contactName,
                phone: call.phoneNumber,
                count: 1,
                hasContactName: call.hasContactName || false,
            });
        }
    });
    // Sort by count and take top N
    return Array.from(contactCounts.values())
        .sort((a, b) => b.count - a.count)
        .slice(0, limit)
        .map((contact) => ({
        contactName: contact.name,
        phoneNumber: contact.phone,
        callCount: contact.count,
        hasContactName: contact.hasContactName,
    }));
}

let TsuryPhoneCallLogFilters = class TsuryPhoneCallLogFilters extends i {
    constructor() {
        super(...arguments);
        this.activeFilter = "all";
    }
    _handleFilterClick(filter) {
        this.activeFilter = filter;
        this.dispatchEvent(new CustomEvent("filter-changed", {
            detail: { filter },
            bubbles: true,
            composed: true,
        }));
    }
    render() {
        return x `
      <div class="filters">
        <div
          class="filter-chip ${this.activeFilter === "all" ? "active" : ""}"
          @click=${() => this._handleFilterClick("all")}
          role="button"
          tabindex="0"
          aria-label="Show all calls"
        >
          All
        </div>
        <div
          class="filter-chip ${this.activeFilter === "missed" ? "active" : ""}"
          @click=${() => this._handleFilterClick("missed")}
          role="button"
          tabindex="0"
          aria-label="Show missed calls"
        >
          Missed
        </div>
        <div
          class="filter-chip ${this.activeFilter === "outgoing"
            ? "active"
            : ""}"
          @click=${() => this._handleFilterClick("outgoing")}
          role="button"
          tabindex="0"
          aria-label="Show outgoing calls"
        >
          Outgoing
        </div>
        <div
          class="filter-chip ${this.activeFilter === "incoming"
            ? "active"
            : ""}"
          @click=${() => this._handleFilterClick("incoming")}
          role="button"
          tabindex="0"
          aria-label="Show incoming calls"
        >
          Incoming
        </div>
      </div>
    `;
    }
};
TsuryPhoneCallLogFilters.styles = i$3 `
    :host {
      display: block;
    }

    .filters {
      display: flex;
      justify-content: center;
      gap: 8px;
      padding: 16px;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      scrollbar-width: none;
    }

    .filters::-webkit-scrollbar {
      display: none;
    }

    .filter-chip {
      flex-shrink: 0;
      padding: 8px 16px;
      border-radius: 16px;
      border: 1px solid var(--divider-color);
      background: var(--card-background-color);
      color: var(--primary-text-color);
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s ease;
      white-space: nowrap;
      user-select: none;
    }

    .filter-chip:hover {
      background: var(--primary-color);
      color: var(--text-primary-color);
      border-color: var(--primary-color);
    }

    .filter-chip.active {
      background: var(--primary-color);
      color: var(--text-primary-color);
      border-color: var(--primary-color);
    }

    .filter-chip:active {
      transform: scale(0.95);
    }
  `;
__decorate([
    n({ type: String })
], TsuryPhoneCallLogFilters.prototype, "activeFilter", void 0);
TsuryPhoneCallLogFilters = __decorate([
    t("tsuryphone-call-log-filters")
], TsuryPhoneCallLogFilters);

/**
 * Generate consistent avatar colors based on contact name
 */
const AVATAR_COLORS_DARK = [
    "#1565c0", // Darker Blue
    "#2e7d32", // Darker Green
    "#c62828", // Darker Red
    "#6a1b9a", // Darker Purple
    "#e65100", // Darker Orange
    "#00838f", // Darker Cyan
    "#ad1457", // Darker Pink
    "#4e342e", // Darker Brown
    "#37474f", // Darker Blue Grey
    "#558b2f", // Darker Light Green
    "#01579b", // Darker Light Blue
    "#bf360c", // Darker Deep Orange
];
const AVATAR_COLORS_LIGHT = [
    "#42a5f5", // Lighter Blue
    "#66bb6a", // Lighter Green
    "#ef5350", // Lighter Red
    "#ab47bc", // Lighter Purple
    "#ffa726", // Lighter Orange
    "#26c6da", // Lighter Cyan
    "#ec407a", // Lighter Pink
    "#8d6e63", // Lighter Brown
    "#78909c", // Lighter Blue Grey
    "#9ccc65", // Lighter Light Green
    "#29b6f6", // Lighter Light Blue
    "#ff7043", // Lighter Deep Orange
];
/**
 * Check if the UI is in dark mode
 */
function isDarkMode() {
    // Check if the document has a dark theme class or attribute
    if (typeof document !== 'undefined') {
        const html = document.documentElement;
        const bodyTheme = document.body.getAttribute('data-theme');
        // Check for common dark mode indicators
        if (bodyTheme === 'dark' || html.classList.contains('dark-mode')) {
            return true;
        }
        // Check CSS variable for theme
        const themeStyle = getComputedStyle(html);
        const cardBg = themeStyle.getPropertyValue('--card-background-color');
        // If background is dark (low lightness), assume dark mode
        if (cardBg) {
            // Simple heuristic: if it starts with # and looks dark
            const rgb = themeStyle.getPropertyValue('--primary-background-color') || cardBg;
            if (rgb.includes('rgb')) {
                const values = rgb.match(/\d+/g);
                if (values && values.length >= 3) {
                    const brightness = (parseInt(values[0]) + parseInt(values[1]) + parseInt(values[2])) / 3;
                    return brightness < 128;
                }
            }
        }
    }
    // Default to dark mode if we can't determine
    return true;
}
/**
 * Simple hash function for strings
 */
function hashCode(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return Math.abs(hash);
}
/**
 * Get a consistent color for a given name
 */
function getAvatarColor(name) {
    if (!name) {
        return isDarkMode() ? AVATAR_COLORS_DARK[0] : AVATAR_COLORS_LIGHT[0];
    }
    const colors = isDarkMode() ? AVATAR_COLORS_DARK : AVATAR_COLORS_LIGHT;
    const index = hashCode(name) % colors.length;
    return colors[index];
}
/**
 * Get initials from a name (up to 2 characters)
 */
function getInitials(name) {
    if (!name) {
        return "?";
    }
    const words = name.trim().split(/\s+/);
    // Always return just the first letter
    return words[0][0].toUpperCase();
}

let TsuryPhoneFrequentContacts = class TsuryPhoneFrequentContacts extends i {
    constructor() {
        super(...arguments);
        this.contacts = [];
    }
    _handleContactClick(contact) {
        this.dispatchEvent(new CustomEvent('contact-clicked', {
            detail: { contact },
            bubbles: true,
            composed: true,
        }));
    }
    render() {
        if (this.contacts.length === 0) {
            return x `
        <div class="frequent-contacts">
          <div class="section-header">Frequents</div>
          <div class="empty-state">
            <ha-icon class="empty-icon" icon="mdi:account-multiple-outline"></ha-icon>
            <div class="empty-text">No frequent contacts yet</div>
          </div>
        </div>
      `;
        }
        return x `
      <div class="frequent-contacts">
        <div class="section-header">Frequents</div>
        <div class="contacts-grid">
          ${this.contacts.map(contact => {
            const isContact = contact.hasContactName;
            return x `
                <div
                  class="contact-item"
                  @click=${() => this._handleContactClick(contact)}
                  role="button"
                  tabindex="0"
                  aria-label="Call ${contact.contactName}"
                >
                  ${isContact
                ? x `
                        <div class="avatar" style="background-color: ${getAvatarColor(contact.contactName)}">
                          ${getInitials(contact.contactName)}
                          ${contact.callCount > 1
                    ? x `<div class="call-count-badge">${contact.callCount}</div>`
                    : ''}
                        </div>
                      `
                : x `
                        <div class="avatar generic">
                          <ha-icon icon="mdi:account"></ha-icon>
                          ${contact.callCount > 1
                    ? x `<div class="call-count-badge">${contact.callCount}</div>`
                    : ''}
                        </div>
                      `}
                  <div class="contact-name" title="${contact.contactName}">
                    ${contact.contactName}
                  </div>
                </div>
              `;
        })}
        </div>
      </div>
    `;
    }
};
TsuryPhoneFrequentContacts.styles = i$3 `
    :host {
      display: block;
    }

    .frequent-contacts {
      padding: 16px;
    }

    .section-header {
      font-size: 14px;
      font-weight: 600;
      color: var(--secondary-text-color);
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 12px;
    }

    .contacts-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
      gap: 16px;
    }

    .contact-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      cursor: pointer;
      padding: 8px;
      border-radius: 8px;
      transition: background-color 0.2s ease;
    }

    .contact-item:hover {
      background: var(--sidebar-background-color, rgba(0, 0, 0, 0.05));
    }

    .contact-item:active {
      transform: scale(0.95);
    }

    .avatar {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--text-primary-color, white);
      font-weight: 600;
      font-size: 20px;
      position: relative;
    }

    .avatar.generic {
      background: var(--secondary-text-color);
    }

    .avatar ha-icon {
      --mdc-icon-size: 32px;
    }

    .call-count-badge {
      position: absolute;
      top: -4px;
      right: -4px;
      background: var(--primary-color);
      color: var(--text-primary-color);
      font-size: 11px;
      font-weight: 600;
      padding: 2px 6px;
      border-radius: 10px;
      min-width: 20px;
      text-align: center;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }

    .contact-name {
      font-size: 13px;
      color: var(--primary-text-color);
      text-align: center;
      max-width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .empty-state {
      text-align: center;
      padding: 32px 16px;
      color: var(--secondary-text-color);
    }

    .empty-icon {
      --mdc-icon-size: 48px;
      margin-bottom: 12px;
      opacity: 0.5;
    }

    .empty-text {
      font-size: 14px;
    }
  `;
__decorate([
    n({ type: Array })
], TsuryPhoneFrequentContacts.prototype, "contacts", void 0);
TsuryPhoneFrequentContacts = __decorate([
    t('tsuryphone-frequent-contacts')
], TsuryPhoneFrequentContacts);

let TsuryPhoneCallLogItem = class TsuryPhoneCallLogItem extends i {
    constructor() {
        super(...arguments);
        this.defaultDialCode = "";
    }
    _getCallTypeIcon() {
        switch (this.call.type) {
            case "incoming":
                return x `
          <div class="call-type-icon incoming" title="Incoming call">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 4 L4 20 M4 20 L4 12 M4 20 L12 20" />
            </svg>
          </div>
        `;
            case "outgoing":
                return x `
          <div class="call-type-icon outgoing" title="Outgoing call">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 20 L20 4 M20 4 L20 12 M20 4 L12 4" />
            </svg>
          </div>
        `;
            case "missed":
                return x `
          <div class="call-type-icon missed" title="Missed call">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 4 L12 12 M8 16 L4 20 M4 20 L4 12 M4 20 L12 20" />
            </svg>
          </div>
        `;
        }
    }
    _handleClick() {
        this.dispatchEvent(new CustomEvent("call-item-clicked", {
            detail: { call: this.call },
            bubbles: true,
            composed: true,
        }));
    }
    render() {
        const avatarColor = getAvatarColor(this.call.contactName);
        const initials = getInitials(this.call.contactName);
        const timeFormatted = formatCallTime(this.call.timestamp);
        // Show duration for answered calls, "Missed" for missed/blocked calls
        let durationDisplay = null;
        if (this.call.type === "missed" || this.call.isBlocked) {
            durationDisplay = x `<span>• Missed</span>`;
        }
        else if (this.call.duration > 0) {
            durationDisplay = x `<span>• ${formatDuration(this.call.duration)}</span>`;
        }
        const displayNumber = normalizePhoneNumberForDisplay(this.call.phoneNumber, this.defaultDialCode);
        // For non-contacts, show generic profile icon instead of dynamic initials
        const isContact = this.call.hasContactName;
        return x `
      <div class="call-item" @click=${this._handleClick}>
        ${isContact
            ? x `
              <div class="avatar" style="background-color: ${avatarColor}">
                ${initials}
              </div>
            `
            : x `
              <div class="avatar generic">
                <ha-icon icon="mdi:account"></ha-icon>
              </div>
            `}
        <div class="call-info">
          <div class="call-header">
            <span class="contact-name">${this.call.contactName}</span>
            ${this._getCallTypeIcon()}
            ${this.call.count && this.call.count > 1
            ? x `<span class="count-badge">(${this.call.count})</span>`
            : ""}
            ${this.call.isBlocked
            ? x `<span class="blocked-badge">Blocked</span>`
            : ""}
          </div>
          <div class="call-details">
            <span class="phone-number">${displayNumber}</span>
            ${durationDisplay}
          </div>
        </div>
        <div class="call-time">${timeFormatted}</div>
      </div>
    `;
    }
};
TsuryPhoneCallLogItem.styles = i$3 `
    :host {
      display: block;
    }

    .call-item {
      display: flex;
      align-items: center;
      padding: 12px 16px;
      gap: 12px;
      cursor: pointer;
      transition: background-color 0.2s ease;
    }

    .call-item:hover {
      background: var(--secondary-background-color);
    }

    .call-item:active {
      background: var(--divider-color);
    }

    .avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--text-primary-color, white);
      font-weight: 600;
      font-size: 16px;
      flex-shrink: 0;
    }

    .avatar.generic {
      background: var(--secondary-text-color);
    }

    .avatar ha-icon {
      --mdc-icon-size: 24px;
    }

    .call-info {
      flex: 1;
      min-width: 0;
    }

    .call-header {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 4px;
    }

    .contact-name {
      font-weight: 500;
      color: var(--primary-text-color);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .call-type-icon {
      width: 16px;
      height: 16px;
      flex-shrink: 0;
    }

    .call-type-icon svg {
      width: 100%;
      height: 100%;
    }

    .call-type-icon.incoming {
      color: var(--success-color);
    }

    .call-type-icon.outgoing {
      color: var(--info-color);
    }

    .call-type-icon.missed {
      color: var(--error-color);
    }

    .call-details {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 13px;
      color: var(--secondary-text-color);
    }

    .phone-number {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .call-time {
      flex-shrink: 0;
      font-size: 13px;
      color: var(--secondary-text-color);
      margin-left: auto;
    }

    .blocked-badge {
      background: var(--error-color);
      color: var(--text-primary-color, white);
      font-size: 11px;
      padding: 2px 6px;
      border-radius: 4px;
      font-weight: 500;
      flex-shrink: 0;
    }

    .count-badge {
      color: var(--secondary-text-color);
      font-size: 13px;
      font-weight: 500;
      flex-shrink: 0;
    }
  `;
__decorate([
    n({ type: Object })
], TsuryPhoneCallLogItem.prototype, "call", void 0);
__decorate([
    n({ type: String })
], TsuryPhoneCallLogItem.prototype, "defaultDialCode", void 0);
TsuryPhoneCallLogItem = __decorate([
    t("tsuryphone-call-log-item")
], TsuryPhoneCallLogItem);

/**
 * Shared Styles
 * Reusable CSS patterns for TsuryPhone components
 */
/**
 * Common avatar styles
 */
const avatarStyles = i$3 `
  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    font-size: 16px;
    color: white;
    flex-shrink: 0;
  }

  .avatar.large {
    width: 56px;
    height: 56px;
    font-size: 24px;
  }

  .avatar.small {
    width: 32px;
    height: 32px;
    font-size: 14px;
  }
`;
/**
 * Common list item styles
 */
const listItemStyles = i$3 `
  .list-item {
    display: flex;
    align-items: center;
    padding: 12px 16px;
    gap: 12px;
    background: var(--card-background-color);
    border-bottom: 1px solid var(--divider-color);
    cursor: pointer;
    transition: background-color 0.2s;
  }

  .list-item:hover {
    background: var(--secondary-background-color);
  }

  .list-item:active {
    background: var(--divider-color);
  }

  .list-item-content {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .list-item-title {
    font-size: 16px;
    font-weight: 500;
    color: var(--primary-text-color);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .list-item-subtitle {
    font-size: 14px;
    color: var(--secondary-text-color);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .list-item-actions {
    display: flex;
    gap: 8px;
    align-items: center;
  }
`;
/**
 * Common button styles
 */
const buttonStyles = i$3 `
  .action-button {
    padding: 8px 16px;
    border-radius: 8px;
    border: none;
    background: var(--primary-color);
    color: var(--text-primary-color, white);
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    transition: all 0.2s;
  }

  .action-button:hover {
    background: var(--dark-primary-color, var(--primary-color));
    transform: scale(1.02);
  }

  .action-button:active {
    transform: scale(0.98);
  }

  .action-button:disabled {
    background: var(--disabled-color);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .action-button.secondary {
    background: var(--secondary-background-color);
    color: var(--primary-text-color);
  }

  .action-button.danger {
    background: var(--error-color);
    color: var(--text-primary-color, white);
  }

  .icon-button {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    background: transparent;
    color: var(--secondary-text-color);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;
  }

  .icon-button:hover {
    background: var(--secondary-background-color);
  }

  .icon-button:active {
    background: var(--divider-color);
    transform: scale(0.95);
  }
`;
/**
 * Common modal styles
 */
i$3 `
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--mdc-dialog-scrim-color, rgba(0, 0, 0, 0.5));
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 16px;
  }

  .modal {
    background: var(--card-background-color);
    border-radius: 16px;
    max-width: 500px;
    width: 100%;
    max-height: 80vh;
    display: flex;
    flex-direction: column;
    box-shadow: var(
      --ha-card-box-shadow,
      0 8px 32px rgba(0, 0, 0, 0.3)
    );
  }

  .modal-header {
    padding: 20px 24px;
    border-bottom: 1px solid var(--divider-color);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .modal-title {
    font-size: 20px;
    font-weight: 500;
    color: var(--primary-text-color);
  }

  .modal-body {
    padding: 24px;
    overflow-y: auto;
    flex: 1;
  }

  .modal-footer {
    padding: 16px 24px;
    border-top: 1px solid var(--divider-color);
    display: flex;
    gap: 12px;
    justify-content: flex-end;
  }
`;
/**
 * Common form styles
 */
i$3 `
  .form-field {
    margin-bottom: 20px;
  }

  .form-label {
    display: block;
    font-size: 14px;
    font-weight: 500;
    color: var(--primary-text-color);
    margin-bottom: 8px;
  }

  .form-input {
    width: 100%;
    padding: 12px 16px;
    border: 1px solid var(--divider-color);
    border-radius: 8px;
    font-size: 16px;
    font-family: inherit;
    color: var(--primary-text-color);
    background: var(--card-background-color);
    box-sizing: border-box;
    transition: border-color 0.2s;
  }

  .form-input:focus {
    outline: none;
    border-color: var(--primary-color);
  }

  .form-input::placeholder {
    color: var(--secondary-text-color);
  }

  .form-helper {
    font-size: 12px;
    color: var(--secondary-text-color);
    margin-top: 4px;
  }

  .form-error {
    font-size: 12px;
    color: var(--error-color);
    margin-top: 4px;
  }
`;
/**
 * Common empty state styles
 */
const emptyStateStyles = i$3 `
  .empty-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 48px 24px;
    text-align: center;
  }

  .empty-state-icon {
    width: 64px;
    height: 64px;
    color: var(--secondary-text-color);
    margin-bottom: 16px;
    opacity: 0.5;
  }

  .empty-state-title {
    font-size: 18px;
    font-weight: 500;
    color: var(--primary-text-color);
    margin-bottom: 8px;
  }

  .empty-state-message {
    font-size: 14px;
    color: var(--secondary-text-color);
    margin-bottom: 24px;
  }
`;

/**
 * Empty State Component
 * Reusable empty state message
 */
let TsuryPhoneEmptyState = class TsuryPhoneEmptyState extends i {
    constructor() {
        super(...arguments);
        this.icon = "mdi:alert-circle-outline";
        this.title = "No items";
        this.message = "";
    }
    static get styles() {
        return [
            emptyStateStyles,
            i$3 `
        :host {
          display: block;
        }
      `,
        ];
    }
    _handleAction() {
        if (this.onAction) {
            this.onAction();
        }
        this.dispatchEvent(new CustomEvent("action", { bubbles: true, composed: true }));
    }
    render() {
        return x `
      <div class="empty-state">
        <ha-icon class="empty-state-icon" .icon=${this.icon}></ha-icon>
        <div class="empty-state-title">${this.title}</div>
        ${this.message
            ? x `<div class="empty-state-message">${this.message}</div>`
            : ""}
        ${this.actionLabel
            ? x `
              <button class="action-button" @click=${this._handleAction}>
                ${this.actionLabel}
              </button>
            `
            : ""}
      </div>
    `;
    }
};
__decorate([
    n({ type: String })
], TsuryPhoneEmptyState.prototype, "icon", void 0);
__decorate([
    n({ type: String })
], TsuryPhoneEmptyState.prototype, "title", void 0);
__decorate([
    n({ type: String })
], TsuryPhoneEmptyState.prototype, "message", void 0);
__decorate([
    n({ type: String })
], TsuryPhoneEmptyState.prototype, "actionLabel", void 0);
__decorate([
    n({ type: Function })
], TsuryPhoneEmptyState.prototype, "onAction", void 0);
TsuryPhoneEmptyState = __decorate([
    t("tsuryphone-empty-state")
], TsuryPhoneEmptyState);

let TsuryPhoneCallLogList = class TsuryPhoneCallLogList extends i {
    constructor() {
        super(...arguments);
        this.groupedCalls = [];
        this.loading = false;
        this.hasAnyCalls = false; // Whether there are any calls (before filtering)
        this.defaultDialCode = "";
    }
    render() {
        if (this.loading) {
            return x `
        <div class="loading">
          <div class="spinner"></div>
        </div>
      `;
        }
        if (this.groupedCalls.length === 0) {
            // Different message if we have calls but filter matched nothing
            if (this.hasAnyCalls) {
                return x `
          <tsuryphone-empty-state
            icon="mdi:filter-off-outline"
            title="No matching calls"
            message="Try changing the filter to see more call history."
          ></tsuryphone-empty-state>
        `;
            }
            return x `
        <tsuryphone-empty-state
          icon="mdi:phone-outline"
          title="No calls yet"
          message="Your call history will appear here once you start making or receiving calls."
        ></tsuryphone-empty-state>
      `;
        }
        return x `
      <div class="call-log-list">
        ${this.groupedCalls.map((group, groupIndex) => x `
            <div class="group">
              <div class="group-header">${group.groupLabel}</div>
              ${group.calls.map((call, index) => x `
                  <tsuryphone-call-log-item 
                    .call=${call} 
                    .defaultDialCode=${this.defaultDialCode}
                  ></tsuryphone-call-log-item>
                  ${index < group.calls.length - 1 ? x `<div class="divider"></div>` : ''}
                `)}
            </div>
          `)}
      </div>
    `;
    }
};
TsuryPhoneCallLogList.styles = i$3 `
    :host {
      display: block;
    }

    .call-log-list {
      flex: 1;
      overflow-y: auto;
    }

    .group {
      margin-bottom: 16px;
    }

    .group-header {
      position: sticky;
      top: 0;
      background: var(--card-background-color);
      padding: 12px 16px;
      font-size: 13px;
      font-weight: 600;
      color: var(--secondary-text-color);
      text-transform: uppercase;
      letter-spacing: 0.5px;
      border-bottom: 1px solid var(--divider-color);
      z-index: 1;
    }

    .divider {
      height: 1px;
      background: var(--divider-color);
      margin: 0 16px;
    }

    .divider:last-child {
      display: none;
    }

    .loading {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 64px 32px;
      color: var(--secondary-text-color);
    }

    .spinner {
      width: 40px;
      height: 40px;
      border: 3px solid var(--divider-color);
      border-top-color: var(--primary-color);
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }
  `;
__decorate([
    n({ type: Array })
], TsuryPhoneCallLogList.prototype, "groupedCalls", void 0);
__decorate([
    n({ type: Boolean })
], TsuryPhoneCallLogList.prototype, "loading", void 0);
__decorate([
    n({ type: Boolean })
], TsuryPhoneCallLogList.prototype, "hasAnyCalls", void 0);
__decorate([
    n({ type: String })
], TsuryPhoneCallLogList.prototype, "defaultDialCode", void 0);
TsuryPhoneCallLogList = __decorate([
    t('tsuryphone-call-log-list')
], TsuryPhoneCallLogList);

let TsuryPhoneHomeView = class TsuryPhoneHomeView extends i {
    constructor() {
        super(...arguments);
        this.callHistory = [];
        this.loading = false;
        this.defaultDialCode = "";
        this._activeFilter = "all";
    }
    _handleFilterChanged(e) {
        this._activeFilter = e.detail.filter;
    }
    _handleContactClicked(e) {
        // Bubble up the event for parent to handle (e.g., open call modal)
        this.dispatchEvent(new CustomEvent("dial-contact", {
            detail: e.detail,
            bubbles: true,
            composed: true,
        }));
    }
    _handleCallItemClicked(e) {
        // Bubble up the event for parent to handle (e.g., open call details)
        this.dispatchEvent(new CustomEvent("call-details", {
            detail: e.detail,
            bubbles: true,
            composed: true,
        }));
    }
    render() {
        // Filter and group call history
        const filteredCalls = filterCallHistory(this.callHistory, this._activeFilter);
        const groupedCalls = groupCallHistory(filteredCalls);
        // Get frequent contacts (only from all calls, not filtered)
        const frequentContacts = getFrequentContacts(this.callHistory, 6);
        // Show frequent contacts only if we have calls and filter is 'all'
        const showFrequentContacts = this._activeFilter === "all" && frequentContacts.length > 0;
        return x `
      <div class="home-view">
        <tsuryphone-call-log-filters
          .activeFilter=${this._activeFilter}
          @filter-changed=${this._handleFilterChanged}
        ></tsuryphone-call-log-filters>

        <div class="scrollable-content">
          ${showFrequentContacts
            ? x `
                <tsuryphone-frequent-contacts
                  .contacts=${frequentContacts}
                  @contact-clicked=${this._handleContactClicked}
                ></tsuryphone-frequent-contacts>
                <div class="divider"></div>
              `
            : ""}

          <tsuryphone-call-log-list
            .groupedCalls=${groupedCalls}
            .hasAnyCalls=${this.callHistory.length > 0}
            .defaultDialCode=${this.defaultDialCode}
            .loading=${this.loading}
            @call-item-clicked=${this._handleCallItemClicked}
          ></tsuryphone-call-log-list>
        </div>
      </div>
    `;
    }
};
TsuryPhoneHomeView.styles = i$3 `
    :host {
      display: flex;
      flex-direction: column;
      flex: 1;
      min-height: 0;
      background: var(--card-background-color);
    }

    .home-view {
      display: flex;
      flex-direction: column;
      flex: 1;
      overflow: hidden;
    }

    .scrollable-content {
      flex: 1;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
      min-height: 0;
    }

    .divider {
      height: 1px;
      background: var(--divider-color);
      margin: 0 16px;
    }

    /* Mobile optimizations */
    @media (max-width: 599px) {
      .home-view {
        font-size: 14px;
      }
    }

    /* Tablet */
    @media (min-width: 600px) and (max-width: 1023px) {
      .home-view {
        max-width: 600px;
        margin: 0 auto;
      }
    }

    /* Desktop */
    @media (min-width: 1024px) {
      .home-view {
        max-width: 800px;
        margin: 0 auto;
      }
    }
  `;
__decorate([
    n({ type: Array })
], TsuryPhoneHomeView.prototype, "callHistory", void 0);
__decorate([
    n({ type: Boolean })
], TsuryPhoneHomeView.prototype, "loading", void 0);
__decorate([
    n({ type: String })
], TsuryPhoneHomeView.prototype, "defaultDialCode", void 0);
__decorate([
    r()
], TsuryPhoneHomeView.prototype, "_activeFilter", void 0);
TsuryPhoneHomeView = __decorate([
    t("tsuryphone-home-view")
], TsuryPhoneHomeView);

/**
 * Entity Discovery Utilities
 * Discover related entities from a device without hardcoded naming patterns
 */
/**
 * Get the device ID from an entity using WebSocket API
 */
async function getDeviceIdFromEntity(hass, entityId) {
    try {
        const entities = await hass.callWS({
            type: "config/entity_registry/list",
        });
        const entity = entities.find((e) => e.entity_id === entityId);
        return entity?.device_id || null;
    }
    catch (error) {
        console.error("[EntityDiscovery] Failed to get device ID:", error);
        return null;
    }
}
/**
 * Get all entities belonging to a device
 */
async function getDeviceEntities(hass, deviceId) {
    try {
        const entities = await hass.callWS({
            type: "config/entity_registry/list",
        });
        return entities
            .filter((e) => e.device_id === deviceId)
            .map((e) => e.entity_id);
    }
    catch (error) {
        console.error("[EntityDiscovery] Failed to get device entities:", error);
        return [];
    }
}
/**
 * Discover all TsuryPhone entities from a single phone_state entity
 */
async function discoverTsuryPhoneEntities(hass, phoneStateEntityId) {
    // Get the device ID from the phone_state entity
    const deviceId = await getDeviceIdFromEntity(hass, phoneStateEntityId);
    if (!deviceId) {
        console.error("[EntityDiscovery] Could not find device ID for entity:", phoneStateEntityId);
        return {
            phoneState: phoneStateEntityId,
            currentDialingNumber: null,
            callHistory: null,
            currentCallNumber: null,
        };
    }
    // Get all entities for this device
    const allEntityIds = await getDeviceEntities(hass, deviceId);
    // Find specific entities by matching patterns in entity_id
    const result = {
        phoneState: phoneStateEntityId,
        currentDialingNumber: allEntityIds.find((id) => id.includes("current_dialing_number")) || null,
        callHistory: allEntityIds.find((id) => id.includes("call_history")) || null,
        currentCallNumber: allEntityIds.find((id) => id.includes("current_call_number")) || null,
    };
    return result;
}
/**
 * Cache for discovered entities to avoid repeated WebSocket calls
 */
const entityCache = new Map();
/**
 * Get discovered entities with caching
 */
async function getCachedTsuryPhoneEntities(hass, phoneStateEntityId) {
    if (entityCache.has(phoneStateEntityId)) {
        return entityCache.get(phoneStateEntityId);
    }
    const entities = await discoverTsuryPhoneEntities(hass, phoneStateEntityId);
    entityCache.set(phoneStateEntityId, entities);
    return entities;
}

/**
 * Haptic Feedback Utility
 * Uses Home Assistant Companion app's haptic feedback system
 * https://companion.home-assistant.io/docs/integrations/haptics/
 */
/**
 * Trigger haptic feedback using Home Assistant Companion app
 * Falls back to vibration API if not in HA app
 */
function triggerHaptic(type = "light") {
    // Fire haptic event for Home Assistant Companion app
    window.dispatchEvent(new CustomEvent("haptic", {
        detail: type,
    }));
    // Fallback to vibration API for browsers without HA Companion app
    if ("vibrate" in navigator) {
        const fallbackPatterns = {
            success: 50,
            warning: [30, 10, 30],
            failure: [50, 10, 50, 10, 50],
            light: 10,
            medium: 20,
            heavy: 30,
            selection: 5,
        };
        const pattern = fallbackPatterns[type];
        navigator.vibrate(pattern);
    }
}

/**
 * Dialed Number Display Component
 * Shows the currently dialed number with backspace functionality
 */
let TsuryPhoneDialedNumberDisplay = class TsuryPhoneDialedNumberDisplay extends i {
    constructor() {
        super(...arguments);
        this.dialedNumber = "";
        this._isLongPressing = false;
    }
    static get styles() {
        return i$3 `
      :host {
        display: block;
      }

      .display-container {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 64px;
        padding: 12px 16px;
        background: var(--card-background-color);
        border-bottom: 2px solid var(--divider-color);
        position: relative;
      }

      .number-display {
        flex: 1;
        font-size: 32px;
        font-weight: 300;
        color: var(--primary-text-color);
        letter-spacing: 2px;
        text-align: center;
        min-height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        user-select: none;
      }

      .number-display.empty {
        color: var(--secondary-text-color);
        font-size: 18px;
        font-weight: 400;
        letter-spacing: normal;
      }

      .backspace-button {
        position: absolute;
        right: 16px;
        width: 40px;
        height: 40px;
        border: none;
        background: transparent;
        cursor: pointer;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background 0.2s;
        flex-shrink: 0;
      }

      .backspace-button:hover {
        background: var(--secondary-background-color);
      }

      .backspace-button:active {
        background: var(--divider-color);
      }

      .backspace-button:disabled {
        opacity: 0.3;
        cursor: not-allowed;
      }

      .backspace-button:disabled:hover {
        background: transparent;
      }

      .backspace-icon {
        width: 24px;
        height: 24px;
        fill: var(--primary-text-color);
      }

      .placeholder {
        opacity: 0.5;
      }
    `;
    }
    _handleBackspace() {
        if (this._isLongPressing) {
            // Don't fire regular backspace if long press just completed
            return;
        }
        this.dispatchEvent(new CustomEvent("backspace", { bubbles: true, composed: true }));
    }
    _handleLongPress() {
        // Long press on backspace clears all
        this._isLongPressing = true;
        this.dispatchEvent(new CustomEvent("clear", { bubbles: true, composed: true }));
    }
    _handleTouchStart(e) {
        e.preventDefault(); // Prevent context menu on mobile
        this._isLongPressing = false;
        this._longPressTimer = window.setTimeout(() => {
            this._handleLongPress();
        }, 500); // 500ms for long press
    }
    _handleTouchEnd(e) {
        e.preventDefault(); // Prevent click event from firing
        const wasLongPress = this._isLongPressing;
        if (this._longPressTimer) {
            clearTimeout(this._longPressTimer);
            this._longPressTimer = undefined;
        }
        // If it wasn't a long press, fire a regular backspace
        if (!wasLongPress) {
            this._handleBackspace();
        }
        // Small delay to reset long press state
        if (this._isLongPressing) {
            setTimeout(() => {
                this._isLongPressing = false;
            }, 100);
        }
    }
    _handleTouchCancel() {
        if (this._longPressTimer) {
            clearTimeout(this._longPressTimer);
            this._longPressTimer = undefined;
        }
        this._isLongPressing = false;
    }
    _handleMouseDown() {
        this._isLongPressing = false;
        this._longPressTimer = window.setTimeout(() => {
            this._handleLongPress();
        }, 500); // 500ms for long press
    }
    _handleMouseUp() {
        const wasLongPress = this._isLongPressing;
        if (this._longPressTimer) {
            clearTimeout(this._longPressTimer);
            this._longPressTimer = undefined;
        }
        // If it wasn't a long press, fire a regular backspace
        if (!wasLongPress) {
            this._handleBackspace();
        }
        // Small delay to reset long press state
        if (this._isLongPressing) {
            setTimeout(() => {
                this._isLongPressing = false;
            }, 100);
        }
    }
    _handleMouseLeave() {
        if (this._longPressTimer) {
            clearTimeout(this._longPressTimer);
            this._longPressTimer = undefined;
        }
        this._isLongPressing = false;
    }
    _formatDialedNumber(number) {
        if (!number)
            return "";
        // Format the number with spaces for readability
        // Simple formatting: add space every 3 digits (can be enhanced)
        let formatted = "";
        for (let i = 0; i < number.length; i++) {
            if (i > 0 && i % 3 === 0) {
                formatted += " ";
            }
            formatted += number[i];
        }
        return formatted;
    }
    render() {
        const hasNumber = this.dialedNumber.length > 0;
        const formattedNumber = this._formatDialedNumber(this.dialedNumber);
        return x `
      <div class="display-container">
        <div class="number-display ${!hasNumber ? "empty" : ""}">
          ${hasNumber ? formattedNumber : ""}
        </div>
        <button
          class="backspace-button"
          @touchstart=${this._handleTouchStart}
          @touchend=${this._handleTouchEnd}
          @touchcancel=${this._handleTouchCancel}
          @mousedown=${this._handleMouseDown}
          @mouseup=${this._handleMouseUp}
          @mouseleave=${this._handleMouseLeave}
          @contextmenu=${(e) => {
            e.preventDefault();
            this._handleLongPress();
        }}
          ?disabled=${!hasNumber}
          aria-label="Backspace"
          title="Click to delete, long-press to clear all"
        >
          <svg class="backspace-icon" viewBox="0 0 24 24">
            <path
              d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"
            />
          </svg>
        </button>
      </div>
    `;
    }
};
__decorate([
    n({ type: String })
], TsuryPhoneDialedNumberDisplay.prototype, "dialedNumber", void 0);
__decorate([
    r()
], TsuryPhoneDialedNumberDisplay.prototype, "_longPressTimer", void 0);
__decorate([
    r()
], TsuryPhoneDialedNumberDisplay.prototype, "_isLongPressing", void 0);
TsuryPhoneDialedNumberDisplay = __decorate([
    t("tsuryphone-dialed-number-display")
], TsuryPhoneDialedNumberDisplay);

/**
 * Keypad Grid Component
 * 3x4 grid of number buttons with *, 0, # on bottom row
 */
let TsuryPhoneKeypadGrid = class TsuryPhoneKeypadGrid extends i {
    constructor() {
        super(...arguments);
        this._longPressTimer = null;
        this._longPressTriggered = false;
        this._pressedButton = null;
        this._buttons = [
            { digit: "1", letters: "" },
            { digit: "2", letters: "ABC" },
            { digit: "3", letters: "DEF" },
            { digit: "4", letters: "GHI" },
            { digit: "5", letters: "JKL" },
            { digit: "6", letters: "MNO" },
            { digit: "7", letters: "PQRS" },
            { digit: "8", letters: "TUV" },
            { digit: "9", letters: "WXYZ" },
            { digit: "*", letters: "" },
            { digit: "0", letters: "+", longPressDigit: "+" },
            { digit: "#", letters: "" },
        ];
    }
    static get styles() {
        return i$3 `
      :host {
        display: block;
      }

      .keypad-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 12px;
        max-width: 320px;
        margin: 0 auto;
        padding: 24px 32px;
        box-sizing: border-box;
      }

      .keypad-button {
        aspect-ratio: 1;
        border: none;
        background: var(--card-background-color);
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 28px;
        font-weight: 300;
        color: var(--primary-text-color);
        transition:
          background 0.15s,
          transform 0.1s;
        box-shadow: var(--ha-card-box-shadow, 0 2px 4px rgba(0, 0, 0, 0.1));
        user-select: none;
        -webkit-tap-highlight-color: transparent;
        position: relative;
        min-height: 72px;
      }

      .keypad-button:hover {
        background: var(--secondary-background-color);
      }

      .keypad-button.pressed {
        transform: scale(0.95);
        background: var(--divider-color);
      }

      .keypad-button.long-press-active {
        background: var(--primary-color);
        color: var(--text-primary-color);
      }

      .digit {
        font-size: 32px;
        font-weight: 400;
        line-height: 1;
      }

      .letters {
        font-size: 10px;
        font-weight: 500;
        letter-spacing: 1px;
        margin-top: 4px;
        opacity: 0.6;
        text-transform: uppercase;
        height: 14px;
        line-height: 14px;
      }

      .letters-placeholder {
        height: 14px;
        margin-top: 4px;
      }

      .long-press-hint {
        position: absolute;
        top: 4px;
        right: 4px;
        font-size: 12px;
        opacity: 0.5;
      }

      @media (max-width: 400px) {
        .keypad-grid {
          gap: 12px;
          padding: 16px 24px;
        }

        .keypad-button {
          min-height: 64px;
        }

        .digit {
          font-size: 28px;
        }
      }
    `;
    }
    _handlePointerDown(button) {
        this._longPressTriggered = false;
        this._pressedButton = button.digit;
        // Start long press timer if button supports it
        if (button.longPressDigit) {
            this._longPressTimer = window.setTimeout(() => {
                this._longPressTriggered = true;
                this._emitDigit(button.longPressDigit);
                triggerHaptic("selection");
            }, 500);
        }
    }
    _handlePointerUp(button) {
        // Clear pressed state
        this._pressedButton = null;
        // Clear long press timer
        if (this._longPressTimer) {
            clearTimeout(this._longPressTimer);
            this._longPressTimer = null;
        }
        // If long press was triggered, don't emit the regular digit
        if (this._longPressTriggered) {
            this._longPressTriggered = false;
            return;
        }
        // Emit the regular digit
        this._emitDigit(button.digit);
        triggerHaptic("selection");
    }
    _handlePointerCancel() {
        // Clear pressed state
        this._pressedButton = null;
        // Clear long press timer if pointer is cancelled (e.g., scrolling)
        if (this._longPressTimer) {
            clearTimeout(this._longPressTimer);
            this._longPressTimer = null;
        }
        this._longPressTriggered = false;
    }
    _emitDigit(digit) {
        this.dispatchEvent(new CustomEvent("digit-press", {
            detail: { digit },
            bubbles: true,
            composed: true,
        }));
    }
    render() {
        return x `
      <div class="keypad-grid">
        ${this._buttons.map((button) => x `
            <button
              class="keypad-button ${this._pressedButton === button.digit
            ? "pressed"
            : ""}"
              @pointerdown=${() => this._handlePointerDown(button)}
              @pointerup=${() => this._handlePointerUp(button)}
              @pointercancel=${() => this._handlePointerCancel()}
              aria-label="${button.digit}${button.letters
            ? ` ${button.letters}`
            : ""}"
              title="${button.longPressDigit
            ? `Long press for ${button.longPressDigit}`
            : ""}"
            >
              <span class="digit">${button.digit}</span>
              ${button.letters
            ? x `<span class="letters">${button.letters}</span>`
            : x `<span class="letters-placeholder"></span>`}
              ${button.longPressDigit &&
            button.longPressDigit !== button.letters
            ? x `<span class="long-press-hint"
                    >${button.longPressDigit}</span
                  >`
            : ""}
            </button>
          `)}
      </div>
    `;
    }
};
__decorate([
    r()
], TsuryPhoneKeypadGrid.prototype, "_pressedButton", void 0);
TsuryPhoneKeypadGrid = __decorate([
    t("tsuryphone-keypad-grid")
], TsuryPhoneKeypadGrid);

/**
 * Keypad View Component
 * Main container for the dialing keypad
 */
let TsuryPhoneKeypadView = class TsuryPhoneKeypadView extends i {
    constructor() {
        super(...arguments);
        // Discovered entities (populated asynchronously)
        this._entities = null;
    }
    async firstUpdated() {
        // Discover all entities from the device on first load
        const phoneStateEntityId = this._getPhoneStateEntityId();
        this._entities = await getCachedTsuryPhoneEntities(this.hass, phoneStateEntityId);
        this.requestUpdate(); // Trigger re-render with discovered entities
    }
    shouldUpdate(changedProps) {
        if (changedProps.has("hass") && this._entities?.currentDialingNumber) {
            const oldHass = changedProps.get("hass");
            if (oldHass) {
                const entityId = this._entities.currentDialingNumber;
                const oldState = oldHass.states[entityId]?.state;
                const newState = this.hass.states[entityId]?.state;
                // Force update if the dialing number changed
                if (oldState !== newState) {
                    return true;
                }
            }
        }
        return super.shouldUpdate(changedProps);
    }
    static get styles() {
        return i$3 `
      :host {
        display: flex;
        flex-direction: column;
        flex: 1;
        min-height: 0;
        background: var(--card-background-color);
        padding: 16px;
        box-sizing: border-box;
      }

      .keypad-container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex: 1;
        max-width: 400px;
        margin: 0 auto;
        width: 100%;
        padding: 60px 0;
        box-sizing: border-box;
      }

      .display-section {
        flex: 0 0 auto;
        margin-bottom: 24px;
      }

      .keypad-section {
        flex: 1 1 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      .call-button-section {
        flex: 0 0 auto;
        margin-top: 24px;
        padding: 0 16px;
      }

      .call-button {
        min-width: 96px;
        height: 64px;
        padding: 0 24px;
        border-radius: 32px;
        background: var(--success-color);
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        margin: 0 auto;
        transition:
          transform 0.1s,
          box-shadow 0.2s;
        box-shadow: var(--ha-card-box-shadow, 0 2px 8px rgba(0, 0, 0, 0.2));
        color: var(--text-primary-color, white);
        font-size: 16px;
        font-weight: 500;
      }

      .call-button:hover {
        transform: scale(1.05);
        filter: brightness(1.1);
      }

      .call-button:active {
        transform: scale(0.95);
      }

      .call-button:disabled {
        background: var(--disabled-color);
        opacity: 0.5;
        cursor: not-allowed;
        box-shadow: none;
      }

      .call-button:disabled:hover {
        transform: none;
        filter: none;
      }

      .call-icon {
        width: 24px;
        height: 24px;
        fill: currentColor;
      }
    `;
    }
    async _handleDigitPress(digit) {
        triggerHaptic("selection");
        try {
            // Handle + for international dialing, otherwise convert to number
            const digitValue = digit === "+" ? "+" : parseInt(digit, 10);
            // Send digit to backend - no optimistic update
            await this.hass.callService("tsuryphone", "dial_digit", {
                digit: digitValue,
            }, {
                entity_id: this._getPhoneStateEntityId(),
            });
        }
        catch (error) {
            console.error("Failed to dial digit:", error);
            triggerHaptic("failure");
        }
    }
    async _handleBackspace() {
        const currentNumber = this._getCurrentDialingNumber();
        if (!currentNumber)
            return;
        try {
            // Request delete from backend - no optimistic update
            await this.hass.callService("tsuryphone", "delete_last_digit", {}, {
                entity_id: this._getPhoneStateEntityId(),
            });
            triggerHaptic("selection");
        }
        catch (err) {
            console.error("Failed to delete last digit:", err);
            triggerHaptic("failure");
        }
    }
    async _handleClear() {
        // Clear all digits by calling hangup service (which clears dialing buffer)
        triggerHaptic("medium");
        try {
            await this.hass.callService("tsuryphone", "hangup", {}, {
                entity_id: this._getPhoneStateEntityId(),
            });
        }
        catch (err) {
            console.error("Failed to clear digits:", err);
            triggerHaptic("failure");
        }
    }
    async _handleCall() {
        if (!this._canCall())
            return;
        const numberToDial = this._getCurrentDialingNumber() || this._getLastCalledNumber();
        if (!numberToDial)
            return;
        triggerHaptic("medium");
        try {
            // Call the dial service
            await this.hass.callService("tsuryphone", "dial", {
                number: numberToDial,
            }, {
                entity_id: this._getPhoneStateEntityId(),
            });
            // The backend will clear the dialing number after successful dial
        }
        catch (error) {
            console.error("Failed to dial number:", error);
            triggerHaptic("failure");
        }
    }
    _canCall() {
        // Can call if we have a dialed number OR we have call history to redial
        return !!this._getCurrentDialingNumber() || !!this._getLastCalledNumber();
    }
    _getCurrentDialingNumber() {
        // Use discovered entity if available
        if (!this._entities?.currentDialingNumber) {
            return "";
        }
        const entityId = this._entities.currentDialingNumber;
        const entity = this.hass?.states[entityId];
        const result = entity?.state && entity.state !== "unknown" ? entity.state : "";
        return result;
    }
    _getPhoneStateEntityId() {
        const deviceId = this.config?.device_id || "tsuryphone";
        if (this.config?.entity) {
            return this.config.entity.startsWith("sensor.")
                ? this.config.entity
                : `sensor.${this.config.entity}`;
        }
        return `sensor.${deviceId}_phone_state`;
    }
    _getLastCalledNumber() {
        const phoneStateEntityId = this._getPhoneStateEntityId();
        const phoneState = this.hass?.states[phoneStateEntityId];
        const callHistory = phoneState?.attributes?.call_log || [];
        if (callHistory.length === 0)
            return null;
        // Get the most recent call
        const lastCall = callHistory[0];
        return lastCall.number || null;
    }
    render() {
        const dialedNumber = this._getCurrentDialingNumber();
        return x `
      <div class="keypad-container">
        <div class="display-section">
          <tsuryphone-dialed-number-display
            .dialedNumber=${dialedNumber}
            @backspace=${this._handleBackspace}
            @clear=${this._handleClear}
          ></tsuryphone-dialed-number-display>
        </div>

        <div class="keypad-section">
          <tsuryphone-keypad-grid
            @digit-press=${(e) => this._handleDigitPress(e.detail.digit)}
          ></tsuryphone-keypad-grid>
        </div>

        <div class="call-button-section">
          <button
            class="call-button"
            @click=${this._handleCall}
            ?disabled=${!this._canCall()}
            aria-label="Call"
          >
            <svg class="call-icon" viewBox="0 0 24 24">
              <path
                d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"
              />
            </svg>
            <span>Call</span>
          </button>
        </div>
      </div>
    `;
    }
};
__decorate([
    n({ attribute: false })
], TsuryPhoneKeypadView.prototype, "hass", void 0);
__decorate([
    n({ attribute: false })
], TsuryPhoneKeypadView.prototype, "config", void 0);
__decorate([
    r()
], TsuryPhoneKeypadView.prototype, "_entities", void 0);
TsuryPhoneKeypadView = __decorate([
    t("tsuryphone-keypad-view")
], TsuryPhoneKeypadView);

/**
 * Avatar Circle Component
 * Reusable avatar with letter and color
 */
let TsuryPhoneAvatar = class TsuryPhoneAvatar extends i {
    constructor() {
        super(...arguments);
        this.name = "";
        this.size = "medium";
    }
    static get styles() {
        return [
            avatarStyles,
            i$3 `
        :host {
          display: inline-block;
        }
      `,
        ];
    }
    render() {
        const letter = getAvatarLetter(this.name);
        const backgroundColor = this.color || generateColor(this.name);
        const sizeClass = this.size === "medium" ? "" : this.size;
        return x `
      <div
        class="avatar ${sizeClass}"
        style="background-color: ${backgroundColor}"
      >
        ${letter}
      </div>
    `;
    }
};
__decorate([
    n({ type: String })
], TsuryPhoneAvatar.prototype, "name", void 0);
__decorate([
    n({ type: String })
], TsuryPhoneAvatar.prototype, "size", void 0);
__decorate([
    n({ type: String })
], TsuryPhoneAvatar.prototype, "color", void 0);
TsuryPhoneAvatar = __decorate([
    t("tsuryphone-avatar")
], TsuryPhoneAvatar);

/**
 * Contact Item Component
 * Individual contact list item
 */
let TsuryPhoneContactItem = class TsuryPhoneContactItem extends i {
    static get styles() {
        return [
            listItemStyles,
            buttonStyles,
            i$3 `
        :host {
          display: block;
        }

        .contact-info {
          display: flex;
          align-items: center;
          gap: 12px;
          flex: 1;
          min-width: 0;
        }

        .avatar-container {
          position: relative;
        }

        .priority-badge {
          position: absolute;
          top: -4px;
          right: -4px;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: var(--warning-color);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--ha-card-box-shadow, 0 2px 4px rgba(0, 0, 0, 0.2));
        }

        .priority-badge ha-icon {
          --mdc-icon-size: 14px;
          color: var(--text-primary-color, white);
        }

        .contact-details {
          flex: 1;
          min-width: 0;
        }

        .contact-name {
          font-size: 16px;
          font-weight: 500;
          color: var(--primary-text-color);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .contact-number {
          font-size: 14px;
          color: var(--secondary-text-color);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .contact-actions {
          display: flex;
          gap: 8px;
        }

        .call-button {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: none;
          background: var(--primary-color);
          color: var(--text-primary-color, white);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
        }

        .call-button:hover {
          background: var(--dark-primary-color, var(--primary-color));
          transform: scale(1.05);
        }

        .call-button:active {
          transform: scale(0.95);
        }
      `,
        ];
    }
    _getPhoneStateEntityId() {
        const deviceId = this.config?.device_id || "tsuryphone";
        if (this.config?.entity) {
            return this.config.entity.startsWith("sensor.")
                ? this.config.entity
                : `sensor.${this.config.entity}`;
        }
        return `sensor.${deviceId}_phone_state`;
    }
    async _handleCall() {
        triggerHaptic("medium");
        try {
            await this.hass.callService("tsuryphone", "dial", {
                number: this.contact.number,
            }, {
                entity_id: this._getPhoneStateEntityId(),
            });
        }
        catch (error) {
            console.error("[ContactItem] Failed to dial:", error);
        }
    }
    _handleEdit() {
        triggerHaptic("selection");
        this.dispatchEvent(new CustomEvent("edit-contact", {
            detail: { contact: this.contact },
            bubbles: true,
            composed: true,
        }));
    }
    render() {
        // Get default dial code from phone state
        const phoneState = this.hass?.states[this._getPhoneStateEntityId()];
        const defaultDialCode = phoneState?.attributes?.dialing_context?.default_code || "";
        const formattedNumber = normalizePhoneNumberForDisplay(this.contact.display_number || this.contact.number, defaultDialCode);
        // Check if contact is priority by looking in priority_callers list
        const priorityCallers = phoneState?.attributes?.priority_callers || [];
        const isPriority = priorityCallers.some((p) => p.number === this.contact.number // Both are normalized E.164 format
        );
        return x `
      <div class="list-item" @click=${this._handleEdit}>
        <div class="contact-info">
          <div class="avatar-container">
            <tsuryphone-avatar .name=${this.contact.name}></tsuryphone-avatar>
            ${isPriority
            ? x `
                  <div class="priority-badge">
                    <ha-icon icon="mdi:star"></ha-icon>
                  </div>
                `
            : ""}
          </div>
          <div class="contact-details">
            <div class="contact-name">
              ${this.contact.name}
            </div>
            <div class="contact-number">${formattedNumber}</div>
          </div>
        </div>
        <div class="contact-actions">
          <button
            class="call-button"
            @click=${(e) => {
            e.stopPropagation();
            this._handleCall();
        }}
            title="Call ${this.contact.name}"
          >
            <ha-icon icon="mdi:phone"></ha-icon>
          </button>
        </div>
      </div>
    `;
    }
};
__decorate([
    n({ attribute: false })
], TsuryPhoneContactItem.prototype, "hass", void 0);
__decorate([
    n({ attribute: false })
], TsuryPhoneContactItem.prototype, "config", void 0);
__decorate([
    n({ attribute: false })
], TsuryPhoneContactItem.prototype, "contact", void 0);
TsuryPhoneContactItem = __decorate([
    t("tsuryphone-contact-item")
], TsuryPhoneContactItem);

/**
 * Contacts View Component
 * Main container for contacts management
 */
let TsuryPhoneContactsView = class TsuryPhoneContactsView extends i {
    constructor() {
        super(...arguments);
        this._searchQuery = "";
        this._showAddModal = false;
    }
    static get styles() {
        return i$3 `
      :host {
        display: flex;
        flex-direction: column;
        flex: 1;
        min-height: 0;
        background: var(--card-background-color);
      }

      .contacts-header {
        padding: 16px;
        border-bottom: 1px solid var(--divider-color);
        display: flex;
        flex-direction: column;
        gap: 12px;
        position: sticky;
        top: 0;
        background: var(--card-background-color);
        z-index: 2;
      }

      .search-bar-container {
        width: 100%;
      }

      .search-bar {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 12px 16px;
        background: var(--secondary-background-color);
        border-radius: 12px;
        width: 100%;
        box-sizing: border-box;
      }

      .hamburger-button {
        width: 40px;
        height: 40px;
        border-radius: 12px;
        border: none;
        background: transparent;
        color: var(--primary-text-color);
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background 0.2s, transform 0.2s;
      }

      .hamburger-button:hover {
        background: var(--divider-color);
      }

      .hamburger-button:active {
        transform: scale(0.95);
      }

      .clear-button {
        width: 32px;
        height: 32px;
        border-radius: 8px;
        border: none;
        background: transparent;
        color: var(--secondary-text-color);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: background 0.2s, color 0.2s;
      }

      .clear-button:hover {
        background: var(--divider-color);
        color: var(--primary-text-color);
      }

      .clear-button ha-icon {
        --mdc-icon-size: 18px;
      }

      .search-input {
        flex: 1;
        border: none;
        background: transparent;
        font-size: 16px;
        color: var(--primary-text-color);
        outline: none;
      }

      .search-input::placeholder {
        color: var(--secondary-text-color);
      }

      .add-button {
        width: 100%;
        padding: 12px;
        border-radius: 8px;
        border: none;
        background: var(--primary-color);
        color: var(--text-primary-color, white);
        font-size: 16px;
        font-weight: 500;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        transition: all 0.2s;
      }

      .add-button:hover {
        background: var(--dark-primary-color, var(--primary-color));
      }

      .add-button:active {
        transform: scale(0.98);
      }

      .contacts-list {
        flex: 1;
        overflow-y: auto;
        min-height: 0;
      }

      .section-header {
        padding: 12px 16px;
        background: var(--secondary-background-color);
        font-size: 14px;
        font-weight: 500;
        color: var(--secondary-text-color);
        position: sticky;
        top: 0;
        z-index: 1;
      }
    `;
    }
    _getContacts() {
        const phoneStateEntityId = this._getPhoneStateEntityId();
        const phoneState = this.hass?.states[phoneStateEntityId];
        const contacts = phoneState?.attributes?.quick_dials || [];
        return contacts;
    }
    _getFilteredContacts() {
        const contacts = this._getContacts();
        if (!this._searchQuery.trim()) {
            return contacts;
        }
        const query = this._searchQuery.toLowerCase();
        return contacts.filter((contact) => contact.name?.toLowerCase().includes(query) ||
            contact.number?.toLowerCase().includes(query) ||
            contact.code?.toLowerCase().includes(query));
    }
    _groupContactsByLetter() {
        const contacts = this._getFilteredContacts();
        const grouped = new Map();
        contacts.forEach((contact) => {
            const firstLetter = (contact.name?.[0] || "#").toUpperCase();
            if (!grouped.has(firstLetter)) {
                grouped.set(firstLetter, []);
            }
            grouped.get(firstLetter).push(contact);
        });
        // Sort groups alphabetically
        return new Map([...grouped.entries()].sort());
    }
    _getPhoneStateEntityId() {
        const deviceId = this.config?.device_id || "tsuryphone";
        if (this.config?.entity) {
            return this.config.entity.startsWith("sensor.")
                ? this.config.entity
                : `sensor.${this.config.entity}`;
        }
        return `sensor.${deviceId}_phone_state`;
    }
    _handleSearch(e) {
        const input = e.target;
        this._searchQuery = input.value;
    }
    _clearSearch() {
        this._searchQuery = "";
    }
    _handleAddContact() {
        this.dispatchEvent(new CustomEvent("action", {
            bubbles: true,
            composed: true,
        }));
    }
    _handleMenuOpen() {
        this.dispatchEvent(new CustomEvent("open-menu", {
            bubbles: true,
            composed: true,
        }));
    }
    render() {
        const contacts = this._getContacts();
        const groupedContacts = this._groupContactsByLetter();
        return x `
      <div class="contacts-header">
        <div class="search-bar-container">
          <div class="search-bar">
            <button
              class="hamburger-button"
              @click=${this._handleMenuOpen}
              title="Open menu"
              aria-label="Open menu"
            >
              <ha-icon icon="mdi:menu"></ha-icon>
            </button>
            <input
              class="search-input"
              type="text"
              placeholder="Search contacts"
              .value=${this._searchQuery}
              @input=${this._handleSearch}
            />
            ${this._searchQuery
            ? x `
                  <button
                    class="clear-button"
                    @click=${this._clearSearch}
                    aria-label="Clear search"
                  >
                    <ha-icon icon="mdi:close"></ha-icon>
                  </button>
                `
            : ""}
          </div>
        </div>
        <button class="add-button" @click=${this._handleAddContact}>
          <ha-icon icon="mdi:plus"></ha-icon>
          Create contact
        </button>
      </div>

      <div class="contacts-list">
        ${contacts.length === 0
            ? x `
              <tsuryphone-empty-state
                icon="mdi:contacts-outline"
                title="No contacts yet"
                message="Add your first contact to get started"
                actionLabel="Create contact"
                .onAction=${() => this._handleAddContact()}
              ></tsuryphone-empty-state>
            `
            : groupedContacts.size === 0
                ? x `
                <tsuryphone-empty-state
                  icon="mdi:magnify"
                  title="No results"
                  message="No contacts match your search"
                ></tsuryphone-empty-state>
              `
                : Array.from(groupedContacts.entries()).map(([letter, contacts]) => x `
                  <div class="section-header">${letter}</div>
                  ${contacts.map((contact) => x `
                      <tsuryphone-contact-item
                        .hass=${this.hass}
                        .config=${this.config}
                        .contact=${contact}
                      ></tsuryphone-contact-item>
                    `)}
                `)}
      </div>
    `;
    }
};
__decorate([
    n({ attribute: false })
], TsuryPhoneContactsView.prototype, "hass", void 0);
__decorate([
    n({ attribute: false })
], TsuryPhoneContactsView.prototype, "config", void 0);
__decorate([
    r()
], TsuryPhoneContactsView.prototype, "_searchQuery", void 0);
__decorate([
    r()
], TsuryPhoneContactsView.prototype, "_showAddModal", void 0);
TsuryPhoneContactsView = __decorate([
    t("tsuryphone-contacts-view")
], TsuryPhoneContactsView);

/**
 * Blocked Number Item Component
 * Displays a single blocked number entry with remove action
 */
let TsuryPhoneBlockedItem = class TsuryPhoneBlockedItem extends i {
    _handleRemoveClick() {
        this.dispatchEvent(new CustomEvent('remove-blocked', {
            detail: { id: this.entry.id },
            bubbles: true,
            composed: true,
        }));
    }
    render() {
        const { name, display_number, number } = this.entry;
        const displayNumber = display_number || number || 'Unknown';
        return x `
      <div class="blocked-item">
        <div class="blocked-info">
          <div class="blocked-number">${displayNumber}</div>
          ${name
            ? x `<div class="blocked-name">${name}</div>`
            : x `<div class="blocked-name muted">Unknown contact name</div>`}
        </div>
        <button
          class="remove-button"
          @click=${this._handleRemoveClick}
          aria-label="Remove blocked number"
          title="Remove blocked number"
        >
          <ha-icon icon="mdi:delete"></ha-icon>
        </button>
      </div>
    `;
    }
    static get styles() {
        return [
            haThemeVariables,
            i$3 `
        :host {
          display: block;
        }

        .blocked-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 12px 16px;
          border-bottom: 1px solid var(--tsury-divider-color);
          background: transparent;
          transition: background 0.2s ease;
        }

        .blocked-item:hover {
          background: var(--tsury-hover-background-color);
        }

        .blocked-info {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .blocked-number {
          font-size: 16px;
          color: var(--tsury-primary-text-color);
          font-weight: 500;
        }

        .blocked-name {
          font-size: 14px;
          color: var(--tsury-secondary-text-color);
        }

        .blocked-name.muted {
          opacity: 0.6;
        }

        .remove-button {
          width: 36px;
          height: 36px;
          border-radius: 18px;
          border: none;
          background: transparent;
          color: var(--tsury-secondary-text-color);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease;
        }

        .remove-button:hover {
          background: var(--tsury-hover-background-color);
          color: var(--tsury-primary-text-color);
        }

        .remove-button:active {
          transform: scale(0.94);
        }

        .remove-button ha-icon {
          --mdc-icon-size: 18px;
        }
      `,
        ];
    }
};
__decorate([
    n({ attribute: false })
], TsuryPhoneBlockedItem.prototype, "entry", void 0);
TsuryPhoneBlockedItem = __decorate([
    t('tsuryphone-blocked-item')
], TsuryPhoneBlockedItem);

/**
 * Blocked View Component
 * Displays and manages blocked numbers list
 */
let TsuryPhoneBlockedView = class TsuryPhoneBlockedView extends i {
    constructor() {
        super(...arguments);
        this.blockedNumbers = [];
        this._newNumber = "";
        this._newName = "";
        this._isAdding = false;
        this._errorMessage = "";
    }
    _handleBack() {
        this.dispatchEvent(new CustomEvent("navigate-back", {
            bubbles: true,
            composed: true,
        }));
    }
    _handleNumberInput(event) {
        const input = event.target;
        this._newNumber = input.value;
        if (this._errorMessage) {
            this._errorMessage = "";
        }
    }
    _handleNameInput(event) {
        const input = event.target;
        this._newName = input.value;
        if (this._errorMessage) {
            this._errorMessage = "";
        }
    }
    _getPhoneStateEntityId() {
        const deviceIdPrefix = this.config?.device_id || "";
        return deviceIdPrefix
            ? `sensor.${deviceIdPrefix}_phone_state`
            : "sensor.phone_state";
    }
    async _handleAddNumber() {
        const rawNumber = this._newNumber.trim();
        const rawName = this._newName.trim();
        if (!rawNumber) {
            this._errorMessage = "Enter a phone number to block.";
            return;
        }
        if (!rawName) {
            this._errorMessage = "Enter a contact name to label the blocked number.";
            return;
        }
        const phoneStateEntityId = this._getPhoneStateEntityId();
        this._isAdding = true;
        try {
            await this.hass.callService("tsuryphone", "blocked_add", {
                number: rawNumber,
                name: rawName,
            }, { entity_id: phoneStateEntityId });
            this._newNumber = "";
            this._newName = "";
            this._errorMessage = "";
        }
        catch (error) {
            const message = error?.message || "Failed to block number.";
            this._errorMessage = message;
        }
        finally {
            this._isAdding = false;
        }
    }
    _handleAddKeydown(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            this._handleAddNumber();
        }
    }
    async _handleRemoveBlocked(e) {
        const { id } = e.detail;
        const deviceIdPrefix = this.config?.device_id || "";
        const phoneStateEntityId = deviceIdPrefix
            ? `sensor.${deviceIdPrefix}_phone_state`
            : `sensor.phone_state`;
        try {
            await this.hass.callService("tsuryphone", "blocked_remove", { id }, { entity_id: phoneStateEntityId });
        }
        catch (err) {
            console.error("Failed to remove blocked number:", err);
            // TODO: Show error toast
        }
    }
    render() {
        return x `
      <div class="blocked-view">
        <header class="top-bar">
          <button
            class="back-button"
            @click=${this._handleBack}
            aria-label="Back"
            title="Back"
          >
            <ha-icon icon="mdi:arrow-left"></ha-icon>
          </button>
          <div class="title-group">
            <h1>Blocked numbers</h1>
            <p>You won't receive calls or texts from blocked numbers.</p>
          </div>
        </header>

        <section class="add-section" aria-label="Add blocked number">
          <h2>Add a number</h2>
          <div class="add-row">
            <input
              class="number-input"
              type="tel"
              placeholder="Phone number"
              .value=${this._newNumber}
              @input=${this._handleNumberInput}
              @keydown=${this._handleAddKeydown}
              ?disabled=${this._isAdding}
            />
            <input
              class="name-input"
              type="text"
              placeholder="Contact name"
              .value=${this._newName}
              @input=${this._handleNameInput}
              @keydown=${this._handleAddKeydown}
              ?disabled=${this._isAdding}
            />
            <button
              class="add-button"
              @click=${this._handleAddNumber}
              ?disabled=${this._isAdding}
              aria-label="Block number"
            >
              ${this._isAdding
            ? x `<span class="spinner" role="progressbar"></span>`
            : x `<span>Block</span>`}
            </button>
          </div>
          ${this._errorMessage
            ? x `<div class="error-text">${this._errorMessage}</div>`
            : ""}
        </section>

        ${this.blockedNumbers.length === 0
            ? this._renderEmptyState()
            : this._renderBlockedList()}
      </div>
    `;
    }
    _renderEmptyState() {
        return x `
      <tsuryphone-empty-state
        icon="mdi:block-helper"
        title="No Blocked Numbers"
        message="Block unwanted callers to prevent them from reaching you."
      ></tsuryphone-empty-state>
    `;
    }
    _renderBlockedList() {
        return x `
      <div class="blocked-list" role="list">
        ${this.blockedNumbers.map((entry) => x `
            <tsuryphone-blocked-item
              .entry=${entry}
              @remove-blocked=${this._handleRemoveBlocked}
              role="listitem"
            ></tsuryphone-blocked-item>
          `)}
      </div>
      <footer class="blocked-count">
        ${this.blockedNumbers.length} blocked
        ${this.blockedNumbers.length === 1 ? "number" : "numbers"}
      </footer>
    `;
    }
    static get styles() {
        return [
            haThemeVariables,
            i$3 `
        :host {
          display: flex;
          flex-direction: column;
          flex: 1;
          min-height: 0;
          background: var(--tsury-card-background-color);
        }

        .blocked-view {
          flex: 1;
          display: flex;
          flex-direction: column;
          padding: 24px 20px 16px;
          box-sizing: border-box;
          gap: 24px;
        }

        .top-bar {
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }

        .back-button {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          border: none;
          background: transparent;
          color: var(--tsury-primary-text-color);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s ease, transform 0.2s ease;
        }

        .back-button:hover {
          background: var(--tsury-hover-background-color);
        }

        .back-button:active {
          transform: scale(0.95);
        }

        .title-group {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .title-group h1 {
          margin: 0;
          font-size: 24px;
          font-weight: 600;
          color: var(--tsury-primary-text-color);
        }

        .title-group p {
          margin: 0;
          font-size: 14px;
          color: var(--tsury-secondary-text-color);
        }

        .add-section {
          display: flex;
          flex-direction: column;
          gap: 12px;
          background: var(--tsury-surface-color, rgba(0, 0, 0, 0.04));
          padding: 16px;
          border-radius: 16px;
        }

        .add-section h2 {
          margin: 0;
          font-size: 16px;
          font-weight: 600;
          color: var(--tsury-primary-text-color);
        }

        .add-row {
          display: flex;
          gap: 12px;
          align-items: center;
          flex-wrap: wrap;
        }

        .number-input {
          flex: 1;
          padding: 12px 16px;
          border-radius: 12px;
          border: 1px solid var(--tsury-divider-color);
          font-size: 16px;
          color: var(--tsury-primary-text-color);
          background: var(--tsury-card-background-color);
          transition: border-color 0.2s ease;
        }

        .name-input {
          flex: 1;
          padding: 12px 16px;
          border-radius: 12px;
          border: 1px solid var(--tsury-divider-color);
          font-size: 16px;
          color: var(--tsury-primary-text-color);
          background: var(--tsury-card-background-color);
          transition: border-color 0.2s ease;
        }

        .number-input:focus {
          outline: none;
          border-color: var(--primary-color);
        }

        .name-input:focus {
          outline: none;
          border-color: var(--primary-color);
        }

        .add-button {
          min-width: 96px;
          padding: 12px 20px;
          border-radius: 12px;
          border: none;
          background: var(--primary-color);
          color: var(--text-primary-color, #fff);
          font-size: 15px;
          font-weight: 500;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: opacity 0.2s ease;
          flex: 0 0 auto;
          white-space: nowrap;
        }

        .add-button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .error-text {
          font-size: 13px;
          color: var(--error-color);
        }

        .blocked-list {
          flex: 1;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
          border-radius: 16px;
          background: var(--tsury-card-background-color);
          border: 1px solid var(--tsury-divider-color);
        }

        .blocked-count {
          font-size: 13px;
          color: var(--tsury-secondary-text-color);
          text-align: left;
          padding: 0 4px;
        }

        tsuryphone-empty-state {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .spinner {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          border: 2px solid currentColor;
          border-top-color: transparent;
          animation: spin 0.8s linear infinite;
          opacity: 0.6;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        .blocked-list::-webkit-scrollbar {
          width: 6px;
        }

        .blocked-list::-webkit-scrollbar-thumb {
          background: var(--tsury-scrollbar-thumb-color);
          border-radius: 3px;
        }

        .blocked-list::-webkit-scrollbar-thumb:hover {
          background: var(--tsury-scrollbar-thumb-hover-color);
        }

        @media (max-width: 480px) {
          .blocked-view {
            padding: 20px 16px 12px;
          }

          .add-row {
            flex-direction: column;
            align-items: stretch;
          }

          .number-input,
          .name-input {
            width: 100%;
          }

          .add-button {
            width: 100%;
          }
        }
      `,
        ];
    }
};
__decorate([
    n({ attribute: false })
], TsuryPhoneBlockedView.prototype, "hass", void 0);
__decorate([
    n({ attribute: false })
], TsuryPhoneBlockedView.prototype, "config", void 0);
__decorate([
    n({ attribute: false })
], TsuryPhoneBlockedView.prototype, "blockedNumbers", void 0);
__decorate([
    r()
], TsuryPhoneBlockedView.prototype, "_newNumber", void 0);
__decorate([
    r()
], TsuryPhoneBlockedView.prototype, "_newName", void 0);
__decorate([
    r()
], TsuryPhoneBlockedView.prototype, "_isAdding", void 0);
__decorate([
    r()
], TsuryPhoneBlockedView.prototype, "_errorMessage", void 0);
TsuryPhoneBlockedView = __decorate([
    t("tsuryphone-blocked-view")
], TsuryPhoneBlockedView);

let TsuryPhoneDNDSettings = class TsuryPhoneDNDSettings extends i {
    constructor() {
        super(...arguments);
        this._dndActive = false;
        this._dndForce = false;
        this._scheduleEnabled = false;
        this._startHour = 22;
        this._startMinute = 0;
        this._endHour = 8;
        this._endMinute = 0;
        this._loading = false;
    }
    connectedCallback() {
        super.connectedCallback();
        this._loadCurrentSettings();
    }
    willUpdate(changedProps) {
        super.willUpdate(changedProps);
        if (changedProps.has("hass") && this.hass && this.entityId) {
            this._loadCurrentSettings();
        }
    }
    _getDeviceId() {
        if (!this.entityId)
            return null;
        return this.entityId.replace("sensor.", "").replace("_phone_state", "");
    }
    _findEntity(prefix, keywords) {
        if (!this.hass)
            return null;
        const allEntityIds = Object.keys(this.hass.states);
        // Backend entities DON'T have device_id prefix - search by prefix + keywords only
        const found = allEntityIds.find((id) => id.startsWith(prefix) && keywords.some(kw => id.includes(kw))) || null;
        return found;
    }
    async _loadCurrentSettings() {
        if (!this.hass || !this.entityId)
            return;
        try {
            // Find DND active binary sensor
            const dndSensorId = this._findEntity("binary_sensor.", ["do_not_disturb", "_dnd"]);
            if (dndSensorId) {
                const state = this.hass.states[dndSensorId].state;
                this._dndActive = state === "on";
            }
            // Find Force DND switch
            const forceDndId = this._findEntity("switch.", ["force_dnd", "force_do_not_disturb"]);
            if (forceDndId) {
                const state = this.hass.states[forceDndId].state;
                this._dndForce = state === "on";
            }
            // Find DND Schedule Enabled switch
            const scheduleEnabledId = this._findEntity("switch.", ["dnd_schedule_enabled"]);
            if (scheduleEnabledId) {
                const state = this.hass.states[scheduleEnabledId].state;
                this._scheduleEnabled = state === "on";
            }
            // Load time settings from text entities
            const startHourId = this._findEntity("text.", ["dnd_start_hour"]);
            const startMinuteId = this._findEntity("text.", ["dnd_start_minute"]);
            const endHourId = this._findEntity("text.", ["dnd_end_hour"]);
            const endMinuteId = this._findEntity("text.", ["dnd_end_minute"]);
            if (startHourId) {
                const state = this.hass.states[startHourId].state;
                this._startHour = parseInt(state) || 22;
            }
            if (startMinuteId) {
                const state = this.hass.states[startMinuteId].state;
                this._startMinute = parseInt(state) || 0;
            }
            if (endHourId) {
                const state = this.hass.states[endHourId].state;
                this._endHour = parseInt(state) || 8;
            }
            if (endMinuteId) {
                const state = this.hass.states[endMinuteId].state;
                this._endMinute = parseInt(state) || 0;
            }
        }
        catch (error) {
            console.error("Failed to load DND settings:", error);
        }
    }
    _handleBack() {
        this.dispatchEvent(new CustomEvent("navigate-back", {
            bubbles: true,
            composed: true,
        }));
    }
    async _handleDndForceToggle(e) {
        const target = e.target;
        const enabled = target.checked;
        const forceDndId = this._findEntity("switch.", ["force_dnd", "force_do_not_disturb"]);
        if (!forceDndId) {
            console.error("Force DND switch entity not found");
            target.checked = !enabled;
            return;
        }
        this._loading = true;
        try {
            await this.hass.callService("switch", enabled ? "turn_on" : "turn_off", {}, {
                entity_id: forceDndId,
            });
            this._dndForce = enabled;
        }
        catch (error) {
            console.error("Failed to toggle force DND:", error);
            target.checked = !enabled;
        }
        finally {
            this._loading = false;
        }
    }
    async _handleScheduleToggle(e) {
        const target = e.target;
        const enabled = target.checked;
        const scheduleEnabledId = this._findEntity("switch.", ["dnd_schedule_enabled"]);
        if (!scheduleEnabledId) {
            console.error("DND schedule enabled switch entity not found");
            target.checked = !enabled;
            return;
        }
        this._loading = true;
        try {
            await this.hass.callService("switch", enabled ? "turn_on" : "turn_off", {}, {
                entity_id: scheduleEnabledId,
            });
            this._scheduleEnabled = enabled;
        }
        catch (error) {
            console.error("Failed to toggle DND schedule:", error);
            target.checked = !enabled;
        }
        finally {
            this._loading = false;
        }
    }
    async _handleTimeChange(field, value) {
        const numValue = parseInt(value) || 0;
        const isHour = field.includes("hour");
        const max = isHour ? 23 : 59;
        if (numValue < 0 || numValue > max)
            return;
        const textEntityId = this._findEntity("text.", [`dnd_${field}`]);
        if (!textEntityId) {
            console.error(`Text entity for ${field} not found`);
            return;
        }
        this._loading = true;
        try {
            await this.hass.callService("text", "set_value", {
                value: numValue.toString(),
            }, {
                entity_id: textEntityId,
            });
            switch (field) {
                case "start_hour":
                    this._startHour = numValue;
                    break;
                case "start_minute":
                    this._startMinute = numValue;
                    break;
                case "end_hour":
                    this._endHour = numValue;
                    break;
                case "end_minute":
                    this._endMinute = numValue;
                    break;
            }
        }
        catch (error) {
            console.error(`Failed to update ${field}:`, error);
        }
        finally {
            this._loading = false;
        }
    }
    _formatTime(hour, minute) {
        return `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`;
    }
    render() {
        return x `
      <div class="settings-header">
        <button
          class="back-button"
          @click=${this._handleBack}
          aria-label="Back"
        >
          <ha-icon icon="mdi:arrow-left"></ha-icon>
        </button>
        <h1 class="header-title">Do Not Disturb</h1>
      </div>

      <div class="settings-content">
        <!-- Status Banner -->
        <div class="status-banner ${this._dndActive ? "active" : "inactive"}">
          <div class="status-icon">
            <ha-icon
              icon="${this._dndActive
            ? "mdi:moon-waning-crescent"
            : "mdi:bell-ring"}"
            ></ha-icon>
          </div>
          <div class="status-content">
            <div class="status-title">
              ${this._dndActive ? "DND Active" : "DND Inactive"}
            </div>
            <div class="status-description">
              ${this._dndActive
            ? "Incoming calls are being silenced"
            : "Phone will ring normally for all calls"}
            </div>
          </div>
        </div>

        <!-- Force DND -->
        <div class="settings-group">
          <div class="group-header">Quick Actions</div>
          <div class="setting-item">
            <div class="setting-info">
              <div class="setting-title">Force DND</div>
              <div class="setting-description">
                Override schedule and silence all calls immediately
              </div>
            </div>
            <ha-switch
              .checked=${this._dndForce}
              @change=${this._handleDndForceToggle}
              .disabled=${this._loading}
            ></ha-switch>
          </div>
        </div>

        <!-- Schedule Settings -->
        <div class="settings-group">
          <div class="group-header">Schedule</div>
          <div class="setting-item">
            <div class="setting-info">
              <div class="setting-title">Scheduled DND</div>
              <div class="setting-description">
                Automatically enable DND during specific hours
              </div>
            </div>
            <ha-switch
              .checked=${this._scheduleEnabled}
              @change=${this._handleScheduleToggle}
              .disabled=${this._loading}
            ></ha-switch>
          </div>

          ${this._scheduleEnabled
            ? x `
                <div class="time-picker-section">
                  <div class="time-picker-row">
                    <div class="time-picker-label">Start Time</div>
                    <div class="time-picker-inputs">
                      <input
                        type="number"
                        class="time-input"
                        min="0"
                        max="23"
                        .value=${this._startHour.toString()}
                        @change=${(e) => this._handleTimeChange("start_hour", e.target.value)}
                        ?disabled=${this._loading}
                        aria-label="Start hour"
                      />
                      <span class="time-separator">:</span>
                      <input
                        type="number"
                        class="time-input"
                        min="0"
                        max="59"
                        .value=${this._startMinute.toString().padStart(2, "0")}
                        @change=${(e) => this._handleTimeChange("start_minute", e.target.value)}
                        ?disabled=${this._loading}
                        aria-label="Start minute"
                      />
                    </div>
                  </div>

                  <div class="time-picker-row">
                    <div class="time-picker-label">End Time</div>
                    <div class="time-picker-inputs">
                      <input
                        type="number"
                        class="time-input"
                        min="0"
                        max="23"
                        .value=${this._endHour.toString()}
                        @change=${(e) => this._handleTimeChange("end_hour", e.target.value)}
                        ?disabled=${this._loading}
                        aria-label="End hour"
                      />
                      <span class="time-separator">:</span>
                      <input
                        type="number"
                        class="time-input"
                        min="0"
                        max="59"
                        .value=${this._endMinute.toString().padStart(2, "0")}
                        @change=${(e) => this._handleTimeChange("end_minute", e.target.value)}
                        ?disabled=${this._loading}
                        aria-label="End minute"
                      />
                    </div>
                  </div>
                </div>

                <div class="help-text">
                  <ha-icon icon="mdi:information-outline"></ha-icon>
                  <div>
                    DND will automatically activate at
                    ${this._formatTime(this._startHour, this._startMinute)} and
                    deactivate at
                    ${this._formatTime(this._endHour, this._endMinute)} every
                    day.
                  </div>
                </div>
              `
            : ""}
        </div>
      </div>

      ${this._loading
            ? x `
            <div class="loading-overlay">
              <ha-circular-progress active></ha-circular-progress>
            </div>
          `
            : ""}
    `;
    }
};
TsuryPhoneDNDSettings.styles = i$3 `
    :host {
      display: flex;
      flex-direction: column;
      height: 100%;
      background: var(--card-background-color);
    }

    .settings-header {
      display: flex;
      align-items: center;
      padding: 16px 20px;
      background: var(--card-background-color);
      border-bottom: 1px solid var(--divider-color);
      position: sticky;
      top: 0;
      z-index: 10;
      gap: 12px;
    }

    .back-button {
      width: 40px;
      height: 40px;
      border-radius: 12px;
      border: none;
      background: transparent;
      color: var(--primary-text-color);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.2s ease;
      flex-shrink: 0;
    }

    .back-button:hover {
      background: var(--divider-color);
    }

    .back-button ha-icon {
      --mdc-icon-size: 24px;
    }

    .header-title {
      flex: 1;
      font-size: 20px;
      font-weight: 600;
      color: var(--primary-text-color);
      margin: 0;
    }

    .settings-content {
      flex: 1;
      overflow-y: auto;
      padding: 16px 0;
    }

    /* Status Banner */
    .status-banner {
      margin: 0 20px 24px;
      padding: 16px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      gap: 12px;
      transition: background 0.3s ease;
    }

    .status-banner.active {
      background: linear-gradient(135deg, rgba(var(--rgb-success-color, 76, 175, 80), 0.15) 0%, rgba(var(--rgb-success-color, 76, 175, 80), 0.05) 100%);
    }

    .status-banner.inactive {
      background: linear-gradient(135deg, rgba(var(--rgb-secondary-text-color, 158, 158, 158), 0.15) 0%, rgba(var(--rgb-secondary-text-color, 158, 158, 158), 0.05) 100%);
    }

    .status-icon {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .status-banner.active .status-icon {
      background: rgba(var(--rgb-success-color, 76, 175, 80), 0.2);
      color: var(--success-color);
    }

    .status-banner.inactive .status-icon {
      background: rgba(var(--rgb-secondary-text-color, 158, 158, 158), 0.2);
      color: var(--secondary-text-color);
    }

    .status-icon ha-icon {
      --mdc-icon-size: 24px;
    }

    .status-content {
      flex: 1;
    }

    .status-title {
      font-size: 14px;
      font-weight: 600;
      color: var(--primary-text-color);
      margin-bottom: 2px;
    }

    .status-description {
      font-size: 12px;
      color: var(--secondary-text-color);
    }

    /* Settings Groups */
    .settings-group {
      margin-bottom: 24px;
    }

    .group-header {
      padding: 8px 20px 12px;
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--secondary-text-color);
    }

    /* Setting Item */
    .setting-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 16px 20px;
      background: var(--card-background-color);
      gap: 16px;
      min-height: 60px;
    }

    .setting-item + .setting-item {
      border-top: 1px solid var(--divider-color);
    }

    .setting-info {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 4px;
      min-width: 0;
    }

    .setting-title {
      font-size: 16px;
      font-weight: 500;
      color: var(--primary-text-color);
    }

    .setting-description {
      font-size: 13px;
      color: var(--secondary-text-color);
      line-height: 1.4;
    }

    /* Time Picker Section */
    .time-picker-section {
      padding: 16px 20px;
      background: var(--card-background-color);
      border-top: 1px solid var(--divider-color);
    }

    .time-picker-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 0;
    }

    .time-picker-row + .time-picker-row {
      border-top: 1px solid var(--divider-color);
    }

    .time-picker-label {
      font-size: 15px;
      color: var(--primary-text-color);
      font-weight: 500;
    }

    .time-picker-inputs {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .time-input {
      width: 50px;
      height: 40px;
      padding: 0;
      border: 1px solid var(--divider-color);
      border-radius: 8px;
      background: var(--card-background-color);
      color: var(--primary-text-color);
      font-size: 16px;
      font-family: inherit;
      text-align: center;
      transition: border-color 0.2s ease;
    }

    .time-input:focus {
      outline: none;
      border-color: var(--primary-color);
    }

    .time-separator {
      font-size: 18px;
      font-weight: 600;
      color: var(--secondary-text-color);
    }

    /* Help Text */
    .help-text {
      margin: 0 20px;
      padding: 12px 16px;
      background: var(--secondary-background-color);
      border-radius: 8px;
      font-size: 13px;
      color: var(--secondary-text-color);
      line-height: 1.5;
      display: flex;
      align-items: flex-start;
      gap: 12px;
    }

    .help-text ha-icon {
      --mdc-icon-size: 20px;
      margin-top: 2px;
      flex-shrink: 0;
      color: var(--primary-color);
    }

    /* Loading State */
    .loading-overlay {
      position: absolute;
      inset: 0;
      background: var(--mdc-dialog-scrim-color, rgba(0, 0, 0, 0.3));
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 100;
    }

    @media (max-width: 480px) {
      .settings-header {
        padding: 12px 16px;
      }

      .status-banner {
        margin: 0 16px 20px;
        padding: 14px;
      }

      .setting-item {
        padding: 14px 16px;
      }

      .time-picker-section {
        padding: 14px 16px;
      }

      .time-input {
        width: 48px;
        height: 38px;
        font-size: 15px;
      }
    }
  `;
__decorate([
    n({ attribute: false })
], TsuryPhoneDNDSettings.prototype, "hass", void 0);
__decorate([
    n({ type: String })
], TsuryPhoneDNDSettings.prototype, "entityId", void 0);
__decorate([
    r()
], TsuryPhoneDNDSettings.prototype, "_dndActive", void 0);
__decorate([
    r()
], TsuryPhoneDNDSettings.prototype, "_dndForce", void 0);
__decorate([
    r()
], TsuryPhoneDNDSettings.prototype, "_scheduleEnabled", void 0);
__decorate([
    r()
], TsuryPhoneDNDSettings.prototype, "_startHour", void 0);
__decorate([
    r()
], TsuryPhoneDNDSettings.prototype, "_startMinute", void 0);
__decorate([
    r()
], TsuryPhoneDNDSettings.prototype, "_endHour", void 0);
__decorate([
    r()
], TsuryPhoneDNDSettings.prototype, "_endMinute", void 0);
__decorate([
    r()
], TsuryPhoneDNDSettings.prototype, "_loading", void 0);
TsuryPhoneDNDSettings = __decorate([
    t("tsuryphone-dnd-settings")
], TsuryPhoneDNDSettings);

let TsuryPhoneAudioSettings = class TsuryPhoneAudioSettings extends i {
    constructor() {
        super(...arguments);
        this._earpieceVolume = 4;
        this._earpieceGain = 4;
        this._speakerVolume = 4;
        this._speakerGain = 4;
        this._ringerCycleDuration = 30;
        this._ringPattern = "";
        this._customPattern = "";
        this._patternError = "";
        this._loading = false;
        // Ring pattern presets from backend
        this._ringPatternPresets = {
            Default: "",
            "Pulse Short": "300,300x2",
            Classic: "500,500,500",
            "Long Gap": "800,400,800",
            Triple: "300,300,300",
            Stagger: "500,250,500",
            Alarm: "200,200x5",
            Slow: "1000",
            Burst: "150,150x3",
        };
    }
    connectedCallback() {
        super.connectedCallback();
        this._loadAudioSettings();
    }
    willUpdate() {
        this._loadAudioSettings();
    }
    _loadAudioSettings() {
        if (!this.hass)
            return;
        // Find audio entities without device_id prefix
        const earpieceVolumeEntity = this._findEntity("number.earpiece_volume");
        const earpieceGainEntity = this._findEntity("number.earpiece_gain");
        const speakerVolumeEntity = this._findEntity("number.speaker_volume");
        const speakerGainEntity = this._findEntity("number.speaker_gain");
        const ringerCycleDurationEntity = this._findEntity("number.ringer_cycle_duration");
        const ringPatternCustomEntity = this._findEntity("text.ring_pattern_custom");
        if (earpieceVolumeEntity) {
            const value = parseFloat(this.hass.states[earpieceVolumeEntity].state);
            if (!isNaN(value)) {
                this._earpieceVolume = Math.round(value);
            }
        }
        if (earpieceGainEntity) {
            const value = parseFloat(this.hass.states[earpieceGainEntity].state);
            if (!isNaN(value)) {
                this._earpieceGain = Math.round(value);
            }
        }
        if (speakerVolumeEntity) {
            const value = parseFloat(this.hass.states[speakerVolumeEntity].state);
            if (!isNaN(value)) {
                this._speakerVolume = Math.round(value);
            }
        }
        if (speakerGainEntity) {
            const value = parseFloat(this.hass.states[speakerGainEntity].state);
            if (!isNaN(value)) {
                this._speakerGain = Math.round(value);
            }
        }
        if (ringerCycleDurationEntity) {
            const value = parseFloat(this.hass.states[ringerCycleDurationEntity].state);
            if (!isNaN(value)) {
                this._ringerCycleDuration = Math.round(value);
            }
        }
        if (ringPatternCustomEntity) {
            const pattern = this.hass.states[ringPatternCustomEntity].state || "";
            // Only update if server state changed
            if (pattern !== this._ringPattern) {
                this._ringPattern = pattern;
                this._customPattern = pattern;
            }
        }
    }
    _findEntity(entitySuffix) {
        // Try to find entity with or without device_id prefix
        const allEntities = Object.keys(this.hass.states);
        // Try exact match first
        if (allEntities.includes(entitySuffix)) {
            return entitySuffix;
        }
        // Try with device_id prefix
        const withPrefix = allEntities.find((entity) => entity.endsWith(entitySuffix.replace("number.", "_")));
        if (withPrefix) {
            return withPrefix;
        }
        // Try partial match
        const partialMatch = allEntities.find((entity) => entity.includes(entitySuffix.replace("number.", "")));
        return partialMatch || null;
    }
    async _handleSliderChange(entitySuffix, value) {
        const entityId = this._findEntity(entitySuffix);
        if (!entityId) {
            console.error(`Audio entity not found: ${entitySuffix}`);
            return;
        }
        this._loading = true;
        try {
            await this.hass.callService("number", "set_value", {
                entity_id: entityId,
                value: value,
            });
        }
        catch (error) {
            console.error(`Failed to set ${entitySuffix}:`, error);
        }
        finally {
            this._loading = false;
        }
    }
    _handleEarpieceVolumeChange(e) {
        const value = parseInt(e.target.value);
        this._earpieceVolume = value;
        this._handleSliderChange("number.earpiece_volume", value);
    }
    _handleEarpieceGainChange(e) {
        const value = parseInt(e.target.value);
        this._earpieceGain = value;
        this._handleSliderChange("number.earpiece_gain", value);
    }
    _handleSpeakerVolumeChange(e) {
        const value = parseInt(e.target.value);
        this._speakerVolume = value;
        this._handleSliderChange("number.speaker_volume", value);
    }
    _handleSpeakerGainChange(e) {
        const value = parseInt(e.target.value);
        this._speakerGain = value;
        this._handleSliderChange("number.speaker_gain", value);
    }
    _handleRingerCycleDurationInput(e) {
        const value = parseInt(e.target.value);
        this._ringerCycleDuration = value;
    }
    _handleRingerCycleDurationChange(e) {
        const value = parseInt(e.target.value);
        this._handleSliderChange("number.ringer_cycle_duration", value);
    }
    _validateRingPattern(pattern) {
        const normalized = pattern.trim();
        // Empty pattern is valid (device default)
        if (!normalized) {
            return null;
        }
        // Max length check
        if (normalized.length > 32) {
            return "Pattern too long (max 32 characters)";
        }
        // Valid characters check
        const validChars = /^[0-9,x]+$/;
        if (!validChars.test(normalized)) {
            return "Pattern can only contain digits, commas, and 'x'";
        }
        // Parse pattern and repeat
        let base = normalized;
        let repeatCount = 1;
        if (normalized.includes("x")) {
            const parts = normalized.split("x");
            if (parts.length !== 2) {
                return "Only one 'x' allowed for repeat count";
            }
            base = parts[0];
            const repeatStr = parts[1];
            if (!repeatStr || !/^\d+$/.test(repeatStr)) {
                return "Repeat count must be a positive number";
            }
            repeatCount = parseInt(repeatStr);
            if (repeatCount <= 0) {
                return "Repeat count must be greater than 0";
            }
        }
        // Validate segments
        const segments = base.split(",");
        if (segments.length === 0 || segments.some((s) => s === "")) {
            return "Empty segments not allowed";
        }
        for (const segment of segments) {
            if (!/^\d+$/.test(segment)) {
                return "Each segment must be a positive number";
            }
            if (parseInt(segment) <= 0) {
                return "Segment durations must be greater than 0";
            }
        }
        // Segment count validation based on repeat
        if (repeatCount > 1) {
            if (segments.length % 2 !== 0) {
                return "Repeated patterns must have even number of segments";
            }
        }
        else {
            if (segments.length % 2 !== 1) {
                return "Single patterns must have odd number of segments";
            }
        }
        return null;
    }
    _handlePatternPresetChange(e) {
        const select = e.target;
        const presetName = select.value;
        const pattern = this._ringPatternPresets[presetName];
        this._ringPattern = pattern;
        this._customPattern = pattern;
        this._patternError = "";
        // Save pattern
        this._saveRingPattern(pattern);
    }
    _handleCustomPatternChange(e) {
        const input = e.target;
        const pattern = input.value;
        this._customPattern = pattern;
        // Validate pattern
        const error = this._validateRingPattern(pattern);
        this._patternError = error || "";
    }
    _handleSavePattern() {
        if (this._patternError)
            return;
        // Don't update local _ringPattern yet, let the state update handle it
        // to avoid race condition in _loadAudioSettings
        this._saveRingPattern(this._customPattern);
    }
    async _saveRingPattern(pattern) {
        const entityId = this._findEntity("text.ring_pattern_custom");
        if (!entityId) {
            console.error("Ring pattern custom entity not found");
            return;
        }
        this._loading = true;
        try {
            await this.hass.callService("text", "set_value", {
                entity_id: entityId,
                value: pattern,
            });
        }
        catch (error) {
            console.error("Failed to set ring pattern:", error);
        }
        finally {
            this._loading = false;
        }
    }
    async _handleTestRing() {
        if (!this.entityId) {
            console.error("Entity ID required for test ring");
            return;
        }
        const pattern = this._customPattern || this._ringPattern;
        // Validate before testing
        const error = this._validateRingPattern(pattern);
        if (error) {
            this._patternError = error;
            return;
        }
        this._loading = true;
        try {
            await this.hass.callService("tsuryphone", "ring_device", {
                pattern: pattern,
                force: false,
            }, {
                entity_id: this.entityId,
            });
        }
        catch (error) {
            console.error("Failed to test ring:", error);
        }
        finally {
            this._loading = false;
        }
    }
    _getCurrentPresetName() {
        const currentPattern = this._ringPattern;
        // Find matching preset
        for (const [name, pattern] of Object.entries(this._ringPatternPresets)) {
            if (pattern === currentPattern) {
                return name;
            }
        }
        return "Default";
    }
    _handleBack() {
        this.dispatchEvent(new CustomEvent("navigate-back", {
            bubbles: true,
            composed: true,
        }));
    }
    render() {
        return x `
      <div class="settings-header">
        <button
          class="back-button"
          @click=${this._handleBack}
          aria-label="Back to settings"
        >
          <ha-icon icon="mdi:arrow-left"></ha-icon>
        </button>
        <h1 class="header-title">Audio</h1>
      </div>

      <div class="settings-content">
        <!-- Earpiece Settings -->
        <div class="settings-group">
          <div class="group-header">Earpiece</div>

          <!-- Earpiece Volume -->
          <div class="slider-item">
            <div class="slider-header">
              <div class="slider-label-container">
                <div class="slider-icon">
                  <ha-icon icon="mdi:volume-high"></ha-icon>
                </div>
                <div class="slider-info">
                  <div class="slider-title">Volume</div>
                  <div class="slider-description">
                    Adjust earpiece loudness level
                  </div>
                </div>
              </div>
              <div class="slider-value">${this._earpieceVolume}</div>
            </div>
            <div class="slider-control">
              <div class="slider-min">1</div>
              <input
                type="range"
                min="1"
                max="7"
                step="1"
                .value=${this._earpieceVolume.toString()}
                @input=${this._handleEarpieceVolumeChange}
                aria-label="Earpiece volume"
              />
              <div class="slider-max">7</div>
            </div>
          </div>

          <!-- Earpiece Gain -->
          <div class="slider-item">
            <div class="slider-header">
              <div class="slider-label-container">
                <div class="slider-icon">
                  <ha-icon icon="mdi:amplifier"></ha-icon>
                </div>
                <div class="slider-info">
                  <div class="slider-title">Gain</div>
                  <div class="slider-description">
                    Adjust earpiece amplification
                  </div>
                </div>
              </div>
              <div class="slider-value">${this._earpieceGain}</div>
            </div>
            <div class="slider-control">
              <div class="slider-min">1</div>
              <input
                type="range"
                min="1"
                max="7"
                step="1"
                .value=${this._earpieceGain.toString()}
                @input=${this._handleEarpieceGainChange}
                aria-label="Earpiece gain"
              />
              <div class="slider-max">7</div>
            </div>
          </div>
        </div>

        <!-- Speaker Settings -->
        <div class="settings-group">
          <div class="group-header">Speaker</div>

          <!-- Speaker Volume -->
          <div class="slider-item">
            <div class="slider-header">
              <div class="slider-label-container">
                <div class="slider-icon">
                  <ha-icon icon="mdi:volume-high"></ha-icon>
                </div>
                <div class="slider-info">
                  <div class="slider-title">Volume</div>
                  <div class="slider-description">
                    Adjust speaker loudness level
                  </div>
                </div>
              </div>
              <div class="slider-value">${this._speakerVolume}</div>
            </div>
            <div class="slider-control">
              <div class="slider-min">1</div>
              <input
                type="range"
                min="1"
                max="7"
                step="1"
                .value=${this._speakerVolume.toString()}
                @input=${this._handleSpeakerVolumeChange}
                aria-label="Speaker volume"
              />
              <div class="slider-max">7</div>
            </div>
          </div>

          <!-- Speaker Gain -->
          <div class="slider-item">
            <div class="slider-header">
              <div class="slider-label-container">
                <div class="slider-icon">
                  <ha-icon icon="mdi:amplifier"></ha-icon>
                </div>
                <div class="slider-info">
                  <div class="slider-title">Gain</div>
                  <div class="slider-description">
                    Adjust speaker amplification
                  </div>
                </div>
              </div>
              <div class="slider-value">${this._speakerGain}</div>
            </div>
            <div class="slider-control">
              <div class="slider-min">1</div>
              <input
                type="range"
                min="1"
                max="7"
                step="1"
                .value=${this._speakerGain.toString()}
                @input=${this._handleSpeakerGainChange}
                aria-label="Speaker gain"
              />
              <div class="slider-max">7</div>
            </div>
          </div>

          <!-- Ringer Cycle Duration -->
          <div class="slider-item">
            <div class="slider-header">
              <div class="slider-label-container">
                <div class="slider-icon">
                  <ha-icon icon="mdi:sine-wave"></ha-icon>
                </div>
                <div class="slider-info">
                  <div class="slider-title">Ringer Cycle Duration</div>
                  <div class="slider-description">
                    Adjust ringer frequency (ms)
                  </div>
                </div>
              </div>
              <div class="slider-value">${this._ringerCycleDuration}</div>
            </div>
            <div class="slider-control">
              <div class="slider-min">10</div>
              <input
                type="range"
                min="10"
                max="100"
                step="1"
                .value=${this._ringerCycleDuration.toString()}
                @input=${this._handleRingerCycleDurationInput}
                @change=${this._handleRingerCycleDurationChange}
                aria-label="Ringer cycle duration"
              />
              <div class="slider-max">100</div>
            </div>
          </div>
        </div>

        <!-- Audio Help Text -->
        <div class="help-text">
          <ha-icon icon="mdi:information"></ha-icon>
          <div>
            <strong>Volume</strong> controls the overall loudness, while
            <strong>Gain</strong> controls the signal amplification. Adjust
            both settings to find your optimal audio quality. 
            <strong>Ringer Cycle Duration</strong> tunes the mechanical ringer frequency.
            Changes take effect immediately.
          </div>
        </div>

        <!-- Ring Pattern Settings -->
        <div class="settings-group">
          <div class="group-header">Ring Pattern</div>

          <!-- Pattern Preset Selector -->
          <div class="slider-item">
            <label class="pattern-label" for="pattern-preset">
              Select Preset
            </label>
            <select
              id="pattern-preset"
              class="pattern-select"
              .value=${this._getCurrentPresetName()}
              @change=${this._handlePatternPresetChange}
            >
              ${Object.entries(this._ringPatternPresets).map(([name, pattern]) => x `
                  <option value=${name}>
                    ${name}${pattern
            ? x ` <span style="opacity: 0.6">— ${pattern}</span>`
            : x ` <span style="opacity: 0.6">
                          — device default
                        </span>`}
                  </option>
                `)}
            </select>
          </div>

          <!-- Custom Pattern Input -->
          <div class="slider-item">
            <label class="pattern-label" for="pattern-custom">
              Custom Pattern
            </label>
            <div class="pattern-input-container">
              <div class="pattern-input-row">
                <input
                  id="pattern-custom"
                  type="text"
                  class="pattern-input ${this._patternError ? "error" : ""}"
                  .value=${this._customPattern}
                  @input=${this._handleCustomPatternChange}
                  placeholder="e.g., 500,500,500 or 300,300x2"
                  aria-label="Custom ring pattern"
                />
                <button
                  class="save-button"
                  @click=${this._handleSavePattern}
                  ?disabled=${!!this._patternError ||
            this._customPattern === this._ringPattern}
                >
                  Save
                </button>
              </div>
              ${this._patternError
            ? x `<div class="pattern-error">${this._patternError}</div>`
            : x `
                    <div class="pattern-hint">
                      Format: duration1,duration2,... (in ms). Use 'x' for
                      repeats (e.g., 300,300x2). Even segments for repeats, odd
                      for single.
                    </div>
                  `}
            </div>
          </div>

          <!-- Test Button -->
          <div class="slider-item">
            <button
              class="test-button"
              @click=${this._handleTestRing}
              ?disabled=${!!this._patternError || this._loading}
              aria-label="Test ring pattern"
            >
              <ha-icon icon="mdi:bell-ring"></ha-icon>
              <span>Test Ring Pattern</span>
            </button>
          </div>
        </div>
      </div>

      ${this._loading
            ? x `
            <div class="loading-overlay">
              <div class="loading-spinner"></div>
            </div>
          `
            : ""}
    `;
    }
};
TsuryPhoneAudioSettings.styles = i$3 `
    :host {
      display: flex;
      flex-direction: column;
      height: 100%;
      background: var(--card-background-color);
    }

    .settings-header {
      display: flex;
      align-items: center;
      padding: 16px 20px;
      background: var(--card-background-color);
      border-bottom: 1px solid var(--divider-color);
      position: sticky;
      top: 0;
      z-index: 10;
      gap: 12px;
    }

    .back-button {
      width: 40px;
      height: 40px;
      border-radius: 12px;
      border: none;
      background: transparent;
      color: var(--primary-text-color);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.2s ease;
      flex-shrink: 0;
    }

    .back-button:hover {
      background: var(--divider-color);
    }

    .back-button ha-icon {
      --mdc-icon-size: 24px;
    }

    .header-title {
      flex: 1;
      font-size: 20px;
      font-weight: 600;
      color: var(--primary-text-color);
      margin: 0;
    }

    .settings-content {
      flex: 1;
      overflow-y: auto;
      padding: 0;
    }

    /* Setting Groups */
    .settings-group {
      background: var(--card-background-color);
      margin-bottom: 12px;
    }

    .group-header {
      padding: 20px 20px 12px;
      font-size: 14px;
      font-weight: 600;
      color: var(--primary-text-color);
      text-transform: uppercase;
      letter-spacing: 0.5px;
      opacity: 0.7;
    }

    /* Slider Items */
    .slider-item {
      display: flex;
      flex-direction: column;
      padding: 16px 20px;
      border-bottom: 1px solid var(--divider-color);
      gap: 12px;
    }

    .slider-item:last-child {
      border-bottom: none;
    }

    .slider-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .slider-label-container {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .slider-icon {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: var(--primary-color);
      color: var(--text-primary-color, white);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .slider-icon ha-icon {
      --mdc-icon-size: 22px;
    }

    .slider-info {
      display: flex;
      flex-direction: column;
      gap: 2px;
      flex: 1;
    }

    .slider-title {
      font-size: 16px;
      font-weight: 500;
      color: var(--primary-text-color);
    }

    .slider-description {
      font-size: 13px;
      color: var(--secondary-text-color);
      line-height: 1.4;
    }

    .slider-value {
      font-size: 18px;
      font-weight: 600;
      color: var(--primary-color);
      min-width: 32px;
      text-align: right;
    }

    /* Slider Control */
    .slider-control {
      display: flex;
      align-items: center;
      gap: 12px;
      width: 100%;
    }

    .slider-min {
      font-size: 12px;
      color: var(--secondary-text-color);
      min-width: 20px;
      text-align: center;
    }

    .slider-max {
      font-size: 12px;
      color: var(--secondary-text-color);
      min-width: 20px;
      text-align: center;
    }

    /* Custom Slider Styling */
    input[type="range"] {
      flex: 1;
      height: 6px;
      border-radius: 3px;
      background: var(--divider-color);
      outline: none;
      -webkit-appearance: none;
      appearance: none;
      cursor: pointer;
    }

    input[type="range"]::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: var(--primary-color);
      cursor: pointer;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      transition: transform 0.15s ease, box-shadow 0.15s ease;
    }

    input[type="range"]::-webkit-slider-thumb:hover {
      transform: scale(1.1);
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
    }

    input[type="range"]::-webkit-slider-thumb:active {
      transform: scale(0.95);
    }

    input[type="range"]::-moz-range-thumb {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: var(--primary-color);
      cursor: pointer;
      border: none;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      transition: transform 0.15s ease, box-shadow 0.15s ease;
    }

    input[type="range"]::-moz-range-thumb:hover {
      transform: scale(1.1);
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
    }

    input[type="range"]::-moz-range-thumb:active {
      transform: scale(0.95);
    }

    /* Help Text */
    .help-text {
      display: flex;
      gap: 12px;
      padding: 16px 20px;
      background: var(--secondary-background-color);
      border-left: 3px solid var(--primary-color);
      margin: 16px 20px;
      border-radius: 4px;
      font-size: 13px;
      color: var(--secondary-text-color);
      line-height: 1.5;
    }

    .help-text ha-icon {
      --mdc-icon-size: 20px;
      color: var(--primary-color);
      flex-shrink: 0;
      margin-top: 2px;
    }

    .help-text strong {
      color: var(--primary-text-color);
    }

    /* Ring Pattern Controls */
    .pattern-select {
      width: 100%;
      padding: 12px 16px;
      font-size: 15px;
      color: var(--primary-text-color);
      background: var(--card-background-color);
      border: 1px solid var(--divider-color);
      border-radius: 8px;
      outline: none;
      cursor: pointer;
      font-family: inherit;
    }

    .pattern-select:focus {
      border-color: var(--primary-color);
    }

    .pattern-select option {
      background: var(--card-background-color);
      color: var(--primary-text-color);
    }

    .pattern-label {
      display: block;
      font-size: 14px;
      font-weight: 500;
      color: var(--primary-text-color);
      margin-bottom: 8px;
    }

    .pattern-input-container {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .pattern-input-row {
      display: flex;
      gap: 8px;
      align-items: flex-start;
    }

    .save-button {
      padding: 12px 16px;
      border-radius: 8px;
      border: none;
      background: var(--primary-color);
      color: var(--text-primary-color, white);
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 80px;
      height: 44px; /* Match input height approx */
    }

    .save-button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .pattern-input {
      width: 100%;
      padding: 12px 16px;
      font-size: 15px;
      font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
      color: var(--primary-text-color);
      background: var(--card-background-color);
      border: 1px solid var(--divider-color);
      border-radius: 8px;
      outline: none;
      box-sizing: border-box;
    }

    .pattern-input:focus {
      border-color: var(--primary-color);
    }

    .pattern-input.error {
      border-color: var(--error-color);
    }

    .pattern-error {
      font-size: 12px;
      color: var(--error-color);
      margin-top: 4px;
    }

    .pattern-hint {
      font-size: 12px;
      color: var(--secondary-text-color);
      line-height: 1.4;
    }

    .test-button {
      width: 100%;
      padding: 12px 24px;
      margin-top: 12px;
      border-radius: 8px;
      border: none;
      background: var(--primary-color);
      color: var(--text-primary-color, white);
      font-size: 15px;
      font-weight: 500;
      cursor: pointer;
      transition: opacity 0.2s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }

    .test-button:hover {
      opacity: 0.9;
    }

    .test-button:active {
      opacity: 0.8;
    }

    .test-button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .test-button ha-icon {
      --mdc-icon-size: 20px;
    }

    /* Loading State */
    .loading-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: var(--mdc-dialog-scrim-color, rgba(0, 0, 0, 0.3));
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 100;
    }

    .loading-spinner {
      width: 48px;
      height: 48px;
      border: 4px solid var(--divider-color);
      border-top-color: var(--primary-color);
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }
  `;
__decorate([
    n({ attribute: false })
], TsuryPhoneAudioSettings.prototype, "hass", void 0);
__decorate([
    n({ type: String })
], TsuryPhoneAudioSettings.prototype, "entityId", void 0);
__decorate([
    r()
], TsuryPhoneAudioSettings.prototype, "_earpieceVolume", void 0);
__decorate([
    r()
], TsuryPhoneAudioSettings.prototype, "_earpieceGain", void 0);
__decorate([
    r()
], TsuryPhoneAudioSettings.prototype, "_speakerVolume", void 0);
__decorate([
    r()
], TsuryPhoneAudioSettings.prototype, "_speakerGain", void 0);
__decorate([
    r()
], TsuryPhoneAudioSettings.prototype, "_ringerCycleDuration", void 0);
__decorate([
    r()
], TsuryPhoneAudioSettings.prototype, "_ringPattern", void 0);
__decorate([
    r()
], TsuryPhoneAudioSettings.prototype, "_customPattern", void 0);
__decorate([
    r()
], TsuryPhoneAudioSettings.prototype, "_patternError", void 0);
__decorate([
    r()
], TsuryPhoneAudioSettings.prototype, "_loading", void 0);
TsuryPhoneAudioSettings = __decorate([
    t("tsuryphone-audio-settings")
], TsuryPhoneAudioSettings);

let TsuryPhoneDeviceSettings = class TsuryPhoneDeviceSettings extends i {
    constructor() {
        super(...arguments);
        this._loading = false;
        this._showRebootConfirm = false;
        this._showFactoryResetConfirm = false;
        this._maintenanceActive = false;
        this._deviceIp = null;
        this._sendModeEnabled = false;
    }
    connectedCallback() {
        super.connectedCallback();
        this._loadMaintenanceStatus();
    }
    willUpdate(changedProps) {
        super.willUpdate(changedProps);
        if (changedProps.has("hass") && this.hass && this.entityId) {
            this._loadMaintenanceStatus();
        }
    }
    _findEntity(prefix, keywords) {
        if (!this.hass)
            return null;
        const allEntityIds = Object.keys(this.hass.states);
        const found = allEntityIds.find((id) => id.startsWith(prefix) && keywords.some(kw => id.includes(kw))) || null;
        return found;
    }
    async _loadMaintenanceStatus() {
        if (!this.hass || !this.entityId)
            return;
        try {
            const maintenanceSensorId = this._findEntity("binary_sensor.", ["maintenance_mode", "maintenance"]);
            if (maintenanceSensorId) {
                const state = this.hass.states[maintenanceSensorId].state;
                this._maintenanceActive = state === "on";
            }
            const sendModeSwitchId = this._findEntity("switch.", ["send_mode"]);
            if (sendModeSwitchId) {
                const state = this.hass.states[sendModeSwitchId].state;
                this._sendModeEnabled = state === "on";
            }
            const sensorEntity = this.hass.states[this.entityId];
            if (sensorEntity?.attributes) {
                this._deviceIp =
                    sensorEntity.attributes.ip_address ||
                        sensorEntity.attributes.device_ip ||
                        sensorEntity.attributes.ip ||
                        null;
            }
        }
        catch (error) {
            console.error("Failed to load maintenance status:", error);
        }
    }
    _handleBack() {
        this.dispatchEvent(new CustomEvent("navigate-back", {
            bubbles: true,
            composed: true,
        }));
    }
    _showRebootDialog() {
        this._showRebootConfirm = true;
    }
    _showFactoryResetDialog() {
        this._showFactoryResetConfirm = true;
    }
    _closeDialogs() {
        this._showRebootConfirm = false;
        this._showFactoryResetConfirm = false;
    }
    async _handleMaintenanceToggle(e) {
        const target = e.target;
        const enabled = target.checked;
        const maintenanceSwitchId = this._findEntity("switch.", ["maintenance_mode", "maintenance"]);
        if (!maintenanceSwitchId) {
            console.error("Maintenance mode switch entity not found");
            target.checked = !enabled;
            return;
        }
        this._loading = true;
        try {
            await this.hass.callService("switch", enabled ? "turn_on" : "turn_off", {}, {
                entity_id: maintenanceSwitchId,
            });
            this._maintenanceActive = enabled;
        }
        catch (error) {
            console.error("Failed to toggle maintenance mode:", error);
            target.checked = !enabled;
        }
        finally {
            this._loading = false;
        }
    }
    async _handleSendModeToggle(e) {
        const target = e.target;
        const enabled = target.checked;
        const sendModeSwitchId = this._findEntity("switch.", ["send_mode"]);
        if (!sendModeSwitchId) {
            console.error("Send mode switch entity not found");
            target.checked = !enabled;
            return;
        }
        this._loading = true;
        try {
            await this.hass.callService("switch", enabled ? "turn_on" : "turn_off", {}, {
                entity_id: sendModeSwitchId,
            });
            this._sendModeEnabled = enabled;
        }
        catch (error) {
            console.error("Failed to toggle send mode:", error);
            target.checked = !enabled;
        }
        finally {
            this._loading = false;
        }
    }
    async _handleReboot() {
        if (!this.entityId) {
            console.error("Entity ID is required");
            return;
        }
        this._loading = true;
        try {
            await this.hass.callService("tsuryphone", "reset_device", {}, {
                entity_id: this.entityId,
            });
            this._closeDialogs();
            // Show success message (optional - could add toast notification)
            console.log("Device reboot initiated");
        }
        catch (error) {
            console.error("Failed to reboot device:", error);
            // Could show error toast here
        }
        finally {
            this._loading = false;
        }
    }
    async _handleFactoryReset() {
        if (!this.entityId) {
            console.error("Entity ID is required");
            return;
        }
        this._loading = true;
        try {
            await this.hass.callService("tsuryphone", "factory_reset_device", {}, {
                entity_id: this.entityId,
            });
            this._closeDialogs();
            // Show success message
            console.log("Factory reset initiated");
        }
        catch (error) {
            console.error("Failed to factory reset device:", error);
            // Could show error toast here
        }
        finally {
            this._loading = false;
        }
    }
    render() {
        return x `
      <div class="settings-header">
        <button
          class="back-button"
          @click=${this._handleBack}
          aria-label="Back"
        >
          <ha-icon icon="mdi:arrow-left"></ha-icon>
        </button>
        <h1 class="header-title">Device Management</h1>
      </div>

      <div class="settings-content">
        <!-- Maintenance Mode Section -->
        <div class="settings-group">
          <div class="group-header">Configuration Portal</div>
          
          <!-- Status Banner -->
          <div class="status-banner ${this._maintenanceActive ? "active" : "inactive"}">
            <div class="status-icon">
              <ha-icon icon="${this._maintenanceActive ? "mdi:cog" : "mdi:check-circle"}"></ha-icon>
            </div>
            <div class="status-content">
              <div class="status-title">
                ${this._maintenanceActive ? "Web Portal Active" : "Portal Inactive"}
              </div>
              <div class="status-description">
                ${this._maintenanceActive
            ? "Configuration portal is accessible"
            : "Enable to access WiFi and OTA settings"}
              </div>
            </div>
          </div>

          <!-- Web Portal Link (only shown when active) -->
          ${this._maintenanceActive && this._deviceIp ? x `
            <a
              class="portal-link"
              href="http://${this._deviceIp}/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div class="portal-link-content">
                <div class="portal-link-title">Open Web Portal</div>
                <div class="portal-link-url">http://${this._deviceIp}/</div>
              </div>
              <ha-icon icon="mdi:open-in-new"></ha-icon>
            </a>
          ` : ""}

          <!-- Maintenance Mode Toggle -->
          <div class="setting-item">
            <div class="setting-info">
              <div class="setting-title">Enable Web Portal</div>
              <div class="setting-description">
                Start configuration portal for WiFi and OTA updates
              </div>
            </div>
            <ha-switch
              .checked=${this._maintenanceActive}
              @change=${this._handleMaintenanceToggle}
              .disabled=${this._loading}
            ></ha-switch>
          </div>
        </div>

        <!-- Help Text for Maintenance Mode -->
        ${this._maintenanceActive ? x `
          <div class="help-text">
            <ha-icon icon="mdi:clock-alert"></ha-icon>
            <div>
              <strong>Portal Timeout:</strong> The configuration portal will automatically close after 5 minutes of inactivity. 
              Use the portal to change WiFi credentials or perform OTA firmware updates. 
              Normal phone functionality is disabled while the portal is active.
            </div>
          </div>
        ` : x `
          <div class="help-text">
            <ha-icon icon="mdi:information"></ha-icon>
            <div>
              Enable the web portal to access device configuration at <strong>http://DEVICE_IP/</strong>. 
              You can change WiFi settings and upload firmware updates. 
              The portal automatically times out after 5 minutes for security.
            </div>
          </div>
        `}

        <!-- Send Mode Section -->
        <div class="settings-group">
          <div class="group-header">Integration Behavior</div>
          
          <!-- Send Mode Toggle -->
          <div class="setting-item">
            <div class="setting-info">
              <div class="setting-title">Send Mode</div>
              <div class="setting-description">
                Require explicit send action for integration dialing
              </div>
            </div>
            <ha-switch
              .checked=${this._sendModeEnabled}
              @change=${this._handleSendModeToggle}
              .disabled=${this._loading}
            ></ha-switch>
          </div>
        </div>

        <!-- Help Text for Send Mode -->
        <div class="help-text">
          <ha-icon icon="mdi:information"></ha-icon>
          <div>
            When <strong>Send Mode</strong> is enabled, digits entered through the integration (card keypad) 
            are queued and require pressing the send button to dial. 
            This does not affect the physical rotary dial, which always dials immediately. 
            Useful for modern phone behavior when using the card interface.
          </div>
        </div>

        <!-- Device Actions -->
        <div class="settings-group">
          <div class="group-header">Device Actions</div>
          
          <button
            class="action-button"
            @click=${this._showRebootDialog}
            ?disabled=${this._loading}
          >
            <div class="action-icon">
              <ha-icon icon="mdi:restart"></ha-icon>
            </div>
            <div class="action-content">
              <div class="action-title">Reboot Device</div>
              <div class="action-description">
                Restart the device without losing settings
              </div>
            </div>
          </button>

          <button
            class="action-button danger"
            @click=${this._showFactoryResetDialog}
            ?disabled=${this._loading}
          >
            <div class="action-icon">
              <ha-icon icon="mdi:delete-forever"></ha-icon>
            </div>
            <div class="action-content">
              <div class="action-title">Factory Reset</div>
              <div class="action-description">
                Erase all settings, contacts, and statistics
              </div>
            </div>
          </button>
        </div>

        <!-- Help Text -->
        <div class="help-text">
          <ha-icon icon="mdi:information"></ha-icon>
          <div>
            <strong>Reboot</strong> restarts the device while preserving all your settings and data. 
            <strong>Factory Reset</strong> permanently erases everything and returns the device to its original state.
          </div>
        </div>
      </div>

      <!-- Reboot Confirmation Modal -->
      ${this._showRebootConfirm ? x `
        <div class="modal-overlay" @click=${this._closeDialogs}>
          <div class="modal" @click=${(e) => e.stopPropagation()}>
            <div class="modal-header">
              <h2 class="modal-title">
                <ha-icon icon="mdi:restart"></ha-icon>
                Reboot Device
              </h2>
            </div>
            <div class="modal-content">
              <p class="modal-text">
                The device will restart and reconnect automatically. 
                This process takes about 30-60 seconds.
              </p>
              <p class="modal-text">
                All settings, contacts, and call history will be preserved.
              </p>
            </div>
            <div class="modal-actions">
              <button
                class="modal-button cancel"
                @click=${this._closeDialogs}
                ?disabled=${this._loading}
              >
                Cancel
              </button>
              <button
                class="modal-button confirm"
                @click=${this._handleReboot}
                ?disabled=${this._loading}
              >
                ${this._loading ? "Rebooting..." : "Reboot"}
              </button>
            </div>
          </div>
        </div>
      ` : ""}

      <!-- Factory Reset Confirmation Modal -->
      ${this._showFactoryResetConfirm ? x `
        <div class="modal-overlay" @click=${this._closeDialogs}>
          <div class="modal" @click=${(e) => e.stopPropagation()}>
            <div class="modal-header">
              <h2 class="modal-title danger">
                <ha-icon icon="mdi:alert"></ha-icon>
                Factory Reset
              </h2>
            </div>
            <div class="modal-content">
              <div class="modal-warning">
                <div class="modal-warning-title">⚠️ This action cannot be undone</div>
                <div class="modal-warning-text">
                  All data will be permanently deleted
                </div>
              </div>
              <p class="modal-text">
                Factory reset will erase:
              </p>
              <p class="modal-text">
                • All contacts and call history<br>
                • WiFi credentials<br>
                • Do Not Disturb schedules<br>
                • Audio settings<br>
                • All statistics and configurations
              </p>
              <p class="modal-text">
                The device will restart and require complete reconfiguration.
              </p>
            </div>
            <div class="modal-actions">
              <button
                class="modal-button cancel"
                @click=${this._closeDialogs}
                ?disabled=${this._loading}
              >
                Cancel
              </button>
              <button
                class="modal-button danger"
                @click=${this._handleFactoryReset}
                ?disabled=${this._loading}
              >
                ${this._loading ? "Resetting..." : "Factory Reset"}
              </button>
            </div>
          </div>
        </div>
      ` : ""}

      ${this._loading ? x `
        <div class="loading-overlay">
          <ha-circular-progress active></ha-circular-progress>
        </div>
      ` : ""}
    `;
    }
};
TsuryPhoneDeviceSettings.styles = i$3 `
    :host {
      display: flex;
      flex-direction: column;
      height: 100%;
      background: var(--card-background-color);
    }

    .settings-header {
      display: flex;
      align-items: center;
      padding: 16px 20px;
      background: var(--card-background-color);
      border-bottom: 1px solid var(--divider-color);
      position: sticky;
      top: 0;
      z-index: 10;
      gap: 12px;
    }

    .back-button {
      width: 40px;
      height: 40px;
      border-radius: 12px;
      border: none;
      background: transparent;
      color: var(--primary-text-color);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.2s ease;
      flex-shrink: 0;
    }

    .back-button:hover {
      background: var(--divider-color);
    }

    .back-button ha-icon {
      --mdc-icon-size: 24px;
    }

    .header-title {
      flex: 1;
      font-size: 20px;
      font-weight: 600;
      color: var(--primary-text-color);
      margin: 0;
    }

    .settings-content {
      flex: 1;
      overflow-y: auto;
      padding: 16px 0;
    }

    /* Settings Groups */
    .settings-group {
      margin-bottom: 32px;
    }

    .group-header {
      padding: 8px 20px 12px;
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--secondary-text-color);
    }

    /* Action Button */
    .action-button {
      margin: 0 20px 16px;
      padding: 16px 20px;
      border-radius: 12px;
      border: none;
      background: var(--card-background-color);
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 16px;
      transition: background 0.2s ease;
      width: calc(100% - 40px);
      text-align: left;
    }

    .action-button:hover {
      background: var(--divider-color);
    }

    .action-button:active {
      background: var(--secondary-background-color);
    }

    .action-button.danger:hover {
      background: rgba(var(--rgb-error-color, 244, 67, 54), 0.1);
    }

    .action-button.danger:active {
      background: rgba(var(--rgb-error-color, 244, 67, 54), 0.15);
    }

    .action-icon {
      width: 44px;
      height: 44px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .action-button:not(.danger) .action-icon {
      background: rgba(var(--rgb-primary-color), 0.15);
      color: var(--primary-color);
    }

    .action-button.danger .action-icon {
      background: rgba(var(--rgb-error-color, 244, 67, 54), 0.15);
      color: var(--error-color);
    }

    .action-icon ha-icon {
      --mdc-icon-size: 24px;
    }

    .action-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 4px;
      min-width: 0;
    }

    .action-title {
      font-size: 16px;
      font-weight: 500;
      color: var(--primary-text-color);
    }

    .action-description {
      font-size: 13px;
      color: var(--secondary-text-color);
      line-height: 1.4;
    }

    .action-button.danger .action-description {
      color: var(--error-color);
    }

    /* Status Banner */
    .status-banner {
      margin: 0 20px 16px;
      padding: 16px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      gap: 12px;
      transition: background 0.3s ease;
    }

    .status-banner.active {
      background: linear-gradient(135deg, rgba(var(--rgb-warning-color, 255, 152, 0), 0.15) 0%, rgba(var(--rgb-warning-color, 255, 152, 0), 0.05) 100%);
    }

    .status-banner.inactive {
      background: linear-gradient(135deg, rgba(var(--rgb-secondary-text-color, 158, 158, 158), 0.12) 0%, rgba(var(--rgb-secondary-text-color, 158, 158, 158), 0.04) 100%);
    }

    .status-icon {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .status-banner.active .status-icon {
      background: rgba(var(--rgb-warning-color, 255, 152, 0), 0.2);
      color: var(--warning-color);
    }

    .status-banner.inactive .status-icon {
      background: rgba(var(--rgb-secondary-text-color, 158, 158, 158), 0.15);
      color: var(--secondary-text-color);
    }

    .status-icon ha-icon {
      --mdc-icon-size: 24px;
    }

    .status-content {
      flex: 1;
    }

    .status-title {
      font-size: 14px;
      font-weight: 600;
      color: var(--primary-text-color);
      margin-bottom: 2px;
    }

    .status-description {
      font-size: 12px;
      color: var(--secondary-text-color);
    }

    /* Web Portal Link */
    .portal-link {
      margin: 0 20px 16px;
      padding: 16px;
      background: var(--primary-color);
      color: var(--text-primary-color, white);
      border-radius: 12px;
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      font-weight: 500;
      transition: opacity 0.2s ease;
    }

    .portal-link:hover {
      opacity: 0.9;
    }

    .portal-link:active {
      opacity: 0.8;
    }

    .portal-link-content {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .portal-link-title {
      font-size: 16px;
      font-weight: 600;
    }

    .portal-link-url {
      font-size: 13px;
      opacity: 0.9;
      font-family: monospace;
    }

    .portal-link ha-icon {
      --mdc-icon-size: 24px;
      flex-shrink: 0;
    }

    /* Maintenance Toggle Item */
    .setting-item {
      margin: 0 20px 16px;
      padding: 16px;
      border-radius: 12px;
      background: var(--card-background-color);
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
    }

    .setting-info {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 4px;
      min-width: 0;
    }

    .setting-title {
      font-size: 16px;
      font-weight: 500;
      color: var(--primary-text-color);
    }

    .setting-description {
      font-size: 13px;
      color: var(--secondary-text-color);
      line-height: 1.4;
    }

    /* Help Text */
    .help-text {
      margin: 0 20px 16px;
      padding: 12px 16px;
      background: var(--secondary-background-color);
      border-radius: 8px;
      font-size: 13px;
      color: var(--secondary-text-color);
      line-height: 1.5;
      display: flex;
      align-items: flex-start;
      gap: 12px;
    }

    .help-text ha-icon {
      --mdc-icon-size: 20px;
      margin-top: 2px;
      flex-shrink: 0;
      color: var(--primary-color);
    }

    /* Confirmation Modal */
    .modal-overlay {
      position: fixed;
      inset: 0;
      background: var(--mdc-dialog-scrim-color, rgba(0, 0, 0, 0.5));
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
      padding: 20px;
    }

    .modal {
      background: var(--card-background-color);
      border-radius: 16px;
      max-width: 400px;
      width: 100%;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
      overflow: hidden;
    }

    .modal-header {
      padding: 20px 24px;
      border-bottom: 1px solid var(--divider-color);
    }

    .modal-title {
      font-size: 18px;
      font-weight: 600;
      color: var(--primary-text-color);
      margin: 0;
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .modal-title ha-icon {
      --mdc-icon-size: 24px;
    }

    .modal-title.danger {
      color: var(--error-color);
    }

    .modal-title.danger ha-icon {
      color: var(--error-color);
    }

    .modal-content {
      padding: 24px;
    }

    .modal-text {
      font-size: 14px;
      color: var(--secondary-text-color);
      line-height: 1.6;
      margin: 0 0 16px;
    }

    .modal-warning {
      padding: 12px 16px;
      background: rgba(var(--rgb-error-color, 244, 67, 54), 0.1);
      border-left: 4px solid var(--error-color);
      border-radius: 4px;
      margin: 0 0 16px;
    }

    .modal-warning-title {
      font-size: 13px;
      font-weight: 600;
      color: var(--error-color);
      margin: 0 0 4px;
    }

    .modal-warning-text {
      font-size: 13px;
      color: var(--secondary-text-color);
      line-height: 1.5;
      margin: 0;
    }

    .modal-actions {
      display: flex;
      gap: 12px;
      justify-content: flex-end;
      padding: 16px 24px;
      border-top: 1px solid var(--divider-color);
    }

    .modal-button {
      padding: 10px 20px;
      border-radius: 8px;
      border: none;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s ease;
      min-width: 80px;
    }

    .modal-button.cancel {
      background: transparent;
      color: var(--primary-text-color);
      border: 1px solid var(--divider-color);
    }

    .modal-button.cancel:hover {
      background: var(--divider-color);
    }

    .modal-button.confirm {
      background: var(--primary-color);
      color: var(--text-primary-color, white);
    }

    .modal-button.confirm:hover {
      opacity: 0.9;
    }

    .modal-button.danger {
      background: var(--error-color);
      color: var(--text-primary-color, white);
    }

    .modal-button.danger:hover {
      opacity: 0.9;
    }

    .modal-button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    /* Loading State */
    .loading-overlay {
      position: absolute;
      inset: 0;
      background: var(--mdc-dialog-scrim-color, rgba(0, 0, 0, 0.5));
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 100;
    }

    @media (max-width: 480px) {
      .settings-header {
        padding: 12px 16px;
      }

      .action-button {
        margin: 0 16px 14px;
        padding: 14px 16px;
        width: calc(100% - 32px);
      }

      .help-text {
        margin: 0 16px 14px;
        padding: 10px 14px;
      }

      .modal {
        margin: 0 16px;
      }
    }
  `;
__decorate([
    n({ attribute: false })
], TsuryPhoneDeviceSettings.prototype, "hass", void 0);
__decorate([
    n({ type: String })
], TsuryPhoneDeviceSettings.prototype, "entityId", void 0);
__decorate([
    r()
], TsuryPhoneDeviceSettings.prototype, "_loading", void 0);
__decorate([
    r()
], TsuryPhoneDeviceSettings.prototype, "_showRebootConfirm", void 0);
__decorate([
    r()
], TsuryPhoneDeviceSettings.prototype, "_showFactoryResetConfirm", void 0);
__decorate([
    r()
], TsuryPhoneDeviceSettings.prototype, "_maintenanceActive", void 0);
__decorate([
    r()
], TsuryPhoneDeviceSettings.prototype, "_deviceIp", void 0);
__decorate([
    r()
], TsuryPhoneDeviceSettings.prototype, "_sendModeEnabled", void 0);
TsuryPhoneDeviceSettings = __decorate([
    t("tsuryphone-device-settings")
], TsuryPhoneDeviceSettings);

let TsuryPhoneWebhooksSettings = class TsuryPhoneWebhooksSettings extends i {
    constructor() {
        super(...arguments);
        this._loading = false;
        this._webhooks = [];
        this._selectedAutomation = null;
        this._detectedWebhookIds = [];
        this._selectedWebhookId = ""; // Store the selected webhook ID
        this._newCode = "";
        this._newActionName = "";
        this._entityPickerLoaded = false;
    }
    connectedCallback() {
        super.connectedCallback();
        this._loadWebhooks();
        this._loadEntityPicker();
    }
    // Load ha-entity-picker component by triggering glance card editor
    // See: https://community.home-assistant.io/t/re-using-existing-frontend-components-in-lovelace-card-editor/103415
    async _loadEntityPicker() {
        if (!customElements.get("ha-entity-picker")) {
            const glanceCard = customElements.get("hui-glance-card");
            if (glanceCard && typeof glanceCard.getConfigElement === "function") {
                try {
                    await glanceCard.getConfigElement();
                }
                catch (e) {
                    console.warn("Failed to load ha-entity-picker:", e);
                }
            }
        }
        this._entityPickerLoaded = true;
    }
    willUpdate(changedProps) {
        super.willUpdate(changedProps);
        if (changedProps.has("hass") && this.hass && this.entityId) {
            this._loadWebhooks();
        }
    }
    _findEntity(prefix, keywords) {
        if (!this.hass)
            return null;
        const allEntityIds = Object.keys(this.hass.states);
        const found = allEntityIds.find((id) => id.startsWith(prefix) && keywords.some((kw) => id.includes(kw))) || null;
        return found;
    }
    async _loadWebhooks() {
        if (!this.hass || !this.entityId)
            return;
        try {
            // Get webhooks from coordinator state via sensor attributes
            const sensorEntity = this.hass.states[this.entityId];
            if (sensorEntity?.attributes?.webhooks) {
                this._webhooks = sensorEntity.attributes.webhooks;
            }
        }
        catch (error) {
            console.error("Failed to load webhooks:", error);
        }
    }
    _handleBack() {
        this.dispatchEvent(new CustomEvent("navigate-back", {
            bubbles: true,
            composed: true,
        }));
    }
    async _handleAutomationSelected(e) {
        const entityId = e.detail.value;
        this._selectedAutomation = entityId;
        this._detectedWebhookIds = [];
        if (!entityId)
            return;
        this._loading = true;
        try {
            // Fetch automation config via WebSocket
            const config = await this.hass.callWS({
                type: "automation/config",
                entity_id: entityId,
            });
            // Extract webhook triggers - handle both 'trigger' and 'triggers' keys
            let triggers = [];
            if (Array.isArray(config?.trigger)) {
                triggers = config.trigger;
            }
            else if (Array.isArray(config?.triggers)) {
                triggers = config.triggers;
            }
            else if (config?.config?.triggers) {
                // Try nested config.config.triggers path
                triggers = Array.isArray(config.config.triggers) ? config.config.triggers : [config.config.triggers];
            }
            else if (config?.trigger) {
                triggers = [config.trigger];
            }
            else if (config?.triggers) {
                triggers = [config.triggers];
            }
            // Filter for webhook triggers - check both 'platform' and 'trigger' fields
            this._detectedWebhookIds = triggers
                .filter((t) => {
                const isWebhook = t?.platform === "webhook" || t?.trigger === "webhook";
                const hasWebhookId = t?.webhook_id;
                return isWebhook && hasWebhookId;
            })
                .map((t) => t.webhook_id);
            // Auto-select if there's only one webhook ID
            if (this._detectedWebhookIds.length === 1) {
                this._selectedWebhookId = this._detectedWebhookIds[0];
                // Force re-render to update the selected chip styling
                this.requestUpdate();
            }
            // Auto-fill action name from automation friendly_name
            if (config?.alias) {
                this._newActionName = config.alias;
            }
        }
        catch (error) {
            console.error("Failed to fetch automation config:", error);
            this._detectedWebhookIds = [];
        }
        finally {
            this._loading = false;
        }
    }
    _handleWebhookIdClick(webhookId) {
        this._selectedWebhookId = webhookId;
    }
    async _handleAddWebhook() {
        if (!this.entityId) {
            console.error("Entity ID is required");
            return;
        }
        if (!this._selectedWebhookId || !this._newCode || !this._newActionName) {
            console.error("Missing required fields:", {
                webhookId: this._selectedWebhookId,
                code: this._newCode,
                name: this._newActionName,
            });
            return;
        }
        // Validate code is numeric only
        if (!/^\d+$/.test(this._newCode)) {
            alert("Code must contain only numbers (0-9). This is what you dial on your rotary phone.");
            return;
        }
        this._loading = true;
        try {
            // Call tsuryphone.webhook_add service
            await this.hass.callService("tsuryphone", "webhook_add", {
                webhook_id: this._selectedWebhookId,
                code: this._newCode,
                name: this._newActionName,
            }, {
                entity_id: this.entityId,
            });
            // Clear form
            this._newCode = "";
            this._newActionName = "";
            this._selectedAutomation = null;
            this._detectedWebhookIds = [];
            this._selectedWebhookId = "";
            // Reload webhooks after a short delay to allow backend to update
            setTimeout(() => {
                this._loadWebhooks();
            }, 500);
        }
        catch (error) {
            console.error("Failed to add webhook:", error);
            alert(`Failed to add webhook: ${error}`);
        }
        finally {
            this._loading = false;
        }
    }
    async _handleDeleteWebhook(webhook) {
        if (!this.entityId) {
            console.error("Entity ID is required");
            return;
        }
        this._loading = true;
        try {
            // Call tsuryphone.webhook_remove service
            await this.hass.callService("tsuryphone", "webhook_remove", {
                code: webhook.code,
            }, {
                entity_id: this.entityId,
            });
            // Reload webhooks after a short delay
            setTimeout(() => {
                this._loadWebhooks();
            }, 500);
        }
        catch (error) {
            console.error("Failed to delete webhook:", error);
            alert(`Failed to delete webhook: ${error}`);
        }
        finally {
            this._loading = false;
        }
    }
    _handleCodeInput(e) {
        const input = e.target;
        let value = input.value;
        // Only allow numeric characters (0-9)
        value = value.replace(/[^0-9]/g, "");
        // Update the input field if we stripped characters
        if (input.value !== value) {
            input.value = value;
        }
        this._newCode = value;
        // Update backend entity
        const codeEntity = this._findEntity("text.", ["webhook_code"]);
        if (codeEntity) {
            this.hass.callService("text", "set_value", {
                entity_id: codeEntity,
                value: this._newCode,
            });
        }
    }
    _handleActionNameInput(e) {
        this._newActionName = e.target.value;
        // Update backend entity
        const nameEntity = this._findEntity("text.", ["webhook", "action_name"]);
        if (nameEntity) {
            this.hass.callService("text", "set_value", {
                entity_id: nameEntity,
                value: this._newActionName,
            });
        }
    }
    render() {
        return x `
      <div class="settings-header">
        <button
          class="back-button"
          @click=${this._handleBack}
          aria-label="Back"
        >
          <ha-icon icon="mdi:arrow-left"></ha-icon>
        </button>
        <h1 class="header-title">Webhooks</h1>
      </div>

      <div class="settings-content">
        <!-- Help Text -->
        <div class="help-text">
          <ha-icon icon="mdi:information"></ha-icon>
          <div>
            Configure webhook actions that trigger Home Assistant automations.
            Select an automation to automatically detect and extract webhook IDs.
          </div>
        </div>

        <!-- Add Webhook Form -->
        <div class="settings-group">
          <div class="group-header">Add Webhook</div>

          <div class="add-webhook-form">
            ${!this._entityPickerLoaded
            ? x `<div class="loading-message">Loading picker...</div>`
            : x `
                  <!-- Automation Picker -->
                  <div class="form-row">
                    <label class="form-label">Select Automation</label>
                    <ha-entity-picker
                      .hass=${this.hass}
                      .includeDomains=${["automation"]}
                      .value=${this._selectedAutomation}
                      @value-changed=${this._handleAutomationSelected}
                      ?disabled=${this._loading}
                      label="Choose automation with webhook trigger"
                      allow-custom-entity
                    ></ha-entity-picker>
                  </div>
                `}

            ${this._detectedWebhookIds.length > 0
            ? x `
                  <div class="detected-webhooks">
                    <div class="detected-title">
                      Detected webhook IDs (click to select):
                    </div>
                    ${this._detectedWebhookIds.map((id) => x `
                        <span
                          class="webhook-chip ${id === this._selectedWebhookId ? 'selected' : ''}"
                          @click=${() => this._handleWebhookIdClick(id)}
                          title="Click to select this webhook ID"
                        >
                          ${id}
                        </span>
                      `)}
                  </div>
                `
            : this._selectedAutomation
                ? x `
                  <div class="detected-webhooks">
                    <div class="detected-title">
                      ⚠️ No webhook triggers found in this automation
                    </div>
                  </div>
                `
                : ""}

            <!-- Code Input -->
            <div class="form-row">
              <label class="form-label">Code</label>
              <input
                type="text"
                inputmode="numeric"
                pattern="[0-9]*"
                class="form-input"
                .value=${this._newCode}
                @input=${this._handleCodeInput}
                placeholder="1234"
                ?disabled=${this._loading}
              />
            </div>

            <!-- Action Name Input -->
            <div class="form-row">
              <label class="form-label">Action Name</label>
              <input
                type="text"
                class="form-input"
                .value=${this._newActionName}
                @input=${this._handleActionNameInput}
                placeholder="Front Door Bell"
                ?disabled=${this._loading}
              />
            </div>

            <!-- Add Button -->
            <button
              class="add-button"
              @click=${this._handleAddWebhook}
              ?disabled=${this._loading ||
            !this._selectedWebhookId ||
            !this._newCode ||
            !this._newActionName}
            >
              <ha-icon icon="mdi:plus"></ha-icon>
              <span>Add Webhook</span>
            </button>
          </div>
        </div>

        <!-- Webhook List -->
        <div class="settings-group">
          <div class="group-header">
            Configured Webhooks (${this._webhooks.length})
          </div>

          ${this._webhooks.length === 0
            ? x `
                <div class="empty-state">
                  <ha-icon icon="mdi:webhook"></ha-icon>
                  <div class="empty-state-title">No Webhooks Configured</div>
                  <div class="empty-state-description">
                    Add a webhook above to trigger automations from your device
                  </div>
                </div>
              `
            : x `
                <div class="webhook-list">
                  ${this._webhooks.map((webhook) => x `
                      <div class="webhook-item">
                        <div class="webhook-icon">
                          <ha-icon icon="mdi:webhook"></ha-icon>
                        </div>
                        <div class="webhook-info">
                          <div class="webhook-title">
                            ${webhook.action_name || webhook.code}
                          </div>
                          <div class="webhook-details">
                            <span class="webhook-code">Code: ${webhook.code}</span>
                            <span class="webhook-id">ID: ${webhook.webhook_id}</span>
                          </div>
                        </div>
                        <div class="webhook-actions">
                          <button
                            class="delete-button"
                            @click=${() => this._handleDeleteWebhook(webhook)}
                            ?disabled=${this._loading}
                            title="Delete webhook"
                          >
                            <ha-icon icon="mdi:delete"></ha-icon>
                          </button>
                        </div>
                      </div>
                    `)}
                </div>
              `}
        </div>
      </div>

      ${this._loading
            ? x `
            <div class="loading-overlay">
              <ha-circular-progress active></ha-circular-progress>
            </div>
          `
            : ""}
    `;
    }
};
TsuryPhoneWebhooksSettings.styles = i$3 `
    :host {
      display: flex;
      flex-direction: column;
      height: 100%;
      background: var(--card-background-color);
    }

    .settings-header {
      display: flex;
      align-items: center;
      padding: 16px 20px;
      background: var(--card-background-color);
      border-bottom: 1px solid var(--divider-color);
      position: sticky;
      top: 0;
      z-index: 10;
      gap: 12px;
    }

    .back-button {
      width: 40px;
      height: 40px;
      border-radius: 12px;
      border: none;
      background: transparent;
      color: var(--primary-text-color);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.2s ease;
      flex-shrink: 0;
    }

    .back-button:hover {
      background: var(--divider-color);
    }

    .back-button ha-icon {
      --mdc-icon-size: 24px;
    }

    .header-title {
      flex: 1;
      font-size: 20px;
      font-weight: 600;
      color: var(--primary-text-color);
      margin: 0;
    }

    .settings-content {
      flex: 1;
      overflow-y: auto;
      padding: 16px 0;
    }

    /* Settings Groups */
    .settings-group {
      margin-bottom: 32px;
    }

    .group-header {
      padding: 8px 20px 12px;
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--secondary-text-color);
    }

    /* Add Webhook Form */
    .add-webhook-form {
      margin: 0 20px;
      padding: 20px;
      background: var(--card-background-color);
      border-radius: 12px;
      border: 1px solid var(--divider-color);
    }

    .form-row {
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin-bottom: 16px;
    }

    .form-label {
      font-size: 14px;
      font-weight: 500;
      color: var(--primary-text-color);
      margin-bottom: 4px;
    }

    .form-input {
      width: 100%;
      padding: 12px;
      border: 1px solid var(--divider-color);
      border-radius: 8px;
      background: var(--card-background-color);
      color: var(--primary-text-color);
      font-size: 14px;
      box-sizing: border-box;
    }

    .form-input:focus {
      outline: none;
      border-color: var(--primary-color);
    }

    .form-input::placeholder {
      color: var(--secondary-text-color);
      opacity: 0.6;
    }

    .loading-message {
      padding: 16px;
      text-align: center;
      color: var(--secondary-text-color);
      font-size: 14px;
    }

    /* Webhook detected list */
    .detected-webhooks {
      margin-top: 12px;
      padding: 12px;
      background: var(--secondary-background-color);
      border-radius: 8px;
    }

    .detected-title {
      font-size: 13px;
      font-weight: 500;
      color: var(--primary-text-color);
      margin-bottom: 8px;
    }

    .webhook-chip {
      display: inline-block;
      padding: 6px 12px;
      margin: 4px 4px 4px 0;
      background: var(--primary-color);
      color: var(--text-primary-color, white);
      border-radius: 16px;
      font-size: 12px;
      font-family: monospace;
      cursor: pointer;
      transition: all 0.2s ease;
      border: 2px solid transparent;
    }

    .webhook-chip:hover {
      opacity: 0.8;
    }

    .webhook-chip.selected {
      border-color: var(--accent-color, white);
      box-shadow: 0 0 8px var(--primary-color);
    }

    /* Add Button */
    .add-button {
      width: 100%;
      padding: 12px 20px;
      border-radius: 8px;
      border: none;
      background: var(--primary-color);
      color: var(--text-primary-color, white);
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      transition: opacity 0.2s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }

    .add-button:hover:not(:disabled) {
      opacity: 0.9;
    }

    .add-button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .add-button ha-icon {
      --mdc-icon-size: 20px;
    }

    /* Webhook List */
    .webhook-list {
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin: 0 20px;
    }

    .webhook-item {
      padding: 16px;
      background: var(--card-background-color);
      border-radius: 12px;
      border: 1px solid var(--divider-color);
      display: flex;
      align-items: center;
      gap: 16px;
    }

    .webhook-icon {
      width: 40px;
      height: 40px;
      border-radius: 8px;
      background: var(--primary-color);
      color: var(--text-primary-color, white);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .webhook-icon ha-icon {
      --mdc-icon-size: 24px;
    }

    .webhook-info {
      flex: 1;
      min-width: 0;
    }

    .webhook-title {
      font-size: 16px;
      font-weight: 500;
      color: var(--primary-text-color);
      margin-bottom: 4px;
    }

    .webhook-details {
      font-size: 13px;
      color: var(--secondary-text-color);
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    .webhook-code {
      font-family: monospace;
      color: var(--primary-color);
    }

    .webhook-id {
      font-family: monospace;
      opacity: 0.8;
    }

    .webhook-actions {
      display: flex;
      gap: 8px;
    }

    .delete-button {
      width: 36px;
      height: 36px;
      border-radius: 8px;
      border: 1px solid var(--divider-color);
      background: transparent;
      color: var(--error-color);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease;
    }

    .delete-button:hover {
      background: rgba(var(--rgb-error-color, 244, 67, 54), 0.1);
      border-color: var(--error-color);
    }

    .delete-button ha-icon {
      --mdc-icon-size: 20px;
    }

    /* Empty State */
    .empty-state {
      margin: 0 20px;
      padding: 48px 20px;
      text-align: center;
      color: var(--secondary-text-color);
    }

    .empty-state ha-icon {
      --mdc-icon-size: 64px;
      opacity: 0.3;
      margin-bottom: 16px;
    }

    .empty-state-title {
      font-size: 16px;
      font-weight: 500;
      margin-bottom: 8px;
      color: var(--primary-text-color);
    }

    .empty-state-description {
      font-size: 14px;
      line-height: 1.5;
    }

    /* Help Text */
    .help-text {
      margin: 0 20px 16px;
      padding: 12px 16px;
      background: var(--secondary-background-color);
      border-radius: 8px;
      font-size: 13px;
      color: var(--secondary-text-color);
      line-height: 1.5;
      display: flex;
      align-items: flex-start;
      gap: 12px;
    }

    .help-text ha-icon {
      --mdc-icon-size: 20px;
      margin-top: 2px;
      flex-shrink: 0;
      color: var(--primary-color);
    }

    /* Loading State */
    .loading-overlay {
      position: absolute;
      inset: 0;
      background: var(--mdc-dialog-scrim-color, rgba(0, 0, 0, 0.3));
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 100;
    }

    @media (max-width: 480px) {
      .settings-header {
        padding: 12px 16px;
      }

      .add-webhook-form,
      .webhook-list,
      .help-text,
      .empty-state {
        margin: 0 16px;
      }

      .webhook-item {
        padding: 14px;
      }
    }
  `;
__decorate([
    n({ attribute: false })
], TsuryPhoneWebhooksSettings.prototype, "hass", void 0);
__decorate([
    n({ type: String })
], TsuryPhoneWebhooksSettings.prototype, "entityId", void 0);
__decorate([
    r()
], TsuryPhoneWebhooksSettings.prototype, "_loading", void 0);
__decorate([
    r()
], TsuryPhoneWebhooksSettings.prototype, "_webhooks", void 0);
__decorate([
    r()
], TsuryPhoneWebhooksSettings.prototype, "_selectedAutomation", void 0);
__decorate([
    r()
], TsuryPhoneWebhooksSettings.prototype, "_detectedWebhookIds", void 0);
__decorate([
    r()
], TsuryPhoneWebhooksSettings.prototype, "_selectedWebhookId", void 0);
__decorate([
    r()
], TsuryPhoneWebhooksSettings.prototype, "_newCode", void 0);
__decorate([
    r()
], TsuryPhoneWebhooksSettings.prototype, "_newActionName", void 0);
__decorate([
    r()
], TsuryPhoneWebhooksSettings.prototype, "_entityPickerLoaded", void 0);
TsuryPhoneWebhooksSettings = __decorate([
    t("tsuryphone-webhooks-settings")
], TsuryPhoneWebhooksSettings);

let TsuryPhoneStatisticsSettings = class TsuryPhoneStatisticsSettings extends i {
    constructor() {
        super(...arguments);
        this._blockedCalls = 0;
        this._callHistorySize = 0;
        this._incomingCalls = 0;
        this._outgoingCalls = 0;
        this._totalCalls = 0;
        this._totalTalkTime = 0;
        this._loading = true;
    }
    connectedCallback() {
        super.connectedCallback();
        this._loadStatistics();
    }
    willUpdate(changedProps) {
        super.willUpdate(changedProps);
        if (changedProps.has("hass") && this.hass && this.entityId) {
            this._loadStatistics();
        }
    }
    updated(changedProps) {
        super.updated(changedProps);
        if (changedProps.has("hass") && this.hass && this.entityId) {
            this._loadStatistics();
        }
    }
    _findEntity(prefix, keywords) {
        if (!this.hass)
            return null;
        const allEntityIds = Object.keys(this.hass.states);
        // Backend entities DON'T have device_id prefix - search by prefix + keywords only
        const found = allEntityIds.find((id) => id.startsWith(prefix) && keywords.some(kw => id.includes(kw))) || null;
        return found;
    }
    _loadStatistics() {
        if (!this.hass || !this.entityId)
            return;
        try {
            // Find diagnostic sensor entities using keyword search
            // Based on backend screenshot: Blocked Calls, Call History Size, Incoming Calls, etc.
            // Blocked Calls
            const blockedCallsSensor = this._findEntity("sensor.", ["blocked_calls"]);
            if (blockedCallsSensor) {
                this._blockedCalls = parseInt(this.hass.states[blockedCallsSensor].state) || 0;
            }
            // Call History Size
            const callHistorySensor = this._findEntity("sensor.", ["call_history_size"]);
            if (callHistorySensor) {
                this._callHistorySize = parseInt(this.hass.states[callHistorySensor].state) || 0;
            }
            // Incoming Calls
            const incomingCallsSensor = this._findEntity("sensor.", ["incoming_calls"]);
            if (incomingCallsSensor) {
                this._incomingCalls = parseInt(this.hass.states[incomingCallsSensor].state) || 0;
            }
            // Outgoing Calls
            const outgoingCallsSensor = this._findEntity("sensor.", ["outgoing_calls"]);
            if (outgoingCallsSensor) {
                this._outgoingCalls = parseInt(this.hass.states[outgoingCallsSensor].state) || 0;
            }
            // Total Calls
            const totalCallsSensor = this._findEntity("sensor.", ["total_calls"]);
            if (totalCallsSensor) {
                this._totalCalls = parseInt(this.hass.states[totalCallsSensor].state) || 0;
            }
            // Total Talk Time (in seconds)
            const totalTalkTimeSensor = this._findEntity("sensor.", ["total_talk_time"]);
            if (totalTalkTimeSensor) {
                this._totalTalkTime = parseFloat(this.hass.states[totalTalkTimeSensor].state) || 0;
            }
            this._loading = false;
        }
        catch (err) {
            console.error("Error loading statistics:", err);
            this._loading = false;
        }
    }
    _formatTalkTime(seconds) {
        if (seconds < 60) {
            return `${Math.floor(seconds)}s`;
        }
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = Math.floor(seconds % 60);
        if (hours > 0) {
            return `${hours}h ${minutes}m ${secs}s`;
        }
        return `${minutes}m ${secs}s`;
    }
    _handleBack() {
        this.dispatchEvent(new CustomEvent("navigate-back", {
            bubbles: true,
            composed: true,
        }));
    }
    render() {
        return x `
      <div class="settings-header">
        <button class="back-button" @click=${this._handleBack}>
          <ha-icon icon="mdi:arrow-left"></ha-icon>
        </button>
        <h2 class="header-title">Statistics</h2>
      </div>

      <div class="settings-content">
        ${this._loading
            ? x `
              <div class="loading-overlay">
                <div class="loading-spinner"></div>
              </div>
            `
            : ""}

        <div class="statistics-grid">
          <!-- Blocked Calls -->
          <div class="stat-card" data-type="blocked">
            <div class="stat-icon">
              <ha-icon icon="mdi:phone-cancel"></ha-icon>
            </div>
            <div class="stat-value">${this._blockedCalls}</div>
            <div class="stat-label">Blocked Calls</div>
          </div>

          <!-- Call History Size -->
          <div class="stat-card" data-type="history">
            <div class="stat-icon">
              <ha-icon icon="mdi:history"></ha-icon>
            </div>
            <div class="stat-value">${this._callHistorySize}</div>
            <div class="stat-label">Call History</div>
          </div>

          <!-- Incoming Calls -->
          <div class="stat-card" data-type="incoming">
            <div class="stat-icon">
              <ha-icon icon="mdi:phone-incoming"></ha-icon>
            </div>
            <div class="stat-value">${this._incomingCalls}</div>
            <div class="stat-label">Incoming</div>
          </div>

          <!-- Outgoing Calls -->
          <div class="stat-card" data-type="outgoing">
            <div class="stat-icon">
              <ha-icon icon="mdi:phone-outgoing"></ha-icon>
            </div>
            <div class="stat-value">${this._outgoingCalls}</div>
            <div class="stat-label">Outgoing</div>
          </div>

          <!-- Total Calls -->
          <div class="stat-card" data-type="total">
            <div class="stat-icon">
              <ha-icon icon="mdi:phone"></ha-icon>
            </div>
            <div class="stat-value">${this._totalCalls}</div>
            <div class="stat-label">Total Calls</div>
          </div>

          <!-- Total Talk Time -->
          <div class="stat-card" data-type="time">
            <div class="stat-icon">
              <ha-icon icon="mdi:clock-outline"></ha-icon>
            </div>
            <div class="stat-value">${this._formatTalkTime(this._totalTalkTime)}</div>
            <div class="stat-label">Talk Time</div>
          </div>
        </div>

        <!-- Info Section -->
        <div class="info-section">
          <div class="info-title">
            <ha-icon icon="mdi:information-outline"></ha-icon>
            About Statistics
          </div>
          <p class="info-text">
            Statistics are collected from your device and show cumulative data
            since the last factory reset. Call history is limited to the most
            recent ${this._callHistorySize} calls.
          </p>
        </div>
      </div>
    `;
    }
};
TsuryPhoneStatisticsSettings.styles = i$3 `
    :host {
      display: flex;
      flex-direction: column;
      height: 100%;
      background: var(--card-background-color);
    }

    .settings-header {
      display: flex;
      align-items: center;
      padding: 16px 20px;
      background: var(--card-background-color);
      border-bottom: 1px solid var(--divider-color);
      position: sticky;
      top: 0;
      z-index: 10;
      gap: 12px;
    }

    .back-button {
      width: 40px;
      height: 40px;
      border-radius: 12px;
      border: none;
      background: transparent;
      color: var(--primary-text-color);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.2s ease;
      flex-shrink: 0;
    }

    .back-button:hover {
      background: var(--divider-color);
    }

    .back-button ha-icon {
      --mdc-icon-size: 24px;
    }

    .header-title {
      flex: 1;
      font-size: 20px;
      font-weight: 600;
      color: var(--primary-text-color);
      margin: 0;
    }

    .settings-content {
      flex: 1;
      overflow-y: auto;
      padding: 16px 0;
    }

    /* Statistics Grid */
    .statistics-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
      gap: 16px;
      margin: 0 20px 24px;
    }

    @media (max-width: 600px) {
      .statistics-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    /* Stat Card */
    .stat-card {
      background: var(--card-background-color);
      border: 1px solid var(--divider-color);
      border-radius: 12px;
      padding: 20px 16px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
      transition: all 0.2s ease;
    }

    .stat-card:hover {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      border-color: var(--primary-color);
    }

    .stat-icon {
      width: 48px;
      height: 48px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(var(--rgb-primary-color), 0.15);
    }

    .stat-icon ha-icon {
      --mdc-icon-size: 28px;
      color: var(--primary-color);
    }

    /* Icon color variations */
    .stat-card[data-type="blocked"] .stat-icon {
      background: rgba(var(--rgb-error-color, 255, 82, 82), 0.15);
    }

    .stat-card[data-type="blocked"] .stat-icon ha-icon {
      color: var(--error-color);
    }

    .stat-card[data-type="history"] .stat-icon {
      background: rgba(156, 39, 176, 0.15);
    }

    .stat-card[data-type="history"] .stat-icon ha-icon {
      color: #9c27b0;
    }

    .stat-card[data-type="incoming"] .stat-icon {
      background: rgba(var(--rgb-info-color, 33, 150, 243), 0.15);
    }

    .stat-card[data-type="incoming"] .stat-icon ha-icon {
      color: var(--info-color);
    }

    .stat-card[data-type="outgoing"] .stat-icon {
      background: rgba(var(--rgb-success-color, 76, 175, 80), 0.15);
    }

    .stat-card[data-type="outgoing"] .stat-icon ha-icon {
      color: var(--success-color);
    }

    .stat-card[data-type="total"] .stat-icon {
      background: rgba(var(--rgb-warning-color, 255, 152, 0), 0.15);
    }

    .stat-card[data-type="total"] .stat-icon ha-icon {
      color: var(--warning-color);
    }

    .stat-card[data-type="time"] .stat-icon {
      background: rgba(0, 188, 212, 0.15);
    }

    .stat-card[data-type="time"] .stat-icon ha-icon {
      color: #00bcd4;
    }

    .stat-value {
      font-size: 28px;
      font-weight: 700;
      color: var(--primary-text-color);
      line-height: 1;
      margin: 0;
    }

    .stat-label {
      font-size: 13px;
      font-weight: 500;
      color: var(--secondary-text-color);
      text-align: center;
      line-height: 1.3;
      margin: 0;
      white-space: nowrap;
    }

    /* Loading State */
    .loading-overlay {
      position: absolute;
      inset: 0;
      background: rgba(var(--rgb-card-background-color, 255, 255, 255), 0.7);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 100;
    }

    .loading-spinner {
      width: 48px;
      height: 48px;
      border: 4px solid var(--divider-color);
      border-top-color: var(--primary-color);
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }

    /* Info Section */
    .info-section {
      margin: 0 20px;
      background: var(--card-background-color);
      border: 1px solid var(--divider-color);
      border-radius: 12px;
      padding: 20px;
    }

    .info-title {
      font-size: 16px;
      font-weight: 600;
      color: var(--primary-text-color);
      margin: 0 0 8px 0;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .info-title ha-icon {
      --mdc-icon-size: 20px;
      color: var(--primary-color);
    }

    .info-text {
      font-size: 14px;
      color: var(--secondary-text-color);
      line-height: 1.5;
      margin: 0;
    }

    @media (max-width: 480px) {
      .settings-header {
        padding: 12px 16px;
      }

      .statistics-grid,
      .info-section {
        margin: 0 16px 24px;
      }

      .statistics-grid {
        gap: 12px;
      }
    }
  `;
__decorate([
    n({ attribute: false })
], TsuryPhoneStatisticsSettings.prototype, "hass", void 0);
__decorate([
    n({ type: String })
], TsuryPhoneStatisticsSettings.prototype, "entityId", void 0);
__decorate([
    r()
], TsuryPhoneStatisticsSettings.prototype, "_blockedCalls", void 0);
__decorate([
    r()
], TsuryPhoneStatisticsSettings.prototype, "_callHistorySize", void 0);
__decorate([
    r()
], TsuryPhoneStatisticsSettings.prototype, "_incomingCalls", void 0);
__decorate([
    r()
], TsuryPhoneStatisticsSettings.prototype, "_outgoingCalls", void 0);
__decorate([
    r()
], TsuryPhoneStatisticsSettings.prototype, "_totalCalls", void 0);
__decorate([
    r()
], TsuryPhoneStatisticsSettings.prototype, "_totalTalkTime", void 0);
__decorate([
    r()
], TsuryPhoneStatisticsSettings.prototype, "_loading", void 0);
TsuryPhoneStatisticsSettings = __decorate([
    t("tsuryphone-statistics-settings")
], TsuryPhoneStatisticsSettings);

let TsuryPhoneDiagnosticsSettings = class TsuryPhoneDiagnosticsSettings extends i {
    constructor() {
        super(...arguments);
        this._freeMemory = 0;
        this._uptime = 0;
        this._wifiSignal = 0;
        this._loading = false;
    }
    connectedCallback() {
        super.connectedCallback();
        this._loadDiagnostics();
    }
    willUpdate(changedProps) {
        super.willUpdate(changedProps);
        if (changedProps.has("hass") && this.hass && this.entityId) {
            this._loadDiagnostics();
        }
    }
    _findEntity(prefix, keywords) {
        if (!this.hass)
            return null;
        const allEntityIds = Object.keys(this.hass.states);
        const found = allEntityIds.find((id) => id.startsWith(prefix) && keywords.some((kw) => id.includes(kw))) || null;
        return found;
    }
    async _loadDiagnostics() {
        if (!this.hass || !this.entityId)
            return;
        try {
            // Find diagnostic sensors
            const freeMemoryEntity = this._findEntity("sensor.", ["free_memory"]);
            const uptimeEntity = this._findEntity("sensor.", ["uptime"]);
            const wifiSignalEntity = this._findEntity("sensor.", ["wifi_signal_strength"]);
            if (freeMemoryEntity) {
                const state = this.hass.states[freeMemoryEntity];
                this._freeMemory = parseFloat(state.state) || 0;
            }
            if (uptimeEntity) {
                const state = this.hass.states[uptimeEntity];
                this._uptime = parseFloat(state.state) || 0;
            }
            if (wifiSignalEntity) {
                const state = this.hass.states[wifiSignalEntity];
                this._wifiSignal = parseFloat(state.state) || 0;
            }
        }
        catch (error) {
            console.error("Failed to load diagnostics:", error);
        }
    }
    _handleBack() {
        this.dispatchEvent(new CustomEvent("navigate-back", {
            bubbles: true,
            composed: true,
        }));
    }
    async _handleRefreshData() {
        if (!this.entityId) {
            console.error("Entity ID is required");
            return;
        }
        this._loading = true;
        try {
            await this.hass.callService("tsuryphone", "refetch_all", {}, {
                entity_id: this.entityId,
            });
            // Reload diagnostics after refresh
            setTimeout(() => {
                this._loadDiagnostics();
            }, 1000);
        }
        catch (error) {
            console.error("Failed to refresh data:", error);
            alert(`Failed to refresh data: ${error}`);
        }
        finally {
            this._loading = false;
        }
    }
    async _handleSnapshot() {
        if (!this.entityId) {
            console.error("Entity ID is required");
            return;
        }
        this._loading = true;
        try {
            await this.hass.callService("tsuryphone", "get_tsuryphone_config", {}, {
                entity_id: this.entityId,
            });
            // Show success feedback
            console.log("Configuration snapshot retrieved successfully");
        }
        catch (error) {
            console.error("Failed to get snapshot:", error);
            alert(`Failed to get snapshot: ${error}`);
        }
        finally {
            this._loading = false;
        }
    }
    _formatMemory(bytes) {
        if (bytes === 0)
            return "0 B";
        const kb = bytes / 1024;
        if (kb < 1024) {
            return `${Math.round(kb)} KB`;
        }
        const mb = kb / 1024;
        return `${mb.toFixed(1)} MB`;
    }
    _formatUptime(seconds) {
        if (seconds === 0)
            return "0s";
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = Math.floor(seconds % 60);
        const parts = [];
        if (hours > 0)
            parts.push(`${hours}h`);
        if (minutes > 0)
            parts.push(`${minutes}m`);
        if (secs > 0 || parts.length === 0)
            parts.push(`${secs}s`);
        return parts.join(" ");
    }
    _getWifiSignalQuality(dBm) {
        if (dBm >= -50)
            return "excellent";
        if (dBm >= -70)
            return "good";
        if (dBm >= -80)
            return "fair";
        return "poor";
    }
    _getWifiSignalLabel(dBm) {
        const quality = this._getWifiSignalQuality(dBm);
        return quality.charAt(0).toUpperCase() + quality.slice(1);
    }
    render() {
        const wifiQuality = this._getWifiSignalQuality(this._wifiSignal);
        return x `
      <div class="settings-header">
        <button
          class="back-button"
          @click=${this._handleBack}
          aria-label="Back"
        >
          <ha-icon icon="mdi:arrow-left"></ha-icon>
        </button>
        <h1 class="header-title">Diagnostics</h1>
      </div>

      <div class="settings-content">
        <!-- Help Text -->
        <div class="help-text">
          <ha-icon icon="mdi:information"></ha-icon>
          <div>
            Device health and system information. Use refresh to reload data
            from device storage, or snapshot to capture current state.
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="settings-group">
          <div class="group-header">Actions</div>
          <div class="action-buttons">
            <button
              class="action-button"
              @click=${this._handleRefreshData}
              ?disabled=${this._loading}
              title="Reload configuration and statistics from device storage"
            >
              <ha-icon icon="mdi:refresh"></ha-icon>
              <span class="action-button-label">Refresh Data</span>
            </button>

            <button
              class="action-button"
              @click=${this._handleSnapshot}
              ?disabled=${this._loading}
              title="Retrieve current in-memory device state"
            >
              <ha-icon icon="mdi:camera"></ha-icon>
              <span class="action-button-label">Get Snapshot</span>
            </button>
          </div>
        </div>

        <!-- Diagnostic Cards -->
        <div class="settings-group">
          <div class="group-header">Device Information</div>
          <div class="info-cards">
            <!-- Free Memory -->
            <div class="info-card" data-type="memory">
              <div class="info-icon">
                <ha-icon icon="mdi:memory"></ha-icon>
              </div>
              <div class="info-value">${this._formatMemory(this._freeMemory)}</div>
              <div class="info-label">Free Memory</div>
            </div>

            <!-- Uptime -->
            <div class="info-card" data-type="uptime">
              <div class="info-icon">
                <ha-icon icon="mdi:clock-outline"></ha-icon>
              </div>
              <div class="info-value">${this._formatUptime(this._uptime)}</div>
              <div class="info-label">Uptime</div>
            </div>

            <!-- WiFi Signal -->
            <div class="info-card" data-type="wifi" data-signal="${wifiQuality}">
              <div class="info-icon">
                <ha-icon icon="mdi:wifi"></ha-icon>
              </div>
              <div class="info-value">${this._wifiSignal} dBm</div>
              <div class="info-label">
                WiFi Signal<br />(${this._getWifiSignalLabel(this._wifiSignal)})
              </div>
            </div>
          </div>
        </div>
      </div>

      ${this._loading
            ? x `
            <div class="loading-overlay">
              <ha-circular-progress active></ha-circular-progress>
            </div>
          `
            : ""}
    `;
    }
};
TsuryPhoneDiagnosticsSettings.styles = i$3 `
    :host {
      display: flex;
      flex-direction: column;
      height: 100%;
      background: var(--card-background-color);
    }

    .settings-header {
      display: flex;
      align-items: center;
      padding: 16px 20px;
      background: var(--card-background-color);
      border-bottom: 1px solid var(--divider-color);
      position: sticky;
      top: 0;
      z-index: 10;
      gap: 12px;
    }

    .back-button {
      width: 40px;
      height: 40px;
      border-radius: 12px;
      border: none;
      background: transparent;
      color: var(--primary-text-color);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.2s ease;
      flex-shrink: 0;
    }

    .back-button:hover {
      background: var(--divider-color);
    }

    .back-button ha-icon {
      --mdc-icon-size: 24px;
    }

    .header-title {
      flex: 1;
      font-size: 20px;
      font-weight: 600;
      color: var(--primary-text-color);
      margin: 0;
    }

    .settings-content {
      flex: 1;
      overflow-y: auto;
      padding: 16px 0;
    }

    /* Settings Groups */
    .settings-group {
      margin-bottom: 24px;
    }

    .group-header {
      padding: 8px 20px 12px;
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--secondary-text-color);
    }

    /* Action Buttons */
    .action-buttons {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
      gap: 12px;
      margin: 0 20px 24px;
    }

    .action-button {
      padding: 16px;
      border-radius: 12px;
      border: 1px solid var(--divider-color);
      background: var(--card-background-color);
      cursor: pointer;
      transition: all 0.2s ease;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
    }

    .action-button:hover:not(:disabled) {
      border-color: var(--primary-color);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    .action-button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .action-button ha-icon {
      --mdc-icon-size: 28px;
      color: var(--primary-color);
    }

    .action-button-label {
      font-size: 14px;
      font-weight: 500;
      color: var(--primary-text-color);
      text-align: center;
    }

    /* Info Cards Grid */
    .info-cards {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
      gap: 16px;
      margin: 0 20px;
    }

    @media (max-width: 600px) {
      .info-cards {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    /* Info Card */
    .info-card {
      background: var(--card-background-color);
      border: 1px solid var(--divider-color);
      border-radius: 12px;
      padding: 20px 16px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
    }

    .info-icon {
      width: 48px;
      height: 48px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .info-icon ha-icon {
      --mdc-icon-size: 28px;
    }

    /* Icon color variations */
    .info-card[data-type="memory"] .info-icon {
      background: rgba(var(--rgb-info-color, 33, 150, 243), 0.15);
    }

    .info-card[data-type="memory"] .info-icon ha-icon {
      color: var(--info-color);
    }

    .info-card[data-type="uptime"] .info-icon {
      background: rgba(156, 39, 176, 0.15);
    }

    .info-card[data-type="uptime"] .info-icon ha-icon {
      color: #9c27b0;
    }

    .info-card[data-type="wifi"] .info-icon {
      background: rgba(var(--rgb-success-color, 76, 175, 80), 0.15);
    }

    .info-card[data-type="wifi"] .info-icon ha-icon {
      color: var(--success-color);
    }

    /* WiFi signal color coding */
    .info-card[data-signal="excellent"] .info-icon {
      background: rgba(var(--rgb-success-color, 76, 175, 80), 0.15);
    }

    .info-card[data-signal="excellent"] .info-icon ha-icon {
      color: var(--success-color);
    }

    .info-card[data-signal="good"] .info-icon {
      background: rgba(255, 193, 7, 0.15);
    }

    .info-card[data-signal="good"] .info-icon ha-icon {
      color: #ffc107;
    }

    .info-card[data-signal="fair"] .info-icon {
      background: rgba(var(--rgb-warning-color, 255, 152, 0), 0.15);
    }

    .info-card[data-signal="fair"] .info-icon ha-icon {
      color: var(--warning-color);
    }

    .info-card[data-signal="poor"] .info-icon {
      background: rgba(var(--rgb-error-color, 244, 67, 54), 0.15);
    }

    .info-card[data-signal="poor"] .info-icon ha-icon {
      color: var(--error-color);
    }

    .info-value {
      font-size: 24px;
      font-weight: 700;
      color: var(--primary-text-color);
      line-height: 1;
      margin: 0;
      text-align: center;
    }

    .info-label {
      font-size: 13px;
      font-weight: 500;
      color: var(--secondary-text-color);
      text-align: center;
      line-height: 1.3;
      margin: 0;
    }

    /* Help Text */
    .help-text {
      margin: 0 20px;
      padding: 12px 16px;
      background: var(--secondary-background-color);
      border-radius: 8px;
      font-size: 13px;
      color: var(--secondary-text-color);
      line-height: 1.5;
      display: flex;
      align-items: flex-start;
      gap: 12px;
    }

    .help-text ha-icon {
      --mdc-icon-size: 20px;
      margin-top: 2px;
      flex-shrink: 0;
      color: var(--primary-color);
    }

    /* Loading State */
    .loading-overlay {
      position: absolute;
      inset: 0;
      background: var(--mdc-dialog-scrim-color, rgba(0, 0, 0, 0.3));
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 100;
    }

    @media (max-width: 480px) {
      .settings-header {
        padding: 12px 16px;
      }

      .action-buttons,
      .info-cards,
      .help-text {
        margin: 0 16px 24px;
      }

      .action-button {
        padding: 14px;
      }

      .info-card {
        padding: 16px 12px;
      }
    }
  `;
__decorate([
    n({ attribute: false })
], TsuryPhoneDiagnosticsSettings.prototype, "hass", void 0);
__decorate([
    n({ type: String })
], TsuryPhoneDiagnosticsSettings.prototype, "entityId", void 0);
__decorate([
    r()
], TsuryPhoneDiagnosticsSettings.prototype, "_freeMemory", void 0);
__decorate([
    r()
], TsuryPhoneDiagnosticsSettings.prototype, "_uptime", void 0);
__decorate([
    r()
], TsuryPhoneDiagnosticsSettings.prototype, "_wifiSignal", void 0);
__decorate([
    r()
], TsuryPhoneDiagnosticsSettings.prototype, "_loading", void 0);
TsuryPhoneDiagnosticsSettings = __decorate([
    t("tsuryphone-diagnostics-settings")
], TsuryPhoneDiagnosticsSettings);

const SETTINGS_SECTIONS = [
    // General Settings
    {
        id: "dnd",
        title: "Do Not Disturb",
        icon: "mdi:moon-waning-crescent",
        description: "Schedule quiet hours and DND settings",
        category: "general",
    },
    {
        id: "audio",
        title: "Audio",
        icon: "mdi:volume-high",
        description: "Volume, gain, and ring pattern settings",
        category: "general",
    },
    // Device Settings
    {
        id: "device",
        title: "Device Management",
        icon: "mdi:cellphone-cog",
        description: "Reset, reboot, and integration options",
        category: "device",
    },
    {
        id: "diagnostics",
        title: "Diagnostics",
        icon: "mdi:stethoscope",
        description: "Device health and system information",
        category: "device",
    },
    {
        id: "statistics",
        title: "Statistics",
        icon: "mdi:chart-line",
        description: "Call history and usage data",
        category: "device",
    },
    // Advanced Settings
    {
        id: "webhooks",
        title: "Webhooks",
        icon: "mdi:webhook",
        description: "Dial codes to trigger automations",
        category: "advanced",
    },
];
let TsuryPhoneSettingsView = class TsuryPhoneSettingsView extends i {
    constructor() {
        super(...arguments);
        this._activeSetting = null;
    }
    _handleBack() {
        this.dispatchEvent(new CustomEvent("navigate-back", {
            bubbles: true,
            composed: true,
        }));
    }
    _handleItemClick(sectionId) {
        this._activeSetting = sectionId;
    }
    _handleBackFromSettings(e) {
        // Stop propagation so the event doesn't bubble up to the main card
        // This allows individual settings pages to navigate back to settings overview
        e.stopPropagation();
        this._activeSetting = null;
    }
    _renderCategorySection(category, label) {
        const sections = SETTINGS_SECTIONS.filter((s) => s.category === category);
        if (sections.length === 0) {
            return x ``;
        }
        return x `
      <div class="settings-category">
        <div class="category-header">${label}</div>
        <div class="settings-list">
          ${sections.map((section) => x `
              <button
                class="settings-item"
                @click=${() => this._handleItemClick(section.id)}
                aria-label="${section.title}"
              >
                <div class="item-icon">
                  <ha-icon icon="${section.icon}"></ha-icon>
                </div>
                <div class="item-content">
                  <div class="item-title">${section.title}</div>
                  <div class="item-description">${section.description}</div>
                </div>
                <div class="item-chevron">
                  <ha-icon icon="mdi:chevron-right"></ha-icon>
                </div>
              </button>
            `)}
        </div>
      </div>
    `;
    }
    render() {
        // Show individual setting page if active
        if (this._activeSetting === "dnd") {
            return x `
        <tsuryphone-dnd-settings
          .hass=${this.hass}
          .entityId=${this.entityId}
          @navigate-back=${this._handleBackFromSettings}
        ></tsuryphone-dnd-settings>
      `;
        }
        if (this._activeSetting === "audio") {
            return x `
        <tsuryphone-audio-settings
          .hass=${this.hass}
          .entityId=${this.entityId}
          @navigate-back=${this._handleBackFromSettings}
        ></tsuryphone-audio-settings>
      `;
        }
        if (this._activeSetting === "device") {
            return x `
        <tsuryphone-device-settings
          .hass=${this.hass}
          .entityId=${this.entityId}
          @navigate-back=${this._handleBackFromSettings}
        ></tsuryphone-device-settings>
      `;
        }
        if (this._activeSetting === "webhooks") {
            return x `
        <tsuryphone-webhooks-settings
          .hass=${this.hass}
          .entityId=${this.entityId}
          @navigate-back=${this._handleBackFromSettings}
        ></tsuryphone-webhooks-settings>
      `;
        }
        if (this._activeSetting === "statistics") {
            return x `
        <tsuryphone-statistics-settings
          .hass=${this.hass}
          .entityId=${this.entityId}
          @navigate-back=${this._handleBackFromSettings}
        ></tsuryphone-statistics-settings>
      `;
        }
        if (this._activeSetting === "diagnostics") {
            return x `
        <tsuryphone-diagnostics-settings
          .hass=${this.hass}
          .entityId=${this.entityId}
          @navigate-back=${this._handleBackFromSettings}
        ></tsuryphone-diagnostics-settings>
      `;
        }
        // Show settings overview
        return x `
      <div class="settings-header">
        <button
          class="back-button"
          @click=${this._handleBack}
          aria-label="Back"
        >
          <ha-icon icon="mdi:arrow-left"></ha-icon>
        </button>
        <h1 class="header-title">Settings</h1>
      </div>

      <div class="settings-content">
        ${this._renderCategorySection("general", "General")}
        ${this._renderCategorySection("device", "Device")}
        ${this._renderCategorySection("advanced", "Advanced")}
      </div>
    `;
    }
};
TsuryPhoneSettingsView.styles = i$3 `
    :host {
      display: flex;
      flex-direction: column;
      height: 100%;
      background: var(--card-background-color);
      box-sizing: border-box;
    }

    .settings-header {
      display: flex;
      align-items: center;
      padding: 16px 20px;
      background: var(--card-background-color);
      border-bottom: 1px solid var(--divider-color);
      position: sticky;
      top: 0;
      z-index: 10;
      gap: 12px;
    }

    .back-button {
      width: 40px;
      height: 40px;
      border-radius: 12px;
      border: none;
      background: transparent;
      color: var(--primary-text-color);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.2s ease;
      flex-shrink: 0;
    }

    .back-button:hover {
      background: var(--divider-color);
    }

    .back-button:active {
      background: var(--secondary-background-color);
    }

    .back-button ha-icon {
      --mdc-icon-size: 24px;
    }

    .header-title {
      flex: 1;
      font-size: 20px;
      font-weight: 600;
      color: var(--primary-text-color);
      margin: 0;
    }

    .settings-content {
      flex: 1;
      overflow-y: auto;
      padding: 8px 0;
    }

    .settings-category {
      margin-bottom: 24px;
    }

    .category-header {
      padding: 16px 20px 8px;
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--secondary-text-color);
    }

    .settings-list {
      display: flex;
      flex-direction: column;
    }

    .settings-item {
      display: flex;
      align-items: center;
      padding: 16px 20px;
      background: var(--card-background-color);
      border: none;
      cursor: pointer;
      transition: background 0.2s ease;
      text-align: left;
      width: 100%;
      box-sizing: border-box;
      gap: 16px;
    }

    .settings-item:hover {
      background: var(--divider-color);
    }

    .settings-item:active {
      background: var(--secondary-background-color);
    }

    .item-icon {
      width: 40px;
      height: 40px;
      border-radius: 12px;
      background: var(--primary-color);
      color: var(--text-primary-color, white);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .item-icon ha-icon {
      --mdc-icon-size: 22px;
    }

    .item-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 4px;
      min-width: 0;
    }

    .item-title {
      font-size: 16px;
      font-weight: 500;
      color: var(--primary-text-color);
    }

    .item-description {
      font-size: 13px;
      color: var(--secondary-text-color);
      line-height: 1.4;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    .item-chevron {
      color: var(--secondary-text-color);
      flex-shrink: 0;
    }

    .item-chevron ha-icon {
      --mdc-icon-size: 20px;
    }

    /* Empty state */
    .empty-state {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 48px 32px;
      text-align: center;
      color: var(--secondary-text-color);
    }

    .empty-state ha-icon {
      --mdc-icon-size: 64px;
      margin-bottom: 16px;
      opacity: 0.3;
    }

    .empty-state p {
      margin: 0;
      font-size: 14px;
    }

    @media (max-width: 480px) {
      .settings-header {
        padding: 12px 16px;
      }

      .settings-item {
        padding: 14px 16px;
      }

      .item-icon {
        width: 36px;
        height: 36px;
      }

      .item-icon ha-icon {
        --mdc-icon-size: 20px;
      }

      .category-header {
        padding: 12px 16px 6px;
      }
    }
  `;
__decorate([
    n({ attribute: false })
], TsuryPhoneSettingsView.prototype, "hass", void 0);
__decorate([
    n({ type: String })
], TsuryPhoneSettingsView.prototype, "entityId", void 0);
__decorate([
    r()
], TsuryPhoneSettingsView.prototype, "_activeSetting", void 0);
TsuryPhoneSettingsView = __decorate([
    t("tsuryphone-settings-view")
], TsuryPhoneSettingsView);

let ContactModal = class ContactModal extends i {
    constructor() {
        super(...arguments);
        this.open = false;
        this.mode = "add";
        this.formData = {
            name: "",
            number: "",
            code: "",
            priority: false,
        };
        this.errors = {};
        this.saving = false;
        this.showDeleteConfirm = false;
    }
    updated(changedProperties) {
        if (changedProperties.has("open") && this.open) {
            this._initializeForm();
        }
    }
    _initializeForm() {
        if (this.mode === "edit" && this.contact) {
            this.formData = {
                name: this.contact.name || "",
                number: this.contact.number || "",
                code: this.contact.code || "",
                priority: this._isContactPriority(this.contact),
            };
        }
        else {
            this.formData = {
                name: "",
                number: "",
                code: "",
                priority: false,
            };
        }
        this.errors = {};
        this.showDeleteConfirm = false;
    }
    _getPhoneStateId() {
        // Find the phone_state sensor entity
        return (Object.keys(this.hass.states).find((id) => id.startsWith("sensor.") && id.includes("phone_state")) || null);
    }
    _isContactPriority(contact) {
        const phoneStateId = this._getPhoneStateId();
        if (!phoneStateId)
            return false;
        const phoneState = this.hass.states[phoneStateId];
        const priorityCallers = phoneState?.attributes?.priority_callers || [];
        return priorityCallers.some((p) => p.number === contact.number);
    }
    _handleClose() {
        if (this.saving)
            return;
        triggerHaptic("selection");
        this.open = false;
        this.dispatchEvent(new CustomEvent("close"));
    }
    _handleInputChange(e) {
        const input = e.target;
        const field = input.name;
        if (field === "priority") {
            this.formData = { ...this.formData, [field]: input.checked };
        }
        else {
            this.formData = { ...this.formData, [field]: input.value };
        }
        // Clear error for this field
        if (this.errors[field]) {
            this.errors = { ...this.errors, [field]: undefined };
        }
    }
    _validate() {
        const errors = {};
        // Name validation
        if (!this.formData.name.trim()) {
            errors.name = "Name is required";
        }
        // Number validation
        if (!this.formData.number.trim()) {
            errors.number = "Phone number is required";
        }
        else if (!/^[\d\s\-\+\(\)]+$/.test(this.formData.number)) {
            errors.number = "Invalid phone number format";
        }
        // Code validation (uniqueness check if provided)
        if (this.formData.code.trim()) {
            const phoneStateId = this._getPhoneStateId();
            if (phoneStateId) {
                const phoneState = this.hass.states[phoneStateId];
                const quickDials = phoneState?.attributes?.quick_dials || [];
                const isDuplicate = quickDials.some((qd) => qd.code === this.formData.code.trim() &&
                    (this.mode === "add" || qd.id !== this.contact?.id));
                if (isDuplicate) {
                    errors.code = "This code is already in use";
                }
            }
        }
        this.errors = errors;
        return Object.keys(errors).length === 0;
    }
    async _handleSave() {
        if (!this._validate()) {
            triggerHaptic("warning");
            return;
        }
        this.saving = true;
        triggerHaptic("medium");
        try {
            if (this.mode === "edit" && this.contact) {
                // Edit mode: use edit_contact service which handles priority internally
                await this._editContact();
            }
            else {
                // Add mode
                await this._addContact();
                // Handle priority changes for new contacts
                await this._handlePriorityChange();
            }
            triggerHaptic("success");
            this.open = false;
            this.dispatchEvent(new CustomEvent("contact-saved", {
                detail: { mode: this.mode },
            }));
        }
        catch (error) {
            console.error("Error saving contact:", error);
            triggerHaptic("failure");
            this.dispatchEvent(new CustomEvent("error", {
                detail: { message: "Failed to save contact" },
            }));
        }
        finally {
            this.saving = false;
        }
    }
    async _addContact() {
        const phoneStateId = this._getPhoneStateId();
        if (!phoneStateId) {
            throw new Error("Phone state entity not found");
        }
        const serviceData = {
            number: this.formData.number.trim(),
            name: this.formData.name.trim(),
        };
        if (this.formData.code.trim()) {
            serviceData.code = this.formData.code.trim();
        }
        await this.hass.callService("tsuryphone", "quick_dial_add", serviceData, {
            entity_id: phoneStateId,
        });
    }
    async _editContact() {
        const phoneStateId = this._getPhoneStateId();
        if (!phoneStateId || !this.contact) {
            throw new Error("Phone state entity or contact not found");
        }
        const serviceData = {
            id: this.contact.id,
            number: this.formData.number.trim(),
            name: this.formData.name.trim(),
            code: this.formData.code.trim() || "",
            priority: this.formData.priority,
        };
        await this.hass.callService("tsuryphone", "edit_contact", serviceData, {
            entity_id: phoneStateId,
        });
    }
    async _deleteContact(id) {
        const phoneStateId = this._getPhoneStateId();
        if (!phoneStateId) {
            throw new Error("Phone state entity not found");
        }
        await this.hass.callService("tsuryphone", "quick_dial_remove", { id }, { entity_id: phoneStateId });
    }
    async _handlePriorityChange() {
        const phoneStateId = this._getPhoneStateId();
        if (!phoneStateId) {
            throw new Error("Phone state entity not found");
        }
        const wasPriority = this.mode === "edit" && this.contact
            ? this._isContactPriority(this.contact)
            : false;
        const isPriority = this.formData.priority;
        if (isPriority && !wasPriority) {
            // Add to priority
            await this.hass.callService("tsuryphone", "priority_add", { number: this.formData.number.trim() }, { entity_id: phoneStateId });
        }
        else if (!isPriority && wasPriority && this.contact) {
            // Remove from priority - need to find the priority entry ID
            const phoneState = this.hass.states[phoneStateId];
            const priorityCallers = phoneState?.attributes?.priority_callers || [];
            const priorityEntry = priorityCallers.find((p) => p.number === this.contact.number);
            if (priorityEntry) {
                await this.hass.callService("tsuryphone", "priority_remove", { id: priorityEntry.id }, { entity_id: phoneStateId });
            }
        }
    }
    _handleDeleteClick() {
        triggerHaptic("medium");
        this.showDeleteConfirm = true;
    }
    _handleDeleteCancel() {
        triggerHaptic("selection");
        this.showDeleteConfirm = false;
    }
    async _handleDeleteConfirm() {
        if (!this.contact)
            return;
        this.saving = true;
        triggerHaptic("warning");
        try {
            await this._deleteContact(this.contact.id);
            // Also remove from priority if it's a priority contact
            if (this._isContactPriority(this.contact)) {
                const phoneStateId = this._getPhoneStateId();
                if (phoneStateId) {
                    const phoneState = this.hass.states[phoneStateId];
                    const priorityCallers = phoneState?.attributes?.priority_callers || [];
                    const priorityEntry = priorityCallers.find((p) => p.number === this.contact.number);
                    if (priorityEntry) {
                        await this.hass.callService("tsuryphone", "priority_remove", {
                            id: priorityEntry.id,
                        });
                    }
                }
            }
            this.open = false;
            this.dispatchEvent(new CustomEvent("contact-deleted", {
                detail: { id: this.contact.id },
            }));
        }
        catch (error) {
            console.error("Error deleting contact:", error);
            triggerHaptic("failure");
            this.dispatchEvent(new CustomEvent("error", {
                detail: { message: "Failed to delete contact" },
            }));
        }
        finally {
            this.saving = false;
        }
    }
    render() {
        if (!this.open)
            return x ``;
        const title = this.mode === "add" ? "Create Contact" : "Edit Contact";
        return x `
      <div class="modal">
        <div class="header">
          <h2 class="title">${title}</h2>
          <button
            class="close-button"
            @click=${this._handleClose}
            ?disabled=${this.saving}
          >
            <ha-icon icon="mdi:close"></ha-icon>
          </button>
        </div>

          ${this.showDeleteConfirm
            ? x `
                  <div class="delete-confirm">
                    <div class="delete-confirm-text">
                      Are you sure you want to delete this contact? This action
                      cannot be undone.
                    </div>
                    <div class="delete-confirm-actions">
                      <button
                        @click=${this._handleDeleteCancel}
                        ?disabled=${this.saving}
                      >
                        Cancel
                      </button>
                      <button
                        class="button-delete"
                        @click=${this._handleDeleteConfirm}
                        ?disabled=${this.saving}
                      >
                        ${this.saving
                ? x `<div class="spinner"></div>`
                : "Delete"}
                      </button>
                    </div>
                  </div>
                `
            : ""}

          <div class="form">
            <div class="form-field">
              <label>
                Name <span class="required">*</span>
              </label>
              <input
                type="text"
                name="name"
                .value=${this.formData.name}
                @input=${this._handleInputChange}
                class=${this.errors.name ? "error" : ""}
                ?disabled=${this.saving}
                placeholder="Contact name"
              />
              ${this.errors.name
            ? x `<div class="error-message">${this.errors.name}</div>`
            : ""}
            </div>

            <div class="phone-code-row">
              <div class="form-field">
                <label>
                  Phone Number <span class="required">*</span>
                </label>
                <input
                  type="tel"
                  name="number"
                  .value=${this.formData.number}
                  @input=${this._handleInputChange}
                  class=${this.errors.number ? "error" : ""}
                  ?disabled=${this.saving}
                  placeholder="+1234567890"
                />
                ${this.errors.number
            ? x `<div class="error-message">${this.errors.number}</div>`
            : ""}
              </div>

              <div class="form-field">
                <label>
                  Code <span class="optional">(optional)</span>
                </label>
                <input
                  type="text"
                  name="code"
                  .value=${this.formData.code}
                  @input=${this._handleInputChange}
                  class=${this.errors.code ? "error" : ""}
                  ?disabled=${this.saving}
                  placeholder="1"
                />
                ${this.errors.code
            ? x `<div class="error-message">${this.errors.code}</div>`
            : ""}
              </div>
            </div>

            <div class="priority-toggle">
              <input
                type="checkbox"
                name="priority"
                id="priority-checkbox"
                .checked=${this.formData.priority}
                @change=${this._handleInputChange}
                ?disabled=${this.saving}
              />
              <label for="priority-checkbox">
                Priority Contact
              </label>
            </div>
          </div>

          ${this.mode === "edit" && !this.showDeleteConfirm
            ? x `
                  <button
                    class="button-delete"
                    @click=${this._handleDeleteClick}
                    ?disabled=${this.saving}
                    style="margin-top: 24px;"
                  >
                    <ha-icon icon="mdi:delete"></ha-icon>
                    Delete Contact
                  </button>
                `
            : ""}

          <div class="actions">
            <button
              class="button-cancel"
              @click=${this._handleClose}
              ?disabled=${this.saving}
            >
              Cancel
            </button>
            <button
              class="button-save"
              @click=${this._handleSave}
              ?disabled=${this.saving}
            >
              ${this.saving
            ? x `<div class="spinner"></div>`
            : this.mode === "add"
                ? "Create"
                : "Save"}
            </button>
          </div>
        </div>
      </div>
    `;
    }
};
ContactModal.styles = i$3 `
    :host {
      display: none;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 100;
      box-sizing: border-box;
    }

    :host([open]) {
      display: flex;
      flex-direction: column;
    }

    .modal {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      background: var(--card-background-color);
      padding: 24px;
      overflow-y: auto;
      animation: slideUp 0.3s ease-out;
      box-sizing: border-box;
    }

    @keyframes slideUp {
      from {
        transform: translateY(100%);
      }
      to {
        transform: translateY(0);
      }
    }

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 24px;
    }

    .title {
      font-size: 24px;
      font-weight: 500;
      color: var(--primary-text-color);
      margin: 0;
    }

    .close-button {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: none;
      background: transparent;
      color: var(--primary-text-color);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background-color 0.2s;
    }

    .close-button:hover {
      background-color: var(--secondary-background-color);
    }

    .close-button ha-icon {
      --mdc-icon-size: 24px;
    }

    .form {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .form-field {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .form-field label {
      font-size: 14px;
      font-weight: 500;
      color: var(--primary-text-color);
    }

    .form-field label .required {
      color: var(--error-color);
    }

    .form-field label .optional {
      color: var(--secondary-text-color);
      font-weight: 400;
      font-size: 12px;
    }

    .form-field input {
      padding: 12px 16px;
      border: 1px solid var(--divider-color);
      border-radius: 12px;
      font-size: 16px;
      font-family: inherit;
      color: var(--primary-text-color);
      background: var(--card-background-color);
      transition: border-color 0.2s;
    }

    .form-field input:focus {
      outline: none;
      border-color: var(--primary-color);
    }

    .form-field input.error {
      border-color: var(--error-color);
    }

    .form-field .error-message {
      font-size: 12px;
      color: var(--error-color);
      margin-top: 4px;
    }

    .priority-toggle {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px 0;
    }

    .priority-toggle input[type="checkbox"] {
      width: 20px;
      height: 20px;
      cursor: pointer;
      accent-color: var(--primary-color);
    }

    .priority-toggle label {
      font-size: 16px;
      color: var(--primary-text-color);
      cursor: pointer;
      flex: 1;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .phone-code-row {
      display: flex;
      gap: 12px;
      align-items: flex-start;
    }

    .phone-code-row .form-field:first-child {
      flex: 3;
    }

    .phone-code-row .form-field:last-child {
      flex: 1;
    }

    .actions {
      display: flex;
      gap: 12px;
      margin-top: auto;
      padding-top: 24px;
    }

    .actions button {
      flex: 1;
      padding: 14px 24px;
      border: none;
      border-radius: 12px;
      font-size: 16px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }

    .actions button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .button-cancel {
      background: transparent;
      color: var(--primary-text-color);
      border: 1px solid var(--divider-color);
    }

    .button-cancel:hover:not(:disabled) {
      background: var(--secondary-background-color);
    }

    .button-save {
      background: var(--primary-color);
      color: var(--text-primary-color, white);
    }

    .button-save:hover:not(:disabled) {
      opacity: 0.9;
    }

    .button-delete {
      background: transparent;
      color: var(--error-color);
      border: 1px solid var(--error-color);
      margin-bottom: 12px;
      padding: 12px 24px;
      width: 100%;
    }

    .button-delete:hover:not(:disabled) {
      background: var(--error-color);
      color: var(--text-primary-color, white);
    }

    .delete-confirm {
      background: var(--card-background-color);
      border: 1px solid var(--divider-color);
      border-radius: 12px;
      padding: 16px;
      margin-bottom: 16px;
    }

    .delete-confirm-text {
      font-size: 14px;
      color: var(--primary-text-color);
      margin-bottom: 12px;
    }

    .delete-confirm-actions {
      display: flex;
      gap: 8px;
    }

    .delete-confirm-actions button {
      flex: 1;
      padding: 10px;
      border-radius: 8px;
      border: none;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
    }

    .spinner {
      width: 20px;
      height: 20px;
      border: 2px solid currentColor;
      border-right-color: transparent;
      border-radius: 50%;
      animation: spin 0.6s linear infinite;
    }

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }
  `;
__decorate([
    n({ attribute: false })
], ContactModal.prototype, "hass", void 0);
__decorate([
    n({ type: Boolean, reflect: true })
], ContactModal.prototype, "open", void 0);
__decorate([
    n({ type: String })
], ContactModal.prototype, "mode", void 0);
__decorate([
    n({ attribute: false })
], ContactModal.prototype, "contact", void 0);
__decorate([
    r()
], ContactModal.prototype, "formData", void 0);
__decorate([
    r()
], ContactModal.prototype, "errors", void 0);
__decorate([
    r()
], ContactModal.prototype, "saving", void 0);
__decorate([
    r()
], ContactModal.prototype, "showDeleteConfirm", void 0);
ContactModal = __decorate([
    t("tsuryphone-contact-modal")
], ContactModal);

/**
 * Call Modal Component
 * Full-screen in-card modal for incoming and active calls
 * Similar to contact-modal - position: absolute, fills entire card
 */
let TsuryPhoneCallModal = class TsuryPhoneCallModal extends i {
    constructor() {
        super(...arguments);
        this.open = false;
        this.mode = "incoming";
        this.callWaitingAvailable = false;
        this._isAnswering = false;
        this._isDeclining = false;
        this._isMuted = false;
        this._showKeypad = false;
        this._dialedDigits = "";
        this._swipeStartX = 0;
        this._swipeStartY = 0;
        this._swipeDistance = 0;
        this._isSwipingLeft = false;
        this._isSwipingRight = false;
        this._isSwiping = false; // Track if actively swiping
    }
    connectedCallback() {
        super.connectedCallback();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
    }
    willUpdate(changedProps) {
        super.willUpdate(changedProps);
        // Clear dialed digits when modal closes (call ends)
        if (changedProps.has('open') && !this.open) {
            this._dialedDigits = "";
            this._showKeypad = false;
        }
        if (!this.hass) {
            return;
        }
        let resolvedMutedState;
        const muteSensorId = this._resolveMutedEntityId();
        if (muteSensorId) {
            const muteSensorState = this.hass.states[muteSensorId];
            if (muteSensorState) {
                resolvedMutedState = muteSensorState.state === "on";
            }
        }
        if (resolvedMutedState === undefined && this.entityId) {
            const phoneState = this.hass.states[this.entityId];
            const attrValue = phoneState?.attributes?.is_muted;
            if (typeof attrValue === "boolean") {
                resolvedMutedState = attrValue;
            }
        }
        if (typeof resolvedMutedState === "boolean" && resolvedMutedState !== this._isMuted) {
            this._isMuted = resolvedMutedState;
        }
    }
    _formatDuration(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
    }
    _handleClose() {
        triggerHaptic("selection");
        this.dispatchEvent(new CustomEvent("close", { bubbles: true, composed: true }));
    }
    _handleSwipeStart(e) {
        if (e instanceof TouchEvent) {
            this._swipeStartX = e.touches[0].clientX;
            this._swipeStartY = e.touches[0].clientY;
        }
        else {
            this._swipeStartX = e.clientX;
            this._swipeStartY = e.clientY;
        }
        this._swipeDistance = 0;
        this._isSwiping = true;
    }
    _handleSwipeMove(e) {
        // Only process if we started a swipe
        if (!this._isSwiping)
            return;
        if (this._isAnswering || this._isDeclining)
            return;
        const currentX = e instanceof TouchEvent ? e.touches[0].clientX : e.clientX;
        const currentY = e instanceof TouchEvent ? e.touches[0].clientY : e.clientY;
        const deltaX = currentX - this._swipeStartX;
        const deltaY = currentY - this._swipeStartY;
        // Allow significant vertical tolerance - only reject if movement is primarily vertical
        // Ratio of 2:1 means vertical movement must be twice as large to reject
        if (Math.abs(deltaY) > Math.abs(deltaX) * 2) {
            return; // Too much vertical movement
        }
        this._swipeDistance = deltaX;
        // Limit swipe distance
        const maxDistance = 200;
        this._swipeDistance = Math.max(-maxDistance, Math.min(maxDistance, this._swipeDistance));
        // Update visual state with lower threshold for easier triggering
        this._isSwipingLeft = this._swipeDistance < -30;
        this._isSwipingRight = this._swipeDistance > 30;
        this.requestUpdate();
    }
    _handleSwipeEnd() {
        // Only process if we were actively swiping
        if (!this._isSwiping)
            return;
        // Lower threshold to make it easier to reach edges
        const threshold = 80;
        if (this._swipeDistance < -threshold) {
            // Swipe left to decline
            this._handleDecline();
        }
        else if (this._swipeDistance > threshold) {
            // Swipe right to answer
            this._handleAnswer();
        }
        // Always reset swipe state
        this._isSwiping = false;
        this._swipeDistance = 0;
        this._isSwipingLeft = false;
        this._isSwipingRight = false;
        this.requestUpdate();
    }
    async _handleAnswer() {
        this._isAnswering = true;
        triggerHaptic("medium");
        try {
            if (!this.entityId) {
                throw new Error("Entity ID is required");
            }
            await this.hass.callService("tsuryphone", "answer", {}, { entity_id: this.entityId });
            this.dispatchEvent(new CustomEvent("call-answered", { bubbles: true, composed: true }));
        }
        catch (error) {
            console.error("Failed to answer call:", error);
            triggerHaptic("failure");
            this.dispatchEvent(new CustomEvent("error", {
                detail: { message: "Failed to answer call" },
                bubbles: true,
                composed: true,
            }));
        }
        finally {
            this._isAnswering = false;
        }
    }
    async _handleDecline() {
        this._isDeclining = true;
        triggerHaptic("medium");
        try {
            if (!this.entityId) {
                throw new Error("Entity ID is required");
            }
            await this.hass.callService("tsuryphone", "hangup", {}, { entity_id: this.entityId });
            this.dispatchEvent(new CustomEvent("call-declined", { bubbles: true, composed: true }));
        }
        catch (error) {
            console.error("Failed to decline call:", error);
            triggerHaptic("failure");
            this.dispatchEvent(new CustomEvent("error", {
                detail: { message: "Failed to decline call" },
                bubbles: true,
                composed: true,
            }));
        }
        finally {
            this._isDeclining = false;
        }
    }
    async _handleHangup() {
        triggerHaptic("medium");
        try {
            if (!this.entityId) {
                throw new Error("Entity ID is required");
            }
            await this.hass.callService("tsuryphone", "hangup", {}, { entity_id: this.entityId });
            this.dispatchEvent(new CustomEvent("call-ended", { bubbles: true, composed: true }));
        }
        catch (error) {
            console.error("Failed to hang up:", error);
            triggerHaptic("failure");
        }
    }
    async _handleMute() {
        triggerHaptic("selection");
        try {
            if (!this.entityId) {
                throw new Error("Entity ID is required");
            }
            await this.hass.callService("tsuryphone", "toggle_mute", {}, { entity_id: this.entityId });
            // State will be updated via HA state changes
        }
        catch (error) {
            console.error("Failed to toggle mute:", error);
            triggerHaptic("failure");
        }
    }
    async _handleSpeaker() {
        triggerHaptic("selection");
        try {
            if (!this.entityId) {
                throw new Error("Entity ID is required");
            }
            await this.hass.callService("tsuryphone", "toggle_volume_mode", {}, { entity_id: this.entityId });
        }
        catch (error) {
            console.error("Failed to toggle speaker:", error);
        }
    }
    _handleKeypad() {
        triggerHaptic("selection");
        this._showKeypad = !this._showKeypad;
        this.requestUpdate();
    }
    _toggleKeypad() {
        this._showKeypad = !this._showKeypad;
        triggerHaptic("selection");
    }
    async _handleDTMFDigit(e) {
        const digit = e.detail.digit;
        console.log("DTMF digit pressed:", digit);
        // Validate DTMF characters (0-9, *, #)
        if (!/^[0-9*#]$/.test(digit)) {
            console.error("Invalid DTMF digit:", digit);
            return;
        }
        // Add digit to display
        this._dialedDigits += digit;
        console.log("Dialed digits now:", this._dialedDigits);
        triggerHaptic("light");
        try {
            if (!this.entityId) {
                throw new Error("Entity ID is required");
            }
            console.log("Calling send_dtmf service with digit:", digit);
            await this.hass.callService("tsuryphone", "send_dtmf", { digit }, { entity_id: this.entityId });
            console.log("DTMF service call succeeded");
        }
        catch (error) {
            console.error("Failed to send DTMF:", error);
            triggerHaptic("failure");
            this.dispatchEvent(new CustomEvent("error", {
                detail: { message: "Failed to send DTMF tone" },
                bubbles: true,
                composed: true,
            }));
        }
    }
    // Derive the muted binary sensor entity that matches the configured phone state sensor
    _resolveMutedEntityId() {
        if (!this.entityId) {
            return undefined;
        }
        const normalizedId = this.entityId.trim();
        if (!normalizedId.startsWith("sensor.")) {
            return undefined;
        }
        const sensorName = normalizedId.slice("sensor.".length);
        if (sensorName === "phone_state") {
            return "binary_sensor.muted";
        }
        if (sensorName.endsWith("_phone_state")) {
            const devicePrefix = sensorName.slice(0, sensorName.length - "_phone_state".length);
            if (!devicePrefix) {
                return "binary_sensor.muted";
            }
            return `binary_sensor.${devicePrefix}_muted`;
        }
        return `binary_sensor.${sensorName}_muted`;
    }
    /**
     * Get normalized phone number for display
     */
    _getNormalizedNumber(number) {
        if (!this.entityId) {
            return number;
        }
        const phoneStateEntity = this.hass.states[this.entityId];
        const dialingContext = phoneStateEntity?.attributes?.dialing_context;
        const defaultDialCode = dialingContext?.default_code || "";
        const normalized = normalizePhoneNumberForDisplay(number, defaultDialCode);
        return normalized;
    }
    async _handleSwapCalls() {
        triggerHaptic("medium");
        try {
            if (!this.entityId) {
                throw new Error("Entity ID is required");
            }
            await this.hass.callService("tsuryphone", "swap_calls", {}, { entity_id: this.entityId });
        }
        catch (error) {
            console.error("Failed to swap calls:", error);
        }
    }
    async _handleMergeCalls() {
        triggerHaptic("medium");
        try {
            if (!this.entityId) {
                throw new Error("Entity ID is required");
            }
            await this.hass.callService("tsuryphone", "merge_calls", {}, { entity_id: this.entityId });
        }
        catch (error) {
            console.error("Failed to merge calls:", error);
        }
    }
    _renderIncomingCall() {
        const { callInfo } = this;
        if (!callInfo)
            return x ``;
        const displayNumber = this._getNormalizedNumber(callInfo.number);
        return x `
      <div class="caller-info">
        <div class="caller-name">${callInfo.name || displayNumber}</div>
        ${callInfo.name
            ? x `<div class="caller-number">${displayNumber}</div>`
            : ""}
        ${callInfo.isPriority
            ? x ` <div class="priority-badge">⭐ Priority Caller</div> `
            : ""}
      </div>

      <div
        class="swipe-slider"
        @touchstart=${this._handleSwipeStart}
        @touchmove=${this._handleSwipeMove}
        @touchend=${this._handleSwipeEnd}
        @touchcancel=${this._handleSwipeEnd}
        @mousedown=${this._handleSwipeStart}
        @mousemove=${this._handleSwipeMove}
        @mouseup=${this._handleSwipeEnd}
        @mouseleave=${this._handleSwipeEnd}
      >
        <div class="swipe-track">
          <span class="swipe-label decline">Decline</span>
          <span class="swipe-label answer">Answer</span>
        </div>
        <div
          class="swipe-handle ${this._isSwipingLeft
            ? "swiping-left"
            : ""} ${this._isSwipingRight ? "swiping-right" : ""}"
          style="transform: translateX(calc(-50% + ${this._swipeDistance}px))"
        >
          ${this._isSwipingLeft
            ? x `<ha-icon icon="mdi:close"></ha-icon>`
            : this._isSwipingRight
                ? x `<ha-icon icon="mdi:check"></ha-icon>`
                : x `<ha-icon icon="mdi:phone"></ha-icon>`}
        </div>
      </div>
    `;
    }
    _renderActiveCall() {
        const { callInfo } = this;
        if (!callInfo)
            return x ``;
        (callInfo.audioOutput || "").toLowerCase();
        // Check phone state to determine if we're dialing
        const phoneState = this.entityId
            ? this.hass.states[this.entityId]?.state
            : null;
        const isDialing = phoneState === "Dialing";
        // Use backend duration directly - simple and robust
        const duration = callInfo.duration ?? 0;
        const formattedDuration = this._formatDuration(duration);
        const callTimerAriaLabel = isDialing ? "Dialing" : formattedDuration;
        const displayNumber = this._getNormalizedNumber(callInfo.number);
        return x `
      <!-- Fixed header at top -->
      <div class="call-header">
        <div class="caller-name">${callInfo.name || displayNumber}</div>
        ${callInfo.name
            ? x `<div class="caller-number">${displayNumber}</div>`
            : ""}
        <div class="call-timer" aria-live="polite" aria-label=${callTimerAriaLabel}>
          ${isDialing ? x `&nbsp;` : formattedDuration}
        </div>
      </div>

      <!-- Flexible spacer -->
      <div class="call-content-spacer">
        ${this.callWaitingAvailable && this.waitingCall
            ? this._renderWaitingCall()
            : ""}
      </div>
    `;
    }
    _renderCallControls() {
        const { callInfo } = this;
        if (!callInfo)
            return x ``;
        const audioOutput = (callInfo.audioOutput || "").toLowerCase();
        const isSpeaker = audioOutput === "speaker";
        // Check phone state to determine if we're dialing
        const phoneState = this.entityId
            ? this.hass.states[this.entityId]?.state
            : null;
        const isDialing = phoneState === "Dialing";
        return x `
      <!-- Bottom control panel -->
      <div class="call-controls-panel ${isDialing ? "no-background" : ""} ${this._showKeypad ? "keypad-open" : ""}">
        <div class="call-controls">
          <button
            class="control-button ${this._isMuted ? "active" : ""}"
            @click=${this._handleMute}
            title="Mute"
            style="visibility: ${isDialing ? 'hidden' : 'visible'}"
            aria-pressed=${this._isMuted}
          >
            <ha-icon
              icon="${this._isMuted ? "mdi:microphone-off" : "mdi:microphone"}"
            ></ha-icon>
          </button>

          <button
            class="control-button ${this._showKeypad ? "active" : ""}"
            @click=${this._handleKeypad}
            title="Keypad"
            style="visibility: ${isDialing ? 'hidden' : 'visible'}"
            aria-pressed=${this._showKeypad}
          >
            <ha-icon icon="mdi:dialpad"></ha-icon>
          </button>

          <button
            class="control-button ${isSpeaker ? "active" : ""}"
            @click=${this._handleSpeaker}
            title="Speaker"
            style="visibility: ${isDialing ? 'hidden' : 'visible'}"
            aria-pressed=${isSpeaker}
          >
            <ha-icon icon="mdi:volume-high"></ha-icon>
          </button>
        </div>

        <button
          class="hangup-button"
          @click=${this._handleHangup}
          title="Hang up"
        >
          <ha-icon icon="mdi:phone-hangup"></ha-icon>
        </button>
      </div>

      <!-- Sliding keypad (slides up to replace controls) -->
      <div class="call-keypad-container ${this._showKeypad ? "visible" : ""}">
        <div class="keypad-header">
          <button class="keypad-close" @click=${this._toggleKeypad} title="Close keypad">
            <ha-icon icon="mdi:close"></ha-icon>
          </button>
          <div class="keypad-dialed-number">
            ${this._dialedDigits || "\u00A0"}
          </div>
        </div>
        <tsuryphone-keypad-grid
          @digit-press=${this._handleDTMFDigit}
        ></tsuryphone-keypad-grid>
      </div>
    `;
    }
    _renderWaitingCall() {
        const { waitingCall } = this;
        if (!waitingCall)
            return x ``;
        const displayNumber = this._getNormalizedNumber(waitingCall.number);
        return x `
      <div class="waiting-call">
        <div class="waiting-call-info">
          <div class="waiting-call-name">
            ${waitingCall.name || displayNumber}
          </div>
          ${waitingCall.name
            ? x `<div class="waiting-call-number">${displayNumber}</div>`
            : ""}
          ${waitingCall.isPriority
            ? x `<div class="priority-badge">⭐ Priority</div>`
            : ""}
        </div>
        <div class="waiting-actions">
          <button
            class="waiting-action-button swap-button"
            @click=${this._handleSwapCalls}
          >
            Swap
          </button>
          <button
            class="waiting-action-button merge-button"
            @click=${this._handleMergeCalls}
          >
            Merge
          </button>
        </div>
      </div>
    `;
    }
    render() {
        const titleMap = {
            incoming: "Incoming Call",
            active: "Active Call",
            waiting: "Call Waiting",
        };
        return x `
      <div class="modal-header">
        <h2 class="modal-title">${titleMap[this.mode]}</h2>
        <button
          class="close-button"
          @click=${this._handleClose}
          title="Minimize"
        >
          −
        </button>
      </div>

      <div
        class="modal-content ${this._isAnswering || this._isDeclining
            ? "loading"
            : ""}"
      >
        ${this.mode === "incoming"
            ? this._renderIncomingCall()
            : this._renderActiveCall()}
      </div>
      
      ${this.mode === "active" ? this._renderCallControls() : ""}
    `;
    }
};
TsuryPhoneCallModal.styles = i$3 `
    :host {
      display: none;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 100;
      background: var(--card-background-color);
      box-sizing: border-box;
    }

    :host([open]) {
      display: flex;
      flex-direction: column;
      animation: slideUp 0.3s ease-out;
      height: 100%;
    }

    @keyframes slideUp {
      from {
        transform: translateY(100%);
      }
      to {
        transform: translateY(0);
      }
    }

    /* Fixed header for active calls - sticks to top */
    .call-header {
      position: sticky;
      top: 0;
      z-index: 0;
      background: var(--card-background-color);
      padding: 24px;
      text-align: center;
    }

    /* Spacer pushes controls to bottom */
    .call-content-spacer {
      flex: 1;
      min-height: 0;
    }

    /* Bottom control panel with rounded top (half-pill) */
    .call-controls-panel {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: var(--secondary-background-color);
      border-radius: 24px 24px 0 0;
      padding: 24px 0;
      box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.1);
      z-index: 2;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .call-controls-panel.no-background {
      background: transparent;
      box-shadow: none;
    }

    .call-controls-panel.keypad-open {
      border-radius: 0;
      box-shadow: none;
    }

    /* Keypad container slides up from bottom */
    .call-keypad-container {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      background: var(--secondary-background-color);
      transform: translateY(100%);
      transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      border-radius: 0;
      padding: 0;
      z-index: 1;
      box-shadow: none;
      padding-bottom: 200px;
    }

    .call-keypad-container.visible {
      transform: translateY(0);
      z-index: 1;
      border-radius: 24px 24px 0 0;
      box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.1);
    }

    .keypad-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 8px 16px;
      border-bottom: 1px solid rgba(var(--rgb-primary-text-color), 0.05);
      position: relative;
      background: var(--secondary-background-color);
      border-radius: 24px 24px 0 0;
    }

    .keypad-close {
      background: none;
      border: none;
      color: var(--primary-text-color);
      cursor: pointer;
      padding: 8px;
      border-radius: 50%;
      transition: background 0.2s;
    }

    .keypad-close:hover {
      background: var(--divider-color);
    }

    .keypad-close ha-icon {
      --mdc-icon-size: 24px;
    }

    .keypad-dialed-number {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      font-size: 20px;
      font-weight: 400;
      color: var(--primary-text-color);
      font-variant-numeric: tabular-nums;
      letter-spacing: 2px;
    }

    .modal-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 8px 12px;
      border-bottom: 1px solid var(--divider-color);
      background: var(--card-background-color);
    }

    .modal-title {
      font-size: 14px;
      font-weight: 500;
      color: var(--primary-text-color);
    }

    .close-button {
      background: none;
      border: none;
      cursor: pointer;
      padding: 4px;
      color: var(--primary-text-color);
      font-size: 18px;
      line-height: 1;
      opacity: 0.6;
      transition: opacity 0.2s;
    }

    .close-button:hover {
      opacity: 1;
    }

    .modal-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0;
      overflow-y: auto;
      box-sizing: border-box;
      position: relative;
    }

    /* Incoming Call UI */
    .caller-info {
      text-align: center;
      margin-bottom: 48px;
    }

    .caller-name {
      font-size: 32px;
      font-weight: 500;
      color: var(--primary-text-color);
      margin-bottom: 8px;
    }

    .caller-number {
      font-size: 18px;
      color: var(--secondary-text-color);
    }

    .priority-badge {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      padding: 4px 12px;
      background: var(--warning-color);
      color: var(--text-primary-color, white);
      border-radius: 12px;
      font-size: 14px;
      font-weight: 500;
      margin-top: 12px;
    }

    .call-status {
      font-size: 16px;
      color: var(--secondary-text-color);
      margin-bottom: 24px;
    }

    /* Swipe Slider */
    .swipe-slider {
      width: 100%;
      max-width: 320px;
      height: 72px;
      background: var(--divider-color);
      border-radius: 36px;
      position: relative;
      overflow: hidden;
      touch-action: none;
      user-select: none;
    }

    .swipe-track {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 24px;
    }

    .swipe-label {
      font-size: 14px;
      font-weight: 500;
      color: var(--secondary-text-color);
      pointer-events: none;
    }

    .swipe-label.decline {
      color: var(--error-color);
    }

    .swipe-label.answer {
      color: var(--success-color);
    }

    .swipe-handle {
      position: absolute;
      top: 6px;
      left: 50%;
      transform: translateX(-50%);
      width: 60px;
      height: 60px;
      background: var(--card-background-color);
      border-radius: 30px;
      box-shadow: var(--ha-card-box-shadow, 0 2px 8px rgba(0, 0, 0, 0.2));
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: grab;
      transition:
        background-color 0.2s;
      z-index: 2;
    }

    .swipe-handle:active {
      cursor: grabbing;
    }

    .swipe-handle.swiping-left {
      background: var(--error-color);
    }

    .swipe-handle.swiping-right {
      background: var(--success-color);
    }

    /* Active Call Controls */
    .call-timer {
      font-size: 48px;
      font-weight: 300;
      color: var(--primary-text-color);
      margin-bottom: 48px;
      font-variant-numeric: tabular-nums;
      min-height: 56px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .call-controls {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
      width: 100%;
      max-width: 400px;
      margin-bottom: 24px;
    }

    .control-button {
      width: 88px;
      height: 64px;
      border-radius: 32px;
      border: none;
      background: rgba(0, 0, 0, 0.15);
      color: var(--primary-text-color);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 12px;
      transition: all 0.2s;
      box-shadow: var(--ha-card-box-shadow, 0 2px 4px rgba(0, 0, 0, 0.1));
      justify-self: center;
    }

    .control-button ha-icon {
      --mdc-icon-size: 26px;
    }

    .control-button:hover {
      background: rgba(0, 0, 0, 0.25);
    }

    .control-button:active {
      transform: scale(0.95);
    }

    .control-button.active {
      background: var(--primary-color);
      color: var(--text-primary-color, white);
    }

    .hangup-button {
      width: 120px;
      height: 56px;
      background: var(--error-color);
      color: var(--text-primary-color, white);
      border-radius: 28px;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s;
      margin-top: 12px;
    }

    .hangup-button:hover {
      filter: brightness(0.9);
    }

    /* Call Waiting */
    .waiting-call {
      width: 100%;
      max-width: 400px;
      padding: 16px;
      background: var(--secondary-background-color);
      border-radius: 12px;
      margin-bottom: 24px;
    }

    .waiting-call-info {
      text-align: center;
      margin-bottom: 12px;
    }

    .waiting-call-name {
      font-size: 18px;
      font-weight: 500;
      color: var(--primary-text-color, #000);
    }

    .waiting-call-number {
      font-size: 14px;
      color: var(--secondary-text-color, #666);
    }

    .waiting-actions {
      display: flex;
      gap: 12px;
      justify-content: center;
    }

    .waiting-action-button {
      padding: 8px 16px;
      border-radius: 20px;
      border: none;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s;
    }

    .swap-button {
      background: var(--primary-color, #03a9f4);
      color: white;
    }

    .merge-button {
      background: var(--success-color, #4caf50);
      color: white;
    }

    /* Loading State */
    .loading {
      opacity: 0.6;
      pointer-events: none;
    }
  `;
__decorate([
    n({ type: Object })
], TsuryPhoneCallModal.prototype, "hass", void 0);
__decorate([
    n({ type: String })
], TsuryPhoneCallModal.prototype, "entityId", void 0);
__decorate([
    n({ type: Boolean, reflect: true })
], TsuryPhoneCallModal.prototype, "open", void 0);
__decorate([
    n({ type: String })
], TsuryPhoneCallModal.prototype, "mode", void 0);
__decorate([
    n({ type: Object })
], TsuryPhoneCallModal.prototype, "callInfo", void 0);
__decorate([
    n({ type: Object })
], TsuryPhoneCallModal.prototype, "waitingCall", void 0);
__decorate([
    n({ type: Boolean })
], TsuryPhoneCallModal.prototype, "callWaitingAvailable", void 0);
__decorate([
    r()
], TsuryPhoneCallModal.prototype, "_isAnswering", void 0);
__decorate([
    r()
], TsuryPhoneCallModal.prototype, "_isDeclining", void 0);
__decorate([
    r()
], TsuryPhoneCallModal.prototype, "_isMuted", void 0);
__decorate([
    r()
], TsuryPhoneCallModal.prototype, "_showKeypad", void 0);
__decorate([
    r()
], TsuryPhoneCallModal.prototype, "_dialedDigits", void 0);
__decorate([
    r()
], TsuryPhoneCallModal.prototype, "_swipeStartX", void 0);
__decorate([
    r()
], TsuryPhoneCallModal.prototype, "_swipeStartY", void 0);
__decorate([
    r()
], TsuryPhoneCallModal.prototype, "_swipeDistance", void 0);
__decorate([
    r()
], TsuryPhoneCallModal.prototype, "_isSwipingLeft", void 0);
__decorate([
    r()
], TsuryPhoneCallModal.prototype, "_isSwipingRight", void 0);
__decorate([
    r()
], TsuryPhoneCallModal.prototype, "_isSwiping", void 0);
TsuryPhoneCallModal = __decorate([
    t("tsuryphone-call-modal")
], TsuryPhoneCallModal);

/**
 * TsuryPhone Card - Main Component
 * A modern phone and contacts interface for Home Assistant
 */
// Register with custom elements registry
window.customCards = window.customCards || [];
window.customCards.push({
    type: "tsuryphone-card",
    name: "TsuryPhone Card",
    description: "A modern phone and contacts interface",
});
let TsuryPhoneCard = class TsuryPhoneCard extends i {
    constructor() {
        super(...arguments);
        this._activeView = "home";
        this._showCallModal = false;
        this._showContactModal = false;
        this._isSideMenuOpen = false;
        this._isDarkMode = false;
        // Cached data from coordinator
        this._contactsCache = [];
        this._blockedCache = [];
        this._callHistoryCache = [];
        this._priorityNumbers = new Set();
        this._defaultDialCode = "";
        // Connection state
        this._isConnected = true;
        this._errorMessage = "";
        // Contact Modal state
        this._contactModalOpen = false;
        this._contactModalMode = "add";
        // Call Modal state
        this._callModalOpen = false;
        this._callModalMode = "incoming";
        this._callWaitingAvailable = false;
        this._showCallToast = false;
        this._callModalMinimized = false;
        this._lastCallClosedAt = 0;
        // Subscriptions
        this._unsubscribers = [];
    }
    /**
     * Set the configuration for this card
     */
    setConfig(config) {
        if (!config) {
            throw new Error("Invalid configuration");
        }
        this.config = config;
    }
    /**
     * Get the card size (used by HA for layout)
     */
    getCardSize() {
        return 9; // Roughly 9 grid rows (~450px) - fits keypad without scroll
    }
    /**
     * Lifecycle: Connected to DOM
     */
    connectedCallback() {
        super.connectedCallback();
        this._subscribe();
    }
    /**
     * Lifecycle: Disconnected from DOM
     */
    disconnectedCallback() {
        super.disconnectedCallback();
        this._unsubscribe();
    }
    /**
     * Lifecycle: Property updated
     */
    updated(changedProps) {
        super.updated(changedProps);
        if (changedProps.has("hass")) {
            this._handleHassUpdate();
        }
    }
    /**
     * Subscribe to Home Assistant state changes
     */
    _subscribe() {
        if (!this.hass || !this.hass.connection) {
            return;
        }
        try {
            // Subscribe to entity state changes using subscribeEvents
            // We listen for state_changed events for our entities
            const deviceId = this.config?.device_id || "tsuryphone";
            const unsubPromise = this.hass.connection.subscribeEvents((event) => {
                // Check if the event is for one of our entities
                const entityId = event.data?.entity_id;
                if ((entityId && entityId.startsWith(`sensor.${deviceId}_`)) ||
                    entityId?.startsWith(`binary_sensor.${deviceId}_`)) {
                    this._handleStateUpdate();
                }
            }, "state_changed");
            if (unsubPromise && typeof unsubPromise.then === "function") {
                unsubPromise
                    .then((unsub) => {
                    this._unsubscribers.push(unsub);
                })
                    .catch((err) => {
                    console.error("TsuryPhone: Failed to subscribe to state changes:", err);
                });
            }
        }
        catch (err) {
        }
    }
    /**
     * Unsubscribe from all subscriptions
     */
    _unsubscribe() {
        this._unsubscribers.forEach((unsub) => {
            try {
                unsub();
            }
            catch (err) {
            }
        });
        this._unsubscribers = [];
    }
    /**
     * Handle Home Assistant updates
     */
    _handleHassUpdate() {
        if (!this.hass) {
            this._isConnected = false;
            this._errorMessage = "Connection to Home Assistant lost";
            return;
        }
        this._isConnected = true;
        this._errorMessage = "";
        this._isDarkMode = isDarkMode$1(this.hass);
        // Update cached data from coordinator state
        // Support both direct entity config and device_id pattern
        let deviceId = this.config?.device_id || "tsuryphone";
        let phoneStateEntityId;
        if (this.config?.entity) {
            // Use entity directly if provided
            phoneStateEntityId = this.config.entity.startsWith("sensor.")
                ? this.config.entity
                : `sensor.${this.config.entity}`;
            // Extract device ID from entity name (e.g., "sensor.phone_state" -> "phone")
            // by removing "sensor." prefix and "_phone_state" suffix
            const entityName = phoneStateEntityId.replace("sensor.", "");
            if (entityName.endsWith("_phone_state")) {
                deviceId = entityName.replace("_phone_state", "");
            }
            else if (entityName === "phone_state") {
                // Handle case where entity is just "phone_state" without prefix
                deviceId = "";
            }
        }
        else {
            // Fall back to device_id pattern
            phoneStateEntityId = `sensor.${deviceId}_phone_state`;
        }
        const phoneStateEntity = this.hass.states[phoneStateEntityId];
        if (!phoneStateEntity) {
            this._errorMessage = `Entity ${phoneStateEntityId} not found`;
            return;
        }
        if (phoneStateEntity.attributes) {
            const attrs = phoneStateEntity.attributes;
            // Update contacts
            if (attrs.quick_dials && Array.isArray(attrs.quick_dials)) {
                this._contactsCache = attrs.quick_dials;
            }
            // Update blocked numbers
            if (attrs.blocked_numbers && Array.isArray(attrs.blocked_numbers)) {
                this._blockedCache = attrs.blocked_numbers;
            }
            // Update priority numbers
            if (attrs.priority_numbers && Array.isArray(attrs.priority_numbers)) {
                this._priorityNumbers = new Set(attrs.priority_numbers);
            }
            // Update default dial code
            if (attrs.dialing_context && attrs.dialing_context.default_code) {
                this._defaultDialCode = attrs.dialing_context.default_code;
            }
        }
        // Update call history from call_history_size sensor
        // Build entity ID based on extracted device prefix
        const callHistoryEntityId = deviceId
            ? `sensor.${deviceId}_call_history_size`
            : `sensor.call_history_size`;
        const callHistoryEntity = this.hass.states[callHistoryEntityId];
        if (callHistoryEntity?.attributes) {
            const historyAttrs = callHistoryEntity.attributes;
            if (historyAttrs.entries && Array.isArray(historyAttrs.entries)) {
                this._callHistoryCache = historyAttrs.entries;
            }
        }
        // Update call modal state
        this._updateCallModalState();
    }
    /**
     * Handle state updates from subscriptions
     */
    _handleStateUpdate() {
        // Re-read all cached data from phone state entity
        this._updateCachedData();
        // Update call modal state
        this._updateCallModalState();
        // Trigger re-render
        this.requestUpdate();
    }
    /**
     * Update cached data from phone state sensor attributes
     */
    _updateCachedData() {
        if (!this.hass)
            return;
        let deviceId = this.config?.device_id || "tsuryphone";
        let phoneStateEntityId;
        if (this.config?.entity) {
            phoneStateEntityId = this.config.entity.startsWith("sensor.")
                ? this.config.entity
                : `sensor.${this.config.entity}`;
            const entityName = phoneStateEntityId.replace("sensor.", "");
            if (entityName.endsWith("_phone_state")) {
                deviceId = entityName.replace("_phone_state", "");
            }
            else if (entityName === "phone_state") {
                deviceId = "";
            }
        }
        else {
            phoneStateEntityId = `sensor.${deviceId}_phone_state`;
        }
        const phoneStateEntity = this.hass.states[phoneStateEntityId];
        if (!phoneStateEntity?.attributes)
            return;
        const attrs = phoneStateEntity.attributes;
        // Update contacts
        if (attrs.quick_dials && Array.isArray(attrs.quick_dials)) {
            this._contactsCache = attrs.quick_dials;
        }
        // Update blocked numbers
        if (attrs.blocked_numbers && Array.isArray(attrs.blocked_numbers)) {
            this._blockedCache = attrs.blocked_numbers;
        }
        // Update priority numbers
        if (attrs.priority_numbers && Array.isArray(attrs.priority_numbers)) {
            this._priorityNumbers = new Set(attrs.priority_numbers);
        }
        // Update call history
        const callHistoryEntityId = deviceId
            ? `sensor.${deviceId}_call_history_size`
            : `sensor.call_history_size`;
        const callHistoryEntity = this.hass.states[callHistoryEntityId];
        if (callHistoryEntity?.attributes) {
            const historyAttrs = callHistoryEntity.attributes;
            if (historyAttrs.entries && Array.isArray(historyAttrs.entries)) {
                this._callHistoryCache = historyAttrs.entries;
            }
        }
    }
    /**
     * Update call modal visibility and data based on phone state
     */
    _updateCallModalState() {
        if (!this.hass)
            return;
        const deviceId = this.config?.device_id || "";
        const phoneStateEntityId = deviceId
            ? `sensor.${deviceId}_phone_state`
            : `sensor.phone_state`;
        const phoneStateEntity = this.hass.states[phoneStateEntityId];
        const phoneState = phoneStateEntity?.state;
        const phoneStateAttrs = phoneStateEntity?.attributes;
        // Single source of truth: phoneState
        // Don't mix phoneState with binary_sensor.in_call - causes conflicts
        // Close modal and reset state - default case
        const closeModal = () => {
            this._callModalOpen = false;
            this._callModalMinimized = false;
            this._showCallToast = false;
            this._currentCallInfo = undefined;
            this._waitingCallInfo = undefined;
            this._callWaitingAvailable = false;
            this._lastCallClosedAt = Date.now();
        };
        // Handle different phone states
        // Check for incoming call (firmware alternates between "Incoming Call" and "Ringing")
        if (phoneState === "Ringing" || phoneState === "Incoming Call") {
            this._callModalMode = "incoming";
            this._callModalOpen = true;
            this._callModalMinimized = false; // Reset on new incoming call
            // Get incoming call info
            const currentCallEntity = this.hass.states[deviceId ? `sensor.${deviceId}_current_call` : `sensor.current_call`];
            if (currentCallEntity?.attributes) {
                const attrs = currentCallEntity.attributes;
                this._currentCallInfo = {
                    number: attrs.number || "Unknown",
                    name: attrs.name,
                    isPriority: attrs.is_priority || false,
                    isIncoming: true,
                };
            }
        }
        else if (phoneState === "Dialing" || phoneState === "In Call") {
            // Show modal when actively dialing out or in call
            this._callModalMode = "active";
            const currentCallEntity = this.hass.states[deviceId ? `sensor.${deviceId}_current_call` : `sensor.current_call`];
            const durationEntity = this.hass.states[deviceId ? `sensor.${deviceId}_call_duration` : `sensor.call_duration`];
            const audioOutputEntity = this.hass.states[deviceId
                ? `sensor.${deviceId}_call_audio_output`
                : `sensor.call_audio_output`];
            const currentCallAttrs = currentCallEntity?.attributes;
            const callStatus = currentCallAttrs?.status || "idle";
            const hasNumber = Boolean(currentCallAttrs?.number);
            const hasDialingNumber = Boolean(currentCallAttrs?.dialing_number);
            const rawCallId = currentCallAttrs?.call_id;
            const hasValidCallId = typeof rawCallId === "number" && rawCallId !== -1;
            const statusSuggestsActive = callStatus === "in_call" ||
                callStatus === "dialing" ||
                callStatus === "ringing" ||
                callStatus === "context";
            const hasActiveContext = statusSuggestsActive ||
                hasNumber ||
                hasDialingNumber ||
                hasValidCallId ||
                phoneState === "Dialing";
            if (!hasActiveContext) {
                if (!this._callModalMinimized) {
                    this._callModalOpen = false;
                }
                this._currentCallInfo = undefined;
                this._waitingCallInfo = undefined;
                this._callWaitingAvailable = false;
                return;
            }
            const previousStateLabel = phoneStateAttrs?.previous_state || "";
            const closedRecently = phoneState === "In Call" &&
                previousStateLabel === "Idle" &&
                this._lastCallClosedAt > 0 &&
                Date.now() - this._lastCallClosedAt < 800;
            if (closedRecently && !this._callModalMinimized) {
                this._callModalOpen = false;
                this._currentCallInfo = undefined;
                this._waitingCallInfo = undefined;
                this._callWaitingAvailable = false;
                return;
            }
            if (!this._callModalMinimized) {
                this._callModalOpen = true;
            }
            this._lastCallClosedAt = 0;
            const previousCallInfo = this._currentCallInfo;
            let durationSeconds = previousCallInfo?.duration ?? 0;
            if (durationEntity) {
                const rawDuration = durationEntity.state;
                if (rawDuration !== "unknown" && rawDuration !== "unavailable") {
                    const parsed = Number(rawDuration);
                    if (!Number.isNaN(parsed) && parsed >= 0) {
                        durationSeconds = parsed;
                    }
                }
            }
            let audioOutput = previousCallInfo?.audioOutput || "earpiece";
            if (audioOutputEntity &&
                audioOutputEntity.state !== "unknown" &&
                audioOutputEntity.state !== "unavailable") {
                audioOutput =
                    audioOutputEntity.state || "earpiece";
            }
            if (currentCallAttrs) {
                const resolvedNumber = currentCallAttrs.number ||
                    currentCallAttrs.normalized_number ||
                    currentCallAttrs.dialing_number ||
                    previousCallInfo?.number ||
                    "Unknown";
                this._currentCallInfo = {
                    number: resolvedNumber,
                    name: currentCallAttrs.name,
                    isPriority: Boolean(currentCallAttrs.is_priority),
                    isIncoming: currentCallAttrs.direction === "incoming" ||
                        currentCallAttrs.is_incoming === true,
                    duration: durationSeconds,
                    audioOutput,
                };
            }
            else {
                this._currentCallInfo = {
                    number: previousCallInfo?.number || "Unknown",
                    name: previousCallInfo?.name,
                    isPriority: previousCallInfo?.isPriority || false,
                    isIncoming: previousCallInfo?.isIncoming || false,
                    duration: durationSeconds,
                    audioOutput,
                };
            }
            // Check for waiting call
            const waitingCallEntity = this.hass.states[deviceId
                ? `sensor.${deviceId}_current_waiting_call`
                : `sensor.current_waiting_call`];
            if (waitingCallEntity &&
                waitingCallEntity.state !== "None" &&
                waitingCallEntity.state !== "unavailable") {
                const waitingAttrs = waitingCallEntity.attributes;
                this._waitingCallInfo = {
                    number: waitingAttrs.number || "Unknown",
                    name: waitingAttrs.name,
                    isPriority: waitingAttrs.is_priority || false,
                };
            }
            else {
                this._waitingCallInfo = undefined;
            }
            // Check if call waiting is available
            const callWaitingAvailableEntity = this.hass.states[deviceId
                ? `binary_sensor.${deviceId}_call_waiting_available`
                : `binary_sensor.call_waiting_available`];
            this._callWaitingAvailable = callWaitingAvailableEntity?.state === "on";
        }
        else {
            // Any other state (Idle, etc.) - close modal
            closeModal();
        }
    }
    /**
     * Refresh data from services
     */
    async _refreshData() {
        if (!this.hass)
            return;
        const entityId = this._getPhoneStateEntityId();
        try {
            // Call service to get latest call history
            const response = (await this.hass.callService("tsuryphone", "get_call_history", { limit: 1000, entity_id: entityId }, true));
            if (response && response.call_history) {
                this._callHistoryCache = response.call_history;
            }
        }
        catch (err) {
        }
    }
    /**
     * Get entity ID for a device sensor
     */
    _getDeviceEntityId(suffix) {
        const deviceId = this.config?.device_id || "tsuryphone";
        return `sensor.${deviceId}_${suffix}`;
    }
    /**
     * Handle navigation tab change
     */
    _handleTabChange(e) {
        this._activeView = e.detail.tab;
    }
    /**
     * Handle contact modal close
     */
    _handleContactModalClose() {
        this._contactModalOpen = false;
        this._showContactModal = false;
        this._contactModalData = undefined;
    }
    /**
     * Handle contact saved
     */
    _handleContactSaved(e) {
        this._handleContactModalClose();
        // Data will update automatically via state subscription
    }
    /**
     * Handle contact deleted
     */
    _handleContactDeleted(e) {
        this._handleContactModalClose();
        // Data will update automatically via state subscription
    }
    /**
     * Handle contact modal error
     */
    _handleContactModalError(e) {
        this._errorMessage = e.detail.message;
        // Show error for 3 seconds
        setTimeout(() => {
            this._errorMessage = "";
        }, 3000);
    }
    /**
     * Handle call modal close (minimize to toast)
     */
    _handleCallModalClose() {
        // Don't fully close during active call, just minimize
        if (this._callModalMode === "active" && this._currentCallInfo) {
            this._callModalOpen = false;
            this._callModalMinimized = true; // Track manual minimize
            this._showCallToast = true; // Show persistent toast
        }
        else {
            this._callModalOpen = false;
            this._callModalMinimized = true;
        }
    }
    /**
     * Handle call answered
     */
    _handleCallAnswered(e) {
        // Modal will update to active mode via state subscription
    }
    /**
     * Handle call declined
     */
    _handleCallDeclined(e) {
        this._callModalOpen = false;
    }
    /**
     * Handle call ended
     */
    _handleCallEnded(e) {
        this._callModalOpen = false;
        this._showCallToast = false;
    }
    /**
     * Handle call modal error
     */
    _handleCallModalError(e) {
        this._errorMessage = e.detail.message;
        // Show error for 3 seconds
        setTimeout(() => {
            this._errorMessage = "";
        }, 3000);
    }
    /**
     * Handle click on call toast to reopen modal
     */
    _handleCallToastClick() {
        this._callModalOpen = true;
        this._showCallToast = false;
        this._callModalMinimized = false;
    }
    /**
     * Handle edit contact (from contact item click)
     */
    _handleEditContact(e) {
        const contact = e.detail.contact;
        this._contactModalMode = "edit";
        this._contactModalData = contact;
        this._contactModalOpen = true;
        this._showContactModal = true;
    }
    /**
     * Handle add contact (from empty state action button)
     */
    _handleAddContact() {
        this._contactModalMode = "add";
        this._contactModalData = undefined;
        this._contactModalOpen = true;
        this._showContactModal = true;
    }
    /**
     * Handle open block modal
     */
    _handleOpenSideMenu() {
        this._isSideMenuOpen = true;
    }
    _handleCloseSideMenu() {
        this._isSideMenuOpen = false;
    }
    _handleNavigateBackFromBlocked() {
        this._activeView = "contacts";
    }
    _handleNavigateBackFromSettings() {
        this._activeView = "contacts";
    }
    _handleSettingsNavigate(e) {
        const section = e.detail.section;
        // TODO: Navigate to specific settings section
        // For now, this is a placeholder for Phase 6-14
        console.log("Navigate to settings section:", section);
    }
    _handleSideMenuNavigate(e) {
        const target = e.detail.target;
        if (target === "blocked") {
            this._activeView = "blocked";
        }
        else if (target === "settings") {
            this._activeView = "settings";
        }
        this._isSideMenuOpen = false;
    }
    /**
     * Render the card
     */
    render() {
        if (!this.hass || !this.config) {
            return x `<div class="tsuryphone-error">Loading...</div>`;
        }
        // Show error overlay if not connected
        if (!this._isConnected || this._errorMessage) {
            return x `
        <ha-card>
          <div class="tsuryphone-container">
            <div class="error-overlay">
              <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
              <div class="error-title">Connection Error</div>
              <div class="error-message">
                ${this._errorMessage || "Unable to connect to Home Assistant"}
              </div>
            </div>
          </div>
        </ha-card>
      `;
        }
        return x `
      <ha-card>
        <div
          class="tsuryphone-container ${this._isDarkMode
            ? "dark-mode"
            : "light-mode"}"
        >
          ${this._callModalOpen ? this._renderCallModal() : ""}
          ${this._contactModalOpen ? this._renderContactModal() : ""}
          ${this._showCallToast ? this._renderCallToast() : ""}
          ${this._renderSideMenu()}
          ${this._renderMainViews()}
        </div>
      </ha-card>
    `;
    }
    /**
     * Render main views (home, keypad, contacts, blocked, settings)
     */
    _renderMainViews() {
        return x `
      <div class="views-container">
        <div class="view-content">
          ${this._activeView === "home" ? this._renderHomeView() : ""}
          ${this._activeView === "keypad" ? this._renderKeypadView() : ""}
          ${this._activeView === "contacts" ? this._renderContactsView() : ""}
          ${this._activeView === "blocked" ? this._renderBlockedView() : ""}
          ${this._activeView === "settings" ? this._renderSettingsView() : ""}
        </div>

        <tsuryphone-navigation
          .activeTab=${this._activeView === "blocked" || this._activeView === "settings" ? "contacts" : this._activeView}
          .disabled=${this._showCallModal}
          @tab-change=${this._handleTabChange}
        ></tsuryphone-navigation>
      </div>
    `;
    }
    _renderSideMenu() {
        return x `
      <tsuryphone-side-menu
        .open=${this._isSideMenuOpen}
        @close-menu=${this._handleCloseSideMenu}
        @menu-navigate=${this._handleSideMenuNavigate}
      ></tsuryphone-side-menu>
    `;
    }
    /**
     * Render home view
     */
    _renderHomeView() {
        // Convert call history to the format expected by home-view
        const callHistory = this._callHistoryCache.map((call, index) => {
            // Map call_type to our CallType enum
            // Backend sends: 'incoming_answered', 'outgoing_answered', 'incoming_missed', 'blocked', etc.
            let callType;
            if (call.call_type === "blocked") {
                callType = "missed";
            }
            else if (call.call_type.startsWith("incoming_missed") || call.call_type.startsWith("outgoing_missed")) {
                callType = "missed";
            }
            else if (call.call_type.startsWith("incoming")) {
                callType = "incoming";
            }
            else if (call.call_type.startsWith("outgoing")) {
                callType = "outgoing";
            }
            else {
                // Default to missed for unknown types
                callType = "missed";
            }
            const normalizedNumber = normalizePhoneNumberForDisplay(call.number, this._defaultDialCode);
            const contactName = call.name && call.name.trim() ? call.name : normalizedNumber;
            const hasContactName = !!(call.name && call.name.trim());
            const entry = {
                id: call.seq || `${call.received_ts}-${call.number}`,
                contactName: contactName,
                phoneNumber: call.number,
                timestamp: new Date(call.received_ts * 1000).toISOString(), // Convert Unix timestamp to ISO string
                duration: call.duration_s || 0,
                type: callType,
                isBlocked: call.call_type === "blocked",
                hasContactName: hasContactName,
            };
            return entry;
        });
        return x `
      <div class="view home-view fade-in">
        <tsuryphone-home-view
          .callHistory=${callHistory}
          .defaultDialCode=${this._defaultDialCode}
          .loading=${false}
          @dial-contact=${this._handleDialContact}
          @call-details=${this._handleCallDetails}
        ></tsuryphone-home-view>
      </div>
    `;
    }
    /**
     * Handle dial contact event from home view
     */
    async _handleDialContact(e) {
        const { contact } = e.detail;
        // Initiate a call to the contact's phone number
        if (contact && contact.phoneNumber) {
            try {
                await this.hass.callService("tsuryphone", "dial", {
                    number: contact.phoneNumber,
                }, {
                    entity_id: this._getPhoneStateEntityId(),
                });
            }
            catch (error) {
                console.error("Failed to dial contact:", error);
            }
        }
    }
    /**
     * Handle call details event from home view
     */
    async _handleCallDetails(e) {
        const { call } = e.detail;
        // Initiate a call to the number from call history
        if (call && call.phoneNumber) {
            try {
                await this.hass.callService("tsuryphone", "dial", {
                    number: call.phoneNumber,
                }, {
                    entity_id: this._getPhoneStateEntityId(),
                });
            }
            catch (error) {
            }
        }
    }
    /**
     * Get phone state entity ID
     */
    _getPhoneStateEntityId() {
        const deviceId = this.config?.device_id || "tsuryphone";
        if (this.config?.entity) {
            return this.config.entity.startsWith("sensor.")
                ? this.config.entity
                : `sensor.${this.config.entity}`;
        }
        return `sensor.${deviceId}_phone_state`;
    }
    /**
     * Render keypad view
     */
    _renderKeypadView() {
        return x `
      <div class="view keypad-view fade-in">
        <tsuryphone-keypad-view
          .hass=${this.hass}
          .config=${this.config}
        ></tsuryphone-keypad-view>
      </div>
    `;
    }
    /**
     * Render contacts view
     */
    _renderContactsView() {
        return x `
      <div
        class="view contacts-view fade-in"
        @edit-contact=${this._handleEditContact}
        @action=${this._handleAddContact}
      >
        <tsuryphone-contacts-view
          .hass=${this.hass}
          .config=${this.config}
          @open-menu=${this._handleOpenSideMenu}
        ></tsuryphone-contacts-view>
      </div>
    `;
    }
    /**
     * Render call modal
     */
    _renderCallModal() {
        const deviceIdPrefix = this.config?.device_id || "";
        const phoneStateEntityId = deviceIdPrefix
            ? `sensor.${deviceIdPrefix}_phone_state`
            : `sensor.phone_state`;
        return x `
      <tsuryphone-call-modal
        .hass=${this.hass}
        .entityId=${phoneStateEntityId}
        .open=${this._callModalOpen}
        .mode=${this._callModalMode}
        .callInfo=${this._currentCallInfo}
        .waitingCall=${this._waitingCallInfo}
        .callWaitingAvailable=${this._callWaitingAvailable}
        @close=${this._handleCallModalClose}
        @call-answered=${this._handleCallAnswered}
        @call-declined=${this._handleCallDeclined}
        @call-ended=${this._handleCallEnded}
        @error=${this._handleCallModalError}
      ></tsuryphone-call-modal>
    `;
    }
    /**
     * Render call toast (minimized call indicator)
     */
    _renderCallToast() {
        if (!this._currentCallInfo)
            return x ``;
        const displayName = this._currentCallInfo.name || this._currentCallInfo.number;
        const duration = this._currentCallInfo.duration || 0;
        const minutes = Math.floor(duration / 60);
        const seconds = duration % 60;
        const durationText = `${minutes}:${seconds.toString().padStart(2, "0")}`;
        return x `
      <div class="call-toast" @click=${this._handleCallToastClick}>
        <div class="call-toast-content">
          <ha-icon class="call-toast-icon" icon="mdi:phone"></ha-icon>
          <div class="call-toast-name">${displayName}</div>
          <div class="call-toast-duration">${durationText}</div>
        </div>
        <div class="call-toast-action">Tap to return</div>
      </div>
    `;
    }
    /**
     * Render contact modal
     */
    _renderContactModal() {
        return x `
      <tsuryphone-contact-modal
        .hass=${this.hass}
        .open=${this._contactModalOpen}
        .mode=${this._contactModalMode}
        .contact=${this._contactModalData}
        @close=${this._handleContactModalClose}
        @contact-saved=${this._handleContactSaved}
        @contact-deleted=${this._handleContactDeleted}
        @error=${this._handleContactModalError}
      ></tsuryphone-contact-modal>
    `;
    }
    /**
     * Render block number modal
     */
    /**
     * Render blocked view
     */
    _renderBlockedView() {
        return x `
      <div
        class="view blocked-view fade-in"
      >
        <tsuryphone-blocked-view
          .hass=${this.hass}
          .config=${this.config}
          .blockedNumbers=${this._blockedCache}
          @navigate-back=${this._handleNavigateBackFromBlocked}
        ></tsuryphone-blocked-view>
      </div>
    `;
    }
    /**
     * Render settings view
     */
    _renderSettingsView() {
        return x `
      <div class="view settings-view fade-in">
        <tsuryphone-settings-view
          .hass=${this.hass}
          .entityId=${this.config.entity}
          @navigate-back=${this._handleNavigateBackFromSettings}
          @settings-navigate=${this._handleSettingsNavigate}
        ></tsuryphone-settings-view>
      </div>
    `;
    }
    /**
     * Styles for the card
     */
    static get styles() {
        return [
            haThemeVariables,
            haButtonStyles,
            haCardStyles,
            commonStyles,
            i$3 `
        :host {
          display: block;
        }

        ha-card {
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .tsuryphone-container {
          display: flex;
          flex-direction: column;
          height: 100vh;
          max-height: 900px;
          background: var(--tsury-card-background-color);
          color: var(--tsury-primary-text-color);
          font-family: var(--tsury-font-family);
          position: relative;
          overflow: hidden;
        }

        .tsuryphone-error {
          padding: var(--tsury-spacing-md);
          text-align: center;
          color: var(--tsury-error-color);
        }

        .error-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: var(--tsury-card-background-color);
          z-index: 100;
          padding: var(--tsury-spacing-xl);
        }

        .error-overlay ha-icon {
          --mdc-icon-size: 64px;
          color: var(--tsury-error-color);
          margin-bottom: var(--tsury-spacing-md);
        }

        .error-title {
          font-size: var(--tsury-font-size-xl);
          font-weight: var(--tsury-font-weight-medium);
          color: var(--tsury-primary-text-color);
          margin-bottom: var(--tsury-spacing-sm);
        }

        .error-message {
          font-size: var(--tsury-font-size-md);
          color: var(--tsury-secondary-text-color);
          text-align: center;
        }

        .views-container {
          display: flex;
          flex-direction: column;
          flex: 1;
          overflow: hidden;
        }

        .view-content {
          flex: 1;
          overflow-y: auto;
          overflow-x: hidden;
          -webkit-overflow-scrolling: touch;
        }

        .view {
          display: flex;
          flex-direction: column;
          min-height: 100%;
          background: var(--tsury-primary-background-color);
        }

        .view-header {
          padding: var(--tsury-spacing-md) var(--tsury-spacing-md)
            var(--tsury-spacing-sm);
          background: var(--tsury-card-background-color);
          border-bottom: 1px solid var(--tsury-divider-color);
        }

        .view-header h2 {
          margin: 0;
          font-size: var(--tsury-font-size-xl);
          font-weight: var(--tsury-font-weight-medium);
          color: var(--tsury-primary-text-color);
        }

        .view-body {
          flex: 1;
          padding: var(--tsury-spacing-md);
        }

        .placeholder-text {
          color: var(--tsury-secondary-text-color);
          text-align: center;
          margin: var(--tsury-spacing-md) 0;
        }

        .view-placeholder,
        .modal-placeholder {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: var(--tsury-spacing-lg);
          background: var(--tsury-primary-background-color);
          color: var(--tsury-secondary-text-color);
          font-size: var(--tsury-font-size-lg);
        }

        .navigation-placeholder {
          display: flex;
          justify-content: space-around;
          padding: var(--tsury-spacing-md);
          background: var(--tsury-card-background-color);
          border-top: 1px solid var(--tsury-divider-color);
          gap: var(--tsury-spacing-sm);
        }

        .navigation-placeholder button {
          flex: 1;
          padding: var(--tsury-spacing-sm) var(--tsury-spacing-md);
          background: var(--tsury-primary-color);
          color: var(--text-primary-color);
          border: none;
          border-radius: var(--tsury-border-radius-md);
          cursor: pointer;
          font-size: var(--tsury-font-size-md);
          font-weight: var(--tsury-font-weight-medium);
          transition: all var(--tsury-transition-duration)
            var(--tsury-transition-timing);
        }

        .navigation-placeholder button:hover {
          filter: brightness(1.1);
        }

        .navigation-placeholder button:active {
          filter: brightness(0.9);
        }

        /* Call Toast (minimized call indicator) */
        .call-toast {
          position: absolute;
          bottom: 64px; /* Just above 56px nav bar */
          left: 12px;
          right: 12px;
          z-index: 50;
          background: var(--primary-color);
          color: var(--text-primary-color, white);
          padding: 8px 12px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
          cursor: pointer;
          transition: transform 0.2s ease;
        }

        .call-toast:hover {
          transform: scale(1.02);
        }

        .call-toast:active {
          transform: scale(0.98);
        }

        .call-toast-content {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .call-toast-icon {
          --mdc-icon-size: 18px;
          color: var(--tsury-primary-text-color);
        }

        .call-toast-name {
          font-weight: 500;
          font-size: 14px;
          line-height: 1;
        }

        .call-toast-duration {
          font-size: 12px;
          opacity: 0.9;
          line-height: 1;
        }

        .call-toast-action {
          font-size: 11px;
          opacity: 0.85;
          line-height: 1;
          white-space: nowrap;
        }

        /* Dark mode adjustments */
        .tsuryphone-container.dark-mode {
          /* Dark mode specific overrides if needed */
        }

        .tsuryphone-container.light-mode {
          /* Light mode specific overrides if needed */
        }
      `,
        ];
    }
};
__decorate([
    n({ attribute: false })
], TsuryPhoneCard.prototype, "hass", void 0);
__decorate([
    n({ attribute: false })
], TsuryPhoneCard.prototype, "config", void 0);
__decorate([
    r()
], TsuryPhoneCard.prototype, "_activeView", void 0);
__decorate([
    r()
], TsuryPhoneCard.prototype, "_showCallModal", void 0);
__decorate([
    r()
], TsuryPhoneCard.prototype, "_showContactModal", void 0);
__decorate([
    r()
], TsuryPhoneCard.prototype, "_isSideMenuOpen", void 0);
__decorate([
    r()
], TsuryPhoneCard.prototype, "_isDarkMode", void 0);
__decorate([
    r()
], TsuryPhoneCard.prototype, "_contactsCache", void 0);
__decorate([
    r()
], TsuryPhoneCard.prototype, "_blockedCache", void 0);
__decorate([
    r()
], TsuryPhoneCard.prototype, "_callHistoryCache", void 0);
__decorate([
    r()
], TsuryPhoneCard.prototype, "_priorityNumbers", void 0);
__decorate([
    r()
], TsuryPhoneCard.prototype, "_defaultDialCode", void 0);
__decorate([
    r()
], TsuryPhoneCard.prototype, "_isConnected", void 0);
__decorate([
    r()
], TsuryPhoneCard.prototype, "_errorMessage", void 0);
__decorate([
    r()
], TsuryPhoneCard.prototype, "_contactModalOpen", void 0);
__decorate([
    r()
], TsuryPhoneCard.prototype, "_contactModalMode", void 0);
__decorate([
    r()
], TsuryPhoneCard.prototype, "_contactModalData", void 0);
__decorate([
    r()
], TsuryPhoneCard.prototype, "_callModalOpen", void 0);
__decorate([
    r()
], TsuryPhoneCard.prototype, "_callModalMode", void 0);
__decorate([
    r()
], TsuryPhoneCard.prototype, "_currentCallInfo", void 0);
__decorate([
    r()
], TsuryPhoneCard.prototype, "_waitingCallInfo", void 0);
__decorate([
    r()
], TsuryPhoneCard.prototype, "_callWaitingAvailable", void 0);
__decorate([
    r()
], TsuryPhoneCard.prototype, "_showCallToast", void 0);
TsuryPhoneCard = __decorate([
    t("tsuryphone-card")
], TsuryPhoneCard);

export { TsuryPhoneCard };
//# sourceMappingURL=tsuryphone-card.js.map
