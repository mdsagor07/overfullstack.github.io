(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"0IOL":function(e,t,a){},BlC1:function(e,t,a){},EYWl:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("qhky"),l=a("Wbzz"),o=function(e){var t=e.meta,a=e.cover,n=e.title,o=(e.caption,e.description),c=e.slug;return r.a.createElement(l.StaticQuery,{query:"3571261002",render:function(e){var l=e.site.siteMetadata,s=o||l.description,m=a?l.siteUrl+"/"+a:null,u=""+l.siteUrl+c;return r.a.createElement(i.a,Object.assign({htmlAttributes:{lang:"en"}},n?{titleTemplate:"%s | "+l.author.name+" | "+l.blogTitle,title:n}:{title:l.author.name+" | "+l.blogTitle},{meta:[{name:"description",content:s},{property:"og:url",content:u},{property:"og:title",content:n||l.title},{property:"og:description",content:s},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.social.twitter},{name:"twitter:title",content:n||l.title},{name:"twitter:description",content:s}].concat(m?[{property:"og:image",content:m},{name:"twitter:image",content:m}]:[]).concat(t)}))}})};o.defaultProps={meta:[],slug:""},t.a=o},IlJI:function(e,t,a){},kfNp:function(e,t,a){"use strict";var n=a("9Hrx"),r=a("q1tI"),i=a.n(r),l=a("Wbzz"),o=(a("IlJI"),function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=this.props.data,t=i.a.createElement("ul",{className:"menu__list"},e.map((function(e){return i.a.createElement("li",{className:"menu__list-item",key:e.path},i.a.createElement(l.Link,{to:e.path,className:"menu__list-item-link",activeClassName:"menu__list-item-link menu__list-item-link--active",style:{boxShadow:"none",textDecoration:"none",color:"var(--textLink)"}},e.label))})));return i.a.createElement("nav",{className:"menu"},t)},t}(i.a.Component)),c=a("Xa7E"),s=(a("0IOL"),function(e){var t=e.label,a=e.symbol;return i.a.createElement("span",{className:"emoji",role:"img","aria-label":t||"","aria-hidden":t?"false":"true"},a)}),m=a("bSql"),u=a("dbrF"),p=a("Up5y"),d=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=this.props.location,t=this.props.data.site.siteMetadata,a=t.author,n=t.subtitle,r=t.copyright,l=t.declaration,d=t.menu;return i.a.createElement("div",{className:"sidebar"},i.a.createElement("div",{className:"sidebar__inner"},i.a.createElement(m.a,{className:"sidebar__author",author:a,subtitle:n,path:Object(u.b)(e)}),i.a.createElement("div",{className:"sidebar__inner-middle"},i.a.createElement(o,{data:d}),i.a.createElement(c.a,{data:a}),i.a.createElement(p.a,null)),i.a.createElement("div",null,i.a.createElement("p",{className:"sidebar__copyright",style:{marginTop:"0"}},l," ",i.a.createElement(s,{symbol:"⚛️"})),i.a.createElement("p",{className:"sidebar__copyright"},r))))},t}(i.a.Component);t.a=d},lbIo:function(e,t,a){"use strict";a.r(t);var n=a("9Hrx"),r=a("q1tI"),i=a.n(r),l=a("qhky"),o=a("ntAx"),c=a("kfNp"),s=(a("BlC1"),function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark;return i.a.createElement("div",null,i.a.createElement(c.a,this.props),i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"content__inner"},i.a.createElement("div",{className:"page"},i.a.createElement("h1",{className:"page__title"},e.frontmatter.title),i.a.createElement("div",{className:"page__body",dangerouslySetInnerHTML:{__html:e.html}})))))},t}(i.a.Component)),m=a("EYWl"),u=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata,t=e.subtitle,a=e.author,n=this.props.data.markdownRemark,r=n.frontmatter,c=r.title,u=r.description,p=r.cover,d=null!==u?u:t,h=""+c;return i.a.createElement("div",{style:{color:"var(--textNormal)",background:"var(--bg)",transition:"color 0.2s ease-out, background 0.2s ease-out",minHeight:"100vh"}},i.a.createElement(o.a,null,i.a.createElement(m.a,{title:h,description:d,cover:p?p.childImageSharp.original.src:"",slug:n.fields.slug}),i.a.createElement("div",null,i.a.createElement(l.a,null,i.a.createElement("title",null,c+" | "+a.name),i.a.createElement("meta",{name:"description",content:d})),i.a.createElement(s,this.props))))},t}(i.a.Component);t.default=u}}]);
//# sourceMappingURL=component---src-templates-page-template-jsx-24e25983effc79bda5a8.js.map