(function(){"use strict";var n={1545:function(n,t,e){var r=e(5130),o=e(6768);function a(n,t,e,a,u,l){return(0,o.uX)(),(0,o.CE)("div",null,[t[8]||(t[8]=(0,o.Lk)("h1",null,"zenkaku-hankaku-converter",-1)),t[9]||(t[9]=(0,o.Lk)("h4",null,"Convert alphanumeric characters only",-1)),t[10]||(t[10]=(0,o.Lk)("p",null,"Text to convert",-1)),(0,o.bo)((0,o.Lk)("textarea",{placeholder:"Enter your text","onUpdate:modelValue":t[0]||(t[0]=n=>u.yourText=n),ref:"yt"},null,512),[[r.Jo,u.yourText]]),(0,o.Lk)("div",null,[(0,o.Lk)("button",{onClick:t[1]||(t[1]=n=>l.clear())},"Clear"),(0,o.Lk)("button",{onClick:t[2]||(t[2]=n=>l.paste())},"Paste"),(0,o.Lk)("button",{onClick:t[3]||(t[3]=n=>l.convert())},"Convert")]),t[11]||(t[11]=(0,o.Lk)("p",null,"zenkaku",-1)),(0,o.bo)((0,o.Lk)("textarea",{placeholder:"","onUpdate:modelValue":t[4]||(t[4]=n=>u.zenkakuText=n),class:"bg-color-f2f2f2",readonly:""},null,512),[[r.Jo,u.zenkakuText]]),(0,o.Lk)("div",null,[(0,o.Lk)("button",{onClick:t[5]||(t[5]=n=>l.copy(u.zenkakuText))},"Copy")]),t[12]||(t[12]=(0,o.Lk)("p",null,"hankaku",-1)),(0,o.bo)((0,o.Lk)("textarea",{placeholder:"","onUpdate:modelValue":t[6]||(t[6]=n=>u.hankakuText=n),class:"bg-color-f2f2f2",readonly:""},null,512),[[r.Jo,u.hankakuText]]),(0,o.Lk)("div",null,[(0,o.Lk)("button",{onClick:t[7]||(t[7]=n=>l.copy(u.hankakuText))},"Copy")])])}var u={name:"App",components:{},data(){return{yourText:"",zenkakuText:"",hankakuText:""}},mounted(){this.$refs.yt.focus()},methods:{clear(){this.yourText="",this.zenkakuText="",this.hankakuText=""},async paste(){this.yourText=await navigator.clipboard.readText()},toZenkaku(n){return n.replace(/[A-Za-z0-9]/g,(n=>String.fromCharCode(n.charCodeAt(0)+65248)))},toHankaku(n){return n.replace(/[Ａ-Ｚａ-ｚ０-９]/g,(n=>String.fromCharCode(n.charCodeAt(0)-65248)))},convert(){const n=this.yourText;this.zenkakuText=this.toZenkaku(n),this.hankakuText=this.toHankaku(n)},async copy(n){await navigator.clipboard.writeText(n)}}},l=e(1241);const i=(0,l.A)(u,[["render",a]]);var c=i;(0,r.Ef)(c).mount("#app")}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return n[r].call(a.exports,a,a.exports,e),a.exports}e.m=n,function(){var n=[];e.O=function(t,r,o,a){if(!r){var u=1/0;for(k=0;k<n.length;k++){r=n[k][0],o=n[k][1],a=n[k][2];for(var l=!0,i=0;i<r.length;i++)(!1&a||u>=a)&&Object.keys(e.O).every((function(n){return e.O[n](r[i])}))?r.splice(i--,1):(l=!1,a<u&&(u=a));if(l){n.splice(k--,1);var c=o();void 0!==c&&(t=c)}}return t}a=a||0;for(var k=n.length;k>0&&n[k-1][2]>a;k--)n[k]=n[k-1];n[k]=[r,o,a]}}(),function(){e.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return e.d(t,{a:t}),t}}(),function(){e.d=function(n,t){for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){var n={524:0};e.O.j=function(t){return 0===n[t]};var t=function(t,r){var o,a,u=r[0],l=r[1],i=r[2],c=0;if(u.some((function(t){return 0!==n[t]}))){for(o in l)e.o(l,o)&&(e.m[o]=l[o]);if(i)var k=i(e)}for(t&&t(r);c<u.length;c++)a=u[c],e.o(n,a)&&n[a]&&n[a][0](),n[a]=0;return e.O(k)},r=self["webpackChunkzenkaku_hankaku_converter"]=self["webpackChunkzenkaku_hankaku_converter"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=e.O(void 0,[504],(function(){return e(1545)}));r=e.O(r)})();
//# sourceMappingURL=app.90f45bf5.js.map