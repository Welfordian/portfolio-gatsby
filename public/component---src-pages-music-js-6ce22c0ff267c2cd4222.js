(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[610],{6996:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var a=r(4578),n=r(7294),i=(r(4280),function(){function e(e){this.el=e,this.chars="!<>-_\\/[]{}—=+*^?#________",this.update=this.update.bind(this)}var t=e.prototype;return t.setText=function(e){var t=this,r=this.el.innerText,a=Math.max(r.length,e.length),n=new Promise((function(e){return t.resolve=e}));this.queue=[];for(var i=0;i<a;i++){var s=r[i]||"",l=e[i]||"",o=Math.floor(40*Math.random()),c=o+Math.floor(40*Math.random());this.queue.push({from:s,to:l,start:o,end:c})}return cancelAnimationFrame(this.frameRequest),this.frame=0,this.update(),n},t.update=function(){for(var e="",t=0,r=0,a=this.queue.length;r<a;r++){var n=this.queue[r],i=n.from,s=n.to,l=n.start,o=n.end,c=n.char;this.frame>=o?(t++,e+=s):this.frame>=l?((!c||Math.random()<.28)&&(c=this.randomChar(),this.queue[r].char=c),e+='<span class="dud">'+c+"</span>"):e+=i}this.el.innerHTML=e,t===this.queue.length?this.resolve():(this.frameRequest=requestAnimationFrame(this.update),this.frame++)},t.randomChar=function(){return this.chars[Math.floor(Math.random()*this.chars.length)]},e}()),s=function(e){function t(){return e.apply(this,arguments)||this}(0,a.Z)(t,e);var r=t.prototype;return r.componentDidMount=function(){var e=["PHP","Laravel","Javascript","Vue","React","Debian","Ubuntu","Docker"],t=document.querySelector(".skills-ticker"),r=new i(t),a=0;!function t(){r.setText(e[a]).then((function(){setTimeout(t,800)})),a=(a+1)%e.length}()},r.render=function(){return n.createElement("p",{className:"text-center mt-6 skills-ticker text-2xl dark:text-gray-300"},n.createElement("span",{className:"dud"},"^"),"HP")},t}(n.Component),l=function(e){function t(){return e.apply(this,arguments)||this}return(0,a.Z)(t,e),t.prototype.render=function(){return n.createElement("div",{className:"flex flex-col justify-center mx-4 px-4"},this.props.hideTagline?"":n.createElement("div",{className:"flex flex-col items-center justify-center"},n.createElement("h1",{className:"text-3xl md:text-4xl text-center dark:text-gray-300"},"Joshua Welford"),n.createElement("p",{className:"mt-4 dark:text-gray-300"},"Software Engineer"),n.createElement(s,null)))},t}(n.Component),o=l},4223:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return M}});var a=r(4578),n=r(7294),i=(r(4068),r(7839)),s=r(8221),l=r(9201),o=r.n(l),c=r(4280),u=r(4926),m=r(1810),p=r(9293),f=r(591),d=function(e){function t(t){var r;return(r=e.call(this,t)||this).state={modalOpen:!1,preventClick:!0},r.children=n.createRef(),r.buttons=[n.createElement("button",{className:"bg-black text-white px-3 py-4",onClick:function(){return r.continueToVideo()}},"Continue to video"),n.createElement("button",{className:"bg-black text-white px-3 py-4",onClick:function(){return r.setState({modalOpen:!1})}},"Cancel")],r}(0,a.Z)(t,e);var r=t.prototype;return r.componentDidMount=function(){var e=this;this.children.current.querySelector("a").addEventListener("click",(function(t){e.state.preventClick&&(t.preventDefault(),e.setState({modalOpen:!0}))}))},r.continueToVideo=function(){var e=this,t=this.children.current.querySelector("a");this.setState({preventClick:!1},(function(){t.click(),e.setState({preventClick:!0,modalOpen:!1})}))},r.render=function(){return n.createElement("div",{ref:this.children},this.props.children,n.createElement(f.Z,{title:"Disclaimer",open:this.state.modalOpen,buttons:this.buttons},n.createElement("p",null,"The URLs for the YouTube videos are generated automatically via the YouTube Search API. While this is usually pretty accurate, the URLs for these videos aren't manually verified and may not be the intended video.")))},t}(n.Component),h=function(e){function t(t){var r;return(r=e.call(this,t)||this).state={isOverflowed:!1,playMarquee:!0,isPlayingPreview:!1,previewProgress:0,popoverOpen:!1},r.audioRef=n.createRef(),r.explicit=n.createElement("div",{className:"bg-gray-700 shadow-md text-white px-2 py-1"},"Explicit"),r}(0,a.Z)(t,e);var r=t.prototype;return r.componentDidMount=function(){var e=this;this.audioRef.current.onended=function(){e.setState({isPlayingPreview:!1,previewProgress:0})},this.audioRef.current.onpause=function(){e.setState({isPlayingPreview:!1,previewProgress:0})},requestAnimationFrame(this.previewProgress.bind(this))},r.togglePreview=function(){this.state.isPlayingPreview?(this.audioRef.current.pause(),this.audioRef.current.currentTime=0,this.setState({isPlayingPreview:!1,previewProgress:0})):(document.querySelectorAll("audio").forEach((function(e){return e.pause()})),this.audioRef.current.play(),this.setState({isPlayingPreview:!0}))},r.previewProgress=function(){this.state.isPlayingPreview&&this.setState({previewProgress:this.audioRef.current.currentTime/this.audioRef.current.duration*100}),requestAnimationFrame(this.previewProgress.bind(this))},r.render=function(){var e=this;return n.createElement("div",{className:"dark:hover:shadow-gray-800 relative w-full h-[340px] md:h-[250px] md:w-[287px] transition-all hover:shadow-lg hover:shadow-gray-700 duration-300 select-none",onMouseEnter:function(){return e.setState({playMarquee:!1})},onMouseLeave:function(){return e.setState({playMarquee:!0})}},n.createElement("div",{className:"flex flex-col justify-between text-white w-full h-[340px] md:h-[250px] md:w-[287px]",style:{background:"url("+this.props.track.album_image+") no-repeat center center",backgroundSize:"cover"}},n.createElement("div",{className:"font-bold text-sm px-4 py-3 text-center bg-black/[0.6] flex"},this.props.track.explicit?n.createElement("div",{className:"bg-gray-700 px-2 mr-2 inline",title:"Explicit",onMouseEnter:function(){return e.setState({popoverOpen:!0})},onMouseLeave:function(){return e.setState({popoverOpen:!1})}},n.createElement(m.Popover,{isOpen:this.state.popoverOpen,content:this.explicit},n.createElement("p",{className:"inline p-0 m-0"},"E"))):n.createElement("span",null),this.state.isOverflowed?n.createElement(i.Z,{gradient:!1,speed:30,play:this.state.playMarquee},this.props.track.name):n.createElement(s.Z,{onChange:function(t){return e.setState({isOverflowed:t})}},n.createElement("p",null,this.props.track.name))),n.createElement("div",{className:"flex justify-center w-auto px-4 py-2"},null!==this.props.track.preview_url?n.createElement("div",null,this.state.isPlayingPreview?n.createElement(c.G,{onClick:function(){e.togglePreview()},icon:u.Bg$,size:"2x",className:"text-white drop-shadow-md mr-8 cursor-pointer",title:"Stop Preview"}):n.createElement(c.G,{onClick:function(){e.togglePreview()},icon:u.zc,size:"2x",className:"text-white drop-shadow-md mr-8 cursor-pointer",title:"Play Preview"}),n.createElement("audio",{className:"hidden",ref:this.audioRef},n.createElement("source",{src:this.props.track.preview_url,type:"audio/mpeg"}))):n.createElement("div",null),n.createElement("a",{target:"_blank",rel:"noopener",href:this.props.track.spotify_url,className:"relative cursor-pointer"},n.createElement("div",{className:"absolute w-7 h-7 rounded-full bg-white top-[10%] left-[2%]"}),n.createElement(c.G,{icon:p.Ha7,size:"2x",className:"text-[#1DB954] drop-shadow-md mr-8"})),n.createElement(d,null,n.createElement("a",{target:"_blank",rel:"noopener",href:this.props.track.youtube_url,className:"relative cursor-pointer"},n.createElement("div",{className:"absolute w-3 h-3 bg-white top-0 left-[40%]"}),n.createElement(c.G,{icon:p.opf,size:"2x",className:"text-[#FF0000] drop-shadow-md"})))),n.createElement("div",{className:"flex flex-col px-4 py-3 text-sm bg-black/[0.6] relative"},n.createElement("div",{className:"absolute top-0 left-0 bg-white h-1 -mt-1 mix-blend-difference",style:{width:this.state.previewProgress+"%"}}),n.createElement("div",{className:"font-semibold flex items-center"},n.createElement(c.G,{className:"mr-3",icon:u.YZr}),this.props.track.artist),n.createElement("p",{className:"mt-3 font-semibold"},n.createElement(c.G,{className:"mr-4",icon:u.SZw}),o()(this.props.track.played_at).fromNow(!0)," ago"))))},t}(n.Component),v=r(1070),y=r.n(v),g=function(e){function t(){return e.apply(this,arguments)||this}return(0,a.Z)(t,e),t.prototype.render=function(){return n.createElement("div",{className:"flex flex-wrap justify-between"},new Array(this.props.count).fill(null).map((function(e){return n.createElement("div",{className:"relative w-full h-[250px] md:w-[287px] mb-2",target:"_blank",rel:"noopener"},n.createElement("div",{className:"bg-gray-400 flex flex-col justify-between text-white w-full h-[250px] md:w-[287px]"},n.createElement("div",{className:"font-bold text-xl px-4 py-3 text-center bg-black/[0.6]"},n.createElement("p",{className:"h-5 bg-gray-500 animate-pulse-fast"}," ")),n.createElement("div",{className:"flex flex-col px-4 py-3 bg-black/[0.6]"},n.createElement("p",{className:"font-semibold flex h-3"},n.createElement(c.G,{className:"mr-3",icon:u.YZr}),n.createElement("p",{className:"w-2/3 h-3 bg-gray-500 animate-pulse-fast"}," ")),n.createElement("p",{className:"mt-3 font-semibold flex h-3 mt-6 mb-1"},n.createElement(c.G,{className:"mr-4",icon:u.SZw}),n.createElement("p",{className:"w-1/2 h-3 bg-gray-500 animate-pulse-fast"}," ")))))})))},t}(n.Component),E=r(5744),x=r.n(E),w=function(e){function t(t){var r;return(r=e.call(this,t)||this).state={page:1,tracks:[],loadingMore:!1},r.container=n.createRef(),r}(0,a.Z)(t,e);var r=t.prototype;return r.componentDidMount=function(){this.props.tracks.length||this.loadTracks(!0)},r.loadTracks=function(e){var t=this;void 0===e&&(e=!1),!e&&this.state.isLoadingMore||(this.setState({isLoadingMore:!0}),y().get("https://api.welford.me/spotify/recent?limit=20&page="+this.state.page).then((function(e){t.props.onLoad(e.data.data),t.setState({page:t.state.page+1}),t.setState({isLoadingMore:!1})})))},r.render=function(){var e=this;return n.createElement("div",{className:"w-full"},n.createElement("p",{className:"text-4xl dark:text-gray-300"},"Recently Played"),n.createElement("div",{className:"flex flex-wrap justify-between mt-3 gap-2",ref:this.container},this.props.tracks.length?this.props.tracks.map((function(e){return n.createElement(h,{track:e})})):n.createElement(g,{count:25})),n.createElement("div",{className:"flex justify-center items-center mt-6"},n.createElement("button",{onClick:function(){return e.loadTracks()},className:"bg-gradient-to-tr from-gray-800 via-gray-700 to-gray-900 text-white px-3 py-4 w-36 justify-center flex"},this.state.isLoadingMore?n.createElement(x(),{className:"w-6"}):n.createElement("span",null,"Load More"))))},t}(n.Component),k=r(6380),b=function(e){function t(){return e.apply(this,arguments)||this}return(0,a.Z)(t,e),t.prototype.render=function(){return n.createElement("iframe",{className:"w-full",src:"https://open.spotify.com/embed/playlist/"+this.props.playlist,height:"380",frameBorder:"0",allowFullScreen:"",allow:"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"})},t}(n.Component),N=b,P=(r(5072),r(6996)),C=function(e){function t(){return e.apply(this,arguments)||this}return(0,a.Z)(t,e),t.prototype.render=function(){return n.createElement("div",null,n.createElement(P.Z,null),n.createElement("div",{className:"mt-24 gap-12"},n.createElement(w,{tracks:this.props.tracks,onLoad:this.props.lastFmTracksLoaded}),n.createElement("div",{className:"w-full mt-12"},n.createElement("p",{className:"text-4xl dark:text-gray-300"},"Playlists"),n.createElement("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mt-3"},n.createElement(N,{playlist:"6e8oMgHsl4V4jcw9lhQ9mj"}),n.createElement(N,{playlist:"7ji8f9PubYla3q652Yz6n4"}),n.createElement(N,{playlist:"6YXFiifYX1ItKtimFesUNJ"}),n.createElement(N,{playlist:"5NF6WIrvfy8cWpdfaoh2au"}),n.createElement(N,{playlist:"5YyO8lDKAh2siTh2EDcwYl"}),n.createElement(N,{playlist:"2n96PioY2RL0GriBf8VcTK"}),n.createElement(N,{playlist:"7qU5YlXlr1hQdLK8hFeWxs"}),n.createElement(N,{playlist:"336VFONhuhd44C09b1xntQ"})))))},t}(n.Component),M=(0,k.$j)((function(e){return{tracks:e.tracks}}),(function(e){return{lastFmTracksLoaded:function(t){return e({type:"LASTFM_TRACKS_LOADED",tracks:t})}}}))(C)},4068:function(){},5744:function(e,t,r){var a=r(7294);function n(e){return a.createElement("svg",e,[a.createElement("defs",{key:0},a.createElement("linearGradient",{x1:"8.042%",y1:"0%",x2:"65.682%",y2:"23.865%",id:"a"},[a.createElement("stop",{stopColor:"#fff",stopOpacity:"0",offset:"0%",key:0}),a.createElement("stop",{stopColor:"#fff",stopOpacity:".631",offset:"63.146%",key:1}),a.createElement("stop",{stopColor:"#fff",offset:"100%",key:2})])),a.createElement("g",{fill:"none",fillRule:"evenodd",key:1},a.createElement("g",{transform:"translate(1 1)"},[a.createElement("path",{d:"M36 18c0-9.94-8.06-18-18-18",id:"Oval-2",stroke:"url(#a)",strokeWidth:"2",key:0},a.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"})),a.createElement("circle",{fill:"#fff",cx:"36",cy:"18",r:"1",key:1},a.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"}))]))])}n.defaultProps={viewBox:"0 0 38 38"},e.exports=n,n.default=n}}]);
//# sourceMappingURL=component---src-pages-music-js-6ce22c0ff267c2cd4222.js.map