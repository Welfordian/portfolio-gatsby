"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[115],{7189:function(e,t,a){a.r(t),a.d(t,{default:function(){return H}});var n=a(4578),r=a(4217);function l(e){return function(t){return!!t.type&&t.type.tabsRole===e}}var s=l("Tab"),o=l("TabList"),c=l("TabPanel");function i(e,t){return r.Children.map(e,(function(e){return null===e?null:function(e){return s(e)||o(e)||c(e)}(e)?t(e):e.props&&e.props.children&&"object"==typeof e.props.children?(0,r.cloneElement)(e,Object.assign({},e.props,{children:i(e.props.children,t)})):e}))}function u(e,t){return r.Children.forEach(e,(function(e){null!==e&&(s(e)||c(e)?t(e):e.props&&e.props.children&&"object"==typeof e.props.children&&(o(e)&&t(e),u(e.props.children,t)))}))}function d(e){var t,a,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=d(e[t]))&&(n&&(n+=" "),n+=a);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}var f=function(){for(var e,t,a=0,n="";a<arguments.length;)(e=arguments[a++])&&(t=d(e))&&(n&&(n+=" "),n+=t);return n};function m(e){var t=0;return u(e,(function(e){s(e)&&t++})),t}var b,h=["children","className","disabledTabClassName","domRef","focus","forceRenderTabPanel","onSelect","selectedIndex","selectedTabClassName","selectedTabPanelClassName","environment","disableUpDownKeys"];function p(e){return e&&"getAttribute"in e}function v(e){return p(e)&&e.getAttribute("data-rttab")}function y(e){return p(e)&&"true"===e.getAttribute("aria-disabled")}var g=function(e){var t=(0,r.useRef)([]),a=(0,r.useRef)([]),n=(0,r.useRef)();function l(t,a){t<0||t>=p()||(0,e.onSelect)(t,e.selectedIndex,a)}function u(e){for(var t=p(),a=e+1;a<t;a++)if(!y(g(a)))return a;for(var n=0;n<e;n++)if(!y(g(n)))return n;return e}function d(e){for(var t=e;t--;)if(!y(g(t)))return t;for(t=p();t-- >e;)if(!y(g(t)))return t;return e}function p(){return m(e.children)}function g(e){return t.current["tabs-"+e]}function w(e){var t=e.target;do{if(x(t)){if(y(t))return;return void l([].slice.call(t.parentNode.children).filter(v).indexOf(t),e)}}while(null!=(t=t.parentNode))}function x(e){if(!v(e))return!1;var t=e.parentElement;do{if(t===n.current)return!0;if(t.getAttribute("data-rttabs"))break;t=t.parentElement}while(t);return!1}e.children;var N=e.className,E=(e.disabledTabClassName,e.domRef),k=(e.focus,e.forceRenderTabPanel,e.onSelect,e.selectedIndex,e.selectedTabClassName,e.selectedTabPanelClassName,e.environment,e.disableUpDownKeys,function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,h));return r.default.createElement("div",Object.assign({},k,{className:f(N),onClick:w,onKeyDown:function(t){var a=e.direction,n=e.disableUpDownKeys;if(x(t.target)){var r=e.selectedIndex,s=!1,o=!1;"Space"!==t.code&&32!==t.keyCode&&"Enter"!==t.code&&13!==t.keyCode||(s=!0,o=!1,w(t)),"ArrowLeft"!==t.code&&37!==t.keyCode&&(n||38!==t.keyCode&&"ArrowUp"!==t.code)?"ArrowRight"!==t.code&&39!==t.keyCode&&(n||40!==t.keyCode&&"ArrowDown"!==t.code)?35===t.keyCode||"End"===t.code?(r=function(){for(var e=p();e--;)if(!y(g(e)))return e;return null}(),s=!0,o=!0):36!==t.keyCode&&"Home"!==t.code||(r=function(){for(var e=p(),t=0;t<e;t++)if(!y(g(t)))return t;return null}(),s=!0,o=!0):(r="rtl"===a?d(r):u(r),s=!0,o=!0):(r="rtl"===a?u(r):d(r),s=!0,o=!0),s&&t.preventDefault(),o&&l(r,t)}},ref:function(e){n.current=e,E&&E(e)},"data-rttabs":!0}),function(){var n=0,l=e.children,u=e.disabledTabClassName,d=e.focus,f=e.forceRenderTabPanel,m=e.selectedIndex,h=e.selectedTabClassName,v=e.selectedTabPanelClassName,y=e.environment;a.current=a.current||[];for(var w=a.current.length-p(),x=(0,r.useId)();w++<0;)a.current.push(""+x+a.current.length);return i(l,(function(e){var l=e;if(o(e)){var p=0,w=!1;null==b&&function(e){var t=e||("undefined"!=typeof window?window:void 0);try{b=!(void 0===t||!t.document||!t.document.activeElement)}catch(a){b=!1}}(y);var x=y||("undefined"!=typeof window?window:void 0);b&&x&&(w=r.default.Children.toArray(e.props.children).filter(s).some((function(e,t){return x.document.activeElement===g(t)}))),l=(0,r.cloneElement)(e,{children:i(e.props.children,(function(e){var n="tabs-"+p,l=m===p,s={tabRef:function(e){t.current[n]=e},id:a.current[p],selected:l,focus:l&&(d||w)};return h&&(s.selectedClassName=h),u&&(s.disabledClassName=u),p++,(0,r.cloneElement)(e,s)}))})}else if(c(e)){var N={id:a.current[n],selected:m===n};f&&(N.forceRender=f),v&&(N.selectedClassName=v),n++,l=(0,r.cloneElement)(e,N)}return l}))}())};g.defaultProps={className:"react-tabs",focus:!1};var w=g,x=function(e){var t=e.children,a=e.defaultFocus,n=e.defaultIndex,l=e.focusTabOnClick,s=e.onSelect,o=(0,r.useState)(a),c=o[0],i=o[1],u=(0,r.useState)(function(e){return null===e.selectedIndex?1:0}(e)),d=u[0],f=(0,r.useState)(1===d?n||0:null),b=f[0],h=f[1];if((0,r.useEffect)((function(){i(!1)}),[]),1===d){var p=m(t);(0,r.useEffect)((function(){if(null!=b){var e=Math.max(0,p-1);h(Math.min(b,e))}}),[p])}var v=Object.assign({},e);return v.focus=c,v.onSelect=function(e,t,a){"function"==typeof s&&!1===s(e,t,a)||(l&&i(!0),1===d&&h(e))},null!=b&&(v.selectedIndex=b),delete v.defaultFocus,delete v.defaultIndex,delete v.focusTabOnClick,r.default.createElement(w,v,t)};x.defaultProps={defaultFocus:!1,focusTabOnClick:!0,forceRenderTabPanel:!1,selectedIndex:null,defaultIndex:null,environment:null,disableUpDownKeys:!1},x.tabsRole="Tabs";var N=x,E=["children","className"];var k=function(e){var t=e.children,a=e.className,n=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,E);return r.default.createElement("ul",Object.assign({},n,{className:f(a),role:"tablist"}),t)};k.tabsRole="TabList",k.defaultProps={className:"react-tabs__tab-list"};var T=k,C=["children","className","disabled","disabledClassName","focus","id","selected","selectedClassName","tabIndex","tabRef"];var I="react-tabs__tab",R={className:I,disabledClassName:I+"--disabled",focus:!1,id:null,selected:!1,selectedClassName:I+"--selected"},j=function(e){var t,a=(0,r.useRef)(),n=e.children,l=e.className,s=e.disabled,o=e.disabledClassName,c=e.focus,i=e.id,u=e.selected,d=e.selectedClassName,m=e.tabIndex,b=e.tabRef,h=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,C);return(0,r.useEffect)((function(){u&&c&&a.current.focus()}),[u,c]),r.default.createElement("li",Object.assign({},h,{className:f(l,(t={},t[d]=u,t[o]=s,t)),ref:function(e){a.current=e,b&&b(e)},role:"tab",id:"tab"+i,"aria-selected":u?"true":"false","aria-disabled":s?"true":"false","aria-controls":"panel"+i,tabIndex:m||(u?"0":null),"data-rttab":!0}),n)};j.tabsRole="Tab",j.defaultProps=R;var S=j,O=["children","className","forceRender","id","selected","selectedClassName"];var _="react-tabs__tab-panel",P={className:_,forceRender:!1,selectedClassName:"react-tabs__tab-panel--selected"},A=function(e){var t,a=e.children,n=e.className,l=e.forceRender,s=e.id,o=e.selected,c=e.selectedClassName,i=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,O);return r.default.createElement("div",Object.assign({},i,{className:f(n,(t={},t[c]=o,t)),role:"tabpanel",id:"panel"+s,"aria-labelledby":"tab"+s}),l||o?a:null)};A.tabsRole="TabPanel",A.defaultProps=P;var D=A,F=a(4280),G=a(1266),U=function(e){function t(t){var a;return(a=e.call(this,t)||this).title="Twitter",a.icon="https://abs.twimg.com/favicons/twitter.2.ico",a.mainUrl="https://twitter.com",a.aliases=["twitter.com","www.twitter.com","https://twitter.com","https://www.twitter.com"],a}return(0,n.Z)(t,e),t.prototype.render=function(){return r.default.createElement("div",{className:"p-3"},r.default.createElement("h1",null,"This is Twitter!"))},t}(r.default.Component),L=function(e){function t(t){var a;return(a=e.call(this,t)||this).title="Facebook",a.icon="https://static.xx.fbcdn.net/rsrc.php/yD/r/d4ZIVX-5C-b.ico",a.mainUrl="https://facebook.com",a.aliases=["facebook.com","www.facebook.com","https://facebook.com","https://www.facebook.com"],a}return(0,n.Z)(t,e),t.prototype.render=function(){return r.default.createElement("div",{className:"p-3"},r.default.createElement("h1",null,"This is Facebook!"))},t}(r.default.Component),B=function(e){function t(t){var a;return(a=e.call(this,t)||this).title="New Tab",a.icon="https://assets.msn.com/statics/icons/favicon_newtabpage.png",a.aliases=["jw://newtab",""],a}return(0,n.Z)(t,e),t.prototype.render=function(){var e=this;return r.default.createElement("div",{className:"grow flex-col flex justify-center items-center -mt-6"},r.default.createElement("h1",{className:"text-3xl md:text-5xl text-center"},"New Tab"),r.default.createElement("p",{className:"pt-12 text-center"},"Here's a list of your recently visited sites"),r.default.createElement("div",{className:"flex flex-wrap justify-center mt-12 gap-3"},r.default.createElement("div",{onClick:function(){e.props.onNavigate("https://facebook.com")},className:"px-5 py-3 cursor-pointer text-gray-500' border-2 border-black w-full md:w-auto flex justify-center items-center hover:shadow-md hover:shadow-black/40 block lg:mt-0 hover:text-white hover:bg-gray-800 hover:text-white font-bold transition duration-300 dark:text-gray-300"},"Facebook"),r.default.createElement("div",{onClick:function(){e.props.onNavigate("https://twitter.com")},className:"px-5 py-3 cursor-pointer text-gray-500' border-2 border-black w-full md:w-auto flex justify-center items-center hover:shadow-md hover:shadow-black/40 block lg:mt-0 hover:text-white hover:bg-gray-800 hover:text-white font-bold transition duration-300 dark:text-gray-300"},"Twitter"),r.default.createElement("div",{className:"px-5 py-3 cursor-not-allowed text-gray-500' border-2 border-black w-full md:w-auto flex justify-center items-center block lg:mt-0 font-bold transition duration-300 dark:text-gray-300"},"Google"),r.default.createElement("div",{className:"px-5 py-3 cursor-not-allowed text-gray-500' border-2 border-black w-full md:w-auto flex justify-center items-center block lg:mt-0 font-bold transition duration-300 dark:text-gray-300"},"BBC News")))},t}(r.default.Component),Z=function(e){function t(t){var a;return(a=e.call(this,t)||this).title="New Tab",a.icon="https://assets.msn.com/statics/icons/favicon_newtabpage.png",a.aliases=["jw://err_name_not_resolved"],a.state={url:""},a}(0,n.Z)(t,e);var a=t.prototype;return a.componentDidMount=function(){this.setState({url:this.props.url})},a.render=function(){return r.default.createElement("div",{className:"grow flex-col flex justify-center items-center -mt-6"},r.default.createElement("div",null,r.default.createElement("h1",{className:"text-2xl"},"Hmmm... can't reach this page"),r.default.createElement("p",{className:"mt-8"},this.state.url,"'s server IP address could not be found."),r.default.createElement("p",{className:"font-bold mt-8"},"Try:"),r.default.createElement("ul",{className:"list-disc ml-4 mt-6 flex flex-col gap-3"},r.default.createElement("li",null,"Checking the connection"),r.default.createElement("li",null,"Checking the proxy, firewall, and DNS settings.")),r.default.createElement("p",{className:"text-gray-400 mt-12 text-sm"},"ERR_NAME_NOT_RESOLVED")))},t}(r.default.Component),K=a(4926),H=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={sites:[B,Z,U,L],tabs:[{url:"",historyIndex:0,history:[""],component:B}],urlActive:!1,activeTab:0,canGoBack:!0,canGoForward:!0},a}(0,n.Z)(t,e);var a=t.prototype;return a.componentDidMount=function(){document.addEventListener("mousedown",(function(e){e.detail>1&&((e.path||e.nativeEvent.composedPath&&e.nativeEvent.composedPath()).filter((function(e){return!!e.classList&&e.classList.contains("ui-element")})).length>0&&e.preventDefault())}),!1)},a.goTo=function(e,t,a){void 0===t&&(t=!1),void 0===a&&(a=!0);var n=this.state.tabs,r=this.state.sites.filter((function(t){return(t=new t).aliases.includes(e)}));0===r.length?n[this.state.activeTab].component=Z:n[this.state.activeTab].component=r[0],e="mainUrl"in new n[this.state.activeTab].component?(new n[this.state.activeTab].component).mainUrl:e,n[this.state.activeTab].url=e,a&&this.pushHistory(this.state.activeTab,e),this.setState({tabs:n,urlActive:!1})},a.updateUrl=function(e){var t=this.state.tabs;t[this.state.activeTab].url=e.target.value,this.setState({tabs:t})},a.historyBack=function(){var e=this,t=this.state.tabs,a=t[this.state.activeTab];0!==a.historyIndex&&(a.historyIndex=a.historyIndex-1,a.url=a.history[a.historyIndex],t[this.state.activeTab]=a,this.setState({tabs:t},(function(){e.goTo(a.url,!1,!1)})))},a.historyForward=function(){var e=this,t=this.state.tabs,a=t[this.state.activeTab];a.historyIndex!==a.history.length-1&&(a.historyIndex=a.historyIndex+1,a.url=a.history[a.historyIndex],t[this.state.activeTab]=a,this.setState({tabs:t},(function(){e.goTo(a.url,!1,!1)})))},a.pushHistory=function(e,t){var a=this.state.tabs,n=a[e];"history"in n||(n.history=[]),n.history.push(t),n.historyIndex=n.historyIndex+1,a[e]=n,this.setState({tabs:a})},a.addTab=function(){var e=this.state.tabs;e.push({url:"",historyIndex:0,history:[""],component:B}),this.setState({tabs:e,activeTab:this.state.tabs.length-1})},a.removeTab=function(e){var t=this.state.activeTab,a=this.state.tabs;a.splice(e,1),t-=1,0===a.length&&(t=0,a.push({url:"",component:B})),this.setState({activeTab:t,tabs:a})},a.focusOrRemove=function(e,t,a){if((a.nativeEvent.path||a.nativeEvent.composedPath&&a.nativeEvent.composedPath()).filter((function(e){return!!e.classList&&e.classList.contains("close-tab")})).length>0)return this.removeTab(e);this.setState({activeTab:e})},a.render=function(){var e=this,t=this.state.tabs[this.state.activeTab].component;return r.default.createElement("div",{className:"mt-32"},r.default.createElement("div",{className:"flex justify-center mr-12 select-none"},r.default.createElement("div",{className:"flex flex-col w-full md:w-4/5 items-end"},r.default.createElement("a",{className:"bg-gray-300 px-6 py-2 rounded-t-lg hover:bg-gray-400/60 transition-colors",href:"https://github.com/Welfordian/portfolio-gatsby/blob/main/src/pages/browser.js",target:"_blank",rel:"noopener"},r.default.createElement(F.G,{className:"mr-3",icon:K.gJF}),"Source"))),r.default.createElement(N,{onSelect:function(t,a,n){return e.focusOrRemove(t,a,n)}},r.default.createElement("div",{className:"flex justify-center grow"},r.default.createElement("div",{className:"h-[42rem] flex flex-col rounded-lg shadow-xl shadow-gray-400 dark:shadow-md dark:shadow-gray-800 w-full md:w-[80em]"},r.default.createElement("div",{className:"ui-element select-none flex items-center justify-between h-12 px-2 rounded-t-lg bg-gray-300 border-gray-500 text-center text-black"},r.default.createElement("div",{className:"flex items-center h-12 px-2 rounded-t-lg bg-gray-300 border-gray-500 text-center text-black"},r.default.createElement("div",{className:"flex"},r.default.createElement("div",{className:"flex ml-2 justify-center items-center text-center border-red-900 bg-red-500 shadow-inner rounded-full w-3 h-3"}),r.default.createElement("div",{className:"ml-2 border-yellow-900 bg-yellow-500 shadow-inner rounded-full w-3 h-3"}),r.default.createElement("div",{className:"ml-2 border-green-900 bg-green-500 shadow-inner rounded-full w-3 h-3"})),r.default.createElement(T,{className:"flex ml-4 items-end h-12 max-w-[17em] md:max-w-[70em] overflow-y-auto"},this.state.tabs.map((function(t,a){return r.default.createElement(S,{className:(e.state.activeTab===a?"bg-gray-200":"hover:bg-gray-200/40")+" rounded-t-md transition-colors duration-200 h-10 flex items-center justify-between min-w-[15em] px-3 cursor-pointer"},r.default.createElement("p",{className:"flex items-center"},r.default.createElement("img",{className:"w-5 h-5 mr-2",src:(new t.component).icon}),(new t.component).title),r.default.createElement(F.G,{className:"hover:bg-gray-400/50 px-2 py-1 rounded transition-colors duration-200 close-tab",icon:G.NBC}))})))),r.default.createElement("div",{className:"h-12 flex items-center px-2"},r.default.createElement("div",{className:"hover:bg-gray-400/50 px-3 py-1 rounded transition-colors duration-200 cursor-pointer",onClick:function(){return e.addTab()}},r.default.createElement(F.G,{icon:G.r8p})))),r.default.createElement("div",{className:"w-full bg-gray-200 h-10 flex ui-element"},r.default.createElement("div",{className:"flex h-10 items-center px-2 gap-2"},r.default.createElement(F.G,{onClick:function(){e.historyBack()},className:(this.state.canGoBack?"hover:bg-gray-400/50":"text-gray-400")+" ui-element px-2 py-1 rounded transition-colors duration-200",icon:G.acZ,size:"lg"}),r.default.createElement(F.G,{onClick:function(){e.historyForward()},className:(this.state.canGoForward?"hover:bg-gray-400/50":"text-gray-400")+" ui-element px-2 py-1 rounded transition-colors duration-200",icon:G.eFW,size:"lg"}),r.default.createElement(F.G,{className:"ui-element hover:bg-gray-400/50 px-2 py-1 transition-colors rounded",icon:G.UO1,size:"lg"})),r.default.createElement("div",{className:"relative w-full h-10 pr-1"},r.default.createElement("div",{className:"h-6 top-[1px] absolute flex items-center mt-2 hover:bg-gray-400/50 text-gray-500 w-8 ml-1 px-2 transition-colors duration-200 rounded"},r.default.createElement(F.G,{icon:G.sqG,className:"absolute block"})),r.default.createElement("input",{readOnly:!this.state.urlActive,onClick:function(t){return e.setState({urlActive:!0})},onFocus:function(t){return e.setState({urlActive:!0})},onBlur:function(t){return e.setState({urlActive:!1})},autoComplete:"off",list:"emptyList",onKeyUp:function(t){return"Enter"===t.key&&e.goTo(t.target.value)&&t.target.blur()},onChange:function(t){return e.updateUrl(t)},value:this.state.tabs[this.state.activeTab].url,type:"text",className:"w-full h-8 mt-1 mb-3 rounded outline-none pr-2 pl-10"}))),r.default.createElement("div",{className:"relative grow flex bg-black overflow-y-scroll rounded-b-lg"},this.state.tabs.map((function(a,n){return r.default.createElement(D,{forceRender:!0,className:(e.state.activeTab===n?"":"hidden")+" w-full grow flex"},r.default.createElement("div",{className:"w-full grow bg-white overflow-auto flex"},r.default.createElement(t,{url:e.state.tabs[e.state.activeTab].url,onNavigate:function(t){e.goTo(t,!0)}})))})))))))},t}(r.default.Component)}}]);
//# sourceMappingURL=component---src-pages-browser-js-4f5595b23171db0677ae.js.map