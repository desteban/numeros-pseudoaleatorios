"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[38],{1692:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var r=a(1721),n=a(7294),s=a(6580),i=a(2973),u=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={cantidadNumerosR:2,semilla:1234,respuesta:[],respuestaPruebasMedias:i.Zj},a}(0,r.Z)(t,e);var a=t.prototype;return a.calcular=function(){this.limpiarRespuestas();var e=this.state,t=e.semilla,a=e.cantidadNumerosR,r=""+t;if(String(t).length>3&&void 0!==t&&a>=1)for(var n=0;n<a;n++){var s=Math.pow(t,2),u=(0,i.KK)(""+s);t=+u,this.agregarRespuesta({semilla:r,cuadrado:s,numeroR:u}),r=u}(String(t).length<=3||void 0===t)&&alert("Para utilizar el algoritmo de cuadrados medios es necesario ingresar un numero con más de 3 dígitos"),a<=0&&alert("La cantidad de numero r debe será mayor a 0");var l=(0,i.A)(this.state.respuesta);this.setState({respuestaPruebasMedias:l})},a.agregarRespuesta=function(e){this.state.respuesta.push(e),this.state.respuesta.push(e)},a.enter=function(e){"Enter"==e.key&&this.calcular()},a.limpiarRespuestas=function(){this.state.respuesta.splice(0,this.state.respuesta.length)},a.render=function(){var e=this;return n.createElement(s.Ar,null,n.createElement(s.pQ,{title:"Calculadora Cuadrados Medios",description:"Calculadora de números pseudoaleatorios por medio del algoritmo de cuadrados medios"}),n.createElement("h1",null,"Calculadora algoritmo de cuadrados medios"),n.createElement("div",null,n.createElement(s.II,{id:"semilla",placeholder:"semilla",onChange:function(t){var a=+t.target.value;e.setState({semilla:0==a?void 0:a})},value:this.state.semilla,onKeyDown:function(t){return e.enter(t)}}),n.createElement(s.II,{id:"cantidadNumerosR",placeholder:"Cantidad de numeros r",value:this.state.cantidadNumerosR,onChange:function(t){var a=+t.target.value;e.setState({cantidadNumerosR:0==a?void 0:a})},onKeyDown:function(t){return e.enter(t)}}),n.createElement("button",{className:"btn",onClick:function(){return e.calcular()}},"Calcular")),n.createElement(s.D0,{prueba:this.state.respuestaPruebasMedias}),n.createElement("div",{className:"resultado card round"},n.createElement("strong",null,"Resultados:"),this.state.respuesta.map((function(t){return n.createElement("div",{key:e.state.respuesta.indexOf(t)},n.createElement("p",null,"Y ",n.createElement("sub",null,e.state.respuesta.indexOf(t))," = (",t.semilla,") ",n.createElement("sup",null,"2")," =",t.cuadrado,","),n.createElement("p",null,"X ",n.createElement("sub",null,e.state.respuesta.indexOf(t)+1)," =",t.numeroR,","),n.createElement("p",null,"r",n.createElement("sub",null,e.state.respuesta.indexOf(t)+1)," = 0.",t.numeroR))}))))},t}(n.Component)},2973:function(e,t,a){function r(e){var t,a=(e.length-4)/2;return e.length%2==0&&(t=e.slice(a,-a)),e.length%2==1?r("0"+e):t}a.d(t,{A:function(){return s},Zj:function(){return n},KK:function(){return r}});var n={promedioR:0,LimiteInferior:0,LimiteSuperior:0,valorAceptacion:!1};function s(e){var t=1.95996,a=n,r=e.length,s=0;e.forEach((function(e){s+=+("0."+e.numeroR)}));var i=1/r*s;a.promedioR=+i.toFixed(5);var u=Math.sqrt(12*r);return a.LimiteInferior=+(.5-t*(1/u)).toFixed(5),a.LimiteSuperior=+(.5+t*(1/u)).toFixed(5),a.promedioR>a.LimiteInferior&&a.promedioR<a.LimiteSuperior&&(a.valorAceptacion=!0),a}}}]);
//# sourceMappingURL=component---src-pages-cuadrados-medios-tsx-cf90899797dd470d453d.js.map