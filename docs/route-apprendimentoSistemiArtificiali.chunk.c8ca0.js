(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{UlOE:function(n,t,e){"use strict";e.r(t),function(n){function l(){var n=m(["\n                            left 10\n                            right 10\n                        "]);return l=function(){return n},n}function r(){var n=m(["\n                            forward 10\n                            back 10\n                        "]);return r=function(){return n},n}function i(){var n=m(["\n                            to-report <nome> [var1 var2 var3]\n                                <blocco di codice>\n                                report <restituito>\n                            end\n                        "]);return i=function(){return n},n}function o(){var n=m(["\n                            to <nome> [var1 var2 var3]\n                                <blocco di codice>\n                            end\n                        "]);return o=function(){return n},n}function u(){var n=m(["\n                            to <nome>\n                                <blocco di codice>\n                            end\n                        "]);return u=function(){return n},n}function a(){var n=m(["\n                            ask <bersaglio> [\n                                <blocco di codice>\n                            ]\n                        "]);return a=function(){return n},n}function c(){var n=m(["set <nome> <valore>"]);return c=function(){return n},n}function s(){var n=m(["let <nome> <valore>"]);return s=function(){return n},n}function d(){var n=m(["links-own [var1 var2 var3]"]);return d=function(){return n},n}function p(){var n=m(["patches-own [var1 var2 var3]"]);return p=function(){return n},n}function v(){var n=m(["sprout"]);return v=function(){return n},n}function f(){var n=m(["hatch"]);return f=function(){return n},n}function h(){var n=m(["create"]);return h=function(){return n},n}function g(){var n=m(["<prefisso>-<breed> <quantità>"]);return g=function(){return n},n}function b(){var n=m(["breed [<plurale> <singolare>]"]);return b=function(){return n},n}function m(n,t){return t||(t=n.slice(0)),n.raw=t,n}e.d(t,"default",(function(){return y}));var w=e("hosL"),L=e("ddBW"),k=(e("ZsnK"),e("9yVG")),z=e("PEwj"),C=(e("7bXG"),e("hwaz")),N=String.raw,y=function(t){function e(){return t.apply(this,arguments)||this}var m,w;return w=t,(m=e).prototype=Object.create(w.prototype),m.prototype.constructor=m,m.__proto__=w,e.prototype.render=function(){return n("div",null,n("h1",null,"Apprendimento ed evoluzione in sistemi artificiali"),n(L.a,{title:"NetLogo"},n(k.a,{title:"Cos'è?"},n("p",null,"NetLogo è un software di modellazione sistemi multiagente."),n("p",null,"Si può ",n("a",{href:"https://ccl.northwestern.edu/netlogo/download.shtml"},"scaricare")," o ",n("a",{href:"https://www.netlogoweb.org/launch"},"usare da browser"),"."),n("p",null,"Il suo codice sorgente è disponibile su ",n("a",{href:"https://github.com/NetLogo/NetLogo"},"GitHub"),", e ha una pagina di ",n("a",{href:"https://ccl.northwestern.edu/netlogo/docs/dictionary.html"},"documentazione"),"."))),n(L.a,{title:"Agenti di NetLogo"},n(k.a,{title:"Observer"},n("p",null,"L'",n("b",null,"utente")," di NetLogo, che vive nel contesto globale e dà ordini agli altri agenti.")),n(k.a,{title:"Turtle"},n("p",null,"Entità che possono ",n("b",null,"muoversi")," per il mondo."),n(z.a,null,"Sono più o meno come le ",n("a",{href:"https://www.computercraft.info/wiki/Turtle"},"Turtle di Computercraft"),"!"),n("p",null,"Possono essere di una ",n("i",null,"breed")," (razza) specifica, definite con:"),n(C.a,null,N(b())),n(z.a,null,"Le breed sono praticamente sottoclassi di turtle.")),n(k.a,{title:"Patch"},n("p",null,"I ",n("b",null,"quadratini")," del mondo. Possono essere di vari colori e avere varie proprietà."),n(z.a,null,"...possiamo dire che questi siano i blocchi di Minecraft?")),n(k.a,{title:"Link"},n("p",null,n("b",null,"Collegamenti")," tra due turtle."))),n(L.a,{title:"Creazione di agenti"},n(k.a,{title:"Observer"},n("p",null,"L'observer viene creato automaticamente all'apertura della simulazione.")),n(k.a,{title:"Turtle"},n("p",null,"Nuove turtle possono essere create con il comando:"),n(C.a,null,N(g())),n("p",null,"Dove prefisso varia in base al contesto attuale:"),n("table",null,n("thead",null,n("tr",null,n("th",null,"Contesto"),n("th",null,"Prefisso"))),n("tbody",null,n("tr",null,n("td",null,"Observer"),n("td",null,n("code",null,N(h())))),n("tr",null,n("td",null,"Turtle"),n("td",null,n("code",null,N(f())))),n("tr",null,n("td",null,"Patch"),n("td",null,n("code",null,N(v())))))))),n(L.a,{title:"Variabili"},n(k.a,{title:"Observer"},n("p",null,"All'inizio del codice:"),n(C.a,null,"globals [var1 var2 var3]"),n(z.a,null,"Sono a tutti gli effetti variabili globali.")),n(k.a,{title:"Turtle"},n("p",null,"Aggiungi proprietà a tutte le turtle:"),n(C.a,null,"turtles-own [var1 var2 var3]"),n("p",null,"Aggiungi proprietà alle turtle di un breed:"),n(C.a,null,"<breed>-own [var1 var2 var3]")),n(k.a,{title:"Patch"},n("p",null,"Aggiungi proprietà alle patch:"),n(C.a,null,N(p()))),n(k.a,{title:"Link"},n("p",null,"Aggiungi proprietà ai link:"),n(C.a,null,N(d())))),n(L.a,null,n(k.a,{title:"Locali"},n("p",null,"Si possono creare con:"),n(C.a,null,N(s()))),n(k.a,{title:"Set"},n("p",null,"Si può impostare il valore di una variabile con:"),n(C.a,null,N(c())))),n(L.a,{title:"Blocchi di codice"},n(k.a,{title:"Cambi di contesto"},n("p",null,"Per cambiare contesto:"),n(C.a,null,N(a())),n("p",null,"Nel caso ci siano più bersagli, verranno eseguiti uno")),n(k.a,{title:"Commands"},n("p",null,"Funzioni che non restituiscono nulla:"),n(C.a,null,N(u())),n("p",null,"Con argomenti:"),n(C.a,null,N(o()))),n(k.a,{title:"Reporter"},n("p",null,"Funzioni che restituiscono un valore:"),n(C.a,null,N(i())))),n(L.a,{title:"Comandi per turtle"},n(k.a,{title:"Avanti"},n("p",null,"Muoviti di 10 unità:"),n(C.a,null,N(r())),n("p",null,"Nota che la velocità massima delle tartarughe è di 1 unità/tick, quindi muoversi di 10 unità richiederà 10 tick.")),n(k.a,{title:"Ruota"},n("p",null,"Ruota di 10 gradi:"),n(C.a,null,N(l())))))},e}(w.Component)}.call(this,e("hosL").h)}}]);
//# sourceMappingURL=route-apprendimentoSistemiArtificiali.chunk.c8ca0.js.map