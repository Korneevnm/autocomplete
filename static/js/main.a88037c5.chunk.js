(this.webpackJsonpautocomplete=this.webpackJsonpautocomplete||[]).push([[0],{160:function(e,t,a){},161:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(5),l=a.n(o),r=a(39),s=a(30),c=a(164),u=a(163),f=a(165),p=a(85),m=a(3),d=a.n(m),v=a(66),g=a.n(v),y=function(e){var t=e.options,a=e.handleClick,n=e.activeOption;return i.a.createElement(f.a.Group,{className:g.a.optionsList},t&&t.map((function(e,t){return i.a.createElement(f.a,{key:e.id,onChange:a,value:e.title,className:d()(Object(p.a)({},g.a.active,n===t))},e.title)})))},_=a(166),b=a(96),E=a(67),O=a.n(E),h=function(e){var t=e.tags,a=e.handleClose;return i.a.createElement("div",{className:O.a.tags},i.a.createElement(b.a,{enter:{scale:.6,opacity:0,type:"from",duration:200},leave:{opacity:0,width:0,scale:0,duration:100},appear:!1},t.map((function(e){return i.a.createElement("span",{key:e,style:{display:"inline-block"}},i.a.createElement(_.a,{closable:!0,color:"#108ee9",className:O.a.tag,onClose:function(t){t.preventDefault(),a(e)}},e))}))))},j=a(29),C=a.n(j),w=function(e){var t=e.options,a=Object(n.useState)(""),o=Object(s.a)(a,2),l=o[0],p=o[1],m=Object(n.useState)([]),d=Object(s.a)(m,2),v=d[0],g=d[1],_=Object(n.useState)(0),b=Object(s.a)(_,2),E=b[0],O=b[1],j=Object(n.useState)(void 0),w=Object(s.a)(j,2),L=w[0],N=w[1],k=Object(n.useState)(void 0),x=Object(s.a)(k,2),D=x[0],S=x[1],K=Object(n.useState)(void 0),G=Object(s.a)(K,2),J=G[0],A=G[1],B=Object(n.useRef)();Object(n.useEffect)((function(){B.current&&B.current.focus()}),[L,D,J]);var U=function(e){if(p(e.target.value),e.target.value.includes("="))S("=");else{var a=t.filter((function(t){return t.title&&t.title.toLowerCase().trim()===e.target.value.toLowerCase().trim()}));N.apply(void 0,Object(r.a)(a)),S(void 0)}L&&D&&void 0!==J&&A(L.filters.filter((function(t){return t.title&&t.title.toLowerCase().trim()===e.target.value.split(" = ")[1].toLowerCase().trim()}))[0])},F=function(e){if(L)S("="),p(l+"= ");else{p(e.target.value+" ");var a=t.filter((function(t){return t.title===e.target.value}));N.apply(void 0,Object(r.a)(a))}L&&D&&(g([].concat(Object(r.a)(v),["".concat(L.title," ").concat(D," ").concat(e.target.value)])),p(""),N(void 0),S(void 0),A(void 0))},H=function(e){var a;if(a=L&&D?void 0!==L.filters&&L.filters.map((function(e){return e}))[E]:void 0===L?t.map((function(e){return e}))[E]:["="][E],"Enter"===e.key)if(L&&D&&J){if(v.includes(l))return;g([].concat(Object(r.a)(v),[l])),p(""),N(void 0),S(void 0),A(void 0),O(0)}else L&&D?(p(l.split(" = ")[0].trim()+" = "+a.title),A(a.title)):void 0===L?(N(a),p(a.title+" ")):(S(" = "),p(l+"= "));else if("ArrowUp"===e.key){if(e.preventDefault(),0===E)return;O(E-1)}else if("ArrowDown"===e.key){e.preventDefault();var n=[];if(n=void 0===L?t:L.filters,E===n.length-1)return;O(E+1)}},I=t.filter((function(e){return e.title.toLowerCase().includes(l.toLowerCase())})),M=l.split(" = ")[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement(h,{tags:v,handleClose:function(e){g(v.filter((function(t){return t!==e})))}}),i.a.createElement("div",{className:C.a.filters},void 0===L&&i.a.createElement(c.a,{trigger:"focus",placement:"bottomLeft",className:"Options",content:void 0!==I&&I.length>0?i.a.createElement(y,{options:I,handleClick:F,activeOption:E}):"nothing not found"},i.a.createElement(u.a,{type:"text",className:C.a.input,value:l,onChange:U,onKeyDown:H,placeholder:"Just start writing",ref:B})),L&&!D&&i.a.createElement(c.a,{trigger:"focus",placement:"bottomLeft",className:"Options",content:i.a.createElement(f.a.Group,{className:C.a.optionsList},i.a.createElement(f.a,{onChange:F,value:"=",className:C.a.active},"="))},i.a.createElement(u.a,{type:"text",className:C.a.input,value:l,onChange:U,onKeyDown:H,ref:B})),L&&D&&i.a.createElement(c.a,{trigger:"focus",placement:"bottomLeft",className:"Options",content:L.filters&&L.filters.length>0?i.a.createElement(y,{options:M?L.filters.filter((function(e){return e.title.toLowerCase().includes(M.toLowerCase().trim())})):L.filters,handleClick:F,activeOption:E}):"nothing not found"},i.a.createElement(u.a,{type:"text",className:C.a.input,value:l,onChange:U,onKeyDown:H,ref:B}))))},L=[{id:1,name:"country",filters:[{id:1,title:"\u0420\u043e\u0441\u0441\u0438\u044f"},{id:2,title:"\u0410\u043c\u0435\u0440\u0438\u043a\u0430"},{id:3,title:"\u0410\u0432\u0441\u0442\u0440\u0430\u043b\u0438\u044f"},{id:4,title:"\u0423\u043a\u0440\u0430\u0438\u043d\u0430"},{id:5,title:"\u041d\u043e\u0432\u0430\u044f \u0417\u0435\u043b\u0430\u043d\u0434\u0438\u044f"}]},{id:2,name:"year",filters:[{id:1,title:"2020"},{id:2,title:"2019"},{id:3,title:"2018"},{id:4,title:"2017"},{id:5,title:"2016"}]},{id:3,name:"region",filters:[{id:1,title:"\u0421\u0435\u0432\u0435\u0440\u043d\u044b\u0439"},{id:2,title:"\u042e\u0436\u043d\u044b\u0439"},{id:3,title:"\u0426\u0435\u043d\u0442\u0440\u0430\u043b\u044c\u043d\u044b\u0439"},{id:4,title:"\u0417\u0430\u043f\u0430\u0434\u043d\u044b\u0439"},{id:5,title:"\u0412\u043e\u0441\u0442\u043e\u0447\u043d\u044b\u0439"}]}],N=a(95),k=a.n(N),x=function(){return L.map((function(e){return"country"===e.name&&(e.title="\u0421\u0442\u0440\u0430\u043d\u0430"),"year"===e.name&&(e.title="\u0413\u043e\u0434"),"region"===e.name&&(e.title="\u0420\u0435\u0433\u0438\u043e\u043d"),e})),i.a.createElement("div",{className:k.a.app},i.a.createElement(w,{options:L}))};a(159),a(160);l.a.render(i.a.createElement(x,null),document.getElementById("root"))},29:function(e,t,a){e.exports={filters:"styles_filters__3-Ts2",input:"styles_input__16s3P",optionsList:"styles_optionsList__pY4eu",active:"styles_active__1lj2u"}},66:function(e,t,a){e.exports={optionsList:"styles_optionsList__1G3od",active:"styles_active__2emoK"}},67:function(e,t,a){e.exports={tags:"styles_tags__3UMLd",tag:"styles_tag__3N7fB"}},95:function(e,t,a){e.exports={app:"styles_app__xm7KH"}},99:function(e,t,a){e.exports=a(161)}},[[99,1,2]]]);
//# sourceMappingURL=main.a88037c5.chunk.js.map