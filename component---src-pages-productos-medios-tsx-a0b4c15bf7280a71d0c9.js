"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[308],{4709:function(e,t,a){a.r(t),a.d(t,{default:function(){return i}});var n=a(1721),l=a(7294),r=a(9086),s=a(2592),i=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={respuesta:[],cantidadNumerosR:1,semilla1:1234,semilla2:4321},a}(0,n.Z)(t,e);var a=t.prototype;return a.calcular=function(){this.limpiarRespuestas();var e=this.state.semilla1,t=this.state.semilla2,a=this.state.cantidadNumerosR;if(String(e).length>3&&String(t).length>3&&a>=1||null!=e||null!=t)for(var n=0;n<this.state.cantidadNumerosR;n++){var l=e*t,r=(0,s.Z)(""+l),i={id:n,semilla1:e,semilla2:t,numeroR:r,resultado:l,semilla:"0."+r};this.agregarRespuesta(i),e=t,t=+r}String(e).length<=3&&String(t).length,a<=0&&alert("La cantidad de numero r debe será mayor a 0")},a.limpiarRespuestas=function(){this.state.respuesta.splice(0,this.state.respuesta.length)},a.agregarRespuesta=function(e){var t=this.state.respuesta;t.push(e),this.setState({respuesta:t})},a.enter=function(e){"Enter"==e.key&&this.calcular()},a.render=function(){var e=this;return l.createElement(r.Ar,null,l.createElement(r.pQ,{title:"Productos medios",description:"Calculadora de algoritmo de productos medios"}),l.createElement("h1",null,"Calculadora de productos medios"),l.createElement("div",null,l.createElement(r.II,{id:"semilla1",placeholder:"Semilla 1",value:this.state.semilla1,onChange:function(t){var a=+t.target.value;e.setState({semilla1:0==a?void 0:a})},onKeyDown:function(t){return e.enter(t)}}),l.createElement(r.II,{id:"semilla2",placeholder:"Semilla 2",value:this.state.semilla2,onChange:function(t){var a=+t.target.value;e.setState({semilla2:0==a?void 0:a})},onKeyDown:function(t){return e.enter(t)}}),l.createElement(r.II,{id:"cantidadNumerosR",placeholder:"Cantidad de numeros r",value:this.state.cantidadNumerosR,onChange:function(t){var a=+t.target.value;e.setState({cantidadNumerosR:0==a?void 0:a})},onKeyDown:function(t){return e.enter(t)}}),l.createElement("button",{className:"btn",onClick:function(){return e.calcular()}},"Calcular")),l.createElement("div",{className:"resultado card round"},l.createElement("strong",null,"Resultados:"),this.state.respuesta.map((function(e){return l.createElement("div",{key:e.id},l.createElement("p",null,"Y",l.createElement("sub",null,e.id)," = (",e.semilla1,") (",e.semilla2,") ="," ",e.resultado),l.createElement("p",null,"X",l.createElement("sub",null,e.id+2)," = ",e.numeroR),l.createElement("p",null,"r",l.createElement("sub",null,e.id+1)," = 0.",e.numeroR))}))))},t}(l.Component)},2592:function(e,t,a){function n(e){var t,a=(e.length-4)/2;return e.length%2==0&&(t=e.slice(a,-a)),e.length%2==1?n("0"+e):t}a.d(t,{Z:function(){return n}})}}]);
//# sourceMappingURL=component---src-pages-productos-medios-tsx-a0b4c15bf7280a71d0c9.js.map