$(document).ready(function(){function descer_nivel(){var a=$(".conteudo");$("html, body").animate({scrollTop:a.height()},900);var e=$("#c-nivel-1").offset();$(".conteudo").animate({scrollTop:e.top},900)}function beep(){var a=new Audio("http://orteil.dashnet.org/cookieclicker/snd/clickb2.mp3");a.play()}function beep2(){var a=new Audio("http://orteil.dashnet.org/cookieclicker/snd/press.mp3");a.play()}function beep3(){var a=new Audio("http://orteil.dashnet.org/cookieclicker/snd/sell1.mp3");a.play()}function beep4(){var a=new Audio("musica/limpar.mp3");a.play()}function beep5(){var a=new Audio("musica/error.mp3");a.play()}function draw(a){requestAnimationFrame(draw),canvas.width=canvas.width,ctx.fillStyle="#6dafe1";var e=100*Math.abs(Math.pow(Math.sin(a/1e3),2)),i=100*Math.abs(Math.pow(Math.sin(a/1e3+10),2)),o=100*Math.abs(Math.pow(Math.sin(a/1e3+2),2)),t=100*Math.abs(Math.pow(Math.sin(a/1e3+1),2));ctx.beginPath(),ctx.moveTo(0,e),ctx.bezierCurveTo(canvas.width/3,o,canvas.width/3*2,t,canvas.width,i),ctx.lineTo(canvas.width,canvas.height),ctx.lineTo(0,canvas.height),ctx.lineTo(0,e),ctx.closePath(),ctx.fill()}if($(window).width()<850){$("body").on("click",".click-down",function(){descer_nivel(),$(this).fadeOut()});var audio=document.getElementById("player");$("body").on("click","#button",function(){audio.paused?audio.play():audio.pause()}),$("body").on("click",".calculadora li[data-operador]",function(){beep()}),$("body").on("click",".calculadora li:not(.clear, .operador)",function(){beep5()}),$("body").on("click",".jogar-novamente",function(){beep2()}),$("body").on("click",".proximo-nivel",function(){beep3()}),$("body").on("click",".clear",function(){beep4()}),$("body").on("click",".button-song",function(){$(this).toggleClass("active")}),$("body").on("click",".button-start",function(){audio.play(),$(".tela-1").fadeOut(),$(".tela-2").fadeIn(),setTimeout(function(){$(".msg-load").addClass("show"),$(".tela-2").delay(2e3).fadeOut(400),$(".tela-3").delay(2e3).fadeIn(400),$(".status-top").delay(2e3).fadeIn(400)},2e3)}),$("body").on("click",".button-start-nivel",function(){var a=$(this).closest(".nivel").attr("id");$("#"+a).addClass("remove-msg"),$(".meta-do-jogo").css("display","none"),$("#"+a+" .wrapper-calculadora").addClass("hide")});var dt=new Date,time=dt.getHours()+":"+dt.getMinutes()+":"+dt.getSeconds();time<="11:58:00"&&$(".conteudo").addClass("dia"),time>="12:00:00"&&time<="17:59:00"&&($(".conteudo").addClass("tarde"),$(".conteudo .clouds").append("<div class='ceu-tarde'></div>")),time>="18:01:00"&&$(".conteudo").addClass("noite");var canvas=document.getElementById("onda"),ctx=canvas.getContext("2d");canvas.width=window.innerWidth,canvas.height=window.innerHeight;var date=Date.now();requestAnimationFrame(draw);var jnew="game.json";$.getJSON(jnew).done(function(a){var e="",i=a.length;$.each(a,function(a,i){for(e+='<div id="nivel-'+i.id+'" class="nivel">',e+='<time class="tempo"><i>00:00</i></time>',e+='<span class="nome-nivel"><span>Você está no nível: </span>'+i.id+"</span>",e+='<span class="meta" data-meta="'+i.meta+'">Meta: <span>'+i.meta+"</span></span>",e+='<span class="movimento" data-movimentos="'+i.jogadas+'"><i>Movimentos:</i>  <span class="valor-movimentos">'+i.jogadas+"</span></span>",e+='<span style="display: none" class="frase frase_acertou">'+i.frase_acertou+"</span>",e+='<span style="display: none" class="frase frase_errou">'+i.frase_errou+"</span>",e+='<div class="wrapper-calculadora">',e+='<span class="total" data-inicial="'+i.valor_inicial+'"><span>'+i.valor_inicial+"</span></span>",e+='<ul id="calculadora-'+i.id+'" class="calculadora">',x=1;x<=9;x++){var o="botao"+x;e+=""===i.operador[o]?"<li>"+i.numeros[o]+"</li>":'<li class="start-time operador operador-'+i.operador[o]+'" data-operador="'+i.operador[o]+'"><span><em>+</em><i>'+i.numeros[o]+"</i></span></li>"}e+="</ul></div>",e+='<span data-status="bloqueado" class="status-nivel"><span><strong>Nível:</strong> <i>Bloqueado</i></span></span>',e+='<span class="estrelas" data-estrelas="0"><strong>Estrelas conquistadas:</strong> <i>0</i></span>',e+='<div class="mensagem-1">',e+='<span class="status-win-or-loose"></span>',e+="</div>",e+='<div class="mensagem-2">',e+='<div class="grupo-msg"><span class="close-nivel"></span>',e+='<div class="conteudo-box">',e+='<span class="status-msg"></span>',e+='<span class="time-box">Seu tempo foi de: <i>00:00</i></span>',e+='<ul class="star" data-adquiridas="0">',e+='<li class="wait"></li>',e+='<li class="wait"></li>',e+='<li class="wait"></li>',e+="</ul>",e+='<span title="Jogar novamente" class="jogar-novamente button">Jogar novamente</span>',e+='<span title="Avançar de nível" class="proximo-nivel button">Avançar</span>',e+="</div>",e+="</div>",e+="</div>",e+='<div class="meta-do-jogo">',e+='<div class="header">',e+=1===i.id?"<span>Bem vindo!</span>":"<span>Nível "+i.id+"</span>",e+='<span title="Fechar nível" class="close"></span>',e+="</div>",e+='<div class="objetivos">',e+='<span class="title">Objetivo</span>',e+='<span><i class="number">'+i.meta+"</i></span>",e+="<span>em "+i.jogadas+" jogadas</span>",e+="</div>",e+='<div class="footer">',e+='<span class="button-start-nivel">Começar nível</span>',e+="</div>",e+="</div>",e+="</div>"}),$("#controle").html(e),$("#number").html("Níveis do jogo: "+i)}).then(function(data){function pega_nivel(a){nivel=$(a).closest(".nivel").attr("id")}function pega_valor(a){valor=Number($(a).find("i").html())}function pega_inicia(){valor_inicial=Number($("#"+nivel+" .total span").html()),$("#"+nivel+" .clear").removeClass("clear-bloqueado")}function pega_operador(a){operador=$(a).attr("data-operador")}function pega_meta(){meta_inicial=$("#"+nivel+" .meta").attr("data-meta")}function pega_movimento_inicial(){movimento_inicial=Number($("#"+nivel+" .movimento").attr("data-movimentos"))}function pega_movimento(){movimentos=Number($("#"+nivel+" .valor-movimentos").html())}function pega_limpa_jogada(){limpa_jogada=Number($("#"+nivel+" .total").attr("data-inicial")),reseta_movimento=$("#"+nivel+" .movimento .valor-movimentos").html(movimento_inicial),$("#"+nivel+" .total span").html(limpa_jogada),$("#"+nivel+" .calculadora li[data-operador]").removeClass("disabled"),$("#"+nivel+" .clear").addClass("clear-bloqueado"),$("#"+nivel+" .frase").removeClass("perdeu, ganhou")}function pega_debloqueado(){$("#"+nivel+" .status-nivel").attr("data-status","desbloqueado"),$("#"+nivel+" .status-nivel").addClass("desbloqueado"),$("#"+nivel+" .status-nivel span i").html("Desbloqueado")}function pega_tempoJogo(a){function e(a){return(a<10?"0":"")+a}var i=Math.floor(a/60);a%=60;var o=Math.floor(a);i=e(i),o=e(o);var t=i+":"+o;return t}function inicia_tempo(){var a=0;timer=setInterval(function(){a+=1;$("#"+nivel+" time").find("i").html(pega_tempoJogo(a))},1e3)}function para_tempo(){clearInterval(timer),time=$("#"+nivel+" time i").html(),$("#"+nivel+" time i").html(time)}function limpa_tempo(a){$("#"+a+" time i").html("00:00"),$("#"+nivel).find(".calculadora li").addClass("start-time")}function resultado_estrelas(){time<="01:00"&&($("#"+nivel+" .star li").addClass("win"),$("#"+nivel+" .estrelas").attr("data-estrelas","3")),time>="01:01"&&time<="02:00"&&($("#"+nivel+" .star li:nth-of-type(1)").addClass("win"),$("#"+nivel+" .star li:nth-of-type(2)").addClass("win"),$("#"+nivel+" .estrelas").attr("data-estrelas","2")),time>="02:01"&&($("#"+nivel+" .star li:nth-of-type(1)").addClass("win"),$("#"+nivel+" .estrelas").attr("data-estrelas","1"));var a=Number($(".estrelas i").html()),e=Number($(".estrelas").attr("data-estrelas"));resultado=a+e,$(".estrelas i").html(resultado);$("#"+nivel).find(".status-nivel").attr("data-status"),$(".desbloqueado").closest("body").find("#c-"+nivel).addClass("desbloqueado")}function explosao(){$(".valor-movimentos").addClass("explosao").delay(200).queue(function(a){$(this).removeClass("explosao"),a()})}function remove_ultimo_numero(a){var e=$("#"+nivel+" .total span").html();e<=9?novo_valor=0:(novo_valor=$("#"+nivel+" .total span").text().slice(0,-1),$("#"+nivel+" .total span").html(novo_valor))}function agregar_numero(a){var e=$("#"+nivel+" .total span").html();valor_juntado=$(a).find("span i").html(),e>=1?Number($("#"+nivel+" .total span").html(valor_juntado)):(valor_inicial=$("#"+nivel+" .total span").text().slice(0,-1),$("#"+nivel+" .total span").html(valor_inicial))}function sair(){var a=new Audio("musica/sair.mp3");a.play()}$(".calculadora li:nth-of-type(3)").text("Limpar").addClass("clear clear-bloqueado"),$("#c-nivel-27").addClass("desbloqueado"),$("#c-nivel-27").removeClass("bloqueado");var click=0;$("body").on("click",".calculadora li[data-operador]",function(){function win(){var a=new Audio("musica/win.mp3");a.play()}function loose(){var a=new Audio("musica/loose.mp3");a.play()}function vida_volta(){function a(){var a=new Audio("musica/recuperou.mp3");a.play()}$("#"+nivel+" .game-over .status-msg").html("Pilhas recarregadas"),$(".grupo-msg").hasClass("game-over")&&$("#"+nivel+" .game-over .time-box").html("Você ganhou 5 novas vidas :)"),$("#"+nivel+" .proximo-nivel").css("display","block"),$("#"+nivel+" .proximo-nivel").html("Voltar ao jogo"),$("#"+nivel+" .game-over .status-msg").removeClass("icon-loose").addClass("icon-win"),$("#"+nivel+" .close-nivel").show(),$(".msg-life").html("Vidas"),$(".lifes").html("<li class='heart'></li><li class='heart'></li><li class='heart'></li><li class='heart'></li><li class='heart'></li>"),$(".msg-game-over").addClass("item-left"),$(".status-top .item").removeClass("msg-game-over"),a()}function countdown(){tempo_vida==-1?(clearTimeout(timerId),vida_volta()):(elem.innerHTML=(tempo_vida<10?"00:0":"00:")+tempo_vida,tempo_vida--)}switch(pega_nivel(this),pega_inicia(),pega_valor(this),pega_operador(this),pega_meta(),pega_movimento_inicial(),pega_movimento(),click++,operador){case"soma":valor_inicial+=valor;break;case"multiplicacao":valor_inicial*=valor;break;case"subtracao":valor_inicial-=valor;break;case"divisao":valor_inicial/=valor;break;case"remover":remove_ultimo_numero(),valor_inicial=novo_valor;break;case"agregar":agregar_numero(this),valor_inicial+=valor_juntado}if(resultado=Number($("#"+nivel+" .total span").html(valor_inicial)),resultado=eval(valor_inicial),novomovimento=movimentos-1,$("#"+nivel+" .valor-movimentos").html(novomovimento),explosao(),meta_inicial==resultado){pega_debloqueado(),para_tempo(),resultado_estrelas(),$("#"+nivel+" .mensagem-1").addClass("exibe"),$("#"+nivel+" .mensagem-1").addClass("acertou"),$("#"+nivel+" .mensagem-1").removeClass("errou"),$("#"+nivel+" .status-msg").addClass("icon-win"),$("#"+nivel+" .proximo-nivel").show();var frase_acertou=$("#"+nivel+" .frase_acertou").html();$("#"+nivel+" .mensagem-1 .status-win-or-loose").html(frase_acertou),$("#"+nivel+" .status-msg").html("Você acertou!"),setTimeout(function(){$("#"+nivel+" .mensagem-1").removeClass("exibe"),$("#"+nivel+" .mensagem-2").addClass("exibe"),$("#"+nivel+" .mensagem-2").addClass("acertou"),$("#"+nivel+" .mensagem-2").removeClass("errou")},1100),win(),time=$("#"+nivel+" time i").html(),$("#"+nivel+" .time-box i").html(time),para_tempo()}else if(resultado!=meta_inicial&&0===novomovimento){$("#"+nivel+" .mensagem-1").addClass("exibe"),$("#"+nivel+" .mensagem-1").addClass("errou"),$("#"+nivel+" .status-msg").addClass("icon-loose"),$("#"+nivel+" .proximo-nivel").hide();var frase_errou=$("#"+nivel+" .frase_errou").html();$("#"+nivel+" .mensagem-1 .status-win-or-loose").html(frase_errou),$("#"+nivel+" .status-msg").html("Você errou!"),setTimeout(function(){$("#"+nivel+" .mensagem-1").removeClass("exibe"),$("#"+nivel+" .mensagem-2").addClass("exibe"),$("#"+nivel+" .mensagem-2").removeClass("acertou")},1500),time=$("#"+nivel+" time i").html(),$("#"+nivel+" .time-box i").html(time),para_tempo(),loose(),$(".lifes li:last-child").remove()}if(0===novomovimento&&$("#"+nivel+" .calculadora li[data-operador]").addClass("disabled"),lifes=$(".lifes li").length,lifes<=3){$(".lifes").append("<li>Suas vidas acabaram!</li>"),$(".msg-life").html("Aguarde..."),$("#"+nivel+" .grupo-msg").addClass("game-over"),$(".item-left").addClass("msg-game-over"),$("#"+nivel+" .game-over .status-msg").html("Você ficou sem vida!"),$("#"+nivel+" .conteudo-box .jogar-novamente").hide(),$("#"+nivel+" .game-over .star").hide(),$("#"+nivel+" .game-over .close-nivel").hide(),$("#"+nivel+" .game-over .time-box").html("Espere um pouquinho para recarregarmos as pilhas"),$("#"+nivel+" .game-over .time-box").append("<i id='time-game-over'></i>segundos restantes"),$(".msg-game-over").removeClass("item-left"),$("body").on("click",".msg-game-over",function(){$(this).addClass("show").delay(1e3).queue(function(a){$(this).removeClass("show"),a()})}),$("body").on("click",".game-over .close-nivel, .game-over .proximo-nivel",function(){$(this).closest(".grupo-msg").removeClass("game-over"),$("#"+nivel+" .conteudo-box .jogar-novamente").show(),$("#"+nivel+" .star").show(),$("#"+nivel+" .close-nivel").show(),$("#"+nivel+" .time-box").html("Seu tempo foi de: <i>00:00</i>"),$("#"+nivel+" .status-msg").removeClass("icon-win"),$("#"+nivel+" .proximo-nivel").html("Avançar")});var tempo_vida=2,elem=document.getElementById("time-game-over"),timerId=setInterval(countdown,1e3)}}),$("body").on("click",".proximo-nivel",function(){nivel=$(this).closest(".nivel").attr("id"),$(".grupo-msg").hasClass("game-over")?(console.log("Game over"),$("#"+nivel).fadeOut()):($(this).closest(".conteudo").find(".niveis-controle #c-"+nivel+".desbloqueado").prev().addClass("desbloqueado"),$("#"+nivel).fadeOut(),$("#"+nivel).next().fadeIn(),$(".meta-do-jogo").fadeIn())}),$("body").on("click",".mensagem-2.acertou .close-nivel",function(){nivel=$(this).closest(".nivel").attr("id"),$(this).closest(".conteudo").find(".niveis-controle #c-"+nivel+".desbloqueado").prev().addClass("desbloqueado"),$("#"+nivel).fadeOut()}),$("body").on("click",".item-left, .item-left img, .close, .close-nivel, .game-over .proximo-nivel",function(){sair(),$(".nivel").fadeOut(),$(".wrapper-calculadora").removeClass("hide"),$(".mensagem-1").removeClass("exibe"),$(".mensagem-2").removeClass("exibe"),para_tempo(),limpa_tempo(nivel),pega_limpa_jogada(nivel)}),$("body").on("click",".calculadora li.start-time",function(){$("#"+nivel).find(".calculadora li").removeClass("start-time"),inicia_tempo(nivel)}),$("body").on("click",".niveis-controle li",function(){$(this).addClass("msg-nivel").delay(500).queue(function(a){$(this).removeClass("msg-nivel"),a()})}),$("body").on("click",".niveis-controle li.desbloqueado",function(){n=$(this).attr("data-n"),$("#nivel-"+n).fadeIn(),$("#"+n).removeClass("remove-msg"),$(".meta-do-jogo").css("display","block"),$(this).removeClass(".msg-nivel")});var total_estrelas=$(".estrelas").attr("data-estrelas");$("body").on("click",".jogar-novamente",function(){pega_nivel(this),pega_inicia(),para_tempo(),limpa_tempo(nivel),$("#"+nivel+" time i").html("00:00"),pega_limpa_jogada();var a=$(this).closest(".nivel").find(".star").attr("data-adquiridas"),e=$(this).closest(".nivel").find(".estrelas i").html();$("#"+nivel).find(".star").attr("data-adquiridas",a),$("#"+nivel+" .desbloqueado").closest(".nivel").find(".estrelas i").text(e)}),$("body").on("click",".clear",function(){pega_nivel(this),pega_inicia(),pega_limpa_jogada();var a=$(this).closest(".nivel").find(".star").attr("data-adquiridas"),e=$(this).closest(".nivel").find(".estrelas i").html();$("#"+nivel).find(".star").attr("data-adquiridas",a),$("#"+nivel+" .desbloqueado").closest(".nivel").find(".estrelas i").text(e)}),$("body").on("click",".close-nivel, .jogar-novamente",function(){$(".mensagem-2").removeClass("exibe"),limpa_tempo(nivel),pega_limpa_jogada()}),$(".calculadora li").each(function(a){simbolo=$(this).attr("data-operador");var e=$(this).closest(".nivel").attr("id");switch(simbolo){case"soma":$("#"+e+" .operador-soma span em").html("+");break;case"divisao":$("#"+e+" .operador-divisao span em").html("/");break;case"subtracao":$("#"+e+" .operador-subtracao span em").html("-");break;case"multiplicacao":$("#"+e+" .operador-multiplicacao span em").html("x");break;case"remover":$("#"+e+" .operador-remover span em").html("&laquo;");break;case"agregar":$("#"+e+" .operador-agregar span em").html("")}}),$("body").on("click","#compartilhar",function(){html2canvas($("#html2canvas"),{onrendered:function(a){$(".imagem-compartilhada").append(a);var e=a.toDataURL();$("#calendar_to_canvas").attr("src",e)}})})}).then(function(){}).fail(function(){console.log("Fail")})}});