(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[3],{30:function(t,e,r){t.exports=r(37)},31:function(t,e,r){"use strict";function n(t,e,r,n,o,a,i){try{var c=t[a](i),s=c.value}catch(u){return void r(u)}c.done?e(s):Promise.resolve(s).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function c(t){n(i,o,a,c,s,"next",t)}function s(t){n(i,o,a,c,s,"throw",t)}c(void 0)}))}}r.d(e,"a",(function(){return o}))},37:function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(S){s=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof m?e:m,a=Object.create(o.prototype),i=new P(n||[]);return a._invoke=function(t,e,r){var n=l;return function(o,a){if(n===f)throw new Error("Generator is already running");if(n===v){if("throw"===o)throw a;return I()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=k(i,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=f;var s=h(t,e,r);if("normal"===s.type){if(n=r.done?v:p,s.arg===d)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=v,r.method="throw",r.arg=s.arg)}}}(t,r,i),a}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(S){return{type:"throw",arg:S}}}t.wrap=u;var l="suspendedStart",p="suspendedYield",f="executing",v="completed",d={};function m(){}function y(){}function j(){}var b={};b[a]=function(){return this};var g=Object.getPrototypeOf,w=g&&g(g(N([])));w&&w!==r&&n.call(w,a)&&(b=w);var O=j.prototype=m.prototype=Object.create(b);function x(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(o,a,i,c){var s=h(t[o],t,a);if("throw"!==s.type){var u=s.arg,l=u.value;return l&&"object"===typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(l).then((function(t){u.value=t,i(u)}),(function(t){return r("throw",t,i,c)}))}c(s.arg)}var o;this._invoke=function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}}function k(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,k(t,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=h(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,d;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function N(t){if(t){var r=t[a];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:I}}function I(){return{value:e,done:!0}}return y.prototype=O.constructor=j,j.constructor=y,y.displayName=s(j,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,j):(t.__proto__=j,s(t,c,"GeneratorFunction")),t.prototype=Object.create(O),t},t.awrap=function(t){return{__await:t}},x(L.prototype),L.prototype[i]=function(){return this},t.AsyncIterator=L,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new L(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},x(O),s(O,c,"Generator"),O[a]=function(){return this},O.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=N,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(E),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:N(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},66:function(t,e,r){"use strict";r.r(e);var n=r(30),o=r.n(n);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var s=r(31),u=r(32),h=r(33),l=r(36),p=r(35),f=r(0),v=r(34),d=r.n(v),m=r(8),y=r(2),j=r(1),b=function(t){Object(l.a)(r,t);var e=Object(p.a)(r);function r(){var t;Object(u.a)(this,r);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))).state={casts:[]},t}return Object(h.a)(r,[{key:"componentDidMount",value:function(){var t=Object(s.a)(o.a.mark((function t(){var e,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.props.match.params.movieId,t.next=3,d.a.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=8d4e0a5a0c37d4780eefdf617d0feea1"));case 3:r=t.sent,this.setState({casts:r.data.cast});case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("h1",{children:["cast ",this.props.match.params.movieId]}),Object(j.jsx)("ul",{children:this.state.casts.map((function(t){return Object(j.jsxs)("li",{children:[Object(j.jsx)("p",{children:t.name}),Object(j.jsx)("img",{src:"https://image.tmdb.org/t/p/w200/".concat(t.profile_path),alt:"{cast.name}"})]},t.id)}))})]})}}]),r}(f.Component),g=function(t){Object(l.a)(r,t);var e=Object(p.a)(r);function r(){var t;Object(u.a)(this,r);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))).state={contents:[]},t}return Object(h.a)(r,[{key:"componentDidMount",value:function(){var t=Object(s.a)(o.a.mark((function t(){var e,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.props.match.params.movieId,t.next=3,d.a.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=8d4e0a5a0c37d4780eefdf617d0feea1"));case 3:r=t.sent,this.setState({contents:r.data.results});case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("h1",{children:["Reviews ",this.props.match.params.movieId]}),Object(j.jsx)("ul",{children:this.state.contents.map((function(t){return Object(j.jsx)("li",{children:Object(j.jsx)("p",{children:t.content})},t.id)}))})]})}}]),r}(f.Component),w=function(t){Object(l.a)(r,t);var e=Object(p.a)(r);function r(){var t;Object(u.a)(this,r);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))).state={poster_path:"",backdrop_path:null,homepage:null,vote_average:null,overview:null,title:null,id:null},t}return Object(h.a)(r,[{key:"componentDidMount",value:function(){var t=Object(s.a)(o.a.mark((function t(){var e,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.props.match.params.movieId,t.next=3,d.a.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=8d4e0a5a0c37d4780eefdf617d0feea1"));case 3:r=t.sent,this.setState(c({},r.data));case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this,e=(this.props.match.params.movieId,this.props.location);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("h1",{children:["cast ",this.props.match.params.movieId]}),Object(j.jsx)("button",{type:"button",onClick:function(){return t.props.location.state?t.props.history.push(e.state.from):t.props.history.push("/")},children:"Go back"}),Object(j.jsx)("img",{src:this.state.poster_path,alt:""}),Object(j.jsx)("img",{src:"https://image.tmdb.org/t/p/w200/".concat(this.state.poster_path),alt:""}),Object(j.jsx)("h2",{children:this.state.title}),Object(j.jsx)("h2",{children:this.state.overview}),Object(j.jsx)("h2",{children:this.state.vote_average}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(m.c,{to:"/movies/".concat(this.state.id,"/cast"),className:"NavLink",activeClassName:"NavLink-active",children:"Cast"})}),Object(j.jsx)("li",{children:Object(j.jsx)(m.c,{to:"/movies/".concat(this.state.id,"/reviews"),className:"NavLink",activeClassName:"NavLink-active",children:"Reviews"})})]}),Object(j.jsx)(y.a,{path:"/movies/:movieId/cast",render:function(t){return Object(j.jsx)(b,c({},t))}}),Object(j.jsx)(y.a,{path:"/movies/:movieId/reviews",render:function(t){return Object(j.jsx)(g,c({},t))}})]})}}]),r}(f.Component);e.default=w}}]);
//# sourceMappingURL=movie-details-page.dce973b5.chunk.js.map