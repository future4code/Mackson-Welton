(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{231:function(e,t,n){e.exports=n(379)},298:function(e,t,n){e.exports=n.p+"static/media/futurex.68418237.png"},379:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(21),o=n.n(c),i=n(19),u=n(148),l=n(32),p=n(100),s=n(149),m=n.n(s),d=Object(l.createMuiTheme)({palette:{primary:m.a}}),f=n(31),h=n(72),g=n(9),v=n(20),b=n(10),y=n(26),O=n(27),j=n(29),E=n(28),T=n(30),w=n(68),x=n.n(w),C=n(67),P=n.n(C),k=n(17),I=n.n(k);function D(){var e=Object(g.a)(["\n  margin-right: 100px;\n"]);return D=function(){return e},e}function S(){var e=Object(g.a)(["\n  width: 75px;\n  height: 75px;\n  cursor: pointer;\n"]);return S=function(){return e},e}function _(){var e=Object(g.a)(["\n  display: flex;\n  justify-content: space-between;\n"]);return _=function(){return e},e}var A=Object(b.a)(P.a)(_()),M=b.a.img(S()),L=b.a.div(D()),q=function(e){function t(){var e,n;Object(y.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(j.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).logoff=function(){window.localStorage.clear(),n.props.goToHome()},n}return Object(T.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){var e=window.localStorage.getItem("token");return r.a.createElement("div",null,r.a.createElement(x.a,{position:"static"},r.a.createElement(A,null,r.a.createElement(M,{onClick:this.props.goToHome,src:n(298)}),r.a.createElement(L,null,r.a.createElement(I.a,{onClick:this.props.goToHome},"Home"),r.a.createElement(I.a,{onClick:this.props.goToApplytoTripPage},"Inscreva-se"),null===e?r.a.createElement(I.a,{onClick:this.props.goToLogin},"Login"):r.a.createElement(I.a,{onClick:this.logoff},"Sair")))))}}]),t}(r.a.Component),H=Object(i.c)(null,function(e){return{goToHome:function(){return e(Object(v.d)($e.home))},goToApplytoTripPage:function(){return e(Object(v.d)($e.applyToTrip))},goToLogin:function(){return e(Object(v.d)($e.login))}}})(q);function N(){var e=Object(g.a)(["\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]);return N=function(){return e},e}var z=b.a.div(N());var V=Object(i.c)(null,function(e){return{goToApplytoTripPage:function(){return e(Object(v.d)($e.applyToTrip))},goToListTripsPage:function(){return e(Object(v.d)($e.listTrips))}}})(function(e){return r.a.createElement("div",null,r.a.createElement(H,null),null===window.localStorage.getItem("token")?r.a.createElement(z,null,r.a.createElement("h1",null,"Fa\xe7a sua inscri\xe7\xe3o para pr\xf3xima viagem espacial."),r.a.createElement(I.a,{color:"primary",variant:"contained",onClick:e.goToApplytoTripPage},"Inscreva-se")):r.a.createElement(z,null,r.a.createElement("h1",null,"Seja bem-vindo ao Painel Administrativo"),r.a.createElement(I.a,{color:"primary",variant:"contained",onClick:e.goToListTripsPage},"Visualizar Lista de Viagens")))}),R=n(38),F=n(24),X=n.n(F),J=n(47),U=n(48),Y=n.n(U),B="https://us-central1-missao-newton.cloudfunctions.net/futureX/mackson",G=window.localStorage.getItem("token"),K=function(){return function(){var e=Object(J.a)(X.a.mark(function e(t){var n;return X.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Y.a.get("".concat(B,"/trips"));case 3:n=e.sent,t(Q(n.data.trips)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.message);case 10:case"end":return e.stop()}},e,null,[[0,7]])}));return function(t){return e.apply(this,arguments)}}()},Q=function(e){return{type:"TRIPS",payload:{trips:e}}},W=function(e){return{type:"TRIP_DETAIL",payload:{tripDetail:e}}},Z=n(37),$=n.n(Z);function ee(){var e=Object(g.a)(["\n  width: 100%;\n  height: 100vh;\n  gap: 10px;\n  place-content: center;\n  justify-items: center;\n  display: grid;\n"]);return ee=function(){return e},e}var te=b.a.form(ee()),ne=function(e){function t(e){var n;return Object(y.a)(this,t),(n=Object(j.a)(this,Object(E.a)(t).call(this,e))).handleFieldChange=function(e){n.setState(Object(R.a)({},e.target.name,e.target.value))},n.state={email:"",password:""},n}return Object(T.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.email,a=t.password;return r.a.createElement("div",null,r.a.createElement(H,null),r.a.createElement(te,null,r.a.createElement($.a,{onChange:this.handleFieldChange,name:"email",type:"email",label:"E-mail",value:n}),r.a.createElement($.a,{onChange:this.handleFieldChange,name:"password",type:"password",label:"Password",value:a}),r.a.createElement(I.a,{onClick:function(){return e.props.toSubmitLogin(n,a)}},"Login")))}}]),t}(a.Component),ae=Object(i.c)(null,function(e){return{toSubmitLogin:function(t,n){return e(function(e,t){return function(){var n=Object(J.a)(X.a.mark(function n(a){var r;return X.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Y.a.post("".concat(B,"/login"),{email:e,password:t});case 3:r=n.sent,window.localStorage.setItem("token",r.data.token),a(Object(v.d)($e.listTrips)),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(0),alert("E-mail ou senha est\xe3o errados."),console.error(n.t0.message);case 12:case"end":return n.stop()}},n,null,[[0,8]])}));return function(e){return n.apply(this,arguments)}}()}(t,n))}}})(ne),re=n(45),ce=n.n(re),oe=n(46),ie=n.n(oe),ue=n(34),le=n.n(ue),pe=n(69),se=n.n(pe),me=n(152),de=n.n(me),fe=n(25),he=n.n(fe);function ge(){var e=Object(g.a)(["\n  width: 50vw;\n  padding: 2px;\n  text-align: center;\n"]);return ge=function(){return e},e}function ve(){var e=Object(g.a)(["\n  width: 100%;\n  height: 100vh;\n  display: grid;\n  place-content: center;\n  justify-content: center;\n"]);return ve=function(){return e},e}var be=b.a.div(ve()),ye=Object(b.a)(he.a)(ge()),Oe=function(e){function t(){return Object(y.a)(this,t),Object(j.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(T.a)(t,e),Object(O.a)(t,[{key:"componentDidMount",value:function(){null===window.localStorage.getItem("token")?this.props.goToHome():this.props.getTrips()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(H,null),r.a.createElement(be,null,r.a.createElement(ye,{elevation:1},void 0===this.props.trips?"Carregando...":r.a.createElement(ce.a,null,r.a.createElement(I.a,{onClick:this.props.goToCreateTrip,variant:"contained",color:"primary"},"Criar nova viagem"),this.props.trips.map(function(t){return r.a.createElement(ie.a,{key:t.id,button:!0,onClick:function(){return e.props.getTripDetail(t.id)}},r.a.createElement(se.a,null,r.a.createElement(de.a,null)),r.a.createElement(le.a,{primary:"".concat(t.planet,": ").concat(t.name," - ").concat(t.date),secondary:t.description}))})))))}}]),t}(r.a.Component),je=Object(i.c)(function(e){return{trips:e.trips.trips}},function(e){return{getTrips:function(){return e(K())},getTripDetail:function(t){return e(function(e){return function(){var t=Object(J.a)(X.a.mark(function t(n){var a;return X.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Y.a.get("".concat(B,"/trip/").concat(e),{headers:{"Content-Type":"application/json",auth:"".concat(G)}});case 3:a=t.sent,n(W(a.data.trip)),n(Object(v.d)($e.tripDetailsPage)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0.message);case 11:case"end":return t.stop()}},t,null,[[0,8]])}));return function(e){return t.apply(this,arguments)}}()}(t))},goToHome:function(){return e(Object(v.d)($e.home))},goToCreateTrip:function(){return e(Object(v.d)($e.createTrip))}}})(Oe);function Ee(){var e=Object(g.a)(["\n  display: flex;\n  justify-content: space-around;\n"]);return Ee=function(){return e},e}function Te(){var e=Object(g.a)(["\n  width: 50vw;\n  padding: 2px;\n"]);return Te=function(){return e},e}function we(){var e=Object(g.a)(["\n  width: 100%;\n  display: grid;\n  place-content: center;\n  justify-content: center;\n  gap: 10px;\n  padding-top: 20px;\n"]);return we=function(){return e},e}var xe=b.a.div(we()),Ce=Object(b.a)(he.a)(Te()),Pe=b.a.div(Ee()),ke=function(e){function t(){return Object(y.a)(this,t),Object(j.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(T.a)(t,e),Object(O.a)(t,[{key:"componentDidMount",value:function(){null===window.localStorage.getItem("token")&&this.props.goToHome()}},{key:"render",value:function(){var e=this,t=this.props.tripDetail;return r.a.createElement("div",null,r.a.createElement(H,null),r.a.createElement(xe,null,r.a.createElement(Ce,null,r.a.createElement("h3",null,"Detalhes"),r.a.createElement("p",null,"T\xedtulo: ",t.name),r.a.createElement("p",null,"Planeta: ",t.planet),r.a.createElement("p",null,"Dura\xe7\xe3o: ",t.durationInDays),r.a.createElement("p",null,"Data: ",t.date),r.a.createElement("p",null,"Descri\xe7\xe3o: ",t.description)),r.a.createElement(Ce,null,r.a.createElement("h3",null,"Inscritos"),r.a.createElement(ce.a,null,t.candidates.map(function(n){return r.a.createElement(ie.a,{key:n.id},r.a.createElement(le.a,{primary:"Nome",secondary:n.name}),r.a.createElement(le.a,{primary:"Idade",secondary:n.age}),r.a.createElement(le.a,{primary:"Profiss\xe3o",secondary:n.profession}),r.a.createElement(le.a,{primary:"Pa\xeds",secondary:n.country}),r.a.createElement(le.a,{primary:"Mensagem",secondary:n.applicationText}),r.a.createElement(Pe,null,r.a.createElement(I.a,{onClick:function(){return e.props.decideCandidate(!0,t.id,n.id)},variant:"contained",color:"primary"},"Aprovar"),r.a.createElement(I.a,{onClick:function(){return e.props.decideCandidate(!1,t.id,n.id)},variant:"contained"},"Reprovar")),r.a.createElement("hr",null))})))))}}]),t}(r.a.Component),Ie=Object(i.c)(function(e){return{tripDetail:e.trips.tripDetail}},function(e){return{decideCandidate:function(t,n,a){return e(function(e,t,n){return function(){var a=Object(J.a)(X.a.mark(function a(r){return X.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Y.a.put("".concat(B,"/trips/").concat(t,"/candidates/").concat(n,"/decide"),{approve:e},{headers:{"Content-Type":"application/json",auth:"".concat(G)}});case 3:a.next=8;break;case 5:a.prev=5,a.t0=a.catch(0),console.error(a.t0.message);case 8:case"end":return a.stop()}},a,null,[[0,5]])}));return function(e){return a.apply(this,arguments)}}()}(t,n,a))},goToHome:function(){return e(Object(v.d)($e.home))}}})(ke),De=n(23),Se=n.n(De);function _e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function Ae(){var e=Object(g.a)(["\n  width: 250px;\n"]);return Ae=function(){return e},e}function Me(){var e=Object(g.a)(["\n  gap: 10px;\n  place-content: center;\n  justify-items: center;\n  display: grid;\n"]);return Me=function(){return e},e}function Le(){var e=Object(g.a)(["\n  max-width: 700px;\n  min-width: 400px;\n  padding: 2px;\n  text-align: center;\n"]);return Le=function(){return e},e}function qe(){var e=Object(g.a)(["\n  width: 100%;\n  height: 100vh;\n  display: grid;\n  place-content: center;\n  justify-content: center;\n"]);return qe=function(){return e},e}var He=b.a.div(qe()),Ne=Object(b.a)(he.a)(Le()),ze=b.a.form(Me()),Ve=Object(b.a)($.a)(Ae()),Re=function(e){function t(e){var n;return Object(y.a)(this,t),(n=Object(j.a)(this,Object(E.a)(t).call(this,e))).handleInputChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(R.a)({},a,r))},n.handleOnSubmit=function(e){var t=new Date(e.date.split("-").join("/")),a=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_e(n,!0).forEach(function(t){Object(R.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_e(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},e,{date:"".concat(("0"+t.getDate()).slice(-2),"/").concat(("0"+(t.getMonth()+1)).slice(-2),"/").concat(t.getFullYear())});n.props.setTrip(a)},n.state={name:"",planet:"",date:"",description:"",durationInDays:""},n}return Object(T.a)(t,e),Object(O.a)(t,[{key:"componentDidMount",value:function(){null===window.localStorage.getItem("token")&&this.props.goToHome()}},{key:"render",value:function(){var e=this,t=this.state,n=t.name,a=t.planet,c=t.date,o=t.description,i=t.durationInDays,u=new Date,l="".concat(u.getFullYear(),"-").concat(("0"+(u.getMonth()+1)).slice(-2),"-").concat(u.getDate());return r.a.createElement("div",null,r.a.createElement(H,null),r.a.createElement(He,null,r.a.createElement(Ne,null,r.a.createElement(ze,{onSubmit:function(){return e.handleOnSubmit({name:n,planet:a,date:c,description:o,durationInDays:i})}},r.a.createElement(Ve,{name:"name",type:"text",value:n,onChange:this.handleInputChange,label:"Nome da Viagem",InputProps:{inputProps:{pattern:"[A-z.,_-\xb4`\xe1\xe9\xed\xf3\xfa\xc1\xc9\xcd\xd3\xda\xe0\xe3\xc3\xe7\xc7!? ]{5,}"}},required:!0}),r.a.createElement(Ve,{select:!0,name:"planet",value:a,onChange:this.handleInputChange,required:!0},r.a.createElement(Se.a,{value:"Merc\xfario"},"Merc\xfario"),r.a.createElement(Se.a,{value:"V\xeanus"},"V\xeanus"),r.a.createElement(Se.a,{value:"Terra"},"Terra"),r.a.createElement(Se.a,{value:"Marte"},"Marte"),r.a.createElement(Se.a,{value:"J\xfapiter"},"J\xfapiter"),r.a.createElement(Se.a,{value:"Saturno"},"Saturno"),r.a.createElement(Se.a,{value:"Urano"},"Urano"),r.a.createElement(Se.a,{value:"Netuno"},"Netuno")),r.a.createElement(Ve,{name:"date",type:"date",value:c,onChange:this.handleInputChange,InputProps:{inputProps:{min:l}},required:!0}),r.a.createElement(Ve,{name:"description",type:"text",value:o,onChange:this.handleInputChange,label:"Descri\xe7\xe3o",InputProps:{inputProps:{pattern:"[A-z.,_-\xb4`\xe1\xe9\xed\xf3\xfa\xc1\xc9\xcd\xd3\xda\xe0\xe3\xc3\xe7\xc7!? ]{30,}"}},required:!0}),r.a.createElement(Ve,{name:"durationInDays",type:"number",value:i,onChange:this.handleInputChange,label:"Dura\xe7\xe3o da Viagem",InputProps:{inputProps:{min:"50"}}}),r.a.createElement(I.a,{type:"submit",variant:"contained",color:"primary"},"Criar")))))}}]),t}(r.a.Component),Fe=Object(i.c)(null,function(e){return{setTrip:function(t){e(function(e){return function(){var t=Object(J.a)(X.a.mark(function t(n){return X.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Y.a.post("".concat(B,"/trips"),e,{headers:{"Content-Type":"application/json",auth:"".concat(G)}});case 3:alert("Nova viagem cadastrada com sucesso!"),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.error(t.t0.message);case 9:case"end":return t.stop()}},t,null,[[0,6]])}));return function(e){return t.apply(this,arguments)}}()}(t))},goToHome:function(){return e(Object(v.d)($e.home))}}})(Re);function Xe(){var e=Object(g.a)(["\n  width: 250px;\n"]);return Xe=function(){return e},e}function Je(){var e=Object(g.a)(["\n  gap: 10px;\n  place-content: center;\n  justify-items: center;\n  display: grid;\n"]);return Je=function(){return e},e}function Ue(){var e=Object(g.a)(["\n  min-width: 400px;\n  padding: 2px;\n  text-align: center;\n"]);return Ue=function(){return e},e}function Ye(){var e=Object(g.a)(["\n  width: 100%;\n  height: 100vh;\n  display: grid;\n  place-content: center;\n  justify-content: center;\n"]);return Ye=function(){return e},e}var Be=b.a.div(Ye()),Ge=Object(b.a)(he.a)(Ue()),Ke=b.a.form(Je()),Qe=Object(b.a)($.a)(Xe()),We=function(e){function t(e){var n;return Object(y.a)(this,t),(n=Object(j.a)(this,Object(E.a)(t).call(this,e))).handleInputChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(R.a)({},a,r))},n.state={name:"",age:"",applicationText:"",profession:"",country:"",planet:""},n}return Object(T.a)(t,e),Object(O.a)(t,[{key:"componentDidMount",value:function(){this.props.getTrips()}},{key:"render",value:function(){var e=this,t=this.state,n=t.name,a=t.age,c=t.applicationText,o=t.profession,i=t.country,u=t.planet;return r.a.createElement("div",null,r.a.createElement(H,null),r.a.createElement(Be,null,r.a.createElement(Ge,null,void 0===this.props.trips?"Carregando...":r.a.createElement(Ke,{onSubmit:function(){return e.props.applyToTrip({name:n,age:a,applicationText:c,profession:o,country:i,planet:u})}},r.a.createElement(Qe,{name:"name",type:"text",value:n,onChange:this.handleInputChange,label:"Nome do Candidato",InputProps:{inputProps:{pattern:"[A-z.,_-\xb4`\xe1\xe9\xed\xf3\xfa\xc1\xc9\xcd\xd3\xda\xe0\xe3\xc3\xe7\xc7!? ]{5,}"}},required:!0}),r.a.createElement(Qe,{name:"age",type:"number",value:a,onChange:this.handleInputChange,label:"Idade do Candidato",InputProps:{inputProps:{min:18}},required:!0}),r.a.createElement(Qe,{select:!0,name:"planet",value:u,onChange:this.handleInputChange,required:!0},this.props.trips.map(function(e){return r.a.createElement(Se.a,{key:e.id,value:e.id},e.name," - ",e.planet)})),r.a.createElement(Qe,{name:"applicationText",type:"text",value:c,onChange:this.handleInputChange,label:"Por que devemos escolher voc\xea?",InputProps:{inputProps:{pattern:"[A-z.,_-\xb4`\xe1\xe9\xed\xf3\xfa\xc1\xc9\xcd\xd3\xda\xe0\xe3\xc3\xe7\xc7!? ]{30,}"}},required:!0}),r.a.createElement(Qe,{name:"profession",type:"text",value:o,onChange:this.handleInputChange,label:"Profiss\xe3o",InputProps:{inputProps:{pattern:"[A-z.,_-\xb4`\xe1\xe9\xed\xf3\xfa\xc1\xc9\xcd\xd3\xda\xe0\xe3\xc3\xe7\xc7!? ]{10,}"}},required:!0}),r.a.createElement(Qe,{name:"country",type:"text",value:i,onChange:this.handleInputChange,label:"Pa\xeds",InputProps:{inputProps:{pattern:"[A-z.,_-\xb4`\xe1\xe9\xed\xf3\xfa\xc1\xc9\xcd\xd3\xda\xe0\xe3\xc3\xe7\xc7!? ]{5,}"}},required:!0}),r.a.createElement(I.a,{type:"submit",variant:"contained",color:"primary"},"Me Candidatar")))))}}]),t}(r.a.Component),Ze=Object(i.c)(function(e){return{trips:e.trips.trips}},function(e){return{getTrips:function(){return e(K())},applyToTrip:function(t){return e(function(e){return function(){var t=Object(J.a)(X.a.mark(function t(n){return X.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Y.a.post("".concat(B,"/trips/").concat(e.planet,"/apply"),e,{headers:{"Content-Type":"application/json"}});case 3:alert("Sua candidatura foi submetida com sucesso! Agora \xe9 s\xf3 cruzar os dedos e aguardar o resultado."),t.next=10;break;case 6:t.prev=6,t.t0=t.catch(0),alert("Ops! Algo deu errado por favor tente novamente!"),console.error(t.t0.message);case 10:case"end":return t.stop()}},t,null,[[0,6]])}));return function(e){return t.apply(this,arguments)}}()}(t))}}})(We),$e={home:"/",login:"/login",listTrips:"/list-trips",tripDetailsPage:"/trip-details",createTrip:"/create-trip",applyToTrip:"/apply-to-trip"};var et=function(e){return r.a.createElement(f.a,{history:e.history},r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:$e.home,component:V}),r.a.createElement(h.a,{exact:!0,path:$e.login,component:ae}),r.a.createElement(h.a,{exact:!0,path:$e.listTrips,component:je}),r.a.createElement(h.a,{exact:!0,path:$e.tripDetailsPage,component:Ie}),r.a.createElement(h.a,{exact:!0,path:$e.createTrip,component:Fe}),r.a.createElement(h.a,{exact:!0,path:$e.applyToTrip,component:Ze})))},tt=n(36),nt=n(44);function at(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function rt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?at(n,!0).forEach(function(t){Object(R.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):at(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var ct,ot={},it=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ot,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TRIPS":return rt({},e,{trips:t.payload.trips});case"TRIP_DETAIL":return rt({},e,{tripDetail:t.payload.tripDetail});default:return e}},ut=n(145),lt=Object(tt.a)(),pt=[Object(nt.a)(Object(ut.a)(lt),u.a),window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(e){return e}],st=Object(nt.e)((ct=lt,Object(nt.c)({router:Object(f.b)(ct),trips:it})),nt.d.apply(void 0,pt)),mt=function(){return r.a.createElement(i.a,{store:st},r.a.createElement(l.MuiThemeProvider,{theme:d},r.a.createElement(p.a,null),r.a.createElement(et,{history:lt})))},dt=document.getElementById("root");o.a.render(r.a.createElement(mt,null),dt)}},[[231,1,2]]]);
//# sourceMappingURL=main.b8b1caeb.chunk.js.map