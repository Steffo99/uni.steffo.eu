(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"2w3n":function(l){l.exports={red:"red__2y1B_",orange:"orange__dD2kx",yellow:"yellow__OEpwl",lime:"lime__CVe41",cyan:"cyan__26ZAg",blue:"blue__LO7Xm",magenta:"magenta__1Akee",example:"example__2PzAa"}},"S+8T":function(l,n,i){"use strict";i.r(n),function(l){var e=i("mbOI"),o=i("ke5e");let u,t,a,c,r,d,s,p,m,_,f,g,b,h,N,z,v,F,w,q,y,C,k,E,x,O,P,$,B,L,S,T,A=l=>l;const D=String.raw;n.default=function(){return l("div",null,l("h1",null,"Basi di dati"),l(e.s,{title:"Esame"},l(e.r,{title:"Contatti"},l("ul",null,l("li",null,l("a",{href:"mailto:riccardo.martoglia@unimo.it"},"Prof. Riccardo Martoglia")))),l(e.r,{title:"Scritto"},l("p",null,"Uno scritto con tre domande:"),l("ul",null,l("li",null,"Progettazione concettuale e logica"),l("li",null,"Formulazione interrogazione"),l("li",null,"Una domanda tra:",l("ul",null,l("li",null,"Studio dato derivato"),l("li",null,"Progettazione fisica"),l("li",null,"Tecnologia database")))))),l(e.s,null,l(e.r,{title:"Progetto"},l("p",null,"In gruppo, progettare un database secondo ",l("a",{href:"https://t.me/unimorefiles/23"},"queste")," specifiche."),l("p",null,"Va consegnato via mail almeno 10 giorni prima dello scritto."))),l(e.s,{title:"Visualizzazioni utili"},l(e.r,{title:"B+ Tree"},l("p",null,l("a",{href:"https://www.cs.usfca.edu/~galles/visualization/BPlusTree.html"},"Link")))),l(e.s,{title:"Calcolo dei costi delle query"},l(e.t,null,l("thead",null,l("tr",null,l("th",null,"Simbolo"),l("th",null,"Descrizione"))),l("tbody",null,l("tr",null,l("td",null,l(e.a,null,D(u||(u=A`N_{tuple}`)))),l("td",null,"Numero di tuple di una tabella")),l("tr",null,l("td",null,l(e.a,null,D(t||(t=A`N_{blocchi}`)))),l("td",null,"Numero di blocchi di una tabella")),l("tr",null,l("td",null,l(e.a,null,D(a||(a=A`N_{foglie}`)))),l("td",null,"Numero di foglie di un indice")),l("tr",null,l("td",null,l(e.a,null,D(c||(c=A`N_{indici}`)))),l("td",null,"Numero di indici presenti in una tabella")),l("tr",null,l("td",null,l(e.a,null,D(r||(r=A`N_{unici}`)))),l("td",null,"Numero di valori unici presenti in una colonna")),l("tr",null,l("td",null,l(e.a,null,D(d||(d=A`F`)))),l("td",null,"Fattore di selettività di una condizione")),l("tr",null,l("td",null,l(e.a,null,D(s||(s=A`C`)))),l("td",null,"Costo di accesso a una o più tuple")),l("tr",null,l("td",null,l(e.a,null,D(p||(p=A`N_{selezionati}`)))),l("td",null,"Numero di tuple del risultato"))))),l(e.s,null,l(e.r,{title:"Fattore booleano"},l("p",null,"Espressione formata da ",l("b",null,"una o più condizioni moltiplicate tra loro"),".")),l(e.r,{title:"Argomenti di ricerca attraverso indice"},l("p",null,"Condizioni che soddisfano i seguenti requisiti:"),l("ul",null,l("li",null,"Usa uno dei seguenti ",l("b",null,"operatori"),":",l("ul",null,l("li",null,l(e.i,null,D(m||(m=A`<`)))),l("li",null,l(e.i,null,D(_||(_=A`\leq`)))),l("li",null,l(e.i,null,D(f||(f=A`=`)))),l("li",null,l(e.i,null,D(g||(g=A`\geq`)))),l("li",null,l(e.i,null,D(b||(b=A`>`)))),l("li",null,l("b",null,l("code",null,D(h||(h=A`BETWEEN`))))),l("li",null,l("b",null,l("code",null,D(N||(N=A`OR`))))," (solo in alcuni DBMS)"))),l("li",null,"Uno dei due termini del confronto è ",l("b",null,"una colonna")," della tabella"),l("li",null,"L'altro termine del confronto è ",l("b",null,"una costante numerica")))),l(e.r,{title:"Indici"},l("p",null,"È possibile costruire indici sulle colonne di una tabella per velocizzare le query che riguardano quelle colonne."),l("p",null,"In particolare, ogni tabella può avere ",l("b",null,"un")," ",l("i",null,"indice clustered")," e ",l("b",null,"infiniti")," ",l("i",null,"indici unclustered"),"."),l("p",null,"Generalmente, l'indice clustered è costruito sulla colonna della primary key, ma ",l("a",{href:"https://stackoverflow.com/questions/15051869/relationship-of-primary-key-and-clustered-index"},"non è sempre quello il caso"),"."),l("p",null,"Gli indici vanno tenuti aggiornati, e ciò ha un ",l("b",null,"costo di manutenzione"),":"),l("ul",null,l("li",null,l("code",null,"DELETE"),": ",l(e.i,null,D(z||(z=A`N_{indici} \cdot 2 \cdot N_{selezionati}`)))),l("li",null,l("code",null,"UPDATE"),": ",l(e.i,null,D(v||(v=A`N_{indici} \cdot 4 \cdot N_{selezionati}`))))),l("p",null,"È possibile usare gli indici nelle query solo per gli ",l("b",null,"argomenti di ricerca attraverso indice"),"."))),l(e.s,null,l(e.r,{title:"Fattore di selettività"},l("p",null,"La percentuale di tuple di una tabella che soddisfano una condizione."),l("table",null,l("thead",null,l("tr",null,l("th",null,"Condizione"),l("th",null,"Fattore di selettività"))),l("tbody",null,l("tr",null,l("td",null,l("code",null,"col = $costante")),l("td",null,l(e.a,null,D(F||(F=A`F = \frac{1}{N_{unici}`))))),l("tr",null,l("td",null,l("code",null,"col != $costante")),l("td",null,l(e.a,null,D(w||(w=A`F = 1 - \frac{1}{N_{unici}`))))),l("tr",null,l("td",null,l("code",null,"col1 != col2")),l("td",null,l(e.a,null,D(q||(q=A`F = \frac{1}{max(N_{unici_A}, N_{unici_B})`))))),l("tr",null,l("td",null,l("code",null,"IN")),l("td",null,l(e.a,null,D(y||(y=A`F = \frac{n_{IN}}{N_{unici}}`))))),l("tr",null,l("td",null,l("code",null,"col > $costante")),l("td",null,l(e.a,null,D(C||(C=A`F = \frac{ max(col) - \$costante }{ max(col) - min(col) }`))))),l("tr",null,l("td",null,l("code",null,D(k||(k=A`col < $costante`)))),l("td",null,l(e.a,null,D(E||(E=A`F = \frac{ \$costante - min(col) }{ max(col) - min(col) }`))))),l("tr",null,l("td",null,l("code",null,"col BETWEEN $lower AND $upper")),l("td",null,l(e.a,null,D(x||(x=A`F = \frac{ \$upper - \$lower }{ max(col) - min(col) }`))))),l("tr",null,l("td",null,l("code",null,"cond1 OR cond2")),l("td",null,l(e.a,null,D(O||(O=A`F = F_{cond1} + F_{cond2} - ( F_{cond1} \cdot F_{cond2} )`)))))))),l(e.r,{title:"Costo di accesso"},l("p",null,"Quante ",l("i",null,"unità di lavoro")," costa accedere a una specifica relazione:"),l(e.q,null,D(P||(P=A`
                        C = {\color{yellow} {C_{indice}}} + {\color{Orange} C_{relazione}}
                    `))),l("p",null,"Per accedere attraverso un indice a una specifica tupla della relazione, si spenderà:"),l(e.q,null,D($||($=A`
                        C = {\color{yellow} 1} + {\color{Orange} 1}
                    `))),l("p",null,"Se le tuple a cui si vuole accedere sono più di una, allora, il costo dipenderà da se l'indice è clustered o non-clustered."),l(o.a,null,"Nel calcolo del costo di una query, si considerano tutti i cambi di pagina come ",l("b",null,"page fault"),"."),l("p",null,"Per gli indici ",l("b",null,"clustered"),", visto che basta caricare in memoria i blocchi in sequenza, il costo sarà:"),l(e.q,null,D(B||(B=A`
                        C = {\color{yellow} ( F \cdot N_{foglie} ) } + {\color{Orange} ( F \cdot N_{blocchi} ) }
                    `))),l("p",null,"Per gli indici ",l("b",null,"unclustered"),", per i quali potremmo dover caricare e rimuovere lo stesso blocco dalla memoria più volte, il costo sarà:"),l(e.q,null,D(L||(L=A`
                        C = {\color{yellow} ( F \cdot N_{foglie} ) } + {\color{Orange} ( F \cdot N_{tuple} ) }
                    `))),l("p",null,"Se si stanno effettuando query su più indici unclustered, il costo sarà:"),l(e.q,null,D(S||(S=A`
                        C = {\color{yellow}\sum_k ( F_k \cdot N_{foglie_k} )} + {\color{Orange} \left( \prod_k F_k \cdot N_{tuple} \right)}
                    `)))),l(e.r,{title:"Costo di join"},l("p",null,"Quante ",l("i",null,"unità di lavoro")," costa effettuare un join tra due relazioni."),l("p",null,"Varia in base al metodo di join utilizzato."),l("p",null,"Utilizzando il metodo del ",l("b",null,"nested loop"),":"),l(e.q,null,D(T||(T=A`
                        C_{1 \times 2} = C_1 + ( N_{selezionati_1} \cdot C_2 )
                    `))),l("p",null,"La scelta della colonna su cui iterare è quindi importante!"))))}}.call(this,i("hosL").h)},ke5e:function(l,n,i){"use strict";(function(l){var e=i("2w3n"),o=i.n(e);n.a=function(n){return l("div",{class:o.a.example},n.children)}}).call(this,i("hosL").h)}}]);
//# sourceMappingURL=route-BasiDiDati.chunk.0c740.esm.js.map