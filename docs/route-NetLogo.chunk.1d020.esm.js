(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"2w3n":function(e){e.exports={red:"red__2y1B_",orange:"orange__dD2kx",yellow:"yellow__OEpwl",lime:"lime__CVe41",cyan:"cyan__26ZAg",blue:"blue__LO7Xm",magenta:"magenta__1Akee",example:"example__2PzAa"}},hkqw:function(e,l,n){"use strict";n.r(l),function(e){var i=n("mbOI"),t=n("ke5e");let a,o,r,u,s,p,c,g,d,v,b,m,h,f,w,_=e=>e;const k=String.raw;l.default=function(){return e("div",null,e("h1",null,e("a",{href:"/apprendimento"},"Apprendimento"),": NetLogo"),e(i.o,{title:"Agenti di NetLogo"},e(i.n,{title:"Observer"},e("p",null,"L'",e("b",null,"utente")," di NetLogo, che vive nel contesto globale e dà ordini agli altri agenti.")),e(i.n,{title:"Turtle"},e("p",null,"Entità che possono ",e("b",null,"muoversi")," per il mondo."),e(t.a,null,"Sono più o meno come le ",e("a",{href:"https://www.computercraft.info/wiki/Turtle"},"Turtle di Computercraft"),"!"),e("p",null,"Possono essere di una ",e("i",null,"breed")," (razza) specifica, definite con:"),e(i.e,{language:"lisp"},k(a||(a=_`breed [<plurale> <singolare>]`))),e(t.a,null,"Le breed sono praticamente sottoclassi di turtle.")),e(i.n,{title:"Patch"},e("p",null,"I ",e("b",null,"quadratini")," del mondo. Possono essere di vari colori e avere varie proprietà."),e(t.a,null,"...possiamo dire che questi siano i blocchi di Minecraft?")),e(i.n,{title:"Link"},e("p",null,e("b",null,"Collegamenti")," tra due turtle."))),e(i.o,{title:"Creazione di agenti"},e(i.n,{title:"Observer"},e("p",null,"L'observer viene creato automaticamente all'apertura della simulazione.")),e(i.n,{title:"Turtle"},e("p",null,"Nuove turtle possono essere create con il comando:"),e(i.e,{language:"lisp"},k(o||(o=_`<prefisso>-<breed> <quantità>`))),e("p",null,"Dove prefisso varia in base al contesto attuale:"),e("table",null,e("thead",null,e("tr",null,e("th",null,"Contesto"),e("th",null,"Prefisso"))),e("tbody",null,e("tr",null,e("td",null,"Observer"),e("td",null,e(i.e,{language:"lisp"},k(r||(r=_`create`))))),e("tr",null,e("td",null,"Turtle"),e("td",null,e(i.e,{language:"lisp"},k(u||(u=_`hatch`))))),e("tr",null,e("td",null,"Patch"),e("td",null,e(i.e,{language:"lisp"},k(s||(s=_`sprout`))))))))),e(i.o,{title:"Variabili"},e(i.n,{title:"Observer"},e("p",null,"All'inizio del codice:"),e(i.e,{language:"lisp"},"globals [var1 var2 var3]"),e(t.a,null,"Sono a tutti gli effetti variabili globali.")),e(i.n,{title:"Turtle"},e("p",null,"Aggiungi proprietà a tutte le turtle:"),e(i.e,{language:"lisp"},"turtles-own [var1 var2 var3]"),e("p",null,"Aggiungi proprietà alle turtle di un breed:"),e(i.e,{language:"lisp"},"<breed>-own [var1 var2 var3]")),e(i.n,{title:"Patch"},e("p",null,"Aggiungi proprietà alle patch:"),e(i.e,{language:"lisp"},k(p||(p=_`patches-own [var1 var2 var3]`)))),e(i.n,{title:"Link"},e("p",null,"Aggiungi proprietà ai link:"),e(i.e,{language:"lisp"},k(c||(c=_`links-own [var1 var2 var3]`))))),e(i.o,null,e(i.n,{title:"Locali"},e("p",null,"Si possono creare con:"),e(i.e,{language:"lisp"},k(g||(g=_`let <nome> <valore>`)))),e(i.n,{title:"Set"},e("p",null,"Si può impostare il valore di una variabile con:"),e(i.e,{language:"lisp"},k(d||(d=_`set <nome> <valore>`))))),e(i.o,{title:"Blocchi di codice"},e(i.n,{title:"Cambi di contesto"},e("p",null,"Per cambiare contesto:"),e(i.e,{language:"lisp"},k(v||(v=_`
                        ask <bersaglio> [
                            <blocco di codice>
                        ]
                    `))),e("p",null,"Nel caso ci siano più bersagli, verranno eseguiti uno")),e(i.n,{title:"Commands"},e("p",null,"Funzioni che non restituiscono nulla:"),e(i.e,{language:"lisp"},k(b||(b=_`
                        to <nome>
                            <blocco di codice>
                        end
                    `))),e("p",null,"Con argomenti:"),e(i.e,{language:"lisp"},k(m||(m=_`
                        to <nome> [var1 var2 var3]
                            <blocco di codice>
                        end
                    `)))),e(i.n,{title:"Reporter"},e("p",null,"Funzioni che restituiscono un valore:"),e(i.e,{language:"lisp"},k(h||(h=_`
                        to-report <nome> [var1 var2 var3]
                            <blocco di codice>
                            report <restituito>
                        end
                    `))))),e(i.o,{title:"Comandi per turtle"},e(i.n,{title:"Avanti"},e("p",null,"Muoviti di 10 unità:"),e(i.e,{language:"lisp"},k(f||(f=_`
                        forward 10
                        back 10
                    `)))),e(i.n,{title:"Ruota"},e("p",null,"Ruota di 10 gradi:"),e(i.e,{language:"lisp"},k(w||(w=_`
                        left 10
                        right 10
                    `))))))}}.call(this,n("hosL").h)},ke5e:function(e,l,n){"use strict";(function(e){var i=n("2w3n"),t=n.n(i);l.a=function(l){return e("div",{class:t.a.example},l.children)}}).call(this,n("hosL").h)}}]);
//# sourceMappingURL=route-NetLogo.chunk.1d020.esm.js.map