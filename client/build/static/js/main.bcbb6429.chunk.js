(this.webpackJsonpuserpro=this.webpackJsonpuserpro||[]).push([[0],{20:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(2),r=n.n(c),i=n(14),l=n.n(i),s=(n(20),n(3)),u=n(5),o=n.n(u),j=function(){var e=Object(c.useState)(null),t=Object(s.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)(""),l=Object(s.a)(i,2),u=l[0],j=l[1],b=Object(c.useState)(""),h=Object(s.a)(b,2),d=h[0],f=h[1];return Object(c.useEffect)((function(){o.a.get("/api/users").then((function(e){return r(e)})).catch((function(e){return console.log(e)}))}),[]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{children:"User Pro Membership Database"}),n&&null===n?Object(a.jsx)("p",{children:"Loading..."}):n&&0===n.length?Object(a.jsx)("p",{children:"No user available"}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{children:"Available Users"}),Object(a.jsx)("ol",{children:n&&n.data.map((function(e,t){return Object(a.jsxs)("li",{children:["Name: ",e.name," - Email: ",e.email]},t)}))})]}),Object(a.jsxs)("form",{onSubmit:function(){""!==u?""!==d?o.a.post("/api/users",{username:u,email:d}).then((function(){alert("Account created successfully"),window.location.reload()})).catch((function(){alert("Could not create account. Please try again!")})):alert("Please fill the email field"):alert("Please fill the username field")},children:[Object(a.jsx)("input",{onChange:function(e){return j(e.target.value)},type:"text",placeholder:"Enter your username",name:"name"}),Object(a.jsx)("input",{onChange:function(e){return f(e.target.value)},type:"text",placeholder:"Enter your email address",name:"email"}),Object(a.jsx)("input",{type:"submit"})]})]})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};l.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(j,{})}),document.getElementById("root")),b()}},[[38,1,2]]]);
//# sourceMappingURL=main.bcbb6429.chunk.js.map