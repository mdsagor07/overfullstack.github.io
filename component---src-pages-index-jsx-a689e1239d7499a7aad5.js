(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{172:function(t,e,a){"use strict";a.r(e),a.d(e,"pageQuery",function(){return g});var n=a(7),r=a.n(n),o=a(0),i=a.n(o),s=a(179),l=a.n(s),c=a(180),m=a(184),p=a(181),u=a(198),d=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=[],e=this.props.data.site.siteMetadata,a=e.title,n=e.subtitle,r=e.caption,o=e.logo;return this.props.data.allMarkdownRemark.edges.forEach(function(e){t.push(i.a.createElement(m.a,{data:e,key:e.node.fields.slug}))}),i.a.createElement("div",{style:{color:"var(--textNormal)",background:"var(--bg)",transition:"color 0.2s ease-out, background 0.2s ease-out",minHeight:"100vh"}},i.a.createElement(c.a,null,i.a.createElement(u.a,{image:o,description:n,title:a,caption:r}),i.a.createElement("div",null,i.a.createElement(l.a,null,i.a.createElement("title",null,a),i.a.createElement("meta",{name:"description",content:n})),i.a.createElement(p.a,this.props),i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"content__inner"},t)))))},e}(i.a.Component);e.default=d;var g="3161280044"},184:function(t,e,a){"use strict";var n=a(7),r=a.n(n),o=a(0),i=a.n(o),s=a(55),l=a(188),c=a.n(l),m=(a(155),a(182)),p=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.data.node.frontmatter,e=t.title,a=t.date,n=t.category,r=t.description,o=this.props.data.node.fields,l=o.slug,p=o.categorySlug,u=this.props.data.node.timeToRead;return i.a.createElement("div",{className:"post"},i.a.createElement("div",{className:"post__meta"},i.a.createElement("time",{className:"post__meta-time",dateTime:c()(a).format("MMMM D, YYYY"),style:{boxShadow:"none",textDecoration:"none",color:"var(--textNormal)"}},c()(a).format("MMMM YYYY")),i.a.createElement("span",{className:"post__meta-divider"}),i.a.createElement("span",{className:"post__meta-category",key:p},i.a.createElement(s.Link,{to:p,className:"post__meta-category-link"},n))),i.a.createElement("h2",{className:"post__title"},i.a.createElement(s.Link,{className:"post__title-link",to:l,style:{boxShadow:"none",textDecoration:"none",color:"var(--textLink)"}},e)),i.a.createElement("p",{className:"post__description"},r),i.a.createElement("div",null,""+Object(m.a)(u)))},e}(i.a.Component);e.a=p},198:function(t,e,a){"use strict";a(25);var n=a(199),r=a(0),o=a.n(r),i=a(179),s=a.n(i),l=a(1),c=a.n(l),m=a(55),p=function(t){var e=t.meta,a=t.image,r=t.title,i=t.caption,l=t.description,c=t.slug;return o.a.createElement(m.StaticQuery,{query:"1080855571",render:function(t){var n=t.site.siteMetadata,m=l||n.subtitle,p=a?n.siteUrl+"/"+a:null,u=""+n.siteUrl+c;return o.a.createElement(s.a,Object.assign({htmlAttributes:{lang:"en"}},i?{titleTemplate:i+" - %s",title:n.title}:{title:"A blog by Gopal S Akshintala - "+n.title},{meta:[{name:"description",content:m},{property:"og:url",content:u},{property:"og:title",content:r||n.title},{property:"og:description",content:m},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:n.author.aboutme},{name:"twitter:title",content:r||n.title},{name:"twitter:description",content:m}].concat(p?[{property:"og:image",content:p},{name:"twitter:image",content:p}]:[]).concat(e)}))},data:n})};p.defaultProps={meta:[],slug:""},p.propTypes={description:c.a.string.isRequired,image:c.a.string.isRequired,meta:c.a.array,slug:c.a.string,title:c.a.string.isRequired},e.a=p},199:function(t){t.exports={data:{site:{siteMetadata:{title:"It's All Over full-stack",subtitle:"So excited about this Craft that, I can't keep myself from blogging about it.",caption:"A blog by Gopal S Akshintala",siteUrl:"https://overfullstack.github.io",author:{aboutme:"http://bit.ly/agsabtme"}}}}}}}]);
//# sourceMappingURL=component---src-pages-index-jsx-a689e1239d7499a7aad5.js.map