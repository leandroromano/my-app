(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),s=n.n(c),o=(n(14),n(8)),l=n(1),u=n(2),i=n(4),m=n(3),d=n(5),b=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-3 col-sm-1"},r.a.createElement("span",{className:this.getBadgedClases()},this.formatCount())),r.a.createElement("div",{className:"col-3 col-sm-1"},r.a.createElement("button",{className:"btn btn-secondary btn-sm m-2",onClick:function(){return e.props.onIncrement(e.props.counter.id)}}," ","+")),r.a.createElement("div",{className:"col-3 col-sm-1"},r.a.createElement("button",{className:"btn btn-secondary btn-sm m-2",onClick:function(){return e.props.onDecrement(e.props.counter.id)}}," ","-")),r.a.createElement("div",{className:"col-3 col-sm-1"},r.a.createElement("button",{className:"btn btn-danger btn-sm m-2",onClick:function(){return e.props.onDelete(e.props.counter.id)}}," ","Delete"," ")))}},{key:"getBadgedClases",value:function(){var e="badge m-3 badge-";return e+=0===this.props.counter.value?"warning":"primary"}},{key:"formatCount",value:function(){var e=this.props.counter.value;return 0===e?"Zero":e}}]),t}(a.Component),p=function(e){var t=e.onDelete,n=e.onIncrement,a=e.onDecrement,c=e.onReset,s=e.onAdd,o=e.counters.map((function(e){return r.a.createElement(b,{key:e.id,counter:e,onDelete:t,onIncrement:n,onDecrement:a})}));return r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-success btn-sm m-2",onClick:s},"Add"),r.a.createElement("button",{className:"btn btn-primary btn-sm m-2",onClick:c},"Reset"),o)},v=function(e){var t=e.totalCounters;return r.a.createElement("nav",{class:"navbar navbar-light bg-light"},r.a.createElement("a",{class:"navbar-brand",href:"#"}," ","Total"," ",r.a.createElement("span",{className:"badge badge-pill badge-secondary"},t)))},h=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).handleReset=function(){var t=e.state.counters.map((function(e){return e.value=0,e}));e.setState({counters:t})},e.handleIncrement=function(t){var n=e.state.counters.map((function(e){return e.id===t&&e.value++,e}));e.setState({updatedCounters:n})},e.handleDecrement=function(t){var n=e.state.counters.map((function(e){return e.id===t&&e.value>0&&e.value--,e}));e.setState({updatedCounters:n})},e.handleDelete=function(t){var n=e.state.counters.filter((function(e){return e.id!==t})),a=1;n.map((function(e){return e.id=a,a++,e})),e.setState({counters:n})},e.handleAdd=function(){var t;0===e.state.counters.length?t={id:1,value:0}:t={id:e.state.counters.length+1,value:0};var n=Object(o.a)(e.state.counters);n[t.id-1]=t,e.setState({counters:n})},e.state={counters:[{id:1,value:0}]},e}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(v,{totalCounters:this.state.counters.filter((function(e){return e.value>0})).length}),r.a.createElement("main",{className:"container"},r.a.createElement(p,{onReset:this.handleReset,onIncrement:this.handleIncrement,onDecrement:this.handleDecrement,onDelete:this.handleDelete,onAdd:this.handleAdd,counters:this.state.counters})))}}]),t}(a.Component);s.a.render(r.a.createElement(h,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.d8338385.chunk.js.map