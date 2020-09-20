(this["webpackJsonplittle-starwars-project"]=this["webpackJsonplittle-starwars-project"]||[]).push([[1],{110:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),o=a.n(c),u=a(47),l=a(9),i=a(137),E=a(138),s=a(77),m=Object(s.a)({palette:{type:"dark",primary:{main:"#ffe81f"}}}),p=a(71),S=r.a.lazy((function(){return a.e(4).then(a.bind(null,152))})),f=r.a.lazy((function(){return Promise.all([a.e(0),a.e(6)]).then(a.bind(null,148))})),T=r.a.lazy((function(){return Promise.all([a.e(0),a.e(5)]).then(a.bind(null,150))})),d=function(){return r.a.createElement(i.a,{theme:m},r.a.createElement(E.a,null),r.a.createElement(n.Suspense,{fallback:r.a.createElement(p.e,null)},r.a.createElement(u.a,null,r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/game"},r.a.createElement(f,null)),r.a.createElement(l.a,{path:"/choose"},r.a.createElement(S,null)),r.a.createElement(l.a,{path:"/"},r.a.createElement(T,null))))))},y=a(20);o.a.render(r.a.createElement(y.b,null,r.a.createElement(d,null)),document.getElementById("root"))},20:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return p}));var n=a(25),r=a(0),c=a.n(r),o=a(7),u=a(6),l=a(3);var i=function(e,t){switch(t.type){case l.a.FETCH_START:return Object(o.a)(Object(o.a)({},e),{},{loading:!0,error:null});case l.a.FETCH_SUCCESS:return Object(o.a)(Object(o.a)({},e),{},{loading:!1,error:null});case l.a.FETCH_FAIL:return Object(o.a)(Object(o.a)({},e),{},{loading:!1,error:t.payload});case l.a.FETCH_PEOPLE:return Object(o.a)(Object(o.a)({},e),{},{people:t.payload});case l.a.FETCH_STARSHIPS:return Object(o.a)(Object(o.a)({},e),{},{starships:t.payload});case l.a.CLEAR_ERROR:return Object(o.a)(Object(o.a)({},e),{},{error:null});case l.a.SET_GAME_TYPE:return Object(o.a)(Object(o.a)({},e),{},{gameType:t.payload});case l.a.START_GAME:return Object(o.a)(Object(o.a)({},e),{},{gameState:null,gamePeople:null,gameStarships:null});case l.a.PLAY_GAME_STARSHIPS:return Object(o.a)(Object(o.a)({},e),{},{gameStarships:t.payload});case l.a.PLAY_GAME_PEOPLE:return Object(o.a)(Object(o.a)({},e),{},{gamePeople:t.payload});case l.a.UPDATE_GAME_STATE:return Object(o.a)(Object(o.a)({},e),{},{gameState:t.payload});case l.a.INCREMENT_SCORE:var a=Object(o.a)({},e.score);return t.payload===u.Score.LEFT?a.left++:a.right++,Object(o.a)(Object(o.a)({},e),{},{score:a});case l.a.RESET_SCORE:return Object(o.a)(Object(o.a)({},e),{},{score:{left:0,right:0}});default:return e}},E={gameType:null,loading:!1,error:null,starships:[],people:[],gameState:null,gameStarships:null,gamePeople:null,score:{left:0,right:0}},s={state:E,dispatch:function(e){}},m=Object(r.createContext)(s);function p(e){var t=e.children,a=Object(r.useReducer)(i,E),o=Object(n.a)(a,2),u=o[0],l=o[1];return c.a.createElement(m.Provider,{value:{state:u,dispatch:l}},t)}},3:function(e,t,a){"use strict";var n;a.d(t,"a",(function(){return n})),function(e){e.FETCH_START="FETCH_START",e.FETCH_SUCCESS="FETCH_SUCCESS",e.FETCH_FAIL="FETCH_FAIL",e.FETCH_STARSHIPS="FETCH_STARSHIPS",e.FETCH_PEOPLE="FETCH_PEOPLE",e.CLEAR_ERROR="CLEAR_ERROR",e.SET_GAME_TYPE="SET_GAME_TYPE",e.START_GAME="START_GAME",e.PLAY_GAME_STARSHIPS="START_GAME_STARSHIPS",e.PLAY_GAME_PEOPLE="PLAY_GAME_PEOPLE",e.UPDATE_GAME_STATE="UPDATE_GAME_STATE",e.INCREMENT_SCORE="INCREMENT_SCORE",e.RESET_SCORE="RESET_SCORE"}(n||(n={}))},48:function(e,t,a){"use strict";a.d(t,"b",(function(){return f})),a.d(t,"c",(function(){return T})),a.d(t,"a",(function(){return d})),a.d(t,"g",(function(){return y})),a.d(t,"d",(function(){return _})),a.d(t,"e",(function(){return O})),a.d(t,"f",(function(){return g}));var n=a(25),r=a(34),c=a.n(r),o=a(35),u=a(44),l=a(75),i=a.n(l).a.create({baseURL:"https://swapi.dev/api/",responseType:"json",headers:{"Content-Type":"application/json"}}),E=a(3),s=a(6),m=function(e){return Math.floor(Math.random()*Math.floor(e+1))},p=function(e){if(e<=0)throw new RangeError("max value should be bigger than 0");for(var t=m(e),a=m(e);t===a;)a=m(e);return[t,a]},S=function(e){var t=e.replace(/,/g,""),a=t.indexOf("-"),n=-1!==a?t.substring(a+1,t.length):t;return parseInt(n,10)},f=function(){var e=Object(u.a)(c.a.mark((function e(t){var a,n,r,u,l,s,m,p,S,f,T,d;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:E.a.FETCH_START}),e.prev=1,e.next=4,i.get("people/");case 4:return a=e.sent,n=a.data,r=n.count,u=n.results,l=Math.ceil(r/10),s=Array.from({length:l},(function(e,t){return t+1})).splice(1,l),m=s.map((function(e){return i.get("people/?page=".concat(e))})),e.next=12,Promise.all(m);case 12:p=e.sent,S=p.map((function(e){return e.data.results})),f=S.flat(),T=[].concat(Object(o.a)(u),Object(o.a)(f)),t({type:E.a.FETCH_PEOPLE,payload:T}),t({type:E.a.FETCH_SUCCESS}),e.next=24;break;case 20:e.prev=20,e.t0=e.catch(1),d=e.t0.toJSON&&e.t0.toJSON()||e.t0,t({type:E.a.FETCH_FAIL,payload:d});case 24:case"end":return e.stop()}}),e,null,[[1,20]])})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(u.a)(c.a.mark((function e(t){var a,n,r,u,l,s,m,p,S,f,T,d;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:E.a.FETCH_START}),e.prev=1,e.next=4,i.get("starships/");case 4:return a=e.sent,n=a.data,r=n.count,u=n.results,l=Math.ceil(r/10),s=Array.from({length:l},(function(e,t){return t+1})).splice(1,l),m=s.map((function(e){return i.get("starships/?page=".concat(e))})),e.next=12,Promise.all(m);case 12:p=e.sent,S=p.map((function(e){return e.data.results})),f=S.flat(),T=[].concat(Object(o.a)(u),Object(o.a)(f)),t({type:E.a.FETCH_STARSHIPS,payload:T}),t({type:E.a.FETCH_SUCCESS}),e.next=24;break;case 20:e.prev=20,e.t0=e.catch(1),d=e.t0.toJSON&&e.t0.toJSON()||e.t0,t({type:E.a.FETCH_FAIL,payload:d});case 24:case"end":return e.stop()}}),e,null,[[1,20]])})));return function(t){return e.apply(this,arguments)}}(),d=function(e){e({type:E.a.CLEAR_ERROR})},y=function(e,t){e({type:E.a.SET_GAME_TYPE,payload:t})},_=function(e,t){e({type:E.a.START_GAME});var a=p(t.length-1).map((function(e){return t[e]})),r=Object(n.a)(a,2),c=r[0],o=r[1],u=function(e){var t=e.map((function(e){return parseInt(e.height,10)}));return t.some((function(e){return isNaN(e)}))?s.GameState.INCONCLUSIVE:t[0]===t[1]?s.GameState.DRAW:t[0]>t[1]?s.GameState.LEFT_WON:s.GameState.RIGHT_WON}([c,o]);e({type:E.a.PLAY_GAME_PEOPLE,payload:[c,o]}),e({type:E.a.UPDATE_GAME_STATE,payload:u}),[s.GameState.LEFT_WON,s.GameState.RIGHT_WON].includes(u)&&e({type:E.a.INCREMENT_SCORE,payload:u===s.GameState.LEFT_WON?s.Score.LEFT:s.Score.RIGHT})},O=function(e,t){e({type:E.a.START_GAME});var a=p(t.length-1).map((function(e){return t[e]})),r=Object(n.a)(a,2),c=r[0],o=r[1],u=function(e){var t=e.map((function(e){return S(e.crew)}));return t.some((function(e){return isNaN(e)}))?s.GameState.INCONCLUSIVE:t[0]===t[1]?s.GameState.DRAW:t[0]>t[1]?s.GameState.LEFT_WON:s.GameState.RIGHT_WON}([c,o]);e({type:E.a.PLAY_GAME_STARSHIPS,payload:[c,o]}),e({type:E.a.UPDATE_GAME_STATE,payload:u}),[s.GameState.LEFT_WON,s.GameState.RIGHT_WON].includes(u)&&e({type:E.a.INCREMENT_SCORE,payload:u===s.GameState.LEFT_WON?s.Score.LEFT:s.Score.RIGHT})},g=function(e){e({type:E.a.RESET_SCORE})}},53:function(e,t){},54:function(e,t){},55:function(e,t){},56:function(e,t){},57:function(e,t){},58:function(e,t){},59:function(e,t,a){"use strict";var n;a.d(t,"a",(function(){return n})),function(e){e.PEOPLE="PEOPLE",e.STARSHIPS="STARSHIPS"}(n||(n={}))},6:function(e,t,a){"use strict";var n=a(53);a.o(n,"GameState")&&a.d(t,"GameState",(function(){return n.GameState})),a.o(n,"GameType")&&a.d(t,"GameType",(function(){return n.GameType})),a.o(n,"Score")&&a.d(t,"Score",(function(){return n.Score}));var r=a(54);a.o(r,"GameState")&&a.d(t,"GameState",(function(){return r.GameState})),a.o(r,"GameType")&&a.d(t,"GameType",(function(){return r.GameType})),a.o(r,"Score")&&a.d(t,"Score",(function(){return r.Score}));var c=a(55);a.o(c,"GameState")&&a.d(t,"GameState",(function(){return c.GameState})),a.o(c,"GameType")&&a.d(t,"GameType",(function(){return c.GameType})),a.o(c,"Score")&&a.d(t,"Score",(function(){return c.Score}));var o=a(56);a.o(o,"GameState")&&a.d(t,"GameState",(function(){return o.GameState})),a.o(o,"GameType")&&a.d(t,"GameType",(function(){return o.GameType})),a.o(o,"Score")&&a.d(t,"Score",(function(){return o.Score}));var u=a(57);a.o(u,"GameState")&&a.d(t,"GameState",(function(){return u.GameState})),a.o(u,"GameType")&&a.d(t,"GameType",(function(){return u.GameType})),a.o(u,"Score")&&a.d(t,"Score",(function(){return u.Score}));var l=a(58);a.o(l,"GameState")&&a.d(t,"GameState",(function(){return l.GameState})),a.o(l,"GameType")&&a.d(t,"GameType",(function(){return l.GameType})),a.o(l,"Score")&&a.d(t,"Score",(function(){return l.Score}));var i=a(59);a.d(t,"GameType",(function(){return i.a}));var E=a(60);a.d(t,"Score",(function(){return E.a}));var s=a(61);a.d(t,"GameState",(function(){return s.a}))},60:function(e,t,a){"use strict";var n;a.d(t,"a",(function(){return n})),function(e){e.LEFT="LEFT",e.RIGHT="RIGHT"}(n||(n={}))},61:function(e,t,a){"use strict";var n;a.d(t,"a",(function(){return n})),function(e){e.LEFT_WON="LEFT_WON",e.RIGHT_WON="RIGHT_WON",e.DRAW="DRAW",e.INCONCLUSIVE="INCONCLUSIVE"}(n||(n={}))},71:function(e,t,a){"use strict";a.d(t,"a",(function(){return E})),a.d(t,"b",(function(){return p})),a.d(t,"c",(function(){return d})),a.d(t,"f",(function(){return y})),a.d(t,"d",(function(){return _})),a.d(t,"e",(function(){return g})),a.d(t,"g",(function(){return G}));var n=a(25),r=a(140),c=a(141),o=a(0),u=a.n(o),l=a(20),i=a(48),E=function(){var e=Object(o.useContext)(l.a),t=e.state,a=e.dispatch,E=Object(o.useState)(!1),s=Object(n.a)(E,2),m=s[0],p=s[1];Object(o.useEffect)((function(){t.error&&p(!0)}),[t.error]);var S=function(e,t){"clickaway"!==t&&(p(!1),Object(i.a)(a))};return u.a.createElement(r.a,{open:m,onClose:S,anchorOrigin:{vertical:"top",horizontal:"right"},autoHideDuration:6e3},u.a.createElement(c.a,{elevation:6,variant:"filled",onClose:S,severity:"error"},t.error&&t.error.message))},s=a(132),m=a(6),p=function(){var e=Object(o.useContext)(l.a).state,t=e.gameType,a=e.gamePeople,n=e.gameStarships,r=null;return t===m.GameType.PEOPLE&&a?r=a.map((function(e){return u.a.createElement(d,{person:e})})):t===m.GameType.STARSHIPS&&n&&(r=n.map((function(e){return u.a.createElement(y,{starship:e})}))),r?u.a.createElement(s.a,{container:!0,spacing:3,alignItems:"center"},u.a.createElement(s.a,{item:!0,sm:!0},r[0]),u.a.createElement(s.a,{item:!0,sm:3},u.a.createElement(_,null)),u.a.createElement(s.a,{item:!0,sm:!0},r[1])):null},S=a(133),f=a(134),T=a(135),d=function(e){var t=e.person;if(!t)return null;var a=[{label:"height",content:"unknown"!==t.height?"".concat(t.height," cm"):t.height},{label:"mass",content:"unknown"!==t.mass?"".concat(t.mass," kg"):t.mass},{label:"year of birth",content:t.birth_year},{label:"gender",content:t.gender},{label:"hair color",content:t.hair_color},{label:"eye color",content:t.eye_color}];return u.a.createElement(S.a,{elevation:4},u.a.createElement(f.a,null,u.a.createElement(T.a,{variant:"h5",gutterBottom:!0,align:"center"},t.name),u.a.createElement(s.a,{container:!0,spacing:2},a.map((function(e){return u.a.createElement(s.a,{item:!0,xs:!0,sm:6,key:e.label},u.a.createElement(T.a,{variant:"overline",display:"block"},e.label),u.a.createElement(T.a,{variant:"body1",gutterBottom:!0,color:"height"===e.label?"primary":"textPrimary"},e.content))})))))},y=function(e){var t=e.starship;if(!t)return null;var a=[{label:"model",content:t.model,grid:12},{label:"manufacturer",content:t.manufacturer,grid:12},{label:"crew",content:t.crew,grid:6},{label:"length",content:"unknown"!==t.length?"".concat(t.length," m"):t.length,grid:6},{label:"cost",content:"unknown"!==t.cost_in_credits?"".concat(t.cost_in_credits," credits"):t.cost_in_credits,grid:6},{label:"hyperdrive rating",content:t.hyperdrive_rating,grid:6}];return u.a.createElement(S.a,{elevation:4},u.a.createElement(f.a,null,u.a.createElement(T.a,{variant:"h5",gutterBottom:!0,align:"center"},t.name),u.a.createElement(s.a,{container:!0,spacing:2},a.map((function(e){return u.a.createElement(s.a,{item:!0,xs:!0,sm:e.grid,key:e.label},u.a.createElement(T.a,{variant:"overline",display:"block"},e.label),u.a.createElement(T.a,{variant:"body1",gutterBottom:!0,color:"crew"===e.label?"primary":"textPrimary"},e.content))})))))},_=function(){var e=Object(o.useContext)(l.a).state,t=e.score,a=e.gameState;return u.a.createElement(u.a.Fragment,null,u.a.createElement(T.a,{variant:"h2",align:"center"},t.left," - ",t.right),u.a.createElement(T.a,{variant:"h5",align:"center",color:"textSecondary"},null===a||void 0===a?void 0:a.replace(/_/g," ")))},O=a(136),g=function(){return u.a.createElement(s.a,{container:!0,spacing:0,alignItems:"center",justify:"center",style:{height:"100vh"}},u.a.createElement(s.a,{item:!0},u.a.createElement(O.a,null)))},b=a(76),G=function(){var e=Object(b.a)(),t=Object(o.useContext)(l.a).state,a=t.gameType,n=t.gamePeople,r=t.gameStarships,c=a===m.GameType.PEOPLE?n:r,i=u.a.createElement("span",{style:{color:e.palette.secondary.main}},"vs"),E=c&&c[0].name,s=c&&c[1].name;return u.a.createElement(T.a,{variant:"h5",color:"textSecondary",align:"center",style:{marginBottom:48}},E," ",i," ",s)}},82:function(e,t,a){e.exports=a(110)}},[[82,2,3]]]);
//# sourceMappingURL=main.0f9bca61.chunk.js.map