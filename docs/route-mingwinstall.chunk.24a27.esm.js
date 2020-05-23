(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{HKwK:function(e,i,t){"use strict";(function(e){t.d(i,"a",(function(){return o}));var l=t("r4EX"),n=t.n(l),a=t("hosL");class o extends a.Component{getStyle(){return n.a.panel}render(){let i=null;return void 0!==this.props.title&&(i=e("h3",null,this.props.title)),e("div",{class:this.getStyle(),id:this.props.id},i,this.props.children)}}}).call(this,t("hosL").h)},cLd6:function(e,i,t){"use strict";t.r(i),function(e){t.d(i,"default",(function(){return a}));var l=t("hosL"),n=t("HKwK");class a extends l.Component{render(){return e("div",null,e("h1",null,"Come installare MinGW"),e(n.a,null,e("p",null," Scaricate ",e("a",{href:"https://osdn.net/projects/mingw/downloads/68260/mingw-get-setup.exe/"},"l'installer ufficiale"),", ed eseguitelo."),e("img",{src:"https://i.imgur.com/mDZSqjV.png",alt:""}),e("p",null," Dovrebbe comparire questa schermata. Cliccate su ",e("code",null,"Install"),", poi scegliete una cartella di installazione (ricordatevela!) e poi ",e("code",null,"Continue"),". Lasciate stare le altre opzioni, dovrebbero essere tutte spuntate, tranne ",e("code",null,"For all users"),", che dovrebbe essere disattivato."),e("img",{src:"https://i.imgur.com/brdw8Xy.png",alt:""}),e("p",null," Aspettate che finisca il download. Pochi secondi dopo, dovrebbe finire e dovrebbe apparire un tasto",e("code",null,"Continue"),". Premetelo."),e("img",{src:"https://i.imgur.com/aPTwrxz.png",alt:""}),e("p",null," Dovrebbe apparirvi questa finestra. L'installer di MinGW è una specie di gestore pacchetti (tipo ",e("code",null,"apt")," su Ubuntu); potete scegliere quali pacchetti installare, e quindi quali funzionalità."),e("img",{src:"https://i.imgur.com/5QLSkFN.png",alt:""}),e("p",null," Nel nostro caso, dovrebbero servirci ",e("code",null,"mingw32-base-bin")," (per il C e alcune librerie C++) e",e("code",null,"mingw32-gcc-g++-bin")," (per il C++). Cliccate, quindi, sui due quadratini corrispondenti, e premete",e("code",null,"Mark for Installation"),". Dovrebbe comparire una freccia gialla sul quadratino."),e("img",{src:"https://i.imgur.com/zP74nks.png",alt:""}),e("p",null," Ora, è il momento di installare i pacchetti. Aprite il menù ",e("code",null,"Installation"),", poi premete",e("code",null,"Apply Changes"),", e di nuovo ",e("code",null,"Apply"),"."),e("img",{src:"https://i.imgur.com/jp4uz5B.png",alt:""}),e("p",null," Lasciate che scarichi, ci vorrà un po'. Guardatevi un video nel frattempo, fatevi una partitina a qualcosa, tornate dopo circa 10 minuti."),e("img",{src:"https://i.imgur.com/Lq9IepY.png",alt:""}),e("p",null," Una volta installato, dobbiamo aggiungere ",e("code",null,"g++")," ai programmi eseguibili da Prompt dei Comandi: premete il tasto ",e("kbd",null,"Windows"),", e scrivete ",e("code",null,"PATH"),". Windows dovrebbe trovarvi automaticamente quell'opzione."),e("img",{src:"https://i.imgur.com/dy3b5Ub.png",alt:""}),e("p",null," Dentro la finestra di ",e("i",null,"Proprietà del Sistema"),", premete ",e("code",null,"Variabili d'ambiente"),"."),e("img",{src:"https://i.imgur.com/FjYpT1n.png",alt:""}),e("p",null," Trovate la variabile d'ambiente globale ",e("code",null,"Path"),", e fateci doppio click per modificarla."),e("img",{src:"https://i.imgur.com/klZQ9So.png",alt:""}),e("p",null," Ora dovreste vedere l'elenco di tutte le cartelle contenenti programmi eseguibili da terminale: dobbiamo aggiungere quella di MinGW! Premete ",e("code",null,"Sfoglia"),"."),e("img",{src:"https://i.imgur.com/F6lBCqS.png",alt:""}),e("p",null," Trovate la cartella in cui avete installato MinGW (vi avevo detto di ricordarvela!); entrateci, poi selezionate la sottocartella ",e("code",null,"bin")," e premete ",e("code",null,"OK")," su tutte le finestre che avete aperto fino ad ora, chiudendole."),e("p",null," Complimenti! Avete installato MinGW e potete compilare programmi C e C++ da Windows! Avete a disposizione",e("code",null,"gcc")," e ",e("code",null,"g++")," sul Prompt dei Comandi, e potete finalmente creare dei file .exe! ")))}}}.call(this,t("hosL").h)},r4EX:function(e){e.exports={panel:"panel__7bYPC"}}}]);
//# sourceMappingURL=route-mingwinstall.chunk.24a27.esm.js.map