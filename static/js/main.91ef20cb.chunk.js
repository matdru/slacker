(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{218:function(e,t,n){e.exports=n(392)},387:function(e,t,n){},392:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(35),c=n(157),i=n(74),s=n(6),l=n.n(s),u=(n(227),n(43)),d=n(44),m=n(48),p=n(45),f=n(49),h=n(18),b=n(19),g=n(394),v=n(13),O=n(399),j=n(396),E=n(203);function x(){var e=Object(h.a)(["\n\theight: 100%;\n\tpadding: 24;\n\tdisplay: flex;\n\tflex-direction: column;\n\tbackground: '#fff';\n\tjustify-content: center;\n\talign-items: center;\n"]);return x=function(){return e},e}var y=b.a.div(x()),k=function(){return r.a.createElement(y,null,r.a.createElement(E.a,{size:"large"}))},C=n(393);function w(){var e=Object(h.a)(["\n\tcolor: black;\n\tfont-weight: bold;\n\tmargin-top: 2px;\n"]);return w=function(){return e},e}function S(){var e=Object(h.a)(["\n\tcolor: black;\n"]);return S=function(){return e},e}function A(){var e=Object(h.a)(["\n\twidth: 46px;\n\tpadding: 5px;\n"]);return A=function(){return e},e}function R(){var e=Object(h.a)(["\n\tdisplay: flex;\n\tflex-direction: row;\n\tmargin-bottom: 2px;\n"]);return R=function(){return e},e}var D=b.a.div(R()),I=b.a.div(A()),N=b.a.div(S()),T=b.a.div(w()),_=function(e){var t=e.children,n=e.name;return e.isConsecutive?r.a.createElement(D,null,r.a.createElement(I,null),r.a.createElement(N,null,t)):r.a.createElement(D,null,r.a.createElement(I,null,r.a.createElement(C.a,{size:35,shape:"square",icon:"user"})),r.a.createElement(N,null,r.a.createElement(T,null,n),t))},M=n(22),L=n(124),B=n.n(L),J=(n(196),n(207)),G=n.n(J),U=B.a.initializeApp({apiKey:"AIzaSyB2tCxT6yP0CWtCbD9JDj3ZKaxxW8T25PI",authDomain:"slacker-c3b01.firebaseapp.com",databaseURL:"https://slacker-c3b01.firebaseio.com",projectId:"slacker-c3b01",storageBucket:"slacker-c3b01.appspot.com",messagingSenderId:"286218247810"}),P=new G.a(U),z=B.a.firestore(),H=n(208),K=n.n(H),V=function(e,t){return new Date(e.createdAt).getTime()-new Date(t.createdAt).getTime()},W=function(e){var t=e.id,n=e.name,a=e.people,r=e.messages;return{type:"CREATE_ROOM",room:{id:t,name:n,people:a,messages:void 0===r?[]:r}}},X=function(e,t){return function(n,a){var r={name:e.name};return z.collection("rooms").get().then(function(a){var o=[];return a.forEach(function(e){console.log(e);var t=e.data();o.push(Object(M.a)({},t))}),o.find(function(e){return e.name===r.name})?t("Room name not available!"):z.collection("rooms").add(r).then(function(t){return z.collection("rooms/".concat(t.id,"/people")).doc(e.people.id).set(e.people).then(function(){z.collection("users/".concat(e.people.id,"/rooms")).doc(t.id).set({roomName:r.name}),n(W(Object(M.a)({id:t.id},e,{people:[e.people]})));e.people.name})})})}},q=function(e){return{type:"ERROR_MESSAGE",message:e}},F=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return function(a,r){var o=r().auth;if(o){var c={sender:{uid:o.uid,displayName:o.displayName},text:e,createdAt:K()().format(),status:n};return z.collection("rooms/".concat(t,"/messages")).add(c)}}},Y=function(e){return{type:"AVAILABLE_ROOMS",rooms:e}},Z=function(e,t){var n=[];return e.forEach(function(e){n.push(Object(M.a)({id:e.id},e.data()))}),n.sort(V),function(e,t){return{type:"UPDATE_MESSAGES",messages:e,roomId:t}}(n,t)};function Q(){var e=Object(h.a)(["\n\tflex-shrink: 0;\n\tpadding: 0px 15px;\n\tbackground: none;\n\tborder: none;\n"]);return Q=function(){return e},e}function $(){var e=Object(h.a)(["\n\tpadding-left: 14px;\n\tborder: none;\n\tborder-radius: 4px;\n\tflex-grow: 1;\n\toutline: none;\n"]);return $=function(){return e},e}function ee(){var e=Object(h.a)(["\n\theight: 44px;\n\tbackground-color: #fff;\n\tborder-radius: 4px;\n\tborder: 1px solid #acacac;\n\tdisplay: flex;\n\tflex-direction: row;\n\tflex-shrink: 0;\n"]);return ee=function(){return e},e}var te=b.a.form(ee()),ne=b.a.input($()),ae=b.a.button(Q()),re=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={value:""},n.handleTyping=function(e){n.setState({value:e.target.value})},n.handleSend=function(e){e.preventDefault();var t=n.props.room,a=n.state.value;t&&t.id&&a.length>0&&(n.props.trySendMessage(a,t.id),n.setState({value:""}))},n}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement(te,{onSubmit:this.handleSend},r.a.createElement(ne,{value:this.state.value,onChange:this.handleTyping}),r.a.createElement(ae,{type:"submit"},"Send"))}}]),t}(a.Component),oe=Object(o.b)(null,{trySendMessage:F})(re);function ce(){var e=Object(h.a)(["\n\tpadding-top: 8px;\n\tpadding-bottom: 8px;\n\tflex-grow: 1;\n\toverflow-y: scroll;\n\toverflow-x: hidden;\n"]);return ce=function(){return e},e}function ie(){var e=Object(h.a)(["\n\theight: 100%;\n\tpadding: 24;\n\tdisplay: flex;\n\tflex-direction: column;\n\tbackground: '#fff';\n"]);return ie=function(){return e},e}var se=g.a.Header,le=g.a.Content,ue=j.a.Title,de=b.a.div(ie()),me=b.a.div(ce()),pe=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).messagesEnd=null,n.messagesContainer=null,n.scrollToBottom=function(){n.messagesEnd&&n.messagesEnd.scrollIntoView({behavior:"auto"})},n}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentWillMount",value:function(){var e=this.props.match.params.roomId;console.log(e)}},{key:"componentDidMount",value:function(){this.scrollToBottom()}},{key:"componentDidUpdate",value:function(e){if(0===e.messages.length&&this.props.messages.length>0)this.scrollToBottom();else if(e.messages.length!==this.props.messages.length&&e.messages.length>0&&this.props.messages.length>0){var t=e.messages.slice(-1)[0],n=this.props.messages.slice(-1)[0];if(t.id!==n.id&&n&&n.sender.uid===this.props.auth.uid)this.scrollToBottom();else if(this.messagesContainer){var a=this.messagesContainer,r=a.scrollHeight,o=a.scrollTop,c=(a.offsetHeight,a.clientHeight);Math.abs(c-(r-o-45))<45&&this.scrollToBottom()}}}},{key:"render",value:function(){var e=this,t=this.props,n=t.room,o=t.messages,c=t.isLoading,i=r.a.createElement(k,null);return c||(i=r.a.createElement(de,null,r.a.createElement(me,{ref:function(t){e.messagesContainer=t}},o.map(function(e,t){return r.a.createElement(_,{isConsecutive:!!o[t-1]&&o[t-1].sender.uid===e.sender.uid,name:e.sender.displayName||"",key:e.id},e.text)}),r.a.createElement("div",{style:{float:"left",clear:"both"},ref:function(t){e.messagesEnd=t}})),r.a.createElement(oe,{room:this.props.room}))),r.a.createElement(a.Fragment,null,r.a.createElement(se,{style:{background:"#fff",borderBottom:"1px solid #acacac",padding:16,display:"flex",flexDirection:"row",alignItems:"center"}},r.a.createElement(ue,{style:{margin:0},level:3},"# ",n?n.name:"")),r.a.createElement(le,{style:{margin:"0px 16px 24px 16px",overflow:"initial"}},i))}}]),t}(a.Component),fe=Object(o.b)(function(e,t){var n=t.match.params.roomId,a=e.rooms.joined.find(function(e){return e.id===n}),r=a?a.messages:[];return{auth:e.auth,room:a,messages:r,isLoading:!a}},{trySendMessage:F})(pe),he=n(123),be=n(398),ge=n(397);function ve(){var e=Object(h.a)(["\n\tmargin-top: 5px;\n\tmargin-bottom: 5px;\n"]);return ve=function(){return e},e}var Oe=be.a.TextArea,je=j.a.Text,Ee=b.a.div(ve()),xe=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={roomName:"",description:""},n.handleChange=function(e){console.log(e.target.name),n.setState(Object(he.a)({},e.target.name,e.target.value))},n.handleSubmit=function(){var e=n.props.auth,t=e.uid,a=e.displayName;if(t){console.log("Create this room pls");var r=n.state.roomName;if(r&&r.length>0){var o={name:r,people:{id:t,name:a,unread:0,lastRead:0}};n.props.tryCreateRoom(o),n.props.handleClose()}}},n}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement(ge.a,{title:"Create Room",visible:this.props.isOpen,onOk:this.handleSubmit,onCancel:this.props.handleClose,okButtonProps:{disabled:!this.props.auth.uid},cancelButtonProps:{disabled:!this.props.auth.uid}},r.a.createElement(Ee,null,r.a.createElement(je,null,"Name:")),r.a.createElement(be.a,{name:"roomName",value:this.state.roomName,onChange:this.handleChange}),r.a.createElement(Ee,null,r.a.createElement(je,null,"Description:")),r.a.createElement(Oe,{name:"description",value:this.state.description,onChange:this.handleChange,rows:4}))}}]),t}(a.Component),ye=Object(o.b)(function(e){return{auth:e.auth}},{tryCreateRoom:X})(xe),ke=n(395),Ce=n(58);function we(){var e=Object(h.a)(["\n\tpadding: 10px;\n"]);return we=function(){return e},e}var Se=b.a.div(we()),Ae=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).handleJoinRoom=function(e){if(!e.canJoin)return console.log("redirect to that room"),void n.props.handleClose();n.props.handleClose()},n}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(ge.a,{title:"Browse Rooms",visible:this.props.isOpen,onOk:this.props.handleClose,onCancel:this.props.handleClose,okButtonProps:{disabled:!this.props.auth.uid},cancelButtonProps:{disabled:!this.props.auth.uid},bodyStyle:{maxHeight:450,overflowY:"scroll"}},r.a.createElement(ke.a,{dataSource:this.props.roomList,renderItem:function(t){return r.a.createElement(ke.a.Item,{key:t.id},r.a.createElement(ke.a.Item.Meta,{avatar:t.avatarUrl?r.a.createElement(C.a,{src:t.avatarUrl}):null,title:r.a.createElement("a",{onClick:function(){return e.handleJoinRoom(t)}},t.name),description:"TODO room descriptions"}),r.a.createElement("div",null,t.canJoin?r.a.createElement(Ce.a,{onClick:function(){return e.handleJoinRoom(t)}},"Join"):r.a.createElement(Se,null,"joined")))}}," "))}}]),t}(a.Component),Re=Object(o.b)(function(e){var t=e.rooms,n=t.available,a=t.joined;return{roomList:n.map(function(e){var t=void 0===a.find(function(t){return t.id===e.id});return Object(M.a)({},e,{canJoin:t})}),auth:e.auth}},{tryCreateRoom:X})(Ae);n(387);function De(){var e=Object(h.a)(["\n\tfont-size: 16px;\n\tbackground: none;\n\tborder: none;\n\t-webkit-transition: color 0.5s;\n\ttransition: color 0.5s;\n\tcursor: pointer;\n\t&:hover {\n\t\tcolor: #fff;\n\t}\n"]);return De=function(){return e},e}function Ie(){var e=Object(h.a)(["\n\tpadding: 10px;\n\tcolor: rgba(255, 255, 255, 0.65);\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n"]);return Ie=function(){return e},e}function Ne(){var e=Object(h.a)(["\n\theight: 100%;\n"]);return Ne=function(){return e},e}function Te(){var e=Object(h.a)(["\n\ttext-align: center;\n\tpadding: 10px;\n\theight: 64px;\n\tborder-bottom: 1px solid grey;\n"]);return Te=function(){return e},e}var _e=g.a.Sider,Me=b.a.div(Te()),Le=b.a.img(Ne()),Be=b.a.div(Ie()),Je=b.a.button(De()),Ge=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={openDialog:!1},n.handleCloseDialog=function(){n.setState({openDialog:!1})},n.handleOpenDialog=function(e){n.setState({openDialog:e})},n.handleRoomSelect=function(e){var t=e.key;n.props.history.push(t)},n}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.tryLogin()}},{key:"componentWillUpdate",value:function(e){!this.props.auth.uid&&e.auth.uid&&this.props.initSlacker()}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.location,a=t.rooms,r=t.history;"/"===n.pathname&&0===e.rooms.joined.length&&0!==a.joined.length&&(console.log("redirect to first room?"),r.push("/r/".concat(a.joined[0].id)))}},{key:"render",value:function(){var e=this;return r.a.createElement(g.a,{style:{height:"100%"}},r.a.createElement(_e,{style:{overflow:"auto",height:"100vh",position:"fixed",left:0}},r.a.createElement(Me,null,r.a.createElement(Le,{src:"fox.png"})),r.a.createElement(Be,null,r.a.createElement(Je,{onClick:function(){return e.handleOpenDialog("browseRooms")}},r.a.createElement("span",null,"Rooms:")),r.a.createElement(Je,{onClick:function(){return e.handleOpenDialog("createRoom")}},r.a.createElement(v.a,{type:"plus-circle"}))),r.a.createElement(ye,{isOpen:"createRoom"===this.state.openDialog,handleClose:this.handleCloseDialog}),r.a.createElement(Re,{isOpen:"browseRooms"===this.state.openDialog,handleClose:this.handleCloseDialog}),r.a.createElement(O.b,{theme:"dark",mode:"inline",onSelect:this.handleRoomSelect,selectedKeys:[this.props.location.pathname]},this.props.rooms.joined.map(function(e){return r.a.createElement(O.b.Item,{key:"/r/".concat(e.id)},r.a.createElement("span",{className:"nav-text"},"# ",e.name))}))),r.a.createElement(g.a,{style:{marginLeft:200,background:"#fff"}},r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/r/:roomId",component:fe}),r.a.createElement(i.a,{path:"/"},0===this.props.rooms.joined.length?r.a.createElement(k,null):r.a.createElement("div",null,"No chat selected")))))}}]),t}(a.Component),Ue=Object(o.b)(function(e){return{auth:e.auth,rooms:e.rooms}},{tryLogin:function(){return function(e){return B.a.auth().signInAnonymously().then(function(t){var n=t.user;if(n){var a=n.displayName||"Ninja";return e(function(e,t){return{type:"LOGIN",uid:e,displayName:t}}(n.uid,a))}}).catch(function(e){console.log({error:e}),e.code,e.message})}},initSlacker:function(){return{type:"INIT_SLACKER_SAGA"}}})(Ge),Pe=n(50),ze=n(214),He=n(83),Ke=n(100),Ve={joined:[],available:[]},We=Object(Pe.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return{uid:t.uid,displayName:t.displayName};case"LOGOUT":return{};default:return e}},rooms:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_ROOM":case"JOINED_ROOM":return Object(M.a)({},e,{joined:[].concat(Object(Ke.a)(e.joined),[t.room])});case"AVAILABLE_ROOMS":return Object(M.a)({},e,{available:t.rooms});case"SEND_MESSAGE":return Object(M.a)({},e,{joined:e.joined.map(function(e){return e.name===t.roomName?Object(M.a)({},e,{messages:[].concat(Object(Ke.a)(e.messages),[t.message])}):e})});case"UPDATE_MESSAGES":return Object(M.a)({},e,{joined:e.joined.map(function(e){return e.id===t.roomId?Object(M.a)({},e,{messages:Object(Ke.a)(t.messages)}):e})});default:return e}},redirect:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REDIRECT_TO":return{redirectTo:t.redirectTo};default:return e}}}),Xe=n(31),qe=n.n(Xe),Fe=n(16),Ye=qe.a.mark(et),Ze=qe.a.mark(tt),Qe=qe.a.mark(nt),$e=function(e,t){return new Date(e.createdAt)-new Date(t.createdAt)};function et(e){var t,n,a,r,o;return qe.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return console.log("try fetch room ",e),t=z.collection("rooms").doc(e),c.next=4,Object(Fe.call)(P.firestore.getDocument,t);case 4:if(!(n=c.sent).exists){c.next=24;break}return a=n.data(),r=[],o=[],c.next=11,Object(Fe.call)(P.firestore.getCollection,t.collection("people"));case 11:return c.sent.forEach(function(e){r.push(Object(M.a)({id:e.id},e.data()))}),console.log({people:r}),c.next=16,Object(Fe.call)(P.firestore.getCollection,t.collection("messages"));case 16:return c.sent.forEach(function(e){o.push(Object(M.a)({id:e.id},e.data()))}),o.sort($e),console.log({messages:o}),c.next=22,Object(Fe.put)(W({id:t.id,name:a?a.name:"Error",people:r,messages:o}));case 22:return c.next=24,Object(Fe.fork)(P.firestore.syncCollection,t.collection("messages"),{successActionCreator:function(t){return Z(t,e)}});case 24:case"end":return c.stop()}},Ye)}function tt(e){var t,n,a,r,o,c,i,s,l,u;return qe.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Fe.select)(function(e){return e.auth});case 2:if((t=e.sent).uid){e.next=6;break}return console.log("no auth!"),e.abrupt("return");case 6:return n=z.collection("rooms").get(),e.next=9,n;case 9:return a=e.sent,r=[],a.forEach(function(e){var t=Object(M.a)({id:e.id},e.data());r.push(t)}),e.next=14,Object(Fe.put)(Y(r));case 14:return o=r.find(function(e){return"general"===e.name}),e.next=17,Object(Fe.call)(P.firestore.getCollection,"users/".concat(t.uid,"/rooms"));case 17:if((c=e.sent).empty){e.next=35;break}i=[],c.forEach(function(e){return i.push(e.id)}),s=0,l=i;case 22:if(!(s<l.length)){e.next=30;break}return u=l[s],e.next=26,Object(Fe.fork)(et,u);case 26:e.sent;case 27:s++,e.next=22;break;case 30:if(!o||i.includes(o.id)){e.next=33;break}return e.next=33,Object(Fe.put)({type:"JOIN_ROOM_SAGA",roomId:o.id,room:o});case 33:e.next=38;break;case 35:if(!o){e.next=38;break}return e.next=38,Object(Fe.put)({type:"JOIN_ROOM_SAGA",roomId:o.id,room:o});case 38:case"end":return e.stop()}},Ze)}function nt(){return qe.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Fe.takeLatest)("INIT_SLACKER_SAGA",tt);case 2:case"end":return e.stop()}},Qe)}var at=nt,rt=qe.a.mark(ct),ot=qe.a.mark(it);function ct(e){var t,n,a,r,o,c,i,s;return qe.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return t=e.roomId,l.next=3,Object(Fe.select)(function(e){return e.auth});case 3:return n=l.sent,a=n.uid,r=n.displayName,o=z.doc("rooms/".concat(t)),l.next=9,Object(Fe.call)(P.firestore.getDocument,o);case 9:if(c=l.sent,(i=Object(M.a)({id:c.id},c.data()))&&c.exists){l.next=17;break}return l.next=14,Object(Fe.put)(q("Room not found!"));case 14:return l.abrupt("return");case 17:if(!i.people||!i.people.find(function(e){return e.id===a})){l.next=21;break}return l.abrupt("return");case 21:return s={name:r,id:a,unread:0,lastRead:0},l.next=24,Object(Fe.call)(P.firestore.setDocument,"rooms/".concat(t,"/people/").concat(s.id),s);case 24:return l.next=26,Object(Fe.call)(P.firestore.setDocument,"users/".concat(s.id,"/rooms/").concat(t),{roomName:i.name});case 26:return l.next=28,Object(Fe.call)(et,t);case 28:case"end":return l.stop()}},rt)}function it(){return qe.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Fe.takeEvery)("JOIN_ROOM_SAGA",ct);case 2:case"end":return e.stop()}},ot)}var st=it,lt=qe.a.mark(ut);function ut(){return qe.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Fe.all)([at(),st()]);case 2:case"end":return e.stop()}},lt)}var dt=Object(He.default)(),mt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Pe.d,pt=function(){var e=Object(Pe.e)(We,mt(Object(Pe.a)(ze.a,dt)));return dt.run(ut),e}(),ft=r.a.createElement(o.a,{store:pt},r.a.createElement(c.a,null,r.a.createElement(i.a,{path:"/",component:Ue})));l.a.render(ft,document.getElementById("container"))}},[[218,1,2]]]);
//# sourceMappingURL=main.91ef20cb.chunk.js.map