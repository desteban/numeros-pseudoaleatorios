"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[308],{4709:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var r=a(1721),n=a(7294),i=a(6580),s=a(3245),u=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={respuesta:[],cantidadNumerosR:5,semilla1:1234,semilla2:4321,respuestaPruebasMedias:s.Zj,respuestaPruebasVarianza:s.bo},a.state.respuestaPruebasMedias.ver=!1,a}(0,r.Z)(t,e);var a=t.prototype;return a.calcular=function(){this.limpiarRespuestas();var e=this.state,t=e.semilla1,a=e.semilla2,r=e.cantidadNumerosR;if(String(t).length>3&&String(a).length>3&&r>=1||null!=t||null!=a)for(var n=0;n<this.state.cantidadNumerosR;n++){var i=t*a,u=(0,s.KK)(""+i),l={id:n,semilla1:t,semilla2:a,numeroR:u,resultado:i,semilla:"0."+u},o=(0,s.A)(this.state.respuesta),c=(0,s.Oy)(this.state.respuesta);this.agregarRespuesta(l,o,c),t=a,a=+u}String(t).length<=3&&String(a).length,r<=0&&alert("La cantidad de numero r debe será mayor a 0")},a.limpiarRespuestas=function(){this.state.respuesta.splice(0,this.state.respuesta.length)},a.agregarRespuesta=function(e,t,a){var r=this.state.respuesta;r.push(e),this.setState({respuesta:r,respuestaPruebasMedias:t,respuestaPruebasVarianza:a})},a.enter=function(e){"Enter"==e.key&&this.calcular()},a.render=function(){var e=this;return n.createElement(i.Ar,null,n.createElement(i.pQ,{title:"Productos medios",description:"Calculadora de números pseudoaleatorios por medio del algoritmo de productos medios "}),n.createElement("h1",null,"Calculadora de productos medios"),n.createElement("div",null,n.createElement(i.II,{id:"semilla1",placeholder:"Semilla 1",value:this.state.semilla1,onChange:function(t){var a=+t.target.value;e.setState({semilla1:0==a?void 0:a})},onKeyDown:function(t){return e.enter(t)}}),n.createElement(i.II,{id:"semilla2",placeholder:"Semilla 2",value:this.state.semilla2,onChange:function(t){var a=+t.target.value;e.setState({semilla2:0==a?void 0:a})},onKeyDown:function(t){return e.enter(t)}}),n.createElement(i.II,{id:"cantidadNumerosR",placeholder:"Cantidad de numeros r",value:this.state.cantidadNumerosR,onChange:function(t){var a=+t.target.value;e.setState({cantidadNumerosR:0==a?void 0:a})},onKeyDown:function(t){return e.enter(t)}}),n.createElement("button",{className:"btn",onClick:function(){return e.calcular()}},"Calcular")),this.state.respuestaPruebasMedias.ver?(0,i.D0)({prueba:this.state.respuestaPruebasMedias,varianza:this.state.respuestaPruebasVarianza}):null,n.createElement("div",{className:"resultado card round"},n.createElement("strong",null,"Resultados:"),this.state.respuesta.map((function(e){return n.createElement("div",{key:e.id},n.createElement("p",null,"Y",n.createElement("sub",null,e.id)," = (",e.semilla1,") (",e.semilla2,") ="," ",e.resultado),n.createElement("p",null,"X",n.createElement("sub",null,e.id+2)," = ",e.numeroR),n.createElement("p",null,"r",n.createElement("sub",null,e.id+1)," = 0.",e.numeroR))}))))},t}(n.Component)},3245:function(e,t,a){function r(e){var t,a=(e.length-4)/2;return e.length%2==0&&(t=e.slice(a,-a)),e.length%2==1?r("0"+e):t}a.d(t,{A:function(){return i},Zj:function(){return n},KK:function(){return r},Oy:function(){return u},bo:function(){return s}});var n={promedioR:0,LimiteInferior:0,LimiteSuperior:0,valorAceptacion:!1,Zalphamedios:1.95996,ver:!1};function i(e){var t=n;t.ver=!0;var a=e.length,r=0;e.forEach((function(e){r+=+("0."+e.numeroR)}));var i=1/a*r;t.promedioR=+i.toFixed(5);var s=Math.sqrt(12*a);return t.raiz=+s.toFixed(5),t.fraccion=+(1/s).toFixed(5),t.LimiteInferior=+(.5-t.Zalphamedios*t.fraccion).toFixed(5),t.LimiteSuperior=+(.5+t.Zalphamedios*t.fraccion).toFixed(5),t.promedioR>t.LimiteInferior&&t.promedioR<t.LimiteSuperior&&(t.valorAceptacion=!0),t}var s={varianzaNumerosR:0,promedio:0,varianza:0,n:0};function u(e){var t=s;t.n=e.length+1;var a,r=0;return e.forEach((function(e){r+=+("0."+e.numeroR)})),a=+(r/t.n).toFixed(5),t.promedio=a,r=0,e.forEach((function(e){var t=+("0."+e.numeroR);r+=Math.pow(t-a,2)})),r=+r.toFixed(5),t.varianza=r,t.varianzaNumerosR=+(r/(t.n-1)).toFixed(5),t}}}]);
//# sourceMappingURL=component---src-pages-productos-medios-tsx-e30d5d8440d86e007bd0.js.map