function draw(e){requestAnimationFrame(draw),canvas.width=canvas.width,ctx.fillStyle="#6dafe1";var a=100*Math.abs(Math.pow(Math.sin(e/1e3),2)),o=100*Math.abs(Math.pow(Math.sin(e/1e3+10),2)),i=100*Math.abs(Math.pow(Math.sin(e/1e3+2),2)),t=100*Math.abs(Math.pow(Math.sin(e/1e3+1),2));ctx.beginPath(),ctx.moveTo(0,a),ctx.bezierCurveTo(canvas.width/3,i,canvas.width/3*2,t,canvas.width,o),ctx.lineTo(canvas.width,canvas.height),ctx.lineTo(0,canvas.height),ctx.lineTo(0,a),ctx.closePath(),ctx.fill()}!function(e){"function"==typeof define&&define.amd&&define.amd.jQuery?define(["jquery"],e):e(jQuery)}(function(e){function a(e){return e}function o(e){return decodeURIComponent(e.replace(t," "))}function i(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return s.json?JSON.parse(e):e}catch(a){}}var t=/\+/g,s=e.cookie=function(t,n,l){if(void 0!==n){if(l=e.extend({},s.defaults,l),"number"==typeof l.expires){var r=l.expires,d=l.expires=new Date;d.setDate(d.getDate()+r)}return n=s.json?JSON.stringify(n):String(n),document.cookie=[encodeURIComponent(t),"=",s.raw?n:encodeURIComponent(n),l.expires?"; expires="+l.expires.toUTCString():"",l.path?"; path="+l.path:"",l.domain?"; domain="+l.domain:"",l.secure?"; secure":""].join("")}for(var c=s.raw?a:o,m=document.cookie.split("; "),v=t?void 0:{},u=0,p=m.length;u<p;u++){var $=m[u].split("="),f=c($.shift()),h=c($.join("="));if(t&&t===f){v=i(h);break}t||(v[f]=i(h))}return v};s.defaults={},e.removeCookie=function(a,o){return void 0!==e.cookie(a)&&(e.cookie(a,"",e.extend(o,{expires:-1})),!0)}});var canvas=document.getElementById("onda"),ctx=canvas.getContext("2d");canvas.width=window.innerWidth,canvas.height=window.innerHeight,requestAnimationFrame(draw),$(document).ready(function(){function descer_nivel(){var e=$(".conteudo");$("html, body").animate({scrollTop:e.height()},900);var a=$("#c-nivel-1").offset();$(".conteudo").animate({scrollTop:a.top},900)}function beep(){var e=new Audio("http://orteil.dashnet.org/cookieclicker/snd/clickb2.mp3");e.play()}function beep2(){var e=new Audio("http://orteil.dashnet.org/cookieclicker/snd/press.mp3");e.play()}function beep3(){var e=new Audio("http://orteil.dashnet.org/cookieclicker/snd/sell1.mp3");e.play()}function beep4(){var e=new Audio("musica/limpar.mp3");e.play()}function beep5(){var e=new Audio("musica/error.mp3");e.play()}if($(window).width()<850){$("body").on("click",".click-down",function(){descer_nivel(),$(this).fadeOut()});var audio=document.getElementById("player");$("body").on("click","#button",function(){audio.paused?audio.play():audio.pause()}),$("body").on("click",".calculadora li[data-operador]",function(){beep()}),$("body").on("click",".calculadora li:not(.clear, .operador)",function(){beep5()}),$("body").on("click",".jogar-novamente",function(){beep2()}),$("body").on("click",".proximo-nivel",function(){beep3()}),$("body").on("click",".clear",function(){beep4()}),$("body").on("click",".button-song",function(){$(this).toggleClass("active")}),$("body").on("click",".button-start",function(){audio.play(),$(".tela-1").fadeOut(),$(".tela-2").fadeIn(),setTimeout(function(){$(".msg-load").addClass("show"),$(".tela-2").delay(2e3).fadeOut(400),$(".tela-3").delay(2e3).fadeIn(400),$(".status-top").delay(2e3).fadeIn(400)},2e3)}),$("body").on("click",".button-start-nivel",function(){var e=$(this).closest(".nivel").attr("id");$("#"+e).addClass("remove-msg"),$(".meta-do-jogo").css("display","none"),$("#"+e+" .wrapper-calculadora").addClass("hide")});var dt=new Date,time=dt.getHours()+":"+dt.getMinutes()+":"+dt.getSeconds();time<="11:58:00"&&$(".conteudo").addClass("dia"),time>="12:00:00"&&time<="17:59:00"&&($(".conteudo").addClass("tarde"),$(".conteudo .clouds").append("<div class='ceu-tarde'></div>")),time>="18:01:00"&&$(".conteudo").addClass("noite");var jnew="game.json";$.getJSON(jnew).done(function(e){var a="",o=e.length;$.each(e,function(e,o){for(a+='<div id="nivel-'+o.id+'" class="nivel">',a+='<time class="tempo"><i>00:00</i></time>',a+='<span class="nome-nivel"><span>Você está no nível: </span>'+o.id+"</span>",a+='<span class="meta" data-meta="'+o.meta+'">Meta: <span>'+o.meta+"</span></span>",a+='<span class="movimento" data-movimentos="'+o.jogadas+'"><i>Movimentos:</i>  <span class="valor-movimentos">'+o.jogadas+"</span></span>",a+='<span style="display: none" class="frase frase_acertou">'+o.frase_acertou+"</span>",a+='<span style="display: none" class="frase frase_errou">'+o.frase_errou+"</span>",a+='<div class="wrapper-calculadora">',a+='<span class="total" data-inicial="'+o.valor_inicial+'"><span>'+o.valor_inicial+"</span></span>",a+='<ul id="calculadora-'+o.id+'" class="calculadora">',x=1;x<=9;x++){var i="botao"+x;a+=""===o.operador[i]?"<li>"+o.numeros[i]+"</li>":'<li class="start-time operador operador-'+o.operador[i]+'" data-operador="'+o.operador[i]+'"><span><em>+</em><i>'+o.numeros[i]+"</i></span></li>"}a+="</ul></div>",a+='<span data-status="bloqueado" class="status-nivel"><span><strong>Nível:</strong> <i>Não resolvido</i></span></span>',a+='<span class="estrelas" data-estrelas="0"><strong>Estrelas conquistadas:</strong> <i>0</i></span>',a+='<div class="mensagem-1">',a+='<span class="status-win-or-loose"></span>',a+="</div>",a+='<div class="mensagem-2">',a+='<div class="grupo-msg"><span class="close-nivel"></span>',a+='<div class="conteudo-box">',a+='<span class="status-msg"></span>',a+='<span class="time-box">Seu tempo foi de: <i>00:00</i></span>',a+='<ul class="star" data-adquiridas="0">',a+='<li class="wait"></li>',a+='<li class="wait"></li>',a+='<li class="wait"></li>',a+="</ul>",a+='<span title="Jogar novamente" class="jogar-novamente button">Jogar novamente</span>',a+='<span title="Avançar de nível" class="proximo-nivel button">Avançar</span>',a+="</div>",a+="</div>",a+="</div>",a+='<div class="meta-do-jogo">',a+='<div class="header">',a+=1===o.id?"<span>Bem vindo!</span>":"<span>Nível "+o.id+"</span>",a+='<span title="Fechar nível" class="close"></span>',a+="</div>",a+='<div class="objetivos">',a+='<span class="title">Objetivo</span>',a+='<span><i class="number">'+o.meta+"</i></span>",a+="<span>em "+o.jogadas+" jogadas</span>",a+="</div>",a+='<div class="footer">',a+='<span class="button-start-nivel">Começar nível</span>',a+="</div>",a+="</div>",a+="</div>"}),$("#controle").html(a),$("#number").html("Níveis do jogo: "+o)}).then(function(data){function pega_nivel(e){nivel=$(e).closest(".nivel").attr("id")}function pega_valor(e){valor=Number($(e).find("i").html())}function pega_inicia(){valor_inicial=Number($("#"+nivel+" .total span").html()),$("#"+nivel+" .clear").removeClass("clear-bloqueado")}function pega_operador(e){operador=$(e).attr("data-operador")}function pega_meta(){meta_inicial=$("#"+nivel+" .meta").attr("data-meta")}function pega_movimento_inicial(){movimento_inicial=Number($("#"+nivel+" .movimento").attr("data-movimentos"))}function pega_movimento(){movimentos=Number($("#"+nivel+" .valor-movimentos").html())}function pega_limpa_jogada(){limpa_jogada=Number($("#"+nivel+" .total").attr("data-inicial")),reseta_movimento=$("#"+nivel+" .movimento .valor-movimentos").html(movimento_inicial),$("#"+nivel+" .total span").html(limpa_jogada),$("#"+nivel+" .calculadora li[data-operador]").removeClass("disabled"),$("#"+nivel+" .clear").addClass("clear-bloqueado"),$("#"+nivel+" .frase").removeClass("perdeu, ganhou")}function pega_debloqueado(){$("#"+nivel+" .status-nivel").attr("data-status","desbloqueado"),$("#"+nivel+" .status-nivel").addClass("desbloqueado"),$("#"+nivel+" .status-nivel span i").html("Resolvido")}function pega_tempoJogo(e){function a(e){return(e<10?"0":"")+e}var o=Math.floor(e/60);e%=60;var i=Math.floor(e);o=a(o),i=a(i);var t=o+":"+i;return t}function inicia_tempo(e){var a=0;timer=setInterval(function(){a+=1;$("#"+e+" time").find("i").html(pega_tempoJogo(a))},1e3),$("#"+nivel).find(".calculadora li").removeClass("start-time")}function para_tempo(){clearInterval(timer),time=$("#"+nivel+" time i").html(),$("#"+nivel+" time i").html(time)}function limpa_tempo(e){$("#"+e+" time i").html("00:00"),$("#"+nivel).find(".calculadora li").addClass("start-time")}function somar_estrelas(){var formatted=$(".nivel .estrelas i").map(function(e,a){return $(a).text()}).get().join("+"),n=$(".status-nivel i").text(formatted),j=n.html(),jn=eval(j)}function resultado_estrelas(){var e=(Number($("#"+nivel+" .estrelas i").html()),Number($("#"+nivel+" .estrelas").attr("data-estrelas")),$("#"+nivel+" .estrelas i").html());time<="00:20"&&($("#"+nivel+" .star li").addClass("win"),$("#"+nivel+" .estrelas").attr("data-estrelas","3"),3>=e?$("#"+nivel+" .estrelas i").html("3"):"",somar_estrelas()),time>="00:21"&&time<="00:30"&&($("#"+nivel+" .star li:nth-of-type(1)").addClass("win"),$("#"+nivel+" .star li:nth-of-type(2)").addClass("win"),$("#"+nivel+" .star li:nth-of-type(3)").removeClass("win"),$("#"+nivel+" .estrelas").attr("data-estrelas","2"),2>=e?$("#"+nivel+" .estrelas i").html("2"):"",somar_estrelas()),time>="00:31"&&($("#"+nivel+" .star li:nth-of-type(1)").addClass("win"),$("#"+nivel+" .star li:nth-of-type(2)").removeClass("win"),$("#"+nivel+" .star li:nth-of-type(3)").removeClass("win"),$("#"+nivel+" .estrelas").attr("data-estrelas","1"),1>=e?$("#"+nivel+" .estrelas i").html("1"):"",somar_estrelas());$("#"+nivel).find(".status-nivel").attr("data-status"),$(".desbloqueado").closest("body").find("#c-"+nivel).addClass("desbloqueado")}function explosao(){$(".valor-movimentos").addClass("explosao").delay(200).queue(function(e){$(this).removeClass("explosao"),e()})}function remove_ultimo_numero(e){var a=$("#"+nivel+" .total span").html();a<=9?novo_valor=0:(novo_valor=$("#"+nivel+" .total span").text().slice(0,-1),$("#"+nivel+" .total span").html(novo_valor))}function agregar_numero(e){var a=$("#"+nivel+" .total span").html();valor_juntado=$(e).find("span i").html(),0==a?(valor_inicial=$("#"+nivel+" .total span").text().slice(0,-1),$("#"+nivel+" .total span").html(valor_inicial)):Number($("#"+nivel+" .total span").html(valor_juntado))}function trocar(e){teste=$(e).find("span i").html();var a=teste.charAt(0),o=teste.charAt(8),i=new RegExp(""+a,"g");temp=$("#"+nivel+" .total span").html(),temp2=temp.replace(i,o)}function trocar2(e){teste=$(e).find("span i").html();var a=teste.substr(0,2),o=teste.substr(9,10),i=new RegExp(""+a,"g");temp=$("#"+nivel+" .total span").html(),temp3=temp.replace(i,o)}function trocar3(e){teste1=$(e).find("span i").html();teste1.charAt(0),teste1.charAt(4);temp1=$("#"+nivel+" .total span").html();var a="-";temp1.charAt(0)==a?(temp4=temp1.substring(1),temp5=temp4):temp4=a+temp1}function tela_introducao(){$.cookie("introducao","hide")}function remove_introducao(){$(".slider-container").fadeOut(),$("body").removeClass("intro"),$("html").removeClass("introducao")}function salva_fase(){for(x=1;x<=50;x++){"nivel_"+x,$.cookie("nivel_"+x);$("#c-nivel-"+x).hasClass("desbloqueado")&&$.cookie("nivel_"+x,"desbloqueado")}}function sair(){var e=new Audio("musica/sair.mp3");e.play()}for($(".calculadora li:nth-of-type(3)").text("Limpar").addClass("clear clear-bloqueado"),y=1;y<=50;y++){var d="n"+y,d=$.cookie("nivel_"+y);d&&$("#c-nivel-"+y).removeClass("bloqueado").addClass(d)}var intro=$.cookie("introducao");intro&&($(".slider-container").addClass("hide"),$(".tela-1").addClass("hide"),$(".tela-2").addClass("hide"),$(".tela-3").show(),$("body").removeClass("intro"),$("html").removeClass("introducao")),$("body").on("click",".pular",function(){tela_introducao(),remove_introducao()}),$("body").on("click",".slider-control.right.inactive",function(){tela_introducao(),remove_introducao()}),$("body").on("click",".item-right",function(){$(".screen-hidden").toggleClass("animated")});var click=0;$("body").on("click",".calculadora li[data-operador]",function(){function win(){var e=new Audio("musica/win.mp3");e.play()}function loose(){var e=new Audio("musica/loose.mp3");e.play()}function vida_volta(){function e(){var e=new Audio("musica/recuperou.mp3");e.play()}$("#"+nivel+" .game-over .status-msg").html("Pilhas recarregadas"),$(".grupo-msg").hasClass("game-over")&&$("#"+nivel+" .game-over .time-box").html("Você ganhou 5 novas vidas :)"),$("#"+nivel+" .proximo-nivel").css("display","block"),$("#"+nivel+" .proximo-nivel").html("Voltar ao jogo"),$("#"+nivel+" .game-over .status-msg").removeClass("icon-loose").addClass("icon-win"),$("#"+nivel+" .close-nivel").show(),$(".msg-life").html("Vidas"),$(".lifes").html("<li class='heart'></li><li class='heart'></li><li class='heart'></li><li class='heart'></li><li class='heart'></li>"),$(".msg-game-over").addClass("item-left"),$(".status-top .item").removeClass("msg-game-over"),e()}function countdown(){tempo_vida==-1?(clearTimeout(timerId),vida_volta()):(elem.innerHTML=(tempo_vida<10?"00:0":"00:")+tempo_vida,tempo_vida--)}switch(pega_nivel(this),pega_inicia(),pega_valor(this),pega_operador(this),pega_meta(),pega_movimento_inicial(),pega_movimento(),click++,operador){case"soma":valor_inicial+=valor;break;case"multiplicacao":valor_inicial*=valor;break;case"subtracao":valor_inicial-=valor;break;case"divisao":valor_inicial/=valor;break;case"remover":remove_ultimo_numero(),valor_inicial=novo_valor;break;case"agregar":agregar_numero(this),valor_inicial+=valor_juntado;break;case"trocar":trocar(this),valor_inicial=temp2;break;case"trocar2":trocar2(this),valor_inicial=temp3;break;case"trocar3":trocar3(this),valor_inicial=temp4;break;case"elevado":valor_inicial*=valor_inicial}if(resultado=Number($("#"+nivel+" .total span").html(valor_inicial)),resultado=eval(valor_inicial),novomovimento=movimentos-1,$("#"+nivel+" .valor-movimentos").html(novomovimento),explosao(),meta_inicial==resultado){pega_debloqueado(),para_tempo(),resultado_estrelas(),$("#"+nivel+" .mensagem-1").addClass("exibe"),$("#"+nivel+" .mensagem-1").addClass("acertou"),$("#"+nivel+" .mensagem-1").removeClass("errou"),$("#"+nivel+" .status-msg").addClass("icon-win"),$("#"+nivel+" .proximo-nivel").show();var frase_acertou=$("#"+nivel+" .frase_acertou").html();$("#"+nivel+" .mensagem-1 .status-win-or-loose").html(frase_acertou),$("#"+nivel+" .status-msg").html("Você acertou!"),setTimeout(function(){$("#"+nivel+" .mensagem-1").removeClass("exibe"),$("#"+nivel+" .mensagem-2").addClass("exibe"),$("#"+nivel+" .mensagem-2").addClass("acertou"),$("#"+nivel+" .mensagem-2").removeClass("errou")},1100),win(),time=$("#"+nivel+" time i").html(),$("#"+nivel+" .time-box i").html(time),para_tempo()}else if(resultado!=meta_inicial&&0===novomovimento){$("#"+nivel+" .mensagem-1").addClass("exibe"),$("#"+nivel+" .mensagem-1").addClass("errou"),$("#"+nivel+" .status-msg").addClass("icon-loose"),$("#"+nivel+" .proximo-nivel").hide();var frase_errou=$("#"+nivel+" .frase_errou").html();$("#"+nivel+" .mensagem-1 .status-win-or-loose").html(frase_errou),$("#"+nivel+" .status-msg").html("Você errou!"),setTimeout(function(){$("#"+nivel+" .mensagem-1").removeClass("exibe"),$("#"+nivel+" .mensagem-2").addClass("exibe"),$("#"+nivel+" .mensagem-2").removeClass("acertou")},1500),time=$("#"+nivel+" time i").html(),$("#"+nivel+" .time-box i").html(time),para_tempo(),loose(),$(".lifes li:last-child").remove()}if(0===novomovimento&&$("#"+nivel+" .calculadora li[data-operador]").addClass("disabled"),lifes=$(".lifes li").length,lifes<=0){$(".lifes").append("<li>Suas vidas acabaram!</li>"),$(".msg-life").html("Aguarde..."),$("#"+nivel+" .grupo-msg").addClass("game-over"),$(".item-left").addClass("msg-game-over"),$("#"+nivel+" .game-over .status-msg").html("Você ficou sem vida!"),$("#"+nivel+" .conteudo-box .jogar-novamente").hide(),$("#"+nivel+" .game-over .star").hide(),$("#"+nivel+" .game-over .close-nivel").hide(),$("#"+nivel+" .game-over .time-box").html("Espere um pouquinho para recarregarmos as pilhas"),$("#"+nivel+" .game-over .time-box").append("<i id='time-game-over'></i>segundos restantes"),$(".msg-game-over").removeClass("item-left"),$("body").on("click",".msg-game-over",function(){$(this).addClass("show").delay(1e3).queue(function(e){$(this).removeClass("show"),e()})}),$("body").on("click",".game-over .close-nivel, .game-over .proximo-nivel",function(){$(this).closest(".grupo-msg").removeClass("game-over"),$("#"+nivel+" .conteudo-box .jogar-novamente").show(),$("#"+nivel+" .star").show(),$("#"+nivel+" .close-nivel").show(),$("#"+nivel+" .time-box").html("Seu tempo foi de: <i>00:00</i>"),$("#"+nivel+" .status-msg").removeClass("icon-win"),$("#"+nivel+" .proximo-nivel").html("Avançar")});var tempo_vida=30,elem=document.getElementById("time-game-over"),timerId=setInterval(countdown,1e3)}}),$("body").on("click",".proximo-nivel",function(){nivel=$(this).closest(".nivel").attr("id"),$(".grupo-msg").hasClass("game-over")?$("#"+nivel).fadeOut():($(this).closest(".conteudo").find(".niveis-controle #c-"+nivel+".desbloqueado").prev().addClass("desbloqueado"),$("#"+nivel).fadeOut(),$("#"+nivel).next().fadeIn(),$(".meta-do-jogo").fadeIn()),salva_fase()}),$("body").on("click",".mensagem-2.acertou .close-nivel",function(){nivel=$(this).closest(".nivel").attr("id"),$(this).closest(".conteudo").find(".niveis-controle #c-"+nivel+".desbloqueado").prev().addClass("desbloqueado"),$("#"+nivel).fadeOut(),salva_fase()}),$("body").on("click",".item-left, .item-left img, .close, .close-nivel, .game-over .proximo-nivel",function(){sair(),$(".nivel").fadeOut(),$(".wrapper-calculadora").removeClass("hide"),$(".mensagem-1").removeClass("exibe"),$(".mensagem-2").removeClass("exibe"),para_tempo(),limpa_tempo(nivel),pega_limpa_jogada(nivel)}),$("body").on("click",".calculadora li.start-time",function(){inicia_tempo(nivel)}),$("body").on("click",".niveis-controle li",function(){$(this).addClass("msg-nivel").delay(500).queue(function(e){$(this).removeClass("msg-nivel"),e()})}),$("body").on("click",".niveis-controle li.desbloqueado",function(){n=$(this).attr("data-n"),$("#nivel-"+n).fadeIn(),$("#"+n).removeClass("remove-msg"),$(".meta-do-jogo").css("display","block"),$(this).removeClass(".msg-nivel")});var total_estrelas=$(".estrelas").attr("data-estrelas");$("body").on("click",".jogar-novamente",function(){pega_nivel(this),pega_inicia(),para_tempo(),limpa_tempo(nivel),$("#"+nivel+" time i").html("00:00"),pega_limpa_jogada();var e=$(this).closest(".nivel").find(".star").attr("data-adquiridas"),a=$(this).closest(".nivel").find(".estrelas i").html();$("#"+nivel).find(".star").attr("data-adquiridas",e),$("#"+nivel+" .desbloqueado").closest(".nivel").find(".estrelas i").text(a),salva_fase()}),$("body").on("click",".clear",function(){pega_nivel(this),pega_inicia(),pega_limpa_jogada();var e=$(this).closest(".nivel").find(".star").attr("data-adquiridas"),a=$(this).closest(".nivel").find(".estrelas i").html();$("#"+nivel).find(".star").attr("data-adquiridas",e),$("#"+nivel+" .desbloqueado").closest(".nivel").find(".estrelas i").text(a)}),$("body").on("click",".close-nivel, .jogar-novamente",function(){$(".mensagem-2").removeClass("exibe"),limpa_tempo(nivel),pega_limpa_jogada()}),$(".calculadora li").each(function(e){simbolo=$(this).attr("data-operador");var a=$(this).closest(".nivel").attr("id");switch(simbolo){case"soma":$("#"+a+" .operador-soma span em").html("+");break;case"divisao":$("#"+a+" .operador-divisao span em").html("/");break;case"subtracao":$("#"+a+" .operador-subtracao span em").html("-");break;case"multiplicacao":$("#"+a+" .operador-multiplicacao span em").html("x");break;case"remover":$("#"+a+" .operador-remover span em").html("&laquo;");break;case"agregar":$("#"+a+" .operador-agregar span em").html("");break;case"trocar":$("#"+a+" .operador-trocar span em").html("");break;case"trocar2":$("#"+a+" .operador-trocar2 span em").html("");break;case"trocar3":$("#"+a+" .operador-trocar3 span em").html("");break;case"elevado":$("#"+a+" .operador-elevado span em").html("x²")}}),$("body").on("click","#compartilhar",function(){html2canvas($("#html2canvas"),{onrendered:function(e){$(".imagem-compartilhada").append(e);var a=e.toDataURL();$("#calendar_to_canvas").attr("src",a)}})})}).then(function(){}).fail(function(){console.log("Fail")})}}),$(document).ready(function(){function e(){for(var e=0;e<m+1;e++){var a=$("<li class='slider-pagi__elem'></li>");a.addClass("slider-pagi__elem-"+e).data("page",e),e||a.addClass("active"),f.append(a)}}function a(){$(".slider-control").removeClass("inactive"),c||$(".slider-control.left").addClass("inactive"),c===m&&$(".slider-control.right").addClass("inactive")}function o(){n=setTimeout(function(){c++,c>m&&(c=0),i()},p)}function i(e){e||(v=!1,a(),l.addClass("animating"),l.css("top"),$(".slide").removeClass("active"),$(".slide-"+c).addClass("active"),setTimeout(function(){l.removeClass("animating"),v=!1},u)),window.clearTimeout(n),$(".slider-pagi__elem").removeClass("active"),$(".slider-pagi__elem-"+c).addClass("active"),l.css("transform","translate3d("+100*-c+"%,0,0)"),r.css("transform","translate3d("+50*c+"%,0,0)"),d=0,o()}function t(){v||(c>0&&c--,i())}function s(){v||(c<m&&c++,i())}var n,l=$(".slider"),r=$(".slide__bg"),d=0,c=0,m=$(".slide").length-1,v=!1,u=500,p=6e4,f=$(".slider-pagi");e(),o(),$("body").on("mousedown touchstart",".slider",function(e){if(!v){window.clearTimeout(n);var a=e.pageX||e.originalEvent.touches[0].pageX,o=$(window).width();d=0,$("body").on("mousemove touchmove",function(e){var i=e.pageX||e.originalEvent.touches[0].pageX;d=(a-i)/o*70,(!c&&d<0||c===m&&d>0)&&(d/=2),l.css("transform","translate3d("+(100*-c-d)+"%,0,0)"),r.css("transform","translate3d("+(50*c+d/2)+"%,0,0)")})}}),$("body").on("mouseup touchend",function(e){if($("body").off("mousemove touchmove"),!v){if(!d)return void i(!0);if(d>-8&&d<8)return void i();d<=-8&&t(),d>=8&&s()}}),$("body").on("click",".slider-control",function(){$(this).hasClass("left")?t():s()}),$("body").on("click",".slider-pagi__elem",function(){c=$(this).data("page"),i()})});