(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[4],{65:function(t,e,n){"use strict";n.r(e);var a=n(32),i=n(33),s=n(36),r=n(35),c=n(0),o=n(34),u=n.n(o),h=n(8),l=n(1),p=function(t){Object(s.a)(n,t);var e=Object(r.a)(n);function n(){var t;Object(a.a)(this,n);for(var i=arguments.length,s=new Array(i),r=0;r<i;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))).state={lists:[],query:""},t.handleChange=function(e){t.setState({query:e.currentTarget.value})},t.handleSubmit=function(e){var n=t.props,a=n.history,i=n.location;e&&u.a.get("https://api.themoviedb.org/3/search/movie?api_key=8d4e0a5a0c37d4780eefdf617d0feea1&query=".concat(e)).then((function(n){t.setState({lists:n.data.results,query:""}),a.push({pathname:i.pathname,search:"query=".concat(e)})}))},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this.props.location.search,e=this.state.query;this.handleSubmit(void 0===t.split("=")[1]?e:t.split("=")[1])}},{key:"render",value:function(){var t=this,e=this.state,n=e.query,a=e.lists,i=this.props.location;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t.handleSubmit(n)},children:[Object(l.jsx)("input",{type:"text",value:n,onChange:this.handleChange}),Object(l.jsx)("button",{type:"submit",children:"\u0418\u0441\u043a\u0430\u0442\u044c"})]}),Object(l.jsx)("ul",{children:a.map((function(t){return Object(l.jsx)("li",{children:Object(l.jsx)(h.b,{to:{pathname:"/movies/".concat(t.id),state:{from:i}},children:t.title})},t.id)}))})]})}}]),n}(c.Component);e.default=p}}]);
//# sourceMappingURL=movies-page.48cfecf1.chunk.js.map