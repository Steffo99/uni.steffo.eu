(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"/fDt":function(l,i,n){"use strict";n.r(i),function(l){n.d(i,"default",(function(){return W}));var a=n("hosL"),e=n("lL4N"),t=n("OMhl"),o=n("HKwK"),u=n("PEwj"),s=n("jXlC"),r=n("UEJU"),c=n("h7i1"),d=(n("3Gjt"),n("BSmf")),m=n("xY5u"),p=n("8YA6"),b=n("dIxp"),h=n("fWbf"),f=n("RPi6");let v,_,z,g,x,w,q,S,L,U,C,D,y,k,I,O,F,T,E,R,j,M,P,B,N,V,J,A,H=l=>l;const K=String.raw;class W extends a.Component{render(){return l("div",null,l("h1",null,"Ottimizzazione lineare intera"),l(e.a,{title:"Unimore"},l(o.a,{title:"Videolezioni su YouTube"},l("p",null,"Ho rimosso il rumore in sottofondo da tutti i video di Ricerca Operativa!"),l("p",null,l("b",null,l("a",{href:"https://www.youtube.com/playlist?list=PLh93e8qjTszffkHNn-19CqUOhHFbhBlBh"},"Guardate i video qui!")))),l(o.a,{title:"Prossimi appelli"},l("ol",null,l("li",null,l(d.a,{to:"2020-06-08"})),l("li",null,l(d.a,{to:"2020-06-25"})),l("li",null,l(d.a,{to:"2020-07-14"}))))),l(e.a,{title:"Le basi"},l(o.a,{title:"Funzione obiettivo"},l("p",null,"La funzione obiettivo è la funzione con valore noto sconosciuto:"),l("p",null,l(t.a,null,K(v||(v=H`z = C_1 \cdot x_1 + C_2 \cdot x_2 + C_n \cdot x_n`))))),l(o.a,{title:"Gradiente"},l("p",null,"Funzione della funzione obiettivo che indica la direzione del suo aumento più veloce."),l("p",null,l(t.a,null,K(_||(_=H`\nabla f = \frac{\delta f}{\delta x_1} e_1 + \frac{\delta f}{\delta x_2} e_2 + \frac{\delta f}{\delta x_n} e_n`)))),l("p",null,l(t.a,null,K(z||(z=H`e_i`)))," è la direzione della coordinata i-esima."),l(u.a,null,"Se ",l(t.a,null,K(g||(g=H`n = 3`))),", allora:",l("ul",null,l("li",null,l(t.a,null,K(x||(x=H`e_1 = (1, 0, 0)`)))),l("li",null,l(t.a,null,K(w||(w=H`e_2 = (0, 1, 0)`)))),l("li",null,l(t.a,null,K(q||(q=H`e_3 = (0, 0, 1)`)))))),l(u.a,null,"Se la funzione obiettivo è ",l(t.a,null,"z = 2w + 3x + 4y"),", il suo gradiente è ",l(t.a,null,K(S||(S=H`\nabla z = (2, 3, 4)`))),"."))),l(e.a,{title:"Forme di un sistema"},l(o.a,{title:"Forma standard"},l("ul",null,l("li",null,l(r.a,null,"Solo equazioni")),l("li",null,l(r.a,null,"Tutte le variabili maggiori di zero")))),l(o.a,{title:"Forma canonica"},l("ul",null,l("li",null,l(c.a,null,"Equazioni e disequazioni")),l("li",null,l(r.a,null,"Tutte le variabili maggiori di zero")))),l(o.a,{title:"Forma generale"},l("ul",null,l("li",null,l(c.a,null,"Equazioni e disequazioni")),l("li",null,l(c.a,null,"Variabili con qualsiasi valore"))))),l(e.a,{title:"Equivalenza di forma"},l(o.a,{title:"Da standard a generale"},l("p",null,"Convertiamo ogni equazione ",l(t.a,null,K(L||(L=H`=`)))," in due disequazioni ",l(t.a,null,K(U||(U=H`\leq`)))," e ",l(t.a,null,K(C||(C=H`\geq`))),","),l(u.a,null,"Why would you ever do that?!")),l(o.a,{title:"Da canonica a standard"},l("p",null,"Convertiamo le disequazioni in equazioni aggiungendo una variabile slack."),l(u.a,null,l(t.a,null,K(D||(D=H`a \leq 3`)))," diventa ",l(t.a,null,K(y||(y=H`a + s_1 = 3`))),".")),l(o.a,{title:"Da generale a canonica"},l("p",null,"Sostituiamo le variabili potenzialmente negative (unconstrained) ",l(t.a,null,K(k||(k=H`x_j`)))," con due variabili ",l(t.a,null,K(I||(I=H`x_j^+`)))," e ",l(t.a,null,K(O||(O=H`x_j^-`))),"."),l(u.a,null,l(t.a,null,K(F||(F=H`a \in \mathbb{Z}`)))," diventa ",l(t.a,null,K(T||(T=H`a^+ \in \mathbb{N}`)))," e ",l(t.a,null,K(E||(E=H`-a^- \in \mathbb{N}`))),"."))),l(e.a,{title:"La forma standard"},l(o.a,{title:"Funzione obiettivo"},l("p",null,"La funzione da minimizzare/massimizzare, tipicamente indicata con una ",l(t.a,null,K(R||(R=H`z`)))," al termine noto.")),l(o.a,{title:"Vincoli"},l("p",null,"Le funzioni del sistema che non sono quella obiettivo.")),l(o.a,{title:"Tableu"},l("p",null,"Un modo per rappresentare sistemi in forma standard, anche noto come ",l("b",null,"matrice equivalente completa")," del sistema."),l(u.a,null,"Il sistema:",l("br",null),l("br",null),l(t.a,null,K(j||(j=H`
                                \begin{cases}
                                2000A + 1000B = z\\
                                1A \leq 3\\
                                1B \leq 3\\
                                2A + 2B \leq 7
                                \end{cases}
                            `))),l("br",null),l("br",null),"Diventa in forma di tableau:",l("br",null),l("br",null),l("table",{class:"right"},l("thead",null,l("tr",null,l("th",null,l("abbr",{title:"Termine noto"},"TN")),l("th",null,l(t.a,null,"x_1")),l("th",null,l(t.a,null,"x_2")),l("th",null,l(t.a,null,"s_1")),l("th",null,l(t.a,null,"s_2")))),l("tbody",null,l("tr",null,l("td",null,l(t.a,null,"z")),l("td",null,l(t.a,null,"2000")),l("td",null,l(t.a,null,"1000")),l("td",null,l(t.a,null,"0")),l("td",null,l(t.a,null,"0"))),l("tr",null,l("td",null,l(t.a,null,"3")),l("td",null,l(t.a,null,"1")),l("td",null,l(t.a,null,"0")),l("td",null,l(t.a,null,"1")),l("td",null,l(t.a,null,"0"))),l("tr",null,l("td",null,l(t.a,null,"3")),l("td",null,l(t.a,null,"0")),l("td",null,l(t.a,null,"1")),l("td",null,l(t.a,null,"0")),l("td",null,l(t.a,null,"1"))),l("tr",null,l("td",null,l(t.a,null,"7")),l("td",null,l(t.a,null,"2")),l("td",null,l(t.a,null,"2")),l("td",null,l(t.a,null,"0")),l("td",null,l(t.a,null,"0"))))))),l(o.a,{title:"Variabili di base"},l("p",null,"Variabili che hanno tutti 0 e un 1 nella loro colonna del tableu."),l("p",null,"La loro controparte sono le ",l("i",null,"variabili fuori base"),"."),l("p",null,"Un sistema lineare è risolto quando tutte le variabili originali (",l(t.a,null,"x_n"),") sono nella base."))),l(e.a,{title:"Simplex"},l(o.a,{title:"Cos'è?"},l("p",null,"Un algoritmo per ",l(h.a,null,"minimizzare"),"/",l(f.a,null,"massimizzare")," efficientemente variabili di sistemi lineari, derivato da Gauss-Jordan."),l(u.a,null,"E' spiegato in modo semplice ",l("a",{href:"https://web.archive.org/web/20200523052252/https://www.cs.cmu.edu/~15451-f17/handouts/simplex.pdf"},"qui"),", e ci sono dei codici sorgenti di esempio ",l("a",{href:"https://www.cs.cmu.edu/~15451-f17/handouts/simplexcodes/"},"qui"),".")),l(o.a,{title:"I passi"},l("ol",null,l("li",null,"Trasforma il sistema in ",l("b",null,"forma standard"),"."),l("li",null,"Trova tante variabili ",l("b",null,"linearmente indipendenti")," quante siano le righe: esse saranno la ",l("i",null,"base iniziale"),"."),l("li",null,"Finchè ci sono variabili con coefficienti ",l(h.a,null,"positivi"),"/",l(f.a,null,"negativi")," nella funzione obiettivo:",l("ol",null,l("li",null,l("b",null,"Scegli")," la prima variabile con coefficiente ",l(h.a,null,"positivo"),"/",l(f.a,null,"negativo")," nella funzione obiettivo: essa è la ",l("i",null,"variabile entrante"),".",l(u.a,null,"Si potrebbe scegliere qualsiasi variabile, ma scegliendo sempre la prima possibile (",l("i",null,"Regola di Bland"),") ci si assicura che l'algoritmo termini.")),l("li",null,"Trova la variabile di base (detta ",l("i",null,"variabile uscente"),") tramite il rapporto ",l(t.a,null,K(M||(M=H`\frac{termine\ noto}{coeff.\ variabile\ entrante}`))),": scegli la variabile con il ",l("b",null,"rapporto minore"),", assicurandoti che esso sia ",l("b",null,"positivo"),". Se tutti i rapporti sono negativi, allora il problema è ",l("b",null,l(b.a,null)),"."),l("li",null,l("b",null,"Riscrivi")," tutte le funzioni del sistema in termini della variabile entrante."))),l("li",null,"I ",l("b",null,"termini noti dei vincoli")," sono le coordinate del risultato, mentre il ",l("b",null,"termine noto della funzione obiettivo")," è il valore ",l(h.a,null,"minimizzato"),"/",l(f.a,null,"massimizzato"),"."))),l(o.a,{title:"Sotto forma di tableau"},l("p",null,"Se il problema è rappresentato in forma di tableau, allora esso è risolvibile applicando l'algoritmo di Gauss-Jordan, in aggiunta tenendo conto delle regole per la selezione delle variabili entranti e uscenti."))),l(e.a,null,l(o.a,{title:"Soluzioni di base degenerata"},l("p",null,"Una soluzione con almeno una variabile di valore ",l(t.a,null,"0"),", dovuta a uno o più ",l("b",null,"vincoli ridondanti"),"."),l("p",null,"Senza ",l("b",null,"Regola di Bland")," e in presenza di vincoli ridondanti si rischia di trovarsi a fare pivot infiniti.")),l(o.a,{title:"Esempio"},l(u.a,null,"Ho risolto il problema 3 del file ",l("a",{href:"https://dolly.fim.unimore.it/2019/mod/resource/view.php?id=2716"},l("code",null,"Ex_LP_testo"))," con il Simplex:",l("p",null,l(m.a,{src:"https://i.imgur.com/1r405Mb.jpg"}))))),l(e.a,{title:"Metodo delle due fasi"},l(o.a,{title:"Metodo delle due fasi"},l("p",null,"Un estensione del Simplex per permettere la risoluzione di problemi la cui origine non è una soluzione ammissibile."),l("p",null,"Prevede l'introduzione di un ",l("i",null,"problema ausiliario"),", le cui variabili sono dette ",l("i",null,"artificiali")," e sono solitamente rappresentate come ",l(t.a,null,K(P||(P=H`y_n`))),"."),l(u.a,null,"E' spiegato in modo semplice ",l("a",{href:"https://web.archive.org/web/20200523052252/https://www.cs.cmu.edu/~15451-f17/handouts/simplex.pdf"},"qui"),".")),l(o.a,{title:"Procedimento"},l("ol",null,l("li",null,"Crea un nuovo tableau, ",l("b",null,"aggiungendo variabili artificiali")," in modo da avere una base ammissibile."),l("li",null,"Sostituisci la vecchia funzione obiettivo con una nuova che ",l("b",null,"minimizzi la somma")," di tutte le variabili artificiali."),l("li",null,l("u",null,"Fase 1"),": ",l("b",null,"Risolvi")," il nuovo problema con il metodo Simplex."),l("li",null,"Se il Simplex termina con ancora ",l("b",null,"variabili artificiali nella base"),", allora il problema è ",l("b",null,l(p.a,null)),"."),l("li",null,"Una volta che le variabili artificiali sono fuori base, ",l("b",null,"elimina")," le loro colonne e la nuova funzione obiettivo.",l("br",null)),l("li",null,"Riporta il tableau in forma base compiendo operazioni per ",l("b",null,"azzerare i coefficienti")," delle variabili di base nella funzione obiettivo."),l("li",null,l("u",null,"Fase 2"),": ",l("b",null,"Risolvi")," il tableau con il metodo Simplex.")))),l(e.a,{title:"Dualità"},l(o.a,{title:"Rilassamento"},l("p",null,"Una versione semplificata di un problema nella quale si ",l("b",null,"ignorano")," uno o più vincoli.")),l(o.a,{title:"Rilassamento di Lagrange"},l("p",null,"Un rilassamento che permette di misurare ",l("b",null,"di quanto i vincoli vengono violati"),"."),l("p",null,"I vincoli vengono aggiunti alla funzione obiettivo assieme a un moltiplicatore, solitamente rappresentato con ",l(t.a,null,K(B||(B=H`u_n`))),"."),l(u.a,null,l("p",null,"Il sistema:"),l(t.a,{inline:!1},K(N||(N=H`
                                \begin{cases}
                                z = 3 x_1 + 5 x_2\\
                                2 x_1 + 3 x_2 \geq 12\\
                                - x_1 + 3 x_2 \geq 3\\
                                x_1 \geq 0\\
                                x_2 \geq 0
                                \end{cases}
                            `))),l("p",null,"diventa:"),l(t.a,{inline:!1},K(V||(V=H`
                                \begin{cases}
                                z_{LR} = 3 x_1 + 5 x_2 + u_1 ( 12 - 2 x_1 - 3 x_2 ) + u_2 ( 3 + x_1 - 3 x_2 )\\
                                x_1 \geq 0\\
                                x_2 \geq 0
                                \end{cases}
                            `))))),l(o.a,{title:"Duale"},l("p",null,"Il sistema che ",l("b",null,l(h.a,null,"massimizza"),"/",l(f.a,null,"minimizza")," i moltiplicatori di rilassamento")," di un qualsiasi sistema, detto ",l("i",null,"primale"),"."),l("p",null,"Si dimostra che la sua soluzione (se esiste) è ",l("b",null,"uguale")," alla soluzione del problema primale.")),l(o.a,{title:"In termini matriciali"},l("p",null,"Possiamo ",l("b",null,"trasporre")," il tableau e sostituire le variabili ",l(t.a,null,K(J||(J=H`x_n`)))," con variabili ",l(t.a,null,K(A||(A=H`u_n`)))," per ottenere il sistema duale!"),l("p",null,"I maggiori e minori dei vincoli diventeranno maggiori e minori delle variabili e viceversa.")),l(o.a,{title:"Feasibility del duale"},l("ul",null,l("li",null,"Se un problema ha una ",l("b",null,"soluzione finita"),", allora anche il suo duale la avrà."),l("li",null,"Se un problema è ",l("b",null,l(p.a,null)),", allora il suo duale potrà essere ",l(p.a,null)," oppure ",l(b.a,null),"."),l("li",null,"Se un problema è ",l("b",null,l(b.a,null)),", allora il suo duale sarà certamente ",l(p.a,null),".")))),l(e.a,null,l(o.a,{title:"Lemma di Farkas"},l("p",null,l(s.a,null,"TODO: una complicata dimostrazione per dire varie cose. Probabilmente si riesce a saltare se non si dà l'orale..."))),l(o.a,{title:"Dualità forte"},l("p",null,"Il teorema che dimostra l'equivalenza tra primale e duale."),l("p",null,l(s.a,null,"TODO: Anche qui c'è una lunga dimostrazione..."))),l(o.a,{title:"Dualità debole"},l("p",null,"Il teorema che dimostra che il valore della funzione obiettivo del duale (di un qualsiasi tableau) è sempre ",l(h.a,null,"minore o uguale"),"/",l(f.a,null,"maggiore o uguale")," alla soluzione del corrispettivo primale."),l("p",null,l(s.a,null,"TODO: Dimostrazione cortina, ma sembra complicata.")))))}}}.call(this,n("hosL").h)},"3k98":function(l){l.exports={todo:"todo__1UVRh"}},"4fSx":function(l){l.exports={unbounded:"unbounded__25UN8",unfeasible:"unfeasible__2MuIF",min:"min__3lPpn",max:"max__1hxKl"}},"56OW":function(l){l.exports={plus:"plus__2u13i"}},"8YA6":function(l,i,n){"use strict";(function(l){var a=n("4fSx"),e=n.n(a);i.a=function(i){return l("span",{class:e.a.unfeasible},i.children?i.children:"unfeasible")}}).call(this,n("hosL").h)},BSmf:function(l,i,n){"use strict";(function(l){n.d(i,"a",(function(){return o}));var a=n("hosL"),e=n("EfTa"),t=n.n(e);class o extends a.Component{constructor(){super(),this.state={now:Date.now()},this.timer=null}componentDidMount(){this.timer=setInterval(()=>{this.setState({now:Date.now()})},1e3)}componentWillUnmount(){null!==this.timer&&clearInterval(this.timer)}render(){let i="Unknown date",n=t.a.timer,a={milliseconds:"?",seconds:"?",minutes:"?",hours:"?",days:"?"};if(this.props.to){i=new Date(this.props.to);let l=i-this.state.now;l>0?a={milliseconds:l%1e3,seconds:Math.floor(l/1e3)%60,minutes:Math.floor(l/6e4)%60,hours:Math.floor(l/36e5)%24,days:Math.floor(l/864e5)}:(a={milliseconds:0,seconds:0,minutes:0,hours:0,days:0},n+=" "+t.a.expired)}else n+=" "+t.a.unknown;return l("div",{class:n,title:i},l("div",{class:t.a.days+" "+t.a.count},a.days),l("div",{className:t.a.days+" "+t.a.text},"giorni"),l("div",{class:t.a.hours+" "+t.a.count},a.hours),l("div",{className:t.a.hours+" "+t.a.text},"ore"),l("div",{class:t.a.minutes+" "+t.a.count},a.minutes),l("div",{className:t.a.minutes+" "+t.a.text},"minuti"),l("div",{class:t.a.seconds+" "+t.a.count},a.seconds),l("div",{class:t.a.seconds+" "+t.a.text},"secondi"),l("div",{class:t.a.remaining},"rimasti"))}}}).call(this,n("hosL").h)},EfTa:function(l){l.exports={timer:"timer__K0K_h",days:"days__vN3tf",hours:"hours__3v0KX",minutes:"minutes__vkYk7",seconds:"seconds__3gJ99",count:"count__1VV4k",text:"text__khS4i",remaining:"remaining__zUECg",unknown:"unknown__af307",expired:"expired__1rtHB"}},OMhl:function(l,i,n){"use strict";(function(l){var a=n("p7QU"),e=n.n(a),t=n("QRet"),o=n("8CDw"),u=n("wQ73");i.a=function(i){let n,a=Object(t.b)(o.a),s=Object(t.b)(u.a);return n=void 0===i.inline?s:i.inline,l("img",{src:`https://latex.codecogs.com/svg.latex?${`${n?"\\inline":""} {\\color{${a}} ${i.children} }`}`,alt:i.children,title:i.children,class:e.a.latex})}}).call(this,n("hosL").h)},RPi6:function(l,i,n){"use strict";(function(l){var a=n("4fSx"),e=n.n(a);i.a=function(i){return l("span",{class:e.a.max},i.children?i.children:"max")}}).call(this,n("hosL").h)},UEJU:function(l,i,n){"use strict";(function(l){n.d(i,"a",(function(){return o}));var a=n("nhUl"),e=n.n(a),t=n("hosL");class o extends t.Component{render(){return l("span",{class:e.a.minus},this.props.children)}}}).call(this,n("hosL").h)},dIxp:function(l,i,n){"use strict";(function(l){var a=n("4fSx"),e=n.n(a);i.a=function(i){return l("span",{class:e.a.unbounded},i.children?i.children:"unbounded")}}).call(this,n("hosL").h)},fWbf:function(l,i,n){"use strict";(function(l){var a=n("4fSx"),e=n.n(a);i.a=function(i){return l("span",{class:e.a.min},i.children?i.children:"min")}}).call(this,n("hosL").h)},h7i1:function(l,i,n){"use strict";(function(l){n.d(i,"a",(function(){return o}));var a=n("56OW"),e=n.n(a),t=n("hosL");class o extends t.Component{render(){return l("span",{class:e.a.plus},this.props.children)}}}).call(this,n("hosL").h)},jXlC:function(l,i,n){"use strict";(function(l){n.d(i,"a",(function(){return o}));var a=n("3k98"),e=n.n(a),t=n("hosL");class o extends t.Component{render(){return l("span",{class:e.a.todo},this.props.children)}}}).call(this,n("hosL").h)},nhUl:function(l){l.exports={minus:"minus__2EaF0"}},p7QU:function(l){l.exports={latex:"latex__3zlIu"}},wQ73:function(l,i,n){"use strict";var a=n("hosL");i.a=Object(a.createContext)(!0)},xY5u:function(l,i,n){"use strict";(function(l){i.a=function(i){return l("a",{href:i.src,title:i.alt,target:"_blank"},l("img",{src:i.src,alt:i.alt}))}}).call(this,n("hosL").h)}}]);
//# sourceMappingURL=route-ottimizzazioneLineare.chunk.f48cc.esm.js.map