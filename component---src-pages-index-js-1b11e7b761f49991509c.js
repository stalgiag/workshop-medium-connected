(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"+5i3":function(e,t,a){},"9eSz":function(e,t,a){"use strict";var r=a("5NKs");t.__esModule=!0,t.default=void 0;var n,i=r(a("v06X")),s=r(a("XEEL")),o=r(a("uDP2")),l=r(a("j8BX")),d=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},h=function(e){var t=e.fluid,a=e.fixed,r=p(t||a||[]);return r&&r.src},p=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},m=Object.create({}),g=function(e){var t=u(e),a=h(t);return m[a]||!1},v="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,b=y&&window.IntersectionObserver,E=new WeakMap;function S(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:n,srcSet:r,sizes:i}),d.default.createElement("source",{media:n,srcSet:a,sizes:i}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function R(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function L(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function k(e,t){var a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?r:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var A=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(E.has(e.target)){var t=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),E.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return a&&(a.observe(e),E.set(e,t)),function(){a.unobserve(e),E.delete(e)}},C=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?k(e,!0):"")+k(e)})).join("")+"<img "+d+s+o+a+r+t+i+n+l+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},M=d.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,n=e.generateSources,i=e.spreadProps,s=e.ariaHidden,o=d.default.createElement(W,(0,l.default)({ref:t,src:a},i,{ariaHidden:s}));return r.length>1?d.default.createElement("picture",null,n(r),o):o})),W=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,h=e.ariaHidden,p=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,l.default)({"aria-hidden":h,sizes:a,srcSet:r,src:n},p,{onLoad:s,onError:c,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));W.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var I=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=y&&g(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!v&&b&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||y&&(v||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.placeholderRef=t.placeholderRef||d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,i.default)(a)),a.handleRef=a.handleRef.bind((0,i.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=A(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),(a=h(t))&&(m[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,h=e.placeholderClassName,m=e.fluid,g=e.fixed,v=e.backgroundColor,y=e.durationFadeIn,b=e.Tag,E=e.itemProp,w=e.loading,k=e.draggable,A=!1===this.state.fadeIn||this.state.imgLoaded,I=!0===this.state.fadeIn&&!this.state.imgCached,O=(0,l.default)({opacity:A?1:0,transition:I?"opacity "+y+"ms":"none"},o),U="boolean"==typeof v?"lightgray":v,x={transitionDelay:y+"ms"},T=(0,l.default)({opacity:this.state.imgLoaded?0:1},I&&x,o,f),z={title:t,alt:this.state.isVisible?"":a,style:T,className:h,itemProp:E};if(m){var _=m,V=p(m);return d.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden",maxWidth:V.maxWidth?V.maxWidth+"px":null,maxHeight:V.maxHeight?V.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(V.srcSet)},d.default.createElement(b,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/V.aspectRatio+"%"}}),U&&d.default.createElement(b,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:U,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},I&&x)}),V.base64&&d.default.createElement(M,{ariaHidden:!0,ref:this.placeholderRef,src:V.base64,spreadProps:z,imageVariants:_,generateSources:L}),V.tracedSVG&&d.default.createElement(M,{ariaHidden:!0,ref:this.placeholderRef,src:V.tracedSVG,spreadProps:z,imageVariants:_,generateSources:R}),this.state.isVisible&&d.default.createElement("picture",null,S(_),d.default.createElement(W,{alt:a,title:t,sizes:V.sizes,src:V.src,crossOrigin:this.props.crossOrigin,srcSet:V.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:w,draggable:k})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:C((0,l.default)({alt:a,title:t,loading:w},V,{imageVariants:_}))}}))}if(g){var j=g,q=p(g),H=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:q.width,height:q.height},i);return"inherit"===i.display&&delete H.display,d.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:H,ref:this.handleRef,key:"fixed-"+JSON.stringify(q.srcSet)},U&&d.default.createElement(b,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:U,width:q.width,opacity:this.state.imgLoaded?0:1,height:q.height},I&&x)}),q.base64&&d.default.createElement(M,{ariaHidden:!0,ref:this.placeholderRef,src:q.base64,spreadProps:z,imageVariants:j,generateSources:L}),q.tracedSVG&&d.default.createElement(M,{ariaHidden:!0,ref:this.placeholderRef,src:q.tracedSVG,spreadProps:z,imageVariants:j,generateSources:R}),this.state.isVisible&&d.default.createElement("picture",null,S(j),d.default.createElement(W,{alt:a,title:t,width:q.width,height:q.height,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:w,draggable:k})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:C((0,l.default)({alt:a,title:t,loading:w},q,{imageVariants:j}))}}))}return null},t}(d.default.Component);I.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var O=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),U=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});function x(e){return function(t,a,r){var n;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");c.default.checkPropTypes(((n={})[a]=e,n),t,"prop",r)}}I.propTypes={resolutions:O,sizes:U,fixed:x(c.default.oneOfType([O,c.default.arrayOf(O)])),fluid:x(c.default.oneOfType([U,c.default.arrayOf(U)])),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var T=I;t.default=T},DKhq:function(e,t,a){var r,n,i,s=a("lwsE"),o=a("W8MJ");n=[],void 0===(i="function"==typeof(r=function(){"use strict";var e=0;return function(){function t(e,a){s(this,t),this.element=e,this.selector=a.selector,this.speed=e.dataset.speed||.25,this.pausable=e.dataset.pausable,this.reverse=e.dataset.reverse,this.paused=!1,this.parent=e.parentElement,this.parentProps=this.parent.getBoundingClientRect(),this.content=e.children[0],this.innerContent=this.content.innerHTML,this.wrapStyles="",this.offset=0,this._setupWrapper(),this._setupContent(),this._setupEvents(),this.wrapper.appendChild(this.content),this.element.appendChild(this.wrapper)}return o(t,[{key:"_setupWrapper",value:function(){this.wrapper=document.createElement("div"),this.wrapper.classList.add("marquee3k__wrapper"),this.wrapper.style.whiteSpace="nowrap"}},{key:"_setupContent",value:function(){this.content.classList.add("".concat(this.selector,"__copy")),this.content.style.display="inline-block",this.contentWidth=this.content.offsetWidth,this.requiredReps=this.contentWidth>this.parentProps.width?2:Math.ceil((this.parentProps.width-this.contentWidth)/this.contentWidth)+1;for(var e=0;e<this.requiredReps;e++)this._createClone();this.reverse&&(this.offset=-1*this.contentWidth),this.element.classList.add("is-init")}},{key:"_setupEvents",value:function(){var e=this;this.element.addEventListener("mouseenter",(function(){e.pausable&&(e.paused=!0)})),this.element.addEventListener("mouseleave",(function(){e.pausable&&(e.paused=!1)}))}},{key:"_createClone",value:function(){var e=this.content.cloneNode(!0);e.style.display="inline-block",e.classList.add("".concat(this.selector,"__copy")),this.wrapper.appendChild(e)}},{key:"animate",value:function(){if(!this.paused){var e=this.reverse?this.offset<0:this.offset>-1*this.contentWidth,t=this.reverse?-1:1,a=this.reverse?-1*this.contentWidth:0;e?this.offset-=this.speed*t:this.offset=a,this.wrapper.style.whiteSpace="nowrap",this.wrapper.style.transform="translate(".concat(this.offset,"px, 0) translateZ(0)")}}},{key:"_refresh",value:function(){this.contentWidth=this.content.offsetWidth}},{key:"repopulate",value:function(e,t){if(this.contentWidth=this.content.offsetWidth,t)for(var a=Math.ceil(e/this.contentWidth)+1,r=0;r<a;r++)this._createClone()}}],[{key:"refresh",value:function(e){MARQUEES[e]._refresh()}},{key:"pause",value:function(e){MARQUEES[e].paused=!0}},{key:"play",value:function(e){MARQUEES[e].paused=!1}},{key:"toggle",value:function(e){MARQUEES[e].paused=!MARQUEES[e].paused}},{key:"refreshAll",value:function(){for(var e=0;e<MARQUEES.length;e++)MARQUEES[e]._refresh()}},{key:"pauseAll",value:function(){for(var e=0;e<MARQUEES.length;e++)MARQUEES[e].paused=!0}},{key:"playAll",value:function(){for(var e=0;e<MARQUEES.length;e++)MARQUEES[e].paused=!1}},{key:"toggleAll",value:function(){for(var e=0;e<MARQUEES.length;e++)MARQUEES[e].paused=!MARQUEES[e].paused}},{key:"init",value:function(){var a=this,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{selector:"marquee3k"};e&&window.cancelAnimationFrame(e),window.MARQUEES=[];for(var n,i=Array.from(document.querySelectorAll(".".concat(r.selector))),s=window.innerWidth,o=0;o<i.length;o++){var l=i[o],d=new t(l,r);MARQUEES.push(d)}function c(){for(var t=0;t<MARQUEES.length;t++)MARQUEES[t].animate();e=window.requestAnimationFrame(c)}c(),window.addEventListener("resize",(function(){clearTimeout(n),n=setTimeout((function(){for(var e=s<window.innerWidth,t=window.innerWidth-s,r=0;r<MARQUEES.length;r++)MARQUEES[r].repopulate(t,e);s=a.innerWidth}),250)}))}}]),t}()})?r.apply(t,n):r)||(e.exports=i)},RXBc:function(e,t,a){"use strict";a.r(t);var r=a("9Hrx"),n=a("q1tI"),i=a.n(n),s={SYLLABUS:"SYLLABUS",RESOURCES:"RESOURCES"};function o(e){return i.a.createElement("nav",null,i.a.createElement("ul",null,Object.keys(s).map((function(t,a){return i.a.createElement("li",{key:t,id:e.activeTab===t?"active-nav-tab":"",onClick:function(a){return e.onChange(t)}},s[t])}))))}var l=a("Wbzz"),d=a("9eSz"),c=a.n(d);function u(){var e=Object(l.b)("47301455");return i.a.createElement("div",{id:"logo-container"},i.a.createElement(c.a,{className:"logo",fluid:e.file.childImageSharp.fluid,alt:"A photograph of a crypto-mining rig in a plastic crate"}))}var f=a("DKhq"),h=a.n(f),p=function(e){function t(){return e.apply(this,arguments)||this}Object(r.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){h.a.init(),h.a.refreshAll()},a.render=function(){return i.a.createElement("div",{id:"marquee-container"},i.a.createElement("div",{className:"marquee3k","data-speed":"0.5"},i.a.createElement("h2",null,"TThe most important point in the line is the end of the line. The second most important point is the beginning of it.")))},t}(i.a.Component);function m(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{id:"footer"},i.a.createElement("p",null,"Image: ","test logo by stalgiag"),i.a.createElement("p",null,"scrolling Text: ","Mary Oliver")),i.a.createElement("p",{id:"class-title"},"Workshop: Medium (Connected)"))}a("+5i3");function g(e,t){var a;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(a=function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return v(e,t)}(e))||t&&e&&"number"==typeof e.length){a&&(e=a);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(a=e[Symbol.iterator]()).next.bind(a)}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}function y(e){for(var t,a,r=g(Object(l.b)("1679481484").allMarkdownRemark.nodes);!(a=r()).done;){var n=a.value;n.frontmatter.category===e.category&&(t=n.html)}return i.a.createElement("div",{className:"markdown-content"},i.a.createElement("div",{dangerouslySetInnerHTML:{__html:t}}))}function b(e){return i.a.createElement("div",{className:"iframe-container"},i.a.createElement("div",{className:"iframe-center-container"},i.a.createElement("iframe",{title:"syllabus",className:"doc",id:"syllabus",src:"https://docs.google.com/document/d/e/2PACX-1vQHEJ8CiMGZCdvajy5025bX-xWPY-2wUkGtnGhrBWAomAqJxHe7mCXFGbz6mvoRyWV_kNF9srlTSi6C/pub?embedded=true"})))}function E(e){var t=e.section;return i.a.createElement("div",{id:"body-container"},i.a.createElement("div",{className:"body-center-content"},function(){switch(t){case s.SCHEDULE:case s.RESOURCES:return i.a.createElement(y,{category:t});case s.SYLLABUS:return i.a.createElement(b,null);default:throw new Error("A body section was generated without using one of the relevant globals")}}()))}var S=function(e){function t(t){var a;return(a=e.call(this,t)||this).getLogo=void 0,a.state={activeTab:s.SYLLABUS},a.updateFocus=a.updateFocus.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(a)),a}Object(r.a)(t,e);var a=t.prototype;return a.updateFocus=function(e){this.setState({activeTab:e})},a.render=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("header",null,i.a.createElement(o,{activeTab:this.state.activeTab,onChange:this.updateFocus}),i.a.createElement(u,null)),i.a.createElement(E,{section:this.state.activeTab}),i.a.createElement(p,null),i.a.createElement(m,null))},t}(i.a.Component);t.default=S},W8MJ:function(e,t){function a(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&a(e.prototype,t),r&&a(e,r),e}},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}}}]);
//# sourceMappingURL=component---src-pages-index-js-1b11e7b761f49991509c.js.map