/*! For license information please see component---src-pages-terminal-js-188c0ea41800f42ca7b9.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[260],{3583:function(e,t,n){n(3349).tz.load(n(1128))},3349:function(e,t,n){var r,a,s;!function(o,i){"use strict";e.exports?e.exports=i(n(9201)):(a=[n(9201)],void 0===(s="function"==typeof(r=i)?r.apply(t,a):r)||(e.exports=s))}(0,(function(e){"use strict";void 0===e.version&&e.default&&(e=e.default);var t,n={},r={},a={},s={},o={};e&&"string"==typeof e.version||T("Moment Timezone requires Moment.js. See https://momentjs.com/timezone/docs/#/use-it/browser/");var i=e.version.split("."),l=+i[0],u=+i[1];function c(e){return e>96?e-87:e>64?e-29:e-48}function d(e){var t=0,n=e.split("."),r=n[0],a=n[1]||"",s=1,o=0,i=1;for(45===e.charCodeAt(0)&&(t=1,i=-1);t<r.length;t++)o=60*o+c(r.charCodeAt(t));for(t=0;t<a.length;t++)s/=60,o+=c(a.charCodeAt(t))*s;return o*i}function f(e){for(var t=0;t<e.length;t++)e[t]=d(e[t])}function p(e,t){var n,r=[];for(n=0;n<t.length;n++)r[n]=e[t[n]];return r}function m(e){var t=e.split("|"),n=t[2].split(" "),r=t[3].split(""),a=t[4].split(" ");return f(n),f(r),f(a),function(e,t){for(var n=0;n<t;n++)e[n]=Math.round((e[n-1]||0)+6e4*e[n]);e[t-1]=1/0}(a,r.length),{name:t[0],abbrs:p(t[1].split(" "),r),offsets:p(n,r),untils:a,population:0|t[5]}}function h(e){e&&this._set(m(e))}function v(e,t){this.name=e,this.zones=t}function g(e){var t=e.toTimeString(),n=t.match(/\([a-z ]+\)/i);"GMT"===(n=n&&n[0]?(n=n[0].match(/[A-Z]/g))?n.join(""):void 0:(n=t.match(/[A-Z]{3,5}/g))?n[0]:void 0)&&(n=void 0),this.at=+e,this.abbr=n,this.offset=e.getTimezoneOffset()}function y(e){this.zone=e,this.offsetScore=0,this.abbrScore=0}function w(e,t){for(var n,r;r=6e4*((t.at-e.at)/12e4|0);)(n=new g(new Date(e.at+r))).offset===e.offset?e=n:t=n;return e}function E(e,t){return e.offsetScore!==t.offsetScore?e.offsetScore-t.offsetScore:e.abbrScore!==t.abbrScore?e.abbrScore-t.abbrScore:e.zone.population!==t.zone.population?t.zone.population-e.zone.population:t.zone.name.localeCompare(e.zone.name)}function b(e,t){var n,r;for(f(t),n=0;n<t.length;n++)r=t[n],o[r]=o[r]||{},o[r][e]=!0}function x(e){var t,n,r,a=e.length,i={},l=[];for(t=0;t<a;t++)for(n in r=o[e[t].offset]||{})r.hasOwnProperty(n)&&(i[n]=!0);for(t in i)i.hasOwnProperty(t)&&l.push(s[t]);return l}function N(){try{var e=Intl.DateTimeFormat().resolvedOptions().timeZone;if(e&&e.length>3){var t=s[S(e)];if(t)return t;T("Moment Timezone found "+e+" from the Intl api, but did not have that data loaded.")}}catch(c){}var n,r,a,o=function(){var e,t,n,r=(new Date).getFullYear()-2,a=new g(new Date(r,0,1)),s=[a];for(n=1;n<48;n++)(t=new g(new Date(r,n,1))).offset!==a.offset&&(e=w(a,t),s.push(e),s.push(new g(new Date(e.at+6e4)))),a=t;for(n=0;n<4;n++)s.push(new g(new Date(r+n,0,1))),s.push(new g(new Date(r+n,6,1)));return s}(),i=o.length,l=x(o),u=[];for(r=0;r<l.length;r++){for(n=new y(D(l[r]),i),a=0;a<i;a++)n.scoreOffsetAt(o[a]);u.push(n)}return u.sort(E),u.length>0?u[0].zone.name:void 0}function S(e){return(e||"").toLowerCase().replace(/\//g,"_")}function k(e){var t,r,a,o;for("string"==typeof e&&(e=[e]),t=0;t<e.length;t++)o=S(r=(a=e[t].split("|"))[0]),n[o]=e[t],s[o]=r,b(o,a[2].split(" "))}function D(e,t){e=S(e);var a,o=n[e];return o instanceof h?o:"string"==typeof o?(o=new h(o),n[e]=o,o):r[e]&&t!==D&&(a=D(r[e],D))?((o=n[e]=new h)._set(a),o.name=s[e],o):null}function C(e){var t,n,a,o;for("string"==typeof e&&(e=[e]),t=0;t<e.length;t++)a=S((n=e[t].split("|"))[0]),o=S(n[1]),r[a]=o,s[a]=n[0],r[o]=a,s[o]=n[1]}function z(e){var t="X"===e._f||"x"===e._f;return!(!e._a||void 0!==e._tzm||t)}function T(e){"undefined"!=typeof console&&"function"==typeof console.error&&console.error(e)}function I(t){var n=Array.prototype.slice.call(arguments,0,-1),r=arguments[arguments.length-1],a=D(r),s=e.utc.apply(null,n);return a&&!e.isMoment(t)&&z(s)&&s.add(a.parse(s),"minutes"),s.tz(r),s}(l<2||2===l&&u<6)&&T("Moment Timezone requires Moment.js >= 2.6.0. You are using Moment.js "+e.version+". See momentjs.com"),h.prototype={_set:function(e){this.name=e.name,this.abbrs=e.abbrs,this.untils=e.untils,this.offsets=e.offsets,this.population=e.population},_index:function(e){var t,n=+e,r=this.untils;for(t=0;t<r.length;t++)if(n<r[t])return t},countries:function(){var e=this.name;return Object.keys(a).filter((function(t){return-1!==a[t].zones.indexOf(e)}))},parse:function(e){var t,n,r,a,s=+e,o=this.offsets,i=this.untils,l=i.length-1;for(a=0;a<l;a++)if(t=o[a],n=o[a+1],r=o[a?a-1:a],t<n&&I.moveAmbiguousForward?t=n:t>r&&I.moveInvalidForward&&(t=r),s<i[a]-6e4*t)return o[a];return o[l]},abbr:function(e){return this.abbrs[this._index(e)]},offset:function(e){return T("zone.offset has been deprecated in favor of zone.utcOffset"),this.offsets[this._index(e)]},utcOffset:function(e){return this.offsets[this._index(e)]}},y.prototype.scoreOffsetAt=function(e){this.offsetScore+=Math.abs(this.zone.utcOffset(e.at)-e.offset),this.zone.abbr(e.at).replace(/[^A-Z]/g,"")!==e.abbr&&this.abbrScore++},I.version="0.5.34",I.dataVersion="",I._zones=n,I._links=r,I._names=s,I._countries=a,I.add=k,I.link=C,I.load=function(e){k(e.zones),C(e.links),function(e){var t,n,r,s;if(e&&e.length)for(t=0;t<e.length;t++)n=(s=e[t].split("|"))[0].toUpperCase(),r=s[1].split(" "),a[n]=new v(n,r)}(e.countries),I.dataVersion=e.version},I.zone=D,I.zoneExists=function e(t){return e.didShowError||(e.didShowError=!0,T("moment.tz.zoneExists('"+t+"') has been deprecated in favor of !moment.tz.zone('"+t+"')")),!!D(t)},I.guess=function(e){return t&&!e||(t=N()),t},I.names=function(){var e,t=[];for(e in s)s.hasOwnProperty(e)&&(n[e]||n[r[e]])&&s[e]&&t.push(s[e]);return t.sort()},I.Zone=h,I.unpack=m,I.unpackBase60=d,I.needsOffset=z,I.moveInvalidForward=!0,I.moveAmbiguousForward=!1,I.countries=function(){return Object.keys(a)},I.zonesForCountry=function(e,t){var n;if(n=(n=e).toUpperCase(),!(e=a[n]||null))return null;var r=e.zones.sort();return t?r.map((function(e){return{name:e,offset:D(e).utcOffset(new Date)}})):r};var O,_=e.fn;function A(e){return function(){return this._z?this._z.abbr(this):e.call(this)}}function j(e){return function(){return this._z=null,e.apply(this,arguments)}}e.tz=I,e.defaultZone=null,e.updateOffset=function(t,n){var r,a=e.defaultZone;if(void 0===t._z&&(a&&z(t)&&!t._isUTC&&(t._d=e.utc(t._a)._d,t.utc().add(a.parse(t),"minutes")),t._z=a),t._z)if(r=t._z.utcOffset(t),Math.abs(r)<16&&(r/=60),void 0!==t.utcOffset){var s=t._z;t.utcOffset(-r,n),t._z=s}else t.zone(r,n)},_.tz=function(t,n){if(t){if("string"!=typeof t)throw new Error("Time zone name must be a string, got "+t+" ["+typeof t+"]");return this._z=D(t),this._z?e.updateOffset(this,n):T("Moment Timezone has no data for "+t+". See http://momentjs.com/timezone/docs/#/data-loading/."),this}if(this._z)return this._z.name},_.zoneName=A(_.zoneName),_.zoneAbbr=A(_.zoneAbbr),_.utc=j(_.utc),_.local=j(_.local),_.utcOffset=(O=_.utcOffset,function(){return arguments.length>0&&(this._z=null),O.apply(this,arguments)}),e.tz.setDefault=function(t){return(l<2||2===l&&u<9)&&T("Moment Timezone setDefault() requires Moment.js >= 2.9.0. You are using Moment.js "+e.version+"."),e.defaultZone=t?D(t):null,e};var Z=e.momentProperties;return"[object Array]"===Object.prototype.toString.call(Z)?(Z.push("_z"),Z.push("_a")):Z&&(Z._z=null),e}))},7624:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return U}});var r=n(2982),a=n(4578),s=n(4217),o=(n(2496),n(5186)),i=new(function(e){function t(t){var n;return(n=e.call(this,t)||this).signature="ls",n.aliases=["l"],n}return(0,a.Z)(t,e),t.prototype.handle=function(e,t){var n="~"===t.props.directory?t.props.dirListing:t.props.dirListing.find((function(e){return e.name===t.props.directory})).children;return{output:s.default.createElement("div",{className:"-la"===e[1]||"-l"===e[1]?"grid grid-cols-7 gap-x-3 grid-flow-row auto-cols-min":"flex gap-3"},"-la"===e[1]||"-l"===e[1]?s.default.createElement("p",{className:"col-span-7"},"total 0"):"","-la"===e[1]?s.default.createElement(s.default.Fragment,null,s.default.createElement("div",null,"drwxr-xr-x"),s.default.createElement("div",null,"7"),s.default.createElement("div",null,"josh"),s.default.createElement("div",null,"josh"),s.default.createElement("div",null,"160"),s.default.createElement("div",null,"Aug 10 22:54"),s.default.createElement("div",{className:"text-blue-400"},"."),s.default.createElement("div",null,"drwxr-xr-x@"),s.default.createElement("div",null,"1"),s.default.createElement("div",null,"josh"),s.default.createElement("div",null,"josh"),s.default.createElement("div",null,"4320"),s.default.createElement("div",null,"Aug 10 23:09"),s.default.createElement("div",{className:"text-blue-400"},"..")):"",n.map((function(t){return"-la"===e[1]||"-l"===e[1]?s.default.createElement(s.default.Fragment,null,s.default.createElement("div",null,"-rw-r--r--"),s.default.createElement("div",null,"2"),s.default.createElement("div",null,"josh"),s.default.createElement("div",null,"staff"),s.default.createElement("div",null,"0"),s.default.createElement("div",null,"Aug 10 22:55"),s.default.createElement("div",{className:"children"in t&&t.children.length>0?"text-blue-400":"text-white"},t.name)):s.default.createElement("p",{className:"children"in t&&t.children.length>0?"text-blue-400":"text-white"},t.name)})))}},t}(s.default.Component)),l=new(function(e){function t(t){var n;return(n=e.call(this,t)||this).signature="clear",n.aliases=["clr"],n}return(0,a.Z)(t,e),t.prototype.handle=function(e,t){return t.setState({output:[]}),{preventDefault:!0}},t}(s.default.Component)),u=new(function(e){function t(t){var n;return(n=e.call(this,t)||this).signature="cd",n.aliases=[],n}return(0,a.Z)(t,e),t.prototype.handle=function(e,t){var n=/..\/(.*)/,r=e[1],a=t.props.dirListing;if(n.test(r)&&(r=n.exec(r)[1]),"."===r)return{output:""};if(".."===r||"..."===r||"~"===r||"/"===r||void 0===r||0===r.trim().length)return{output:"",setDirectory:"~"};var s=a.find((function(e){return e.name===r}));return void 0!==s?s.children.length>0?{output:"",setDirectory:r}:{output:"cd: not a directory: "+r}:{output:"cd: no such file or directory: "+r}},t}(s.default.Component)),c="undefined"!=typeof window,d=new(function(e){function t(t){var n;return(n=e.call(this,t)||this).signature="open",n.aliases=[],n}return(0,a.Z)(t,e),t.prototype.handle=function(e,t){var n=("~"===t.props.directory?t.props.dirListing:t.props.dirListing.find((function(e){return e.name===t.props.directory})).children).find((function(t){return t.name===e[1]}));if(void 0!==n&&c){var r="~"===t.props.directory?"/":"/"+t.props.directory+"/";return"home.webloc"===e[1]&&(e[1]=""),"link"in n?(window.open(n.link,"_blank"),{preventDefault:!0}):(window.location.href=""+r+e[1].replace(".webloc",""),{preventDefault:!0})}return{output:"cd: no such file or directory: "+e[1]}},t}(s.default.Component)),f=new(function(e){function t(t){var n;return(n=e.call(this,t)||this).signature="exit",n.aliases=["disconnect"],n}return(0,a.Z)(t,e),t.prototype.handle=function(e,t){return{setDisconnected:!0}},t}(s.default.Component)),p=new(function(e){function t(t){var n;return(n=e.call(this,t)||this).signature="whoami",n.aliases=[],n}return(0,a.Z)(t,e),t.prototype.handle=function(e,t){return{output:"josh"}},t}(s.default.Component)),m=new(function(e){function t(t){var n;return(n=e.call(this,t)||this).signature="ping",n.aliases=[],n}return(0,a.Z)(t,e),t.prototype.handle=function(e,t){var n=e[1];return void 0===n?{output:"ping: host is required"}:{setFile:n,setTitle:"ping "+n,setView:"ping",output:""}},t}(s.default.Component)),h=new(function(e){function t(t){var n;return(n=e.call(this,t)||this).signature="echo",n.aliases=[],n}return(0,a.Z)(t,e),t.prototype.handle=function(e,t){return{output:e.splice(1).join(" ").replace(/\"/g,"")}},t}(s.default.Component)),v=new(function(e){function t(t){var n;return(n=e.call(this,t)||this).signature="nano",n.aliases=["cat","vim","vi"],n}return(0,a.Z)(t,e),t.prototype.handle=function(e,t){return void 0===("~"===t.props.directory?t.props.dirListing:t.props.dirListing.find((function(e){return e.name===t.props.directory})).children).find((function(t){return t.name===e[1]}))?{output:"nano: no such file or directory: "+e[1]}:{setTitle:"nano -v",setView:"nano",setFile:e[1]}},t}(s.default.Component)),g=n(9201),y=n.n(g),w=(n(3583),new(function(e){function t(t){var n;return(n=e.call(this,t)||this).signature="date",n.aliases=[],n}return(0,a.Z)(t,e),t.prototype.handle=function(e,t){var n=Intl.DateTimeFormat().resolvedOptions().timeZone;return{output:y()().tz(n).format("ddd MMM D HH:mm:ss zz YYYY")}},t}(s.default.Component))),E=new(function(e){function t(t){var n;return(n=e.call(this,t)||this).signature="sudo",n.aliases=[],n}return(0,a.Z)(t,e),t.prototype.handle=function(e,t){return 1===e.length?{output:s.default.createElement("p",{dangerouslySetInnerHTML:{__html:"\n            <pre>usage: sudo -h | -K | -k | -V\nusage: sudo -v [-AknS] [-g group] [-h host] [-p prompt] [-u user]\nusage: sudo -l [-AknS] [-g group] [-h host] [-p prompt] [-U user] [-u user] [command]\nusage: sudo [-AbEHknPS] [-C num] [-D directory] [-g group] [-h host] [-p prompt] [-R directory] [-T timeout] [-u user] [VAR=value] [-i|-s]\nusage: sudo -e [-AknS] [-C num] [-D directory] [-g group] [-h host] [-p prompt] [-R directory] [-T timeout] [-u user] file ...</pre>\n        "}})}:{output:s.default.createElement("p",null,"Username is not in the sudoers file. This incident will be reported.")}},t}(s.default.Component)),b=new(function(e){function t(t){var n;return(n=e.call(this,t)||this).signature="history",n.aliases=[],n}return(0,a.Z)(t,e),t.prototype.handle=function(e,t){if("-c"===e[1])return{output:"History file deleted. Reload the session to see its effects."};var n=t.props.history.map((function(e){return{isSystem:!0,directory:"~",input:"history",output:[e]}}));return console.log([].concat((0,r.Z)(t.props.output),(0,r.Z)(n))),{bulk:!0,output:n}},t}(s.default.Component)),x=new(function(e){function t(t){var n;return(n=e.call(this,t)||this).signature="access",n.aliases=[],n}return(0,a.Z)(t,e),t.prototype.handle=function(e,t){return"access"===e[0]&&"main"===e[1]&&"security"===e[2]&&"grid"===e[3]?{setTitle:"access",setView:"jurassic-park",output:"access: PERMISSION DENIED....and..."}:{output:"access: PERMISSION DENIED."}},t}(s.default.Component)),N=(n(5444),n(6380)),S=n(4280),k=n(4926),D=n(2776),C=n(5861),z=n(7757),T=n.n(z),I=n(4877),O=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={currentInput:"",inputDisabled:!1,output:n.props.output},n.terminalInput=s.default.createRef(),n}(0,a.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){if(this.focusInput(),(0,I.jU)()){var e=window.location.search;e.startsWith("?command=")&&(this.setState({inputDisabled:!0}),this.autoTypeCommand(e.replace("?command=","")),(0,I.jU)()&&window.history.pushState({},"","/terminal"))}},n.autoTypeCommand=function(e){var t=this;void 0===e&&(e=""),e=decodeURIComponent(e);var n=setInterval.prototype,r=0;n=setInterval((function(){if(r>=e.length)return clearInterval(n),t.setState({inputDisabled:!1}),void t.handleKeyDown({code:"Enter"});t.setState({currentInput:""+t.state.currentInput+e[r]}),r++}),150)},n.focusInput=function(){this.terminalInput.current.focus()},n.resetInput=function(){this.setState({currentInput:""})},n.handleKeyDown=function(e){return"Enter"===e.code||"Enter"===e.key?this.handleCommand():"Tab"===e.code||"Tab"===e.key?this.handleAutoComplete(e):"KeyC"!==e.code&&"KeyC"!==e.key||!e.ctrlKey?void 0:this.sendEmptyOutput()},n.sendEmptyOutput=function(){var e={directory:this.props.directory,input:this.state.currentInput,output:[""]};this.props.onDirectoryChange(this.props.directory),this.setState({output:[].concat((0,r.Z)(this.state.output),[e])}),this.resetInput()},n.handleAutoComplete=function(e){var t=this;e.preventDefault();var n=this.state.currentInput.split(" "),r=("~"===this.props.directory?this.props.dirListing:this.props.dirListing.find((function(e){return e.name===t.props.directory})).children).find((function(e){return e.name.startsWith(n[1])}));void 0!==r&&this.setState({currentInput:n[0]+" "+r.name})},n.handleCommand=function(){var e=(0,C.Z)(T().mark((function e(){var t,n,a,s,o=this;return T().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t={},n=this.state.currentInput.split(" "),a={directory:this.props.directory,input:this.state.currentInput,output:["zsh: command not found: "+n[0]]},this.props.onDirectoryChange(this.props.directory),!(s=this.props.commands.find((function(e){return e.signature===n[0]||-1!==e.aliases.indexOf(n[0])})))){e.next=17;break}if(!("bulk"in(t=s.handle(n,this)))){e.next=13;break}return e.next=10,new Promise((function(e,t){o.setState({output:[].concat((0,r.Z)(o.state.output),[{directory:"~",input:o.state.currentInput,output:[""]}])},(function(){return e()}))}));case 10:a=t.output,e.next=15;break;case 13:a.output[0]=t.output,this.props.onHistory(n.join(" "));case 15:e.next=18;break;case 17:this.props.onHistory(n.join(" "));case 18:"setDisconnected"in t&&this.props.onDisconnect(t.setDisconnected),"setTitle"in t&&this.props.onSetTitle(t.setTitle),"setFile"in t&&this.props.onSetFile(t.setFile),"setState"in t&&this.setState(t.setState),"setDirectory"in t&&this.props.onDirectoryChange(t.setDirectory),"preventDefault"in t||(a=[].concat((0,r.Z)(this.state.output),"bulk"in t?(0,r.Z)(a):[a]),this.setState({output:a},(function(){o.props.onOutput(o.state.output),"setView"in t&&o.props.onSetView(t.setView)}))),this.resetInput();case 25:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),n.render=function(){var e=this;return s.default.createElement("div",{onClick:function(){return e.focusInput()},className:"grow "+(this.props.disconnected?"":"cursor-text")},this.state.output.map((function(e){return s.default.createElement("div",{className:"text-md flex flex-col items-start"},"isSystem"in e?"":s.default.createElement("div",{className:"flex w-full items-center select-none"},s.default.createElement("span",{className:"flex gap-3 items-center"},s.default.createElement("span",{className:"text-green-400"},"➜"),s.default.createElement("span",{className:"text-blue-400"},e.directory)),s.default.createElement("p",{className:"text-sm grow pl-2"},e.input)),s.default.createElement("div",null,e.output.map((function(e){return s.default.createElement("div",{className:"text-sm grow select-none"},e)}))))})),s.default.createElement("div",{className:"text-md flex items-center"},s.default.createElement("span",{className:"flex gap-3 items-center select-none"},s.default.createElement("span",{className:"text-green-400"},"➜"),s.default.createElement("span",{className:"text-blue-400"},this.props.directory)),s.default.createElement("input",{disabled:this.props.disconnected||this.state.inputDisabled,ref:this.terminalInput,value:this.state.currentInput,onChange:function(t){return e.setState({currentInput:t.target.value})},onKeyDown:function(t){return e.handleKeyDown(t)},autoComplete:"off",spellCheck:!1,type:"text",className:"text-sm grow pl-2 bg-black outline-none border-none"})))},t}(s.default.Component),_=O,A=function(e){function t(t){var n,r=("~"===(n=e.call(this,t)||this).props.directory?n.props.dirListing:n.props.dirListing.find((function(e){return e.name===n.props.directory})).children).find((function(e){return e.name===n.props.file})),a="https://welford.me/"+("home"===n.props.file.replace(".webloc","")?"":("~"===n.props.directory?"":n.props.directory+"/")+n.props.file.replace(".webloc",""));return"link"in r&&(a=r.link),n.state={blinkTimeout:setTimeout.prototype,clearErrorTimeout:setTimeout.prototype,content:'<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">\n<plist version="1.0">\n<dict>\n        <key>URL</key>\n        <string>'+a+"</string>\n</dict>\n</plist>"},n.terminalInput=s.default.createRef(),n}(0,a.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.focusInput()},n.focusInput=function(e){this.terminalInput.current.focus()},n.showError=function(){var e=this;clearTimeout(this.state.clearErrorTimeout),this.setState({showError:!0}),this.setState({clearErrorTimeout:setTimeout((function(){e.setState({showError:!1})}),5e3)})},n.handleKeyDown=function(e){var t;"KeyX"!==e.code&&"KeyX"!==e.key||!e.ctrlKey?e.ctrlKey||"ArrowUp"!==e.code&&"ArrowUp"!==e.key&&"ArrowRight"!==e.code&&"ArrowRight"!==e.key&&"ArrowDown"!==e.code&&"ArrowDown"!==e.key&&"ArrowLeft"!==e.code&&"ArrowLeft"!==e.key&&(e.preventDefault(),null===(t=document.querySelector(".caretover"))||void 0===t||t.classList.remove("blink"),this.showError()):this.props.onSetView("default")},n.handleKeyUp=function(){clearTimeout(this.state.blinkTimeout),this.setState({blinkTimeout:setTimeout((function(){var e;null===(e=document.querySelector(".caretover"))||void 0===e||e.classList.add("blink")}),1e3)})},n.handleSelect=function(e){var t,n="mouseup"===e.nativeEvent.type,r=window.getSelection();(t=document.querySelector(".caretover"))&&t.classList.remove("caretover","blink"),"SPAN"==r.focusNode.parentNode.tagName&&(r.focusNode.parentNode.classList.add("caretover"),n&&r.focusNode.parentNode.classList.add("blink"))},n.render=function(){var e=this;return s.default.createElement("div",{className:"grow flex flex-col",onClick:function(t){return e.focusInput(t)}},s.default.createElement("div",{className:"cursor-text bg-[#999999] text-sm text-black px-5 flex"},s.default.createElement("p",null,"UW PICO 5.09"),s.default.createElement("div",{className:"flex grow justify-center"},s.default.createElement("p",null,"File: ",this.props.file))),s.default.createElement("div",{className:"grow flex relative"},s.default.createElement("div",{className:"absolute top-0 left-0 w-full h-full"}),s.default.createElement("div",{className:"inline-block grow"},s.default.createElement("pre",{onSelect:function(t){return e.handleSelect(t)},onClick:function(e){return e.preventDefault()},suppressContentEditableWarning:!0,ref:this.terminalInput,contentEditable:!0,onKeyDown:function(t){return e.handleKeyDown(t)},onKeyUp:function(t){return e.handleKeyUp()},className:"text-[#999999] outline-none grow caret-transparent",spellCheck:!1},this.state.content.split("").map((function(e){return s.default.createElement("span",{className:"relative"},e)}))))),this.state.showError?s.default.createElement("div",{className:"flex justify-center"},s.default.createElement("p",{className:"bg-[#999999] text-black text-sm"},"[ Key illegal in VIEW mode ]")):"",s.default.createElement("div",{className:"cursor-text"},s.default.createElement("div",{class:"grid grid-cols-3 lg:grid-cols-6 auto-rows-max text-[#999999]"},s.default.createElement("div",{className:"flex gap-2 text-sm"},s.default.createElement("span",{className:"bg-[#999999] text-black"},"^G"),s.default.createElement("span",null,"Get Help")),s.default.createElement("div",{className:"flex gap-2 text-sm"},s.default.createElement("span",{className:"bg-[#999999] text-black"},"^O"),s.default.createElement("span",null,"WriteOut")),s.default.createElement("div",{className:"flex gap-2 text-sm"},s.default.createElement("span",{className:"bg-[#999999] text-black"},"^R"),s.default.createElement("span",null,"Read File")),s.default.createElement("div",{className:"flex gap-2 text-sm"},s.default.createElement("span",{className:"bg-[#999999] text-black"},"^Y"),s.default.createElement("span",null,"Prev Pg")),s.default.createElement("div",{className:"flex gap-2 text-sm"},s.default.createElement("span",{className:"bg-[#999999] text-black"},"^K"),s.default.createElement("span",null,"Cut Text")),s.default.createElement("div",{className:"flex gap-2 text-sm"},s.default.createElement("span",{className:"bg-[#999999] text-black"},"^C"),s.default.createElement("span",null,"Cur Pos")),s.default.createElement("div",{className:"flex gap-2 text-sm"},s.default.createElement("span",{className:"bg-[#999999] text-black"},"^X"),s.default.createElement("span",null,"Exit")),s.default.createElement("div",{className:"flex gap-2 text-sm"},s.default.createElement("span",{className:"bg-[#999999] text-black"},"^J"),s.default.createElement("span",null,"Justify")),s.default.createElement("div",{className:"flex gap-2 text-sm"},s.default.createElement("span",{className:"bg-[#999999] text-black"},"^W"),s.default.createElement("span",null,"Where is")),s.default.createElement("div",{className:"flex gap-2 text-sm"},s.default.createElement("span",{className:"bg-[#999999] text-black"},"^V"),s.default.createElement("span",null,"Next Pg")),s.default.createElement("div",{className:"flex gap-2 text-sm"},s.default.createElement("span",{className:"bg-[#999999] text-black"},"^U"),s.default.createElement("span",null,"UnCut Text")),s.default.createElement("div",{className:"flex gap-2 text-sm"},s.default.createElement("span",{className:"bg-[#999999] text-black"},"^T"),s.default.createElement("span",null,"To Spell")))))},t}(s.default.Component),j=function(e){function t(t){var n;return(n=e.call(this,t)||this).abortFetch=!1,n.handleKeyUp=function(e){"KeyC"!==e.code&&"KeyC"!==e.key||!e.ctrlKey||n.props.onSetView("default")},n.state={output:(0,r.Z)(n.props.output)},n}(0,a.Z)(t,e);var n=t.prototype;return n.sendOutput=function(e){var t=this;void 0===e&&(e=""),this.setState({output:[].concat((0,r.Z)(this.state.output),[{isSystem:!0,directory:this.props.directory,output:[e]}])},(function(){t.props.onOutput(t.state.output)}))},n.pingDomain=function(e,t,n){var r=this;void 0===e&&(e=""),void 0===t&&(t=!1),void 0===n&&(n=0);var a=(new Date).getTime(),s=new AbortController;setTimeout((function(){return s.abort()}),5e3),this.abortFetch||(t?setTimeout((function(){fetch(e,{signal:s.signal,mode:"no-cors"}).then((function(){n<5?(r.sendOutput("64 bytes from "+e+": icmp_seq=6 ttl=54 time="+((new Date).getTime()-a)+" ms"),r.pingDomain(e,!0,n+1)):r.props.onSetView("default")})).catch((function(t){console.log(t);var a="AbortError"===t.name?"Request timed out.":"ping: cannot resolve "+e+": Unknown host";n<5?r.pingDomain(e,!0,n+1):r.props.onSetView("default"),r.sendOutput(a)}))}),800):fetch(e,{signal:s.signal,mode:"no-cors"}).then((function(){r.sendOutput("64 bytes from "+e+": icmp_seq=6 ttl=54 time="+((new Date).getTime()-a)+" ms"),r.pingDomain(e,!0,n+1)})).catch((function(t){var a="AbortError"===t.name?"Request timed out.":"ping: cannot resolve "+e+": Unknown host";n<5?r.pingDomain(e,!0,n+1):r.props.onSetView("default"),r.sendOutput(a)})))},n.componentDidMount=function(){var e=this.props.file;e.startsWith("https://")&&!e.startsWith("http://")||(e=("https://"+e).replace("http://","")),this.pingDomain(e),document.addEventListener("keyup",this.handleKeyUp,!1)},n.componentWillUnmount=function(){this.abortFetch=!0,document.removeEventListener("keyup",this.handleKeyUp,!1)},n.render=function(){return s.default.createElement("div",{className:"grow"},this.state.output.map((function(e){return s.default.createElement("div",{className:"text-md flex flex-col items-start"},"isSystem"in e?"":s.default.createElement("div",{className:"flex w-full items-center select-none"},s.default.createElement("span",{className:"flex gap-3 items-center"},s.default.createElement("span",{className:"text-green-400"},"➜"),s.default.createElement("span",{className:"text-blue-400"},e.directory)),s.default.createElement("p",{className:"text-sm grow pl-2"},e.input)),s.default.createElement("div",null,e.output.map((function(e){return s.default.createElement("div",{className:"text-sm grow select-none"},e)}))))})))},t}(s.default.Component),Z=function(e){function t(t){var n;return(n=e.call(this,t)||this).handleKeyUp=function(e){"KeyX"!==e.code&&"KeyX"!==e.key||!e.ctrlKey||n.props.onSetView("default")},n.state={showGif:!1,output:(0,r.Z)(n.props.output)},n}(0,a.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this,t=setInterval.prototype;setTimeout((function(){setInterval((function(){if(e.state.output.length>25)return clearInterval(t),void e.setState({showGif:!0});e.setState({output:[].concat((0,r.Z)(e.state.output),[{isSystem:!0,directory:e.props.directory,input:"access main security grid",output:["YOU DIDN'T SAY THE MAGIC WORD!"]}])})}),100)}),500),document.addEventListener("keyup",this.handleKeyUp,!1)},n.componentWillUnmount=function(){document.removeEventListener("keyup",this.handleKeyUp,!1)},n.render=function(){return this.state.showGif?(setTimeout((function(){(0,I.jU)()&&document.querySelector("audio").play()}),500),s.default.createElement("div",{className:"flex grow items-center justify-center"},s.default.createElement("img",{src:"/jurassic-park.gif"}),s.default.createElement("audio",{autoPlay:!0,loop:!0,preload:"auto"},s.default.createElement("source",{src:"/jurassic-park.wav",type:"audio/wav"})))):s.default.createElement("div",{className:"grow"},this.state.output.map((function(e){return s.default.createElement("div",{className:"text-md flex flex-col items-start"},"isSystem"in e?"":s.default.createElement("div",{className:"flex w-full items-center select-none"},s.default.createElement("span",{className:"flex gap-3 items-center"},s.default.createElement("span",{className:"text-green-400"},"➜"),s.default.createElement("span",{className:"text-blue-400"},e.directory)),s.default.createElement("p",{className:"text-sm grow pl-2"},e.input)),s.default.createElement("div",null,e.output.map((function(e){return s.default.createElement("div",{className:"text-sm grow select-none"},e)}))))})))},t}(s.default.Component),L=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={currentView:"default",modalOpen:!1,disconnected:!1,directory:"~",currentFile:null,history:[],output:[{isSystem:!0,input:"",output:["Welcome to Ubuntu 20.04.3 LTS (GNU/Linux 5.4.0-88-generic x86_64)"]},{isSystem:!0,input:"",output:["*** System restart required ***"]},{isSystem:!0,input:"",output:["Last login: "+y()().subtract(1,"hours").format("ddd MMM D HH:mm:ss YYYY")+" from 1.1.1.1"]}],dirListing:[{name:"home.webloc",contents:"",children:[]},{name:"music.webloc",contents:"",children:[]},{name:"resources.webloc",contents:"",children:[]},{name:"resume.webloc",contents:"",children:[]},{name:"socials",link:"https://l.welford.me",children:[{name:"github.webloc",link:"https://link.welford.me/github"},{name:"linkedin.webloc",link:"https://link.welford.me/linkedin"},{name:"twitter.webloc",link:"https://link.welford.me/twitter"},{name:"instagram.webloc",link:"https://link.welford.me/instagram"},{name:"spotify.webloc",link:"https://link.welford.me/spotify"},{name:"lastfm.webloc",link:"https://link.welford.me/lastfm"}]}],commands:[u,E,p,d,i,l,f,v,m,w,h,b,x]},n.terminal=s.default.createRef(),n}(0,a.Z)(t,e);var n=t.prototype;return n.handleOutput=function(e){this.setState({output:e}),this.terminal.current.scrollTo(0,this.terminal.current.scrollHeight)},n.render=function(){var e,t=this,n=s.default.createElement(_,{output:this.state.output,onHistory:function(e){return t.setState({history:[].concat((0,r.Z)(t.state.history),[e])})},onOutput:function(e){return t.handleOutput(e)},onSetFile:function(e){return t.setState({currentFile:e})},onSetView:function(e){return t.setState({currentView:e})},onSetTitle:function(e){return t.setState({terminalTitle:e})},onDirectoryChange:function(e){return t.setState({directory:e})},onDisconnect:function(e){return t.setState({disconnected:e})},directory:this.state.directory,commands:this.state.commands,history:this.state.history,dirListing:this.state.dirListing,disconnected:this.state.disconnected}),a=s.default.createElement(A,{file:this.state.currentFile,directory:this.state.directory,dirListing:this.state.dirListing,onSetView:function(e){return t.setState({currentView:e})},onSetTitle:function(e){return t.setState({terminalTitle:e})}}),i=s.default.createElement(Z,{onSetView:function(e){return t.setState({currentView:e})},directory:this.state.directory,output:this.state.output}),l=s.default.createElement(j,{onOutput:function(e){return t.handleOutput(e)},onSetView:function(e){return t.setState({currentView:e})},directory:this.state.directory,file:this.state.currentFile,output:this.state.output});return"default"===this.state.currentView&&(e=n),"nano"===this.state.currentView&&(e=a),"ping"===this.state.currentView&&(e=l),"jurassic-park"===this.state.currentView&&(e=i),s.default.createElement("div",{className:"mt-32"},s.default.createElement("div",{className:"flex justify-center mr-12"},s.default.createElement("div",{className:"flex flex-col w-full md:w-4/5 items-end"},s.default.createElement("a",{className:"bg-gray-600 text-white px-6 py-2 rounded-t-lg",href:"https://github.com/Welfordian/portfolio-gatsby/blob/main/src/pages/terminal.js",target:"_blank",rel:"noopener"},s.default.createElement(S.G,{className:"mr-3",icon:k.gJF}),"Source"))),s.default.createElement("div",{className:"flex justify-center grow"},s.default.createElement("div",{className:"h-[42rem] flex flex-col rounded-lg shadow-xl shadow-gray-400 dark:shadow-md dark:shadow-gray-800 w-full md:w-4/5"},s.default.createElement("div",{className:"flex items-center h-6 justify-between rounded-t-lg bg-gray-600 border-b border-gray-500 text-center text-black"},s.default.createElement("div",{className:"flex"},s.default.createElement("div",{className:"flex ml-2 justify-center items-center text-center border-red-900 bg-red-500 shadow-inner rounded-full w-3 h-3"},"nano"===this.state.currentView?s.default.createElement("div",{className:"flex items-center text-center bg-[#8C1A11] shadow-inner rounded-full w-1 h-1"}):""),s.default.createElement("div",{className:"ml-2 border-yellow-900 bg-yellow-500 shadow-inner rounded-full w-3 h-3"}),s.default.createElement("div",{className:"ml-2 border-green-900 bg-green-500 shadow-inner rounded-full w-3 h-3"})),s.default.createElement("div",{className:"mx-auto select-none"},"default"===this.state.currentView?s.default.createElement("p",{className:"text-center text-gray-300 text-sm"},"josh@welford.me: ",this.state.directory):s.default.createElement("p",{className:"text-center text-gray-300 text-sm"},this.state.terminalTitle)),s.default.createElement("div",null,s.default.createElement(S.G,{onClick:function(){return t.setState({modalOpen:!0})},className:"text-white mr-2 cursor-pointer",icon:k.sph}))),s.default.createElement("div",{ref:this.terminal,className:"relative grow flex flex-col bg-black text-white overflow-y-scroll rounded-b-lg px-2 py-1"},e,s.default.createElement("div",{className:"absolute top-0 left-0 w-full h-full bg-gray-500 bg-opacity-75 "+(this.state.disconnected?"":"hidden"),"aria-labelledby":"modal-title",role:"dialog","aria-modal":"true"},s.default.createElement("div",{className:"flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0"},s.default.createElement("div",{className:"relative bg-gray-800 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full"},s.default.createElement("div",{className:"px-4 pt-5 pb-5 sm:p-6 sm:pb-6"},s.default.createElement("div",{className:"sm:flex sm:items-start flex-grow"},s.default.createElement("div",{className:"mt-3 text-center sm:mt-0 sm:text-left flex-grow"},s.default.createElement("h3",{className:"select-none text-xl leading-6 font-medium text-gray-200 text-center my-4",id:"modal-title"},"Session Terminated")))))))))),s.default.createElement(D.Z,{title:"Available commands",open:this.state.modalOpen,buttons:[s.default.createElement("button",{className:"bg-black text-white px-3 py-4 w-36",onClick:function(){return t.setState({modalOpen:!1})}},"Close")]},this.state.commands.map((function(e){return s.default.createElement("p",{className:"text-white"},e.signature,e.aliases.length>0?" (aliases: "+e.aliases.map((function(e){return e})).join(", ")+")":"")}))),s.default.createElement(o.q,{htmlAttributes:{class:"watch-together"}}))},t}(s.default.Component),U=(0,N.$j)((function(e){return{posts:e.posts}}))(L)}}]);
//# sourceMappingURL=component---src-pages-terminal-js-188c0ea41800f42ca7b9.js.map