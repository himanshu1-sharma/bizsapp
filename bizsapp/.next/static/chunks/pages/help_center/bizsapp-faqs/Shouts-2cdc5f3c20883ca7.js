(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4843],{7814:function(e,n,t){"use strict";t.d(n,{G:function(){return b}});var a=t(8947),i=t(5697),s=t.n(i),r=t(7294);function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){d(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function d(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function m(e){return function(e){if(Array.isArray(e))return h(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"===typeof e)return h(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return h(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}function f(e){return n=e,(n-=0)===n?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,n){return n?n.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var n}var p=["style"];function _(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,n){var t,a=n.indexOf(":"),i=f(n.slice(0,a)),s=n.slice(a+1).trim();return i.startsWith("webkit")?e[(t=i,t.charAt(0).toUpperCase()+t.slice(1))]=s:e[i]=s,e}),{})}var x=!1;try{x=!0}catch(N){}function j(e){return e&&"object"===l(e)&&e.prefix&&e.iconName&&e.icon?e:a.Qc.icon?a.Qc.icon(e):null===e?null:e&&"object"===l(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"===typeof e?{prefix:"fas",iconName:e}:void 0}function g(e,n){return Array.isArray(n)&&n.length>0||!Array.isArray(n)&&n?d({},e,n):{}}var v=["forwardedRef"];function b(e){var n=e.forwardedRef,t=u(e,v),i=t.icon,s=t.mask,r=t.symbol,o=t.className,l=t.title,h=t.titleId,f=t.maskId,p=j(i),_=g("classes",[].concat(m(function(e){var n,t=e.beat,a=e.fade,i=e.beatFade,s=e.bounce,r=e.shake,o=e.flash,c=e.spin,l=e.spinPulse,u=e.spinReverse,m=e.pulse,h=e.fixedWidth,f=e.inverse,p=e.border,_=e.listItem,x=e.flip,j=e.size,g=e.rotation,v=e.pull,b=(d(n={"fa-beat":t,"fa-fade":a,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":r,"fa-flash":o,"fa-spin":c,"fa-spin-reverse":u,"fa-spin-pulse":l,"fa-pulse":m,"fa-fw":h,"fa-inverse":f,"fa-border":p,"fa-li":_,"fa-flip":!0===x,"fa-flip-horizontal":"horizontal"===x||"both"===x,"fa-flip-vertical":"vertical"===x||"both"===x},"fa-".concat(j),"undefined"!==typeof j&&null!==j),d(n,"fa-rotate-".concat(g),"undefined"!==typeof g&&null!==g&&0!==g),d(n,"fa-pull-".concat(v),"undefined"!==typeof v&&null!==v),d(n,"fa-swap-opacity",e.swapOpacity),n);return Object.keys(b).map((function(e){return b[e]?e:null})).filter((function(e){return e}))}(t)),m(o.split(" ")))),N=g("transform","string"===typeof t.transform?a.Qc.transform(t.transform):t.transform),O=g("mask",j(s)),w=(0,a.qv)(p,c(c(c(c({},_),N),O),{},{symbol:r,title:l,titleId:h,maskId:f}));if(!w)return function(){var e;!x&&console&&"function"===typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",p),null;var S=w.abstract,k={ref:n};return Object.keys(t).forEach((function(e){b.defaultProps.hasOwnProperty(e)||(k[e]=t[e])})),y(S[0],k)}b.displayName="FontAwesomeIcon",b.propTypes={beat:s().bool,border:s().bool,beatFade:s().bool,bounce:s().bool,className:s().string,fade:s().bool,flash:s().bool,mask:s().oneOfType([s().object,s().array,s().string]),maskId:s().string,fixedWidth:s().bool,inverse:s().bool,flip:s().oneOf([!0,!1,"horizontal","vertical","both"]),icon:s().oneOfType([s().object,s().array,s().string]),listItem:s().bool,pull:s().oneOf(["right","left"]),pulse:s().bool,rotation:s().oneOf([0,90,180,270]),shake:s().bool,size:s().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:s().bool,spinPulse:s().bool,spinReverse:s().bool,symbol:s().oneOfType([s().bool,s().string]),title:s().string,titleId:s().string,transform:s().oneOfType([s().string,s().object]),swapOpacity:s().bool},b.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var y=function e(n,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"===typeof t)return t;var i=(t.children||[]).map((function(t){return e(n,t)})),s=Object.keys(t.attributes||{}).reduce((function(e,n){var a=t.attributes[n];switch(n){case"class":e.attrs.className=a,delete t.attributes.class;break;case"style":e.attrs.style=_(a);break;default:0===n.indexOf("aria-")||0===n.indexOf("data-")?e.attrs[n.toLowerCase()]=a:e.attrs[f(n)]=a}return e}),{attrs:{}}),r=a.style,o=void 0===r?{}:r,l=u(a,p);return s.attrs.style=c(c({},s.attrs.style),o),n.apply(void 0,[t.tag,c(c({},s.attrs),l)].concat(m(i)))}.bind(null,r.createElement)},8478:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/help_center/bizsapp-faqs/Shouts",function(){return t(2908)}])},8081:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return u}});var a=t(5893),i=t(2426),s=t.n(i),r=t(1664),o=t.n(r),c=t(1163),l=t(7294),d=[{iconName:"account",pageName:"Account",name:"Account"},{iconName:"profile",pageName:"Profile",name:"Profile"},{iconName:"bmc",pageName:"BMC",name:"Business Management Card"},{iconName:"connections",pageName:"Connections",name:"Connections"},{iconName:"Shouts",pageName:"Shouts",name:"Shouts"},{iconName:"hschat",pageName:"BizsChat",name:"BizsChat"},{iconName:"List",pageName:"List",name:"List"},{iconName:"Connection-request",pageName:"Request",name:"Request"},{iconName:"oiq",pageName:"Other_Important_Questions",name:"Other Important Questions"}];function u(){var e=(0,l.useState)(d),n=e[0],t=(e[1],(0,c.useRouter)().asPath);return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:s().faqs_list,children:(0,a.jsx)("ul",{children:n.map((function(e){var n=e.iconName,i=e.pageName,r=e.name;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(o(),{href:"/help_center/bizsapp-faqs/".concat(i),children:(0,a.jsxs)("li",{className:t==="/help_center/bizsapp-faqs/".concat(i)?"".concat(s().nav_item," ").concat(s().active):"nav_item",children:[(0,a.jsx)("img",{src:"/img/icons/".concat(n,".png"),alt:"chat",className:"img-fluid"})," ",r]})})})}))})})})}},7897:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return u}});var a=t(5893),i=t(1163),s=t(1664),r=t.n(s),o=t(2426),c=t.n(o),l=[{iconName:"terms",name:"Terms",pageName:"Terms"},{iconName:"lock",name:"Privacy & Policy",pageName:"Privacy_Policy"},{iconName:"contact",name:"Contact",pageName:"Contact"}],d=t(7294);function u(){var e=(0,d.useState)(l),n=e[0],t=(e[1],(0,i.useRouter)().asPath);return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("ul",{children:n.map((function(e){var n=e.iconName,i=e.name,s=e.pageName;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(r(),{href:"/help_center/".concat(s),children:(0,a.jsxs)("li",{className:t==="/help_center/".concat(s)?"".concat(c().nav_item," ").concat(c().active):"nav_item",children:[(0,a.jsx)("img",{src:"/img/icons/".concat(n,".png"),alt:"chat",className:"img-fluid"})," ",i]})})})}))})})}},9126:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return l}});var a=t(5893),i=t(5794),s=t(8081),r=t(7897),o=t(2426),c=t.n(o);function l(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:c().mobile_panel,children:(0,a.jsx)("div",{className:"mobile_accordion",children:(0,a.jsx)(i.Z,{children:(0,a.jsxs)(i.Z.Item,{eventKey:"0",children:[(0,a.jsx)(i.Z.Header,{children:"How can we help you?"}),(0,a.jsxs)(i.Z.Body,{children:[(0,a.jsx)("div",{className:"accordion accordion-flush",id:"accordionFlushExample",children:(0,a.jsxs)("div",{className:"accordion-item",children:[(0,a.jsx)("h2",{className:"accordion-header",id:"flush-headingOne",children:(0,a.jsxs)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#flush-faqs","aria-expanded":"false","aria-controls":"flush-faqs",children:[(0,a.jsx)("img",{src:"/img/icons/chat.png",alt:"chat",className:"img-fluid"}),"  BizsApp FAQ's"]})}),(0,a.jsx)("div",{id:"flush-faqs",className:"accordion-collapse collapse","aria-labelledby":"flush-headingOne","data-bs-parent":"#accordionFlushExample",children:(0,a.jsx)("div",{className:"accordion-body",children:(0,a.jsx)(s.default,{})})})]})}),(0,a.jsx)(r.default,{})]})]})})})})})}},2908:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return f}});var a=t(5893),i=t(2426),s=t.n(i),r=(t(7814),t(1664),t(4487)),o=t(7172),c=t(8081),l=t(7662),d=t(7897),u=t(9126),m=t(9008),h=t.n(m);function f(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(h(),{children:[(0,a.jsx)("meta",{name:"description",content:"Generated by Bizsapp"}),(0,a.jsx)("link",{rel:"icon",href:"/img/favicon.svg"}),(0,a.jsx)("title",{children:"BizsApp | The Business App"})]}),(0,a.jsx)(r.default,{}),(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"row",children:[(0,a.jsxs)("div",{className:"col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12",children:[(0,a.jsx)("div",{className:s().left_panel,children:(0,a.jsxs)("div",{className:"left_accordion",children:[(0,a.jsx)("div",{className:"accordion",id:"accordionExample",children:(0,a.jsxs)("div",{className:"accordion-item",children:[(0,a.jsx)("h2",{className:"accordion-header",id:"headingFaqsOne",children:(0,a.jsxs)("button",{className:"accordion-button",type:"button","data-bs-toggle":"collapse","data-bs-target":"#faqs","aria-expanded":"true","aria-controls":"faqs",children:[(0,a.jsx)("img",{src:"/img/icons/chat.png",alt:"chat",className:"img-fluid"}),"  BizsApp FAQ's"]})}),(0,a.jsx)("div",{id:"faqs",className:"accordion-collapse collapse show","aria-labelledby":"headingFaqsOne","data-bs-parent":"#accordionExample",children:(0,a.jsx)("div",{className:"accordion-body",children:(0,a.jsx)(c.default,{})})})]})}),(0,a.jsx)(d.default,{})]})}),(0,a.jsx)(u.default,{})]}),(0,a.jsx)("div",{className:"col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12",children:(0,a.jsxs)("div",{className:s().page_content,children:[(0,a.jsx)("div",{className:s().page_name,children:(0,a.jsx)("h2",{children:"Shouts"})}),(0,a.jsx)(l.default,{})]})})]})}),(0,a.jsx)(o.default,{})]})}},7662:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return o}});var a=t(5893),i=t(5794),s=t(2426),r=t.n(s);function o(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:r().content,children:(0,a.jsx)("div",{className:"q_and_a",children:(0,a.jsxs)(i.Z,{defaultActiveKey:"0",flush:!0,children:[(0,a.jsxs)(i.Z.Item,{eventKey:"0",children:[(0,a.jsx)(i.Z.Header,{children:"How Can I Upload Shouts? "}),(0,a.jsxs)(i.Z.Body,{children:[(0,a.jsx)("p",{children:"Uploading Shouts On BizsApp Is a Very Easy Process."}),(0,a.jsx)("p",{children:"Step 1: Grant BizsApp access to your camera and gallery."}),(0,a.jsx)("p",{children:"Step 2: Click the Upload Button."}),(0,a.jsx)("p",{children:"Step 3: Act quickly! Your Shouts Are Visible In The Shouts Section"})]})]}),(0,a.jsxs)(i.Z.Item,{eventKey:"1",children:[(0,a.jsx)(i.Z.Header,{children:"Is Shout Beneficial for Business?"}),(0,a.jsx)(i.Z.Body,{children:(0,a.jsx)("p",{children:"Shouts Will Assist You in Promoting Your Business and Increasing Engagement in Your Business."})})]}),(0,a.jsxs)(i.Z.Item,{eventKey:"2",children:[(0,a.jsx)(i.Z.Header,{children:"What Is the Time Duration of Shouts? "}),(0,a.jsx)(i.Z.Body,{children:(0,a.jsx)("p",{children:"Time Duration Of Shouts Is Up to 30 Second to 60 Second "})})]}),(0,a.jsxs)(i.Z.Item,{eventKey:"3",children:[(0,a.jsx)(i.Z.Header,{children:"How Can I Explore Other Shouts?"}),(0,a.jsxs)(i.Z.Body,{children:[(0,a.jsx)("p",{children:"And, in BizsApp, there are two ways to explore other users' shouts."}),(0,a.jsxs)("ol",{children:[(0,a.jsx)("li",{children:"If the user is your connection, which means the user is in your connection list, you will get their shouts in the My Shouts section."}),(0,a.jsx)("li",{children:"If the user is not your connection, you will explore shouts in the All Shouts Section according to your interests."})]})]})]}),(0,a.jsxs)(i.Z.Item,{eventKey:"4",children:[(0,a.jsx)(i.Z.Header,{children:"Can I Upload Video and Images at the Same Time in Shouts?"}),(0,a.jsx)(i.Z.Body,{children:(0,a.jsx)("p",{children:"Yes, You Can Easily Upload Shouts & Videos at the Same Time."})})]})]})})})})}},7172:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return c}});var a=t(5893),i=t(7246),s=t.n(i),r=t(1664),o=t.n(r);function c(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("section",{className:"container-fluid p-0",children:(0,a.jsx)("div",{className:s().footer_bg,children:(0,a.jsxs)("div",{className:"container",children:[(0,a.jsxs)("div",{className:"row",children:[(0,a.jsxs)("div",{className:"col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12",children:[(0,a.jsx)("div",{className:s().footer_logo,children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)(o(),{href:"/",children:(0,a.jsx)("img",{src:"/img/logo/logo-white.png",alt:"logo",className:"logo_img img-fluid"})})}),(0,a.jsx)("li",{children:(0,a.jsx)(o(),{href:"http://digrowfa.com/",target:"_blank",children:(0,a.jsx)("img",{src:"/img/logo/Digrowfa-green.png",alt:"Digrowfa_logo",className:"logo_img img-fluid"})})})]})}),(0,a.jsx)("div",{className:s().footer_content,children:(0,a.jsx)("p",{children:'"BizsApp-The Business App" is a business Application by Digrowfa Private Limited. BizsApp helps Businesses to grow digitally with its powerfull Features & functionalities.'})})]}),(0,a.jsx)("div",{className:"col-xl-2 col-lg-2 col-md-4 col-sm-12 col-12",children:(0,a.jsxs)("div",{className:s().footer_list,children:[(0,a.jsx)("h2",{children:"Company"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)(o(),{href:"/about",children:"About"})}),(0,a.jsx)("li",{children:(0,a.jsx)(o(),{href:"/help_center/Terms",children:"Terms"})})]})]})}),(0,a.jsx)("div",{className:"col-xl-2 col-lg-2 col-md-4 col-sm-12 col-12",children:(0,a.jsxs)("div",{className:s().footer_list,children:[(0,a.jsx)("h2",{children:"BizsApp"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)(o(),{href:"/features",children:"Features"})}),(0,a.jsx)("li",{children:(0,a.jsx)(o(),{href:"/branding",children:"Branding"})})]})]})}),(0,a.jsx)("div",{className:"col-xl-2 col-lg-2 col-md-4 col-sm-12 col-12",children:(0,a.jsxs)("div",{className:s().footer_list,children:[(0,a.jsx)("h2",{children:"Download"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)(o(),{href:"",children:"IOS"})}),(0,a.jsx)("li",{children:(0,a.jsx)(o(),{href:"",children:"Android"})})]})]})})]}),(0,a.jsx)("div",{className:"row",children:(0,a.jsx)("div",{className:"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12",children:(0,a.jsx)("div",{className:s().copyright_row,children:(0,a.jsx)("div",{className:s().copyright_text,children:(0,a.jsx)("p",{children:"Copyright \xa9 2022 BizsApp. All Rights Reserved"})})})})})]})})})})}},4487:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return d}});var a=t(5893),i=t(1664),s=t.n(i),r=(t(5675),t(8540)),o=t.n(r),c=t(1163),l=t(7294);function d(){var e=(0,c.useRouter)().asPath,n=(0,l.useState)(!1),t=n[0],i=n[1];return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"container-flud p-0",children:(0,a.jsx)("div",{className:o().navigation,children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col-xl-2 col-lg-2 col-md-10 col-sm-10 col-10",children:(0,a.jsxs)("div",{className:o().logo,children:[(0,a.jsx)("div",{className:o().mobile_hide,children:(0,a.jsx)(s(),{href:"/",children:(0,a.jsx)("img",{src:"/img/logo/Logo.png",alt:"logo"})})}),(0,a.jsx)("div",{className:o().desktop_hide,children:(0,a.jsx)(s(),{href:"/",children:(0,a.jsx)("img",{src:"/img/logo/logo-white.png",alt:"logo"})})})]})}),(0,a.jsxs)("div",{className:"col-xl-10 col-lg-10 col-md-2 col-sm-2 col-2",children:[(0,a.jsx)("div",{className:o().nav_list,children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)(s(),{href:"/branding",children:(0,a.jsx)("a",{className:"/branding"===e?"".concat(o().nav_item," ").concat(o().active):"nav_item",children:"Branding"})})}),(0,a.jsx)("li",{children:(0,a.jsx)(s(),{href:"/features",children:(0,a.jsx)("a",{className:"/features"===e?"".concat(o().nav_item," ").concat(o().active):"nav_item",children:"Features"})})}),(0,a.jsx)("li",{children:(0,a.jsx)(s(),{href:"/download",children:(0,a.jsx)("a",{className:"/download"===e?"".concat(o().nav_item," ").concat(o().active):"nav_item",children:"Download"})})}),(0,a.jsx)("li",{children:(0,a.jsx)(s(),{href:"/help_center",children:(0,a.jsx)("a",{className:"/help_center"===e?"".concat(o().nav_item," ").concat(o().active):"nav_item",children:"Help Center"})})})]})}),(0,a.jsx)("div",{className:o().menu,onClick:function(){return i(!t)},children:(0,a.jsxs)("div",{className:t?o().active_menu_click:o().menu_click,children:[(0,a.jsx)("div",{className:"".concat(o().top," ").concat(o().menubar)}),(0,a.jsx)("div",{className:"".concat(o().middle," ").concat(o().menubar)}),(0,a.jsx)("div",{className:"".concat(o().bottom," ").concat(o().menubar)})]})})]})]})})})}),(0,a.jsx)("div",{className:t?o().active_menu_slider:o().menu_slider,children:(0,a.jsxs)("ul",{children:[(0,a.jsx)(s(),{href:"/branding",children:(0,a.jsx)("li",{children:(0,a.jsx)("a",{className:"/branding"===e?"".concat(o().nav_item," ").concat(o().active):"nav_item",children:"Branding"})})}),(0,a.jsx)(s(),{href:"/features",children:(0,a.jsx)("li",{children:(0,a.jsx)("a",{className:"/features"===e?"".concat(o().nav_item," ").concat(o().active):"nav_item",children:"Features"})})}),(0,a.jsx)(s(),{href:"/download",children:(0,a.jsx)("li",{children:(0,a.jsx)("a",{className:"/download"===e?"".concat(o().nav_item," ").concat(o().active):"nav_item",children:"Download"})})}),(0,a.jsx)(s(),{href:"/help_center",children:(0,a.jsx)("li",{children:(0,a.jsx)("a",{className:"/help_center"===e?"".concat(o().nav_item," ").concat(o().active):"nav_item",children:"Help Center"})})})]})})]})}},7246:function(e){e.exports={footer_bg:"Footer_footer_bg__4iZ_L",footer_logo:"Footer_footer_logo__aa2I3",footer_content:"Footer_footer_content__VyUGt",footer_list:"Footer_footer_list___OZ5p",copyright_text:"Footer_copyright_text__HIHsL",footer_social_media_icon:"Footer_footer_social_media_icon__GPcmd",footer_social_media:"Footer_footer_social_media__FkG4z",copyright_row:"Footer_copyright_row__qHLDI",title:"Footer_title__ZStl1"}},2426:function(e){e.exports={left_panel:"HelpCenter_left_panel__ZQWhK",page_content:"HelpCenter_page_content__9iOTP",faqs_list:"HelpCenter_faqs_list__32doB",nav_item:"HelpCenter_nav_item__2Pyta",active:"HelpCenter_active__UAnSv",page_name:"HelpCenter_page_name__xshgo",content:"HelpCenter_content__GjlTE",mobile_panel:"HelpCenter_mobile_panel__sDftd"}},8540:function(e){e.exports={navigation:"Navigation_navigation__VLdcJ",logo:"Navigation_logo__rFHvU",desktop_hide:"Navigation_desktop_hide__Lrl9C",nav_list:"Navigation_nav_list__L9S0M",nav_item:"Navigation_nav_item__l1GEW",active:"Navigation_active__iyrqB",menu:"Navigation_menu__H_MAn",menu_click:"Navigation_menu_click__9Nim8",menubar:"Navigation_menubar__JvY0N",active_menu_click:"Navigation_active_menu_click__k9p_p",top:"Navigation_top__t08FP",middle:"Navigation_middle__nEQ7H",bottom:"Navigation_bottom__N_FP_",menu_slider:"Navigation_menu_slider__Qqqzl",active_menu_slider:"Navigation_active_menu_slider__oxe_7",mobile_hide:"Navigation_mobile_hide__jFRca"}},9008:function(e,n,t){e.exports=t(3121)},1163:function(e,n,t){e.exports=t(880)},2703:function(e,n,t){"use strict";var a=t(414);function i(){}function s(){}s.resetWarningCache=i,e.exports=function(){function e(e,n,t,i,s,r){if(r!==a){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function n(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:s,resetWarningCache:i};return t.PropTypes=t,t}},5697:function(e,n,t){e.exports=t(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},function(e){e.O(0,[1664,5675,5794,9774,2888,179],(function(){return n=8478,e(e.s=n);var n}));var n=e.O();_N_E=n}]);