(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{147:function(e,t,a){"use strict";a.r(t);a(58);var n=a(0),l=a(173),r=a(475),o=a(477),c=a(293),u=a(480),m=a(485),i=a(294),s=a(176),E=a(478),g=function(e){return n.createElement(u.a,null,n.createElement(u.a.Content,null,n.createElement(u.a.Header,null,"Tags")),n.createElement(u.a.Content,null,n.createElement(E.a,null,e.tags.map(function(t){var a=t.fieldValue===e.tag,l=a?"/blog":"/blog/tags/"+t.fieldValue+"/";return n.createElement(E.a.Item,{as:"span",key:t.fieldValue},n.createElement(E.a.Icon,{name:"tag",color:a?"blue":null}),n.createElement(E.a.Content,{style:a?{fontWeight:"700"}:null},n.createElement(e.Link,{to:l},t.fieldValue," (",t.totalCount,")")))}))))},p=(a(234),a(235),a(85),a(193),a(482)),d=a(236),f=function(e){if(1===e.pageCount)return null;var t=e.pathname.startsWith("/blog/page/")?e.pathname.split("/")[3]:"1";return n.createElement(p.a,{pagination:!0},Object(d.times)(e.pageCount,function(a){var l=(a+1).toString(),r=e.pageCount<10?5:3,o=+l-r<+t&&+l+r>+t,c=+l===e.pageCount;return o||1==+l||c?n.createElement(p.a.Item,{key:l,style:{cursor:"pointer"},as:e.Link,to:"/blog/page/"+l+"/",name:l,active:t===l}):+l==e.pageCount-1||2==+l?n.createElement(p.a.Item,{key:l,disabled:!0},"..."):null}))},C=a(181);a.d(t,"pageQuery",function(){return k});t.default=Object(C.b)(function(e){var t=e.data.tags.group,a=e.data.posts.edges,E=e.location.pathname,p=Math.ceil(e.data.posts.totalCount/10),d=n.createElement(r.a,null,a.map(function(e){var t=e.node,a=t.frontmatter,r=t.timeToRead,m=t.fields.slug,i=t.excerpt,s=n.createElement(o.a.Group,null,n.createElement(o.a,null,n.createElement(o.a.Content,null,n.createElement(o.a.Author,null,a.tags&&a.tags.map(function(e){return n.createElement(c.a,{key:e},n.createElement(l.Link,{to:"/blog/tags/"+e+"/"},e))})),n.createElement(o.a.Metadata,{style:{margin:0}},r," min read")))),E=n.createElement(u.a.Description,null,i,n.createElement("br",null),n.createElement(l.Link,{to:m},"Read more…"));return n.createElement(u.a,{key:m,fluid:!0,header:a.title,extra:s,description:E})}));return n.createElement(r.a,null,n.createElement(s.a,null),n.createElement(m.a,{vertical:!0},n.createElement(i.a,{padded:!0,style:{justifyContent:"space-around"}},n.createElement("div",{style:{maxWidth:600}},d,n.createElement(m.a,{vertical:!0,textAlign:"center"},n.createElement(f,{Link:l.Link,pathname:E,pageCount:p}))),n.createElement("div",null,n.createElement(g,{Link:l.Link,tags:t,tag:e.pageContext.tag})))))});var k="690682732"},176:function(e,t,a){"use strict";var n=a(0),l=a(485),r=a(483),o=a(239);t.a=function(){return n.createElement(l.a,{vertical:!0},n.createElement(r.a,{as:"h2"},n.createElement(o.a,{name:"newspaper"}),n.createElement(r.a.Content,null,"Common Cent$ Blog",n.createElement(r.a.Subheader,null,"Common sense ain't common. - Will Roger"))))}}}]);
//# sourceMappingURL=component---src-pages-blog-tsx-19262fbda7171a31e78b.js.map