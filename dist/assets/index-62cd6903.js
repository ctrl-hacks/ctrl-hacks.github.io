(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const va="153",Ri={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ci={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Oh=0,Ja=1,Fh=2,Xc=1,Bh=2,Rn=3,jn=0,Pe=1,Ln=2,qn=0,$i=1,$a=2,Qa=3,tl=4,zh=5,Yi=100,Gh=101,kh=102,el=103,nl=104,Hh=200,Vh=201,Wh=202,Xh=203,qc=204,Yc=205,qh=206,Yh=207,Zh=208,Kh=209,jh=210,Jh=0,$h=1,Qh=2,Xo=3,tf=4,ef=5,nf=6,rf=7,Zc=0,sf=1,of=2,In=0,af=1,lf=2,cf=3,uf=4,hf=5,Kc=300,rr=301,sr=302,qo=303,Yo=304,Hs=306,Zo=1e3,an=1001,Ko=1002,we=1003,il=1004,to=1005,Ze=1006,ff=1007,Dr=1008,Yn=1009,df=1010,pf=1011,xa=1012,jc=1013,kn=1014,Hn=1015,Ur=1016,Jc=1017,$c=1018,mi=1020,mf=1021,ln=1023,_f=1024,gf=1025,_i=1026,or=1027,vf=1028,Qc=1029,xf=1030,tu=1031,eu=1033,eo=33776,no=33777,io=33778,ro=33779,rl=35840,sl=35841,ol=35842,al=35843,Mf=36196,ll=37492,cl=37496,ul=37808,hl=37809,fl=37810,dl=37811,pl=37812,ml=37813,_l=37814,gl=37815,vl=37816,xl=37817,Ml=37818,Sl=37819,yl=37820,El=37821,so=36492,Sf=36283,Tl=36284,bl=36285,Al=36286,nu=3e3,gi=3001,yf=3200,Ef=3201,Tf=0,bf=1,vi="",Ot="srgb",gn="srgb-linear",iu="display-p3",oo=7680,Af=519,wf=512,Rf=513,Cf=514,Pf=515,Lf=516,Df=517,Uf=518,If=519,wl=35044,Rl="300 es",jo=1035,Dn=2e3,Ds=2001;class Ai{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const xe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],As=Math.PI/180,Jo=180/Math.PI;function mr(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xe[r&255]+xe[r>>8&255]+xe[r>>16&255]+xe[r>>24&255]+"-"+xe[t&255]+xe[t>>8&255]+"-"+xe[t>>16&15|64]+xe[t>>24&255]+"-"+xe[e&63|128]+xe[e>>8&255]+"-"+xe[e>>16&255]+xe[e>>24&255]+xe[n&255]+xe[n>>8&255]+xe[n>>16&255]+xe[n>>24&255]).toLowerCase()}function _e(r,t,e){return Math.max(t,Math.min(e,r))}function Nf(r,t){return(r%t+t)%t}function ao(r,t,e){return(1-e)*r+e*t}function Cl(r){return(r&r-1)===0&&r!==0}function $o(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Kr(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Fe(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class ct{constructor(t=0,e=0){ct.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(_e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Bt{constructor(t,e,n,i,s,o,a,l,c){Bt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],p=n[5],g=n[8],_=i[0],m=i[3],d=i[6],S=i[1],v=i[4],M=i[7],y=i[2],T=i[5],w=i[8];return s[0]=o*_+a*S+l*y,s[3]=o*m+a*v+l*T,s[6]=o*d+a*M+l*w,s[1]=c*_+u*S+h*y,s[4]=c*m+u*v+h*T,s[7]=c*d+u*M+h*w,s[2]=f*_+p*S+g*y,s[5]=f*m+p*v+g*T,s[8]=f*d+p*M+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,f=a*l-u*s,p=c*s-o*l,g=e*h+n*f+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(i*c-u*n)*_,t[2]=(a*n-i*o)*_,t[3]=f*_,t[4]=(u*e-i*l)*_,t[5]=(i*s-a*e)*_,t[6]=p*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(lo.makeScale(t,e)),this}rotate(t){return this.premultiply(lo.makeRotation(-t)),this}translate(t,e){return this.premultiply(lo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const lo=new Bt;function ru(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Us(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}const Pl={};function Ar(r){r in Pl||(Pl[r]=!0,console.warn(r))}function Qi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function co(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Of=new Bt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Ff=new Bt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Bf(r){return r.convertSRGBToLinear().applyMatrix3(Ff)}function zf(r){return r.applyMatrix3(Of).convertLinearToSRGB()}const Gf={[gn]:r=>r,[Ot]:r=>r.convertSRGBToLinear(),[iu]:Bf},kf={[gn]:r=>r,[Ot]:r=>r.convertLinearToSRGB(),[iu]:zf},nn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return gn},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;const n=Gf[t],i=kf[e];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${t}" to "${e}".`);return i(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this.workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this.workingColorSpace)}};let Pi;class su{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Pi===void 0&&(Pi=Us("canvas")),Pi.width=t.width,Pi.height=t.height;const n=Pi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Pi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Us("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Qi(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Qi(e[n]/255)*255):e[n]=Qi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Hf=0;class ou{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=mr(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(uo(i[o].image)):s.push(uo(i[o]))}else s=uo(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function uo(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?su.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Vf=0;class He extends Ai{constructor(t=He.DEFAULT_IMAGE,e=He.DEFAULT_MAPPING,n=an,i=an,s=Ze,o=Dr,a=ln,l=Yn,c=He.DEFAULT_ANISOTROPY,u=vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=mr(),this.name="",this.source=new ou(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Ar("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===gi?Ot:vi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Kc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Zo:t.x=t.x-Math.floor(t.x);break;case an:t.x=t.x<0?0:1;break;case Ko:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Zo:t.y=t.y-Math.floor(t.y);break;case an:t.y=t.y<0?0:1;break;case Ko:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ar("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ot?gi:nu}set encoding(t){Ar("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===gi?Ot:vi}}He.DEFAULT_IMAGE=null;He.DEFAULT_MAPPING=Kc;He.DEFAULT_ANISOTROPY=1;class ve{constructor(t=0,e=0,n=0,i=1){ve.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],g=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,M=(p+1)/2,y=(d+1)/2,T=(u+f)/4,w=(h+_)/4,C=(g+m)/4;return v>M&&v>y?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=T/n,s=w/n):M>y?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=T/i,s=C/i):y<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(y),n=w/s,i=C/s),this.set(n,i,s,e),this}let S=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(h-_)/S,this.z=(f-u)/S,this.w=Math.acos((c+p+d-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yi extends Ai{constructor(t=1,e=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&(Ar("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===gi?Ot:vi),this.texture=new He(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ze,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new ou(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class au extends He{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=we,this.minFilter=we,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wf extends He{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=we,this.minFilter=we,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ei{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=s[o+0],p=s[o+1],g=s[o+2],_=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(h!==_||l!==f||c!==p||u!==g){let m=1-a;const d=l*f+c*p+u*g+h*_,S=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){const y=Math.sqrt(v),T=Math.atan2(y,d*S);m=Math.sin(m*T)/y,a=Math.sin(a*T)/y}const M=a*S;if(l=l*m+f*M,c=c*m+p*M,u=u*m+g*M,h=h*m+_*M,m===1-a){const y=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=y,c*=y,u*=y,h*=y}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],f=s[o+1],p=s[o+2],g=s[o+3];return t[e]=a*g+u*h+l*p-c*f,t[e+1]=l*g+u*f+c*h-a*p,t[e+2]=c*g+u*p+a*f-l*h,t[e+3]=u*g-a*h-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),f=l(n/2),p=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"YZX":this._x=f*u*h+c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h-f*p*g;break;case"XZY":this._x=f*u*h-c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=n+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-i)*p}else if(n>a&&n>h){const p=2*Math.sqrt(1+n-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(s+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-n-h);this._w=(s-c)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-a);this._w=(o-i)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(_e(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*s+e*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,n=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ll.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ll.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=l*e+o*i-a*n,u=l*n+a*e-s*i,h=l*i+s*n-o*e,f=-s*e-o*n-a*i;return this.x=c*l+f*-s+u*-a-h*-o,this.y=u*l+f*-o+h*-s-c*-a,this.z=h*l+f*-a+c*-o-u*-s,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ho.copy(this).projectOnVector(t),this.sub(ho)}reflect(t){return this.sub(ho.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(_e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ho=new U,Ll=new Ei;class Vr{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(yn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(yn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=yn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){if(t.updateWorldMatrix(!1,!1),t.boundingBox!==void 0)t.boundingBox===null&&t.computeBoundingBox(),Li.copy(t.boundingBox),Li.applyMatrix4(t.matrixWorld),this.union(Li);else{const i=t.geometry;if(i!==void 0)if(e&&i.attributes!==void 0&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)yn.fromBufferAttribute(s,o).applyMatrix4(t.matrixWorld),this.expandByPoint(yn)}else i.boundingBox===null&&i.computeBoundingBox(),Li.copy(i.boundingBox),Li.applyMatrix4(t.matrixWorld),this.union(Li)}const n=t.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,yn),yn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(vr),jr.subVectors(this.max,vr),Di.subVectors(t.a,vr),Ui.subVectors(t.b,vr),Ii.subVectors(t.c,vr),Fn.subVectors(Ui,Di),Bn.subVectors(Ii,Ui),ri.subVectors(Di,Ii);let e=[0,-Fn.z,Fn.y,0,-Bn.z,Bn.y,0,-ri.z,ri.y,Fn.z,0,-Fn.x,Bn.z,0,-Bn.x,ri.z,0,-ri.x,-Fn.y,Fn.x,0,-Bn.y,Bn.x,0,-ri.y,ri.x,0];return!fo(e,Di,Ui,Ii,jr)||(e=[1,0,0,0,1,0,0,0,1],!fo(e,Di,Ui,Ii,jr))?!1:(Jr.crossVectors(Fn,Bn),e=[Jr.x,Jr.y,Jr.z],fo(e,Di,Ui,Ii,jr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Sn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Sn=[new U,new U,new U,new U,new U,new U,new U,new U],yn=new U,Li=new Vr,Di=new U,Ui=new U,Ii=new U,Fn=new U,Bn=new U,ri=new U,vr=new U,jr=new U,Jr=new U,si=new U;function fo(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){si.fromArray(r,s);const a=i.x*Math.abs(si.x)+i.y*Math.abs(si.y)+i.z*Math.abs(si.z),l=t.dot(si),c=e.dot(si),u=n.dot(si);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Xf=new Vr,xr=new U,po=new U;class Vs{constructor(t=new U,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Xf.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;xr.subVectors(t,this.center);const e=xr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(xr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(po.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(xr.copy(t.center).add(po)),this.expandByPoint(xr.copy(t.center).sub(po))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const En=new U,mo=new U,$r=new U,zn=new U,_o=new U,Qr=new U,go=new U;class lu{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,En)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=En.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(En.copy(this.origin).addScaledVector(this.direction,e),En.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){mo.copy(t).add(e).multiplyScalar(.5),$r.copy(e).sub(t).normalize(),zn.copy(this.origin).sub(mo);const s=t.distanceTo(e)*.5,o=-this.direction.dot($r),a=zn.dot(this.direction),l=-zn.dot($r),c=zn.lengthSq(),u=Math.abs(1-o*o);let h,f,p,g;if(u>0)if(h=o*l-a,f=o*a-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(mo).addScaledVector($r,f),p}intersectSphere(t,e){En.subVectors(t.center,this.origin);const n=En.dot(this.direction),i=En.dot(En)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),u>=0?(s=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,En)!==null}intersectTriangle(t,e,n,i,s){_o.subVectors(e,t),Qr.subVectors(n,t),go.crossVectors(_o,Qr);let o=this.direction.dot(go),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;zn.subVectors(this.origin,t);const l=a*this.direction.dot(Qr.crossVectors(zn,Qr));if(l<0)return null;const c=a*this.direction.dot(_o.cross(zn));if(c<0||l+c>o)return null;const u=-a*zn.dot(go);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ue{constructor(t,e,n,i,s,o,a,l,c,u,h,f,p,g,_,m){ue.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,u,h,f,p,g,_,m)}set(t,e,n,i,s,o,a,l,c,u,h,f,p,g,_,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=i,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ue().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Ni.setFromMatrixColumn(t,0).length(),s=1/Ni.setFromMatrixColumn(t,1).length(),o=1/Ni.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const f=o*u,p=o*h,g=a*u,_=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=p+g*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*u,p=l*h,g=c*u,_=c*h;e[0]=f+_*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=p*a-g,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*u,p=l*h,g=c*u,_=c*h;e[0]=f-_*a,e[4]=-o*h,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*u,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*u,p=o*h,g=a*u,_=a*h;e[0]=l*u,e[4]=g*c-p,e[8]=f*c+_,e[1]=l*h,e[5]=_*c+f,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=_-f*h,e[8]=g*h+p,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=p*h+g,e[10]=f-_*h}else if(t.order==="XZY"){const f=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+_,e[5]=o*u,e[9]=p*h-g,e[2]=g*h-p,e[6]=a*u,e[10]=_*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(qf,t,Yf)}lookAt(t,e,n){const i=this.elements;return Be.subVectors(t,e),Be.lengthSq()===0&&(Be.z=1),Be.normalize(),Gn.crossVectors(n,Be),Gn.lengthSq()===0&&(Math.abs(n.z)===1?Be.x+=1e-4:Be.z+=1e-4,Be.normalize(),Gn.crossVectors(n,Be)),Gn.normalize(),ts.crossVectors(Be,Gn),i[0]=Gn.x,i[4]=ts.x,i[8]=Be.x,i[1]=Gn.y,i[5]=ts.y,i[9]=Be.y,i[2]=Gn.z,i[6]=ts.z,i[10]=Be.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],p=n[13],g=n[2],_=n[6],m=n[10],d=n[14],S=n[3],v=n[7],M=n[11],y=n[15],T=i[0],w=i[4],C=i[8],x=i[12],b=i[1],B=i[5],j=i[9],I=i[13],F=i[2],z=i[6],q=i[10],k=i[14],W=i[3],et=i[7],J=i[11],dt=i[15];return s[0]=o*T+a*b+l*F+c*W,s[4]=o*w+a*B+l*z+c*et,s[8]=o*C+a*j+l*q+c*J,s[12]=o*x+a*I+l*k+c*dt,s[1]=u*T+h*b+f*F+p*W,s[5]=u*w+h*B+f*z+p*et,s[9]=u*C+h*j+f*q+p*J,s[13]=u*x+h*I+f*k+p*dt,s[2]=g*T+_*b+m*F+d*W,s[6]=g*w+_*B+m*z+d*et,s[10]=g*C+_*j+m*q+d*J,s[14]=g*x+_*I+m*k+d*dt,s[3]=S*T+v*b+M*F+y*W,s[7]=S*w+v*B+M*z+y*et,s[11]=S*C+v*j+M*q+y*J,s[15]=S*x+v*I+M*k+y*dt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],p=t[14],g=t[3],_=t[7],m=t[11],d=t[15];return g*(+s*l*h-i*c*h-s*a*f+n*c*f+i*a*p-n*l*p)+_*(+e*l*p-e*c*f+s*o*f-i*o*p+i*c*u-s*l*u)+m*(+e*c*h-e*a*p-s*o*h+n*o*p+s*a*u-n*c*u)+d*(-i*a*u-e*l*h+e*a*f+i*o*h-n*o*f+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],p=t[11],g=t[12],_=t[13],m=t[14],d=t[15],S=h*m*c-_*f*c+_*l*p-a*m*p-h*l*d+a*f*d,v=g*f*c-u*m*c-g*l*p+o*m*p+u*l*d-o*f*d,M=u*_*c-g*h*c+g*a*p-o*_*p-u*a*d+o*h*d,y=g*h*l-u*_*l-g*a*f+o*_*f+u*a*m-o*h*m,T=e*S+n*v+i*M+s*y;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/T;return t[0]=S*w,t[1]=(_*f*s-h*m*s-_*i*p+n*m*p+h*i*d-n*f*d)*w,t[2]=(a*m*s-_*l*s+_*i*c-n*m*c-a*i*d+n*l*d)*w,t[3]=(h*l*s-a*f*s-h*i*c+n*f*c+a*i*p-n*l*p)*w,t[4]=v*w,t[5]=(u*m*s-g*f*s+g*i*p-e*m*p-u*i*d+e*f*d)*w,t[6]=(g*l*s-o*m*s-g*i*c+e*m*c+o*i*d-e*l*d)*w,t[7]=(o*f*s-u*l*s+u*i*c-e*f*c-o*i*p+e*l*p)*w,t[8]=M*w,t[9]=(g*h*s-u*_*s-g*n*p+e*_*p+u*n*d-e*h*d)*w,t[10]=(o*_*s-g*a*s+g*n*c-e*_*c-o*n*d+e*a*d)*w,t[11]=(u*a*s-o*h*s-u*n*c+e*h*c+o*n*p-e*a*p)*w,t[12]=y*w,t[13]=(u*_*i-g*h*i+g*n*f-e*_*f-u*n*m+e*h*m)*w,t[14]=(g*a*i-o*_*i-g*n*l+e*_*l+o*n*m-e*a*m)*w,t[15]=(o*h*i-u*a*i+u*n*l-e*h*l-o*n*f+e*a*f)*w,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,h=a+a,f=s*c,p=s*u,g=s*h,_=o*u,m=o*h,d=a*h,S=l*c,v=l*u,M=l*h,y=n.x,T=n.y,w=n.z;return i[0]=(1-(_+d))*y,i[1]=(p+M)*y,i[2]=(g-v)*y,i[3]=0,i[4]=(p-M)*T,i[5]=(1-(f+d))*T,i[6]=(m+S)*T,i[7]=0,i[8]=(g+v)*w,i[9]=(m-S)*w,i[10]=(1-(f+_))*w,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=Ni.set(i[0],i[1],i[2]).length();const o=Ni.set(i[4],i[5],i[6]).length(),a=Ni.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],rn.copy(this);const c=1/s,u=1/o,h=1/a;return rn.elements[0]*=c,rn.elements[1]*=c,rn.elements[2]*=c,rn.elements[4]*=u,rn.elements[5]*=u,rn.elements[6]*=u,rn.elements[8]*=h,rn.elements[9]*=h,rn.elements[10]*=h,e.setFromRotationMatrix(rn),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=Dn){const l=this.elements,c=2*s/(e-t),u=2*s/(n-i),h=(e+t)/(e-t),f=(n+i)/(n-i);let p,g;if(a===Dn)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Ds)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=Dn){const l=this.elements,c=1/(e-t),u=1/(n-i),h=1/(o-s),f=(e+t)*c,p=(n+i)*u;let g,_;if(a===Dn)g=(o+s)*h,_=-2*h;else if(a===Ds)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ni=new U,rn=new ue,qf=new U(0,0,0),Yf=new U(1,1,1),Gn=new U,ts=new U,Be=new U,Dl=new ue,Ul=new Ei;class Ws{constructor(t=0,e=0,n=0,i=Ws.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(_e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(_e(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-_e(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(_e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-_e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Dl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Dl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ul.setFromEuler(this),this.setFromQuaternion(Ul,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ws.DEFAULT_ORDER="XYZ";class cu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Zf=0;const Il=new U,Oi=new Ei,Tn=new ue,es=new U,Mr=new U,Kf=new U,jf=new Ei,Nl=new U(1,0,0),Ol=new U(0,1,0),Fl=new U(0,0,1),Jf={type:"added"},Bl={type:"removed"};class Le extends Ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zf++}),this.uuid=mr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Le.DEFAULT_UP.clone();const t=new U,e=new Ws,n=new Ei,i=new U(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ue},normalMatrix:{value:new Bt}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=Le.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new cu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Oi.setFromAxisAngle(t,e),this.quaternion.multiply(Oi),this}rotateOnWorldAxis(t,e){return Oi.setFromAxisAngle(t,e),this.quaternion.premultiply(Oi),this}rotateX(t){return this.rotateOnAxis(Nl,t)}rotateY(t){return this.rotateOnAxis(Ol,t)}rotateZ(t){return this.rotateOnAxis(Fl,t)}translateOnAxis(t,e){return Il.copy(t).applyQuaternion(this.quaternion),this.position.add(Il.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Nl,t)}translateY(t){return this.translateOnAxis(Ol,t)}translateZ(t){return this.translateOnAxis(Fl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Tn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?es.copy(t):es.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tn.lookAt(Mr,es,this.up):Tn.lookAt(es,Mr,this.up),this.quaternion.setFromRotationMatrix(Tn),i&&(Tn.extractRotation(i.matrixWorld),Oi.setFromRotationMatrix(Tn),this.quaternion.premultiply(Oi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Jf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Bl)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(Bl)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),Tn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Tn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Tn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectsByProperty(t,e);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,t,Kf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,jf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Le.DEFAULT_UP=new U(0,1,0);Le.DEFAULT_MATRIX_AUTO_UPDATE=!0;Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const sn=new U,bn=new U,vo=new U,An=new U,Fi=new U,Bi=new U,zl=new U,xo=new U,Mo=new U,So=new U;let ns=!1;class Ke{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),sn.subVectors(t,e),i.cross(sn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){sn.subVectors(i,e),bn.subVectors(n,e),vo.subVectors(t,e);const o=sn.dot(sn),a=sn.dot(bn),l=sn.dot(vo),c=bn.dot(bn),u=bn.dot(vo),h=o*c-a*a;if(h===0)return s.set(-2,-1,-1);const f=1/h,p=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-p-g,g,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,An),An.x>=0&&An.y>=0&&An.x+An.y<=1}static getUV(t,e,n,i,s,o,a,l){return ns===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ns=!0),this.getInterpolation(t,e,n,i,s,o,a,l)}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,An),l.setScalar(0),l.addScaledVector(s,An.x),l.addScaledVector(o,An.y),l.addScaledVector(a,An.z),l}static isFrontFacing(t,e,n,i){return sn.subVectors(n,e),bn.subVectors(t,e),sn.cross(bn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return sn.subVectors(this.c,this.b),bn.subVectors(this.a,this.b),sn.cross(bn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ke.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ke.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return ns===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ns=!0),Ke.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}getInterpolation(t,e,n,i,s){return Ke.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return Ke.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ke.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;Fi.subVectors(i,n),Bi.subVectors(s,n),xo.subVectors(t,n);const l=Fi.dot(xo),c=Bi.dot(xo);if(l<=0&&c<=0)return e.copy(n);Mo.subVectors(t,i);const u=Fi.dot(Mo),h=Bi.dot(Mo);if(u>=0&&h<=u)return e.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(Fi,o);So.subVectors(t,s);const p=Fi.dot(So),g=Bi.dot(So);if(g>=0&&p<=g)return e.copy(s);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Bi,a);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return zl.subVectors(s,i),a=(h-u)/(h-u+(p-g)),e.copy(i).addScaledVector(zl,a);const d=1/(m+_+f);return o=_*d,a=f*d,e.copy(n).addScaledVector(Fi,o).addScaledVector(Bi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let $f=0;class Wr extends Ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$f++}),this.uuid=mr(),this.name="",this.type="Material",this.blending=$i,this.side=jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=qc,this.blendDst=Yc,this.blendEquation=Yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Xo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Af,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=oo,this.stencilZFail=oo,this.stencilZPass=oo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==$i&&(n.blending=this.blending),this.side!==jn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const uu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},on={h:0,s:0,l:0},is={h:0,s:0,l:0};function yo(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class qt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ot){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,nn.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=nn.workingColorSpace){return this.r=t,this.g=e,this.b=n,nn.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=nn.workingColorSpace){if(t=Nf(t,1),e=_e(e,0,1),n=_e(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=yo(o,s,t+1/3),this.g=yo(o,s,t),this.b=yo(o,s,t-1/3)}return nn.toWorkingColorSpace(this,i),this}setStyle(t,e=Ot){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ot){const n=uu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Qi(t.r),this.g=Qi(t.g),this.b=Qi(t.b),this}copyLinearToSRGB(t){return this.r=co(t.r),this.g=co(t.g),this.b=co(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ot){return nn.fromWorkingColorSpace(Me.copy(this),t),Math.round(_e(Me.r*255,0,255))*65536+Math.round(_e(Me.g*255,0,255))*256+Math.round(_e(Me.b*255,0,255))}getHexString(t=Ot){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=nn.workingColorSpace){nn.fromWorkingColorSpace(Me.copy(this),e);const n=Me.r,i=Me.g,s=Me.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=nn.workingColorSpace){return nn.fromWorkingColorSpace(Me.copy(this),e),t.r=Me.r,t.g=Me.g,t.b=Me.b,t}getStyle(t=Ot){nn.fromWorkingColorSpace(Me.copy(this),t);const e=Me.r,n=Me.g,i=Me.b;return t!==Ot?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(on),on.h+=t,on.s+=e,on.l+=n,this.setHSL(on.h,on.s,on.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(on),t.getHSL(is);const n=ao(on.h,is.h,e),i=ao(on.s,is.s,e),s=ao(on.l,is.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Me=new qt;qt.NAMES=uu;class Ma extends Wr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Zc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ae=new U,rs=new ct;class cn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=wl,this.updateRange={offset:0,count:-1},this.gpuType=Hn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)rs.fromBufferAttribute(this,e),rs.applyMatrix3(t),this.setXY(e,rs.x,rs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ae.fromBufferAttribute(this,e),ae.applyMatrix3(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ae.fromBufferAttribute(this,e),ae.applyMatrix4(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ae.fromBufferAttribute(this,e),ae.applyNormalMatrix(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ae.fromBufferAttribute(this,e),ae.transformDirection(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Kr(e,this.array)),e}setX(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Kr(e,this.array)),e}setY(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Kr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Kr(e,this.array)),e}setW(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array),i=Fe(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array),i=Fe(i,this.array),s=Fe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==wl&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class hu extends cn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class fu extends cn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Re extends cn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Qf=0;const Xe=new ue,Eo=new Le,zi=new U,ze=new Vr,Sr=new Vr,pe=new U;class hn extends Ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qf++}),this.uuid=mr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ru(t)?fu:hu)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Bt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Xe.makeRotationFromQuaternion(t),this.applyMatrix4(Xe),this}rotateX(t){return Xe.makeRotationX(t),this.applyMatrix4(Xe),this}rotateY(t){return Xe.makeRotationY(t),this.applyMatrix4(Xe),this}rotateZ(t){return Xe.makeRotationZ(t),this.applyMatrix4(Xe),this}translate(t,e,n){return Xe.makeTranslation(t,e,n),this.applyMatrix4(Xe),this}scale(t,e,n){return Xe.makeScale(t,e,n),this.applyMatrix4(Xe),this}lookAt(t){return Eo.lookAt(t),Eo.updateMatrix(),this.applyMatrix4(Eo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zi).negate(),this.translate(zi.x,zi.y,zi.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Re(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];ze.setFromBufferAttribute(s),this.morphTargetsRelative?(pe.addVectors(this.boundingBox.min,ze.min),this.boundingBox.expandByPoint(pe),pe.addVectors(this.boundingBox.max,ze.max),this.boundingBox.expandByPoint(pe)):(this.boundingBox.expandByPoint(ze.min),this.boundingBox.expandByPoint(ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(t){const n=this.boundingSphere.center;if(ze.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Sr.setFromBufferAttribute(a),this.morphTargetsRelative?(pe.addVectors(ze.min,Sr.min),ze.expandByPoint(pe),pe.addVectors(ze.max,Sr.max),ze.expandByPoint(pe)):(ze.expandByPoint(Sr.min),ze.expandByPoint(Sr.max))}ze.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)pe.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(pe));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)pe.fromBufferAttribute(a,c),l&&(zi.fromBufferAttribute(t,c),pe.add(zi)),i=Math.max(i,n.distanceToSquared(pe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,s=e.normal.array,o=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new cn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let b=0;b<a;b++)c[b]=new U,u[b]=new U;const h=new U,f=new U,p=new U,g=new ct,_=new ct,m=new ct,d=new U,S=new U;function v(b,B,j){h.fromArray(i,b*3),f.fromArray(i,B*3),p.fromArray(i,j*3),g.fromArray(o,b*2),_.fromArray(o,B*2),m.fromArray(o,j*2),f.sub(h),p.sub(h),_.sub(g),m.sub(g);const I=1/(_.x*m.y-m.x*_.y);isFinite(I)&&(d.copy(f).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(I),S.copy(p).multiplyScalar(_.x).addScaledVector(f,-m.x).multiplyScalar(I),c[b].add(d),c[B].add(d),c[j].add(d),u[b].add(S),u[B].add(S),u[j].add(S))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let b=0,B=M.length;b<B;++b){const j=M[b],I=j.start,F=j.count;for(let z=I,q=I+F;z<q;z+=3)v(n[z+0],n[z+1],n[z+2])}const y=new U,T=new U,w=new U,C=new U;function x(b){w.fromArray(s,b*3),C.copy(w);const B=c[b];y.copy(B),y.sub(w.multiplyScalar(w.dot(B))).normalize(),T.crossVectors(C,B);const I=T.dot(u[b])<0?-1:1;l[b*4]=y.x,l[b*4+1]=y.y,l[b*4+2]=y.z,l[b*4+3]=I}for(let b=0,B=M.length;b<B;++b){const j=M[b],I=j.start,F=j.count;for(let z=I,q=I+F;z<q;z+=3)x(n[z+0]),x(n[z+1]),x(n[z+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new cn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const i=new U,s=new U,o=new U,a=new U,l=new U,c=new U,u=new U,h=new U;if(t)for(let f=0,p=t.count;f<p;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)i.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)pe.fromBufferAttribute(t,e),pe.normalize(),t.setXYZ(e,pe.x,pe.y,pe.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*u;for(let d=0;d<u;d++)f[g++]=c[p++]}return new cn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new hn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=t(f,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(t.data))}u.length>0&&(i[l]=u,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Gl=new ue,oi=new lu,ss=new Vs,kl=new U,Gi=new U,ki=new U,Hi=new U,To=new U,os=new U,as=new ct,ls=new ct,cs=new ct,Hl=new U,Vl=new U,Wl=new U,us=new U,hs=new U;class Un extends Le{constructor(t=new hn,e=new Ma){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){os.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(To.fromBufferAttribute(h,t),o?os.addScaledVector(To,u):os.addScaledVector(To.sub(e),u))}e.add(os)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ss.copy(n.boundingSphere),ss.applyMatrix4(s),oi.copy(t.ray).recast(t.near),!(ss.containsPoint(oi.origin)===!1&&(oi.intersectSphere(ss,kl)===null||oi.origin.distanceToSquared(kl)>(t.far-t.near)**2))&&(Gl.copy(s).invert(),oi.copy(t.ray).applyMatrix4(Gl),!(n.boundingBox!==null&&oi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,oi)))}_computeIntersections(t,e,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=o[m.materialIndex],S=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let M=S,y=v;M<y;M+=3){const T=a.getX(M),w=a.getX(M+1),C=a.getX(M+2);i=fs(this,d,t,n,c,u,h,T,w,C),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const S=a.getX(m),v=a.getX(m+1),M=a.getX(m+2);i=fs(this,o,t,n,c,u,h,S,v,M),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=o[m.materialIndex],S=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=S,y=v;M<y;M+=3){const T=M,w=M+1,C=M+2;i=fs(this,d,t,n,c,u,h,T,w,C),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const S=m,v=m+1,M=m+2;i=fs(this,o,t,n,c,u,h,S,v,M),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function td(r,t,e,n,i,s,o,a){let l;if(t.side===Pe?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===jn,a),l===null)return null;hs.copy(a),hs.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(hs);return c<e.near||c>e.far?null:{distance:c,point:hs.clone(),object:r}}function fs(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,Gi),r.getVertexPosition(l,ki),r.getVertexPosition(c,Hi);const u=td(r,t,e,n,Gi,ki,Hi,us);if(u){i&&(as.fromBufferAttribute(i,a),ls.fromBufferAttribute(i,l),cs.fromBufferAttribute(i,c),u.uv=Ke.getInterpolation(us,Gi,ki,Hi,as,ls,cs,new ct)),s&&(as.fromBufferAttribute(s,a),ls.fromBufferAttribute(s,l),cs.fromBufferAttribute(s,c),u.uv1=Ke.getInterpolation(us,Gi,ki,Hi,as,ls,cs,new ct),u.uv2=u.uv1),o&&(Hl.fromBufferAttribute(o,a),Vl.fromBufferAttribute(o,l),Wl.fromBufferAttribute(o,c),u.normal=Ke.getInterpolation(us,Gi,ki,Hi,Hl,Vl,Wl,new U),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new U,materialIndex:0};Ke.getNormal(Gi,ki,Hi,h.normal),u.face=h}return u}class Xr extends hn{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Re(c,3)),this.setAttribute("normal",new Re(u,3)),this.setAttribute("uv",new Re(h,2));function g(_,m,d,S,v,M,y,T,w,C,x){const b=M/w,B=y/C,j=M/2,I=y/2,F=T/2,z=w+1,q=C+1;let k=0,W=0;const et=new U;for(let J=0;J<q;J++){const dt=J*B-I;for(let O=0;O<z;O++){const nt=O*b-j;et[_]=nt*S,et[m]=dt*v,et[d]=F,c.push(et.x,et.y,et.z),et[_]=0,et[m]=0,et[d]=T>0?1:-1,u.push(et.x,et.y,et.z),h.push(O/w),h.push(1-J/C),k+=1}}for(let J=0;J<C;J++)for(let dt=0;dt<w;dt++){const O=f+dt+z*J,nt=f+dt+z*(J+1),tt=f+(dt+1)+z*(J+1),ht=f+(dt+1)+z*J;l.push(O,nt,ht),l.push(nt,tt,ht),W+=6}a.addGroup(p,W,x),p+=W,f+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ar(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ae(r){const t={};for(let e=0;e<r.length;e++){const n=ar(r[e]);for(const i in n)t[i]=n[i]}return t}function ed(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function du(r){return r.getRenderTarget()===null?r.outputColorSpace:gn}const nd={clone:ar,merge:Ae};var id=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Jn extends Wr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=id,this.fragmentShader=rd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ar(t.uniforms),this.uniformsGroups=ed(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class pu extends Le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=Dn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class je extends pu{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Jo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(As*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Jo*2*Math.atan(Math.tan(As*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(As*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Vi=-90,Wi=1;class sd extends Le{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;const i=new je(Vi,Wi,t,e);i.layers=this.layers,this.add(i);const s=new je(Vi,Wi,t,e);s.layers=this.layers,this.add(s);const o=new je(Vi,Wi,t,e);o.layers=this.layers,this.add(o);const a=new je(Vi,Wi,t,e);a.layers=this.layers,this.add(a);const l=new je(Vi,Wi,t,e);l.layers=this.layers,this.add(l);const c=new je(Vi,Wi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===Dn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ds)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[i,s,o,a,l,c]=this.children,u=t.getRenderTarget(),h=t.toneMapping,f=t.xr.enabled;t.toneMapping=In,t.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,s),t.setRenderTarget(n,2),t.render(e,o),t.setRenderTarget(n,3),t.render(e,a),t.setRenderTarget(n,4),t.render(e,l),n.texture.generateMipmaps=p,t.setRenderTarget(n,5),t.render(e,c),t.setRenderTarget(u),t.toneMapping=h,t.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class mu extends He{constructor(t,e,n,i,s,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:rr,super(t,e,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class od extends yi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(Ar("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===gi?Ot:vi),this.texture=new mu(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ze}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Xr(5,5,5),s=new Jn({name:"CubemapFromEquirect",uniforms:ar(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pe,blending:qn});s.uniforms.tEquirect.value=e;const o=new Un(i,s),a=e.minFilter;return e.minFilter===Dr&&(e.minFilter=Ze),new sd(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}const bo=new U,ad=new U,ld=new Bt;class ui{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=bo.subVectors(n,e).cross(ad.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(bo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ld.getNormalMatrix(t),i=this.coplanarPoint(bo).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ai=new Vs,ds=new U;class _u{constructor(t=new ui,e=new ui,n=new ui,i=new ui,s=new ui,o=new ui){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Dn){const n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],f=i[7],p=i[8],g=i[9],_=i[10],m=i[11],d=i[12],S=i[13],v=i[14],M=i[15];if(n[0].setComponents(l-s,f-c,m-p,M-d).normalize(),n[1].setComponents(l+s,f+c,m+p,M+d).normalize(),n[2].setComponents(l+o,f+u,m+g,M+S).normalize(),n[3].setComponents(l-o,f-u,m-g,M-S).normalize(),n[4].setComponents(l-a,f-h,m-_,M-v).normalize(),e===Dn)n[5].setComponents(l+a,f+h,m+_,M+v).normalize();else if(e===Ds)n[5].setComponents(a,h,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ai.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ai.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ai)}intersectsSprite(t){return ai.center.set(0,0,0),ai.radius=.7071067811865476,ai.applyMatrix4(t.matrixWorld),this.intersectsSphere(ai)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(ds.x=i.normal.x>0?t.max.x:t.min.x,ds.y=i.normal.y>0?t.max.y:t.min.y,ds.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ds)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function gu(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function cd(r,t){const e=t.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,f=c.usage,p=r.createBuffer();r.bindBuffer(u,p),r.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=r.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)g=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)g=r.SHORT;else if(h instanceof Uint32Array)g=r.UNSIGNED_INT;else if(h instanceof Int32Array)g=r.INT;else if(h instanceof Int8Array)g=r.BYTE;else if(h instanceof Uint8Array)g=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)g=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){const f=u.array,p=u.updateRange;r.bindBuffer(h,c),p.count===-1?r.bufferSubData(h,0,f):(e?r.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):r.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:o,remove:a,update:l}}class Sa extends hn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=t/a,f=e/l,p=[],g=[],_=[],m=[];for(let d=0;d<u;d++){const S=d*f-o;for(let v=0;v<c;v++){const M=v*h-s;g.push(M,-S,0),_.push(0,0,1),m.push(v/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let S=0;S<a;S++){const v=S+c*d,M=S+c*(d+1),y=S+1+c*(d+1),T=S+1+c*d;p.push(v,M,T),p.push(M,y,T)}this.setIndex(p),this.setAttribute("position",new Re(g,3)),this.setAttribute("normal",new Re(_,3)),this.setAttribute("uv",new Re(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sa(t.width,t.height,t.widthSegments,t.heightSegments)}}var ud=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fd=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,dd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,md=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_d="vec3 transformed = vec3( position );",gd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xd=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,Md=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Sd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,yd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ed=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Td=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ad=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Rd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Cd=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,Pd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,Ld=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Dd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ud=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Id=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Nd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Od="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fd=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Bd=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,zd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Gd=`#ifdef USE_ENVMAP
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
#endif`,kd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hd=`#ifdef USE_ENVMAP
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
#endif`,Vd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yd=`#ifdef USE_GRADIENTMAP
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
}`,Zd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Kd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$d=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,Qd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,tp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ep=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,np=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ip=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
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
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,sp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,op=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ap=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,cp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,up=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,fp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,dp=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,pp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_p=`#if defined( USE_POINTS_UV )
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
#endif`,gp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Sp=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,yp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Ep=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
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
vec3 geometryNormal = normal;`,Tp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,bp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ap=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rp=`#ifdef USE_NORMALMAP
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
#endif`,Cp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Pp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Dp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Up=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ip=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,Np=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Op=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Hp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Vp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Wp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Xp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Yp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zp=`#ifdef USE_SKINNING
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
#endif`,Kp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$p=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qp=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,tm=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,em=`#ifdef USE_UV
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
#endif`,nm=`#ifdef USE_UV
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
#endif`,im=`#ifdef USE_UV
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
#endif`,rm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,om=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,um=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,hm=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,fm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,dm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,pm=`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_m=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,gm=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vm=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xm=`#include <common>
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
	#include <morphcolor_vertex>
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
}`,Mm=`uniform vec3 diffuse;
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
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
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
}`,ym=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Em=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,Tm=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Am=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,wm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
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
}`,Rm=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
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
	#include <morphcolor_vertex>
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
}`,Pm=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lm=`#define TOON
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,Dm=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Um=`uniform float size;
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
}`,Im=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Nm=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
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
}`,Om=`uniform vec3 color;
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
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Fm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Bm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ft={alphamap_fragment:ud,alphamap_pars_fragment:hd,alphatest_fragment:fd,alphatest_pars_fragment:dd,aomap_fragment:pd,aomap_pars_fragment:md,begin_vertex:_d,beginnormal_vertex:gd,bsdfs:vd,iridescence_fragment:xd,bumpmap_pars_fragment:Md,clipping_planes_fragment:Sd,clipping_planes_pars_fragment:yd,clipping_planes_pars_vertex:Ed,clipping_planes_vertex:Td,color_fragment:bd,color_pars_fragment:Ad,color_pars_vertex:wd,color_vertex:Rd,common:Cd,cube_uv_reflection_fragment:Pd,defaultnormal_vertex:Ld,displacementmap_pars_vertex:Dd,displacementmap_vertex:Ud,emissivemap_fragment:Id,emissivemap_pars_fragment:Nd,encodings_fragment:Od,encodings_pars_fragment:Fd,envmap_fragment:Bd,envmap_common_pars_fragment:zd,envmap_pars_fragment:Gd,envmap_pars_vertex:kd,envmap_physical_pars_fragment:Qd,envmap_vertex:Hd,fog_vertex:Vd,fog_pars_vertex:Wd,fog_fragment:Xd,fog_pars_fragment:qd,gradientmap_pars_fragment:Yd,lightmap_fragment:Zd,lightmap_pars_fragment:Kd,lights_lambert_fragment:jd,lights_lambert_pars_fragment:Jd,lights_pars_begin:$d,lights_toon_fragment:tp,lights_toon_pars_fragment:ep,lights_phong_fragment:np,lights_phong_pars_fragment:ip,lights_physical_fragment:rp,lights_physical_pars_fragment:sp,lights_fragment_begin:op,lights_fragment_maps:ap,lights_fragment_end:lp,logdepthbuf_fragment:cp,logdepthbuf_pars_fragment:up,logdepthbuf_pars_vertex:hp,logdepthbuf_vertex:fp,map_fragment:dp,map_pars_fragment:pp,map_particle_fragment:mp,map_particle_pars_fragment:_p,metalnessmap_fragment:gp,metalnessmap_pars_fragment:vp,morphcolor_vertex:xp,morphnormal_vertex:Mp,morphtarget_pars_vertex:Sp,morphtarget_vertex:yp,normal_fragment_begin:Ep,normal_fragment_maps:Tp,normal_pars_fragment:bp,normal_pars_vertex:Ap,normal_vertex:wp,normalmap_pars_fragment:Rp,clearcoat_normal_fragment_begin:Cp,clearcoat_normal_fragment_maps:Pp,clearcoat_pars_fragment:Lp,iridescence_pars_fragment:Dp,output_fragment:Up,packing:Ip,premultiplied_alpha_fragment:Np,project_vertex:Op,dithering_fragment:Fp,dithering_pars_fragment:Bp,roughnessmap_fragment:zp,roughnessmap_pars_fragment:Gp,shadowmap_pars_fragment:kp,shadowmap_pars_vertex:Hp,shadowmap_vertex:Vp,shadowmask_pars_fragment:Wp,skinbase_vertex:Xp,skinning_pars_vertex:qp,skinning_vertex:Yp,skinnormal_vertex:Zp,specularmap_fragment:Kp,specularmap_pars_fragment:jp,tonemapping_fragment:Jp,tonemapping_pars_fragment:$p,transmission_fragment:Qp,transmission_pars_fragment:tm,uv_pars_fragment:em,uv_pars_vertex:nm,uv_vertex:im,worldpos_vertex:rm,background_vert:sm,background_frag:om,backgroundCube_vert:am,backgroundCube_frag:lm,cube_vert:cm,cube_frag:um,depth_vert:hm,depth_frag:fm,distanceRGBA_vert:dm,distanceRGBA_frag:pm,equirect_vert:mm,equirect_frag:_m,linedashed_vert:gm,linedashed_frag:vm,meshbasic_vert:xm,meshbasic_frag:Mm,meshlambert_vert:Sm,meshlambert_frag:ym,meshmatcap_vert:Em,meshmatcap_frag:Tm,meshnormal_vert:bm,meshnormal_frag:Am,meshphong_vert:wm,meshphong_frag:Rm,meshphysical_vert:Cm,meshphysical_frag:Pm,meshtoon_vert:Lm,meshtoon_frag:Dm,points_vert:Um,points_frag:Im,shadow_vert:Nm,shadow_frag:Om,sprite_vert:Fm,sprite_frag:Bm},ut={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},dn={basic:{uniforms:Ae([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:Ft.meshbasic_vert,fragmentShader:Ft.meshbasic_frag},lambert:{uniforms:Ae([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new qt(0)}}]),vertexShader:Ft.meshlambert_vert,fragmentShader:Ft.meshlambert_frag},phong:{uniforms:Ae([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30}}]),vertexShader:Ft.meshphong_vert,fragmentShader:Ft.meshphong_frag},standard:{uniforms:Ae([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag},toon:{uniforms:Ae([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new qt(0)}}]),vertexShader:Ft.meshtoon_vert,fragmentShader:Ft.meshtoon_frag},matcap:{uniforms:Ae([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:Ft.meshmatcap_vert,fragmentShader:Ft.meshmatcap_frag},points:{uniforms:Ae([ut.points,ut.fog]),vertexShader:Ft.points_vert,fragmentShader:Ft.points_frag},dashed:{uniforms:Ae([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ft.linedashed_vert,fragmentShader:Ft.linedashed_frag},depth:{uniforms:Ae([ut.common,ut.displacementmap]),vertexShader:Ft.depth_vert,fragmentShader:Ft.depth_frag},normal:{uniforms:Ae([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:Ft.meshnormal_vert,fragmentShader:Ft.meshnormal_frag},sprite:{uniforms:Ae([ut.sprite,ut.fog]),vertexShader:Ft.sprite_vert,fragmentShader:Ft.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ft.background_vert,fragmentShader:Ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ft.backgroundCube_vert,fragmentShader:Ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ft.cube_vert,fragmentShader:Ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ft.equirect_vert,fragmentShader:Ft.equirect_frag},distanceRGBA:{uniforms:Ae([ut.common,ut.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ft.distanceRGBA_vert,fragmentShader:Ft.distanceRGBA_frag},shadow:{uniforms:Ae([ut.lights,ut.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:Ft.shadow_vert,fragmentShader:Ft.shadow_frag}};dn.physical={uniforms:Ae([dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag};const ps={r:0,b:0,g:0};function zm(r,t,e,n,i,s,o){const a=new qt(0);let l=s===!0?0:1,c,u,h=null,f=0,p=null;function g(m,d){let S=!1,v=d.isScene===!0?d.background:null;switch(v&&v.isTexture&&(v=(d.backgroundBlurriness>0?e:t).get(v)),v===null?_(a,l):v&&v.isColor&&(_(v,1),S=!0),r.xr.getEnvironmentBlendMode()){case"opaque":S=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,o),S=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,o),S=!0;break}(r.autoClear||S)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Hs)?(u===void 0&&(u=new Un(new Xr(1,1,1),new Jn({name:"BackgroundCubeMaterial",uniforms:ar(dn.backgroundCube.uniforms),vertexShader:dn.backgroundCube.vertexShader,fragmentShader:dn.backgroundCube.fragmentShader,side:Pe,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=v.colorSpace!==Ot,(h!==v||f!==v.version||p!==r.toneMapping)&&(u.material.needsUpdate=!0,h=v,f=v.version,p=r.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Un(new Sa(2,2),new Jn({name:"BackgroundMaterial",uniforms:ar(dn.background.uniforms),vertexShader:dn.background.vertexShader,fragmentShader:dn.background.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=v.colorSpace!==Ot,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||p!==r.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,p=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,d){m.getRGB(ps,du(r)),n.buffers.color.setClear(ps.r,ps.g,ps.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(m,d=1){a.set(m),l=d,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:g}}function Gm(r,t,e,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=m(null);let c=l,u=!1;function h(F,z,q,k,W){let et=!1;if(o){const J=_(k,q,z);c!==J&&(c=J,p(c.object)),et=d(F,k,q,W),et&&S(F,k,q,W)}else{const J=z.wireframe===!0;(c.geometry!==k.id||c.program!==q.id||c.wireframe!==J)&&(c.geometry=k.id,c.program=q.id,c.wireframe=J,et=!0)}W!==null&&e.update(W,r.ELEMENT_ARRAY_BUFFER),(et||u)&&(u=!1,C(F,z,q,k),W!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function f(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function p(F){return n.isWebGL2?r.bindVertexArray(F):s.bindVertexArrayOES(F)}function g(F){return n.isWebGL2?r.deleteVertexArray(F):s.deleteVertexArrayOES(F)}function _(F,z,q){const k=q.wireframe===!0;let W=a[F.id];W===void 0&&(W={},a[F.id]=W);let et=W[z.id];et===void 0&&(et={},W[z.id]=et);let J=et[k];return J===void 0&&(J=m(f()),et[k]=J),J}function m(F){const z=[],q=[],k=[];for(let W=0;W<i;W++)z[W]=0,q[W]=0,k[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:q,attributeDivisors:k,object:F,attributes:{},index:null}}function d(F,z,q,k){const W=c.attributes,et=z.attributes;let J=0;const dt=q.getAttributes();for(const O in dt)if(dt[O].location>=0){const tt=W[O];let ht=et[O];if(ht===void 0&&(O==="instanceMatrix"&&F.instanceMatrix&&(ht=F.instanceMatrix),O==="instanceColor"&&F.instanceColor&&(ht=F.instanceColor)),tt===void 0||tt.attribute!==ht||ht&&tt.data!==ht.data)return!0;J++}return c.attributesNum!==J||c.index!==k}function S(F,z,q,k){const W={},et=z.attributes;let J=0;const dt=q.getAttributes();for(const O in dt)if(dt[O].location>=0){let tt=et[O];tt===void 0&&(O==="instanceMatrix"&&F.instanceMatrix&&(tt=F.instanceMatrix),O==="instanceColor"&&F.instanceColor&&(tt=F.instanceColor));const ht={};ht.attribute=tt,tt&&tt.data&&(ht.data=tt.data),W[O]=ht,J++}c.attributes=W,c.attributesNum=J,c.index=k}function v(){const F=c.newAttributes;for(let z=0,q=F.length;z<q;z++)F[z]=0}function M(F){y(F,0)}function y(F,z){const q=c.newAttributes,k=c.enabledAttributes,W=c.attributeDivisors;q[F]=1,k[F]===0&&(r.enableVertexAttribArray(F),k[F]=1),W[F]!==z&&((n.isWebGL2?r:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,z),W[F]=z)}function T(){const F=c.newAttributes,z=c.enabledAttributes;for(let q=0,k=z.length;q<k;q++)z[q]!==F[q]&&(r.disableVertexAttribArray(q),z[q]=0)}function w(F,z,q,k,W,et,J){J===!0?r.vertexAttribIPointer(F,z,q,W,et):r.vertexAttribPointer(F,z,q,k,W,et)}function C(F,z,q,k){if(n.isWebGL2===!1&&(F.isInstancedMesh||k.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();const W=k.attributes,et=q.getAttributes(),J=z.defaultAttributeValues;for(const dt in et){const O=et[dt];if(O.location>=0){let nt=W[dt];if(nt===void 0&&(dt==="instanceMatrix"&&F.instanceMatrix&&(nt=F.instanceMatrix),dt==="instanceColor"&&F.instanceColor&&(nt=F.instanceColor)),nt!==void 0){const tt=nt.normalized,ht=nt.itemSize,_t=e.get(nt);if(_t===void 0)continue;const St=_t.buffer,Dt=_t.type,wt=_t.bytesPerElement,Xt=n.isWebGL2===!0&&(Dt===r.INT||Dt===r.UNSIGNED_INT||nt.gpuType===jc);if(nt.isInterleavedBufferAttribute){const Rt=nt.data,L=Rt.stride,at=nt.offset;if(Rt.isInstancedInterleavedBuffer){for(let K=0;K<O.locationSize;K++)y(O.location+K,Rt.meshPerAttribute);F.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=Rt.meshPerAttribute*Rt.count)}else for(let K=0;K<O.locationSize;K++)M(O.location+K);r.bindBuffer(r.ARRAY_BUFFER,St);for(let K=0;K<O.locationSize;K++)w(O.location+K,ht/O.locationSize,Dt,tt,L*wt,(at+ht/O.locationSize*K)*wt,Xt)}else{if(nt.isInstancedBufferAttribute){for(let Rt=0;Rt<O.locationSize;Rt++)y(O.location+Rt,nt.meshPerAttribute);F.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let Rt=0;Rt<O.locationSize;Rt++)M(O.location+Rt);r.bindBuffer(r.ARRAY_BUFFER,St);for(let Rt=0;Rt<O.locationSize;Rt++)w(O.location+Rt,ht/O.locationSize,Dt,tt,ht*wt,ht/O.locationSize*Rt*wt,Xt)}}else if(J!==void 0){const tt=J[dt];if(tt!==void 0)switch(tt.length){case 2:r.vertexAttrib2fv(O.location,tt);break;case 3:r.vertexAttrib3fv(O.location,tt);break;case 4:r.vertexAttrib4fv(O.location,tt);break;default:r.vertexAttrib1fv(O.location,tt)}}}}T()}function x(){j();for(const F in a){const z=a[F];for(const q in z){const k=z[q];for(const W in k)g(k[W].object),delete k[W];delete z[q]}delete a[F]}}function b(F){if(a[F.id]===void 0)return;const z=a[F.id];for(const q in z){const k=z[q];for(const W in k)g(k[W].object),delete k[W];delete z[q]}delete a[F.id]}function B(F){for(const z in a){const q=a[z];if(q[F.id]===void 0)continue;const k=q[F.id];for(const W in k)g(k[W].object),delete k[W];delete q[F.id]}}function j(){I(),u=!0,c!==l&&(c=l,p(c.object))}function I(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:j,resetDefaultState:I,dispose:x,releaseStatesOfGeometry:b,releaseStatesOfProgram:B,initAttributes:v,enableAttribute:M,disableUnusedAttributes:T}}function km(r,t,e,n){const i=n.isWebGL2;let s;function o(c){s=c}function a(c,u){r.drawArrays(s,c,u),e.update(u,s,1)}function l(c,u,h){if(h===0)return;let f,p;if(i)f=r,p="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](s,c,u,h),e.update(u,s,h)}this.setMode=o,this.render=a,this.renderInstances=l}function Hm(r,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),d=r.getParameter(r.MAX_VARYING_VECTORS),S=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,M=o||t.has("OES_texture_float"),y=v&&M,T=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:S,vertexTextures:v,floatFragmentTextures:M,floatVertexTextures:y,maxSamples:T}}function Vm(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new ui,a=new Bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||n!==0||i;return i=f,n=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,d=r.get(h);if(!i||g===null||g.length===0||s&&!m)s?u(null):c();else{const S=s?0:n,v=S*4;let M=d.clippingState||null;l.value=M,M=u(g,f,v,p);for(let y=0;y!==v;++y)M[y]=e[y];d.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,p,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const d=p+_*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<d)&&(m=new Float32Array(d));for(let v=0,M=p;v!==_;++v,M+=4)o.copy(h[v]).applyMatrix4(S,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Wm(r){let t=new WeakMap;function e(o,a){return a===qo?o.mapping=rr:a===Yo&&(o.mapping=sr),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===qo||a===Yo)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new od(l.height/2);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Xm extends pu{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Zi=4,Xl=[.125,.215,.35,.446,.526,.582],di=20,Ao=new Xm,ql=new qt;let wo=null;const hi=(1+Math.sqrt(5))/2,Xi=1/hi,Yl=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,hi,Xi),new U(0,hi,-Xi),new U(Xi,0,hi),new U(-Xi,0,hi),new U(hi,Xi,0),new U(-hi,Xi,0)];class Zl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){wo=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(wo),t.scissorTest=!1,ms(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===rr||t.mapping===sr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),wo=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ze,minFilter:Ze,generateMipmaps:!1,type:Ur,format:ln,colorSpace:gn,depthBuffer:!1},i=Kl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kl(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qm(s)),this._blurMaterial=Ym(s,t,e)}return i}_compileMaterial(t){const e=new Un(this._lodPlanes[0],t);this._renderer.compile(e,Ao)}_sceneToCubeUV(t,e,n,i){const a=new je(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(ql),u.toneMapping=In,u.autoClear=!1;const p=new Ma({name:"PMREM.Background",side:Pe,depthWrite:!1,depthTest:!1}),g=new Un(new Xr,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(ql),_=!0);for(let d=0;d<6;d++){const S=d%3;S===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):S===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const v=this._cubeSize;ms(i,S*v,d>2?v:0,v,v),u.setRenderTarget(i),_&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===rr||t.mapping===sr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jl());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Un(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;ms(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Ao)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Yl[(i-1)%Yl.length];this._blur(t,i-1,i,s,o)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Un(this._lodPlanes[i],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*di-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):di;m>di&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${di}`);const d=[];let S=0;for(let w=0;w<di;++w){const C=w/_,x=Math.exp(-C*C/2);d.push(x),w===0?S+=x:w<m&&(S+=2*x)}for(let w=0;w<d.length;w++)d[w]=d[w]/S;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-n;const M=this._sizeLods[i],y=3*M*(i>v-Zi?i-v+Zi:0),T=4*(this._cubeSize-M);ms(e,y,T,3*M,2*M),l.setRenderTarget(e),l.render(h,Ao)}}function qm(r){const t=[],e=[],n=[];let i=r;const s=r-Zi+1+Xl.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>r-Zi?l=Xl[o-r+Zi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,_=3,m=2,d=1,S=new Float32Array(_*g*p),v=new Float32Array(m*g*p),M=new Float32Array(d*g*p);for(let T=0;T<p;T++){const w=T%3*2/3-1,C=T>2?0:-1,x=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];S.set(x,_*g*T),v.set(f,m*g*T);const b=[T,T,T,T,T,T];M.set(b,d*g*T)}const y=new hn;y.setAttribute("position",new cn(S,_)),y.setAttribute("uv",new cn(v,m)),y.setAttribute("faceIndex",new cn(M,d)),t.push(y),i>Zi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Kl(r,t,e){const n=new yi(r,t,e);return n.texture.mapping=Hs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ms(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function Ym(r,t,e){const n=new Float32Array(di),i=new U(0,1,0);return new Jn({name:"SphericalGaussianBlur",defines:{n:di,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ya(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function jl(){return new Jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ya(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Jl(){return new Jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ya(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function ya(){return`

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
	`}function Zm(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===qo||l===Yo,u=l===rr||l===sr;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=t.get(a);return e===null&&(e=new Zl(r)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),t.set(a,h),h.texture}else{if(t.has(a))return t.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&i(h)){e===null&&(e=new Zl(r));const f=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Km(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function jm(r,t,e,n){const i={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,d=_.length;m<d;m++)t.remove(_[m])}f.removeEventListener("dispose",o),delete i[f.id];const p=s.get(f);p&&(t.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)t.update(f[g],r.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const _=p[g];for(let m=0,d=_.length;m<d;m++)t.update(_[m],r.ARRAY_BUFFER)}}function c(h){const f=[],p=h.index,g=h.attributes.position;let _=0;if(p!==null){const S=p.array;_=p.version;for(let v=0,M=S.length;v<M;v+=3){const y=S[v+0],T=S[v+1],w=S[v+2];f.push(y,T,T,w,w,y)}}else{const S=g.array;_=g.version;for(let v=0,M=S.length/3-1;v<M;v+=3){const y=v+0,T=v+1,w=v+2;f.push(y,T,T,w,w,y)}}const m=new(ru(f)?fu:hu)(f,1);m.version=_;const d=s.get(h);d&&t.remove(d),s.set(h,m)}function u(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Jm(r,t,e,n){const i=n.isWebGL2;let s;function o(f){s=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,p){r.drawElements(s,p,a,f*l),e.update(p,s,1)}function h(f,p,g){if(g===0)return;let _,m;if(i)_=r,m="drawElementsInstanced";else if(_=t.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[m](s,p,a,f*l,g),e.update(p,s,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h}function $m(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Qm(r,t){return r[0]-t[0]}function t_(r,t){return Math.abs(t[1])-Math.abs(r[1])}function e_(r,t,e){const n={},i=new Float32Array(8),s=new WeakMap,o=new ve,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){const f=c.morphTargetInfluences;if(t.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let m=s.get(u);if(m===void 0||m.count!==_){let z=function(){I.dispose(),s.delete(u),u.removeEventListener("dispose",z)};var p=z;m!==void 0&&m.texture.dispose();const v=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,y=u.morphAttributes.color!==void 0,T=u.morphAttributes.position||[],w=u.morphAttributes.normal||[],C=u.morphAttributes.color||[];let x=0;v===!0&&(x=1),M===!0&&(x=2),y===!0&&(x=3);let b=u.attributes.position.count*x,B=1;b>t.maxTextureSize&&(B=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const j=new Float32Array(b*B*4*_),I=new au(j,b,B,_);I.type=Hn,I.needsUpdate=!0;const F=x*4;for(let q=0;q<_;q++){const k=T[q],W=w[q],et=C[q],J=b*B*4*q;for(let dt=0;dt<k.count;dt++){const O=dt*F;v===!0&&(o.fromBufferAttribute(k,dt),j[J+O+0]=o.x,j[J+O+1]=o.y,j[J+O+2]=o.z,j[J+O+3]=0),M===!0&&(o.fromBufferAttribute(W,dt),j[J+O+4]=o.x,j[J+O+5]=o.y,j[J+O+6]=o.z,j[J+O+7]=0),y===!0&&(o.fromBufferAttribute(et,dt),j[J+O+8]=o.x,j[J+O+9]=o.y,j[J+O+10]=o.z,j[J+O+11]=et.itemSize===4?o.w:1)}}m={count:_,texture:I,size:new ct(b,B)},s.set(u,m),u.addEventListener("dispose",z)}let d=0;for(let v=0;v<f.length;v++)d+=f[v];const S=u.morphTargetsRelative?1:1-d;h.getUniforms().setValue(r,"morphTargetBaseInfluence",S),h.getUniforms().setValue(r,"morphTargetInfluences",f),h.getUniforms().setValue(r,"morphTargetsTexture",m.texture,e),h.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}else{const g=f===void 0?0:f.length;let _=n[u.id];if(_===void 0||_.length!==g){_=[];for(let M=0;M<g;M++)_[M]=[M,0];n[u.id]=_}for(let M=0;M<g;M++){const y=_[M];y[0]=M,y[1]=f[M]}_.sort(t_);for(let M=0;M<8;M++)M<g&&_[M][1]?(a[M][0]=_[M][0],a[M][1]=_[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(Qm);const m=u.morphAttributes.position,d=u.morphAttributes.normal;let S=0;for(let M=0;M<8;M++){const y=a[M],T=y[0],w=y[1];T!==Number.MAX_SAFE_INTEGER&&w?(m&&u.getAttribute("morphTarget"+M)!==m[T]&&u.setAttribute("morphTarget"+M,m[T]),d&&u.getAttribute("morphNormal"+M)!==d[T]&&u.setAttribute("morphNormal"+M,d[T]),i[M]=w,S+=w):(m&&u.hasAttribute("morphTarget"+M)===!0&&u.deleteAttribute("morphTarget"+M),d&&u.hasAttribute("morphNormal"+M)===!0&&u.deleteAttribute("morphNormal"+M),i[M]=0)}const v=u.morphTargetsRelative?1:1-S;h.getUniforms().setValue(r,"morphTargetBaseInfluence",v),h.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function n_(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);return i.get(h)!==c&&(t.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER)),h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}const vu=new He,xu=new au,Mu=new Wf,Su=new mu,$l=[],Ql=[],tc=new Float32Array(16),ec=new Float32Array(9),nc=new Float32Array(4);function _r(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=$l[i];if(s===void 0&&(s=new Float32Array(i),$l[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function he(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function fe(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Xs(r,t){let e=Ql[t];e===void 0&&(e=new Int32Array(t),Ql[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function i_(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function r_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(he(e,t))return;r.uniform2fv(this.addr,t),fe(e,t)}}function s_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(he(e,t))return;r.uniform3fv(this.addr,t),fe(e,t)}}function o_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(he(e,t))return;r.uniform4fv(this.addr,t),fe(e,t)}}function a_(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(he(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),fe(e,t)}else{if(he(e,n))return;nc.set(n),r.uniformMatrix2fv(this.addr,!1,nc),fe(e,n)}}function l_(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(he(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),fe(e,t)}else{if(he(e,n))return;ec.set(n),r.uniformMatrix3fv(this.addr,!1,ec),fe(e,n)}}function c_(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(he(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),fe(e,t)}else{if(he(e,n))return;tc.set(n),r.uniformMatrix4fv(this.addr,!1,tc),fe(e,n)}}function u_(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function h_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(he(e,t))return;r.uniform2iv(this.addr,t),fe(e,t)}}function f_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(he(e,t))return;r.uniform3iv(this.addr,t),fe(e,t)}}function d_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(he(e,t))return;r.uniform4iv(this.addr,t),fe(e,t)}}function p_(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function m_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(he(e,t))return;r.uniform2uiv(this.addr,t),fe(e,t)}}function __(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(he(e,t))return;r.uniform3uiv(this.addr,t),fe(e,t)}}function g_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(he(e,t))return;r.uniform4uiv(this.addr,t),fe(e,t)}}function v_(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||vu,i)}function x_(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Mu,i)}function M_(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Su,i)}function S_(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||xu,i)}function y_(r){switch(r){case 5126:return i_;case 35664:return r_;case 35665:return s_;case 35666:return o_;case 35674:return a_;case 35675:return l_;case 35676:return c_;case 5124:case 35670:return u_;case 35667:case 35671:return h_;case 35668:case 35672:return f_;case 35669:case 35673:return d_;case 5125:return p_;case 36294:return m_;case 36295:return __;case 36296:return g_;case 35678:case 36198:case 36298:case 36306:case 35682:return v_;case 35679:case 36299:case 36307:return x_;case 35680:case 36300:case 36308:case 36293:return M_;case 36289:case 36303:case 36311:case 36292:return S_}}function E_(r,t){r.uniform1fv(this.addr,t)}function T_(r,t){const e=_r(t,this.size,2);r.uniform2fv(this.addr,e)}function b_(r,t){const e=_r(t,this.size,3);r.uniform3fv(this.addr,e)}function A_(r,t){const e=_r(t,this.size,4);r.uniform4fv(this.addr,e)}function w_(r,t){const e=_r(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function R_(r,t){const e=_r(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function C_(r,t){const e=_r(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function P_(r,t){r.uniform1iv(this.addr,t)}function L_(r,t){r.uniform2iv(this.addr,t)}function D_(r,t){r.uniform3iv(this.addr,t)}function U_(r,t){r.uniform4iv(this.addr,t)}function I_(r,t){r.uniform1uiv(this.addr,t)}function N_(r,t){r.uniform2uiv(this.addr,t)}function O_(r,t){r.uniform3uiv(this.addr,t)}function F_(r,t){r.uniform4uiv(this.addr,t)}function B_(r,t,e){const n=this.cache,i=t.length,s=Xs(e,i);he(n,s)||(r.uniform1iv(this.addr,s),fe(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||vu,s[o])}function z_(r,t,e){const n=this.cache,i=t.length,s=Xs(e,i);he(n,s)||(r.uniform1iv(this.addr,s),fe(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Mu,s[o])}function G_(r,t,e){const n=this.cache,i=t.length,s=Xs(e,i);he(n,s)||(r.uniform1iv(this.addr,s),fe(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Su,s[o])}function k_(r,t,e){const n=this.cache,i=t.length,s=Xs(e,i);he(n,s)||(r.uniform1iv(this.addr,s),fe(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||xu,s[o])}function H_(r){switch(r){case 5126:return E_;case 35664:return T_;case 35665:return b_;case 35666:return A_;case 35674:return w_;case 35675:return R_;case 35676:return C_;case 5124:case 35670:return P_;case 35667:case 35671:return L_;case 35668:case 35672:return D_;case 35669:case 35673:return U_;case 5125:return I_;case 36294:return N_;case 36295:return O_;case 36296:return F_;case 35678:case 36198:case 36298:case 36306:case 35682:return B_;case 35679:case 36299:case 36307:return z_;case 35680:case 36300:case 36308:case 36293:return G_;case 36289:case 36303:case 36311:case 36292:return k_}}class V_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=y_(e.type)}}class W_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=H_(e.type)}}class X_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const Ro=/(\w+)(\])?(\[|\.)?/g;function ic(r,t){r.seq.push(t),r.map[t.id]=t}function q_(r,t,e){const n=r.name,i=n.length;for(Ro.lastIndex=0;;){const s=Ro.exec(n),o=Ro.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){ic(e,c===void 0?new V_(a,r,t):new W_(a,r,t));break}else{let h=e.map[a];h===void 0&&(h=new X_(a),ic(e,h)),e=h}}}class ws{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);q_(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function rc(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}let Y_=0;function Z_(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function K_(r){switch(r){case gn:return["Linear","( value )"];case Ot:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),["Linear","( value )"]}}function sc(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+Z_(r.getShaderSource(t),o)}else return i}function j_(r,t){const e=K_(t);return"vec4 "+r+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function J_(r,t){let e;switch(t){case af:e="Linear";break;case lf:e="Reinhard";break;case cf:e="OptimizedCineon";break;case uf:e="ACESFilmic";break;case hf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function $_(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Er).join(`
`)}function Q_(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function tg(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function Er(r){return r!==""}function oc(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ac(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const eg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qo(r){return r.replace(eg,ng)}function ng(r,t){const e=Ft[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return Qo(e)}const ig=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lc(r){return r.replace(ig,rg)}function rg(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function cc(r){let t="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function sg(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Xc?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Bh?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Rn&&(t="SHADOWMAP_TYPE_VSM"),t}function og(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case rr:case sr:t="ENVMAP_TYPE_CUBE";break;case Hs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function ag(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case sr:t="ENVMAP_MODE_REFRACTION";break}return t}function lg(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Zc:t="ENVMAP_BLENDING_MULTIPLY";break;case sf:t="ENVMAP_BLENDING_MIX";break;case of:t="ENVMAP_BLENDING_ADD";break}return t}function cg(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function ug(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=sg(e),c=og(e),u=ag(e),h=lg(e),f=cg(e),p=e.isWebGL2?"":$_(e),g=Q_(s),_=i.createProgram();let m,d,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Er).join(`
`),m.length>0&&(m+=`
`),d=[p,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Er).join(`
`),d.length>0&&(d+=`
`)):(m=[cc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Er).join(`
`),d=[p,cc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==In?"#define TONE_MAPPING":"",e.toneMapping!==In?Ft.tonemapping_pars_fragment:"",e.toneMapping!==In?J_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ft.encodings_pars_fragment,j_("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Er).join(`
`)),o=Qo(o),o=oc(o,e),o=ac(o,e),a=Qo(a),a=oc(a,e),a=ac(a,e),o=lc(o),a=lc(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===Rl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Rl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const v=S+m+o,M=S+d+a,y=rc(i,i.VERTEX_SHADER,v),T=rc(i,i.FRAGMENT_SHADER,M);if(i.attachShader(_,y),i.attachShader(_,T),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_),r.debug.checkShaderErrors){const x=i.getProgramInfoLog(_).trim(),b=i.getShaderInfoLog(y).trim(),B=i.getShaderInfoLog(T).trim();let j=!0,I=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(j=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,y,T);else{const F=sc(i,y,"vertex"),z=sc(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Program Info Log: `+x+`
`+F+`
`+z)}else x!==""?console.warn("THREE.WebGLProgram: Program Info Log:",x):(b===""||B==="")&&(I=!1);I&&(this.diagnostics={runnable:j,programLog:x,vertexShader:{log:b,prefix:m},fragmentShader:{log:B,prefix:d}})}i.deleteShader(y),i.deleteShader(T);let w;this.getUniforms=function(){return w===void 0&&(w=new ws(i,_)),w};let C;return this.getAttributes=function(){return C===void 0&&(C=tg(i,_)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Y_++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=y,this.fragmentShader=T,this}let hg=0;class fg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new dg(t),e.set(t,n)),n}}class dg{constructor(t){this.id=hg++,this.code=t,this.usedTimes=0}}function pg(r,t,e,n,i,s,o){const a=new cu,l=new fg,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return x===0?"uv":`uv${x}`}function m(x,b,B,j,I){const F=j.fog,z=I.geometry,q=x.isMeshStandardMaterial?j.environment:null,k=(x.isMeshStandardMaterial?e:t).get(x.envMap||q),W=k&&k.mapping===Hs?k.image.height:null,et=g[x.type];x.precision!==null&&(p=i.getMaxPrecision(x.precision),p!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));const J=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,dt=J!==void 0?J.length:0;let O=0;z.morphAttributes.position!==void 0&&(O=1),z.morphAttributes.normal!==void 0&&(O=2),z.morphAttributes.color!==void 0&&(O=3);let nt,tt,ht,_t;if(et){const se=dn[et];nt=se.vertexShader,tt=se.fragmentShader}else nt=x.vertexShader,tt=x.fragmentShader,l.update(x),ht=l.getVertexShaderID(x),_t=l.getFragmentShaderID(x);const St=r.getRenderTarget(),Dt=I.isInstancedMesh===!0,wt=!!x.map,Xt=!!x.matcap,Rt=!!k,L=!!x.aoMap,at=!!x.lightMap,K=!!x.bumpMap,ot=!!x.normalMap,$=!!x.displacementMap,Et=!!x.emissiveMap,mt=!!x.metalnessMap,gt=!!x.roughnessMap,Ct=x.anisotropy>0,zt=x.clearcoat>0,jt=x.iridescence>0,R=x.sheen>0,E=x.transmission>0,X=Ct&&!!x.anisotropyMap,st=zt&&!!x.clearcoatMap,rt=zt&&!!x.clearcoatNormalMap,P=zt&&!!x.clearcoatRoughnessMap,Q=jt&&!!x.iridescenceMap,it=jt&&!!x.iridescenceThicknessMap,H=R&&!!x.sheenColorMap,Mt=R&&!!x.sheenRoughnessMap,bt=!!x.specularMap,Tt=!!x.specularColorMap,yt=!!x.specularIntensityMap,vt=E&&!!x.transmissionMap,Pt=E&&!!x.thicknessMap,kt=!!x.gradientMap,D=!!x.alphaMap,ft=x.alphaTest>0,V=!!x.extensions,lt=!!z.attributes.uv1,pt=!!z.attributes.uv2,Wt=!!z.attributes.uv3;return{isWebGL2:u,shaderID:et,shaderType:x.type,shaderName:x.name,vertexShader:nt,fragmentShader:tt,defines:x.defines,customVertexShaderID:ht,customFragmentShaderID:_t,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,instancing:Dt,instancingColor:Dt&&I.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:St===null?r.outputColorSpace:St.isXRRenderTarget===!0?St.texture.colorSpace:gn,map:wt,matcap:Xt,envMap:Rt,envMapMode:Rt&&k.mapping,envMapCubeUVHeight:W,aoMap:L,lightMap:at,bumpMap:K,normalMap:ot,displacementMap:f&&$,emissiveMap:Et,normalMapObjectSpace:ot&&x.normalMapType===bf,normalMapTangentSpace:ot&&x.normalMapType===Tf,metalnessMap:mt,roughnessMap:gt,anisotropy:Ct,anisotropyMap:X,clearcoat:zt,clearcoatMap:st,clearcoatNormalMap:rt,clearcoatRoughnessMap:P,iridescence:jt,iridescenceMap:Q,iridescenceThicknessMap:it,sheen:R,sheenColorMap:H,sheenRoughnessMap:Mt,specularMap:bt,specularColorMap:Tt,specularIntensityMap:yt,transmission:E,transmissionMap:vt,thicknessMap:Pt,gradientMap:kt,opaque:x.transparent===!1&&x.blending===$i,alphaMap:D,alphaTest:ft,combine:x.combine,mapUv:wt&&_(x.map.channel),aoMapUv:L&&_(x.aoMap.channel),lightMapUv:at&&_(x.lightMap.channel),bumpMapUv:K&&_(x.bumpMap.channel),normalMapUv:ot&&_(x.normalMap.channel),displacementMapUv:$&&_(x.displacementMap.channel),emissiveMapUv:Et&&_(x.emissiveMap.channel),metalnessMapUv:mt&&_(x.metalnessMap.channel),roughnessMapUv:gt&&_(x.roughnessMap.channel),anisotropyMapUv:X&&_(x.anisotropyMap.channel),clearcoatMapUv:st&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:rt&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:P&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:it&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:H&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&_(x.sheenRoughnessMap.channel),specularMapUv:bt&&_(x.specularMap.channel),specularColorMapUv:Tt&&_(x.specularColorMap.channel),specularIntensityMapUv:yt&&_(x.specularIntensityMap.channel),transmissionMapUv:vt&&_(x.transmissionMap.channel),thicknessMapUv:Pt&&_(x.thicknessMap.channel),alphaMapUv:D&&_(x.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(ot||Ct),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUv1s:lt,vertexUv2s:pt,vertexUv3s:Wt,pointsUvs:I.isPoints===!0&&!!z.attributes.uv&&(wt||D),fog:!!F,useFog:x.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:I.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:dt,morphTextureStride:O,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&B.length>0,shadowMapType:r.shadowMap.type,toneMapping:x.toneMapped?r.toneMapping:In,useLegacyLights:r.useLegacyLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ln,flipSided:x.side===Pe,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:V&&x.extensions.derivatives===!0,extensionFragDepth:V&&x.extensions.fragDepth===!0,extensionDrawBuffers:V&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:V&&x.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function d(x){const b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(const B in x.defines)b.push(B),b.push(x.defines[B]);return x.isRawShaderMaterial===!1&&(S(b,x),v(b,x),b.push(r.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function S(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function v(x,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),x.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.useLegacyLights&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),x.push(a.mask)}function M(x){const b=g[x.type];let B;if(b){const j=dn[b];B=nd.clone(j.uniforms)}else B=x.uniforms;return B}function y(x,b){let B;for(let j=0,I=c.length;j<I;j++){const F=c[j];if(F.cacheKey===b){B=F,++B.usedTimes;break}}return B===void 0&&(B=new ug(r,b,x,s),c.push(B)),B}function T(x){if(--x.usedTimes===0){const b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),x.destroy()}}function w(x){l.remove(x)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:M,acquireProgram:y,releaseProgram:T,releaseShaderCache:w,programs:c,dispose:C}}function mg(){let r=new WeakMap;function t(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function e(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function _g(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function uc(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function hc(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(h,f,p,g,_,m){let d=r[t];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},r[t]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=_,d.group=m),t++,d}function a(h,f,p,g,_,m){const d=o(h,f,p,g,_,m);p.transmission>0?n.push(d):p.transparent===!0?i.push(d):e.push(d)}function l(h,f,p,g,_,m){const d=o(h,f,p,g,_,m);p.transmission>0?n.unshift(d):p.transparent===!0?i.unshift(d):e.unshift(d)}function c(h,f){e.length>1&&e.sort(h||_g),n.length>1&&n.sort(f||uc),i.length>1&&i.sort(f||uc)}function u(){for(let h=t,f=r.length;h<f;h++){const p=r[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function gg(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new hc,r.set(n,[o])):i>=s.length?(o=new hc,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function vg(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new qt};break;case"SpotLight":e={position:new U,direction:new U,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new U,halfWidth:new U,halfHeight:new U};break}return r[t.id]=e,e}}}function xg(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let Mg=0;function Sg(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function yg(r,t){const e=new vg,n=xg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new U);const s=new U,o=new ue,a=new ue;function l(u,h){let f=0,p=0,g=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let _=0,m=0,d=0,S=0,v=0,M=0,y=0,T=0,w=0,C=0;u.sort(Sg);const x=h===!0?Math.PI:1;for(let B=0,j=u.length;B<j;B++){const I=u[B],F=I.color,z=I.intensity,q=I.distance,k=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)f+=F.r*z*x,p+=F.g*z*x,g+=F.b*z*x;else if(I.isLightProbe)for(let W=0;W<9;W++)i.probe[W].addScaledVector(I.sh.coefficients[W],z);else if(I.isDirectionalLight){const W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity*x),I.castShadow){const et=I.shadow,J=n.get(I);J.shadowBias=et.bias,J.shadowNormalBias=et.normalBias,J.shadowRadius=et.radius,J.shadowMapSize=et.mapSize,i.directionalShadow[_]=J,i.directionalShadowMap[_]=k,i.directionalShadowMatrix[_]=I.shadow.matrix,M++}i.directional[_]=W,_++}else if(I.isSpotLight){const W=e.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(F).multiplyScalar(z*x),W.distance=q,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,i.spot[d]=W;const et=I.shadow;if(I.map&&(i.spotLightMap[w]=I.map,w++,et.updateMatrices(I),I.castShadow&&C++),i.spotLightMatrix[d]=et.matrix,I.castShadow){const J=n.get(I);J.shadowBias=et.bias,J.shadowNormalBias=et.normalBias,J.shadowRadius=et.radius,J.shadowMapSize=et.mapSize,i.spotShadow[d]=J,i.spotShadowMap[d]=k,T++}d++}else if(I.isRectAreaLight){const W=e.get(I);W.color.copy(F).multiplyScalar(z),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),i.rectArea[S]=W,S++}else if(I.isPointLight){const W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity*x),W.distance=I.distance,W.decay=I.decay,I.castShadow){const et=I.shadow,J=n.get(I);J.shadowBias=et.bias,J.shadowNormalBias=et.normalBias,J.shadowRadius=et.radius,J.shadowMapSize=et.mapSize,J.shadowCameraNear=et.camera.near,J.shadowCameraFar=et.camera.far,i.pointShadow[m]=J,i.pointShadowMap[m]=k,i.pointShadowMatrix[m]=I.shadow.matrix,y++}i.point[m]=W,m++}else if(I.isHemisphereLight){const W=e.get(I);W.skyColor.copy(I.color).multiplyScalar(z*x),W.groundColor.copy(I.groundColor).multiplyScalar(z*x),i.hemi[v]=W,v++}}S>0&&(t.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ut.LTC_FLOAT_1,i.rectAreaLTC2=ut.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ut.LTC_HALF_1,i.rectAreaLTC2=ut.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=p,i.ambient[2]=g;const b=i.hash;(b.directionalLength!==_||b.pointLength!==m||b.spotLength!==d||b.rectAreaLength!==S||b.hemiLength!==v||b.numDirectionalShadows!==M||b.numPointShadows!==y||b.numSpotShadows!==T||b.numSpotMaps!==w)&&(i.directional.length=_,i.spot.length=d,i.rectArea.length=S,i.point.length=m,i.hemi.length=v,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=T+w-C,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=C,b.directionalLength=_,b.pointLength=m,b.spotLength=d,b.rectAreaLength=S,b.hemiLength=v,b.numDirectionalShadows=M,b.numPointShadows=y,b.numSpotShadows=T,b.numSpotMaps=w,i.version=Mg++)}function c(u,h){let f=0,p=0,g=0,_=0,m=0;const d=h.matrixWorldInverse;for(let S=0,v=u.length;S<v;S++){const M=u[S];if(M.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(d),f++}else if(M.isSpotLight){const y=i.spot[g];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(d),y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(d),g++}else if(M.isRectAreaLight){const y=i.rectArea[_];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(d),a.identity(),o.copy(M.matrixWorld),o.premultiply(d),a.extractRotation(o),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){const y=i.point[p];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(d),p++}else if(M.isHemisphereLight){const y=i.hemi[m];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(d),m++}}}return{setup:l,setupView:c,state:i}}function fc(r,t){const e=new yg(r,t),n=[],i=[];function s(){n.length=0,i.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function l(h){e.setup(n,h)}function c(h){e.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Eg(r,t){let e=new WeakMap;function n(s,o=0){const a=e.get(s);let l;return a===void 0?(l=new fc(r,t),e.set(s,[l])):o>=a.length?(l=new fc(r,t),a.push(l)):l=a[o],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class Tg extends Wr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class bg extends Wr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Ag=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wg=`uniform sampler2D shadow_pass;
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
}`;function Rg(r,t,e){let n=new _u;const i=new ct,s=new ct,o=new ve,a=new Tg({depthPacking:Ef}),l=new bg,c={},u=e.maxTextureSize,h={[jn]:Pe,[Pe]:jn,[Ln]:Ln},f=new Jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:Ag,fragmentShader:wg}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new hn;g.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Un(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xc;let d=this.type;this.render=function(y,T,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||y.length===0)return;const C=r.getRenderTarget(),x=r.getActiveCubeFace(),b=r.getActiveMipmapLevel(),B=r.state;B.setBlending(qn),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const j=d!==Rn&&this.type===Rn,I=d===Rn&&this.type!==Rn;for(let F=0,z=y.length;F<z;F++){const q=y[F],k=q.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);const W=k.getFrameExtents();if(i.multiply(W),s.copy(k.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/W.x),i.x=s.x*W.x,k.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/W.y),i.y=s.y*W.y,k.mapSize.y=s.y)),k.map===null||j===!0||I===!0){const J=this.type!==Rn?{minFilter:we,magFilter:we}:{};k.map!==null&&k.map.dispose(),k.map=new yi(i.x,i.y,J),k.map.texture.name=q.name+".shadowMap",k.camera.updateProjectionMatrix()}r.setRenderTarget(k.map),r.clear();const et=k.getViewportCount();for(let J=0;J<et;J++){const dt=k.getViewport(J);o.set(s.x*dt.x,s.y*dt.y,s.x*dt.z,s.y*dt.w),B.viewport(o),k.updateMatrices(q,J),n=k.getFrustum(),M(T,w,k.camera,q,this.type)}k.isPointLightShadow!==!0&&this.type===Rn&&S(k,w),k.needsUpdate=!1}d=this.type,m.needsUpdate=!1,r.setRenderTarget(C,x,b)};function S(y,T){const w=t.update(_);f.defines.VSM_SAMPLES!==y.blurSamples&&(f.defines.VSM_SAMPLES=y.blurSamples,p.defines.VSM_SAMPLES=y.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new yi(i.x,i.y)),f.uniforms.shadow_pass.value=y.map.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,r.setRenderTarget(y.mapPass),r.clear(),r.renderBufferDirect(T,null,w,f,_,null),p.uniforms.shadow_pass.value=y.mapPass.texture,p.uniforms.resolution.value=y.mapSize,p.uniforms.radius.value=y.radius,r.setRenderTarget(y.map),r.clear(),r.renderBufferDirect(T,null,w,p,_,null)}function v(y,T,w,C){let x=null;const b=w.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(b!==void 0)x=b;else if(x=w.isPointLight===!0?l:a,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const B=x.uuid,j=T.uuid;let I=c[B];I===void 0&&(I={},c[B]=I);let F=I[j];F===void 0&&(F=x.clone(),I[j]=F),x=F}if(x.visible=T.visible,x.wireframe=T.wireframe,C===Rn?x.side=T.shadowSide!==null?T.shadowSide:T.side:x.side=T.shadowSide!==null?T.shadowSide:h[T.side],x.alphaMap=T.alphaMap,x.alphaTest=T.alphaTest,x.map=T.map,x.clipShadows=T.clipShadows,x.clippingPlanes=T.clippingPlanes,x.clipIntersection=T.clipIntersection,x.displacementMap=T.displacementMap,x.displacementScale=T.displacementScale,x.displacementBias=T.displacementBias,x.wireframeLinewidth=T.wireframeLinewidth,x.linewidth=T.linewidth,w.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const B=r.properties.get(x);B.light=w}return x}function M(y,T,w,C,x){if(y.visible===!1)return;if(y.layers.test(T.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&x===Rn)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,y.matrixWorld);const j=t.update(y),I=y.material;if(Array.isArray(I)){const F=j.groups;for(let z=0,q=F.length;z<q;z++){const k=F[z],W=I[k.materialIndex];if(W&&W.visible){const et=v(y,W,C,x);r.renderBufferDirect(w,null,j,et,y,k)}}}else if(I.visible){const F=v(y,I,C,x);r.renderBufferDirect(w,null,j,F,y,null)}}const B=y.children;for(let j=0,I=B.length;j<I;j++)M(B[j],T,w,C,x)}}function Cg(r,t,e){const n=e.isWebGL2;function i(){let D=!1;const ft=new ve;let V=null;const lt=new ve(0,0,0,0);return{setMask:function(pt){V!==pt&&!D&&(r.colorMask(pt,pt,pt,pt),V=pt)},setLocked:function(pt){D=pt},setClear:function(pt,Wt,te,se,ei){ei===!0&&(pt*=se,Wt*=se,te*=se),ft.set(pt,Wt,te,se),lt.equals(ft)===!1&&(r.clearColor(pt,Wt,te,se),lt.copy(ft))},reset:function(){D=!1,V=null,lt.set(-1,0,0,0)}}}function s(){let D=!1,ft=null,V=null,lt=null;return{setTest:function(pt){pt?St(r.DEPTH_TEST):Dt(r.DEPTH_TEST)},setMask:function(pt){ft!==pt&&!D&&(r.depthMask(pt),ft=pt)},setFunc:function(pt){if(V!==pt){switch(pt){case Jh:r.depthFunc(r.NEVER);break;case $h:r.depthFunc(r.ALWAYS);break;case Qh:r.depthFunc(r.LESS);break;case Xo:r.depthFunc(r.LEQUAL);break;case tf:r.depthFunc(r.EQUAL);break;case ef:r.depthFunc(r.GEQUAL);break;case nf:r.depthFunc(r.GREATER);break;case rf:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}V=pt}},setLocked:function(pt){D=pt},setClear:function(pt){lt!==pt&&(r.clearDepth(pt),lt=pt)},reset:function(){D=!1,ft=null,V=null,lt=null}}}function o(){let D=!1,ft=null,V=null,lt=null,pt=null,Wt=null,te=null,se=null,ei=null;return{setTest:function(ee){D||(ee?St(r.STENCIL_TEST):Dt(r.STENCIL_TEST))},setMask:function(ee){ft!==ee&&!D&&(r.stencilMask(ee),ft=ee)},setFunc:function(ee,fn,Te){(V!==ee||lt!==fn||pt!==Te)&&(r.stencilFunc(ee,fn,Te),V=ee,lt=fn,pt=Te)},setOp:function(ee,fn,Te){(Wt!==ee||te!==fn||se!==Te)&&(r.stencilOp(ee,fn,Te),Wt=ee,te=fn,se=Te)},setLocked:function(ee){D=ee},setClear:function(ee){ei!==ee&&(r.clearStencil(ee),ei=ee)},reset:function(){D=!1,ft=null,V=null,lt=null,pt=null,Wt=null,te=null,se=null,ei=null}}}const a=new i,l=new s,c=new o,u=new WeakMap,h=new WeakMap;let f={},p={},g=new WeakMap,_=[],m=null,d=!1,S=null,v=null,M=null,y=null,T=null,w=null,C=null,x=!1,b=null,B=null,j=null,I=null,F=null;const z=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,k=0;const W=r.getParameter(r.VERSION);W.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(W)[1]),q=k>=1):W.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),q=k>=2);let et=null,J={};const dt=r.getParameter(r.SCISSOR_BOX),O=r.getParameter(r.VIEWPORT),nt=new ve().fromArray(dt),tt=new ve().fromArray(O);function ht(D,ft,V,lt){const pt=new Uint8Array(4),Wt=r.createTexture();r.bindTexture(D,Wt),r.texParameteri(D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(D,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let te=0;te<V;te++)n&&(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)?r.texImage3D(ft,0,r.RGBA,1,1,lt,0,r.RGBA,r.UNSIGNED_BYTE,pt):r.texImage2D(ft+te,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,pt);return Wt}const _t={};_t[r.TEXTURE_2D]=ht(r.TEXTURE_2D,r.TEXTURE_2D,1),_t[r.TEXTURE_CUBE_MAP]=ht(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(_t[r.TEXTURE_2D_ARRAY]=ht(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),_t[r.TEXTURE_3D]=ht(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),St(r.DEPTH_TEST),l.setFunc(Xo),$(!1),Et(Ja),St(r.CULL_FACE),K(qn);function St(D){f[D]!==!0&&(r.enable(D),f[D]=!0)}function Dt(D){f[D]!==!1&&(r.disable(D),f[D]=!1)}function wt(D,ft){return p[D]!==ft?(r.bindFramebuffer(D,ft),p[D]=ft,n&&(D===r.DRAW_FRAMEBUFFER&&(p[r.FRAMEBUFFER]=ft),D===r.FRAMEBUFFER&&(p[r.DRAW_FRAMEBUFFER]=ft)),!0):!1}function Xt(D,ft){let V=_,lt=!1;if(D)if(V=g.get(ft),V===void 0&&(V=[],g.set(ft,V)),D.isWebGLMultipleRenderTargets){const pt=D.texture;if(V.length!==pt.length||V[0]!==r.COLOR_ATTACHMENT0){for(let Wt=0,te=pt.length;Wt<te;Wt++)V[Wt]=r.COLOR_ATTACHMENT0+Wt;V.length=pt.length,lt=!0}}else V[0]!==r.COLOR_ATTACHMENT0&&(V[0]=r.COLOR_ATTACHMENT0,lt=!0);else V[0]!==r.BACK&&(V[0]=r.BACK,lt=!0);lt&&(e.isWebGL2?r.drawBuffers(V):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(V))}function Rt(D){return m!==D?(r.useProgram(D),m=D,!0):!1}const L={[Yi]:r.FUNC_ADD,[Gh]:r.FUNC_SUBTRACT,[kh]:r.FUNC_REVERSE_SUBTRACT};if(n)L[el]=r.MIN,L[nl]=r.MAX;else{const D=t.get("EXT_blend_minmax");D!==null&&(L[el]=D.MIN_EXT,L[nl]=D.MAX_EXT)}const at={[Hh]:r.ZERO,[Vh]:r.ONE,[Wh]:r.SRC_COLOR,[qc]:r.SRC_ALPHA,[jh]:r.SRC_ALPHA_SATURATE,[Zh]:r.DST_COLOR,[qh]:r.DST_ALPHA,[Xh]:r.ONE_MINUS_SRC_COLOR,[Yc]:r.ONE_MINUS_SRC_ALPHA,[Kh]:r.ONE_MINUS_DST_COLOR,[Yh]:r.ONE_MINUS_DST_ALPHA};function K(D,ft,V,lt,pt,Wt,te,se){if(D===qn){d===!0&&(Dt(r.BLEND),d=!1);return}if(d===!1&&(St(r.BLEND),d=!0),D!==zh){if(D!==S||se!==x){if((v!==Yi||T!==Yi)&&(r.blendEquation(r.FUNC_ADD),v=Yi,T=Yi),se)switch(D){case $i:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case $a:r.blendFunc(r.ONE,r.ONE);break;case Qa:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case tl:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case $i:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case $a:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Qa:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case tl:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}M=null,y=null,w=null,C=null,S=D,x=se}return}pt=pt||ft,Wt=Wt||V,te=te||lt,(ft!==v||pt!==T)&&(r.blendEquationSeparate(L[ft],L[pt]),v=ft,T=pt),(V!==M||lt!==y||Wt!==w||te!==C)&&(r.blendFuncSeparate(at[V],at[lt],at[Wt],at[te]),M=V,y=lt,w=Wt,C=te),S=D,x=!1}function ot(D,ft){D.side===Ln?Dt(r.CULL_FACE):St(r.CULL_FACE);let V=D.side===Pe;ft&&(V=!V),$(V),D.blending===$i&&D.transparent===!1?K(qn):K(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),a.setMask(D.colorWrite);const lt=D.stencilWrite;c.setTest(lt),lt&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),gt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?St(r.SAMPLE_ALPHA_TO_COVERAGE):Dt(r.SAMPLE_ALPHA_TO_COVERAGE)}function $(D){b!==D&&(D?r.frontFace(r.CW):r.frontFace(r.CCW),b=D)}function Et(D){D!==Oh?(St(r.CULL_FACE),D!==B&&(D===Ja?r.cullFace(r.BACK):D===Fh?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Dt(r.CULL_FACE),B=D}function mt(D){D!==j&&(q&&r.lineWidth(D),j=D)}function gt(D,ft,V){D?(St(r.POLYGON_OFFSET_FILL),(I!==ft||F!==V)&&(r.polygonOffset(ft,V),I=ft,F=V)):Dt(r.POLYGON_OFFSET_FILL)}function Ct(D){D?St(r.SCISSOR_TEST):Dt(r.SCISSOR_TEST)}function zt(D){D===void 0&&(D=r.TEXTURE0+z-1),et!==D&&(r.activeTexture(D),et=D)}function jt(D,ft,V){V===void 0&&(et===null?V=r.TEXTURE0+z-1:V=et);let lt=J[V];lt===void 0&&(lt={type:void 0,texture:void 0},J[V]=lt),(lt.type!==D||lt.texture!==ft)&&(et!==V&&(r.activeTexture(V),et=V),r.bindTexture(D,ft||_t[D]),lt.type=D,lt.texture=ft)}function R(){const D=J[et];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function E(){try{r.compressedTexImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function X(){try{r.compressedTexImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function st(){try{r.texSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function rt(){try{r.texSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function P(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function it(){try{r.texStorage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function H(){try{r.texStorage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Mt(){try{r.texImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function bt(){try{r.texImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Tt(D){nt.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),nt.copy(D))}function yt(D){tt.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),tt.copy(D))}function vt(D,ft){let V=h.get(ft);V===void 0&&(V=new WeakMap,h.set(ft,V));let lt=V.get(D);lt===void 0&&(lt=r.getUniformBlockIndex(ft,D.name),V.set(D,lt))}function Pt(D,ft){const lt=h.get(ft).get(D);u.get(ft)!==lt&&(r.uniformBlockBinding(ft,lt,D.__bindingPointIndex),u.set(ft,lt))}function kt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),f={},et=null,J={},p={},g=new WeakMap,_=[],m=null,d=!1,S=null,v=null,M=null,y=null,T=null,w=null,C=null,x=!1,b=null,B=null,j=null,I=null,F=null,nt.set(0,0,r.canvas.width,r.canvas.height),tt.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:St,disable:Dt,bindFramebuffer:wt,drawBuffers:Xt,useProgram:Rt,setBlending:K,setMaterial:ot,setFlipSided:$,setCullFace:Et,setLineWidth:mt,setPolygonOffset:gt,setScissorTest:Ct,activeTexture:zt,bindTexture:jt,unbindTexture:R,compressedTexImage2D:E,compressedTexImage3D:X,texImage2D:Mt,texImage3D:bt,updateUBOMapping:vt,uniformBlockBinding:Pt,texStorage2D:it,texStorage3D:H,texSubImage2D:st,texSubImage3D:rt,compressedTexSubImage2D:P,compressedTexSubImage3D:Q,scissor:Tt,viewport:yt,reset:kt}}function Pg(r,t,e,n,i,s,o){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const m=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(R,E){return d?new OffscreenCanvas(R,E):Us("canvas")}function v(R,E,X,st){let rt=1;if((R.width>st||R.height>st)&&(rt=st/Math.max(R.width,R.height)),rt<1||E===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const P=E?$o:Math.floor,Q=P(rt*R.width),it=P(rt*R.height);_===void 0&&(_=S(Q,it));const H=X?S(Q,it):_;return H.width=Q,H.height=it,H.getContext("2d").drawImage(R,0,0,Q,it),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+Q+"x"+it+")."),H}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function M(R){return Cl(R.width)&&Cl(R.height)}function y(R){return a?!1:R.wrapS!==an||R.wrapT!==an||R.minFilter!==we&&R.minFilter!==Ze}function T(R,E){return R.generateMipmaps&&E&&R.minFilter!==we&&R.minFilter!==Ze}function w(R){r.generateMipmap(R)}function C(R,E,X,st,rt=!1){if(a===!1)return E;if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let P=E;return E===r.RED&&(X===r.FLOAT&&(P=r.R32F),X===r.HALF_FLOAT&&(P=r.R16F),X===r.UNSIGNED_BYTE&&(P=r.R8)),E===r.RG&&(X===r.FLOAT&&(P=r.RG32F),X===r.HALF_FLOAT&&(P=r.RG16F),X===r.UNSIGNED_BYTE&&(P=r.RG8)),E===r.RGBA&&(X===r.FLOAT&&(P=r.RGBA32F),X===r.HALF_FLOAT&&(P=r.RGBA16F),X===r.UNSIGNED_BYTE&&(P=st===Ot&&rt===!1?r.SRGB8_ALPHA8:r.RGBA8),X===r.UNSIGNED_SHORT_4_4_4_4&&(P=r.RGBA4),X===r.UNSIGNED_SHORT_5_5_5_1&&(P=r.RGB5_A1)),(P===r.R16F||P===r.R32F||P===r.RG16F||P===r.RG32F||P===r.RGBA16F||P===r.RGBA32F)&&t.get("EXT_color_buffer_float"),P}function x(R,E,X){return T(R,X)===!0||R.isFramebufferTexture&&R.minFilter!==we&&R.minFilter!==Ze?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function b(R){return R===we||R===il||R===to?r.NEAREST:r.LINEAR}function B(R){const E=R.target;E.removeEventListener("dispose",B),I(E),E.isVideoTexture&&g.delete(E)}function j(R){const E=R.target;E.removeEventListener("dispose",j),z(E)}function I(R){const E=n.get(R);if(E.__webglInit===void 0)return;const X=R.source,st=m.get(X);if(st){const rt=st[E.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&F(R),Object.keys(st).length===0&&m.delete(X)}n.remove(R)}function F(R){const E=n.get(R);r.deleteTexture(E.__webglTexture);const X=R.source,st=m.get(X);delete st[E.__cacheKey],o.memory.textures--}function z(R){const E=R.texture,X=n.get(R),st=n.get(E);if(st.__webglTexture!==void 0&&(r.deleteTexture(st.__webglTexture),o.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++)r.deleteFramebuffer(X.__webglFramebuffer[rt]),X.__webglDepthbuffer&&r.deleteRenderbuffer(X.__webglDepthbuffer[rt]);else{if(r.deleteFramebuffer(X.__webglFramebuffer),X.__webglDepthbuffer&&r.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&r.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer)for(let rt=0;rt<X.__webglColorRenderbuffer.length;rt++)X.__webglColorRenderbuffer[rt]&&r.deleteRenderbuffer(X.__webglColorRenderbuffer[rt]);X.__webglDepthRenderbuffer&&r.deleteRenderbuffer(X.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let rt=0,P=E.length;rt<P;rt++){const Q=n.get(E[rt]);Q.__webglTexture&&(r.deleteTexture(Q.__webglTexture),o.memory.textures--),n.remove(E[rt])}n.remove(E),n.remove(R)}let q=0;function k(){q=0}function W(){const R=q;return R>=l&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+l),q+=1,R}function et(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function J(R,E){const X=n.get(R);if(R.isVideoTexture&&zt(R),R.isRenderTargetTexture===!1&&R.version>0&&X.__version!==R.version){const st=R.image;if(st===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{wt(X,R,E);return}}e.bindTexture(r.TEXTURE_2D,X.__webglTexture,r.TEXTURE0+E)}function dt(R,E){const X=n.get(R);if(R.version>0&&X.__version!==R.version){wt(X,R,E);return}e.bindTexture(r.TEXTURE_2D_ARRAY,X.__webglTexture,r.TEXTURE0+E)}function O(R,E){const X=n.get(R);if(R.version>0&&X.__version!==R.version){wt(X,R,E);return}e.bindTexture(r.TEXTURE_3D,X.__webglTexture,r.TEXTURE0+E)}function nt(R,E){const X=n.get(R);if(R.version>0&&X.__version!==R.version){Xt(X,R,E);return}e.bindTexture(r.TEXTURE_CUBE_MAP,X.__webglTexture,r.TEXTURE0+E)}const tt={[Zo]:r.REPEAT,[an]:r.CLAMP_TO_EDGE,[Ko]:r.MIRRORED_REPEAT},ht={[we]:r.NEAREST,[il]:r.NEAREST_MIPMAP_NEAREST,[to]:r.NEAREST_MIPMAP_LINEAR,[Ze]:r.LINEAR,[ff]:r.LINEAR_MIPMAP_NEAREST,[Dr]:r.LINEAR_MIPMAP_LINEAR},_t={[wf]:r.NEVER,[If]:r.ALWAYS,[Rf]:r.LESS,[Pf]:r.LEQUAL,[Cf]:r.EQUAL,[Uf]:r.GEQUAL,[Lf]:r.GREATER,[Df]:r.NOTEQUAL};function St(R,E,X){if(X?(r.texParameteri(R,r.TEXTURE_WRAP_S,tt[E.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,tt[E.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,tt[E.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,ht[E.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,ht[E.minFilter])):(r.texParameteri(R,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(R,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(E.wrapS!==an||E.wrapT!==an)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(R,r.TEXTURE_MAG_FILTER,b(E.magFilter)),r.texParameteri(R,r.TEXTURE_MIN_FILTER,b(E.minFilter)),E.minFilter!==we&&E.minFilter!==Ze&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,_t[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const st=t.get("EXT_texture_filter_anisotropic");if(E.magFilter===we||E.minFilter!==to&&E.minFilter!==Dr||E.type===Hn&&t.has("OES_texture_float_linear")===!1||a===!1&&E.type===Ur&&t.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(r.texParameterf(R,st.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function Dt(R,E){let X=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",B));const st=E.source;let rt=m.get(st);rt===void 0&&(rt={},m.set(st,rt));const P=et(E);if(P!==R.__cacheKey){rt[P]===void 0&&(rt[P]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,X=!0),rt[P].usedTimes++;const Q=rt[R.__cacheKey];Q!==void 0&&(rt[R.__cacheKey].usedTimes--,Q.usedTimes===0&&F(E)),R.__cacheKey=P,R.__webglTexture=rt[P].texture}return X}function wt(R,E,X){let st=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(st=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(st=r.TEXTURE_3D);const rt=Dt(R,E),P=E.source;e.bindTexture(st,R.__webglTexture,r.TEXTURE0+X);const Q=n.get(P);if(P.version!==Q.__version||rt===!0){e.activeTexture(r.TEXTURE0+X),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE);const it=y(E)&&M(E.image)===!1;let H=v(E.image,it,!1,u);H=jt(E,H);const Mt=M(H)||a,bt=s.convert(E.format,E.colorSpace);let Tt=s.convert(E.type),yt=C(E.internalFormat,bt,Tt,E.colorSpace);St(st,E,Mt);let vt;const Pt=E.mipmaps,kt=a&&E.isVideoTexture!==!0,D=Q.__version===void 0||rt===!0,ft=x(E,H,Mt);if(E.isDepthTexture)yt=r.DEPTH_COMPONENT,a?E.type===Hn?yt=r.DEPTH_COMPONENT32F:E.type===kn?yt=r.DEPTH_COMPONENT24:E.type===mi?yt=r.DEPTH24_STENCIL8:yt=r.DEPTH_COMPONENT16:E.type===Hn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===_i&&yt===r.DEPTH_COMPONENT&&E.type!==xa&&E.type!==kn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=kn,Tt=s.convert(E.type)),E.format===or&&yt===r.DEPTH_COMPONENT&&(yt=r.DEPTH_STENCIL,E.type!==mi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=mi,Tt=s.convert(E.type))),D&&(kt?e.texStorage2D(r.TEXTURE_2D,1,yt,H.width,H.height):e.texImage2D(r.TEXTURE_2D,0,yt,H.width,H.height,0,bt,Tt,null));else if(E.isDataTexture)if(Pt.length>0&&Mt){kt&&D&&e.texStorage2D(r.TEXTURE_2D,ft,yt,Pt[0].width,Pt[0].height);for(let V=0,lt=Pt.length;V<lt;V++)vt=Pt[V],kt?e.texSubImage2D(r.TEXTURE_2D,V,0,0,vt.width,vt.height,bt,Tt,vt.data):e.texImage2D(r.TEXTURE_2D,V,yt,vt.width,vt.height,0,bt,Tt,vt.data);E.generateMipmaps=!1}else kt?(D&&e.texStorage2D(r.TEXTURE_2D,ft,yt,H.width,H.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,H.width,H.height,bt,Tt,H.data)):e.texImage2D(r.TEXTURE_2D,0,yt,H.width,H.height,0,bt,Tt,H.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){kt&&D&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ft,yt,Pt[0].width,Pt[0].height,H.depth);for(let V=0,lt=Pt.length;V<lt;V++)vt=Pt[V],E.format!==ln?bt!==null?kt?e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,V,0,0,0,vt.width,vt.height,H.depth,bt,vt.data,0,0):e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,V,yt,vt.width,vt.height,H.depth,0,vt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?e.texSubImage3D(r.TEXTURE_2D_ARRAY,V,0,0,0,vt.width,vt.height,H.depth,bt,Tt,vt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,V,yt,vt.width,vt.height,H.depth,0,bt,Tt,vt.data)}else{kt&&D&&e.texStorage2D(r.TEXTURE_2D,ft,yt,Pt[0].width,Pt[0].height);for(let V=0,lt=Pt.length;V<lt;V++)vt=Pt[V],E.format!==ln?bt!==null?kt?e.compressedTexSubImage2D(r.TEXTURE_2D,V,0,0,vt.width,vt.height,bt,vt.data):e.compressedTexImage2D(r.TEXTURE_2D,V,yt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?e.texSubImage2D(r.TEXTURE_2D,V,0,0,vt.width,vt.height,bt,Tt,vt.data):e.texImage2D(r.TEXTURE_2D,V,yt,vt.width,vt.height,0,bt,Tt,vt.data)}else if(E.isDataArrayTexture)kt?(D&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ft,yt,H.width,H.height,H.depth),e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,H.width,H.height,H.depth,bt,Tt,H.data)):e.texImage3D(r.TEXTURE_2D_ARRAY,0,yt,H.width,H.height,H.depth,0,bt,Tt,H.data);else if(E.isData3DTexture)kt?(D&&e.texStorage3D(r.TEXTURE_3D,ft,yt,H.width,H.height,H.depth),e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,H.width,H.height,H.depth,bt,Tt,H.data)):e.texImage3D(r.TEXTURE_3D,0,yt,H.width,H.height,H.depth,0,bt,Tt,H.data);else if(E.isFramebufferTexture){if(D)if(kt)e.texStorage2D(r.TEXTURE_2D,ft,yt,H.width,H.height);else{let V=H.width,lt=H.height;for(let pt=0;pt<ft;pt++)e.texImage2D(r.TEXTURE_2D,pt,yt,V,lt,0,bt,Tt,null),V>>=1,lt>>=1}}else if(Pt.length>0&&Mt){kt&&D&&e.texStorage2D(r.TEXTURE_2D,ft,yt,Pt[0].width,Pt[0].height);for(let V=0,lt=Pt.length;V<lt;V++)vt=Pt[V],kt?e.texSubImage2D(r.TEXTURE_2D,V,0,0,bt,Tt,vt):e.texImage2D(r.TEXTURE_2D,V,yt,bt,Tt,vt);E.generateMipmaps=!1}else kt?(D&&e.texStorage2D(r.TEXTURE_2D,ft,yt,H.width,H.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,bt,Tt,H)):e.texImage2D(r.TEXTURE_2D,0,yt,bt,Tt,H);T(E,Mt)&&w(st),Q.__version=P.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function Xt(R,E,X){if(E.image.length!==6)return;const st=Dt(R,E),rt=E.source;e.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+X);const P=n.get(rt);if(rt.version!==P.__version||st===!0){e.activeTexture(r.TEXTURE0+X),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE);const Q=E.isCompressedTexture||E.image[0].isCompressedTexture,it=E.image[0]&&E.image[0].isDataTexture,H=[];for(let V=0;V<6;V++)!Q&&!it?H[V]=v(E.image[V],!1,!0,c):H[V]=it?E.image[V].image:E.image[V],H[V]=jt(E,H[V]);const Mt=H[0],bt=M(Mt)||a,Tt=s.convert(E.format,E.colorSpace),yt=s.convert(E.type),vt=C(E.internalFormat,Tt,yt,E.colorSpace),Pt=a&&E.isVideoTexture!==!0,kt=P.__version===void 0||st===!0;let D=x(E,Mt,bt);St(r.TEXTURE_CUBE_MAP,E,bt);let ft;if(Q){Pt&&kt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,D,vt,Mt.width,Mt.height);for(let V=0;V<6;V++){ft=H[V].mipmaps;for(let lt=0;lt<ft.length;lt++){const pt=ft[lt];E.format!==ln?Tt!==null?Pt?e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+V,lt,0,0,pt.width,pt.height,Tt,pt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+V,lt,vt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+V,lt,0,0,pt.width,pt.height,Tt,yt,pt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+V,lt,vt,pt.width,pt.height,0,Tt,yt,pt.data)}}}else{ft=E.mipmaps,Pt&&kt&&(ft.length>0&&D++,e.texStorage2D(r.TEXTURE_CUBE_MAP,D,vt,H[0].width,H[0].height));for(let V=0;V<6;V++)if(it){Pt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,0,0,H[V].width,H[V].height,Tt,yt,H[V].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,vt,H[V].width,H[V].height,0,Tt,yt,H[V].data);for(let lt=0;lt<ft.length;lt++){const Wt=ft[lt].image[V].image;Pt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+V,lt+1,0,0,Wt.width,Wt.height,Tt,yt,Wt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+V,lt+1,vt,Wt.width,Wt.height,0,Tt,yt,Wt.data)}}else{Pt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,0,0,Tt,yt,H[V]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,vt,Tt,yt,H[V]);for(let lt=0;lt<ft.length;lt++){const pt=ft[lt];Pt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+V,lt+1,0,0,Tt,yt,pt.image[V]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+V,lt+1,vt,Tt,yt,pt.image[V])}}}T(E,bt)&&w(r.TEXTURE_CUBE_MAP),P.__version=rt.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function Rt(R,E,X,st,rt){const P=s.convert(X.format,X.colorSpace),Q=s.convert(X.type),it=C(X.internalFormat,P,Q,X.colorSpace);n.get(E).__hasExternalTextures||(rt===r.TEXTURE_3D||rt===r.TEXTURE_2D_ARRAY?e.texImage3D(rt,0,it,E.width,E.height,E.depth,0,P,Q,null):e.texImage2D(rt,0,it,E.width,E.height,0,P,Q,null)),e.bindFramebuffer(r.FRAMEBUFFER,R),Ct(E)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,st,rt,n.get(X).__webglTexture,0,gt(E)):(rt===r.TEXTURE_2D||rt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,st,rt,n.get(X).__webglTexture,0),e.bindFramebuffer(r.FRAMEBUFFER,null)}function L(R,E,X){if(r.bindRenderbuffer(r.RENDERBUFFER,R),E.depthBuffer&&!E.stencilBuffer){let st=r.DEPTH_COMPONENT16;if(X||Ct(E)){const rt=E.depthTexture;rt&&rt.isDepthTexture&&(rt.type===Hn?st=r.DEPTH_COMPONENT32F:rt.type===kn&&(st=r.DEPTH_COMPONENT24));const P=gt(E);Ct(E)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,P,st,E.width,E.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,P,st,E.width,E.height)}else r.renderbufferStorage(r.RENDERBUFFER,st,E.width,E.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,R)}else if(E.depthBuffer&&E.stencilBuffer){const st=gt(E);X&&Ct(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,st,r.DEPTH24_STENCIL8,E.width,E.height):Ct(E)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,st,r.DEPTH24_STENCIL8,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,R)}else{const st=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let rt=0;rt<st.length;rt++){const P=st[rt],Q=s.convert(P.format,P.colorSpace),it=s.convert(P.type),H=C(P.internalFormat,Q,it,P.colorSpace),Mt=gt(E);X&&Ct(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Mt,H,E.width,E.height):Ct(E)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Mt,H,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,H,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function at(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),J(E.depthTexture,0);const st=n.get(E.depthTexture).__webglTexture,rt=gt(E);if(E.depthTexture.format===_i)Ct(E)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,st,0,rt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,st,0);else if(E.depthTexture.format===or)Ct(E)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,st,0,rt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,st,0);else throw new Error("Unknown depthTexture format")}function K(R){const E=n.get(R),X=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");at(E.__webglFramebuffer,R)}else if(X){E.__webglDepthbuffer=[];for(let st=0;st<6;st++)e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[st]),E.__webglDepthbuffer[st]=r.createRenderbuffer(),L(E.__webglDepthbuffer[st],R,!1)}else e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=r.createRenderbuffer(),L(E.__webglDepthbuffer,R,!1);e.bindFramebuffer(r.FRAMEBUFFER,null)}function ot(R,E,X){const st=n.get(R);E!==void 0&&Rt(st.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D),X!==void 0&&K(R)}function $(R){const E=R.texture,X=n.get(R),st=n.get(E);R.addEventListener("dispose",j),R.isWebGLMultipleRenderTargets!==!0&&(st.__webglTexture===void 0&&(st.__webglTexture=r.createTexture()),st.__version=E.version,o.memory.textures++);const rt=R.isWebGLCubeRenderTarget===!0,P=R.isWebGLMultipleRenderTargets===!0,Q=M(R)||a;if(rt){X.__webglFramebuffer=[];for(let it=0;it<6;it++)X.__webglFramebuffer[it]=r.createFramebuffer()}else{if(X.__webglFramebuffer=r.createFramebuffer(),P)if(i.drawBuffers){const it=R.texture;for(let H=0,Mt=it.length;H<Mt;H++){const bt=n.get(it[H]);bt.__webglTexture===void 0&&(bt.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&Ct(R)===!1){const it=P?E:[E];X.__webglMultisampledFramebuffer=r.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let H=0;H<it.length;H++){const Mt=it[H];X.__webglColorRenderbuffer[H]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,X.__webglColorRenderbuffer[H]);const bt=s.convert(Mt.format,Mt.colorSpace),Tt=s.convert(Mt.type),yt=C(Mt.internalFormat,bt,Tt,Mt.colorSpace,R.isXRRenderTarget===!0),vt=gt(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,vt,yt,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+H,r.RENDERBUFFER,X.__webglColorRenderbuffer[H])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(X.__webglDepthRenderbuffer=r.createRenderbuffer(),L(X.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(rt){e.bindTexture(r.TEXTURE_CUBE_MAP,st.__webglTexture),St(r.TEXTURE_CUBE_MAP,E,Q);for(let it=0;it<6;it++)Rt(X.__webglFramebuffer[it],R,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+it);T(E,Q)&&w(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(P){const it=R.texture;for(let H=0,Mt=it.length;H<Mt;H++){const bt=it[H],Tt=n.get(bt);e.bindTexture(r.TEXTURE_2D,Tt.__webglTexture),St(r.TEXTURE_2D,bt,Q),Rt(X.__webglFramebuffer,R,bt,r.COLOR_ATTACHMENT0+H,r.TEXTURE_2D),T(bt,Q)&&w(r.TEXTURE_2D)}e.unbindTexture()}else{let it=r.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?it=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(it,st.__webglTexture),St(it,E,Q),Rt(X.__webglFramebuffer,R,E,r.COLOR_ATTACHMENT0,it),T(E,Q)&&w(it),e.unbindTexture()}R.depthBuffer&&K(R)}function Et(R){const E=M(R)||a,X=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let st=0,rt=X.length;st<rt;st++){const P=X[st];if(T(P,E)){const Q=R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,it=n.get(P).__webglTexture;e.bindTexture(Q,it),w(Q),e.unbindTexture()}}}function mt(R){if(a&&R.samples>0&&Ct(R)===!1){const E=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],X=R.width,st=R.height;let rt=r.COLOR_BUFFER_BIT;const P=[],Q=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,it=n.get(R),H=R.isWebGLMultipleRenderTargets===!0;if(H)for(let Mt=0;Mt<E.length;Mt++)e.bindFramebuffer(r.FRAMEBUFFER,it.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Mt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,it.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Mt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,it.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,it.__webglFramebuffer);for(let Mt=0;Mt<E.length;Mt++){P.push(r.COLOR_ATTACHMENT0+Mt),R.depthBuffer&&P.push(Q);const bt=it.__ignoreDepthValues!==void 0?it.__ignoreDepthValues:!1;if(bt===!1&&(R.depthBuffer&&(rt|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&(rt|=r.STENCIL_BUFFER_BIT)),H&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,it.__webglColorRenderbuffer[Mt]),bt===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[Q]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[Q])),H){const Tt=n.get(E[Mt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Tt,0)}r.blitFramebuffer(0,0,X,st,0,0,X,st,rt,r.NEAREST),p&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,P)}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),H)for(let Mt=0;Mt<E.length;Mt++){e.bindFramebuffer(r.FRAMEBUFFER,it.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Mt,r.RENDERBUFFER,it.__webglColorRenderbuffer[Mt]);const bt=n.get(E[Mt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,it.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Mt,r.TEXTURE_2D,bt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,it.__webglMultisampledFramebuffer)}}function gt(R){return Math.min(h,R.samples)}function Ct(R){const E=n.get(R);return a&&R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function zt(R){const E=o.render.frame;g.get(R)!==E&&(g.set(R,E),R.update())}function jt(R,E){const X=R.colorSpace,st=R.format,rt=R.type;return R.isCompressedTexture===!0||R.format===jo||X!==gn&&X!==vi&&(X===Ot?a===!1?t.has("EXT_sRGB")===!0&&st===ln?(R.format=jo,R.minFilter=Ze,R.generateMipmaps=!1):E=su.sRGBToLinear(E):(st!==ln||rt!==Yn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),E}this.allocateTextureUnit=W,this.resetTextureUnits=k,this.setTexture2D=J,this.setTexture2DArray=dt,this.setTexture3D=O,this.setTextureCube=nt,this.rebindTextures=ot,this.setupRenderTarget=$,this.updateRenderTargetMipmap=Et,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=K,this.setupFrameBufferTexture=Rt,this.useMultisampledRTT=Ct}function Lg(r,t,e){const n=e.isWebGL2;function i(s,o=vi){let a;if(s===Yn)return r.UNSIGNED_BYTE;if(s===Jc)return r.UNSIGNED_SHORT_4_4_4_4;if(s===$c)return r.UNSIGNED_SHORT_5_5_5_1;if(s===df)return r.BYTE;if(s===pf)return r.SHORT;if(s===xa)return r.UNSIGNED_SHORT;if(s===jc)return r.INT;if(s===kn)return r.UNSIGNED_INT;if(s===Hn)return r.FLOAT;if(s===Ur)return n?r.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===mf)return r.ALPHA;if(s===ln)return r.RGBA;if(s===_f)return r.LUMINANCE;if(s===gf)return r.LUMINANCE_ALPHA;if(s===_i)return r.DEPTH_COMPONENT;if(s===or)return r.DEPTH_STENCIL;if(s===jo)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===vf)return r.RED;if(s===Qc)return r.RED_INTEGER;if(s===xf)return r.RG;if(s===tu)return r.RG_INTEGER;if(s===eu)return r.RGBA_INTEGER;if(s===eo||s===no||s===io||s===ro)if(o===Ot)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===eo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===no)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===io)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ro)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===eo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===no)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===io)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ro)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===rl||s===sl||s===ol||s===al)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===rl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===sl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ol)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===al)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Mf)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===ll||s===cl)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===ll)return o===Ot?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===cl)return o===Ot?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ul||s===hl||s===fl||s===dl||s===pl||s===ml||s===_l||s===gl||s===vl||s===xl||s===Ml||s===Sl||s===yl||s===El)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===ul)return o===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===hl)return o===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===fl)return o===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===dl)return o===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===pl)return o===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ml)return o===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===_l)return o===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===gl)return o===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===vl)return o===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===xl)return o===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ml)return o===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Sl)return o===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===yl)return o===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===El)return o===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===so)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===so)return o===Ot?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Sf||s===Tl||s===bl||s===Al)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(s===so)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Tl)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===bl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Al)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===mi?n?r.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class Dg extends je{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class _s extends Le{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ug={type:"move"};class Co{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _s,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _s,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _s,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),d=this._getHandJoint(c,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ug)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new _s;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Ig extends He{constructor(t,e,n,i,s,o,a,l,c,u){if(u=u!==void 0?u:_i,u!==_i&&u!==or)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===_i&&(n=kn),n===void 0&&u===or&&(n=mi),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:we,this.minFilter=l!==void 0?l:we,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Ng extends Ai{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,g=null;const _=e.getContextAttributes();let m=null,d=null;const S=[],v=[];let M=null;const y=new je;y.layers.enable(1),y.viewport=new ve;const T=new je;T.layers.enable(2),T.viewport=new ve;const w=[y,T],C=new Dg;C.layers.enable(1),C.layers.enable(2);let x=null,b=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getCamera=function(){},this.setUserCamera=function(O){M=O},this.getController=function(O){let nt=S[O];return nt===void 0&&(nt=new Co,S[O]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(O){let nt=S[O];return nt===void 0&&(nt=new Co,S[O]=nt),nt.getGripSpace()},this.getHand=function(O){let nt=S[O];return nt===void 0&&(nt=new Co,S[O]=nt),nt.getHandSpace()};function B(O){const nt=v.indexOf(O.inputSource);if(nt===-1)return;const tt=S[nt];tt!==void 0&&(tt.update(O.inputSource,O.frame,c||o),tt.dispatchEvent({type:O.type,data:O.inputSource}))}function j(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",j),i.removeEventListener("inputsourceschange",I);for(let O=0;O<S.length;O++){const nt=v[O];nt!==null&&(v[O]=null,S[O].disconnect(nt))}x=null,b=null,t.setRenderTarget(m),p=null,f=null,h=null,i=null,d=null,dt.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){s=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){a=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(O){c=O},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(O){if(i=O,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",j),i.addEventListener("inputsourceschange",I),_.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const nt={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,e,nt),i.updateRenderState({baseLayer:p}),d=new yi(p.framebufferWidth,p.framebufferHeight,{format:ln,type:Yn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let nt=null,tt=null,ht=null;_.depth&&(ht=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=_.stencil?or:_i,tt=_.stencil?mi:kn);const _t={colorFormat:e.RGBA8,depthFormat:ht,scaleFactor:s};h=new XRWebGLBinding(i,e),f=h.createProjectionLayer(_t),i.updateRenderState({layers:[f]}),d=new yi(f.textureWidth,f.textureHeight,{format:ln,type:Yn,depthTexture:new Ig(f.textureWidth,f.textureHeight,tt,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});const St=t.properties.get(d);St.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),dt.setContext(i),dt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function I(O){for(let nt=0;nt<O.removed.length;nt++){const tt=O.removed[nt],ht=v.indexOf(tt);ht>=0&&(v[ht]=null,S[ht].disconnect(tt))}for(let nt=0;nt<O.added.length;nt++){const tt=O.added[nt];let ht=v.indexOf(tt);if(ht===-1){for(let St=0;St<S.length;St++)if(St>=v.length){v.push(tt),ht=St;break}else if(v[St]===null){v[St]=tt,ht=St;break}if(ht===-1)break}const _t=S[ht];_t&&_t.connect(tt)}}const F=new U,z=new U;function q(O,nt,tt){F.setFromMatrixPosition(nt.matrixWorld),z.setFromMatrixPosition(tt.matrixWorld);const ht=F.distanceTo(z),_t=nt.projectionMatrix.elements,St=tt.projectionMatrix.elements,Dt=_t[14]/(_t[10]-1),wt=_t[14]/(_t[10]+1),Xt=(_t[9]+1)/_t[5],Rt=(_t[9]-1)/_t[5],L=(_t[8]-1)/_t[0],at=(St[8]+1)/St[0],K=Dt*L,ot=Dt*at,$=ht/(-L+at),Et=$*-L;nt.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(Et),O.translateZ($),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert();const mt=Dt+$,gt=wt+$,Ct=K-Et,zt=ot+(ht-Et),jt=Xt*wt/gt*mt,R=Rt*wt/gt*mt;O.projectionMatrix.makePerspective(Ct,zt,jt,R,mt,gt),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}function k(O,nt){nt===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(nt.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCameraXR=function(O){if(i===null)return O;M&&(O=M),C.near=T.near=y.near=O.near,C.far=T.far=y.far=O.far,(x!==C.near||b!==C.far)&&(i.updateRenderState({depthNear:C.near,depthFar:C.far}),x=C.near,b=C.far);const nt=O.parent,tt=C.cameras;k(C,nt);for(let ht=0;ht<tt.length;ht++)k(tt[ht],nt);return tt.length===2?q(C,y,T):C.projectionMatrix.copy(y.projectionMatrix),M&&W(C,nt),C};function W(O,nt){const tt=M;nt===null?tt.matrix.copy(O.matrixWorld):(tt.matrix.copy(nt.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(O.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0);const ht=tt.children;for(let _t=0,St=ht.length;_t<St;_t++)ht[_t].updateMatrixWorld(!0);tt.projectionMatrix.copy(O.projectionMatrix),tt.projectionMatrixInverse.copy(O.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=Jo*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(O){l=O,f!==null&&(f.fixedFoveation=O),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=O)};let et=null;function J(O,nt){if(u=nt.getViewerPose(c||o),g=nt,u!==null){const tt=u.views;p!==null&&(t.setRenderTargetFramebuffer(d,p.framebuffer),t.setRenderTarget(d));let ht=!1;tt.length!==C.cameras.length&&(C.cameras.length=0,ht=!0);for(let _t=0;_t<tt.length;_t++){const St=tt[_t];let Dt=null;if(p!==null)Dt=p.getViewport(St);else{const Xt=h.getViewSubImage(f,St);Dt=Xt.viewport,_t===0&&(t.setRenderTargetTextures(d,Xt.colorTexture,f.ignoreDepthValues?void 0:Xt.depthStencilTexture),t.setRenderTarget(d))}let wt=w[_t];wt===void 0&&(wt=new je,wt.layers.enable(_t),wt.viewport=new ve,w[_t]=wt),wt.matrix.fromArray(St.transform.matrix),wt.matrix.decompose(wt.position,wt.quaternion,wt.scale),wt.projectionMatrix.fromArray(St.projectionMatrix),wt.projectionMatrixInverse.copy(wt.projectionMatrix).invert(),wt.viewport.set(Dt.x,Dt.y,Dt.width,Dt.height),_t===0&&(C.matrix.copy(wt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),ht===!0&&C.cameras.push(wt)}}for(let tt=0;tt<S.length;tt++){const ht=v[tt],_t=S[tt];ht!==null&&_t!==void 0&&_t.update(ht,nt,c||o)}et&&et(O,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),g=null}const dt=new gu;dt.setAnimationLoop(J),this.setAnimationLoop=function(O){et=O},this.dispose=function(){}}}function Og(r,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,du(r)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function i(m,d,S,v,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),h(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,M)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),_(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,S,v):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Pe&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Pe&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const S=t.get(d).envMap;if(S&&(m.envMap.value=S,m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const v=r.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*v,e(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,S,v){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*S,m.scale.value=v*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),t.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,S){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Pe&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const S=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Fg(r,t,e,n){let i={},s={},o=[];const a=e.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(S,v){const M=v.program;n.uniformBlockBinding(S,M)}function c(S,v){let M=i[S.id];M===void 0&&(g(S),M=u(S),i[S.id]=M,S.addEventListener("dispose",m));const y=v.program;n.updateUBOMapping(S,y);const T=t.render.frame;s[S.id]!==T&&(f(S),s[S.id]=T)}function u(S){const v=h();S.__bindingPointIndex=v;const M=r.createBuffer(),y=S.__size,T=S.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,y,T),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,M),M}function h(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const v=i[S.id],M=S.uniforms,y=S.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let T=0,w=M.length;T<w;T++){const C=M[T];if(p(C,T,y)===!0){const x=C.__offset,b=Array.isArray(C.value)?C.value:[C.value];let B=0;for(let j=0;j<b.length;j++){const I=b[j],F=_(I);typeof I=="number"?(C.__data[0]=I,r.bufferSubData(r.UNIFORM_BUFFER,x+B,C.__data)):I.isMatrix3?(C.__data[0]=I.elements[0],C.__data[1]=I.elements[1],C.__data[2]=I.elements[2],C.__data[3]=I.elements[0],C.__data[4]=I.elements[3],C.__data[5]=I.elements[4],C.__data[6]=I.elements[5],C.__data[7]=I.elements[0],C.__data[8]=I.elements[6],C.__data[9]=I.elements[7],C.__data[10]=I.elements[8],C.__data[11]=I.elements[0]):(I.toArray(C.__data,B),B+=F.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,x,C.__data)}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function p(S,v,M){const y=S.value;if(M[v]===void 0){if(typeof y=="number")M[v]=y;else{const T=Array.isArray(y)?y:[y],w=[];for(let C=0;C<T.length;C++)w.push(T[C].clone());M[v]=w}return!0}else if(typeof y=="number"){if(M[v]!==y)return M[v]=y,!0}else{const T=Array.isArray(M[v])?M[v]:[M[v]],w=Array.isArray(y)?y:[y];for(let C=0;C<T.length;C++){const x=T[C];if(x.equals(w[C])===!1)return x.copy(w[C]),!0}}return!1}function g(S){const v=S.uniforms;let M=0;const y=16;let T=0;for(let w=0,C=v.length;w<C;w++){const x=v[w],b={boundary:0,storage:0},B=Array.isArray(x.value)?x.value:[x.value];for(let j=0,I=B.length;j<I;j++){const F=B[j],z=_(F);b.boundary+=z.boundary,b.storage+=z.storage}if(x.__data=new Float32Array(b.storage/Float32Array.BYTES_PER_ELEMENT),x.__offset=M,w>0){T=M%y;const j=y-T;T!==0&&j-b.boundary<0&&(M+=y-T,x.__offset=M)}M+=b.storage}return T=M%y,T>0&&(M+=y-T),S.__size=M,S.__cache={},this}function _(S){const v={boundary:0,storage:0};return typeof S=="number"?(v.boundary=4,v.storage=4):S.isVector2?(v.boundary=8,v.storage=8):S.isVector3||S.isColor?(v.boundary=16,v.storage=12):S.isVector4?(v.boundary=16,v.storage=16):S.isMatrix3?(v.boundary=48,v.storage=48):S.isMatrix4?(v.boundary=64,v.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),v}function m(S){const v=S.target;v.removeEventListener("dispose",m);const M=o.indexOf(v.__bindingPointIndex);o.splice(M,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function d(){for(const S in i)r.deleteBuffer(i[S]);o=[],i={},s={}}return{bind:l,update:c,dispose:d}}function Bg(){const r=Us("canvas");return r.style.display="block",r}class yu{constructor(t={}){const{canvas:e=Bg(),context:n=null,depth:i=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const d=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Ot,this.useLegacyLights=!0,this.toneMapping=In,this.toneMappingExposure=1;const v=this;let M=!1,y=0,T=0,w=null,C=-1,x=null;const b=new ve,B=new ve;let j=null;const I=new qt(0);let F=0,z=e.width,q=e.height,k=1,W=null,et=null;const J=new ve(0,0,z,q),dt=new ve(0,0,z,q);let O=!1;const nt=new _u;let tt=!1,ht=!1,_t=null;const St=new ue,Dt=new ct,wt=new U,Xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Rt(){return w===null?k:1}let L=n;function at(A,G){for(let Y=0;Y<A.length;Y++){const N=A[Y],Z=e.getContext(N,G);if(Z!==null)return Z}return null}try{const A={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${va}`),e.addEventListener("webglcontextlost",ft,!1),e.addEventListener("webglcontextrestored",V,!1),e.addEventListener("webglcontextcreationerror",lt,!1),L===null){const G=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&G.shift(),L=at(G,A),L===null)throw at(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}L instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),L.getShaderPrecisionFormat===void 0&&(L.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let K,ot,$,Et,mt,gt,Ct,zt,jt,R,E,X,st,rt,P,Q,it,H,Mt,bt,Tt,yt,vt,Pt;function kt(){K=new Km(L),ot=new Hm(L,K,t),K.init(ot),yt=new Lg(L,K,ot),$=new Cg(L,K,ot),Et=new $m(L),mt=new mg,gt=new Pg(L,K,$,mt,ot,yt,Et),Ct=new Wm(v),zt=new Zm(v),jt=new cd(L,ot),vt=new Gm(L,K,jt,ot),R=new jm(L,jt,Et,vt),E=new n_(L,R,jt,Et),Mt=new e_(L,ot,gt),Q=new Vm(mt),X=new pg(v,Ct,zt,K,ot,vt,Q),st=new Og(v,mt),rt=new gg,P=new Eg(K,ot),H=new zm(v,Ct,zt,$,E,f,l),it=new Rg(v,E,ot),Pt=new Fg(L,Et,ot,$),bt=new km(L,K,Et,ot),Tt=new Jm(L,K,Et,ot),Et.programs=X.programs,v.capabilities=ot,v.extensions=K,v.properties=mt,v.renderLists=rt,v.shadowMap=it,v.state=$,v.info=Et}kt();const D=new Ng(v,L);this.xr=D,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const A=K.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=K.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(A){A!==void 0&&(k=A,this.setSize(z,q,!1))},this.getSize=function(A){return A.set(z,q)},this.setSize=function(A,G,Y=!0){if(D.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=A,q=G,e.width=Math.floor(A*k),e.height=Math.floor(G*k),Y===!0&&(e.style.width=A+"px",e.style.height=G+"px"),this.setViewport(0,0,A,G)},this.getDrawingBufferSize=function(A){return A.set(z*k,q*k).floor()},this.setDrawingBufferSize=function(A,G,Y){z=A,q=G,k=Y,e.width=Math.floor(A*Y),e.height=Math.floor(G*Y),this.setViewport(0,0,A,G)},this.getCurrentViewport=function(A){return A.copy(b)},this.getViewport=function(A){return A.copy(J)},this.setViewport=function(A,G,Y,N){A.isVector4?J.set(A.x,A.y,A.z,A.w):J.set(A,G,Y,N),$.viewport(b.copy(J).multiplyScalar(k).floor())},this.getScissor=function(A){return A.copy(dt)},this.setScissor=function(A,G,Y,N){A.isVector4?dt.set(A.x,A.y,A.z,A.w):dt.set(A,G,Y,N),$.scissor(B.copy(dt).multiplyScalar(k).floor())},this.getScissorTest=function(){return O},this.setScissorTest=function(A){$.setScissorTest(O=A)},this.setOpaqueSort=function(A){W=A},this.setTransparentSort=function(A){et=A},this.getClearColor=function(A){return A.copy(H.getClearColor())},this.setClearColor=function(){H.setClearColor.apply(H,arguments)},this.getClearAlpha=function(){return H.getClearAlpha()},this.setClearAlpha=function(){H.setClearAlpha.apply(H,arguments)},this.clear=function(A=!0,G=!0,Y=!0){let N=0;if(A){let Z=!1;if(w!==null){const xt=w.texture.format;Z=xt===eu||xt===tu||xt===Qc}if(Z){const xt=w.texture.type,At=xt===Yn||xt===kn||xt===xa||xt===mi||xt===Jc||xt===$c,Lt=H.getClearColor(),Ut=H.getClearAlpha(),Gt=Lt.r,It=Lt.g,Nt=Lt.b,Kt=mt.get(w).__webglFramebuffer;At?(p[0]=Gt,p[1]=It,p[2]=Nt,p[3]=Ut,L.clearBufferuiv(L.COLOR,Kt,p)):(g[0]=Gt,g[1]=It,g[2]=Nt,g[3]=Ut,L.clearBufferiv(L.COLOR,Kt,g))}else N|=L.COLOR_BUFFER_BIT}G&&(N|=L.DEPTH_BUFFER_BIT),Y&&(N|=L.STENCIL_BUFFER_BIT),L.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ft,!1),e.removeEventListener("webglcontextrestored",V,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),rt.dispose(),P.dispose(),mt.dispose(),Ct.dispose(),zt.dispose(),E.dispose(),vt.dispose(),Pt.dispose(),X.dispose(),D.dispose(),D.removeEventListener("sessionstart",ee),D.removeEventListener("sessionend",fn),_t&&(_t.dispose(),_t=null),Te.stop()};function ft(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function V(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const A=Et.autoReset,G=it.enabled,Y=it.autoUpdate,N=it.needsUpdate,Z=it.type;kt(),Et.autoReset=A,it.enabled=G,it.autoUpdate=Y,it.needsUpdate=N,it.type=Z}function lt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function pt(A){const G=A.target;G.removeEventListener("dispose",pt),Wt(G)}function Wt(A){te(A),mt.remove(A)}function te(A){const G=mt.get(A).programs;G!==void 0&&(G.forEach(function(Y){X.releaseProgram(Y)}),A.isShaderMaterial&&X.releaseShaderCache(A))}this.renderBufferDirect=function(A,G,Y,N,Z,xt){G===null&&(G=Xt);const At=Z.isMesh&&Z.matrixWorld.determinant()<0,Lt=Dh(A,G,Y,N,Z);$.setMaterial(N,At);let Ut=Y.index,Gt=1;N.wireframe===!0&&(Ut=R.getWireframeAttribute(Y),Gt=2);const It=Y.drawRange,Nt=Y.attributes.position;let Kt=It.start*Gt,ie=(It.start+It.count)*Gt;xt!==null&&(Kt=Math.max(Kt,xt.start*Gt),ie=Math.min(ie,(xt.start+xt.count)*Gt)),Ut!==null?(Kt=Math.max(Kt,0),ie=Math.min(ie,Ut.count)):Nt!=null&&(Kt=Math.max(Kt,0),ie=Math.min(ie,Nt.count));const en=ie-Kt;if(en<0||en===1/0)return;vt.setup(Z,N,Lt,Y,Ut);let Mn,oe=bt;if(Ut!==null&&(Mn=jt.get(Ut),oe=Tt,oe.setIndex(Mn)),Z.isMesh)N.wireframe===!0?($.setLineWidth(N.wireframeLinewidth*Rt()),oe.setMode(L.LINES)):oe.setMode(L.TRIANGLES);else if(Z.isLine){let Vt=N.linewidth;Vt===void 0&&(Vt=1),$.setLineWidth(Vt*Rt()),Z.isLineSegments?oe.setMode(L.LINES):Z.isLineLoop?oe.setMode(L.LINE_LOOP):oe.setMode(L.LINE_STRIP)}else Z.isPoints?oe.setMode(L.POINTS):Z.isSprite&&oe.setMode(L.TRIANGLES);if(Z.isInstancedMesh)oe.renderInstances(Kt,en,Z.count);else if(Y.isInstancedBufferGeometry){const Vt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,js=Math.min(Y.instanceCount,Vt);oe.renderInstances(Kt,en,js)}else oe.render(Kt,en)},this.compile=function(A,G){function Y(N,Z,xt){N.transparent===!0&&N.side===Ln&&N.forceSinglePass===!1?(N.side=Pe,N.needsUpdate=!0,Zr(N,Z,xt),N.side=jn,N.needsUpdate=!0,Zr(N,Z,xt),N.side=Ln):Zr(N,Z,xt)}m=P.get(A),m.init(),S.push(m),A.traverseVisible(function(N){N.isLight&&N.layers.test(G.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),m.setupLights(v.useLegacyLights),A.traverse(function(N){const Z=N.material;if(Z)if(Array.isArray(Z))for(let xt=0;xt<Z.length;xt++){const At=Z[xt];Y(At,A,N)}else Y(Z,A,N)}),S.pop(),m=null};let se=null;function ei(A){se&&se(A)}function ee(){Te.stop()}function fn(){Te.start()}const Te=new gu;Te.setAnimationLoop(ei),typeof self<"u"&&Te.setContext(self),this.setAnimationLoop=function(A){se=A,D.setAnimationLoop(A),A===null?Te.stop():Te.start()},D.addEventListener("sessionstart",ee),D.addEventListener("sessionend",fn),this.render=function(A,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),D.enabled===!0&&D.isPresenting===!0&&(G=D.updateCameraXR(G)),A.isScene===!0&&A.onBeforeRender(v,A,G,w),m=P.get(A,S.length),m.init(),S.push(m),St.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),nt.setFromProjectionMatrix(St),ht=this.localClippingEnabled,tt=Q.init(this.clippingPlanes,ht),_=rt.get(A,d.length),_.init(),d.push(_),Xa(A,G,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(W,et),tt===!0&&Q.beginShadows();const Y=m.state.shadowsArray;if(it.render(Y,A,G),tt===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset(),this.info.render.frame++,H.render(_,A),m.setupLights(v.useLegacyLights),G.isArrayCamera){const N=G.cameras;for(let Z=0,xt=N.length;Z<xt;Z++){const At=N[Z];qa(_,A,At,At.viewport)}}else qa(_,A,G);w!==null&&(gt.updateMultisampleRenderTarget(w),gt.updateRenderTargetMipmap(w)),A.isScene===!0&&A.onAfterRender(v,A,G),vt.resetDefaultState(),C=-1,x=null,S.pop(),S.length>0?m=S[S.length-1]:m=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function Xa(A,G,Y,N){if(A.visible===!1)return;if(A.layers.test(G.layers)){if(A.isGroup)Y=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(G);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||nt.intersectsSprite(A)){N&&wt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(St);const At=E.update(A),Lt=A.material;Lt.visible&&_.push(A,At,Lt,Y,wt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||nt.intersectsObject(A))){A.isSkinnedMesh&&A.skeleton.frame!==Et.render.frame&&(A.skeleton.update(),A.skeleton.frame=Et.render.frame);const At=E.update(A),Lt=A.material;if(N&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),wt.copy(A.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),wt.copy(At.boundingSphere.center)),wt.applyMatrix4(A.matrixWorld).applyMatrix4(St)),Array.isArray(Lt)){const Ut=At.groups;for(let Gt=0,It=Ut.length;Gt<It;Gt++){const Nt=Ut[Gt],Kt=Lt[Nt.materialIndex];Kt&&Kt.visible&&_.push(A,At,Kt,Y,wt.z,Nt)}}else Lt.visible&&_.push(A,At,Lt,Y,wt.z,null)}}const xt=A.children;for(let At=0,Lt=xt.length;At<Lt;At++)Xa(xt[At],G,Y,N)}function qa(A,G,Y,N){const Z=A.opaque,xt=A.transmissive,At=A.transparent;m.setupLightsView(Y),tt===!0&&Q.setGlobalState(v.clippingPlanes,Y),xt.length>0&&Lh(Z,xt,G,Y),N&&$.viewport(b.copy(N)),Z.length>0&&Yr(Z,G,Y),xt.length>0&&Yr(xt,G,Y),At.length>0&&Yr(At,G,Y),$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),$.setPolygonOffset(!1)}function Lh(A,G,Y,N){const Z=ot.isWebGL2;_t===null&&(_t=new yi(1,1,{generateMipmaps:!0,type:K.has("EXT_color_buffer_half_float")?Ur:Yn,minFilter:Dr,samples:Z&&a===!0?4:0})),v.getDrawingBufferSize(Dt),Z?_t.setSize(Dt.x,Dt.y):_t.setSize($o(Dt.x),$o(Dt.y));const xt=v.getRenderTarget();v.setRenderTarget(_t),v.getClearColor(I),F=v.getClearAlpha(),F<1&&v.setClearColor(16777215,.5),v.clear();const At=v.toneMapping;v.toneMapping=In,Yr(A,Y,N),gt.updateMultisampleRenderTarget(_t),gt.updateRenderTargetMipmap(_t);let Lt=!1;for(let Ut=0,Gt=G.length;Ut<Gt;Ut++){const It=G[Ut],Nt=It.object,Kt=It.geometry,ie=It.material,en=It.group;if(ie.side===Ln&&Nt.layers.test(N.layers)){const Mn=ie.side;ie.side=Pe,ie.needsUpdate=!0,Ya(Nt,Y,N,Kt,ie,en),ie.side=Mn,ie.needsUpdate=!0,Lt=!0}}Lt===!0&&(gt.updateMultisampleRenderTarget(_t),gt.updateRenderTargetMipmap(_t)),v.setRenderTarget(xt),v.setClearColor(I,F),v.toneMapping=At}function Yr(A,G,Y){const N=G.isScene===!0?G.overrideMaterial:null;for(let Z=0,xt=A.length;Z<xt;Z++){const At=A[Z],Lt=At.object,Ut=At.geometry,Gt=N===null?At.material:N,It=At.group;Lt.layers.test(Y.layers)&&Ya(Lt,G,Y,Ut,Gt,It)}}function Ya(A,G,Y,N,Z,xt){A.onBeforeRender(v,G,Y,N,Z,xt),A.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Z.onBeforeRender(v,G,Y,N,A,xt),Z.transparent===!0&&Z.side===Ln&&Z.forceSinglePass===!1?(Z.side=Pe,Z.needsUpdate=!0,v.renderBufferDirect(Y,G,N,Z,A,xt),Z.side=jn,Z.needsUpdate=!0,v.renderBufferDirect(Y,G,N,Z,A,xt),Z.side=Ln):v.renderBufferDirect(Y,G,N,Z,A,xt),A.onAfterRender(v,G,Y,N,Z,xt)}function Zr(A,G,Y){G.isScene!==!0&&(G=Xt);const N=mt.get(A),Z=m.state.lights,xt=m.state.shadowsArray,At=Z.state.version,Lt=X.getParameters(A,Z.state,xt,G,Y),Ut=X.getProgramCacheKey(Lt);let Gt=N.programs;N.environment=A.isMeshStandardMaterial?G.environment:null,N.fog=G.fog,N.envMap=(A.isMeshStandardMaterial?zt:Ct).get(A.envMap||N.environment),Gt===void 0&&(A.addEventListener("dispose",pt),Gt=new Map,N.programs=Gt);let It=Gt.get(Ut);if(It!==void 0){if(N.currentProgram===It&&N.lightsStateVersion===At)return Za(A,Lt),It}else Lt.uniforms=X.getUniforms(A),A.onBuild(Y,Lt,v),A.onBeforeCompile(Lt,v),It=X.acquireProgram(Lt,Ut),Gt.set(Ut,It),N.uniforms=Lt.uniforms;const Nt=N.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Nt.clippingPlanes=Q.uniform),Za(A,Lt),N.needsLights=Ih(A),N.lightsStateVersion=At,N.needsLights&&(Nt.ambientLightColor.value=Z.state.ambient,Nt.lightProbe.value=Z.state.probe,Nt.directionalLights.value=Z.state.directional,Nt.directionalLightShadows.value=Z.state.directionalShadow,Nt.spotLights.value=Z.state.spot,Nt.spotLightShadows.value=Z.state.spotShadow,Nt.rectAreaLights.value=Z.state.rectArea,Nt.ltc_1.value=Z.state.rectAreaLTC1,Nt.ltc_2.value=Z.state.rectAreaLTC2,Nt.pointLights.value=Z.state.point,Nt.pointLightShadows.value=Z.state.pointShadow,Nt.hemisphereLights.value=Z.state.hemi,Nt.directionalShadowMap.value=Z.state.directionalShadowMap,Nt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Nt.spotShadowMap.value=Z.state.spotShadowMap,Nt.spotLightMatrix.value=Z.state.spotLightMatrix,Nt.spotLightMap.value=Z.state.spotLightMap,Nt.pointShadowMap.value=Z.state.pointShadowMap,Nt.pointShadowMatrix.value=Z.state.pointShadowMatrix);const Kt=It.getUniforms(),ie=ws.seqWithValue(Kt.seq,Nt);return N.currentProgram=It,N.uniformsList=ie,It}function Za(A,G){const Y=mt.get(A);Y.outputColorSpace=G.outputColorSpace,Y.instancing=G.instancing,Y.skinning=G.skinning,Y.morphTargets=G.morphTargets,Y.morphNormals=G.morphNormals,Y.morphColors=G.morphColors,Y.morphTargetsCount=G.morphTargetsCount,Y.numClippingPlanes=G.numClippingPlanes,Y.numIntersection=G.numClipIntersection,Y.vertexAlphas=G.vertexAlphas,Y.vertexTangents=G.vertexTangents,Y.toneMapping=G.toneMapping}function Dh(A,G,Y,N,Z){G.isScene!==!0&&(G=Xt),gt.resetTextureUnits();const xt=G.fog,At=N.isMeshStandardMaterial?G.environment:null,Lt=w===null?v.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:gn,Ut=(N.isMeshStandardMaterial?zt:Ct).get(N.envMap||At),Gt=N.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,It=!!Y.attributes.tangent&&(!!N.normalMap||N.anisotropy>0),Nt=!!Y.morphAttributes.position,Kt=!!Y.morphAttributes.normal,ie=!!Y.morphAttributes.color,en=N.toneMapped?v.toneMapping:In,Mn=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,oe=Mn!==void 0?Mn.length:0,Vt=mt.get(N),js=m.state.lights;if(tt===!0&&(ht===!0||A!==x)){const Oe=A===x&&N.id===C;Q.setState(N,A,Oe)}let de=!1;N.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==js.state.version||Vt.outputColorSpace!==Lt||Z.isInstancedMesh&&Vt.instancing===!1||!Z.isInstancedMesh&&Vt.instancing===!0||Z.isSkinnedMesh&&Vt.skinning===!1||!Z.isSkinnedMesh&&Vt.skinning===!0||Vt.envMap!==Ut||N.fog===!0&&Vt.fog!==xt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==Q.numPlanes||Vt.numIntersection!==Q.numIntersection)||Vt.vertexAlphas!==Gt||Vt.vertexTangents!==It||Vt.morphTargets!==Nt||Vt.morphNormals!==Kt||Vt.morphColors!==ie||Vt.toneMapping!==en||ot.isWebGL2===!0&&Vt.morphTargetsCount!==oe)&&(de=!0):(de=!0,Vt.__version=N.version);let ni=Vt.currentProgram;de===!0&&(ni=Zr(N,G,Z));let Ka=!1,gr=!1,Js=!1;const be=ni.getUniforms(),ii=Vt.uniforms;if($.useProgram(ni.program)&&(Ka=!0,gr=!0,Js=!0),N.id!==C&&(C=N.id,gr=!0),Ka||x!==A){if(be.setValue(L,"projectionMatrix",A.projectionMatrix),ot.logarithmicDepthBuffer&&be.setValue(L,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),x!==A&&(x=A,gr=!0,Js=!0),N.isShaderMaterial||N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshStandardMaterial||N.envMap){const Oe=be.map.cameraPosition;Oe!==void 0&&Oe.setValue(L,wt.setFromMatrixPosition(A.matrixWorld))}(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&be.setValue(L,"isOrthographic",A.isOrthographicCamera===!0),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial||N.isShadowMaterial||Z.isSkinnedMesh)&&be.setValue(L,"viewMatrix",A.matrixWorldInverse)}if(Z.isSkinnedMesh){be.setOptional(L,Z,"bindMatrix"),be.setOptional(L,Z,"bindMatrixInverse");const Oe=Z.skeleton;Oe&&(ot.floatVertexTextures?(Oe.boneTexture===null&&Oe.computeBoneTexture(),be.setValue(L,"boneTexture",Oe.boneTexture,gt),be.setValue(L,"boneTextureSize",Oe.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const $s=Y.morphAttributes;if(($s.position!==void 0||$s.normal!==void 0||$s.color!==void 0&&ot.isWebGL2===!0)&&Mt.update(Z,Y,ni),(gr||Vt.receiveShadow!==Z.receiveShadow)&&(Vt.receiveShadow=Z.receiveShadow,be.setValue(L,"receiveShadow",Z.receiveShadow)),N.isMeshGouraudMaterial&&N.envMap!==null&&(ii.envMap.value=Ut,ii.flipEnvMap.value=Ut.isCubeTexture&&Ut.isRenderTargetTexture===!1?-1:1),gr&&(be.setValue(L,"toneMappingExposure",v.toneMappingExposure),Vt.needsLights&&Uh(ii,Js),xt&&N.fog===!0&&st.refreshFogUniforms(ii,xt),st.refreshMaterialUniforms(ii,N,k,q,_t),ws.upload(L,Vt.uniformsList,ii,gt)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(ws.upload(L,Vt.uniformsList,ii,gt),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&be.setValue(L,"center",Z.center),be.setValue(L,"modelViewMatrix",Z.modelViewMatrix),be.setValue(L,"normalMatrix",Z.normalMatrix),be.setValue(L,"modelMatrix",Z.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){const Oe=N.uniformsGroups;for(let Qs=0,Nh=Oe.length;Qs<Nh;Qs++)if(ot.isWebGL2){const ja=Oe[Qs];Pt.update(ja,ni),Pt.bind(ja,ni)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ni}function Uh(A,G){A.ambientLightColor.needsUpdate=G,A.lightProbe.needsUpdate=G,A.directionalLights.needsUpdate=G,A.directionalLightShadows.needsUpdate=G,A.pointLights.needsUpdate=G,A.pointLightShadows.needsUpdate=G,A.spotLights.needsUpdate=G,A.spotLightShadows.needsUpdate=G,A.rectAreaLights.needsUpdate=G,A.hemisphereLights.needsUpdate=G}function Ih(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(A,G,Y){mt.get(A.texture).__webglTexture=G,mt.get(A.depthTexture).__webglTexture=Y;const N=mt.get(A);N.__hasExternalTextures=!0,N.__hasExternalTextures&&(N.__autoAllocateDepthBuffer=Y===void 0,N.__autoAllocateDepthBuffer||K.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,G){const Y=mt.get(A);Y.__webglFramebuffer=G,Y.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(A,G=0,Y=0){w=A,y=G,T=Y;let N=!0,Z=null,xt=!1,At=!1;if(A){const Ut=mt.get(A);Ut.__useDefaultFramebuffer!==void 0?($.bindFramebuffer(L.FRAMEBUFFER,null),N=!1):Ut.__webglFramebuffer===void 0?gt.setupRenderTarget(A):Ut.__hasExternalTextures&&gt.rebindTextures(A,mt.get(A.texture).__webglTexture,mt.get(A.depthTexture).__webglTexture);const Gt=A.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(At=!0);const It=mt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Z=It[G],xt=!0):ot.isWebGL2&&A.samples>0&&gt.useMultisampledRTT(A)===!1?Z=mt.get(A).__webglMultisampledFramebuffer:Z=It,b.copy(A.viewport),B.copy(A.scissor),j=A.scissorTest}else b.copy(J).multiplyScalar(k).floor(),B.copy(dt).multiplyScalar(k).floor(),j=O;if($.bindFramebuffer(L.FRAMEBUFFER,Z)&&ot.drawBuffers&&N&&$.drawBuffers(A,Z),$.viewport(b),$.scissor(B),$.setScissorTest(j),xt){const Ut=mt.get(A.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ut.__webglTexture,Y)}else if(At){const Ut=mt.get(A.texture),Gt=G||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ut.__webglTexture,Y||0,Gt)}C=-1},this.readRenderTargetPixels=function(A,G,Y,N,Z,xt,At){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=mt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&At!==void 0&&(Lt=Lt[At]),Lt){$.bindFramebuffer(L.FRAMEBUFFER,Lt);try{const Ut=A.texture,Gt=Ut.format,It=Ut.type;if(Gt!==ln&&yt.convert(Gt)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Nt=It===Ur&&(K.has("EXT_color_buffer_half_float")||ot.isWebGL2&&K.has("EXT_color_buffer_float"));if(It!==Yn&&yt.convert(It)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_TYPE)&&!(It===Hn&&(ot.isWebGL2||K.has("OES_texture_float")||K.has("WEBGL_color_buffer_float")))&&!Nt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=A.width-N&&Y>=0&&Y<=A.height-Z&&L.readPixels(G,Y,N,Z,yt.convert(Gt),yt.convert(It),xt)}finally{const Ut=w!==null?mt.get(w).__webglFramebuffer:null;$.bindFramebuffer(L.FRAMEBUFFER,Ut)}}},this.copyFramebufferToTexture=function(A,G,Y=0){const N=Math.pow(2,-Y),Z=Math.floor(G.image.width*N),xt=Math.floor(G.image.height*N);gt.setTexture2D(G,0),L.copyTexSubImage2D(L.TEXTURE_2D,Y,0,0,A.x,A.y,Z,xt),$.unbindTexture()},this.copyTextureToTexture=function(A,G,Y,N=0){const Z=G.image.width,xt=G.image.height,At=yt.convert(Y.format),Lt=yt.convert(Y.type);gt.setTexture2D(Y,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,Y.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,Y.unpackAlignment),G.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,N,A.x,A.y,Z,xt,At,Lt,G.image.data):G.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,N,A.x,A.y,G.mipmaps[0].width,G.mipmaps[0].height,At,G.mipmaps[0].data):L.texSubImage2D(L.TEXTURE_2D,N,A.x,A.y,At,Lt,G.image),N===0&&Y.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),$.unbindTexture()},this.copyTextureToTexture3D=function(A,G,Y,N,Z=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const xt=A.max.x-A.min.x+1,At=A.max.y-A.min.y+1,Lt=A.max.z-A.min.z+1,Ut=yt.convert(N.format),Gt=yt.convert(N.type);let It;if(N.isData3DTexture)gt.setTexture3D(N,0),It=L.TEXTURE_3D;else if(N.isDataArrayTexture)gt.setTexture2DArray(N,0),It=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);const Nt=L.getParameter(L.UNPACK_ROW_LENGTH),Kt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),ie=L.getParameter(L.UNPACK_SKIP_PIXELS),en=L.getParameter(L.UNPACK_SKIP_ROWS),Mn=L.getParameter(L.UNPACK_SKIP_IMAGES),oe=Y.isCompressedTexture?Y.mipmaps[0]:Y.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,oe.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,oe.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,A.min.x),L.pixelStorei(L.UNPACK_SKIP_ROWS,A.min.y),L.pixelStorei(L.UNPACK_SKIP_IMAGES,A.min.z),Y.isDataTexture||Y.isData3DTexture?L.texSubImage3D(It,Z,G.x,G.y,G.z,xt,At,Lt,Ut,Gt,oe.data):Y.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),L.compressedTexSubImage3D(It,Z,G.x,G.y,G.z,xt,At,Lt,Ut,oe.data)):L.texSubImage3D(It,Z,G.x,G.y,G.z,xt,At,Lt,Ut,Gt,oe),L.pixelStorei(L.UNPACK_ROW_LENGTH,Nt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Kt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ie),L.pixelStorei(L.UNPACK_SKIP_ROWS,en),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Mn),Z===0&&N.generateMipmaps&&L.generateMipmap(It),$.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?gt.setTextureCube(A,0):A.isData3DTexture?gt.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?gt.setTexture2DArray(A,0):gt.setTexture2D(A,0),$.unbindTexture()},this.resetState=function(){y=0,T=0,w=null,$.reset(),vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dn}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(t){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!t}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ot?gi:nu}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===gi?Ot:gn}}class zg extends yu{}zg.prototype.isWebGL1Renderer=!0;class Gg extends Le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class kg extends Wr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const dc=new U,pc=new U,mc=new ue,Po=new lu,gs=new Vs;class Hg extends Le{constructor(t=new hn,e=new kg){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)dc.fromBufferAttribute(e,i-1),pc.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=dc.distanceTo(pc);t.setAttribute("lineDistance",new Re(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),gs.copy(n.boundingSphere),gs.applyMatrix4(i),gs.radius+=s,t.ray.intersectsSphere(gs)===!1)return;mc.copy(i).invert(),Po.copy(t.ray).applyMatrix4(mc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new U,u=new U,h=new U,f=new U,p=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const d=Math.max(0,o.start),S=Math.min(g.count,o.start+o.count);for(let v=d,M=S-1;v<M;v+=p){const y=g.getX(v),T=g.getX(v+1);if(c.fromBufferAttribute(m,y),u.fromBufferAttribute(m,T),Po.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const C=t.ray.origin.distanceTo(f);C<t.near||C>t.far||e.push({distance:C,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,o.start),S=Math.min(m.count,o.start+o.count);for(let v=d,M=S-1;v<M;v+=p){if(c.fromBufferAttribute(m,v),u.fromBufferAttribute(m,v+1),Po.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const T=t.ray.origin.distanceTo(f);T<t.near||T>t.far||e.push({distance:T,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const _c=new U,gc=new U;class Vg extends Hg{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)_c.fromBufferAttribute(e,i),gc.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+_c.distanceTo(gc);t.setAttribute("lineDistance",new Re(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class xn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const u=n[i],f=n[i+1]-u,p=(o-u)/f;return(i+p)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=e||(o.isVector2?new ct:new U);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new U,i=[],s=[],o=[],a=new U,l=new ue;for(let p=0;p<=t;p++){const g=p/t;i[p]=this.getTangentAt(g,new U)}s[0]=new U,o[0]=new U;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let p=1;p<=t;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(i[p-1],i[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(_e(i[p-1].dot(i[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(i[p],s[p])}if(e===!0){let p=Math.acos(_e(s[0].dot(s[t]),-1,1));p/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(p=-p);for(let g=1;g<=t;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],p*g)),o[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ea extends xn{constructor(t=0,e=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e){const n=e||new ct,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*u-p*h+this.aX,c=f*h+p*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Wg extends Ea{constructor(t,e,n,i,s,o){super(t,e,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ta(){let r=0,t=0,e=0,n=0;function i(s,o,a,l){r=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let f=(o-s)/c-(a-s)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,p*=u,i(o,a,f,p)},calc:function(s){const o=s*s,a=o*s;return r+t*s+e*o+n*a}}}const vs=new U,Lo=new Ta,Do=new Ta,Uo=new Ta;class Xg extends xn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new U){const n=e,i=this.points,s=i.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%s]:(vs.subVectors(i[0],i[1]).add(i[0]),c=vs);const h=i[a%s],f=i[(a+1)%s];if(this.closed||a+2<s?u=i[(a+2)%s]:(vs.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=vs),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),p),_=Math.pow(h.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(u),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Lo.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,_,m),Do.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,_,m),Uo.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(Lo.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),Do.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),Uo.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(Lo.calc(l),Do.calc(l),Uo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new U().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function vc(r,t,e,n,i){const s=(n-t)*.5,o=(i-e)*.5,a=r*r,l=r*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*r+e}function qg(r,t){const e=1-r;return e*e*t}function Yg(r,t){return 2*(1-r)*r*t}function Zg(r,t){return r*r*t}function wr(r,t,e,n){return qg(r,t)+Yg(r,e)+Zg(r,n)}function Kg(r,t){const e=1-r;return e*e*e*t}function jg(r,t){const e=1-r;return 3*e*e*r*t}function Jg(r,t){return 3*(1-r)*r*r*t}function $g(r,t){return r*r*r*t}function Rr(r,t,e,n,i){return Kg(r,t)+jg(r,e)+Jg(r,n)+$g(r,i)}class Eu extends xn{constructor(t=new ct,e=new ct,n=new ct,i=new ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new ct){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Rr(t,i.x,s.x,o.x,a.x),Rr(t,i.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Qg extends xn{constructor(t=new U,e=new U,n=new U,i=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new U){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Rr(t,i.x,s.x,o.x,a.x),Rr(t,i.y,s.y,o.y,a.y),Rr(t,i.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ba extends xn{constructor(t=new ct,e=new ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ct){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class t0 extends xn{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Tu extends xn{constructor(t=new ct,e=new ct,n=new ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ct){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(wr(t,i.x,s.x,o.x),wr(t,i.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class e0 extends xn{constructor(t=new U,e=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new U){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(wr(t,i.x,s.x,o.x),wr(t,i.y,s.y,o.y),wr(t,i.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class bu extends xn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ct){const n=e,i=this.points,s=(i.length-1)*t,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(vc(a,l.x,c.x,u.x,h.x),vc(a,l.y,c.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new ct().fromArray(i))}return this}}var Au=Object.freeze({__proto__:null,ArcCurve:Wg,CatmullRomCurve3:Xg,CubicBezierCurve:Eu,CubicBezierCurve3:Qg,EllipseCurve:Ea,LineCurve:ba,LineCurve3:t0,QuadraticBezierCurve:Tu,QuadraticBezierCurve3:e0,SplineCurve:bu});class n0 extends xn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);t.equals(e)||this.curves.push(new ba(e,t))}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Au[i.type]().fromJSON(i))}return this}}class ta extends n0{constructor(t){super(),this.type="Path",this.currentPoint=new ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new ba(this.currentPoint.clone(),new ct(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const s=new Tu(this.currentPoint.clone(),new ct(t,e),new ct(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,o){const a=new Eu(this.currentPoint.clone(),new ct(t,e),new ct(n,i),new ct(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new bu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,s,o),this}absarc(t,e,n,i,s,o){return this.absellipse(t,e,n,n,i,s,o),this}ellipse(t,e,n,i,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,i,s,o,a,l),this}absellipse(t,e,n,i,s,o,a,l){const c=new Ea(t,e,n,i,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}const xs=new U,Ms=new U,Io=new U,Ss=new Ke;class i0 extends hn{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const i=Math.pow(10,4),s=Math.cos(As*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),f={},p=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:_,b:m,c:d}=Ss;if(_.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),d.fromBufferAttribute(a,c[2]),Ss.getNormal(Io),h[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,h[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,h[2]=`${Math.round(d.x*i)},${Math.round(d.y*i)},${Math.round(d.z*i)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let S=0;S<3;S++){const v=(S+1)%3,M=h[S],y=h[v],T=Ss[u[S]],w=Ss[u[v]],C=`${M}_${y}`,x=`${y}_${M}`;x in f&&f[x]?(Io.dot(f[x].normal)<=s&&(p.push(T.x,T.y,T.z),p.push(w.x,w.y,w.z)),f[x]=null):C in f||(f[C]={index0:c[S],index1:c[v],normal:Io.clone()})}}for(const g in f)if(f[g]){const{index0:_,index1:m}=f[g];xs.fromBufferAttribute(a,_),Ms.fromBufferAttribute(a,m),p.push(xs.x,xs.y,xs.z),p.push(Ms.x,Ms.y,Ms.z)}this.setAttribute("position",new Re(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Rs extends ta{constructor(t){super(t),this.uuid=mr(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new ta().fromJSON(i))}return this}}const r0={triangulate:function(r,t,e=2){const n=t&&t.length,i=n?t[0]*e:r.length;let s=wu(r,0,i,e,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,h,f,p;if(n&&(s=c0(r,t,s,e)),r.length>80*e){a=c=r[0],l=u=r[1];for(let g=e;g<i;g+=e)h=r[g],f=r[g+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);p=Math.max(c-a,u-l),p=p!==0?32767/p:0}return Ir(s,o,e,a,l,p,0),o}};function wu(r,t,e,n,i){let s,o;if(i===M0(r,t,e,n)>0)for(s=t;s<e;s+=n)o=xc(s,r[s],r[s+1],o);else for(s=e-n;s>=t;s-=n)o=xc(s,r[s],r[s+1],o);return o&&qs(o,o.next)&&(Or(o),o=o.next),o}function Ti(r,t){if(!r)return r;t||(t=r);let e=r,n;do if(n=!1,!e.steiner&&(qs(e,e.next)||$t(e.prev,e,e.next)===0)){if(Or(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ir(r,t,e,n,i,s,o){if(!r)return;!o&&s&&p0(r,n,i,s);let a=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?o0(r,n,i,s):s0(r)){t.push(l.i/e|0),t.push(r.i/e|0),t.push(c.i/e|0),Or(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=a0(Ti(r),t,e),Ir(r,t,e,n,i,s,2)):o===2&&l0(r,t,e,n,i,s):Ir(Ti(r),t,e,n,i,s,1);break}}}function s0(r){const t=r.prev,e=r,n=r.next;if($t(t,e,n)>=0)return!1;const i=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,u=i<s?i<o?i:o:s<o?s:o,h=a<l?a<c?a:c:l<c?l:c,f=i>s?i>o?i:o:s>o?s:o,p=a>l?a>c?a:c:l>c?l:c;let g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=p&&Ki(i,a,s,l,o,c,g.x,g.y)&&$t(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function o0(r,t,e,n){const i=r.prev,s=r,o=r.next;if($t(i,s,o)>=0)return!1;const a=i.x,l=s.x,c=o.x,u=i.y,h=s.y,f=o.y,p=a<l?a<c?a:c:l<c?l:c,g=u<h?u<f?u:f:h<f?h:f,_=a>l?a>c?a:c:l>c?l:c,m=u>h?u>f?u:f:h>f?h:f,d=ea(p,g,t,e,n),S=ea(_,m,t,e,n);let v=r.prevZ,M=r.nextZ;for(;v&&v.z>=d&&M&&M.z<=S;){if(v.x>=p&&v.x<=_&&v.y>=g&&v.y<=m&&v!==i&&v!==o&&Ki(a,u,l,h,c,f,v.x,v.y)&&$t(v.prev,v,v.next)>=0||(v=v.prevZ,M.x>=p&&M.x<=_&&M.y>=g&&M.y<=m&&M!==i&&M!==o&&Ki(a,u,l,h,c,f,M.x,M.y)&&$t(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;v&&v.z>=d;){if(v.x>=p&&v.x<=_&&v.y>=g&&v.y<=m&&v!==i&&v!==o&&Ki(a,u,l,h,c,f,v.x,v.y)&&$t(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;M&&M.z<=S;){if(M.x>=p&&M.x<=_&&M.y>=g&&M.y<=m&&M!==i&&M!==o&&Ki(a,u,l,h,c,f,M.x,M.y)&&$t(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function a0(r,t,e){let n=r;do{const i=n.prev,s=n.next.next;!qs(i,s)&&Ru(i,n,n.next,s)&&Nr(i,s)&&Nr(s,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),Or(n),Or(n.next),n=r=s),n=n.next}while(n!==r);return Ti(n)}function l0(r,t,e,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&g0(o,a)){let l=Cu(o,a);o=Ti(o,o.next),l=Ti(l,l.next),Ir(o,t,e,n,i,s,0),Ir(l,t,e,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function c0(r,t,e,n){const i=[];let s,o,a,l,c;for(s=0,o=t.length;s<o;s++)a=t[s]*n,l=s<o-1?t[s+1]*n:r.length,c=wu(r,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(_0(c));for(i.sort(u0),s=0;s<i.length;s++)e=h0(i[s],e);return e}function u0(r,t){return r.x-t.x}function h0(r,t){const e=f0(r,t);if(!e)return t;const n=Cu(e,r);return Ti(n,n.next),Ti(e,e.next)}function f0(r,t){let e=t,n=-1/0,i;const s=r.x,o=r.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=s&&f>n&&(n=f,i=e.x<e.next.x?e:e.next,f===s))return i}e=e.next}while(e!==t);if(!i)return null;const a=i,l=i.x,c=i.y;let u=1/0,h;e=i;do s>=e.x&&e.x>=l&&s!==e.x&&Ki(o<c?s:n,o,l,c,o<c?n:s,o,e.x,e.y)&&(h=Math.abs(o-e.y)/(s-e.x),Nr(e,r)&&(h<u||h===u&&(e.x>i.x||e.x===i.x&&d0(i,e)))&&(i=e,u=h)),e=e.next;while(e!==a);return i}function d0(r,t){return $t(r.prev,r,t.prev)<0&&$t(t.next,r,r.next)<0}function p0(r,t,e,n){let i=r;do i.z===0&&(i.z=ea(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,m0(i)}function m0(r){let t,e,n,i,s,o,a,l,c=1;do{for(e=r,r=null,s=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;e=n}s.nextZ=null,c*=2}while(o>1);return r}function ea(r,t,e,n,i){return r=(r-e)*i|0,t=(t-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function _0(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function Ki(r,t,e,n,i,s,o,a){return(i-o)*(t-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(i-o)*(n-a)}function g0(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!v0(r,t)&&(Nr(r,t)&&Nr(t,r)&&x0(r,t)&&($t(r.prev,r,t.prev)||$t(r,t.prev,t))||qs(r,t)&&$t(r.prev,r,r.next)>0&&$t(t.prev,t,t.next)>0)}function $t(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function qs(r,t){return r.x===t.x&&r.y===t.y}function Ru(r,t,e,n){const i=Es($t(r,t,e)),s=Es($t(r,t,n)),o=Es($t(e,n,r)),a=Es($t(e,n,t));return!!(i!==s&&o!==a||i===0&&ys(r,e,t)||s===0&&ys(r,n,t)||o===0&&ys(e,r,n)||a===0&&ys(e,t,n))}function ys(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function Es(r){return r>0?1:r<0?-1:0}function v0(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&Ru(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function Nr(r,t){return $t(r.prev,r,r.next)<0?$t(r,t,r.next)>=0&&$t(r,r.prev,t)>=0:$t(r,t,r.prev)<0||$t(r,r.next,t)<0}function x0(r,t){let e=r,n=!1;const i=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==r);return n}function Cu(r,t){const e=new na(r.i,r.x,r.y),n=new na(t.i,t.x,t.y),i=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function xc(r,t,e,n){const i=new na(r,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Or(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function na(r,t,e){this.i=r,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function M0(r,t,e,n){let i=0;for(let s=t,o=e-n;s<e;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class tr{static area(t){const e=t.length;let n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return tr.area(t)<0}static triangulateShape(t,e){const n=[],i=[],s=[];Mc(t),Sc(n,t);let o=t.length;e.forEach(Mc);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,Sc(n,e[l]);const a=r0.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Mc(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function Sc(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}class Aa extends hn{constructor(t=new Rs([new ct(.5,.5),new ct(-.5,.5),new ct(-.5,-.5),new ct(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],s=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new Re(i,3)),this.setAttribute("uv",new Re(s,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const d=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:S0;let v,M=!1,y,T,w,C;d&&(v=d.getSpacedPoints(u),M=!0,f=!1,y=d.computeFrenetFrames(u,!1),T=new U,w=new U,C=new U),f||(m=0,p=0,g=0,_=0);const x=a.extractPoints(c);let b=x.shape;const B=x.holes;if(!tr.isClockWise(b)){b=b.reverse();for(let L=0,at=B.length;L<at;L++){const K=B[L];tr.isClockWise(K)&&(B[L]=K.reverse())}}const I=tr.triangulateShape(b,B),F=b;for(let L=0,at=B.length;L<at;L++){const K=B[L];b=b.concat(K)}function z(L,at,K){return at||console.error("THREE.ExtrudeGeometry: vec does not exist"),L.clone().addScaledVector(at,K)}const q=b.length,k=I.length;function W(L,at,K){let ot,$,Et;const mt=L.x-at.x,gt=L.y-at.y,Ct=K.x-L.x,zt=K.y-L.y,jt=mt*mt+gt*gt,R=mt*zt-gt*Ct;if(Math.abs(R)>Number.EPSILON){const E=Math.sqrt(jt),X=Math.sqrt(Ct*Ct+zt*zt),st=at.x-gt/E,rt=at.y+mt/E,P=K.x-zt/X,Q=K.y+Ct/X,it=((P-st)*zt-(Q-rt)*Ct)/(mt*zt-gt*Ct);ot=st+mt*it-L.x,$=rt+gt*it-L.y;const H=ot*ot+$*$;if(H<=2)return new ct(ot,$);Et=Math.sqrt(H/2)}else{let E=!1;mt>Number.EPSILON?Ct>Number.EPSILON&&(E=!0):mt<-Number.EPSILON?Ct<-Number.EPSILON&&(E=!0):Math.sign(gt)===Math.sign(zt)&&(E=!0),E?(ot=-gt,$=mt,Et=Math.sqrt(jt)):(ot=mt,$=gt,Et=Math.sqrt(jt/2))}return new ct(ot/Et,$/Et)}const et=[];for(let L=0,at=F.length,K=at-1,ot=L+1;L<at;L++,K++,ot++)K===at&&(K=0),ot===at&&(ot=0),et[L]=W(F[L],F[K],F[ot]);const J=[];let dt,O=et.concat();for(let L=0,at=B.length;L<at;L++){const K=B[L];dt=[];for(let ot=0,$=K.length,Et=$-1,mt=ot+1;ot<$;ot++,Et++,mt++)Et===$&&(Et=0),mt===$&&(mt=0),dt[ot]=W(K[ot],K[Et],K[mt]);J.push(dt),O=O.concat(dt)}for(let L=0;L<m;L++){const at=L/m,K=p*Math.cos(at*Math.PI/2),ot=g*Math.sin(at*Math.PI/2)+_;for(let $=0,Et=F.length;$<Et;$++){const mt=z(F[$],et[$],ot);St(mt.x,mt.y,-K)}for(let $=0,Et=B.length;$<Et;$++){const mt=B[$];dt=J[$];for(let gt=0,Ct=mt.length;gt<Ct;gt++){const zt=z(mt[gt],dt[gt],ot);St(zt.x,zt.y,-K)}}}const nt=g+_;for(let L=0;L<q;L++){const at=f?z(b[L],O[L],nt):b[L];M?(w.copy(y.normals[0]).multiplyScalar(at.x),T.copy(y.binormals[0]).multiplyScalar(at.y),C.copy(v[0]).add(w).add(T),St(C.x,C.y,C.z)):St(at.x,at.y,0)}for(let L=1;L<=u;L++)for(let at=0;at<q;at++){const K=f?z(b[at],O[at],nt):b[at];M?(w.copy(y.normals[L]).multiplyScalar(K.x),T.copy(y.binormals[L]).multiplyScalar(K.y),C.copy(v[L]).add(w).add(T),St(C.x,C.y,C.z)):St(K.x,K.y,h/u*L)}for(let L=m-1;L>=0;L--){const at=L/m,K=p*Math.cos(at*Math.PI/2),ot=g*Math.sin(at*Math.PI/2)+_;for(let $=0,Et=F.length;$<Et;$++){const mt=z(F[$],et[$],ot);St(mt.x,mt.y,h+K)}for(let $=0,Et=B.length;$<Et;$++){const mt=B[$];dt=J[$];for(let gt=0,Ct=mt.length;gt<Ct;gt++){const zt=z(mt[gt],dt[gt],ot);M?St(zt.x,zt.y+v[u-1].y,v[u-1].x+K):St(zt.x,zt.y,h+K)}}}tt(),ht();function tt(){const L=i.length/3;if(f){let at=0,K=q*at;for(let ot=0;ot<k;ot++){const $=I[ot];Dt($[2]+K,$[1]+K,$[0]+K)}at=u+m*2,K=q*at;for(let ot=0;ot<k;ot++){const $=I[ot];Dt($[0]+K,$[1]+K,$[2]+K)}}else{for(let at=0;at<k;at++){const K=I[at];Dt(K[2],K[1],K[0])}for(let at=0;at<k;at++){const K=I[at];Dt(K[0]+q*u,K[1]+q*u,K[2]+q*u)}}n.addGroup(L,i.length/3-L,0)}function ht(){const L=i.length/3;let at=0;_t(F,at),at+=F.length;for(let K=0,ot=B.length;K<ot;K++){const $=B[K];_t($,at),at+=$.length}n.addGroup(L,i.length/3-L,1)}function _t(L,at){let K=L.length;for(;--K>=0;){const ot=K;let $=K-1;$<0&&($=L.length-1);for(let Et=0,mt=u+m*2;Et<mt;Et++){const gt=q*Et,Ct=q*(Et+1),zt=at+ot+gt,jt=at+$+gt,R=at+$+Ct,E=at+ot+Ct;wt(zt,jt,R,E)}}}function St(L,at,K){l.push(L),l.push(at),l.push(K)}function Dt(L,at,K){Xt(L),Xt(at),Xt(K);const ot=i.length/3,$=S.generateTopUV(n,i,ot-3,ot-2,ot-1);Rt($[0]),Rt($[1]),Rt($[2])}function wt(L,at,K,ot){Xt(L),Xt(at),Xt(ot),Xt(at),Xt(K),Xt(ot);const $=i.length/3,Et=S.generateSideWallUV(n,i,$-6,$-3,$-2,$-1);Rt(Et[0]),Rt(Et[1]),Rt(Et[3]),Rt(Et[1]),Rt(Et[2]),Rt(Et[3])}function Xt(L){i.push(l[L*3+0]),i.push(l[L*3+1]),i.push(l[L*3+2])}function Rt(L){s.push(L.x),s.push(L.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return y0(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,o=t.shapes.length;s<o;s++){const a=e[t.shapes[s]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Au[i.type]().fromJSON(i)),new Aa(n,t.options)}}const S0={generateTopUV:function(r,t,e,n,i){const s=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],u=t[i*3+1];return[new ct(s,o),new ct(a,l),new ct(c,u)]},generateSideWallUV:function(r,t,e,n,i,s){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],h=t[n*3+2],f=t[i*3],p=t[i*3+1],g=t[i*3+2],_=t[s*3],m=t[s*3+1],d=t[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new ct(o,1-l),new ct(c,1-h),new ct(f,1-g),new ct(_,1-d)]:[new ct(a,1-l),new ct(u,1-h),new ct(p,1-g),new ct(m,1-d)]}};function y0(r,t,e){if(e.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];e.shapes.push(s.uuid)}else e.shapes.push(r.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class wa extends hn{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new U,f=new U,p=[],g=[],_=[],m=[];for(let d=0;d<=n;d++){const S=[],v=d/n;let M=0;d===0&&o===0?M=.5/e:d===n&&l===Math.PI&&(M=-.5/e);for(let y=0;y<=e;y++){const T=y/e;h.x=-t*Math.cos(i+T*s)*Math.sin(o+v*a),h.y=t*Math.cos(o+v*a),h.z=t*Math.sin(i+T*s)*Math.sin(o+v*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),m.push(T+M,1-v),S.push(c++)}u.push(S)}for(let d=0;d<n;d++)for(let S=0;S<e;S++){const v=u[d][S+1],M=u[d][S],y=u[d+1][S],T=u[d+1][S+1];(d!==0||o>0)&&p.push(v,M,T),(d!==n-1||l<Math.PI)&&p.push(M,y,T)}this.setIndex(p),this.setAttribute("position",new Re(g,3)),this.setAttribute("normal",new Re(_,3)),this.setAttribute("uv",new Re(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wa(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}const yc={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class E0{constructor(t,e,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const T0=new E0;class Pu{constructor(t){this.manager=t!==void 0?t:T0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}const wn={};class b0 extends Error{constructor(t,e){super(t),this.response=e}}class A0 extends Pu{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=yc.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(wn[t]!==void 0){wn[t].push({onLoad:e,onProgress:n,onError:i});return}wn[t]=[],wn[t].push({onLoad:e,onProgress:n,onError:i});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=wn[t],h=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=f?parseInt(f):0,g=p!==0;let _=0;const m=new ReadableStream({start(d){S();function S(){h.read().then(({done:v,value:M})=>{if(v)d.close();else{_+=M.byteLength;const y=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:p});for(let T=0,w=u.length;T<w;T++){const C=u[T];C.onProgress&&C.onProgress(y)}d.enqueue(M),S()}})}}});return new Response(m)}else throw new b0(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{yc.add(t,c);const u=wn[t];delete wn[t];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=wn[t];if(u===void 0)throw this.manager.itemError(t),c;delete wn[t];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onError&&p.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class Ec{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(_e(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class w0{constructor(){this.type="ShapePath",this.color=new qt,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new ta,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,i){return this.currentPath.quadraticCurveTo(t,e,n,i),this}bezierCurveTo(t,e,n,i,s,o){return this.currentPath.bezierCurveTo(t,e,n,i,s,o),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(d){const S=[];for(let v=0,M=d.length;v<M;v++){const y=d[v],T=new Rs;T.curves=y.curves,S.push(T)}return S}function n(d,S){const v=S.length;let M=!1;for(let y=v-1,T=0;T<v;y=T++){let w=S[y],C=S[T],x=C.x-w.x,b=C.y-w.y;if(Math.abs(b)>Number.EPSILON){if(b<0&&(w=S[T],x=-x,C=S[y],b=-b),d.y<w.y||d.y>C.y)continue;if(d.y===w.y){if(d.x===w.x)return!0}else{const B=b*(d.x-w.x)-x*(d.y-w.y);if(B===0)return!0;if(B<0)continue;M=!M}}else{if(d.y!==w.y)continue;if(C.x<=d.x&&d.x<=w.x||w.x<=d.x&&d.x<=C.x)return!0}}return M}const i=tr.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,l;const c=[];if(s.length===1)return a=s[0],l=new Rs,l.curves=a.curves,c.push(l),c;let u=!i(s[0].getPoints());u=t?!u:u;const h=[],f=[];let p=[],g=0,_;f[g]=void 0,p[g]=[];for(let d=0,S=s.length;d<S;d++)a=s[d],_=a.getPoints(),o=i(_),o=t?!o:o,o?(!u&&f[g]&&g++,f[g]={s:new Rs,p:_},f[g].s.curves=a.curves,u&&g++,p[g]=[]):p[g].push({h:a,p:_[0]});if(!f[0])return e(s);if(f.length>1){let d=!1,S=0;for(let v=0,M=f.length;v<M;v++)h[v]=[];for(let v=0,M=f.length;v<M;v++){const y=p[v];for(let T=0;T<y.length;T++){const w=y[T];let C=!0;for(let x=0;x<f.length;x++)n(w.p,f[x].p)&&(v!==x&&S++,C?(C=!1,h[x].push(w)):d=!0);C&&h[v].push(w)}}S>0&&d===!1&&(p=h)}let m;for(let d=0,S=f.length;d<S;d++){l=f[d].s,c.push(l),m=p[d];for(let v=0,M=m.length;v<M;v++)l.holes.push(m[v].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:va}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=va);class R0 extends Aa{constructor(t,e={}){const n=e.font;if(n===void 0)super();else{const i=n.generateShapes(t,e.size);e.depth=e.height!==void 0?e.height:50,e.bevelThickness===void 0&&(e.bevelThickness=10),e.bevelSize===void 0&&(e.bevelSize=8),e.bevelEnabled===void 0&&(e.bevelEnabled=!1),super(i,e)}this.type="TextGeometry"}}class C0 extends Pu{constructor(t){super(t)}load(t,e,n,i){const s=this,o=new A0(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){const l=s.parse(JSON.parse(a));e&&e(l)},n,i)}parse(t){return new P0(t)}}class P0{constructor(t){this.isFont=!0,this.type="Font",this.data=t}generateShapes(t,e=100){const n=[],i=L0(t,e,this.data);for(let s=0,o=i.length;s<o;s++)n.push(...i[s].toShapes());return n}}function L0(r,t,e){const n=Array.from(r),i=t/e.resolution,s=(e.boundingBox.yMax-e.boundingBox.yMin+e.underlineThickness)*i,o=[];let a=0,l=0;for(let c=0;c<n.length;c++){const u=n[c];if(u===`
`)a=0,l-=s;else{const h=D0(u,i,a,l,e);a+=h.offsetX,o.push(h.path)}}return o}function D0(r,t,e,n,i){const s=i.glyphs[r]||i.glyphs["?"];if(!s){console.error('THREE.Font: character "'+r+'" does not exists in font family '+i.familyName+".");return}const o=new w0;let a,l,c,u,h,f,p,g;if(s.o){const _=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let m=0,d=_.length;m<d;)switch(_[m++]){case"m":a=_[m++]*t+e,l=_[m++]*t+n,o.moveTo(a,l);break;case"l":a=_[m++]*t+e,l=_[m++]*t+n,o.lineTo(a,l);break;case"q":c=_[m++]*t+e,u=_[m++]*t+n,h=_[m++]*t+e,f=_[m++]*t+n,o.quadraticCurveTo(h,f,c,u);break;case"b":c=_[m++]*t+e,u=_[m++]*t+n,h=_[m++]*t+e,f=_[m++]*t+n,p=_[m++]*t+e,g=_[m++]*t+n,o.bezierCurveTo(h,f,p,g,c,u);break}}return{offsetX:s.ha*t,path:o}}const Tc={type:"change"},No={type:"start"},bc={type:"end"};class U0 extends Ai{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ri.ROTATE,MIDDLE:Ri.DOLLY,RIGHT:Ri.PAN},this.touches={ONE:Ci.ROTATE,TWO:Ci.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",Ct),this._domElementKeyEvents=P},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ct),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Tc),n.update(),s=i.NONE},this.update=function(){const P=new U,Q=new Ei().setFromUnitVectors(t.up,new U(0,1,0)),it=Q.clone().invert(),H=new U,Mt=new Ei,bt=new U,Tt=2*Math.PI;return function(){const vt=n.object.position;P.copy(vt).sub(n.target),P.applyQuaternion(Q),a.setFromVector3(P),n.autoRotate&&s===i.NONE&&x(w()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Pt=n.minAzimuthAngle,kt=n.maxAzimuthAngle;return isFinite(Pt)&&isFinite(kt)&&(Pt<-Math.PI?Pt+=Tt:Pt>Math.PI&&(Pt-=Tt),kt<-Math.PI?kt+=Tt:kt>Math.PI&&(kt-=Tt),Pt<=kt?a.theta=Math.max(Pt,Math.min(kt,a.theta)):a.theta=a.theta>(Pt+kt)/2?Math.max(Pt,a.theta):Math.min(kt,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),P.setFromSpherical(a),P.applyQuaternion(it),vt.copy(n.target).add(P),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,h||H.distanceToSquared(n.object.position)>o||8*(1-Mt.dot(n.object.quaternion))>o||bt.distanceToSquared(n.target)>0?(n.dispatchEvent(Tc),H.copy(n.object.position),Mt.copy(n.object.quaternion),bt.copy(n.target),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",R),n.domElement.removeEventListener("pointerdown",K),n.domElement.removeEventListener("pointercancel",$),n.domElement.removeEventListener("wheel",gt),n.domElement.removeEventListener("pointermove",ot),n.domElement.removeEventListener("pointerup",$),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Ct),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const o=1e-6,a=new Ec,l=new Ec;let c=1;const u=new U;let h=!1;const f=new ct,p=new ct,g=new ct,_=new ct,m=new ct,d=new ct,S=new ct,v=new ct,M=new ct,y=[],T={};function w(){return 2*Math.PI/60/60*n.autoRotateSpeed}function C(){return Math.pow(.95,n.zoomSpeed)}function x(P){l.theta-=P}function b(P){l.phi-=P}const B=function(){const P=new U;return function(it,H){P.setFromMatrixColumn(H,0),P.multiplyScalar(-it),u.add(P)}}(),j=function(){const P=new U;return function(it,H){n.screenSpacePanning===!0?P.setFromMatrixColumn(H,1):(P.setFromMatrixColumn(H,0),P.crossVectors(n.object.up,P)),P.multiplyScalar(it),u.add(P)}}(),I=function(){const P=new U;return function(it,H){const Mt=n.domElement;if(n.object.isPerspectiveCamera){const bt=n.object.position;P.copy(bt).sub(n.target);let Tt=P.length();Tt*=Math.tan(n.object.fov/2*Math.PI/180),B(2*it*Tt/Mt.clientHeight,n.object.matrix),j(2*H*Tt/Mt.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(B(it*(n.object.right-n.object.left)/n.object.zoom/Mt.clientWidth,n.object.matrix),j(H*(n.object.top-n.object.bottom)/n.object.zoom/Mt.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function F(P){n.object.isPerspectiveCamera?c/=P:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*P)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function z(P){n.object.isPerspectiveCamera?c*=P:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/P)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function q(P){f.set(P.clientX,P.clientY)}function k(P){S.set(P.clientX,P.clientY)}function W(P){_.set(P.clientX,P.clientY)}function et(P){p.set(P.clientX,P.clientY),g.subVectors(p,f).multiplyScalar(n.rotateSpeed);const Q=n.domElement;x(2*Math.PI*g.x/Q.clientHeight),b(2*Math.PI*g.y/Q.clientHeight),f.copy(p),n.update()}function J(P){v.set(P.clientX,P.clientY),M.subVectors(v,S),M.y>0?F(C()):M.y<0&&z(C()),S.copy(v),n.update()}function dt(P){m.set(P.clientX,P.clientY),d.subVectors(m,_).multiplyScalar(n.panSpeed),I(d.x,d.y),_.copy(m),n.update()}function O(P){P.deltaY<0?z(C()):P.deltaY>0&&F(C()),n.update()}function nt(P){let Q=!1;switch(P.code){case n.keys.UP:P.ctrlKey||P.metaKey||P.shiftKey?b(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(0,n.keyPanSpeed),Q=!0;break;case n.keys.BOTTOM:P.ctrlKey||P.metaKey||P.shiftKey?b(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(0,-n.keyPanSpeed),Q=!0;break;case n.keys.LEFT:P.ctrlKey||P.metaKey||P.shiftKey?x(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(n.keyPanSpeed,0),Q=!0;break;case n.keys.RIGHT:P.ctrlKey||P.metaKey||P.shiftKey?x(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(-n.keyPanSpeed,0),Q=!0;break}Q&&(P.preventDefault(),n.update())}function tt(){if(y.length===1)f.set(y[0].pageX,y[0].pageY);else{const P=.5*(y[0].pageX+y[1].pageX),Q=.5*(y[0].pageY+y[1].pageY);f.set(P,Q)}}function ht(){if(y.length===1)_.set(y[0].pageX,y[0].pageY);else{const P=.5*(y[0].pageX+y[1].pageX),Q=.5*(y[0].pageY+y[1].pageY);_.set(P,Q)}}function _t(){const P=y[0].pageX-y[1].pageX,Q=y[0].pageY-y[1].pageY,it=Math.sqrt(P*P+Q*Q);S.set(0,it)}function St(){n.enableZoom&&_t(),n.enablePan&&ht()}function Dt(){n.enableZoom&&_t(),n.enableRotate&&tt()}function wt(P){if(y.length==1)p.set(P.pageX,P.pageY);else{const it=rt(P),H=.5*(P.pageX+it.x),Mt=.5*(P.pageY+it.y);p.set(H,Mt)}g.subVectors(p,f).multiplyScalar(n.rotateSpeed);const Q=n.domElement;x(2*Math.PI*g.x/Q.clientHeight),b(2*Math.PI*g.y/Q.clientHeight),f.copy(p)}function Xt(P){if(y.length===1)m.set(P.pageX,P.pageY);else{const Q=rt(P),it=.5*(P.pageX+Q.x),H=.5*(P.pageY+Q.y);m.set(it,H)}d.subVectors(m,_).multiplyScalar(n.panSpeed),I(d.x,d.y),_.copy(m)}function Rt(P){const Q=rt(P),it=P.pageX-Q.x,H=P.pageY-Q.y,Mt=Math.sqrt(it*it+H*H);v.set(0,Mt),M.set(0,Math.pow(v.y/S.y,n.zoomSpeed)),F(M.y),S.copy(v)}function L(P){n.enableZoom&&Rt(P),n.enablePan&&Xt(P)}function at(P){n.enableZoom&&Rt(P),n.enableRotate&&wt(P)}function K(P){n.enabled!==!1&&(y.length===0&&(n.domElement.setPointerCapture(P.pointerId),n.domElement.addEventListener("pointermove",ot),n.domElement.addEventListener("pointerup",$)),E(P),P.pointerType==="touch"?zt(P):Et(P))}function ot(P){n.enabled!==!1&&(P.pointerType==="touch"?jt(P):mt(P))}function $(P){X(P),y.length===0&&(n.domElement.releasePointerCapture(P.pointerId),n.domElement.removeEventListener("pointermove",ot),n.domElement.removeEventListener("pointerup",$)),n.dispatchEvent(bc),s=i.NONE}function Et(P){let Q;switch(P.button){case 0:Q=n.mouseButtons.LEFT;break;case 1:Q=n.mouseButtons.MIDDLE;break;case 2:Q=n.mouseButtons.RIGHT;break;default:Q=-1}switch(Q){case Ri.DOLLY:if(n.enableZoom===!1)return;k(P),s=i.DOLLY;break;case Ri.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enablePan===!1)return;W(P),s=i.PAN}else{if(n.enableRotate===!1)return;q(P),s=i.ROTATE}break;case Ri.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enableRotate===!1)return;q(P),s=i.ROTATE}else{if(n.enablePan===!1)return;W(P),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(No)}function mt(P){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;et(P);break;case i.DOLLY:if(n.enableZoom===!1)return;J(P);break;case i.PAN:if(n.enablePan===!1)return;dt(P);break}}function gt(P){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(P.preventDefault(),n.dispatchEvent(No),O(P),n.dispatchEvent(bc))}function Ct(P){n.enabled===!1||n.enablePan===!1||nt(P)}function zt(P){switch(st(P),y.length){case 1:switch(n.touches.ONE){case Ci.ROTATE:if(n.enableRotate===!1)return;tt(),s=i.TOUCH_ROTATE;break;case Ci.PAN:if(n.enablePan===!1)return;ht(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case Ci.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;St(),s=i.TOUCH_DOLLY_PAN;break;case Ci.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Dt(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(No)}function jt(P){switch(st(P),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;wt(P),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;Xt(P),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;L(P),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;at(P),n.update();break;default:s=i.NONE}}function R(P){n.enabled!==!1&&P.preventDefault()}function E(P){y.push(P)}function X(P){delete T[P.pointerId];for(let Q=0;Q<y.length;Q++)if(y[Q].pointerId==P.pointerId){y.splice(Q,1);return}}function st(P){let Q=T[P.pointerId];Q===void 0&&(Q=new ct,T[P.pointerId]=Q),Q.set(P.pageX,P.pageY)}function rt(P){const Q=P.pointerId===y[0].pointerId?y[1]:y[0];return T[Q.pointerId]}n.domElement.addEventListener("contextmenu",R),n.domElement.addEventListener("pointerdown",K),n.domElement.addEventListener("pointercancel",$),n.domElement.addEventListener("wheel",gt,{passive:!1}),this.update()}}function Cn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Lu(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}/*!
 * GSAP 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ve={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},lr={duration:.5,overwrite:!1,delay:0},Ra,ye,le,Je=1e8,Zt=1/Je,ia=Math.PI*2,I0=ia/4,N0=0,Du=Math.sqrt,O0=Math.cos,F0=Math.sin,me=function(t){return typeof t=="string"},ne=function(t){return typeof t=="function"},Nn=function(t){return typeof t=="number"},Ca=function(t){return typeof t>"u"},vn=function(t){return typeof t=="object"},De=function(t){return t!==!1},Pa=function(){return typeof window<"u"},Ts=function(t){return ne(t)||me(t)},Uu=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ee=Array.isArray,ra=/(?:-?\.?\d|\.)+/gi,Iu=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ji=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Oo=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Nu=/[+-]=-?[.\d]+/,Ou=/[^,'"\[\]\s]+/gi,B0=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Jt,Ye,sa,La,We={},Is={},Fu,Bu=function(t){return(Is=bi(t,We))&&Ne},Da=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Ns=function(t,e){return!e&&console.warn(t)},zu=function(t,e){return t&&(We[t]=e)&&Is&&(Is[t]=e)||We},Fr=function(){return 0},z0={suppressEvents:!0,isStart:!0,kill:!1},Cs={suppressEvents:!0,kill:!1},G0={suppressEvents:!0},Ua={},Zn=[],oa={},Gu,Ge={},Fo={},Ac=30,Ps=[],Ia="",Na=function(t){var e=t[0],n,i;if(vn(e)||ne(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Ps.length;i--&&!Ps[i].targetTest(e););n=Ps[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new uh(t[i],n)))||t.splice(i,1);return t},xi=function(t){return t._gsap||Na($e(t))[0]._gsap},ku=function(t,e,n){return(n=t[e])&&ne(n)?t[e]():Ca(n)&&t.getAttribute&&t.getAttribute(e)||n},Ue=function(t,e){return(t=t.split(",")).forEach(e)||t},re=function(t){return Math.round(t*1e5)/1e5||0},ge=function(t){return Math.round(t*1e7)/1e7||0},er=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},k0=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Os=function(){var t=Zn.length,e=Zn.slice(0),n,i;for(oa={},Zn.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Hu=function(t,e,n,i){Zn.length&&!ye&&Os(),t.render(e,n,i||ye&&e<0&&(t._initted||t._startAt)),Zn.length&&!ye&&Os()},Vu=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Ou).length<2?e:me(t)?t.trim():t},Wu=function(t){return t},tn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},H0=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},bi=function(t,e){for(var n in e)t[n]=e[n];return t},wc=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=vn(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},Fs=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Cr=function(t){var e=t.parent||Jt,n=t.keyframes?H0(Ee(t.keyframes)):tn;if(De(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},V0=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Xu=function(t,e,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=t[i],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},Ys=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},$n=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove(t),t._act=0},Mi=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},W0=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},aa=function(t,e,n,i){return t._startAt&&(ye?t._startAt.revert(Cs):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},X0=function r(t){return!t||t._ts&&r(t.parent)},Rc=function(t){return t._repeat?cr(t._tTime,t=t.duration()+t._rDelay)*t:0},cr=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},Bs=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Zs=function(t){return t._end=ge(t._start+(t._tDur/Math.abs(t._ts||t._rts||Zt)||0))},Ks=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=ge(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Zs(t),n._dirty||Mi(n,t)),t},qu=function(t,e){var n;if((e._time||e._initted&&!e._dur)&&(n=Bs(t.rawTime(),e),(!e._dur||qr(0,e.totalDuration(),n)-e._tTime>Zt)&&e.render(n,!0)),Mi(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Zt}},pn=function(t,e,n,i){return e.parent&&$n(e),e._start=ge((Nn(n)?n:n||t!==Jt?qe(t,n,e):t._time)+e._delay),e._end=ge(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Xu(t,e,"_first","_last",t._sort?"_start":0),la(e)||(t._recent=e),i||qu(t,e),t._ts<0&&Ks(t,t._tTime),t},Yu=function(t,e){return(We.ScrollTrigger||Da("scrollTrigger",e))&&We.ScrollTrigger.create(e,t)},Zu=function(t,e,n,i,s){if(Fa(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!ye&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Gu!==ke.frame)return Zn.push(t),t._lazy=[s,i],1},q0=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},la=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Y0=function(t,e,n,i){var s=t.ratio,o=e<0||!e&&(!t._start&&q0(t)&&!(!t._initted&&la(t))||(t._ts<0||t._dp._ts<0)&&!la(t))?0:1,a=t._rDelay,l=0,c,u,h;if(a&&t._repeat&&(l=qr(0,t._tDur,e),u=cr(l,a),t._yoyo&&u&1&&(o=1-o),u!==cr(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||ye||i||t._zTime===Zt||!e&&t._zTime){if(!t._initted&&Zu(t,e,i,n,l))return;for(h=t._zTime,t._zTime=e||(n?Zt:0),n||(n=e&&!h),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&aa(t,e,n,!0),t._onUpdate&&!n&&Qe(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&Qe(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&$n(t,1),!n&&!ye&&(Qe(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Z0=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},ur=function(t,e,n,i){var s=t._repeat,o=ge(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:ge(o*(s+1)+t._rDelay*s):o,a>0&&!i&&Ks(t,t._tTime=t._tDur*a),t.parent&&Zs(t),n||Mi(t.parent,t),t},Cc=function(t){return t instanceof Ce?Mi(t):ur(t,t._dur)},K0={_start:0,endTime:Fr,totalDuration:Fr},qe=function r(t,e,n){var i=t.labels,s=t._recent||K0,o=t.duration()>=Je?s.endTime(!1):t._dur,a,l,c;return me(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(Ee(n)?n[0]:n).totalDuration()),a>1?r(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},Pr=function(t,e,n){var i=Nn(e[1]),s=(i?2:1)+(t<2?0:1),o=e[s],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=De(l.vars.inherit)&&l.parent;o.immediateRender=De(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new ce(e[0],o,e[s+1])},ti=function(t,e){return t||t===0?e(t):e},qr=function(t,e,n){return n<t?t:n>e?e:n},Se=function(t,e){return!me(t)||!(e=B0.exec(t))?"":e[1]},j0=function(t,e,n){return ti(n,function(i){return qr(t,e,i)})},ca=[].slice,Ku=function(t,e){return t&&vn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&vn(t[0]))&&!t.nodeType&&t!==Ye},J0=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return me(i)&&!e||Ku(i,1)?(s=n).push.apply(s,$e(i)):n.push(i)})||n},$e=function(t,e,n){return le&&!e&&le.selector?le.selector(t):me(t)&&!n&&(sa||!hr())?ca.call((e||La).querySelectorAll(t),0):Ee(t)?J0(t,n):Ku(t)?ca.call(t,0):t?[t]:[]},ua=function(t){return t=$e(t)[0]||Ns("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return $e(e,n.querySelectorAll?n:n===t?Ns("Invalid scope")||La.createElement("div"):t)}},ju=function(t){return t.sort(function(){return .5-Math.random()})},Ju=function(t){if(ne(t))return t;var e=vn(t)?t:{each:t},n=Si(e.ease),i=e.from||0,s=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,u=i,h=i;return me(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(f,p,g){var _=(g||e).length,m=o[_],d,S,v,M,y,T,w,C,x;if(!m){if(x=e.grid==="auto"?0:(e.grid||[1,Je])[1],!x){for(w=-Je;w<(w=g[x++].getBoundingClientRect().left)&&x<_;);x--}for(m=o[_]=[],d=l?Math.min(x,_)*u-.5:i%x,S=x===Je?0:l?_*h/x-.5:i/x|0,w=0,C=Je,T=0;T<_;T++)v=T%x-d,M=S-(T/x|0),m[T]=y=c?Math.abs(c==="y"?M:v):Du(v*v+M*M),y>w&&(w=y),y<C&&(C=y);i==="random"&&ju(m),m.max=w-C,m.min=C,m.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(x>_?_-1:c?c==="y"?_/x:x:Math.max(x,_/x))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=Se(e.amount||e.each)||0,n=n&&_<0?ah(n):n}return _=(m[f]-m.min)/m.max||0,ge(m.b+(n?n(_):_)*m.v)+m.u}},ha=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=ge(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Nn(n)?0:Se(n))}},$u=function(t,e){var n=Ee(t),i,s;return!n&&vn(t)&&(i=n=t.radius||Je,t.values?(t=$e(t.values),(s=!Nn(t[0]))&&(i*=i)):t=ha(t.increment)),ti(e,n?ne(t)?function(o){return s=t(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Je,u=0,h=t.length,f,p;h--;)s?(f=t[h].x-a,p=t[h].y-l,f=f*f+p*p):f=Math.abs(t[h]-a),f<c&&(c=f,u=h);return u=!i||c<=i?t[u]:o,s||u===o||Nn(o)?u:u+Se(o)}:ha(t))},Qu=function(t,e,n,i){return ti(Ee(t)?!e:n===!0?!!(n=0):!i,function(){return Ee(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},$0=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,o){return o(s)},i)}},Q0=function(t,e){return function(n){return t(parseFloat(n))+(e||Se(n))}},tv=function(t,e,n){return eh(t,e,0,1,n)},th=function(t,e,n){return ti(n,function(i){return t[~~e(i)]})},ev=function r(t,e,n){var i=e-t;return Ee(t)?th(t,r(0,t.length),e):ti(n,function(s){return(i+(s-t)%i)%i+t})},nv=function r(t,e,n){var i=e-t,s=i*2;return Ee(t)?th(t,r(0,t.length-1),e):ti(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>i?s-o:o)})},Br=function(t){for(var e=0,n="",i,s,o,a;~(i=t.indexOf("random(",e));)o=t.indexOf(")",i),a=t.charAt(i+7)==="[",s=t.substr(i+7,o-i-7).match(a?Ou:ra),n+=t.substr(e,i-e)+Qu(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),e=o+1;return n+t.substr(e,t.length-e)},eh=function(t,e,n,i,s){var o=e-t,a=i-n;return ti(s,function(l){return n+((l-t)/o*a||0)})},iv=function r(t,e,n,i){var s=isNaN(t+e)?0:function(p){return(1-p)*t+p*e};if(!s){var o=me(t),a={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(Ee(t)&&!Ee(e)){for(u=[],h=t.length,f=h-2,c=1;c<h;c++)u.push(r(t[c-1],t[c]));h--,s=function(g){g*=h;var _=Math.min(f,~~g);return u[_](g-_)},n=e}else i||(t=bi(Ee(t)?[]:{},t));if(!u){for(l in e)Oa.call(a,t,l,"get",e[l]);s=function(g){return Ga(g,a)||(o?t.p:t)}}}return ti(n,s)},Pc=function(t,e,n){var i=t.labels,s=Je,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Qe=function(t,e,n){var i=t.vars,s=i[e],o=le,a=t._ctx,l,c,u;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&Zn.length&&Os(),a&&(le=a),u=l?s.apply(c,l):s.call(c),le=o,u},Tr=function(t){return $n(t),t.scrollTrigger&&t.scrollTrigger.kill(!!ye),t.progress()<1&&Qe(t,"onInterrupt"),t},Ji,nh=[],ih=function(t){if(!Pa()){nh.push(t);return}t=!t.name&&t.default||t;var e=t.name,n=ne(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:Fr,render:Ga,add:Oa,kill:xv,modifier:vv,rawVars:0},o={targetTest:0,get:0,getSetter:za,aliases:{},register:0};if(hr(),t!==i){if(Ge[e])return;tn(i,tn(Fs(t,s),o)),bi(i.prototype,bi(s,Fs(t,o))),Ge[i.prop=e]=i,t.targetTest&&(Ps.push(i),Ua[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}zu(e,i),t.register&&t.register(Ne,i,Ie)},Yt=255,br={aqua:[0,Yt,Yt],lime:[0,Yt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Yt],navy:[0,0,128],white:[Yt,Yt,Yt],olive:[128,128,0],yellow:[Yt,Yt,0],orange:[Yt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Yt,0,0],pink:[Yt,192,203],cyan:[0,Yt,Yt],transparent:[Yt,Yt,Yt,0]},Bo=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Yt+.5|0},rh=function(t,e,n){var i=t?Nn(t)?[t>>16,t>>8&Yt,t&Yt]:0:br.black,s,o,a,l,c,u,h,f,p,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),br[t])i=br[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Yt,i&Yt,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Yt,t&Yt]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(ra),!e)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=Bo(l+1/3,s,o),i[1]=Bo(l,s,o),i[2]=Bo(l-1/3,s,o);else if(~t.indexOf("="))return i=t.match(Iu),n&&i.length<4&&(i[3]=1),i}else i=t.match(ra)||br.transparent;i=i.map(Number)}return e&&!g&&(s=i[0]/Yt,o=i[1]/Yt,a=i[2]/Yt,h=Math.max(s,o,a),f=Math.min(s,o,a),u=(h+f)/2,h===f?l=c=0:(p=h-f,c=u>.5?p/(2-h-f):p/(h+f),l=h===s?(o-a)/p+(o<a?6:0):h===o?(a-s)/p+2:(s-o)/p+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},sh=function(t){var e=[],n=[],i=-1;return t.split(Kn).forEach(function(s){var o=s.match(ji)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},Lc=function(t,e,n){var i="",s=(t+i).match(Kn),o=e?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return t;if(s=s.map(function(f){return(f=rh(f,e,1))&&o+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=sh(t),l=n.c,l.join(i)!==u.c.join(i)))for(c=t.replace(Kn,"1").split(ji),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=t.split(Kn),h=c.length-1;a<h;a++)i+=c[a]+s[a];return i+c[h]},Kn=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in br)r+="|"+t+"\\b";return new RegExp(r+")","gi")}(),rv=/hsl[a]?\(/,oh=function(t){var e=t.join(" "),n;if(Kn.lastIndex=0,Kn.test(e))return n=rv.test(e),t[1]=Lc(t[1],n),t[0]=Lc(t[0],n,sh(t[1])),!0},zr,ke=function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,h,f,p,g=function _(m){var d=r()-i,S=m===!0,v,M,y,T;if(d>t&&(n+=d-e),i+=d,y=i-n,v=y-o,(v>0||S)&&(T=++h.frame,f=y-h.time*1e3,h.time=y=y/1e3,o+=v+(v>=s?4:s-v),M=1),S||(l=c(_)),M)for(p=0;p<a.length;p++)a[p](y,f,T,m)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){Fu&&(!sa&&Pa()&&(Ye=sa=window,La=Ye.document||{},We.gsap=Ne,(Ye.gsapVersions||(Ye.gsapVersions=[])).push(Ne.version),Bu(Is||Ye.GreenSockGlobals||!Ye.gsap&&Ye||{}),u=Ye.requestAnimationFrame,nh.forEach(ih)),l&&h.sleep(),c=u||function(m){return setTimeout(m,o-h.time*1e3+1|0)},zr=1,g(2))},sleep:function(){(u?Ye.cancelAnimationFrame:clearTimeout)(l),zr=0,c=Fr},lagSmoothing:function(m,d){t=m||1/0,e=Math.min(d||33,t)},fps:function(m){s=1e3/(m||240),o=h.time*1e3+s},add:function(m,d,S){var v=d?function(M,y,T,w){m(M,y,T,w),h.remove(v)}:m;return h.remove(m),a[S?"unshift":"push"](v),hr(),v},remove:function(m,d){~(d=a.indexOf(m))&&a.splice(d,1)&&p>=d&&p--},_listeners:a},h}(),hr=function(){return!zr&&ke.wake()},Ht={},sv=/^[\d.\-M][\d.\-,\s]/,ov=/["']/g,av=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(ov,"").trim():+c,i=l.substr(a+1).trim();return e},lv=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},cv=function(t){var e=(t+"").split("("),n=Ht[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[av(e[1])]:lv(t).split(",").map(Vu)):Ht._CE&&sv.test(t)?Ht._CE("",t):n},ah=function(t){return function(e){return 1-t(1-e)}},lh=function r(t,e){for(var n=t._first,i;n;)n instanceof Ce?r(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?r(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},Si=function(t,e){return t&&(ne(t)?t:Ht[t]||cv(t))||e},wi=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},o;return Ue(t,function(a){Ht[a]=We[a]=s,Ht[o=a.toLowerCase()]=n;for(var l in s)Ht[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ht[a+"."+l]=s[l]}),s},ch=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},zo=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/ia*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*F0((u-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:ch(a);return s=ia/s,l.config=function(c,u){return r(t,c,u)},l},Go=function r(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:ch(n);return i.config=function(s){return r(t,s)},i};Ue("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;wi(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Ht.Linear.easeNone=Ht.none=Ht.Linear.easeIn;wi("Elastic",zo("in"),zo("out"),zo());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(a){return a<e?r*a*a:a<n?r*Math.pow(a-1.5/t,2)+.75:a<i?r*(a-=2.25/t)*a+.9375:r*Math.pow(a-2.625/t,2)+.984375};wi("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);wi("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});wi("Circ",function(r){return-(Du(1-r*r)-1)});wi("Sine",function(r){return r===1?1:-O0(r*I0)+1});wi("Back",Go("in"),Go("out"),Go());Ht.SteppedEase=Ht.steps=We.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,o=1-Zt;return function(a){return((i*qr(0,o,a)|0)+s)*n}}};lr.ease=Ht["quad.out"];Ue("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Ia+=r+","+r+"Params,"});var uh=function(t,e){this.id=N0++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:ku,this.set=e?e.getSetter:za},fr=function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,ur(this,+e.duration,1,1),this.data=e.data,le&&(this._ctx=le,le.data.push(this)),zr||ke.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,ur(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(hr(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Ks(this,n),!s._dp||s.parent||qu(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&pn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Zt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Hu(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Rc(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Rc(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?cr(this._tTime,s)+1:1},t.timeScale=function(n){if(!arguments.length)return this._rts===-Zt?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?Bs(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Zt?0:this._rts,this.totalTime(qr(-Math.abs(this._delay),this._tDur,i),!0),Zs(this),W0(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(hr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Zt&&(this._tTime-=Zt)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&pn(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(De(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Bs(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=G0);var i=ye;return ye=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),ye=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Cc(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Cc(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(qe(this,n),De(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,De(i))},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Zt:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Zt,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Zt)},t.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this;return new Promise(function(s){var o=ne(n)?n:Wu,a=function(){var c=i.then;i.then=null,ne(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),s(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},t.kill=function(){Tr(this)},r}();tn(fr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Zt,_prom:0,_ps:!1,_rts:1});var Ce=function(r){Lu(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=De(n.sortChildren),Jt&&pn(n.parent||Jt,Cn(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Yu(Cn(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,o){return Pr(0,arguments,this),this},e.from=function(i,s,o){return Pr(1,arguments,this),this},e.fromTo=function(i,s,o,a){return Pr(2,arguments,this),this},e.set=function(i,s,o){return s.duration=0,s.parent=this,Cr(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new ce(i,s,qe(this,o),1),this},e.call=function(i,s,o){return pn(this,ce.delayedCall(0,i,s),o)},e.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new ce(i,o,qe(this,l)),this},e.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,Cr(o).immediateRender=De(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},e.staggerFromTo=function(i,s,o,a,l,c,u,h){return a.startAt=o,Cr(a).immediateRender=De(a.immediateRender),this.staggerTo(i,s,a,l,c,u,h)},e.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:ge(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,p,g,_,m,d,S,v,M,y,T,w;if(this!==Jt&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),f=u,M=this._start,v=this._ts,d=!v,h&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(T=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(f=ge(u%m),u===l?(_=this._repeat,f=c):(_=~~(u/m),_&&_===u/m&&(f=c,_--),f>c&&(f=c)),y=cr(this._tTime,m),!a&&this._tTime&&y!==_&&this._tTime-y*m-this._dur<=0&&(y=_),T&&_&1&&(f=c-f,w=1),_!==y&&!this._lock){var C=T&&y&1,x=C===(T&&_&1);if(_<y&&(C=!C),a=C?0:c,this._lock=1,this.render(a||(w?0:ge(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Qe(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1),a&&a!==this._time||d!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,x&&(this._lock=2,a=C?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!d)return this;lh(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=Z0(this,ge(a),ge(f)),S&&(u-=f-(f=S._start))),this._tTime=u,this._time=f,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&f&&!s&&!_&&(Qe(this,"onStart"),this._tTime!==u))return this;if(f>=a&&i>=0)for(p=this._first;p;){if(g=p._next,(p._act||f>=p._start)&&p._ts&&S!==p){if(p.parent!==this)return this.render(i,s,o);if(p.render(p._ts>0?(f-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(f-p._start)*p._ts,s,o),f!==this._time||!this._ts&&!d){S=0,g&&(u+=this._zTime=-Zt);break}}p=g}else{p=this._last;for(var b=i<0?i:f;p;){if(g=p._prev,(p._act||b<=p._end)&&p._ts&&S!==p){if(p.parent!==this)return this.render(i,s,o);if(p.render(p._ts>0?(b-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(b-p._start)*p._ts,s,o||ye&&(p._initted||p._startAt)),f!==this._time||!this._ts&&!d){S=0,g&&(u+=this._zTime=b?-Zt:Zt);break}}p=g}}if(S&&!s&&(this.pause(),S.render(f>=a?0:-Zt)._zTime=f>=a?1:-1,this._ts))return this._start=M,Zs(this),this.render(i,s,o);this._onUpdate&&!s&&Qe(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(M===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&$n(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(Qe(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var o=this;if(Nn(s)||(s=qe(this,s,i)),!(i instanceof fr)){if(Ee(i))return i.forEach(function(a){return o.add(a,s)}),this;if(me(i))return this.addLabel(i,s);if(ne(i))i=ce.delayedCall(0,i);else return this}return this!==i?pn(this,i,s):this},e.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Je);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof ce?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},e.remove=function(i){return me(i)?this.removeLabel(i):ne(i)?this.killTweensOf(i):(Ys(this,i),i===this._recent&&(this._recent=this._last),Mi(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ge(ke.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=qe(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,o){var a=ce.delayedCall(0,s||Fr,o);return a.data="isPause",this._hasPause=1,pn(this,a,qe(this,i))},e.removePause=function(i){var s=this._first;for(i=qe(this,i);s;)s._start===i&&s.data==="isPause"&&$n(s),s=s._next},e.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Vn!==a[l]&&a[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var o=[],a=$e(i),l=this._first,c=Nn(s),u;l;)l instanceof ce?k0(l._targets,a)&&(c?(!Vn||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},e.tweenTo=function(i,s){s=s||{};var o=this,a=qe(o,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,p,g=ce.to(o,tn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Zt,onStart:function(){if(o.pause(),!p){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&ur(g,m,0,1).render(g._time,!0,!0),p=1}u&&u.apply(g,h||[])}},s));return f?g.render(0):g},e.tweenFromTo=function(i,s,o){return this.tweenTo(s,tn({startAt:{time:qe(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Pc(this,qe(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Pc(this,qe(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Zt)},e.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Mi(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Mi(this)},e.totalDuration=function(i){var s=0,o=this,a=o._last,l=Je,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,pn(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;ur(o,o===Jt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(Jt._ts&&(Hu(Jt,Bs(i,Jt)),Gu=ke.frame),ke.frame>=Ac){Ac+=Ve.autoSleep||120;var s=Jt._first;if((!s||!s._ts)&&Ve.autoSleep&&ke._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||ke.sleep()}}},t}(fr);tn(Ce.prototype,{_lock:0,_hasPause:0,_forcing:0});var uv=function(t,e,n,i,s,o,a){var l=new Ie(this._pt,t,e,0,1,_h,null,s),c=0,u=0,h,f,p,g,_,m,d,S;for(l.b=n,l.e=i,n+="",i+="",(d=~i.indexOf("random("))&&(i=Br(i)),o&&(S=[n,i],o(S,t,e),n=S[0],i=S[1]),f=n.match(Oo)||[];h=Oo.exec(i);)g=h[0],_=i.substring(c,h.index),p?p=(p+1)%5:_.substr(-5)==="rgba("&&(p=1),g!==f[u++]&&(m=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?er(m,g)-m:parseFloat(g)-m,m:p&&p<4?Math.round:0},c=Oo.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Nu.test(i)||d)&&(l.e=0),this._pt=l,l},Oa=function(t,e,n,i,s,o,a,l,c,u){ne(i)&&(i=i(s||0,t,o));var h=t[e],f=n!=="get"?n:ne(h)?c?t[e.indexOf("set")||!ne(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():h,p=ne(h)?c?mv:ph:Ba,g;if(me(i)&&(~i.indexOf("random(")&&(i=Br(i)),i.charAt(1)==="="&&(g=er(f,i)+(Se(f)||0),(g||g===0)&&(i=g))),!u||f!==i||fa)return!isNaN(f*i)&&i!==""?(g=new Ie(this._pt,t,e,+f||0,i-(f||0),typeof h=="boolean"?gv:mh,0,p),c&&(g.fp=c),a&&g.modifier(a,this,t),this._pt=g):(!h&&!(e in t)&&Da(e,i),uv.call(this,t,e,f,i,p,l||Ve.stringFilter,c))},hv=function(t,e,n,i,s){if(ne(t)&&(t=Lr(t,s,e,n,i)),!vn(t)||t.style&&t.nodeType||Ee(t)||Uu(t))return me(t)?Lr(t,s,e,n,i):t;var o={},a;for(a in t)o[a]=Lr(t[a],s,e,n,i);return o},hh=function(t,e,n,i,s,o){var a,l,c,u;if(Ge[t]&&(a=new Ge[t]).init(s,a.rawVars?e[t]:hv(e[t],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Ie(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==Ji))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Vn,fa,Fa=function r(t,e,n){var i=t.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.onUpdateParams,h=i.callbackScope,f=i.runBackwards,p=i.yoyoEase,g=i.keyframes,_=i.autoRevert,m=t._dur,d=t._startAt,S=t._targets,v=t.parent,M=v&&v.data==="nested"?v.vars.targets:S,y=t._overwrite==="auto"&&!Ra,T=t.timeline,w,C,x,b,B,j,I,F,z,q,k,W,et;if(T&&(!g||!s)&&(s="none"),t._ease=Si(s,lr.ease),t._yEase=p?ah(Si(p===!0?s:p,lr.ease)):0,p&&t._yoyo&&!t._repeat&&(p=t._yEase,t._yEase=t._ease,t._ease=p),t._from=!T&&!!i.runBackwards,!T||g&&!i.stagger){if(F=S[0]?xi(S[0]).harness:0,W=F&&i[F.prop],w=Fs(i,Ua),d&&(d._zTime<0&&d.progress(1),e<0&&f&&a&&!_?d.render(-1,!0):d.revert(f&&m?Cs:z0),d._lazy=0),o){if($n(t._startAt=ce.set(S,tn({data:"isStart",overwrite:!1,parent:v,immediateRender:!0,lazy:!d&&De(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:h,stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(ye||!a&&!_)&&t._startAt.revert(Cs),a&&m&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(f&&m&&!d){if(e&&(a=!1),x=tn({overwrite:!1,data:"isFromStart",lazy:a&&!d&&De(l),immediateRender:a,stagger:0,parent:v},w),W&&(x[F.prop]=W),$n(t._startAt=ce.set(S,x)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(ye?t._startAt.revert(Cs):t._startAt.render(-1,!0)),t._zTime=e,!a)r(t._startAt,Zt,Zt);else if(!e)return}for(t._pt=t._ptCache=0,l=m&&De(l)||l&&!m,C=0;C<S.length;C++){if(B=S[C],I=B._gsap||Na(S)[C]._gsap,t._ptLookup[C]=q={},oa[I.id]&&Zn.length&&Os(),k=M===S?C:M.indexOf(B),F&&(z=new F).init(B,W||w,t,k,M)!==!1&&(t._pt=b=new Ie(t._pt,B,z.name,0,1,z.render,z,0,z.priority),z._props.forEach(function(J){q[J]=b}),z.priority&&(j=1)),!F||W)for(x in w)Ge[x]&&(z=hh(x,w,t,k,B,M))?z.priority&&(j=1):q[x]=b=Oa.call(t,B,x,"get",w[x],k,M,0,i.stringFilter);t._op&&t._op[C]&&t.kill(B,t._op[C]),y&&t._pt&&(Vn=t,Jt.killTweensOf(B,q,t.globalTime(e)),et=!t.parent,Vn=0),t._pt&&l&&(oa[I.id]=1)}j&&gh(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!et,g&&e<=0&&T.render(Je,!0,!0)},fv=function(t,e,n,i,s,o,a){var l=(t._pt&&t._ptCache||(t._ptCache={}))[e],c,u,h,f;if(!l)for(l=t._ptCache[e]=[],h=t._ptLookup,f=t._targets.length;f--;){if(c=h[f][e],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==e&&c.fp!==e;)c=c._next;if(!c)return fa=1,t.vars[e]="+=0",Fa(t,a),fa=0,1;l.push(c)}for(f=l.length;f--;)u=l[f],c=u._pt||u,c.s=(i||i===0)&&!s?i:c.s+(i||0)+o*c.c,c.c=n-c.s,u.e&&(u.e=re(n)+Se(u.e)),u.b&&(u.b=c.s+Se(u.b))},dv=function(t,e){var n=t[0]?xi(t[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return e;s=bi({},e);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},pv=function(t,e,n,i){var s=e.ease||i||"power1.inOut",o,a;if(Ee(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},Lr=function(t,e,n,i,s){return ne(t)?t.call(e,n,i,s):me(t)&&~t.indexOf("random(")?Br(t):t},fh=Ia+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",dh={};Ue(fh+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return dh[r]=1});var ce=function(r){Lu(t,r);function t(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:Cr(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,p=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,d=l.yoyoEase,S=i.parent||Jt,v=(Ee(n)||Uu(n)?Nn(n[0]):"length"in i)?[n]:$e(n),M,y,T,w,C,x,b,B;if(a._targets=v.length?Na(v):Ns("GSAP target "+n+" not found. https://greensock.com",!Ve.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,g||f||Ts(c)||Ts(u)){if(i=a.vars,M=a.timeline=new Ce({data:"nested",defaults:_||{},targets:S&&S.data==="nested"?S.vars.targets:v}),M.kill(),M.parent=M._dp=Cn(a),M._start=0,f||Ts(c)||Ts(u)){if(w=v.length,b=f&&Ju(f),vn(f))for(C in f)~fh.indexOf(C)&&(B||(B={}),B[C]=f[C]);for(y=0;y<w;y++)T=Fs(i,dh),T.stagger=0,d&&(T.yoyoEase=d),B&&bi(T,B),x=v[y],T.duration=+Lr(c,Cn(a),y,x,v),T.delay=(+Lr(u,Cn(a),y,x,v)||0)-a._delay,!f&&w===1&&T.delay&&(a._delay=u=T.delay,a._start+=u,T.delay=0),M.to(x,T,b?b(y,x,v):0),M._ease=Ht.none;M.duration()?c=u=0:a.timeline=0}else if(g){Cr(tn(M.vars.defaults,{ease:"none"})),M._ease=Si(g.ease||i.ease||"none");var j=0,I,F,z;if(Ee(g))g.forEach(function(q){return M.to(v,q,">")}),M.duration();else{T={};for(C in g)C==="ease"||C==="easeEach"||pv(C,g[C],T,g.easeEach);for(C in T)for(I=T[C].sort(function(q,k){return q.t-k.t}),j=0,y=0;y<I.length;y++)F=I[y],z={ease:F.e,duration:(F.t-(y?I[y-1].t:0))/100*c},z[C]=F.v,M.to(v,z,j),j+=z.duration;M.duration()<c&&M.to({},{duration:c-M.duration()})}}c||a.duration(c=M.duration())}else a.timeline=0;return p===!0&&!Ra&&(Vn=Cn(a),Jt.killTweensOf(v),Vn=0),pn(S,Cn(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!g&&a._start===ge(S._time)&&De(h)&&X0(Cn(a))&&S.data!=="nested")&&(a._tTime=-Zt,a.render(Math.max(0,-u)||0)),m&&Yu(Cn(a),m),a}var e=t.prototype;return e.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-Zt&&!u?l:i<Zt?0:i,f,p,g,_,m,d,S,v,M;if(!c)Y0(this,i,s,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=h,v=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,o);if(f=ge(h%_),h===l?(g=this._repeat,f=c):(g=~~(h/_),g&&g===h/_&&(f=c,g--),f>c&&(f=c)),d=this._yoyo&&g&1,d&&(M=this._yEase,f=c-f),m=cr(this._tTime,_),f===a&&!o&&this._initted)return this._tTime=h,this;g!==m&&(v&&this._yEase&&lh(v,d),this.vars.repeatRefresh&&!d&&!this._lock&&(this._lock=o=1,this.render(ge(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(Zu(this,u?i:f,o,s,h))return this._tTime=0,this;if(a!==this._time)return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=S=(M||this._ease)(f/c),this._from&&(this.ratio=S=1-S),f&&!a&&!s&&!g&&(Qe(this,"onStart"),this._tTime!==h))return this;for(p=this._pt;p;)p.r(S,p.d),p=p._next;v&&v.render(i<0?i:!f&&d?-Zt:v._dur*v._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&aa(this,i,s,o),Qe(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&Qe(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&aa(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&$n(this,1),!s&&!(u&&!a)&&(h||a||d)&&(Qe(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,o,a){zr||ke.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Fa(this,l),c=this._ease(l/this._dur),fv(this,i,s,o,a,c,l)?this.resetTo(i,s,o,a):(Ks(this,0),this.parent||Xu(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Tr(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Vn&&Vn.vars.overwrite!==!0)._first||Tr(this),this.parent&&o!==this.timeline.totalDuration()&&ur(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?$e(i):a,c=this._ptLookup,u=this._pt,h,f,p,g,_,m,d;if((!s||s==="all")&&V0(a,l))return s==="all"&&(this._pt=0),Tr(this);for(h=this._op=this._op||[],s!=="all"&&(me(s)&&(_={},Ue(s,function(S){return _[S]=1}),s=_),s=dv(a,s)),d=a.length;d--;)if(~l.indexOf(a[d])){f=c[d],s==="all"?(h[d]=s,g=f,p={}):(p=h[d]=h[d]||{},g=s);for(_ in g)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Ys(this,m,"_pt"),delete f[_]),p!=="all"&&(p[_]=1)}return this._initted&&!this._pt&&u&&Tr(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return Pr(1,arguments)},t.delayedCall=function(i,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,s,o){return Pr(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,o){return Jt.killTweensOf(i,s,o)},t}(fr);tn(ce.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Ue("staggerTo,staggerFrom,staggerFromTo",function(r){ce[r]=function(){var t=new Ce,e=ca.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var Ba=function(t,e,n){return t[e]=n},ph=function(t,e,n){return t[e](n)},mv=function(t,e,n,i){return t[e](i.fp,n)},_v=function(t,e,n){return t.setAttribute(e,n)},za=function(t,e){return ne(t[e])?ph:Ca(t[e])&&t.setAttribute?_v:Ba},mh=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},gv=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},_h=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Ga=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},vv=function(t,e,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(t,e,n),s=o},xv=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Ys(this,e,"_pt"):e.dep||(n=1),e=i;return!n},Mv=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},gh=function(t){for(var e=t._pt,n,i,s,o;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=s},Ie=function(){function r(e,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||mh,this.d=l||this,this.set=c||Ba,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=Mv,this.m=n,this.mt=s,this.tween=i},r}();Ue(Ia+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Ua[r]=1});We.TweenMax=We.TweenLite=ce;We.TimelineLite=We.TimelineMax=Ce;Jt=new Ce({sortChildren:!1,defaults:lr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ve.stringFilter=oh;var dr=[],Ls={},Sv=[],Dc=0,ko=function(t){return(Ls[t]||Sv).map(function(e){return e()})},da=function(){var t=Date.now(),e=[];t-Dc>2&&(ko("matchMediaInit"),dr.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=Ye.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),ko("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n)}),Dc=t,ko("matchMedia"))},vh=function(){function r(e,n){this.selector=n&&ua(n),this.data=[],this._r=[],this.isReverted=!1,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){ne(n)&&(s=i,i=n,n=ne);var o=this,a=function(){var c=le,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=ua(s)),le=o,h=i.apply(o,arguments),ne(h)&&o._r.push(h),le=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===ne?a(o):n?o[n]=a:a},t.ignore=function(n){var i=le;le=null,n(this),le=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof ce&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n){var o=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return o.splice(o.indexOf(c),1)}))}),o.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof fr)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,s)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i){var a=dr.indexOf(this);~a&&dr.splice(a,1)}},t.revert=function(n){this.kill(n||{})},r}(),yv=function(){function r(e){this.contexts=[],this.scope=e}var t=r.prototype;return t.add=function(n,i,s){vn(n)||(n={matches:n});var o=new vh(0,s||this.scope),a=o.conditions={},l,c,u;this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=Ye.matchMedia(n[c]),l&&(dr.indexOf(o)<0&&dr.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(da):l.addEventListener("change",da)));return u&&i(o),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),zs={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return ih(i)})},timeline:function(t){return new Ce(t)},getTweensOf:function(t,e){return Jt.getTweensOf(t,e)},getProperty:function(t,e,n,i){me(t)&&(t=$e(t)[0]);var s=xi(t||{}).get,o=n?Wu:Vu;return n==="native"&&(n=""),t&&(e?o((Ge[e]&&Ge[e].get||s)(t,e,n,i)):function(a,l,c){return o((Ge[a]&&Ge[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=$e(t),t.length>1){var i=t.map(function(u){return Ne.quickSetter(u,e,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}t=t[0]||{};var o=Ge[e],a=xi(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(u){var h=new o;Ji._pt=0,h.init(t,n?u+n:u,Ji,0,[t]),h.render(1,h),Ji._pt&&Ga(1,Ji)}:a.set(t,l);return o?c:function(u){return c(t,l,n?u+n:u,a,1)}},quickTo:function(t,e,n){var i,s=Ne.to(t,bi((i={},i[e]="+=0.1",i.paused=!0,i),n||{})),o=function(l,c,u){return s.resetTo(e,l,c,u)};return o.tween=s,o},isTweening:function(t){return Jt.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Si(t.ease,lr.ease)),wc(lr,t||{})},config:function(t){return wc(Ve,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Ge[a]&&!We[a]&&Ns(e+" effect requires "+a+" plugin.")}),Fo[e]=function(a,l,c){return n($e(a),tn(l||{},s),c)},o&&(Ce.prototype[e]=function(a,l,c){return this.add(Fo[e](a,vn(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){Ht[t]=Si(e)},parseEase:function(t,e){return arguments.length?Si(t,e):Ht},getById:function(t){return Jt.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Ce(t),i,s;for(n.smoothChildTiming=De(t.smoothChildTiming),Jt.remove(n),n._dp=0,n._time=n._tTime=Jt._time,i=Jt._first;i;)s=i._next,(e||!(!i._dur&&i instanceof ce&&i.vars.onComplete===i._targets[0]))&&pn(n,i,i._start-i._delay),i=s;return pn(Jt,n,0),n},context:function(t,e){return t?new vh(t,e):le},matchMedia:function(t){return new yv(t)},matchMediaRefresh:function(){return dr.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||da()},addEventListener:function(t,e){var n=Ls[t]||(Ls[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Ls[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:ev,wrapYoyo:nv,distribute:Ju,random:Qu,snap:$u,normalize:tv,getUnit:Se,clamp:j0,splitColor:rh,toArray:$e,selector:ua,mapRange:eh,pipe:$0,unitize:Q0,interpolate:iv,shuffle:ju},install:Bu,effects:Fo,ticker:ke,updateRoot:Ce.updateRoot,plugins:Ge,globalTimeline:Jt,core:{PropTween:Ie,globals:zu,Tween:ce,Timeline:Ce,Animation:fr,getCache:xi,_removeLinkedListItem:Ys,reverting:function(){return ye},context:function(t){return t&&le&&(le.data.push(t),t._ctx=le),le},suppressOverwrites:function(t){return Ra=t}}};Ue("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return zs[r]=ce[r]});ke.add(Ce.updateRoot);Ji=zs.to({},{duration:0});var Ev=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},Tv=function(t,e){var n=t._targets,i,s,o;for(i in e)for(s=n.length;s--;)o=t._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=Ev(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[s],i))},Ho=function(t,e){return{name:t,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(me(s)&&(l={},Ue(s,function(u){return l[u]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}Tv(a,s)}}}},Ne=zs.registerPlugin({name:"attr",init:function(t,e,n,i,s){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)ye?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Ho("roundProps",ha),Ho("modifiers"),Ho("snap",$u))||zs;ce.version=Ce.version=Ne.version="3.11.5";Fu=1;Pa()&&hr();Ht.Power0;Ht.Power1;Ht.Power2;Ht.Power3;Ht.Power4;Ht.Linear;Ht.Quad;Ht.Cubic;Ht.Quart;Ht.Quint;Ht.Strong;Ht.Elastic;Ht.Back;Ht.SteppedEase;Ht.Bounce;Ht.Sine;Ht.Expo;Ht.Circ;/*!
 * CSSPlugin 3.11.5
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Uc,Wn,nr,ka,pi,Ic,Ha,bv=function(){return typeof window<"u"},On={},fi=180/Math.PI,ir=Math.PI/180,qi=Math.atan2,Nc=1e8,Va=/([A-Z])/g,Av=/(left|right|width|margin|padding|x)/i,wv=/[\s,\(]\S/,mn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},pa=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Rv=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Cv=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Pv=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},xh=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Mh=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Lv=function(t,e,n){return t.style[e]=n},Dv=function(t,e,n){return t.style.setProperty(e,n)},Uv=function(t,e,n){return t._gsap[e]=n},Iv=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},Nv=function(t,e,n,i,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},Ov=function(t,e,n,i,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},Qt="transform",un=Qt+"Origin",Fv=function r(t,e){var n=this,i=this.target,s=i.style;if(t in On){if(this.tfm=this.tfm||{},t!=="transform")t=mn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=Pn(i,o)}):this.tfm[t]=i._gsap.x?i._gsap[t]:Pn(i,t);else return mn.transform.split(",").forEach(function(o){return r.call(n,o,e)});if(this.props.indexOf(Qt)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(un,e,"")),t=Qt}(s||e)&&this.props.push(t,e,s[t])},Sh=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Bv=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Va,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=Ha(),(!s||!s.isStart)&&!n[Qt]&&(Sh(n),i.uncache=1)}},yh=function(t,e){var n={target:t,props:[],revert:Bv,save:Fv};return t._gsap||Ne.core.getCache(t),e&&e.split(",").forEach(function(i){return n.save(i)}),n},Eh,ma=function(t,e){var n=Wn.createElementNS?Wn.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Wn.createElement(t);return n.style?n:Wn.createElement(t)},_n=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Va,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,pr(e)||e,1)||""},Oc="O,Moz,ms,Ms,Webkit".split(","),pr=function(t,e,n){var i=e||pi,s=i.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(Oc[o]+t in s););return o<0?null:(o===3?"ms":o>=0?Oc[o]:"")+t},_a=function(){bv()&&window.document&&(Uc=window,Wn=Uc.document,nr=Wn.documentElement,pi=ma("div")||{style:{}},ma("div"),Qt=pr(Qt),un=Qt+"Origin",pi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Eh=!!pr("perspective"),Ha=Ne.core.reverting,ka=1)},Vo=function r(t){var e=ma("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,o;if(nr.appendChild(e),e.appendChild(this),this.style.display="block",t)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),nr.removeChild(e),this.style.cssText=s,o},Fc=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Th=function(t){var e;try{e=t.getBBox()}catch{e=Vo.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===Vo||(e=Vo.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+Fc(t,["x","cx","x1"])||0,y:+Fc(t,["y","cy","y1"])||0,width:0,height:0}:e},bh=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Th(t))},Gr=function(t,e){if(e){var n=t.style;e in On&&e!==un&&(e=Qt),n.removeProperty?((e.substr(0,2)==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(e.replace(Va,"-$1").toLowerCase())):n.removeAttribute(e)}},Xn=function(t,e,n,i,s,o){var a=new Ie(t._pt,e,n,0,1,o?Mh:xh);return t._pt=a,a.b=i,a.e=s,t._props.push(n),a},Bc={deg:1,rad:1,turn:1},zv={grid:1,flex:1},Qn=function r(t,e,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=pi.style,l=Av.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",p=i==="%",g,_,m,d;return i===o||!s||Bc[i]||Bc[o]?s:(o!=="px"&&!f&&(s=r(t,e,n,"px")),d=t.getCTM&&bh(t),(p||o==="%")&&(On[e]||~e.indexOf("adius"))?(g=d?t.getBBox()[l?"width":"height"]:t[u],re(p?s/g*h:s/100*g)):(a[l?"width":"height"]=h+(f?o:i),_=~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,d&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===Wn||!_.appendChild)&&(_=Wn.body),m=_._gsap,m&&p&&m.width&&l&&m.time===ke.time&&!m.uncache?re(s/m.width*h):((p||o==="%")&&!zv[_n(_,"display")]&&(a.position=_n(t,"position")),_===t&&(a.position="static"),_.appendChild(pi),g=pi[u],_.removeChild(pi),a.position="absolute",l&&p&&(m=xi(_),m.time=ke.time,m.width=_[u]),re(f?g*s/h:g&&s?h/g*s:0))))},Pn=function(t,e,n,i){var s;return ka||_a(),e in mn&&e!=="transform"&&(e=mn[e],~e.indexOf(",")&&(e=e.split(",")[0])),On[e]&&e!=="transform"?(s=Hr(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:ks(_n(t,un))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Gs[e]&&Gs[e](t,e,n)||_n(t,e)||ku(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Qn(t,e,s,n)+n:s},Gv=function(t,e,n,i){if(!n||n==="none"){var s=pr(e,t,1),o=s&&_n(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=_n(t,"borderTopColor"))}var a=new Ie(this._pt,t.style,e,0,1,_h),l=0,c=0,u,h,f,p,g,_,m,d,S,v,M,y;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(t.style[e]=i,i=_n(t,e)||i,t.style[e]=n),u=[n,i],oh(u),n=u[0],i=u[1],f=n.match(ji)||[],y=i.match(ji)||[],y.length){for(;h=ji.exec(i);)m=h[0],S=i.substring(l,h.index),g?g=(g+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(g=1),m!==(_=f[c++]||"")&&(p=parseFloat(_)||0,M=_.substr((p+"").length),m.charAt(1)==="="&&(m=er(p,m)+M),d=parseFloat(m),v=m.substr((d+"").length),l=ji.lastIndex-v.length,v||(v=v||Ve.units[e]||M,l===i.length&&(i+=v,a.e+=v)),M!==v&&(p=Qn(t,e,_,v)||0),a._pt={_next:a._pt,p:S||c===1?S:",",s:p,c:d-p,m:g&&g<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?Mh:xh;return Nu.test(i)&&(a.e=0),this._pt=a,a},zc={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},kv=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=zc[n]||n,e[1]=zc[i]||i,e.join(" ")},Hv=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],On[a]&&(l=1,a=a==="transformOrigin"?un:Qt),Gr(n,a);l&&(Gr(n,Qt),o&&(o.svg&&n.removeAttribute("transform"),Hr(n,1),o.uncache=1,Sh(i)))}},Gs={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var o=t._pt=new Ie(t._pt,e,n,0,0,Hv);return o.u=i,o.pr=-10,o.tween=s,t._props.push(n),1}}},kr=[1,0,0,1,0,0],Ah={},wh=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Gc=function(t){var e=_n(t,Qt);return wh(e)?kr:e.substr(7).match(Iu).map(re)},Wa=function(t,e){var n=t._gsap||xi(t),i=t.style,s=Gc(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?kr:s):(s===kr&&!t.offsetParent&&t!==nr&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent)&&(c=1,a=t.nextElementSibling,nr.appendChild(t)),s=Gc(t),l?i.display=l:Gr(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):nr.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},ga=function(t,e,n,i,s,o){var a=t._gsap,l=s||Wa(t,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,p=l[0],g=l[1],_=l[2],m=l[3],d=l[4],S=l[5],v=e.split(" "),M=parseFloat(v[0])||0,y=parseFloat(v[1])||0,T,w,C,x;n?l!==kr&&(w=p*m-g*_)&&(C=M*(m/w)+y*(-_/w)+(_*S-m*d)/w,x=M*(-g/w)+y*(p/w)-(p*S-g*d)/w,M=C,y=x):(T=Th(t),M=T.x+(~v[0].indexOf("%")?M/100*T.width:M),y=T.y+(~(v[1]||v[0]).indexOf("%")?y/100*T.height:y)),i||i!==!1&&a.smooth?(d=M-c,S=y-u,a.xOffset=h+(d*p+S*_)-d,a.yOffset=f+(d*g+S*m)-S):a.xOffset=a.yOffset=0,a.xOrigin=M,a.yOrigin=y,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[un]="0px 0px",o&&(Xn(o,a,"xOrigin",c,M),Xn(o,a,"yOrigin",u,y),Xn(o,a,"xOffset",h,a.xOffset),Xn(o,a,"yOffset",f,a.yOffset)),t.setAttribute("data-svg-origin",M+" "+y)},Hr=function(t,e){var n=t._gsap||new uh(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=_n(t,un)||"0",u,h,f,p,g,_,m,d,S,v,M,y,T,w,C,x,b,B,j,I,F,z,q,k,W,et,J,dt,O,nt,tt,ht;return u=h=f=_=m=d=S=v=M=0,p=g=1,n.svg=!!(t.getCTM&&bh(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Qt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Qt]!=="none"?l[Qt]:"")),i.scale=i.rotate=i.translate="none"),w=Wa(t,n.svg),n.svg&&(n.uncache?(W=t.getBBox(),c=n.xOrigin-W.x+"px "+(n.yOrigin-W.y)+"px",k=""):k=!e&&t.getAttribute("data-svg-origin"),ga(t,k||c,!!k||n.originIsAbsolute,n.smooth!==!1,w)),y=n.xOrigin||0,T=n.yOrigin||0,w!==kr&&(B=w[0],j=w[1],I=w[2],F=w[3],u=z=w[4],h=q=w[5],w.length===6?(p=Math.sqrt(B*B+j*j),g=Math.sqrt(F*F+I*I),_=B||j?qi(j,B)*fi:0,S=I||F?qi(I,F)*fi+_:0,S&&(g*=Math.abs(Math.cos(S*ir))),n.svg&&(u-=y-(y*B+T*I),h-=T-(y*j+T*F))):(ht=w[6],nt=w[7],J=w[8],dt=w[9],O=w[10],tt=w[11],u=w[12],h=w[13],f=w[14],C=qi(ht,O),m=C*fi,C&&(x=Math.cos(-C),b=Math.sin(-C),k=z*x+J*b,W=q*x+dt*b,et=ht*x+O*b,J=z*-b+J*x,dt=q*-b+dt*x,O=ht*-b+O*x,tt=nt*-b+tt*x,z=k,q=W,ht=et),C=qi(-I,O),d=C*fi,C&&(x=Math.cos(-C),b=Math.sin(-C),k=B*x-J*b,W=j*x-dt*b,et=I*x-O*b,tt=F*b+tt*x,B=k,j=W,I=et),C=qi(j,B),_=C*fi,C&&(x=Math.cos(C),b=Math.sin(C),k=B*x+j*b,W=z*x+q*b,j=j*x-B*b,q=q*x-z*b,B=k,z=W),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,d=180-d),p=re(Math.sqrt(B*B+j*j+I*I)),g=re(Math.sqrt(q*q+ht*ht)),C=qi(z,q),S=Math.abs(C)>2e-4?C*fi:0,M=tt?1/(tt<0?-tt:tt):0),n.svg&&(k=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!wh(_n(t,Qt)),k&&t.setAttribute("transform",k))),Math.abs(S)>90&&Math.abs(S)<270&&(s?(p*=-1,S+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,S+=S<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-h)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=re(p),n.scaleY=re(g),n.rotation=re(_)+a,n.rotationX=re(m)+a,n.rotationY=re(d)+a,n.skewX=S+a,n.skewY=v+a,n.transformPerspective=M+o,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[un]=ks(c)),n.xOffset=n.yOffset=0,n.force3D=Ve.force3D,n.renderTransform=n.svg?Wv:Eh?Rh:Vv,n.uncache=0,n},ks=function(t){return(t=t.split(" "))[0]+" "+t[1]},Wo=function(t,e,n){var i=Se(e);return re(parseFloat(e)+parseFloat(Qn(t,"x",n+"px",i)))+i},Vv=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Rh(t,e)},li="0deg",yr="0px",ci=") ",Rh=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,p=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,d=n.force3D,S=n.target,v=n.zOrigin,M="",y=d==="auto"&&t&&t!==1||d===!0;if(v&&(h!==li||u!==li)){var T=parseFloat(u)*ir,w=Math.sin(T),C=Math.cos(T),x;T=parseFloat(h)*ir,x=Math.cos(T),o=Wo(S,o,w*x*-v),a=Wo(S,a,-Math.sin(T)*-v),l=Wo(S,l,C*x*-v+v)}m!==yr&&(M+="perspective("+m+ci),(i||s)&&(M+="translate("+i+"%, "+s+"%) "),(y||o!==yr||a!==yr||l!==yr)&&(M+=l!==yr||y?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+ci),c!==li&&(M+="rotate("+c+ci),u!==li&&(M+="rotateY("+u+ci),h!==li&&(M+="rotateX("+h+ci),(f!==li||p!==li)&&(M+="skew("+f+", "+p+ci),(g!==1||_!==1)&&(M+="scale("+g+", "+_+ci),S.style[Qt]=M||"translate(0, 0)"},Wv=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,p=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,d=n.yOffset,S=n.forceCSS,v=parseFloat(o),M=parseFloat(a),y,T,w,C,x;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=ir,c*=ir,y=Math.cos(l)*h,T=Math.sin(l)*h,w=Math.sin(l-c)*-f,C=Math.cos(l-c)*f,c&&(u*=ir,x=Math.tan(c-u),x=Math.sqrt(1+x*x),w*=x,C*=x,u&&(x=Math.tan(u),x=Math.sqrt(1+x*x),y*=x,T*=x)),y=re(y),T=re(T),w=re(w),C=re(C)):(y=h,C=f,T=w=0),(v&&!~(o+"").indexOf("px")||M&&!~(a+"").indexOf("px"))&&(v=Qn(p,"x",o,"px"),M=Qn(p,"y",a,"px")),(g||_||m||d)&&(v=re(v+g-(g*y+_*w)+m),M=re(M+_-(g*T+_*C)+d)),(i||s)&&(x=p.getBBox(),v=re(v+i/100*x.width),M=re(M+s/100*x.height)),x="matrix("+y+","+T+","+w+","+C+","+v+","+M+")",p.setAttribute("transform",x),S&&(p.style[Qt]=x)},Xv=function(t,e,n,i,s){var o=360,a=me(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?fi:1),c=l-i,u=i+c+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*Nc)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*Nc)%o-~~(c/o)*o)),t._pt=f=new Ie(t._pt,e,n,i,c,Rv),f.e=u,f.u="deg",t._props.push(n),f},kc=function(t,e){for(var n in e)t[n]=e[n];return t},qv=function(t,e,n){var i=kc({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,f,p,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Qt]=e,a=Hr(n,1),Gr(n,Qt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Qt],o[Qt]=e,a=Hr(n,1),o[Qt]=c);for(l in On)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(p=Se(c),g=Se(u),h=p!==g?Qn(n,l,c,g):parseFloat(c),f=parseFloat(u),t._pt=new Ie(t._pt,a,l,h,f-h,pa),t._pt.u=g||0,t._props.push(l));kc(a,i)};Ue("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",o=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(a){return t<2?r+a:"border"+a+r});Gs[t>1?"border"+r:r]=function(a,l,c,u,h){var f,p;if(arguments.length<4)return f=o.map(function(g){return Pn(a,g,c)}),p=f.join(" "),p.split(f[0]).length===5?f[0]:p;f=(u+"").split(" "),p={},o.forEach(function(g,_){return p[g]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,p,h)}});var Ch={name:"css",register:_a,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var o=this._props,a=t.style,l=n.vars.startAt,c,u,h,f,p,g,_,m,d,S,v,M,y,T,w,C;ka||_a(),this.styles=this.styles||yh(t),C=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(u=e[_],!(Ge[_]&&hh(_,e,n,i,t,s)))){if(p=typeof u,g=Gs[_],p==="function"&&(u=u.call(n,i,t,s),p=typeof u),p==="string"&&~u.indexOf("random(")&&(u=Br(u)),g)g(this,t,_,u,n)&&(w=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),u+="",Kn.lastIndex=0,Kn.test(c)||(m=Se(c),d=Se(u)),d?m!==d&&(c=Qn(t,_,c,d)+d):m&&(u+=m),this.add(a,"setProperty",c,u,i,s,0,0,_),o.push(_),C.push(_,0,a[_]);else if(p!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,s):l[_],me(c)&&~c.indexOf("random(")&&(c=Br(c)),Se(c+"")||(c+=Ve.units[_]||Se(Pn(t,_))||""),(c+"").charAt(1)==="="&&(c=Pn(t,_))):c=Pn(t,_),f=parseFloat(c),S=p==="string"&&u.charAt(1)==="="&&u.substr(0,2),S&&(u=u.substr(2)),h=parseFloat(u),_ in mn&&(_==="autoAlpha"&&(f===1&&Pn(t,"visibility")==="hidden"&&h&&(f=0),C.push("visibility",0,a.visibility),Xn(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=mn[_],~_.indexOf(",")&&(_=_.split(",")[0]))),v=_ in On,v){if(this.styles.save(_),M||(y=t._gsap,y.renderTransform&&!e.parseTransform||Hr(t,e.parseTransform),T=e.smoothOrigin!==!1&&y.smooth,M=this._pt=new Ie(this._pt,a,Qt,0,1,y.renderTransform,y,0,-1),M.dep=1),_==="scale")this._pt=new Ie(this._pt,y,"scaleY",y.scaleY,(S?er(y.scaleY,S+h):h)-y.scaleY||0,pa),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){C.push(un,0,a[un]),u=kv(u),y.svg?ga(t,u,0,T,0,this):(d=parseFloat(u.split(" ")[2])||0,d!==y.zOrigin&&Xn(this,y,"zOrigin",y.zOrigin,d),Xn(this,a,_,ks(c),ks(u)));continue}else if(_==="svgOrigin"){ga(t,u,1,T,0,this);continue}else if(_ in Ah){Xv(this,y,_,f,S?er(f,S+u):u);continue}else if(_==="smoothOrigin"){Xn(this,y,"smooth",y.smooth,u);continue}else if(_==="force3D"){y[_]=u;continue}else if(_==="transform"){qv(this,u,t);continue}}else _ in a||(_=pr(_)||_);if(v||(h||h===0)&&(f||f===0)&&!wv.test(u)&&_ in a)m=(c+"").substr((f+"").length),h||(h=0),d=Se(u)||(_ in Ve.units?Ve.units[_]:m),m!==d&&(f=Qn(t,_,c,d)),this._pt=new Ie(this._pt,v?y:a,_,f,(S?er(f,S+h):h)-f,!v&&(d==="px"||_==="zIndex")&&e.autoRound!==!1?Pv:pa),this._pt.u=d||0,m!==d&&d!=="%"&&(this._pt.b=c,this._pt.r=Cv);else if(_ in a)Gv.call(this,t,_,c,S?S+u:u);else if(_ in t)this.add(t,_,c||t[_],S?S+u:u,i,s);else if(_!=="parseTransform"){Da(_,u);continue}v||(_ in a?C.push(_,0,a[_]):C.push(_,1,c||t[_])),o.push(_)}}w&&gh(this)},render:function(t,e){if(e.tween._time||!Ha())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Pn,aliases:mn,getSetter:function(t,e,n){var i=mn[e];return i&&i.indexOf(",")<0&&(e=i),e in On&&e!==un&&(t._gsap.x||Pn(t,"x"))?n&&Ic===n?e==="scale"?Iv:Uv:(Ic=n||{})&&(e==="scale"?Nv:Ov):t.style&&!Ca(t.style[e])?Lv:~e.indexOf("-")?Dv:za(t,e)},core:{_removeProperty:Gr,_getMatrix:Wa}};Ne.utils.checkPrefix=pr;Ne.core.getStyleSaver=yh;(function(r,t,e,n){var i=Ue(r+","+t+","+e,function(s){On[s]=1});Ue(t,function(s){Ve.units[s]="deg",Ah[s]=1}),mn[i[13]]=r+","+t,Ue(n,function(s){var o=s.split(":");mn[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Ue("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Ve.units[r]="px"});Ne.registerPlugin(Ch);var Ph=Ne.registerPlugin(Ch)||Ne;Ph.core.Tween;const Yv=.7,Zv=.4,bs=(r,t=void 0)=>t?Math.random()*(t-r)-r:Math.random()*r*2-r,Kv=(r,t,e)=>{for(let n=0;n<r;n++){const i=new wa(bs(Zv,Yv)),s=new Ma({color:16777215}),o=new Un(i,s);o.position.set(bs(t.x),bs(t.y),bs(t.z)),e.add(o)}};const Hc="CTRL HACKS '23",jv=9,Jv=70,Vc=1.5,Wc=20*(Math.PI/180),$v=(r,t,e,n,i)=>(r-t)*(i-n)/(e-t)+n;function Qv(){const r=document.querySelector("#c"),t=new yu({canvas:r}),e=new je(40,2,.1,1e3);e.position.set(0,20,120);const n=new Gg;n.background=0;const i=new U0(e,t.domElement);i.target=new U(0,10,0),i.enableZoom=!1,i.enablePan=!1,i.enableRotate=!1;const s=[];Kv(100,{x:100,y:100,z:100},n),Hc.split("").forEach((u,h)=>{const f=new C0,p="../fonts/Space-Grotesk-Bold.json";f.load(p,g=>{const _=new R0(u,{font:g,size:10,height:2,curveSegments:4,bevelEnabled:!1});{const m=new i0(_),d=m.getAttribute("position").count,S=new Float32Array(d),v=d/2;for(let b=0;b<v;++b){const B=b*2;S[B+0]=b,S[B+1]=b+1}const M=1,y=!1,T=new cn(S,M,y);m.setAttribute("count",T);const w={uniforms:{color:{value:new qt("white")},time:{value:0}},vertexShader:`
                    attribute float count;
                    varying float vCount;
                    void main() {
                    vCount = count;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1);
                    }
                `,fragmentShader:`
                    #include <common>
            
                    varying float vCount;
                    uniform vec3 color;
                    uniform float time;
            
                    void main() {
                    if (vCount > time) {
                        discard;
                    }
                    gl_FragColor = vec4(color, 1);
                    }
                `},C=new Jn(w),x=new Vg(m,C);x.position.x+=jv*h-Jv,x.rotation.x=-1.7,n.add(x),s.push({obj:x,edgeCount:v})}})});function o(u){const h=u.domElement,f=h.clientWidth,p=h.clientHeight,g=h.width!==f||h.height!==p;return g&&u.setSize(f,p,!1),g}let a=!1;const l=()=>{const u=Ph.timeline();u.to(e.position,{duration:3,x:20,y:70,z:80,ease:"power1"}),s.forEach(({obj:h,edgeCount:f},p)=>{u.to(h.material.uniforms.time,{duration:Vc,value:f},0),u.to(h.rotation,{duration:Vc,x:-.3},0)}),u.addLabel("step2"),u.to(e.position,{duration:1,x:20,y:-20,z:140,ease:"power4"},"step2"),u.to(i.target,{duration:1,x:0,y:-20,z:0,ease:"power4"},"step2"),u.to("nav, .hero",{opacity:1,duration:.2}),document.addEventListener("mousemove",h=>{const f=window.innerWidth/2,p=h.clientX-f,g=$v(p,-f,f,-Wc,Wc)+Math.PI/2;e.position.set(141.4*Math.cos(g),-20,141.41*Math.sin(g))})};function c(u){if(o(t)){const h=t.domElement;e.aspect=h.clientWidth/h.clientHeight,e.updateProjectionMatrix()}i.update(),!a&&s.length>=Hc.length&&(l(),a=!0),t.render(n,e),requestAnimationFrame(c)}requestAnimationFrame(c)}Qv();
