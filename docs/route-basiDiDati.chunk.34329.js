(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"8uYk":function(t){t.exports={box:"box__3cKyY",default:"default__v-emJ",red:"red__339Cz",orange:"orange__24_8v",yellow:"yellow__1Jo9W",lime:"lime__34yV5",cyan:"cyan__3RqLr",blue:"blue__13Wnj",magenta:"magenta__2tkzq"}},BSmf:function(t,n,e){"use strict";(function(t){e.d(n,"a",(function(){return a}));var o=e("hosL"),i=e("EfTa"),s=e.n(i),a=function(n){function e(){var t;return(t=n.call(this)||this).state={now:Date.now()},t.timer=null,t}var o,i;i=n,(o=e).prototype=Object.create(i.prototype),o.prototype.constructor=o,o.__proto__=i;var a=e.prototype;return a.componentDidMount=function(){var t=this;this.timer=setInterval((function(){t.setState({now:Date.now()})}),1e3)},a.componentWillUnmount=function(){null!==this.timer&&clearInterval(this.timer)},a.render=function(){var n="Unknown date",e=s.a.timer,o={milliseconds:"?",seconds:"?",minutes:"?",hours:"?",days:"?"};if(this.props.to){var i=(n=new Date(this.props.to))-this.state.now;i>0?o={milliseconds:i%1e3,seconds:Math.floor(i/1e3)%60,minutes:Math.floor(i/6e4)%60,hours:Math.floor(i/36e5)%24,days:Math.floor(i/864e5)}:(o={milliseconds:0,seconds:0,minutes:0,hours:0,days:0},e+=" "+s.a.expired)}else e+=" "+s.a.unknown;return t("div",{class:e,title:n},t("div",{class:s.a.days+" "+s.a.count},o.days),t("div",{className:s.a.days+" "+s.a.text},"giorni"),t("div",{class:s.a.hours+" "+s.a.count},o.hours),t("div",{className:s.a.hours+" "+s.a.text},"ore"),t("div",{class:s.a.minutes+" "+s.a.count},o.minutes),t("div",{className:s.a.minutes+" "+s.a.text},"minuti"),t("div",{class:s.a.seconds+" "+s.a.count},o.seconds),t("div",{class:s.a.seconds+" "+s.a.text},"secondi"),t("div",{class:s.a.remaining},"rimasti"))},e}(o.Component)}).call(this,e("hosL").h)},EfTa:function(t){t.exports={timer:"timer__K0K_h",days:"days__vN3tf",hours:"hours__3v0KX",minutes:"minutes__vkYk7",seconds:"seconds__3gJ99",count:"count__1VV4k",text:"text__khS4i",remaining:"remaining__zUECg",unknown:"unknown__af307",expired:"expired__1rtHB"}},HmML:function(t,n,e){"use strict";e.r(n),function(t){e.d(n,"default",(function(){return r}));var o=e("hosL"),i=e("lL4N"),s=e("imVn"),a=e("BSmf"),r=function(n){function e(){return n.apply(this,arguments)||this}var o,r;return r=n,(o=e).prototype=Object.create(r.prototype),o.prototype.constructor=o,o.__proto__=r,e.prototype.render=function(){return t("div",null,t("h1",null,"Basi di dati"),t(i.a,{title:"Esame"},t(s.a,{title:"Scritto"},t("p",null,"Uno scritto con tre domande:"),t("ul",null,t("li",null,"Progettazione concettuale e logica"),t("li",null,"Formulazione interrogazione"),t("li",null,"Una domanda tra:",t("ul",null,t("li",null,"Studio dato derivato"),t("li",null,"Progettazione fisica"),t("li",null,"Tecnologia database")))),t("p",null,"Prossimo appello:"),t(a.a,null)),t(s.a,{title:"Progetto"},t("p",null,"In gruppo, progettare un database secondo ",t("a",{href:"https://t.me/unimorefiles/23"},"queste")," specifiche."),t("p",null,"Termine ultimo per la consegna:"),t(a.a,{to:"2021-05-31 23:59:59"}),t("p",null,"Consegnando il progetto prima della fine di Luglio si otterrà un bonus!"),t(a.a,{to:"2020-07-31 23:59:59"}),t("p",null,"Esempi di progetti degli anni passati:"),t("ul",null,t("li",null,t("a",{href:"https://t.me/unimorefiles/25"},"Esempio 1")),t("li",null,t("a",{href:"https://t.me/unimorefiles/26"},"Esempio 2"))),t("p",null,"Presentando il progetto si otterrà un bonus!"))))},e}(o.Component)}.call(this,e("hosL").h)},OmdA:function(t){t.exports={title:"title__3ZVpg",contents:"contents__20_NI"}},Y9Ml:function(t,n,e){"use strict";(function(t){var o=e("8uYk"),i=e.n(o),s=Object.freeze({RED:i.a.red,ORANGE:i.a.orange,YELLOW:i.a.yellow,LIME:i.a.lime,CYAN:i.a.cyan,BLUE:i.a.blue,MAGENTA:i.a.magenta,DEFAULT:i.a.default});n.a=function(n){var e=s.DEFAULT;return n.color&&(e=n.color),t("div",{class:i.a.box+" "+e},n.children)}}).call(this,e("hosL").h)},eCjK:function(t){t.exports={split:"split__3dL9r",splitparent:"splitparent__2H-vS",splitchild:"splitchild__1B-Jt"}},imVn:function(t,n,e){"use strict";(function(t){var o=e("OmdA"),i=e.n(o),s=e("Y9Ml");n.a=function(n){return t(s.a,{color:n.color},t("h3",{class:i.a.title},n.title),t("div",{class:i.a.contents},n.children))}}).call(this,e("hosL").h)},lL4N:function(t,n,e){"use strict";(function(t){e.d(n,"a",(function(){return s}));var o=e("eCjK"),i=e.n(o),s=function(n){function e(){return n.apply(this,arguments)||this}var o,s;return s=n,(o=e).prototype=Object.create(s.prototype),o.prototype.constructor=o,o.__proto__=s,e.prototype.render=function(){var n,e=null;return void 0!==this.props.title&&(e=t("h2",null,this.props.title)),n=Array.isArray(this.props.children)?this.props.children.map((function(n){return t("div",{class:i.a.splitchild},n)})):t("div",{class:i.a.splitchild},this.props.children),t("div",{class:i.a.split},e,t("div",{class:i.a.splitparent},n))},e}(e("hosL").Component)}).call(this,e("hosL").h)}}]);
//# sourceMappingURL=route-basiDiDati.chunk.34329.js.map