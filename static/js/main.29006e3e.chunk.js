(this["webpackJsonpbasketball-shots"]=this["webpackJsonpbasketball-shots"]||[]).push([[0],{166:function(e,t,a){e.exports=a(296)},172:function(e,t,a){},173:function(e,t,a){},296:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(39),o=a.n(s),c=(a(171),a(172),a(32)),l=a(21),i=a(22),u=a(24),m=a(23),h=(a(173),a(307)),p=a(305),d=a(297),v=a(40),g=a(303),f=a(306),E=a(54),y=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).adjustShots=function(t){var a=e.props.quarter.shots+t;a>=0&&e.props.setQuarter({shots:a},e.props.index)},e.adjustContests=function(t){var a=e.props.quarter.contests+t;a>=0&&e.props.setQuarter({contests:a},e.props.index)},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(f.a,{style:{width:"100%"}},r.a.createElement(f.a.Content,null,r.a.createElement(f.a.Header,null,"Quarter ",this.props.index+1),r.a.createElement(f.a.Description,{style:{display:"grid"}},r.a.createElement("div",{style:{display:"inline-flex"}},r.a.createElement("div",null,r.a.createElement(E.a,{size:"big",htmlFor:"shots"},"Shots"),r.a.createElement(g.a,{id:"shots",value:this.props.quarter.shots,readOnly:!0,type:"number",style:{width:"4rem"}})),r.a.createElement("div",null,r.a.createElement(d.a.Group,null,r.a.createElement(d.a,{icon:"chevron down",color:"yellow",onClick:function(){return e.adjustShots(-1)},disabled:this.props.quarter.shots<=0}),r.a.createElement(d.a,{icon:"chevron up",color:"green",onClick:function(){return e.adjustShots(1)}})))),r.a.createElement("div",{style:{display:"inline-flex"}},r.a.createElement("div",null,r.a.createElement(E.a,{size:"big",htmlFor:"contests"},"Contests"),r.a.createElement(g.a,{id:"contests",value:this.props.quarter.contests,readOnly:!0,type:"number",style:{width:"4rem"}})),r.a.createElement("div",null,r.a.createElement(d.a.Group,null,r.a.createElement(d.a,{icon:"chevron down",color:"yellow",onClick:function(){return e.adjustContests(-1)},disabled:this.props.quarter.contests<=0}),r.a.createElement(d.a,{icon:"chevron up",color:"green",onClick:function(){return e.adjustContests(1)},disabled:this.props.quarter.shots<=this.props.quarter.contests})))),r.a.createElement("div",{style:{display:"inline-flex"}},r.a.createElement(g.a,{label:"Running Total",value:this.props.calcRunningTotal(this.props.quarter.shots,this.props.quarter.shots),readOnly:!0,style:{width:"5rem"}})))))}}]),a}(r.a.Component),b=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(f.a,{style:{width:"100%"}},r.a.createElement(f.a.Content,null,r.a.createElement(f.a.Header,null,"Totals"),r.a.createElement(f.a.Description,null,r.a.createElement(h.a,null,r.a.createElement(h.a.Row,{style:{display:"inline"}},r.a.createElement(g.a,{label:"Shots",value:this.props.shots,readOnly:!0})),r.a.createElement(h.a.Row,{style:{display:"inline"}},r.a.createElement(g.a,{label:"Contests",value:this.props.contests,readOnly:!0})),r.a.createElement(h.a.Row,{style:{display:"inline"}},r.a.createElement(g.a,{label:"Running Total",value:this.props.calcRunningTotal(this.props.shots,this.props.contests),readOnly:!0}))))))}}]),a}(r.a.Component),w=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).onTeamNameChange=function(t,a){e.props.setTeam({name:""!==a.value?a.value:void 0},e.props.index)},e.setQuarter=function(t,a){var n=e.props.team.quarters;n[a]=Object(c.a)(Object(c.a)({},e.props.team.quarters[a]),t),e.props.setTeam({quarters:n},e.props.index)},e.calcTotalShots=function(){var t=0;return e.props.team.quarters.forEach((function(e){t+=e.shots})),t},e.calcTotalContests=function(){var t=0;return e.props.team.quarters.forEach((function(e){t+=e.contests})),t},e.calcRunningTotal=function(e,t){return(e-t)/(e>0?e:1)*100},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(h.a,{style:{width:"".concat(window.innerWidth/2,"px")}},r.a.createElement(h.a.Row,null,r.a.createElement(g.a,{label:"Team",placeholder:"team name",value:this.props.team.name,onChange:this.onTeamNameChange})),r.a.createElement(h.a.Row,null,this.props.team.quarters.map((function(t,a){return r.a.createElement(y,{quarter:t,index:a,setQuarter:e.setQuarter,key:a,calcRunningTotal:e.calcRunningTotal})})),r.a.createElement(b,{shots:this.calcTotalShots(),contests:this.calcTotalContests(),calcRunningTotal:this.calcRunningTotal})))}}]),a}(r.a.Component),O=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).setTeam=function(t,a){var n=e.props.game.teams;n[a]=Object(c.a)(Object(c.a)({},e.props.game.teams[a]),t),e.props.setGame({teams:n})},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{style:{width:"".concat(window.innerWidth,"px")}},r.a.createElement(h.a.Column,{width:6},r.a.createElement(w,{team:this.props.game.teams[0],index:0,setTeam:this.setTeam})),r.a.createElement(h.a.Column,{width:10},r.a.createElement(w,{team:this.props.game.teams[1],index:1,setTeam:this.setTeam}))))}}]),a}(r.a.Component),j=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).createNewGame=function(){var e=n.state.games;e.unshift({create_datetime:new Date,teams:[{name:"",quarters:[{shots:0,contests:0},{shots:0,contests:0},{shots:0,contests:0},{shots:0,contests:0}]},{name:"",quarters:[{shots:0,contests:0},{shots:0,contests:0},{shots:0,contests:0},{shots:0,contests:0}]}]}),n.setState({games:e,current_game_index:0},(function(){return n.saveData()}))},n.saveData=function(){var e=JSON.stringify(n.state.games);localStorage.setItem("games",e)},n.deleteCurrentGame=function(){if(void 0!==n.state.current_game_index&&window.confirm("Are you sure you wan to delete the current game?")){var e=n.state.games;e.splice(n.state.current_game_index,1),console.log("games delete",e),n.setState({games:e,current_game_index:void 0},(function(){return n.saveData()}))}},n.setGame=function(e){var t=n.state.current_game_index;if(void 0!==t){var a=n.state.games;a[t]=Object(c.a)(Object(c.a)({},n.state.games[t]),e),n.setState({games:a},(function(){return n.saveData()}))}},n.state={games:[],current_game_index:void 0},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("games");if(console.log("LOAD SAVED DATA",e),e){var t=JSON.parse(e);t.forEach((function(e,t){e.create_datetime=new Date(e.create_datetime)})),console.log("STORED GAMES JSON",t),this.setState({games:t})}}},{key:"render",value:function(){var e=this,t=function(e){return"".concat(e.teams[0].name?e.teams[0].name:"[team name]"," v ").concat(e.teams[1].name?e.teams[1].name:"[team name]"," - ").concat((t=e.create_datetime,"".concat(t.getDay(),"/").concat(t.getMonth(),"/").concat(t.getFullYear())));var t},a=this.state.games.map((function(e,a){return{key:a,text:t(e),value:a}}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{style:{width:"".concat(window.innerWidth,"px")}},r.a.createElement(h.a.Row,null,r.a.createElement("div",{style:{display:"inline-flex"}},r.a.createElement(p.a,{placeholder:"Select game...",selection:!0,fluid:!0,options:a,onChange:function(t,a){e.setState({current_game_index:""!==a.value?Number(a.value):void 0})},value:void 0!==this.state.current_game_index?this.state.current_game_index:"",disabled:this.state.games.length<1}),r.a.createElement(d.a,{icon:!0,labelPosition:"left",onClick:this.createNewGame,primary:!0},r.a.createElement(v.a,{name:"plus"}),"New Game"),r.a.createElement(d.a,{icon:!0,onClick:this.deleteCurrentGame,disabled:void 0===this.state.current_game_index},r.a.createElement(v.a,{name:"trash"})))),void 0!==this.state.current_game_index&&r.a.createElement(h.a.Row,null,r.a.createElement(O,{game:this.state.games[this.state.current_game_index],setGame:this.setGame}))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[166,1,2]]]);
//# sourceMappingURL=main.29006e3e.chunk.js.map