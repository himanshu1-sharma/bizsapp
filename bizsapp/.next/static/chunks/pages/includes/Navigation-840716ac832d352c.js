(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[110],{1791:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/includes/Navigation",function(){return t(4487)}])},1551:function(e,n,t){"use strict";function a(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var a,r,i=[],c=!0,l=!1;try{for(t=t.call(e);!(c=(a=t.next()).done)&&(i.push(a.value),!n||i.length!==n);c=!0);}catch(o){l=!0,r=o}finally{try{c||null==t.return||t.return()}finally{if(l)throw r}}return i}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return a(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return a(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i,c=(i=t(7294))&&i.__esModule?i:{default:i},l=t(1003),o=t(880),s=t(9246);function u(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d={};function f(e,n,t,a){if(e&&l.isLocalURL(n)){e.prefetch(n,t,a).catch((function(e){0}));var r=a&&"undefined"!==typeof a.locale?a.locale:e&&e.locale;d[n+"%"+t+(r?"%"+r:"")]=!0}}var _=c.default.forwardRef((function(e,n){var t,a=e.legacyBehavior,i=void 0===a?!0!==Boolean(!1):a,_=e.href,v=e.as,m=e.children,h=e.prefetch,p=e.passHref,g=e.replace,j=e.shallow,x=e.scroll,N=e.locale,y=e.onClick,b=e.onMouseEnter,w=u(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter"]);t=m,i&&"string"===typeof t&&(t=c.default.createElement("a",null,t));var k,E=!1!==h,L=o.useRouter(),C=c.default.useMemo((function(){var e=r(l.resolveHref(L,_,!0),2),n=e[0],t=e[1];return{href:n,as:v?l.resolveHref(L,v):t||n}}),[L,_,v]),O=C.href,M=C.as,P=c.default.useRef(O),R=c.default.useRef(M);i&&(k=c.default.Children.only(t));var H=i?k&&"object"===typeof k&&k.ref:n,S=r(s.useIntersection({rootMargin:"200px"}),3),A=S[0],F=S[1],U=S[2],B=c.default.useCallback((function(e){R.current===M&&P.current===O||(U(),R.current=M,P.current=O),A(e),H&&("function"===typeof H?H(e):"object"===typeof H&&(H.current=e))}),[M,H,O,U,A]);c.default.useEffect((function(){var e=F&&E&&l.isLocalURL(O),n="undefined"!==typeof N?N:L&&L.locale,t=d[O+"%"+M+(n?"%"+n:"")];e&&!t&&f(L,O,M,{locale:n})}),[M,O,F,N,E,L]);var D={ref:B,onClick:function(e){i||"function"!==typeof y||y(e),i&&k.props&&"function"===typeof k.props.onClick&&k.props.onClick(e),e.defaultPrevented||function(e,n,t,a,r,i,c,o){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(t))&&(e.preventDefault(),n[r?"replace":"push"](t,a,{shallow:i,locale:o,scroll:c}))}(e,L,O,M,g,j,x,N)},onMouseEnter:function(e){i||"function"!==typeof b||b(e),i&&k.props&&"function"===typeof k.props.onMouseEnter&&k.props.onMouseEnter(e),l.isLocalURL(O)&&f(L,O,M,{priority:!0})}};if(!i||p||"a"===k.type&&!("href"in k.props)){var I="undefined"!==typeof N?N:L&&L.locale,T=L&&L.isLocaleDomain&&l.getDomainLocale(M,I,L&&L.locales,L&&L.domainLocales);D.href=T||l.addBasePath(l.addLocale(M,I,L&&L.defaultLocale))}return i?c.default.cloneElement(k,D):c.default.createElement("a",Object.assign({},w,D),t)}));n.default=_,("function"===typeof n.default||"object"===typeof n.default&&null!==n.default)&&(Object.assign(n.default,n),e.exports=n.default)},4487:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return u}});var a=t(5893),r=t(1664),i=t.n(r),c=(t(5675),t(8540)),l=t.n(c),o=t(1163),s=t(7294);function u(){var e=(0,o.useRouter)().asPath,n=(0,s.useState)(!1),t=n[0],r=n[1];return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"container-flud p-0",children:(0,a.jsx)("div",{className:l().navigation,children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col-xl-2 col-lg-2 col-md-10 col-sm-10 col-10",children:(0,a.jsxs)("div",{className:l().logo,children:[(0,a.jsx)("div",{className:l().mobile_hide,children:(0,a.jsx)(i(),{href:"/",children:(0,a.jsx)("img",{src:"/img/logo/Logo.png",alt:"logo"})})}),(0,a.jsx)("div",{className:l().desktop_hide,children:(0,a.jsx)(i(),{href:"/",children:(0,a.jsx)("img",{src:"/img/logo/logo-white.png",alt:"logo"})})})]})}),(0,a.jsxs)("div",{className:"col-xl-10 col-lg-10 col-md-2 col-sm-2 col-2",children:[(0,a.jsx)("div",{className:l().nav_list,children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)(i(),{href:"/branding",children:(0,a.jsx)("a",{className:"/branding"===e?"".concat(l().nav_item," ").concat(l().active):"nav_item",children:"Branding"})})}),(0,a.jsx)("li",{children:(0,a.jsx)(i(),{href:"/features",children:(0,a.jsx)("a",{className:"/features"===e?"".concat(l().nav_item," ").concat(l().active):"nav_item",children:"Features"})})}),(0,a.jsx)("li",{children:(0,a.jsx)(i(),{href:"/download",children:(0,a.jsx)("a",{className:"/download"===e?"".concat(l().nav_item," ").concat(l().active):"nav_item",children:"Download"})})}),(0,a.jsx)("li",{children:(0,a.jsx)(i(),{href:"/help_center",children:(0,a.jsx)("a",{className:"/help_center"===e?"".concat(l().nav_item," ").concat(l().active):"nav_item",children:"Help Center"})})})]})}),(0,a.jsx)("div",{className:l().menu,onClick:function(){return r(!t)},children:(0,a.jsxs)("div",{className:t?l().active_menu_click:l().menu_click,children:[(0,a.jsx)("div",{className:"".concat(l().top," ").concat(l().menubar)}),(0,a.jsx)("div",{className:"".concat(l().middle," ").concat(l().menubar)}),(0,a.jsx)("div",{className:"".concat(l().bottom," ").concat(l().menubar)})]})})]})]})})})}),(0,a.jsx)("div",{className:t?l().active_menu_slider:l().menu_slider,children:(0,a.jsxs)("ul",{children:[(0,a.jsx)(i(),{href:"/branding",children:(0,a.jsx)("li",{children:(0,a.jsx)("a",{className:"/branding"===e?"".concat(l().nav_item," ").concat(l().active):"nav_item",children:"Branding"})})}),(0,a.jsx)(i(),{href:"/features",children:(0,a.jsx)("li",{children:(0,a.jsx)("a",{className:"/features"===e?"".concat(l().nav_item," ").concat(l().active):"nav_item",children:"Features"})})}),(0,a.jsx)(i(),{href:"/download",children:(0,a.jsx)("li",{children:(0,a.jsx)("a",{className:"/download"===e?"".concat(l().nav_item," ").concat(l().active):"nav_item",children:"Download"})})}),(0,a.jsx)(i(),{href:"/help_center",children:(0,a.jsx)("li",{children:(0,a.jsx)("a",{className:"/help_center"===e?"".concat(l().nav_item," ").concat(l().active):"nav_item",children:"Help Center"})})})]})})]})}},8540:function(e){e.exports={navigation:"Navigation_navigation__VLdcJ",logo:"Navigation_logo__rFHvU",desktop_hide:"Navigation_desktop_hide__Lrl9C",nav_list:"Navigation_nav_list__L9S0M",nav_item:"Navigation_nav_item__l1GEW",active:"Navigation_active__iyrqB",menu:"Navigation_menu__H_MAn",menu_click:"Navigation_menu_click__9Nim8",menubar:"Navigation_menubar__JvY0N",active_menu_click:"Navigation_active_menu_click__k9p_p",top:"Navigation_top__t08FP",middle:"Navigation_middle__nEQ7H",bottom:"Navigation_bottom__N_FP_",menu_slider:"Navigation_menu_slider__Qqqzl",active_menu_slider:"Navigation_active_menu_slider__oxe_7",mobile_hide:"Navigation_mobile_hide__jFRca"}},1664:function(e,n,t){e.exports=t(1551)},1163:function(e,n,t){e.exports=t(880)}},function(e){e.O(0,[675,774,888,179],(function(){return n=1791,e(e.s=n);var n}));var n=e.O();_N_E=n}]);