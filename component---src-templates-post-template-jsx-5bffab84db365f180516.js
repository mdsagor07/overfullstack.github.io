(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{158:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n.n(a),i=n(0),o=n.n(i),s=n(166),l=n.n(s),u=n(167),c=(n(250),n(36)),p=n(177),m=n.n(p),d=(n(165),n(37)),f=n.n(d),h=n(252),g=n.n(h),y=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={toasts:[]},n.notifyAboutComment=n.notifyAboutComment.bind(f()(f()(n))),n.onSnackbarDismiss=n.onSnackbarDismiss.bind(f()(f()(n))),n}r()(t,e);var n=t.prototype;return n.onSnackbarDismiss=function(){var e=this.state.toasts.slice(1);this.setState({toasts:e})},n.notifyAboutComment=function(){var e=this.state.toasts.slice();e.push({text:"New comment available!!"}),this.setState({toasts:e})},n.render=function(){var e=this.props,t=e.postNode,n=e.siteMetadata;if(!n.disqusShortname)return null;var a=t.frontmatter,r=n.url+t.fields.slug;return o.a.createElement(g.a,{shortname:n.disqusShortname,identifier:a.title,title:a.title,url:r,category_id:a.category_id,onNewComment:this.notifyAboutComment})},t}(i.Component),v=(n(254),n(168)),b=n(169),E=n(170),_=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata,t=e.subtitle,n=e.author,a=this.props.pageContext,r=a.previous,i=a.next,s=this.props.data.markdownRemark,l=s.fields.tagSlugs,u=this.props.location,p=o.a.createElement("div",{className:"applause"},o.a.createElement("applause-button",{multiclap:"true"})),d=o.a.createElement("div",null,o.a.createElement(c.Link,{className:"post-single__home-button",to:"/"},"All Articles"),p),f=o.a.createElement("div",{className:"post-single__tags"},o.a.createElement("ul",{className:"post-single__tags-list"},l&&l.map(function(e,t){return o.a.createElement("li",{className:"post-single__tags-list-item",key:e},o.a.createElement(c.Link,{to:e,className:"post-single__tags-list-item-link"},s.frontmatter.tags[t]))}))),h=o.a.createElement("div",null,o.a.createElement(y,{postNode:s,siteMetadata:this.props.data.site.siteMetadata}));return o.a.createElement("div",null,d,o.a.createElement("div",{className:"post-single"},o.a.createElement("div",{className:"post-single__inner"},o.a.createElement("h1",{className:"post-single__title"},s.frontmatter.title),o.a.createElement("div",{className:"post-single__body",dangerouslySetInnerHTML:{__html:s.html}}),o.a.createElement("div",{className:"post-single__date"},o.a.createElement("em",null,"Published ",m()(s.frontmatter.date).format("D MMM YYYY")))),o.a.createElement("div",{className:"post-single__footer"},f,o.a.createElement("div",{className:"mobile-footer-clap"},p),o.a.createElement("hr",null),o.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},o.a.createElement("li",null,r&&o.a.createElement(c.Link,{to:r.fields.slug,rel:"prev"},"← ",r.frontmatter.title)),o.a.createElement("li",null,i&&o.a.createElement(c.Link,{to:i.fields.slug,rel:"next"},i.frontmatter.title," →"))),o.a.createElement("div",{className:"post-single__footer-text",style:{marginBottom:"1.625rem"}},o.a.createElement(b.a,{author:n,subtitle:t,path:Object(E.a)(u)}),o.a.createElement("a",{href:""+n.resume,target:"_blank",rel:"noopener noreferrer"},o.a.createElement("strong",null,"My  Résumé"))),o.a.createElement("div",{className:"post-single__footer-text"},o.a.createElement(v.a,{data:n,isFlat:!0})),h)))},t}(o.a.Component);n.d(t,"pageQuery",function(){return N});var w=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata,t=e.title,n=e.subtitle,a=this.props.data.markdownRemark.frontmatter,r=a.title,i=a.description,s=null!==i?i:n;return o.a.createElement(u.a,null,o.a.createElement("div",null,o.a.createElement(l.a,null,o.a.createElement("title",null,r+" - "+t),o.a.createElement("meta",{name:"description",content:s})),o.a.createElement(_,this.props)))},t}(o.a.Component),N=(t.default=w,"3305082804")},250:function(e,t,n){},252:function(e,t,n){"use strict";e.exports=n(253)},253:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=s(n(0)),o=s(n(1));function s(e){return e&&e.__esModule?e:{default:e}}var l=["shortname","identifier","title","url","category_id","onNewComment","language"],u=!1;function c(e,t){var n=t.onNewComment,a=t.language,r=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(t,["onNewComment","language"]);for(var i in r)e.page[i]=r[i];e.language=a,n&&(e.callbacks={onNewComment:[n]})}var p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),r(t,[{key:"componentDidMount",value:function(){this.loadDisqus()}},{key:"componentDidUpdate",value:function(){this.loadDisqus()}},{key:"shouldComponentUpdate",value:function(e,t){return e.identifier!==this.props.identifier}},{key:"render",value:function(){var e=this,t=Object.keys(this.props).reduce(function(t,n){return l.some(function(e){return e===n})?t:a({},t,function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},n,e.props[n]))},{});return i.default.createElement("div",t,i.default.createElement("div",{id:"disqus_thread"}))}},{key:"addDisqusScript",value:function(){if(!u){var e=this.disqus=document.createElement("script"),t=document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0];e.async=!0,e.type="text/javascript",e.src="//"+this.props.shortname+".disqus.com/embed.js",t.appendChild(e),u=!0}}},{key:"loadDisqus",value:function(){var e=this,t={};l.forEach(function(n){"shortname"!==n&&e.props[n]&&(t[n]=e.props[n])}),"undefined"!=typeof DISQUS?DISQUS.reset({reload:!0,config:function(){c(this,t),this.page.url=this.page.url.replace(/#/,"")+"#!newthread"}}):(window.disqus_config=function(){c(this,t)},this.addDisqusScript())}}]),t}();p.displayName="DisqusThread",p.propTypes={id:o.default.string,shortname:o.default.string.isRequired,identifier:o.default.string,title:o.default.string,url:o.default.string,category_id:o.default.string,onNewComment:o.default.func,language:o.default.string},p.defaultProps={url:"undefined"==typeof window?null:window.location.href},t.default=p},254:function(e,t,n){}}]);
//# sourceMappingURL=component---src-templates-post-template-jsx-5bffab84db365f180516.js.map