"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[308],{4709:function(e,t,a){a.r(t),a.d(t,{default:function(){return i}});var l=a(1721),n=a(7294),r=a(9086),s=a(2592),i=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={respuesta:[],cantidadNumerosR:1,semilla1:1234,semilla2:4321},a}(0,l.Z)(t,e);var a=t.prototype;return a.calcular=function(){this.limpiarRespuestas();var e=this.state.semilla1,t=this.state.semilla2,a=this.state.cantidadNumerosR;if(String(e).length>3&&String(t).length>3&&a>=1||null!=e||null!=t)for(var l=0;l<this.state.cantidadNumerosR;l++){var n=e*t,r=(0,s.Z)(""+n),i={id:l,semilla1:e,semilla2:t,numeroR:r,resultado:n,semilla:"0."+r};this.agregarRespuesta(i),e=t,t=+r}String(e).length<=3&&String(t).length,a<=0&&alert("La cantidad de numero r debe será mayor a 0")},a.limpiarRespuestas=function(){this.state.respuesta.splice(0,this.state.respuesta.length)},a.agregarRespuesta=function(e){var t=this.state.respuesta;t.push(e),this.setState({respuesta:t})},a.enter=function(e){},a.render=function(){var e=this;return n.createElement(r.Ar,null,n.createElement(r.pQ,{title:"Productos medios"}),n.createElement("h1",null,"Calculadora de productos medios"),n.createElement("div",null,n.createElement(r.II,{id:"semilla1",placeholder:"Semilla 1",value:this.state.semilla1,onChange:function(t){var a=+t.target.value;e.setState({semilla1:0==a?void 0:a})}}),n.createElement(r.II,{id:"semilla2",placeholder:"Semilla 2",value:this.state.semilla2,onChange:function(t){var a=+t.target.value;e.setState({semilla2:0==a?void 0:a})}}),n.createElement(r.II,{id:"cantidadNumerosR",placeholder:"Cantidad de numeros r",value:this.state.cantidadNumerosR,onChange:function(t){var a=+t.target.value;e.setState({cantidadNumerosR:0==a?void 0:a})},onKeyDown:function(t){return e.enter(t)}}),n.createElement("button",{className:"btn",onClick:function(){return e.calcular()}},"Calcular")),n.createElement("div",{className:"resultado card round"},n.createElement("strong",null,"Resultados:"),this.state.respuesta.map((function(e){return n.createElement("div",{key:e.id},n.createElement("p",null,"Y",n.createElement("sub",null,e.id)," = (",e.semilla1,") (",e.semilla2,") ="," ",e.resultado,","),n.createElement("p",null,"X",n.createElement("sub",null,e.id+2)," = ",e.numeroR,","),n.createElement("p",null,"r",n.createElement("sub",null,e.id+1)," = 0.",e.numeroR))}))))},t}(n.Component)},2592:function(e,t,a){function l(e){var t,a=(e.length-4)/2;return e.length%2==0&&(t=e.slice(a,-a)),e.length%2==1?l("0"+e):t}a.d(t,{Z:function(){return l}})}}]);
//# sourceMappingURL=component---src-pages-productos-medios-tsx-7edb4fa784d3d7325ea5.js.map