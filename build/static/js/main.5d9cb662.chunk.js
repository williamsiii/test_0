(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,t,n){e.exports=n(58)},37:function(e,t,n){},39:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(13),o=n.n(r),l=n(12),s=(n(37),n(4)),c=n(5),u=n(7),m=n(6),h=n(8),p=(n(38),n(39),n(14)),d=n(40).default,g=["","\u0410\u0431\u0430\u043a\u0430\u043d","\u0410\u0437\u043e\u0432","\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440\u043e\u0432","\u0410\u043b\u0435\u043a\u0441\u0438\u043d","\u0410\u043b\u044c\u043c\u0435\u0442\u044c\u0435\u0432\u0441\u043a","\u0410\u043d\u0430\u043f\u0430","\u0410\u043d\u0433\u0430\u0440\u0441\u043a","\u0410\u043d\u0436\u0435\u0440\u043e-\u0421\u0443\u0434\u0436\u0435\u043d\u0441\u043a","\u0410\u043f\u0430\u0442\u0438\u0442\u044b","\u0410\u0440\u0437\u0430\u043c\u0430\u0441","\u0410\u0440\u043c\u0430\u0432\u0438\u0440","\u0410\u0440\u0441\u0435\u043d\u044c\u0435\u0432","\u0410\u0440\u0442\u0435\u043c","\u0410\u0440\u0445\u0430\u043d\u0433\u0435\u043b\u044c\u0441\u043a","\u0410\u0441\u0431\u0435\u0441\u0442","\u0410\u0441\u0442\u0440\u0430\u0445\u0430\u043d\u044c","\u0410\u0447\u0438\u043d\u0441\u043a","\u0411\u0430\u043b\u0430\u043a\u043e\u0432\u043e","\u0411\u0430\u043b\u0430\u0445\u043d\u0430","\u0411\u0430\u043b\u0430\u0448\u0438\u0445\u0430","\u0411\u0430\u043b\u0430\u0448\u043e\u0432","\u0411\u0430\u0440\u043d\u0430\u0443\u043b","\u0411\u0430\u0442\u0430\u0439\u0441\u043a","\u0411\u0435\u043b\u0433\u043e\u0440\u043e\u0434","\u0411\u0435\u043b\u0435\u0431\u0435\u0439","\u0411\u0435\u043b\u043e\u0432\u043e","\u0411\u0435\u043b\u043e\u0433\u043e\u0440\u0441\u043a (\u0410\u043c\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c)","\u0411\u0435\u043b\u043e\u0440\u0435\u0446\u043a","\u0411\u0435\u043b\u043e\u0440\u0435\u0447\u0435\u043d\u0441\u043a","\u0411\u0435\u0440\u0434\u0441\u043a","\u0411\u0435\u0440\u0435\u0437\u043d\u0438\u043a\u0438"].map(function(e){return{value:e,label:e}}),b=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).fileInput=null,n.state={titleValid:!0,descriptionValid:!0,numberValid:!0},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentWillReceiveProps",value:function(e,t){if(e.obj&&e.obj.image&&0===e.obj.image.length){var n=document.getElementById("canvas");n&&(n.height=0)}else e.obj&&e.obj.image&&this.changeImage(e.obj.image);return!0}},{key:"checkValid",value:function(e){return this.state[e]?"hide":"error"}},{key:"onChangeTitle",value:function(e){this.props.onChangeTitle&&this.props.onChangeTitle(e)}},{key:"onChangeDescription",value:function(e){this.props.onChangeDescription&&this.props.onChangeDescription(e)}},{key:"onChangeNumber",value:function(e){this.props.onChangeNumber&&this.props.onChangeNumber(e)}},{key:"onCityChange",value:function(e){this.props.onCityChange&&this.props.onCityChange(e)}},{key:"onFileChange",value:function(e){this.getBase64(e.target.files[0])}},{key:"onSubmit",value:function(e){e.preventDefault();var t=!0,n=!0,a=!0;(0===this.props.obj.title.length||this.props.obj.title.length>100)&&(t=!1),this.setState({titleValid:t}),this.props.obj.description.length>300&&(n=!1),this.setState({descriptionValid:n}),this.props.obj.number.match(/^\+7\(\d{3}\)\d{3}-\d{2}-\d{2}$/)||(a=!1),this.setState({numberValid:a}),a*n*a&&this.props.onSubmit&&this.props.onSubmit(),document.getElementById("canvas").height=0,this.fileInput.value=null}},{key:"getBase64",value:function(e){var t=this,n=new FileReader;n.readAsDataURL(e),n.onload=function(){t.changeImage(n.result),t.props.onImageChange&&t.props.onImageChange(n.result)}}},{key:"changeImage",value:function(e){var t=new Image;t.onload=function(){var e=document.getElementById("canvas"),n=e.getContext("2d");e.width=t.width,e.height=t.height,n.drawImage(t,0,0)},t.src=e}},{key:"render",value:function(){var e=this;return i.a.createElement("form",{onSubmit:function(t){return e.onSubmit(t)}},i.a.createElement("div",{className:"form-group"},i.a.createElement("label",null,"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435:  "),i.a.createElement("input",{type:"text",className:"form-control",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",value:this.props.obj.title,maxLength:100,onChange:function(t){return e.onChangeTitle(t)}}),i.a.createElement("div",{className:this.checkValid("titleValid")},"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f. \u041d\u0435 \u0431\u043e\u043b\u0435\u0435 100 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432")),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",null,"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435: "),i.a.createElement("input",{type:"text",className:"form-control",placeholder:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",value:this.props.obj.description,maxLength:300,onChange:function(t){return e.onChangeDescription(t)}}),i.a.createElement("div",{className:this.checkValid("descriptionValid")},"\u041d\u0435 \u0431\u043e\u043b\u0435\u0435 300 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432")),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",null,"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430: "),i.a.createElement("input",{type:"text",className:"form-control",placeholder:"+7(999)999-99-99",value:this.props.obj.number,onChange:function(t){return e.onChangeNumber(t)}}),i.a.createElement("div",{className:this.checkValid("numberValid")},"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f. \u0424\u043e\u0440\u043c\u0430\u0442 \u0432\u0432\u043e\u0434\u0430: +7(999)999-99-99")),i.a.createElement("div",{className:"form-group"},i.a.createElement(d,{value:this.props.obj.city,placeholder:this.props.obj.city||"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0433\u043e\u0440\u043e\u0434",onChange:function(t){return e.onCityChange(t)},options:g})),i.a.createElement("div",{className:"form-group"},i.a.createElement("canvas",{id:"canvas",height:"0"}),i.a.createElement("input",{ref:function(t){return e.fileInput=t},type:"file",accept:"image/*",className:"form-control",onChange:function(t){return e.onFileChange(t)}})),i.a.createElement("div",{className:"form-group"},i.a.createElement("input",{type:"submit",value:this.props.action||"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",className:"btn btn-primary"})))}}]),t}(a.Component),v=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={title:"",description:"",number:"",city:"",image:""},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"onChangeTitle",value:function(e){this.setState({title:e.target.value})}},{key:"onChangeDescription",value:function(e){this.setState({description:e.target.value})}},{key:"onChangeNumber",value:function(e){this.setState({number:e.target.value})}},{key:"onCityChange",value:function(e){this.setState({city:e.value})}},{key:"onImageChange",value:function(e){this.setState({image:e})}},{key:"onSubmit",value:function(){var e=localStorage.getItem("ads")?JSON.parse(localStorage.getItem("ads")):{ads:[]},t={id:e.ads.length,title:this.state.title,description:this.state.description,number:this.state.number,city:this.state.city,image:this.state.image};e.ads.push(t),localStorage.setItem("ads",JSON.stringify(e)),this.setState({title:"",description:"",number:"",city:"",image:""})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement("h3",null,"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u0435"),i.a.createElement(b,{style:{marginTop:10},obj:this.state,action:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",onSubmit:function(t){return e.onSubmit(t)},onChangeTitle:function(t){return e.onChangeTitle(t)},onChangeDescription:function(t){return e.onChangeDescription(t)},onChangeNumber:function(t){return e.onChangeNumber(t)},onCityChange:function(t){return e.onCityChange(t)},onImageChange:function(t){return e.onImageChange(t)}}))}}]),t}(a.Component),f=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).ads=null,n.id=0,n.state={id:0,title:"",description:"",number:"",city:"",image:""},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;try{this.id=Number(this.props.match.params.id),this.ads=JSON.parse(localStorage.getItem("ads"));var t=this.ads.ads.filter(function(t){return t.id===e.id})[0];this.setState({id:this.id,title:t.title,description:t.description,number:t.number,city:t.city,image:t.image})}catch(n){throw Error(n)}}},{key:"onChangeTitle",value:function(e){this.setState({title:e.target.value})}},{key:"onChangeDescription",value:function(e){this.setState({description:e.target.value})}},{key:"onChangeNumber",value:function(e){this.setState({number:e.target.value})}},{key:"onCityChange",value:function(e){this.setState({city:e.value})}},{key:"onImageChange",value:function(e){this.setState({image:e})}},{key:"onSubmit",value:function(){var e=this;this.ads.ads=this.ads.ads.map(function(t){return t.id===e.id?{id:t.id,title:e.state.title,description:e.state.description,number:e.state.number,city:e.state.city,image:e.state.image}:t});var t=JSON.stringify(this.ads);localStorage.setItem("ads",t),this.props.history.push("/read")}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{style:{marginTop:10}},i.a.createElement("h3",null,"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u0435"),i.a.createElement(b,{obj:this.state,onSubmit:function(t){return e.onSubmit(t)},onChangeTitle:function(t){return e.onChangeTitle(t)},onChangeDescription:function(t){return e.onChangeDescription(t)},onChangeNumber:function(t){return e.onChangeNumber(t)},onCityChange:function(t){return e.onCityChange(t)},onImageChange:function(t){return e.onImageChange(t)}}))}}]),t}(a.Component),y=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("tr",null,i.a.createElement("td",null,this.props.obj.title),i.a.createElement("td",null,this.props.obj.description),i.a.createElement("td",null,this.props.obj.number),i.a.createElement("td",null,this.props.obj.city),i.a.createElement("td",null,i.a.createElement(l.b,{to:"/update/"+this.props.obj.id,className:"btn btn-primary"},"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c")),i.a.createElement("td",null,i.a.createElement("button",{onClick:function(t){return e.props.onDelete(e.props.obj.id)},className:"btn btn-danger"},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c")))}}]),t}(a.Component),C=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={ads:[]},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("ads");e&&(e=JSON.parse(e)).ads&&this.setState({ads:e.ads})}},{key:"onDelete",value:function(e){var t=localStorage.getItem("ads");t&&((t=JSON.parse(t)).ads=t.ads.filter(function(t){return t.id!==e}),t.ads&&this.setState({ads:t.ads}),localStorage.setItem("ads",JSON.stringify(t)))}},{key:"rows",value:function(){var e=this;return this.state.ads.map(function(t,n){return i.a.createElement(y,{obj:t,onDelete:function(t){return e.onDelete(t)},key:n})})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h3",{align:"left"},"\u0421\u043f\u0438\u0441\u043e\u043a \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u0439"),i.a.createElement("table",{className:"table table-striped",style:{marginTop:20}},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),i.a.createElement("th",null,"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),i.a.createElement("th",null,"\u0422\u0435\u043b\u0435\u0444\u043e\u043d"),i.a.createElement("th",null,"\u0413\u043e\u0440\u043e\u0434"),i.a.createElement("th",{colSpan:"2"},"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435"))),i.a.createElement("tbody",null,this.rows())))}}]),t}(a.Component),E=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement(l.a,null,i.a.createElement("div",{className:"container"},i.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},i.a.createElement(l.b,{to:"/",className:"navbar-brand"},"\u041e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u044f"),i.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},i.a.createElement("ul",{className:"navbar-nav mr-auto"},i.a.createElement("li",{className:"nav-item"},i.a.createElement(l.b,{to:"/",className:"nav-link"},"\u0421\u043f\u0438\u0441\u043e\u043a")),i.a.createElement("li",{className:"nav-item"},i.a.createElement(l.b,{to:"/create",className:"nav-link"},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c")))))," ",i.a.createElement("br",null),i.a.createElement(p.c,null,i.a.createElement(p.a,{exact:!0,path:"/create",component:v}),i.a.createElement(p.a,{path:"/update/:id",component:f}),i.a.createElement(p.a,{path:"/",component:C}))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(l.a,null,i.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[32,1,2]]]);
//# sourceMappingURL=main.5d9cb662.chunk.js.map