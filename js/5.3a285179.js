(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"013f":function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("q-layout",[t("q-page",{staticClass:"row"},[t("div",{staticClass:"col-0 col-sm-6 col-md-8"},[t("q-parallax",{attrs:{height:e.tamanho},scopedSlots:e._u([{key:"media",fn:function(){return[t("img",{attrs:{src:"statics/img/walppaper.jpeg"}})]},proxy:!0}])})],1),t("div",{staticClass:"row justify-center col-12 col-sm-6 col-md-4"},[t("div",{staticClass:"column justify-center "},[t("img",{staticClass:"q-ml-xl",staticStyle:{width:"150px"},attrs:{alt:"Hdoc Logo",src:"statics/hdoc-logo.png"}}),e.mensagem.length>1?t("q-banner",{staticClass:"text-white bg-red",attrs:{"inline-actions":""}},[e._v(e._s(e.mensagem))]):e._e(),t("q-input",{staticClass:"q-pa-lg",attrs:{color:"blue-5",type:"email",label:"E-mail",hint:"Digite o e-mail",rules:[function(e){return null!=e.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi)||"Por favor digite um e-mail valido!"}]},on:{keypress:function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"enter",13,n.key,"Enter")?null:e.login(n)}},scopedSlots:e._u([{key:"prepend",fn:function(){return[t("q-icon",{attrs:{name:"email"}})]},proxy:!0}]),model:{value:e.email,callback:function(n){e.email=n},expression:"email"}}),t("q-input",{staticClass:"q-pa-lg",attrs:{color:"blue-5",type:e.isPwd?"password":"text",hint:"Digite a senha"},on:{keypress:function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"enter",13,n.key,"Enter")?null:e.login(n)}},scopedSlots:e._u([{key:"prepend",fn:function(){return[t("q-icon",{staticClass:"cursor-pointer",attrs:{name:e.isPwd?"visibility_off":"visibility"},on:{click:function(n){e.isPwd=!e.isPwd}}})]},proxy:!0}]),model:{value:e.senha,callback:function(n){e.senha=n},expression:"senha"}}),t("q-btn",{staticClass:"q-ma-lg",attrs:{color:"primary",label:"Entrar"},on:{click:e.login}}),t("a",{staticClass:"q-pl-lg",attrs:{href:"#/RedefinirSenha"}},[e._v("Esqueceu a senha ?")])],1)])])],1)},s=[],i=t("d624"),o=t.n(i),r=t("9530"),l=t.n(r);function c(){var e=o()(["\n            mutation($username: String!, $password: String!) {\n              login(username: $username, password: $password) {\n                access_token\n              }\n            }\n          "]);return c=function(){return e},e}var u={name:"Login",data:function(){return{email:"",senha:"",isPwd:!0,mensagem:""}},computed:{tamanho:function(){return window.innerHeight}},watch:{email:function(){this.mensagem=""},senha:function(){this.mensagem=""}},methods:{login:function(){var e=this;this.$apollo.mutate({mutation:l()(c()),variables:{username:this.email,password:this.senha}}).then((function(n){window.localStorage.setItem("token",n.data.login.access_token),e.$router.push({path:"/documentos"})})).catch((function(n){console.log("Error! ",n),e.mensagem="E-mail ou Senha Invalida!"}))}},resertSenha:function(){this.$router.push({name:"RedefinirSenha"})}},m=u,p=t("2877"),d=t("eebe"),h=t.n(d),f=t("4d5a"),g=t("9989"),w=t("639d"),y=t("54e1"),k=t("27f9"),v=t("0016"),b=t("9c40"),_=Object(p["a"])(m,a,s,!1,null,null,null);n["default"]=_.exports;h()(_,"components",{QLayout:f["a"],QPage:g["a"],QParallax:w["a"],QBanner:y["a"],QInput:k["a"],QIcon:v["a"],QBtn:b["a"]})}}]);