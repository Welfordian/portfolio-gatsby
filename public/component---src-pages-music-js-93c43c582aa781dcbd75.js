"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[610],{6996:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(4578),a=r(7294),s=(r(4280),function(){function e(e){this.el=e,this.chars="!<>-_\\/[]{}—=+*^?#________",this.update=this.update.bind(this)}var t=e.prototype;return t.setText=function(e){var t=this,r=this.el.innerText,n=Math.max(r.length,e.length),a=new Promise((function(e){return t.resolve=e}));this.queue=[];for(var s=0;s<n;s++){var l=r[s]||"",c=e[s]||"",o=Math.floor(40*Math.random()),i=o+Math.floor(40*Math.random());this.queue.push({from:l,to:c,start:o,end:i})}return cancelAnimationFrame(this.frameRequest),this.frame=0,this.update(),a},t.update=function(){for(var e="",t=0,r=0,n=this.queue.length;r<n;r++){var a=this.queue[r],s=a.from,l=a.to,c=a.start,o=a.end,i=a.char;this.frame>=o?(t++,e+=l):this.frame>=c?((!i||Math.random()<.28)&&(i=this.randomChar(),this.queue[r].char=i),e+='<span class="dud">'+i+"</span>"):e+=s}this.el.innerHTML=e,t===this.queue.length?this.resolve():(this.frameRequest=requestAnimationFrame(this.update),this.frame++)},t.randomChar=function(){return this.chars[Math.floor(Math.random()*this.chars.length)]},e}()),l=function(e){function t(){return e.apply(this,arguments)||this}(0,n.Z)(t,e);var r=t.prototype;return r.componentDidMount=function(){var e=["PHP","Laravel","Javascript","Vue","React","Debian","Ubuntu","Docker"],t=document.querySelector(".skills-ticker"),r=new s(t),n=0;!function t(){r.setText(e[n]).then((function(){setTimeout(t,800)})),n=(n+1)%e.length}()},r.render=function(){return a.createElement("p",{className:"text-center mt-6 skills-ticker text-2xl"},a.createElement("span",{className:"dud"},"^"),"HP")},t}(a.Component),c=function(e){function t(){return e.apply(this,arguments)||this}return(0,n.Z)(t,e),t.prototype.render=function(){return a.createElement("div",{className:"flex flex-col justify-center mx-4 px-4"},this.props.hideTagline?"":a.createElement("div",{className:"flex flex-col items-center justify-center"},a.createElement("h1",{className:"text-3xl md:text-4xl text-center"},"Joshua Welford"),a.createElement("p",{className:"mt-4"},"Software Engineer"),a.createElement(l,null)))},t}(a.Component),o=c},8735:function(e,t,r){r.r(t),r.d(t,{default:function(){return k}});var n=r(4578),a=r(7294),s=r(1070),l=r.n(s),c=(r(4068),r(7839)),o=r(8221),i=r(9201),u=r.n(i),m=r(4280),p=r(4926),f=r(9117),h=function(e){function t(){var t;return(t=e.call(this)||this).state={isOverflowed:!1,playMarquee:!0},t}return(0,n.Z)(t,e),t.prototype.render=function(){var e=this;return a.createElement("a",{className:"relative w-full h-[450px] md:w-[450px] mb-5 hover:scale-105 transition-all hover:shadow-lg hover:shadow-gray-700 duration-300 hover:rotate-1",target:"_blank",rel:"noopener",href:this.props.track.track.external_urls.spotify,onMouseEnter:function(){return e.setState({playMarquee:!1})},onMouseLeave:function(){return e.setState({playMarquee:!0})}},a.createElement("div",{className:"flex flex-col justify-between text-white w-full h-[450px] md:w-[450px]",style:{background:"url("+this.props.track.track.album.images[0].url+") no-repeat center center",backgroundSize:"cover"}},a.createElement("div",{className:"font-bold text-xl px-4 py-6 text-center bg-black/[0.6]"},this.state.isOverflowed?a.createElement(c.Z,{gradient:!1,speed:30,play:this.state.playMarquee},this.props.track.track.name):a.createElement(o.Z,{onChange:function(t){return e.setState({isOverflowed:t})}},a.createElement("p",null,this.props.track.track.name))),a.createElement("div",{className:"flex flex-col px-4 py-6 bg-black/[0.6]"},a.createElement("p",{className:"font-semibold"},a.createElement(m.G,{className:"mr-3",icon:p.YZr}),this.props.track.track.artists[0].name),"@attr"in this.props.track?a.createElement("p",{className:"mt-3 font-semibold flex items-end"},a.createElement(f.Levels,{className:"mr-4"}),"Listening Now"):a.createElement("p",{className:"mt-3 font-semibold"},a.createElement(m.G,{className:"mr-4",icon:p.SZw}),u()(this.props.track.played_at).fromNow(!0)," ago"))))},t}(a.Component),d=function(e){function t(){return e.apply(this,arguments)||this}return(0,n.Z)(t,e),t.prototype.render=function(){return a.createElement("div",{className:"flex flex-wrap justify-between pt-5 mt-7"},this.props.tracks.map((function(e){return a.createElement(h,{track:e})})))},t}(a.Component),x=(r(3801),r(6380)),y=function(e){function t(){return e.apply(this,arguments)||this}return(0,n.Z)(t,e),t.prototype.render=function(){return a.createElement("div",{className:"flex flex-wrap justify-between pt-5 mt-7"},new Array(this.props.count).fill(null).map((function(e){return a.createElement("div",{className:"relative w-full h-[450px] md:w-[450px] mb-5",target:"_blank",rel:"noopener"},a.createElement("div",{className:"bg-gray-400 flex flex-col justify-between text-white w-full h-[450px] md:w-[450px]"},a.createElement("div",{className:"font-bold text-xl px-4 py-6 text-center bg-black/[0.6]"},a.createElement("p",{className:"h-6 bg-gray-500 animate-pulse-fast"}," ")),a.createElement("div",{className:"flex flex-col px-4 py-6 bg-black/[0.6]"},a.createElement("p",{className:"font-semibold flex h-6"},a.createElement(m.G,{className:"mr-3",icon:p.YZr}),a.createElement("p",{className:"w-1/2 h-5 bg-gray-500 animate-pulse-fast"}," ")),a.createElement("p",{className:"mt-3 font-semibold flex h-5"},a.createElement(m.G,{className:"mr-4",icon:p.SZw}),a.createElement("p",{className:"w-1/2 h-5 bg-gray-500 animate-pulse-fast"}," ")))))})))},t}(a.Component),E=r(6996),v=function(e){function t(){return e.apply(this,arguments)||this}(0,n.Z)(t,e);var r=t.prototype;return r.componentDidMount=function(){var e=this.props.tracks,t=this.props.lastFmTracksLoaded;e.length||l().get("https://api.welford.me/spotify/recent").then((function(e){t(e.data)}))},r.render=function(){return a.createElement(a.Fragment,null,a.createElement(E.Z,null),a.createElement("p",{className:"text-4xl mt-24"},"Recently Played"),this.props.tracks.length?a.createElement(d,{tracks:this.props.tracks}):a.createElement(y,{count:24}))},t}(a.Component),k=(0,x.$j)((function(e){return{tracks:e.tracks}}),(function(e){return{lastFmTracksLoaded:function(t){return e({type:"LASTFM_TRACKS_LOADED",tracks:t})}}}))(v)},4068:function(){}}]);
//# sourceMappingURL=component---src-pages-music-js-93c43c582aa781dcbd75.js.map