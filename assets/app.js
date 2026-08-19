function Qv(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var sh={exports:{}},wo={};var U_;function YS(){if(U_)return wo;U_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:f,ref:l!==void 0?l:null,props:c}}return wo.Fragment=t,wo.jsx=i,wo.jsxs=i,wo}var L_;function ZS(){return L_||(L_=1,sh.exports=YS()),sh.exports}var Xt=ZS(),oh={exports:{}},re={};var N_;function jS(){if(N_)return re;N_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),S=Symbol.iterator;function y(N){return N===null||typeof N!="object"?null:(N=S&&N[S]||N["@@iterator"],typeof N=="function"?N:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,M={};function v(N,nt,Mt){this.props=N,this.context=nt,this.refs=M,this.updater=Mt||E}v.prototype.isReactComponent={},v.prototype.setState=function(N,nt){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,nt,"setState")},v.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function z(){}z.prototype=v.prototype;function U(N,nt,Mt){this.props=N,this.context=nt,this.refs=M,this.updater=Mt||E}var C=U.prototype=new z;C.constructor=U,A(C,v.prototype),C.isPureReactComponent=!0;var G=Array.isArray;function X(){}var B={H:null,A:null,T:null,S:null},j=Object.prototype.hasOwnProperty;function D(N,nt,Mt){var At=Mt.ref;return{$$typeof:s,type:N,key:nt,ref:At!==void 0?At:null,props:Mt}}function w(N,nt){return D(N.type,nt,N.props)}function F(N){return typeof N=="object"&&N!==null&&N.$$typeof===s}function ct(N){var nt={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(Mt){return nt[Mt]})}var st=/\/+/g;function ft(N,nt){return typeof N=="object"&&N!==null&&N.key!=null?ct(""+N.key):nt.toString(36)}function pt(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(X,X):(N.status="pending",N.then(function(nt){N.status==="pending"&&(N.status="fulfilled",N.value=nt)},function(nt){N.status==="pending"&&(N.status="rejected",N.reason=nt)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function O(N,nt,Mt,At,Q){var _t=typeof N;(_t==="undefined"||_t==="boolean")&&(N=null);var gt=!1;if(N===null)gt=!0;else switch(_t){case"bigint":case"string":case"number":gt=!0;break;case"object":switch(N.$$typeof){case s:case t:gt=!0;break;case g:return gt=N._init,O(gt(N._payload),nt,Mt,At,Q)}}if(gt)return Q=Q(N),gt=At===""?"."+ft(N,0):At,G(Q)?(Mt="",gt!=null&&(Mt=gt.replace(st,"$&/")+"/"),O(Q,nt,Mt,"",function(ne){return ne})):Q!=null&&(F(Q)&&(Q=w(Q,Mt+(Q.key==null||N&&N.key===Q.key?"":(""+Q.key).replace(st,"$&/")+"/")+gt)),nt.push(Q)),1;gt=0;var It=At===""?".":At+":";if(G(N))for(var Ot=0;Ot<N.length;Ot++)At=N[Ot],_t=It+ft(At,Ot),gt+=O(At,nt,Mt,_t,Q);else if(Ot=y(N),typeof Ot=="function")for(N=Ot.call(N),Ot=0;!(At=N.next()).done;)At=At.value,_t=It+ft(At,Ot++),gt+=O(At,nt,Mt,_t,Q);else if(_t==="object"){if(typeof N.then=="function")return O(pt(N),nt,Mt,At,Q);throw nt=String(N),Error("Objects are not valid as a React child (found: "+(nt==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":nt)+"). If you meant to render a collection of children, use an array instead.")}return gt}function Z(N,nt,Mt){if(N==null)return N;var At=[],Q=0;return O(N,At,"","",function(_t){return nt.call(Mt,_t,Q++)}),At}function Y(N){if(N._status===-1){var nt=N._result;nt=nt(),nt.then(function(Mt){(N._status===0||N._status===-1)&&(N._status=1,N._result=Mt)},function(Mt){(N._status===0||N._status===-1)&&(N._status=2,N._result=Mt)}),N._status===-1&&(N._status=0,N._result=nt)}if(N._status===1)return N._result.default;throw N._result}var xt=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var nt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(nt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},Et={map:Z,forEach:function(N,nt,Mt){Z(N,function(){nt.apply(this,arguments)},Mt)},count:function(N){var nt=0;return Z(N,function(){nt++}),nt},toArray:function(N){return Z(N,function(nt){return nt})||[]},only:function(N){if(!F(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return re.Activity=_,re.Children=Et,re.Component=v,re.Fragment=i,re.Profiler=l,re.PureComponent=U,re.StrictMode=r,re.Suspense=m,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,re.__COMPILER_RUNTIME={__proto__:null,c:function(N){return B.H.useMemoCache(N)}},re.cache=function(N){return function(){return N.apply(null,arguments)}},re.cacheSignal=function(){return null},re.cloneElement=function(N,nt,Mt){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var At=A({},N.props),Q=N.key;if(nt!=null)for(_t in nt.key!==void 0&&(Q=""+nt.key),nt)!j.call(nt,_t)||_t==="key"||_t==="__self"||_t==="__source"||_t==="ref"&&nt.ref===void 0||(At[_t]=nt[_t]);var _t=arguments.length-2;if(_t===1)At.children=Mt;else if(1<_t){for(var gt=Array(_t),It=0;It<_t;It++)gt[It]=arguments[It+2];At.children=gt}return D(N.type,Q,At)},re.createContext=function(N){return N={$$typeof:f,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:c,_context:N},N},re.createElement=function(N,nt,Mt){var At,Q={},_t=null;if(nt!=null)for(At in nt.key!==void 0&&(_t=""+nt.key),nt)j.call(nt,At)&&At!=="key"&&At!=="__self"&&At!=="__source"&&(Q[At]=nt[At]);var gt=arguments.length-2;if(gt===1)Q.children=Mt;else if(1<gt){for(var It=Array(gt),Ot=0;Ot<gt;Ot++)It[Ot]=arguments[Ot+2];Q.children=It}if(N&&N.defaultProps)for(At in gt=N.defaultProps,gt)Q[At]===void 0&&(Q[At]=gt[At]);return D(N,_t,Q)},re.createRef=function(){return{current:null}},re.forwardRef=function(N){return{$$typeof:d,render:N}},re.isValidElement=F,re.lazy=function(N){return{$$typeof:g,_payload:{_status:-1,_result:N},_init:Y}},re.memo=function(N,nt){return{$$typeof:p,type:N,compare:nt===void 0?null:nt}},re.startTransition=function(N){var nt=B.T,Mt={};B.T=Mt;try{var At=N(),Q=B.S;Q!==null&&Q(Mt,At),typeof At=="object"&&At!==null&&typeof At.then=="function"&&At.then(X,xt)}catch(_t){xt(_t)}finally{nt!==null&&Mt.types!==null&&(nt.types=Mt.types),B.T=nt}},re.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},re.use=function(N){return B.H.use(N)},re.useActionState=function(N,nt,Mt){return B.H.useActionState(N,nt,Mt)},re.useCallback=function(N,nt){return B.H.useCallback(N,nt)},re.useContext=function(N){return B.H.useContext(N)},re.useDebugValue=function(){},re.useDeferredValue=function(N,nt){return B.H.useDeferredValue(N,nt)},re.useEffect=function(N,nt){return B.H.useEffect(N,nt)},re.useEffectEvent=function(N){return B.H.useEffectEvent(N)},re.useId=function(){return B.H.useId()},re.useImperativeHandle=function(N,nt,Mt){return B.H.useImperativeHandle(N,nt,Mt)},re.useInsertionEffect=function(N,nt){return B.H.useInsertionEffect(N,nt)},re.useLayoutEffect=function(N,nt){return B.H.useLayoutEffect(N,nt)},re.useMemo=function(N,nt){return B.H.useMemo(N,nt)},re.useOptimistic=function(N,nt){return B.H.useOptimistic(N,nt)},re.useReducer=function(N,nt,Mt){return B.H.useReducer(N,nt,Mt)},re.useRef=function(N){return B.H.useRef(N)},re.useState=function(N){return B.H.useState(N)},re.useSyncExternalStore=function(N,nt,Mt){return B.H.useSyncExternalStore(N,nt,Mt)},re.useTransition=function(){return B.H.useTransition()},re.version="19.2.8",re}var O_;function Bd(){return O_||(O_=1,oh.exports=jS()),oh.exports}var Dn=Bd();const KS=Qv(Dn);var lh={exports:{}},Do={},ch={exports:{}},uh={};var P_;function QS(){return P_||(P_=1,(function(s){function t(O,Z){var Y=O.length;O.push(Z);t:for(;0<Y;){var xt=Y-1>>>1,Et=O[xt];if(0<l(Et,Z))O[xt]=Z,O[Y]=Et,Y=xt;else break t}}function i(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var Z=O[0],Y=O.pop();if(Y!==Z){O[0]=Y;t:for(var xt=0,Et=O.length,N=Et>>>1;xt<N;){var nt=2*(xt+1)-1,Mt=O[nt],At=nt+1,Q=O[At];if(0>l(Mt,Y))At<Et&&0>l(Q,Mt)?(O[xt]=Q,O[At]=Y,xt=At):(O[xt]=Mt,O[nt]=Y,xt=nt);else if(At<Et&&0>l(Q,Y))O[xt]=Q,O[At]=Y,xt=At;else break t}}return Z}function l(O,Z){var Y=O.sortIndex-Z.sortIndex;return Y!==0?Y:O.id-Z.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var f=Date,d=f.now();s.unstable_now=function(){return f.now()-d}}var m=[],p=[],g=1,_=null,S=3,y=!1,E=!1,A=!1,M=!1,v=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function C(O){for(var Z=i(p);Z!==null;){if(Z.callback===null)r(p);else if(Z.startTime<=O)r(p),Z.sortIndex=Z.expirationTime,t(m,Z);else break;Z=i(p)}}function G(O){if(A=!1,C(O),!E)if(i(m)!==null)E=!0,X||(X=!0,ct());else{var Z=i(p);Z!==null&&pt(G,Z.startTime-O)}}var X=!1,B=-1,j=5,D=-1;function w(){return M?!0:!(s.unstable_now()-D<j)}function F(){if(M=!1,X){var O=s.unstable_now();D=O;var Z=!0;try{t:{E=!1,A&&(A=!1,z(B),B=-1),y=!0;var Y=S;try{e:{for(C(O),_=i(m);_!==null&&!(_.expirationTime>O&&w());){var xt=_.callback;if(typeof xt=="function"){_.callback=null,S=_.priorityLevel;var Et=xt(_.expirationTime<=O);if(O=s.unstable_now(),typeof Et=="function"){_.callback=Et,C(O),Z=!0;break e}_===i(m)&&r(m),C(O)}else r(m);_=i(m)}if(_!==null)Z=!0;else{var N=i(p);N!==null&&pt(G,N.startTime-O),Z=!1}}break t}finally{_=null,S=Y,y=!1}Z=void 0}}finally{Z?ct():X=!1}}}var ct;if(typeof U=="function")ct=function(){U(F)};else if(typeof MessageChannel<"u"){var st=new MessageChannel,ft=st.port2;st.port1.onmessage=F,ct=function(){ft.postMessage(null)}}else ct=function(){v(F,0)};function pt(O,Z){B=v(function(){O(s.unstable_now())},Z)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(O){O.callback=null},s.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<O?Math.floor(1e3/O):5},s.unstable_getCurrentPriorityLevel=function(){return S},s.unstable_next=function(O){switch(S){case 1:case 2:case 3:var Z=3;break;default:Z=S}var Y=S;S=Z;try{return O()}finally{S=Y}},s.unstable_requestPaint=function(){M=!0},s.unstable_runWithPriority=function(O,Z){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var Y=S;S=O;try{return Z()}finally{S=Y}},s.unstable_scheduleCallback=function(O,Z,Y){var xt=s.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?xt+Y:xt):Y=xt,O){case 1:var Et=-1;break;case 2:Et=250;break;case 5:Et=1073741823;break;case 4:Et=1e4;break;default:Et=5e3}return Et=Y+Et,O={id:g++,callback:Z,priorityLevel:O,startTime:Y,expirationTime:Et,sortIndex:-1},Y>xt?(O.sortIndex=Y,t(p,O),i(m)===null&&O===i(p)&&(A?(z(B),B=-1):A=!0,pt(G,Y-xt))):(O.sortIndex=Et,t(m,O),E||y||(E=!0,X||(X=!0,ct()))),O},s.unstable_shouldYield=w,s.unstable_wrapCallback=function(O){var Z=S;return function(){var Y=S;S=Z;try{return O.apply(this,arguments)}finally{S=Y}}}})(uh)),uh}var z_;function JS(){return z_||(z_=1,ch.exports=QS()),ch.exports}var fh={exports:{}},Rn={};var B_;function $S(){if(B_)return Rn;B_=1;var s=Bd();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:g}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Rn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,g)},Rn.flushSync=function(m){var p=f.T,g=r.p;try{if(f.T=null,r.p=2,m)return m()}finally{f.T=p,r.p=g,r.d.f()}},Rn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Rn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Rn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:S,fetchPriority:y}):g==="script"&&r.d.X(m,{crossOrigin:_,integrity:S,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Rn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Rn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Rn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Rn.requestFormReset=function(m){r.d.r(m)},Rn.unstable_batchedUpdates=function(m,p){return m(p)},Rn.useFormState=function(m,p,g){return f.H.useFormState(m,p,g)},Rn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Rn.version="19.2.8",Rn}var F_;function ty(){if(F_)return fh.exports;F_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),fh.exports=$S(),fh.exports}var I_;function ey(){if(I_)return Do;I_=1;var s=JS(),t=Bd(),i=ty();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(r(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var h=u.alternate;if(h===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===a)return m(u),e;if(h===o)return m(u),n;h=h.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=h;else{for(var x=!1,b=u.child;b;){if(b===a){x=!0,a=u,o=h;break}if(b===o){x=!0,o=u,a=h;break}b=b.sibling}if(!x){for(b=h.child;b;){if(b===a){x=!0,a=h,o=u;break}if(b===o){x=!0,o=h,a=u;break}b=b.sibling}if(!x)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function g(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=g(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,S=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),z=Symbol.for("react.consumer"),U=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),X=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),F=Symbol.iterator;function ct(e){return e===null||typeof e!="object"?null:(e=F&&e[F]||e["@@iterator"],typeof e=="function"?e:null)}var st=Symbol.for("react.client.reference");function ft(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===st?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case A:return"Fragment";case v:return"Profiler";case M:return"StrictMode";case G:return"Suspense";case X:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case U:return e.displayName||"Context";case z:return(e._context.displayName||"Context")+".Consumer";case C:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case B:return n=e.displayName||null,n!==null?n:ft(e.type)||"Memo";case j:n=e._payload,e=e._init;try{return ft(e(n))}catch{}}return null}var pt=Array.isArray,O=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},xt=[],Et=-1;function N(e){return{current:e}}function nt(e){0>Et||(e.current=xt[Et],xt[Et]=null,Et--)}function Mt(e,n){Et++,xt[Et]=e.current,e.current=n}var At=N(null),Q=N(null),_t=N(null),gt=N(null);function It(e,n){switch(Mt(_t,n),Mt(Q,e),Mt(At,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?t_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=t_(n),e=e_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}nt(At),Mt(At,e)}function Ot(){nt(At),nt(Q),nt(_t)}function ne(e){e.memoizedState!==null&&Mt(gt,e);var n=At.current,a=e_(n,e.type);n!==a&&(Mt(Q,e),Mt(At,a))}function Xe(e){Q.current===e&&(nt(At),nt(Q)),gt.current===e&&(nt(gt),bo._currentValue=Y)}var de,I;function Ee(e){if(de===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);de=n&&n[1]||"",I=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+de+e+I}var $t=!1;function ye(e,n){if(!e||$t)return"";$t=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var dt=function(){throw Error()};if(Object.defineProperty(dt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(dt,[])}catch(rt){var et=rt}Reflect.construct(e,[],dt)}else{try{dt.call()}catch(rt){et=rt}e.call(dt.prototype)}}else{try{throw Error()}catch(rt){et=rt}(dt=e())&&typeof dt.catch=="function"&&dt.catch(function(){})}}catch(rt){if(rt&&et&&typeof rt.stack=="string")return[rt.stack,et.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),x=h[0],b=h[1];if(x&&b){var P=x.split(`
`),$=b.split(`
`);for(u=o=0;o<P.length&&!P[o].includes("DetermineComponentFrameRoot");)o++;for(;u<$.length&&!$[u].includes("DetermineComponentFrameRoot");)u++;if(o===P.length||u===$.length)for(o=P.length-1,u=$.length-1;1<=o&&0<=u&&P[o]!==$[u];)u--;for(;1<=o&&0<=u;o--,u--)if(P[o]!==$[u]){if(o!==1||u!==1)do if(o--,u--,0>u||P[o]!==$[u]){var lt=`
`+P[o].replace(" at new "," at ");return e.displayName&&lt.includes("<anonymous>")&&(lt=lt.replace("<anonymous>",e.displayName)),lt}while(1<=o&&0<=u);break}}}finally{$t=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ee(a):""}function jt(e,n){switch(e.tag){case 26:case 27:case 5:return Ee(e.type);case 16:return Ee("Lazy");case 13:return e.child!==n&&n!==null?Ee("Suspense Fallback"):Ee("Suspense");case 19:return Ee("SuspenseList");case 0:case 15:return ye(e.type,!1);case 11:return ye(e.type.render,!1);case 1:return ye(e.type,!0);case 31:return Ee("Activity");default:return""}}function He(e){try{var n="",a=null;do n+=jt(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Bt=Object.prototype.hasOwnProperty,se=s.unstable_scheduleCallback,Qe=s.unstable_cancelCallback,Ze=s.unstable_shouldYield,L=s.unstable_requestPaint,T=s.unstable_now,tt=s.unstable_getCurrentPriorityLevel,ut=s.unstable_ImmediatePriority,St=s.unstable_UserBlockingPriority,ot=s.unstable_NormalPriority,Yt=s.unstable_LowPriority,Rt=s.unstable_IdlePriority,Wt=s.log,qt=s.unstable_setDisableYieldValue,Tt=null,Ct=null;function Zt(e){if(typeof Wt=="function"&&qt(e),Ct&&typeof Ct.setStrictMode=="function")try{Ct.setStrictMode(Tt,e)}catch{}}var Pt=Math.clz32?Math.clz32:V,Dt=Math.log,oe=Math.LN2;function V(e){return e>>>=0,e===0?32:31-(Dt(e)/oe|0)|0}var bt=256,wt=262144,zt=4194304;function yt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function mt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,h=e.suspendedLanes,x=e.pingedLanes;e=e.warmLanes;var b=o&134217727;return b!==0?(o=b&~h,o!==0?u=yt(o):(x&=b,x!==0?u=yt(x):a||(a=b&~e,a!==0&&(u=yt(a))))):(b=o&~h,b!==0?u=yt(b):x!==0?u=yt(x):a||(a=o&~e,a!==0&&(u=yt(a)))),u===0?0:n!==0&&n!==u&&(n&h)===0&&(h=u&-u,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:u}function Ft(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ae(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ne(){var e=zt;return zt<<=1,(zt&62914560)===0&&(zt=4194304),e}function Te(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Un(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ii(e,n,a,o,u,h){var x=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var b=e.entanglements,P=e.expirationTimes,$=e.hiddenUpdates;for(a=x&~a;0<a;){var lt=31-Pt(a),dt=1<<lt;b[lt]=0,P[lt]=-1;var et=$[lt];if(et!==null)for($[lt]=null,lt=0;lt<et.length;lt++){var rt=et[lt];rt!==null&&(rt.lane&=-536870913)}a&=~dt}o!==0&&Fs(e,o,0),h!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=h&~(x&~n))}function Fs(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Pt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Ai(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Pt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function wr(e,n){var a=n&-n;return a=(a&42)!==0?1:Dr(a),(a&(e.suspendedLanes|n))!==0?0:a}function Dr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ur(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ja(){var e=Z.p;return e!==0?e:(e=window.event,e===void 0?32:T_(e.type))}function Is(e,n){var a=Z.p;try{return Z.p=e,n()}finally{Z.p=a}}var qn=Math.random().toString(36).slice(2),sn="__reactFiber$"+qn,Sn="__reactProps$"+qn,da="__reactContainer$"+qn,Hs="__reactEvents$"+qn,$c="__reactListeners$"+qn,tu="__reactHandles$"+qn,tl="__reactResources$"+qn,Ka="__reactMarker$"+qn;function R(e){delete e[sn],delete e[Sn],delete e[Hs],delete e[$c],delete e[tu]}function k(e){var n=e[sn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[da]||a[sn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=l_(e);e!==null;){if(a=e[sn])return a;e=l_(e)}return n}e=a,a=e.parentNode}return null}function it(e){if(e=e[sn]||e[da]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function at(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function W(e){var n=e[tl];return n||(n=e[tl]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function vt(e){e[Ka]=!0}var Ut=new Set,Gt={};function Nt(e,n){Kt(e,n),Kt(e+"Capture",n)}function Kt(e,n){for(Gt[e]=n,e=0;e<n.length;e++)Ut.add(n[e])}var ie=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Qt={},he={};function De(e){return Bt.call(he,e)?!0:Bt.call(Qt,e)?!1:ie.test(e)?he[e]=!0:(Qt[e]=!0,!1)}function Ge(e,n,a){if(De(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Ue(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function pe(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function Vt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ke(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function be(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,h=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(x){a=""+x,h.call(this,x)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function yn(e){if(!e._valueTracker){var n=ke(e)?"checked":"value";e._valueTracker=be(e,n,""+e[n])}}function Fi(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=ke(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function _n(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Qa=/[\n"\\]/g;function ve(e){return e.replace(Qa,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function An(e,n,a,o,u,h,x,b){e.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.type=x:e.removeAttribute("type"),n!=null?x==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Vt(n)):e.value!==""+Vt(n)&&(e.value=""+Vt(n)):x!=="submit"&&x!=="reset"||e.removeAttribute("value"),n!=null?dn(e,x,Vt(n)):a!=null?dn(e,x,Vt(a)):o!=null&&e.removeAttribute("value"),u==null&&h!=null&&(e.defaultChecked=!!h),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+Vt(b):e.removeAttribute("name")}function Ln(e,n,a,o,u,h,x,b){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null)){yn(e);return}a=a!=null?""+Vt(a):"",n=n!=null?""+Vt(n):a,b||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=b?e.checked:!!o,e.defaultChecked=!!o,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(e.name=x),yn(e)}function dn(e,n,a){n==="number"&&_n(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function tn(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+Vt(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Lr(e,n,a){if(n!=null&&(n=""+Vt(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Vt(a):""}function Ri(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(pt(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Vt(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),yn(e)}function Nr(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var V0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Qd(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||V0.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Jd(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Qd(e,u,o)}else for(var h in n)n.hasOwnProperty(h)&&Qd(e,h,n[h])}function eu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var X0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),k0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function el(e){return k0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ii(){}var nu=null;function iu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Or=null,Pr=null;function $d(e){var n=it(e);if(n&&(e=n.stateNode)){var a=e[Sn]||null;t:switch(e=n.stateNode,n.type){case"input":if(An(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ve(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[Sn]||null;if(!u)throw Error(r(90));An(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Fi(o)}break t;case"textarea":Lr(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&tn(e,!!a.multiple,n,!1)}}}var au=!1;function tp(e,n,a){if(au)return e(n,a);au=!0;try{var o=e(n);return o}finally{if(au=!1,(Or!==null||Pr!==null)&&(Vl(),Or&&(n=Or,e=Pr,Pr=Or=null,$d(n),e)))for(n=0;n<e.length;n++)$d(e[n])}}function Gs(e,n){var a=e.stateNode;if(a===null)return null;var o=a[Sn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Hi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ru=!1;if(Hi)try{var Vs={};Object.defineProperty(Vs,"passive",{get:function(){ru=!0}}),window.addEventListener("test",Vs,Vs),window.removeEventListener("test",Vs,Vs)}catch{ru=!1}var pa=null,su=null,nl=null;function ep(){if(nl)return nl;var e,n=su,a=n.length,o,u="value"in pa?pa.value:pa.textContent,h=u.length;for(e=0;e<a&&n[e]===u[e];e++);var x=a-e;for(o=1;o<=x&&n[a-o]===u[h-o];o++);return nl=u.slice(e,1<o?1-o:void 0)}function il(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function al(){return!0}function np(){return!1}function Pn(e){function n(a,o,u,h,x){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=h,this.target=x,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(a=e[b],this[b]=a?a(h):h[b]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?al:np,this.isPropagationStopped=np,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=al)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=al)},persist:function(){},isPersistent:al}),n}var Ja={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rl=Pn(Ja),Xs=_({},Ja,{view:0,detail:0}),W0=Pn(Xs),ou,lu,ks,sl=_({},Xs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:uu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ks&&(ks&&e.type==="mousemove"?(ou=e.screenX-ks.screenX,lu=e.screenY-ks.screenY):lu=ou=0,ks=e),ou)},movementY:function(e){return"movementY"in e?e.movementY:lu}}),ip=Pn(sl),q0=_({},sl,{dataTransfer:0}),Y0=Pn(q0),Z0=_({},Xs,{relatedTarget:0}),cu=Pn(Z0),j0=_({},Ja,{animationName:0,elapsedTime:0,pseudoElement:0}),K0=Pn(j0),Q0=_({},Ja,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),J0=Pn(Q0),$0=_({},Ja,{data:0}),ap=Pn($0),tx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ex={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ix(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=nx[e])?!!n[e]:!1}function uu(){return ix}var ax=_({},Xs,{key:function(e){if(e.key){var n=tx[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=il(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ex[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:uu,charCode:function(e){return e.type==="keypress"?il(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?il(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),rx=Pn(ax),sx=_({},sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rp=Pn(sx),ox=_({},Xs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:uu}),lx=Pn(ox),cx=_({},Ja,{propertyName:0,elapsedTime:0,pseudoElement:0}),ux=Pn(cx),fx=_({},sl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),hx=Pn(fx),dx=_({},Ja,{newState:0,oldState:0}),px=Pn(dx),mx=[9,13,27,32],fu=Hi&&"CompositionEvent"in window,Ws=null;Hi&&"documentMode"in document&&(Ws=document.documentMode);var gx=Hi&&"TextEvent"in window&&!Ws,sp=Hi&&(!fu||Ws&&8<Ws&&11>=Ws),op=" ",lp=!1;function cp(e,n){switch(e){case"keyup":return mx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function up(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var zr=!1;function _x(e,n){switch(e){case"compositionend":return up(n);case"keypress":return n.which!==32?null:(lp=!0,op);case"textInput":return e=n.data,e===op&&lp?null:e;default:return null}}function vx(e,n){if(zr)return e==="compositionend"||!fu&&cp(e,n)?(e=ep(),nl=su=pa=null,zr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return sp&&n.locale!=="ko"?null:n.data;default:return null}}var xx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!xx[e.type]:n==="textarea"}function hp(e,n,a,o){Or?Pr?Pr.push(o):Pr=[o]:Or=o,n=jl(n,"onChange"),0<n.length&&(a=new rl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var qs=null,Ys=null;function Sx(e){Zg(e,0)}function ol(e){var n=at(e);if(Fi(n))return e}function dp(e,n){if(e==="change")return n}var pp=!1;if(Hi){var hu;if(Hi){var du="oninput"in document;if(!du){var mp=document.createElement("div");mp.setAttribute("oninput","return;"),du=typeof mp.oninput=="function"}hu=du}else hu=!1;pp=hu&&(!document.documentMode||9<document.documentMode)}function gp(){qs&&(qs.detachEvent("onpropertychange",_p),Ys=qs=null)}function _p(e){if(e.propertyName==="value"&&ol(Ys)){var n=[];hp(n,Ys,e,iu(e)),tp(Sx,n)}}function yx(e,n,a){e==="focusin"?(gp(),qs=n,Ys=a,qs.attachEvent("onpropertychange",_p)):e==="focusout"&&gp()}function Mx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ol(Ys)}function Ex(e,n){if(e==="click")return ol(n)}function Tx(e,n){if(e==="input"||e==="change")return ol(n)}function bx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Yn=typeof Object.is=="function"?Object.is:bx;function Zs(e,n){if(Yn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Bt.call(n,u)||!Yn(e[u],n[u]))return!1}return!0}function vp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function xp(e,n){var a=vp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=vp(a)}}function Sp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Sp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function yp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=_n(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=_n(e.document)}return n}function pu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Ax=Hi&&"documentMode"in document&&11>=document.documentMode,Br=null,mu=null,js=null,gu=!1;function Mp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;gu||Br==null||Br!==_n(o)||(o=Br,"selectionStart"in o&&pu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),js&&Zs(js,o)||(js=o,o=jl(mu,"onSelect"),0<o.length&&(n=new rl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Br)))}function $a(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Fr={animationend:$a("Animation","AnimationEnd"),animationiteration:$a("Animation","AnimationIteration"),animationstart:$a("Animation","AnimationStart"),transitionrun:$a("Transition","TransitionRun"),transitionstart:$a("Transition","TransitionStart"),transitioncancel:$a("Transition","TransitionCancel"),transitionend:$a("Transition","TransitionEnd")},_u={},Ep={};Hi&&(Ep=document.createElement("div").style,"AnimationEvent"in window||(delete Fr.animationend.animation,delete Fr.animationiteration.animation,delete Fr.animationstart.animation),"TransitionEvent"in window||delete Fr.transitionend.transition);function tr(e){if(_u[e])return _u[e];if(!Fr[e])return e;var n=Fr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Ep)return _u[e]=n[a];return e}var Tp=tr("animationend"),bp=tr("animationiteration"),Ap=tr("animationstart"),Rx=tr("transitionrun"),Cx=tr("transitionstart"),wx=tr("transitioncancel"),Rp=tr("transitionend"),Cp=new Map,vu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");vu.push("scrollEnd");function mi(e,n){Cp.set(e,n),Nt(n,[e])}var ll=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ai=[],Ir=0,xu=0;function cl(){for(var e=Ir,n=xu=Ir=0;n<e;){var a=ai[n];ai[n++]=null;var o=ai[n];ai[n++]=null;var u=ai[n];ai[n++]=null;var h=ai[n];if(ai[n++]=null,o!==null&&u!==null){var x=o.pending;x===null?u.next=u:(u.next=x.next,x.next=u),o.pending=u}h!==0&&wp(a,u,h)}}function ul(e,n,a,o){ai[Ir++]=e,ai[Ir++]=n,ai[Ir++]=a,ai[Ir++]=o,xu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Su(e,n,a,o){return ul(e,n,a,o),fl(e)}function er(e,n){return ul(e,null,null,n),fl(e)}function wp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,h=e.return;h!==null;)h.childLanes|=a,o=h.alternate,o!==null&&(o.childLanes|=a),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(u=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,u&&n!==null&&(u=31-Pt(a),e=h.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),h):null}function fl(e){if(50<vo)throw vo=0,Df=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Hr={};function Dx(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zn(e,n,a,o){return new Dx(e,n,a,o)}function yu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Gi(e,n){var a=e.alternate;return a===null?(a=Zn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Dp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function hl(e,n,a,o,u,h){var x=0;if(o=e,typeof e=="function")yu(e)&&(x=1);else if(typeof e=="string")x=PS(e,a,At.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case D:return e=Zn(31,a,n,u),e.elementType=D,e.lanes=h,e;case A:return nr(a.children,u,h,n);case M:x=8,u|=24;break;case v:return e=Zn(12,a,n,u|2),e.elementType=v,e.lanes=h,e;case G:return e=Zn(13,a,n,u),e.elementType=G,e.lanes=h,e;case X:return e=Zn(19,a,n,u),e.elementType=X,e.lanes=h,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:x=10;break t;case z:x=9;break t;case C:x=11;break t;case B:x=14;break t;case j:x=16,o=null;break t}x=29,a=Error(r(130,e===null?"null":typeof e,"")),o=null}return n=Zn(x,a,n,u),n.elementType=e,n.type=o,n.lanes=h,n}function nr(e,n,a,o){return e=Zn(7,e,o,n),e.lanes=a,e}function Mu(e,n,a){return e=Zn(6,e,null,n),e.lanes=a,e}function Up(e){var n=Zn(18,null,null,0);return n.stateNode=e,n}function Eu(e,n,a){return n=Zn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Lp=new WeakMap;function ri(e,n){if(typeof e=="object"&&e!==null){var a=Lp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:He(n)},Lp.set(e,n),n)}return{value:e,source:n,stack:He(n)}}var Gr=[],Vr=0,dl=null,Ks=0,si=[],oi=0,ma=null,Ci=1,wi="";function Vi(e,n){Gr[Vr++]=Ks,Gr[Vr++]=dl,dl=e,Ks=n}function Np(e,n,a){si[oi++]=Ci,si[oi++]=wi,si[oi++]=ma,ma=e;var o=Ci;e=wi;var u=32-Pt(o)-1;o&=~(1<<u),a+=1;var h=32-Pt(n)+u;if(30<h){var x=u-u%5;h=(o&(1<<x)-1).toString(32),o>>=x,u-=x,Ci=1<<32-Pt(n)+u|a<<u|o,wi=h+e}else Ci=1<<h|a<<u|o,wi=e}function Tu(e){e.return!==null&&(Vi(e,1),Np(e,1,0))}function bu(e){for(;e===dl;)dl=Gr[--Vr],Gr[Vr]=null,Ks=Gr[--Vr],Gr[Vr]=null;for(;e===ma;)ma=si[--oi],si[oi]=null,wi=si[--oi],si[oi]=null,Ci=si[--oi],si[oi]=null}function Op(e,n){si[oi++]=Ci,si[oi++]=wi,si[oi++]=ma,Ci=n.id,wi=n.overflow,ma=e}var Mn=null,We=null,Me=!1,ga=null,li=!1,Au=Error(r(519));function _a(e){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Qs(ri(n,e)),Au}function Pp(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[sn]=e,n[Sn]=o,a){case"dialog":ge("cancel",n),ge("close",n);break;case"iframe":case"object":case"embed":ge("load",n);break;case"video":case"audio":for(a=0;a<So.length;a++)ge(So[a],n);break;case"source":ge("error",n);break;case"img":case"image":case"link":ge("error",n),ge("load",n);break;case"details":ge("toggle",n);break;case"input":ge("invalid",n),Ln(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":ge("invalid",n);break;case"textarea":ge("invalid",n),Ri(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Jg(n.textContent,a)?(o.popover!=null&&(ge("beforetoggle",n),ge("toggle",n)),o.onScroll!=null&&ge("scroll",n),o.onScrollEnd!=null&&ge("scrollend",n),o.onClick!=null&&(n.onclick=Ii),n=!0):n=!1,n||_a(e,!0)}function zp(e){for(Mn=e.return;Mn;)switch(Mn.tag){case 5:case 31:case 13:li=!1;return;case 27:case 3:li=!0;return;default:Mn=Mn.return}}function Xr(e){if(e!==Mn)return!1;if(!Me)return zp(e),Me=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Wf(e.type,e.memoizedProps)),a=!a),a&&We&&_a(e),zp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));We=o_(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));We=o_(e)}else n===27?(n=We,Ua(e.type)?(e=Kf,Kf=null,We=e):We=n):We=Mn?ui(e.stateNode.nextSibling):null;return!0}function ir(){We=Mn=null,Me=!1}function Ru(){var e=ga;return e!==null&&(In===null?In=e:In.push.apply(In,e),ga=null),e}function Qs(e){ga===null?ga=[e]:ga.push(e)}var Cu=N(null),ar=null,Xi=null;function va(e,n,a){Mt(Cu,n._currentValue),n._currentValue=a}function ki(e){e._currentValue=Cu.current,nt(Cu)}function wu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Du(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var h=u.dependencies;if(h!==null){var x=u.child;h=h.firstContext;t:for(;h!==null;){var b=h;h=u;for(var P=0;P<n.length;P++)if(b.context===n[P]){h.lanes|=a,b=h.alternate,b!==null&&(b.lanes|=a),wu(h.return,a,e),o||(x=null);break t}h=b.next}}else if(u.tag===18){if(x=u.return,x===null)throw Error(r(341));x.lanes|=a,h=x.alternate,h!==null&&(h.lanes|=a),wu(x,a,e),x=null}else x=u.child;if(x!==null)x.return=u;else for(x=u;x!==null;){if(x===e){x=null;break}if(u=x.sibling,u!==null){u.return=x.return,x=u;break}x=x.return}u=x}}function kr(e,n,a,o){e=null;for(var u=n,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var x=u.alternate;if(x===null)throw Error(r(387));if(x=x.memoizedProps,x!==null){var b=u.type;Yn(u.pendingProps.value,x.value)||(e!==null?e.push(b):e=[b])}}else if(u===gt.current){if(x=u.alternate,x===null)throw Error(r(387));x.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(bo):e=[bo])}u=u.return}e!==null&&Du(n,e,a,o),n.flags|=262144}function pl(e){for(e=e.firstContext;e!==null;){if(!Yn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function rr(e){ar=e,Xi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function En(e){return Bp(ar,e)}function ml(e,n){return ar===null&&rr(e),Bp(e,n)}function Bp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Xi===null){if(e===null)throw Error(r(308));Xi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Xi=Xi.next=n;return a}var Ux=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Lx=s.unstable_scheduleCallback,Nx=s.unstable_NormalPriority,on={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Uu(){return{controller:new Ux,data:new Map,refCount:0}}function Js(e){e.refCount--,e.refCount===0&&Lx(Nx,function(){e.controller.abort()})}var $s=null,Lu=0,Wr=0,qr=null;function Ox(e,n){if($s===null){var a=$s=[];Lu=0,Wr=zf(),qr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Lu++,n.then(Fp,Fp),n}function Fp(){if(--Lu===0&&$s!==null){qr!==null&&(qr.status="fulfilled");var e=$s;$s=null,Wr=0,qr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Px(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Ip=O.S;O.S=function(e,n){Mg=T(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Ox(e,n),Ip!==null&&Ip(e,n)};var sr=N(null);function Nu(){var e=sr.current;return e!==null?e:Ve.pooledCache}function gl(e,n){n===null?Mt(sr,sr.current):Mt(sr,n.pool)}function Hp(){var e=Nu();return e===null?null:{parent:on._currentValue,pool:e}}var Yr=Error(r(460)),Ou=Error(r(474)),_l=Error(r(542)),vl={then:function(){}};function Gp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Vp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Ii,Ii),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,kp(e),e;default:if(typeof n.status=="string")n.then(Ii,Ii);else{if(e=Ve,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,kp(e),e}throw lr=n,Yr}}function or(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(lr=a,Yr):a}}var lr=null;function Xp(){if(lr===null)throw Error(r(459));var e=lr;return lr=null,e}function kp(e){if(e===Yr||e===_l)throw Error(r(483))}var Zr=null,to=0;function xl(e){var n=to;return to+=1,Zr===null&&(Zr=[]),Vp(Zr,e,n)}function eo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Sl(e,n){throw n.$$typeof===S?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Wp(e){function n(q,H){if(e){var J=q.deletions;J===null?(q.deletions=[H],q.flags|=16):J.push(H)}}function a(q,H){if(!e)return null;for(;H!==null;)n(q,H),H=H.sibling;return null}function o(q){for(var H=new Map;q!==null;)q.key!==null?H.set(q.key,q):H.set(q.index,q),q=q.sibling;return H}function u(q,H){return q=Gi(q,H),q.index=0,q.sibling=null,q}function h(q,H,J){return q.index=J,e?(J=q.alternate,J!==null?(J=J.index,J<H?(q.flags|=67108866,H):J):(q.flags|=67108866,H)):(q.flags|=1048576,H)}function x(q){return e&&q.alternate===null&&(q.flags|=67108866),q}function b(q,H,J,ht){return H===null||H.tag!==6?(H=Mu(J,q.mode,ht),H.return=q,H):(H=u(H,J),H.return=q,H)}function P(q,H,J,ht){var te=J.type;return te===A?lt(q,H,J.props.children,ht,J.key):H!==null&&(H.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===j&&or(te)===H.type)?(H=u(H,J.props),eo(H,J),H.return=q,H):(H=hl(J.type,J.key,J.props,null,q.mode,ht),eo(H,J),H.return=q,H)}function $(q,H,J,ht){return H===null||H.tag!==4||H.stateNode.containerInfo!==J.containerInfo||H.stateNode.implementation!==J.implementation?(H=Eu(J,q.mode,ht),H.return=q,H):(H=u(H,J.children||[]),H.return=q,H)}function lt(q,H,J,ht,te){return H===null||H.tag!==7?(H=nr(J,q.mode,ht,te),H.return=q,H):(H=u(H,J),H.return=q,H)}function dt(q,H,J){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return H=Mu(""+H,q.mode,J),H.return=q,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case y:return J=hl(H.type,H.key,H.props,null,q.mode,J),eo(J,H),J.return=q,J;case E:return H=Eu(H,q.mode,J),H.return=q,H;case j:return H=or(H),dt(q,H,J)}if(pt(H)||ct(H))return H=nr(H,q.mode,J,null),H.return=q,H;if(typeof H.then=="function")return dt(q,xl(H),J);if(H.$$typeof===U)return dt(q,ml(q,H),J);Sl(q,H)}return null}function et(q,H,J,ht){var te=H!==null?H.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return te!==null?null:b(q,H,""+J,ht);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case y:return J.key===te?P(q,H,J,ht):null;case E:return J.key===te?$(q,H,J,ht):null;case j:return J=or(J),et(q,H,J,ht)}if(pt(J)||ct(J))return te!==null?null:lt(q,H,J,ht,null);if(typeof J.then=="function")return et(q,H,xl(J),ht);if(J.$$typeof===U)return et(q,H,ml(q,J),ht);Sl(q,J)}return null}function rt(q,H,J,ht,te){if(typeof ht=="string"&&ht!==""||typeof ht=="number"||typeof ht=="bigint")return q=q.get(J)||null,b(H,q,""+ht,te);if(typeof ht=="object"&&ht!==null){switch(ht.$$typeof){case y:return q=q.get(ht.key===null?J:ht.key)||null,P(H,q,ht,te);case E:return q=q.get(ht.key===null?J:ht.key)||null,$(H,q,ht,te);case j:return ht=or(ht),rt(q,H,J,ht,te)}if(pt(ht)||ct(ht))return q=q.get(J)||null,lt(H,q,ht,te,null);if(typeof ht.then=="function")return rt(q,H,J,xl(ht),te);if(ht.$$typeof===U)return rt(q,H,J,ml(H,ht),te);Sl(H,ht)}return null}function Ht(q,H,J,ht){for(var te=null,Ae=null,kt=H,ce=H=0,Se=null;kt!==null&&ce<J.length;ce++){kt.index>ce?(Se=kt,kt=null):Se=kt.sibling;var Re=et(q,kt,J[ce],ht);if(Re===null){kt===null&&(kt=Se);break}e&&kt&&Re.alternate===null&&n(q,kt),H=h(Re,H,ce),Ae===null?te=Re:Ae.sibling=Re,Ae=Re,kt=Se}if(ce===J.length)return a(q,kt),Me&&Vi(q,ce),te;if(kt===null){for(;ce<J.length;ce++)kt=dt(q,J[ce],ht),kt!==null&&(H=h(kt,H,ce),Ae===null?te=kt:Ae.sibling=kt,Ae=kt);return Me&&Vi(q,ce),te}for(kt=o(kt);ce<J.length;ce++)Se=rt(kt,q,ce,J[ce],ht),Se!==null&&(e&&Se.alternate!==null&&kt.delete(Se.key===null?ce:Se.key),H=h(Se,H,ce),Ae===null?te=Se:Ae.sibling=Se,Ae=Se);return e&&kt.forEach(function(za){return n(q,za)}),Me&&Vi(q,ce),te}function ee(q,H,J,ht){if(J==null)throw Error(r(151));for(var te=null,Ae=null,kt=H,ce=H=0,Se=null,Re=J.next();kt!==null&&!Re.done;ce++,Re=J.next()){kt.index>ce?(Se=kt,kt=null):Se=kt.sibling;var za=et(q,kt,Re.value,ht);if(za===null){kt===null&&(kt=Se);break}e&&kt&&za.alternate===null&&n(q,kt),H=h(za,H,ce),Ae===null?te=za:Ae.sibling=za,Ae=za,kt=Se}if(Re.done)return a(q,kt),Me&&Vi(q,ce),te;if(kt===null){for(;!Re.done;ce++,Re=J.next())Re=dt(q,Re.value,ht),Re!==null&&(H=h(Re,H,ce),Ae===null?te=Re:Ae.sibling=Re,Ae=Re);return Me&&Vi(q,ce),te}for(kt=o(kt);!Re.done;ce++,Re=J.next())Re=rt(kt,q,ce,Re.value,ht),Re!==null&&(e&&Re.alternate!==null&&kt.delete(Re.key===null?ce:Re.key),H=h(Re,H,ce),Ae===null?te=Re:Ae.sibling=Re,Ae=Re);return e&&kt.forEach(function(qS){return n(q,qS)}),Me&&Vi(q,ce),te}function Fe(q,H,J,ht){if(typeof J=="object"&&J!==null&&J.type===A&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case y:t:{for(var te=J.key;H!==null;){if(H.key===te){if(te=J.type,te===A){if(H.tag===7){a(q,H.sibling),ht=u(H,J.props.children),ht.return=q,q=ht;break t}}else if(H.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===j&&or(te)===H.type){a(q,H.sibling),ht=u(H,J.props),eo(ht,J),ht.return=q,q=ht;break t}a(q,H);break}else n(q,H);H=H.sibling}J.type===A?(ht=nr(J.props.children,q.mode,ht,J.key),ht.return=q,q=ht):(ht=hl(J.type,J.key,J.props,null,q.mode,ht),eo(ht,J),ht.return=q,q=ht)}return x(q);case E:t:{for(te=J.key;H!==null;){if(H.key===te)if(H.tag===4&&H.stateNode.containerInfo===J.containerInfo&&H.stateNode.implementation===J.implementation){a(q,H.sibling),ht=u(H,J.children||[]),ht.return=q,q=ht;break t}else{a(q,H);break}else n(q,H);H=H.sibling}ht=Eu(J,q.mode,ht),ht.return=q,q=ht}return x(q);case j:return J=or(J),Fe(q,H,J,ht)}if(pt(J))return Ht(q,H,J,ht);if(ct(J)){if(te=ct(J),typeof te!="function")throw Error(r(150));return J=te.call(J),ee(q,H,J,ht)}if(typeof J.then=="function")return Fe(q,H,xl(J),ht);if(J.$$typeof===U)return Fe(q,H,ml(q,J),ht);Sl(q,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,H!==null&&H.tag===6?(a(q,H.sibling),ht=u(H,J),ht.return=q,q=ht):(a(q,H),ht=Mu(J,q.mode,ht),ht.return=q,q=ht),x(q)):a(q,H)}return function(q,H,J,ht){try{to=0;var te=Fe(q,H,J,ht);return Zr=null,te}catch(kt){if(kt===Yr||kt===_l)throw kt;var Ae=Zn(29,kt,null,q.mode);return Ae.lanes=ht,Ae.return=q,Ae}}}var cr=Wp(!0),qp=Wp(!1),xa=!1;function Pu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function zu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Sa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ya(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(we&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=fl(e),wp(e,null,a),n}return ul(e,o,n,a),fl(e)}function no(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Ai(e,a)}}function Bu(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?u=h=x:h=h.next=x,a=a.next}while(a!==null);h===null?u=h=n:h=h.next=n}else u=h=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Fu=!1;function io(){if(Fu){var e=qr;if(e!==null)throw e}}function ao(e,n,a,o){Fu=!1;var u=e.updateQueue;xa=!1;var h=u.firstBaseUpdate,x=u.lastBaseUpdate,b=u.shared.pending;if(b!==null){u.shared.pending=null;var P=b,$=P.next;P.next=null,x===null?h=$:x.next=$,x=P;var lt=e.alternate;lt!==null&&(lt=lt.updateQueue,b=lt.lastBaseUpdate,b!==x&&(b===null?lt.firstBaseUpdate=$:b.next=$,lt.lastBaseUpdate=P))}if(h!==null){var dt=u.baseState;x=0,lt=$=P=null,b=h;do{var et=b.lane&-536870913,rt=et!==b.lane;if(rt?(xe&et)===et:(o&et)===et){et!==0&&et===Wr&&(Fu=!0),lt!==null&&(lt=lt.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var Ht=e,ee=b;et=n;var Fe=a;switch(ee.tag){case 1:if(Ht=ee.payload,typeof Ht=="function"){dt=Ht.call(Fe,dt,et);break t}dt=Ht;break t;case 3:Ht.flags=Ht.flags&-65537|128;case 0:if(Ht=ee.payload,et=typeof Ht=="function"?Ht.call(Fe,dt,et):Ht,et==null)break t;dt=_({},dt,et);break t;case 2:xa=!0}}et=b.callback,et!==null&&(e.flags|=64,rt&&(e.flags|=8192),rt=u.callbacks,rt===null?u.callbacks=[et]:rt.push(et))}else rt={lane:et,tag:b.tag,payload:b.payload,callback:b.callback,next:null},lt===null?($=lt=rt,P=dt):lt=lt.next=rt,x|=et;if(b=b.next,b===null){if(b=u.shared.pending,b===null)break;rt=b,b=rt.next,rt.next=null,u.lastBaseUpdate=rt,u.shared.pending=null}}while(!0);lt===null&&(P=dt),u.baseState=P,u.firstBaseUpdate=$,u.lastBaseUpdate=lt,h===null&&(u.shared.lanes=0),Aa|=x,e.lanes=x,e.memoizedState=dt}}function Yp(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function Zp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Yp(a[e],n)}var jr=N(null),yl=N(0);function jp(e,n){e=$i,Mt(yl,e),Mt(jr,n),$i=e|n.baseLanes}function Iu(){Mt(yl,$i),Mt(jr,jr.current)}function Hu(){$i=yl.current,nt(jr),nt(yl)}var jn=N(null),ci=null;function Ma(e){var n=e.alternate;Mt(en,en.current&1),Mt(jn,e),ci===null&&(n===null||jr.current!==null||n.memoizedState!==null)&&(ci=e)}function Gu(e){Mt(en,en.current),Mt(jn,e),ci===null&&(ci=e)}function Kp(e){e.tag===22?(Mt(en,en.current),Mt(jn,e),ci===null&&(ci=e)):Ea()}function Ea(){Mt(en,en.current),Mt(jn,jn.current)}function Kn(e){nt(jn),ci===e&&(ci=null),nt(en)}var en=N(0);function Ml(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Zf(a)||jf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Wi=0,le=null,ze=null,ln=null,El=!1,Kr=!1,ur=!1,Tl=0,ro=0,Qr=null,zx=0;function Je(){throw Error(r(321))}function Vu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Yn(e[a],n[a]))return!1;return!0}function Xu(e,n,a,o,u,h){return Wi=h,le=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=e===null||e.memoizedState===null?Nm:rf,ur=!1,h=a(o,u),ur=!1,Kr&&(h=Jp(n,a,o,u)),Qp(e),h}function Qp(e){O.H=lo;var n=ze!==null&&ze.next!==null;if(Wi=0,ln=ze=le=null,El=!1,ro=0,Qr=null,n)throw Error(r(300));e===null||cn||(e=e.dependencies,e!==null&&pl(e)&&(cn=!0))}function Jp(e,n,a,o){le=e;var u=0;do{if(Kr&&(Qr=null),ro=0,Kr=!1,25<=u)throw Error(r(301));if(u+=1,ln=ze=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}O.H=Om,h=n(a,o)}while(Kr);return h}function Bx(){var e=O.H,n=e.useState()[0];return n=typeof n.then=="function"?so(n):n,e=e.useState()[0],(ze!==null?ze.memoizedState:null)!==e&&(le.flags|=1024),n}function ku(){var e=Tl!==0;return Tl=0,e}function Wu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function qu(e){if(El){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}El=!1}Wi=0,ln=ze=le=null,Kr=!1,ro=Tl=0,Qr=null}function Nn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?le.memoizedState=ln=e:ln=ln.next=e,ln}function nn(){if(ze===null){var e=le.alternate;e=e!==null?e.memoizedState:null}else e=ze.next;var n=ln===null?le.memoizedState:ln.next;if(n!==null)ln=n,ze=e;else{if(e===null)throw le.alternate===null?Error(r(467)):Error(r(310));ze=e,e={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},ln===null?le.memoizedState=ln=e:ln=ln.next=e}return ln}function bl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function so(e){var n=ro;return ro+=1,Qr===null&&(Qr=[]),e=Vp(Qr,e,n),n=le,(ln===null?n.memoizedState:ln.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?Nm:rf),e}function Al(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return so(e);if(e.$$typeof===U)return En(e)}throw Error(r(438,String(e)))}function Yu(e){var n=null,a=le.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=le.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=bl(),le.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=w;return n.index++,a}function qi(e,n){return typeof n=="function"?n(e):n}function Rl(e){var n=nn();return Zu(n,ze,e)}function Zu(e,n,a){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=e.baseQueue,h=o.pending;if(h!==null){if(u!==null){var x=u.next;u.next=h.next,h.next=x}n.baseQueue=u=h,o.pending=null}if(h=e.baseState,u===null)e.memoizedState=h;else{n=u.next;var b=x=null,P=null,$=n,lt=!1;do{var dt=$.lane&-536870913;if(dt!==$.lane?(xe&dt)===dt:(Wi&dt)===dt){var et=$.revertLane;if(et===0)P!==null&&(P=P.next={lane:0,revertLane:0,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),dt===Wr&&(lt=!0);else if((Wi&et)===et){$=$.next,et===Wr&&(lt=!0);continue}else dt={lane:0,revertLane:$.revertLane,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},P===null?(b=P=dt,x=h):P=P.next=dt,le.lanes|=et,Aa|=et;dt=$.action,ur&&a(h,dt),h=$.hasEagerState?$.eagerState:a(h,dt)}else et={lane:dt,revertLane:$.revertLane,gesture:$.gesture,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},P===null?(b=P=et,x=h):P=P.next=et,le.lanes|=dt,Aa|=dt;$=$.next}while($!==null&&$!==n);if(P===null?x=h:P.next=b,!Yn(h,e.memoizedState)&&(cn=!0,lt&&(a=qr,a!==null)))throw a;e.memoizedState=h,e.baseState=x,e.baseQueue=P,o.lastRenderedState=h}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function ju(e){var n=nn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,h=n.memoizedState;if(u!==null){a.pending=null;var x=u=u.next;do h=e(h,x.action),x=x.next;while(x!==u);Yn(h,n.memoizedState)||(cn=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,o]}function $p(e,n,a){var o=le,u=nn(),h=Me;if(h){if(a===void 0)throw Error(r(407));a=a()}else a=n();var x=!Yn((ze||u).memoizedState,a);if(x&&(u.memoizedState=a,cn=!0),u=u.queue,Ju(nm.bind(null,o,u,e),[e]),u.getSnapshot!==n||x||ln!==null&&ln.memoizedState.tag&1){if(o.flags|=2048,Jr(9,{destroy:void 0},em.bind(null,o,u,a,n),null),Ve===null)throw Error(r(349));h||(Wi&127)!==0||tm(o,n,a)}return a}function tm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=le.updateQueue,n===null?(n=bl(),le.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function em(e,n,a,o){n.value=a,n.getSnapshot=o,im(n)&&am(e)}function nm(e,n,a){return a(function(){im(n)&&am(e)})}function im(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Yn(e,a)}catch{return!0}}function am(e){var n=er(e,2);n!==null&&Hn(n,e,2)}function Ku(e){var n=Nn();if(typeof e=="function"){var a=e;if(e=a(),ur){Zt(!0);try{a()}finally{Zt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:e},n}function rm(e,n,a,o){return e.baseState=a,Zu(e,ze,typeof o=="function"?o:qi)}function Fx(e,n,a,o,u){if(Dl(e))throw Error(r(485));if(e=n.action,e!==null){var h={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){h.listeners.push(x)}};O.T!==null?a(!0):h.isTransition=!1,o(h),a=n.pending,a===null?(h.next=n.pending=h,sm(n,h)):(h.next=a.next,n.pending=a.next=h)}}function sm(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var h=O.T,x={};O.T=x;try{var b=a(u,o),P=O.S;P!==null&&P(x,b),om(e,n,b)}catch($){Qu(e,n,$)}finally{h!==null&&x.types!==null&&(h.types=x.types),O.T=h}}else try{h=a(u,o),om(e,n,h)}catch($){Qu(e,n,$)}}function om(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){lm(e,n,o)},function(o){return Qu(e,n,o)}):lm(e,n,a)}function lm(e,n,a){n.status="fulfilled",n.value=a,cm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,sm(e,a)))}function Qu(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,cm(n),n=n.next;while(n!==o)}e.action=null}function cm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function um(e,n){return n}function fm(e,n){if(Me){var a=Ve.formState;if(a!==null){t:{var o=le;if(Me){if(We){e:{for(var u=We,h=li;u.nodeType!==8;){if(!h){u=null;break e}if(u=ui(u.nextSibling),u===null){u=null;break e}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){We=ui(u.nextSibling),o=u.data==="F!";break t}}_a(o)}o=!1}o&&(n=a[0])}}return a=Nn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:um,lastRenderedState:n},a.queue=o,a=Dm.bind(null,le,o),o.dispatch=a,o=Ku(!1),h=af.bind(null,le,!1,o.queue),o=Nn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=Fx.bind(null,le,u,h,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function hm(e){var n=nn();return dm(n,ze,e)}function dm(e,n,a){if(n=Zu(e,n,um)[0],e=Rl(qi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=so(n)}catch(x){throw x===Yr?_l:x}else o=n;n=nn();var u=n.queue,h=u.dispatch;return a!==n.memoizedState&&(le.flags|=2048,Jr(9,{destroy:void 0},Ix.bind(null,u,a),null)),[o,h,e]}function Ix(e,n){e.action=n}function pm(e){var n=nn(),a=ze;if(a!==null)return dm(n,a,e);nn(),n=n.memoizedState,a=nn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function Jr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=le.updateQueue,n===null&&(n=bl(),le.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function mm(){return nn().memoizedState}function Cl(e,n,a,o){var u=Nn();le.flags|=e,u.memoizedState=Jr(1|n,{destroy:void 0},a,o===void 0?null:o)}function wl(e,n,a,o){var u=nn();o=o===void 0?null:o;var h=u.memoizedState.inst;ze!==null&&o!==null&&Vu(o,ze.memoizedState.deps)?u.memoizedState=Jr(n,h,a,o):(le.flags|=e,u.memoizedState=Jr(1|n,h,a,o))}function gm(e,n){Cl(8390656,8,e,n)}function Ju(e,n){wl(2048,8,e,n)}function Hx(e){le.flags|=4;var n=le.updateQueue;if(n===null)n=bl(),le.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function _m(e){var n=nn().memoizedState;return Hx({ref:n,nextImpl:e}),function(){if((we&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function vm(e,n){return wl(4,2,e,n)}function xm(e,n){return wl(4,4,e,n)}function Sm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function ym(e,n,a){a=a!=null?a.concat([e]):null,wl(4,4,Sm.bind(null,n,e),a)}function $u(){}function Mm(e,n){var a=nn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Vu(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Em(e,n){var a=nn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Vu(n,o[1]))return o[0];if(o=e(),ur){Zt(!0);try{e()}finally{Zt(!1)}}return a.memoizedState=[o,n],o}function tf(e,n,a){return a===void 0||(Wi&1073741824)!==0&&(xe&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Tg(),le.lanes|=e,Aa|=e,a)}function Tm(e,n,a,o){return Yn(a,n)?a:jr.current!==null?(e=tf(e,a,o),Yn(e,n)||(cn=!0),e):(Wi&42)===0||(Wi&1073741824)!==0&&(xe&261930)===0?(cn=!0,e.memoizedState=a):(e=Tg(),le.lanes|=e,Aa|=e,n)}function bm(e,n,a,o,u){var h=Z.p;Z.p=h!==0&&8>h?h:8;var x=O.T,b={};O.T=b,af(e,!1,n,a);try{var P=u(),$=O.S;if($!==null&&$(b,P),P!==null&&typeof P=="object"&&typeof P.then=="function"){var lt=Px(P,o);oo(e,n,lt,$n(e))}else oo(e,n,o,$n(e))}catch(dt){oo(e,n,{then:function(){},status:"rejected",reason:dt},$n())}finally{Z.p=h,x!==null&&b.types!==null&&(x.types=b.types),O.T=x}}function Gx(){}function ef(e,n,a,o){if(e.tag!==5)throw Error(r(476));var u=Am(e).queue;bm(e,u,n,Y,a===null?Gx:function(){return Rm(e),a(o)})}function Am(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:Y},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Rm(e){var n=Am(e);n.next===null&&(n=e.alternate.memoizedState),oo(e,n.next.queue,{},$n())}function nf(){return En(bo)}function Cm(){return nn().memoizedState}function wm(){return nn().memoizedState}function Vx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=$n();e=Sa(a);var o=ya(n,e,a);o!==null&&(Hn(o,n,a),no(o,n,a)),n={cache:Uu()},e.payload=n;return}n=n.return}}function Xx(e,n,a){var o=$n();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Dl(e)?Um(n,a):(a=Su(e,n,a,o),a!==null&&(Hn(a,e,o),Lm(a,n,o)))}function Dm(e,n,a){var o=$n();oo(e,n,a,o)}function oo(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Dl(e))Um(n,u);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var x=n.lastRenderedState,b=h(x,a);if(u.hasEagerState=!0,u.eagerState=b,Yn(b,x))return ul(e,n,u,0),Ve===null&&cl(),!1}catch{}if(a=Su(e,n,u,o),a!==null)return Hn(a,e,o),Lm(a,n,o),!0}return!1}function af(e,n,a,o){if(o={lane:2,revertLane:zf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Dl(e)){if(n)throw Error(r(479))}else n=Su(e,a,o,2),n!==null&&Hn(n,e,2)}function Dl(e){var n=e.alternate;return e===le||n!==null&&n===le}function Um(e,n){Kr=El=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Lm(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Ai(e,a)}}var lo={readContext:En,use:Al,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useLayoutEffect:Je,useInsertionEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useSyncExternalStore:Je,useId:Je,useHostTransitionStatus:Je,useFormState:Je,useActionState:Je,useOptimistic:Je,useMemoCache:Je,useCacheRefresh:Je};lo.useEffectEvent=Je;var Nm={readContext:En,use:Al,useCallback:function(e,n){return Nn().memoizedState=[e,n===void 0?null:n],e},useContext:En,useEffect:gm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Cl(4194308,4,Sm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Cl(4194308,4,e,n)},useInsertionEffect:function(e,n){Cl(4,2,e,n)},useMemo:function(e,n){var a=Nn();n=n===void 0?null:n;var o=e();if(ur){Zt(!0);try{e()}finally{Zt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Nn();if(a!==void 0){var u=a(n);if(ur){Zt(!0);try{a(n)}finally{Zt(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=Xx.bind(null,le,e),[o.memoizedState,e]},useRef:function(e){var n=Nn();return e={current:e},n.memoizedState=e},useState:function(e){e=Ku(e);var n=e.queue,a=Dm.bind(null,le,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:$u,useDeferredValue:function(e,n){var a=Nn();return tf(a,e,n)},useTransition:function(){var e=Ku(!1);return e=bm.bind(null,le,e.queue,!0,!1),Nn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=le,u=Nn();if(Me){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Ve===null)throw Error(r(349));(xe&127)!==0||tm(o,n,a)}u.memoizedState=a;var h={value:a,getSnapshot:n};return u.queue=h,gm(nm.bind(null,o,h,e),[e]),o.flags|=2048,Jr(9,{destroy:void 0},em.bind(null,o,h,a,n),null),a},useId:function(){var e=Nn(),n=Ve.identifierPrefix;if(Me){var a=wi,o=Ci;a=(o&~(1<<32-Pt(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Tl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=zx++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:nf,useFormState:fm,useActionState:fm,useOptimistic:function(e){var n=Nn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=af.bind(null,le,!0,a),a.dispatch=n,[e,n]},useMemoCache:Yu,useCacheRefresh:function(){return Nn().memoizedState=Vx.bind(null,le)},useEffectEvent:function(e){var n=Nn(),a={impl:e};return n.memoizedState=a,function(){if((we&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},rf={readContext:En,use:Al,useCallback:Mm,useContext:En,useEffect:Ju,useImperativeHandle:ym,useInsertionEffect:vm,useLayoutEffect:xm,useMemo:Em,useReducer:Rl,useRef:mm,useState:function(){return Rl(qi)},useDebugValue:$u,useDeferredValue:function(e,n){var a=nn();return Tm(a,ze.memoizedState,e,n)},useTransition:function(){var e=Rl(qi)[0],n=nn().memoizedState;return[typeof e=="boolean"?e:so(e),n]},useSyncExternalStore:$p,useId:Cm,useHostTransitionStatus:nf,useFormState:hm,useActionState:hm,useOptimistic:function(e,n){var a=nn();return rm(a,ze,e,n)},useMemoCache:Yu,useCacheRefresh:wm};rf.useEffectEvent=_m;var Om={readContext:En,use:Al,useCallback:Mm,useContext:En,useEffect:Ju,useImperativeHandle:ym,useInsertionEffect:vm,useLayoutEffect:xm,useMemo:Em,useReducer:ju,useRef:mm,useState:function(){return ju(qi)},useDebugValue:$u,useDeferredValue:function(e,n){var a=nn();return ze===null?tf(a,e,n):Tm(a,ze.memoizedState,e,n)},useTransition:function(){var e=ju(qi)[0],n=nn().memoizedState;return[typeof e=="boolean"?e:so(e),n]},useSyncExternalStore:$p,useId:Cm,useHostTransitionStatus:nf,useFormState:pm,useActionState:pm,useOptimistic:function(e,n){var a=nn();return ze!==null?rm(a,ze,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Yu,useCacheRefresh:wm};Om.useEffectEvent=_m;function sf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var of={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=$n(),u=Sa(o);u.payload=n,a!=null&&(u.callback=a),n=ya(e,u,o),n!==null&&(Hn(n,e,o),no(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=$n(),u=Sa(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=ya(e,u,o),n!==null&&(Hn(n,e,o),no(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=$n(),o=Sa(a);o.tag=2,n!=null&&(o.callback=n),n=ya(e,o,a),n!==null&&(Hn(n,e,a),no(n,e,a))}};function Pm(e,n,a,o,u,h,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,h,x):n.prototype&&n.prototype.isPureReactComponent?!Zs(a,o)||!Zs(u,h):!0}function zm(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&of.enqueueReplaceState(n,n.state,null)}function fr(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=_({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function Bm(e){ll(e)}function Fm(e){console.error(e)}function Im(e){ll(e)}function Ul(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Hm(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function lf(e,n,a){return a=Sa(a),a.tag=3,a.payload={element:null},a.callback=function(){Ul(e,n)},a}function Gm(e){return e=Sa(e),e.tag=3,e}function Vm(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var h=o.value;e.payload=function(){return u(h)},e.callback=function(){Hm(n,a,o)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(e.callback=function(){Hm(n,a,o),typeof u!="function"&&(Ra===null?Ra=new Set([this]):Ra.add(this));var b=o.stack;this.componentDidCatch(o.value,{componentStack:b!==null?b:""})})}function kx(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&kr(n,a,u,!0),a=jn.current,a!==null){switch(a.tag){case 31:case 13:return ci===null?Xl():a.alternate===null&&$e===0&&($e=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===vl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Nf(e,o,u)),!1;case 22:return a.flags|=65536,o===vl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Nf(e,o,u)),!1}throw Error(r(435,a.tag))}return Nf(e,o,u),Xl(),!1}if(Me)return n=jn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Au&&(e=Error(r(422),{cause:o}),Qs(ri(e,a)))):(o!==Au&&(n=Error(r(423),{cause:o}),Qs(ri(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=ri(o,a),u=lf(e.stateNode,o,u),Bu(e,u),$e!==4&&($e=2)),!1;var h=Error(r(520),{cause:o});if(h=ri(h,a),_o===null?_o=[h]:_o.push(h),$e!==4&&($e=2),n===null)return!0;o=ri(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=lf(a.stateNode,o,e),Bu(a,e),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Ra===null||!Ra.has(h))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Gm(u),Vm(u,e,a,o),Bu(a,u),!1}a=a.return}while(a!==null);return!1}var cf=Error(r(461)),cn=!1;function Tn(e,n,a,o){n.child=e===null?qp(n,null,a,o):cr(n,e.child,a,o)}function Xm(e,n,a,o,u){a=a.render;var h=n.ref;if("ref"in o){var x={};for(var b in o)b!=="ref"&&(x[b]=o[b])}else x=o;return rr(n),o=Xu(e,n,a,x,h,u),b=ku(),e!==null&&!cn?(Wu(e,n,u),Yi(e,n,u)):(Me&&b&&Tu(n),n.flags|=1,Tn(e,n,o,u),n.child)}function km(e,n,a,o,u){if(e===null){var h=a.type;return typeof h=="function"&&!yu(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,Wm(e,n,h,o,u)):(e=hl(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(h=e.child,!_f(e,u)){var x=h.memoizedProps;if(a=a.compare,a=a!==null?a:Zs,a(x,o)&&e.ref===n.ref)return Yi(e,n,u)}return n.flags|=1,e=Gi(h,o),e.ref=n.ref,e.return=n,n.child=e}function Wm(e,n,a,o,u){if(e!==null){var h=e.memoizedProps;if(Zs(h,o)&&e.ref===n.ref)if(cn=!1,n.pendingProps=o=h,_f(e,u))(e.flags&131072)!==0&&(cn=!0);else return n.lanes=e.lanes,Yi(e,n,u)}return uf(e,n,a,o,u)}function qm(e,n,a,o){var u=o.children,h=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(h=h!==null?h.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~h}else o=0,n.child=null;return Ym(e,n,h,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&gl(n,h!==null?h.cachePool:null),h!==null?jp(n,h):Iu(),Kp(n);else return o=n.lanes=536870912,Ym(e,n,h!==null?h.baseLanes|a:a,a,o)}else h!==null?(gl(n,h.cachePool),jp(n,h),Ea(),n.memoizedState=null):(e!==null&&gl(n,null),Iu(),Ea());return Tn(e,n,u,a),n.child}function co(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Ym(e,n,a,o,u){var h=Nu();return h=h===null?null:{parent:on._currentValue,pool:h},n.memoizedState={baseLanes:a,cachePool:h},e!==null&&gl(n,null),Iu(),Kp(n),e!==null&&kr(e,n,o,!0),n.childLanes=u,null}function Ll(e,n){return n=Ol({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Zm(e,n,a){return cr(n,e.child,null,a),e=Ll(n,n.pendingProps),e.flags|=2,Kn(n),n.memoizedState=null,e}function Wx(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Me){if(o.mode==="hidden")return e=Ll(n,o),n.lanes=536870912,co(null,e);if(Gu(n),(e=We)?(e=s_(e,li),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ma!==null?{id:Ci,overflow:wi}:null,retryLane:536870912,hydrationErrors:null},a=Up(e),a.return=n,n.child=a,Mn=n,We=null)):e=null,e===null)throw _a(n);return n.lanes=536870912,null}return Ll(n,o)}var h=e.memoizedState;if(h!==null){var x=h.dehydrated;if(Gu(n),u)if(n.flags&256)n.flags&=-257,n=Zm(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(r(558));else if(cn||kr(e,n,a,!1),u=(a&e.childLanes)!==0,cn||u){if(o=Ve,o!==null&&(x=wr(o,a),x!==0&&x!==h.retryLane))throw h.retryLane=x,er(e,x),Hn(o,e,x),cf;Xl(),n=Zm(e,n,a)}else e=h.treeContext,We=ui(x.nextSibling),Mn=n,Me=!0,ga=null,li=!1,e!==null&&Op(n,e),n=Ll(n,o),n.flags|=4096;return n}return e=Gi(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Nl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function uf(e,n,a,o,u){return rr(n),a=Xu(e,n,a,o,void 0,u),o=ku(),e!==null&&!cn?(Wu(e,n,u),Yi(e,n,u)):(Me&&o&&Tu(n),n.flags|=1,Tn(e,n,a,u),n.child)}function jm(e,n,a,o,u,h){return rr(n),n.updateQueue=null,a=Jp(n,o,a,u),Qp(e),o=ku(),e!==null&&!cn?(Wu(e,n,h),Yi(e,n,h)):(Me&&o&&Tu(n),n.flags|=1,Tn(e,n,a,h),n.child)}function Km(e,n,a,o,u){if(rr(n),n.stateNode===null){var h=Hr,x=a.contextType;typeof x=="object"&&x!==null&&(h=En(x)),h=new a(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=of,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},Pu(n),x=a.contextType,h.context=typeof x=="object"&&x!==null?En(x):Hr,h.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(sf(n,a,x,o),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(x=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),x!==h.state&&of.enqueueReplaceState(h,h.state,null),ao(n,o,h,u),io(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){h=n.stateNode;var b=n.memoizedProps,P=fr(a,b);h.props=P;var $=h.context,lt=a.contextType;x=Hr,typeof lt=="object"&&lt!==null&&(x=En(lt));var dt=a.getDerivedStateFromProps;lt=typeof dt=="function"||typeof h.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,lt||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(b||$!==x)&&zm(n,h,o,x),xa=!1;var et=n.memoizedState;h.state=et,ao(n,o,h,u),io(),$=n.memoizedState,b||et!==$||xa?(typeof dt=="function"&&(sf(n,a,dt,o),$=n.memoizedState),(P=xa||Pm(n,a,P,o,et,$,x))?(lt||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=$),h.props=o,h.state=$,h.context=x,o=P):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,zu(e,n),x=n.memoizedProps,lt=fr(a,x),h.props=lt,dt=n.pendingProps,et=h.context,$=a.contextType,P=Hr,typeof $=="object"&&$!==null&&(P=En($)),b=a.getDerivedStateFromProps,($=typeof b=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(x!==dt||et!==P)&&zm(n,h,o,P),xa=!1,et=n.memoizedState,h.state=et,ao(n,o,h,u),io();var rt=n.memoizedState;x!==dt||et!==rt||xa||e!==null&&e.dependencies!==null&&pl(e.dependencies)?(typeof b=="function"&&(sf(n,a,b,o),rt=n.memoizedState),(lt=xa||Pm(n,a,lt,o,et,rt,P)||e!==null&&e.dependencies!==null&&pl(e.dependencies))?($||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,rt,P),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,rt,P)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||x===e.memoizedProps&&et===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&et===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=rt),h.props=o,h.state=rt,h.context=P,o=lt):(typeof h.componentDidUpdate!="function"||x===e.memoizedProps&&et===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&et===e.memoizedState||(n.flags|=1024),o=!1)}return h=o,Nl(e,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,e!==null&&o?(n.child=cr(n,e.child,null,u),n.child=cr(n,null,a,u)):Tn(e,n,a,u),n.memoizedState=h.state,e=n.child):e=Yi(e,n,u),e}function Qm(e,n,a,o){return ir(),n.flags|=256,Tn(e,n,a,o),n.child}var ff={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function hf(e){return{baseLanes:e,cachePool:Hp()}}function df(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Jn),e}function Jm(e,n,a){var o=n.pendingProps,u=!1,h=(n.flags&128)!==0,x;if((x=h)||(x=e!==null&&e.memoizedState===null?!1:(en.current&2)!==0),x&&(u=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,e===null){if(Me){if(u?Ma(n):Ea(),(e=We)?(e=s_(e,li),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ma!==null?{id:Ci,overflow:wi}:null,retryLane:536870912,hydrationErrors:null},a=Up(e),a.return=n,n.child=a,Mn=n,We=null)):e=null,e===null)throw _a(n);return jf(e)?n.lanes=32:n.lanes=536870912,null}var b=o.children;return o=o.fallback,u?(Ea(),u=n.mode,b=Ol({mode:"hidden",children:b},u),o=nr(o,u,a,null),b.return=n,o.return=n,b.sibling=o,n.child=b,o=n.child,o.memoizedState=hf(a),o.childLanes=df(e,x,a),n.memoizedState=ff,co(null,o)):(Ma(n),pf(n,b))}var P=e.memoizedState;if(P!==null&&(b=P.dehydrated,b!==null)){if(h)n.flags&256?(Ma(n),n.flags&=-257,n=mf(e,n,a)):n.memoizedState!==null?(Ea(),n.child=e.child,n.flags|=128,n=null):(Ea(),b=o.fallback,u=n.mode,o=Ol({mode:"visible",children:o.children},u),b=nr(b,u,a,null),b.flags|=2,o.return=n,b.return=n,o.sibling=b,n.child=o,cr(n,e.child,null,a),o=n.child,o.memoizedState=hf(a),o.childLanes=df(e,x,a),n.memoizedState=ff,n=co(null,o));else if(Ma(n),jf(b)){if(x=b.nextSibling&&b.nextSibling.dataset,x)var $=x.dgst;x=$,o=Error(r(419)),o.stack="",o.digest=x,Qs({value:o,source:null,stack:null}),n=mf(e,n,a)}else if(cn||kr(e,n,a,!1),x=(a&e.childLanes)!==0,cn||x){if(x=Ve,x!==null&&(o=wr(x,a),o!==0&&o!==P.retryLane))throw P.retryLane=o,er(e,o),Hn(x,e,o),cf;Zf(b)||Xl(),n=mf(e,n,a)}else Zf(b)?(n.flags|=192,n.child=e.child,n=null):(e=P.treeContext,We=ui(b.nextSibling),Mn=n,Me=!0,ga=null,li=!1,e!==null&&Op(n,e),n=pf(n,o.children),n.flags|=4096);return n}return u?(Ea(),b=o.fallback,u=n.mode,P=e.child,$=P.sibling,o=Gi(P,{mode:"hidden",children:o.children}),o.subtreeFlags=P.subtreeFlags&65011712,$!==null?b=Gi($,b):(b=nr(b,u,a,null),b.flags|=2),b.return=n,o.return=n,o.sibling=b,n.child=o,co(null,o),o=n.child,b=e.child.memoizedState,b===null?b=hf(a):(u=b.cachePool,u!==null?(P=on._currentValue,u=u.parent!==P?{parent:P,pool:P}:u):u=Hp(),b={baseLanes:b.baseLanes|a,cachePool:u}),o.memoizedState=b,o.childLanes=df(e,x,a),n.memoizedState=ff,co(e.child,o)):(Ma(n),a=e.child,e=a.sibling,a=Gi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(x=n.deletions,x===null?(n.deletions=[e],n.flags|=16):x.push(e)),n.child=a,n.memoizedState=null,a)}function pf(e,n){return n=Ol({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Ol(e,n){return e=Zn(22,e,null,n),e.lanes=0,e}function mf(e,n,a){return cr(n,e.child,null,a),e=pf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function $m(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),wu(e.return,n,a)}function gf(e,n,a,o,u,h){var x=e.memoizedState;x===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:h}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=o,x.tail=a,x.tailMode=u,x.treeForkCount=h)}function tg(e,n,a){var o=n.pendingProps,u=o.revealOrder,h=o.tail;o=o.children;var x=en.current,b=(x&2)!==0;if(b?(x=x&1|2,n.flags|=128):x&=1,Mt(en,x),Tn(e,n,o,a),o=Me?Ks:0,!b&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&$m(e,a,n);else if(e.tag===19)$m(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Ml(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),gf(n,!1,u,a,h,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Ml(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}gf(n,!0,a,null,h,o);break;case"together":gf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function Yi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Aa|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(kr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Gi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Gi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function _f(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&pl(e)))}function qx(e,n,a){switch(n.tag){case 3:It(n,n.stateNode.containerInfo),va(n,on,e.memoizedState.cache),ir();break;case 27:case 5:ne(n);break;case 4:It(n,n.stateNode.containerInfo);break;case 10:va(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Gu(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ma(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Jm(e,n,a):(Ma(n),e=Yi(e,n,a),e!==null?e.sibling:null);Ma(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(kr(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return tg(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Mt(en,en.current),o)break;return null;case 22:return n.lanes=0,qm(e,n,a,n.pendingProps);case 24:va(n,on,e.memoizedState.cache)}return Yi(e,n,a)}function eg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)cn=!0;else{if(!_f(e,a)&&(n.flags&128)===0)return cn=!1,qx(e,n,a);cn=(e.flags&131072)!==0}else cn=!1,Me&&(n.flags&1048576)!==0&&Np(n,Ks,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=or(n.elementType),n.type=e,typeof e=="function")yu(e)?(o=fr(e,o),n.tag=1,n=Km(null,n,e,o,a)):(n.tag=0,n=uf(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===C){n.tag=11,n=Xm(null,n,e,o,a);break t}else if(u===B){n.tag=14,n=km(null,n,e,o,a);break t}}throw n=ft(e)||e,Error(r(306,n,""))}}return n;case 0:return uf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=fr(o,n.pendingProps),Km(e,n,o,u,a);case 3:t:{if(It(n,n.stateNode.containerInfo),e===null)throw Error(r(387));o=n.pendingProps;var h=n.memoizedState;u=h.element,zu(e,n),ao(n,o,null,a);var x=n.memoizedState;if(o=x.cache,va(n,on,o),o!==h.cache&&Du(n,[on],a,!0),io(),o=x.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=Qm(e,n,o,a);break t}else if(o!==u){u=ri(Error(r(424)),n),Qs(u),n=Qm(e,n,o,a);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,We=ui(e.firstChild),Mn=n,Me=!0,ga=null,li=!0,a=qp(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ir(),o===u){n=Yi(e,n,a);break t}Tn(e,n,o,a)}n=n.child}return n;case 26:return Nl(e,n),e===null?(a=h_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Me||(a=n.type,e=n.pendingProps,o=Kl(_t.current).createElement(a),o[sn]=n,o[Sn]=e,bn(o,a,e),vt(o),n.stateNode=o):n.memoizedState=h_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return ne(n),e===null&&Me&&(o=n.stateNode=c_(n.type,n.pendingProps,_t.current),Mn=n,li=!0,u=We,Ua(n.type)?(Kf=u,We=ui(o.firstChild)):We=u),Tn(e,n,n.pendingProps.children,a),Nl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Me&&((u=o=We)&&(o=MS(o,n.type,n.pendingProps,li),o!==null?(n.stateNode=o,Mn=n,We=ui(o.firstChild),li=!1,u=!0):u=!1),u||_a(n)),ne(n),u=n.type,h=n.pendingProps,x=e!==null?e.memoizedProps:null,o=h.children,Wf(u,h)?o=null:x!==null&&Wf(u,x)&&(n.flags|=32),n.memoizedState!==null&&(u=Xu(e,n,Bx,null,null,a),bo._currentValue=u),Nl(e,n),Tn(e,n,o,a),n.child;case 6:return e===null&&Me&&((e=a=We)&&(a=ES(a,n.pendingProps,li),a!==null?(n.stateNode=a,Mn=n,We=null,e=!0):e=!1),e||_a(n)),null;case 13:return Jm(e,n,a);case 4:return It(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=cr(n,null,o,a):Tn(e,n,o,a),n.child;case 11:return Xm(e,n,n.type,n.pendingProps,a);case 7:return Tn(e,n,n.pendingProps,a),n.child;case 8:return Tn(e,n,n.pendingProps.children,a),n.child;case 12:return Tn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,va(n,n.type,o.value),Tn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,rr(n),u=En(u),o=o(u),n.flags|=1,Tn(e,n,o,a),n.child;case 14:return km(e,n,n.type,n.pendingProps,a);case 15:return Wm(e,n,n.type,n.pendingProps,a);case 19:return tg(e,n,a);case 31:return Wx(e,n,a);case 22:return qm(e,n,a,n.pendingProps);case 24:return rr(n),o=En(on),e===null?(u=Nu(),u===null&&(u=Ve,h=Uu(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=a),u=h),n.memoizedState={parent:o,cache:u},Pu(n),va(n,on,u)):((e.lanes&a)!==0&&(zu(e,n),ao(n,null,null,a),io()),u=e.memoizedState,h=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),va(n,on,o)):(o=h.cache,va(n,on,o),o!==u.cache&&Du(n,[on],a,!0))),Tn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Zi(e){e.flags|=4}function vf(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(Cg())e.flags|=8192;else throw lr=vl,Ou}else e.flags&=-16777217}function ng(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!__(n))if(Cg())e.flags|=8192;else throw lr=vl,Ou}function Pl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ne():536870912,e.lanes|=n,ns|=n)}function uo(e,n){if(!Me)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function qe(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function Yx(e,n,a){var o=n.pendingProps;switch(bu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(n),null;case 1:return qe(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ki(on),Ot(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Xr(n)?Zi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Ru())),qe(n),null;case 26:var u=n.type,h=n.memoizedState;return e===null?(Zi(n),h!==null?(qe(n),ng(n,h)):(qe(n),vf(n,u,null,o,a))):h?h!==e.memoizedState?(Zi(n),qe(n),ng(n,h)):(qe(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&Zi(n),qe(n),vf(n,u,e,o,a)),null;case 27:if(Xe(n),a=_t.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Zi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return qe(n),null}e=At.current,Xr(n)?Pp(n):(e=c_(u,o,a),n.stateNode=e,Zi(n))}return qe(n),null;case 5:if(Xe(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Zi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return qe(n),null}if(h=At.current,Xr(n))Pp(n);else{var x=Kl(_t.current);switch(h){case 1:h=x.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:h=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":h=x.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":h=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":h=x.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof o.is=="string"?x.createElement("select",{is:o.is}):x.createElement("select"),o.multiple?h.multiple=!0:o.size&&(h.size=o.size);break;default:h=typeof o.is=="string"?x.createElement(u,{is:o.is}):x.createElement(u)}}h[sn]=n,h[Sn]=o;t:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)h.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break t;for(;x.sibling===null;){if(x.return===null||x.return===n)break t;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=h;t:switch(bn(h,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&Zi(n)}}return qe(n),vf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&Zi(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(e=_t.current,Xr(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Mn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[sn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Jg(e.nodeValue,a)),e||_a(n,!0)}else e=Kl(e).createTextNode(o),e[sn]=n,n.stateNode=e}return qe(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=Xr(n),a!==null){if(e===null){if(!o)throw Error(r(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[sn]=n}else ir(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qe(n),e=!1}else a=Ru(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Kn(n),n):(Kn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return qe(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Xr(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[sn]=n}else ir(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qe(n),u=!1}else u=Ru(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Kn(n),n):(Kn(n),null)}return Kn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),h=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Pl(n,n.updateQueue),qe(n),null);case 4:return Ot(),e===null&&Hf(n.stateNode.containerInfo),qe(n),null;case 10:return ki(n.type),qe(n),null;case 19:if(nt(en),o=n.memoizedState,o===null)return qe(n),null;if(u=(n.flags&128)!==0,h=o.rendering,h===null)if(u)uo(o,!1);else{if($e!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(h=Ml(e),h!==null){for(n.flags|=128,uo(o,!1),e=h.updateQueue,n.updateQueue=e,Pl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Dp(a,e),a=a.sibling;return Mt(en,en.current&1|2),Me&&Vi(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&T()>Hl&&(n.flags|=128,u=!0,uo(o,!1),n.lanes=4194304)}else{if(!u)if(e=Ml(h),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Pl(n,e),uo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!h.alternate&&!Me)return qe(n),null}else 2*T()-o.renderingStartTime>Hl&&a!==536870912&&(n.flags|=128,u=!0,uo(o,!1),n.lanes=4194304);o.isBackwards?(h.sibling=n.child,n.child=h):(e=o.last,e!==null?e.sibling=h:n.child=h,o.last=h)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=T(),e.sibling=null,a=en.current,Mt(en,u?a&1|2:a&1),Me&&Vi(n,o.treeForkCount),e):(qe(n),null);case 22:case 23:return Kn(n),Hu(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(qe(n),n.subtreeFlags&6&&(n.flags|=8192)):qe(n),a=n.updateQueue,a!==null&&Pl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&nt(sr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ki(on),qe(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Zx(e,n){switch(bu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ki(on),Ot(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Xe(n),null;case 31:if(n.memoizedState!==null){if(Kn(n),n.alternate===null)throw Error(r(340));ir()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Kn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));ir()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return nt(en),null;case 4:return Ot(),null;case 10:return ki(n.type),null;case 22:case 23:return Kn(n),Hu(),e!==null&&nt(sr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ki(on),null;case 25:return null;default:return null}}function ig(e,n){switch(bu(n),n.tag){case 3:ki(on),Ot();break;case 26:case 27:case 5:Xe(n);break;case 4:Ot();break;case 31:n.memoizedState!==null&&Kn(n);break;case 13:Kn(n);break;case 19:nt(en);break;case 10:ki(n.type);break;case 22:case 23:Kn(n),Hu(),e!==null&&nt(sr);break;case 24:ki(on)}}function fo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var h=a.create,x=a.inst;o=h(),x.destroy=o}a=a.next}while(a!==u)}}catch(b){Pe(n,n.return,b)}}function Ta(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var h=u.next;o=h;do{if((o.tag&e)===e){var x=o.inst,b=x.destroy;if(b!==void 0){x.destroy=void 0,u=n;var P=a,$=b;try{$()}catch(lt){Pe(u,P,lt)}}}o=o.next}while(o!==h)}}catch(lt){Pe(n,n.return,lt)}}function ag(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Zp(n,a)}catch(o){Pe(e,e.return,o)}}}function rg(e,n,a){a.props=fr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Pe(e,n,o)}}function ho(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Pe(e,n,u)}}function Di(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Pe(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Pe(e,n,u)}else a.current=null}function sg(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Pe(e,e.return,u)}}function xf(e,n,a){try{var o=e.stateNode;gS(o,e.type,a,n),o[Sn]=n}catch(u){Pe(e,e.return,u)}}function og(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ua(e.type)||e.tag===4}function Sf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||og(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ua(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function yf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ii));else if(o!==4&&(o===27&&Ua(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(yf(e,n,a),e=e.sibling;e!==null;)yf(e,n,a),e=e.sibling}function zl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Ua(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(zl(e,n,a),e=e.sibling;e!==null;)zl(e,n,a),e=e.sibling}function lg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);bn(n,o,a),n[sn]=e,n[Sn]=a}catch(h){Pe(e,e.return,h)}}var ji=!1,un=!1,Mf=!1,cg=typeof WeakSet=="function"?WeakSet:Set,vn=null;function jx(e,n){if(e=e.containerInfo,Xf=ic,e=yp(e),pu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break t}var x=0,b=-1,P=-1,$=0,lt=0,dt=e,et=null;e:for(;;){for(var rt;dt!==a||u!==0&&dt.nodeType!==3||(b=x+u),dt!==h||o!==0&&dt.nodeType!==3||(P=x+o),dt.nodeType===3&&(x+=dt.nodeValue.length),(rt=dt.firstChild)!==null;)et=dt,dt=rt;for(;;){if(dt===e)break e;if(et===a&&++$===u&&(b=x),et===h&&++lt===o&&(P=x),(rt=dt.nextSibling)!==null)break;dt=et,et=dt.parentNode}dt=rt}a=b===-1||P===-1?null:{start:b,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(kf={focusedElem:e,selectionRange:a},ic=!1,vn=n;vn!==null;)if(n=vn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,vn=e;else for(;vn!==null;){switch(n=vn,h=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&h!==null){e=void 0,a=n,u=h.memoizedProps,h=h.memoizedState,o=a.stateNode;try{var Ht=fr(a.type,u);e=o.getSnapshotBeforeUpdate(Ht,h),o.__reactInternalSnapshotBeforeUpdate=e}catch(ee){Pe(a,a.return,ee)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Yf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Yf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,vn=e;break}vn=n.return}}function ug(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Qi(e,a),o&4&&fo(5,a);break;case 1:if(Qi(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(x){Pe(a,a.return,x)}else{var u=fr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(x){Pe(a,a.return,x)}}o&64&&ag(a),o&512&&ho(a,a.return);break;case 3:if(Qi(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Zp(e,n)}catch(x){Pe(a,a.return,x)}}break;case 27:n===null&&o&4&&lg(a);case 26:case 5:Qi(e,a),n===null&&o&4&&sg(a),o&512&&ho(a,a.return);break;case 12:Qi(e,a);break;case 31:Qi(e,a),o&4&&dg(e,a);break;case 13:Qi(e,a),o&4&&pg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=aS.bind(null,a),TS(e,a))));break;case 22:if(o=a.memoizedState!==null||ji,!o){n=n!==null&&n.memoizedState!==null||un,u=ji;var h=un;ji=o,(un=n)&&!h?Ji(e,a,(a.subtreeFlags&8772)!==0):Qi(e,a),ji=u,un=h}break;case 30:break;default:Qi(e,a)}}function fg(e){var n=e.alternate;n!==null&&(e.alternate=null,fg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&R(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ye=null,zn=!1;function Ki(e,n,a){for(a=a.child;a!==null;)hg(e,n,a),a=a.sibling}function hg(e,n,a){if(Ct&&typeof Ct.onCommitFiberUnmount=="function")try{Ct.onCommitFiberUnmount(Tt,a)}catch{}switch(a.tag){case 26:un||Di(a,n),Ki(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:un||Di(a,n);var o=Ye,u=zn;Ua(a.type)&&(Ye=a.stateNode,zn=!1),Ki(e,n,a),Mo(a.stateNode),Ye=o,zn=u;break;case 5:un||Di(a,n);case 6:if(o=Ye,u=zn,Ye=null,Ki(e,n,a),Ye=o,zn=u,Ye!==null)if(zn)try{(Ye.nodeType===9?Ye.body:Ye.nodeName==="HTML"?Ye.ownerDocument.body:Ye).removeChild(a.stateNode)}catch(h){Pe(a,n,h)}else try{Ye.removeChild(a.stateNode)}catch(h){Pe(a,n,h)}break;case 18:Ye!==null&&(zn?(e=Ye,a_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),us(e)):a_(Ye,a.stateNode));break;case 4:o=Ye,u=zn,Ye=a.stateNode.containerInfo,zn=!0,Ki(e,n,a),Ye=o,zn=u;break;case 0:case 11:case 14:case 15:Ta(2,a,n),un||Ta(4,a,n),Ki(e,n,a);break;case 1:un||(Di(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&rg(a,n,o)),Ki(e,n,a);break;case 21:Ki(e,n,a);break;case 22:un=(o=un)||a.memoizedState!==null,Ki(e,n,a),un=o;break;default:Ki(e,n,a)}}function dg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{us(e)}catch(a){Pe(n,n.return,a)}}}function pg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{us(e)}catch(a){Pe(n,n.return,a)}}function Kx(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new cg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new cg),n;default:throw Error(r(435,e.tag))}}function Bl(e,n){var a=Kx(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=rS.bind(null,e,o);o.then(u,u)}})}function Bn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],h=e,x=n,b=x;t:for(;b!==null;){switch(b.tag){case 27:if(Ua(b.type)){Ye=b.stateNode,zn=!1;break t}break;case 5:Ye=b.stateNode,zn=!1;break t;case 3:case 4:Ye=b.stateNode.containerInfo,zn=!0;break t}b=b.return}if(Ye===null)throw Error(r(160));hg(h,x,u),Ye=null,zn=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)mg(n,e),n=n.sibling}var gi=null;function mg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Bn(n,e),Fn(e),o&4&&(Ta(3,e,e.return),fo(3,e),Ta(5,e,e.return));break;case 1:Bn(n,e),Fn(e),o&512&&(un||a===null||Di(a,a.return)),o&64&&ji&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=gi;if(Bn(n,e),Fn(e),o&512&&(un||a===null||Di(a,a.return)),o&4){var h=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":h=u.getElementsByTagName("title")[0],(!h||h[Ka]||h[sn]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(o),u.head.insertBefore(h,u.querySelector("head > title"))),bn(h,o,a),h[sn]=e,vt(h),o=h;break t;case"link":var x=m_("link","href",u).get(o+(a.href||""));if(x){for(var b=0;b<x.length;b++)if(h=x[b],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(b,1);break e}}h=u.createElement(o),bn(h,o,a),u.head.appendChild(h);break;case"meta":if(x=m_("meta","content",u).get(o+(a.content||""))){for(b=0;b<x.length;b++)if(h=x[b],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(b,1);break e}}h=u.createElement(o),bn(h,o,a),u.head.appendChild(h);break;default:throw Error(r(468,o))}h[sn]=e,vt(h),o=h}e.stateNode=o}else g_(u,e.type,e.stateNode);else e.stateNode=p_(u,o,e.memoizedProps);else h!==o?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,o===null?g_(u,e.type,e.stateNode):p_(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&xf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Bn(n,e),Fn(e),o&512&&(un||a===null||Di(a,a.return)),a!==null&&o&4&&xf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Bn(n,e),Fn(e),o&512&&(un||a===null||Di(a,a.return)),e.flags&32){u=e.stateNode;try{Nr(u,"")}catch(Ht){Pe(e,e.return,Ht)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,xf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(Mf=!0);break;case 6:if(Bn(n,e),Fn(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Ht){Pe(e,e.return,Ht)}}break;case 3:if($l=null,u=gi,gi=Ql(n.containerInfo),Bn(n,e),gi=u,Fn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{us(n.containerInfo)}catch(Ht){Pe(e,e.return,Ht)}Mf&&(Mf=!1,gg(e));break;case 4:o=gi,gi=Ql(e.stateNode.containerInfo),Bn(n,e),Fn(e),gi=o;break;case 12:Bn(n,e),Fn(e);break;case 31:Bn(n,e),Fn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Bl(e,o)));break;case 13:Bn(n,e),Fn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Il=T()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Bl(e,o)));break;case 22:u=e.memoizedState!==null;var P=a!==null&&a.memoizedState!==null,$=ji,lt=un;if(ji=$||u,un=lt||P,Bn(n,e),un=lt,ji=$,Fn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||P||ji||un||hr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){P=a=n;try{if(h=P.stateNode,u)x=h.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{b=P.stateNode;var dt=P.memoizedProps.style,et=dt!=null&&dt.hasOwnProperty("display")?dt.display:null;b.style.display=et==null||typeof et=="boolean"?"":(""+et).trim()}}catch(Ht){Pe(P,P.return,Ht)}}}else if(n.tag===6){if(a===null){P=n;try{P.stateNode.nodeValue=u?"":P.memoizedProps}catch(Ht){Pe(P,P.return,Ht)}}}else if(n.tag===18){if(a===null){P=n;try{var rt=P.stateNode;u?r_(rt,!0):r_(P.stateNode,!1)}catch(Ht){Pe(P,P.return,Ht)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Bl(e,a))));break;case 19:Bn(n,e),Fn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Bl(e,o)));break;case 30:break;case 21:break;default:Bn(n,e),Fn(e)}}function Fn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(og(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,h=Sf(e);zl(e,h,u);break;case 5:var x=a.stateNode;a.flags&32&&(Nr(x,""),a.flags&=-33);var b=Sf(e);zl(e,b,x);break;case 3:case 4:var P=a.stateNode.containerInfo,$=Sf(e);yf(e,$,P);break;default:throw Error(r(161))}}catch(lt){Pe(e,e.return,lt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function gg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;gg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Qi(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)ug(e,n.alternate,n),n=n.sibling}function hr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ta(4,n,n.return),hr(n);break;case 1:Di(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&rg(n,n.return,a),hr(n);break;case 27:Mo(n.stateNode);case 26:case 5:Di(n,n.return),hr(n);break;case 22:n.memoizedState===null&&hr(n);break;case 30:hr(n);break;default:hr(n)}e=e.sibling}}function Ji(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,h=n,x=h.flags;switch(h.tag){case 0:case 11:case 15:Ji(u,h,a),fo(4,h);break;case 1:if(Ji(u,h,a),o=h,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch($){Pe(o,o.return,$)}if(o=h,u=o.updateQueue,u!==null){var b=o.stateNode;try{var P=u.shared.hiddenCallbacks;if(P!==null)for(u.shared.hiddenCallbacks=null,u=0;u<P.length;u++)Yp(P[u],b)}catch($){Pe(o,o.return,$)}}a&&x&64&&ag(h),ho(h,h.return);break;case 27:lg(h);case 26:case 5:Ji(u,h,a),a&&o===null&&x&4&&sg(h),ho(h,h.return);break;case 12:Ji(u,h,a);break;case 31:Ji(u,h,a),a&&x&4&&dg(u,h);break;case 13:Ji(u,h,a),a&&x&4&&pg(u,h);break;case 22:h.memoizedState===null&&Ji(u,h,a),ho(h,h.return);break;case 30:break;default:Ji(u,h,a)}n=n.sibling}}function Ef(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Js(a))}function Tf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Js(e))}function _i(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)_g(e,n,a,o),n=n.sibling}function _g(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:_i(e,n,a,o),u&2048&&fo(9,n);break;case 1:_i(e,n,a,o);break;case 3:_i(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Js(e)));break;case 12:if(u&2048){_i(e,n,a,o),e=n.stateNode;try{var h=n.memoizedProps,x=h.id,b=h.onPostCommit;typeof b=="function"&&b(x,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(P){Pe(n,n.return,P)}}else _i(e,n,a,o);break;case 31:_i(e,n,a,o);break;case 13:_i(e,n,a,o);break;case 23:break;case 22:h=n.stateNode,x=n.alternate,n.memoizedState!==null?h._visibility&2?_i(e,n,a,o):po(e,n):h._visibility&2?_i(e,n,a,o):(h._visibility|=2,$r(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Ef(x,n);break;case 24:_i(e,n,a,o),u&2048&&Tf(n.alternate,n);break;default:_i(e,n,a,o)}}function $r(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var h=e,x=n,b=a,P=o,$=x.flags;switch(x.tag){case 0:case 11:case 15:$r(h,x,b,P,u),fo(8,x);break;case 23:break;case 22:var lt=x.stateNode;x.memoizedState!==null?lt._visibility&2?$r(h,x,b,P,u):po(h,x):(lt._visibility|=2,$r(h,x,b,P,u)),u&&$&2048&&Ef(x.alternate,x);break;case 24:$r(h,x,b,P,u),u&&$&2048&&Tf(x.alternate,x);break;default:$r(h,x,b,P,u)}n=n.sibling}}function po(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:po(a,o),u&2048&&Ef(o.alternate,o);break;case 24:po(a,o),u&2048&&Tf(o.alternate,o);break;default:po(a,o)}n=n.sibling}}var mo=8192;function ts(e,n,a){if(e.subtreeFlags&mo)for(e=e.child;e!==null;)vg(e,n,a),e=e.sibling}function vg(e,n,a){switch(e.tag){case 26:ts(e,n,a),e.flags&mo&&e.memoizedState!==null&&zS(a,gi,e.memoizedState,e.memoizedProps);break;case 5:ts(e,n,a);break;case 3:case 4:var o=gi;gi=Ql(e.stateNode.containerInfo),ts(e,n,a),gi=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=mo,mo=16777216,ts(e,n,a),mo=o):ts(e,n,a));break;default:ts(e,n,a)}}function xg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function go(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];vn=o,yg(o,e)}xg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Sg(e),e=e.sibling}function Sg(e){switch(e.tag){case 0:case 11:case 15:go(e),e.flags&2048&&Ta(9,e,e.return);break;case 3:go(e);break;case 12:go(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Fl(e)):go(e);break;default:go(e)}}function Fl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];vn=o,yg(o,e)}xg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ta(8,n,n.return),Fl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Fl(n));break;default:Fl(n)}e=e.sibling}}function yg(e,n){for(;vn!==null;){var a=vn;switch(a.tag){case 0:case 11:case 15:Ta(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Js(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,vn=o;else t:for(a=e;vn!==null;){o=vn;var u=o.sibling,h=o.return;if(fg(o),o===a){vn=null;break t}if(u!==null){u.return=h,vn=u;break t}vn=h}}}var Qx={getCacheForType:function(e){var n=En(on),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return En(on).controller.signal}},Jx=typeof WeakMap=="function"?WeakMap:Map,we=0,Ve=null,me=null,xe=0,Oe=0,Qn=null,ba=!1,es=!1,bf=!1,$i=0,$e=0,Aa=0,dr=0,Af=0,Jn=0,ns=0,_o=null,In=null,Rf=!1,Il=0,Mg=0,Hl=1/0,Gl=null,Ra=null,pn=0,Ca=null,is=null,ta=0,Cf=0,wf=null,Eg=null,vo=0,Df=null;function $n(){return(we&2)!==0&&xe!==0?xe&-xe:O.T!==null?zf():ja()}function Tg(){if(Jn===0)if((xe&536870912)===0||Me){var e=wt;wt<<=1,(wt&3932160)===0&&(wt=262144),Jn=e}else Jn=536870912;return e=jn.current,e!==null&&(e.flags|=32),Jn}function Hn(e,n,a){(e===Ve&&(Oe===2||Oe===9)||e.cancelPendingCommit!==null)&&(as(e,0),wa(e,xe,Jn,!1)),Un(e,a),((we&2)===0||e!==Ve)&&(e===Ve&&((we&2)===0&&(dr|=a),$e===4&&wa(e,xe,Jn,!1)),Ui(e))}function bg(e,n,a){if((we&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Ft(e,n),u=o?eS(e,n):Lf(e,n,!0),h=o;do{if(u===0){es&&!o&&wa(e,n,0,!1);break}else{if(a=e.current.alternate,h&&!$x(a)){u=Lf(e,n,!1),h=!1;continue}if(u===2){if(h=n,e.errorRecoveryDisabledLanes&h)var x=0;else x=e.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;t:{var b=e;u=_o;var P=b.current.memoizedState.isDehydrated;if(P&&(as(b,x).flags|=256),x=Lf(b,x,!1),x!==2){if(bf&&!P){b.errorRecoveryDisabledLanes|=h,dr|=h,u=4;break t}h=In,In=u,h!==null&&(In===null?In=h:In.push.apply(In,h))}u=x}if(h=!1,u!==2)continue}}if(u===1){as(e,0),wa(e,n,0,!0);break}t:{switch(o=e,h=u,h){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:wa(o,n,Jn,!ba);break t;case 2:In=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Il+300-T(),10<u)){if(wa(o,n,Jn,!ba),mt(o,0,!0)!==0)break t;ta=n,o.timeoutHandle=n_(Ag.bind(null,o,a,In,Gl,Rf,n,Jn,dr,ns,ba,h,"Throttled",-0,0),u);break t}Ag(o,a,In,Gl,Rf,n,Jn,dr,ns,ba,h,null,-0,0)}}break}while(!0);Ui(e)}function Ag(e,n,a,o,u,h,x,b,P,$,lt,dt,et,rt){if(e.timeoutHandle=-1,dt=n.subtreeFlags,dt&8192||(dt&16785408)===16785408){dt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ii},vg(n,h,dt);var Ht=(h&62914560)===h?Il-T():(h&4194048)===h?Mg-T():0;if(Ht=BS(dt,Ht),Ht!==null){ta=h,e.cancelPendingCommit=Ht(Og.bind(null,e,n,h,a,o,u,x,b,P,lt,dt,null,et,rt)),wa(e,h,x,!$);return}}Og(e,n,h,a,o,u,x,b,P)}function $x(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],h=u.getSnapshot;u=u.value;try{if(!Yn(h(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function wa(e,n,a,o){n&=~Af,n&=~dr,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var h=31-Pt(u),x=1<<h;o[h]=-1,u&=~x}a!==0&&Fs(e,a,n)}function Vl(){return(we&6)===0?(xo(0),!1):!0}function Uf(){if(me!==null){if(Oe===0)var e=me.return;else e=me,Xi=ar=null,qu(e),Zr=null,to=0,e=me;for(;e!==null;)ig(e.alternate,e),e=e.return;me=null}}function as(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,xS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ta=0,Uf(),Ve=e,me=a=Gi(e.current,null),xe=n,Oe=0,Qn=null,ba=!1,es=Ft(e,n),bf=!1,ns=Jn=Af=dr=Aa=$e=0,In=_o=null,Rf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Pt(o),h=1<<u;n|=e[u],o&=~h}return $i=n,cl(),a}function Rg(e,n){le=null,O.H=lo,n===Yr||n===_l?(n=Xp(),Oe=3):n===Ou?(n=Xp(),Oe=4):Oe=n===cf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Qn=n,me===null&&($e=1,Ul(e,ri(n,e.current)))}function Cg(){var e=jn.current;return e===null?!0:(xe&4194048)===xe?ci===null:(xe&62914560)===xe||(xe&536870912)!==0?e===ci:!1}function wg(){var e=O.H;return O.H=lo,e===null?lo:e}function Dg(){var e=O.A;return O.A=Qx,e}function Xl(){$e=4,ba||(xe&4194048)!==xe&&jn.current!==null||(es=!0),(Aa&134217727)===0&&(dr&134217727)===0||Ve===null||wa(Ve,xe,Jn,!1)}function Lf(e,n,a){var o=we;we|=2;var u=wg(),h=Dg();(Ve!==e||xe!==n)&&(Gl=null,as(e,n)),n=!1;var x=$e;t:do try{if(Oe!==0&&me!==null){var b=me,P=Qn;switch(Oe){case 8:Uf(),x=6;break t;case 3:case 2:case 9:case 6:jn.current===null&&(n=!0);var $=Oe;if(Oe=0,Qn=null,rs(e,b,P,$),a&&es){x=0;break t}break;default:$=Oe,Oe=0,Qn=null,rs(e,b,P,$)}}tS(),x=$e;break}catch(lt){Rg(e,lt)}while(!0);return n&&e.shellSuspendCounter++,Xi=ar=null,we=o,O.H=u,O.A=h,me===null&&(Ve=null,xe=0,cl()),x}function tS(){for(;me!==null;)Ug(me)}function eS(e,n){var a=we;we|=2;var o=wg(),u=Dg();Ve!==e||xe!==n?(Gl=null,Hl=T()+500,as(e,n)):es=Ft(e,n);t:do try{if(Oe!==0&&me!==null){n=me;var h=Qn;e:switch(Oe){case 1:Oe=0,Qn=null,rs(e,n,h,1);break;case 2:case 9:if(Gp(h)){Oe=0,Qn=null,Lg(n);break}n=function(){Oe!==2&&Oe!==9||Ve!==e||(Oe=7),Ui(e)},h.then(n,n);break t;case 3:Oe=7;break t;case 4:Oe=5;break t;case 7:Gp(h)?(Oe=0,Qn=null,Lg(n)):(Oe=0,Qn=null,rs(e,n,h,7));break;case 5:var x=null;switch(me.tag){case 26:x=me.memoizedState;case 5:case 27:var b=me;if(x?__(x):b.stateNode.complete){Oe=0,Qn=null;var P=b.sibling;if(P!==null)me=P;else{var $=b.return;$!==null?(me=$,kl($)):me=null}break e}}Oe=0,Qn=null,rs(e,n,h,5);break;case 6:Oe=0,Qn=null,rs(e,n,h,6);break;case 8:Uf(),$e=6;break t;default:throw Error(r(462))}}nS();break}catch(lt){Rg(e,lt)}while(!0);return Xi=ar=null,O.H=o,O.A=u,we=a,me!==null?0:(Ve=null,xe=0,cl(),$e)}function nS(){for(;me!==null&&!Ze();)Ug(me)}function Ug(e){var n=eg(e.alternate,e,$i);e.memoizedProps=e.pendingProps,n===null?kl(e):me=n}function Lg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=jm(a,n,n.pendingProps,n.type,void 0,xe);break;case 11:n=jm(a,n,n.pendingProps,n.type.render,n.ref,xe);break;case 5:qu(n);default:ig(a,n),n=me=Dp(n,$i),n=eg(a,n,$i)}e.memoizedProps=e.pendingProps,n===null?kl(e):me=n}function rs(e,n,a,o){Xi=ar=null,qu(n),Zr=null,to=0;var u=n.return;try{if(kx(e,u,n,a,xe)){$e=1,Ul(e,ri(a,e.current)),me=null;return}}catch(h){if(u!==null)throw me=u,h;$e=1,Ul(e,ri(a,e.current)),me=null;return}n.flags&32768?(Me||o===1?e=!0:es||(xe&536870912)!==0?e=!1:(ba=e=!0,(o===2||o===9||o===3||o===6)&&(o=jn.current,o!==null&&o.tag===13&&(o.flags|=16384))),Ng(n,e)):kl(n)}function kl(e){var n=e;do{if((n.flags&32768)!==0){Ng(n,ba);return}e=n.return;var a=Yx(n.alternate,n,$i);if(a!==null){me=a;return}if(n=n.sibling,n!==null){me=n;return}me=n=e}while(n!==null);$e===0&&($e=5)}function Ng(e,n){do{var a=Zx(e.alternate,e);if(a!==null){a.flags&=32767,me=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){me=e;return}me=e=a}while(e!==null);$e=6,me=null}function Og(e,n,a,o,u,h,x,b,P){e.cancelPendingCommit=null;do Wl();while(pn!==0);if((we&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(h=n.lanes|n.childLanes,h|=xu,ii(e,a,h,x,b,P),e===Ve&&(me=Ve=null,xe=0),is=n,Ca=e,ta=a,Cf=h,wf=u,Eg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,sS(ot,function(){return Ig(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=O.T,O.T=null,u=Z.p,Z.p=2,x=we,we|=4;try{jx(e,n,a)}finally{we=x,Z.p=u,O.T=o}}pn=1,Pg(),zg(),Bg()}}function Pg(){if(pn===1){pn=0;var e=Ca,n=is,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var o=Z.p;Z.p=2;var u=we;we|=4;try{mg(n,e);var h=kf,x=yp(e.containerInfo),b=h.focusedElem,P=h.selectionRange;if(x!==b&&b&&b.ownerDocument&&Sp(b.ownerDocument.documentElement,b)){if(P!==null&&pu(b)){var $=P.start,lt=P.end;if(lt===void 0&&(lt=$),"selectionStart"in b)b.selectionStart=$,b.selectionEnd=Math.min(lt,b.value.length);else{var dt=b.ownerDocument||document,et=dt&&dt.defaultView||window;if(et.getSelection){var rt=et.getSelection(),Ht=b.textContent.length,ee=Math.min(P.start,Ht),Fe=P.end===void 0?ee:Math.min(P.end,Ht);!rt.extend&&ee>Fe&&(x=Fe,Fe=ee,ee=x);var q=xp(b,ee),H=xp(b,Fe);if(q&&H&&(rt.rangeCount!==1||rt.anchorNode!==q.node||rt.anchorOffset!==q.offset||rt.focusNode!==H.node||rt.focusOffset!==H.offset)){var J=dt.createRange();J.setStart(q.node,q.offset),rt.removeAllRanges(),ee>Fe?(rt.addRange(J),rt.extend(H.node,H.offset)):(J.setEnd(H.node,H.offset),rt.addRange(J))}}}}for(dt=[],rt=b;rt=rt.parentNode;)rt.nodeType===1&&dt.push({element:rt,left:rt.scrollLeft,top:rt.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<dt.length;b++){var ht=dt[b];ht.element.scrollLeft=ht.left,ht.element.scrollTop=ht.top}}ic=!!Xf,kf=Xf=null}finally{we=u,Z.p=o,O.T=a}}e.current=n,pn=2}}function zg(){if(pn===2){pn=0;var e=Ca,n=is,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var o=Z.p;Z.p=2;var u=we;we|=4;try{ug(e,n.alternate,n)}finally{we=u,Z.p=o,O.T=a}}pn=3}}function Bg(){if(pn===4||pn===3){pn=0,L();var e=Ca,n=is,a=ta,o=Eg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?pn=5:(pn=0,is=Ca=null,Fg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Ra=null),Ur(a),n=n.stateNode,Ct&&typeof Ct.onCommitFiberRoot=="function")try{Ct.onCommitFiberRoot(Tt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=O.T,u=Z.p,Z.p=2,O.T=null;try{for(var h=e.onRecoverableError,x=0;x<o.length;x++){var b=o[x];h(b.value,{componentStack:b.stack})}}finally{O.T=n,Z.p=u}}(ta&3)!==0&&Wl(),Ui(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Df?vo++:(vo=0,Df=e):vo=0,xo(0)}}function Fg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Js(n)))}function Wl(){return Pg(),zg(),Bg(),Ig()}function Ig(){if(pn!==5)return!1;var e=Ca,n=Cf;Cf=0;var a=Ur(ta),o=O.T,u=Z.p;try{Z.p=32>a?32:a,O.T=null,a=wf,wf=null;var h=Ca,x=ta;if(pn=0,is=Ca=null,ta=0,(we&6)!==0)throw Error(r(331));var b=we;if(we|=4,Sg(h.current),_g(h,h.current,x,a),we=b,xo(0,!1),Ct&&typeof Ct.onPostCommitFiberRoot=="function")try{Ct.onPostCommitFiberRoot(Tt,h)}catch{}return!0}finally{Z.p=u,O.T=o,Fg(e,n)}}function Hg(e,n,a){n=ri(a,n),n=lf(e.stateNode,n,2),e=ya(e,n,2),e!==null&&(Un(e,2),Ui(e))}function Pe(e,n,a){if(e.tag===3)Hg(e,e,a);else for(;n!==null;){if(n.tag===3){Hg(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ra===null||!Ra.has(o))){e=ri(a,e),a=Gm(2),o=ya(n,a,2),o!==null&&(Vm(a,o,n,e),Un(o,2),Ui(o));break}}n=n.return}}function Nf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new Jx;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(bf=!0,u.add(a),e=iS.bind(null,e,n,a),n.then(e,e))}function iS(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ve===e&&(xe&a)===a&&($e===4||$e===3&&(xe&62914560)===xe&&300>T()-Il?(we&2)===0&&as(e,0):Af|=a,ns===xe&&(ns=0)),Ui(e)}function Gg(e,n){n===0&&(n=Ne()),e=er(e,n),e!==null&&(Un(e,n),Ui(e))}function aS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Gg(e,a)}function rS(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),Gg(e,a)}function sS(e,n){return se(e,n)}var ql=null,ss=null,Of=!1,Yl=!1,Pf=!1,Da=0;function Ui(e){e!==ss&&e.next===null&&(ss===null?ql=ss=e:ss=ss.next=e),Yl=!0,Of||(Of=!0,lS())}function xo(e,n){if(!Pf&&Yl){Pf=!0;do for(var a=!1,o=ql;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var h=0;else{var x=o.suspendedLanes,b=o.pingedLanes;h=(1<<31-Pt(42|e)+1)-1,h&=u&~(x&~b),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,Wg(o,h))}else h=xe,h=mt(o,o===Ve?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||Ft(o,h)||(a=!0,Wg(o,h));o=o.next}while(a);Pf=!1}}function oS(){Vg()}function Vg(){Yl=Of=!1;var e=0;Da!==0&&vS()&&(e=Da);for(var n=T(),a=null,o=ql;o!==null;){var u=o.next,h=Xg(o,n);h===0?(o.next=null,a===null?ql=u:a.next=u,u===null&&(ss=a)):(a=o,(e!==0||(h&3)!==0)&&(Yl=!0)),o=u}pn!==0&&pn!==5||xo(e),Da!==0&&(Da=0)}function Xg(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var x=31-Pt(h),b=1<<x,P=u[x];P===-1?((b&a)===0||(b&o)!==0)&&(u[x]=ae(b,n)):P<=n&&(e.expiredLanes|=b),h&=~b}if(n=Ve,a=xe,a=mt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Oe===2||Oe===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Qe(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ft(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&Qe(o),Ur(a)){case 2:case 8:a=St;break;case 32:a=ot;break;case 268435456:a=Rt;break;default:a=ot}return o=kg.bind(null,e),a=se(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&Qe(o),e.callbackPriority=2,e.callbackNode=null,2}function kg(e,n){if(pn!==0&&pn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Wl()&&e.callbackNode!==a)return null;var o=xe;return o=mt(e,e===Ve?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(bg(e,o,n),Xg(e,T()),e.callbackNode!=null&&e.callbackNode===a?kg.bind(null,e):null)}function Wg(e,n){if(Wl())return null;bg(e,n,!0)}function lS(){SS(function(){(we&6)!==0?se(ut,oS):Vg()})}function zf(){if(Da===0){var e=Wr;e===0&&(e=bt,bt<<=1,(bt&261888)===0&&(bt=256)),Da=e}return Da}function qg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:el(""+e)}function Yg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function cS(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var h=qg((u[Sn]||null).action),x=o.submitter;x&&(n=(n=x[Sn]||null)?qg(n.formAction):x.getAttribute("formAction"),n!==null&&(h=n,x=null));var b=new rl("action","action",null,o,u);e.push({event:b,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Da!==0){var P=x?Yg(u,x):new FormData(u);ef(a,{pending:!0,data:P,method:u.method,action:h},null,P)}}else typeof h=="function"&&(b.preventDefault(),P=x?Yg(u,x):new FormData(u),ef(a,{pending:!0,data:P,method:u.method,action:h},h,P))},currentTarget:u}]})}}for(var Bf=0;Bf<vu.length;Bf++){var Ff=vu[Bf],uS=Ff.toLowerCase(),fS=Ff[0].toUpperCase()+Ff.slice(1);mi(uS,"on"+fS)}mi(Tp,"onAnimationEnd"),mi(bp,"onAnimationIteration"),mi(Ap,"onAnimationStart"),mi("dblclick","onDoubleClick"),mi("focusin","onFocus"),mi("focusout","onBlur"),mi(Rx,"onTransitionRun"),mi(Cx,"onTransitionStart"),mi(wx,"onTransitionCancel"),mi(Rp,"onTransitionEnd"),Kt("onMouseEnter",["mouseout","mouseover"]),Kt("onMouseLeave",["mouseout","mouseover"]),Kt("onPointerEnter",["pointerout","pointerover"]),Kt("onPointerLeave",["pointerout","pointerover"]),Nt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Nt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Nt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Nt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Nt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Nt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var So="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(So));function Zg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var h=void 0;if(n)for(var x=o.length-1;0<=x;x--){var b=o[x],P=b.instance,$=b.currentTarget;if(b=b.listener,P!==h&&u.isPropagationStopped())break t;h=b,u.currentTarget=$;try{h(u)}catch(lt){ll(lt)}u.currentTarget=null,h=P}else for(x=0;x<o.length;x++){if(b=o[x],P=b.instance,$=b.currentTarget,b=b.listener,P!==h&&u.isPropagationStopped())break t;h=b,u.currentTarget=$;try{h(u)}catch(lt){ll(lt)}u.currentTarget=null,h=P}}}}function ge(e,n){var a=n[Hs];a===void 0&&(a=n[Hs]=new Set);var o=e+"__bubble";a.has(o)||(jg(n,e,2,!1),a.add(o))}function If(e,n,a){var o=0;n&&(o|=4),jg(a,e,o,n)}var Zl="_reactListening"+Math.random().toString(36).slice(2);function Hf(e){if(!e[Zl]){e[Zl]=!0,Ut.forEach(function(a){a!=="selectionchange"&&(hS.has(a)||If(a,!1,e),If(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Zl]||(n[Zl]=!0,If("selectionchange",!1,n))}}function jg(e,n,a,o){switch(T_(n)){case 2:var u=HS;break;case 8:u=GS;break;default:u=eh}a=u.bind(null,n,a,e),u=void 0,!ru||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Gf(e,n,a,o,u){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var x=o.tag;if(x===3||x===4){var b=o.stateNode.containerInfo;if(b===u)break;if(x===4)for(x=o.return;x!==null;){var P=x.tag;if((P===3||P===4)&&x.stateNode.containerInfo===u)return;x=x.return}for(;b!==null;){if(x=k(b),x===null)return;if(P=x.tag,P===5||P===6||P===26||P===27){o=h=x;continue t}b=b.parentNode}}o=o.return}tp(function(){var $=h,lt=iu(a),dt=[];t:{var et=Cp.get(e);if(et!==void 0){var rt=rl,Ht=e;switch(e){case"keypress":if(il(a)===0)break t;case"keydown":case"keyup":rt=rx;break;case"focusin":Ht="focus",rt=cu;break;case"focusout":Ht="blur",rt=cu;break;case"beforeblur":case"afterblur":rt=cu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":rt=ip;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":rt=Y0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":rt=lx;break;case Tp:case bp:case Ap:rt=K0;break;case Rp:rt=ux;break;case"scroll":case"scrollend":rt=W0;break;case"wheel":rt=hx;break;case"copy":case"cut":case"paste":rt=J0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":rt=rp;break;case"toggle":case"beforetoggle":rt=px}var ee=(n&4)!==0,Fe=!ee&&(e==="scroll"||e==="scrollend"),q=ee?et!==null?et+"Capture":null:et;ee=[];for(var H=$,J;H!==null;){var ht=H;if(J=ht.stateNode,ht=ht.tag,ht!==5&&ht!==26&&ht!==27||J===null||q===null||(ht=Gs(H,q),ht!=null&&ee.push(yo(H,ht,J))),Fe)break;H=H.return}0<ee.length&&(et=new rt(et,Ht,null,a,lt),dt.push({event:et,listeners:ee}))}}if((n&7)===0){t:{if(et=e==="mouseover"||e==="pointerover",rt=e==="mouseout"||e==="pointerout",et&&a!==nu&&(Ht=a.relatedTarget||a.fromElement)&&(k(Ht)||Ht[da]))break t;if((rt||et)&&(et=lt.window===lt?lt:(et=lt.ownerDocument)?et.defaultView||et.parentWindow:window,rt?(Ht=a.relatedTarget||a.toElement,rt=$,Ht=Ht?k(Ht):null,Ht!==null&&(Fe=c(Ht),ee=Ht.tag,Ht!==Fe||ee!==5&&ee!==27&&ee!==6)&&(Ht=null)):(rt=null,Ht=$),rt!==Ht)){if(ee=ip,ht="onMouseLeave",q="onMouseEnter",H="mouse",(e==="pointerout"||e==="pointerover")&&(ee=rp,ht="onPointerLeave",q="onPointerEnter",H="pointer"),Fe=rt==null?et:at(rt),J=Ht==null?et:at(Ht),et=new ee(ht,H+"leave",rt,a,lt),et.target=Fe,et.relatedTarget=J,ht=null,k(lt)===$&&(ee=new ee(q,H+"enter",Ht,a,lt),ee.target=J,ee.relatedTarget=Fe,ht=ee),Fe=ht,rt&&Ht)e:{for(ee=dS,q=rt,H=Ht,J=0,ht=q;ht;ht=ee(ht))J++;ht=0;for(var te=H;te;te=ee(te))ht++;for(;0<J-ht;)q=ee(q),J--;for(;0<ht-J;)H=ee(H),ht--;for(;J--;){if(q===H||H!==null&&q===H.alternate){ee=q;break e}q=ee(q),H=ee(H)}ee=null}else ee=null;rt!==null&&Kg(dt,et,rt,ee,!1),Ht!==null&&Fe!==null&&Kg(dt,Fe,Ht,ee,!0)}}t:{if(et=$?at($):window,rt=et.nodeName&&et.nodeName.toLowerCase(),rt==="select"||rt==="input"&&et.type==="file")var Ae=dp;else if(fp(et))if(pp)Ae=Tx;else{Ae=Mx;var kt=yx}else rt=et.nodeName,!rt||rt.toLowerCase()!=="input"||et.type!=="checkbox"&&et.type!=="radio"?$&&eu($.elementType)&&(Ae=dp):Ae=Ex;if(Ae&&(Ae=Ae(e,$))){hp(dt,Ae,a,lt);break t}kt&&kt(e,et,$),e==="focusout"&&$&&et.type==="number"&&$.memoizedProps.value!=null&&dn(et,"number",et.value)}switch(kt=$?at($):window,e){case"focusin":(fp(kt)||kt.contentEditable==="true")&&(Br=kt,mu=$,js=null);break;case"focusout":js=mu=Br=null;break;case"mousedown":gu=!0;break;case"contextmenu":case"mouseup":case"dragend":gu=!1,Mp(dt,a,lt);break;case"selectionchange":if(Ax)break;case"keydown":case"keyup":Mp(dt,a,lt)}var ce;if(fu)t:{switch(e){case"compositionstart":var Se="onCompositionStart";break t;case"compositionend":Se="onCompositionEnd";break t;case"compositionupdate":Se="onCompositionUpdate";break t}Se=void 0}else zr?cp(e,a)&&(Se="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Se="onCompositionStart");Se&&(sp&&a.locale!=="ko"&&(zr||Se!=="onCompositionStart"?Se==="onCompositionEnd"&&zr&&(ce=ep()):(pa=lt,su="value"in pa?pa.value:pa.textContent,zr=!0)),kt=jl($,Se),0<kt.length&&(Se=new ap(Se,e,null,a,lt),dt.push({event:Se,listeners:kt}),ce?Se.data=ce:(ce=up(a),ce!==null&&(Se.data=ce)))),(ce=gx?_x(e,a):vx(e,a))&&(Se=jl($,"onBeforeInput"),0<Se.length&&(kt=new ap("onBeforeInput","beforeinput",null,a,lt),dt.push({event:kt,listeners:Se}),kt.data=ce)),cS(dt,e,$,a,lt)}Zg(dt,n)})}function yo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function jl(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=Gs(e,a),u!=null&&o.unshift(yo(e,u,h)),u=Gs(e,n),u!=null&&o.push(yo(e,u,h))),e.tag===3)return o;e=e.return}return[]}function dS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Kg(e,n,a,o,u){for(var h=n._reactName,x=[];a!==null&&a!==o;){var b=a,P=b.alternate,$=b.stateNode;if(b=b.tag,P!==null&&P===o)break;b!==5&&b!==26&&b!==27||$===null||(P=$,u?($=Gs(a,h),$!=null&&x.unshift(yo(a,$,P))):u||($=Gs(a,h),$!=null&&x.push(yo(a,$,P)))),a=a.return}x.length!==0&&e.push({event:n,listeners:x})}var pS=/\r\n?/g,mS=/\u0000|\uFFFD/g;function Qg(e){return(typeof e=="string"?e:""+e).replace(pS,`
`).replace(mS,"")}function Jg(e,n){return n=Qg(n),Qg(e)===n}function Be(e,n,a,o,u,h){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Nr(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Nr(e,""+o);break;case"className":Ue(e,"class",o);break;case"tabIndex":Ue(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Ue(e,a,o);break;case"style":Jd(e,o,h);break;case"data":if(n!=="object"){Ue(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=el(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&Be(e,n,"name",u.name,u,null),Be(e,n,"formEncType",u.formEncType,u,null),Be(e,n,"formMethod",u.formMethod,u,null),Be(e,n,"formTarget",u.formTarget,u,null)):(Be(e,n,"encType",u.encType,u,null),Be(e,n,"method",u.method,u,null),Be(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=el(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Ii);break;case"onScroll":o!=null&&ge("scroll",e);break;case"onScrollEnd":o!=null&&ge("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=el(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":ge("beforetoggle",e),ge("toggle",e),Ge(e,"popover",o);break;case"xlinkActuate":pe(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":pe(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":pe(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":pe(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":pe(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":pe(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":pe(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":pe(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":pe(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ge(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=X0.get(a)||a,Ge(e,a,o))}}function Vf(e,n,a,o,u,h){switch(a){case"style":Jd(e,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Nr(e,o):(typeof o=="number"||typeof o=="bigint")&&Nr(e,""+o);break;case"onScroll":o!=null&&ge("scroll",e);break;case"onScrollEnd":o!=null&&ge("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Ii);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Gt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),h=e[Sn]||null,h=h!=null?h[a]:null,typeof h=="function"&&e.removeEventListener(n,h,u),typeof o=="function")){typeof h!="function"&&h!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Ge(e,a,o)}}}function bn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ge("error",e),ge("load",e);var o=!1,u=!1,h;for(h in a)if(a.hasOwnProperty(h)){var x=a[h];if(x!=null)switch(h){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Be(e,n,h,x,a,null)}}u&&Be(e,n,"srcSet",a.srcSet,a,null),o&&Be(e,n,"src",a.src,a,null);return;case"input":ge("invalid",e);var b=h=x=u=null,P=null,$=null;for(o in a)if(a.hasOwnProperty(o)){var lt=a[o];if(lt!=null)switch(o){case"name":u=lt;break;case"type":x=lt;break;case"checked":P=lt;break;case"defaultChecked":$=lt;break;case"value":h=lt;break;case"defaultValue":b=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(r(137,n));break;default:Be(e,n,o,lt,a,null)}}Ln(e,h,b,P,$,x,u,!1);return;case"select":ge("invalid",e),o=x=h=null;for(u in a)if(a.hasOwnProperty(u)&&(b=a[u],b!=null))switch(u){case"value":h=b;break;case"defaultValue":x=b;break;case"multiple":o=b;default:Be(e,n,u,b,a,null)}n=h,a=x,e.multiple=!!o,n!=null?tn(e,!!o,n,!1):a!=null&&tn(e,!!o,a,!0);return;case"textarea":ge("invalid",e),h=u=o=null;for(x in a)if(a.hasOwnProperty(x)&&(b=a[x],b!=null))switch(x){case"value":o=b;break;case"defaultValue":u=b;break;case"children":h=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(r(91));break;default:Be(e,n,x,b,a,null)}Ri(e,o,u,h);return;case"option":for(P in a)a.hasOwnProperty(P)&&(o=a[P],o!=null)&&(P==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":Be(e,n,P,o,a,null));return;case"dialog":ge("beforetoggle",e),ge("toggle",e),ge("cancel",e),ge("close",e);break;case"iframe":case"object":ge("load",e);break;case"video":case"audio":for(o=0;o<So.length;o++)ge(So[o],e);break;case"image":ge("error",e),ge("load",e);break;case"details":ge("toggle",e);break;case"embed":case"source":case"link":ge("error",e),ge("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(o=a[$],o!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Be(e,n,$,o,a,null)}return;default:if(eu(n)){for(lt in a)a.hasOwnProperty(lt)&&(o=a[lt],o!==void 0&&Vf(e,n,lt,o,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(o=a[b],o!=null&&Be(e,n,b,o,a,null))}function gS(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,x=null,b=null,P=null,$=null,lt=null;for(rt in a){var dt=a[rt];if(a.hasOwnProperty(rt)&&dt!=null)switch(rt){case"checked":break;case"value":break;case"defaultValue":P=dt;default:o.hasOwnProperty(rt)||Be(e,n,rt,null,o,dt)}}for(var et in o){var rt=o[et];if(dt=a[et],o.hasOwnProperty(et)&&(rt!=null||dt!=null))switch(et){case"type":h=rt;break;case"name":u=rt;break;case"checked":$=rt;break;case"defaultChecked":lt=rt;break;case"value":x=rt;break;case"defaultValue":b=rt;break;case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(r(137,n));break;default:rt!==dt&&Be(e,n,et,rt,o,dt)}}An(e,x,b,P,$,lt,h,u);return;case"select":rt=x=b=et=null;for(h in a)if(P=a[h],a.hasOwnProperty(h)&&P!=null)switch(h){case"value":break;case"multiple":rt=P;default:o.hasOwnProperty(h)||Be(e,n,h,null,o,P)}for(u in o)if(h=o[u],P=a[u],o.hasOwnProperty(u)&&(h!=null||P!=null))switch(u){case"value":et=h;break;case"defaultValue":b=h;break;case"multiple":x=h;default:h!==P&&Be(e,n,u,h,o,P)}n=b,a=x,o=rt,et!=null?tn(e,!!a,et,!1):!!o!=!!a&&(n!=null?tn(e,!!a,n,!0):tn(e,!!a,a?[]:"",!1));return;case"textarea":rt=et=null;for(b in a)if(u=a[b],a.hasOwnProperty(b)&&u!=null&&!o.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Be(e,n,b,null,o,u)}for(x in o)if(u=o[x],h=a[x],o.hasOwnProperty(x)&&(u!=null||h!=null))switch(x){case"value":et=u;break;case"defaultValue":rt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==h&&Be(e,n,x,u,o,h)}Lr(e,et,rt);return;case"option":for(var Ht in a)et=a[Ht],a.hasOwnProperty(Ht)&&et!=null&&!o.hasOwnProperty(Ht)&&(Ht==="selected"?e.selected=!1:Be(e,n,Ht,null,o,et));for(P in o)et=o[P],rt=a[P],o.hasOwnProperty(P)&&et!==rt&&(et!=null||rt!=null)&&(P==="selected"?e.selected=et&&typeof et!="function"&&typeof et!="symbol":Be(e,n,P,et,o,rt));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ee in a)et=a[ee],a.hasOwnProperty(ee)&&et!=null&&!o.hasOwnProperty(ee)&&Be(e,n,ee,null,o,et);for($ in o)if(et=o[$],rt=a[$],o.hasOwnProperty($)&&et!==rt&&(et!=null||rt!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(et!=null)throw Error(r(137,n));break;default:Be(e,n,$,et,o,rt)}return;default:if(eu(n)){for(var Fe in a)et=a[Fe],a.hasOwnProperty(Fe)&&et!==void 0&&!o.hasOwnProperty(Fe)&&Vf(e,n,Fe,void 0,o,et);for(lt in o)et=o[lt],rt=a[lt],!o.hasOwnProperty(lt)||et===rt||et===void 0&&rt===void 0||Vf(e,n,lt,et,o,rt);return}}for(var q in a)et=a[q],a.hasOwnProperty(q)&&et!=null&&!o.hasOwnProperty(q)&&Be(e,n,q,null,o,et);for(dt in o)et=o[dt],rt=a[dt],!o.hasOwnProperty(dt)||et===rt||et==null&&rt==null||Be(e,n,dt,et,o,rt)}function $g(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function _S(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],h=u.transferSize,x=u.initiatorType,b=u.duration;if(h&&b&&$g(x)){for(x=0,b=u.responseEnd,o+=1;o<a.length;o++){var P=a[o],$=P.startTime;if($>b)break;var lt=P.transferSize,dt=P.initiatorType;lt&&$g(dt)&&(P=P.responseEnd,x+=lt*(P<b?1:(b-$)/(P-$)))}if(--o,n+=8*(h+x)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Xf=null,kf=null;function Kl(e){return e.nodeType===9?e:e.ownerDocument}function t_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function e_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Wf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var qf=null;function vS(){var e=window.event;return e&&e.type==="popstate"?e===qf?!1:(qf=e,!0):(qf=null,!1)}var n_=typeof setTimeout=="function"?setTimeout:void 0,xS=typeof clearTimeout=="function"?clearTimeout:void 0,i_=typeof Promise=="function"?Promise:void 0,SS=typeof queueMicrotask=="function"?queueMicrotask:typeof i_<"u"?function(e){return i_.resolve(null).then(e).catch(yS)}:n_;function yS(e){setTimeout(function(){throw e})}function Ua(e){return e==="head"}function a_(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),us(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Mo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Mo(a);for(var h=a.firstChild;h;){var x=h.nextSibling,b=h.nodeName;h[Ka]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&h.rel.toLowerCase()==="stylesheet"||a.removeChild(h),h=x}}else a==="body"&&Mo(e.ownerDocument.body);a=u}while(a);us(n)}function r_(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function Yf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Yf(a),R(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function MS(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Ka])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=ui(e.nextSibling),e===null)break}return null}function ES(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=ui(e.nextSibling),e===null))return null;return e}function s_(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=ui(e.nextSibling),e===null))return null;return e}function Zf(e){return e.data==="$?"||e.data==="$~"}function jf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function TS(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function ui(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Kf=null;function o_(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return ui(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function l_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function c_(e,n,a){switch(n=Kl(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Mo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);R(e)}var fi=new Map,u_=new Set;function Ql(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ea=Z.d;Z.d={f:bS,r:AS,D:RS,C:CS,L:wS,m:DS,X:LS,S:US,M:NS};function bS(){var e=ea.f(),n=Vl();return e||n}function AS(e){var n=it(e);n!==null&&n.tag===5&&n.type==="form"?Rm(n):ea.r(e)}var os=typeof document>"u"?null:document;function f_(e,n,a){var o=os;if(o&&typeof n=="string"&&n){var u=ve(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),u_.has(u)||(u_.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),bn(n,"link",e),vt(n),o.head.appendChild(n)))}}function RS(e){ea.D(e),f_("dns-prefetch",e,null)}function CS(e,n){ea.C(e,n),f_("preconnect",e,n)}function wS(e,n,a){ea.L(e,n,a);var o=os;if(o&&e&&n){var u='link[rel="preload"][as="'+ve(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+ve(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+ve(a.imageSizes)+'"]')):u+='[href="'+ve(e)+'"]';var h=u;switch(n){case"style":h=ls(e);break;case"script":h=cs(e)}fi.has(h)||(e=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),fi.set(h,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Eo(h))||n==="script"&&o.querySelector(To(h))||(n=o.createElement("link"),bn(n,"link",e),vt(n),o.head.appendChild(n)))}}function DS(e,n){ea.m(e,n);var a=os;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+ve(o)+'"][href="'+ve(e)+'"]',h=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=cs(e)}if(!fi.has(h)&&(e=_({rel:"modulepreload",href:e},n),fi.set(h,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(To(h)))return}o=a.createElement("link"),bn(o,"link",e),vt(o),a.head.appendChild(o)}}}function US(e,n,a){ea.S(e,n,a);var o=os;if(o&&e){var u=W(o).hoistableStyles,h=ls(e);n=n||"default";var x=u.get(h);if(!x){var b={loading:0,preload:null};if(x=o.querySelector(Eo(h)))b.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},a),(a=fi.get(h))&&Qf(e,a);var P=x=o.createElement("link");vt(P),bn(P,"link",e),P._p=new Promise(function($,lt){P.onload=$,P.onerror=lt}),P.addEventListener("load",function(){b.loading|=1}),P.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Jl(x,n,o)}x={type:"stylesheet",instance:x,count:1,state:b},u.set(h,x)}}}function LS(e,n){ea.X(e,n);var a=os;if(a&&e){var o=W(a).hoistableScripts,u=cs(e),h=o.get(u);h||(h=a.querySelector(To(u)),h||(e=_({src:e,async:!0},n),(n=fi.get(u))&&Jf(e,n),h=a.createElement("script"),vt(h),bn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function NS(e,n){ea.M(e,n);var a=os;if(a&&e){var o=W(a).hoistableScripts,u=cs(e),h=o.get(u);h||(h=a.querySelector(To(u)),h||(e=_({src:e,async:!0,type:"module"},n),(n=fi.get(u))&&Jf(e,n),h=a.createElement("script"),vt(h),bn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function h_(e,n,a,o){var u=(u=_t.current)?Ql(u):null;if(!u)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ls(a.href),a=W(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=ls(a.href);var h=W(u).hoistableStyles,x=h.get(e);if(x||(u=u.ownerDocument||u,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,x),(h=u.querySelector(Eo(e)))&&!h._p&&(x.instance=h,x.state.loading=5),fi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},fi.set(e,a),h||OS(u,e,a,x.state))),n&&o===null)throw Error(r(528,""));return x}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=cs(a),a=W(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function ls(e){return'href="'+ve(e)+'"'}function Eo(e){return'link[rel="stylesheet"]['+e+"]"}function d_(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function OS(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),bn(n,"link",a),vt(n),e.head.appendChild(n))}function cs(e){return'[src="'+ve(e)+'"]'}function To(e){return"script[async]"+e}function p_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+ve(a.href)+'"]');if(o)return n.instance=o,vt(o),o;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),vt(o),bn(o,"style",u),Jl(o,a.precedence,e),n.instance=o;case"stylesheet":u=ls(a.href);var h=e.querySelector(Eo(u));if(h)return n.state.loading|=4,n.instance=h,vt(h),h;o=d_(a),(u=fi.get(u))&&Qf(o,u),h=(e.ownerDocument||e).createElement("link"),vt(h);var x=h;return x._p=new Promise(function(b,P){x.onload=b,x.onerror=P}),bn(h,"link",o),n.state.loading|=4,Jl(h,a.precedence,e),n.instance=h;case"script":return h=cs(a.src),(u=e.querySelector(To(h)))?(n.instance=u,vt(u),u):(o=a,(u=fi.get(h))&&(o=_({},a),Jf(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),vt(u),bn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Jl(o,a.precedence,e));return n.instance}function Jl(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,h=u,x=0;x<o.length;x++){var b=o[x];if(b.dataset.precedence===n)h=b;else if(h!==u)break}h?h.parentNode.insertBefore(e,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Qf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Jf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var $l=null;function m_(e,n,a){if($l===null){var o=new Map,u=$l=new Map;u.set(a,o)}else u=$l,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var h=a[u];if(!(h[Ka]||h[sn]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var x=h.getAttribute(n)||"";x=e+x;var b=o.get(x);b?b.push(h):o.set(x,[h])}}return o}function g_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function PS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function __(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function zS(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=ls(o.href),h=n.querySelector(Eo(u));if(h){n=h._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=tc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=h,vt(h);return}h=n.ownerDocument||n,o=d_(o),(u=fi.get(u))&&Qf(o,u),h=h.createElement("link"),vt(h);var x=h;x._p=new Promise(function(b,P){x.onload=b,x.onerror=P}),bn(h,"link",o),a.instance=h}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=tc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var $f=0;function BS(e,n){return e.stylesheets&&e.count===0&&nc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&nc(e,e.stylesheets),e.unsuspend){var h=e.unsuspend;e.unsuspend=null,h()}},6e4+n);0<e.imgBytes&&$f===0&&($f=62500*_S());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&nc(e,e.stylesheets),e.unsuspend)){var h=e.unsuspend;e.unsuspend=null,h()}},(e.imgBytes>$f?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function tc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)nc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ec=null;function nc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ec=new Map,n.forEach(FS,e),ec=null,tc.call(e))}function FS(e,n){if(!(n.state.loading&4)){var a=ec.get(e);if(a)var o=a.get(null);else{a=new Map,ec.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var x=u[h];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),o=x)}o&&a.set(null,o)}u=n.instance,x=u.getAttribute("data-precedence"),h=a.get(x)||o,h===o&&a.set(null,u),a.set(x,u),this.count++,o=tc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),h?h.parentNode.insertBefore(u,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var bo={$$typeof:U,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function IS(e,n,a,o,u,h,x,b,P){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Te(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Te(0),this.hiddenUpdates=Te(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=P,this.incompleteTransitions=new Map}function v_(e,n,a,o,u,h,x,b,P,$,lt,dt){return e=new IS(e,n,a,x,P,$,lt,dt,b),n=1,h===!0&&(n|=24),h=Zn(3,null,null,n),e.current=h,h.stateNode=e,n=Uu(),n.refCount++,e.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:a,cache:n},Pu(h),e}function x_(e){return e?(e=Hr,e):Hr}function S_(e,n,a,o,u,h){u=x_(u),o.context===null?o.context=u:o.pendingContext=u,o=Sa(n),o.payload={element:a},h=h===void 0?null:h,h!==null&&(o.callback=h),a=ya(e,o,n),a!==null&&(Hn(a,e,n),no(a,e,n))}function y_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function th(e,n){y_(e,n),(e=e.alternate)&&y_(e,n)}function M_(e){if(e.tag===13||e.tag===31){var n=er(e,67108864);n!==null&&Hn(n,e,67108864),th(e,67108864)}}function E_(e){if(e.tag===13||e.tag===31){var n=$n();n=Dr(n);var a=er(e,n);a!==null&&Hn(a,e,n),th(e,n)}}var ic=!0;function HS(e,n,a,o){var u=O.T;O.T=null;var h=Z.p;try{Z.p=2,eh(e,n,a,o)}finally{Z.p=h,O.T=u}}function GS(e,n,a,o){var u=O.T;O.T=null;var h=Z.p;try{Z.p=8,eh(e,n,a,o)}finally{Z.p=h,O.T=u}}function eh(e,n,a,o){if(ic){var u=nh(o);if(u===null)Gf(e,n,o,ac,a),b_(e,o);else if(XS(u,e,n,a,o))o.stopPropagation();else if(b_(e,o),n&4&&-1<VS.indexOf(e)){for(;u!==null;){var h=it(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var x=yt(h.pendingLanes);if(x!==0){var b=h;for(b.pendingLanes|=2,b.entangledLanes|=2;x;){var P=1<<31-Pt(x);b.entanglements[1]|=P,x&=~P}Ui(h),(we&6)===0&&(Hl=T()+500,xo(0))}}break;case 31:case 13:b=er(h,2),b!==null&&Hn(b,h,2),Vl(),th(h,2)}if(h=nh(o),h===null&&Gf(e,n,o,ac,a),h===u)break;u=h}u!==null&&o.stopPropagation()}else Gf(e,n,o,null,a)}}function nh(e){return e=iu(e),ih(e)}var ac=null;function ih(e){if(ac=null,e=k(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return ac=e,null}function T_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(tt()){case ut:return 2;case St:return 8;case ot:case Yt:return 32;case Rt:return 268435456;default:return 32}default:return 32}}var ah=!1,La=null,Na=null,Oa=null,Ao=new Map,Ro=new Map,Pa=[],VS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function b_(e,n){switch(e){case"focusin":case"focusout":La=null;break;case"dragenter":case"dragleave":Na=null;break;case"mouseover":case"mouseout":Oa=null;break;case"pointerover":case"pointerout":Ao.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ro.delete(n.pointerId)}}function Co(e,n,a,o,u,h){return e===null||e.nativeEvent!==h?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:h,targetContainers:[u]},n!==null&&(n=it(n),n!==null&&M_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function XS(e,n,a,o,u){switch(n){case"focusin":return La=Co(La,e,n,a,o,u),!0;case"dragenter":return Na=Co(Na,e,n,a,o,u),!0;case"mouseover":return Oa=Co(Oa,e,n,a,o,u),!0;case"pointerover":var h=u.pointerId;return Ao.set(h,Co(Ao.get(h)||null,e,n,a,o,u)),!0;case"gotpointercapture":return h=u.pointerId,Ro.set(h,Co(Ro.get(h)||null,e,n,a,o,u)),!0}return!1}function A_(e){var n=k(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,Is(e.priority,function(){E_(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,Is(e.priority,function(){E_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function rc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=nh(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);nu=o,a.target.dispatchEvent(o),nu=null}else return n=it(a),n!==null&&M_(n),e.blockedOn=a,!1;n.shift()}return!0}function R_(e,n,a){rc(e)&&a.delete(n)}function kS(){ah=!1,La!==null&&rc(La)&&(La=null),Na!==null&&rc(Na)&&(Na=null),Oa!==null&&rc(Oa)&&(Oa=null),Ao.forEach(R_),Ro.forEach(R_)}function sc(e,n){e.blockedOn===n&&(e.blockedOn=null,ah||(ah=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,kS)))}var oc=null;function C_(e){oc!==e&&(oc=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){oc===e&&(oc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(ih(o||a)===null)continue;break}var h=it(a);h!==null&&(e.splice(n,3),n-=3,ef(h,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function us(e){function n(P){return sc(P,e)}La!==null&&sc(La,e),Na!==null&&sc(Na,e),Oa!==null&&sc(Oa,e),Ao.forEach(n),Ro.forEach(n);for(var a=0;a<Pa.length;a++){var o=Pa[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Pa.length&&(a=Pa[0],a.blockedOn===null);)A_(a),a.blockedOn===null&&Pa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],h=a[o+1],x=u[Sn]||null;if(typeof h=="function")x||C_(a);else if(x){var b=null;if(h&&h.hasAttribute("formAction")){if(u=h,x=h[Sn]||null)b=x.formAction;else if(ih(u)!==null)continue}else b=x.action;typeof b=="function"?a[o+1]=b:(a.splice(o,3),o-=3),C_(a)}}}function w_(){function e(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(x){return u=x})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function rh(e){this._internalRoot=e}lc.prototype.render=rh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=$n();S_(a,o,e,n,null,null)},lc.prototype.unmount=rh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;S_(e.current,2,null,e,null,null),Vl(),n[da]=null}};function lc(e){this._internalRoot=e}lc.prototype.unstable_scheduleHydration=function(e){if(e){var n=ja();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Pa.length&&n!==0&&n<Pa[a].priority;a++);Pa.splice(a,0,e),a===0&&A_(e)}};var D_=t.version;if(D_!=="19.2.8")throw Error(r(527,D_,"19.2.8"));Z.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=p(n),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var WS={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cc.isDisabled&&cc.supportsFiber)try{Tt=cc.inject(WS),Ct=cc}catch{}}return Do.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,o="",u=Bm,h=Fm,x=Im;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=v_(e,1,!1,null,null,a,o,null,u,h,x,w_),e[da]=n.current,Hf(e),new rh(n)},Do.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var o=!1,u="",h=Bm,x=Fm,b=Im,P=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.formState!==void 0&&(P=a.formState)),n=v_(e,1,!0,n,a??null,o,u,P,h,x,b,w_),n.context=x_(null),a=n.current,o=$n(),o=Dr(o),u=Sa(o),u.callback=null,ya(a,u,o),a=o,n.current.lanes=a,Un(n,a),Ui(n),e[da]=n.current,Hf(e),new lc(n)},Do.version="19.2.8",Do}var H_;function ny(){if(H_)return lh.exports;H_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),lh.exports=ey(),lh.exports}var iy=ny();const ay=Qv(iy);function ry(){return Xt.jsxs("footer",{className:"site-footer",children:[Xt.jsx("span",{children:"Citation details will appear here when available."}),Xt.jsx("a",{href:"#top",children:"Back to top"})]})}function sy(){return Xt.jsxs("header",{className:"site-header","aria-label":"Site header",children:[Xt.jsx("a",{className:"site-mark",href:"#top",children:"Timber cities and freshwater"}),Xt.jsxs("nav",{className:"site-nav","aria-label":"Main navigation",children:[Xt.jsx("a",{href:"#visualisation",children:"Interactive visualisation"}),Xt.jsx("a",{href:"#animations",children:"Global analyses"})]})]})}const G_={title:"Timber cities and freshwater resources",authors:"Alperen Yayla, César Terrer & Rupert J. Myers"},oy=[{id:"main",name:"Main scenario",description:"Central model configuration for the global timber city transition.",freshwaterLoss:.72,waterStress:.68,plantationExpansion:.74},{id:"land-use",name:"Sensitivity scenario 1",description:"Alternative land-use response for testing plantation expansion assumptions.",freshwaterLoss:.56,waterStress:.52,plantationExpansion:.48},{id:"demand",name:"Sensitivity scenario 2",description:"Alternative timber demand pathway for testing transition intensity.",freshwaterLoss:.64,waterStress:.6,plantationExpansion:.62},{id:"stress",name:"Sensitivity scenario 3",description:"Alternative freshwater stress response for testing hydrological sensitivity.",freshwaterLoss:.81,waterStress:.78,plantationExpansion:.7}],hh=s=>`/timbercitiesfreshwater/${s}`,uc=s=>[{id:"forest-composition",title:"Forest composition",caption:"Main scenario animation showing forest composition changes from 2020 to 2099.",src:hh(`videos/${s}/forest_composition_SSP2_90pct_2020_2099_matplotlib.mp4`)},{id:"forest-precipitation-volumes",title:"Forest precipitation volumes",caption:"Main scenario animation showing precipitation-related freshwater volumes over time.",src:hh(`videos/${s}/forest_precipitation_volumes_SSP2_90pct_2020_2099_matplotlib.mp4`)},{id:"cumulative-freshwater-change",title:"Cumulative freshwater change",caption:"Main scenario animation showing cumulative freshwater change relative to the baseline.",src:hh(`videos/${s}/difference_cumulative_freshwater_change_SSP2_90pct_minus_SSP2_BAU_2020_2099_matplotlib.mp4`)}],fc=[{id:"main",name:"Main scenario",title:"Main scenario",summary:"Future plantation expansion is allocated hierarchically, beginning within the country where demand is assigned. Semi-natural forest areas closest to existing plantations are converted first. If country level area is insufficient, remaining demand is allocated within the corresponding United Nations subregion and then region, always prioritising areas nearest existing plantations.",videos:uc("main")},{id:"homogeneous",name:"Homogeneous allocation",title:"Homogeneous allocation within United Nations subregions",summary:"Future plantation expansion is distributed homogeneously across eligible semi-natural forest areas within each United Nations subregion. Unlike the main scenario, distance from existing plantations does not affect allocation. If subregional area is insufficient, remaining demand is distributed across the corresponding United Nations region, producing a more spatially dispersed pattern of plantation expansion.",videos:uc("homogenous")},{id:"regional-seeded",name:"Regional seeded clusters",title:"Seeded cluster expansion within United Nations regions",summary:"Country level plantation demand is aggregated within each United Nations region. Spatially separated seed locations are selected from existing plantations near semi-natural forests, with the number of seeds scaled to available semi-natural forest area. Regional plantation demand is then allocated around these seeds, producing clustered plantation expansion within each United Nations region.",videos:uc("regional-seeded")},{id:"global-seeded",name:"Global seeded clusters",title:"Global seeded cluster expansion",summary:"Country level plantation demand is aggregated globally and allocated without country or regional boundaries. Spatially separated seed locations are selected within United Nations regions from existing plantations near semi-natural forests, with the number of seeds scaled to available semi-natural forest area. Global plantation demand is then allocated around these seeds, producing clustered expansion worldwide.",videos:uc("global-seeded")}];const Fd="179",ly=0,V_=1,cy=2,Jv=1,uy=2,oa=3,Ya=0,Vn=1,la=2,ka=0,As=1,X_=2,k_=3,W_=4,fy=5,Mr=100,hy=101,dy=102,py=103,my=104,gy=200,_y=201,vy=202,xy=203,Zh=204,jh=205,Sy=206,yy=207,My=208,Ey=209,Ty=210,by=211,Ay=212,Ry=213,Cy=214,Kh=0,Qh=1,Jh=2,ws=3,$h=4,td=5,ed=6,nd=7,$v=0,wy=1,Dy=2,Wa=0,Uy=1,Ly=2,Ny=3,Oy=4,Py=5,zy=6,By=7,t0=300,Ds=301,Us=302,id=303,ad=304,Kc=306,rd=1e3,Tr=1001,sd=1002,Ti=1003,Fy=1004,hc=1005,Ni=1006,dh=1007,br=1008,fa=1009,e0=1010,n0=1011,Vo=1012,Id=1013,Ar=1014,ca=1015,jo=1016,Hd=1017,Gd=1018,Xo=1020,i0=35902,a0=1021,r0=1022,Ei=1023,ko=1026,Wo=1027,s0=1028,Vd=1029,o0=1030,Xd=1031,kd=1033,Fc=33776,Ic=33777,Hc=33778,Gc=33779,od=35840,ld=35841,cd=35842,ud=35843,fd=36196,hd=37492,dd=37496,pd=37808,md=37809,gd=37810,_d=37811,vd=37812,xd=37813,Sd=37814,yd=37815,Md=37816,Ed=37817,Td=37818,bd=37819,Ad=37820,Rd=37821,Vc=36492,Cd=36494,wd=36495,l0=36283,Dd=36284,Ud=36285,Ld=36286,Iy=3200,Hy=3201,Gy=0,Vy=1,Xa="",di="srgb",Ls="srgb-linear",Wc="linear",Ie="srgb",fs=7680,q_=519,Xy=512,ky=513,Wy=514,c0=515,qy=516,Yy=517,Zy=518,jy=519,Y_=35044,Z_="300 es",Oi=2e3,qc=2001;class Ps{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ph=Math.PI/180,Nd=180/Math.PI;function zs(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Cn[s&255]+Cn[s>>8&255]+Cn[s>>16&255]+Cn[s>>24&255]+"-"+Cn[t&255]+Cn[t>>8&255]+"-"+Cn[t>>16&15|64]+Cn[t>>24&255]+"-"+Cn[i&63|128]+Cn[i>>8&255]+"-"+Cn[i>>16&255]+Cn[i>>24&255]+Cn[r&255]+Cn[r>>8&255]+Cn[r>>16&255]+Cn[r>>24&255]).toLowerCase()}function _e(s,t,i){return Math.max(t,Math.min(i,s))}function Ky(s,t){return(s%t+t)%t}function mh(s,t,i){return(1-i)*s+i*t}function Uo(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Gn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Jt{constructor(t=0,i=0){Jt.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=_e(this.x,t.x,i.x),this.y=_e(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=_e(this.x,t,i),this.y=_e(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_e(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(_e(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*r-f*l+t.x,this.y=c*l+f*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ko{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,c,f,d){let m=r[l+0],p=r[l+1],g=r[l+2],_=r[l+3];const S=c[f+0],y=c[f+1],E=c[f+2],A=c[f+3];if(d===0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=_;return}if(d===1){t[i+0]=S,t[i+1]=y,t[i+2]=E,t[i+3]=A;return}if(_!==A||m!==S||p!==y||g!==E){let M=1-d;const v=m*S+p*y+g*E+_*A,z=v>=0?1:-1,U=1-v*v;if(U>Number.EPSILON){const G=Math.sqrt(U),X=Math.atan2(G,v*z);M=Math.sin(M*X)/G,d=Math.sin(d*X)/G}const C=d*z;if(m=m*M+S*C,p=p*M+y*C,g=g*M+E*C,_=_*M+A*C,M===1-d){const G=1/Math.sqrt(m*m+p*p+g*g+_*_);m*=G,p*=G,g*=G,_*=G}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=_}static multiplyQuaternionsFlat(t,i,r,l,c,f){const d=r[l],m=r[l+1],p=r[l+2],g=r[l+3],_=c[f],S=c[f+1],y=c[f+2],E=c[f+3];return t[i]=d*E+g*_+m*y-p*S,t[i+1]=m*E+g*S+p*_-d*y,t[i+2]=p*E+g*y+d*S-m*_,t[i+3]=g*E-d*_-m*S-p*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,c=t._z,f=t._order,d=Math.cos,m=Math.sin,p=d(r/2),g=d(l/2),_=d(c/2),S=m(r/2),y=m(l/2),E=m(c/2);switch(f){case"XYZ":this._x=S*g*_+p*y*E,this._y=p*y*_-S*g*E,this._z=p*g*E+S*y*_,this._w=p*g*_-S*y*E;break;case"YXZ":this._x=S*g*_+p*y*E,this._y=p*y*_-S*g*E,this._z=p*g*E-S*y*_,this._w=p*g*_+S*y*E;break;case"ZXY":this._x=S*g*_-p*y*E,this._y=p*y*_+S*g*E,this._z=p*g*E+S*y*_,this._w=p*g*_-S*y*E;break;case"ZYX":this._x=S*g*_-p*y*E,this._y=p*y*_+S*g*E,this._z=p*g*E-S*y*_,this._w=p*g*_+S*y*E;break;case"YZX":this._x=S*g*_+p*y*E,this._y=p*y*_+S*g*E,this._z=p*g*E-S*y*_,this._w=p*g*_-S*y*E;break;case"XZY":this._x=S*g*_-p*y*E,this._y=p*y*_-S*g*E,this._z=p*g*E+S*y*_,this._w=p*g*_+S*y*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],c=i[8],f=i[1],d=i[5],m=i[9],p=i[2],g=i[6],_=i[10],S=r+d+_;if(S>0){const y=.5/Math.sqrt(S+1);this._w=.25/y,this._x=(g-m)*y,this._y=(c-p)*y,this._z=(f-l)*y}else if(r>d&&r>_){const y=2*Math.sqrt(1+r-d-_);this._w=(g-m)/y,this._x=.25*y,this._y=(l+f)/y,this._z=(c+p)/y}else if(d>_){const y=2*Math.sqrt(1+d-r-_);this._w=(c-p)/y,this._x=(l+f)/y,this._y=.25*y,this._z=(m+g)/y}else{const y=2*Math.sqrt(1+_-r-d);this._w=(f-l)/y,this._x=(c+p)/y,this._y=(m+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(_e(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,c=t._z,f=t._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=r*g+f*d+l*p-c*m,this._y=l*g+f*m+c*d-r*p,this._z=c*g+f*p+r*m-l*d,this._w=f*g-r*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,c=this._z,f=this._w;let d=f*t._w+r*t._x+l*t._y+c*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=f,this._x=r,this._y=l,this._z=c,this;const m=1-d*d;if(m<=Number.EPSILON){const y=1-i;return this._w=y*f+i*this._w,this._x=y*r+i*this._x,this._y=y*l+i*this._y,this._z=y*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,d),_=Math.sin((1-i)*g)/p,S=Math.sin(i*g)/p;return this._w=f*_+this._w*S,this._x=r*_+this._x*S,this._y=l*_+this._y*S,this._z=c*_+this._z*S,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(t=0,i=0,r=0){K.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(j_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(j_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=t.elements,f=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*f,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,c=t.x,f=t.y,d=t.z,m=t.w,p=2*(f*l-d*r),g=2*(d*i-c*l),_=2*(c*r-f*i);return this.x=i+m*p+f*_-d*g,this.y=r+m*g+d*p-c*_,this.z=l+m*_+c*g-f*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=_e(this.x,t.x,i.x),this.y=_e(this.y,t.y,i.y),this.z=_e(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=_e(this.x,t,i),this.y=_e(this.y,t,i),this.z=_e(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_e(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,c=t.z,f=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*f-r*m,this.z=r*d-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return gh.copy(this).projectOnVector(t),this.sub(gh)}reflect(t){return this.sub(gh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(_e(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const gh=new K,j_=new Ko;class ue{constructor(t,i,r,l,c,f,d,m,p){ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,f,d,m,p)}set(t,i,r,l,c,f,d,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=i,g[4]=c,g[5]=m,g[6]=r,g[7]=f,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,f=r[0],d=r[3],m=r[6],p=r[1],g=r[4],_=r[7],S=r[2],y=r[5],E=r[8],A=l[0],M=l[3],v=l[6],z=l[1],U=l[4],C=l[7],G=l[2],X=l[5],B=l[8];return c[0]=f*A+d*z+m*G,c[3]=f*M+d*U+m*X,c[6]=f*v+d*C+m*B,c[1]=p*A+g*z+_*G,c[4]=p*M+g*U+_*X,c[7]=p*v+g*C+_*B,c[2]=S*A+y*z+E*G,c[5]=S*M+y*U+E*X,c[8]=S*v+y*C+E*B,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],g=t[8];return i*f*g-i*d*p-r*c*g+r*d*m+l*c*p-l*f*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],g=t[8],_=g*f-d*p,S=d*m-g*c,y=p*c-f*m,E=i*_+r*S+l*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return t[0]=_*A,t[1]=(l*p-g*r)*A,t[2]=(d*r-l*f)*A,t[3]=S*A,t[4]=(g*i-l*m)*A,t[5]=(l*c-d*i)*A,t[6]=y*A,t[7]=(r*m-p*i)*A,t[8]=(f*i-r*c)*A,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,c,f,d){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*f+p*d)+f+t,-l*p,l*m,-l*(-p*f+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(_h.makeScale(t,i)),this}rotate(t){return this.premultiply(_h.makeRotation(-t)),this}translate(t,i){return this.premultiply(_h.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const _h=new ue;function u0(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Yc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Qy(){const s=Yc("canvas");return s.style.display="block",s}const K_={};function Rs(s){s in K_||(K_[s]=!0,console.warn(s))}function Jy(s,t,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const Q_=new ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),J_=new ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $y(){const s={enabled:!0,workingColorSpace:Ls,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Ie&&(l.r=ua(l.r),l.g=ua(l.g),l.b=ua(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Ie&&(l.r=Cs(l.r),l.g=Cs(l.g),l.b=Cs(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Xa?Wc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Rs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Rs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Ls]:{primaries:t,whitePoint:r,transfer:Wc,toXYZ:Q_,fromXYZ:J_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:di},outputColorSpaceConfig:{drawingBufferColorSpace:di}},[di]:{primaries:t,whitePoint:r,transfer:Ie,toXYZ:Q_,fromXYZ:J_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:di}}}),s}const Ce=$y();function ua(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Cs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let hs;class tM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{hs===void 0&&(hs=Yc("canvas")),hs.width=t.width,hs.height=t.height;const l=hs.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=hs}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Yc("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=ua(c[f]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ua(i[r]/255)*255):i[r]=ua(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let eM=0;class Wd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:eM++}),this.uuid=zs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,d=l.length;f<d;f++)l[f].isDataTexture?c.push(vh(l[f].image)):c.push(vh(l[f]))}else c=vh(l);r.url=c}return i||(t.images[this.uuid]=r),r}}function vh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?tM.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let nM=0;const xh=new K;class Xn extends Ps{constructor(t=Xn.DEFAULT_IMAGE,i=Xn.DEFAULT_MAPPING,r=Tr,l=Tr,c=Ni,f=br,d=Ei,m=fa,p=Xn.DEFAULT_ANISOTROPY,g=Xa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nM++}),this.uuid=zs(),this.name="",this.source=new Wd(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Jt(0,0),this.repeat=new Jt(1,1),this.center=new Jt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(xh).x}get height(){return this.source.getSize(xh).y}get depth(){return this.source.getSize(xh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==t0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case rd:t.x=t.x-Math.floor(t.x);break;case Tr:t.x=t.x<0?0:1;break;case sd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case rd:t.y=t.y-Math.floor(t.y);break;case Tr:t.y=t.y<0?0:1;break;case sd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=t0;Xn.DEFAULT_ANISOTROPY=1;class an{constructor(t=0,i=0,r=0,l=1){an.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*r+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*r+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*r+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*r+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,c;const m=t.elements,p=m[0],g=m[4],_=m[8],S=m[1],y=m[5],E=m[9],A=m[2],M=m[6],v=m[10];if(Math.abs(g-S)<.01&&Math.abs(_-A)<.01&&Math.abs(E-M)<.01){if(Math.abs(g+S)<.1&&Math.abs(_+A)<.1&&Math.abs(E+M)<.1&&Math.abs(p+y+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(p+1)/2,C=(y+1)/2,G=(v+1)/2,X=(g+S)/4,B=(_+A)/4,j=(E+M)/4;return U>C&&U>G?U<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(U),l=X/r,c=B/r):C>G?C<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(C),r=X/l,c=j/l):G<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(G),r=B/c,l=j/c),this.set(r,l,c,i),this}let z=Math.sqrt((M-E)*(M-E)+(_-A)*(_-A)+(S-g)*(S-g));return Math.abs(z)<.001&&(z=1),this.x=(M-E)/z,this.y=(_-A)/z,this.z=(S-g)/z,this.w=Math.acos((p+y+v-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=_e(this.x,t.x,i.x),this.y=_e(this.y,t.y,i.y),this.z=_e(this.z,t.z,i.z),this.w=_e(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=_e(this.x,t,i),this.y=_e(this.y,t,i),this.z=_e(this.z,t,i),this.w=_e(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_e(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class iM extends Ps{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ni,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new an(0,0,t,i),this.scissorTest=!1,this.viewport=new an(0,0,t,i);const l={width:t,height:i,depth:r.depth},c=new Xn(l);this.textures=[];const f=r.count;for(let d=0;d<f;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:Ni,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Wd(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rr extends iM{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class f0 extends Xn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Ti,this.minFilter=Ti,this.wrapR=Tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class aM extends Xn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Ti,this.minFilter=Ti,this.wrapR=Tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qo{constructor(t=new K(1/0,1/0,1/0),i=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(vi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(vi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=vi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,d=c.count;f<d;f++)t.isMesh===!0?t.getVertexPosition(f,vi):vi.fromBufferAttribute(c,f),vi.applyMatrix4(t.matrixWorld),this.expandByPoint(vi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),dc.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),dc.copy(r.boundingBox)),dc.applyMatrix4(t.matrixWorld),this.union(dc)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,vi),vi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Lo),pc.subVectors(this.max,Lo),ds.subVectors(t.a,Lo),ps.subVectors(t.b,Lo),ms.subVectors(t.c,Lo),Ba.subVectors(ps,ds),Fa.subVectors(ms,ps),pr.subVectors(ds,ms);let i=[0,-Ba.z,Ba.y,0,-Fa.z,Fa.y,0,-pr.z,pr.y,Ba.z,0,-Ba.x,Fa.z,0,-Fa.x,pr.z,0,-pr.x,-Ba.y,Ba.x,0,-Fa.y,Fa.x,0,-pr.y,pr.x,0];return!Sh(i,ds,ps,ms,pc)||(i=[1,0,0,0,1,0,0,0,1],!Sh(i,ds,ps,ms,pc))?!1:(mc.crossVectors(Ba,Fa),i=[mc.x,mc.y,mc.z],Sh(i,ds,ps,ms,pc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(na[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),na[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),na[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),na[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),na[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),na[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),na[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),na[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(na),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const na=[new K,new K,new K,new K,new K,new K,new K,new K],vi=new K,dc=new Qo,ds=new K,ps=new K,ms=new K,Ba=new K,Fa=new K,pr=new K,Lo=new K,pc=new K,mc=new K,mr=new K;function Sh(s,t,i,r,l){for(let c=0,f=s.length-3;c<=f;c+=3){mr.fromArray(s,c);const d=l.x*Math.abs(mr.x)+l.y*Math.abs(mr.y)+l.z*Math.abs(mr.z),m=t.dot(mr),p=i.dot(mr),g=r.dot(mr);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const rM=new Qo,No=new K,yh=new K;class Qc{constructor(t=new K,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):rM.setFromPoints(t).getCenter(r);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,r.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;No.subVectors(t,this.center);const i=No.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(No,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(yh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(No.copy(t.center).add(yh)),this.expandByPoint(No.copy(t.center).sub(yh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ia=new K,Mh=new K,gc=new K,Ia=new K,Eh=new K,_c=new K,Th=new K;class h0{constructor(t=new K,i=new K(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ia)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ia.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ia.copy(this.origin).addScaledVector(this.direction,i),ia.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){Mh.copy(t).add(i).multiplyScalar(.5),gc.copy(i).sub(t).normalize(),Ia.copy(this.origin).sub(Mh);const c=t.distanceTo(i)*.5,f=-this.direction.dot(gc),d=Ia.dot(this.direction),m=-Ia.dot(gc),p=Ia.lengthSq(),g=Math.abs(1-f*f);let _,S,y,E;if(g>0)if(_=f*m-d,S=f*d-m,E=c*g,_>=0)if(S>=-E)if(S<=E){const A=1/g;_*=A,S*=A,y=_*(_+f*S+2*d)+S*(f*_+S+2*m)+p}else S=c,_=Math.max(0,-(f*S+d)),y=-_*_+S*(S+2*m)+p;else S=-c,_=Math.max(0,-(f*S+d)),y=-_*_+S*(S+2*m)+p;else S<=-E?(_=Math.max(0,-(-f*c+d)),S=_>0?-c:Math.min(Math.max(-c,-m),c),y=-_*_+S*(S+2*m)+p):S<=E?(_=0,S=Math.min(Math.max(-c,-m),c),y=S*(S+2*m)+p):(_=Math.max(0,-(f*c+d)),S=_>0?c:Math.min(Math.max(-c,-m),c),y=-_*_+S*(S+2*m)+p);else S=f>0?-c:c,_=Math.max(0,-(f*S+d)),y=-_*_+S*(S+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(Mh).addScaledVector(gc,S),y}intersectSphere(t,i){ia.subVectors(t.center,this.origin);const r=ia.dot(this.direction),l=ia.dot(ia)-r*r,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),d=r-f,m=r+f;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,c,f,d,m;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,S=this.origin;return p>=0?(r=(t.min.x-S.x)*p,l=(t.max.x-S.x)*p):(r=(t.max.x-S.x)*p,l=(t.min.x-S.x)*p),g>=0?(c=(t.min.y-S.y)*g,f=(t.max.y-S.y)*g):(c=(t.max.y-S.y)*g,f=(t.min.y-S.y)*g),r>f||c>l||((c>r||isNaN(r))&&(r=c),(f<l||isNaN(l))&&(l=f),_>=0?(d=(t.min.z-S.z)*_,m=(t.max.z-S.z)*_):(d=(t.max.z-S.z)*_,m=(t.min.z-S.z)*_),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,ia)!==null}intersectTriangle(t,i,r,l,c){Eh.subVectors(i,t),_c.subVectors(r,t),Th.crossVectors(Eh,_c);let f=this.direction.dot(Th),d;if(f>0){if(l)return null;d=1}else if(f<0)d=-1,f=-f;else return null;Ia.subVectors(this.origin,t);const m=d*this.direction.dot(_c.crossVectors(Ia,_c));if(m<0)return null;const p=d*this.direction.dot(Eh.cross(Ia));if(p<0||m+p>f)return null;const g=-d*Ia.dot(Th);return g<0?null:this.at(g/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rn{constructor(t,i,r,l,c,f,d,m,p,g,_,S,y,E,A,M){rn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,f,d,m,p,g,_,S,y,E,A,M)}set(t,i,r,l,c,f,d,m,p,g,_,S,y,E,A,M){const v=this.elements;return v[0]=t,v[4]=i,v[8]=r,v[12]=l,v[1]=c,v[5]=f,v[9]=d,v[13]=m,v[2]=p,v[6]=g,v[10]=_,v[14]=S,v[3]=y,v[7]=E,v[11]=A,v[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rn().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/gs.setFromMatrixColumn(t,0).length(),c=1/gs.setFromMatrixColumn(t,1).length(),f=1/gs.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*f,i[9]=r[9]*f,i[10]=r[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,c=t.z,f=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const S=f*g,y=f*_,E=d*g,A=d*_;i[0]=m*g,i[4]=-m*_,i[8]=p,i[1]=y+E*p,i[5]=S-A*p,i[9]=-d*m,i[2]=A-S*p,i[6]=E+y*p,i[10]=f*m}else if(t.order==="YXZ"){const S=m*g,y=m*_,E=p*g,A=p*_;i[0]=S+A*d,i[4]=E*d-y,i[8]=f*p,i[1]=f*_,i[5]=f*g,i[9]=-d,i[2]=y*d-E,i[6]=A+S*d,i[10]=f*m}else if(t.order==="ZXY"){const S=m*g,y=m*_,E=p*g,A=p*_;i[0]=S-A*d,i[4]=-f*_,i[8]=E+y*d,i[1]=y+E*d,i[5]=f*g,i[9]=A-S*d,i[2]=-f*p,i[6]=d,i[10]=f*m}else if(t.order==="ZYX"){const S=f*g,y=f*_,E=d*g,A=d*_;i[0]=m*g,i[4]=E*p-y,i[8]=S*p+A,i[1]=m*_,i[5]=A*p+S,i[9]=y*p-E,i[2]=-p,i[6]=d*m,i[10]=f*m}else if(t.order==="YZX"){const S=f*m,y=f*p,E=d*m,A=d*p;i[0]=m*g,i[4]=A-S*_,i[8]=E*_+y,i[1]=_,i[5]=f*g,i[9]=-d*g,i[2]=-p*g,i[6]=y*_+E,i[10]=S-A*_}else if(t.order==="XZY"){const S=f*m,y=f*p,E=d*m,A=d*p;i[0]=m*g,i[4]=-_,i[8]=p*g,i[1]=S*_+A,i[5]=f*g,i[9]=y*_-E,i[2]=E*_-y,i[6]=d*g,i[10]=A*_+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(sM,t,oM)}lookAt(t,i,r){const l=this.elements;return ti.subVectors(t,i),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),Ha.crossVectors(r,ti),Ha.lengthSq()===0&&(Math.abs(r.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),Ha.crossVectors(r,ti)),Ha.normalize(),vc.crossVectors(ti,Ha),l[0]=Ha.x,l[4]=vc.x,l[8]=ti.x,l[1]=Ha.y,l[5]=vc.y,l[9]=ti.y,l[2]=Ha.z,l[6]=vc.z,l[10]=ti.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,f=r[0],d=r[4],m=r[8],p=r[12],g=r[1],_=r[5],S=r[9],y=r[13],E=r[2],A=r[6],M=r[10],v=r[14],z=r[3],U=r[7],C=r[11],G=r[15],X=l[0],B=l[4],j=l[8],D=l[12],w=l[1],F=l[5],ct=l[9],st=l[13],ft=l[2],pt=l[6],O=l[10],Z=l[14],Y=l[3],xt=l[7],Et=l[11],N=l[15];return c[0]=f*X+d*w+m*ft+p*Y,c[4]=f*B+d*F+m*pt+p*xt,c[8]=f*j+d*ct+m*O+p*Et,c[12]=f*D+d*st+m*Z+p*N,c[1]=g*X+_*w+S*ft+y*Y,c[5]=g*B+_*F+S*pt+y*xt,c[9]=g*j+_*ct+S*O+y*Et,c[13]=g*D+_*st+S*Z+y*N,c[2]=E*X+A*w+M*ft+v*Y,c[6]=E*B+A*F+M*pt+v*xt,c[10]=E*j+A*ct+M*O+v*Et,c[14]=E*D+A*st+M*Z+v*N,c[3]=z*X+U*w+C*ft+G*Y,c[7]=z*B+U*F+C*pt+G*xt,c[11]=z*j+U*ct+C*O+G*Et,c[15]=z*D+U*st+C*Z+G*N,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],c=t[12],f=t[1],d=t[5],m=t[9],p=t[13],g=t[2],_=t[6],S=t[10],y=t[14],E=t[3],A=t[7],M=t[11],v=t[15];return E*(+c*m*_-l*p*_-c*d*S+r*p*S+l*d*y-r*m*y)+A*(+i*m*y-i*p*S+c*f*S-l*f*y+l*p*g-c*m*g)+M*(+i*p*_-i*d*y-c*f*_+r*f*y+c*d*g-r*p*g)+v*(-l*d*g-i*m*_+i*d*S+l*f*_-r*f*S+r*m*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],g=t[8],_=t[9],S=t[10],y=t[11],E=t[12],A=t[13],M=t[14],v=t[15],z=_*M*p-A*S*p+A*m*y-d*M*y-_*m*v+d*S*v,U=E*S*p-g*M*p-E*m*y+f*M*y+g*m*v-f*S*v,C=g*A*p-E*_*p+E*d*y-f*A*y-g*d*v+f*_*v,G=E*_*m-g*A*m-E*d*S+f*A*S+g*d*M-f*_*M,X=i*z+r*U+l*C+c*G;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/X;return t[0]=z*B,t[1]=(A*S*c-_*M*c-A*l*y+r*M*y+_*l*v-r*S*v)*B,t[2]=(d*M*c-A*m*c+A*l*p-r*M*p-d*l*v+r*m*v)*B,t[3]=(_*m*c-d*S*c-_*l*p+r*S*p+d*l*y-r*m*y)*B,t[4]=U*B,t[5]=(g*M*c-E*S*c+E*l*y-i*M*y-g*l*v+i*S*v)*B,t[6]=(E*m*c-f*M*c-E*l*p+i*M*p+f*l*v-i*m*v)*B,t[7]=(f*S*c-g*m*c+g*l*p-i*S*p-f*l*y+i*m*y)*B,t[8]=C*B,t[9]=(E*_*c-g*A*c-E*r*y+i*A*y+g*r*v-i*_*v)*B,t[10]=(f*A*c-E*d*c+E*r*p-i*A*p-f*r*v+i*d*v)*B,t[11]=(g*d*c-f*_*c-g*r*p+i*_*p+f*r*y-i*d*y)*B,t[12]=G*B,t[13]=(g*A*l-E*_*l+E*r*S-i*A*S-g*r*M+i*_*M)*B,t[14]=(E*d*l-f*A*l-E*r*m+i*A*m+f*r*M-i*d*M)*B,t[15]=(f*_*l-g*d*l+g*r*m-i*_*m-f*r*S+i*d*S)*B,this}scale(t){const i=this.elements,r=t.x,l=t.y,c=t.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,f=t.x,d=t.y,m=t.z,p=c*f,g=c*d;return this.set(p*f+r,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+r,g*m-l*f,0,p*m-l*d,g*m+l*f,c*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,c,f){return this.set(1,r,c,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,c=i._x,f=i._y,d=i._z,m=i._w,p=c+c,g=f+f,_=d+d,S=c*p,y=c*g,E=c*_,A=f*g,M=f*_,v=d*_,z=m*p,U=m*g,C=m*_,G=r.x,X=r.y,B=r.z;return l[0]=(1-(A+v))*G,l[1]=(y+C)*G,l[2]=(E-U)*G,l[3]=0,l[4]=(y-C)*X,l[5]=(1-(S+v))*X,l[6]=(M+z)*X,l[7]=0,l[8]=(E+U)*B,l[9]=(M-z)*B,l[10]=(1-(S+A))*B,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let c=gs.set(l[0],l[1],l[2]).length();const f=gs.set(l[4],l[5],l[6]).length(),d=gs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],xi.copy(this);const p=1/c,g=1/f,_=1/d;return xi.elements[0]*=p,xi.elements[1]*=p,xi.elements[2]*=p,xi.elements[4]*=g,xi.elements[5]*=g,xi.elements[6]*=g,xi.elements[8]*=_,xi.elements[9]*=_,xi.elements[10]*=_,i.setFromRotationMatrix(xi),r.x=c,r.y=f,r.z=d,this}makePerspective(t,i,r,l,c,f,d=Oi,m=!1){const p=this.elements,g=2*c/(i-t),_=2*c/(r-l),S=(i+t)/(i-t),y=(r+l)/(r-l);let E,A;if(m)E=c/(f-c),A=f*c/(f-c);else if(d===Oi)E=-(f+c)/(f-c),A=-2*f*c/(f-c);else if(d===qc)E=-f/(f-c),A=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=_,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,l,c,f,d=Oi,m=!1){const p=this.elements,g=2/(i-t),_=2/(r-l),S=-(i+t)/(i-t),y=-(r+l)/(r-l);let E,A;if(m)E=1/(f-c),A=f/(f-c);else if(d===Oi)E=-2/(f-c),A=-(f+c)/(f-c);else if(d===qc)E=-1/(f-c),A=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=_,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=E,p[14]=A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const gs=new K,xi=new rn,sM=new K(0,0,0),oM=new K(1,1,1),Ha=new K,vc=new K,ti=new K,$_=new rn,tv=new Ko;class ha{constructor(t=0,i=0,r=0,l=ha.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,c=l[0],f=l[4],d=l[8],m=l[1],p=l[5],g=l[9],_=l[2],S=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(_e(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-_e(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(_e(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-_e(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(S,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(_e(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-_e(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return $_.makeRotationFromQuaternion(t),this.setFromRotationMatrix($_,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return tv.setFromEuler(this),this.setFromQuaternion(tv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ha.DEFAULT_ORDER="XYZ";class d0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let lM=0;const ev=new K,_s=new Ko,aa=new rn,xc=new K,Oo=new K,cM=new K,uM=new Ko,nv=new K(1,0,0),iv=new K(0,1,0),av=new K(0,0,1),rv={type:"added"},fM={type:"removed"},vs={type:"childadded",child:null},bh={type:"childremoved",child:null};class kn extends Ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lM++}),this.uuid=zs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kn.DEFAULT_UP.clone();const t=new K,i=new ha,r=new Ko,l=new K(1,1,1);function c(){r.setFromEuler(i,!1)}function f(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new rn},normalMatrix:{value:new ue}}),this.matrix=new rn,this.matrixWorld=new rn,this.matrixAutoUpdate=kn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new d0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return _s.setFromAxisAngle(t,i),this.quaternion.multiply(_s),this}rotateOnWorldAxis(t,i){return _s.setFromAxisAngle(t,i),this.quaternion.premultiply(_s),this}rotateX(t){return this.rotateOnAxis(nv,t)}rotateY(t){return this.rotateOnAxis(iv,t)}rotateZ(t){return this.rotateOnAxis(av,t)}translateOnAxis(t,i){return ev.copy(t).applyQuaternion(this.quaternion),this.position.add(ev.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(nv,t)}translateY(t){return this.translateOnAxis(iv,t)}translateZ(t){return this.translateOnAxis(av,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(aa.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?xc.copy(t):xc.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?aa.lookAt(Oo,xc,this.up):aa.lookAt(xc,Oo,this.up),this.quaternion.setFromRotationMatrix(aa),l&&(aa.extractRotation(l.matrixWorld),_s.setFromRotationMatrix(aa),this.quaternion.premultiply(_s.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(rv),vs.child=t,this.dispatchEvent(vs),vs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(fM),bh.child=t,this.dispatchEvent(bh),bh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),aa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),aa.multiply(t.parent.matrixWorld)),t.applyMatrix4(aa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(rv),vs.child=t,this.dispatchEvent(vs),vs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const f=this.children[r].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,t,cM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,uM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const _=m[p];c(t.shapes,_)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=f(t.geometries),m=f(t.materials),p=f(t.textures),g=f(t.images),_=f(t.shapes),S=f(t.skeletons),y=f(t.animations),E=f(t.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),_.length>0&&(r.shapes=_),S.length>0&&(r.skeletons=S),y.length>0&&(r.animations=y),E.length>0&&(r.nodes=E)}return r.object=l,r;function f(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}kn.DEFAULT_UP=new K(0,1,0);kn.DEFAULT_MATRIX_AUTO_UPDATE=!0;kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Si=new K,ra=new K,Ah=new K,sa=new K,xs=new K,Ss=new K,sv=new K,Rh=new K,Ch=new K,wh=new K,Dh=new an,Uh=new an,Lh=new an;class Mi{constructor(t=new K,i=new K,r=new K){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),Si.subVectors(t,i),l.cross(Si);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,r,l,c){Si.subVectors(l,i),ra.subVectors(r,i),Ah.subVectors(t,i);const f=Si.dot(Si),d=Si.dot(ra),m=Si.dot(Ah),p=ra.dot(ra),g=ra.dot(Ah),_=f*p-d*d;if(_===0)return c.set(0,0,0),null;const S=1/_,y=(p*m-d*g)*S,E=(f*g-d*m)*S;return c.set(1-y-E,E,y)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,sa)===null?!1:sa.x>=0&&sa.y>=0&&sa.x+sa.y<=1}static getInterpolation(t,i,r,l,c,f,d,m){return this.getBarycoord(t,i,r,l,sa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,sa.x),m.addScaledVector(f,sa.y),m.addScaledVector(d,sa.z),m)}static getInterpolatedAttribute(t,i,r,l,c,f){return Dh.setScalar(0),Uh.setScalar(0),Lh.setScalar(0),Dh.fromBufferAttribute(t,i),Uh.fromBufferAttribute(t,r),Lh.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(Dh,c.x),f.addScaledVector(Uh,c.y),f.addScaledVector(Lh,c.z),f}static isFrontFacing(t,i,r,l){return Si.subVectors(r,i),ra.subVectors(t,i),Si.cross(ra).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Si.subVectors(this.c,this.b),ra.subVectors(this.a,this.b),Si.cross(ra).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Mi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Mi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,c){return Mi.getInterpolation(t,this.a,this.b,this.c,i,r,l,c)}containsPoint(t){return Mi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Mi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,c=this.c;let f,d;xs.subVectors(l,r),Ss.subVectors(c,r),Rh.subVectors(t,r);const m=xs.dot(Rh),p=Ss.dot(Rh);if(m<=0&&p<=0)return i.copy(r);Ch.subVectors(t,l);const g=xs.dot(Ch),_=Ss.dot(Ch);if(g>=0&&_<=g)return i.copy(l);const S=m*_-g*p;if(S<=0&&m>=0&&g<=0)return f=m/(m-g),i.copy(r).addScaledVector(xs,f);wh.subVectors(t,c);const y=xs.dot(wh),E=Ss.dot(wh);if(E>=0&&y<=E)return i.copy(c);const A=y*p-m*E;if(A<=0&&p>=0&&E<=0)return d=p/(p-E),i.copy(r).addScaledVector(Ss,d);const M=g*E-y*_;if(M<=0&&_-g>=0&&y-E>=0)return sv.subVectors(c,l),d=(_-g)/(_-g+(y-E)),i.copy(l).addScaledVector(sv,d);const v=1/(M+A+S);return f=A*v,d=S*v,i.copy(r).addScaledVector(xs,f).addScaledVector(Ss,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const p0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ga={h:0,s:0,l:0},Sc={h:0,s:0,l:0};function Nh(s,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(t-s)*6*i:i<1/2?t:i<2/3?s+(t-s)*6*(2/3-i):s}class Le{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=di){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ce.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=Ce.workingColorSpace){return this.r=t,this.g=i,this.b=r,Ce.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=Ce.workingColorSpace){if(t=Ky(t,1),i=_e(i,0,1),r=_e(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,f=2*r-c;this.r=Nh(f,c,t+1/3),this.g=Nh(f,c,t),this.b=Nh(f,c,t-1/3)}return Ce.colorSpaceToWorking(this,l),this}setStyle(t,i=di){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],d=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=di){const r=p0[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ua(t.r),this.g=ua(t.g),this.b=ua(t.b),this}copyLinearToSRGB(t){return this.r=Cs(t.r),this.g=Cs(t.g),this.b=Cs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=di){return Ce.workingToColorSpace(wn.copy(this),t),Math.round(_e(wn.r*255,0,255))*65536+Math.round(_e(wn.g*255,0,255))*256+Math.round(_e(wn.b*255,0,255))}getHexString(t=di){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ce.workingColorSpace){Ce.workingToColorSpace(wn.copy(this),i);const r=wn.r,l=wn.g,c=wn.b,f=Math.max(r,l,c),d=Math.min(r,l,c);let m,p;const g=(d+f)/2;if(d===f)m=0,p=0;else{const _=f-d;switch(p=g<=.5?_/(f+d):_/(2-f-d),f){case r:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-r)/_+2;break;case c:m=(r-l)/_+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=Ce.workingColorSpace){return Ce.workingToColorSpace(wn.copy(this),i),t.r=wn.r,t.g=wn.g,t.b=wn.b,t}getStyle(t=di){Ce.workingToColorSpace(wn.copy(this),t);const i=wn.r,r=wn.g,l=wn.b;return t!==di?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Ga),this.setHSL(Ga.h+t,Ga.s+i,Ga.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Ga),t.getHSL(Sc);const r=mh(Ga.h,Sc.h,i),l=mh(Ga.s,Sc.s,i),c=mh(Ga.l,Sc.l,i);return this.setHSL(r,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wn=new Le;Le.NAMES=p0;let hM=0;class Jo extends Ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hM++}),this.uuid=zs(),this.name="",this.type="Material",this.blending=As,this.side=Ya,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zh,this.blendDst=jh,this.blendEquation=Mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=q_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fs,this.stencilZFail=fs,this.stencilZPass=fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==As&&(r.blending=this.blending),this.side!==Ya&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Zh&&(r.blendSrc=this.blendSrc),this.blendDst!==jh&&(r.blendDst=this.blendDst),this.blendEquation!==Mr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ws&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==q_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==fs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==fs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const f=[];for(const d in c){const m=c[d];delete m.metadata,f.push(m)}return f}if(i){const c=l(t.textures),f=l(t.images);c.length>0&&(r.textures=c),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ni extends Jo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ha,this.combine=$v,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const fn=new K,yc=new Jt;let dM=0;class Pi{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:dM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=Y_,this.updateRanges=[],this.gpuType=ca,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)yc.fromBufferAttribute(this,i),yc.applyMatrix3(t),this.setXY(i,yc.x,yc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix3(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix4(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyNormalMatrix(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.transformDirection(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Uo(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Gn(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Uo(i,this.array)),i}setX(t,i){return this.normalized&&(i=Gn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Uo(i,this.array)),i}setY(t,i){return this.normalized&&(i=Gn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Uo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Gn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Uo(i,this.array)),i}setW(t,i){return this.normalized&&(i=Gn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Gn(i,this.array),r=Gn(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Gn(i,this.array),r=Gn(r,this.array),l=Gn(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t*=this.itemSize,this.normalized&&(i=Gn(i,this.array),r=Gn(r,this.array),l=Gn(l,this.array),c=Gn(c,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Y_&&(t.usage=this.usage),t}}class m0 extends Pi{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class g0 extends Pi{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class Wn extends Pi{constructor(t,i,r){super(new Float32Array(t),i,r)}}let pM=0;const hi=new rn,Oh=new kn,ys=new K,ei=new Qo,Po=new Qo,xn=new K;class bi extends Ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pM++}),this.uuid=zs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(u0(t)?g0:m0)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ue().getNormalMatrix(t);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return hi.makeRotationFromQuaternion(t),this.applyMatrix4(hi),this}rotateX(t){return hi.makeRotationX(t),this.applyMatrix4(hi),this}rotateY(t){return hi.makeRotationY(t),this.applyMatrix4(hi),this}rotateZ(t){return hi.makeRotationZ(t),this.applyMatrix4(hi),this}translate(t,i,r){return hi.makeTranslation(t,i,r),this.applyMatrix4(hi),this}scale(t,i,r){return hi.makeScale(t,i,r),this.applyMatrix4(hi),this}lookAt(t){return Oh.lookAt(t),Oh.updateMatrix(),this.applyMatrix4(Oh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ys).negate(),this.translate(ys.x,ys.y,ys.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Wn(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];ei.setFromBufferAttribute(c),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qc);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(t){const r=this.boundingSphere.center;if(ei.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const d=i[c];Po.setFromBufferAttribute(d),this.morphTargetsRelative?(xn.addVectors(ei.min,Po.min),ei.expandByPoint(xn),xn.addVectors(ei.max,Po.max),ei.expandByPoint(xn)):(ei.expandByPoint(Po.min),ei.expandByPoint(Po.max))}ei.getCenter(r);let l=0;for(let c=0,f=t.count;c<f;c++)xn.fromBufferAttribute(t,c),l=Math.max(l,r.distanceToSquared(xn));if(i)for(let c=0,f=i.length;c<f;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)xn.fromBufferAttribute(d,p),m&&(ys.fromBufferAttribute(t,p),xn.add(ys)),l=Math.max(l,r.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pi(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),d=[],m=[];for(let j=0;j<r.count;j++)d[j]=new K,m[j]=new K;const p=new K,g=new K,_=new K,S=new Jt,y=new Jt,E=new Jt,A=new K,M=new K;function v(j,D,w){p.fromBufferAttribute(r,j),g.fromBufferAttribute(r,D),_.fromBufferAttribute(r,w),S.fromBufferAttribute(c,j),y.fromBufferAttribute(c,D),E.fromBufferAttribute(c,w),g.sub(p),_.sub(p),y.sub(S),E.sub(S);const F=1/(y.x*E.y-E.x*y.y);isFinite(F)&&(A.copy(g).multiplyScalar(E.y).addScaledVector(_,-y.y).multiplyScalar(F),M.copy(_).multiplyScalar(y.x).addScaledVector(g,-E.x).multiplyScalar(F),d[j].add(A),d[D].add(A),d[w].add(A),m[j].add(M),m[D].add(M),m[w].add(M))}let z=this.groups;z.length===0&&(z=[{start:0,count:t.count}]);for(let j=0,D=z.length;j<D;++j){const w=z[j],F=w.start,ct=w.count;for(let st=F,ft=F+ct;st<ft;st+=3)v(t.getX(st+0),t.getX(st+1),t.getX(st+2))}const U=new K,C=new K,G=new K,X=new K;function B(j){G.fromBufferAttribute(l,j),X.copy(G);const D=d[j];U.copy(D),U.sub(G.multiplyScalar(G.dot(D))).normalize(),C.crossVectors(X,D);const F=C.dot(m[j])<0?-1:1;f.setXYZW(j,U.x,U.y,U.z,F)}for(let j=0,D=z.length;j<D;++j){const w=z[j],F=w.start,ct=w.count;for(let st=F,ft=F+ct;st<ft;st+=3)B(t.getX(st+0)),B(t.getX(st+1)),B(t.getX(st+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Pi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let S=0,y=r.count;S<y;S++)r.setXYZ(S,0,0,0);const l=new K,c=new K,f=new K,d=new K,m=new K,p=new K,g=new K,_=new K;if(t)for(let S=0,y=t.count;S<y;S+=3){const E=t.getX(S+0),A=t.getX(S+1),M=t.getX(S+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,A),f.fromBufferAttribute(i,M),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),d.fromBufferAttribute(r,E),m.fromBufferAttribute(r,A),p.fromBufferAttribute(r,M),d.add(g),m.add(g),p.add(g),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(A,m.x,m.y,m.z),r.setXYZ(M,p.x,p.y,p.z)}else for(let S=0,y=i.count;S<y;S+=3)l.fromBufferAttribute(i,S+0),c.fromBufferAttribute(i,S+1),f.fromBufferAttribute(i,S+2),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),r.setXYZ(S+0,g.x,g.y,g.z),r.setXYZ(S+1,g.x,g.y,g.z),r.setXYZ(S+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)xn.fromBufferAttribute(t,i),xn.normalize(),t.setXYZ(i,xn.x,xn.y,xn.z)}toNonIndexed(){function t(d,m){const p=d.array,g=d.itemSize,_=d.normalized,S=new p.constructor(m.length*g);let y=0,E=0;for(let A=0,M=m.length;A<M;A++){d.isInterleavedBufferAttribute?y=m[A]*d.data.stride+d.offset:y=m[A]*g;for(let v=0;v<g;v++)S[E++]=p[y++]}return new Pi(S,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new bi,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,r);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let g=0,_=p.length;g<_;g++){const S=p[g],y=t(S,r);m.push(y)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,m=f.length;d<m;d++){const p=f[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let _=0,S=p.length;_<S;_++){const y=p[_];g.push(y.toJSON(t.data))}g.length>0&&(l[m]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const c=t.morphAttributes;for(const p in c){const g=[],_=c[p];for(let S=0,y=_.length;S<y;S++)g.push(_[S].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let p=0,g=f.length;p<g;p++){const _=f[p];this.addGroup(_.start,_.count,_.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ov=new rn,gr=new h0,Mc=new Qc,lv=new K,Ec=new K,Tc=new K,bc=new K,Ph=new K,Ac=new K,cv=new K,Rc=new K;class Ke extends kn{constructor(t=new bi,i=new ni){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,f=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){Ac.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=d[m],_=c[m];g!==0&&(Ph.fromBufferAttribute(_,t),f?Ac.addScaledVector(Ph,g):Ac.addScaledVector(Ph.sub(i),g))}i.add(Ac)}return i}raycast(t,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Mc.copy(r.boundingSphere),Mc.applyMatrix4(c),gr.copy(t.ray).recast(t.near),!(Mc.containsPoint(gr.origin)===!1&&(gr.intersectSphere(Mc,lv)===null||gr.origin.distanceToSquared(lv)>(t.far-t.near)**2))&&(ov.copy(c).invert(),gr.copy(t.ray).applyMatrix4(ov),!(r.boundingBox!==null&&gr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,gr)))}_computeIntersections(t,i,r){let l;const c=this.geometry,f=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,S=c.groups,y=c.drawRange;if(d!==null)if(Array.isArray(f))for(let E=0,A=S.length;E<A;E++){const M=S[E],v=f[M.materialIndex],z=Math.max(M.start,y.start),U=Math.min(d.count,Math.min(M.start+M.count,y.start+y.count));for(let C=z,G=U;C<G;C+=3){const X=d.getX(C),B=d.getX(C+1),j=d.getX(C+2);l=Cc(this,v,t,r,p,g,_,X,B,j),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),A=Math.min(d.count,y.start+y.count);for(let M=E,v=A;M<v;M+=3){const z=d.getX(M),U=d.getX(M+1),C=d.getX(M+2);l=Cc(this,f,t,r,p,g,_,z,U,C),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,A=S.length;E<A;E++){const M=S[E],v=f[M.materialIndex],z=Math.max(M.start,y.start),U=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let C=z,G=U;C<G;C+=3){const X=C,B=C+1,j=C+2;l=Cc(this,v,t,r,p,g,_,X,B,j),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),A=Math.min(m.count,y.start+y.count);for(let M=E,v=A;M<v;M+=3){const z=M,U=M+1,C=M+2;l=Cc(this,f,t,r,p,g,_,z,U,C),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function mM(s,t,i,r,l,c,f,d){let m;if(t.side===Vn?m=r.intersectTriangle(f,c,l,!0,d):m=r.intersectTriangle(l,c,f,t.side===Ya,d),m===null)return null;Rc.copy(d),Rc.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(Rc);return p<i.near||p>i.far?null:{distance:p,point:Rc.clone(),object:s}}function Cc(s,t,i,r,l,c,f,d,m,p){s.getVertexPosition(d,Ec),s.getVertexPosition(m,Tc),s.getVertexPosition(p,bc);const g=mM(s,t,i,r,Ec,Tc,bc,cv);if(g){const _=new K;Mi.getBarycoord(cv,Ec,Tc,bc,_),l&&(g.uv=Mi.getInterpolatedAttribute(l,d,m,p,_,new Jt)),c&&(g.uv1=Mi.getInterpolatedAttribute(c,d,m,p,_,new Jt)),f&&(g.normal=Mi.getInterpolatedAttribute(f,d,m,p,_,new K),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const S={a:d,b:m,c:p,normal:new K,materialIndex:0};Mi.getNormal(Ec,Tc,bc,S.normal),g.face=S,g.barycoord=_}return g}class $o extends bi{constructor(t=1,i=1,r=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:f};const d=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],g=[],_=[];let S=0,y=0;E("z","y","x",-1,-1,r,i,t,f,c,0),E("z","y","x",1,-1,r,i,-t,f,c,1),E("x","z","y",1,1,t,r,i,l,f,2),E("x","z","y",1,-1,t,r,-i,l,f,3),E("x","y","z",1,-1,t,i,r,l,c,4),E("x","y","z",-1,-1,t,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new Wn(p,3)),this.setAttribute("normal",new Wn(g,3)),this.setAttribute("uv",new Wn(_,2));function E(A,M,v,z,U,C,G,X,B,j,D){const w=C/B,F=G/j,ct=C/2,st=G/2,ft=X/2,pt=B+1,O=j+1;let Z=0,Y=0;const xt=new K;for(let Et=0;Et<O;Et++){const N=Et*F-st;for(let nt=0;nt<pt;nt++){const Mt=nt*w-ct;xt[A]=Mt*z,xt[M]=N*U,xt[v]=ft,p.push(xt.x,xt.y,xt.z),xt[A]=0,xt[M]=0,xt[v]=X>0?1:-1,g.push(xt.x,xt.y,xt.z),_.push(nt/B),_.push(1-Et/j),Z+=1}}for(let Et=0;Et<j;Et++)for(let N=0;N<B;N++){const nt=S+N+pt*Et,Mt=S+N+pt*(Et+1),At=S+(N+1)+pt*(Et+1),Q=S+(N+1)+pt*Et;m.push(nt,Mt,Q),m.push(Mt,At,Q),Y+=6}d.addGroup(y,Y,D),y+=Y,S+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $o(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ns(s){const t={};for(const i in s){t[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function On(s){const t={};for(let i=0;i<s.length;i++){const r=Ns(s[i]);for(const l in r)t[l]=r[l]}return t}function gM(s){const t=[];for(let i=0;i<s.length;i++)t.push(s[i].clone());return t}function _0(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ce.workingColorSpace}const _M={clone:Ns,merge:On};var vM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Za extends Jo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vM,this.fragmentShader=xM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ns(t.uniforms),this.uniformsGroups=gM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class v0 extends kn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rn,this.projectionMatrix=new rn,this.projectionMatrixInverse=new rn,this.coordinateSystem=Oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Va=new K,uv=new Jt,fv=new Jt;class yi extends v0{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Nd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ph*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Nd*2*Math.atan(Math.tan(ph*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){Va.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Va.x,Va.y).multiplyScalar(-t/Va.z),Va.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Va.x,Va.y).multiplyScalar(-t/Va.z)}getViewSize(t,i){return this.getViewBounds(t,uv,fv),i.subVectors(fv,uv)}setViewOffset(t,i,r,l,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(ph*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*r/p,l*=f.width/m,r*=f.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Ms=-90,Es=1;class SM extends kn{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new yi(Ms,Es,t,i);l.layers=this.layers,this.add(l);const c=new yi(Ms,Es,t,i);c.layers=this.layers,this.add(c);const f=new yi(Ms,Es,t,i);f.layers=this.layers,this.add(f);const d=new yi(Ms,Es,t,i);d.layers=this.layers,this.add(d);const m=new yi(Ms,Es,t,i);m.layers=this.layers,this.add(m);const p=new yi(Ms,Es,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,c,f,d,m]=i;for(const p of i)this.remove(p);if(t===Oi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===qc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,d,m,p,g]=this.children,_=t.getRenderTarget(),S=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,c),t.setRenderTarget(r,1,l),t.render(i,f),t.setRenderTarget(r,2,l),t.render(i,d),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=A,t.setRenderTarget(r,5,l),t.render(i,g),t.setRenderTarget(_,S,y),t.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class x0 extends Xn{constructor(t=[],i=Ds,r,l,c,f,d,m,p,g){super(t,i,r,l,c,f,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class yM extends Rr{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new x0(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new $o(5,5,5),c=new Za({name:"CubemapFromEquirect",uniforms:Ns(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Vn,blending:ka});c.uniforms.tEquirect.value=i;const f=new Ke(l,c),d=i.minFilter;return i.minFilter===br&&(i.minFilter=Ni),new SM(1,10,this).update(t,f),i.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,r,l);t.setRenderTarget(c)}}class pi extends kn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const MM={type:"move"};class zh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,c=null,f=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){f=!0;for(const A of t.hand.values()){const M=i.getJointPose(A,r),v=this._getHandJoint(p,A);M!==null&&(v.matrix.fromArray(M.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=M.radius),v.visible=M!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],S=g.position.distanceTo(_.position),y=.02,E=.005;p.inputState.pinching&&S>y+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&S<=y-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(MM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new pi;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class EM extends kn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ha,this.environmentIntensity=1,this.environmentRotation=new ha,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Bh=new K,TM=new K,bM=new ue;class Sr{constructor(t=new K(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=Bh.subVectors(r,i).cross(TM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(Bh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(r,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||bM.getNormalMatrix(t),l=this.coplanarPoint(Bh).applyMatrix4(t),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _r=new Qc,AM=new Jt(.5,.5),wc=new K;class S0{constructor(t=new Sr,i=new Sr,r=new Sr,l=new Sr,c=new Sr,f=new Sr){this.planes=[t,i,r,l,c,f]}set(t,i,r,l,c,f){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(c),d[5].copy(f),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=Oi,r=!1){const l=this.planes,c=t.elements,f=c[0],d=c[1],m=c[2],p=c[3],g=c[4],_=c[5],S=c[6],y=c[7],E=c[8],A=c[9],M=c[10],v=c[11],z=c[12],U=c[13],C=c[14],G=c[15];if(l[0].setComponents(p-f,y-g,v-E,G-z).normalize(),l[1].setComponents(p+f,y+g,v+E,G+z).normalize(),l[2].setComponents(p+d,y+_,v+A,G+U).normalize(),l[3].setComponents(p-d,y-_,v-A,G-U).normalize(),r)l[4].setComponents(m,S,M,C).normalize(),l[5].setComponents(p-m,y-S,v-M,G-C).normalize();else if(l[4].setComponents(p-m,y-S,v-M,G-C).normalize(),i===Oi)l[5].setComponents(p+m,y+S,v+M,G+C).normalize();else if(i===qc)l[5].setComponents(m,S,M,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),_r.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),_r.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(_r)}intersectsSprite(t){_r.center.set(0,0,0);const i=AM.distanceTo(t.center);return _r.radius=.7071067811865476+i,_r.applyMatrix4(t.matrixWorld),this.intersectsSphere(_r)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(wc.x=l.normal.x>0?t.max.x:t.min.x,wc.y=l.normal.y>0?t.max.y:t.min.y,wc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(wc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class y0 extends Jo{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Zc=new K,jc=new K,hv=new rn,zo=new h0,Dc=new Qc,Fh=new K,dv=new K;class M0 extends kn{constructor(t=new bi,i=new y0){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,r=[0];for(let l=1,c=i.count;l<c;l++)Zc.fromBufferAttribute(i,l-1),jc.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=Zc.distanceTo(jc);t.setAttribute("lineDistance",new Wn(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Dc.copy(r.boundingSphere),Dc.applyMatrix4(l),Dc.radius+=c,t.ray.intersectsSphere(Dc)===!1)return;hv.copy(l).invert(),zo.copy(t.ray).applyMatrix4(hv);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,g=r.index,S=r.attributes.position;if(g!==null){const y=Math.max(0,f.start),E=Math.min(g.count,f.start+f.count);for(let A=y,M=E-1;A<M;A+=p){const v=g.getX(A),z=g.getX(A+1),U=Uc(this,t,zo,m,v,z,A);U&&i.push(U)}if(this.isLineLoop){const A=g.getX(E-1),M=g.getX(y),v=Uc(this,t,zo,m,A,M,E-1);v&&i.push(v)}}else{const y=Math.max(0,f.start),E=Math.min(S.count,f.start+f.count);for(let A=y,M=E-1;A<M;A+=p){const v=Uc(this,t,zo,m,A,A+1,A);v&&i.push(v)}if(this.isLineLoop){const A=Uc(this,t,zo,m,E-1,y,E-1);A&&i.push(A)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Uc(s,t,i,r,l,c,f){const d=s.geometry.attributes.position;if(Zc.fromBufferAttribute(d,l),jc.fromBufferAttribute(d,c),i.distanceSqToSegment(Zc,jc,Fh,dv)>r)return;Fh.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(Fh);if(!(p<t.near||p>t.far))return{distance:p,point:dv.clone().applyMatrix4(s.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:s}}class E0 extends Xn{constructor(t,i,r=Ar,l,c,f,d=Ti,m=Ti,p,g=ko,_=1){if(g!==ko&&g!==Wo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:t,height:i,depth:_};super(S,l,c,f,d,m,g,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Wd(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class qa extends bi{constructor(t=1,i=32,r=0,l=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:i,thetaStart:r,thetaLength:l},i=Math.max(3,i);const c=[],f=[],d=[],m=[],p=new K,g=new Jt;f.push(0,0,0),d.push(0,0,1),m.push(.5,.5);for(let _=0,S=3;_<=i;_++,S+=3){const y=r+_/i*l;p.x=t*Math.cos(y),p.y=t*Math.sin(y),f.push(p.x,p.y,p.z),d.push(0,0,1),g.x=(f[S]/t+1)/2,g.y=(f[S+1]/t+1)/2,m.push(g.x,g.y)}for(let _=1;_<=i;_++)c.push(_,_+1,0);this.setIndex(c),this.setAttribute("position",new Wn(f,3)),this.setAttribute("normal",new Wn(d,3)),this.setAttribute("uv",new Wn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qa(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Bi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,i){const r=this.getUtoTmapping(t);return this.getPoint(r,i)}getPoints(t=5){const i=[];for(let r=0;r<=t;r++)i.push(this.getPoint(r/t));return i}getSpacedPoints(t=5){const i=[];for(let r=0;r<=t;r++)i.push(this.getPointAt(r/t));return i}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let r,l=this.getPoint(0),c=0;i.push(0);for(let f=1;f<=t;f++)r=this.getPoint(f/t),c+=r.distanceTo(l),i.push(c),l=r;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,i=null){const r=this.getLengths();let l=0;const c=r.length;let f;i?f=i:f=t*r[c-1];let d=0,m=c-1,p;for(;d<=m;)if(l=Math.floor(d+(m-d)/2),p=r[l]-f,p<0)d=l+1;else if(p>0)m=l-1;else{m=l;break}if(l=m,r[l]===f)return l/(c-1);const g=r[l],S=r[l+1]-g,y=(f-g)/S;return(l+y)/(c-1)}getTangent(t,i){let l=t-1e-4,c=t+1e-4;l<0&&(l=0),c>1&&(c=1);const f=this.getPoint(l),d=this.getPoint(c),m=i||(f.isVector2?new Jt:new K);return m.copy(d).sub(f).normalize(),m}getTangentAt(t,i){const r=this.getUtoTmapping(t);return this.getTangent(r,i)}computeFrenetFrames(t,i=!1){const r=new K,l=[],c=[],f=[],d=new K,m=new rn;for(let y=0;y<=t;y++){const E=y/t;l[y]=this.getTangentAt(E,new K)}c[0]=new K,f[0]=new K;let p=Number.MAX_VALUE;const g=Math.abs(l[0].x),_=Math.abs(l[0].y),S=Math.abs(l[0].z);g<=p&&(p=g,r.set(1,0,0)),_<=p&&(p=_,r.set(0,1,0)),S<=p&&r.set(0,0,1),d.crossVectors(l[0],r).normalize(),c[0].crossVectors(l[0],d),f[0].crossVectors(l[0],c[0]);for(let y=1;y<=t;y++){if(c[y]=c[y-1].clone(),f[y]=f[y-1].clone(),d.crossVectors(l[y-1],l[y]),d.length()>Number.EPSILON){d.normalize();const E=Math.acos(_e(l[y-1].dot(l[y]),-1,1));c[y].applyMatrix4(m.makeRotationAxis(d,E))}f[y].crossVectors(l[y],c[y])}if(i===!0){let y=Math.acos(_e(c[0].dot(c[t]),-1,1));y/=t,l[0].dot(d.crossVectors(c[0],c[t]))>0&&(y=-y);for(let E=1;E<=t;E++)c[E].applyMatrix4(m.makeRotationAxis(l[E],y*E)),f[E].crossVectors(l[E],c[E])}return{tangents:l,normals:c,binormals:f}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class qd extends Bi{constructor(t=0,i=0,r=1,l=1,c=0,f=Math.PI*2,d=!1,m=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=i,this.xRadius=r,this.yRadius=l,this.aStartAngle=c,this.aEndAngle=f,this.aClockwise=d,this.aRotation=m}getPoint(t,i=new Jt){const r=i,l=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const f=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=l;for(;c>l;)c-=l;c<Number.EPSILON&&(f?c=0:c=l),this.aClockwise===!0&&!f&&(c===l?c=-l:c=c-l);const d=this.aStartAngle+t*c;let m=this.aX+this.xRadius*Math.cos(d),p=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const g=Math.cos(this.aRotation),_=Math.sin(this.aRotation),S=m-this.aX,y=p-this.aY;m=S*g-y*_+this.aX,p=S*_+y*g+this.aY}return r.set(m,p)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class RM extends qd{constructor(t,i,r,l,c,f){super(t,i,r,r,l,c,f),this.isArcCurve=!0,this.type="ArcCurve"}}function Yd(){let s=0,t=0,i=0,r=0;function l(c,f,d,m){s=c,t=d,i=-3*c+3*f-2*d-m,r=2*c-2*f+d+m}return{initCatmullRom:function(c,f,d,m,p){l(f,d,p*(d-c),p*(m-f))},initNonuniformCatmullRom:function(c,f,d,m,p,g,_){let S=(f-c)/p-(d-c)/(p+g)+(d-f)/g,y=(d-f)/g-(m-f)/(g+_)+(m-d)/_;S*=g,y*=g,l(f,d,S,y)},calc:function(c){const f=c*c,d=f*c;return s+t*c+i*f+r*d}}}const Lc=new K,Ih=new Yd,Hh=new Yd,Gh=new Yd;class CM extends Bi{constructor(t=[],i=!1,r="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=i,this.curveType=r,this.tension=l}getPoint(t,i=new K){const r=i,l=this.points,c=l.length,f=(c-(this.closed?0:1))*t;let d=Math.floor(f),m=f-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/c)+1)*c:m===0&&d===c-1&&(d=c-2,m=1);let p,g;this.closed||d>0?p=l[(d-1)%c]:(Lc.subVectors(l[0],l[1]).add(l[0]),p=Lc);const _=l[d%c],S=l[(d+1)%c];if(this.closed||d+2<c?g=l[(d+2)%c]:(Lc.subVectors(l[c-1],l[c-2]).add(l[c-1]),g=Lc),this.curveType==="centripetal"||this.curveType==="chordal"){const y=this.curveType==="chordal"?.5:.25;let E=Math.pow(p.distanceToSquared(_),y),A=Math.pow(_.distanceToSquared(S),y),M=Math.pow(S.distanceToSquared(g),y);A<1e-4&&(A=1),E<1e-4&&(E=A),M<1e-4&&(M=A),Ih.initNonuniformCatmullRom(p.x,_.x,S.x,g.x,E,A,M),Hh.initNonuniformCatmullRom(p.y,_.y,S.y,g.y,E,A,M),Gh.initNonuniformCatmullRom(p.z,_.z,S.z,g.z,E,A,M)}else this.curveType==="catmullrom"&&(Ih.initCatmullRom(p.x,_.x,S.x,g.x,this.tension),Hh.initCatmullRom(p.y,_.y,S.y,g.y,this.tension),Gh.initCatmullRom(p.z,_.z,S.z,g.z,this.tension));return r.set(Ih.calc(m),Hh.calc(m),Gh.calc(m)),r}copy(t){super.copy(t),this.points=[];for(let i=0,r=t.points.length;i<r;i++){const l=t.points[i];this.points.push(l.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,r=this.points.length;i<r;i++){const l=this.points[i];t.points.push(l.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,r=t.points.length;i<r;i++){const l=t.points[i];this.points.push(new K().fromArray(l))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function pv(s,t,i,r,l){const c=(r-t)*.5,f=(l-i)*.5,d=s*s,m=s*d;return(2*i-2*r+c+f)*m+(-3*i+3*r-2*c-f)*d+c*s+i}function wM(s,t){const i=1-s;return i*i*t}function DM(s,t){return 2*(1-s)*s*t}function UM(s,t){return s*s*t}function Io(s,t,i,r){return wM(s,t)+DM(s,i)+UM(s,r)}function LM(s,t){const i=1-s;return i*i*i*t}function NM(s,t){const i=1-s;return 3*i*i*s*t}function OM(s,t){return 3*(1-s)*s*s*t}function PM(s,t){return s*s*s*t}function Ho(s,t,i,r,l){return LM(s,t)+NM(s,i)+OM(s,r)+PM(s,l)}class T0 extends Bi{constructor(t=new Jt,i=new Jt,r=new Jt,l=new Jt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=i,this.v2=r,this.v3=l}getPoint(t,i=new Jt){const r=i,l=this.v0,c=this.v1,f=this.v2,d=this.v3;return r.set(Ho(t,l.x,c.x,f.x,d.x),Ho(t,l.y,c.y,f.y,d.y)),r}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class zM extends Bi{constructor(t=new K,i=new K,r=new K,l=new K){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=i,this.v2=r,this.v3=l}getPoint(t,i=new K){const r=i,l=this.v0,c=this.v1,f=this.v2,d=this.v3;return r.set(Ho(t,l.x,c.x,f.x,d.x),Ho(t,l.y,c.y,f.y,d.y),Ho(t,l.z,c.z,f.z,d.z)),r}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class b0 extends Bi{constructor(t=new Jt,i=new Jt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=i}getPoint(t,i=new Jt){const r=i;return t===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(t).add(this.v1)),r}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new Jt){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class BM extends Bi{constructor(t=new K,i=new K){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=i}getPoint(t,i=new K){const r=i;return t===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(t).add(this.v1)),r}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new K){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class A0 extends Bi{constructor(t=new Jt,i=new Jt,r=new Jt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=i,this.v2=r}getPoint(t,i=new Jt){const r=i,l=this.v0,c=this.v1,f=this.v2;return r.set(Io(t,l.x,c.x,f.x),Io(t,l.y,c.y,f.y)),r}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class FM extends Bi{constructor(t=new K,i=new K,r=new K){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=i,this.v2=r}getPoint(t,i=new K){const r=i,l=this.v0,c=this.v1,f=this.v2;return r.set(Io(t,l.x,c.x,f.x),Io(t,l.y,c.y,f.y),Io(t,l.z,c.z,f.z)),r}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class R0 extends Bi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,i=new Jt){const r=i,l=this.points,c=(l.length-1)*t,f=Math.floor(c),d=c-f,m=l[f===0?f:f-1],p=l[f],g=l[f>l.length-2?l.length-1:f+1],_=l[f>l.length-3?l.length-1:f+2];return r.set(pv(d,m.x,p.x,g.x,_.x),pv(d,m.y,p.y,g.y,_.y)),r}copy(t){super.copy(t),this.points=[];for(let i=0,r=t.points.length;i<r;i++){const l=t.points[i];this.points.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,r=this.points.length;i<r;i++){const l=this.points[i];t.points.push(l.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,r=t.points.length;i<r;i++){const l=t.points[i];this.points.push(new Jt().fromArray(l))}return this}}var mv=Object.freeze({__proto__:null,ArcCurve:RM,CatmullRomCurve3:CM,CubicBezierCurve:T0,CubicBezierCurve3:zM,EllipseCurve:qd,LineCurve:b0,LineCurve3:BM,QuadraticBezierCurve:A0,QuadraticBezierCurve3:FM,SplineCurve:R0});class IM extends Bi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),i=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(i)){const r=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new mv[r](i,t))}return this}getPoint(t,i){const r=t*this.getLength(),l=this.getCurveLengths();let c=0;for(;c<l.length;){if(l[c]>=r){const f=l[c]-r,d=this.curves[c],m=d.getLength(),p=m===0?0:1-f/m;return d.getPointAt(p,i)}c++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let i=0;for(let r=0,l=this.curves.length;r<l;r++)i+=this.curves[r].getLength(),t.push(i);return this.cacheLengths=t,t}getSpacedPoints(t=40){const i=[];for(let r=0;r<=t;r++)i.push(this.getPoint(r/t));return this.autoClose&&i.push(i[0]),i}getPoints(t=12){const i=[];let r;for(let l=0,c=this.curves;l<c.length;l++){const f=c[l],d=f.isEllipseCurve?t*2:f.isLineCurve||f.isLineCurve3?1:f.isSplineCurve?t*f.points.length:t,m=f.getPoints(d);for(let p=0;p<m.length;p++){const g=m[p];r&&r.equals(g)||(i.push(g),r=g)}}return this.autoClose&&i.length>1&&!i[i.length-1].equals(i[0])&&i.push(i[0]),i}copy(t){super.copy(t),this.curves=[];for(let i=0,r=t.curves.length;i<r;i++){const l=t.curves[i];this.curves.push(l.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let i=0,r=this.curves.length;i<r;i++){const l=this.curves[i];t.curves.push(l.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let i=0,r=t.curves.length;i<r;i++){const l=t.curves[i];this.curves.push(new mv[l.type]().fromJSON(l))}return this}}class gv extends IM{constructor(t){super(),this.type="Path",this.currentPoint=new Jt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let i=1,r=t.length;i<r;i++)this.lineTo(t[i].x,t[i].y);return this}moveTo(t,i){return this.currentPoint.set(t,i),this}lineTo(t,i){const r=new b0(this.currentPoint.clone(),new Jt(t,i));return this.curves.push(r),this.currentPoint.set(t,i),this}quadraticCurveTo(t,i,r,l){const c=new A0(this.currentPoint.clone(),new Jt(t,i),new Jt(r,l));return this.curves.push(c),this.currentPoint.set(r,l),this}bezierCurveTo(t,i,r,l,c,f){const d=new T0(this.currentPoint.clone(),new Jt(t,i),new Jt(r,l),new Jt(c,f));return this.curves.push(d),this.currentPoint.set(c,f),this}splineThru(t){const i=[this.currentPoint.clone()].concat(t),r=new R0(i);return this.curves.push(r),this.currentPoint.copy(t[t.length-1]),this}arc(t,i,r,l,c,f){const d=this.currentPoint.x,m=this.currentPoint.y;return this.absarc(t+d,i+m,r,l,c,f),this}absarc(t,i,r,l,c,f){return this.absellipse(t,i,r,r,l,c,f),this}ellipse(t,i,r,l,c,f,d,m){const p=this.currentPoint.x,g=this.currentPoint.y;return this.absellipse(t+p,i+g,r,l,c,f,d,m),this}absellipse(t,i,r,l,c,f,d,m){const p=new qd(t,i,r,l,c,f,d,m);if(this.curves.length>0){const _=p.getPoint(0);_.equals(this.currentPoint)||this.lineTo(_.x,_.y)}this.curves.push(p);const g=p.getPoint(1);return this.currentPoint.copy(g),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class C0 extends gv{constructor(t){super(t),this.uuid=zs(),this.type="Shape",this.holes=[]}getPointsHoles(t){const i=[];for(let r=0,l=this.holes.length;r<l;r++)i[r]=this.holes[r].getPoints(t);return i}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let i=0,r=t.holes.length;i<r;i++){const l=t.holes[i];this.holes.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let i=0,r=this.holes.length;i<r;i++){const l=this.holes[i];t.holes.push(l.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let i=0,r=t.holes.length;i<r;i++){const l=t.holes[i];this.holes.push(new gv().fromJSON(l))}return this}}function HM(s,t,i=2){const r=t&&t.length,l=r?t[0]*i:s.length;let c=w0(s,0,l,i,!0);const f=[];if(!c||c.next===c.prev)return f;let d,m,p;if(r&&(c=WM(s,t,c,i)),s.length>80*i){d=1/0,m=1/0;let g=-1/0,_=-1/0;for(let S=i;S<l;S+=i){const y=s[S],E=s[S+1];y<d&&(d=y),E<m&&(m=E),y>g&&(g=y),E>_&&(_=E)}p=Math.max(g-d,_-m),p=p!==0?32767/p:0}return qo(c,f,i,d,m,p,0),f}function w0(s,t,i,r,l){let c;if(l===nE(s,t,i,r)>0)for(let f=t;f<i;f+=r)c=_v(f/r|0,s[f],s[f+1],c);else for(let f=i-r;f>=t;f-=r)c=_v(f/r|0,s[f],s[f+1],c);return c&&Os(c,c.next)&&(Zo(c),c=c.next),c}function Cr(s,t){if(!s)return s;t||(t=s);let i=s,r;do if(r=!1,!i.steiner&&(Os(i,i.next)||je(i.prev,i,i.next)===0)){if(Zo(i),i=t=i.prev,i===i.next)break;r=!0}else i=i.next;while(r||i!==t);return t}function qo(s,t,i,r,l,c,f){if(!s)return;!f&&c&&KM(s,r,l,c);let d=s;for(;s.prev!==s.next;){const m=s.prev,p=s.next;if(c?VM(s,r,l,c):GM(s)){t.push(m.i,s.i,p.i),Zo(s),s=p.next,d=p.next;continue}if(s=p,s===d){f?f===1?(s=XM(Cr(s),t),qo(s,t,i,r,l,c,2)):f===2&&kM(s,t,i,r,l,c):qo(Cr(s),t,i,r,l,c,1);break}}}function GM(s){const t=s.prev,i=s,r=s.next;if(je(t,i,r)>=0)return!1;const l=t.x,c=i.x,f=r.x,d=t.y,m=i.y,p=r.y,g=Math.min(l,c,f),_=Math.min(d,m,p),S=Math.max(l,c,f),y=Math.max(d,m,p);let E=r.next;for(;E!==t;){if(E.x>=g&&E.x<=S&&E.y>=_&&E.y<=y&&Bo(l,d,c,m,f,p,E.x,E.y)&&je(E.prev,E,E.next)>=0)return!1;E=E.next}return!0}function VM(s,t,i,r){const l=s.prev,c=s,f=s.next;if(je(l,c,f)>=0)return!1;const d=l.x,m=c.x,p=f.x,g=l.y,_=c.y,S=f.y,y=Math.min(d,m,p),E=Math.min(g,_,S),A=Math.max(d,m,p),M=Math.max(g,_,S),v=Od(y,E,t,i,r),z=Od(A,M,t,i,r);let U=s.prevZ,C=s.nextZ;for(;U&&U.z>=v&&C&&C.z<=z;){if(U.x>=y&&U.x<=A&&U.y>=E&&U.y<=M&&U!==l&&U!==f&&Bo(d,g,m,_,p,S,U.x,U.y)&&je(U.prev,U,U.next)>=0||(U=U.prevZ,C.x>=y&&C.x<=A&&C.y>=E&&C.y<=M&&C!==l&&C!==f&&Bo(d,g,m,_,p,S,C.x,C.y)&&je(C.prev,C,C.next)>=0))return!1;C=C.nextZ}for(;U&&U.z>=v;){if(U.x>=y&&U.x<=A&&U.y>=E&&U.y<=M&&U!==l&&U!==f&&Bo(d,g,m,_,p,S,U.x,U.y)&&je(U.prev,U,U.next)>=0)return!1;U=U.prevZ}for(;C&&C.z<=z;){if(C.x>=y&&C.x<=A&&C.y>=E&&C.y<=M&&C!==l&&C!==f&&Bo(d,g,m,_,p,S,C.x,C.y)&&je(C.prev,C,C.next)>=0)return!1;C=C.nextZ}return!0}function XM(s,t){let i=s;do{const r=i.prev,l=i.next.next;!Os(r,l)&&U0(r,i,i.next,l)&&Yo(r,l)&&Yo(l,r)&&(t.push(r.i,i.i,l.i),Zo(i),Zo(i.next),i=s=l),i=i.next}while(i!==s);return Cr(i)}function kM(s,t,i,r,l,c){let f=s;do{let d=f.next.next;for(;d!==f.prev;){if(f.i!==d.i&&$M(f,d)){let m=L0(f,d);f=Cr(f,f.next),m=Cr(m,m.next),qo(f,t,i,r,l,c,0),qo(m,t,i,r,l,c,0);return}d=d.next}f=f.next}while(f!==s)}function WM(s,t,i,r){const l=[];for(let c=0,f=t.length;c<f;c++){const d=t[c]*r,m=c<f-1?t[c+1]*r:s.length,p=w0(s,d,m,r,!1);p===p.next&&(p.steiner=!0),l.push(JM(p))}l.sort(qM);for(let c=0;c<l.length;c++)i=YM(l[c],i);return i}function qM(s,t){let i=s.x-t.x;if(i===0&&(i=s.y-t.y,i===0)){const r=(s.next.y-s.y)/(s.next.x-s.x),l=(t.next.y-t.y)/(t.next.x-t.x);i=r-l}return i}function YM(s,t){const i=ZM(s,t);if(!i)return t;const r=L0(i,s);return Cr(r,r.next),Cr(i,i.next)}function ZM(s,t){let i=t;const r=s.x,l=s.y;let c=-1/0,f;if(Os(s,i))return i;do{if(Os(s,i.next))return i.next;if(l<=i.y&&l>=i.next.y&&i.next.y!==i.y){const _=i.x+(l-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(_<=r&&_>c&&(c=_,f=i.x<i.next.x?i:i.next,_===r))return f}i=i.next}while(i!==t);if(!f)return null;const d=f,m=f.x,p=f.y;let g=1/0;i=f;do{if(r>=i.x&&i.x>=m&&r!==i.x&&D0(l<p?r:c,l,m,p,l<p?c:r,l,i.x,i.y)){const _=Math.abs(l-i.y)/(r-i.x);Yo(i,s)&&(_<g||_===g&&(i.x>f.x||i.x===f.x&&jM(f,i)))&&(f=i,g=_)}i=i.next}while(i!==d);return f}function jM(s,t){return je(s.prev,s,t.prev)<0&&je(t.next,s,s.next)<0}function KM(s,t,i,r){let l=s;do l.z===0&&(l.z=Od(l.x,l.y,t,i,r)),l.prevZ=l.prev,l.nextZ=l.next,l=l.next;while(l!==s);l.prevZ.nextZ=null,l.prevZ=null,QM(l)}function QM(s){let t,i=1;do{let r=s,l;s=null;let c=null;for(t=0;r;){t++;let f=r,d=0;for(let p=0;p<i&&(d++,f=f.nextZ,!!f);p++);let m=i;for(;d>0||m>0&&f;)d!==0&&(m===0||!f||r.z<=f.z)?(l=r,r=r.nextZ,d--):(l=f,f=f.nextZ,m--),c?c.nextZ=l:s=l,l.prevZ=c,c=l;r=f}c.nextZ=null,i*=2}while(t>1);return s}function Od(s,t,i,r,l){return s=(s-i)*l|0,t=(t-r)*l|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function JM(s){let t=s,i=s;do(t.x<i.x||t.x===i.x&&t.y<i.y)&&(i=t),t=t.next;while(t!==s);return i}function D0(s,t,i,r,l,c,f,d){return(l-f)*(t-d)>=(s-f)*(c-d)&&(s-f)*(r-d)>=(i-f)*(t-d)&&(i-f)*(c-d)>=(l-f)*(r-d)}function Bo(s,t,i,r,l,c,f,d){return!(s===f&&t===d)&&D0(s,t,i,r,l,c,f,d)}function $M(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!tE(s,t)&&(Yo(s,t)&&Yo(t,s)&&eE(s,t)&&(je(s.prev,s,t.prev)||je(s,t.prev,t))||Os(s,t)&&je(s.prev,s,s.next)>0&&je(t.prev,t,t.next)>0)}function je(s,t,i){return(t.y-s.y)*(i.x-t.x)-(t.x-s.x)*(i.y-t.y)}function Os(s,t){return s.x===t.x&&s.y===t.y}function U0(s,t,i,r){const l=Oc(je(s,t,i)),c=Oc(je(s,t,r)),f=Oc(je(i,r,s)),d=Oc(je(i,r,t));return!!(l!==c&&f!==d||l===0&&Nc(s,i,t)||c===0&&Nc(s,r,t)||f===0&&Nc(i,s,r)||d===0&&Nc(i,t,r))}function Nc(s,t,i){return t.x<=Math.max(s.x,i.x)&&t.x>=Math.min(s.x,i.x)&&t.y<=Math.max(s.y,i.y)&&t.y>=Math.min(s.y,i.y)}function Oc(s){return s>0?1:s<0?-1:0}function tE(s,t){let i=s;do{if(i.i!==s.i&&i.next.i!==s.i&&i.i!==t.i&&i.next.i!==t.i&&U0(i,i.next,s,t))return!0;i=i.next}while(i!==s);return!1}function Yo(s,t){return je(s.prev,s,s.next)<0?je(s,t,s.next)>=0&&je(s,s.prev,t)>=0:je(s,t,s.prev)<0||je(s,s.next,t)<0}function eE(s,t){let i=s,r=!1;const l=(s.x+t.x)/2,c=(s.y+t.y)/2;do i.y>c!=i.next.y>c&&i.next.y!==i.y&&l<(i.next.x-i.x)*(c-i.y)/(i.next.y-i.y)+i.x&&(r=!r),i=i.next;while(i!==s);return r}function L0(s,t){const i=Pd(s.i,s.x,s.y),r=Pd(t.i,t.x,t.y),l=s.next,c=t.prev;return s.next=t,t.prev=s,i.next=l,l.prev=i,r.next=i,i.prev=r,c.next=r,r.prev=c,r}function _v(s,t,i,r){const l=Pd(s,t,i);return r?(l.next=r.next,l.prev=r,r.next.prev=l,r.next=l):(l.prev=l,l.next=l),l}function Zo(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Pd(s,t,i){return{i:s,x:t,y:i,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function nE(s,t,i,r){let l=0;for(let c=t,f=i-r;c<i;c+=r)l+=(s[f]-s[c])*(s[c+1]+s[f+1]),f=c;return l}class iE{static triangulate(t,i,r=2){return HM(t,i,r)}}class Go{static area(t){const i=t.length;let r=0;for(let l=i-1,c=0;c<i;l=c++)r+=t[l].x*t[c].y-t[c].x*t[l].y;return r*.5}static isClockWise(t){return Go.area(t)<0}static triangulateShape(t,i){const r=[],l=[],c=[];vv(t),xv(r,t);let f=t.length;i.forEach(vv);for(let m=0;m<i.length;m++)l.push(f),f+=i[m].length,xv(r,i[m]);const d=iE.triangulate(r,l);for(let m=0;m<d.length;m+=3)c.push(d.slice(m,m+3));return c}}function vv(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function xv(s,t){for(let i=0;i<t.length;i++)s.push(t[i].x),s.push(t[i].y)}class zi extends bi{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const c=t/2,f=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,g=m+1,_=t/d,S=i/m,y=[],E=[],A=[],M=[];for(let v=0;v<g;v++){const z=v*S-f;for(let U=0;U<p;U++){const C=U*_-c;E.push(C,-z,0),A.push(0,0,1),M.push(U/d),M.push(1-v/m)}}for(let v=0;v<m;v++)for(let z=0;z<d;z++){const U=z+p*v,C=z+p*(v+1),G=z+1+p*(v+1),X=z+1+p*v;y.push(U,C,X),y.push(C,G,X)}this.setIndex(y),this.setAttribute("position",new Wn(E,3)),this.setAttribute("normal",new Wn(A,3)),this.setAttribute("uv",new Wn(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zi(t.width,t.height,t.widthSegments,t.heightSegments)}}class Zd extends bi{constructor(t=new C0([new Jt(0,.5),new Jt(-.5,-.5),new Jt(.5,-.5)]),i=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:i};const r=[],l=[],c=[],f=[];let d=0,m=0;if(Array.isArray(t)===!1)p(t);else for(let g=0;g<t.length;g++)p(t[g]),this.addGroup(d,m,g),d+=m,m=0;this.setIndex(r),this.setAttribute("position",new Wn(l,3)),this.setAttribute("normal",new Wn(c,3)),this.setAttribute("uv",new Wn(f,2));function p(g){const _=l.length/3,S=g.extractPoints(i);let y=S.shape;const E=S.holes;Go.isClockWise(y)===!1&&(y=y.reverse());for(let M=0,v=E.length;M<v;M++){const z=E[M];Go.isClockWise(z)===!0&&(E[M]=z.reverse())}const A=Go.triangulateShape(y,E);for(let M=0,v=E.length;M<v;M++){const z=E[M];y=y.concat(z)}for(let M=0,v=y.length;M<v;M++){const z=y[M];l.push(z.x,z.y,0),c.push(0,0,1),f.push(z.x,z.y)}for(let M=0,v=A.length;M<v;M++){const z=A[M],U=z[0]+_,C=z[1]+_,G=z[2]+_;r.push(U,C,G),m+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),i=this.parameters.shapes;return aE(i,t)}static fromJSON(t,i){const r=[];for(let l=0,c=t.shapes.length;l<c;l++){const f=i[t.shapes[l]];r.push(f)}return new Zd(r,t.curveSegments)}}function aE(s,t){if(t.shapes=[],Array.isArray(s))for(let i=0,r=s.length;i<r;i++){const l=s[i];t.shapes.push(l.uuid)}else t.shapes.push(s.uuid);return t}class rE extends Jo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Iy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class sE extends Jo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class N0 extends v0{constructor(t=-1,i=1,r=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-t,f=r+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class oE extends yi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function Sv(s,t,i,r){const l=lE(r);switch(i){case a0:return s*t;case s0:return s*t/l.components*l.byteLength;case Vd:return s*t/l.components*l.byteLength;case o0:return s*t*2/l.components*l.byteLength;case Xd:return s*t*2/l.components*l.byteLength;case r0:return s*t*3/l.components*l.byteLength;case Ei:return s*t*4/l.components*l.byteLength;case kd:return s*t*4/l.components*l.byteLength;case Fc:case Ic:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Hc:case Gc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ld:case ud:return Math.max(s,16)*Math.max(t,8)/4;case od:case cd:return Math.max(s,8)*Math.max(t,8)/2;case fd:case hd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case dd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case pd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case md:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case gd:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case _d:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case vd:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case xd:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Sd:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case yd:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Md:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Ed:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Td:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case bd:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Ad:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Rd:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Vc:case Cd:case wd:return Math.ceil(s/4)*Math.ceil(t/4)*16;case l0:case Dd:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Ud:case Ld:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function lE(s){switch(s){case fa:case e0:return{byteLength:1,components:1};case Vo:case n0:case jo:return{byteLength:2,components:1};case Hd:case Gd:return{byteLength:2,components:4};case Ar:case Id:case ca:return{byteLength:4,components:1};case i0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fd);function O0(){let s=null,t=!1,i=null,r=null;function l(c,f){i(c,f),r=s.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=s.requestAnimationFrame(l),t=!0)},stop:function(){s.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function cE(s){const t=new WeakMap;function i(d,m){const p=d.array,g=d.usage,_=p.byteLength,S=s.createBuffer();s.bindBuffer(m,S),s.bufferData(m,p,g),d.onUploadCallback();let y;if(p instanceof Float32Array)y=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=s.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=s.SHORT;else if(p instanceof Uint32Array)y=s.UNSIGNED_INT;else if(p instanceof Int32Array)y=s.INT;else if(p instanceof Int8Array)y=s.BYTE;else if(p instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:_}}function r(d,m,p){const g=m.array,_=m.updateRanges;if(s.bindBuffer(p,d),_.length===0)s.bufferSubData(p,0,g);else{_.sort((y,E)=>y.start-E.start);let S=0;for(let y=1;y<_.length;y++){const E=_[S],A=_[y];A.start<=E.start+E.count+1?E.count=Math.max(E.count,A.start+A.count-E.start):(++S,_[S]=A)}_.length=S+1;for(let y=0,E=_.length;y<E;y++){const A=_[y];s.bufferSubData(p,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(s.deleteBuffer(m.buffer),t.delete(d))}function f(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:f}}var uE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,hE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,_E=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,xE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,SE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ME=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,EE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,TE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,bE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,AE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,RE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,CE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,DE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,UE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,LE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,NE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,OE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,PE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,zE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,BE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,FE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,IE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,HE="gl_FragColor = linearToOutputTexel( gl_FragColor );",GE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,VE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,XE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,WE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,YE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ZE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,KE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,QE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,JE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$E=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,eT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,nT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,iT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,aT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,oT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,cT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,uT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,fT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_T=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,xT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ST=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,MT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ET=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,TT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,AT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,RT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,CT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,wT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,DT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,UT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,LT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,NT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,OT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,PT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,BT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,FT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,IT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,HT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,GT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,VT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,XT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,WT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,qT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,YT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ZT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,jT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,KT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,QT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,JT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,$T=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,eb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ib=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ab=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,rb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ob=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,lb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ub=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,db=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,gb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSEDEPTHBUF
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,_b=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,vb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,xb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Mb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Eb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Tb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ab=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Cb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Db=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ub=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ob=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Fb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ib=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Gb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Vb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,fe={alphahash_fragment:uE,alphahash_pars_fragment:fE,alphamap_fragment:hE,alphamap_pars_fragment:dE,alphatest_fragment:pE,alphatest_pars_fragment:mE,aomap_fragment:gE,aomap_pars_fragment:_E,batching_pars_vertex:vE,batching_vertex:xE,begin_vertex:SE,beginnormal_vertex:yE,bsdfs:ME,iridescence_fragment:EE,bumpmap_pars_fragment:TE,clipping_planes_fragment:bE,clipping_planes_pars_fragment:AE,clipping_planes_pars_vertex:RE,clipping_planes_vertex:CE,color_fragment:wE,color_pars_fragment:DE,color_pars_vertex:UE,color_vertex:LE,common:NE,cube_uv_reflection_fragment:OE,defaultnormal_vertex:PE,displacementmap_pars_vertex:zE,displacementmap_vertex:BE,emissivemap_fragment:FE,emissivemap_pars_fragment:IE,colorspace_fragment:HE,colorspace_pars_fragment:GE,envmap_fragment:VE,envmap_common_pars_fragment:XE,envmap_pars_fragment:kE,envmap_pars_vertex:WE,envmap_physical_pars_fragment:nT,envmap_vertex:qE,fog_vertex:YE,fog_pars_vertex:ZE,fog_fragment:jE,fog_pars_fragment:KE,gradientmap_pars_fragment:QE,lightmap_pars_fragment:JE,lights_lambert_fragment:$E,lights_lambert_pars_fragment:tT,lights_pars_begin:eT,lights_toon_fragment:iT,lights_toon_pars_fragment:aT,lights_phong_fragment:rT,lights_phong_pars_fragment:sT,lights_physical_fragment:oT,lights_physical_pars_fragment:lT,lights_fragment_begin:cT,lights_fragment_maps:uT,lights_fragment_end:fT,logdepthbuf_fragment:hT,logdepthbuf_pars_fragment:dT,logdepthbuf_pars_vertex:pT,logdepthbuf_vertex:mT,map_fragment:gT,map_pars_fragment:_T,map_particle_fragment:vT,map_particle_pars_fragment:xT,metalnessmap_fragment:ST,metalnessmap_pars_fragment:yT,morphinstance_vertex:MT,morphcolor_vertex:ET,morphnormal_vertex:TT,morphtarget_pars_vertex:bT,morphtarget_vertex:AT,normal_fragment_begin:RT,normal_fragment_maps:CT,normal_pars_fragment:wT,normal_pars_vertex:DT,normal_vertex:UT,normalmap_pars_fragment:LT,clearcoat_normal_fragment_begin:NT,clearcoat_normal_fragment_maps:OT,clearcoat_pars_fragment:PT,iridescence_pars_fragment:zT,opaque_fragment:BT,packing:FT,premultiplied_alpha_fragment:IT,project_vertex:HT,dithering_fragment:GT,dithering_pars_fragment:VT,roughnessmap_fragment:XT,roughnessmap_pars_fragment:kT,shadowmap_pars_fragment:WT,shadowmap_pars_vertex:qT,shadowmap_vertex:YT,shadowmask_pars_fragment:ZT,skinbase_vertex:jT,skinning_pars_vertex:KT,skinning_vertex:QT,skinnormal_vertex:JT,specularmap_fragment:$T,specularmap_pars_fragment:tb,tonemapping_fragment:eb,tonemapping_pars_fragment:nb,transmission_fragment:ib,transmission_pars_fragment:ab,uv_pars_fragment:rb,uv_pars_vertex:sb,uv_vertex:ob,worldpos_vertex:lb,background_vert:cb,background_frag:ub,backgroundCube_vert:fb,backgroundCube_frag:hb,cube_vert:db,cube_frag:pb,depth_vert:mb,depth_frag:gb,distanceRGBA_vert:_b,distanceRGBA_frag:vb,equirect_vert:xb,equirect_frag:Sb,linedashed_vert:yb,linedashed_frag:Mb,meshbasic_vert:Eb,meshbasic_frag:Tb,meshlambert_vert:bb,meshlambert_frag:Ab,meshmatcap_vert:Rb,meshmatcap_frag:Cb,meshnormal_vert:wb,meshnormal_frag:Db,meshphong_vert:Ub,meshphong_frag:Lb,meshphysical_vert:Nb,meshphysical_frag:Ob,meshtoon_vert:Pb,meshtoon_frag:zb,points_vert:Bb,points_frag:Fb,shadow_vert:Ib,shadow_frag:Hb,sprite_vert:Gb,sprite_frag:Vb},Lt={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ue}},envmap:{envMap:{value:null},envMapRotation:{value:new ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ue},normalScale:{value:new Jt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0},uvTransform:{value:new ue}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new Jt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}}},Li={basic:{uniforms:On([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:fe.meshbasic_vert,fragmentShader:fe.meshbasic_frag},lambert:{uniforms:On([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Le(0)}}]),vertexShader:fe.meshlambert_vert,fragmentShader:fe.meshlambert_frag},phong:{uniforms:On([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30}}]),vertexShader:fe.meshphong_vert,fragmentShader:fe.meshphong_frag},standard:{uniforms:On([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag},toon:{uniforms:On([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new Le(0)}}]),vertexShader:fe.meshtoon_vert,fragmentShader:fe.meshtoon_frag},matcap:{uniforms:On([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:fe.meshmatcap_vert,fragmentShader:fe.meshmatcap_frag},points:{uniforms:On([Lt.points,Lt.fog]),vertexShader:fe.points_vert,fragmentShader:fe.points_frag},dashed:{uniforms:On([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fe.linedashed_vert,fragmentShader:fe.linedashed_frag},depth:{uniforms:On([Lt.common,Lt.displacementmap]),vertexShader:fe.depth_vert,fragmentShader:fe.depth_frag},normal:{uniforms:On([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:fe.meshnormal_vert,fragmentShader:fe.meshnormal_frag},sprite:{uniforms:On([Lt.sprite,Lt.fog]),vertexShader:fe.sprite_vert,fragmentShader:fe.sprite_frag},background:{uniforms:{uvTransform:{value:new ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fe.background_vert,fragmentShader:fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ue}},vertexShader:fe.backgroundCube_vert,fragmentShader:fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fe.cube_vert,fragmentShader:fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fe.equirect_vert,fragmentShader:fe.equirect_frag},distanceRGBA:{uniforms:On([Lt.common,Lt.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fe.distanceRGBA_vert,fragmentShader:fe.distanceRGBA_frag},shadow:{uniforms:On([Lt.lights,Lt.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:fe.shadow_vert,fragmentShader:fe.shadow_frag}};Li.physical={uniforms:On([Li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ue},clearcoatNormalScale:{value:new Jt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ue},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ue},transmissionSamplerSize:{value:new Jt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ue},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ue},anisotropyVector:{value:new Jt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ue}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag};const Pc={r:0,b:0,g:0},vr=new ha,Xb=new rn;function kb(s,t,i,r,l,c,f){const d=new Le(0);let m=c===!0?0:1,p,g,_=null,S=0,y=null;function E(U){let C=U.isScene===!0?U.background:null;return C&&C.isTexture&&(C=(U.backgroundBlurriness>0?i:t).get(C)),C}function A(U){let C=!1;const G=E(U);G===null?v(d,m):G&&G.isColor&&(v(G,1),C=!0);const X=s.xr.getEnvironmentBlendMode();X==="additive"?r.buffers.color.setClear(0,0,0,1,f):X==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||C)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function M(U,C){const G=E(C);G&&(G.isCubeTexture||G.mapping===Kc)?(g===void 0&&(g=new Ke(new $o(1,1,1),new Za({name:"BackgroundCubeMaterial",uniforms:Ns(Li.backgroundCube.uniforms),vertexShader:Li.backgroundCube.vertexShader,fragmentShader:Li.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(X,B,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),vr.copy(C.backgroundRotation),vr.x*=-1,vr.y*=-1,vr.z*=-1,G.isCubeTexture&&G.isRenderTargetTexture===!1&&(vr.y*=-1,vr.z*=-1),g.material.uniforms.envMap.value=G,g.material.uniforms.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(Xb.makeRotationFromEuler(vr)),g.material.toneMapped=Ce.getTransfer(G.colorSpace)!==Ie,(_!==G||S!==G.version||y!==s.toneMapping)&&(g.material.needsUpdate=!0,_=G,S=G.version,y=s.toneMapping),g.layers.enableAll(),U.unshift(g,g.geometry,g.material,0,0,null)):G&&G.isTexture&&(p===void 0&&(p=new Ke(new zi(2,2),new Za({name:"BackgroundMaterial",uniforms:Ns(Li.background.uniforms),vertexShader:Li.background.vertexShader,fragmentShader:Li.background.fragmentShader,side:Ya,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=G,p.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,p.material.toneMapped=Ce.getTransfer(G.colorSpace)!==Ie,G.matrixAutoUpdate===!0&&G.updateMatrix(),p.material.uniforms.uvTransform.value.copy(G.matrix),(_!==G||S!==G.version||y!==s.toneMapping)&&(p.material.needsUpdate=!0,_=G,S=G.version,y=s.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function v(U,C){U.getRGB(Pc,_0(s)),r.buffers.color.setClear(Pc.r,Pc.g,Pc.b,C,f)}function z(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(U,C=1){d.set(U),m=C,v(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(U){m=U,v(d,m)},render:A,addToRenderList:M,dispose:z}}function Wb(s,t){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=S(null);let c=l,f=!1;function d(w,F,ct,st,ft){let pt=!1;const O=_(st,ct,F);c!==O&&(c=O,p(c.object)),pt=y(w,st,ct,ft),pt&&E(w,st,ct,ft),ft!==null&&t.update(ft,s.ELEMENT_ARRAY_BUFFER),(pt||f)&&(f=!1,C(w,F,ct,st),ft!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(ft).buffer))}function m(){return s.createVertexArray()}function p(w){return s.bindVertexArray(w)}function g(w){return s.deleteVertexArray(w)}function _(w,F,ct){const st=ct.wireframe===!0;let ft=r[w.id];ft===void 0&&(ft={},r[w.id]=ft);let pt=ft[F.id];pt===void 0&&(pt={},ft[F.id]=pt);let O=pt[st];return O===void 0&&(O=S(m()),pt[st]=O),O}function S(w){const F=[],ct=[],st=[];for(let ft=0;ft<i;ft++)F[ft]=0,ct[ft]=0,st[ft]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:ct,attributeDivisors:st,object:w,attributes:{},index:null}}function y(w,F,ct,st){const ft=c.attributes,pt=F.attributes;let O=0;const Z=ct.getAttributes();for(const Y in Z)if(Z[Y].location>=0){const Et=ft[Y];let N=pt[Y];if(N===void 0&&(Y==="instanceMatrix"&&w.instanceMatrix&&(N=w.instanceMatrix),Y==="instanceColor"&&w.instanceColor&&(N=w.instanceColor)),Et===void 0||Et.attribute!==N||N&&Et.data!==N.data)return!0;O++}return c.attributesNum!==O||c.index!==st}function E(w,F,ct,st){const ft={},pt=F.attributes;let O=0;const Z=ct.getAttributes();for(const Y in Z)if(Z[Y].location>=0){let Et=pt[Y];Et===void 0&&(Y==="instanceMatrix"&&w.instanceMatrix&&(Et=w.instanceMatrix),Y==="instanceColor"&&w.instanceColor&&(Et=w.instanceColor));const N={};N.attribute=Et,Et&&Et.data&&(N.data=Et.data),ft[Y]=N,O++}c.attributes=ft,c.attributesNum=O,c.index=st}function A(){const w=c.newAttributes;for(let F=0,ct=w.length;F<ct;F++)w[F]=0}function M(w){v(w,0)}function v(w,F){const ct=c.newAttributes,st=c.enabledAttributes,ft=c.attributeDivisors;ct[w]=1,st[w]===0&&(s.enableVertexAttribArray(w),st[w]=1),ft[w]!==F&&(s.vertexAttribDivisor(w,F),ft[w]=F)}function z(){const w=c.newAttributes,F=c.enabledAttributes;for(let ct=0,st=F.length;ct<st;ct++)F[ct]!==w[ct]&&(s.disableVertexAttribArray(ct),F[ct]=0)}function U(w,F,ct,st,ft,pt,O){O===!0?s.vertexAttribIPointer(w,F,ct,ft,pt):s.vertexAttribPointer(w,F,ct,st,ft,pt)}function C(w,F,ct,st){A();const ft=st.attributes,pt=ct.getAttributes(),O=F.defaultAttributeValues;for(const Z in pt){const Y=pt[Z];if(Y.location>=0){let xt=ft[Z];if(xt===void 0&&(Z==="instanceMatrix"&&w.instanceMatrix&&(xt=w.instanceMatrix),Z==="instanceColor"&&w.instanceColor&&(xt=w.instanceColor)),xt!==void 0){const Et=xt.normalized,N=xt.itemSize,nt=t.get(xt);if(nt===void 0)continue;const Mt=nt.buffer,At=nt.type,Q=nt.bytesPerElement,_t=At===s.INT||At===s.UNSIGNED_INT||xt.gpuType===Id;if(xt.isInterleavedBufferAttribute){const gt=xt.data,It=gt.stride,Ot=xt.offset;if(gt.isInstancedInterleavedBuffer){for(let ne=0;ne<Y.locationSize;ne++)v(Y.location+ne,gt.meshPerAttribute);w.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let ne=0;ne<Y.locationSize;ne++)M(Y.location+ne);s.bindBuffer(s.ARRAY_BUFFER,Mt);for(let ne=0;ne<Y.locationSize;ne++)U(Y.location+ne,N/Y.locationSize,At,Et,It*Q,(Ot+N/Y.locationSize*ne)*Q,_t)}else{if(xt.isInstancedBufferAttribute){for(let gt=0;gt<Y.locationSize;gt++)v(Y.location+gt,xt.meshPerAttribute);w.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let gt=0;gt<Y.locationSize;gt++)M(Y.location+gt);s.bindBuffer(s.ARRAY_BUFFER,Mt);for(let gt=0;gt<Y.locationSize;gt++)U(Y.location+gt,N/Y.locationSize,At,Et,N*Q,N/Y.locationSize*gt*Q,_t)}}else if(O!==void 0){const Et=O[Z];if(Et!==void 0)switch(Et.length){case 2:s.vertexAttrib2fv(Y.location,Et);break;case 3:s.vertexAttrib3fv(Y.location,Et);break;case 4:s.vertexAttrib4fv(Y.location,Et);break;default:s.vertexAttrib1fv(Y.location,Et)}}}}z()}function G(){j();for(const w in r){const F=r[w];for(const ct in F){const st=F[ct];for(const ft in st)g(st[ft].object),delete st[ft];delete F[ct]}delete r[w]}}function X(w){if(r[w.id]===void 0)return;const F=r[w.id];for(const ct in F){const st=F[ct];for(const ft in st)g(st[ft].object),delete st[ft];delete F[ct]}delete r[w.id]}function B(w){for(const F in r){const ct=r[F];if(ct[w.id]===void 0)continue;const st=ct[w.id];for(const ft in st)g(st[ft].object),delete st[ft];delete ct[w.id]}}function j(){D(),f=!0,c!==l&&(c=l,p(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:j,resetDefaultState:D,dispose:G,releaseStatesOfGeometry:X,releaseStatesOfProgram:B,initAttributes:A,enableAttribute:M,disableUnusedAttributes:z}}function qb(s,t,i){let r;function l(p){r=p}function c(p,g){s.drawArrays(r,p,g),i.update(g,r,1)}function f(p,g,_){_!==0&&(s.drawArraysInstanced(r,p,g,_),i.update(g,r,_))}function d(p,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,_);let y=0;for(let E=0;E<_;E++)y+=g[E];i.update(y,r,1)}function m(p,g,_,S){if(_===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<p.length;E++)f(p[E],g[E],S[E]);else{y.multiDrawArraysInstancedWEBGL(r,p,0,g,0,S,0,_);let E=0;for(let A=0;A<_;A++)E+=g[A]*S[A];i.update(E,r,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function Yb(s,t,i,r){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const B=t.get("EXT_texture_filter_anisotropic");l=s.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(B){return!(B!==Ei&&r.convert(B)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(B){const j=B===jo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(B!==fa&&r.convert(B)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==ca&&!j)}function m(B){if(B==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),M=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),z=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),U=s.getParameter(s.MAX_VARYING_VECTORS),C=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),G=E>0,X=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:S,maxTextures:y,maxVertexTextures:E,maxTextureSize:A,maxCubemapSize:M,maxAttributes:v,maxVertexUniforms:z,maxVaryings:U,maxFragmentUniforms:C,vertexTextures:G,maxSamples:X}}function Zb(s){const t=this;let i=null,r=0,l=!1,c=!1;const f=new Sr,d=new ue,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,S){const y=_.length!==0||S||r!==0||l;return l=S,r=_.length,y},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,S){i=g(_,S,0)},this.setState=function(_,S,y){const E=_.clippingPlanes,A=_.clipIntersection,M=_.clipShadows,v=s.get(_);if(!l||E===null||E.length===0||c&&!M)c?g(null):p();else{const z=c?0:r,U=z*4;let C=v.clippingState||null;m.value=C,C=g(E,S,U,y);for(let G=0;G!==U;++G)C[G]=i[G];v.clippingState=C,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=z}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function g(_,S,y,E){const A=_!==null?_.length:0;let M=null;if(A!==0){if(M=m.value,E!==!0||M===null){const v=y+A*4,z=S.matrixWorldInverse;d.getNormalMatrix(z),(M===null||M.length<v)&&(M=new Float32Array(v));for(let U=0,C=y;U!==A;++U,C+=4)f.copy(_[U]).applyMatrix4(z,d),f.normal.toArray(M,C),M[C+3]=f.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,M}}function jb(s){let t=new WeakMap;function i(f,d){return d===id?f.mapping=Ds:d===ad&&(f.mapping=Us),f}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===id||d===ad)if(t.has(f)){const m=t.get(f).texture;return i(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new yM(m.height);return p.fromEquirectangularTexture(s,f),t.set(f,p),f.addEventListener("dispose",l),i(p.texture,f.mapping)}else return null}}return f}function l(f){const d=f.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function c(){t=new WeakMap}return{get:r,dispose:c}}const bs=4,yv=[.125,.215,.35,.446,.526,.582],Er=20,Vh=new N0,Mv=new Le;let Xh=null,kh=0,Wh=0,qh=!1;const yr=(1+Math.sqrt(5))/2,Ts=1/yr,Ev=[new K(-yr,Ts,0),new K(yr,Ts,0),new K(-Ts,0,yr),new K(Ts,0,yr),new K(0,yr,-Ts),new K(0,yr,Ts),new K(-1,1,-1),new K(1,1,-1),new K(-1,1,1),new K(1,1,1)],Kb=new K;class Tv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100,c={}){const{size:f=256,position:d=Kb}=c;Xh=this._renderer.getRenderTarget(),kh=this._renderer.getActiveCubeFace(),Wh=this._renderer.getActiveMipmapLevel(),qh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Av(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Xh,kh,Wh),this._renderer.xr.enabled=qh,t.scissorTest=!1,zc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Ds||t.mapping===Us?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Xh=this._renderer.getRenderTarget(),kh=this._renderer.getActiveCubeFace(),Wh=this._renderer.getActiveMipmapLevel(),qh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Ni,minFilter:Ni,generateMipmaps:!1,type:jo,format:Ei,colorSpace:Ls,depthBuffer:!1},l=bv(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bv(t,i,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qb(c)),this._blurMaterial=Jb(c,t,i)}return l}_compileMaterial(t){const i=new Ke(this._lodPlanes[0],t);this._renderer.compile(i,Vh)}_sceneToCubeUV(t,i,r,l,c){const m=new yi(90,1,i,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,S=_.autoClear,y=_.toneMapping;_.getClearColor(Mv),_.toneMapping=Wa,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null));const A=new ni({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1}),M=new Ke(new $o,A);let v=!1;const z=t.background;z?z.isColor&&(A.color.copy(z),t.background=null,v=!0):(A.color.copy(Mv),v=!0);for(let U=0;U<6;U++){const C=U%3;C===0?(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[U],c.y,c.z)):C===1?(m.up.set(0,0,p[U]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[U],c.z)):(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[U]));const G=this._cubeSize;zc(l,C*G,U>2?G:0,G,G),_.setRenderTarget(l),v&&_.render(M,m),_.render(t,m)}M.geometry.dispose(),M.material.dispose(),_.toneMapping=y,_.autoClear=S,t.background=z}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===Ds||t.mapping===Us;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Av());const c=l?this._cubemapMaterial:this._equirectMaterial,f=new Ke(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;zc(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(f,Vh)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=Ev[(l-c-1)%Ev.length];this._blur(t,c-1,c,f,d)}i.autoClear=r}_blur(t,i,r,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,r,l,"latitudinal",c),this._halfBlur(f,t,r,r,l,"longitudinal",c)}_halfBlur(t,i,r,l,c,f,d){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new Ke(this._lodPlanes[l],p),S=p.uniforms,y=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Er-1),A=c/E,M=isFinite(c)?1+Math.floor(g*A):Er;M>Er&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Er}`);const v=[];let z=0;for(let B=0;B<Er;++B){const j=B/A,D=Math.exp(-j*j/2);v.push(D),B===0?z+=D:B<M&&(z+=2*D)}for(let B=0;B<v.length;B++)v[B]=v[B]/z;S.envMap.value=t.texture,S.samples.value=M,S.weights.value=v,S.latitudinal.value=f==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:U}=this;S.dTheta.value=E,S.mipInt.value=U-r;const C=this._sizeLods[l],G=3*C*(l>U-bs?l-U+bs:0),X=4*(this._cubeSize-C);zc(i,G,X,3*C,2*C),m.setRenderTarget(i),m.render(_,Vh)}}function Qb(s){const t=[],i=[],r=[];let l=s;const c=s-bs+1+yv.length;for(let f=0;f<c;f++){const d=Math.pow(2,l);i.push(d);let m=1/d;f>s-bs?m=yv[f-s+bs-1]:f===0&&(m=0),r.push(m);const p=1/(d-2),g=-p,_=1+p,S=[g,g,_,g,_,_,g,g,_,_,g,_],y=6,E=6,A=3,M=2,v=1,z=new Float32Array(A*E*y),U=new Float32Array(M*E*y),C=new Float32Array(v*E*y);for(let X=0;X<y;X++){const B=X%3*2/3-1,j=X>2?0:-1,D=[B,j,0,B+2/3,j,0,B+2/3,j+1,0,B,j,0,B+2/3,j+1,0,B,j+1,0];z.set(D,A*E*X),U.set(S,M*E*X);const w=[X,X,X,X,X,X];C.set(w,v*E*X)}const G=new bi;G.setAttribute("position",new Pi(z,A)),G.setAttribute("uv",new Pi(U,M)),G.setAttribute("faceIndex",new Pi(C,v)),t.push(G),l>bs&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function bv(s,t,i){const r=new Rr(s,t,i);return r.texture.mapping=Kc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function zc(s,t,i,r,l){s.viewport.set(t,i,r,l),s.scissor.set(t,i,r,l)}function Jb(s,t,i){const r=new Float32Array(Er),l=new K(0,1,0);return new Za({name:"SphericalGaussianBlur",defines:{n:Er,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:jd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ka,depthTest:!1,depthWrite:!1})}function Av(){return new Za({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ka,depthTest:!1,depthWrite:!1})}function Rv(){return new Za({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ka,depthTest:!1,depthWrite:!1})}function jd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function $b(s){let t=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===id||m===ad,g=m===Ds||m===Us;if(p||g){let _=t.get(d);const S=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return i===null&&(i=new Tv(s)),_=p?i.fromEquirectangular(d,_):i.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),_.texture;if(_!==void 0)return _.texture;{const y=d.image;return p&&y&&y.height>0||g&&y&&l(y)?(i===null&&(i=new Tv(s)),_=p?i.fromEquirectangular(d):i.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),d.addEventListener("dispose",c),_.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function f(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function tA(s){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Rs("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function eA(s,t,i,r){const l={},c=new WeakMap;function f(_){const S=_.target;S.index!==null&&t.remove(S.index);for(const E in S.attributes)t.remove(S.attributes[E]);S.removeEventListener("dispose",f),delete l[S.id];const y=c.get(S);y&&(t.remove(y),c.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function d(_,S){return l[S.id]===!0||(S.addEventListener("dispose",f),l[S.id]=!0,i.memory.geometries++),S}function m(_){const S=_.attributes;for(const y in S)t.update(S[y],s.ARRAY_BUFFER)}function p(_){const S=[],y=_.index,E=_.attributes.position;let A=0;if(y!==null){const z=y.array;A=y.version;for(let U=0,C=z.length;U<C;U+=3){const G=z[U+0],X=z[U+1],B=z[U+2];S.push(G,X,X,B,B,G)}}else if(E!==void 0){const z=E.array;A=E.version;for(let U=0,C=z.length/3-1;U<C;U+=3){const G=U+0,X=U+1,B=U+2;S.push(G,X,X,B,B,G)}}else return;const M=new(u0(S)?g0:m0)(S,1);M.version=A;const v=c.get(_);v&&t.remove(v),c.set(_,M)}function g(_){const S=c.get(_);if(S){const y=_.index;y!==null&&S.version<y.version&&p(_)}else p(_);return c.get(_)}return{get:d,update:m,getWireframeAttribute:g}}function nA(s,t,i){let r;function l(S){r=S}let c,f;function d(S){c=S.type,f=S.bytesPerElement}function m(S,y){s.drawElements(r,y,c,S*f),i.update(y,r,1)}function p(S,y,E){E!==0&&(s.drawElementsInstanced(r,y,c,S*f,E),i.update(y,r,E))}function g(S,y,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,c,S,0,E);let M=0;for(let v=0;v<E;v++)M+=y[v];i.update(M,r,1)}function _(S,y,E,A){if(E===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let v=0;v<S.length;v++)p(S[v]/f,y[v],A[v]);else{M.multiDrawElementsInstancedWEBGL(r,y,0,c,S,0,A,0,E);let v=0;for(let z=0;z<E;z++)v+=y[z]*A[z];i.update(v,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function iA(s){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,f,d){switch(i.calls++,f){case s.TRIANGLES:i.triangles+=d*(c/3);break;case s.LINES:i.lines+=d*(c/2);break;case s.LINE_STRIP:i.lines+=d*(c-1);break;case s.LINE_LOOP:i.lines+=d*c;break;case s.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function aA(s,t,i){const r=new WeakMap,l=new an;function c(f,d,m){const p=f.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0;let S=r.get(d);if(S===void 0||S.count!==_){let w=function(){j.dispose(),r.delete(d),d.removeEventListener("dispose",w)};var y=w;S!==void 0&&S.texture.dispose();const E=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],z=d.morphAttributes.normal||[],U=d.morphAttributes.color||[];let C=0;E===!0&&(C=1),A===!0&&(C=2),M===!0&&(C=3);let G=d.attributes.position.count*C,X=1;G>t.maxTextureSize&&(X=Math.ceil(G/t.maxTextureSize),G=t.maxTextureSize);const B=new Float32Array(G*X*4*_),j=new f0(B,G,X,_);j.type=ca,j.needsUpdate=!0;const D=C*4;for(let F=0;F<_;F++){const ct=v[F],st=z[F],ft=U[F],pt=G*X*4*F;for(let O=0;O<ct.count;O++){const Z=O*D;E===!0&&(l.fromBufferAttribute(ct,O),B[pt+Z+0]=l.x,B[pt+Z+1]=l.y,B[pt+Z+2]=l.z,B[pt+Z+3]=0),A===!0&&(l.fromBufferAttribute(st,O),B[pt+Z+4]=l.x,B[pt+Z+5]=l.y,B[pt+Z+6]=l.z,B[pt+Z+7]=0),M===!0&&(l.fromBufferAttribute(ft,O),B[pt+Z+8]=l.x,B[pt+Z+9]=l.y,B[pt+Z+10]=l.z,B[pt+Z+11]=ft.itemSize===4?l.w:1)}}S={count:_,texture:j,size:new Jt(G,X)},r.set(d,S),d.addEventListener("dispose",w)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",f.morphTexture,i);else{let E=0;for(let M=0;M<p.length;M++)E+=p[M];const A=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(s,"morphTargetBaseInfluence",A),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",S.size)}return{update:c}}function rA(s,t,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,g=m.geometry,_=t.get(m,g);if(l.get(_)!==p&&(t.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return _}function f(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:f}}const P0=new Xn,Cv=new E0(1,1),z0=new f0,B0=new aM,F0=new x0,wv=[],Dv=[],Uv=new Float32Array(16),Lv=new Float32Array(9),Nv=new Float32Array(4);function Bs(s,t,i){const r=s[0];if(r<=0||r>0)return s;const l=t*i;let c=wv[l];if(c===void 0&&(c=new Float32Array(l),wv[l]=c),t!==0){r.toArray(c,0);for(let f=1,d=0;f!==t;++f)d+=i,s[f].toArray(c,d)}return c}function mn(s,t){if(s.length!==t.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==t[i])return!1;return!0}function gn(s,t){for(let i=0,r=t.length;i<r;i++)s[i]=t[i]}function Jc(s,t){let i=Dv[t];i===void 0&&(i=new Int32Array(t),Dv[t]=i);for(let r=0;r!==t;++r)i[r]=s.allocateTextureUnit();return i}function sA(s,t){const i=this.cache;i[0]!==t&&(s.uniform1f(this.addr,t),i[0]=t)}function oA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(mn(i,t))return;s.uniform2fv(this.addr,t),gn(i,t)}}function lA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(mn(i,t))return;s.uniform3fv(this.addr,t),gn(i,t)}}function cA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(mn(i,t))return;s.uniform4fv(this.addr,t),gn(i,t)}}function uA(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(mn(i,t))return;s.uniformMatrix2fv(this.addr,!1,t),gn(i,t)}else{if(mn(i,r))return;Nv.set(r),s.uniformMatrix2fv(this.addr,!1,Nv),gn(i,r)}}function fA(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(mn(i,t))return;s.uniformMatrix3fv(this.addr,!1,t),gn(i,t)}else{if(mn(i,r))return;Lv.set(r),s.uniformMatrix3fv(this.addr,!1,Lv),gn(i,r)}}function hA(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(mn(i,t))return;s.uniformMatrix4fv(this.addr,!1,t),gn(i,t)}else{if(mn(i,r))return;Uv.set(r),s.uniformMatrix4fv(this.addr,!1,Uv),gn(i,r)}}function dA(s,t){const i=this.cache;i[0]!==t&&(s.uniform1i(this.addr,t),i[0]=t)}function pA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(mn(i,t))return;s.uniform2iv(this.addr,t),gn(i,t)}}function mA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(mn(i,t))return;s.uniform3iv(this.addr,t),gn(i,t)}}function gA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(mn(i,t))return;s.uniform4iv(this.addr,t),gn(i,t)}}function _A(s,t){const i=this.cache;i[0]!==t&&(s.uniform1ui(this.addr,t),i[0]=t)}function vA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(mn(i,t))return;s.uniform2uiv(this.addr,t),gn(i,t)}}function xA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(mn(i,t))return;s.uniform3uiv(this.addr,t),gn(i,t)}}function SA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(mn(i,t))return;s.uniform4uiv(this.addr,t),gn(i,t)}}function yA(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(Cv.compareFunction=c0,c=Cv):c=P0,i.setTexture2D(t||c,l)}function MA(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||B0,l)}function EA(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||F0,l)}function TA(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||z0,l)}function bA(s){switch(s){case 5126:return sA;case 35664:return oA;case 35665:return lA;case 35666:return cA;case 35674:return uA;case 35675:return fA;case 35676:return hA;case 5124:case 35670:return dA;case 35667:case 35671:return pA;case 35668:case 35672:return mA;case 35669:case 35673:return gA;case 5125:return _A;case 36294:return vA;case 36295:return xA;case 36296:return SA;case 35678:case 36198:case 36298:case 36306:case 35682:return yA;case 35679:case 36299:case 36307:return MA;case 35680:case 36300:case 36308:case 36293:return EA;case 36289:case 36303:case 36311:case 36292:return TA}}function AA(s,t){s.uniform1fv(this.addr,t)}function RA(s,t){const i=Bs(t,this.size,2);s.uniform2fv(this.addr,i)}function CA(s,t){const i=Bs(t,this.size,3);s.uniform3fv(this.addr,i)}function wA(s,t){const i=Bs(t,this.size,4);s.uniform4fv(this.addr,i)}function DA(s,t){const i=Bs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function UA(s,t){const i=Bs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function LA(s,t){const i=Bs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function NA(s,t){s.uniform1iv(this.addr,t)}function OA(s,t){s.uniform2iv(this.addr,t)}function PA(s,t){s.uniform3iv(this.addr,t)}function zA(s,t){s.uniform4iv(this.addr,t)}function BA(s,t){s.uniform1uiv(this.addr,t)}function FA(s,t){s.uniform2uiv(this.addr,t)}function IA(s,t){s.uniform3uiv(this.addr,t)}function HA(s,t){s.uniform4uiv(this.addr,t)}function GA(s,t,i){const r=this.cache,l=t.length,c=Jc(i,l);mn(r,c)||(s.uniform1iv(this.addr,c),gn(r,c));for(let f=0;f!==l;++f)i.setTexture2D(t[f]||P0,c[f])}function VA(s,t,i){const r=this.cache,l=t.length,c=Jc(i,l);mn(r,c)||(s.uniform1iv(this.addr,c),gn(r,c));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||B0,c[f])}function XA(s,t,i){const r=this.cache,l=t.length,c=Jc(i,l);mn(r,c)||(s.uniform1iv(this.addr,c),gn(r,c));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||F0,c[f])}function kA(s,t,i){const r=this.cache,l=t.length,c=Jc(i,l);mn(r,c)||(s.uniform1iv(this.addr,c),gn(r,c));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||z0,c[f])}function WA(s){switch(s){case 5126:return AA;case 35664:return RA;case 35665:return CA;case 35666:return wA;case 35674:return DA;case 35675:return UA;case 35676:return LA;case 5124:case 35670:return NA;case 35667:case 35671:return OA;case 35668:case 35672:return PA;case 35669:case 35673:return zA;case 5125:return BA;case 36294:return FA;case 36295:return IA;case 36296:return HA;case 35678:case 36198:case 36298:case 36306:case 35682:return GA;case 35679:case 36299:case 36307:return VA;case 35680:case 36300:case 36308:case 36293:return XA;case 36289:case 36303:case 36311:case 36292:return kA}}class qA{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=bA(i.type)}}class YA{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=WA(i.type)}}class ZA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const d=l[c];d.setValue(t,i[d.id],r)}}}const Yh=/(\w+)(\])?(\[|\.)?/g;function Ov(s,t){s.seq.push(t),s.map[t.id]=t}function jA(s,t,i){const r=s.name,l=r.length;for(Yh.lastIndex=0;;){const c=Yh.exec(r),f=Yh.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&f+2===l){Ov(i,p===void 0?new qA(d,s,t):new YA(d,s,t));break}else{let _=i.map[d];_===void 0&&(_=new ZA(d),Ov(i,_)),i=_}}}class Xc{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=t.getActiveUniform(i,l),f=t.getUniformLocation(i,c.name);jA(c,f,this)}}setValue(t,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let c=0,f=i.length;c!==f;++c){const d=i[c],m=r[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in i&&r.push(f)}return r}}function Pv(s,t,i){const r=s.createShader(t);return s.shaderSource(r,i),s.compileShader(r),r}const KA=37297;let QA=0;function JA(s,t){const i=s.split(`
`),r=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=l;f<c;f++){const d=f+1;r.push(`${d===t?">":" "} ${d}: ${i[f]}`)}return r.join(`
`)}const zv=new ue;function $A(s){Ce._getMatrix(zv,Ce.workingColorSpace,s);const t=`mat3( ${zv.elements.map(i=>i.toFixed(4))} )`;switch(Ce.getTransfer(s)){case Wc:return[t,"LinearTransferOETF"];case Ie:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Bv(s,t,i){const r=s.getShaderParameter(t,s.COMPILE_STATUS),c=(s.getShaderInfoLog(t)||"").trim();if(r&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const d=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+JA(s.getShaderSource(t),d)}else return c}function t1(s,t){const i=$A(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function e1(s,t){let i;switch(t){case Uy:i="Linear";break;case Ly:i="Reinhard";break;case Ny:i="Cineon";break;case Oy:i="ACESFilmic";break;case zy:i="AgX";break;case By:i="Neutral";break;case Py:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Bc=new K;function n1(){Ce.getLuminanceCoefficients(Bc);const s=Bc.x.toFixed(4),t=Bc.y.toFixed(4),i=Bc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function i1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fo).join(`
`)}function a1(s){const t=[];for(const i in s){const r=s[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function r1(s,t){const i={},r=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(t,l),f=c.name;let d=1;c.type===s.FLOAT_MAT2&&(d=2),c.type===s.FLOAT_MAT3&&(d=3),c.type===s.FLOAT_MAT4&&(d=4),i[f]={type:c.type,location:s.getAttribLocation(t,f),locationSize:d}}return i}function Fo(s){return s!==""}function Fv(s,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Iv(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const s1=/^[ \t]*#include +<([\w\d./]+)>/gm;function zd(s){return s.replace(s1,l1)}const o1=new Map;function l1(s,t){let i=fe[t];if(i===void 0){const r=o1.get(t);if(r!==void 0)i=fe[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return zd(i)}const c1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hv(s){return s.replace(c1,u1)}function u1(s,t,i,r){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Gv(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function f1(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Jv?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===uy?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===oa&&(t="SHADOWMAP_TYPE_VSM"),t}function h1(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ds:case Us:t="ENVMAP_TYPE_CUBE";break;case Kc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function d1(s){let t="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===Us&&(t="ENVMAP_MODE_REFRACTION"),t}function p1(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case $v:t="ENVMAP_BLENDING_MULTIPLY";break;case wy:t="ENVMAP_BLENDING_MIX";break;case Dy:t="ENVMAP_BLENDING_ADD";break}return t}function m1(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function g1(s,t,i,r){const l=s.getContext(),c=i.defines;let f=i.vertexShader,d=i.fragmentShader;const m=f1(i),p=h1(i),g=d1(i),_=p1(i),S=m1(i),y=i1(i),E=a1(c),A=l.createProgram();let M,v,z=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Fo).join(`
`),M.length>0&&(M+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Fo).join(`
`),v.length>0&&(v+=`
`)):(M=[Gv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fo).join(`
`),v=[Gv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Wa?"#define TONE_MAPPING":"",i.toneMapping!==Wa?fe.tonemapping_pars_fragment:"",i.toneMapping!==Wa?e1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",fe.colorspace_pars_fragment,t1("linearToOutputTexel",i.outputColorSpace),n1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Fo).join(`
`)),f=zd(f),f=Fv(f,i),f=Iv(f,i),d=zd(d),d=Fv(d,i),d=Iv(d,i),f=Hv(f),d=Hv(d),i.isRawShaderMaterial!==!0&&(z=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,v=["#define varying in",i.glslVersion===Z_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Z_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const U=z+M+f,C=z+v+d,G=Pv(l,l.VERTEX_SHADER,U),X=Pv(l,l.FRAGMENT_SHADER,C);l.attachShader(A,G),l.attachShader(A,X),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function B(F){if(s.debug.checkShaderErrors){const ct=l.getProgramInfoLog(A)||"",st=l.getShaderInfoLog(G)||"",ft=l.getShaderInfoLog(X)||"",pt=ct.trim(),O=st.trim(),Z=ft.trim();let Y=!0,xt=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(Y=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,A,G,X);else{const Et=Bv(l,G,"vertex"),N=Bv(l,X,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+pt+`
`+Et+`
`+N)}else pt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",pt):(O===""||Z==="")&&(xt=!1);xt&&(F.diagnostics={runnable:Y,programLog:pt,vertexShader:{log:O,prefix:M},fragmentShader:{log:Z,prefix:v}})}l.deleteShader(G),l.deleteShader(X),j=new Xc(l,A),D=r1(l,A)}let j;this.getUniforms=function(){return j===void 0&&B(this),j};let D;this.getAttributes=function(){return D===void 0&&B(this),D};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(A,KA)),w},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=QA++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=G,this.fragmentShader=X,this}let _1=0;class v1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new x1(t),i.set(t,r)),r}}class x1{constructor(t){this.id=_1++,this.code=t,this.usedTimes=0}}function S1(s,t,i,r,l,c,f){const d=new d0,m=new v1,p=new Set,g=[],_=l.logarithmicDepthBuffer,S=l.vertexTextures;let y=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(D){return p.add(D),D===0?"uv":`uv${D}`}function M(D,w,F,ct,st){const ft=ct.fog,pt=st.geometry,O=D.isMeshStandardMaterial?ct.environment:null,Z=(D.isMeshStandardMaterial?i:t).get(D.envMap||O),Y=Z&&Z.mapping===Kc?Z.image.height:null,xt=E[D.type];D.precision!==null&&(y=l.getMaxPrecision(D.precision),y!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",y,"instead."));const Et=pt.morphAttributes.position||pt.morphAttributes.normal||pt.morphAttributes.color,N=Et!==void 0?Et.length:0;let nt=0;pt.morphAttributes.position!==void 0&&(nt=1),pt.morphAttributes.normal!==void 0&&(nt=2),pt.morphAttributes.color!==void 0&&(nt=3);let Mt,At,Q,_t;if(xt){const Te=Li[xt];Mt=Te.vertexShader,At=Te.fragmentShader}else Mt=D.vertexShader,At=D.fragmentShader,m.update(D),Q=m.getVertexShaderID(D),_t=m.getFragmentShaderID(D);const gt=s.getRenderTarget(),It=s.state.buffers.depth.getReversed(),Ot=st.isInstancedMesh===!0,ne=st.isBatchedMesh===!0,Xe=!!D.map,de=!!D.matcap,I=!!Z,Ee=!!D.aoMap,$t=!!D.lightMap,ye=!!D.bumpMap,jt=!!D.normalMap,He=!!D.displacementMap,Bt=!!D.emissiveMap,se=!!D.metalnessMap,Qe=!!D.roughnessMap,Ze=D.anisotropy>0,L=D.clearcoat>0,T=D.dispersion>0,tt=D.iridescence>0,ut=D.sheen>0,St=D.transmission>0,ot=Ze&&!!D.anisotropyMap,Yt=L&&!!D.clearcoatMap,Rt=L&&!!D.clearcoatNormalMap,Wt=L&&!!D.clearcoatRoughnessMap,qt=tt&&!!D.iridescenceMap,Tt=tt&&!!D.iridescenceThicknessMap,Ct=ut&&!!D.sheenColorMap,Zt=ut&&!!D.sheenRoughnessMap,Pt=!!D.specularMap,Dt=!!D.specularColorMap,oe=!!D.specularIntensityMap,V=St&&!!D.transmissionMap,bt=St&&!!D.thicknessMap,wt=!!D.gradientMap,zt=!!D.alphaMap,yt=D.alphaTest>0,mt=!!D.alphaHash,Ft=!!D.extensions;let ae=Wa;D.toneMapped&&(gt===null||gt.isXRRenderTarget===!0)&&(ae=s.toneMapping);const Ne={shaderID:xt,shaderType:D.type,shaderName:D.name,vertexShader:Mt,fragmentShader:At,defines:D.defines,customVertexShaderID:Q,customFragmentShaderID:_t,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:y,batching:ne,batchingColor:ne&&st._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&st.instanceColor!==null,instancingMorph:Ot&&st.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:gt===null?s.outputColorSpace:gt.isXRRenderTarget===!0?gt.texture.colorSpace:Ls,alphaToCoverage:!!D.alphaToCoverage,map:Xe,matcap:de,envMap:I,envMapMode:I&&Z.mapping,envMapCubeUVHeight:Y,aoMap:Ee,lightMap:$t,bumpMap:ye,normalMap:jt,displacementMap:S&&He,emissiveMap:Bt,normalMapObjectSpace:jt&&D.normalMapType===Vy,normalMapTangentSpace:jt&&D.normalMapType===Gy,metalnessMap:se,roughnessMap:Qe,anisotropy:Ze,anisotropyMap:ot,clearcoat:L,clearcoatMap:Yt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:Wt,dispersion:T,iridescence:tt,iridescenceMap:qt,iridescenceThicknessMap:Tt,sheen:ut,sheenColorMap:Ct,sheenRoughnessMap:Zt,specularMap:Pt,specularColorMap:Dt,specularIntensityMap:oe,transmission:St,transmissionMap:V,thicknessMap:bt,gradientMap:wt,opaque:D.transparent===!1&&D.blending===As&&D.alphaToCoverage===!1,alphaMap:zt,alphaTest:yt,alphaHash:mt,combine:D.combine,mapUv:Xe&&A(D.map.channel),aoMapUv:Ee&&A(D.aoMap.channel),lightMapUv:$t&&A(D.lightMap.channel),bumpMapUv:ye&&A(D.bumpMap.channel),normalMapUv:jt&&A(D.normalMap.channel),displacementMapUv:He&&A(D.displacementMap.channel),emissiveMapUv:Bt&&A(D.emissiveMap.channel),metalnessMapUv:se&&A(D.metalnessMap.channel),roughnessMapUv:Qe&&A(D.roughnessMap.channel),anisotropyMapUv:ot&&A(D.anisotropyMap.channel),clearcoatMapUv:Yt&&A(D.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&A(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Wt&&A(D.clearcoatRoughnessMap.channel),iridescenceMapUv:qt&&A(D.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&A(D.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&A(D.sheenColorMap.channel),sheenRoughnessMapUv:Zt&&A(D.sheenRoughnessMap.channel),specularMapUv:Pt&&A(D.specularMap.channel),specularColorMapUv:Dt&&A(D.specularColorMap.channel),specularIntensityMapUv:oe&&A(D.specularIntensityMap.channel),transmissionMapUv:V&&A(D.transmissionMap.channel),thicknessMapUv:bt&&A(D.thicknessMap.channel),alphaMapUv:zt&&A(D.alphaMap.channel),vertexTangents:!!pt.attributes.tangent&&(jt||Ze),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!pt.attributes.color&&pt.attributes.color.itemSize===4,pointsUvs:st.isPoints===!0&&!!pt.attributes.uv&&(Xe||zt),fog:!!ft,useFog:D.fog===!0,fogExp2:!!ft&&ft.isFogExp2,flatShading:D.flatShading===!0&&D.wireframe===!1,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:It,skinning:st.isSkinnedMesh===!0,morphTargets:pt.morphAttributes.position!==void 0,morphNormals:pt.morphAttributes.normal!==void 0,morphColors:pt.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:nt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:D.dithering,shadowMapEnabled:s.shadowMap.enabled&&F.length>0,shadowMapType:s.shadowMap.type,toneMapping:ae,decodeVideoTexture:Xe&&D.map.isVideoTexture===!0&&Ce.getTransfer(D.map.colorSpace)===Ie,decodeVideoTextureEmissive:Bt&&D.emissiveMap.isVideoTexture===!0&&Ce.getTransfer(D.emissiveMap.colorSpace)===Ie,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===la,flipSided:D.side===Vn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:Ft&&D.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&D.extensions.multiDraw===!0||ne)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Ne.vertexUv1s=p.has(1),Ne.vertexUv2s=p.has(2),Ne.vertexUv3s=p.has(3),p.clear(),Ne}function v(D){const w=[];if(D.shaderID?w.push(D.shaderID):(w.push(D.customVertexShaderID),w.push(D.customFragmentShaderID)),D.defines!==void 0)for(const F in D.defines)w.push(F),w.push(D.defines[F]);return D.isRawShaderMaterial===!1&&(z(w,D),U(w,D),w.push(s.outputColorSpace)),w.push(D.customProgramCacheKey),w.join()}function z(D,w){D.push(w.precision),D.push(w.outputColorSpace),D.push(w.envMapMode),D.push(w.envMapCubeUVHeight),D.push(w.mapUv),D.push(w.alphaMapUv),D.push(w.lightMapUv),D.push(w.aoMapUv),D.push(w.bumpMapUv),D.push(w.normalMapUv),D.push(w.displacementMapUv),D.push(w.emissiveMapUv),D.push(w.metalnessMapUv),D.push(w.roughnessMapUv),D.push(w.anisotropyMapUv),D.push(w.clearcoatMapUv),D.push(w.clearcoatNormalMapUv),D.push(w.clearcoatRoughnessMapUv),D.push(w.iridescenceMapUv),D.push(w.iridescenceThicknessMapUv),D.push(w.sheenColorMapUv),D.push(w.sheenRoughnessMapUv),D.push(w.specularMapUv),D.push(w.specularColorMapUv),D.push(w.specularIntensityMapUv),D.push(w.transmissionMapUv),D.push(w.thicknessMapUv),D.push(w.combine),D.push(w.fogExp2),D.push(w.sizeAttenuation),D.push(w.morphTargetsCount),D.push(w.morphAttributeCount),D.push(w.numDirLights),D.push(w.numPointLights),D.push(w.numSpotLights),D.push(w.numSpotLightMaps),D.push(w.numHemiLights),D.push(w.numRectAreaLights),D.push(w.numDirLightShadows),D.push(w.numPointLightShadows),D.push(w.numSpotLightShadows),D.push(w.numSpotLightShadowsWithMaps),D.push(w.numLightProbes),D.push(w.shadowMapType),D.push(w.toneMapping),D.push(w.numClippingPlanes),D.push(w.numClipIntersection),D.push(w.depthPacking)}function U(D,w){d.disableAll(),w.supportsVertexTextures&&d.enable(0),w.instancing&&d.enable(1),w.instancingColor&&d.enable(2),w.instancingMorph&&d.enable(3),w.matcap&&d.enable(4),w.envMap&&d.enable(5),w.normalMapObjectSpace&&d.enable(6),w.normalMapTangentSpace&&d.enable(7),w.clearcoat&&d.enable(8),w.iridescence&&d.enable(9),w.alphaTest&&d.enable(10),w.vertexColors&&d.enable(11),w.vertexAlphas&&d.enable(12),w.vertexUv1s&&d.enable(13),w.vertexUv2s&&d.enable(14),w.vertexUv3s&&d.enable(15),w.vertexTangents&&d.enable(16),w.anisotropy&&d.enable(17),w.alphaHash&&d.enable(18),w.batching&&d.enable(19),w.dispersion&&d.enable(20),w.batchingColor&&d.enable(21),w.gradientMap&&d.enable(22),D.push(d.mask),d.disableAll(),w.fog&&d.enable(0),w.useFog&&d.enable(1),w.flatShading&&d.enable(2),w.logarithmicDepthBuffer&&d.enable(3),w.reversedDepthBuffer&&d.enable(4),w.skinning&&d.enable(5),w.morphTargets&&d.enable(6),w.morphNormals&&d.enable(7),w.morphColors&&d.enable(8),w.premultipliedAlpha&&d.enable(9),w.shadowMapEnabled&&d.enable(10),w.doubleSided&&d.enable(11),w.flipSided&&d.enable(12),w.useDepthPacking&&d.enable(13),w.dithering&&d.enable(14),w.transmission&&d.enable(15),w.sheen&&d.enable(16),w.opaque&&d.enable(17),w.pointsUvs&&d.enable(18),w.decodeVideoTexture&&d.enable(19),w.decodeVideoTextureEmissive&&d.enable(20),w.alphaToCoverage&&d.enable(21),D.push(d.mask)}function C(D){const w=E[D.type];let F;if(w){const ct=Li[w];F=_M.clone(ct.uniforms)}else F=D.uniforms;return F}function G(D,w){let F;for(let ct=0,st=g.length;ct<st;ct++){const ft=g[ct];if(ft.cacheKey===w){F=ft,++F.usedTimes;break}}return F===void 0&&(F=new g1(s,w,D,c),g.push(F)),F}function X(D){if(--D.usedTimes===0){const w=g.indexOf(D);g[w]=g[g.length-1],g.pop(),D.destroy()}}function B(D){m.remove(D)}function j(){m.dispose()}return{getParameters:M,getProgramCacheKey:v,getUniforms:C,acquireProgram:G,releaseProgram:X,releaseShaderCache:B,programs:g,dispose:j}}function y1(){let s=new WeakMap;function t(f){return s.has(f)}function i(f){let d=s.get(f);return d===void 0&&(d={},s.set(f,d)),d}function r(f){s.delete(f)}function l(f,d,m){s.get(f)[d]=m}function c(){s=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:c}}function M1(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Vv(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Xv(){const s=[];let t=0;const i=[],r=[],l=[];function c(){t=0,i.length=0,r.length=0,l.length=0}function f(_,S,y,E,A,M){let v=s[t];return v===void 0?(v={id:_.id,object:_,geometry:S,material:y,groupOrder:E,renderOrder:_.renderOrder,z:A,group:M},s[t]=v):(v.id=_.id,v.object=_,v.geometry=S,v.material=y,v.groupOrder=E,v.renderOrder=_.renderOrder,v.z=A,v.group=M),t++,v}function d(_,S,y,E,A,M){const v=f(_,S,y,E,A,M);y.transmission>0?r.push(v):y.transparent===!0?l.push(v):i.push(v)}function m(_,S,y,E,A,M){const v=f(_,S,y,E,A,M);y.transmission>0?r.unshift(v):y.transparent===!0?l.unshift(v):i.unshift(v)}function p(_,S){i.length>1&&i.sort(_||M1),r.length>1&&r.sort(S||Vv),l.length>1&&l.sort(S||Vv)}function g(){for(let _=t,S=s.length;_<S;_++){const y=s[_];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:d,unshift:m,finish:g,sort:p}}function E1(){let s=new WeakMap;function t(r,l){const c=s.get(r);let f;return c===void 0?(f=new Xv,s.set(r,[f])):l>=c.length?(f=new Xv,c.push(f)):f=c[l],f}function i(){s=new WeakMap}return{get:t,dispose:i}}function T1(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new K,color:new Le};break;case"SpotLight":i={position:new K,direction:new K,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new K,color:new Le,distance:0,decay:0};break;case"HemisphereLight":i={direction:new K,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":i={color:new Le,position:new K,halfWidth:new K,halfHeight:new K};break}return s[t.id]=i,i}}}function b1(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=i,i}}}let A1=0;function R1(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function C1(s){const t=new T1,i=b1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new K);const l=new K,c=new rn,f=new rn;function d(p){let g=0,_=0,S=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let y=0,E=0,A=0,M=0,v=0,z=0,U=0,C=0,G=0,X=0,B=0;p.sort(R1);for(let D=0,w=p.length;D<w;D++){const F=p[D],ct=F.color,st=F.intensity,ft=F.distance,pt=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)g+=ct.r*st,_+=ct.g*st,S+=ct.b*st;else if(F.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(F.sh.coefficients[O],st);B++}else if(F.isDirectionalLight){const O=t.get(F);if(O.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const Z=F.shadow,Y=i.get(F);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,r.directionalShadow[y]=Y,r.directionalShadowMap[y]=pt,r.directionalShadowMatrix[y]=F.shadow.matrix,z++}r.directional[y]=O,y++}else if(F.isSpotLight){const O=t.get(F);O.position.setFromMatrixPosition(F.matrixWorld),O.color.copy(ct).multiplyScalar(st),O.distance=ft,O.coneCos=Math.cos(F.angle),O.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),O.decay=F.decay,r.spot[A]=O;const Z=F.shadow;if(F.map&&(r.spotLightMap[G]=F.map,G++,Z.updateMatrices(F),F.castShadow&&X++),r.spotLightMatrix[A]=Z.matrix,F.castShadow){const Y=i.get(F);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,r.spotShadow[A]=Y,r.spotShadowMap[A]=pt,C++}A++}else if(F.isRectAreaLight){const O=t.get(F);O.color.copy(ct).multiplyScalar(st),O.halfWidth.set(F.width*.5,0,0),O.halfHeight.set(0,F.height*.5,0),r.rectArea[M]=O,M++}else if(F.isPointLight){const O=t.get(F);if(O.color.copy(F.color).multiplyScalar(F.intensity),O.distance=F.distance,O.decay=F.decay,F.castShadow){const Z=F.shadow,Y=i.get(F);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,Y.shadowCameraNear=Z.camera.near,Y.shadowCameraFar=Z.camera.far,r.pointShadow[E]=Y,r.pointShadowMap[E]=pt,r.pointShadowMatrix[E]=F.shadow.matrix,U++}r.point[E]=O,E++}else if(F.isHemisphereLight){const O=t.get(F);O.skyColor.copy(F.color).multiplyScalar(st),O.groundColor.copy(F.groundColor).multiplyScalar(st),r.hemi[v]=O,v++}}M>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Lt.LTC_FLOAT_1,r.rectAreaLTC2=Lt.LTC_FLOAT_2):(r.rectAreaLTC1=Lt.LTC_HALF_1,r.rectAreaLTC2=Lt.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=_,r.ambient[2]=S;const j=r.hash;(j.directionalLength!==y||j.pointLength!==E||j.spotLength!==A||j.rectAreaLength!==M||j.hemiLength!==v||j.numDirectionalShadows!==z||j.numPointShadows!==U||j.numSpotShadows!==C||j.numSpotMaps!==G||j.numLightProbes!==B)&&(r.directional.length=y,r.spot.length=A,r.rectArea.length=M,r.point.length=E,r.hemi.length=v,r.directionalShadow.length=z,r.directionalShadowMap.length=z,r.pointShadow.length=U,r.pointShadowMap.length=U,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=z,r.pointShadowMatrix.length=U,r.spotLightMatrix.length=C+G-X,r.spotLightMap.length=G,r.numSpotLightShadowsWithMaps=X,r.numLightProbes=B,j.directionalLength=y,j.pointLength=E,j.spotLength=A,j.rectAreaLength=M,j.hemiLength=v,j.numDirectionalShadows=z,j.numPointShadows=U,j.numSpotShadows=C,j.numSpotMaps=G,j.numLightProbes=B,r.version=A1++)}function m(p,g){let _=0,S=0,y=0,E=0,A=0;const M=g.matrixWorldInverse;for(let v=0,z=p.length;v<z;v++){const U=p[v];if(U.isDirectionalLight){const C=r.directional[_];C.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(M),_++}else if(U.isSpotLight){const C=r.spot[y];C.position.setFromMatrixPosition(U.matrixWorld),C.position.applyMatrix4(M),C.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(M),y++}else if(U.isRectAreaLight){const C=r.rectArea[E];C.position.setFromMatrixPosition(U.matrixWorld),C.position.applyMatrix4(M),f.identity(),c.copy(U.matrixWorld),c.premultiply(M),f.extractRotation(c),C.halfWidth.set(U.width*.5,0,0),C.halfHeight.set(0,U.height*.5,0),C.halfWidth.applyMatrix4(f),C.halfHeight.applyMatrix4(f),E++}else if(U.isPointLight){const C=r.point[S];C.position.setFromMatrixPosition(U.matrixWorld),C.position.applyMatrix4(M),S++}else if(U.isHemisphereLight){const C=r.hemi[A];C.direction.setFromMatrixPosition(U.matrixWorld),C.direction.transformDirection(M),A++}}}return{setup:d,setupView:m,state:r}}function kv(s){const t=new C1(s),i=[],r=[];function l(g){p.camera=g,i.length=0,r.length=0}function c(g){i.push(g)}function f(g){r.push(g)}function d(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:f}}function w1(s){let t=new WeakMap;function i(l,c=0){const f=t.get(l);let d;return f===void 0?(d=new kv(s),t.set(l,[d])):c>=f.length?(d=new kv(s),f.push(d)):d=f[c],d}function r(){t=new WeakMap}return{get:i,dispose:r}}const D1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,U1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function L1(s,t,i){let r=new S0;const l=new Jt,c=new Jt,f=new an,d=new rE({depthPacking:Hy}),m=new sE,p={},g=i.maxTextureSize,_={[Ya]:Vn,[Vn]:Ya,[la]:la},S=new Za({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Jt},radius:{value:4}},vertexShader:D1,fragmentShader:U1}),y=S.clone();y.defines.HORIZONTAL_PASS=1;const E=new bi;E.setAttribute("position",new Pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Ke(E,S),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jv;let v=this.type;this.render=function(X,B,j){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||X.length===0)return;const D=s.getRenderTarget(),w=s.getActiveCubeFace(),F=s.getActiveMipmapLevel(),ct=s.state;ct.setBlending(ka),ct.buffers.depth.getReversed()?ct.buffers.color.setClear(0,0,0,0):ct.buffers.color.setClear(1,1,1,1),ct.buffers.depth.setTest(!0),ct.setScissorTest(!1);const st=v!==oa&&this.type===oa,ft=v===oa&&this.type!==oa;for(let pt=0,O=X.length;pt<O;pt++){const Z=X[pt],Y=Z.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const xt=Y.getFrameExtents();if(l.multiply(xt),c.copy(Y.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/xt.x),l.x=c.x*xt.x,Y.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/xt.y),l.y=c.y*xt.y,Y.mapSize.y=c.y)),Y.map===null||st===!0||ft===!0){const N=this.type!==oa?{minFilter:Ti,magFilter:Ti}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Rr(l.x,l.y,N),Y.map.texture.name=Z.name+".shadowMap",Y.camera.updateProjectionMatrix()}s.setRenderTarget(Y.map),s.clear();const Et=Y.getViewportCount();for(let N=0;N<Et;N++){const nt=Y.getViewport(N);f.set(c.x*nt.x,c.y*nt.y,c.x*nt.z,c.y*nt.w),ct.viewport(f),Y.updateMatrices(Z,N),r=Y.getFrustum(),C(B,j,Y.camera,Z,this.type)}Y.isPointLightShadow!==!0&&this.type===oa&&z(Y,j),Y.needsUpdate=!1}v=this.type,M.needsUpdate=!1,s.setRenderTarget(D,w,F)};function z(X,B){const j=t.update(A);S.defines.VSM_SAMPLES!==X.blurSamples&&(S.defines.VSM_SAMPLES=X.blurSamples,y.defines.VSM_SAMPLES=X.blurSamples,S.needsUpdate=!0,y.needsUpdate=!0),X.mapPass===null&&(X.mapPass=new Rr(l.x,l.y)),S.uniforms.shadow_pass.value=X.map.texture,S.uniforms.resolution.value=X.mapSize,S.uniforms.radius.value=X.radius,s.setRenderTarget(X.mapPass),s.clear(),s.renderBufferDirect(B,null,j,S,A,null),y.uniforms.shadow_pass.value=X.mapPass.texture,y.uniforms.resolution.value=X.mapSize,y.uniforms.radius.value=X.radius,s.setRenderTarget(X.map),s.clear(),s.renderBufferDirect(B,null,j,y,A,null)}function U(X,B,j,D){let w=null;const F=j.isPointLight===!0?X.customDistanceMaterial:X.customDepthMaterial;if(F!==void 0)w=F;else if(w=j.isPointLight===!0?m:d,s.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const ct=w.uuid,st=B.uuid;let ft=p[ct];ft===void 0&&(ft={},p[ct]=ft);let pt=ft[st];pt===void 0&&(pt=w.clone(),ft[st]=pt,B.addEventListener("dispose",G)),w=pt}if(w.visible=B.visible,w.wireframe=B.wireframe,D===oa?w.side=B.shadowSide!==null?B.shadowSide:B.side:w.side=B.shadowSide!==null?B.shadowSide:_[B.side],w.alphaMap=B.alphaMap,w.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,w.map=B.map,w.clipShadows=B.clipShadows,w.clippingPlanes=B.clippingPlanes,w.clipIntersection=B.clipIntersection,w.displacementMap=B.displacementMap,w.displacementScale=B.displacementScale,w.displacementBias=B.displacementBias,w.wireframeLinewidth=B.wireframeLinewidth,w.linewidth=B.linewidth,j.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const ct=s.properties.get(w);ct.light=j}return w}function C(X,B,j,D,w){if(X.visible===!1)return;if(X.layers.test(B.layers)&&(X.isMesh||X.isLine||X.isPoints)&&(X.castShadow||X.receiveShadow&&w===oa)&&(!X.frustumCulled||r.intersectsObject(X))){X.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,X.matrixWorld);const st=t.update(X),ft=X.material;if(Array.isArray(ft)){const pt=st.groups;for(let O=0,Z=pt.length;O<Z;O++){const Y=pt[O],xt=ft[Y.materialIndex];if(xt&&xt.visible){const Et=U(X,xt,D,w);X.onBeforeShadow(s,X,B,j,st,Et,Y),s.renderBufferDirect(j,null,st,Et,X,Y),X.onAfterShadow(s,X,B,j,st,Et,Y)}}}else if(ft.visible){const pt=U(X,ft,D,w);X.onBeforeShadow(s,X,B,j,st,pt,null),s.renderBufferDirect(j,null,st,pt,X,null),X.onAfterShadow(s,X,B,j,st,pt,null)}}const ct=X.children;for(let st=0,ft=ct.length;st<ft;st++)C(ct[st],B,j,D,w)}function G(X){X.target.removeEventListener("dispose",G);for(const j in p){const D=p[j],w=X.target.uuid;w in D&&(D[w].dispose(),delete D[w])}}}const N1={[Kh]:Qh,[Jh]:ed,[$h]:nd,[ws]:td,[Qh]:Kh,[ed]:Jh,[nd]:$h,[td]:ws};function O1(s,t){function i(){let V=!1;const bt=new an;let wt=null;const zt=new an(0,0,0,0);return{setMask:function(yt){wt!==yt&&!V&&(s.colorMask(yt,yt,yt,yt),wt=yt)},setLocked:function(yt){V=yt},setClear:function(yt,mt,Ft,ae,Ne){Ne===!0&&(yt*=ae,mt*=ae,Ft*=ae),bt.set(yt,mt,Ft,ae),zt.equals(bt)===!1&&(s.clearColor(yt,mt,Ft,ae),zt.copy(bt))},reset:function(){V=!1,wt=null,zt.set(-1,0,0,0)}}}function r(){let V=!1,bt=!1,wt=null,zt=null,yt=null;return{setReversed:function(mt){if(bt!==mt){const Ft=t.get("EXT_clip_control");mt?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT),bt=mt;const ae=yt;yt=null,this.setClear(ae)}},getReversed:function(){return bt},setTest:function(mt){mt?gt(s.DEPTH_TEST):It(s.DEPTH_TEST)},setMask:function(mt){wt!==mt&&!V&&(s.depthMask(mt),wt=mt)},setFunc:function(mt){if(bt&&(mt=N1[mt]),zt!==mt){switch(mt){case Kh:s.depthFunc(s.NEVER);break;case Qh:s.depthFunc(s.ALWAYS);break;case Jh:s.depthFunc(s.LESS);break;case ws:s.depthFunc(s.LEQUAL);break;case $h:s.depthFunc(s.EQUAL);break;case td:s.depthFunc(s.GEQUAL);break;case ed:s.depthFunc(s.GREATER);break;case nd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}zt=mt}},setLocked:function(mt){V=mt},setClear:function(mt){yt!==mt&&(bt&&(mt=1-mt),s.clearDepth(mt),yt=mt)},reset:function(){V=!1,wt=null,zt=null,yt=null,bt=!1}}}function l(){let V=!1,bt=null,wt=null,zt=null,yt=null,mt=null,Ft=null,ae=null,Ne=null;return{setTest:function(Te){V||(Te?gt(s.STENCIL_TEST):It(s.STENCIL_TEST))},setMask:function(Te){bt!==Te&&!V&&(s.stencilMask(Te),bt=Te)},setFunc:function(Te,Un,ii){(wt!==Te||zt!==Un||yt!==ii)&&(s.stencilFunc(Te,Un,ii),wt=Te,zt=Un,yt=ii)},setOp:function(Te,Un,ii){(mt!==Te||Ft!==Un||ae!==ii)&&(s.stencilOp(Te,Un,ii),mt=Te,Ft=Un,ae=ii)},setLocked:function(Te){V=Te},setClear:function(Te){Ne!==Te&&(s.clearStencil(Te),Ne=Te)},reset:function(){V=!1,bt=null,wt=null,zt=null,yt=null,mt=null,Ft=null,ae=null,Ne=null}}}const c=new i,f=new r,d=new l,m=new WeakMap,p=new WeakMap;let g={},_={},S=new WeakMap,y=[],E=null,A=!1,M=null,v=null,z=null,U=null,C=null,G=null,X=null,B=new Le(0,0,0),j=0,D=!1,w=null,F=null,ct=null,st=null,ft=null;const pt=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,Z=0;const Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(Y)[1]),O=Z>=1):Y.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),O=Z>=2);let xt=null,Et={};const N=s.getParameter(s.SCISSOR_BOX),nt=s.getParameter(s.VIEWPORT),Mt=new an().fromArray(N),At=new an().fromArray(nt);function Q(V,bt,wt,zt){const yt=new Uint8Array(4),mt=s.createTexture();s.bindTexture(V,mt),s.texParameteri(V,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(V,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ft=0;Ft<wt;Ft++)V===s.TEXTURE_3D||V===s.TEXTURE_2D_ARRAY?s.texImage3D(bt,0,s.RGBA,1,1,zt,0,s.RGBA,s.UNSIGNED_BYTE,yt):s.texImage2D(bt+Ft,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,yt);return mt}const _t={};_t[s.TEXTURE_2D]=Q(s.TEXTURE_2D,s.TEXTURE_2D,1),_t[s.TEXTURE_CUBE_MAP]=Q(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),_t[s.TEXTURE_2D_ARRAY]=Q(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),_t[s.TEXTURE_3D]=Q(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),d.setClear(0),gt(s.DEPTH_TEST),f.setFunc(ws),ye(!1),jt(V_),gt(s.CULL_FACE),Ee(ka);function gt(V){g[V]!==!0&&(s.enable(V),g[V]=!0)}function It(V){g[V]!==!1&&(s.disable(V),g[V]=!1)}function Ot(V,bt){return _[V]!==bt?(s.bindFramebuffer(V,bt),_[V]=bt,V===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=bt),V===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=bt),!0):!1}function ne(V,bt){let wt=y,zt=!1;if(V){wt=S.get(bt),wt===void 0&&(wt=[],S.set(bt,wt));const yt=V.textures;if(wt.length!==yt.length||wt[0]!==s.COLOR_ATTACHMENT0){for(let mt=0,Ft=yt.length;mt<Ft;mt++)wt[mt]=s.COLOR_ATTACHMENT0+mt;wt.length=yt.length,zt=!0}}else wt[0]!==s.BACK&&(wt[0]=s.BACK,zt=!0);zt&&s.drawBuffers(wt)}function Xe(V){return E!==V?(s.useProgram(V),E=V,!0):!1}const de={[Mr]:s.FUNC_ADD,[hy]:s.FUNC_SUBTRACT,[dy]:s.FUNC_REVERSE_SUBTRACT};de[py]=s.MIN,de[my]=s.MAX;const I={[gy]:s.ZERO,[_y]:s.ONE,[vy]:s.SRC_COLOR,[Zh]:s.SRC_ALPHA,[Ty]:s.SRC_ALPHA_SATURATE,[My]:s.DST_COLOR,[Sy]:s.DST_ALPHA,[xy]:s.ONE_MINUS_SRC_COLOR,[jh]:s.ONE_MINUS_SRC_ALPHA,[Ey]:s.ONE_MINUS_DST_COLOR,[yy]:s.ONE_MINUS_DST_ALPHA,[by]:s.CONSTANT_COLOR,[Ay]:s.ONE_MINUS_CONSTANT_COLOR,[Ry]:s.CONSTANT_ALPHA,[Cy]:s.ONE_MINUS_CONSTANT_ALPHA};function Ee(V,bt,wt,zt,yt,mt,Ft,ae,Ne,Te){if(V===ka){A===!0&&(It(s.BLEND),A=!1);return}if(A===!1&&(gt(s.BLEND),A=!0),V!==fy){if(V!==M||Te!==D){if((v!==Mr||C!==Mr)&&(s.blendEquation(s.FUNC_ADD),v=Mr,C=Mr),Te)switch(V){case As:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case X_:s.blendFunc(s.ONE,s.ONE);break;case k_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case W_:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case As:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case X_:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case k_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case W_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}z=null,U=null,G=null,X=null,B.set(0,0,0),j=0,M=V,D=Te}return}yt=yt||bt,mt=mt||wt,Ft=Ft||zt,(bt!==v||yt!==C)&&(s.blendEquationSeparate(de[bt],de[yt]),v=bt,C=yt),(wt!==z||zt!==U||mt!==G||Ft!==X)&&(s.blendFuncSeparate(I[wt],I[zt],I[mt],I[Ft]),z=wt,U=zt,G=mt,X=Ft),(ae.equals(B)===!1||Ne!==j)&&(s.blendColor(ae.r,ae.g,ae.b,Ne),B.copy(ae),j=Ne),M=V,D=!1}function $t(V,bt){V.side===la?It(s.CULL_FACE):gt(s.CULL_FACE);let wt=V.side===Vn;bt&&(wt=!wt),ye(wt),V.blending===As&&V.transparent===!1?Ee(ka):Ee(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),f.setFunc(V.depthFunc),f.setTest(V.depthTest),f.setMask(V.depthWrite),c.setMask(V.colorWrite);const zt=V.stencilWrite;d.setTest(zt),zt&&(d.setMask(V.stencilWriteMask),d.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),d.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Bt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?gt(s.SAMPLE_ALPHA_TO_COVERAGE):It(s.SAMPLE_ALPHA_TO_COVERAGE)}function ye(V){w!==V&&(V?s.frontFace(s.CW):s.frontFace(s.CCW),w=V)}function jt(V){V!==ly?(gt(s.CULL_FACE),V!==F&&(V===V_?s.cullFace(s.BACK):V===cy?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):It(s.CULL_FACE),F=V}function He(V){V!==ct&&(O&&s.lineWidth(V),ct=V)}function Bt(V,bt,wt){V?(gt(s.POLYGON_OFFSET_FILL),(st!==bt||ft!==wt)&&(s.polygonOffset(bt,wt),st=bt,ft=wt)):It(s.POLYGON_OFFSET_FILL)}function se(V){V?gt(s.SCISSOR_TEST):It(s.SCISSOR_TEST)}function Qe(V){V===void 0&&(V=s.TEXTURE0+pt-1),xt!==V&&(s.activeTexture(V),xt=V)}function Ze(V,bt,wt){wt===void 0&&(xt===null?wt=s.TEXTURE0+pt-1:wt=xt);let zt=Et[wt];zt===void 0&&(zt={type:void 0,texture:void 0},Et[wt]=zt),(zt.type!==V||zt.texture!==bt)&&(xt!==wt&&(s.activeTexture(wt),xt=wt),s.bindTexture(V,bt||_t[V]),zt.type=V,zt.texture=bt)}function L(){const V=Et[xt];V!==void 0&&V.type!==void 0&&(s.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function T(){try{s.compressedTexImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function tt(){try{s.compressedTexImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ut(){try{s.texSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function St(){try{s.texSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ot(){try{s.compressedTexSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Yt(){try{s.compressedTexSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Rt(){try{s.texStorage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Wt(){try{s.texStorage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function qt(){try{s.texImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Tt(){try{s.texImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ct(V){Mt.equals(V)===!1&&(s.scissor(V.x,V.y,V.z,V.w),Mt.copy(V))}function Zt(V){At.equals(V)===!1&&(s.viewport(V.x,V.y,V.z,V.w),At.copy(V))}function Pt(V,bt){let wt=p.get(bt);wt===void 0&&(wt=new WeakMap,p.set(bt,wt));let zt=wt.get(V);zt===void 0&&(zt=s.getUniformBlockIndex(bt,V.name),wt.set(V,zt))}function Dt(V,bt){const zt=p.get(bt).get(V);m.get(bt)!==zt&&(s.uniformBlockBinding(bt,zt,V.__bindingPointIndex),m.set(bt,zt))}function oe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},xt=null,Et={},_={},S=new WeakMap,y=[],E=null,A=!1,M=null,v=null,z=null,U=null,C=null,G=null,X=null,B=new Le(0,0,0),j=0,D=!1,w=null,F=null,ct=null,st=null,ft=null,Mt.set(0,0,s.canvas.width,s.canvas.height),At.set(0,0,s.canvas.width,s.canvas.height),c.reset(),f.reset(),d.reset()}return{buffers:{color:c,depth:f,stencil:d},enable:gt,disable:It,bindFramebuffer:Ot,drawBuffers:ne,useProgram:Xe,setBlending:Ee,setMaterial:$t,setFlipSided:ye,setCullFace:jt,setLineWidth:He,setPolygonOffset:Bt,setScissorTest:se,activeTexture:Qe,bindTexture:Ze,unbindTexture:L,compressedTexImage2D:T,compressedTexImage3D:tt,texImage2D:qt,texImage3D:Tt,updateUBOMapping:Pt,uniformBlockBinding:Dt,texStorage2D:Rt,texStorage3D:Wt,texSubImage2D:ut,texSubImage3D:St,compressedTexSubImage2D:ot,compressedTexSubImage3D:Yt,scissor:Ct,viewport:Zt,reset:oe}}function P1(s,t,i,r,l,c,f){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Jt,g=new WeakMap;let _;const S=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(L,T){return y?new OffscreenCanvas(L,T):Yc("canvas")}function A(L,T,tt){let ut=1;const St=Ze(L);if((St.width>tt||St.height>tt)&&(ut=tt/Math.max(St.width,St.height)),ut<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ot=Math.floor(ut*St.width),Yt=Math.floor(ut*St.height);_===void 0&&(_=E(ot,Yt));const Rt=T?E(ot,Yt):_;return Rt.width=ot,Rt.height=Yt,Rt.getContext("2d").drawImage(L,0,0,ot,Yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+St.width+"x"+St.height+") to ("+ot+"x"+Yt+")."),Rt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+St.width+"x"+St.height+")."),L;return L}function M(L){return L.generateMipmaps}function v(L){s.generateMipmap(L)}function z(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function U(L,T,tt,ut,St=!1){if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ot=T;if(T===s.RED&&(tt===s.FLOAT&&(ot=s.R32F),tt===s.HALF_FLOAT&&(ot=s.R16F),tt===s.UNSIGNED_BYTE&&(ot=s.R8)),T===s.RED_INTEGER&&(tt===s.UNSIGNED_BYTE&&(ot=s.R8UI),tt===s.UNSIGNED_SHORT&&(ot=s.R16UI),tt===s.UNSIGNED_INT&&(ot=s.R32UI),tt===s.BYTE&&(ot=s.R8I),tt===s.SHORT&&(ot=s.R16I),tt===s.INT&&(ot=s.R32I)),T===s.RG&&(tt===s.FLOAT&&(ot=s.RG32F),tt===s.HALF_FLOAT&&(ot=s.RG16F),tt===s.UNSIGNED_BYTE&&(ot=s.RG8)),T===s.RG_INTEGER&&(tt===s.UNSIGNED_BYTE&&(ot=s.RG8UI),tt===s.UNSIGNED_SHORT&&(ot=s.RG16UI),tt===s.UNSIGNED_INT&&(ot=s.RG32UI),tt===s.BYTE&&(ot=s.RG8I),tt===s.SHORT&&(ot=s.RG16I),tt===s.INT&&(ot=s.RG32I)),T===s.RGB_INTEGER&&(tt===s.UNSIGNED_BYTE&&(ot=s.RGB8UI),tt===s.UNSIGNED_SHORT&&(ot=s.RGB16UI),tt===s.UNSIGNED_INT&&(ot=s.RGB32UI),tt===s.BYTE&&(ot=s.RGB8I),tt===s.SHORT&&(ot=s.RGB16I),tt===s.INT&&(ot=s.RGB32I)),T===s.RGBA_INTEGER&&(tt===s.UNSIGNED_BYTE&&(ot=s.RGBA8UI),tt===s.UNSIGNED_SHORT&&(ot=s.RGBA16UI),tt===s.UNSIGNED_INT&&(ot=s.RGBA32UI),tt===s.BYTE&&(ot=s.RGBA8I),tt===s.SHORT&&(ot=s.RGBA16I),tt===s.INT&&(ot=s.RGBA32I)),T===s.RGB&&tt===s.UNSIGNED_INT_5_9_9_9_REV&&(ot=s.RGB9_E5),T===s.RGBA){const Yt=St?Wc:Ce.getTransfer(ut);tt===s.FLOAT&&(ot=s.RGBA32F),tt===s.HALF_FLOAT&&(ot=s.RGBA16F),tt===s.UNSIGNED_BYTE&&(ot=Yt===Ie?s.SRGB8_ALPHA8:s.RGBA8),tt===s.UNSIGNED_SHORT_4_4_4_4&&(ot=s.RGBA4),tt===s.UNSIGNED_SHORT_5_5_5_1&&(ot=s.RGB5_A1)}return(ot===s.R16F||ot===s.R32F||ot===s.RG16F||ot===s.RG32F||ot===s.RGBA16F||ot===s.RGBA32F)&&t.get("EXT_color_buffer_float"),ot}function C(L,T){let tt;return L?T===null||T===Ar||T===Xo?tt=s.DEPTH24_STENCIL8:T===ca?tt=s.DEPTH32F_STENCIL8:T===Vo&&(tt=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ar||T===Xo?tt=s.DEPTH_COMPONENT24:T===ca?tt=s.DEPTH_COMPONENT32F:T===Vo&&(tt=s.DEPTH_COMPONENT16),tt}function G(L,T){return M(L)===!0||L.isFramebufferTexture&&L.minFilter!==Ti&&L.minFilter!==Ni?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function X(L){const T=L.target;T.removeEventListener("dispose",X),j(T),T.isVideoTexture&&g.delete(T)}function B(L){const T=L.target;T.removeEventListener("dispose",B),w(T)}function j(L){const T=r.get(L);if(T.__webglInit===void 0)return;const tt=L.source,ut=S.get(tt);if(ut){const St=ut[T.__cacheKey];St.usedTimes--,St.usedTimes===0&&D(L),Object.keys(ut).length===0&&S.delete(tt)}r.remove(L)}function D(L){const T=r.get(L);s.deleteTexture(T.__webglTexture);const tt=L.source,ut=S.get(tt);delete ut[T.__cacheKey],f.memory.textures--}function w(L){const T=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let ut=0;ut<6;ut++){if(Array.isArray(T.__webglFramebuffer[ut]))for(let St=0;St<T.__webglFramebuffer[ut].length;St++)s.deleteFramebuffer(T.__webglFramebuffer[ut][St]);else s.deleteFramebuffer(T.__webglFramebuffer[ut]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[ut])}else{if(Array.isArray(T.__webglFramebuffer))for(let ut=0;ut<T.__webglFramebuffer.length;ut++)s.deleteFramebuffer(T.__webglFramebuffer[ut]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ut=0;ut<T.__webglColorRenderbuffer.length;ut++)T.__webglColorRenderbuffer[ut]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[ut]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const tt=L.textures;for(let ut=0,St=tt.length;ut<St;ut++){const ot=r.get(tt[ut]);ot.__webglTexture&&(s.deleteTexture(ot.__webglTexture),f.memory.textures--),r.remove(tt[ut])}r.remove(L)}let F=0;function ct(){F=0}function st(){const L=F;return L>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),F+=1,L}function ft(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function pt(L,T){const tt=r.get(L);if(L.isVideoTexture&&se(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&tt.__version!==L.version){const ut=L.image;if(ut===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ut.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{_t(tt,L,T);return}}else L.isExternalTexture&&(tt.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,tt.__webglTexture,s.TEXTURE0+T)}function O(L,T){const tt=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&tt.__version!==L.version){_t(tt,L,T);return}i.bindTexture(s.TEXTURE_2D_ARRAY,tt.__webglTexture,s.TEXTURE0+T)}function Z(L,T){const tt=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&tt.__version!==L.version){_t(tt,L,T);return}i.bindTexture(s.TEXTURE_3D,tt.__webglTexture,s.TEXTURE0+T)}function Y(L,T){const tt=r.get(L);if(L.version>0&&tt.__version!==L.version){gt(tt,L,T);return}i.bindTexture(s.TEXTURE_CUBE_MAP,tt.__webglTexture,s.TEXTURE0+T)}const xt={[rd]:s.REPEAT,[Tr]:s.CLAMP_TO_EDGE,[sd]:s.MIRRORED_REPEAT},Et={[Ti]:s.NEAREST,[Fy]:s.NEAREST_MIPMAP_NEAREST,[hc]:s.NEAREST_MIPMAP_LINEAR,[Ni]:s.LINEAR,[dh]:s.LINEAR_MIPMAP_NEAREST,[br]:s.LINEAR_MIPMAP_LINEAR},N={[Xy]:s.NEVER,[jy]:s.ALWAYS,[ky]:s.LESS,[c0]:s.LEQUAL,[Wy]:s.EQUAL,[Zy]:s.GEQUAL,[qy]:s.GREATER,[Yy]:s.NOTEQUAL};function nt(L,T){if(T.type===ca&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Ni||T.magFilter===dh||T.magFilter===hc||T.magFilter===br||T.minFilter===Ni||T.minFilter===dh||T.minFilter===hc||T.minFilter===br)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,xt[T.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,xt[T.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,xt[T.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,Et[T.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,Et[T.minFilter]),T.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,N[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ti||T.minFilter!==hc&&T.minFilter!==br||T.type===ca&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const tt=t.get("EXT_texture_filter_anisotropic");s.texParameterf(L,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function Mt(L,T){let tt=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",X));const ut=T.source;let St=S.get(ut);St===void 0&&(St={},S.set(ut,St));const ot=ft(T);if(ot!==L.__cacheKey){St[ot]===void 0&&(St[ot]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,tt=!0),St[ot].usedTimes++;const Yt=St[L.__cacheKey];Yt!==void 0&&(St[L.__cacheKey].usedTimes--,Yt.usedTimes===0&&D(T)),L.__cacheKey=ot,L.__webglTexture=St[ot].texture}return tt}function At(L,T,tt){return Math.floor(Math.floor(L/tt)/T)}function Q(L,T,tt,ut){const ot=L.updateRanges;if(ot.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,T.width,T.height,tt,ut,T.data);else{ot.sort((Tt,Ct)=>Tt.start-Ct.start);let Yt=0;for(let Tt=1;Tt<ot.length;Tt++){const Ct=ot[Yt],Zt=ot[Tt],Pt=Ct.start+Ct.count,Dt=At(Zt.start,T.width,4),oe=At(Ct.start,T.width,4);Zt.start<=Pt+1&&Dt===oe&&At(Zt.start+Zt.count-1,T.width,4)===Dt?Ct.count=Math.max(Ct.count,Zt.start+Zt.count-Ct.start):(++Yt,ot[Yt]=Zt)}ot.length=Yt+1;const Rt=s.getParameter(s.UNPACK_ROW_LENGTH),Wt=s.getParameter(s.UNPACK_SKIP_PIXELS),qt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,T.width);for(let Tt=0,Ct=ot.length;Tt<Ct;Tt++){const Zt=ot[Tt],Pt=Math.floor(Zt.start/4),Dt=Math.ceil(Zt.count/4),oe=Pt%T.width,V=Math.floor(Pt/T.width),bt=Dt,wt=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,oe),s.pixelStorei(s.UNPACK_SKIP_ROWS,V),i.texSubImage2D(s.TEXTURE_2D,0,oe,V,bt,wt,tt,ut,T.data)}L.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Rt),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Wt),s.pixelStorei(s.UNPACK_SKIP_ROWS,qt)}}function _t(L,T,tt){let ut=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ut=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ut=s.TEXTURE_3D);const St=Mt(L,T),ot=T.source;i.bindTexture(ut,L.__webglTexture,s.TEXTURE0+tt);const Yt=r.get(ot);if(ot.version!==Yt.__version||St===!0){i.activeTexture(s.TEXTURE0+tt);const Rt=Ce.getPrimaries(Ce.workingColorSpace),Wt=T.colorSpace===Xa?null:Ce.getPrimaries(T.colorSpace),qt=T.colorSpace===Xa||Rt===Wt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let Tt=A(T.image,!1,l.maxTextureSize);Tt=Qe(T,Tt);const Ct=c.convert(T.format,T.colorSpace),Zt=c.convert(T.type);let Pt=U(T.internalFormat,Ct,Zt,T.colorSpace,T.isVideoTexture);nt(ut,T);let Dt;const oe=T.mipmaps,V=T.isVideoTexture!==!0,bt=Yt.__version===void 0||St===!0,wt=ot.dataReady,zt=G(T,Tt);if(T.isDepthTexture)Pt=C(T.format===Wo,T.type),bt&&(V?i.texStorage2D(s.TEXTURE_2D,1,Pt,Tt.width,Tt.height):i.texImage2D(s.TEXTURE_2D,0,Pt,Tt.width,Tt.height,0,Ct,Zt,null));else if(T.isDataTexture)if(oe.length>0){V&&bt&&i.texStorage2D(s.TEXTURE_2D,zt,Pt,oe[0].width,oe[0].height);for(let yt=0,mt=oe.length;yt<mt;yt++)Dt=oe[yt],V?wt&&i.texSubImage2D(s.TEXTURE_2D,yt,0,0,Dt.width,Dt.height,Ct,Zt,Dt.data):i.texImage2D(s.TEXTURE_2D,yt,Pt,Dt.width,Dt.height,0,Ct,Zt,Dt.data);T.generateMipmaps=!1}else V?(bt&&i.texStorage2D(s.TEXTURE_2D,zt,Pt,Tt.width,Tt.height),wt&&Q(T,Tt,Ct,Zt)):i.texImage2D(s.TEXTURE_2D,0,Pt,Tt.width,Tt.height,0,Ct,Zt,Tt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){V&&bt&&i.texStorage3D(s.TEXTURE_2D_ARRAY,zt,Pt,oe[0].width,oe[0].height,Tt.depth);for(let yt=0,mt=oe.length;yt<mt;yt++)if(Dt=oe[yt],T.format!==Ei)if(Ct!==null)if(V){if(wt)if(T.layerUpdates.size>0){const Ft=Sv(Dt.width,Dt.height,T.format,T.type);for(const ae of T.layerUpdates){const Ne=Dt.data.subarray(ae*Ft/Dt.data.BYTES_PER_ELEMENT,(ae+1)*Ft/Dt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,yt,0,0,ae,Dt.width,Dt.height,1,Ct,Ne)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,yt,0,0,0,Dt.width,Dt.height,Tt.depth,Ct,Dt.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,yt,Pt,Dt.width,Dt.height,Tt.depth,0,Dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?wt&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,yt,0,0,0,Dt.width,Dt.height,Tt.depth,Ct,Zt,Dt.data):i.texImage3D(s.TEXTURE_2D_ARRAY,yt,Pt,Dt.width,Dt.height,Tt.depth,0,Ct,Zt,Dt.data)}else{V&&bt&&i.texStorage2D(s.TEXTURE_2D,zt,Pt,oe[0].width,oe[0].height);for(let yt=0,mt=oe.length;yt<mt;yt++)Dt=oe[yt],T.format!==Ei?Ct!==null?V?wt&&i.compressedTexSubImage2D(s.TEXTURE_2D,yt,0,0,Dt.width,Dt.height,Ct,Dt.data):i.compressedTexImage2D(s.TEXTURE_2D,yt,Pt,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?wt&&i.texSubImage2D(s.TEXTURE_2D,yt,0,0,Dt.width,Dt.height,Ct,Zt,Dt.data):i.texImage2D(s.TEXTURE_2D,yt,Pt,Dt.width,Dt.height,0,Ct,Zt,Dt.data)}else if(T.isDataArrayTexture)if(V){if(bt&&i.texStorage3D(s.TEXTURE_2D_ARRAY,zt,Pt,Tt.width,Tt.height,Tt.depth),wt)if(T.layerUpdates.size>0){const yt=Sv(Tt.width,Tt.height,T.format,T.type);for(const mt of T.layerUpdates){const Ft=Tt.data.subarray(mt*yt/Tt.data.BYTES_PER_ELEMENT,(mt+1)*yt/Tt.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,mt,Tt.width,Tt.height,1,Ct,Zt,Ft)}T.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Tt.width,Tt.height,Tt.depth,Ct,Zt,Tt.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Pt,Tt.width,Tt.height,Tt.depth,0,Ct,Zt,Tt.data);else if(T.isData3DTexture)V?(bt&&i.texStorage3D(s.TEXTURE_3D,zt,Pt,Tt.width,Tt.height,Tt.depth),wt&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Tt.width,Tt.height,Tt.depth,Ct,Zt,Tt.data)):i.texImage3D(s.TEXTURE_3D,0,Pt,Tt.width,Tt.height,Tt.depth,0,Ct,Zt,Tt.data);else if(T.isFramebufferTexture){if(bt)if(V)i.texStorage2D(s.TEXTURE_2D,zt,Pt,Tt.width,Tt.height);else{let yt=Tt.width,mt=Tt.height;for(let Ft=0;Ft<zt;Ft++)i.texImage2D(s.TEXTURE_2D,Ft,Pt,yt,mt,0,Ct,Zt,null),yt>>=1,mt>>=1}}else if(oe.length>0){if(V&&bt){const yt=Ze(oe[0]);i.texStorage2D(s.TEXTURE_2D,zt,Pt,yt.width,yt.height)}for(let yt=0,mt=oe.length;yt<mt;yt++)Dt=oe[yt],V?wt&&i.texSubImage2D(s.TEXTURE_2D,yt,0,0,Ct,Zt,Dt):i.texImage2D(s.TEXTURE_2D,yt,Pt,Ct,Zt,Dt);T.generateMipmaps=!1}else if(V){if(bt){const yt=Ze(Tt);i.texStorage2D(s.TEXTURE_2D,zt,Pt,yt.width,yt.height)}wt&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Ct,Zt,Tt)}else i.texImage2D(s.TEXTURE_2D,0,Pt,Ct,Zt,Tt);M(T)&&v(ut),Yt.__version=ot.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function gt(L,T,tt){if(T.image.length!==6)return;const ut=Mt(L,T),St=T.source;i.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+tt);const ot=r.get(St);if(St.version!==ot.__version||ut===!0){i.activeTexture(s.TEXTURE0+tt);const Yt=Ce.getPrimaries(Ce.workingColorSpace),Rt=T.colorSpace===Xa?null:Ce.getPrimaries(T.colorSpace),Wt=T.colorSpace===Xa||Yt===Rt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);const qt=T.isCompressedTexture||T.image[0].isCompressedTexture,Tt=T.image[0]&&T.image[0].isDataTexture,Ct=[];for(let mt=0;mt<6;mt++)!qt&&!Tt?Ct[mt]=A(T.image[mt],!0,l.maxCubemapSize):Ct[mt]=Tt?T.image[mt].image:T.image[mt],Ct[mt]=Qe(T,Ct[mt]);const Zt=Ct[0],Pt=c.convert(T.format,T.colorSpace),Dt=c.convert(T.type),oe=U(T.internalFormat,Pt,Dt,T.colorSpace),V=T.isVideoTexture!==!0,bt=ot.__version===void 0||ut===!0,wt=St.dataReady;let zt=G(T,Zt);nt(s.TEXTURE_CUBE_MAP,T);let yt;if(qt){V&&bt&&i.texStorage2D(s.TEXTURE_CUBE_MAP,zt,oe,Zt.width,Zt.height);for(let mt=0;mt<6;mt++){yt=Ct[mt].mipmaps;for(let Ft=0;Ft<yt.length;Ft++){const ae=yt[Ft];T.format!==Ei?Pt!==null?V?wt&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Ft,0,0,ae.width,ae.height,Pt,ae.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Ft,oe,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?wt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Ft,0,0,ae.width,ae.height,Pt,Dt,ae.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Ft,oe,ae.width,ae.height,0,Pt,Dt,ae.data)}}}else{if(yt=T.mipmaps,V&&bt){yt.length>0&&zt++;const mt=Ze(Ct[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,zt,oe,mt.width,mt.height)}for(let mt=0;mt<6;mt++)if(Tt){V?wt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,Ct[mt].width,Ct[mt].height,Pt,Dt,Ct[mt].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,oe,Ct[mt].width,Ct[mt].height,0,Pt,Dt,Ct[mt].data);for(let Ft=0;Ft<yt.length;Ft++){const Ne=yt[Ft].image[mt].image;V?wt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Ft+1,0,0,Ne.width,Ne.height,Pt,Dt,Ne.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Ft+1,oe,Ne.width,Ne.height,0,Pt,Dt,Ne.data)}}else{V?wt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,Pt,Dt,Ct[mt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,oe,Pt,Dt,Ct[mt]);for(let Ft=0;Ft<yt.length;Ft++){const ae=yt[Ft];V?wt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Ft+1,0,0,Pt,Dt,ae.image[mt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Ft+1,oe,Pt,Dt,ae.image[mt])}}}M(T)&&v(s.TEXTURE_CUBE_MAP),ot.__version=St.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function It(L,T,tt,ut,St,ot){const Yt=c.convert(tt.format,tt.colorSpace),Rt=c.convert(tt.type),Wt=U(tt.internalFormat,Yt,Rt,tt.colorSpace),qt=r.get(T),Tt=r.get(tt);if(Tt.__renderTarget=T,!qt.__hasExternalTextures){const Ct=Math.max(1,T.width>>ot),Zt=Math.max(1,T.height>>ot);St===s.TEXTURE_3D||St===s.TEXTURE_2D_ARRAY?i.texImage3D(St,ot,Wt,Ct,Zt,T.depth,0,Yt,Rt,null):i.texImage2D(St,ot,Wt,Ct,Zt,0,Yt,Rt,null)}i.bindFramebuffer(s.FRAMEBUFFER,L),Bt(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ut,St,Tt.__webglTexture,0,He(T)):(St===s.TEXTURE_2D||St>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&St<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ut,St,Tt.__webglTexture,ot),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Ot(L,T,tt){if(s.bindRenderbuffer(s.RENDERBUFFER,L),T.depthBuffer){const ut=T.depthTexture,St=ut&&ut.isDepthTexture?ut.type:null,ot=C(T.stencilBuffer,St),Yt=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Rt=He(T);Bt(T)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Rt,ot,T.width,T.height):tt?s.renderbufferStorageMultisample(s.RENDERBUFFER,Rt,ot,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,ot,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Yt,s.RENDERBUFFER,L)}else{const ut=T.textures;for(let St=0;St<ut.length;St++){const ot=ut[St],Yt=c.convert(ot.format,ot.colorSpace),Rt=c.convert(ot.type),Wt=U(ot.internalFormat,Yt,Rt,ot.colorSpace),qt=He(T);tt&&Bt(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,qt,Wt,T.width,T.height):Bt(T)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,qt,Wt,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Wt,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ne(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ut=r.get(T.depthTexture);ut.__renderTarget=T,(!ut.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),pt(T.depthTexture,0);const St=ut.__webglTexture,ot=He(T);if(T.depthTexture.format===ko)Bt(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,St,0,ot):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,St,0);else if(T.depthTexture.format===Wo)Bt(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,St,0,ot):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,St,0);else throw new Error("Unknown depthTexture format")}function Xe(L){const T=r.get(L),tt=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){const ut=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ut){const St=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ut.removeEventListener("dispose",St)};ut.addEventListener("dispose",St),T.__depthDisposeCallback=St}T.__boundDepthTexture=ut}if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(tt)throw new Error("target.depthTexture not supported in Cube render targets");const ut=L.texture.mipmaps;ut&&ut.length>0?ne(T.__webglFramebuffer[0],L):ne(T.__webglFramebuffer,L)}else if(tt){T.__webglDepthbuffer=[];for(let ut=0;ut<6;ut++)if(i.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[ut]),T.__webglDepthbuffer[ut]===void 0)T.__webglDepthbuffer[ut]=s.createRenderbuffer(),Ot(T.__webglDepthbuffer[ut],L,!1);else{const St=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ot=T.__webglDepthbuffer[ut];s.bindRenderbuffer(s.RENDERBUFFER,ot),s.framebufferRenderbuffer(s.FRAMEBUFFER,St,s.RENDERBUFFER,ot)}}else{const ut=L.texture.mipmaps;if(ut&&ut.length>0?i.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),Ot(T.__webglDepthbuffer,L,!1);else{const St=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ot=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ot),s.framebufferRenderbuffer(s.FRAMEBUFFER,St,s.RENDERBUFFER,ot)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function de(L,T,tt){const ut=r.get(L);T!==void 0&&It(ut.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),tt!==void 0&&Xe(L)}function I(L){const T=L.texture,tt=r.get(L),ut=r.get(T);L.addEventListener("dispose",B);const St=L.textures,ot=L.isWebGLCubeRenderTarget===!0,Yt=St.length>1;if(Yt||(ut.__webglTexture===void 0&&(ut.__webglTexture=s.createTexture()),ut.__version=T.version,f.memory.textures++),ot){tt.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(T.mipmaps&&T.mipmaps.length>0){tt.__webglFramebuffer[Rt]=[];for(let Wt=0;Wt<T.mipmaps.length;Wt++)tt.__webglFramebuffer[Rt][Wt]=s.createFramebuffer()}else tt.__webglFramebuffer[Rt]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){tt.__webglFramebuffer=[];for(let Rt=0;Rt<T.mipmaps.length;Rt++)tt.__webglFramebuffer[Rt]=s.createFramebuffer()}else tt.__webglFramebuffer=s.createFramebuffer();if(Yt)for(let Rt=0,Wt=St.length;Rt<Wt;Rt++){const qt=r.get(St[Rt]);qt.__webglTexture===void 0&&(qt.__webglTexture=s.createTexture(),f.memory.textures++)}if(L.samples>0&&Bt(L)===!1){tt.__webglMultisampledFramebuffer=s.createFramebuffer(),tt.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let Rt=0;Rt<St.length;Rt++){const Wt=St[Rt];tt.__webglColorRenderbuffer[Rt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,tt.__webglColorRenderbuffer[Rt]);const qt=c.convert(Wt.format,Wt.colorSpace),Tt=c.convert(Wt.type),Ct=U(Wt.internalFormat,qt,Tt,Wt.colorSpace,L.isXRRenderTarget===!0),Zt=He(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,Zt,Ct,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Rt,s.RENDERBUFFER,tt.__webglColorRenderbuffer[Rt])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(tt.__webglDepthRenderbuffer=s.createRenderbuffer(),Ot(tt.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ot){i.bindTexture(s.TEXTURE_CUBE_MAP,ut.__webglTexture),nt(s.TEXTURE_CUBE_MAP,T);for(let Rt=0;Rt<6;Rt++)if(T.mipmaps&&T.mipmaps.length>0)for(let Wt=0;Wt<T.mipmaps.length;Wt++)It(tt.__webglFramebuffer[Rt][Wt],L,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Wt);else It(tt.__webglFramebuffer[Rt],L,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);M(T)&&v(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Yt){for(let Rt=0,Wt=St.length;Rt<Wt;Rt++){const qt=St[Rt],Tt=r.get(qt);let Ct=s.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ct=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Ct,Tt.__webglTexture),nt(Ct,qt),It(tt.__webglFramebuffer,L,qt,s.COLOR_ATTACHMENT0+Rt,Ct,0),M(qt)&&v(Ct)}i.unbindTexture()}else{let Rt=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Rt=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Rt,ut.__webglTexture),nt(Rt,T),T.mipmaps&&T.mipmaps.length>0)for(let Wt=0;Wt<T.mipmaps.length;Wt++)It(tt.__webglFramebuffer[Wt],L,T,s.COLOR_ATTACHMENT0,Rt,Wt);else It(tt.__webglFramebuffer,L,T,s.COLOR_ATTACHMENT0,Rt,0);M(T)&&v(Rt),i.unbindTexture()}L.depthBuffer&&Xe(L)}function Ee(L){const T=L.textures;for(let tt=0,ut=T.length;tt<ut;tt++){const St=T[tt];if(M(St)){const ot=z(L),Yt=r.get(St).__webglTexture;i.bindTexture(ot,Yt),v(ot),i.unbindTexture()}}}const $t=[],ye=[];function jt(L){if(L.samples>0){if(Bt(L)===!1){const T=L.textures,tt=L.width,ut=L.height;let St=s.COLOR_BUFFER_BIT;const ot=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Yt=r.get(L),Rt=T.length>1;if(Rt)for(let qt=0;qt<T.length;qt++)i.bindFramebuffer(s.FRAMEBUFFER,Yt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+qt,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Yt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+qt,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Yt.__webglMultisampledFramebuffer);const Wt=L.texture.mipmaps;Wt&&Wt.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Yt.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Yt.__webglFramebuffer);for(let qt=0;qt<T.length;qt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(St|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(St|=s.STENCIL_BUFFER_BIT)),Rt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Yt.__webglColorRenderbuffer[qt]);const Tt=r.get(T[qt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Tt,0)}s.blitFramebuffer(0,0,tt,ut,0,0,tt,ut,St,s.NEAREST),m===!0&&($t.length=0,ye.length=0,$t.push(s.COLOR_ATTACHMENT0+qt),L.depthBuffer&&L.resolveDepthBuffer===!1&&($t.push(ot),ye.push(ot),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,ye)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,$t))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Rt)for(let qt=0;qt<T.length;qt++){i.bindFramebuffer(s.FRAMEBUFFER,Yt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+qt,s.RENDERBUFFER,Yt.__webglColorRenderbuffer[qt]);const Tt=r.get(T[qt]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Yt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+qt,s.TEXTURE_2D,Tt,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Yt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const T=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function He(L){return Math.min(l.maxSamples,L.samples)}function Bt(L){const T=r.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function se(L){const T=f.render.frame;g.get(L)!==T&&(g.set(L,T),L.update())}function Qe(L,T){const tt=L.colorSpace,ut=L.format,St=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||tt!==Ls&&tt!==Xa&&(Ce.getTransfer(tt)===Ie?(ut!==Ei||St!==fa)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",tt)),T}function Ze(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=st,this.resetTextureUnits=ct,this.setTexture2D=pt,this.setTexture2DArray=O,this.setTexture3D=Z,this.setTextureCube=Y,this.rebindTextures=de,this.setupRenderTarget=I,this.updateRenderTargetMipmap=Ee,this.updateMultisampleRenderTarget=jt,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=It,this.useMultisampledRTT=Bt}function z1(s,t){function i(r,l=Xa){let c;const f=Ce.getTransfer(l);if(r===fa)return s.UNSIGNED_BYTE;if(r===Hd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Gd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===i0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===e0)return s.BYTE;if(r===n0)return s.SHORT;if(r===Vo)return s.UNSIGNED_SHORT;if(r===Id)return s.INT;if(r===Ar)return s.UNSIGNED_INT;if(r===ca)return s.FLOAT;if(r===jo)return s.HALF_FLOAT;if(r===a0)return s.ALPHA;if(r===r0)return s.RGB;if(r===Ei)return s.RGBA;if(r===ko)return s.DEPTH_COMPONENT;if(r===Wo)return s.DEPTH_STENCIL;if(r===s0)return s.RED;if(r===Vd)return s.RED_INTEGER;if(r===o0)return s.RG;if(r===Xd)return s.RG_INTEGER;if(r===kd)return s.RGBA_INTEGER;if(r===Fc||r===Ic||r===Hc||r===Gc)if(f===Ie)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Fc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ic)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Hc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Gc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Fc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ic)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Hc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Gc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===od||r===ld||r===cd||r===ud)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===od)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ld)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===cd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ud)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===fd||r===hd||r===dd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(r===fd||r===hd)return f===Ie?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===dd)return f===Ie?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===pd||r===md||r===gd||r===_d||r===vd||r===xd||r===Sd||r===yd||r===Md||r===Ed||r===Td||r===bd||r===Ad||r===Rd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(r===pd)return f===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===md)return f===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===gd)return f===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===_d)return f===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===vd)return f===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===xd)return f===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Sd)return f===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===yd)return f===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Md)return f===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ed)return f===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Td)return f===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===bd)return f===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ad)return f===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Rd)return f===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Vc||r===Cd||r===wd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(r===Vc)return f===Ie?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Cd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===wd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===l0||r===Dd||r===Ud||r===Ld)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(r===Vc)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Dd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ud)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ld)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Xo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}class I0 extends Xn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}}const B1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,F1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class I1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const r=new I0(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new Za({vertexShader:B1,fragmentShader:F1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ke(new zi(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class H1 extends Ps{constructor(t,i){super();const r=this;let l=null,c=1,f=null,d="local-floor",m=1,p=null,g=null,_=null,S=null,y=null,E=null;const A=new I1,M={},v=i.getContextAttributes();let z=null,U=null;const C=[],G=[],X=new Jt;let B=null;const j=new yi;j.viewport=new an;const D=new yi;D.viewport=new an;const w=[j,D],F=new oE;let ct=null,st=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let _t=C[Q];return _t===void 0&&(_t=new zh,C[Q]=_t),_t.getTargetRaySpace()},this.getControllerGrip=function(Q){let _t=C[Q];return _t===void 0&&(_t=new zh,C[Q]=_t),_t.getGripSpace()},this.getHand=function(Q){let _t=C[Q];return _t===void 0&&(_t=new zh,C[Q]=_t),_t.getHandSpace()};function ft(Q){const _t=G.indexOf(Q.inputSource);if(_t===-1)return;const gt=C[_t];gt!==void 0&&(gt.update(Q.inputSource,Q.frame,p||f),gt.dispatchEvent({type:Q.type,data:Q.inputSource}))}function pt(){l.removeEventListener("select",ft),l.removeEventListener("selectstart",ft),l.removeEventListener("selectend",ft),l.removeEventListener("squeeze",ft),l.removeEventListener("squeezestart",ft),l.removeEventListener("squeezeend",ft),l.removeEventListener("end",pt),l.removeEventListener("inputsourceschange",O);for(let Q=0;Q<C.length;Q++){const _t=G[Q];_t!==null&&(G[Q]=null,C[Q].disconnect(_t))}ct=null,st=null,A.reset();for(const Q in M)delete M[Q];t.setRenderTarget(z),y=null,S=null,_=null,l=null,U=null,At.stop(),r.isPresenting=!1,t.setPixelRatio(B),t.setSize(X.width,X.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){c=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){d=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(Q){p=Q},this.getBaseLayer=function(){return S!==null?S:y},this.getBinding=function(){return _},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(Q){if(l=Q,l!==null){if(z=t.getRenderTarget(),l.addEventListener("select",ft),l.addEventListener("selectstart",ft),l.addEventListener("selectend",ft),l.addEventListener("squeeze",ft),l.addEventListener("squeezestart",ft),l.addEventListener("squeezeend",ft),l.addEventListener("end",pt),l.addEventListener("inputsourceschange",O),v.xrCompatible!==!0&&await i.makeXRCompatible(),B=t.getPixelRatio(),t.getSize(X),typeof XRWebGLBinding<"u"&&(_=new XRWebGLBinding(l,i)),_!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let gt=null,It=null,Ot=null;v.depth&&(Ot=v.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,gt=v.stencil?Wo:ko,It=v.stencil?Xo:Ar);const ne={colorFormat:i.RGBA8,depthFormat:Ot,scaleFactor:c};S=_.createProjectionLayer(ne),l.updateRenderState({layers:[S]}),t.setPixelRatio(1),t.setSize(S.textureWidth,S.textureHeight,!1),U=new Rr(S.textureWidth,S.textureHeight,{format:Ei,type:fa,depthTexture:new E0(S.textureWidth,S.textureHeight,It,void 0,void 0,void 0,void 0,void 0,void 0,gt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const gt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,gt),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),U=new Rr(y.framebufferWidth,y.framebufferHeight,{format:Ei,type:fa,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(d),At.setContext(l),At.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function O(Q){for(let _t=0;_t<Q.removed.length;_t++){const gt=Q.removed[_t],It=G.indexOf(gt);It>=0&&(G[It]=null,C[It].disconnect(gt))}for(let _t=0;_t<Q.added.length;_t++){const gt=Q.added[_t];let It=G.indexOf(gt);if(It===-1){for(let ne=0;ne<C.length;ne++)if(ne>=G.length){G.push(gt),It=ne;break}else if(G[ne]===null){G[ne]=gt,It=ne;break}if(It===-1)break}const Ot=C[It];Ot&&Ot.connect(gt)}}const Z=new K,Y=new K;function xt(Q,_t,gt){Z.setFromMatrixPosition(_t.matrixWorld),Y.setFromMatrixPosition(gt.matrixWorld);const It=Z.distanceTo(Y),Ot=_t.projectionMatrix.elements,ne=gt.projectionMatrix.elements,Xe=Ot[14]/(Ot[10]-1),de=Ot[14]/(Ot[10]+1),I=(Ot[9]+1)/Ot[5],Ee=(Ot[9]-1)/Ot[5],$t=(Ot[8]-1)/Ot[0],ye=(ne[8]+1)/ne[0],jt=Xe*$t,He=Xe*ye,Bt=It/(-$t+ye),se=Bt*-$t;if(_t.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(se),Q.translateZ(Bt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Ot[10]===-1)Q.projectionMatrix.copy(_t.projectionMatrix),Q.projectionMatrixInverse.copy(_t.projectionMatrixInverse);else{const Qe=Xe+Bt,Ze=de+Bt,L=jt-se,T=He+(It-se),tt=I*de/Ze*Qe,ut=Ee*de/Ze*Qe;Q.projectionMatrix.makePerspective(L,T,tt,ut,Qe,Ze),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function Et(Q,_t){_t===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(_t.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(l===null)return;let _t=Q.near,gt=Q.far;A.texture!==null&&(A.depthNear>0&&(_t=A.depthNear),A.depthFar>0&&(gt=A.depthFar)),F.near=D.near=j.near=_t,F.far=D.far=j.far=gt,(ct!==F.near||st!==F.far)&&(l.updateRenderState({depthNear:F.near,depthFar:F.far}),ct=F.near,st=F.far),F.layers.mask=Q.layers.mask|6,j.layers.mask=F.layers.mask&3,D.layers.mask=F.layers.mask&5;const It=Q.parent,Ot=F.cameras;Et(F,It);for(let ne=0;ne<Ot.length;ne++)Et(Ot[ne],It);Ot.length===2?xt(F,j,D):F.projectionMatrix.copy(j.projectionMatrix),N(Q,F,It)};function N(Q,_t,gt){gt===null?Q.matrix.copy(_t.matrixWorld):(Q.matrix.copy(gt.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(_t.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(_t.projectionMatrix),Q.projectionMatrixInverse.copy(_t.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Nd*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(S===null&&y===null))return m},this.setFoveation=function(Q){m=Q,S!==null&&(S.fixedFoveation=Q),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=Q)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(F)},this.getCameraTexture=function(Q){return M[Q]};let nt=null;function Mt(Q,_t){if(g=_t.getViewerPose(p||f),E=_t,g!==null){const gt=g.views;y!==null&&(t.setRenderTargetFramebuffer(U,y.framebuffer),t.setRenderTarget(U));let It=!1;gt.length!==F.cameras.length&&(F.cameras.length=0,It=!0);for(let de=0;de<gt.length;de++){const I=gt[de];let Ee=null;if(y!==null)Ee=y.getViewport(I);else{const ye=_.getViewSubImage(S,I);Ee=ye.viewport,de===0&&(t.setRenderTargetTextures(U,ye.colorTexture,ye.depthStencilTexture),t.setRenderTarget(U))}let $t=w[de];$t===void 0&&($t=new yi,$t.layers.enable(de),$t.viewport=new an,w[de]=$t),$t.matrix.fromArray(I.transform.matrix),$t.matrix.decompose($t.position,$t.quaternion,$t.scale),$t.projectionMatrix.fromArray(I.projectionMatrix),$t.projectionMatrixInverse.copy($t.projectionMatrix).invert(),$t.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),de===0&&(F.matrix.copy($t.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),It===!0&&F.cameras.push($t)}const Ot=l.enabledFeatures;if(Ot&&Ot.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&_){const de=_.getDepthInformation(gt[0]);de&&de.isValid&&de.texture&&A.init(de,l.renderState)}if(Ot&&Ot.includes("camera-access")&&(t.state.unbindTexture(),_))for(let de=0;de<gt.length;de++){const I=gt[de].camera;if(I){let Ee=M[I];Ee||(Ee=new I0,M[I]=Ee);const $t=_.getCameraImage(I);Ee.sourceTexture=$t}}}for(let gt=0;gt<C.length;gt++){const It=G[gt],Ot=C[gt];It!==null&&Ot!==void 0&&Ot.update(It,_t,p||f)}nt&&nt(Q,_t),_t.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:_t}),E=null}const At=new O0;At.setAnimationLoop(Mt),this.setAnimationLoop=function(Q){nt=Q},this.dispose=function(){}}}const xr=new ha,G1=new rn;function V1(s,t){function i(M,v){M.matrixAutoUpdate===!0&&M.updateMatrix(),v.value.copy(M.matrix)}function r(M,v){v.color.getRGB(M.fogColor.value,_0(s)),v.isFog?(M.fogNear.value=v.near,M.fogFar.value=v.far):v.isFogExp2&&(M.fogDensity.value=v.density)}function l(M,v,z,U,C){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(M,v):v.isMeshToonMaterial?(c(M,v),_(M,v)):v.isMeshPhongMaterial?(c(M,v),g(M,v)):v.isMeshStandardMaterial?(c(M,v),S(M,v),v.isMeshPhysicalMaterial&&y(M,v,C)):v.isMeshMatcapMaterial?(c(M,v),E(M,v)):v.isMeshDepthMaterial?c(M,v):v.isMeshDistanceMaterial?(c(M,v),A(M,v)):v.isMeshNormalMaterial?c(M,v):v.isLineBasicMaterial?(f(M,v),v.isLineDashedMaterial&&d(M,v)):v.isPointsMaterial?m(M,v,z,U):v.isSpriteMaterial?p(M,v):v.isShadowMaterial?(M.color.value.copy(v.color),M.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(M,v){M.opacity.value=v.opacity,v.color&&M.diffuse.value.copy(v.color),v.emissive&&M.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.bumpMap&&(M.bumpMap.value=v.bumpMap,i(v.bumpMap,M.bumpMapTransform),M.bumpScale.value=v.bumpScale,v.side===Vn&&(M.bumpScale.value*=-1)),v.normalMap&&(M.normalMap.value=v.normalMap,i(v.normalMap,M.normalMapTransform),M.normalScale.value.copy(v.normalScale),v.side===Vn&&M.normalScale.value.negate()),v.displacementMap&&(M.displacementMap.value=v.displacementMap,i(v.displacementMap,M.displacementMapTransform),M.displacementScale.value=v.displacementScale,M.displacementBias.value=v.displacementBias),v.emissiveMap&&(M.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,M.emissiveMapTransform)),v.specularMap&&(M.specularMap.value=v.specularMap,i(v.specularMap,M.specularMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest);const z=t.get(v),U=z.envMap,C=z.envMapRotation;U&&(M.envMap.value=U,xr.copy(C),xr.x*=-1,xr.y*=-1,xr.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(xr.y*=-1,xr.z*=-1),M.envMapRotation.value.setFromMatrix4(G1.makeRotationFromEuler(xr)),M.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=v.reflectivity,M.ior.value=v.ior,M.refractionRatio.value=v.refractionRatio),v.lightMap&&(M.lightMap.value=v.lightMap,M.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,M.lightMapTransform)),v.aoMap&&(M.aoMap.value=v.aoMap,M.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,M.aoMapTransform))}function f(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform))}function d(M,v){M.dashSize.value=v.dashSize,M.totalSize.value=v.dashSize+v.gapSize,M.scale.value=v.scale}function m(M,v,z,U){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.size.value=v.size*z,M.scale.value=U*.5,v.map&&(M.map.value=v.map,i(v.map,M.uvTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function p(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.rotation.value=v.rotation,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function g(M,v){M.specular.value.copy(v.specular),M.shininess.value=Math.max(v.shininess,1e-4)}function _(M,v){v.gradientMap&&(M.gradientMap.value=v.gradientMap)}function S(M,v){M.metalness.value=v.metalness,v.metalnessMap&&(M.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,M.metalnessMapTransform)),M.roughness.value=v.roughness,v.roughnessMap&&(M.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,M.roughnessMapTransform)),v.envMap&&(M.envMapIntensity.value=v.envMapIntensity)}function y(M,v,z){M.ior.value=v.ior,v.sheen>0&&(M.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),M.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(M.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,M.sheenColorMapTransform)),v.sheenRoughnessMap&&(M.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,M.sheenRoughnessMapTransform))),v.clearcoat>0&&(M.clearcoat.value=v.clearcoat,M.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(M.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,M.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(M.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Vn&&M.clearcoatNormalScale.value.negate())),v.dispersion>0&&(M.dispersion.value=v.dispersion),v.iridescence>0&&(M.iridescence.value=v.iridescence,M.iridescenceIOR.value=v.iridescenceIOR,M.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(M.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,M.iridescenceMapTransform)),v.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),v.transmission>0&&(M.transmission.value=v.transmission,M.transmissionSamplerMap.value=z.texture,M.transmissionSamplerSize.value.set(z.width,z.height),v.transmissionMap&&(M.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,M.transmissionMapTransform)),M.thickness.value=v.thickness,v.thicknessMap&&(M.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=v.attenuationDistance,M.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(M.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(M.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=v.specularIntensity,M.specularColor.value.copy(v.specularColor),v.specularColorMap&&(M.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,M.specularColorMapTransform)),v.specularIntensityMap&&(M.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,v){v.matcap&&(M.matcap.value=v.matcap)}function A(M,v){const z=t.get(v).light;M.referencePosition.value.setFromMatrixPosition(z.matrixWorld),M.nearDistance.value=z.shadow.camera.near,M.farDistance.value=z.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function X1(s,t,i,r){let l={},c={},f=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(z,U){const C=U.program;r.uniformBlockBinding(z,C)}function p(z,U){let C=l[z.id];C===void 0&&(E(z),C=g(z),l[z.id]=C,z.addEventListener("dispose",M));const G=U.program;r.updateUBOMapping(z,G);const X=t.render.frame;c[z.id]!==X&&(S(z),c[z.id]=X)}function g(z){const U=_();z.__bindingPointIndex=U;const C=s.createBuffer(),G=z.__size,X=z.usage;return s.bindBuffer(s.UNIFORM_BUFFER,C),s.bufferData(s.UNIFORM_BUFFER,G,X),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,U,C),C}function _(){for(let z=0;z<d;z++)if(f.indexOf(z)===-1)return f.push(z),z;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(z){const U=l[z.id],C=z.uniforms,G=z.__cache;s.bindBuffer(s.UNIFORM_BUFFER,U);for(let X=0,B=C.length;X<B;X++){const j=Array.isArray(C[X])?C[X]:[C[X]];for(let D=0,w=j.length;D<w;D++){const F=j[D];if(y(F,X,D,G)===!0){const ct=F.__offset,st=Array.isArray(F.value)?F.value:[F.value];let ft=0;for(let pt=0;pt<st.length;pt++){const O=st[pt],Z=A(O);typeof O=="number"||typeof O=="boolean"?(F.__data[0]=O,s.bufferSubData(s.UNIFORM_BUFFER,ct+ft,F.__data)):O.isMatrix3?(F.__data[0]=O.elements[0],F.__data[1]=O.elements[1],F.__data[2]=O.elements[2],F.__data[3]=0,F.__data[4]=O.elements[3],F.__data[5]=O.elements[4],F.__data[6]=O.elements[5],F.__data[7]=0,F.__data[8]=O.elements[6],F.__data[9]=O.elements[7],F.__data[10]=O.elements[8],F.__data[11]=0):(O.toArray(F.__data,ft),ft+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ct,F.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(z,U,C,G){const X=z.value,B=U+"_"+C;if(G[B]===void 0)return typeof X=="number"||typeof X=="boolean"?G[B]=X:G[B]=X.clone(),!0;{const j=G[B];if(typeof X=="number"||typeof X=="boolean"){if(j!==X)return G[B]=X,!0}else if(j.equals(X)===!1)return j.copy(X),!0}return!1}function E(z){const U=z.uniforms;let C=0;const G=16;for(let B=0,j=U.length;B<j;B++){const D=Array.isArray(U[B])?U[B]:[U[B]];for(let w=0,F=D.length;w<F;w++){const ct=D[w],st=Array.isArray(ct.value)?ct.value:[ct.value];for(let ft=0,pt=st.length;ft<pt;ft++){const O=st[ft],Z=A(O),Y=C%G,xt=Y%Z.boundary,Et=Y+xt;C+=xt,Et!==0&&G-Et<Z.storage&&(C+=G-Et),ct.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),ct.__offset=C,C+=Z.storage}}}const X=C%G;return X>0&&(C+=G-X),z.__size=C,z.__cache={},this}function A(z){const U={boundary:0,storage:0};return typeof z=="number"||typeof z=="boolean"?(U.boundary=4,U.storage=4):z.isVector2?(U.boundary=8,U.storage=8):z.isVector3||z.isColor?(U.boundary=16,U.storage=12):z.isVector4?(U.boundary=16,U.storage=16):z.isMatrix3?(U.boundary=48,U.storage=48):z.isMatrix4?(U.boundary=64,U.storage=64):z.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",z),U}function M(z){const U=z.target;U.removeEventListener("dispose",M);const C=f.indexOf(U.__bindingPointIndex);f.splice(C,1),s.deleteBuffer(l[U.id]),delete l[U.id],delete c[U.id]}function v(){for(const z in l)s.deleteBuffer(l[z]);f=[],l={},c={}}return{bind:m,update:p,dispose:v}}class k1{constructor(t={}){const{canvas:i=Qy(),context:r=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:S=!1}=t;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=f;const E=new Uint32Array(4),A=new Int32Array(4);let M=null,v=null;const z=[],U=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let G=!1;this._outputColorSpace=di;let X=0,B=0,j=null,D=-1,w=null;const F=new an,ct=new an;let st=null;const ft=new Le(0);let pt=0,O=i.width,Z=i.height,Y=1,xt=null,Et=null;const N=new an(0,0,O,Z),nt=new an(0,0,O,Z);let Mt=!1;const At=new S0;let Q=!1,_t=!1;const gt=new rn,It=new K,Ot=new an,ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xe=!1;function de(){return j===null?Y:1}let I=r;function Ee(R,k){return i.getContext(R,k)}try{const R={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Fd}`),i.addEventListener("webglcontextlost",wt,!1),i.addEventListener("webglcontextrestored",zt,!1),i.addEventListener("webglcontextcreationerror",yt,!1),I===null){const k="webgl2";if(I=Ee(k,R),I===null)throw Ee(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let $t,ye,jt,He,Bt,se,Qe,Ze,L,T,tt,ut,St,ot,Yt,Rt,Wt,qt,Tt,Ct,Zt,Pt,Dt,oe;function V(){$t=new tA(I),$t.init(),Pt=new z1(I,$t),ye=new Yb(I,$t,t,Pt),jt=new O1(I,$t),ye.reversedDepthBuffer&&S&&jt.buffers.depth.setReversed(!0),He=new iA(I),Bt=new y1,se=new P1(I,$t,jt,Bt,ye,Pt,He),Qe=new jb(C),Ze=new $b(C),L=new cE(I),Dt=new Wb(I,L),T=new eA(I,L,He,Dt),tt=new rA(I,T,L,He),Tt=new aA(I,ye,se),Rt=new Zb(Bt),ut=new S1(C,Qe,Ze,$t,ye,Dt,Rt),St=new V1(C,Bt),ot=new E1,Yt=new w1($t),qt=new kb(C,Qe,Ze,jt,tt,y,m),Wt=new L1(C,tt,ye),oe=new X1(I,He,ye,jt),Ct=new qb(I,$t,He),Zt=new nA(I,$t,He),He.programs=ut.programs,C.capabilities=ye,C.extensions=$t,C.properties=Bt,C.renderLists=ot,C.shadowMap=Wt,C.state=jt,C.info=He}V();const bt=new H1(C,I);this.xr=bt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const R=$t.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=$t.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(R){R!==void 0&&(Y=R,this.setSize(O,Z,!1))},this.getSize=function(R){return R.set(O,Z)},this.setSize=function(R,k,it=!0){if(bt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=R,Z=k,i.width=Math.floor(R*Y),i.height=Math.floor(k*Y),it===!0&&(i.style.width=R+"px",i.style.height=k+"px"),this.setViewport(0,0,R,k)},this.getDrawingBufferSize=function(R){return R.set(O*Y,Z*Y).floor()},this.setDrawingBufferSize=function(R,k,it){O=R,Z=k,Y=it,i.width=Math.floor(R*it),i.height=Math.floor(k*it),this.setViewport(0,0,R,k)},this.getCurrentViewport=function(R){return R.copy(F)},this.getViewport=function(R){return R.copy(N)},this.setViewport=function(R,k,it,at){R.isVector4?N.set(R.x,R.y,R.z,R.w):N.set(R,k,it,at),jt.viewport(F.copy(N).multiplyScalar(Y).round())},this.getScissor=function(R){return R.copy(nt)},this.setScissor=function(R,k,it,at){R.isVector4?nt.set(R.x,R.y,R.z,R.w):nt.set(R,k,it,at),jt.scissor(ct.copy(nt).multiplyScalar(Y).round())},this.getScissorTest=function(){return Mt},this.setScissorTest=function(R){jt.setScissorTest(Mt=R)},this.setOpaqueSort=function(R){xt=R},this.setTransparentSort=function(R){Et=R},this.getClearColor=function(R){return R.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor(...arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha(...arguments)},this.clear=function(R=!0,k=!0,it=!0){let at=0;if(R){let W=!1;if(j!==null){const vt=j.texture.format;W=vt===kd||vt===Xd||vt===Vd}if(W){const vt=j.texture.type,Ut=vt===fa||vt===Ar||vt===Vo||vt===Xo||vt===Hd||vt===Gd,Gt=qt.getClearColor(),Nt=qt.getClearAlpha(),Kt=Gt.r,ie=Gt.g,Qt=Gt.b;Ut?(E[0]=Kt,E[1]=ie,E[2]=Qt,E[3]=Nt,I.clearBufferuiv(I.COLOR,0,E)):(A[0]=Kt,A[1]=ie,A[2]=Qt,A[3]=Nt,I.clearBufferiv(I.COLOR,0,A))}else at|=I.COLOR_BUFFER_BIT}k&&(at|=I.DEPTH_BUFFER_BIT),it&&(at|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(at)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",wt,!1),i.removeEventListener("webglcontextrestored",zt,!1),i.removeEventListener("webglcontextcreationerror",yt,!1),qt.dispose(),ot.dispose(),Yt.dispose(),Bt.dispose(),Qe.dispose(),Ze.dispose(),tt.dispose(),Dt.dispose(),oe.dispose(),ut.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",ii),bt.removeEventListener("sessionend",Fs),Ai.stop()};function wt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),G=!0}function zt(){console.log("THREE.WebGLRenderer: Context Restored."),G=!1;const R=He.autoReset,k=Wt.enabled,it=Wt.autoUpdate,at=Wt.needsUpdate,W=Wt.type;V(),He.autoReset=R,Wt.enabled=k,Wt.autoUpdate=it,Wt.needsUpdate=at,Wt.type=W}function yt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function mt(R){const k=R.target;k.removeEventListener("dispose",mt),Ft(k)}function Ft(R){ae(R),Bt.remove(R)}function ae(R){const k=Bt.get(R).programs;k!==void 0&&(k.forEach(function(it){ut.releaseProgram(it)}),R.isShaderMaterial&&ut.releaseShaderCache(R))}this.renderBufferDirect=function(R,k,it,at,W,vt){k===null&&(k=ne);const Ut=W.isMesh&&W.matrixWorld.determinant()<0,Gt=da(R,k,it,at,W);jt.setMaterial(at,Ut);let Nt=it.index,Kt=1;if(at.wireframe===!0){if(Nt=T.getWireframeAttribute(it),Nt===void 0)return;Kt=2}const ie=it.drawRange,Qt=it.attributes.position;let he=ie.start*Kt,De=(ie.start+ie.count)*Kt;vt!==null&&(he=Math.max(he,vt.start*Kt),De=Math.min(De,(vt.start+vt.count)*Kt)),Nt!==null?(he=Math.max(he,0),De=Math.min(De,Nt.count)):Qt!=null&&(he=Math.max(he,0),De=Math.min(De,Qt.count));const Ge=De-he;if(Ge<0||Ge===1/0)return;Dt.setup(W,at,Gt,it,Nt);let Ue,pe=Ct;if(Nt!==null&&(Ue=L.get(Nt),pe=Zt,pe.setIndex(Ue)),W.isMesh)at.wireframe===!0?(jt.setLineWidth(at.wireframeLinewidth*de()),pe.setMode(I.LINES)):pe.setMode(I.TRIANGLES);else if(W.isLine){let Vt=at.linewidth;Vt===void 0&&(Vt=1),jt.setLineWidth(Vt*de()),W.isLineSegments?pe.setMode(I.LINES):W.isLineLoop?pe.setMode(I.LINE_LOOP):pe.setMode(I.LINE_STRIP)}else W.isPoints?pe.setMode(I.POINTS):W.isSprite&&pe.setMode(I.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)Rs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),pe.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if($t.get("WEBGL_multi_draw"))pe.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Vt=W._multiDrawStarts,ke=W._multiDrawCounts,be=W._multiDrawCount,yn=Nt?L.get(Nt).bytesPerElement:1,Fi=Bt.get(at).currentProgram.getUniforms();for(let _n=0;_n<be;_n++)Fi.setValue(I,"_gl_DrawID",_n),pe.render(Vt[_n]/yn,ke[_n])}else if(W.isInstancedMesh)pe.renderInstances(he,Ge,W.count);else if(it.isInstancedBufferGeometry){const Vt=it._maxInstanceCount!==void 0?it._maxInstanceCount:1/0,ke=Math.min(it.instanceCount,Vt);pe.renderInstances(he,Ge,ke)}else pe.render(he,Ge)};function Ne(R,k,it){R.transparent===!0&&R.side===la&&R.forceSinglePass===!1?(R.side=Vn,R.needsUpdate=!0,qn(R,k,it),R.side=Ya,R.needsUpdate=!0,qn(R,k,it),R.side=la):qn(R,k,it)}this.compile=function(R,k,it=null){it===null&&(it=R),v=Yt.get(it),v.init(k),U.push(v),it.traverseVisible(function(W){W.isLight&&W.layers.test(k.layers)&&(v.pushLight(W),W.castShadow&&v.pushShadow(W))}),R!==it&&R.traverseVisible(function(W){W.isLight&&W.layers.test(k.layers)&&(v.pushLight(W),W.castShadow&&v.pushShadow(W))}),v.setupLights();const at=new Set;return R.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const vt=W.material;if(vt)if(Array.isArray(vt))for(let Ut=0;Ut<vt.length;Ut++){const Gt=vt[Ut];Ne(Gt,it,W),at.add(Gt)}else Ne(vt,it,W),at.add(vt)}),v=U.pop(),at},this.compileAsync=function(R,k,it=null){const at=this.compile(R,k,it);return new Promise(W=>{function vt(){if(at.forEach(function(Ut){Bt.get(Ut).currentProgram.isReady()&&at.delete(Ut)}),at.size===0){W(R);return}setTimeout(vt,10)}$t.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let Te=null;function Un(R){Te&&Te(R)}function ii(){Ai.stop()}function Fs(){Ai.start()}const Ai=new O0;Ai.setAnimationLoop(Un),typeof self<"u"&&Ai.setContext(self),this.setAnimationLoop=function(R){Te=R,bt.setAnimationLoop(R),R===null?Ai.stop():Ai.start()},bt.addEventListener("sessionstart",ii),bt.addEventListener("sessionend",Fs),this.render=function(R,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(k),k=bt.getCamera()),R.isScene===!0&&R.onBeforeRender(C,R,k,j),v=Yt.get(R,U.length),v.init(k),U.push(v),gt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),At.setFromProjectionMatrix(gt,Oi,k.reversedDepth),_t=this.localClippingEnabled,Q=Rt.init(this.clippingPlanes,_t),M=ot.get(R,z.length),M.init(),z.push(M),bt.enabled===!0&&bt.isPresenting===!0){const vt=C.xr.getDepthSensingMesh();vt!==null&&wr(vt,k,-1/0,C.sortObjects)}wr(R,k,0,C.sortObjects),M.finish(),C.sortObjects===!0&&M.sort(xt,Et),Xe=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,Xe&&qt.addToRenderList(M,R),this.info.render.frame++,Q===!0&&Rt.beginShadows();const it=v.state.shadowsArray;Wt.render(it,R,k),Q===!0&&Rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const at=M.opaque,W=M.transmissive;if(v.setupLights(),k.isArrayCamera){const vt=k.cameras;if(W.length>0)for(let Ut=0,Gt=vt.length;Ut<Gt;Ut++){const Nt=vt[Ut];Ur(at,W,R,Nt)}Xe&&qt.render(R);for(let Ut=0,Gt=vt.length;Ut<Gt;Ut++){const Nt=vt[Ut];Dr(M,R,Nt,Nt.viewport)}}else W.length>0&&Ur(at,W,R,k),Xe&&qt.render(R),Dr(M,R,k);j!==null&&B===0&&(se.updateMultisampleRenderTarget(j),se.updateRenderTargetMipmap(j)),R.isScene===!0&&R.onAfterRender(C,R,k),Dt.resetDefaultState(),D=-1,w=null,U.pop(),U.length>0?(v=U[U.length-1],Q===!0&&Rt.setGlobalState(C.clippingPlanes,v.state.camera)):v=null,z.pop(),z.length>0?M=z[z.length-1]:M=null};function wr(R,k,it,at){if(R.visible===!1)return;if(R.layers.test(k.layers)){if(R.isGroup)it=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(k);else if(R.isLight)v.pushLight(R),R.castShadow&&v.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||At.intersectsSprite(R)){at&&Ot.setFromMatrixPosition(R.matrixWorld).applyMatrix4(gt);const Ut=tt.update(R),Gt=R.material;Gt.visible&&M.push(R,Ut,Gt,it,Ot.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||At.intersectsObject(R))){const Ut=tt.update(R),Gt=R.material;if(at&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ot.copy(R.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),Ot.copy(Ut.boundingSphere.center)),Ot.applyMatrix4(R.matrixWorld).applyMatrix4(gt)),Array.isArray(Gt)){const Nt=Ut.groups;for(let Kt=0,ie=Nt.length;Kt<ie;Kt++){const Qt=Nt[Kt],he=Gt[Qt.materialIndex];he&&he.visible&&M.push(R,Ut,he,it,Ot.z,Qt)}}else Gt.visible&&M.push(R,Ut,Gt,it,Ot.z,null)}}const vt=R.children;for(let Ut=0,Gt=vt.length;Ut<Gt;Ut++)wr(vt[Ut],k,it,at)}function Dr(R,k,it,at){const W=R.opaque,vt=R.transmissive,Ut=R.transparent;v.setupLightsView(it),Q===!0&&Rt.setGlobalState(C.clippingPlanes,it),at&&jt.viewport(F.copy(at)),W.length>0&&ja(W,k,it),vt.length>0&&ja(vt,k,it),Ut.length>0&&ja(Ut,k,it),jt.buffers.depth.setTest(!0),jt.buffers.depth.setMask(!0),jt.buffers.color.setMask(!0),jt.setPolygonOffset(!1)}function Ur(R,k,it,at){if((it.isScene===!0?it.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[at.id]===void 0&&(v.state.transmissionRenderTarget[at.id]=new Rr(1,1,{generateMipmaps:!0,type:$t.has("EXT_color_buffer_half_float")||$t.has("EXT_color_buffer_float")?jo:fa,minFilter:br,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ce.workingColorSpace}));const vt=v.state.transmissionRenderTarget[at.id],Ut=at.viewport||F;vt.setSize(Ut.z*C.transmissionResolutionScale,Ut.w*C.transmissionResolutionScale);const Gt=C.getRenderTarget(),Nt=C.getActiveCubeFace(),Kt=C.getActiveMipmapLevel();C.setRenderTarget(vt),C.getClearColor(ft),pt=C.getClearAlpha(),pt<1&&C.setClearColor(16777215,.5),C.clear(),Xe&&qt.render(it);const ie=C.toneMapping;C.toneMapping=Wa;const Qt=at.viewport;if(at.viewport!==void 0&&(at.viewport=void 0),v.setupLightsView(at),Q===!0&&Rt.setGlobalState(C.clippingPlanes,at),ja(R,it,at),se.updateMultisampleRenderTarget(vt),se.updateRenderTargetMipmap(vt),$t.has("WEBGL_multisampled_render_to_texture")===!1){let he=!1;for(let De=0,Ge=k.length;De<Ge;De++){const Ue=k[De],pe=Ue.object,Vt=Ue.geometry,ke=Ue.material,be=Ue.group;if(ke.side===la&&pe.layers.test(at.layers)){const yn=ke.side;ke.side=Vn,ke.needsUpdate=!0,Is(pe,it,at,Vt,ke,be),ke.side=yn,ke.needsUpdate=!0,he=!0}}he===!0&&(se.updateMultisampleRenderTarget(vt),se.updateRenderTargetMipmap(vt))}C.setRenderTarget(Gt,Nt,Kt),C.setClearColor(ft,pt),Qt!==void 0&&(at.viewport=Qt),C.toneMapping=ie}function ja(R,k,it){const at=k.isScene===!0?k.overrideMaterial:null;for(let W=0,vt=R.length;W<vt;W++){const Ut=R[W],Gt=Ut.object,Nt=Ut.geometry,Kt=Ut.group;let ie=Ut.material;ie.allowOverride===!0&&at!==null&&(ie=at),Gt.layers.test(it.layers)&&Is(Gt,k,it,Nt,ie,Kt)}}function Is(R,k,it,at,W,vt){R.onBeforeRender(C,k,it,at,W,vt),R.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),W.onBeforeRender(C,k,it,at,R,vt),W.transparent===!0&&W.side===la&&W.forceSinglePass===!1?(W.side=Vn,W.needsUpdate=!0,C.renderBufferDirect(it,k,at,W,R,vt),W.side=Ya,W.needsUpdate=!0,C.renderBufferDirect(it,k,at,W,R,vt),W.side=la):C.renderBufferDirect(it,k,at,W,R,vt),R.onAfterRender(C,k,it,at,W,vt)}function qn(R,k,it){k.isScene!==!0&&(k=ne);const at=Bt.get(R),W=v.state.lights,vt=v.state.shadowsArray,Ut=W.state.version,Gt=ut.getParameters(R,W.state,vt,k,it),Nt=ut.getProgramCacheKey(Gt);let Kt=at.programs;at.environment=R.isMeshStandardMaterial?k.environment:null,at.fog=k.fog,at.envMap=(R.isMeshStandardMaterial?Ze:Qe).get(R.envMap||at.environment),at.envMapRotation=at.environment!==null&&R.envMap===null?k.environmentRotation:R.envMapRotation,Kt===void 0&&(R.addEventListener("dispose",mt),Kt=new Map,at.programs=Kt);let ie=Kt.get(Nt);if(ie!==void 0){if(at.currentProgram===ie&&at.lightsStateVersion===Ut)return Sn(R,Gt),ie}else Gt.uniforms=ut.getUniforms(R),R.onBeforeCompile(Gt,C),ie=ut.acquireProgram(Gt,Nt),Kt.set(Nt,ie),at.uniforms=Gt.uniforms;const Qt=at.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Qt.clippingPlanes=Rt.uniform),Sn(R,Gt),at.needsLights=$c(R),at.lightsStateVersion=Ut,at.needsLights&&(Qt.ambientLightColor.value=W.state.ambient,Qt.lightProbe.value=W.state.probe,Qt.directionalLights.value=W.state.directional,Qt.directionalLightShadows.value=W.state.directionalShadow,Qt.spotLights.value=W.state.spot,Qt.spotLightShadows.value=W.state.spotShadow,Qt.rectAreaLights.value=W.state.rectArea,Qt.ltc_1.value=W.state.rectAreaLTC1,Qt.ltc_2.value=W.state.rectAreaLTC2,Qt.pointLights.value=W.state.point,Qt.pointLightShadows.value=W.state.pointShadow,Qt.hemisphereLights.value=W.state.hemi,Qt.directionalShadowMap.value=W.state.directionalShadowMap,Qt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Qt.spotShadowMap.value=W.state.spotShadowMap,Qt.spotLightMatrix.value=W.state.spotLightMatrix,Qt.spotLightMap.value=W.state.spotLightMap,Qt.pointShadowMap.value=W.state.pointShadowMap,Qt.pointShadowMatrix.value=W.state.pointShadowMatrix),at.currentProgram=ie,at.uniformsList=null,ie}function sn(R){if(R.uniformsList===null){const k=R.currentProgram.getUniforms();R.uniformsList=Xc.seqWithValue(k.seq,R.uniforms)}return R.uniformsList}function Sn(R,k){const it=Bt.get(R);it.outputColorSpace=k.outputColorSpace,it.batching=k.batching,it.batchingColor=k.batchingColor,it.instancing=k.instancing,it.instancingColor=k.instancingColor,it.instancingMorph=k.instancingMorph,it.skinning=k.skinning,it.morphTargets=k.morphTargets,it.morphNormals=k.morphNormals,it.morphColors=k.morphColors,it.morphTargetsCount=k.morphTargetsCount,it.numClippingPlanes=k.numClippingPlanes,it.numIntersection=k.numClipIntersection,it.vertexAlphas=k.vertexAlphas,it.vertexTangents=k.vertexTangents,it.toneMapping=k.toneMapping}function da(R,k,it,at,W){k.isScene!==!0&&(k=ne),se.resetTextureUnits();const vt=k.fog,Ut=at.isMeshStandardMaterial?k.environment:null,Gt=j===null?C.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Ls,Nt=(at.isMeshStandardMaterial?Ze:Qe).get(at.envMap||Ut),Kt=at.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,ie=!!it.attributes.tangent&&(!!at.normalMap||at.anisotropy>0),Qt=!!it.morphAttributes.position,he=!!it.morphAttributes.normal,De=!!it.morphAttributes.color;let Ge=Wa;at.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ge=C.toneMapping);const Ue=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,pe=Ue!==void 0?Ue.length:0,Vt=Bt.get(at),ke=v.state.lights;if(Q===!0&&(_t===!0||R!==w)){const dn=R===w&&at.id===D;Rt.setState(at,R,dn)}let be=!1;at.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==ke.state.version||Vt.outputColorSpace!==Gt||W.isBatchedMesh&&Vt.batching===!1||!W.isBatchedMesh&&Vt.batching===!0||W.isBatchedMesh&&Vt.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Vt.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Vt.instancing===!1||!W.isInstancedMesh&&Vt.instancing===!0||W.isSkinnedMesh&&Vt.skinning===!1||!W.isSkinnedMesh&&Vt.skinning===!0||W.isInstancedMesh&&Vt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Vt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Vt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Vt.instancingMorph===!1&&W.morphTexture!==null||Vt.envMap!==Nt||at.fog===!0&&Vt.fog!==vt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==Rt.numPlanes||Vt.numIntersection!==Rt.numIntersection)||Vt.vertexAlphas!==Kt||Vt.vertexTangents!==ie||Vt.morphTargets!==Qt||Vt.morphNormals!==he||Vt.morphColors!==De||Vt.toneMapping!==Ge||Vt.morphTargetsCount!==pe)&&(be=!0):(be=!0,Vt.__version=at.version);let yn=Vt.currentProgram;be===!0&&(yn=qn(at,k,W));let Fi=!1,_n=!1,Qa=!1;const ve=yn.getUniforms(),An=Vt.uniforms;if(jt.useProgram(yn.program)&&(Fi=!0,_n=!0,Qa=!0),at.id!==D&&(D=at.id,_n=!0),Fi||w!==R){jt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),ve.setValue(I,"projectionMatrix",R.projectionMatrix),ve.setValue(I,"viewMatrix",R.matrixWorldInverse);const tn=ve.map.cameraPosition;tn!==void 0&&tn.setValue(I,It.setFromMatrixPosition(R.matrixWorld)),ye.logarithmicDepthBuffer&&ve.setValue(I,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(at.isMeshPhongMaterial||at.isMeshToonMaterial||at.isMeshLambertMaterial||at.isMeshBasicMaterial||at.isMeshStandardMaterial||at.isShaderMaterial)&&ve.setValue(I,"isOrthographic",R.isOrthographicCamera===!0),w!==R&&(w=R,_n=!0,Qa=!0)}if(W.isSkinnedMesh){ve.setOptional(I,W,"bindMatrix"),ve.setOptional(I,W,"bindMatrixInverse");const dn=W.skeleton;dn&&(dn.boneTexture===null&&dn.computeBoneTexture(),ve.setValue(I,"boneTexture",dn.boneTexture,se))}W.isBatchedMesh&&(ve.setOptional(I,W,"batchingTexture"),ve.setValue(I,"batchingTexture",W._matricesTexture,se),ve.setOptional(I,W,"batchingIdTexture"),ve.setValue(I,"batchingIdTexture",W._indirectTexture,se),ve.setOptional(I,W,"batchingColorTexture"),W._colorsTexture!==null&&ve.setValue(I,"batchingColorTexture",W._colorsTexture,se));const Ln=it.morphAttributes;if((Ln.position!==void 0||Ln.normal!==void 0||Ln.color!==void 0)&&Tt.update(W,it,yn),(_n||Vt.receiveShadow!==W.receiveShadow)&&(Vt.receiveShadow=W.receiveShadow,ve.setValue(I,"receiveShadow",W.receiveShadow)),at.isMeshGouraudMaterial&&at.envMap!==null&&(An.envMap.value=Nt,An.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),at.isMeshStandardMaterial&&at.envMap===null&&k.environment!==null&&(An.envMapIntensity.value=k.environmentIntensity),_n&&(ve.setValue(I,"toneMappingExposure",C.toneMappingExposure),Vt.needsLights&&Hs(An,Qa),vt&&at.fog===!0&&St.refreshFogUniforms(An,vt),St.refreshMaterialUniforms(An,at,Y,Z,v.state.transmissionRenderTarget[R.id]),Xc.upload(I,sn(Vt),An,se)),at.isShaderMaterial&&at.uniformsNeedUpdate===!0&&(Xc.upload(I,sn(Vt),An,se),at.uniformsNeedUpdate=!1),at.isSpriteMaterial&&ve.setValue(I,"center",W.center),ve.setValue(I,"modelViewMatrix",W.modelViewMatrix),ve.setValue(I,"normalMatrix",W.normalMatrix),ve.setValue(I,"modelMatrix",W.matrixWorld),at.isShaderMaterial||at.isRawShaderMaterial){const dn=at.uniformsGroups;for(let tn=0,Lr=dn.length;tn<Lr;tn++){const Ri=dn[tn];oe.update(Ri,yn),oe.bind(Ri,yn)}}return yn}function Hs(R,k){R.ambientLightColor.needsUpdate=k,R.lightProbe.needsUpdate=k,R.directionalLights.needsUpdate=k,R.directionalLightShadows.needsUpdate=k,R.pointLights.needsUpdate=k,R.pointLightShadows.needsUpdate=k,R.spotLights.needsUpdate=k,R.spotLightShadows.needsUpdate=k,R.rectAreaLights.needsUpdate=k,R.hemisphereLights.needsUpdate=k}function $c(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(R,k,it){const at=Bt.get(R);at.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,at.__autoAllocateDepthBuffer===!1&&(at.__useRenderToTexture=!1),Bt.get(R.texture).__webglTexture=k,Bt.get(R.depthTexture).__webglTexture=at.__autoAllocateDepthBuffer?void 0:it,at.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,k){const it=Bt.get(R);it.__webglFramebuffer=k,it.__useDefaultFramebuffer=k===void 0};const tu=I.createFramebuffer();this.setRenderTarget=function(R,k=0,it=0){j=R,X=k,B=it;let at=!0,W=null,vt=!1,Ut=!1;if(R){const Nt=Bt.get(R);if(Nt.__useDefaultFramebuffer!==void 0)jt.bindFramebuffer(I.FRAMEBUFFER,null),at=!1;else if(Nt.__webglFramebuffer===void 0)se.setupRenderTarget(R);else if(Nt.__hasExternalTextures)se.rebindTextures(R,Bt.get(R.texture).__webglTexture,Bt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Qt=R.depthTexture;if(Nt.__boundDepthTexture!==Qt){if(Qt!==null&&Bt.has(Qt)&&(R.width!==Qt.image.width||R.height!==Qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");se.setupDepthRenderbuffer(R)}}const Kt=R.texture;(Kt.isData3DTexture||Kt.isDataArrayTexture||Kt.isCompressedArrayTexture)&&(Ut=!0);const ie=Bt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ie[k])?W=ie[k][it]:W=ie[k],vt=!0):R.samples>0&&se.useMultisampledRTT(R)===!1?W=Bt.get(R).__webglMultisampledFramebuffer:Array.isArray(ie)?W=ie[it]:W=ie,F.copy(R.viewport),ct.copy(R.scissor),st=R.scissorTest}else F.copy(N).multiplyScalar(Y).floor(),ct.copy(nt).multiplyScalar(Y).floor(),st=Mt;if(it!==0&&(W=tu),jt.bindFramebuffer(I.FRAMEBUFFER,W)&&at&&jt.drawBuffers(R,W),jt.viewport(F),jt.scissor(ct),jt.setScissorTest(st),vt){const Nt=Bt.get(R.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+k,Nt.__webglTexture,it)}else if(Ut){const Nt=k;for(let Kt=0;Kt<R.textures.length;Kt++){const ie=Bt.get(R.textures[Kt]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Kt,ie.__webglTexture,it,Nt)}}else if(R!==null&&it!==0){const Nt=Bt.get(R.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Nt.__webglTexture,it)}D=-1},this.readRenderTargetPixels=function(R,k,it,at,W,vt,Ut,Gt=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=Bt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ut!==void 0&&(Nt=Nt[Ut]),Nt){jt.bindFramebuffer(I.FRAMEBUFFER,Nt);try{const Kt=R.textures[Gt],ie=Kt.format,Qt=Kt.type;if(!ye.textureFormatReadable(ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ye.textureTypeReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=R.width-at&&it>=0&&it<=R.height-W&&(R.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Gt),I.readPixels(k,it,at,W,Pt.convert(ie),Pt.convert(Qt),vt))}finally{const Kt=j!==null?Bt.get(j).__webglFramebuffer:null;jt.bindFramebuffer(I.FRAMEBUFFER,Kt)}}},this.readRenderTargetPixelsAsync=async function(R,k,it,at,W,vt,Ut,Gt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=Bt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ut!==void 0&&(Nt=Nt[Ut]),Nt)if(k>=0&&k<=R.width-at&&it>=0&&it<=R.height-W){jt.bindFramebuffer(I.FRAMEBUFFER,Nt);const Kt=R.textures[Gt],ie=Kt.format,Qt=Kt.type;if(!ye.textureFormatReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ye.textureTypeReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const he=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,he),I.bufferData(I.PIXEL_PACK_BUFFER,vt.byteLength,I.STREAM_READ),R.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Gt),I.readPixels(k,it,at,W,Pt.convert(ie),Pt.convert(Qt),0);const De=j!==null?Bt.get(j).__webglFramebuffer:null;jt.bindFramebuffer(I.FRAMEBUFFER,De);const Ge=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Jy(I,Ge,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,he),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,vt),I.deleteBuffer(he),I.deleteSync(Ge),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,k=null,it=0){const at=Math.pow(2,-it),W=Math.floor(R.image.width*at),vt=Math.floor(R.image.height*at),Ut=k!==null?k.x:0,Gt=k!==null?k.y:0;se.setTexture2D(R,0),I.copyTexSubImage2D(I.TEXTURE_2D,it,0,0,Ut,Gt,W,vt),jt.unbindTexture()};const tl=I.createFramebuffer(),Ka=I.createFramebuffer();this.copyTextureToTexture=function(R,k,it=null,at=null,W=0,vt=null){vt===null&&(W!==0?(Rs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),vt=W,W=0):vt=0);let Ut,Gt,Nt,Kt,ie,Qt,he,De,Ge;const Ue=R.isCompressedTexture?R.mipmaps[vt]:R.image;if(it!==null)Ut=it.max.x-it.min.x,Gt=it.max.y-it.min.y,Nt=it.isBox3?it.max.z-it.min.z:1,Kt=it.min.x,ie=it.min.y,Qt=it.isBox3?it.min.z:0;else{const Ln=Math.pow(2,-W);Ut=Math.floor(Ue.width*Ln),Gt=Math.floor(Ue.height*Ln),R.isDataArrayTexture?Nt=Ue.depth:R.isData3DTexture?Nt=Math.floor(Ue.depth*Ln):Nt=1,Kt=0,ie=0,Qt=0}at!==null?(he=at.x,De=at.y,Ge=at.z):(he=0,De=0,Ge=0);const pe=Pt.convert(k.format),Vt=Pt.convert(k.type);let ke;k.isData3DTexture?(se.setTexture3D(k,0),ke=I.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(se.setTexture2DArray(k,0),ke=I.TEXTURE_2D_ARRAY):(se.setTexture2D(k,0),ke=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,k.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,k.unpackAlignment);const be=I.getParameter(I.UNPACK_ROW_LENGTH),yn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Fi=I.getParameter(I.UNPACK_SKIP_PIXELS),_n=I.getParameter(I.UNPACK_SKIP_ROWS),Qa=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Ue.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ue.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Kt),I.pixelStorei(I.UNPACK_SKIP_ROWS,ie),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Qt);const ve=R.isDataArrayTexture||R.isData3DTexture,An=k.isDataArrayTexture||k.isData3DTexture;if(R.isDepthTexture){const Ln=Bt.get(R),dn=Bt.get(k),tn=Bt.get(Ln.__renderTarget),Lr=Bt.get(dn.__renderTarget);jt.bindFramebuffer(I.READ_FRAMEBUFFER,tn.__webglFramebuffer),jt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Lr.__webglFramebuffer);for(let Ri=0;Ri<Nt;Ri++)ve&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Bt.get(R).__webglTexture,W,Qt+Ri),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Bt.get(k).__webglTexture,vt,Ge+Ri)),I.blitFramebuffer(Kt,ie,Ut,Gt,he,De,Ut,Gt,I.DEPTH_BUFFER_BIT,I.NEAREST);jt.bindFramebuffer(I.READ_FRAMEBUFFER,null),jt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(W!==0||R.isRenderTargetTexture||Bt.has(R)){const Ln=Bt.get(R),dn=Bt.get(k);jt.bindFramebuffer(I.READ_FRAMEBUFFER,tl),jt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Ka);for(let tn=0;tn<Nt;tn++)ve?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ln.__webglTexture,W,Qt+tn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ln.__webglTexture,W),An?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,dn.__webglTexture,vt,Ge+tn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,dn.__webglTexture,vt),W!==0?I.blitFramebuffer(Kt,ie,Ut,Gt,he,De,Ut,Gt,I.COLOR_BUFFER_BIT,I.NEAREST):An?I.copyTexSubImage3D(ke,vt,he,De,Ge+tn,Kt,ie,Ut,Gt):I.copyTexSubImage2D(ke,vt,he,De,Kt,ie,Ut,Gt);jt.bindFramebuffer(I.READ_FRAMEBUFFER,null),jt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else An?R.isDataTexture||R.isData3DTexture?I.texSubImage3D(ke,vt,he,De,Ge,Ut,Gt,Nt,pe,Vt,Ue.data):k.isCompressedArrayTexture?I.compressedTexSubImage3D(ke,vt,he,De,Ge,Ut,Gt,Nt,pe,Ue.data):I.texSubImage3D(ke,vt,he,De,Ge,Ut,Gt,Nt,pe,Vt,Ue):R.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,vt,he,De,Ut,Gt,pe,Vt,Ue.data):R.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,vt,he,De,Ue.width,Ue.height,pe,Ue.data):I.texSubImage2D(I.TEXTURE_2D,vt,he,De,Ut,Gt,pe,Vt,Ue);I.pixelStorei(I.UNPACK_ROW_LENGTH,be),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,yn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Fi),I.pixelStorei(I.UNPACK_SKIP_ROWS,_n),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Qa),vt===0&&k.generateMipmaps&&I.generateMipmap(ke),jt.unbindTexture()},this.copyTextureToTexture3D=function(R,k,it=null,at=null,W=0){return Rs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,k,it,at,W)},this.initRenderTarget=function(R){Bt.get(R).__webglFramebuffer===void 0&&se.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?se.setTextureCube(R,0):R.isData3DTexture?se.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?se.setTexture2DArray(R,0):se.setTexture2D(R,0),jt.unbindTexture()},this.resetState=function(){X=0,B=0,j=null,jt.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ce._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ce._getUnpackColorSpace()}}function W1(s){const t=new EM;t.background=new Le("#ffffff");const i=new N0(-5,5,3,-3,.1,100);i.position.set(0,0,10);const r=new k1({antialias:!0,alpha:!0});r.setPixelRatio(Math.min(window.devicePixelRatio,2)),r.setSize(s.clientWidth,s.clientHeight),s.appendChild(r.domElement);const l=new pi;t.add(l);const c=q1(),f=Y1(),d=Z1(),m=j1(),p=K1();l.add(c,d,m,f),p.forEach(v=>l.add(v.natural,v.plantation));let g={scenario:{id:"main",name:"Main scenario",description:"",freshwaterLoss:.72,waterStress:.68,plantationExpansion:.74},progress:0};const _={precipitation:c,water:f,groundwater:d,trees:p},S=v=>{g=v.detail,Wv(_,g,0)};window.addEventListener("scenario-change",S);const y=new ResizeObserver(()=>{const v=Math.max(s.clientWidth,1),z=Math.max(s.clientHeight,1),U=v/z,C=5.35;i.left=-C,i.right=C,i.top=C/U,i.bottom=-C/U,i.updateProjectionMatrix(),r.setSize(v,z)});y.observe(s);let E=0,A=0;const M=()=>{E+=.012,c.children.forEach((v,z)=>{v.position.y-=.018+z%5*.002,v.position.y<-.32&&(v.position.y=3.25+z%7*.06)}),Wv(_,g,E),r.render(t,i),A=requestAnimationFrame(M)};return M(),{destroy(){cancelAnimationFrame(A),window.removeEventListener("scenario-change",S),y.disconnect(),r.dispose(),s.replaceChildren()}}}function q1(){const s=new pi,t=new y0({color:"#78aeca",transparent:!0,opacity:.42});for(let i=0;i<54;i+=1){const r=-4.7+i%18*.55,l=.2+Math.floor(i/18)*.85+i%4*.08,c=new bi().setFromPoints([new K(0,0,0),new K(-.08,-.32,0)]),f=new M0(c,t);f.position.set(r,l,.4),s.add(f)}return s}function Y1(){const s=new pi;return[{x:-3.25,y:-.88,width:2.7,height:.34,salt:1},{x:-.72,y:-.9,width:3.2,height:.4,salt:4},{x:2.25,y:-.87,width:2.5,height:.32,salt:8},{x:4.1,y:-.93,width:1.3,height:.22,salt:12}].forEach((i,r)=>{const l=H0({...i,color:r===1?"#5da9cc":"#6aaed0",opacity:.86,z:.12});l.userData.fadeDelay=r*.09,s.add(l)}),s}function Z1(){const s=new pi;return[{x:-2.7,y:-2.2,width:3.5,height:.34,salt:18},{x:.55,y:-2.14,width:4.1,height:.38,salt:24},{x:3.72,y:-2.23,width:1.9,height:.26,salt:31}].forEach((i,r)=>{const l=H0({...i,color:"#b9dce8",opacity:.72,z:.08});l.userData.fadeDelay=r*.07,s.add(l)}),s}function H0({x:s,y:t,width:i,height:r,salt:l,color:c,opacity:f,z:d}){const m=new pi,p=new C0,g=-i/2,_=i/2,S=r/2,y=-r/2,E=(hn(l,2)-.5)*r*.32,A=(hn(l,5)-.5)*r*.32,M=(hn(l,7)-.5)*r*.28,v=(hn(l,9)-.5)*r*.28;p.moveTo(g+i*.12,y+E),p.bezierCurveTo(g+i*.28,y-r*.16+A,_-i*.3,y-r*.12+M,_-i*.1,y+v),p.bezierCurveTo(_+i*.06,y+r*.18,_+i*.04,S-r*.12,_-i*.12,S+A),p.bezierCurveTo(_-i*.34,S+r*.12+E,g+i*.32,S+r*.14+v,g+i*.1,S+M),p.bezierCurveTo(g-i*.05,S-r*.14,g-i*.04,y+r*.16,g+i*.12,y+E);const z=new ni({color:c,transparent:!0,opacity:f}),U=new Ke(new Zd(p,24),z);U.position.set(0,0,d),m.add(U);const C=new ni({color:"#f6fbfd",transparent:!0,opacity:.52}),G=new Ke(new zi(i*.42,Math.max(r*.08,.018)),C);return G.position.set(-i*.12,r*.15,d+.04),m.add(G),m.position.set(s,t,0),m.userData.baseOpacity=f,m.userData.baseScale=1,m.userData.baseY=t,m}function j1(){const s=new pi,t=new Ke(new zi(12.4,2.55),new ni({color:"#f3efe7"}));t.position.set(0,-2.08,0),s.add(t);const i=new Ke(new zi(12.4,.06),new ni({color:"#d7c9b5"}));i.position.set(0,-.83,.18),s.add(i);const r=40;for(let l=0;l<r;l+=1){const c=.48+hn(l,67)*.36,f=-5.35+l/(r-1)*10.7+(hn(l,71)-.5)*.16,d=-1.18-hn(l,73)*.72,m=new Ke(new zi(.018,c),new ni({color:"#9d7652",transparent:!0,opacity:.32}));m.rotation.z=-.42+hn(l,79)*.84,m.position.set(f,d,.2),s.add(m)}return s}function K1(){const s=[];for(let t=0;t<13;t+=1){const i=-4.3+t*.72+(hn(t,3)-.5)*.18,r=.82+hn(t,11)*.82,l=Q1(i+Math.sin(t)*.12,r,t),c=J1(i,1.04);c.visible=!1,s.push({natural:l,plantation:c,baseY:-.82,phase:t%5/5})}return s}function Q1(s,t,i){const r=new pi,l=["#8c6a4b","#6d4a32","#9a5f32","#744126","#5f4936"],c=["#3f765d","#4f8b63","#6c9a5b","#7fa36a","#5d8f52","#7b6d2e","#8a5a24","#9b6b22","#a8742a","#6a4e24"],f=.075+hn(i,17)*.07,d=.74+hn(i,23)*.42,m=.72+hn(i,29)*.46,p=.72+hn(i,31)*.38,g=(hn(i,37)-.5)*.12,_=.14+hn(i,41)*.16,S=new Ke(new zi(f,t),new ni({color:l[i%l.length]}));S.position.set(0,t/2-.02,.28),r.add(S);const y=new ni({color:c[Math.floor(hn(i,43)*c.length)],transparent:!0,opacity:.95}),E=new ni({color:c[Math.floor(hn(i,47)*c.length)],transparent:!0,opacity:.95}),A=new ni({color:c[Math.floor(hn(i,53)*c.length)],transparent:!0,opacity:.95}),M=new Ke(new qa(.44*d,24),y),v=new Ke(new qa(.38*m,24),E),z=new Ke(new qa(.34*p,24),A);return M.position.set(-_,t+.1+g,.32),v.position.set(_*.78,t+.22+g,.32),z.position.set((hn(i,59)-.5)*.18,t-.08+g,.32),r.add(M,v,z),r.position.set(s,-.82,0),r}function J1(s,t){const i=new pi,r=new Ke(new zi(.09,t),new ni({color:"#8d6b4e"}));r.position.set(0,t/2,.3),i.add(r);const l=new ni({color:"#3f7655",transparent:!0,opacity:.95}),c=new Ke(new qa(.32,24),l),f=new Ke(new qa(.3,24),l),d=new Ke(new qa(.26,24),l);return c.position.set(-.12,t+.1,.34),f.position.set(.12,t+.1,.34),d.position.set(0,t+.32,.34),i.add(c,f,d),i.position.set(s,-.82,0),i}function Wv(s,t,i){const r=qv(t.progress),l=t.scenario.freshwaterLoss*r,c=t.scenario.waterStress*r,f=Math.max(.22,1-l*.68-r*.1),d=Math.max(.32,1-c*.48-r*.08);Yv(s.water,f,i,.22),Yv(s.groundwater,d,i,.32),s.precipitation.children.forEach((m,p)=>{m.position.x+=Math.sin(i+p)*.0018}),kc(s.precipitation,.55-r*.2),s.trees.forEach(m=>{const p=Math.max(0,Math.min((r-m.phase*.18)/.82,1)),g=qv(p);m.natural.visible=g<.98,m.plantation.visible=g>.02,m.natural.scale.setScalar(1-g*.34),m.plantation.scale.setScalar(.72+g*.28),m.natural.position.y=m.baseY-g*.12,m.plantation.position.y=m.baseY+(1-g)*.12,kc(m.natural,1-g),kc(m.plantation,g)})}function kc(s,t){s.traverse(i=>{if(i instanceof Ke||i instanceof M0){const r=i.material;Array.isArray(r)?r.forEach(l=>{l.transparent=!0,l.opacity=t}):(r.transparent=!0,r.opacity=t)}})}function qv(s){return s*s*(3-2*s)}function Yv(s,t,i,r){s.children.forEach((l,c)=>{const f=l.userData.fadeDelay??0,d=Math.max(r,t-f),m=1+Math.sin(i*.7+c)*.012,p=d*m;l.scale.set(p,p,1),l.position.y=(l.userData.baseY??l.position.y)+Math.sin(i*.5+c*1.7)*.006,kc(l,Math.max(.18,(l.userData.baseOpacity??.8)*d))})}function hn(s,t){const i=Math.sin(s*91.7+t*37.3)*1e4;return i-Math.floor(i)}function $1({scenario:s,progress:t}){const i=Dn.useRef(null);return Dn.useEffect(()=>{if(!i.current)return;const r=W1(i.current);return()=>r.destroy()},[]),Dn.useEffect(()=>{const r=new CustomEvent("scenario-change",{detail:{scenario:s,progress:t}});window.dispatchEvent(r)},[s,t]),Xt.jsx("div",{ref:i,className:"scenario-scene","aria-label":"Interactive scenario visualisation",role:"img"})}function tR(){const[s,t]=Dn.useState(0),i=oy[0];return Xt.jsxs("section",{className:"section visualisation-section",id:"visualisation",children:[Xt.jsxs("div",{className:"section-heading",children:[Xt.jsx("h2",{children:"Forest transition and freshwater response"}),Xt.jsx("p",{children:"Move the slider to explore changes in water yield as natural forest is progressively converted to plantation forest."})]}),Xt.jsxs("div",{className:"scroll-visualisation",children:[Xt.jsx("div",{className:"visualisation-layout",children:Xt.jsx("div",{className:"scene-shell",children:Xt.jsx($1,{scenario:i,progress:s})})}),Xt.jsxs("div",{className:"visualisation-scrubber",children:[Xt.jsxs("div",{className:"scrubber-labels","aria-hidden":"true",children:[Xt.jsx("span",{children:"Natural forest"}),Xt.jsx("span",{children:"Plantation forest"})]}),Xt.jsx("input",{"aria-label":"Landscape transition",className:"transition-scrubber",max:"100",min:"0",type:"range",value:Math.round(s*100),onChange:r=>t(Number(r.target.value)/100)})]})]})]})}function eR(){return Xt.jsx("section",{className:"opening-view",id:"top",children:Xt.jsx("div",{className:"content-grid",children:Xt.jsxs("div",{className:"opening-copy",children:[Xt.jsx("h1",{children:G_.title}),Xt.jsxs("p",{className:"lead",children:["This study explores how large-scale transitions to timber cities may affect global freshwater resources. We combine spatially explicit forest transitions, climate projections and water-yield data to quantify future changes in freshwater availability across alternative timber adoption scenarios. Explore our"," ",Xt.jsx("a",{href:"#visualisation",children:"interactive visualisations"})," and"," ",Xt.jsx("a",{href:"#animations",children:"global land use change analysis"}),"!"]}),Xt.jsx("p",{className:"authors",children:G_.authors})]})})})}const nR=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),iR=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,i,r)=>r?r.toUpperCase():i.toLowerCase()),Zv=s=>{const t=iR(s);return t.charAt(0).toUpperCase()+t.slice(1)},G0=(...s)=>s.filter((t,i,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===i).join(" ").trim(),aR=s=>{for(const t in s)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};var rR={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const sR=Dn.forwardRef(({color:s="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:r,className:l="",children:c,iconNode:f,...d},m)=>Dn.createElement("svg",{ref:m,...rR,width:t,height:t,stroke:s,strokeWidth:r?Number(i)*24/Number(t):i,className:G0("lucide",l),...!c&&!aR(d)&&{"aria-hidden":"true"},...d},[...f.map(([p,g])=>Dn.createElement(p,g)),...Array.isArray(c)?c:[c]]));const Kd=(s,t)=>{const i=Dn.forwardRef(({className:r,...l},c)=>Dn.createElement(sR,{ref:c,iconNode:t,className:G0(`lucide-${nR(Zv(s))}`,`lucide-${s}`,r),...l}));return i.displayName=Zv(s),i};const oR=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]],lR=Kd("maximize-2",oR);const cR=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],uR=Kd("pause",cR);const fR=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],hR=Kd("play",fR);function dR(){const[s,t]=Dn.useState(fc[0]?.id??""),i=fc.find(f=>f.id===s)??fc[0],r=i?.videos??[],l=r.find(f=>f.id==="forest-precipitation-volumes"),c=r.filter(f=>f.id!=="forest-precipitation-volumes");return Xt.jsxs("section",{className:"section",id:"animations",children:[Xt.jsx("div",{className:"section-heading",children:Xt.jsx("h2",{children:"Global analyses"})}),Xt.jsx("div",{className:"scenario-tabs","aria-label":"Select animation scenario",children:fc.map(f=>Xt.jsx("button",{className:f.id===i?.id?"active":"",type:"button",onClick:()=>t(f.id),children:f.name},f.id))}),i?Xt.jsxs("div",{className:"scenario-summary",children:[Xt.jsx("h3",{children:i.title}),Xt.jsx("p",{children:i.summary})]}):null,Xt.jsxs("div",{className:"main-video-layout",children:[c.map((f,d)=>Xt.jsx(jv,{className:`single-map-video single-map-video-${d+1}`,item:f},`${i?.id}-${f.id}`)),l?Xt.jsx(jv,{className:"multi-map-video",item:l},`${i?.id}-${l.id}`):null]}),r.length===0?Xt.jsx("p",{className:"empty-video-note",children:"Scenario videos will appear here."}):null]})}function jv({className:s="",item:t}){const i=Dn.useRef(null),r=Dn.useRef(null),[l,c]=Dn.useState(0),[f,d]=Dn.useState(!1),[m,p]=Dn.useState(0),g=l>0?m/l*1e3:0,_=async()=>{const E=r.current;E&&(E.paused?await E.play():E.pause())},S=E=>{const A=r.current;if(!A||l===0)return;const M=E/1e3*l;A.currentTime=M,p(M)},y=async()=>{if(document.fullscreenElement){await document.exitFullscreen();return}i.current?.requestFullscreen&&await i.current.requestFullscreen()};return Xt.jsxs("figure",{ref:i,className:`video-figure ${s}`.trim(),children:[Xt.jsx("h3",{className:"video-title",children:t.title}),Xt.jsxs("video",{ref:r,playsInline:!0,preload:"metadata",poster:t.poster,onClick:_,onDurationChange:E=>c(E.currentTarget.duration||0),onEnded:()=>d(!1),onPause:()=>d(!1),onPlay:()=>d(!0),onTimeUpdate:E=>p(E.currentTarget.currentTime),children:[Xt.jsx("source",{src:t.src,type:"video/mp4"}),"Your browser does not support the video element."]}),Xt.jsxs("div",{className:"video-controls","aria-label":`${t.title} controls`,children:[Xt.jsx("button",{"aria-label":f?"Pause video":"Play video",className:"video-icon-button",type:"button",onClick:_,children:f?Xt.jsx(uR,{size:17}):Xt.jsx(hR,{size:17})}),Xt.jsx("input",{"aria-label":"Video progress",className:"video-progress",max:"1000",min:"0",step:"1",type:"range",value:g,onChange:E=>S(Number(E.target.value))}),Xt.jsxs("span",{className:"video-time",children:[Kv(m)," / ",Kv(l)]}),Xt.jsx("button",{"aria-label":"Toggle fullscreen",className:"video-icon-button",type:"button",onClick:y,children:Xt.jsx(lR,{size:17})})]})]})}function Kv(s){if(!Number.isFinite(s)||s<=0)return"0:00";const t=Math.floor(s/60),i=Math.floor(s%60).toString().padStart(2,"0");return`${t}:${i}`}function pR(){return Xt.jsxs(Xt.Fragment,{children:[Xt.jsx(sy,{}),Xt.jsxs("main",{children:[Xt.jsx(eR,{}),Xt.jsx(tR,{}),Xt.jsx(dR,{})]}),Xt.jsx(ry,{})]})}ay.createRoot(document.getElementById("root")).render(Xt.jsx(KS.StrictMode,{children:Xt.jsx(pR,{})}));
