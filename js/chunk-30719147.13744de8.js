(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-30719147"],{"19ec":function(e,t,n){"use strict";n("c939")},"246c":function(e,t,n){e.exports=n.p+"img/sadState2.ae4a8512.png"},"29e4":function(e,t,n){},"29e5":function(e,t,n){"use strict";n.r(t);n("ac1f"),n("5319");var c=n("7a23"),i={class:"cards"},o=Object(c["createTextVNode"])("Зрозуміло, дякую"),r=Object(c["createTextVNode"])("Зрозуміло, дякую"),a=Object(c["createTextVNode"])("Розпочати заново"),s=["innerHTML"],l=Object(c["createTextVNode"])("Зрозуміло, дякую"),d=Object(c["createElementVNode"])("h2",null,"Нещасний випадок",-1),u=Object(c["createElementVNode"])("p",null,' Ваш робітник пройшов лікування в міській лікарні і наразі потребує застосування профілактичних засобів для покращення загального стану роботи та підвищення ефективності своєї роботи. Протягом двох ігрових років вам буде доступний додатковий розділ "Профілактика". Поставтеся до цих засобів відповідально, бо від цього сильно залежить успіх вашої роботи. ',-1),b=Object(c["createTextVNode"])("Зрозуміло, дякую");function m(e,t,n,m,p,O){var g=Object(c["resolveComponent"])("employee-card"),j=Object(c["resolveComponent"])("el-button"),f=Object(c["resolveComponent"])("custom-dialog"),h=Object(c["resolveComponent"])("arrow-button");return Object(c["openBlock"])(),Object(c["createElementBlock"])(c["Fragment"],null,[Object(c["createElementVNode"])("div",i,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(e.employees,(function(t,n){return Object(c["openBlock"])(),Object(c["createBlock"])(g,{employee:t,key:n,onSetSetting:e.setSetting},null,8,["employee","onSetSetting"])})),128))]),Object(c["createVNode"])(f,{show:e.missingSettingAlertVidible,onHideDialog:t[1]||(t[1]=function(t){return e.setMissingSettingAlertVisible(!1)})},{default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("p",null,Object(c["toDisplayString"])(e.missingSettingAlertText),1),Object(c["createVNode"])(j,{onClick:t[0]||(t[0]=function(t){return e.setMissingSettingAlertVisible(!1)}),type:"danger"},{default:Object(c["withCtx"])((function(){return[o]})),_:1})]})),_:1},8,["show"]),Object(c["createVNode"])(f,{show:e.overdozeAlertVisible,onHideDialog:t[3]||(t[3]=function(t){return e.setOverdozeAlertVisible(!1)})},{default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("p",null,Object(c["toDisplayString"])(e.overdozeReport),1),Object(c["createVNode"])(j,{onClick:t[2]||(t[2]=function(t){return e.setOverdozeAlertVisible(!1)}),type:"danger"},{default:Object(c["withCtx"])((function(){return[r]})),_:1})]})),_:1},8,["show"]),Object(c["createVNode"])(f,{show:e.gameOver,closeButton:!1},{default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("p",null,Object(c["toDisplayString"])(e.gameOverReport),1),Object(c["createVNode"])(j,{onClick:t[4]||(t[4]=function(t){e.setGameOver(!1),e.pageReload()}),type:"danger"},{default:Object(c["withCtx"])((function(){return[a]})),_:1})]})),_:1},8,["show"]),Object(c["createVNode"])(f,{show:e.diseaseAlertVisible,onHideDialog:t[6]||(t[6]=function(t){return e.setDiseaseAlertVisible(!1)})},{default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("p",{innerHTML:e.getDiseasesReport},null,8,s),Object(c["createVNode"])(j,{onClick:t[5]||(t[5]=function(t){return e.setDiseaseAlertVisible(!1)}),type:"danger"},{default:Object(c["withCtx"])((function(){return[l]})),_:1})]})),_:1},8,["show"]),Object(c["createVNode"])(f,{show:e.accidentAlert,closeButton:!1},{default:Object(c["withCtx"])((function(){return[d,Object(c["createElementVNode"])("p",null,Object(c["toDisplayString"])(String(e.currentAccident.text).replace("_",e.currentAccident.employee)),1),u,Object(c["createVNode"])(j,{onClick:e.accidentAlertClick,type:"danger"},{default:Object(c["withCtx"])((function(){return[b]})),_:1},8,["onClick"])]})),_:1},8,["show"]),Object(c["createVNode"])(h,{func:e.nextYearWrap},{default:Object(c["withCtx"])((function(){return[Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.yearCounter),1)]})),_:1},8,["func"])],64)}var p=n("5530"),O=n("5502"),g={key:0,class:"card noselect"},j={class:"card__position"},f={class:"card__photo"},h=["src"],y={class:"card__stats"},v=Object(c["createElementVNode"])("span",null,"Здоров'я",-1),V=Object(c["createElementVNode"])("span",null,"Слух",-1),w=Object(c["createElementVNode"])("span",null,"Зір",-1),S={class:"card__settings"},k={key:1};function x(e,t){var n=Object(c["resolveComponent"])("el-progress"),i=Object(c["resolveComponent"])("collapse-item-accident"),o=Object(c["resolveComponent"])("collapse-item-overdoze"),r=Object(c["resolveComponent"])("collapse-item-disease"),a=Object(c["resolveComponent"])("collapse-item"),s=Object(c["resolveComponent"])("el-collapse"),l=Object(c["resolveComponent"])("el-skeleton-item"),d=Object(c["resolveComponent"])("el-skeleton");return e.mounted?(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",g,[Object(c["createElementVNode"])("div",j,Object(c["toDisplayString"])(e.employee.translation)+" ("+Object(c["toDisplayString"])(e.statePerc)+"%) ",1),Object(c["createElementVNode"])("div",f,[Object(c["createElementVNode"])("img",{src:e.setImage(),alt:"employee_image"},null,8,h)]),Object(c["createElementVNode"])("div",y,[Object(c["createVNode"])(n,{"text-inside":!0,"stroke-width":22,percentage:e.employee.state.hp>=0?e.employee.state.hp:0,status:e.setStatus("hp")},{default:Object(c["withCtx"])((function(){return[v]})),_:1},8,["percentage","status"]),Object(c["createVNode"])(n,{"text-inside":!0,"stroke-width":22,percentage:e.employee.state.hearing>=0?e.employee.state.hearing:0,status:e.setStatus("hearing")},{default:Object(c["withCtx"])((function(){return[V]})),_:1},8,["percentage","status"]),Object(c["createVNode"])(n,{"text-inside":!0,"stroke-width":22,percentage:e.employee.state.vision>=0?e.employee.state.vision:0,status:e.setStatus("vision")},{default:Object(c["withCtx"])((function(){return[w]})),_:1},8,["percentage","status"])]),Object(c["createElementVNode"])("div",S,[Object(c["createVNode"])(s,{modelValue:e.activeSetting,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.activeSetting=t})},{default:Object(c["withCtx"])((function(){return[Object(c["withDirectives"])(Object(c["createVNode"])(i,{accident:e.accident},null,8,["accident"]),[[c["vShow"],e.isTreat()]]),(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(e.getOptionalSettings(e.employee),(function(t){return Object(c["withDirectives"])((Object(c["openBlock"])(),Object(c["createBlock"])(o,{key:t.eId,overdoze:t},null,8,["overdoze"])),[[c["vShow"],e.employee.optionalSettings.length]])})),128)),(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(e.getDiseases(e.employee),(function(t){return Object(c["withDirectives"])((Object(c["openBlock"])(),Object(c["createBlock"])(r,{key:t.eId,disease:t},null,8,["disease"])),[[c["vShow"],e.employee.diseases.length]])})),128)),(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(e.getSettings(e.employee),(function(t,n){return Object(c["openBlock"])(),Object(c["createBlock"])(a,{key:t+n,setting:t,employeePosition:e.employee.translation,id:n,onSetSetting:function(t){return e.$emit("setSetting",[e.employee.id,t])}},null,8,["setting","employeePosition","id","onSetSetting"])})),128))]})),_:1},8,["modelValue"])])])):(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",k,[Object(c["createVNode"])(d,{throttle:400,animated:"",style:{width:"20vw",display:"flex","flex-direction":"column","align-items":"center","margin-top":"10px"}},{template:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(l,{variant:"p",style:{width:"75%","margin-bottom":"5px"}}),Object(c["createVNode"])(l,{variant:"image",style:{width:"100%",height:"240px","margin-bottom":"5px"}}),Object(c["createVNode"])(l,{variant:"rect",style:{width:"100%","margin-bottom":"5px"}}),Object(c["createVNode"])(l,{variant:"rect",style:{width:"100%","margin-bottom":"5px"}}),Object(c["createVNode"])(l,{variant:"rect",style:{width:"100%","margin-bottom":"5px"}}),(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(e.getSettings(e.employee),(function(e,t){return Object(c["openBlock"])(),Object(c["createBlock"])(l,{key:e+t,variant:"rect",style:{width:"100%",height:"20vh","margin-bottom":"5px"}})})),128))]})),_:1})]))}var A=n("b85c"),N=(n("07ac"),n("b64b"),n("4fad"),n("e9c4"),n("3028")),C=n("74a3"),E=Object(c["defineComponent"])({name:"EmployeeCard",data:function(){return{activeSetting:Object(c["ref"])(0),statePerc:0,images:{smileImage:n("f096"),middleStateImage:n("b732"),sadState1:n("6a1e"),sadState2:n("246c")},mounted:!1}},computed:Object(p["a"])({},Object(O["e"])("employeeModule",{isAccident:function(e){return e.isAccident},accident:function(e){return e.currentAccident}})),props:{employee:{type:Object,required:!0}},methods:{setStatus:function(e){return e=this.employee.state[e],e<=100&&e>=70?"success":e<70&&e>30?"warning":"exception"},setImage:function(){for(var e=0,t=0,n=Object.values(this.employee.state);t<n.length;t++){var c=n[t];e+=+c}return e=Math.floor(e/Object.keys(this.employee.state).length),this.statePerc=e,e<=100&&e>=70?this.images.smileImage:e<70&&e>=40?this.images.middleStateImage:e<40&&e>=20?this.images.sadState1:this.images.sadState2},getSettings:function(e){for(var t=[],n=0,c=Object.entries(e.settings);n<c.length;n++){var i=c[n];i[1]&&t.push(Object(p["a"])({translation:i[0]},N["a"][i[0]]))}return t},getOptionalSettings:function(e){return e.optionalSettings.length?e.optionalSettings:[]},isTreat:function(){return this.isAccident&&this.employee.id===this.accident.emplIndex+1},getDiseases:function(e){if(!e.diseases.length)return[];var t,n,c=[],i=Object(A["a"])(e.diseases);try{for(i.s();!(n=i.n()).done;){var o=n.value;t=JSON.parse(JSON.stringify(C["a"][o].treatmentWays));for(var r=0,a=Object.keys(t);r<a.length;r++){var s=a[r];t[s].engName=s}c.push({eId:e.id,translation:C["a"][o].translation,engName:o,treatmentWays:t})}}catch(l){i.e(l)}finally{i.f()}return c}},mounted:function(){this.mounted=!0}}),B=(n("19ec"),n("6b0d")),_=n.n(B);const D=_()(E,[["render",x]]);var R=D,z=Object(c["defineComponent"])({name:"EmployeeManagement",components:{EmployeeCard:R},methods:Object(p["a"])(Object(p["a"])(Object(p["a"])({},Object(O["d"])("employeeModule",{setSetting:"setSetting",setOverdozeAlertVisible:"setOverdozeAlertVisible",setGameOver:"setGameOver",setMissingSettingAlertVisible:"setMissingSettingAlertVisible",setAccidentAlert:"setAccidentAlert",updateStateAccident:"updateStateAccident",setDiseaseAlertVisible:"setDiseaseAlertVisible"})),Object(O["b"])("employeeModule",{nextYear:"nextYear"})),{},{keyDownListener:function(e){"ArrowRight"===e.key&&this.nextYear()},pageReload:function(){window.location.reload()},nextYearWrap:function(){this.nextYear()},accidentAlertClick:function(){this.setAccidentAlert(!1),this.updateStateAccident(this.currentAccident.emplIndex,this.currentAccident.damage)}}),computed:Object(p["a"])(Object(p["a"])({},Object(O["e"])("employeeModule",{employees:function(e){return e.employees},yearCounter:function(e){return e.yearCounter},overdozeReport:function(e){return e.overdozeReport},overdozeAlertVisible:function(e){return e.overdozeAlertVisible},gameOver:function(e){return e.gameOver},missingSettingAlertVidible:function(e){return e.missingSettingAlertVidible},missingSettingAlertText:function(e){return e.missingSettingAlertText},gameOverReport:function(e){return e.gameOverReport},isAccident:function(e){return e.isAccident},currentAccident:function(e){return e.currentAccident},accidentAlert:function(e){return e.accidentAlert},diseaseAlertVisible:function(e){return e.diseaseAlertVisible}})),Object(O["c"])("employeeModule",{getDiseasesReport:"getDiseasesReport"})),mounted:function(){this.$store.state.isAuth?this.$store.state.gameFinished&&this.$router.push({name:"ResultReport"}):this.$router.push({name:"Registration"}),window.addEventListener("keydown",this.keyDownListener)},unmounted:function(){window.removeEventListener("keydown",this.keyDownListener)}});n("31eb");const M=_()(z,[["render",m]]);t["default"]=M},"31eb":function(e,t,n){"use strict";n("29e4")},"6a1e":function(e,t,n){e.exports=n.p+"img/sadState1.d179d6ef.png"},b732:function(e,t,n){e.exports=n.p+"img/middleState.d141cb0e.png"},c939:function(e,t,n){},f096:function(e,t,n){e.exports=n.p+"img/smileState.9feb9ad6.jpeg"}}]);
//# sourceMappingURL=chunk-30719147.13744de8.js.map