(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"2w3n":function(l){l.exports={example:"example__2PzAa"}},"3k98":function(l){l.exports={todo:"todo__1UVRh"}},"4fSx":function(l){l.exports={unbounded:"unbounded__25UN8",unfeasible:"unfeasible__2MuIF",finite:"finite__2EP_f",min:"min__3lPpn",max:"max__1hxKl"}},"8uYk":function(l){l.exports={box:"box__3cKyY",default:"default__v-emJ",red:"red__339Cz",orange:"orange__24_8v",yellow:"yellow__1Jo9W",lime:"lime__34yV5",cyan:"cyan__3RqLr",blue:"blue__13Wnj",magenta:"magenta__2tkzq"}},BSmf:function(l,n,i){"use strict";(function(l){i.d(n,"a",(function(){return o}));var e=i("hosL"),t=i("EfTa"),a=i.n(t);class o extends e.Component{constructor(){super(),this.state={now:Date.now()},this.timer=null}componentDidMount(){this.timer=setInterval(()=>{this.setState({now:Date.now()})},1e3)}componentWillUnmount(){null!==this.timer&&clearInterval(this.timer)}render(){let n="Unknown date",i=a.a.timer,e={milliseconds:"?",seconds:"?",minutes:"?",hours:"?",days:"?"};if(this.props.to){n=new Date(this.props.to);let l=n-this.state.now;l>0?e={milliseconds:l%1e3,seconds:Math.floor(l/1e3)%60,minutes:Math.floor(l/6e4)%60,hours:Math.floor(l/36e5)%24,days:Math.floor(l/864e5)}:(e={milliseconds:0,seconds:0,minutes:0,hours:0,days:0},i+=" "+a.a.expired)}else i+=" "+a.a.unknown;return l("div",{class:i,title:n},l("div",{class:a.a.days+" "+a.a.count},e.days),l("div",{className:a.a.days+" "+a.a.text},"giorni"),l("div",{class:a.a.hours+" "+a.a.count},e.hours),l("div",{className:a.a.hours+" "+a.a.text},"ore"),l("div",{class:a.a.minutes+" "+a.a.count},e.minutes),l("div",{className:a.a.minutes+" "+a.a.text},"minuti"),l("div",{class:a.a.seconds+" "+a.a.count},e.seconds),l("div",{class:a.a.seconds+" "+a.a.text},"secondi"),l("div",{class:a.a.remaining},"rimasti"))}}}).call(this,i("hosL").h)},CHUc:function(l){l.exports={tablepanel:"tablepanel__PkBWm"}},EfTa:function(l){l.exports={timer:"timer__K0K_h",days:"days__vN3tf",hours:"hours__3v0KX",minutes:"minutes__vkYk7",seconds:"seconds__3gJ99",count:"count__1VV4k",text:"text__khS4i",remaining:"remaining__zUECg",unknown:"unknown__af307",expired:"expired__1rtHB"}},OMhl:function(l,n,i){"use strict";(function(l){var e=i("p7QU"),t=i.n(e),a=i("QRet"),o=i("8CDw"),u=i("wQ73");n.a=function(n){let i,e=Object(a.b)(o.a),r=Object(a.b)(u.a);return i=void 0===n.inline?r:n.inline,l("img",{src:`https://latex.codecogs.com/svg.latex?${`${i?"\\inline":""} {\\color{${e}} ${n.children} }`}`,alt:n.children,title:n.children,class:t.a.latex})}}).call(this,i("hosL").h)},OmdA:function(l){l.exports={title:"title__3ZVpg",contents:"contents__20_NI"}},PEwj:function(l,n,i){"use strict";(function(l){var e=i("2w3n"),t=i.n(e);i("hosL"),n.a=function(n){return l("div",{class:t.a.example},n.children)}}).call(this,i("hosL").h)},QRet:function(l,n,i){"use strict";function e(l){q.options.__h&&q.options.__h(z);var n=z.__H||(z.__H={__:[],__h:[]});return l>=n.__.length&&n.__.push({}),n.__[l]}function t(l){return a(v,l)}function a(l,n,i){var t=e(g++);return t.__c||(t.__c=z,t.__=[i?i(n):v(void 0,n),function(n){var i=l(t.__[0],n);t.__[0]!==i&&(t.__[0]=i,t.__c.setState({}))}]),t.__}function o(l,n){var i=e(g++);_(i.__H,n)&&(i.__=l,i.__H=n,z.__H.__h.push(i))}function u(l,n){var i=e(g++);_(i.__H,n)&&(i.__=l,i.__H=n,z.__h.push(i))}function r(l){return c((function(){return{current:l}}),[])}function s(l,n,i){u((function(){"function"==typeof l?l(n()):l&&(l.current=n())}),null==i?i:i.concat(l))}function c(l,n){var i=e(g++);return _(i.__H,n)?(i.__H=n,i.__h=l,i.__=l()):i.__}function d(l,n){return c((function(){return l}),n)}function m(l){var n=z.context[l.__c];if(!n)return l.__;var i=e(g++);return null==i.__&&(i.__=!0,n.sub(z)),n.props.value}function f(l,n){q.options.useDebugValue&&q.options.useDebugValue(n?n(l):l)}function b(){w.some((function(l){if(l.__P)try{l.__H.__h.forEach(h),l.__H.__h.forEach(p),l.__H.__h=[]}catch(n){return l.__H.__h=[],q.options.__e(n,l.__v),!0}})),w=[]}function h(l){l.t&&l.t()}function p(l){var n=l.__();"function"==typeof n&&(l.t=n)}function _(l,n){return!l||n.some((function(n,i){return n!==l[i]}))}function v(l,n){return"function"==typeof n?n(l):n}i.d(n,"j",(function(){return t})),i.d(n,"h",(function(){return a})),i.d(n,"d",(function(){return o})),i.d(n,"f",(function(){return u})),i.d(n,"i",(function(){return r})),i.d(n,"e",(function(){return s})),i.d(n,"g",(function(){return c})),i.d(n,"a",(function(){return d})),i.d(n,"b",(function(){return m})),i.d(n,"c",(function(){return f}));var g,z,x,q=i("hosL"),w=[],L=q.options.__r,T=q.options.diffed,S=q.options.__c,I=q.options.unmount;q.options.__r=function(l){L&&L(l),g=0,(z=l.__c).__H&&(z.__H.__h.forEach(h),z.__H.__h.forEach(p),z.__H.__h=[])},q.options.diffed=function(l){T&&T(l);var n=l.__c;if(n){var i=n.__H;i&&i.__h.length&&(1!==w.push(n)&&x===q.options.requestAnimationFrame||((x=q.options.requestAnimationFrame)||function(l){var n,i=function(){clearTimeout(e),cancelAnimationFrame(n),setTimeout(l)},e=setTimeout(i,100);"undefined"!=typeof window&&(n=requestAnimationFrame(i))})(b))}},q.options.__c=function(l,n){n.some((function(l){try{l.__h.forEach(h),l.__h=l.__h.filter((function(l){return!l.__||p(l)}))}catch(i){n.some((function(l){l.__h&&(l.__h=[])})),n=[],q.options.__e(i,l.__v)}})),S&&S(l,n)},q.options.unmount=function(l){I&&I(l);var n=l.__c;if(n){var i=n.__H;if(i)try{i.__.forEach((function(l){return l.t&&l.t()}))}catch(l){q.options.__e(l,n.__v)}}}},RPi6:function(l,n,i){"use strict";(function(l){var e=i("4fSx"),t=i.n(e);n.a=function(n){return l("abbr",{class:t.a.max,title:"In problemi in cui il primale è di massimizzazione."},n.children?n.children:"max")}}).call(this,i("hosL").h)},RtuP:function(l,n,i){"use strict";(function(l){var e=i("4fSx"),t=i.n(e);n.a=function(n){return l("abbr",{class:t.a.finite,title:"I punti del poliedro sono finiti."},n.children?n.children:"finito")}}).call(this,i("hosL").h)},Th1s:function(l,n,i){"use strict";(function(l){var e=i("4fSx"),t=i.n(e);n.a=function(n){return l("abbr",{class:t.a.unfeasible,title:"Il poliedro non contiene punti."},n.children?n.children:"vuoto")}}).call(this,i("hosL").h)},Y9Ml:function(l,n,i){"use strict";(function(l){var e=i("8uYk"),t=i.n(e);const a=Object.freeze({RED:t.a.red,ORANGE:t.a.orange,YELLOW:t.a.yellow,LIME:t.a.lime,CYAN:t.a.cyan,BLUE:t.a.blue,MAGENTA:t.a.magenta,DEFAULT:t.a.default});n.a=function(n){let i=a.DEFAULT;return n.color&&(i=n.color),l("div",{class:t.a.box+" "+i},n.children)}}).call(this,i("hosL").h)},dIxp:function(l,n,i){"use strict";(function(l){var e=i("4fSx"),t=i.n(e);n.a=function(n){return l("abbr",{class:t.a.unbounded,title:"I punti del poliedro sono infiniti."},n.children?n.children:"illimitato")}}).call(this,i("hosL").h)},eCjK:function(l){l.exports={split:"split__3dL9r",splitparent:"splitparent__2H-vS",splitchild:"splitchild__1B-Jt"}},eNIY:function(l,n,i){"use strict";(function(l){var e=i("CHUc"),t=i.n(e);n.a=function(n){return l("table",{class:t.a.tablepanel},n.children)}}).call(this,i("hosL").h)},fWbf:function(l,n,i){"use strict";(function(l){var e=i("4fSx"),t=i.n(e);n.a=function(n){return l("abbr",{class:t.a.min,title:"In problemi in cui il primale è di minimizzazione."},n.children?n.children:"min")}}).call(this,i("hosL").h)},hasd:function(l,n,i){"use strict";i.r(n),function(l){i.d(n,"default",(function(){return Al}));var e=i("hosL"),t=i("lL4N"),a=i("OMhl"),o=i("imVn"),u=i("PEwj"),r=i("jXlC"),s=i("BSmf"),c=i("Th1s"),d=i("dIxp"),m=i("fWbf"),f=i("RPi6"),b=i("lR14"),h=i("wQ73"),p=i("eNIY"),_=i("RtuP");let v,g,z,x,q,w,L,T,S,I,C,y,A,U,E,H,F,O,D,P,V,j,k,R,M,N,B,Y,G,J,Q,K,W,X,$,Z,ll,nl,il,el,tl,al,ol,ul,rl,sl,cl,dl,ml,fl,bl,hl,pl,_l,vl,gl,zl,xl,ql,wl,Ll,Tl,Sl,Il,Cl=l=>l;const yl=String.raw;class Al extends e.Component{render(){return l("div",null,l("h1",null,"Ottimizzazione lineare intera"),l(t.a,{title:"Unimore"},l(o.a,{title:"Videolezioni su YouTube"},l("p",null,"Ho rimosso il rumore in sottofondo da tutti i video di Ricerca Operativa!"),l("p",null,l("b",null,l("a",{href:"https://www.youtube.com/playlist?list=PLh93e8qjTszffkHNn-19CqUOhHFbhBlBh"},"Guardate i video qui!")))),l(o.a,{title:"Prossimi appelli"},l("ol",null,l("li",null,l(s.a,{to:"2020-06-08"})),l("li",null,l(s.a,{to:"2020-06-25"})),l("li",null,l(s.a,{to:"2020-07-14"}))))),l(h.a.Provider,{value:!1},l(t.a,{title:"Glossario"},l(p.a,null,l("thead",null,l("tr",null,l("th",null,l("abbr",{title:"Vettore / matrice"},"v")),l("th",null,l("abbr",{title:"Elemento singolo"},"s")),l("th",null,"Significato"))),l("tbody",null,l("tr",null,l("td",null,l(a.a,null,yl(v||(v=Cl`\mathbf{x}`)))),l("td",null,l(a.a,null,yl(g||(g=Cl`x_i`)))),l("td",null,"Incognite")),l("tr",null,l("td",null,l(a.a,null,yl(z||(z=Cl`\mathbf{s}`)))),l("td",null,l(a.a,null,yl(x||(x=Cl`s_i`)))),l("td",null,"Variabili slack")),l("tr",null,l("td",null,l(a.a,null,yl(q||(q=Cl`\mathbf{c}`)))),l("td",null,l(a.a,null,yl(w||(w=Cl`c_i`)))),l("td",null,"Coefficienti della funzione obiettivo")),l("tr",null,l("td",null,l(a.a,null,yl(L||(L=Cl`\mathbf{A}`)))),l("td",null,l(a.a,null,yl(T||(T=Cl`a_{ij}`)))),l("td",null,"Coefficienti dei vincoli")),l("tr",null,l("td",null,l(a.a,null,yl(S||(S=Cl`\mathbf{b}`)))),l("td",null,l(a.a,null,yl(I||(I=Cl`b_i`)))),l("td",null,"Termini noti dei vincoli")),l("tr",null,l("td",null,l(a.a,null,yl(C||(C=Cl`\mathbf{y}`)))),l("td",null,l(a.a,null,yl(y||(y=Cl`y_i`)))),l("td",null,"Incognite artificiali")),l("tr",null,l("td",null,l(a.a,null,yl(A||(A=Cl`\mathbf{u}`)))),l("td",null,l(a.a,null,yl(U||(U=Cl`u_i`)))),l("td",null,"Coefficienti di rilassamento")),l("tr",null,l("td",null),l("td",null,l(a.a,null,yl(E||(E=Cl`c_0`)))),l("td",null,"Valore ottimo di un problema")),l("tr",null,l("td",null,l(a.a,null,yl(H||(H=Cl`\mathbf{x}_B`)))),l("td",null),l("td",null,"Incognite in base")),l("tr",null,l("td",null,l(a.a,null,yl(F||(F=Cl`\mathbf{c}_B`)))),l("td",null),l("td",null,"Coefficienti della funzione obiettivo delle variabili in base")),l("tr",null,l("td",null,l(a.a,null,yl(O||(O=Cl`\mathbf{B}`)))),l("td",null),l("td",null,"Coefficienti dei vincoli delle variabili in base")),l("tr",null,l("td",null,l(a.a,null,yl(D||(D=Cl`\mathbf{x}_F`)))),l("td",null),l("td",null,"Incognite fuori base")),l("tr",null,l("td",null,l(a.a,null,yl(P||(P=Cl`\mathbf{c}_F`)))),l("td",null),l("td",null,"Coefficienti della funzione obiettivo delle variabili fuori base")),l("tr",null,l("td",null,l(a.a,null,yl(V||(V=Cl`\mathbf{F}`)))),l("td",null),l("td",null,"Coefficienti dei vincoli delle variabili fuori base")))),l(p.a,null,l("thead",null,l("tr",null,l("th",null,"Simboli"),l("th",null,"Significato"))),l("tbody",null,l("tr",null,l("td",null,l(a.a,null,yl(j||(j=Cl`\mathbf{c}^T \mathbf{x}`)))),l("td",null,"Soluzione del problema")),l("tr",null,l("td",null,l(a.a,null,yl(k||(k=Cl`\mathbf{A} \mathbf{x} = \mathbf{b}`)))),l("td",null,"Vincoli in forma standard")),l("tr",null,l("td",null,l(a.a,null,yl(R||(R=Cl`z(\dots)`)))),l("td",null,"Funzione obiettivo")),l("tr",null,l("td",null,l(a.a,null,yl(M||(M=Cl`\mathbf{u}^T \mathbf{b}`)))),l("td",null,"Soluzione del problema duale")),l("tr",null,l("td",null,l(a.a,null,yl(N||(N=Cl`\mathbf{u}^T \mathbf{A} = \mathbf{c}^T`)))),l("td",null,"Vincoli del problema duale in forma standard")))))),l(t.a,{title:"Le basi"},l(o.a,{title:"Funzione obiettivo"},l("p",null,"La funzione obiettivo è la funzione con valore noto sconosciuto:"),l("p",null,l(a.a,null,yl(B||(B=Cl`z = C_1 \cdot x_1 + C_2 \cdot x_2 + C_n \cdot x_n`)))))),l(t.a,{title:"Problemi di ottimizzazione lineare"},l(o.a,{title:"Cosa sono?"},l("p",null,"I problemi di ottimizzazione lineare sono problemi che cercano di ",l(m.a,null,"minimizzare"),"/",l(f.a,null,"massimizzare")," il valore di una ",l("i",null,"funzione obiettivo")," le cui incognite sono sottoposte a un ",l("b",null,"sistema di ",l("i",null,"vincoli")),".")),l(o.a,{title:"Funzione obiettivo"},l("p",null,"La funzione da ",l(m.a,null,"minimizzare"),"/",l(f.a,null,"massimizzare"),"."),l("p",null,"Il vettore dei suoi coefficienti è detto ",l(a.a,null,yl(Y||(Y=Cl`\mathbf{c}`))),", mentre quello delle sue incognite ",l(a.a,null,yl(G||(G=Cl`\mathbf{x}`))),".")),l(o.a,{title:"Vincoli"},l("p",null,"Equazioni e disequazioni a cui devono sottostare le incognite perchè esse formino una soluzione valida."),l("p",null,"I loro coefficienti sono contenuti nella matrice ",l(a.a,null,yl(J||(J=Cl`\mathbf{A}`))),", mentre i loro termini noti nel vettore ",l(a.a,null,yl(Q||(Q=Cl`\mathbf{b}`))),".")),l(o.a,{title:"Valore ottimo"},l("p",null,"La ",l("b",null,"soluzione")," di un problema, ricavabile dal prodotto ",l(a.a,null,yl(K||(K=Cl`\mathbf{c}^T \mathbf{x}`))),"."),l("p",null,"Spesso, la funzione obiettivo è indicata con il nome ",l(a.a,null,yl(W||(W=Cl`z(\dots)`))),".")),l(o.a,{title:"Poliedro"},l("p",null,"L'",l("b",null,"insieme")," che racchiunde tutte le ",l("b",null,"soluzioni ammissibili")," di un problema."),l("p",null,"In particolare, il valore ottimo è un ",l("b",null,"vertice")," del poliedro, detto ",l("i",null,"vertice ottimo"),"."),l("p",null,"Può essere ",l("i",null,l(_.a,null)),", ",l("i",null,l(c.a,null))," oppure ",l("i",null,l(d.a,null)),".")),l(o.a,{title:"Gradiente"},l("p",null,l("b",null,"Funzione")," della funzione obiettivo che restituisce la direzione del suo aumento più veloce."),l("p",null,l(a.a,null,yl(X||(X=Cl`\nabla f = \frac{\delta f}{\delta x_1} \mathbf{I}_1 + \frac{\delta f}{\delta x_2} \mathbf{I}_2 + \frac{\delta f}{\delta x_n} \mathbf{I}_n`)))),l(u.a,null,"La matrice ",l(a.a,null,yl($||($=Cl`\mathbf{I}`)))," è la matrice identità."),l(u.a,null,"Se la funzione obiettivo è ",l(a.a,null,"z = 2w + 3x + 4y"),", il suo gradiente è ",l(a.a,null,yl(Z||(Z=Cl`\nabla z = (2, 3, 4)`))),"."))),l(t.a,{title:"Forme di un problema di ottimizzazione"},l(o.a,{title:"Forma generale"},l("p",null,"Un problema con:"),l("ul",null,l("li",null,l("b",null,"Equazioni e disequazioni")),l("li",null,l("b",null,"Variabili non vincolate"))),l(b.a,null,yl(ll||(ll=Cl`min \left\{ \mathbf{c}^T \mathbf{x} : \mathbf{A} \mathbf{x} = b,\quad \mathbf{A'} \mathbf{x} \geq \mathbf{b'} \quad x_j \geq 0,\quad j = 1 \dots n \right\}`)))),l(o.a,{title:"Forma canonica"},l("p",null,"Un problema con:"),l("ul",null,l("li",null,l("b",null,"Solo disequazioni")),l("li",null,l("b",null,"Vincoli di non-negatività sulle incognite"))),l(b.a,null,yl(nl||(nl=Cl`min \left\{ \mathbf{c}^T \mathbf{x} : \mathbf{A} \mathbf{x} \geq b,\quad x_j \geq 0,\quad j = 1 \dots n \right\}`)))),l(o.a,{title:"Forma standard"},l("p",null,"Un problema con:"),l("ul",null,l("li",null,l("b",null,"Solo equazioni")),l("li",null,l("b",null,"Vincoli di non-negatività sulle incognite"))),l(b.a,null,yl(il||(il=Cl`min \left\{ \mathbf{c}^T \mathbf{x} : \mathbf{A} \mathbf{x} = b,\quad x_j \geq 0,\quad j = 1 \dots n \right\}`))))),l(t.a,{title:"Conversioni tra le forme"},l(o.a,{title:"Standard e generale"},l("p",null,"Applica questa conversione a ogni equazione nel sistema:"),l("p",null,l(a.a,{inline:!1},yl(el||(el=Cl`a = b \Leftrightarrow
                                \begin{cases}
                                    a \leq b\\
                                    a \geq b
                                \end{cases}
                            `)))),l(u.a,null,"Serve solo nella teoria per dimostrare che le forme sono equivalenti.")),l(o.a,{title:"Canonica e standard"},l("p",null,"Aggiungi una ",l("i",null,"variabile slack")," ",l(a.a,null,yl(tl||(tl=Cl`s`)))," ",l("b",null,"non-vincolata")," a ogni disequazione nel sistema:"),l("p",null,l(a.a,{inline:!1},yl(al||(al=Cl`
                                a \leq b \Leftrightarrow a + s = b
                            `)))),l("p",null,l(a.a,{inline:!1},yl(ol||(ol=Cl`
                                a \geq b \Leftrightarrow a - s = b
                            `))))),l(o.a,{title:"Generale e canonica"},l("p",null,"Sdoppia ogni variabile non-vincolata in due variabili con vincolo di non-negatività:"),l("p",null,l(a.a,{inline:!1},yl(ul||(ul=Cl`\begin{cases}
                                a = a^+ - a^-\\
                                a^+ \geq 0\\
                                a^- \geq 0
                            \end{cases}`)))))),l(t.a,{title:"La forma standard"},l(o.a,{title:"Tableau"},l("p",null,"Un modo per rappresentare sistemi in forma standard, anche noto come ",l("b",null,"matrice equivalente completa")," del sistema."),l(u.a,null,"Il sistema:",l("br",null),l("br",null),l(a.a,{inline:!1},yl(rl||(rl=Cl`
                                \begin{cases}
                                2000x_1 + 1000x_2 = z\\
                                1x_1 \leq 3\\
                                1x_2 \leq 3\\
                                2x_1 + 2x_2 \leq 7
                                \end{cases}
                            `))),l("br",null),l("br",null),"Diventa il tableau:",l("br",null),l("br",null),l("table",{class:"right"},l("thead",null,l("tr",null,l("th",null,l("abbr",{title:"Termine noto"},"TN")),l("th",null,l(a.a,null,"x_1")),l("th",null,l(a.a,null,"x_2")),l("th",null,l(a.a,null,"s_1")),l("th",null,l(a.a,null,"s_2")))),l("tbody",null,l("tr",null,l("td",null,l(a.a,null,"z")),l("td",null,l(a.a,null,"2000")),l("td",null,l(a.a,null,"1000")),l("td",null,l(a.a,null,"0")),l("td",null,l(a.a,null,"0"))),l("tr",null,l("td",null,l(a.a,null,"3")),l("td",null,l(a.a,null,"1")),l("td",null,l(a.a,null,"0")),l("td",null,l(a.a,null,"1")),l("td",null,l(a.a,null,"0"))),l("tr",null,l("td",null,l(a.a,null,"3")),l("td",null,l(a.a,null,"0")),l("td",null,l(a.a,null,"1")),l("td",null,l(a.a,null,"0")),l("td",null,l(a.a,null,"1"))),l("tr",null,l("td",null,l(a.a,null,"7")),l("td",null,l(a.a,null,"2")),l("td",null,l(a.a,null,"2")),l("td",null,l(a.a,null,"0")),l("td",null,l(a.a,null,"0"))))))),l(o.a,{title:"Variabili nella base"},l("p",null,"Variabili che hanno ",l("b",null,"tutti 0 e un solo 1")," nella loro colonna del tableau."),l("p",null,"La loro controparte sono le ",l("i",null,"variabili fuori base"),", che hanno qualsiasi altro valore."))),l(t.a,{title:"Simplex primale"},l(o.a,{title:"Cos'è?"},l("p",null,"Un algoritmo per ",l(m.a,null,"minimizzare"),"/",l(f.a,null,"massimizzare")," trovare efficientemente ",l("b",null,"valore ottimo")," di problemi di ottimizzazione lineare, derivato da Gauss-Jordan."),l("p",null,"Da esso si può anche ricavare un ",l("b",null,"vertice ottimo ammissibile"),".",l("br",null),"C'è la possibilità che ne esistano anche altri: quello ottenuto dipende da come è stata effettuata la scelta delle variabili entranti."),l(u.a,null,"E' spiegato in modo semplice ",l("a",{href:"https://web.archive.org/web/20200523052252/https://www.cs.cmu.edu/~15451-f17/handouts/simplex.pdf"},"qui"),", e ci sono dei codici sorgenti di esempio ",l("a",{href:"https://www.cs.cmu.edu/~15451-f17/handouts/simplexcodes/"},"qui"),"."),l(u.a,{title:"Esempio"},l("p",null,l("a",{href:"https://i.imgur.com/1r405Mb.jpg"},"Questa")," è la soluzione passo per passo del problema 3 del file ",l("a",{href:"https://dolly.fim.unimore.it/2019/mod/resource/view.php?id=2716"},l("code",null,"Ex_LP_testo")),"."))),l(o.a,{title:"I passi"},l("ol",null,l("li",null,"Trasforma il sistema in ",l("b",null,"forma standard"),"."),l("li",null,"Trova tante variabili ",l("b",null,"linearmente indipendenti")," quante siano le righe: esse saranno la ",l("i",null,"base iniziale"),"."),l("li",null,"Finchè ci sono variabili con coefficienti ",l(m.a,null,"positivi"),"/",l(f.a,null,"negativi")," nella funzione obiettivo:",l("ol",null,l("li",null,l("b",null,"Scegli")," la prima variabile fuori base con coefficiente ",l(m.a,null,"positivo"),"/",l(f.a,null,"negativo")," nella funzione obiettivo: essa è la ",l("i",null,"variabile entrante"),".",l("br",null),l("aside",null,l("i",null,"Regola di Bland"),": Si potrebbe scegliere qualsiasi variabile come entrante, ma scegliendo sempre la prima ammissibile ci si assicura che l'algoritmo termini.")),l("li",null,l("b",null,"Scegli")," la variabile in base con il minor rapporto positivo ",l(a.a,null,yl(sl||(sl=Cl`\frac{termine\ noto}{coeff.\ variabile\ entrante}`))),".",l("aside",null,"Se non sei riuscito a trovare nessuna variabile con un rapporto positivo, significa che il poliedro è ",l(d.a,null),".")),l("li",null,l("u",null,"Pivot"),": ",l("b",null,"riscrivi")," tutte le funzioni del sistema in termini della variabile entrante."))),l("li",null,"Il poliedro è ",l(_.a,null),": i ",l("b",null,"termini noti dei vincoli")," sono le coordinate del suo vertice ottimo, mentre il ",l("b",null,"termine noto della funzione obiettivo")," è il valore ottimo.")),l(u.a,null,"È praticamente l'algoritmo di Gauss-Jordan applicato al tableau, con delle regole aggiuntive per la decisione delle variabili di pivot.")),l(o.a,{title:"Soluzioni di base degenerata"},l("p",null,"Una soluzione con almeno una variabile di valore ",l(a.a,null,"0"),", dovuta a uno o più ",l("b",null,"vincoli ridondanti"),"."),l("p",null,"Senza ",l("b",null,"Regola di Bland")," e in presenza di vincoli ridondanti si rischia di trovarsi a fare pivot infiniti."))),l(t.a,{title:"Metodo delle due fasi"},l(o.a,{title:"Metodo delle due fasi"},l("p",null,"Un estensione del Simplex per permettere la risoluzione di problemi la cui origine non è una soluzione ammissibile."),l("p",null,"Prevede l'introduzione di un ",l("i",null,"problema ausiliario"),", le cui incognite sono dette ",l("i",null,"artificiali"),"."),l("p",null,"Il vettore delle incognite artificiali è solitamente chiamato ",l(a.a,null,yl(cl||(cl=Cl`\mathbf{y}`))),"."),l(u.a,null,"E' spiegato in modo semplice ",l("a",{href:"https://web.archive.org/web/20200523052252/https://www.cs.cmu.edu/~15451-f17/handouts/simplex.pdf"},"qui"),".")),l(o.a,{title:"Procedimento"},l("ol",null,l("li",null,"Crea un nuovo tableau, ",l("b",null,"aggiungendo variabili artificiali")," in modo da avere una base ammissibile."),l("li",null,"Sostituisci la vecchia funzione obiettivo con una nuova che ",l("b",null,"minimizzi la somma")," di tutte le variabili artificiali."),l("li",null,l("u",null,"Fase 1"),": ",l("b",null,"Risolvi")," il nuovo problema con il simplex primale."),l("li",null,"Se il Simplex termina quando ci sono ancora ",l("b",null,"variabili artificiali nella base"),", allora il poliedro è ",l("b",null,l(c.a,null)),"."),l("li",null,"Una volta che le variabili artificiali sono fuori base, ",l("b",null,"elimina")," le loro colonne e la nuova funzione obiettivo.",l("br",null)),l("li",null,"Riporta il tableau in forma base compiendo operazioni per ",l("b",null,"azzerare i coefficienti")," delle variabili di base nella funzione obiettivo."),l("li",null,l("u",null,"Fase 2"),": ",l("b",null,"Risolvi")," il tableau con il simplex primale.")))),l(t.a,{title:"Rilassamento"},l(o.a,{title:"Cos'è?"},l("p",null,"Una versione semplificata di un problema nella quale si ",l("b",null,"ignora la violazione")," di uno o più vincoli.")),l(o.a,{title:"Rilassamento di Lagrange"},l("p",null,"Un rilassamento che permette di misurare ",l("b",null,"di quanto i vincoli vengono violati"),"."),l("p",null,"I vincoli, moltiplicati per ",l("b",null,"coefficienti di rilassamento"),", vengono inseriti nella funzione obiettivo."),l("p",null,"Il vettore dei coefficienti di rilassamento solitamente è indicato con ",l(a.a,null,yl(dl||(dl=Cl`\mathbf{u}`))),"."),l(u.a,null,l("p",null,"Il sistema:"),l(a.a,{inline:!1},yl(ml||(ml=Cl`
                                \begin{cases}
                                z = 3 x_1 + 5 x_2\\
                                2 x_1 + 3 x_2 \geq 12\\
                                - x_1 + 3 x_2 \geq 3\\
                                x_1 \geq 0\\
                                x_2 \geq 0
                                \end{cases}
                            `))),l("p",null,"diventa:"),l(a.a,{inline:!1},yl(fl||(fl=Cl`
                                \begin{cases}
                                z = 3 x_1 + 5 x_2 + u_1 ( 12 - 2 x_1 - 3 x_2 ) + u_2 ( 3 + x_1 - 3 x_2 )\\
                                x_1 \geq 0\\
                                x_2 \geq 0
                                \end{cases}
                            `)))))),l(t.a,{title:"Dualità"},l(o.a,{title:"Duale"},l("p",null,"Il sistema che ",l("b",null,l(m.a,null,"massimizza"),"/",l(f.a,null,"minimizza")," i moltiplicatori di rilassamento")," di un problema detto ",l("i",null,"primale"),".")),l(o.a,{title:"In termini matriciali"},l("p",null,"Possiamo ",l("b",null,"trasporre")," il tableau e sostituire le variabili ",l(a.a,null,yl(bl||(bl=Cl`x_n`)))," con variabili ",l(a.a,null,yl(hl||(hl=Cl`u_n`)))," per ottenere il sistema duale!"),l("p",null,"I maggiori e minori dei vincoli diventeranno maggiori e minori delle variabili e viceversa.")),l(o.a,{title:"Feasibility del duale"},l("ul",null,l("li",null,"Se un problema ha una ",l("b",null,"soluzione finita"),", allora anche il suo duale la avrà."),l("li",null,"Se un problema è ",l("b",null,l(c.a,null)),", allora il suo duale potrà essere ",l(c.a,null)," oppure ",l(d.a,null),"."),l("li",null,"Se un problema è ",l("b",null,l(d.a,null)),", allora il suo duale sarà certamente ",l(c.a,null),".")))),l(t.a,{title:"Un po' di teoria"},l(o.a,{title:"Lemma di Farkas"},l("p",null,"Una disuguaglianza lineare ",l(a.a,null,yl(pl||(pl=Cl`c_0 \leq \mathbf{c}^T \mathbf{x}`)))," è verificata da tutti i punti di un poliedro non-",l(c.a,null)," se e solo se esiste un vettore ",l(a.a,null,yl(_l||(_l=Cl`u \in \mathfrak{R}^m`)))," tale che:"),l(b.a,null,yl(vl||(vl=Cl`\mathbf{c}^T \geq \mathbf{u}^T \mathbf{A}`))),l(b.a,null,yl(gl||(gl=Cl`c_0 \leq \mathbf{u}^T \mathbf{b}`))),l("p",null,l(r.a,null,"TODO: Cioè?"))),l(o.a,{title:"Dualità forte"},l("p",null,"Il teorema che dimostra l'equivalenza tra primale e duale."),l("p",null,"Se uno dei due problemi è finito, la soluzione di uno coincide con la soluzione dell'altro."),l("p",null,l(a.a,null,yl(zl||(zl=Cl`\mathbf{c}^T \mathbf{x} = \mathbf{u}^T \mathbf{b}`)))),l("p",null,l(r.a,null,"TODO: Anche qui c'è una lunga dimostrazione..."))),l(o.a,{title:"Dualità debole"},l("p",null,"Il teorema che dimostra che il valore della funzione obiettivo del duale (di un qualsiasi tableau) è sempre ",l(m.a,null,"minore o uguale"),"/",l(f.a,null,"maggiore o uguale")," alla soluzione del corrispettivo primale."),l("p",null,l(r.a,null,"TODO: Dimostrazione cortina, ma sembra complicata."))),l(o.a,{title:"Condizioni di ottimalità"},l("p",null,"Il teorema che ci permette di passare dalla soluzione del duale alla soluzione del primale. ",l(r.a,null,"TODO: credo?")),l("p",null,"Si deriva combinando le seguenti condizioni:"),l("ul",null,l("li",null,"Ammissibilità del primale: ",l(a.a,null,yl(xl||(xl=Cl`\mathbf{A} \mathbf{X} \geq \mathbf{b}, \quad \mathbf{x} \geq 0`)))),l("li",null,"Ammissibilità del duale: ",l(a.a,null,yl(ql||(ql=Cl`\mathbf{u}^T \mathbf{A} \leq \mathbf{c}^T, \quad \mathbf{u} \geq 0`)))),l("li",null,"Teorema della dualità forte: ",l(a.a,null,yl(wl||(wl=Cl`\mathbf{c}^T \mathbf{x} = \mathbf{u}^T \mathbf{b}`)))," (alla soluzione ottima)")),l("p",null,"Ne risulta che una soluzione è ottima se e solo se:"),l(b.a,null,yl(Ll||(Ll=Cl`\left( \mathbf{c}^T - \mathbf{u}^T \mathbf{A} \right) \mathbf{x} = 0`))),l(b.a,null,yl(Tl||(Tl=Cl`\mathbf{u}^T \left( \mathbf{A} \mathbf{x} - \mathbf{b}  \right) = 0`))))),l(t.a,{title:"Simplex duale"},l(o.a,{title:"Cos'è?"},l("p",null,"Un'estensione al Simplex primale che opera sul problema duale.")),l(o.a,{title:"Come funziona?"},l("p",null,"Funziona esattamente come il Simplex primale, ma opera sulle righe invece che sulle colonne, cercando di rendere ",l(m.a,null,"positivi"),"/",l(f.a,null,"negativi")," tutti i termini noti."))),l(t.a,{title:"Analisi di sensibilità"},l(o.a,{title:"Cos'è?"},l("p",null,"Un procedimento che misura di ",l("b",null,"quanto può variare")," il termine noto di un vincolo ",l(a.a,null,yl(Sl||(Sl=Cl`b_i`)))," o il coefficiente della funzione obiettivo ",l(a.a,null,yl(Il||(Il=Cl`c_i`)))," prima che la base degeneri. ",l(r.a,null,"TODO: verificare")))))}}}.call(this,i("hosL").h)},imVn:function(l,n,i){"use strict";(function(l){var e=i("OmdA"),t=i.n(e),a=i("Y9Ml");n.a=function(n){return l(a.a,{color:n.color},l("h3",{class:t.a.title},n.title),l("div",{class:t.a.contents},n.children))}}).call(this,i("hosL").h)},jXlC:function(l,n,i){"use strict";(function(l){i.d(n,"a",(function(){return o}));var e=i("3k98"),t=i.n(e),a=i("hosL");class o extends a.Component{render(){return l("span",{class:t.a.todo},this.props.children)}}}).call(this,i("hosL").h)},lL4N:function(l,n,i){"use strict";(function(l){i.d(n,"a",(function(){return o}));var e=i("eCjK"),t=i.n(e),a=i("hosL");class o extends a.Component{render(){let n,i=null;return void 0!==this.props.title&&(i=l("h2",null,this.props.title)),n=Array.isArray(this.props.children)?this.props.children.map(n=>l("div",{class:t.a.splitchild},n)):l("div",{class:t.a.splitchild},this.props.children),l("div",{class:t.a.split},i,l("div",{class:t.a.splitparent},n))}}}).call(this,i("hosL").h)},lR14:function(l,n,i){"use strict";(function(l){var e=i("OMhl");n.a=function(n){return l("p",null,l(e.a,{inline:!1},n.children))}}).call(this,i("hosL").h)},p7QU:function(l){l.exports={latex:"latex__3zlIu"}},wQ73:function(l,n,i){"use strict";var e=i("hosL");n.a=Object(e.createContext)(!0)}}]);
//# sourceMappingURL=route-OttimizzazioneLineare.chunk.36935.esm.js.map