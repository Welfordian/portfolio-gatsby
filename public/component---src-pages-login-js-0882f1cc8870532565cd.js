"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[875],{5742:function(e,t,a){a.r(t),a.d(t,{default:function(){return r}});var n=a(4578),o=a(4217),s=(a(5444),a(4877)),l=(a(2496),function(e){function t(){var t;return(t=e.call(this)||this).state={hideTimeout:setTimeout.prototype},t}(0,n.Z)(t,e);var a=t.prototype;return a.componentWillUnmount=function(){clearTimeout(this.state.hideTimeout)},a.componentDidUpdate=function(e,t,a){var n=this;!0===this.props.show&&!1===e.show&&this.setState({clearTimeout:setTimeout((function(){n.props.onHide()}),4500)})},a.render=function(){return this.props.show?o.default.createElement("div",{className:"absolute top-0 right-0 bg-black px-4 py-3 shadow-lg text-white -mt-12"},this.props.message):""},t}(o.default.Component)),r=function(e){function t(t){var a;return(a=e.call(this,t)||this).handleUpdate=function(e){var t;a.setState(((t={})[e.target.name]=e.target.value,t))},a.handleSubmit=function(e){e.preventDefault(),(0,s.jc)(a.state).then((function(e){(0,s.jU)()&&(window.location.href="/dashboard/")})).catch((function(e){a.setState({username:"",password:""}),a.setState({showNotification:!0,notificationMessage:e.error})}))},a.state={showNotification:!1,notificationMessage:"",username:"",password:""},a}return(0,n.Z)(t,e),t.prototype.render=function(){var e=this;return(0,s.jl)()&&(0,s.jU)()&&(window.location.href="/dashboard/"),o.default.createElement("div",{className:"flex justify-center mt-32"},o.default.createElement("div",{className:"flex flex-col bg-black text-white w-1/2 p-12 shadow-2xl shadow-gray-700 relative"},o.default.createElement(l,{show:this.state.showNotification,onHide:function(){return e.setState({showNotification:!1})},message:this.state.notificationMessage}),o.default.createElement("form",{className:"flex flex-col gap-6",method:"post",onSubmit:function(t){e.handleSubmit(t)}},o.default.createElement("label",{className:"flex flex-col gap-4"},o.default.createElement("span",{className:"text-xl"},"Username"),o.default.createElement("input",{autoComplete:"off",type:"text",name:"username",value:this.state.username,onChange:this.handleUpdate,className:"focus:bg-gray-200 focus:text-black border-4 border-white bg-black text-white p-2 outline-none w-full pr-9 rounded-none"})),o.default.createElement("label",{className:"flex flex-col gap-4"},o.default.createElement("span",{className:"text-xl"},"Password"),o.default.createElement("input",{autoComplete:"off",type:"password",name:"password",value:this.state.password,onChange:this.handleUpdate,className:"focus:bg-gray-200 focus:text-black border-4 border-white bg-black text-white p-2 outline-none w-full pr-9 rounded-none"})),o.default.createElement("button",{className:"bg-white p-3 text-black mt-3 hover:bg-gray-300"},"Log In"))))},t}(o.default.Component)}}]);
//# sourceMappingURL=component---src-pages-login-js-0882f1cc8870532565cd.js.map