(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{155:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return d});a(77);var n=a(7),r=a.n(n),s=a(0),i=a.n(s),l=a(165),c=a.n(l),o=a(166),m=a(171),p=a(164),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=[],t=this.props.data.site.siteMetadata,a=t.title,n=t.subtitle;return this.props.data.allMarkdownRemark.edges.forEach(function(t){e.push(i.a.createElement(m.a,{data:t,key:t.node.fields.slug}))}),i.a.createElement(o.a,null,i.a.createElement("div",null,i.a.createElement(c.a,null,i.a.createElement("title",null,a),i.a.createElement("meta",{name:"description",content:n})),i.a.createElement(p.a,this.props),i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"content__inner"},e))))},t}(i.a.Component);t.default=u;var d="1261786841"},162:function(e,t,a){},163:function(e,t,a){},164:function(e,t,a){"use strict";var n=a(7),r=a.n(n),s=a(0),i=a.n(s),l=a(169),c=a.n(l),o=a(36),m=(a(162),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data,t=i.a.createElement("ul",{className:"menu__list"},e.map(function(e){return i.a.createElement("li",{className:"menu__list-item",key:e.path},i.a.createElement(o.Link,{to:e.path,className:"menu__list-item-link",activeClassName:"menu__list-item-link menu__list-item-link--active"},e.label))}));return i.a.createElement("nav",{className:"menu"},t)},t}(i.a.Component)),p=a(167),u=(a(163),function(e){var t=e.label,a=e.symbol;return i.a.createElement("span",{className:"emoji",role:"img","aria-label":t||"","aria-hidden":t?"false":"true"},a)}),d=a(168),_=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.location,t=this.props.data.site.siteMetadata,a=t.author,n=t.subtitle,r=t.copyright,s=t.menu,l="/"===c()(e,"pathname","/");return i.a.createElement("div",{className:"sidebar"},i.a.createElement("div",{className:"sidebar__inner"},i.a.createElement("div",{className:"sidebar__author"},i.a.createElement(d.a,{author:a,subtitle:n,isHomePage:l})),i.a.createElement("div",null,i.a.createElement(m,{data:s}),i.a.createElement(p.a,{data:a}),i.a.createElement("p",{className:"sidebar__copyright",style:{marginTop:0}},"This Blog is built with React.js ",i.a.createElement(u,{symbol:"⚛️"})),i.a.createElement("p",{className:"sidebar__copyright"},r))))},t}(i.a.Component);t.a=_},171:function(e,t,a){"use strict";var n=a(7),r=a.n(n),s=a(0),i=a.n(s),l=a(36),c=a(176),o=a.n(c),m=(a(172),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.node.frontmatter,t=e.title,a=e.date,n=e.category,r=e.description,s=this.props.data.node.fields,c=s.slug,m=s.categorySlug;return i.a.createElement("div",{className:"post"},i.a.createElement("div",{className:"post__meta"},i.a.createElement("time",{className:"post__meta-time",dateTime:o()(a).format("MMMM D, YYYY")},o()(a).format("MMMM YYYY")),i.a.createElement("span",{className:"post__meta-divider"}),i.a.createElement("span",{className:"post__meta-category",key:m},i.a.createElement(l.Link,{to:m,className:"post__meta-category-link"},n))),i.a.createElement("h2",{className:"post__title"},i.a.createElement(l.Link,{className:"post__title-link",to:c},t)),i.a.createElement("p",{className:"post__description"},r),i.a.createElement(l.Link,{className:"post__readmore",to:c},"Read"))},t}(i.a.Component));t.a=m},172:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-index-jsx-61b3ccc5dbaa63aa3845.js.map