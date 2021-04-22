(this["webpackJsonpreact-calendar"]=this["webpackJsonpreact-calendar"]||[]).push([[0],{25:function(t){t.exports=JSON.parse('[{"title":"Natasha Kovacek V","date":"2021-04-04","startTime":6,"duration":30},{"title":"Damon Murazik","date":"2021-04-01","startTime":3,"duration":30},{"title":"Leslie Ledner","date":"2021-04-05","startTime":5,"duration":60},{"title":"Kim Walker","date":"2021-04-01","startTime":13,"duration":30},{"title":"Lonnie Little","date":"2021-04-17","startTime":2,"duration":30},{"title":"Ray Johnston","date":"2021-04-23","startTime":5,"duration":30},{"title":"Becky Johnson","date":"2021-04-14","startTime":1,"duration":30},{"title":"Zachary Harris","date":"2021-04-09","startTime":0,"duration":30},{"title":"Ivan Roberts","date":"2021-04-23","startTime":0,"duration":60},{"title":"Shannon Langworth","date":"2021-04-30","startTime":3,"duration":60},{"title":"Mario Harber","date":"2021-04-24","startTime":2,"duration":45},{"title":"Lloyd Hackett","date":"2021-04-25","startTime":4,"duration":60},{"title":"Guadalupe Ryan","date":"2021-05-02","startTime":1,"duration":30},{"title":"Margie Jakubowski","date":"2021-04-06","startTime":2,"duration":60},{"title":"Kerry Keebler","date":"2021-04-17","startTime":1,"duration":60},{"title":"Lawrence Rolfson","date":"2021-04-18","startTime":3,"duration":45},{"title":"John Doe","date":"2021-04-21","startTime":3,"duration":45},{"title":"Jonathon Bayer","date":"2021-04-12","startTime":1,"duration":45},{"title":"Patti Mills","date":"2021-04-02","startTime":21,"duration":45},{"title":"David Kohler","date":"2021-04-26","startTime":1,"duration":30},{"title":"Salvatore Smitham Sr.","date":"2021-04-19","startTime":0,"duration":30},{"title":"Sergio Strosin","date":"2021-04-05","startTime":21,"duration":60},{"title":"Ms. Darin Macejkovic","date":"2021-05-04","startTime":0,"duration":30},{"title":"Beverly Farrell","date":"2021-04-04","startTime":22,"duration":45},{"title":"Devin Lehner","date":"2021-04-27","startTime":3,"duration":45},{"title":"Ms. Laverne Macejkovic","date":"2021-04-26","startTime":3,"duration":30},{"title":"Kirk Bartell","date":"2021-04-08","startTime":2,"duration":60},{"title":"Lamar Legros","date":"2021-04-11","startTime":3,"duration":45},{"title":"Chester Hudson","date":"2021-04-29","startTime":2,"duration":30},{"title":"Derrick Romaguera","date":"2021-04-14","startTime":12,"duration":60},{"title":"Garry Gutmann","date":"2021-04-16","startTime":3,"duration":30},{"title":"Yvonne Stokes","date":"2021-04-06","startTime":18,"duration":30},{"title":"Nellie Weimann","date":"2021-04-01","startTime":0,"duration":30},{"title":"Johnny Stokes","date":"2021-04-09","startTime":4,"duration":30},{"title":"Martin Fritsch","date":"2021-04-02","startTime":4,"duration":60},{"title":"Clint Balistreri","date":"2021-04-16","startTime":4,"duration":60}]')},42:function(t,e,a){},52:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),i=a(11),c=a.n(i),o=(a(42),a(19)),l=a(20),d=a(26),s=a(29),u=a.n(s),m=a(75),f=a(78),h=a(80),b=a(84),j=a(83),T=a(79),v=a(81),g=a(82),p=a(54),O=a(77),M=a(30),x=a.n(M),y=a(25),k=x.a.createInstance({name:"localdb",storeName:"events"});y.forEach((function(t,e){k.setItem(String(e),t)}));for(var D,L=function(){for(var t=[],e=0;e<24;e++)t.push(e);return t},S=a(3),w=l.a.section(D||(D=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 90vw;\n  border-radius: 0;\n  padding: 0;\n  margin: 0;\n"]))),H=Object(m.a)({root:{width:"100%"},container:{maxHeight:"80vh"},tableRow:{height:100}}),C=[],Y=0;Y<=6;Y++)C.push(u()().add(Y,"days"));var F,N=function(t){for(var e=[],a=0;a<=6;a++)e.push(t[a].clone().subtract(7,"days"));return e},B=function(t){for(var e=[],a=0;a<=6;a++)e.push(t[a].clone().add(7,"days"));return e},E=function(){var t=Object(n.useState)(C),e=Object(d.a)(t,2),a=e[0],r=e[1],i=Object(n.useState)(N(a)),c=Object(d.a)(i,2),o=c[0],l=c[1],s=Object(n.useState)(B(a)),u=Object(d.a)(s,2),m=u[0],M=u[1],x=H(),D=Object(n.useRef)([]);D.current=[];var Y=function(t){t&&!D.current.includes(t)&&D.current.push(t)};Object(n.useEffect)((function(){Promise.all(function(){var t=[];return y.length>0&&y.forEach((function(e,a){var n=k.getItem(String(a));t.push(n)})),t}()).then((function(t){t.forEach((function(t){D.current.forEach((function(e){if(null!==t&&t.startTime.toString()===e.classList[1].split("c")[1]&&t.date.toString()===e.classList[1].split("c")[2])if(30===t.duration){var a=e;a.innerHTML=a.innerHTML+'<p class="event" style="height:50%">'.concat(t.title,"<br/>(").concat(t.duration," min)</p>")}else if(45===t.duration){var n=e;n.innerHTML=n.innerHTML+'<p class="event" style="height:75%">'.concat(t.title,"<br/>(").concat(t.duration," min)</p>")}else if(60===t.duration){var r=e;r.innerHTML=r.innerHTML+'<p class="event" style="height:100%">'.concat(t.title,"<br/>(").concat(t.duration," min)</p>")}}))}))}))}),[a,o,m]);var F=[{label:Object(S.jsx)("strong",{children:a[0].format("MMM")!==a[6].format("MMM")?"".concat(a[0].format("MMM").toUpperCase()," - ").concat(a[6].format("MMM").toUpperCase()," ").concat(a[0].format("YYYY")):a[0].format("MMM YYYY").toUpperCase()})},{label:"".concat(a[0].format("ddd")," (").concat(a[0].format("DD"),")")},{label:"".concat(a[1].format("ddd")," (").concat(a[1].format("DD"),")")},{label:"".concat(a[2].format("ddd")," (").concat(a[2].format("DD"),")")},{label:"".concat(a[3].format("ddd")," (").concat(a[3].format("DD"),")")},{label:"".concat(a[4].format("ddd")," (").concat(a[4].format("DD"),")")},{label:"".concat(a[5].format("ddd")," (").concat(a[5].format("DD"),")")},{label:"".concat(a[6].format("ddd")," (").concat(a[6].format("DD"),")")}];return Object(S.jsx)(S.Fragment,{children:Object(S.jsxs)(w,{children:[Object(S.jsx)("h1",{style:{textAlign:"center",color:"#fff",marginBottom:"1rem"},children:"CALENDAR"}),Object(S.jsxs)(O.a,{"aria-label":"outlined primary button group",children:[Object(S.jsx)(p.a,{variant:"contained",color:"primary",onClick:function(){D.current.forEach((function(t){t.innerHTML=""})),l(N(o)),r(N(a)),M(a)},children:"Previous Week"}),Object(S.jsx)(p.a,{variant:"contained",color:"primary",onClick:function(){D.current.forEach((function(t){t.innerHTML=""})),M(B(m)),r(B(a)),l(a)},children:"Next Week"})]}),Object(S.jsx)(f.a,{className:x.root,children:Object(S.jsx)(T.a,{className:x.container,children:Object(S.jsxs)(h.a,{stickyHeader:!0,"aria-label":"sticky table",children:[Object(S.jsx)(v.a,{children:Object(S.jsx)(g.a,{children:F.map((function(t,e){return 0===e?Object(S.jsx)(j.a,{align:"center",style:{minWidth:100,backgroundColor:"#FFEB3B",color:"#000"},width:"10%",children:t.label},e):Object(S.jsx)(j.a,{align:"center",style:{minWidth:100,backgroundColor:"#1a73e8",color:"#fff"},width:"10%",children:t.label},e)}))})}),Object(S.jsx)(b.a,{children:L().map((function(t,e){return Object(S.jsx)(g.a,{tabIndex:-1,className:x.tableRow,children:F.map((function(e,n){return 0===n?Object(S.jsx)(j.a,{style:{textAlign:"center"},children:Object(S.jsx)("div",{className:"event-cell event-time",children:t<=12?t+":00 AM":t+":00 PM"})},n):Object(S.jsx)(j.a,{style:{textAlign:"center"},children:Object(S.jsx)("div",{className:"event-cell c".concat(t,"c").concat(a[n-1].format("YYYY-MM-DD")),ref:Y})},n)}))},e)}))})]})})})]})})},J=l.a.section(F||(F=Object(o.a)(["\n  padding: 0;\n  margin: 0;\n  width: 100vw;\n  min-height: 100vh;\n  background: #00A8F4;\n  display: flex;\n  justify-content: center;\n  align-items: center\n"]))),R=function(){return Object(S.jsx)(S.Fragment,{children:Object(S.jsx)(J,{children:Object(S.jsx)(E,{})})})};var A=function(){return Object(S.jsx)(R,{})},I=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,86)).then((function(e){var a=e.getCLS,n=e.getFID,r=e.getFCP,i=e.getLCP,c=e.getTTFB;a(t),n(t),r(t),i(t),c(t)}))};c.a.render(Object(S.jsx)(r.a.StrictMode,{children:Object(S.jsx)(A,{})}),document.getElementById("root")),I()}},[[52,1,2]]]);
//# sourceMappingURL=main.7762dad4.chunk.js.map