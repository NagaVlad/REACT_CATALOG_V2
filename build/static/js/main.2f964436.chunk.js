/*! For license information please see main.2f964436.chunk.js.LICENSE.txt */
(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{28:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(1),r=a.n(n),s=a(18),i=a.n(s),l=a(16),o=a(23),d=a.n(o),u=a(2),j=a(37),h=a(3),p=a(4),b=a(12),O=a(6),m=a(5),f=a(8),v=a(14),g="ADD",x="ADD2",y="SHOW",N="SHOW2",C="CLOSE",k="CLOSE2",w="GET_DATA_AND_FILTRED",_="ADD_TO_CART",R="CHANGE_FILTER_BY_NAME",S="CHANGE_FILTER_FLAG",P="SET_CURRENTPAGE",F="SET_OFFSET",D="SET_TOTAL";function E(e){return console.log("\u042d\u0422\u041e ACTION pauyload",e),function(t){t({type:_,payload:e})}}function A(e){return function(t){t({type:D,payload:e})}}function T(e,t){var a=e.id,c=e.isChecked,n=e.input,r=t.data.find((function(e){return e.id===a}));if(console.log("productItem",r),r.isChecked=c,c)t.cart.push(r);else{var s=t.cart.indexOf(r);s>-1&&t.cart.splice(s,1)}t.addToCart(t.cart);var i=t.cart.reduce((function(e,t){return console.log("acc",e),console.log("currentValue",t),Number(e)+Number(t.id)}),0);console.log("\u0422\u041e\u0422\u0410\u041b_____",i),t.setTotal(i),n.current&&(n.current.checked=c)}var B=function(e){Object(O.a)(a,e);var t=Object(m.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"componentDidMount",value:function(){console.log("\u041a\u043e\u0440\u0437\u0438\u043d\u0430",this.props.cart)}},{key:"componentWillMount",value:function(){document.body.style.overflow="hidden"}},{key:"render",value:function(){var e=this;return console.log(this.props),Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:"modal_wrap activitis",onClick:function(){return document.body.style.overflow="visible",e.props.closeModal()},children:Object(c.jsxs)("div",{className:"modal_window",onClick:function(e){return e.stopPropagation()},children:[Object(c.jsx)("i",{className:"material-icons modal_close",onClick:function(){return document.body.style.overflow="visible",e.props.closeModal()},children:"close"}),Object(c.jsx)("h3",{style:{textAlign:"center"},children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"}),Object(c.jsx)("hr",{}),this.props.cart.length>0?null:Object(c.jsx)("h3",{className:"grey-text",children:"\u041d\u0435\u0442 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0445 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u043e\u0432"}),this.props.cart.map((function(t,a){return Object(c.jsx)("div",{children:Object(c.jsx)("div",{className:"collection",children:Object(c.jsxs)("div",{className:"collection-item row",children:[Object(c.jsxs)("div",{className:"col s6",children:["\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435: ",Object(c.jsx)("h5",{children:t.name})]}),Object(c.jsxs)("div",{className:"col s3",children:["\u0426\u0435\u043d\u0430: ",Object(c.jsx)("h5",{className:"red-text",children:t.id})]}),Object(c.jsx)("div",{className:"col s3",children:Object(c.jsx)("button",{onClick:function(a){T({id:t.id,isChecked:!1,input:t.ref},e.props)},className:"btn red",children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})}),Object(c.jsx)("h1",{children:a})]})})},t.id)})),Object(c.jsxs)("h4",{children:["\u0418\u0442\u043e\u0433\u043e\u0432\u0430\u044f \u0441\u0443\u043c\u043c\u0430: ",this.props.total]}),console.log("cart",this.props)]})})})}}]),a}(r.a.Component);var L=Object(f.b)((function(e){return{cart:e.appReducer.cart,data:e.appReducer.data,total:e.appReducer.total}}),(function(e){return{closeModal:function(){e({type:C})},addToCart:function(t){return e(E(t))},setTotal:function(t){return e(A(t))}}}))(B),M=function(e){Object(O.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(h.a)(this,a);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).onNameChange=e.onNameChange.bind(Object(b.a)(e)),e.onSurnameChange=e.onSurnameChange.bind(Object(b.a)(e)),e.onPasswordChange=e.onPasswordChange.bind(Object(b.a)(e)),e.onPasswordChange2=e.onPasswordChange2.bind(Object(b.a)(e)),e.state={name:"name",validName:"false",surname:"surname",validSurname:"false",password:"",validPassword:"false",password2:"",validPassword2:"false"},e}return Object(p.a)(a,[{key:"onNameChange",value:function(e){var t=e.target.value;console.log(t),t.length>4?this.setState({name:t,validName:"true"}):this.setState({validName:"false"}),console.log(this.state.validName)}},{key:"onSurnameChange",value:function(e){var t=e.target.value;console.log(t),t.length>4?this.setState({surname:t,validSurname:"true"}):this.setState({validSurname:"false"}),console.log(this.state.validSurname)}},{key:"onPasswordChange",value:function(e){var t=e.target.value;console.log(t),t.length>4?this.setState({password:t,validPassword:"true"}):this.setState({validPassword:"false"})}},{key:"onPasswordChange2",value:function(e){var t=e.target.value;console.log(t),t.length>4?this.setState({password2:t,validPassword2:"true"}):this.setState({validPassword2:"false"})}},{key:"render",value:function(){var e=this;return Object(c.jsx)("div",{className:"modal_wrap__reg",onClick:function(){return e.props.closeModal()},children:Object(c.jsxs)("div",{className:"modal_window",onClick:function(e){return e.stopPropagation()},children:[Object(c.jsx)("h1",{children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(c.jsx)("i",{className:"material-icons modal_close",onClick:function(){return e.props.closeModal()},children:"close"}),Object(c.jsx)("div",{className:"row",children:Object(c.jsxs)("form",{className:"col s12",children:[Object(c.jsxs)("div",{className:"row",children:[Object(c.jsxs)("div",{className:"input-field col s6",children:["true"===this.state.validName?Object(c.jsxs)("p",{style:{color:"green"},children:["\u0423\u0441\u043f\u0435\u0448\u043d\u043e",Object(c.jsx)("i",{className:"material-icons",children:"check"})]}):Object(c.jsx)("p",{children:Object(c.jsx)("i",{className:"material-icons",children:"block"})}),Object(c.jsx)("input",{onChange:this.onNameChange,placeholder:"\u0418\u043c\u044f",id:"first_name",type:"text"})]}),Object(c.jsxs)("div",{className:"input-field col s6",children:["true"===this.state.validSurname?Object(c.jsxs)("p",{style:{color:"green"},children:["\u0423\u0441\u043f\u0435\u0448\u043d\u043e",Object(c.jsx)("i",{className:"material-icons",children:"check"})]}):Object(c.jsx)("p",{children:Object(c.jsx)("i",{className:"material-icons",children:"block"})}),Object(c.jsx)("input",{onChange:this.onSurnameChange,placeholder:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f",id:"last_name",type:"text"})]})]}),Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("div",{className:"input-field col s12",children:Object(c.jsx)("input",{type:"date",className:"datepicker",id:"pickdate"})})}),Object(c.jsx)("div",{className:"row",children:Object(c.jsxs)("div",{className:"input-field col s12",children:["true"===this.state.validPassword?Object(c.jsxs)("p",{style:{color:"green"},children:["\u0423\u0441\u043f\u0435\u0448\u043d\u043e",Object(c.jsx)("i",{className:"material-icons",children:"check"})]}):Object(c.jsx)("p",{children:Object(c.jsx)("i",{className:"material-icons",children:"block"})}),Object(c.jsx)("input",{onChange:this.onPasswordChange,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",id:"password",type:"password"})]})}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsxs)("div",{className:"input-field col s12",children:["true"===this.state.validPassword2?Object(c.jsxs)("p",{style:{color:"green"},children:["\u0423\u0441\u043f\u0435\u0448\u043d\u043e",Object(c.jsx)("i",{className:"material-icons",children:"check"})]}):Object(c.jsx)("p",{children:Object(c.jsx)("i",{className:"material-icons",children:"block"})}),Object(c.jsx)("input",{onChange:this.onPasswordChange2,placeholder:"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",id:"password2",type:"password"})]}),this.state.password===this.state.password2&&this.state.password>5&&this.state.password2>5?Object(c.jsx)("p",{style:{color:"green"},children:"\u041f\u0430\u0440\u043e\u043b\u0438 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e"}):Object(c.jsx)("p",{style:{color:"red"},children:"\u041f\u0430\u0440\u043e\u043b\u0438 \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e"})]}),Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("div",{className:"input-field col s12",children:Object(c.jsx)("input",{placeholder:"Email",id:"email",type:"email",className:"validate"})})}),"true"===this.state.validName&&"true"===this.state.validSurname&&"true"===this.state.validPassword&&"true"===this.state.validPassword2?Object(c.jsxs)("button",{className:"btn waves-effect waves-light",type:"submit",name:"action",children:["Submit",Object(c.jsx)("i",{className:"material-icons right",children:"send"})]}):Object(c.jsx)("h4",{style:{color:"red"},children:"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0432\u0441\u0435 \u043f\u043e\u043b\u044f, \u0447\u0442\u043e\u0431\u044b \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0444\u043e\u0440\u043c\u0443"})]})})]})})}}]),a}(r.a.Component);var I=Object(f.b)((function(e){return{modal:e.appReducer.modal}}),(function(e){return{closeModal:function(){e({type:k})}}}))(M),z=(a(28),a(39)),G=a.n(z),H=function(e){Object(O.a)(a,e);var t=Object(m.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e=this;return Object(c.jsx)("div",{className:"row",children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("i",{className:"small material-icons",children:"search"}),Object(c.jsx)("input",{style:{borderTop:"0px solid black",padding:5},type:"text",value:this.props.searchString,onChange:function(t){return e.props.handleChange(t)},placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0442\u043e\u0432\u0430\u0440\u0430"}),Object(c.jsx)("label",{style:{textAlign:"center"},children:"\u0421\u0442\u0440\u043e\u043a\u0430 \u043f\u043e\u0438\u0441\u043a\u0430 "})]})})}}]),a}(r.a.Component),U=function(e){Object(O.a)(a,e);var t=Object(m.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e=this;return Object(c.jsx)("div",{children:Object(c.jsx)("form",{action:"#",children:Object(c.jsx)("p",{children:Object(c.jsxs)("label",{children:[Object(c.jsx)("p",{}),Object(c.jsx)("input",{type:"checkbox",onChange:function(){e.props.handleChangeFilter()}}),Object(c.jsx)("span",{children:"\u041a\u0440\u0435\u043f\u043e\u0441\u0442\u044c \u043c\u0435\u043d\u044c\u0448\u0435 8%"})]})})})})}}]),a}(n.Component);var X=Object(f.b)((function(e){return{abv:e.appReducer.abv}}))(U),V=function(e){Object(O.a)(a,e);var t=Object(m.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(X,{handleChangeFilter:this.props.handleChangeFilter})})}}]),a}(n.Component),W=function(e){Object(O.a)(a,e);var t=Object(m.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("h1",{style:{textAlign:"center"},children:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u043c\u0430\u0433\u0430\u0437\u0438\u043d\u0435"}),Object(c.jsxs)("div",{class:"col s12 m7",children:[Object(c.jsx)("h3",{class:"header",children:"\u041d\u0430\u0448 \u043c\u0430\u0433\u0430\u0437\u0438\u043d"}),Object(c.jsxs)("div",{class:"card horizontal",children:[Object(c.jsx)("div",{class:"card-image",children:Object(c.jsx)("img",{src:"https://laiman.by/image/catalog/dlya_stranitsyi_mebel_dlya_magazina_alkogolnoy_produktsii/mebel_dlya_magazina_alkogolnoy_produktsii-6.jpg"})}),Object(c.jsxs)("div",{class:"card-stacked",children:[Object(c.jsx)("div",{class:"card-content",children:Object(c.jsx)("p",{children:"I am a very simple card. I am good at containing small bits of information."})}),Object(c.jsx)("div",{class:"card-action",children:Object(c.jsx)("a",{href:"#",children:"This is a link"})})]})]})]})]})}}]),a}(r.a.Component),J=function(e){Object(O.a)(a,e);var t=Object(m.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("h1",{style:{textAlign:"center"},children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"}),Object(c.jsx)("div",{class:"col s12 m7",children:Object(c.jsxs)("div",{class:"card horizontal",children:[Object(c.jsx)("div",{class:"card-image",children:Object(c.jsx)("img",{src:"https://metrorus.ru/metromaps/spb/css/img/spbmap.jpg"})}),Object(c.jsxs)("div",{class:"card-stacked",children:[Object(c.jsx)("div",{class:"card-content",children:Object(c.jsx)("p",{children:"\u041e\u0444\u0438\u0441 \u043c\u0430\u0433\u0430\u0437\u0438\u043d\u0430 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u044c\u0441\u044f \u043f\u043e \u0430\u0434\u0440\u0435\u0441\u0443 \u0433. \u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433, \u0443\u043b. \u041b\u0435\u043d\u0438\u043d\u0430 593"})}),Object(c.jsx)("div",{class:"card-action",children:Object(c.jsx)("a",{href:"#",children:"\u0421\u043e\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0435\u0442\u0438"})})]})]})})]})}}]),a}(r.a.Component),Y=a(7),$=function(e){Object(O.a)(a,e);var t=Object(m.a)(a);function a(e){var c;Object(h.a)(this,a);var n=e.pd;e.innerRef;return(c=t.call(this,e)).state={ref:n.ref},c}return Object(p.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.pd;t.innerRef,t.isChecked;return Object(c.jsx)("div",{className:"col s3 offset-s1",children:Object(c.jsxs)("div",{className:"card",children:[Object(c.jsxs)("div",{className:"card-image",children:[Object(c.jsx)("img",{src:a.image_url,alt:""}),Object(c.jsx)("span",{style:{fontSize:20},className:"card-title black-text",children:a.name})]}),Object(c.jsxs)("div",{className:"card-content",children:[Object(c.jsx)("p",{style:{textAlign:"center"},children:Object(c.jsxs)("strong",{children:["\u0426\u0435\u043d\u0430 ",a.id," $"]})}),Object(c.jsxs)("p",{children:["\u0424\u0438\u0440\u0430\u043c\u0430 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c ",a.contributed_by]})]}),Object(c.jsx)("div",{className:"card-action",children:Object(c.jsxs)("label",{children:[Object(c.jsx)("input",{checked:a.isChecked,ref:this.state.ref,type:"checkbox",onChange:function(){T({id:a.id,isChecked:e.state.ref.current.checked,input:e.state.ref},e.props)}}),Object(c.jsx)("span",{children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"})]})})]})})}}]),a}(n.Component);var q=Object(f.b)((function(e){return{cart:e.appReducer.cart,data:e.appReducer.data}}),(function(e){return{addToCart:function(t){return e(E(t))},setTotal:function(t){return e(A(t))}}}))($),K=function(e){Object(O.a)(a,e);var t=Object(m.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return Object(c.jsx)("div",{className:"row",children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("h3",{style:{textAlign:"center",color:"black"},children:"\u0422\u043e\u0432\u0430\u0440\u044b"}),this.props.filtredByNameData.map((function(e,t){return Object(c.jsx)(q,{pd:e},e.id)}))]})})}}]),a}(r.a.Component);var Q=Object(f.b)((function(e){return{filtredByNameData:e.appReducer.filtredByNameData,data:e.appReducer.data,counter:e.counter1.counter,modal:e.appReducer.modal,modalReg:e.appReducer.modalReg,cart:e.appReducer.cart,checkedFilter:e.appReducer.checkedFilter}}))(K,(function(e){return{}})),Z=a(40),ee=a.n(Z),te=function(e){Object(O.a)(a,e);var t=Object(m.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(Q,{}),Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("div",{className:"row",children:Object(c.jsx)(ee.a,{previousLabel:"prev",nextLabel:"next",breakLabel:"...",breakClassName:"break-me",pageCount:this.props.pageCount,marginPagesDisplayed:2,pageRangeDisplayed:5,containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active"})})})]})}}]),a}(r.a.Component),ae=function(e){Object(O.a)(a,e);var t=Object(m.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e=this;return Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:"Counter\u21162"}),Object(c.jsxs)("h5",{children:["\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435",this.props.counter2]}),Object(c.jsx)("button",{onClick:function(){return e.props.onAdd2()},children:"Add"})]})}}]),a}(r.a.Component);Object(f.b)((function(e){return{counter2:e.counter2.counter2}}),(function(e){return{onAdd2:function(){return e({type:x})}}}))(ae);var ce=function(e){Object(O.a)(a,e);var t=Object(m.a)(a);function a(e){var c;return Object(h.a)(this,a),(c=t.call(this,e)).handlePageClick=function(e){var t=e.selected,a=t*c.props.perPage;c.receivedData(),c.props.changeCurrentPaga(t),c.props.changeOfsset(a),c.setState({currentPage:t,offset:a},(function(){c.receivedData()}))},c.receivedData=Object(j.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.a.get("https://api.punkapi.com/v2/beers");case 2:t=e.sent,a=(a=t.data).map((function(e){return Object(u.a)(Object(u.a)({},e),{},{isChecked:!1,ref:r.a.createRef()})})),c.setState({}),c.props.setDataFilter(a);case 7:case"end":return e.stop()}}),e)}))),c.handleChange=function(e){c.setState({searchString:e.target.value},(function(){return c.searching()}))},c.searching=function(){var e=c.state.searchString.trim().toLowerCase();if(e.length>0){var t=c.props.data.filter((function(t){return t.name.toLowerCase().match(e)}));c.props.changeFiltredByNameData(t),c.setState({},(function(){console.log(c.props.data)}))}else c.setState({},(function(){console.log(c.props.data)})),c.props.changeFiltredByNameData(c.props.data)},c.state={searchString:"",offset:0,perPage:9,currentPage:0},c.handleChangeFilter=c.handleChangeFilter.bind(Object(b.a)(c)),c}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.receivedData()}},{key:"handleChangeFilter",value:function(){this.props.changeFilterFlag(this.props.checkedFilter),this.props.checkedFilter?(console.log("TRUEEEEEEEE!!!!!!!"),this.handleFiltred()):(console.log("FALSE!!!!!!"),this.props.changeFiltredByNameData(this.props.data))}},{key:"handleFiltred",value:function(){var e=this,t=[];this.props.data.map((function(a){e.props.abv<a.abv&&(t.push(a),console.log("\u041f\u0423\u0428\u0423 \u0412 \u041c\u0410\u0421\u0421\u0418\u0412"),e.props.changeFiltredByNameData(t),e.setState({}))}))}},{key:"render",value:function(){var e=this;return console.log("APP",this.props),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"container menuu ",children:Object(c.jsx)("nav",{className:"navig ",children:Object(c.jsx)("ul",{className:"navigation",children:Object(c.jsxs)("div",{style:{display:"flex",justifyContent:"space-around"},children:[Object(c.jsx)("li",{children:Object(c.jsx)(l.b,{to:"/",children:"\u041a\u0430\u0442\u0430\u043b\u043e\u0433 \u0442\u043e\u0432\u0430\u0440\u043e\u0432"})}),Object(c.jsx)("li",{children:Object(c.jsx)(l.b,{to:"/about",children:"\u041e \u043c\u0430\u0433\u0430\u0437\u0438\u043d\u0435"})}),Object(c.jsx)("li",{children:Object(c.jsx)(l.b,{to:"/main",children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"})}),Object(c.jsx)("li",{children:Object(c.jsx)("button",{className:"btn btn green",onClick:function(){e.props.showCart()},children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"})}),Object(c.jsx)("li",{children:Object(c.jsx)("button",{className:"btn btn blue",onClick:function(){e.props.showReg()},children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})})]})})})}),Object(c.jsxs)("h1",{style:{textAlign:"center"},children:[Object(c.jsx)("i",{class:"medium material-icons",children:"shopping_cart"}),"\u041a\u0430\u0442\u0430\u043b\u043e\u0433 \u0442\u043e\u0432\u0430\u0440\u043e\u0432",Object(c.jsx)("i",{class:"medium material-icons",children:"shopping_cart"})]}),Object(c.jsx)(H,{handleChange:this.handleChange,searchString:this.state.searchString}),Object(c.jsx)("div",{className:"container",children:Object(c.jsx)(V,{checked:this.state.checked,handleChangeFilter:this.handleChangeFilter})}),Object(c.jsx)(Y.a,{path:"/",exact:!0,render:function(){return Object(c.jsx)(te,{pageCount:e.state.pageCount})}}),Object(c.jsx)(Y.a,{path:"/about",exact:!0,component:W}),Object(c.jsx)(Y.a,{path:"/main",exact:!0,component:J}),this.props.modal?Object(c.jsx)(L,{}):null,this.props.modalReg?Object(c.jsx)(I,{close:function(){return e.setState({modalReg:!1})}}):null]})}}]),a}(r.a.Component);var ne=Object(f.b)((function(e){return{counter:e.counter1.counter,modal:e.appReducer.modal,modalReg:e.appReducer.modalReg,data:e.appReducer.data,filtredByNameData:e.appReducer.filtredByNameData,cart:e.appReducer.cart,checkedFilter:e.appReducer.checkedFilter,abv:e.appReducer.abv,total:e.appReducer.total,offset:e.appReducer.offset,perPage:e.appReducer.perPage,currentPage:e.appReducer.currentPage}}),(function(e){return{onAdd:function(){return e({type:g})},showCart:function(){return e({type:y})},showReg:function(){return e({type:N})},setDataFilter:function(t){return e(function(e){return console.log("\u042d\u0422\u041e ACTION pauyload",e),function(t){t({type:w,payload:Object(v.a)(e)})}}(t))},addToCart:function(t){return e(E(t))},changeFiltredByNameData:function(t){return e(function(e){return console.log("DATAAAAAA",e),function(t){t({type:R,payload:Object(v.a)(e)})}}(t))},changeFilterFlag:function(t){return e(function(e){return console.log("\u041c\u0415\u041d\u042f\u042e \u0424\u041b\u0410\u0413"),function(t){t({type:S,payload:e})}}(t))},changeCurrentPaga:function(t){return e(function(e){return function(t){t({type:P,payload:e})}}(t))},changeOfsset:function(t){return e(function(e){return function(t){t({type:F,payload:e})}}(t))}}}))(ce),re=a(13),se={counter:1};var ie={counter2:100};var le={modal:!1,modalReg:!1,checkedFilter:!0,data:[],filtredByNameData:[],cart:[],arrayRef:[],total:0,offset:0,perPage:9,currentPage:0,abv:12};var oe=Object(re.c)({appReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(console.log(y),t.type){case y:return Object(u.a)(Object(u.a)({},e),{},{modal:!e.modal});case N:return Object(u.a)(Object(u.a)({},e),{},{modalReg:!e.modalReg});case C:return Object(u.a)(Object(u.a)({},e),{},{modal:!1});case k:return Object(u.a)(Object(u.a)({},e),{},{modalReg:!1});case w:return console.log("TEST"),Object(u.a)(Object(u.a)({},e),{},{data:Object(v.a)(t.payload),filtredByNameData:Object(v.a)(t.payload)});case _:return Object(u.a)(Object(u.a)({},e),{},{cart:Object(v.a)(t.payload)});case R:return Object(u.a)(Object(u.a)({},e),{},{filtredByNameData:Object(v.a)(t.payload)});case S:return Object(u.a)(Object(u.a)({},e),{},{checkedFilter:!t.payload});case P:return Object(u.a)(Object(u.a)({},e),{},{currentPage:t.payload});case F:return Object(u.a)(Object(u.a)({},e),{},{offset:t.payload});case D:return Object(u.a)(Object(u.a)({},e),{},{total:t.payload});default:return e}},counter1:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return{counter:e.counter+1};default:return e}},counter2:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return{counter2:e.counter2+1};default:return e}}}),de=a(41),ue="object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):re.d,je=Object(re.e)(oe,ue(Object(re.a)(de.a))),he=Object(c.jsx)(f.a,{store:je,children:Object(c.jsx)(l.a,{children:Object(c.jsx)(ne,{})})});i.a.render(he,document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.2f964436.chunk.js.map