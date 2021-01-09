(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{88:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){},95:function(e,t,n){},97:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(0),r=n(18),s=n.n(r),i=n(13),o=n(24),l=n(6),j=n(7),d=n.n(j),b=n(14),u=n(29),h=n.n(u),O={getAll:function(){var e=Object(b.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=h.a.get("/api/menu"),e.abrupt("return",t.then((function(e){return e.data})));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_MENU":return t.data;default:return e}},m=n(60),p="/api/reservations",f=function(){var e=Object(b.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get(p);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v={createReservation:function(){var e=Object(b.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.post(p,t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getReservations:f},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ALL":return t.content;case"CREATE_RESERVATION":return[].concat(Object(m.a)(e),[t.content]);default:return e}},g=(n(88),n(99)),y=n(100),w=function(){return Object(c.jsx)("div",{children:Object(c.jsx)(g.a,{fluid:!0,className:"homepage",children:Object(c.jsxs)(y.a,{children:[Object(c.jsx)("div",{className:"col-lg-4 col-sm-12 fondo1"}),Object(c.jsx)("div",{className:"col-lg-4 col-sm-12 fondo3",children:Object(c.jsxs)("p",{className:"title",children:["Explore and discover ",Object(c.jsx)("br",{})," ",Object(c.jsx)("span",{className:"title-2",children:"Authentic & modern Restaurant"})]})}),Object(c.jsx)("div",{className:"col-lg-4 col-sm-12 fondo2"})]})})})},T=n(55),I=(n(89),function(){return Object(c.jsx)("div",{children:Object(c.jsx)(g.a,{fluid:!0,className:"about-container",children:Object(c.jsxs)(y.a,{children:[Object(c.jsxs)(T.a,{xl:6,md:12,xs:12,className:"col-about",children:[Object(c.jsxs)("p",{className:"about-info",children:["This page was created by ",Object(c.jsx)("a",{className:"link-about",href:"https://www.linkedin.com/in/leonelzorzoli/",rel:"noreferrer",target:"_blank",children:"Leonel Zorzoli"})," with the aim of improving his skills as a web programmer. Everything you see here is fictional and created for demonstration purposes. All the images were taken from Google Images and the entire menu is from ",Object(c.jsx)("a",{className:"link-about",href:"https://earls.ca/",children:"Earls"})," restaurant."]}),Object(c.jsx)("p",{className:"about-info",children:"Created with React, React-Redux, React-Router, Bootstrap, Node, Express, MongoDB"})]}),Object(c.jsxs)(T.a,{xl:6,md:12,xs:12,className:"col-about",children:[Object(c.jsx)("p",{className:"personal-info",children:"I'm a 25-year-old guy based in Argentina, passionate about creating products that help the community, and solving real world problems with software. I like to be in the intersection of design, marketing and engineering."}),Object(c.jsxs)("p",{className:"social",children:["You can find me on github as ",Object(c.jsx)("a",{className:"link-about",href:"https://github.com/LeoZorzoli",rel:"noreferrer",target:"_blank",children:"@LeoZorzoli"})," or on twitter as ",Object(c.jsx)("a",{className:"link-about",href:"https://twitter.com/ProgramandoM",rel:"noreferrer",target:"_blank",children:"@ProgramandoM"})]})]})]})})})}),k=(n(90),function(e){var t=e.item;return Object(c.jsxs)("div",{className:"item-div",children:[Object(c.jsx)("div",{children:Object(c.jsxs)("p",{className:"item-title",children:[Object(c.jsx)("span",{children:t.name}),Object(c.jsx)("span",{className:"right",children:t.price})]})}),Object(c.jsx)("p",{className:"item-description",children:Object(c.jsx)("small",{children:t.description})}),t.additions.map((function(e){return Object(c.jsxs)("p",{className:"additions",children:[Object(c.jsx)("small",{children:e.name}),Object(c.jsx)("span",{className:"right-additions",children:e.price})]},e._id)}))]})}),E=function(e){var t=e.type;return Object(c.jsxs)("div",{className:"type-div",children:[Object(c.jsx)("div",{className:"flex",children:Object(c.jsx)("p",{className:"subtitle",children:Object(c.jsx)("strong",{children:t.name})})}),Object(c.jsx)(y.a,{children:t.items.map((function(e){return Object(c.jsx)(T.a,{xs:12,md:4,children:Object(c.jsx)(k,{item:e})},e._id)}))})]})},C=function(e){return Object(c.jsxs)(g.a,{fluid:!0,className:"container-menu-component",children:[Object(c.jsx)("p",{className:"title-menu fancy",children:Object(c.jsx)("span",{children:Object(c.jsx)("strong",{children:e.menu.name})})}),Object(c.jsx)(y.a,{children:e.menu.types.map((function(e){return Object(c.jsx)(E,{type:e},e._id)}))})]})},R=(n(91),function(){var e=Object(i.c)((function(e){return e.menu})).map((function(e){return Object(c.jsx)(y.a,{children:Object(c.jsx)(C,{menu:e})},e.id)}));return Object(c.jsx)(g.a,{fluid:!0,className:"container-menu-page",children:e})}),L=n(9),A=n(103),_=n(101),G=n(44),M=function(e){var t=Object(a.useState)(""),n=Object(G.a)(t,2),c=n[0],r=n[1];return{type:e,value:c,onChange:function(e){r(e.target.value)}}},P=function(){var e=Object(a.useState)(null),t=Object(G.a)(e,2),n=t[0],c=t[1];return{selected:n,onChange:function(e){c(e.target.value)}}},S=function(e,t){return function(){var n=Object(b.a)(d.a.mark((function n(c){return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:c({type:"SET_NOTIFICATION",data:{message:e,delay:setTimeout((function(){c(D(""))}),1e3*t)}});case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},D=function(){return{type:"DELETE_NOTIFICATION"}},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_NOTIFICATION":return clearTimeout(e.delay),t.data;case"DELETE_NOTIFICATION":return"";default:return e}},z=n(106),V=(n(92),function(){var e=Object(i.c)((function(e){return e.notification}));return Object(c.jsx)("div",{children:e?Object(c.jsx)(z.a,{className:"notification",children:e.message}):Object(c.jsx)(c.Fragment,{})})}),B=(n(93),function(){var e=Object(i.b)(),t=P(),n=P(),a=M("date"),r=M("text"),s=M("text"),o=M("text"),l=M("email");return Object(c.jsxs)("div",{className:"reservation-container",children:[Object(c.jsx)(g.a,{children:Object(c.jsxs)(A.a,{onSubmit:function(c){if(c.preventDefault(),null===t.selected||null===n.selected||null===a.value||null===r.value||null===s.value||null===l.value)e(S("Missing data",2));else{var i={totalPeople:t.selected,hour:n.selected,date:a.value,firstName:r.value,lastName:s.value,phoneNumber:o.value,email:l.value};e((j=i,function(){var e=Object(b.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.createReservation(j);case 2:n=e.sent,t({type:"CREATE_RESERVATION",content:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),e(S("Reservation created",2))}var j},children:[Object(c.jsxs)(y.a,{className:"row-form",children:[Object(c.jsx)(T.a,{xs:12,md:4,children:Object(c.jsxs)(A.a.Group,{controlId:"totalPeople",children:[Object(c.jsx)(A.a.Label,{className:"label-reservation",children:"Total People"}),Object(c.jsxs)(A.a.Control,Object(L.a)(Object(L.a)({},t),{},{className:"form-control-reservation",as:"select",defaultValue:"Choose...",children:[Object(c.jsx)("option",{disabled:!0,children:"Choose..."}),Object(c.jsx)("option",{children:"1"}),Object(c.jsx)("option",{children:"2"}),Object(c.jsx)("option",{children:"3"}),Object(c.jsx)("option",{children:"4"}),Object(c.jsx)("option",{children:"5"}),Object(c.jsx)("option",{children:"6"}),Object(c.jsx)("option",{children:"7"}),Object(c.jsx)("option",{children:"8"})]})),Object(c.jsxs)(A.a.Text,{className:"text-reservation",children:["To reserve a table for more than 8 people call ",Object(c.jsx)("span",{className:"phone-number",children:"1500-777-0800"}),"."]})]})}),Object(c.jsx)(T.a,{xs:12,md:4,children:Object(c.jsxs)(A.a.Group,{controlId:"date",children:[Object(c.jsx)(A.a.Label,{className:"label-reservation",children:"Date"}),Object(c.jsx)(A.a.Control,Object(L.a)(Object(L.a)({},a),{},{className:"form-control-reservation"})),Object(c.jsx)(A.a.Text,{className:"text-reservation",children:"You have up to three days in advance to change the date."})]})}),Object(c.jsx)(T.a,{xs:12,md:4,children:Object(c.jsxs)(A.a.Group,{controlId:"hour",children:[Object(c.jsx)(A.a.Label,{className:"label-reservation",children:"Hour"}),Object(c.jsxs)(A.a.Control,Object(L.a)(Object(L.a)({},n),{},{className:"form-control-reservation",as:"select",defaultValue:"Choose...",children:[Object(c.jsx)("option",{disabled:!0,children:"Choose..."}),Object(c.jsx)("option",{children:"9:00"}),Object(c.jsx)("option",{children:"9:30"}),Object(c.jsx)("option",{children:"10:00"}),Object(c.jsx)("option",{children:"10:30"}),Object(c.jsx)("option",{children:"11:00"}),Object(c.jsx)("option",{children:"11:30"}),Object(c.jsx)("option",{children:"12:00"}),Object(c.jsx)("option",{children:"12:30"}),Object(c.jsx)("option",{children:"13:00"}),Object(c.jsx)("option",{children:"13:30"}),Object(c.jsx)("option",{children:"18:00"}),Object(c.jsx)("option",{children:"18:30"}),Object(c.jsx)("option",{children:"19:00"}),Object(c.jsx)("option",{children:"19:30"}),Object(c.jsx)("option",{children:"20:00"}),Object(c.jsx)("option",{children:"20:30"}),Object(c.jsx)("option",{children:"21:00"}),Object(c.jsx)("option",{children:"21:30"}),Object(c.jsx)("option",{children:"22:00"}),Object(c.jsx)("option",{children:"22:30"}),Object(c.jsx)("option",{children:"23:00"}),Object(c.jsx)("option",{children:"23:30"})]})),Object(c.jsx)(A.a.Text,{className:"text-reservation",children:"You have up to three days in advance to change the hour."})]})})]}),Object(c.jsxs)("div",{className:"personal-info2",children:[Object(c.jsx)("p",{className:"subtitle",children:"Personal Info"}),Object(c.jsxs)(y.a,{className:"row-form",children:[Object(c.jsx)(T.a,{xs:12,md:6,children:Object(c.jsxs)(A.a.Group,{controlId:"firstName",children:[Object(c.jsx)(A.a.Label,{className:"label-reservation",children:"First Name"}),Object(c.jsx)(A.a.Control,Object(L.a)(Object(L.a)({},r),{},{className:"form-control-reservation"}))]})}),Object(c.jsx)(T.a,{xs:12,md:6,children:Object(c.jsxs)(A.a.Group,{controlId:"lastName",children:[Object(c.jsx)(A.a.Label,{className:"label-reservation",children:"Last Name"}),Object(c.jsx)(A.a.Control,Object(L.a)(Object(L.a)({},s),{},{className:"form-control-reservation"}))]})})]}),Object(c.jsxs)(y.a,{children:[Object(c.jsx)(T.a,{xs:12,md:6,children:Object(c.jsxs)(A.a.Group,{controlId:"phone",children:[Object(c.jsx)(A.a.Label,{className:"label-reservation",children:"Phone"}),Object(c.jsx)(A.a.Control,Object(L.a)(Object(L.a)({},o),{},{className:"form-control-reservation"})),Object(c.jsx)(A.a.Text,{className:"text-reservation",children:"Only for trouble reports."})]})}),Object(c.jsx)(T.a,{xs:12,md:6,children:Object(c.jsxs)(A.a.Group,{controlId:"email",children:[Object(c.jsx)(A.a.Label,{className:"label-reservation",children:"Email"}),Object(c.jsx)(A.a.Control,Object(L.a)(Object(L.a)({},l),{},{className:"form-control-reservation"})),Object(c.jsx)(A.a.Text,{className:"text-reservation",children:"In case of problems with the reservation we will contact this email."})]})})]})]}),Object(c.jsx)("div",{className:"btn-middle",children:Object(c.jsx)(_.a,{className:"button-reservation",type:"submit",children:"Submit"})})]})}),Object(c.jsx)(V,{})]})}),Y=n(102),Z=function(){var e=Object(i.c)((function(e){return e.reservations}));return console.log(e),Object(c.jsxs)(Y.a,{responsive:!0,striped:!0,bordered:!0,hover:!0,children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"First Name"}),Object(c.jsx)("th",{children:"Last Name"}),Object(c.jsx)("th",{children:"Phone number"}),Object(c.jsx)("th",{children:"Email"}),Object(c.jsx)("th",{children:"Date"}),Object(c.jsx)("th",{children:"Hour"}),Object(c.jsx)("th",{children:"Total people"})]})}),Object(c.jsx)("tbody",{children:e.map((function(e){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:e.firstName}),Object(c.jsx)("td",{children:e.lastName}),Object(c.jsx)("td",{children:e.phoneNumber}),Object(c.jsx)("td",{children:e.email}),Object(c.jsx)("td",{children:e.date}),Object(c.jsx)("td",{children:e.hour}),Object(c.jsx)("td",{children:e.totalPeople})]},e.id)}))})]})},H=n(105),J=n(104),U=(n(95),function(){return Object(c.jsxs)(H.a,{expand:"lg",children:[Object(c.jsx)(H.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(c.jsxs)(H.a.Collapse,{id:"responsive-navbar-nav",children:[Object(c.jsxs)(o.b,{className:"nav-link logo",to:"/",children:["Max",Object(c.jsx)("span",{className:"restaurant",children:"Restaurant"})]}),Object(c.jsxs)(J.a,{className:"mr-auto",children:[Object(c.jsx)(o.b,{to:"/menu",className:"nav-link link-style",children:"Menu"}),Object(c.jsx)(o.b,{to:"/about",className:"nav-link link-style",children:"About"})]}),Object(c.jsx)(J.a,{children:Object(c.jsx)(o.b,{to:"/reservations",className:"nav-link link-style",children:"Reservations"})})]})]})});var W=function(){var e=Object(i.b)();return Object(a.useEffect)((function(){e(function(){var e=Object(b.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.getAll();case 2:n=e.sent,t({type:"INIT_MENU",data:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e(function(){var e=Object(b.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.getReservations();case 2:n=e.sent,t({type:"GET_ALL",content:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(c.jsx)("div",{children:Object(c.jsxs)(o.a,{className:"page",children:[Object(c.jsx)(U,{}),Object(c.jsx)("div",{children:Object(c.jsxs)(l.c,{children:[Object(c.jsx)(l.a,{exact:!0,path:"/",children:Object(c.jsx)(w,{})}),Object(c.jsx)(l.a,{path:"/menu",children:Object(c.jsx)(R,{})}),Object(c.jsx)(l.a,{path:"/about",children:Object(c.jsx)(I,{})}),Object(c.jsx)(l.a,{path:"/reservations",children:Object(c.jsx)(B,{})}),Object(c.jsx)(l.a,{path:"/admin",children:Object(c.jsx)(Z,{})})]})})]})})},q=n(22),K=n(58),Q=n(59),X=Object(q.combineReducers)({notification:F,reservations:N,menu:x}),$=Object(q.createStore)(X,Object(Q.composeWithDevTools)(Object(q.applyMiddleware)(K.a)));s.a.render(Object(c.jsx)(i.a,{store:$,children:Object(c.jsx)(W,{})}),document.getElementById("root"))}},[[97,1,2]]]);
//# sourceMappingURL=main.e9fd939e.chunk.js.map