/* THIS IS A GENERATED/BUNDLED FILE BY ESBUILD see https://github.com/BambusControl/obsidian-unicode-search for the source */
"use strict";var Ye=Object.create;var me=Object.defineProperty,Xe=Object.defineProperties,Ve=Object.getOwnPropertyDescriptor,et=Object.getOwnPropertyDescriptors,tt=Object.getOwnPropertyNames,Ae=Object.getOwnPropertySymbols,Le=Object.getPrototypeOf,Fe=Object.prototype.hasOwnProperty,rt=Object.prototype.propertyIsEnumerable,at=Reflect.get;var Ue=(n,r,a)=>r in n?me(n,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[r]=a,oe=(n,r)=>{for(var a in r||(r={}))Fe.call(r,a)&&Ue(n,a,r[a]);if(Ae)for(var a of Ae(r))rt.call(r,a)&&Ue(n,a,r[a]);return n},ye=(n,r)=>Xe(n,et(r));var it=(n,r)=>()=>(r||n((r={exports:{}}).exports,r),r.exports),nt=(n,r)=>{for(var a in r)me(n,a,{get:r[a],enumerable:!0})},Me=(n,r,a,c)=>{if(r&&typeof r=="object"||typeof r=="function")for(let m of tt(r))!Fe.call(n,m)&&m!==a&&me(n,m,{get:()=>r[m],enumerable:!(c=Ve(r,m))||c.enumerable});return n};var st=(n,r,a)=>(a=n!=null?Ye(Le(n)):{},Me(r||!n||!n.__esModule?me(a,"default",{value:n,enumerable:!0}):a,n)),ot=n=>Me(me({},"__esModule",{value:!0}),n);var Ne=(n,r,a)=>at(Le(n),a,r);var U=(n,r,a)=>new Promise((c,m)=>{var M=_=>{try{B(a.next(_))}catch(J){m(J)}},u=_=>{try{B(a.throw(_))}catch(J){m(J)}},B=_=>_.done?c(_.value):Promise.resolve(_.value).then(M,u);B((a=a.apply(n,r)).next())});var Qe=it((De,xe)=>{(function(n,r){typeof define=="function"&&define.amd?define([],r):typeof xe=="object"&&typeof De!="undefined"?xe.exports=r():n.Papa=r()})(De,function n(){"use strict";var r=typeof self!="undefined"?self:typeof window!="undefined"?window:r!==void 0?r:{},a=!r.document&&!!r.postMessage,c=r.IS_PAPA_WORKER||!1,m={},M=0,u={parse:function(t,e){var i=(e=e||{}).dynamicTyping||!1;if(y(i)&&(e.dynamicTypingFunction=i,i={}),e.dynamicTyping=i,e.transform=!!y(e.transform)&&e.transform,e.worker&&u.WORKERS_SUPPORTED){var s=function(){if(!u.WORKERS_SUPPORTED)return!1;var p=(L=r.URL||r.webkitURL||null,T=n.toString(),u.BLOB_URL||(u.BLOB_URL=L.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",T,")();"],{type:"text/javascript"})))),g=new r.Worker(p),L,T;return g.onmessage=Ze,g.id=M++,m[g.id]=g}();return s.userStep=e.step,s.userChunk=e.chunk,s.userComplete=e.complete,s.userError=e.error,e.step=y(e.step),e.chunk=y(e.chunk),e.complete=y(e.complete),e.error=y(e.error),delete e.worker,void s.postMessage({input:t,config:e,workerId:s.id})}var h=null;return u.NODE_STREAM_INPUT,typeof t=="string"?(t=function(p){return p.charCodeAt(0)===65279?p.slice(1):p}(t),h=e.download?new J(e):new ee(e)):t.readable===!0&&y(t.read)&&y(t.on)?h=new _e(e):(r.File&&t instanceof File||t instanceof Object)&&(h=new de(e)),h.stream(t)},unparse:function(t,e){var i=!1,s=!0,h=",",p=`\r
`,g='"',L=g+g,T=!1,d=null,x=!1;(function(){if(typeof e=="object"){if(typeof e.delimiter!="string"||u.BAD_DELIMITERS.filter(function(o){return e.delimiter.indexOf(o)!==-1}).length||(h=e.delimiter),(typeof e.quotes=="boolean"||typeof e.quotes=="function"||Array.isArray(e.quotes))&&(i=e.quotes),typeof e.skipEmptyLines!="boolean"&&typeof e.skipEmptyLines!="string"||(T=e.skipEmptyLines),typeof e.newline=="string"&&(p=e.newline),typeof e.quoteChar=="string"&&(g=e.quoteChar),typeof e.header=="boolean"&&(s=e.header),Array.isArray(e.columns)){if(e.columns.length===0)throw new Error("Option columns is empty");d=e.columns}e.escapeChar!==void 0&&(L=e.escapeChar+g),(typeof e.escapeFormulae=="boolean"||e.escapeFormulae instanceof RegExp)&&(x=e.escapeFormulae instanceof RegExp?e.escapeFormulae:/^[=+\-@\t\r].*$/)}})();var f=new RegExp(pe(g),"g");if(typeof t=="string"&&(t=JSON.parse(t)),Array.isArray(t)){if(!t.length||Array.isArray(t[0]))return Q(null,t,T);if(typeof t[0]=="object")return Q(d||Object.keys(t[0]),t,T)}else if(typeof t=="object")return typeof t.data=="string"&&(t.data=JSON.parse(t.data)),Array.isArray(t.data)&&(t.fields||(t.fields=t.meta&&t.meta.fields||d),t.fields||(t.fields=Array.isArray(t.data[0])?t.fields:typeof t.data[0]=="object"?Object.keys(t.data[0]):[]),Array.isArray(t.data[0])||typeof t.data[0]=="object"||(t.data=[t.data])),Q(t.fields||[],t.data||[],T);throw new Error("Unable to serialize unrecognized input");function Q(o,w,z){var D="";typeof o=="string"&&(o=JSON.parse(o)),typeof w=="string"&&(w=JSON.parse(w));var F=Array.isArray(o)&&0<o.length,O=!Array.isArray(w[0]);if(F&&s){for(var A=0;A<o.length;A++)0<A&&(D+=h),D+=N(o[A],A);0<w.length&&(D+=p)}for(var l=0;l<w.length;l++){var v=F?o.length:w[l].length,E=!1,P=F?Object.keys(w[l]).length===0:w[l].length===0;if(z&&!F&&(E=z==="greedy"?w[l].join("").trim()==="":w[l].length===1&&w[l][0].length===0),z==="greedy"&&F){for(var b=[],q=0;q<v;q++){var I=O?o[q]:q;b.push(w[l][I])}E=b.join("").trim()===""}if(!E){for(var k=0;k<v;k++){0<k&&!P&&(D+=h);var $=F&&O?o[k]:k;D+=N(w[l][$],k)}l<w.length-1&&(!z||0<v&&!P)&&(D+=p)}}return D}function N(o,w){if(o==null)return"";if(o.constructor===Date)return JSON.stringify(o).slice(1,25);var z=!1;x&&typeof o=="string"&&x.test(o)&&(o="'"+o,z=!0);var D=o.toString().replace(f,L);return(z=z||i===!0||typeof i=="function"&&i(o,w)||Array.isArray(i)&&i[w]||function(F,O){for(var A=0;A<O.length;A++)if(-1<F.indexOf(O[A]))return!0;return!1}(D,u.BAD_DELIMITERS)||-1<D.indexOf(h)||D.charAt(0)===" "||D.charAt(D.length-1)===" ")?g+D+g:D}}};if(u.RECORD_SEP=String.fromCharCode(30),u.UNIT_SEP=String.fromCharCode(31),u.BYTE_ORDER_MARK="\uFEFF",u.BAD_DELIMITERS=["\r",`
`,'"',u.BYTE_ORDER_MARK],u.WORKERS_SUPPORTED=!a&&!!r.Worker,u.NODE_STREAM_INPUT=1,u.LocalChunkSize=10485760,u.RemoteChunkSize=5242880,u.DefaultDelimiter=",",u.Parser=we,u.ParserHandle=Ie,u.NetworkStreamer=J,u.FileStreamer=de,u.StringStreamer=ee,u.ReadableStreamStreamer=_e,r.jQuery){var B=r.jQuery;B.fn.parse=function(t){var e=t.config||{},i=[];return this.each(function(p){if(!(B(this).prop("tagName").toUpperCase()==="INPUT"&&B(this).attr("type").toLowerCase()==="file"&&r.FileReader)||!this.files||this.files.length===0)return!0;for(var g=0;g<this.files.length;g++)i.push({file:this.files[g],inputElem:this,instanceConfig:B.extend({},e)})}),s(),this;function s(){if(i.length!==0){var p,g,L,T,d=i[0];if(y(t.before)){var x=t.before(d.file,d.inputElem);if(typeof x=="object"){if(x.action==="abort")return p="AbortError",g=d.file,L=d.inputElem,T=x.reason,void(y(t.error)&&t.error({name:p},g,L,T));if(x.action==="skip")return void h();typeof x.config=="object"&&(d.instanceConfig=B.extend(d.instanceConfig,x.config))}else if(x==="skip")return void h()}var f=d.instanceConfig.complete;d.instanceConfig.complete=function(Q){y(f)&&f(Q,d.file,d.inputElem),h()},u.parse(d.file,d.instanceConfig)}else y(t.complete)&&t.complete()}function h(){i.splice(0,1),s()}}}function _(t){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(e){var i=Ee(e);i.chunkSize=parseInt(i.chunkSize),e.step||e.chunk||(i.chunkSize=null),this._handle=new Ie(i),(this._handle.streamer=this)._config=i}.call(this,t),this.parseChunk=function(e,i){if(this.isFirstChunk&&y(this._config.beforeFirstChunk)){var s=this._config.beforeFirstChunk(e);s!==void 0&&(e=s)}this.isFirstChunk=!1,this._halted=!1;var h=this._partialLine+e;this._partialLine="";var p=this._handle.parse(h,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var g=p.meta.cursor;this._finished||(this._partialLine=h.substring(g-this._baseIndex),this._baseIndex=g),p&&p.data&&(this._rowCount+=p.data.length);var L=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(c)r.postMessage({results:p,workerId:u.WORKER_ID,finished:L});else if(y(this._config.chunk)&&!i){if(this._config.chunk(p,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);p=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(p.data),this._completeResults.errors=this._completeResults.errors.concat(p.errors),this._completeResults.meta=p.meta),this._completed||!L||!y(this._config.complete)||p&&p.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),L||p&&p.meta.paused||this._nextChunk(),p}this._halted=!0},this._sendError=function(e){y(this._config.error)?this._config.error(e):c&&this._config.error&&r.postMessage({workerId:u.WORKER_ID,error:e,finished:!1})}}function J(t){var e;(t=t||{}).chunkSize||(t.chunkSize=u.RemoteChunkSize),_.call(this,t),this._nextChunk=a?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(i){this._input=i,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(e=new XMLHttpRequest,this._config.withCredentials&&(e.withCredentials=this._config.withCredentials),a||(e.onload=te(this._chunkLoaded,this),e.onerror=te(this._chunkError,this)),e.open(this._config.downloadRequestBody?"POST":"GET",this._input,!a),this._config.downloadRequestHeaders){var i=this._config.downloadRequestHeaders;for(var s in i)e.setRequestHeader(s,i[s])}if(this._config.chunkSize){var h=this._start+this._config.chunkSize-1;e.setRequestHeader("Range","bytes="+this._start+"-"+h)}try{e.send(this._config.downloadRequestBody)}catch(p){this._chunkError(p.message)}a&&e.status===0&&this._chunkError()}},this._chunkLoaded=function(){e.readyState===4&&(e.status<200||400<=e.status?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:e.responseText.length,this._finished=!this._config.chunkSize||this._start>=function(i){var s=i.getResponseHeader("Content-Range");return s===null?-1:parseInt(s.substring(s.lastIndexOf("/")+1))}(e),this.parseChunk(e.responseText)))},this._chunkError=function(i){var s=e.statusText||i;this._sendError(new Error(s))}}function de(t){var e,i;(t=t||{}).chunkSize||(t.chunkSize=u.LocalChunkSize),_.call(this,t);var s=typeof FileReader!="undefined";this.stream=function(h){this._input=h,i=h.slice||h.webkitSlice||h.mozSlice,s?((e=new FileReader).onload=te(this._chunkLoaded,this),e.onerror=te(this._chunkError,this)):e=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var h=this._input;if(this._config.chunkSize){var p=Math.min(this._start+this._config.chunkSize,this._input.size);h=i.call(h,this._start,p)}var g=e.readAsText(h,this._config.encoding);s||this._chunkLoaded({target:{result:g}})},this._chunkLoaded=function(h){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(h.target.result)},this._chunkError=function(){this._sendError(e.error)}}function ee(t){var e;_.call(this,t=t||{}),this.stream=function(i){return e=i,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var i,s=this._config.chunkSize;return s?(i=e.substring(0,s),e=e.substring(s)):(i=e,e=""),this._finished=!e,this.parseChunk(i)}}}function _e(t){_.call(this,t=t||{});var e=[],i=!0,s=!1;this.pause=function(){_.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){_.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(h){this._input=h,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){s&&e.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),e.length?this.parseChunk(e.shift()):i=!0},this._streamData=te(function(h){try{e.push(typeof h=="string"?h:h.toString(this._config.encoding)),i&&(i=!1,this._checkIsFinished(),this.parseChunk(e.shift()))}catch(p){this._streamError(p)}},this),this._streamError=te(function(h){this._streamCleanUp(),this._sendError(h)},this),this._streamEnd=te(function(){this._streamCleanUp(),s=!0,this._streamData("")},this),this._streamCleanUp=te(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function Ie(t){var e,i,s,h=Math.pow(2,53),p=-h,g=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,L=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,T=this,d=0,x=0,f=!1,Q=!1,N=[],o={data:[],errors:[],meta:{}};if(y(t.step)){var w=t.step;t.step=function(l){if(o=l,F())D();else{if(D(),o.data.length===0)return;d+=l.data.length,t.preview&&d>t.preview?i.abort():(o.data=o.data[0],w(o,T))}}}function z(l){return t.skipEmptyLines==="greedy"?l.join("").trim()==="":l.length===1&&l[0].length===0}function D(){return o&&s&&(A("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+u.DefaultDelimiter+"'"),s=!1),t.skipEmptyLines&&(o.data=o.data.filter(function(l){return!z(l)})),F()&&function(){if(!o)return;function l(E,P){y(t.transformHeader)&&(E=t.transformHeader(E,P)),N.push(E)}if(Array.isArray(o.data[0])){for(var v=0;F()&&v<o.data.length;v++)o.data[v].forEach(l);o.data.splice(0,1)}else o.data.forEach(l)}(),function(){if(!o||!t.header&&!t.dynamicTyping&&!t.transform)return o;function l(E,P){var b,q=t.header?{}:[];for(b=0;b<E.length;b++){var I=b,k=E[b];t.header&&(I=b>=N.length?"__parsed_extra":N[b]),t.transform&&(k=t.transform(k,I)),k=O(I,k),I==="__parsed_extra"?(q[I]=q[I]||[],q[I].push(k)):q[I]=k}return t.header&&(b>N.length?A("FieldMismatch","TooManyFields","Too many fields: expected "+N.length+" fields but parsed "+b,x+P):b<N.length&&A("FieldMismatch","TooFewFields","Too few fields: expected "+N.length+" fields but parsed "+b,x+P)),q}var v=1;return!o.data.length||Array.isArray(o.data[0])?(o.data=o.data.map(l),v=o.data.length):o.data=l(o.data,0),t.header&&o.meta&&(o.meta.fields=N),x+=v,o}()}function F(){return t.header&&N.length===0}function O(l,v){return E=l,t.dynamicTypingFunction&&t.dynamicTyping[E]===void 0&&(t.dynamicTyping[E]=t.dynamicTypingFunction(E)),(t.dynamicTyping[E]||t.dynamicTyping)===!0?v==="true"||v==="TRUE"||v!=="false"&&v!=="FALSE"&&(function(P){if(g.test(P)){var b=parseFloat(P);if(p<b&&b<h)return!0}return!1}(v)?parseFloat(v):L.test(v)?new Date(v):v===""?null:v):v;var E}function A(l,v,E,P){var b={type:l,code:v,message:E};P!==void 0&&(b.row=P),o.errors.push(b)}this.parse=function(l,v,E){var P=t.quoteChar||'"';if(t.newline||(t.newline=function(I,k){I=I.substring(0,1048576);var $=new RegExp(pe(k)+"([^]*?)"+pe(k),"gm"),W=(I=I.replace($,"")).split("\r"),G=I.split(`
`),Y=1<G.length&&G[0].length<W[0].length;if(W.length===1||Y)return`
`;for(var K=0,S=0;S<W.length;S++)W[S][0]===`
`&&K++;return K>=W.length/2?`\r
`:"\r"}(l,P)),s=!1,t.delimiter)y(t.delimiter)&&(t.delimiter=t.delimiter(l),o.meta.delimiter=t.delimiter);else{var b=function(I,k,$,W,G){var Y,K,S,R;G=G||[",","	","|",";",u.RECORD_SEP,u.UNIT_SEP];for(var ne=0;ne<G.length;ne++){var C=G[ne],le=0,X=0,se=0;S=void 0;for(var re=new we({comments:W,delimiter:C,newline:k,preview:10}).parse(I),ae=0;ae<re.data.length;ae++)if($&&z(re.data[ae]))se++;else{var ie=re.data[ae].length;X+=ie,S!==void 0?0<ie&&(le+=Math.abs(ie-S),S=ie):S=ie}0<re.data.length&&(X/=re.data.length-se),(K===void 0||le<=K)&&(R===void 0||R<X)&&1.99<X&&(K=le,Y=C,R=X)}return{successful:!!(t.delimiter=Y),bestDelimiter:Y}}(l,t.newline,t.skipEmptyLines,t.comments,t.delimitersToGuess);b.successful?t.delimiter=b.bestDelimiter:(s=!0,t.delimiter=u.DefaultDelimiter),o.meta.delimiter=t.delimiter}var q=Ee(t);return t.preview&&t.header&&q.preview++,e=l,i=new we(q),o=i.parse(e,v,E),D(),f?{meta:{paused:!0}}:o||{meta:{paused:!1}}},this.paused=function(){return f},this.pause=function(){f=!0,i.abort(),e=y(t.chunk)?"":e.substring(i.getCharIndex())},this.resume=function(){T.streamer._halted?(f=!1,T.streamer.parseChunk(e,!0)):setTimeout(T.resume,3)},this.aborted=function(){return Q},this.abort=function(){Q=!0,i.abort(),o.meta.aborted=!0,y(t.complete)&&t.complete(o),e=""}}function pe(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function we(t){var e,i=(t=t||{}).delimiter,s=t.newline,h=t.comments,p=t.step,g=t.preview,L=t.fastMode,T=e=t.quoteChar===void 0||t.quoteChar===null?'"':t.quoteChar;if(t.escapeChar!==void 0&&(T=t.escapeChar),(typeof i!="string"||-1<u.BAD_DELIMITERS.indexOf(i))&&(i=","),h===i)throw new Error("Comment character same as delimiter");h===!0?h="#":(typeof h!="string"||-1<u.BAD_DELIMITERS.indexOf(h))&&(h=!1),s!==`
`&&s!=="\r"&&s!==`\r
`&&(s=`
`);var d=0,x=!1;this.parse=function(f,Q,N){if(typeof f!="string")throw new Error("Input must be a string");var o=f.length,w=i.length,z=s.length,D=h.length,F=y(p),O=[],A=[],l=[],v=d=0;if(!f)return H();if(t.header&&!Q){var E=f.split(s)[0].split(i),P=[],b={},q=!1;for(var I in E){var k=E[I];y(t.transformHeader)&&(k=t.transformHeader(k,I));var $=k,W=b[k]||0;for(0<W&&(q=!0,$=k+"_"+W),b[k]=W+1;P.includes($);)$=$+"_"+W;P.push($)}if(q){var G=f.split(s);G[0]=P.join(i),f=G.join(s)}}if(L||L!==!1&&f.indexOf(e)===-1){for(var Y=f.split(s),K=0;K<Y.length;K++){if(l=Y[K],d+=l.length,K!==Y.length-1)d+=s.length;else if(N)return H();if(!h||l.substring(0,D)!==h){if(F){if(O=[],se(l.split(i)),Ce(),x)return H()}else se(l.split(i));if(g&&g<=K)return O=O.slice(0,g),H(!0)}}return H()}for(var S=f.indexOf(i,d),R=f.indexOf(s,d),ne=new RegExp(pe(T)+pe(e),"g"),C=f.indexOf(e,d);;)if(f[d]!==e)if(h&&l.length===0&&f.substring(d,d+D)===h){if(R===-1)return H();d=R+z,R=f.indexOf(s,d),S=f.indexOf(i,d)}else if(S!==-1&&(S<R||R===-1))l.push(f.substring(d,S)),d=S+w,S=f.indexOf(i,d);else{if(R===-1)break;if(l.push(f.substring(d,R)),ie(R+z),F&&(Ce(),x))return H();if(g&&O.length>=g)return H(!0)}else for(C=d,d++;;){if((C=f.indexOf(e,C+1))===-1)return N||A.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:O.length,index:d}),ae();if(C===o-1)return ae(f.substring(d,C).replace(ne,e));if(e!==T||f[C+1]!==T){if(e===T||C===0||f[C-1]!==T){S!==-1&&S<C+1&&(S=f.indexOf(i,C+1)),R!==-1&&R<C+1&&(R=f.indexOf(s,C+1));var le=re(R===-1?S:Math.min(S,R));if(f.substr(C+1+le,w)===i){l.push(f.substring(d,C).replace(ne,e)),f[d=C+1+le+w]!==e&&(C=f.indexOf(e,d)),S=f.indexOf(i,d),R=f.indexOf(s,d);break}var X=re(R);if(f.substring(C+1+X,C+1+X+z)===s){if(l.push(f.substring(d,C).replace(ne,e)),ie(C+1+X+z),S=f.indexOf(i,d),C=f.indexOf(e,d),F&&(Ce(),x))return H();if(g&&O.length>=g)return H(!0);break}A.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:O.length,index:d}),C++}}else C++}return ae();function se(j){O.push(j),v=d}function re(j){var Oe=0;if(j!==-1){var Se=f.substring(C+1,j);Se&&Se.trim()===""&&(Oe=Se.length)}return Oe}function ae(j){return N||(j===void 0&&(j=f.substring(d)),l.push(j),d=o,se(l),F&&Ce()),H()}function ie(j){d=j,se(l),l=[],R=f.indexOf(s,d)}function H(j){return{data:O,errors:A,meta:{delimiter:i,linebreak:s,aborted:x,truncated:!!j,cursor:v+(Q||0)}}}function Ce(){p(H()),O=[],A=[]}},this.abort=function(){x=!0},this.getCharIndex=function(){return d}}function Ze(t){var e=t.data,i=m[e.workerId],s=!1;if(e.error)i.userError(e.error,e.file);else if(e.results&&e.results.data){var h={abort:function(){s=!0,Re(e.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:Pe,resume:Pe};if(y(i.userStep)){for(var p=0;p<e.results.data.length&&(i.userStep({data:e.results.data[p],errors:e.results.errors,meta:e.results.meta},h),!s);p++);delete e.results}else y(i.userChunk)&&(i.userChunk(e.results,h,e.file),delete e.results)}e.finished&&!s&&Re(e.workerId,e.results)}function Re(t,e){var i=m[t];y(i.userComplete)&&i.userComplete(e),i.terminate(),delete m[t]}function Pe(){throw new Error("Not implemented.")}function Ee(t){if(typeof t!="object"||t===null)return t;var e=Array.isArray(t)?[]:{};for(var i in t)e[i]=Ee(t[i]);return e}function te(t,e){return function(){t.apply(e,arguments)}}function y(t){return typeof t=="function"}return c&&(r.onmessage=function(t){var e=t.data;if(u.WORKER_ID===void 0&&e&&(u.WORKER_ID=e.workerId),typeof e.input=="string")r.postMessage({workerId:u.WORKER_ID,results:u.parse(e.input,e.config),finished:!0});else if(r.File&&e.input instanceof File||e.input instanceof Object){var i=u.parse(e.input,e.config);i&&r.postMessage({workerId:u.WORKER_ID,results:i,finished:!0})}}),(J.prototype=Object.create(_.prototype)).constructor=J,(de.prototype=Object.create(_.prototype)).constructor=de,(ee.prototype=Object.create(ee.prototype)).constructor=ee,(_e.prototype=Object.create(_.prototype)).constructor=_e,u})});var lt={};nt(lt,{default:()=>he});module.exports=ot(lt);var Ge=require("obsidian");var V=class extends Error{constructor(r){super(r)}};var be=class{constructor(r){this.exportService=r}getAll(){return U(this,null,function*(){return yield this.exportService.getData()})}recordUsage(r){return U(this,null,function*(){var m;let c=(yield this.exportService.getData()).find(M=>M.char===r);if(c==null)throw new V(`No character '${r}' exists.`);c.useCount=((m=c.useCount)!=null?m:0)+1,c.lastUsed=new Date().valueOf(),yield this.exportService.exportChar(c)})}};var ze=require("obsidian");function ce(n,r){return n==r?0:n<r?-1:1}function ve(n){switch(n){case-1:return 1;case 1:return-1;default:return 0}}var ct={command:"\u21B5",purpose:"to insert selected character"},ut={command:"esc",purpose:"to dismiss"},ht={cls:"icon inline-description recent",text:"\u21A9",title:"used recently"},dt={cls:"icon inline-description frequent",text:"\u21BA",title:"used frequently"},ue=class extends ze.FuzzySuggestModal{constructor(a,c,m,M){super(a);this.editor=c;this.statTrackedStorage=M;super.setInstructions([ct,ut]),this.characters=m.getCharacters(),this.topLastUsed=ue.getMostRecentUsages(this.characters),this.averageUsageCount=ue.getAverageUseCount(this.characters),this.setRandomPlaceholder()}getItemText(a){return a.name}renderSuggestion(a,c){let m=a.item,M=c.createDiv({cls:"plugin obsidian-unicode-search result-item"});M.createDiv({cls:"character-preview"}).createSpan({text:m.char});let u=M.createDiv({cls:"character-name"}),B=M.createDiv({cls:"detail"}),_=m.pinned!=null,J=m.lastUsed!=null&&this.topLastUsed.contains(m.lastUsed)&&!_,de=m.useCount!=null&&m.useCount>this.averageUsageCount,ee=B.createDiv({cls:"attributes"});J&&ee.createDiv(ht),de&&ee.createDiv(dt),super.renderSuggestion(a,u)}getItems(){return this.characters}onChooseItem(a,c){this.editor.replaceSelection(a.char),this.statTrackedStorage.recordUsage(a.char).then(void 0,m=>console.error(m))}onNoSuggestion(){this.setRandomPlaceholder()}setRandomPlaceholder(){let a=`Unicode search: ${this.getRandomCharacter().name}`;super.setPlaceholder(a)}getRandomCharacter(){let a=this.characters,c=Math.floor(Math.random()*a.length);return a[c]}static getMostRecentUsages(a){return a.map(c=>c.lastUsed).filter(c=>c!=null).map(c=>c).sort((c,m)=>ve(ce(c,m))).slice(0,3)}static getAverageUseCount(a){let c=a.map(u=>u.useCount).filter(u=>u!=null).map(u=>u),m=c.length;return m==0?0:c.reduce((u,B)=>u+B,0)/m}};function fe(n,r,a){return n==null&&r==null?0:n!=null&&r!=null?a(n,r):n==null?1:-1}function qe(n,r){return fe(n.pinned,r.pinned,(a,c)=>ce(a,c))}function Be(n,r){let a=fe(n.lastUsed,r.lastUsed,(c,m)=>ve(ce(c,m)));return a!=0?a:ve(ce(n.useCount,r.useCount))}function We(n,r){return n.name<r.name?-1:n.name>r.name?1:0}function Ke(n,r){let a=qe(n,r);return a!=0||(a=fe(n,r,(c,m)=>Be(c,m)),a!=0)?a:We(n,r)}function He(n){return"initialized"in n&&"version"in n}function je(n){return"meta"in n&&"data"in n&&He(n.meta)}var Te={meta:{initialized:!1,version:"0.4.0"},data:[]},ke=class{constructor(r){this.plugin=r;this.getData().then()}exportData(r){return U(this,null,function*(){return(yield this.saveDataToStorage({data:r})).data})}exportChar(r){return U(this,null,function*(){return yield this.saveCharToStorage(r)})}getData(){return U(this,null,function*(){return(yield this.getFromStorage()).data})}getCharacters(){var a,c;return((c=(a=this._store)==null?void 0:a.data)!=null?c:[]).sort(Ke)}isInitialized(){return U(this,null,function*(){let a=(yield this.getFromStorage()).meta;return a.initialized&&a.version===Te.meta.version})}setAsInitialized(){return U(this,null,function*(){let r=yield this.getFromStorage();yield this.saveDataToStorage({meta:ye(oe(oe({},r.meta),Te.meta),{initialized:!0})})})}getFromStorage(){return U(this,null,function*(){return this._store==null&&(this._store=yield this._loadTheData()),this._store})}saveDataToStorage(r){return U(this,null,function*(){let a=yield this.getFromStorage(),c=oe(oe({},a),r);return yield this.plugin.saveData(c),this._store=c,this._store})}saveCharToStorage(r){return U(this,null,function*(){let a=(yield this.getData()).find(c=>c.char===r.char);if(a==null)throw new V(`Cannot save non-existent character '${r.char}' to storage`);return Object.assign(a,r),yield this.plugin.saveData(this._store),a})}_loadTheData(){return U(this,null,function*(){let r=yield this.plugin.loadData(),a=r!=null&&je(r),c=a?r:Te;if(c==null)throw new V("Cannot import plugin data. The file is not valid!");return a||(yield this.plugin.saveData(c)),c})}};var $e=require("obsidian"),Je=st(Qe());var Z=class{constructor(){this.config={delimiter:";",header:!1,transformHeader:void 0,dynamicTyping:!1,fastMode:!0}}fetchCharacters(){return U(this,null,function*(){let r=yield(0,$e.request)("https://www.unicode.org/Public/UCD/latest/ucd/UnicodeData.txt");return yield this.transformToCharacters(r)})}transformToCharacters(r){return new Promise((a,c)=>{let m=u=>{u.errors.length!==0&&c(new V("Error while parsing data from Unicode Character Database"));let B=u.data.map(_=>({singleCodePoint:_[0],characterName:_[1],generalCategory:_[2]})).filter(_=>Z.charFilter(_)).map(_=>Z.intoUnicode(_));a(B)},M=ye(oe({},this.config),{worker:!0,complete:u=>m(u)});(0,Je.parse)(r,M)})}static charFilter(r){return Z.planeIncluded(r)&&!Z.categoryExcluded(r)&&!Z.nameIsLabelInfo(r)}static planeIncluded(r){return parseInt(r.singleCodePoint,16)<=65535}static categoryExcluded(r){return r.generalCategory.startsWith("C")||r.generalCategory.startsWith("M")}static nameIsLabelInfo(r){return r.characterName.startsWith("<")&&r.characterName.endsWith(">")}static intoUnicode(r){return{char:String.fromCodePoint(parseInt(r.singleCodePoint,16)),name:r.characterName.toLowerCase()}}};var he=class extends Ge.Plugin{constructor(a,c){super(a,c)}onload(){return U(this,null,function*(){let a=new ke(this),c=new be(a);this.services={dataService:a,usageTrackedStorage:c},yield he.initializeData(a,new Z),Ne(he.prototype,this,"addCommand").call(this,{id:"search-unicode-chars",name:"Search Unicode characters",editorCallback:m=>(new ue(app,m,a,c).open(),!0)})})}static initializeData(a,c){return U(this,null,function*(){if(yield a.isInitialized())return;let M=yield c.fetchCharacters();yield a.exportData(M),yield a.setAsInitialized()})}};
/*! Bundled license information:

papaparse/papaparse.min.js:
  (* @license
  Papa Parse
  v5.4.1
  https://github.com/mholt/PapaParse
  License: MIT
  *)
*/
