"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[308],{4709:function(e,t,a){a.r(t),a.d(t,{default:function(){return s}});var r=a(1721),n=a(7294),i=a(6580),l=a(2973),s=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={respuesta:[],cantidadNumerosR:1,semilla1:1234,semilla2:4321,respuestaPruebasMedias:l.Zj},a}(0,r.Z)(t,e);var a=t.prototype;return a.calcular=function(){this.limpiarRespuestas();var e=this.state,t=e.semilla1,a=e.semilla2,r=e.cantidadNumerosR;if(String(t).length>3&&String(a).length>3&&r>=1||null!=t||null!=a)for(var n=0;n<this.state.cantidadNumerosR;n++){var i=t*a,s=(0,l.KK)(""+i),u={id:n,semilla1:t,semilla2:a,numeroR:s,resultado:i,semilla:"0."+s};this.agregarRespuesta(u),t=a,a=+s}String(t).length<=3&&String(a).length,r<=0&&alert("La cantidad de numero r debe será mayor a 0");var o=(0,l.A)(this.state.respuesta);this.setState({respuestaPruebasMedias:o})},a.limpiarRespuestas=function(){this.state.respuesta.splice(0,this.state.respuesta.length)},a.agregarRespuesta=function(e){var t=this.state.respuesta;t.push(e),this.setState({respuesta:t})},a.enter=function(e){"Enter"==e.key&&this.calcular()},a.render=function(){var e=this;return n.createElement(i.Ar,null,n.createElement(i.pQ,{title:"Productos medios",description:"Calculadora de números pseudoaleatorios por medio del algoritmo de productos medios "}),n.createElement("h1",null,"Calculadora de productos medios"),n.createElement("div",null,n.createElement(i.II,{id:"semilla1",placeholder:"Semilla 1",value:this.state.semilla1,onChange:function(t){var a=+t.target.value;e.setState({semilla1:0==a?void 0:a})},onKeyDown:function(t){return e.enter(t)}}),n.createElement(i.II,{id:"semilla2",placeholder:"Semilla 2",value:this.state.semilla2,onChange:function(t){var a=+t.target.value;e.setState({semilla2:0==a?void 0:a})},onKeyDown:function(t){return e.enter(t)}}),n.createElement(i.II,{id:"cantidadNumerosR",placeholder:"Cantidad de numeros r",value:this.state.cantidadNumerosR,onChange:function(t){var a=+t.target.value;e.setState({cantidadNumerosR:0==a?void 0:a})},onKeyDown:function(t){return e.enter(t)}}),n.createElement("button",{className:"btn",onClick:function(){return e.calcular()}},"Calcular")),n.createElement(i.D0,{prueba:this.state.respuestaPruebasMedias}),n.createElement("div",{className:"resultado card round"},n.createElement("strong",null,"Resultados:"),this.state.respuesta.map((function(e){return n.createElement("div",{key:e.id},n.createElement("p",null,"Y",n.createElement("sub",null,e.id)," = (",e.semilla1,") (",e.semilla2,") ="," ",e.resultado),n.createElement("p",null,"X",n.createElement("sub",null,e.id+2)," = ",e.numeroR),n.createElement("p",null,"r",n.createElement("sub",null,e.id+1)," = 0.",e.numeroR))}))))},t}(n.Component)},2973:function(e,t,a){function r(e){var t,a=(e.length-4)/2;return e.length%2==0&&(t=e.slice(a,-a)),e.length%2==1?r("0"+e):t}a.d(t,{A:function(){return i},Zj:function(){return n},KK:function(){return r}});var n={promedioR:0,LimiteInferior:0,LimiteSuperior:0,valorAceptacion:!1};function i(e){var t=1.95996,a=n,r=e.length,i=0;e.forEach((function(e){i+=+("0."+e.numeroR)}));var l=1/r*i;a.promedioR=+l.toFixed(5);var s=Math.sqrt(12*r);return a.LimiteInferior=+(.5-t*(1/s)).toFixed(5),a.LimiteSuperior=+(.5+t*(1/s)).toFixed(5),a.promedioR>a.LimiteInferior&&a.promedioR<a.LimiteSuperior&&(a.valorAceptacion=!0),a}}}]);
//# sourceMappingURL=component---src-pages-productos-medios-tsx-1c32384348aec7455470.js.map