(window.webpackJsonp=window.webpackJsonp||[]).push([[15,8],{147:function(e,t,a){"use strict";a.r(t);a(58);var n=a(0),l=a(182),r=a(526),u=a(528),c=a(314),o=a(530),m=a(534),i=a(220),s=a(186),g=a(529),p=function(e){return n.createElement(o.a,null,n.createElement(o.a.Content,null,n.createElement(o.a.Header,null,"Tags")),n.createElement(o.a.Content,null,n.createElement(g.a,null,e.tags.map(function(t){var a=t.fieldValue===e.tag,l=a?"/blog":"/blog/tags/"+t.fieldValue+"/";return n.createElement(g.a.Item,{as:"span",key:t.fieldValue},n.createElement(g.a.Icon,{name:"tag",color:a?"blue":null}),n.createElement(g.a.Content,{style:a?{fontWeight:"700"}:null},n.createElement(e.Link,{to:l},t.fieldValue," (",t.totalCount,")")))}))))},E=(a(244),a(245),a(85),a(202),a(532)),d=a(246),f=function(e){if(1===e.pageCount)return null;var t=e.pathname.startsWith("/blog/page/")?e.pathname.split("/")[3]:"1";return n.createElement(E.a,{pagination:!0},Object(d.times)(e.pageCount,function(a){var l=(a+1).toString(),r=e.pageCount<10?5:3,u=+l-r<+t&&+l+r>+t,c=+l===e.pageCount;return u||1==+l||c?n.createElement(E.a.Item,{key:l,style:{cursor:"pointer"},as:e.Link,to:"/blog/page/"+l+"/",name:l,active:t===l}):+l==e.pageCount-1||2==+l?n.createElement(E.a.Item,{key:l,disabled:!0},"..."):null}))},C=a(177);a.d(t,"pageQuery",function(){return v});t.default=Object(C.b)(function(e){var t=e.data.tags.group,a=e.data.posts.edges,g=e.location.pathname,E=Math.ceil(e.data.posts.totalCount/10),d=n.createElement(r.a,null,a.map(function(e){var t=e.node,a=t.frontmatter,r=t.timeToRead,m=t.fields.slug,i=t.excerpt,s=n.createElement(u.a.Group,null,n.createElement(u.a,null,n.createElement(u.a.Content,null,n.createElement(u.a.Author,null,a.tags&&a.tags.map(function(e){return n.createElement(c.a,{key:e},n.createElement(l.Link,{to:"/blog/tags/"+e+"/"},e))})),n.createElement(u.a.Metadata,{style:{margin:0}},r," min read")))),g=n.createElement(o.a.Description,null,i,n.createElement("br",null),n.createElement(l.Link,{to:m},"Read more…"));return n.createElement(o.a,{key:m,fluid:!0,header:a.title,extra:s,description:g})}));return n.createElement(r.a,null,n.createElement(s.a,null),n.createElement(m.a,{vertical:!0},n.createElement(i.a,{padded:!0,style:{justifyContent:"space-around"}},n.createElement("div",{style:{maxWidth:600}},d,n.createElement(m.a,{vertical:!0,textAlign:"center"},n.createElement(f,{Link:l.Link,pathname:g,pageCount:E}))),n.createElement("div",null,n.createElement(p,{Link:l.Link,tags:t,tag:e.pageContext.tag})))))});var v="690682732"},150:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return l});var n=a(147);t.default=n.default;var l="1891621323"},186:function(e,t,a){"use strict";var n=a(0),l=a(534),r=a(203),u=a(250);t.a=function(){return n.createElement(l.a,{vertical:!0},n.createElement(r.a,{as:"h2"},n.createElement(u.a,{name:"newspaper"}),n.createElement(r.a.Content,null,"Common Cent$ Blog",n.createElement(r.a.Subheader,null,"Common sense ain't common. - Will Roger"))))}}}]);
//# sourceMappingURL=component---src-templates-tags-page-tsx-9719cf53d598cef8b3f4.js.map