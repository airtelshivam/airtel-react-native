(window.webpackJsonp=window.webpackJsonp||[]).push([[217],{1176:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),p=a,m=d["".concat(i,".").concat(p)]||d[p]||b[p]||r;return n?o.a.createElement(m,c(c({ref:t},s),{},{components:n})):o.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1177:function(e,t,n){"use strict";function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}},1178:function(e,t,n){"use strict";var a=n(0),o=n(1179);t.a=function(){var e=Object(a.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},1179:function(e,t,n){"use strict";var a=n(0),o=Object(a.createContext)(void 0);t.a=o},1180:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(1178),i=n(1177),c=n(68),l=n.n(c),s=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,d=e.values,b=e.groupId,p=e.className,m=Object(r.a)(),f=m.tabGroupChoices,v=m.setTabGroupChoices,y=Object(a.useState)(c),O=y[0],h=y[1],g=a.Children.toArray(e.children);if(null!=b){var j=f[b];null!=j&&j!==O&&d.some((function(e){return e.value===j}))&&h(j)}var w=function(e){h(e),null!=b&&v(b,e)},k=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},p)},d.map((function(e){var t=e.value,n=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(i.a)("tabs__item",l.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(k,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},n)}))),t?Object(a.cloneElement)(g.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},1181:function(e,t,n){"use strict";var a=n(0),o=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return o.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},1182:function(e,t,n){"use strict";var a=n(7),o=!!a.a.canUseDOM&&navigator.platform.startsWith("Mac"),r=!!a.a.canUseDOM&&navigator.platform.startsWith("Win"),i=o?"ios":"android",c=o?"macos":r?"windows":"linux";t.a={defaultGuide:"quickstart",defaultOs:c,defaultPackageManager:"npm",defaultPlatform:i,defaultSyntax:"functional",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo CLI Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}]}},328:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return p}));var a=n(3),o=n(8),r=(n(0),n(1176)),i=n(1180),c=n(1181),l=n(1182),s={id:"dynamiccolorios",title:"DynamicColorIOS"},u={unversionedId:"dynamiccolorios",id:"version-0.63/dynamiccolorios",isDocsHomePage:!1,title:"DynamicColorIOS",description:"The DynamicColorIOS function is a platform color type specific to iOS.",source:"@site/versioned_docs/version-0.63/dynamiccolorios.md",slug:"/dynamiccolorios",permalink:"/docs/0.63/dynamiccolorios",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.63/dynamiccolorios.md",version:"0.63",lastUpdatedAt:1603945169,sidebar:"version-0.63/api",previous:{title:"ActionSheetIOS",permalink:"/docs/0.63/actionsheetios"},next:{title:"Settings",permalink:"/docs/0.63/settings"}},d=[{value:"Example",id:"example",children:[]}],b={toc:d};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"DynamicColorIOS")," function is a platform color type specific to iOS."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"DynamicColorIOS({ light: color, dark: color });\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"DynamicColorIOS")," takes a single argument as an object with two keys: ",Object(r.b)("inlineCode",{parentName:"p"},"dark")," and ",Object(r.b)("inlineCode",{parentName:"p"},"light"),'. These correspond to the colors you want to use for "light mode" and "dark mode" on iOS.'),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"In the future, more keys might become available for different user preferences, like high contrast.")),Object(r.b)("p",null,"At runtime, the system will choose which of the two colors to display depending on the current system appearance settings. Dynamic colors are useful for branding colors or other app specific colors that still respond automatically to system setting changes."),Object(r.b)("h4",{id:"developer-notes"},"Developer notes"),Object(r.b)(i.a,{groupId:"guide",defaultValue:"web",values:l.a.getDevNotesTabs(["ios","web"]),mdxType:"Tabs"},Object(r.b)(c.a,{value:"web",mdxType:"TabItem"},Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"If you\u2019re familiar with ",Object(r.b)("inlineCode",{parentName:"p"},"@media (prefers-color-scheme: dark)")," in CSS, this is similar! Only instead of defining all the colors in a media query, you define which color to use under what circumstances right there where you're using it. Neat!"))),Object(r.b)(c.a,{value:"ios",mdxType:"TabItem"},Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"The ",Object(r.b)("inlineCode",{parentName:"p"},"DynamicColorIOS")," function is similar to the iOS native methods ",Object(r.b)("a",{parentName:"p",href:"https://developer.apple.com/documentation/uikit/uicolor/3238040-colorwithdynamicprovider"},Object(r.b)("inlineCode",{parentName:"a"},"UIColor colorWithDynamicProvider:")))))),Object(r.b)("h2",{id:"example"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"import { DynamicColorIOS } from 'react-native';\n\nconst customDynamicTextColor = DynamicColorIOS({\n  dark: 'lightskyblue',\n  light: 'midnightblue'\n});\n")))}p.isMDXComponent=!0}}]);