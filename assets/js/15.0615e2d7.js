(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{538:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n(39),n(50),n(9),n(77),n(19),n(22),n(156);var i=n(80);function r(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=Object(i.a)(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,a=function(){};return{s:a,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return l=t.done,t},e:function(t){c=!0,o=t},f:function(){try{l||null==n.return||n.return()}finally{if(c)throw o}}}}},579:function(t,e,n){},640:function(t,e,n){"use strict";n(579)},684:function(t,e,n){"use strict";n.r(e);var i=n(538),r=(n(159),n(38),n(9),n(21),n(112),n(281),n(277),n(278),n(76),n(279),n(533)),a=n(37),o=n.n(a),l={name:"tm-sidebar-tree",props:["value","title","tree","level","filterTags"],data:function(){return{show:null}},mounted:function(){Object(r.find)(this.value,["path",this.$page.path])&&this.$emit("active",this.title)},watch:{$route:function(t,e){Object(r.find)(this.value,["key",t.name])&&this.revealParent(this.title)}},methods:{isTagPresent:function(t){var e,n=!this.filterTags||0==(null===(e=this.filterTags)||void 0===e?void 0:e.length),a=t;if(0==t.directory){var o,l=t.path&&t.path.split("/").filter((function(t){return""!=t}));l=l.reduce((function(t,e){return Object(r.find)((null==t?void 0:t.children)||t,["title",e])}),this.tree),a=Object(r.find)((null===(o=l)||void 0===o?void 0:o.children)||l,["path",t.path])||t}var c,s=Object(i.a)(this.filterTags||[]);try{for(s.s();!(c=s.n()).done;){var d,u,h,f=c.value;if(null===(d=a)||void 0===d||!d.frontmatter||null!==(u=a.frontmatter)&&void 0!==u&&null!==(h=u.tags)&&void 0!==h&&h.includes(f)){n=!0;break}}}catch(t){s.e(t)}finally{s.f()}return n},hide:function(t){var e=this,n=this.isTagPresent(t),i=this.indexFile(t),r=t.frontmatter&&!1===t.frontmatter.order,a=i&&i.frontmatter&&i.frontmatter.parent&&!1===i.frontmatter.parent.order;if(t.directory){var o=t.children||this.directoryChildren(t);0===(o=o.filter((function(t){return e.isTagPresent(t)}))).length&&(a=!0)}return!0===(a||r)||!n},iconCollapsed:function(t){return!(!t.directory||this.iconExpanded(t))||!t.path&&this.show!=t.title&&(t.children||t.directory)},iconExpanded:function(t){return this.show==t.title&&!t.key},iconActive:function(t){return""!==this.$page.path&&(t.path==this.$page.path||t.key==this.$page.key)},outboundLink:function(t){return/^[a-z]+:/i.test(t)},isInternalLink:function(t){return t.path&&!t.directory&&!t.static&&!this.outboundLink(t.path)},isOutboundLink:function(t){return t.path&&this.outboundLink(t.path)||t.static},handleEnter:function(t){this.revealChild(t.title)},componentName:function(t){return this.isInternalLink(t)?"router-link":(this.isOutboundLink(t),"a")},indexFile:function(t){return!!t.children&&Object(r.find)(t.children,(function(t){var e=t.relativePath;return!!e&&(e.toLowerCase().match(/index.md$/i)||e.toLowerCase().match(/readme.md$/i))}))},setHeight:function(t){t.style.setProperty("--max-height",t.scrollHeight+"px")},titleFormatted:function(t){var e=new o.a({html:!0,linkify:!0});return"<div>".concat(e.renderInline(t),"</div>")},titleText:function(t){var e=this.indexFile(t);return t.frontmatter?t.frontmatter.title||t.title:e?e.frontmatter&&e.frontmatter.parent&&e.frontmatter.parent.title?e.frontmatter.parent.title:e.title.match(/readme\.md/i)||e.title.match(/index\.md/i)?t.title:e.title:t.title},revealChild:function(t){this.show=this.show==t?null:t},revealParent:function(t){this.show=t,this.$emit("active",this.title)},directoryChildren:function(t){if(!0===t.directory){var e,n=t.path&&t.path.split("/").filter((function(t){return""!=t}));return(null===(e=n=n.reduce((function(t,e){return Object(r.find)(t.children||t,["title",e])}),this.tree))||void 0===e?void 0:e.children)||[]}return[]},onClick:function(t){this.outboundLink(t.path)||this.revealChild(t.title),this.isInternalLink(t)&&"undefined"!=typeof gtag&&gtag("event",t.path,{event_category:"navigation",event_label:t.path})}}},c=(n(640),n(1)),s=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.value,(function(e){return n("div",[t.hide(e)?t._e():n(t.componentName(e),{tag:"component",staticClass:"item",class:[t.level>0&&"item__child",{item__dir:!e.path},e.directory&&"item__directory"],style:{"--vline":t.level<1?"hidden":"visible","--vline-color":!t.iconActive(e)&&!t.iconExpanded(e)||t.iconExpanded(e)?"rgba(0,0,0,0.1)":"var(--color-primary)"},attrs:{to:e.path,target:t.outboundLink(e.path)&&"_blank",rel:t.outboundLink(e.path)&&"noreferrer noopener",href:t.outboundLink(e.path)||e.static?e.path:"#",tag:"a",role:!e.path&&"button"},on:{keydown:function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"enter",13,n.key,"Enter")?null:t.handleEnter(e)},click:function(n){return t.onClick(e)}},nativeOn:{click:function(n){return t.onClick(e)}}},[t.level<1&&e.directory?n("icon-arrow",{staticClass:"item__icon",class:t.iconCollapsed(e)?"item__icon__collapsed":"item__icon__expanded",attrs:{type:"bottom",fill:t.iconCollapsed(e)?"var(--semi-transparent-color-3)":"var(--color-text-strong)"}}):t._e(),n("div",{class:{item__selected:t.iconActive(e)||t.iconExpanded(e),item__selected__dir:t.iconCollapsed(e),item__selected__alt:t.iconExpanded(e),"tm-link tm-link-external item__external":e.external,item__divider:e.frontmatter&&e.frontmatter.divider||e.divider},style:{"padding-left":32*t.level+"px","margin-right":t.level>0?"32px":"0px"},domProps:{innerHTML:t._s(t.titleFormatted(t.titleText(e)))}}),t.level>0&&e.frontmatter&&e.frontmatter.tags&&t.$themeConfig.tags?n("div",{staticClass:"item__child__tags"},t._l(e.frontmatter.tags,(function(e){return n("div",{staticClass:"item__child__tags__item"},[e&&t.$themeConfig.tags[e]?n("div",{staticClass:"item__child__tags__item__dot",style:{"--tag-background-color":t.$themeConfig.tags[e].color},attrs:{"tag-content":t.$themeConfig.tags[e].label}}):t._e()])})),0):t._e()],1),(e.children||t.directoryChildren(e),n("div",[n("transition",{attrs:{name:"reveal"},on:{enter:t.setHeight,leave:t.setHeight}},[t.hide(e)?t._e():n("tm-sidebar-tree",{directives:[{name:"show",rawName:"v-show",value:e.title==t.show,expression:"item.title == show"}],attrs:{level:t.level+1,value:e.children||t.directoryChildren(e)||[],title:e.title,filterTags:t.filterTags},on:{active:function(e){return t.revealParent(e)}}})],1)],1))],1)})),0)}),[],!1,null,"5ac25306",null);e.default=s.exports}}]);