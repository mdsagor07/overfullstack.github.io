(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{160:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a.n(n),s=a(0),i=a.n(s),l=a(165),o=a.n(l),c=a(166),m=a(164),p=(a(77),a(172)),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=[],t=this.props.pageContext.tag;return this.props.data.allMarkdownRemark.edges.forEach(function(t){e.push(i.a.createElement(p.a,{data:t,key:t.node.fields.slug}))}),i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"content__inner"},i.a.createElement("div",{className:"page"},i.a.createElement("h1",{className:"page__title"},'All Posts tagged as "',t,'"'),i.a.createElement("div",{className:"page__body"},e))))},t}(i.a.Component);a.d(t,"pageQuery",function(){return _});var d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata.title,t=this.props.pageContext.tag;return i.a.createElement(c.a,null,i.a.createElement("div",null,i.a.createElement(o.a,{title:'All Posts tagged as "'+t+'" - '+e}),i.a.createElement(m.a,this.props),i.a.createElement(u,this.props)))},t}(i.a.Component),_=(t.default=d,"3898845018")},162:function(e,t,a){},163:function(e,t,a){},164:function(e,t,a){"use strict";var n=a(7),r=a.n(n),s=a(0),i=a.n(s),l=a(170),o=a.n(l),c=a(36),m=(a(162),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data,t=i.a.createElement("ul",{className:"menu__list"},e.map(function(e){return i.a.createElement("li",{className:"menu__list-item",key:e.path},i.a.createElement(c.Link,{to:e.path,className:"menu__list-item-link",activeClassName:"menu__list-item-link menu__list-item-link--active"},e.label))}));return i.a.createElement("nav",{className:"menu"},t)},t}(i.a.Component)),p=a(167),u=(a(168),a(163),function(e){return i.a.createElement("span",{className:"emoji",role:"img","aria-label":e.label?e.label:"","aria-hidden":e.label?"false":"true"},e.symbol)}),d=a(169),_=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.location,t=this.props.data.site.siteMetadata,a=t.author,n=t.subtitle,r=t.copyright,s=t.menu,l="/"===o()(e,"pathname","/");return i.a.createElement("div",{className:"sidebar"},i.a.createElement("div",{className:"sidebar__inner"},i.a.createElement("div",{className:"sidebar__author"},i.a.createElement(d.a,{author:a,subtitle:n,isHomePage:l})),i.a.createElement("div",null,i.a.createElement(m,{data:s}),i.a.createElement(p.a,{data:a}),i.a.createElement("p",{className:"sidebar__copyright",style:{marginTop:0}},"This Blog is built with React.js ",i.a.createElement(u,{symbol:"⚛️"})),i.a.createElement("p",{className:"sidebar__copyright"},r))))},t}(i.a.Component);t.a=_},172:function(e,t,a){"use strict";var n=a(7),r=a.n(n),s=a(0),i=a.n(s),l=a(36),o=a(177),c=a.n(o),m=(a(173),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.node.frontmatter,t=e.title,a=e.date,n=e.category,r=e.description,s=this.props.data.node.fields,o=s.slug,m=s.categorySlug;return i.a.createElement("div",{className:"post"},i.a.createElement("div",{className:"post__meta"},i.a.createElement("time",{className:"post__meta-time",dateTime:c()(a).format("MMMM D, YYYY")},c()(a).format("MMMM YYYY")),i.a.createElement("span",{className:"post__meta-divider"}),i.a.createElement("span",{className:"post__meta-category",key:m},i.a.createElement(l.Link,{to:m,className:"post__meta-category-link"},n))),i.a.createElement("h2",{className:"post__title"},i.a.createElement(l.Link,{className:"post__title-link",to:o},t)),i.a.createElement("p",{className:"post__description"},r),i.a.createElement(l.Link,{className:"post__readmore",to:o},"Read"))},t}(i.a.Component));t.a=m},173:function(e,t,a){}}]);
//# sourceMappingURL=component---src-templates-tag-template-jsx-7c0fb103c882c89f9347.js.map