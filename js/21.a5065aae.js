(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[21],{"7c21":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-page",{attrs:{padding:""}},[n("q-list",{attrs:{link:""}},[n("q-item-label",{attrs:{header:""}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-md-3"},[n("q-input",{attrs:{color:"indigo",label:"Filtar resultados"},scopedSlots:t._u([{key:"prepend",fn:function(){return[n("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})],1)])]),t._l(t.options,(function(e){return n("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:e.id,attrs:{tag:"label"}},[n("q-item-section",{attrs:{avatar:""}},[n("q-checkbox",{attrs:{val:e},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1),n("q-item-section",[n("q-item-label",[t._v(t._s(e.nome))]),n("q-item-label",{attrs:{caption:""}},[t._v(t._s(e.descricao))])],1)],1)}))],2),n("div",{staticClass:"q-pa-lg flex flex-center"},[n("q-pagination",{attrs:{color:"blue",max:t.maxCurrent,"boundary-links":!0},model:{value:t.current,callback:function(e){t.current=e},expression:"current"}})],1)],1)},i=[],s=n("d624"),a=n.n(s),o=n("9530"),c=n.n(o);function l(){var t=a()(["\n            query($idEmpresa: ID!) {\n              GrupoEmpresa(idEmpresa: $idEmpresa) {\n                id\n                nome\n                descricao\n                idEmpresa\n                Empresa {\n                  id\n                  cnpj\n                  razaoSocial\n                  nomeFantasia\n                  status\n                  dataSuspensao\n                }\n              }\n            }\n          "]);return l=function(){return t},t}var u={props:["UpdateGrupo"],data:function(){return{selected:[],gruposAll:[],options:[],current:1,text:""}},watch:{UpdateGrupo:function(){this.UpdateGrupo&&this.update()},text:function(){var t=this;this.options=this.gruposAll.filter((function(e){return e.nome.toLowerCase().indexOf(t.text.toLowerCase())>-1})).filter((function(e,n){if(n>=10*(t.current-1)&&n<10*t.current)return e}))},current:function(){var t=this;this.options=this.gruposAll.filter((function(e,n){if(n>=10*(t.current-1)&&n<10*t.current)return e}))},selected:function(){this.selected.length>1&&this.selected.splice(0,1),this.$emit("selected",this.selected)}},computed:{maxCurrent:function(){return this.gruposAll.length/10<=1?1:Math.ceil(this.gruposAll.length/10)}},methods:{spinner:function(t){this.$store.dispatch("layout/setVisibleSpinner",t)},update:function(){var t=this;this.spinner(!0),this.$apollo.query({query:c()(l()),variables:{idEmpresa:this.$store.getters["auth/getEmpresaAtual"].id},fetchPolicy:"no-cache"}).then((function(e){t.gruposAll=e.data.GrupoEmpresa,t.options=t.gruposAll.filter((function(e,n){if(n>=10*(t.current-1)&&n<10*t.current)return e})),t.spinner(!1)}))}},mounted:function(){this.update()},beforeDestroy:function(){this.$emit("selected",[])}},p=u,d=n("2877"),f=n("eebe"),m=n.n(f),h=n("9989"),b=n("1c1c"),v=n("0170"),g=n("27f9"),x=n("0016"),q=n("66e5"),k=n("4074"),w=n("8f8e"),y=n("3b16"),E=n("714f"),Q=Object(d["a"])(p,r,i,!1,null,null,null);e["default"]=Q.exports;m()(Q,"components",{QPage:h["a"],QList:b["a"],QItemLabel:v["a"],QInput:g["a"],QIcon:x["a"],QItem:q["a"],QItemSection:k["a"],QCheckbox:w["a"],QPagination:y["a"]}),m()(Q,"directives",{Ripple:E["a"]})}}]);