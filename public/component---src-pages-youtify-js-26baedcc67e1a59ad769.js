(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[876],{7228:function(t){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r},t.exports.__esModule=!0,t.exports.default=t.exports},379:function(t,e,n){var r=n(7228);t.exports=function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}},t.exports.__esModule=!0,t.exports.default=t.exports},8203:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return P}});var r=n(4578),a=n(7294),s=n(120),i=n(3147),o=n.n(i),l=n(9157),c=(n(3801),n(2982)),u=n(1070),d=n.n(u),p=n(1465),m=n(9117),h=(n(4068),n(9201)),f=n.n(h),y=function(t){function e(){return t.apply(this,arguments)||this}return(0,r.Z)(e,t),e.prototype.render=function(){var t=this;return a.createElement("div",{className:"mt-12"},a.createElement("p",{className:"text-4xl"},"Playlist"),a.createElement("div",null,a.createElement("table",{className:"min-w-max w-full table-auto mt-12"},a.createElement("thead",{className:"bg-gray-200 text-gray-600 uppercase text-sm leading-normal"},a.createElement("tr",null,a.createElement("th",{className:"py-6"}),a.createElement("th",{className:"text-left"},"Title"),a.createElement("th",{className:"text-left"},"Album"),a.createElement("th",{className:"text-left"},"Date Added"),a.createElement("th",{className:"text-left"},"Duration"))),a.createElement("tbody",{className:"text-gray-600 text-sm font-light"},this.props.playlist.map((function(e,n){return a.createElement("tr",{className:"border-b border-gray-200 hover:bg-gray-100 cursor-pointer",onClick:function(){return t.props.onChange(n)}},a.createElement("td",{className:"pl-3 py-3"},t.props.currentVideoIndex===n?a.createElement(m.Levels,{size:40,speed:.5}):a.createElement("img",{className:"w-10",src:e.track.album.images[0].url})),a.createElement("td",null,a.createElement("div",{className:"flex flex-col"},a.createElement("p",{dangerouslySetInnerHTML:{__html:e.track.name}}),a.createElement("p",{dangerouslySetInnerHTML:{__html:e.track.name}}))),a.createElement("td",null,a.createElement("p",{dangerouslySetInnerHTML:{__html:e.track.album.name}})),a.createElement("td",null,a.createElement("p",{dangerouslySetInnerHTML:{__html:f()(e.added_at).fromNow()}})),a.createElement("td",null,a.createElement("p",{dangerouslySetInnerHTML:{__html:new Date(e.track.duration_ms).toISOString().slice(11,19)}})))}))))))},e}(a.Component),v=y,g="undefined"!=typeof window,w=function(t){function e(e){var n;return(n=t.call(this,e)||this).state={isPlaylist:n.props.isPlaylist},n}(0,r.Z)(e,t);var n=e.prototype;return n.savePlaylist=function(){var t=this;d().post("https://api.welford.me/v1/playlists",{videos:this.props.videos,tracks:this.props.tracks}).then((function(e){g&&window.history.pushState({},"","https://welford.me/youtify/"+e.data.slug),t.setState({isPlaylist:!0})}))},n.render=function(){return this.state.isPlaylist?null:a.createElement("div",null,a.createElement("button",{className:"text-black",onClick:this.savePlaylist.bind(this)},"Save Playlist"))},e}(a.Component),x=function(t){function e(e){var n;return(n=t.call(this,e)||this).state={processedIndex:0,tracks:n.props.tracks,videos:n.props.videos,currentVideoIndex:0,youtubeKey:"AIzaSyBMDzO5UCJyXyo1FD1a4ShFeTY0M0UFnbA"},n}(0,r.Z)(e,t);var n=e.prototype;return n.componentDidMount=function(){var t=this;this.props.slug.length?this.determineSavedPlaylist():d().get("https://api.spotify.com/v1/playlists/"+this.props.playlist,{headers:{Authorization:"Bearer "+this.props.token}}).then((function(e){t.setState({tracks:e.data.tracks.items}),t.startProcessing()}))},n.determineSavedPlaylist=function(){var t=this;this.props.slug.length>0&&d().get("https://api.welford.me/v1/playlists/"+this.props.slug).then((function(e){t.setState({tracks:e.data.tracks,videos:e.data.videos})}))},n.startProcessing=function(){var t=this,e=this.state.tracks[this.state.processedIndex];d().get("https://www.googleapis.com/youtube/v3/search?maxResults=1&key="+this.state.youtubeKey+"&maxResults=1&q="+e.track.name+" - "+e.track.artists[0].name+"&type=video&part=snippet").then((function(e){t.setState({videos:[].concat((0,c.Z)(t.state.videos),[e.data.items[0]])}),t.state.processedIndex<=t.state.tracks.length&&(t.setState({processedIndex:t.state.processedIndex+1}),t.startProcessing())}))},n.hasNextVideo=function(){return this.state.currentVideoIndex+1<this.state.videos.length},n.hasPreviousVideo=function(){return this.state.currentVideoIndex>0},n.nextVideo=function(){this.state.currentVideoIndex+1<this.state.videos.length&&this.setState({currentVideoIndex:this.state.currentVideoIndex+1})},n.previousVideo=function(){this.state.currentVideoIndex>0&&this.setState({currentVideoIndex:this.state.currentVideoIndex-1})},n.switchVideo=function(t){this.setState({currentVideoIndex:t})},n.render=function(){return a.createElement("div",null,this.state.videos.length?a.createElement("div",{className:"flex flex-col justify-between"},a.createElement("div",{className:"w-full"},a.createElement(p.Z,{className:"w-full",containerClassName:"aspect-w-16 aspect-h-9",videoId:this.state.videos[this.state.currentVideoIndex].id.videoId,opts:{height:"auto",width:"100%",playerVars:{autoplay:1}},onEnd:this.nextVideo.bind(this)}),a.createElement("div",{className:"flex justify-between mt-4"},a.createElement("button",{className:this.hasPreviousVideo()?"text-black":"text-gray-300",onClick:this.previousVideo.bind(this)},"Previous"),a.createElement(w,{videos:this.state.videos,tracks:this.state.tracks,isPlaylist:this.props.slug.length}),a.createElement("button",{className:this.hasNextVideo()?"text-black":"text-gray-300",onClick:this.nextVideo.bind(this)},"Next"))),a.createElement(v,{onChange:this.switchVideo.bind(this),currentVideoIndex:this.state.currentVideoIndex,playlist:this.state.tracks})):null)},e}(a.Component),b=function(t){function e(){return t.apply(this,arguments)||this}(0,r.Z)(e,t);var n=e.prototype;return n.handlePlaylistUpdate=function(t){var e=t.target;try{var n=new RegExp(/\/playlist.*\?/);this.props.onPlaylist(n.exec(e.value)[0].replace("/playlist/","").replace("?",""))}catch(r){}},n.render=function(){return a.createElement("div",null,a.createElement("p",{className:"text-4xl"},"Spotify Playlist URL"),a.createElement("input",{className:"border-4 border-black w-full px-2 py-3 mt-8",type:"text",onChange:this.handlePlaylistUpdate.bind(this)}))},e}(a.Component),E=b,k="undefined"!=typeof window,N=function(t){function e(e){var n;return(n=t.call(this,e)||this).state={playlist:k&&window.location.pathname.replace("/youtify/","").length>0?window.location.pathname.replace("/youtify/",""):null,slug:k?window.location.pathname.replace("/youtify/",""):null,tracks:[],videos:[]},n}return(0,r.Z)(e,t),e.prototype.render=function(){var t=this;return a.createElement("div",{className:"mt-12"},this.state.playlist?a.createElement(x,{playlist:this.state.playlist,tracks:this.state.tracks,videos:this.state.videos,token:this.props.token,slug:this.state.slug}):a.createElement(E,{onPlaylist:function(e){t.setState({playlist:e})},playlist:this.state.playlist}))},e}(a.Component),S=N,I=(n(4280),"undefined"!=typeof window),P=function(t){function e(e){var n;return(n=t.call(this,e)||this).state={token:o().get("spotifyAuthToken"),playlist:I&&window.location.pathname.replace("/youtify/","").length>0?window.location.pathname.replace("/youtify/",""):null},n}(0,r.Z)(e,t);var n=e.prototype;return n.gotToken=function(t){this.setState({token:t}),I&&(window.location.hash="")},n.render=function(){var t=this;return a.createElement(a.Fragment,null,this.state.token||this.state.playlist?a.createElement(s.GN.Provider,{value:this.state.token},a.createElement(S,{token:this.state.token})):a.createElement("div",{className:"flex flex-col items-center justify-center mt-12"},a.createElement(l.yb,{redirectUri:"https://welford.me/youtify/",clientID:"6d08c3a931c74f95813b4f181ef0ad50",scopes:[l.Y.userReadPrivate,"user-read-email"],title:"Connect to Spotify",logoClassName:"w-8 mr-8 fill-current text-white",btnClassName:"flex bg-black text-white items-center px-8 py-3 w-full md:w-2/4 lg:w-1/4 text-center justify-center",onAccessToken:function(e){t.gotToken(e)}}),a.createElement("div",{className:"mt-4 w-full md:w-2/4 lg:w-1/4 right-0 md:ml-0 p-4 md:mb-4 bg-opacity-90 bg-gray-700 shadow shadow-current shadow-md",role:"alert"},a.createElement("div",{className:"flex items-center"},a.createElement("svg",{"aria-hidden":"true",className:"w-5 h-5 mr-2 text-white",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{"fill-rule":"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z","clip-rule":"evenodd"})),a.createElement("span",{className:"sr-only"},"Info"),a.createElement("h3",{className:"text-lg font-medium text-white"},"YouTube Quota")),a.createElement("div",{className:"mt-2 text-sm text-white"},"The YouTube API is awful. Use a small playlist to avoid hitting the quota."))))},e}(a.Component)},4068:function(){},7326:function(t,e,n){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,{Z:function(){return r}})},5671:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,{Z:function(){return r}})},3144:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}n.d(e,{Z:function(){return a}})},1120:function(t,e,n){"use strict";function r(t){return r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},r(t)}n.d(e,{Z:function(){return r}})},136:function(t,e,n){"use strict";n.d(e,{Z:function(){return a}});var r=n(9611);function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&(0,r.Z)(t,e)}},2963:function(t,e,n){"use strict";n.d(e,{Z:function(){return s}});var r=n(1002),a=n(7326);function s(t,e){if(e&&("object"===(0,r.Z)(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return(0,a.Z)(t)}},1002:function(t,e,n){"use strict";function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}n.d(e,{Z:function(){return r}})}}]);
//# sourceMappingURL=component---src-pages-youtify-js-26baedcc67e1a59ad769.js.map