(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{156:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return x});var n=a(7),u=a.n(n),r=a(0),i=a.n(r),l=a(36),s=a(165),c=a.n(s),o=a(182),f=a.n(o),d=a(166),m=a(164),p=function(e){function t(){return e.apply(this,arguments)||this}return u()(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata.title,t=this.props.data.allMarkdownRemark.group;return i.a.createElement(d.a,null,i.a.createElement("div",null,i.a.createElement(c.a,{title:"All Tags - "+e}),i.a.createElement(m.a,this.props),i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"content__inner"},i.a.createElement("div",{className:"page"},i.a.createElement("h1",{className:"page__title"},"Tags"),i.a.createElement("div",{className:"page__body"},i.a.createElement("div",{className:"tags"},i.a.createElement("ul",{className:"tags__list"},t.map(function(e){return i.a.createElement("li",{key:e.fieldValue,className:"tags__list-item"},i.a.createElement(l.Link,{to:"/tags/"+f()(e.fieldValue)+"/",className:"tags__list-item-link"},e.fieldValue," (",e.totalCount,")"))})))))))))},t}(i.a.Component);t.default=p;var x="850724892"},162:function(e,t,a){},163:function(e,t,a){},164:function(e,t,a){"use strict";var n=a(7),u=a.n(n),r=a(0),i=a.n(r),l=a(170),s=a.n(l),c=a(36),o=(a(162),function(e){function t(){return e.apply(this,arguments)||this}return u()(t,e),t.prototype.render=function(){var e=this.props.data,t=i.a.createElement("ul",{className:"menu__list"},e.map(function(e){return i.a.createElement("li",{className:"menu__list-item",key:e.path},i.a.createElement(c.Link,{to:e.path,className:"menu__list-item-link",activeClassName:"menu__list-item-link menu__list-item-link--active"},e.label))}));return i.a.createElement("nav",{className:"menu"},t)},t}(i.a.Component)),f=a(167),d=(a(168),a(163),function(e){return i.a.createElement("span",{className:"emoji",role:"img","aria-label":e.label?e.label:"","aria-hidden":e.label?"false":"true"},e.symbol)}),m=a(169),p=function(e){function t(){return e.apply(this,arguments)||this}return u()(t,e),t.prototype.render=function(){var e=this.props.location,t=this.props.data.site.siteMetadata,a=t.author,n=t.subtitle,u=t.copyright,r=t.menu,l="/"===s()(e,"pathname","/");return i.a.createElement("div",{className:"sidebar"},i.a.createElement("div",{className:"sidebar__inner"},i.a.createElement("div",{className:"sidebar__author"},i.a.createElement(m.a,{author:a,subtitle:n,isHomePage:l})),i.a.createElement("div",null,i.a.createElement(o,{data:r}),i.a.createElement(f.a,{data:a}),i.a.createElement("p",{className:"sidebar__copyright",style:{marginTop:0}},"This Blog is built with React.js ",i.a.createElement(d,{symbol:"⚛️"})),i.a.createElement("p",{className:"sidebar__copyright"},u))))},t}(i.a.Component);t.a=p},182:function(e,t,a){var n=a(183)(function(e,t,a){return e+(a?"-":"")+t.toLowerCase()});e.exports=n},183:function(e,t,a){var n=a(184),u=a(185),r=a(188),i=RegExp("['’]","g");e.exports=function(e){return function(t){return n(r(u(t).replace(i,"")),e,"")}}},184:function(e,t){e.exports=function(e,t,a,n){var u=-1,r=null==e?0:e.length;for(n&&r&&(a=e[++u]);++u<r;)a=t(a,e[u],u,e);return a}},185:function(e,t,a){var n=a(186),u=a(171),r=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,i=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=u(e))&&e.replace(r,n).replace(i,"")}},186:function(e,t,a){var n=a(187)({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});e.exports=n},187:function(e,t){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},188:function(e,t,a){var n=a(189),u=a(190),r=a(171),i=a(191);e.exports=function(e,t,a){return e=r(e),void 0===(t=a?void 0:t)?u(e)?i(e):n(e):e.match(t)||[]}},189:function(e,t){var a=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(a)||[]}},190:function(e,t){var a=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return a.test(e)}},191:function(e,t){var a="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",n="["+a+"]",u="\\d+",r="[\\u2700-\\u27bf]",i="[a-z\\xdf-\\xf6\\xf8-\\xff]",l="[^\\ud800-\\udfff"+a+u+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",s="(?:\\ud83c[\\udde6-\\uddff]){2}",c="[\\ud800-\\udbff][\\udc00-\\udfff]",o="[A-Z\\xc0-\\xd6\\xd8-\\xde]",f="(?:"+i+"|"+l+")",d="(?:"+o+"|"+l+")",m="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",p="[\\ufe0e\\ufe0f]?"+m+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",s,c].join("|")+")[\\ufe0e\\ufe0f]?"+m+")*"),x="(?:"+[r,s,c].join("|")+")"+p,E=RegExp([o+"?"+i+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[n,o,"$"].join("|")+")",d+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[n,o+f,"$"].join("|")+")",o+"?"+f+"+(?:['’](?:d|ll|m|re|s|t|ve))?",o+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",u,x].join("|"),"g");e.exports=function(e){return e.match(E)||[]}}}]);
//# sourceMappingURL=component---src-pages-tags-jsx-a286faa293a8f29ef123.js.map