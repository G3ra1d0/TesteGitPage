(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"4f22":function(t,e,a){},6247:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("q-btn-dropdown",{attrs:{flat:"",label:t.name}},[a("q-list",[a("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""},on:{click:function(e){t.modalEmpresa=!0}}},[a("q-item-section",[a("q-item-label",[t._v("Empresas")])],1)],1),a("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""},on:{click:function(e){return t.sair()}}},[a("q-item-section",[a("q-item-label",[t._v("Sair")])],1)],1)],1)],1),a("q-dialog",{attrs:{persistent:"","transition-show":"rotate","transition-hide":"rotate"},model:{value:t.modalEmpresa,callback:function(e){t.modalEmpresa=e},expression:"modalEmpresa"}},[a("q-card",{staticClass:"my-card"},[a("q-card-section",{staticClass:"bg-primary text-white"},[a("div",{staticClass:"text-h6"},[t._v("Bem vindo ao HDOC")]),a("div",{staticClass:"text-subtitle2"},[t._v("Por favor selecione a empresa que deseja visualiza os arquivos!")])]),a("q-select",{attrs:{label:"Scale","transition-show":"scale","transition-hide":"scale",filled:"",options:t.options},model:{value:t.getEmpresa,callback:function(e){t.getEmpresa=e},expression:"getEmpresa"}}),a("q-separator"),a("q-card-actions",{attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Confirma",color:"primary"},on:{click:t.SelectEmpresa}})],1)],1)],1)],1)},r=[],i=(a("28a5"),a("d624")),o=a.n(i),n=a("9530"),c=a.n(n);function l(){var t=o()(["\n            mutation {\n              logout {\n                status\n                message\n              }\n            }\n          "]);return l=function(){return t},t}var p={data:function(){return{modalEmpresa:!1,getEmpresa:null}},methods:{SelectEmpresa:function(){var t=this,e=this.$store.getters["auth/getEmpresas"].filter((function(e){return e.nomeFantasia==t.getEmpresa}))[0];this.$store.dispatch("auth/setEmpresaAtual",e),1==this.admin||1==this.responsavel?this.$axios.get("/repositorio/indexTree/"+e.id).then((function(e){t.$store.dispatch("pastas/setPastas",e.data)})).catch((function(t){console.log(t)})):this.$axios.get("repositorio/gruposTree/"+this.$store.getters["auth/getId"]+"/"+e.id).then((function(e){t.$store.dispatch("pastas/setPastas",e.data)})).catch((function(t){console.log(t)}))},sair:function(){this.$apollo.mutate({mutation:c()(l())}).then((function(t){localStorage.removeItem("token"),location.reload()})).catch((function(t){localStorage.removeItem("token"),location.reload()}))}},computed:{options:function(){return this.$store.getters["auth/getEmpresas"].filter((function(t){return"Inativo"!=t.status})).filter((function(t){return"Suspenso"!=t.status||new Date(t.dataSuspensao.split("-"))<new Date})).map((function(t){return t.nomeFantasia}))},name:function(){return this.$store.getters["auth/getName"]},responsavel:function(){return this.$store.getters["auth/isResponsavel"]},admin:function(){return this.$store.getters["auth/isAdmin"]}},mounted:function(){1==this.$store.getters["auth/getEmpresas"].length?(this.getEmpresa=this.$store.getters["auth/getEmpresas"][0].nomeFantasia,this.SelectEmpresa()):this.$store.getters["auth/getEmpresaAtual"]?(this.getEmpresa=this.$store.getters["auth/getEmpresaAtual"].nomeFantasia,this.SelectEmpresa()):this.modalEmpresa=!0}},m=p,u=a("2877"),d=a("eebe"),f=a.n(d),h=a("f20b"),v=a("1c1c"),g=a("66e5"),q=a("4074"),b=a("0170"),w=a("24e8"),E=a("f09f"),Q=a("a370"),$=a("ddd8"),x=a("eb85"),k=a("4b7e"),C=a("9c40"),S=a("7f67"),_=Object(u["a"])(m,s,r,!1,null,null,null);e["a"]=_.exports;f()(_,"components",{QBtnDropdown:h["a"],QList:v["a"],QItem:g["a"],QItemSection:q["a"],QItemLabel:b["a"],QDialog:w["a"],QCard:E["a"],QCardSection:Q["a"],QSelect:$["a"],QSeparator:x["a"],QCardActions:k["a"],QBtn:C["a"]}),f()(_,"directives",{ClosePopup:S["a"]})},aca5:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-dialog",{attrs:{persistent:"","transition-show":"scale","transition-hide":"scale"},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[a("q-spinner-gears",{attrs:{size:"100px",dark:!0,color:"primary"}})],1)},r=[],i={name:"Spinner",data:function(){return{}},computed:{visible:function(){return this.$store.getters["layout/getVisibleSpinner"]}}},o=i,n=(a("e00e"),a("2877")),c=a("eebe"),l=a.n(c),p=a("24e8"),m=a("74f7"),u=a("cf57"),d=Object(n["a"])(o,s,r,!1,null,"55b020f8",null);e["a"]=d.exports;l()(d,"components",{QDialog:p["a"],QInnerLoading:m["a"],QSpinnerGears:u["a"]})},e00e:function(t,e,a){"use strict";var s=a("f116"),r=a.n(s);r.a},e5ab:function(t,e,a){"use strict";var s=a("4f22"),r=a.n(s);r.a},ecf3:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{staticClass:"bg-grey-1",attrs:{view:"hHh lpR fFf"}},[a("Spinner"),a("q-header",{staticClass:"bg-blue-6 text-white-8 q-py-xs",attrs:{elevated:"","height-hint":"58"}},[a("q-toolbar",[a("q-btn",{attrs:{flat:"",dense:"",round:"","aria-label":"Menu",icon:"menu"},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}}),t.$q.screen.gt.xs?a("q-btn",{staticClass:"q-ml-xs",attrs:{flat:"","no-caps":"","no-wrap":""}},[a("q-icon",{attrs:{name:"img:statics/logo/HDoc.jpg",size:"40px"}}),a("q-toolbar-title",{staticClass:"text-weight-bold",attrs:{shrink:""}},[t._v("HDOC")])],1):t._e(),a("q-space"),a("div",{staticClass:"q-gutter-sm row items-center no-wrap"},[a("Nome")],1)],1)],1),a("q-drawer",{attrs:{"show-if-above":"",bordered:"","content-class":"bg-grey-2",width:240},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[a("q-scroll-area",{staticClass:"fit"},[a("q-list",{attrs:{padding:""}},[a("q-expansion-item",{attrs:{group:"principal",flat:"",icon:"mdi-folder-account","header-class":"text-blue-6",label:"Cadastro"}},[a("q-list",[a("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:"",to:"/documentos"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{staticClass:"text-blue-6",attrs:{name:"mdi-archive"}})],1),a("q-item-section",[a("q-item-label",[t._v("Documentos")])],1)],1),a("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:"",to:"/seguranca"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{staticClass:"text-blue-6",attrs:{name:"mdi-security"}})],1),a("q-item-section",[a("q-item-label",[t._v("Segurança")])],1)],1),a("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:"",to:"/dashboard"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{staticClass:"text-blue-6",attrs:{name:"mdi-chart-pie"}})],1),a("q-item-section",[a("q-item-label",[t._v("Dashboard")])],1)],1)],1)],1),a("q-separator",{staticClass:"q-my-md"}),a("q-list",[1==t.admin?a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",to:"/cadastro/empresa"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{color:"primary",name:"mdi-factory"}})],1),a("q-item-section",[t._v("Empresa")])],1):t._e(),1==t.admin||1==t.responsavel?a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",to:"/cadastro/usuario"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{color:"primary",name:"mdi-account"}})],1),a("q-item-section",[t._v("Usuario")])],1):t._e(),1==t.admin||1==t.responsavel?a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",to:"/cadastro/grupo"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{color:"primary",name:"mdi-account-plus"}})],1),a("q-item-section",[t._v("Grupos")])],1):t._e(),1==t.admin||1==t.responsavel?a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",to:"/cadastro/repositorio"},on:{click:function(e){return t.Repositorio()}}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{color:"primary",name:"mdi-folder"}})],1),a("q-item-section",[t._v("Repositorio")])],1):t._e()],1)],1)],1)],1),a("q-page-container",[a("router-view",{on:{selected:function(e){t.selected=e}}})],1)],1)},r=[],i=a("6247"),o=a("aca5"),n={name:"Documentos",components:{Nome:i["a"],Spinner:o["a"]},data:function(){return{leftDrawerOpen:!1,modalEmpresa:!0,getEmpresa:null,repositorios:"",selected:[]}},computed:{responsavel:function(){return this.$store.getters["auth/isResponsavel"]},admin:function(){return this.$store.getters["auth/isAdmin"]},options:function(){return this.$store.getters["auth/getEmpresas"].map((function(t){return t.nome_fantasia}))},grupo:function(){return this.$store.getters["auth/getGrupo"]}},methods:{SelectEmpresa:function(){var t=this,e=this.$store.getters["auth/getEmpresas"].filter((function(e){return e.nome_fantasia==t.getEmpresa}))[0];this.$store.dispatch("auth/setEmpresaAtual",e);var a={headers:{Authorization:"Bearer "+this.$store.getters["auth/getToken"],"Content-Type":"application/json",Accept:"application/json"}};this.$axios.get("/repositorio/indexTree/"+e.id,a).then((function(e){t.repositorios=e.data})).catch((function(t){console.log(t)}))}}},c=n,l=(a("e5ab"),a("2877")),p=a("eebe"),m=a.n(p),u=a("4d5a"),d=a("e359"),f=a("65c6"),h=a("9c40"),v=a("0016"),g=a("6ac5"),q=a("2c91"),b=a("9404"),w=a("4983"),E=a("1c1c"),Q=a("3b73"),$=a("66e5"),x=a("4074"),k=a("0170"),C=a("eb85"),S=a("09e3"),_=a("7f67"),y=a("714f"),D=Object(l["a"])(c,s,r,!1,null,null,null);e["default"]=D.exports;m()(D,"components",{QLayout:u["a"],QHeader:d["a"],QToolbar:f["a"],QBtn:h["a"],QIcon:v["a"],QToolbarTitle:g["a"],QSpace:q["a"],QDrawer:b["a"],QScrollArea:w["a"],QList:E["a"],QExpansionItem:Q["a"],QItem:$["a"],QItemSection:x["a"],QItemLabel:k["a"],QSeparator:C["a"],QPageContainer:S["a"]}),m()(D,"directives",{ClosePopup:_["a"],Ripple:y["a"]})},f116:function(t,e,a){}}]);