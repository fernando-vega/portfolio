!function(){"use strict";function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function n(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function e(t,e,o){return e&&n(t.prototype,e),o&&n(t,o),t}(self.webpackChunkportfolio2020=self.webpackChunkportfolio2020||[]).push([[925],{4925:function(n,o,i){i.r(o),i.d(o,{HomeModule:function(){return u}});var c,r=i(8583),a=i(5855),s=i(639),g=((c=function(){function n(){t(this,n),this.count=0,this.status=!1}return e(n,[{key:"onClick",value:function(t){if(t){var n=document.childNodes.length+1;this.count<n&&!1===this.status?(this.count=this.count+1,this.getNextProject(),3===this.count&&(this.status=!0)):!0===this.status&&(this.count-=1,this.getPrevProject(),1===this.count&&(this.status=!1))}}},{key:"onTouchStart",value:function(t){if(t){var n=document.childNodes.length+1;this.count<n&&!1===this.status?(this.count=this.count+1,this.getNextProject(),3===this.count&&(this.status=!0)):!0===this.status&&(this.count-=1,this.getPrevProject(),1===this.count&&(this.status=!1))}}},{key:"getNextProject",value:function(){var t=document.querySelector("div.active");null!=t.nextElementSibling&&(t.classList.remove("active"),t.nextElementSibling.classList.add("active"))}},{key:"getPrevProject",value:function(){var t=document.querySelector("div.active");null!=t.previousElementSibling&&(t.classList.remove("active"),t.previousElementSibling.classList.add("active"))}}]),n}()).\u0275fac=function(t){return new(t||c)},c.\u0275dir=s.lG2({type:c,selectors:[["","appScroll",""]],hostBindings:function(t,n){1&t&&s.NdJ("click",function(t){return n.onClick(t)})("touchstart",function(t){return n.onTouchStart(t)})}}),c),h=[{path:"",component:function(){var n=function(){function n(){t(this,n)}return e(n,[{key:"ngOnInit",value:function(){}}]),n}();return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=s.Xpm({type:n,selectors:[["app-home"]],decls:70,vars:0,consts:[["appScroll","",1,"home-container","row"],[1,"home-container-item","row","active"],[1,"col-xs-12","col-md-6"],[1,"col-xs-12","col-md-6","home-container-item-text"],[1,"home-container-item-text-content"],["routerLink","/about",1,"btn","btn-border-blue","btn-hidden"],[1,"text-scroll"],[1,"home-container-item","row"],["routerLink","/resume",1,"btn","btn-border-blue","btn-hidden"],["routerLink","/portfolio",1,"btn","btn-border-blue","btn-hidden"]],template:function(t,n){1&t&&(s.TgZ(0,"section",0),s.TgZ(1,"div",1),s._UZ(2,"div",2),s.TgZ(3,"div",3),s.TgZ(4,"div",4),s.TgZ(5,"article"),s.TgZ(6,"h2"),s._uU(7,"HOLA,"),s.qZA(),s.TgZ(8,"p"),s._uU(9,"Mi nombre es Fernando Vega, soy Ingeniero de Sistemas y Computaci\xf3n de la Universidad Pedag\xf3gica y Tecnol\xf3gica de Colombia "),s._UZ(10,"br"),s._uU(11," Desarrollor frontend, "),s._UZ(12,"br"),s._uU(13," Soy un apasionado del desarrollo web, entusiasta de la UI / UX y la tecnolog\xeda en general"),s.qZA(),s.TgZ(14,"a",5),s._uU(15,"+ SOBRE M\xcd"),s.qZA(),s.qZA(),s.TgZ(16,"span",6),s._uU(17," SABER M\xc1S "),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(18,"div",7),s._UZ(19,"div",2),s.TgZ(20,"div",3),s.TgZ(21,"div",4),s.TgZ(22,"article"),s.TgZ(23,"h2"),s._uU(24,"HABILIDADES"),s.qZA(),s.TgZ(25,"p"),s._uU(26,"GIT, Webpack, HTML, CSS,"),s._UZ(27,"br"),s._uU(28," JavaScript Angular, React JS, VUE."),s._UZ(29,"br"),s._uU(30," Node JS, PHP(Laravel), Python"),s._UZ(31,"br"),s._uU(32," Ruby on Rails "),s._UZ(33,"br"),s._uU(34," MySQL, Postgress."),s._UZ(35,"br"),s._uU(36," Adobe (Illustrator, Photoshop, XD), FIGMA"),s.qZA(),s.TgZ(37,"a",8),s._uU(38,"+ SKILLS"),s.qZA(),s.qZA(),s.TgZ(39,"span",6),s._uU(40," SABER M\xc1S "),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(41,"div",7),s._UZ(42,"div",2),s.TgZ(43,"div",3),s.TgZ(44,"div",4),s.TgZ(45,"article"),s.TgZ(46,"h2"),s._uU(47,"EXPERIENCIA"),s.qZA(),s.TgZ(48,"p"),s.TgZ(49,"b"),s._uU(50,"2020 - Actual : Scotiabank Colpatria (FrontEnd Web Developer)"),s.qZA(),s.qZA(),s._UZ(51,"br"),s.TgZ(52,"p"),s._uU(53,"2020 - 2020 : TITA MEDIA (FrontEnd Web Developer)"),s.qZA(),s._UZ(54,"br"),s.TgZ(55,"p"),s._uU(56,"2019 - 2020 : Insoftar (Fullstack Developer)"),s.qZA(),s._UZ(57,"br"),s.TgZ(58,"p"),s._uU(59,"2018 - 2019 : Quadi(FrontEnd Web Developer)"),s.qZA(),s._UZ(60,"br"),s.TgZ(61,"p"),s._uU(62,"2015 - 2018 : DoDMediaGroup(Ingeniero de Software)"),s.qZA(),s._UZ(63,"br"),s.TgZ(64,"p"),s._uU(65,"2014 - 2017 : Sia Software(Web Developer)"),s.qZA(),s.TgZ(66,"a",9),s._uU(67,"VER M\xc1S"),s.qZA(),s.qZA(),s.TgZ(68,"span",6),s._uU(69," SABER M\xc1S "),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA())},directives:[g,a.yS],styles:['@import"https://fonts.googleapis.com/css?family=Archivo+Black|Overpass+Mono&display=swap";.row[_ngcontent-%COMP%], .row[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin:0}[_nghost-%COMP%]{left:0;background:linear-gradient(45deg,#44cea2 0%,#185d9d 100%);height:100vh;overflow:hidden;position:absolute;top:0;width:100vw}[_nghost-%COMP%]   .home-container[_ngcontent-%COMP%]{display:flex;padding:10px}[_nghost-%COMP%]   .home-container[_ngcontent-%COMP%]   .home-container-item[_ngcontent-%COMP%]{width:calc(100% - 20px);transition:all .3s;position:absolute;visibility:hidden;opacity:0;filter:blur(2px);scale:.9}[_nghost-%COMP%]   .home-container[_ngcontent-%COMP%]   .home-container-item[_ngcontent-%COMP%]   .home-container-item-text[_ngcontent-%COMP%]{background:rgba(255,255,255,.8);height:calc(100vh - 20px);transition:all 1s ease-in-out;opacity:0;position:relative;right:-100%}[_nghost-%COMP%]   .home-container[_ngcontent-%COMP%]   .home-container-item[_ngcontent-%COMP%]   .home-container-item-text[_ngcontent-%COMP%]   .home-container-item-text-content[_ngcontent-%COMP%]{align-items:center;display:flex;height:100%;justify-content:left;padding:0;position:absolute;width:100%}[_nghost-%COMP%]   .home-container[_ngcontent-%COMP%]   .home-container-item[_ngcontent-%COMP%]   .home-container-item-text[_ngcontent-%COMP%]   .home-container-item-text-content[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]{position:relative;text-align:center;padding:0 15px;width:100%}[_nghost-%COMP%]   .home-container[_ngcontent-%COMP%]   .home-container-item[_ngcontent-%COMP%]   .home-container-item-text[_ngcontent-%COMP%]   .home-container-item-text-content[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#185c9d;font-size:2rem;font-family:"Archivo Black",sans-serif;margin-bottom:15px}@media (min-width: 960px){[_nghost-%COMP%]   .home-container[_ngcontent-%COMP%]   .home-container-item[_ngcontent-%COMP%]   .home-container-item-text[_ngcontent-%COMP%]   .home-container-item-text-content[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:3.5rem}}[_nghost-%COMP%]   .home-container[_ngcontent-%COMP%]   .home-container-item[_ngcontent-%COMP%]   .home-container-item-text[_ngcontent-%COMP%]   .home-container-item-text-content[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:"Overpass Mono",monospace;line-height:1.5em;margin:auto;max-width:500px}[_nghost-%COMP%]   .home-container[_ngcontent-%COMP%]   .home-container-item[_ngcontent-%COMP%]   .home-container-item-text[_ngcontent-%COMP%]   .home-container-item-text-content[_ngcontent-%COMP%]   .text-scroll[_ngcontent-%COMP%]{color:#8d8d8d;cursor:pointer;font-size:1rem;font-weight:900;opacity:.8;text-align:center;transition:.3s ease-in-out;position:absolute;width:100%;bottom:0;text-shadow:0px -1px 0px rgba(24,92,157,.4);background:linear-gradient(-45deg,#185c9d 25%,#44CEA2 25%,#44CEA2 50%,#185c9d 50%,#185c9d 75%,#44CEA2 75%,#44CEA2);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;background-size:10px 10px;background-position:0 0;-webkit-animation:stripes 1.8s linear infinite;animation:stripes 1.8s linear infinite}[_nghost-%COMP%]   .home-container[_ngcontent-%COMP%]   .home-container-item[_ngcontent-%COMP%]   .home-container-item-text[_ngcontent-%COMP%]   .home-container-item-text-content[_ngcontent-%COMP%]   .text-scroll[_ngcontent-%COMP%]:hover{opacity:1}@media (min-width: 960px){[_nghost-%COMP%]   .home-container[_ngcontent-%COMP%]   .home-container-item[_ngcontent-%COMP%]   .home-container-item-text[_ngcontent-%COMP%]   .home-container-item-text-content[_ngcontent-%COMP%]{padding:0 0 0 10%}[_nghost-%COMP%]   .home-container[_ngcontent-%COMP%]   .home-container-item[_ngcontent-%COMP%]   .home-container-item-text[_ngcontent-%COMP%]   .home-container-item-text-content[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]{text-align:left;padding:0 30% 0 0}[_nghost-%COMP%]   .home-container[_ngcontent-%COMP%]   .home-container-item[_ngcontent-%COMP%]   .home-container-item-text[_ngcontent-%COMP%]   .home-container-item-text-content[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:3.5rem}[_nghost-%COMP%]   .home-container[_ngcontent-%COMP%]   .home-container-item[_ngcontent-%COMP%]   .home-container-item-text[_ngcontent-%COMP%]   .home-container-item-text-content[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}[_nghost-%COMP%]   .home-container[_ngcontent-%COMP%]   .home-container-item[_ngcontent-%COMP%]   .home-container-item-text[_ngcontent-%COMP%]   .home-container-item-text-content[_ngcontent-%COMP%]   .text-scroll[_ngcontent-%COMP%]{right:-35%;font-size:2rem;bottom:auto;bottom:initial;transform:rotate(90deg)}}[_nghost-%COMP%]   .home-container[_ngcontent-%COMP%]   .home-container-item.active[_ngcontent-%COMP%]{filter:blur(0px);visibility:visible;opacity:1;background-position:center center;scale:1}[_nghost-%COMP%]   .home-container[_ngcontent-%COMP%]   .home-container-item.active[_ngcontent-%COMP%]:first-child{background:url(hero-1.bdec26422f22819b7ca2.png) no-repeat;background-size:cover;background-position-x:15%}[_nghost-%COMP%]   .home-container[_ngcontent-%COMP%]   .home-container-item.active[_ngcontent-%COMP%]:nth-child(2){background:url(hero-2.dcd4ef3320ccd6d066bc.png) no-repeat;background-size:cover}[_nghost-%COMP%]   .home-container[_ngcontent-%COMP%]   .home-container-item.active[_ngcontent-%COMP%]:nth-child(3){background:url(hero-3.72fe380545cb337dafd1.png) no-repeat;background-size:cover}[_nghost-%COMP%]   .home-container[_ngcontent-%COMP%]   .home-container-item.active[_ngcontent-%COMP%]   .home-container-item-text[_ngcontent-%COMP%]{opacity:1;right:0;filter:blur(0px)}@-webkit-keyframes stripes{to{background-position:10px 0,10px 0,10px 0}}@keyframes stripes{to{background-position:10px 0,10px 0,10px 0}}']}),n}()}],m=function(){var n=function n(){t(this,n)};return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=s.oAB({type:n}),n.\u0275inj=s.cJS({imports:[[a.Bz.forChild(h)],a.Bz]}),n}(),l=i(4466),u=function(){var n=function n(){t(this,n)};return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=s.oAB({type:n}),n.\u0275inj=s.cJS({imports:[[r.ez,m,l.m]]}),n}()}}])}();