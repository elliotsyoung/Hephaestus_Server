(this.webpackJsonphefwithtoolbox=this.webpackJsonphefwithtoolbox||[]).push([[0],{22:function(e,t,n){e.exports=n(40)},27:function(e,t,n){},30:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(9),i=n.n(r),c=(n(27),n(13)),l=n(1),s=n(3),u=n(4),p=n(6),m=n(5),h=n(7),b=n(10),y=n.n(b),f=(n(28),n(29),n(30),n(12)),O=(n(39),function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"chatSettings"},a.a.createElement("table",null,a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"Robot Voice Selection:"),a.a.createElement("td",null,a.a.createElement("select",{id:"pet-select",onChange:this.props.handleVoiceChange},a.a.createElement("option",{value:""},"--Please choose an option--"),a.a.createElement("option",{value:"BB8"},"BB8 Voice"),a.a.createElement("option",{value:"Salli"},"Salli"),a.a.createElement("option",{value:"Kimberly"},"Kimberly"),a.a.createElement("option",{value:"Kendra"},"Kendra"),a.a.createElement("option",{value:"Ivy"},"Ivy"),a.a.createElement("option",{value:"Matthew"},"Matthew"),a.a.createElement("option",{value:"Justin"},"Justin"),a.a.createElement("option",{value:"Joey"},"Joey"),a.a.createElement("option",{value:"Cristiano"},"Cristiano")))))))}}]),t}(o.Component));function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var j=Object(f.WidthProvider)(f.Responsive),k=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"toolbox__items__item",onClick:this.props.onTakeItem.bind(void 0,this.props.item)},this.props.item.i)}}]),t}(a.a.Component),E=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"toolbox"},a.a.createElement("span",{className:"toolbox__title"},a.a.createElement("center",null,"Toolbox")),a.a.createElement("div",{className:"toolbox__items"},this.props.items.map((function(t){return a.a.createElement(k,{key:t.i,item:t,onTakeItem:e.props.onTakeItem})}))))}}]),t}(a.a.Component),g=function(e){function t(){var e,n;Object(s.a)(this,t);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(a)))).state={currentBreakpoint:"lg",compactType:"vertical",mounted:!1,layouts:{lg:n.props.initialLayout},toolbox:{lg:[]}},n.onBreakpointChange=function(e){n.setState((function(t){return{currentBreakpoint:e,toolbox:d({},t.toolbox,Object(l.a)({},e,t.toolbox[e]||t.toolbox[t.currentBreakpoint]||[]))}}))},n.onTakeItem=function(e){n.setState((function(t){return{toolbox:d({},t.toolbox,Object(l.a)({},t.currentBreakpoint,t.toolbox[t.currentBreakpoint].filter((function(t){return t.i!==e.i})))),layouts:d({},t.layouts,Object(l.a)({},t.currentBreakpoint,[].concat(Object(c.a)(t.layouts[t.currentBreakpoint]),[e])))}}))},n.onPutItem=function(e){n.setState((function(t){return{toolbox:d({},t.toolbox,Object(l.a)({},t.currentBreakpoint,[].concat(Object(c.a)(t.toolbox[t.currentBreakpoint]||[]),[e]))),layouts:d({},t.layouts,Object(l.a)({},t.currentBreakpoint,t.layouts[t.currentBreakpoint].filter((function(t){return t.i!==e.i}))))}}))},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.setState({mounted:!0})}},{key:"generateDOM",value:function(){var e=this;return y.a.map(this.state.layouts[this.state.currentBreakpoint],(function(t){return a.a.createElement("div",{key:t.i},a.a.createElement("div",{className:"hide-button",onClick:e.onPutItem.bind(e,t)},"\xd7"),a.a.createElement("span",{className:"text"},a.a.createElement(O,{handleVoiceChange:e.handleVoiceChange})))}))}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(E,{items:this.state.toolbox[this.state.currentBreakpoint]||[],onTakeItem:this.onTakeItem}),a.a.createElement(j,Object.assign({},this.props,{layouts:this.state.layouts,onBreakpointChange:this.onBreakpointChange,onLayoutChange:this.onLayoutChange,measureBeforeMount:!1,useCSSTransforms:this.state.mounted,compactType:this.state.compactType,preventCollision:!this.state.compactType}),this.generateDOM()))}}]),t}(a.a.Component);g.defaultProps={className:"layout",rowHeight:30,onLayoutChange:function(){},cols:{lg:12,md:10,sm:6,xs:4,xxs:2},initialLayout:y.a.map(y.a.range(0,1),(function(e,t){return{x:0,y:0,w:4,h:2,i:t.toString()}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[22,1,2]]]);
//# sourceMappingURL=main.61001c14.chunk.js.map