(this.webpackJsonpalkredito=this.webpackJsonpalkredito||[]).push([[0],{42:function(n,e,t){"use strict";t.r(e);var r=t(0),i=t(1),c=t(19),o=t.n(c),a=t(4),s=t(6),d=t(2),l=t(3);function u(){var n=Object(d.a)(["\nhtml {\n    box-sizing: border-box;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  }\n  *, *:before, *:after {\n    box-sizing: inherit;\n  }\n\n  ul, li, h1, h2, h3, p, button {\n    margin: 0;\n    padding: 0;\n  }\n  ul {\n    list-style: none;\n  }\n  body {\n  background-color:",";\n    height: 100vh;\n    margin: 0 auto;\n    overscroll-behavior: none;\n    width: 100%;\n  }\n\n  #root {\n    overflow-x: hidden;\n    min-height: 100vh;\n  }\n  "]);return u=function(){return n},n}var j=Object(l.a)(u(),"/login"!==window.location.pathname||"/registro"!==window.location.pathname?"#F2F2F2":"#ebebeb");function b(){var n=Object(d.a)(["\ncolor:#000000;\nfont-size:.8rem;\nfont-weight:500;\nfont-style:normal;\ntext-align:center;\n\n& p{\n  line-height:28px;\n}\n& a{\n  color:red;\n  text-decoration:none;\n}\n@media (min-width: 767px) {\n  font-size:.9rem;\n};\n"]);return b=function(){return n},n}function p(){var n=Object(d.a)(["\nalign-items:center;\nbackground:#fefefe;\nborder-top:3px solid #ebebeb;\ndisplay:flex;\nheight:35vh;\njustify-content:center;\nwidth:100%;\n\n@media (min-width: 767px) {\n  height:45vh;\n}\n"]);return p=function(){return n},n}var x=l.b.div(p()),h=l.b.div(b()),f=function(){return Object(r.jsx)(x,{children:Object(r.jsxs)(h,{children:[Object(r.jsx)("p",{children:"Colombiana de Creditos S.A. NIT 111.111.111-1 SERVICIO AL CLIENTE: "}),Object(r.jsx)("p",{children:Object(r.jsx)(a.b,{to:"/",children:"Preguntas frecuentes"})}),Object(r.jsxs)("p",{children:["L\xednea Bogot\xe1: ",Object(r.jsx)(a.b,{to:"/"}),"(031) 666 6666"]}),Object(r.jsxs)("p",{children:["L\xednea Gratuita Nacional: ",Object(r.jsx)(a.b,{to:"/",children:"015000 14 8000"})]}),Object(r.jsxs)("p",{children:["L\xednea de WhatsApp: ",Object(r.jsx)(a.b,{to:"/",children:" 3333333333"})]}),Object(r.jsxs)("p",{children:["Email: ",Object(r.jsx)(a.b,{to:"/",children:"alkreditocartera.requerimientos@alkredito.com.co"})]})]})})},O=function(n){var e=n.children;return Object(r.jsxs)(r.Fragment,{children:[e,Object(r.jsx)(f,{})]})},m=t(13),g=t(7),v=t(14),w=function(n){return{type:"REGISTER",payload:n}},y=function(n){return{type:"UPDATE_INFO_USER",payload:n}},F=t(11);function _(){var n=Object(d.a)(["\n background-color:grey;\n border:none;\n border-radius:15px;\n color:white;\n cursor:pointer;\n font-weight: bold;\n font-family: 'Quicksand', sans-serif;\n font-size:16px;\n height:40px;\n margin:10px 0;\n letter-spacing: 1px;\n outline:none;\n\n"]);return _=function(){return n},n}function k(){var n=Object(d.a)(["\n  background-color: transparent;\n  border-left: 0px;\n  border-top: 0px;\n  border-right: 0px;\n  border-bottom:2px solid #EBEBEB;\n  color:#2d2d2d;\n  font-size: 14px;\n  font-family: 'Quicksand', sans-serif;\n  padding:10px;\n  margin:5px 0;\n  outline:none;\n\n"]);return k=function(){return n},n}function C(){var n=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n\n"]);return C=function(){return n},n}function E(){var n=Object(d.a)(["\n background-color: #fefefe;\n  border: 2px solid white;\n  border-radius: 8px;\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25);\n  color:  #6f717e;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 40px 35px;\n\n  & h2{\n    font-family: 'Quicksand', sans-serif;\n  };\n  p{\n    margin:5px 0;\n  };\n  a{\n    color:#EB1C23;\n    text-decoration:none;\n  }\n"]);return E=function(){return n},n}function N(){var n=Object(d.a)(["\n  font-size:100px;\n  color:#EB1C23;\n    text-decoration:none;\n"]);return N=function(){return n},n}function A(){var n=Object(d.a)(["\n  background-color:#FDE200;\n  color:#fefefe;\n& a{\n  @media (max-width: 400px) {\n  font-size:65px;\n}\n}\n"]);return A=function(){return n},n}function D(){var n=Object(d.a)(["\n text-align:center;\n\n @media (max-width: 400px) {\n  width:310px;\n}\n"]);return D=function(){return n},n}function z(){var n=Object(d.a)(["\n  align-items: center;\n  background-color:#FDE200;\n  display: flex;\n  justify-content: center;\n  min-height:85vh;\n  @media (max-width: 400px) {\n  min-height:73vh;\n}\n"]);return z=function(){return n},n}var R=l.b.section(z()),S=l.b.section(D()),I=l.b.div(A()),T=Object(l.b)(a.b)(N()),B=l.b.div(E()),U=l.b.form(C()),P=l.b.input(k()),q=l.b.button(_()),L={login:function(n){return{type:"LOGIN",payload:n}}},G=Object(F.b)(null,L)((function(n){var e=Object(i.useState)({user:""}),t=Object(v.a)(e,2),c=t[0],o=t[1],s=function(n){o(Object(g.a)(Object(g.a)({},c),{},Object(m.a)({},n.target.name,n.target.value))),console.log(c)};return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(R,{children:Object(r.jsxs)(S,{children:[Object(r.jsx)(I,{children:Object(r.jsx)(T,{to:"/",children:"Alkredito"})}),Object(r.jsxs)(B,{children:[Object(r.jsx)("h2",{children:"Inicia sesi\xf3n"}),Object(r.jsxs)(U,{onSubmit:function(e){e.preventDefault(),n.login(c),n.history.push("/resumen")},children:[Object(r.jsx)(P,{type:"text",placeholder:"N\xfamero de c\xe9dula",name:"cedula",onChange:s}),Object(r.jsx)(P,{type:"password",placeholder:"Contrase\xf1a",name:"password",onChange:s}),Object(r.jsx)(q,{children:"Iniciar sesi\xf3n"})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{children:Object(r.jsx)("a",{href:"/",children:"\xbfOlvidaste t\xfa contrase\xf1a?"})}),Object(r.jsx)("p",{children:Object(r.jsx)(a.b,{to:"/registro",children:"\xbfNo tienes cuenta?, crea una aqu\xed"})})]})]})]})})})}));function Q(){var n=Object(d.a)(["\n background-color:grey;\n border:none;\n border-radius:15px;\n color:white;\n cursor:pointer;\n font-weight: bold;\n font-family: 'Quicksand', sans-serif;\n font-size:16px;\n height:40px;\n margin:10px 0;\n letter-spacing: 1px;\n outline:none;\n\n"]);return Q=function(){return n},n}function H(){var n=Object(d.a)(["\n  background-color: transparent;\n  border-left: 0px;\n  border-top: 0px;\n  border-right: 0px;\n  border-bottom:2px solid #EBEBEB;\n  color:#2d2d2d;\n  font-size: 14px;\n  font-family: 'Quicksand', sans-serif;\n  padding:10px;\n  margin:5px 0;\n  outline:none;\n\n"]);return H=function(){return n},n}function X(){var n=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-top:20px;\n"]);return X=function(){return n},n}function J(){var n=Object(d.a)(["\n background-color: #fefefe;\n  border: 2px solid white;\n  border-radius: 8px;\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25);\n  color:  #6f717e;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 40px 60px;\n\n  & h2{\n    font-family: 'Quicksand', sans-serif;\n  };\n  a{\n    color:#EB1C23;\n    font-weight:bold;\n    letter-spacing:.5px;\n    margin-top:10px;\n    text-decoration:none;\n  }\n"]);return J=function(){return n},n}function M(){var n=Object(d.a)(["\n  font-size:100px;\n  color:#EB1C23;\n  text-decoration:none;\n"]);return M=function(){return n},n}function V(){var n=Object(d.a)(["\n  background-color:#FDE200;\n  color:#fefefe;\n\n  & a{\n  @media (max-width: 400px) {\n  font-size:65px;\n}\n}\n"]);return V=function(){return n},n}function Z(){var n=Object(d.a)(["\n text-align:center;\n\n @media (max-width: 400px) {\n  width:310px;\n}\n"]);return Z=function(){return n},n}function W(){var n=Object(d.a)(["\n  align-items: center;\n  background-color:#FDE200;\n  display: flex;\n  justify-content: center;\n  min-height:100vh;\n\n   @media (max-width: 400px) {\n  min-height:90vh;\n}\n"]);return W=function(){return n},n}var K=l.b.section(W()),Y=l.b.section(Z()),$=l.b.div(V()),nn=Object(l.b)(a.b)(M()),en=l.b.div(J()),tn=l.b.form(X()),rn=l.b.input(H()),cn=l.b.button(Q()),on=function(n){var e=Object(i.useState)({cedula:"",email:"",password:""}),t=Object(v.a)(e,2),c=t[0],o=t[1],s=function(n){o(Object(g.a)(Object(g.a)({},c),{},Object(m.a)({},n.target.name,n.target.value))),console.log(c)};return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(K,{children:Object(r.jsxs)(Y,{children:[Object(r.jsx)($,{children:Object(r.jsx)(nn,{to:"/",children:"Alkredito"})}),Object(r.jsxs)(en,{children:[Object(r.jsx)("h2",{children:"Reg\xedstrate con nosotros"}),Object(r.jsxs)(tn,{onSubmit:function(e){e.preventDefault(),w(c),n.history.push("/login")},children:[Object(r.jsx)(rn,{type:"text",placeholder:"ingresa t\xfa c\xe9dula",name:"cedula",onChange:s}),Object(r.jsx)(rn,{type:"text",placeholder:"correo electr\xf3nico",name:"email",onChange:s}),Object(r.jsx)(rn,{type:"password",placeholder:"contrase\xf1a",name:"password",onChange:s}),Object(r.jsx)(rn,{type:"password",placeholder:"confirma la contrase\xf1a",name:"password",onChange:s}),Object(r.jsx)(cn,{children:"Reg\xedstrate"})]}),Object(r.jsx)("span",{children:Object(r.jsx)(a.b,{to:"/",children:"Regresar al Inicio"})})]})]})})})},an={register:w};Object(F.b)(null,an);function sn(){var n=Object(d.a)(["\nheight:auto;\nobject-fit:cover;\nwidth:100%;\n\n@media (min-width: 576px) {\nheight:50vh;\n}\n@media (min-width: 767px) {\nheight:65vh;\n}\n@media (min-width: 1024px) {\nheight:75vh;\n}\n\n"]);return sn=function(){return n},n}function dn(){var n=Object(d.a)(["\n"]);return dn=function(){return n},n}var ln=l.b.div(dn()),un=l.b.img(sn()),jn=function(){return Object(r.jsx)(ln,{children:Object(r.jsx)(un,{src:"https://i.postimg.cc/mZj6mTRb/background.png",alt:""})})};function bn(){var n=Object(d.a)(["\nbackground-color:#FF0000;\nborder-radius:5px;\nborder-color:#FF0000;\nbox-shadow: 0 6px 5px rgba(0,0,0,.2);\ncolor:white;\ncursor:pointer;\nmargin:20px;\npadding:8px;\ntext-align:center;\noutline:none;\n&:hover {\n  opacity:.6;\n}\n"]);return bn=function(){return n},n}function pn(){var n=Object(d.a)(["\nfont-size:15px;\nfont-weight:400;\nline-height:19px;\ncolor:#000000;\nstyle:normal;\nmargin-top:20px;\n"]);return pn=function(){return n},n}function xn(){var n=Object(d.a)(["\nfont-size:26px;\nfont-weight:500;\nline-height:26px;\ncolor:#020202;\nstyle:normal;\n"]);return xn=function(){return n},n}function hn(){var n=Object(d.a)(["\ndisplay:flex;\nflex-direction:column;\npadding-top:30px;\n"]);return hn=function(){return n},n}function fn(){var n=Object(d.a)(["\nbackground-color:#fff;\nbox-shadow:0 3px 5px rgba(0,0,0,.2);\nborder-radius:5px;\nheight:28vh;\n","\ntext-align:center;\n"]);return fn=function(){return n},n}var On=l.b.div(fn(),""),mn=l.b.div(hn()),gn=l.b.h2(xn()),vn=l.b.p(pn()),wn=l.b.button(bn()),yn=function(n){var e=n.tittle,t=n.parrafo,i=n.txtbutton;return Object(r.jsx)(On,{children:Object(r.jsxs)(mn,{children:[Object(r.jsx)(gn,{children:e}),Object(r.jsx)(vn,{children:t}),Object(r.jsx)(wn,{children:i})]})})};function Fn(){var n=Object(d.a)(["\ncolor:#fefefe;\ntext-decoration:none;\ncursor:pointer;\n"]);return Fn=function(){return n},n}function _n(){var n=Object(d.a)(["\nbackground:#FF0000;\nfont-family:'Roboto Condensed', sans-serif;\nline-height:50px;\nmargin:0 0 0 20px;\nwidth:35%;\nborder-radius:0 0 5px 5px;\ntext-align:center;\n\n@media (min-width: 1024px) {\n  max-width:15%;\n  margin-left:8em;\n}\n"]);return _n=function(){return n},n}function kn(){var n=Object(d.a)(["\ndisplay:flex;\nwidth:100%;\nfont-family:'Roboto Condensed', sans-serif;\nfont-size:27px;\nletter-spacing:2px;\nline-height:30px;\nalign-items:center;\njustify-content:space-between;\ncolor:#FF0000;\npadding:15px 20px;\n\n@media (min-width: 576px) {\n  font-size:20px;\n  font-style:italic;\n}\n@media (min-width: 1024px) {\n  display:block;\n  font-size:40px;\n  letter-spacing:2px;\n  margin:0 0 0 21em;\n}\n"]);return kn=function(){return n},n}function Cn(){var n=Object(d.a)(["\ndisplay:block;\nbackground-color:#FDE200;\nheight:17vh;\n\n@media (min-width: 576px) {\n  display:flex;\n  height:10vh;\n  justify-content:space-between;\n  align-items:start;\n}\n@media (min-width: 1024px) {\n  display:block;\nheight:17vh;\n\n}\n\n"]);return Cn=function(){return n},n}var En=l.b.header(Cn()),Nn=l.b.div(kn()),An=l.b.div(_n()),Dn=Object(l.b)(a.b)(Fn()),zn=function(){return Object(r.jsxs)(En,{children:[Object(r.jsx)(An,{children:Object(r.jsx)(Dn,{to:"/login",children:"INGRESO CUENTA"})}),Object(r.jsx)(Nn,{children:Object(r.jsx)("h1",{children:"Alkredito"})})]})};function Rn(){var n=Object(d.a)(["\nbackground-color:#F2F2F2;\ndisplay:grid;\ngrid-gap:10px;\ngrid-template-columns:repeat(auto-fit,minmax(350px,1fr));\npadding:20px 20px;\n"]);return Rn=function(){return n},n}var Sn=l.b.div(Rn()),In=function(n){var e=n.children;return Object(r.jsx)(Sn,{children:e})},Tn=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(zn,{}),Object(r.jsx)(jn,{}),Object(r.jsxs)(In,{children:[Object(r.jsx)(yn,{tittle:"Reg\xedstrate",parrafo:"Ingresa tus datos para activar tu pago Online",txtbutton:"Reg\xedstrate"}),Object(r.jsx)(yn,{tittle:"Informaci\xf3n",parrafo:"Consulta aqu\xed temas de cr\xe9dito de tu inter\xe9s",txtbutton:"Informaci\xf3n"}),Object(r.jsx)(yn,{tittle:"Preguntas frecuentes",parrafo:"Aqu\xed est\xe1n las consultas m\xe1s comunes de nuestros usuarios",txtbutton:"Preguntas frecuentes"}),Object(r.jsx)(yn,{tittle:"Puntos de pago",parrafo:"En estos puntos puedes cancelar tus cuotas",txtbutton:"Puntos de pago"})]})]})};function Bn(){var n=Object(d.a)(["\n  min-height:45vh;\n  margin:30px 15px;\n  grid-template-columns:repeat(auto-fit,minmax(350px,1fr));\n\n  @media (min-width: 767px) {\n  margin-left:120px;\n}\n  @media (min-width: 867px) {\n  margin-left:150px;\n}\n  @media (min-width: 910px) {\n  margin-left:150px;\n}\n  @media (min-width: 1280px) {\n  margin-left:150px;\n}\n\n"]);return Bn=function(){return n},n}var Un=l.b.div(Bn()),Pn=function(n){var e=n.children;return Object(r.jsx)(Un,{children:e})};function qn(){var n=Object(d.a)(["\ndisplay:grid;\ngrid-gap:20px;\njustify-content:center;\n\n& article{\n  box-shadow:0 3px 3px rgb(0 0 0 / 10%);\n  background-color:#FFFFFF;\n  padding:15px;\n  min-height:120px;\n  border-radius:7px;\n\n  @media (min-width: 540px) {\n  width:500px;\n}\n  @media (min-width: 767px) {\n  width:630px;\n}\n  @media (min-width: 1024px) {\n  width:800px;\n}\n  @media (min-width: 1280px) {\n  width:900px;\n}\n}\n.art-personal-info{\n    display:flex;\n    flex-direction:column;\n    font-size:18px;\n    font-weight:500;\n    width:100%\n\n    @media (min-width: 480px) {\n    font-size:21px;\n    width:100%;\n    };\n    @media (min-width: 600px) {\n    font-size:21px;\n    width:100%;\n    };\n    @media (min-width: 767px) {\n    display:flex;\n    font-size:18px;\n    flex-direction:row;\n    width:100%;\n    & .borderDiv{\n    border-left:1px solid grey;\n    border-top:none;\n    padding:0 0 0 10px;\n    \n  }\n    };\n    @media (min-width: 1024px) {\n    display:inline-flex;\n    font-size:21px;\n    width:100%;\n    };\n\n    & div{\n      margin:10px;\n    }\n  }\n  .borderDiv{\n    border-top:1px solid grey;\n    padding:0 0 0 10px;\n    \n    p{\n      text-transform:uppercase;\n    }\n  }\n  button{\n    border:none;\n    border-radius:5px;\n    cursor:pointer;\n    padding:10px;\n    width:100%;\n    background-color:#FF0000;\n    color:#fefefe;\n    outline:none;\n    margin:50px 0 0 0;\n  }\n  .resumen__cuenta{\n    width:100%;\n    display:flex;\n    flex-direction:column;\n\n    & .resumen__cuenta-detail{\n      display:flex;\n      justify-content:space-between;\n      margin-top:10px;\n\n        & .cupo__aprobado{\n           color:#8490FF;\n           };\n          .saldo__deuda{\n           color:#FFDD87;\n           };\n          .cupo__disponible{\n           color:#66A76F;\n           };\n      };\n  }\n  .resumen__cuenta-factura{\n    width:100%;\n    display:inline-flex;\n    justify-content:space-between;\n    margin-top:10px;\n  }\n  .style__factura{\n    color:red\n  }\n  .detail__factura{\n    width:100%;\n    height:2em;\n    background-color:#EBEBEB;\n    display:inline-flex;\n    justify-content:space-between;\n    margin-top:10px;\n    button{\n    margin:0\n    }\n  }\n \n"]);return qn=function(){return n},n}var Ln=l.b.div(qn()),Gn=function(n){var e=Object(s.f)(),t=n.titular,i=n.cupoAprobado,c=n.saldoTotalDeuda,o=n.cupoDisponible,a=n.facturas;return Object(r.jsxs)(Ln,{children:[Object(r.jsx)("div",{children:Object(r.jsxs)("article",{className:"art-personal-info",children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{children:"PAGA AQU\xcd LAS CUOTAS DE TU CR\xc9DITO"}),Object(r.jsx)("button",{children:"Pagar"})]}),Object(r.jsxs)("div",{className:"borderDiv",children:[Object(r.jsx)("p",{children:t}),Object(r.jsx)("button",{onClick:function(n){n.preventDefault(),e.push("/perfil")},children:"Actualizar Datos"})]})]})}),Object(r.jsx)("div",{children:Object(r.jsxs)("article",{children:[Object(r.jsx)("p",{children:"RESUMEN"}),Object(r.jsxs)("div",{className:"resumen__cuenta",children:[Object(r.jsxs)("div",{className:"resumen__cuenta-detail",children:[Object(r.jsx)("p",{children:"Cupo Aprobado"}),Object(r.jsx)("span",{className:"cupo__aprobado",children:i})]}),Object(r.jsxs)("div",{className:"resumen__cuenta-detail",children:[Object(r.jsx)("p",{children:"Saldo Total Deuda"}),Object(r.jsx)("span",{className:"saldo__deuda",children:c})]}),Object(r.jsxs)("div",{className:"resumen__cuenta-detail",children:[Object(r.jsx)("p",{children:"Cupo DIsponible"}),Object(r.jsx)("span",{className:"cupo__disponible",children:o})]})]})]})}),Object(r.jsx)("div",{children:Object(r.jsxs)("article",{children:[Object(r.jsx)("p",{children:"FACTURAS"}),Object(r.jsxs)("div",{className:"resumen__cuenta-factura",children:[Object(r.jsx)("p",{className:"style__factura",children:"FECHA"}),Object(r.jsx)("p",{className:"style__factura",children:"FACTURA"}),Object(r.jsx)("p",{className:"style__factura",children:"CUOTA"})]}),Object(r.jsxs)("div",{className:"detail__factura",children:[Object(r.jsx)("p",{children:Object(r.jsx)("span",{children:a[0].fecha})}),Object(r.jsx)("p",{children:Object(r.jsx)("span",{children:a[0].facturaNro})}),Object(r.jsx)("p",{children:Object(r.jsx)("span",{children:a[0].cuota})})]})]})})]})};function Qn(){var n=Object(d.a)(["\n  cursor:pointer;\n  display: inline-block;\n\theight: 23.3px;\n  margin:3.2vh 20px;\n\tposition: relative;\n  text-decoration:none;\n\twidth:30px;\n\tz-index: 10;\n\n  @media (min-width:767px){\n    display:none\n  };\n  &:focus {\n    outline: none;\n  }\n\n  & span{\n  width: 100%;\n\theight: 4px;\n\tborder-radius: 4px;\n\tdisplay: block;\n\tposition: absolute;\n\tbackground: #fff;\n\ttransition: all 0.25s ease; /* Propiedades a animar | Tiempo | Tipo animaci\xf3n*/\n\ttransform-origin : 1px;\n    \n   :first-child {\n      transform: ",";\n    }\n\n    :nth-child(2) {\n      top: calc(50% - 2px);\n      opacity: ",";\n      transform: ",";\n    }\n\n    :nth-child(3) {\n      bottom: 0;\n      transform: ",";\n    }\n  };\n\n"]);return Qn=function(){return n},n}function Hn(){var n=Object(d.a)(["\nbackground-color:#FDD50F;\nwidth:100%;\nheight:10vh;\n"]);return Hn=function(){return n},n}var Xn=l.b.header(Hn()),Jn=l.b.a(Qn(),(function(n){return n.open?"rotate(45deg)":"rotate(0)"}),(function(n){return n.open?"0":"1"}),(function(n){return n.open?"translateX(20px)":"translateX(0)"}),(function(n){return n.open?"rotate(-45deg)":"rotate(0)"})),Mn=function(n){var e=n.open,t=n.setOpen;return Object(r.jsx)(Xn,{children:Object(r.jsxs)(Jn,{open:e,onClick:function(n){n.preventDefault(),t(!e)},children:[Object(r.jsx)("span",{}),Object(r.jsx)("span",{}),Object(r.jsx)("span",{})]})})};function Vn(){var n=Object(d.a)(["\n\n\tdisplay: flex;\n  flex-direction: column;\n  justify-content: center;\n  background: #7C7C7C;\n  height: 100vh;\n  text-align: left;\n  padding: 2rem;\n  position: absolute;\n  top: 0;\n  left: 0;\n  transition: transform 0.3s ease-in-out;\n\ttransform: ",";\n  width:100%;\n\tz-index:2;\n\n  @media (min-width: 767px) {\n    display: none;\n  };\n\n\tul{\n\t\tposition:absolute;\n\t\ttop:4rem;\n\t}\n\n  li {\n    font-size: 1.2rem;\n    text-transform: uppercase;\n    padding: 1rem 0;\n    font-weight: bold;\n    letter-spacing: 0.1rem;\n    transition: color 0.3s linear;\n    \n\t\t @media (min-width: 375px) {\n    font-size: 1.2rem;\n    };\n\t\t @media (min-width: 480px) {\n    font-size: 1.6rem;\n    };\n\n    &:hover {\n\t\t\tcursor:pointer;\n\t\t\tcolor: rgba(255,255,255,1);\n\t    background-color:rgba(255,255,255,0.4);\n    };\n  }\n\n  a{\n    text-decoration:none;\n    color: rgba(255,255,255,0.75);\n  }\n"]);return Vn=function(){return n},n}var Zn=l.b.nav(Vn(),(function(n){return n.open?"translateX(0)":"translateX(-100%)"})),Wn=function(n){var e=n.open;return Object(r.jsx)(Zn,{open:e,children:Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsx)(a.b,{to:"/resumen",children:"Resumen"})}),Object(r.jsx)("li",{children:Object(r.jsx)(a.b,{to:"/facturas",children:"pagar facturas"})}),Object(r.jsx)("li",{children:Object(r.jsx)(a.b,{to:"/historial",children:"Historial de pagos"})}),Object(r.jsx)("li",{children:Object(r.jsx)(a.b,{to:"/puntos",children:"puntos de ventas"})}),Object(r.jsx)("li",{children:Object(r.jsx)(a.b,{to:"/documentos",children:"Documentos"})}),Object(r.jsx)("li",{children:Object(r.jsx)(a.b,{to:"/perfil",children:"Perfil"})})]})})};function Kn(){var n=Object(d.a)(["\nmargin:0;\npadding:0;\ntext-align:center;\n\n& a{\n  color:#272727;\n  display:block;\n  font-size:12px;\n  line-height: 13px;\n  min-height:90px;\n  text-decoration:none;\n  text-transform:uppercase;\n  padding:11px 0 0;\n  vertical-align: middle;\n}\n\n"]);return Kn=function(){return n},n}function Yn(){var n=Object(d.a)(["\n  display:none;\n\n  @media (min-width: 767px){\n  display:block;\n  background-color:#d5ddec;\n  height:100vh ;\n  left:0;\n  position:fixed;\n  top:0;\n  width:6em;\n  }\n"]);return Yn=function(){return n},n}function $n(){var n=Object(d.a)(["\n","\n","\n\n"]);return $n=function(){return n},n}var ne=l.b.section($n(),"",""),ee=l.b.div(Yn()),te=l.b.ul(Kn()),re=function(n){var e=n.children,t=Object(i.useState)(!1),c=Object(v.a)(t,2),o=c[0],s=c[1];return Object(r.jsxs)(ne,{children:[Object(r.jsxs)("div",{children:[Object(r.jsx)(Mn,{open:o,setOpen:s}),Object(r.jsx)(Wn,{open:o})]}),Object(r.jsx)(ee,{children:Object(r.jsxs)(te,{children:[Object(r.jsx)("li",{children:Object(r.jsx)(a.b,{to:"/resumen",children:Object(r.jsx)("span",{children:"Resumen"})})}),Object(r.jsx)("li",{children:Object(r.jsx)(a.b,{to:"/facturas",children:Object(r.jsx)("span",{children:"pagar facturas"})})}),Object(r.jsx)("li",{children:Object(r.jsx)(a.b,{to:"/historial",children:Object(r.jsx)("span",{children:"Historial de pagos"})})}),Object(r.jsx)("li",{children:Object(r.jsx)(a.b,{to:"/puntos",children:Object(r.jsx)("span",{children:"puntos de ventas"})})}),Object(r.jsx)("li",{children:Object(r.jsx)(a.b,{to:"/documentos",children:Object(r.jsx)("span",{children:"Documentos"})})}),Object(r.jsx)("li",{children:Object(r.jsx)(a.b,{to:"/perfil",children:Object(r.jsx)("span",{children:"Perfil"})})})]})}),e]})},ie=Object(F.b)((function(n){return{credits:n.credits}}),null)((function(n){var e=n.credits;return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(re,{children:Object(r.jsx)(Pn,{children:e.map((function(n){return Object(r.jsx)(Gn,Object(g.a)({},n),n.id)}))})})})}));function ce(){var n=Object(d.a)(["\n.content{\n  margin-top:20px;\n  letter-spacing:1px;\n}\n"]);return ce=function(){return n},n}var oe=l.b.div(ce()),ae=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(re,{children:Object(r.jsx)(Pn,{children:Object(r.jsx)(oe,{children:Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{children:"FACTURAS"}),Object(r.jsxs)("div",{className:"content",children:[Object(r.jsx)("p",{children:"Puedes pagar varias facturas al mismo tiempo."}),Object(r.jsx)("span",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis suscipit ut eos minus quidem at facilis consequuntur quibusdam, dignissimos voluptas fuga sequi repellat velit adipisci. Impedit dolor illo pariatur corrupti!"})]})]})})})})})},se=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(re,{children:Object(r.jsx)(Pn,{children:Object(r.jsx)("h1",{children:"Historial"})})})})},de=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(re,{children:Object(r.jsx)(Pn,{children:Object(r.jsx)("h1",{children:"Puntos"})})})})},le=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(re,{children:Object(r.jsx)(Pn,{children:Object(r.jsx)("h1",{children:"Documentos"})})})})};function ue(){var n=Object(d.a)(["\n  background-color: #FAFAFA;\n  border:1px solid #BCBCBC;\n  border-radius:5px;\n  color:#2d2d2d;\n  font-size: 14px;\n  font-family: 'Quicksand', sans-serif;\n  padding:10px;\n  margin:5px 0;\n  outline:none;\n  width:inherit;\n"]);return ue=function(){return n},n}function je(){var n=Object(d.a)(["\ndisplay: grid;\nflex-direction: column;\nmargin-top:20px;\nmin-width:300px;\n\n\n @media (min-width: 990px) {\n   grid-template-columns:1fr 1fr;\n   grid-gap:20px;\n   width:700px;\n\n }\ndiv{\n  display:flex;\n  flex-direction:column;\n  margin:5px 0;\n}\n"]);return je=function(){return n},n}function be(){var n=Object(d.a)(["\ndisplay:grid;\ngrid-gap:20px;\njustify-content:center;\n\n"]);return be=function(){return n},n}function pe(){var n=Object(d.a)(["\ndisplay:grid;\ngrid-gap:20px;\njustify-content:center;\n\n& article{\n  box-shadow:0 3px 3px rgb(0 0 0 / 10%);\n  background-color:#FFFFFF;\n  padding:15px;\n  min-height:120px;\n  border-radius:7px;\n  width:330px;\n  span{\n    font-size:13px;\n  };\n .info__nombre{\n   margin:0 0 20px 0;\n }\n @media (min-width: 480px) {\n  width:430px;\n }\n @media (min-width: 600px) {\n  width:570px;\n }\n @media (min-width: 767px) {\n  width:620px;\n }\n @media (min-width: 990px) {\n  width:890px;\n  .container__article{\n    display:flex;\n    justify-content: space-between;\n    padding:10px 70px 0;\n  }\n  span{\n    font-size:15px;\n  };\n  p{\n    font-size:20px;\n  };\n }\n};\n.art-update-info{\n    display:flex;\n    flex-direction:column;\n\n  button{\n    border:none;\n    border-radius:5px;\n    cursor:pointer;\n    padding:10px;\n    width:100%;\n    background-color:#FF0000;\n    color:#fefefe;\n    outline:none;\n    margin:20px 0 0 0;\n  };\n}\n"]);return pe=function(){return n},n}var xe=l.b.div(pe()),he=l.b.div(be()),fe=l.b.form(je()),Oe=l.b.input(ue()),me={updateInfoUser:y},ge=Object(F.b)(null,me)((function(){var n=Object(i.useState)({}),e=Object(v.a)(n,2),t=e[0],c=e[1],o=function(n){c(Object(g.a)(Object(g.a)({},t),{},Object(m.a)({},n.target.name,n.target.value))),console.log(t)};return Object(r.jsxs)(xe,{children:[Object(r.jsx)("div",{children:Object(r.jsx)("article",{children:Object(r.jsxs)("div",{className:"container__article",children:[Object(r.jsxs)("div",{className:"info__nombre",children:[Object(r.jsx)("span",{children:"Nombre Completo"}),Object(r.jsx)("p",{children:"JHOAN CARLOS CANCHILA LAZARO"})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("span",{children:"c\xe9dula"}),Object(r.jsx)("p",{children:"1019012524"})]})]})})}),Object(r.jsx)("div",{children:Object(r.jsx)("article",{className:"art-update-info",children:Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{children:Object(r.jsx)("span",{children:"Los Datos Marcados con (*) son obligatorios"})}),Object(r.jsx)("div",{children:Object(r.jsx)(he,{children:Object(r.jsxs)(fe,{onSubmit:function(n){n.preventDefault(),y(t)},children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{htmlFor:"",children:"(*)Email"}),Object(r.jsx)(Oe,{type:"email",required:"required",name:"email",onChange:o})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{htmlFor:"",children:"(*)Celular"}),Object(r.jsx)(Oe,{type:"tel",required:"required",name:"celular",onChange:o})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{htmlFor:"",children:"Tel\xe9fono"}),Object(r.jsx)(Oe,{type:"tel",name:"telefono",onChange:o})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{htmlFor:"",children:"(*)Direcci\xf3n"}),Object(r.jsx)(Oe,{type:"text",required:"required",name:"direccion",onChange:o})]}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{children:"Guardar Informaci\xf3n"})})]})})})]})})})]})})),ve=Object(F.b)((function(n){return{users:n.users}}),null)((function(n){n.users;return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(re,{children:Object(r.jsx)(Pn,{children:Object(r.jsx)(ge,{})})})})}));var we=function(){return Object(r.jsx)(a.a,{children:Object(r.jsxs)(O,{children:[Object(r.jsx)(j,{}),Object(r.jsxs)(s.c,{children:[Object(r.jsx)(s.a,{exact:!0,path:"/",component:Tn}),Object(r.jsx)(s.a,{exact:!0,path:"/login",component:G}),Object(r.jsx)(s.a,{exact:!0,path:"/registro",component:on}),Object(r.jsx)(s.a,{exact:!0,path:"/resumen",component:ie}),Object(r.jsx)(s.a,{exact:!0,path:"/facturas",component:ae}),Object(r.jsx)(s.a,{exact:!0,path:"/historial",component:se}),Object(r.jsx)(s.a,{exact:!0,path:"/puntos",component:de}),Object(r.jsx)(s.a,{exact:!0,path:"/documentos",component:le}),Object(r.jsx)(s.a,{exact:!0,path:"/perfil",component:ve})]})]})})},ye=t(18),Fe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ye.b,_e=Object(ye.c)((function(n,e){switch(e.type){case"LOGIN":case"REGISTER":case"UPDATE_INFO_USER":return Object(g.a)(Object(g.a)({},n),{},{users:e.payload});default:return n}}),{users:{},credits:[{id:1,titular:"Jhoan Canchila",identificacion:"1111111111",cupoAprobado:"2,500.000",saldoTotalDeuda:"1,500.000",cupoDisponible:"1,200.000",interesesPrestamo:"200,000",numeroCuotas:12,facturas:[{id:1,fecha:"2021-05-23",facturaNro:"231222",cuota:"120,000",estado:"activa"}]}]},Fe());o.a.render(Object(r.jsx)(F.a,{store:_e,children:Object(r.jsx)(we,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.9d79b43a.chunk.js.map