(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"2w3n":function(l){l.exports={red:"red__2y1B_",orange:"orange__dD2kx",yellow:"yellow__OEpwl",lime:"lime__CVe41",cyan:"cyan__26ZAg",blue:"blue__LO7Xm",magenta:"magenta__1Akee",example:"example__2PzAa"}},"4fSx":function(l){l.exports={red:"red__UmOgB",orange:"orange__1FTS8",yellow:"yellow__3dJAV",lime:"lime__3kPc-",cyan:"cyan__11RpC",blue:"blue__320AC",magenta:"magenta__VPUPe",unbounded:"unbounded__25UN8",unfeasible:"unfeasible__2MuIF",finite:"finite__2EP_f",min:"min__3lPpn",max:"max__1hxKl"}},RPi6:function(l,n,i){"use strict";(function(l){var e=i("4fSx"),a=i.n(e);n.a=function(n){return l("abbr",{class:a.a.max,title:"In problemi in cui il primale è di massimizzazione."},n.children?n.children:"max")}}).call(this,i("hosL").h)},RtuP:function(l,n,i){"use strict";(function(l){var e=i("4fSx"),a=i.n(e);n.a=function(n){return l("abbr",{class:a.a.finite,title:"I punti del poliedro sono finiti."},n.children?n.children:"finito")}}).call(this,i("hosL").h)},Th1s:function(l,n,i){"use strict";(function(l){var e=i("4fSx"),a=i.n(e);n.a=function(n){return l("abbr",{class:a.a.unfeasible,title:"Il poliedro non contiene punti."},n.children?n.children:"vuoto")}}).call(this,i("hosL").h)},dIxp:function(l,n,i){"use strict";(function(l){var e=i("4fSx"),a=i.n(e);n.a=function(n){return l("abbr",{class:a.a.unbounded,title:"I punti del poliedro sono infiniti."},n.children?n.children:"illimitato")}}).call(this,i("hosL").h)},fWbf:function(l,n,i){"use strict";(function(l){var e=i("4fSx"),a=i.n(e);n.a=function(n){return l("abbr",{class:a.a.min,title:"In problemi in cui il primale è di minimizzazione."},n.children?n.children:"min")}}).call(this,i("hosL").h)},hasd:function(l,n,i){"use strict";i.r(n),function(l){var e=i("mbOI"),a=i("ke5e"),t=i("Th1s"),o=i("dIxp"),u=i("RtuP"),r=i("fWbf"),s=i("RPi6");let d,m,c,b,h,p,f,v,g,z,_,x,q,S,T,I,P,w,C,A,L,y,U,F,k,O,D,V,R,j,E,B,G,J,M,N,X,Z,W,K,Q,H,Y,$,ll,nl,il,el,al,tl,ol,ul,rl,sl,dl,ml,cl,bl,hl,pl,fl,vl,gl,zl,_l,xl,ql,Sl,Tl,Il,Pl,wl,Cl,Al,Ll,yl,Ul,Fl,kl,Ol,Dl,Vl,Rl,jl,El,Bl,Gl,Jl,Ml,Nl,Xl,Zl,Wl,Kl,Ql,Hl,Yl,$l,ln,nn,en,an,tn,on,un,rn,sn,dn,mn,cn,bn,hn,pn,fn,vn,gn,zn,_n=l=>l;const xn=String.raw;n.default=function(){return l("div",null,l("h1",null,"Ottimizzazione lineare intera"),l(e.o,{title:"Informazioni"},l(e.n,{title:"Contatti"},l("ul",null,l("li",null,l("a",{href:"mailto:stefano.novellani@unimore.it"},"Prof. Stefano Novellani")))),l(e.n,{title:"Archivio"},l("p",null,"Se sei uno ",l("b",null,"studente dell'Unimore"),", puoi accedere all'",l("b",null,l("a",{href:"https://drive.google.com/drive/folders/13q-E6LvXca9uo3sATMZxrhJClqMB0wJu"},"archivio del corso su Google Drive")),"."))),l(e.o,{title:"Esame"},l(e.n,{title:"Scritto"},l("p",null,"Uno scritto con tre domande:"),l("ul",null,l("li",null,"Progettazione concettuale e logica"),l("li",null,"Formulazione interrogazione"),l("li",null,"Una domanda tra:",l("ul",null,l("li",null,"Studio dato derivato"),l("li",null,"Progettazione fisica"),l("li",null,"Tecnologia database"))))),l(e.n,{title:"Appelli"},l("ol",null,l("li",null,l(e.q,{to:"2020-06-08 09:00"})),l("li",null,l(e.q,{to:"2020-06-25 09:00"})),l("li",null,l(e.q,{to:"2020-07-16 09:00"}))))),l(e.j.Provider,{value:!1},l(e.o,{title:"Glossario"},l(e.p,null,l("thead",null,l("tr",null,l("th",null,l("abbr",{title:"Vettore / matrice"},"v")),l("th",null,l("abbr",{title:"Elemento singolo"},"s")),l("th",null,"Significato"))),l("tbody",null,l("tr",null,l("td",null,l(e.h,null,xn(d||(d=_n`\mathbf{x}`)))),l("td",null,l(e.h,null,xn(m||(m=_n`x_i`)))),l("td",null,"Incognite")),l("tr",null,l("td",null,l(e.h,null,xn(c||(c=_n`\mathbf{s}`)))),l("td",null,l(e.h,null,xn(b||(b=_n`s_i`)))),l("td",null,"Variabili slack")),l("tr",null,l("td",null,l(e.h,null,xn(h||(h=_n`\mathbf{c}`)))),l("td",null,l(e.h,null,xn(p||(p=_n`c_i`)))),l("td",null,"Coefficienti della funzione obiettivo")),l("tr",null,l("td",null,l(e.h,null,xn(f||(f=_n`\mathbf{A}`)))),l("td",null,l(e.h,null,xn(v||(v=_n`a_{ij}`)))),l("td",null,"Coefficienti dei vincoli")),l("tr",null,l("td",null,l(e.h,null,xn(g||(g=_n`\mathbf{b}`)))),l("td",null,l(e.h,null,xn(z||(z=_n`b_i`)))),l("td",null,"Termini noti dei vincoli")),l("tr",null,l("td",null,l(e.h,null,xn(_||(_=_n`\mathbf{y}`)))),l("td",null,l(e.h,null,xn(x||(x=_n`y_i`)))),l("td",null,"Incognite artificiali")),l("tr",null,l("td",null,l(e.h,null,xn(q||(q=_n`\mathbf{u}`)))),l("td",null,l(e.h,null,xn(S||(S=_n`u_i`)))),l("td",null,"Coefficienti di rilassamento")),l("tr",null,l("td",null),l("td",null,l(e.h,null,xn(T||(T=_n`c_0`)))),l("td",null,"Valore ottimo di un problema")),l("tr",null,l("td",null,l(e.h,null,xn(I||(I=_n`\mathbf{x}_B`)))),l("td",null),l("td",null,"Incognite in base")),l("tr",null,l("td",null,l(e.h,null,xn(P||(P=_n`\mathbf{c}_B`)))),l("td",null),l("td",null,"Coefficienti della funzione obiettivo delle variabili in base")),l("tr",null,l("td",null,l(e.h,null,xn(w||(w=_n`\mathbf{B}`)))),l("td",null),l("td",null,"Coefficienti dei vincoli delle variabili in base")),l("tr",null,l("td",null,l(e.h,null,xn(C||(C=_n`\mathbf{x}_F`)))),l("td",null),l("td",null,"Incognite fuori base")),l("tr",null,l("td",null,l(e.h,null,xn(A||(A=_n`\mathbf{c}_F`)))),l("td",null),l("td",null,"Coefficienti della funzione obiettivo delle variabili fuori base")),l("tr",null,l("td",null,l(e.h,null,xn(L||(L=_n`\mathbf{F}`)))),l("td",null),l("td",null,"Coefficienti dei vincoli delle variabili fuori base")))),l(e.p,null,l("thead",null,l("tr",null,l("th",null,"Simboli"),l("th",null,"Significato"))),l("tbody",null,l("tr",null,l("td",null,l(e.h,null,xn(y||(y=_n`\mathbf{c}^T \mathbf{x}`)))),l("td",null,"Soluzione del problema")),l("tr",null,l("td",null,l(e.h,null,xn(U||(U=_n`\mathbf{A} \mathbf{x} = \mathbf{b}`)))),l("td",null,"Vincoli in forma standard")),l("tr",null,l("td",null,l(e.h,null,xn(F||(F=_n`z(\dots)`)))),l("td",null,"Funzione obiettivo")),l("tr",null,l("td",null,l(e.h,null,xn(k||(k=_n`\mathbf{u}^T \mathbf{b}`)))),l("td",null,"Soluzione del problema duale")),l("tr",null,l("td",null,l(e.h,null,xn(O||(O=_n`\mathbf{u}^T \mathbf{A} = \mathbf{c}^T`)))),l("td",null,"Vincoli del problema duale in forma standard")),l("tr",null,l("td",null,l(e.h,null,xn(D||(D=_n`\lfloor x \rfloor`)))),l("td",null,"Arrotondamento per difetto di x")),l("tr",null,l("td",null,l(e.h,null,xn(V||(V=_n`\lceil x \rceil`)))),l("td",null,"Arrotondamento per eccesso di x")),l("tr",null,l("td",null,l(e.h,null,xn(R||(R=_n`x - \lfloor x \rfloor`)))),l("td",null,"Parte frazionaria di x (se non è negativo)")))))),l(e.o,{title:"Le basi"},l(e.n,{title:"Funzione obiettivo"},l("p",null,"La funzione obiettivo è la funzione con valore noto sconosciuto:"),l("p",null,l(e.h,null,xn(j||(j=_n`z = C_1 \cdot x_1 + C_2 \cdot x_2 + C_n \cdot x_n`)))))),l(e.o,{title:"Problemi di ottimizzazione lineare"},l(e.n,{title:"Cosa sono?"},l("p",null,"Problemi che cercano di ",l(r.a,null,"minimizzare"),"/",l(s.a,null,"massimizzare")," il valore di una ",l("i",null,"funzione obiettivo")," le cui incognite sono sottoposte a un ",l("b",null,"sistema di ",l("i",null,"vincoli")),"."),l("p",null,"Spesso sono detti anche ",l("i",null,"problemi di ",l("abbr",{title:"Linear Programming"},"LP")),".")),l(e.n,{title:"Funzione obiettivo"},l("p",null,"La funzione da ",l(r.a,null,"minimizzare"),"/",l(s.a,null,"massimizzare"),"."),l("p",null,"Il vettore dei suoi coefficienti è detto ",l(e.h,null,xn(E||(E=_n`\mathbf{c}`))),", mentre quello delle sue incognite ",l(e.h,null,xn(B||(B=_n`\mathbf{x}`))),".")),l(e.n,{title:"Vincoli"},l("p",null,"Equazioni e disequazioni a cui devono sottostare le incognite perchè esse formino una soluzione valida."),l("p",null,"I loro coefficienti sono contenuti nella matrice ",l(e.h,null,xn(G||(G=_n`\mathbf{A}`))),", mentre i loro termini noti nel vettore ",l(e.h,null,xn(J||(J=_n`\mathbf{b}`))),".")),l(e.n,{title:"Valore ottimo"},l("p",null,"La ",l("b",null,"soluzione")," di un problema, ricavabile dal prodotto ",l(e.h,null,xn(M||(M=_n`\mathbf{c}^T \mathbf{x}`))),"."),l("p",null,"Spesso, la funzione obiettivo è indicata con il nome ",l(e.h,null,xn(N||(N=_n`z(\dots)`))),".")),l(e.n,{title:"Poliedro"},l("p",null,"L'",l("b",null,"insieme")," che racchiunde tutte le ",l("b",null,"soluzioni ammissibili")," di un problema."),l("p",null,"In particolare, il valore ottimo è un ",l("b",null,"vertice")," del poliedro, detto ",l("i",null,"vertice ottimo"),"."),l("p",null,"Può essere ",l("i",null,l(u.a,null)),", ",l("i",null,l(t.a,null))," oppure ",l("i",null,l(o.a,null)),"."),l(a.a,null,"Si chiama così perchè se si disegna su un piano cartesiano, esso forma una figura geometrica a più lati, ovvero un ",l("a",{href:"https://it.wikipedia.org/wiki/Poliedro"},"poliedro"),".")),l(e.n,{title:"Gradiente"},l("p",null,l("b",null,"Funzione")," della funzione obiettivo che restituisce la direzione del suo aumento più veloce."),l("p",null,l(e.h,null,xn(X||(X=_n`\nabla f = \frac{\delta f}{\delta x_1} \mathbf{I}_1 + \frac{\delta f}{\delta x_2} \mathbf{I}_2 + \frac{\delta f}{\delta x_n} \mathbf{I}_n`)))),l(a.a,null,"La matrice ",l(e.h,null,xn(Z||(Z=_n`\mathbf{I}`)))," è la matrice identità."),l(a.a,null,"Se la funzione obiettivo è ",l(e.h,null,"z = 2w + 3x + 4y"),", il suo gradiente è ",l(e.h,null,xn(W||(W=_n`\nabla z = (2, 3, 4)`))),"."))),l(e.o,{title:"Forme di un problema di ottimizzazione"},l(e.n,{title:"Forma generale"},l("p",null,"Un problema con:"),l("ul",null,l("li",null,l("b",null,"Equazioni e disequazioni")),l("li",null,l("b",null,"Variabili non vincolate"))),l(e.m,null,xn(K||(K=_n`min \left\{ \mathbf{c}^T \mathbf{x} : \mathbf{A} \mathbf{x} = b,\quad \mathbf{A'} \mathbf{x} \geq \mathbf{b'} \quad x_j \geq 0,\quad j = 1 \dots n \right\}`)))),l(e.n,{title:"Forma canonica"},l("p",null,"Un problema con:"),l("ul",null,l("li",null,l("b",null,"Solo disequazioni")),l("li",null,l("b",null,"Vincoli di non-negatività sulle incognite"))),l(e.m,null,xn(Q||(Q=_n`min \left\{ \mathbf{c}^T \mathbf{x} : \mathbf{A} \mathbf{x} \geq b,\quad x_j \geq 0,\quad j = 1 \dots n \right\}`)))),l(e.n,{title:"Forma standard"},l("p",null,"Un problema con:"),l("ul",null,l("li",null,l("b",null,"Solo equazioni")),l("li",null,l("b",null,"Vincoli di non-negatività sulle incognite"))),l(e.m,null,xn(H||(H=_n`min \left\{ \mathbf{c}^T \mathbf{x} : \mathbf{A} \mathbf{x} = b,\quad x_j \geq 0,\quad j = 1 \dots n \right\}`))))),l(e.o,{title:"Conversioni tra le forme"},l(e.n,{title:"Standard e generale"},l("p",null,"Applica questa conversione a ogni equazione nel sistema:"),l("p",null,l(e.h,{inline:!1},xn(Y||(Y=_n`a = b \Leftrightarrow
                            \begin{cases}
                                a \leq b\\
                                a \geq b
                            \end{cases}
                        `)))),l(a.a,null,"Serve solo nella teoria per dimostrare che le forme sono equivalenti.")),l(e.n,{title:"Canonica e standard"},l("p",null,"Aggiungi una ",l("i",null,"variabile slack")," ",l(e.h,null,xn($||($=_n`s`)))," ",l("b",null,"non-vincolata")," a ogni disequazione nel sistema:"),l("p",null,l(e.h,{inline:!1},xn(ll||(ll=_n`
                            a \leq b \Leftrightarrow a + s = b
                        `)))),l("p",null,l(e.h,{inline:!1},xn(nl||(nl=_n`
                            a \geq b \Leftrightarrow a - s = b
                        `))))),l(e.n,{title:"Generale e canonica"},l("p",null,"Sdoppia ogni variabile non-vincolata in due variabili con vincolo di non-negatività:"),l("p",null,l(e.h,{inline:!1},xn(il||(il=_n`\begin{cases}
                            a = a^+ - a^-\\
                            a^+ \geq 0\\
                            a^- \geq 0
                        \end{cases}`)))))),l(e.o,{title:"La forma standard"},l(e.n,{title:"Tableau"},l("p",null,"Un modo per rappresentare sistemi in forma standard, anche noto come ",l("b",null,"matrice equivalente completa")," del sistema."),l(a.a,null,"Il sistema:",l("br",null),l("br",null),l(e.h,{inline:!1},xn(el||(el=_n`
                            \begin{cases}
                            2000x_1 + 1000x_2 = z\\
                            1x_1 \leq 3\\
                            1x_2 \leq 3\\
                            2x_1 + 2x_2 \leq 7
                            \end{cases}
                        `))),l("br",null),l("br",null),"Diventa il tableau:",l("br",null),l("br",null),l("table",{class:"right"},l("thead",null,l("tr",null,l("th",null,l(e.h,null,"x_1")),l("th",null,l(e.h,null,"x_2")),l("th",null,l(e.h,null,"s_1")),l("th",null,l(e.h,null,"s_2")),l("th",null,l("abbr",{title:"Termine noto"},"TN")))),l("tbody",null,l("tr",null,l("td",null,l(e.h,null,"2000")),l("td",null,l(e.h,null,"1000")),l("td",null,l(e.h,null,"0")),l("td",null,l(e.h,null,"0")),l("td",null,l(e.h,null,"z"))),l("tr",null,l("td",null,l(e.h,null,"1")),l("td",null,l(e.h,null,"0")),l("td",null,l(e.h,null,"1")),l("td",null,l(e.h,null,"0")),l("td",null,l(e.h,null,"3"))),l("tr",null,l("td",null,l(e.h,null,"0")),l("td",null,l(e.h,null,"1")),l("td",null,l(e.h,null,"0")),l("td",null,l(e.h,null,"1")),l("td",null,l(e.h,null,"3"))),l("tr",null,l("td",null,l(e.h,null,"2")),l("td",null,l(e.h,null,"2")),l("td",null,l(e.h,null,"0")),l("td",null,l(e.h,null,"0")),l("td",null,l(e.h,null,"7"))))))),l(e.n,{title:"Variabili nella base"},l("p",null,"Variabili che hanno ",l("b",null,"tutti 0 e un solo 1")," nella loro colonna del tableau."),l("p",null,"La loro controparte sono le ",l("i",null,"variabili fuori base"),", che hanno qualsiasi altro valore."))),l(e.o,{title:"Simplex primale"},l(e.n,{title:"Cos'è?"},l("p",null,"Un algoritmo per ",l(r.a,null,"minimizzare"),"/",l(s.a,null,"massimizzare")," trovare efficientemente ",l("b",null,"valore ottimo")," di problemi di ottimizzazione lineare, derivato da Gauss-Jordan."),l("p",null,"Da esso si può anche ricavare un ",l("b",null,"vertice ottimo ammissibile"),".",l("br",null),"C'è la possibilità che ne esistano anche altri: quello ottenuto dipende da come è stata effettuata la scelta delle variabili entranti."),l(a.a,null,"E' spiegato in modo semplice ",l("a",{href:"https://web.archive.org/web/20200523052252/https://www.cs.cmu.edu/~15451-f17/handouts/simplex.pdf"},"qui"),", e ci sono dei codici sorgenti di esempio ",l("a",{href:"https://www.cs.cmu.edu/~15451-f17/handouts/simplexcodes/"},"qui"),"."),l(a.a,{title:"Esempio"},l("p",null,l("a",{href:"https://i.imgur.com/1r405Mb.jpg"},"Questa")," è la soluzione passo per passo del problema 3 del file ",l("a",{href:"https://dolly.fim.unimore.it/2019/mod/resource/view.php?id=2716"},l("code",null,"Ex_LP_testo")),"."))),l(e.n,{title:"I passi"},l("ol",null,l("li",null,"Trasforma il sistema in ",l("b",null,"forma standard"),"."),l("li",null,"Trova tante variabili ",l("b",null,"linearmente indipendenti")," quante siano le righe: esse saranno la ",l("i",null,"base iniziale"),"."),l("li",null,"Finchè ci sono variabili con coefficienti ",l(r.a,null,"positivi"),"/",l(s.a,null,"negativi")," nella funzione obiettivo:",l("ol",null,l("li",null,l("b",null,"Scegli")," la prima variabile fuori base con coefficiente ",l(r.a,null,"positivo"),"/",l(s.a,null,"negativo")," nella funzione obiettivo: essa è la ",l("i",null,"variabile entrante"),".",l("br",null),l("aside",null,l("i",null,"Regola di Bland"),": Si potrebbe scegliere qualsiasi variabile come entrante, ma scegliendo sempre la prima ammissibile ci si assicura che l'algoritmo termini.")),l("li",null,l("b",null,"Scegli")," la variabile in base con il minor rapporto positivo ",l(e.h,null,xn(al||(al=_n`\frac{termine\ noto}{coeff.\ variabile\ entrante}`))),".",l("aside",null,"Se non sei riuscito a trovare nessuna variabile con un rapporto positivo, significa che il poliedro è ",l(o.a,null),".")),l("li",null,l("u",null,"Pivot"),": ",l("b",null,"riscrivi")," tutte le funzioni del sistema in termini della variabile entrante."))),l("li",null,"Il poliedro è ",l(u.a,null),": i ",l("b",null,"termini noti dei vincoli")," sono le coordinate del suo vertice ottimo, mentre il ",l("b",null,"termine noto della funzione obiettivo")," è il valore ottimo.")),l(a.a,null,"È praticamente l'algoritmo di Gauss-Jordan applicato al tableau, con delle regole aggiuntive per la decisione delle variabili di pivot.")),l(e.n,{title:"Soluzioni di base degenerata"},l("p",null,"Una soluzione con almeno una variabile di valore ",l(e.h,null,"0"),", dovuta a uno o più ",l("b",null,"vincoli ridondanti"),"."),l("p",null,"Senza ",l("b",null,"Regola di Bland")," e in presenza di vincoli ridondanti si rischia di trovarsi a fare pivot infiniti."))),l(e.o,{title:"Metodo delle due fasi"},l(e.n,{title:"Metodo delle due fasi"},l("p",null,"Un estensione del Simplex per permettere la risoluzione di problemi la cui origine non è una soluzione ammissibile."),l("p",null,"Prevede l'introduzione di un ",l("i",null,"problema ausiliario"),", le cui incognite sono dette ",l("i",null,"artificiali"),"."),l("p",null,"Il vettore delle incognite artificiali è solitamente chiamato ",l(e.h,null,xn(tl||(tl=_n`\mathbf{y}`))),"."),l(a.a,null,"E' spiegato in modo semplice ",l("a",{href:"https://web.archive.org/web/20200523052252/https://www.cs.cmu.edu/~15451-f17/handouts/simplex.pdf"},"qui"),".")),l(e.n,{title:"Procedimento"},l("ol",null,l("li",null,"Crea un nuovo tableau, ",l("b",null,"aggiungendo variabili artificiali")," in modo da avere una base ammissibile."),l("li",null,"Sostituisci la vecchia funzione obiettivo con una nuova che ",l("b",null,"minimizzi la somma")," di tutte le variabili artificiali."),l("li",null,l("u",null,"Fase 1"),": ",l("b",null,"Risolvi")," il nuovo problema con il simplex primale."),l("li",null,"Se il Simplex termina quando ci sono ancora ",l("b",null,"variabili artificiali nella base"),", allora il poliedro è ",l("b",null,l(t.a,null)),"."),l("li",null,"Una volta che le variabili artificiali sono fuori base, ",l("b",null,"elimina")," le loro colonne e la nuova funzione obiettivo.",l("br",null)),l("li",null,"Riporta il tableau in forma base compiendo operazioni per ",l("b",null,"azzerare i coefficienti")," delle variabili di base nella funzione obiettivo."),l("li",null,l("u",null,"Fase 2"),": ",l("b",null,"Risolvi")," il tableau con il simplex primale.")))),l(e.o,{title:"Rilassamento"},l(e.n,{title:"Cos'è?"},l("p",null,"Una versione semplificata di un problema nella quale si ",l("b",null,"ignora la violazione")," di uno o più vincoli.")),l(e.n,{title:"Rilassamento di Lagrange"},l("p",null,"Un rilassamento che permette di misurare ",l("b",null,"di quanto i vincoli vengono violati"),"."),l("p",null,"I vincoli, moltiplicati per ",l("b",null,"coefficienti di rilassamento"),", vengono inseriti nella funzione obiettivo."),l("p",null,"Il vettore dei coefficienti di rilassamento solitamente è indicato con ",l(e.h,null,xn(ol||(ol=_n`\mathbf{u}`))),"."),l(a.a,null,l("p",null,"Il sistema:"),l(e.h,{inline:!1},xn(ul||(ul=_n`
                            \begin{cases}
                            z = 3 x_1 + 5 x_2\\
                            2 x_1 + 3 x_2 \geq 12\\
                            - x_1 + 3 x_2 \geq 3\\
                            x_1 \geq 0\\
                            x_2 \geq 0
                            \end{cases}
                        `))),l("p",null,"diventa:"),l(e.h,{inline:!1},xn(rl||(rl=_n`
                            \begin{cases}
                            z = 3 x_1 + 5 x_2 + u_1 ( 12 - 2 x_1 - 3 x_2 ) + u_2 ( 3 + x_1 - 3 x_2 )\\
                            x_1 \geq 0\\
                            x_2 \geq 0
                            \end{cases}
                        `)))))),l(e.o,{title:"Dualità"},l(e.n,{title:"Duale"},l("p",null,"Il sistema che ",l("b",null,l(r.a,null,"massimizza"),"/",l(s.a,null,"minimizza")," i moltiplicatori di rilassamento")," di un problema detto ",l("i",null,"primale"),".")),l(e.n,{title:"In termini matriciali"},l("p",null,"Possiamo ",l("b",null,"trasporre")," il tableau e sostituire le variabili ",l(e.h,null,xn(sl||(sl=_n`x_n`)))," con variabili ",l(e.h,null,xn(dl||(dl=_n`u_n`)))," per ottenere il sistema duale!"),l("p",null,"I maggiori e minori dei vincoli diventeranno maggiori e minori delle variabili e viceversa.")),l(e.n,{title:"Feasibility del duale"},l("ul",null,l("li",null,"Se un problema ha una ",l("b",null,"soluzione finita"),", allora anche il suo duale la avrà."),l("li",null,"Se un problema è ",l("b",null,l(t.a,null)),", allora il suo duale potrà essere ",l(t.a,null)," oppure ",l(o.a,null),"."),l("li",null,"Se un problema è ",l("b",null,l(o.a,null)),", allora il suo duale sarà certamente ",l(t.a,null),".")))),l(e.o,{title:"Un po' di teoria"},l(e.n,{title:"Lemma di Farkas"},l("p",null,"Una disuguaglianza lineare ",l(e.h,null,xn(ml||(ml=_n`c_0 \leq \mathbf{c}^T \mathbf{x}`)))," è verificata da tutti i punti di un poliedro non-",l(t.a,null)," se e solo se esiste un vettore ",l(e.h,null,xn(cl||(cl=_n`u \in \mathfrak{R}^m`)))," tale che:"),l(e.m,null,xn(bl||(bl=_n`\mathbf{c}^T \geq \mathbf{u}^T \mathbf{A}`))),l(e.m,null,xn(hl||(hl=_n`c_0 \leq \mathbf{u}^T \mathbf{b}`))),l("p",null,l(e.r,null,"TODO: Cioè?"))),l(e.n,{title:"Dualità forte"},l("p",null,"Il teorema che dimostra l'equivalenza tra primale e duale."),l("p",null,"Se uno dei due problemi è finito, la soluzione di uno coincide con la soluzione dell'altro."),l("p",null,l(e.h,null,xn(pl||(pl=_n`\mathbf{c}^T \mathbf{x} = \mathbf{u}^T \mathbf{b}`)))),l("p",null,l(e.r,null,"TODO: Anche qui c'è una lunga dimostrazione..."))),l(e.n,{title:"Dualità debole"},l("p",null,"Il teorema che dimostra che il valore della funzione obiettivo del duale (di un qualsiasi tableau) è sempre ",l(r.a,null,"minore o uguale"),"/",l(s.a,null,"maggiore o uguale")," alla soluzione del corrispettivo primale."),l("p",null,l(e.r,null,"TODO: Dimostrazione cortina, ma sembra complicata."))),l(e.n,{title:"Condizioni di ottimalità"},l("p",null,"Il teorema che ci permette di passare dalla soluzione del duale alla soluzione del primale. ",l(e.r,null,"TODO: credo?")),l("p",null,"Si deriva combinando le seguenti condizioni:"),l("ul",null,l("li",null,"Ammissibilità del primale: ",l(e.h,null,xn(fl||(fl=_n`\mathbf{A} \mathbf{X} \geq \mathbf{b}, \quad \mathbf{x} \geq 0`)))),l("li",null,"Ammissibilità del duale: ",l(e.h,null,xn(vl||(vl=_n`\mathbf{u}^T \mathbf{A} \leq \mathbf{c}^T, \quad \mathbf{u} \geq 0`)))),l("li",null,"Teorema della dualità forte: ",l(e.h,null,xn(gl||(gl=_n`\mathbf{c}^T \mathbf{x} = \mathbf{u}^T \mathbf{b}`)))," (alla soluzione ottima)")),l("p",null,"Ne risulta che una soluzione è ottima se e solo se:"),l(e.m,null,xn(zl||(zl=_n`\left( \mathbf{c}^T - \mathbf{u}^T \mathbf{A} \right) \mathbf{x} = 0`))),l(e.m,null,xn(_l||(_l=_n`\mathbf{u}^T \left( \mathbf{A} \mathbf{x} - \mathbf{b}  \right) = 0`))))),l(e.o,{title:"Simplex duale"},l(e.n,{title:"Cos'è?"},l("p",null,"Un'estensione al Simplex primale che opera sul problema duale.")),l(e.n,{title:"Come funziona?"},l("p",null,"Funziona esattamente come il Simplex primale, ma opera sulle righe invece che sulle colonne, cercando di rendere ",l(r.a,null,"positivi"),"/",l(s.a,null,"negativi")," tutti i termini noti."),l(e.r,null,"TODO: Significa che si possono moltiplicare tutti i valori di una riga per lo stesso numero e il risultato non cambia...?"))),l(e.o,{title:"Analisi di sensibilità"},l(e.n,{title:"Cos'è?"},l("p",null,"Un procedimento che misura di ",l("b",null,"quanto può variare")," il termine noto di un vincolo ",l(e.h,null,xn(xl||(xl=_n`b_i`)))," o il coefficiente della funzione obiettivo ",l(e.h,null,xn(ql||(ql=_n`c_i`)))," prima che la base degeneri."))),l(e.o,{title:"Ottimizzazione lineare intera"},l(e.n,{title:"Cos'è?"},l("p",null,"Particolari problemi di ottimizzazione lineare in cui le ",l("b",null,"variabili sono vincolate ad essere numeri interi"),"."),l(e.m,null,xn(Sl||(Sl=_n`
                        \mathbf{x} \in \mathbb{Z}^n
                    `))),l("p",null,"Spesso detti anche ",l("i",null,"problemi di ",l("abbr",{title:"Integer Linear Programming"},"ILP")),".")),l(e.n,{title:"Rilassamento lineare"},l("p",null,"Un rilassamento che rimuove il vincolo di ",l(e.r,null,"TODO: integrità")," a un problema, trovando la sua soluzione continua."))),l(e.o,{title:"Dal rilassamento alla soluzione"},l(e.n,{title:"Enumerazione totale"},l("p",null,"Un ",l("b",null,"modo")," per passare dalla soluzione del rilassamento alla soluzione intera di un problema di ILP."),l("p",null,"Consiste nel calcolare la soluzione di ogni singolo punto incluso nel poliedro, e selezionare la ",l(r.a,null,"minore"),"/",l(s.a,null,"maggiore"),"."),l("p",null,"Trova ",l("b",null,"sicuramente")," la soluzione giusta, ma il costo computazionale è esponenziale ",l(e.g,null,"O(n^k)"),"!")),l(e.n,{title:"Arrotondamento"},l("p",null,"Un altro ",l("b",null,"modo")," per passare dalla soluzione del rilassamento alla soluzione intera di un problema di ILP."),l("p",null,"Consiste nell'",l("b",null,"arrotondare tutte le variabili al loro valore intero più vicino"),", e calcolarne il valore ottimo."),l("p",null,"Funziona bene per valori grandi, ma più essi si avvicinano allo 0 più l'",l("b",null,"errore diventa grande"),".")),l(e.n,{title:"Piani secanti"},l("p",null,"Un altro ",l("b",null,"modo")," ancora per passare dalla soluzione del rilassamento alla soluzione intera di un problema di ILP."),l("p",null,"Consiste nel tagliare il poliedro con nuovi vincoli (",l("i",null,"piani secanti"),") che ",l("b",null,"riducono le possibili soluzioni continue")," ma non quelle intere."),l("p",null,"Per selezionare i vincoli, si usano i ",l("b",null,"tagli di Gomory"),":"),l(e.m,null,xn(Tl||(Tl=_n`
                        \sum_{j \in F} \left( \left( a_{tj} - \lfloor a_{tj} \rfloor \right) \cdot x_j \right) \geq (b_t - \lfloor b_t \rfloor)
                    `))),l("p",null,"Per ogni valore noto frazionario si viene quindi a creare ",l("b",null,"una nuova variabile in base")," e un nuovo vincolo formato dall'opposto di tutti i valori frazionari dei coefficienti fuori base."),l(a.a,null,l("p",null,"Il tableau:",l("table",null,l("thead",null,l("tr",null,l("th",null,l(e.a,null,xn(Il||(Il=_n`x_1`)))),l("th",null,l(e.a,null,xn(Pl||(Pl=_n`x_2`)))),l("th",null,l(e.a,null,xn(wl||(wl=_n`s_1`)))),l("th",null,l(e.a,null,xn(Cl||(Cl=_n`s_2`)))),l("th",null,l("abbr",{title:"Termine noto"},"TN")))),l("tbody",null,l("tr",null,l("td",null,l(e.a,null,xn(Al||(Al=_n`1`)))),l("td",null,l(e.a,null,xn(Ll||(Ll=_n`1`)))),l("td",null,l(e.a,null,xn(yl||(yl=_n`0`)))),l("td",null,l(e.a,null,xn(Ul||(Ul=_n`0`)))),l("td",null,l(e.a,null,xn(Fl||(Fl=_n`0`))))),l("tr",null,l("td",null,l(e.a,null,xn(kl||(kl=_n`1`)))),l("td",null,l(e.a,null,xn(Ol||(Ol=_n`0`)))),l("td",null,l(e.a,null,xn(Dl||(Dl=_n`1`)))),l("td",null,l(e.a,null,xn(Vl||(Vl=_n`0`)))),l("td",null,l(e.a,null,xn(Rl||(Rl=_n`3`))))),l("tr",null,l("td",null,l(e.a,null,xn(jl||(jl=_n`0`)))),l("td",null,l(e.a,null,xn(El||(El=_n`\frac{1}{2}`)))),l("td",null,l(e.a,null,xn(Bl||(Bl=_n`0`)))),l("td",null,l(e.a,null,xn(Gl||(Gl=_n`1`)))),l("td",null,l(e.a,null,xn(Jl||(Jl=_n`\frac{6}{5}`)))))))),l("p",null,"Diventa:",l("table",null,l("thead",null,l("tr",null,l("th",null,l(e.a,null,xn(Ml||(Ml=_n`x_1`)))),l("th",null,l(e.a,null,xn(Nl||(Nl=_n`x_2`)))),l("th",null,l(e.a,null,xn(Xl||(Xl=_n`s_1`)))),l("th",null,l(e.a,null,xn(Zl||(Zl=_n`s_2`)))),l("th",{style:"background-color: rgba(255, 255, 0, 0.1);"},l(e.a,null,xn(Wl||(Wl=_n`s_3`)))),l("th",null,l("abbr",{title:"Termine noto"},"TN")))),l("tbody",null,l("tr",null,l("td",null,l(e.a,null,xn(Kl||(Kl=_n`1`)))),l("td",null,l(e.a,null,xn(Ql||(Ql=_n`1`)))),l("td",null,l(e.a,null,xn(Hl||(Hl=_n`0`)))),l("td",null,l(e.a,null,xn(Yl||(Yl=_n`0`)))),l("td",{style:"background-color: rgba(255, 255, 0, 0.1);"},l(e.a,null,xn($l||($l=_n`0`)))),l("td",null,l(e.a,null,xn(ln||(ln=_n`0`))))),l("tr",null,l("td",null,l(e.a,null,xn(nn||(nn=_n`1`)))),l("td",null,l(e.a,null,xn(en||(en=_n`0`)))),l("td",null,l(e.a,null,xn(an||(an=_n`1`)))),l("td",null,l(e.a,null,xn(tn||(tn=_n`0`)))),l("td",{style:"background-color: rgba(255, 255, 0, 0.1);"},l(e.a,null,xn(on||(on=_n`0`)))),l("td",null,l(e.a,null,xn(un||(un=_n`3`))))),l("tr",null,l("td",null,l(e.a,null,xn(rn||(rn=_n`0`)))),l("td",null,l(e.a,null,xn(sn||(sn=_n`\frac{1}{2}`)))),l("td",null,l(e.a,null,xn(dn||(dn=_n`0`)))),l("td",null,l(e.a,null,xn(mn||(mn=_n`1`)))),l("td",{style:"background-color: rgba(255, 255, 0, 0.1);"},l(e.a,null,xn(cn||(cn=_n`0`)))),l("td",null,l(e.a,null,xn(bn||(bn=_n`\frac{6}{5}`))))),l("tr",{style:"background-color: rgba(255, 255, 0, 0.1);"},l("td",null,l(e.a,null,xn(hn||(hn=_n`0`)))),l("td",null,l(e.a,null,xn(pn||(pn=_n`-\frac{1}{2}`)))),l("td",null,l(e.a,null,xn(fn||(fn=_n`0`)))),l("td",null,l(e.a,null,xn(vn||(vn=_n`0`)))),l("td",{style:"background-color: rgba(255, 255, 0, 0.2);"},l(e.a,null,xn(gn||(gn=_n`1`)))),l("td",null,l(e.a,null,xn(zn||(zn=_n`-\frac{1}{5}`))))))))))))}}.call(this,i("hosL").h)},ke5e:function(l,n,i){"use strict";(function(l){var e=i("2w3n"),a=i.n(e);n.a=function(n){return l("div",{class:a.a.example},n.children)}}).call(this,i("hosL").h)}}]);
//# sourceMappingURL=route-OttimizzazioneLineare.chunk.c0d16.esm.js.map