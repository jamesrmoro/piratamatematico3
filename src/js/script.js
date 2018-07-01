$(document).ready(function(){

	if($(window).width() < 850) {

		// Instrução para começar o jogo

		function descer_nivel () {
			var $elem = $('.conteudo');
			$('html, body').animate({scrollTop: $elem.height()}, 900);
			var scroll = $('#c-nivel-1').offset();
			$('.conteudo').animate({ scrollTop: scroll.top }, 900);
		}

		$("body").on("click", ".click-down", function() {
			descer_nivel();
			$(this).fadeOut();
		});

		// Música do jogo

		var audio = document.getElementById("player");

		$('body').on("click", "#button", function(){
			if(audio.paused){
				audio.play();
			} else {
				audio.pause();
			}

		});

		function beep() {
			var snd = new Audio("http://orteil.dashnet.org/cookieclicker/snd/clickb2.mp3");  
			snd.play();
		}

		function beep2() {
			var snd = new Audio("http://orteil.dashnet.org/cookieclicker/snd/press.mp3");  
			snd.play();
		}

		function beep3() {
			var snd = new Audio("http://orteil.dashnet.org/cookieclicker/snd/sell1.mp3");  
			snd.play();
		}

		function beep4() {
			var snd = new Audio("musica/limpar.mp3");  
			snd.play();
		}

		function beep5() {
			var snd = new Audio("musica/error.mp3");  
			snd.play();
		}

		$('body').on("click", ".calculadora li[data-operador]", function(){
			beep();
		});

		$('body').on("click", ".calculadora li:not(.clear, .operador)", function(){
			
			beep5();      

		});

		$('body').on("click", ".jogar-novamente", function(){
			beep2();
		});

		$('body').on("click", ".proximo-nivel", function(){
			beep3();
		});

		$('body').on("click", ".clear", function(){
			beep4();
		});

		$("body").on("click", ".button-song", function() {
			$(this).toggleClass("active");
		});

		// Telas de início do jogo

		$("body").on("click", ".button-start", function() {
			audio.play();
			$(".tela-1").fadeOut();
			$(".tela-2").fadeIn();
			setTimeout(function() {
				$(".msg-load").addClass("show");
				$(".tela-2").delay(2000).fadeOut(400);
				$(".tela-3").delay(2000).fadeIn(400);
				$(".status-top").delay(2000).fadeIn(400);
			}, 2000);
		});

		$("body").on("click", ".button-start-nivel", function() {
			var nivel = $(this).closest('.nivel').attr("id");
			$("#"+nivel+"").addClass("remove-msg");
			$(".meta-do-jogo").css("display", "none");
			$("#"+nivel+" .wrapper-calculadora").addClass("hide");
		});

		// Verifica a hora e muda o background do céu

		var dt = new Date();
		var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();

		if (time <= "11:58:00") {
			$(".conteudo").addClass("dia");
		}

		if (time >= "12:00:00" && time <= "17:59:00") {
			$(".conteudo").addClass("tarde");
			$(".conteudo .clouds").append("<div class='ceu-tarde'></div>");
		}

		if (time >= "18:01:00") {
			$(".conteudo").addClass("noite");
		}

		var jnew = "game.json";
		$.getJSON(jnew).done(function(data){
			var retorno = '';
			var game = data.length;
			$.each(data, function(k, v){
				retorno += '<div id="nivel-'+v.id+'" class="nivel">';
				retorno += '<time class="tempo"><i>00:00</i></time>';
				retorno += '<span class="nome-nivel"><span>Você está no nível: </span>' + v.id + '</span>';
				retorno += '<span class="meta" data-meta="'+ v.meta +'">Meta: <span>' + v.meta + '</span></span>';
				retorno += '<span class="movimento" data-movimentos="'+ v.jogadas + '"><i>Movimentos:</i>  <span class="valor-movimentos">'+ v.jogadas + '</span></span>';
				retorno += '<span style="display: none" class="frase frase_acertou">' + v.frase_acertou + '</span>';
				retorno += '<span style="display: none" class="frase frase_errou">' + v.frase_errou + '</span>';
				retorno += '<div class="wrapper-calculadora">';
				retorno += '<span class="total" data-inicial="'+v.valor_inicial+'"><span>' + v.valor_inicial + '</span></span>';
				retorno += '<ul id="calculadora-'+v.id+'" class="calculadora">';
				for (x = 1; x <= 9; x++) {
					var valor_botao = 'botao'+x;
					if (v.operador[valor_botao] === "") { 
						retorno += '<li>'+ v.numeros[valor_botao] +'</li>';
					} else {
						retorno += '<li class="start-time operador operador-'+ v.operador[valor_botao] +'" data-operador="'+ v.operador[valor_botao] +'"><span><em>+</em><i>'+ v.numeros[valor_botao] +'</i></span></li>';
					}
				}		
				retorno += '</ul></div>';
				retorno += '<span data-status="bloqueado" class="status-nivel"><span><strong>Nível:</strong> <i>Não resolvido</i></span></span>';

				retorno += '<span class="estrelas" data-estrelas="0"><strong>Estrelas conquistadas:</strong> <i>0</i></span>';

				retorno += '<div class="mensagem-1">';
				retorno += '<span class="status-win-or-loose"></span>';
				retorno += '</div>';

				retorno += '<div class="mensagem-2">';
				retorno += '<div class="grupo-msg"><span class="close-nivel"></span>';
				retorno += '<div class="conteudo-box">';
				retorno += '<span class="status-msg"></span>';
				retorno += '<span class="time-box">Seu tempo foi de: <i>00:00</i></span>';
				retorno += '<ul class="star" data-adquiridas="0">';
				retorno += '<li class="wait"></li>';
				retorno += '<li class="wait"></li>';
				retorno += '<li class="wait"></li>';
				retorno += '</ul>';
				retorno += '<span title="Jogar novamente" class="jogar-novamente button">Jogar novamente</span>';
				retorno += '<span title="Avançar de nível" class="proximo-nivel button">Avançar</span>';
				retorno += '</div>';
				retorno += '</div>';
				retorno += '</div>';

				retorno += '<div class="meta-do-jogo">';
				retorno += '<div class="header">';
				if (v.id === 1) {
					retorno += '<span>Bem vindo!</span>';
				} else {
					retorno += '<span>Nível '+v.id+'</span>';
				}

				retorno += '<span title="Fechar nível" class="close"></span>';
				retorno += '</div>';
				retorno += '<div class="objetivos">';
				retorno += '<span class="title">Objetivo</span>';
				retorno += '<span><i class="number">'+ v.meta +'</i></span>';
				retorno += '<span>em '+ v.jogadas + ' jogadas</span>';
				retorno += '</div>';
				retorno += '<div class="footer">'
				retorno += '<span class="button-start-nivel">Começar nível</span>';
				retorno += '</div>';
				retorno += '</div>';
				retorno += '</div>';
			});

			$("#controle").html(retorno);
			$("#number").html("Níveis do jogo: "+game);
		})
		.then(function(data){

			function pega_nivel(a) {
				nivel = $(a).closest('.nivel').attr("id");
			}

			function pega_valor(b) {
				valor = Number($(b).find("i").html());
			}

			function pega_inicia() {
				valor_inicial = Number($("#"+nivel+" .total span").html());
				$("#"+nivel+" .clear").removeClass("clear-bloqueado");
			}

			function pega_operador(d) {
				operador = $(d).attr("data-operador");
			}

			function pega_meta() {
				meta_inicial = $("#"+nivel+" .meta").attr("data-meta");
			}

			function pega_movimento_inicial() {
				movimento_inicial = Number($("#"+nivel+" .movimento").attr("data-movimentos"));
			}

			function pega_movimento() {
				movimentos = Number($("#"+nivel+" .valor-movimentos").html());
			}

			function pega_limpa_jogada() {
				limpa_jogada = Number($("#"+nivel+" .total").attr("data-inicial"));
				reseta_movimento = $("#"+nivel+" .movimento .valor-movimentos").html(movimento_inicial);
				$("#"+nivel+" .total span").html(limpa_jogada);
				$("#"+nivel+" .calculadora li[data-operador]").removeClass("disabled");
				$("#"+nivel+" .clear").addClass("clear-bloqueado");
				$("#"+nivel+" .frase").removeClass("perdeu, ganhou");
			}

			function pega_debloqueado() {
				$("#"+nivel+" .status-nivel").attr("data-status", "desbloqueado");
				$("#"+nivel+" .status-nivel").addClass("desbloqueado");
				$("#"+nivel+" .status-nivel span i").html("Resolvido");
			}

			function pega_tempoJogo(total_segundos) {
				function trataNumeros(num) {
					return ( num < 10 ? "0" : "" ) + num;
				}

				var minutos = Math.floor(total_segundos / 60);
				total_segundos = total_segundos % 60;

				var segundos = Math.floor(total_segundos);

				minutos = trataNumeros(minutos);
				segundos = trataNumeros(segundos);

				var tempo_atual = minutos + ":" + segundos;

				return tempo_atual;
			}

			function inicia_tempo(o){
				var segundos_decorrentes = 0;
				timer = setInterval(function() {
					segundos_decorrentes = segundos_decorrentes + 1;
					var time = $("#"+o+" time").find("i").html(pega_tempoJogo(segundos_decorrentes));
				}, 1000);
				$("#"+nivel+"").find(".calculadora li").removeClass("start-time");
			}

			function para_tempo() {
				clearInterval(timer);
				time = $("#"+nivel+" time i").html();
				$("#"+nivel+" time i").html(time);
			}

			function limpa_tempo(l) {
				$("#"+l+" time i").html("00:00");
				$("#"+nivel+"").find(".calculadora li").addClass("start-time");
			}

			function exibir_niveis() {
				var desbloqueios = $('.niveis-controle li.desbloqueado').length;
				$('.screen-hidden .title-nivel i.number').html(desbloqueios+1);
			}

			function somar_estrelas(){
				var formatted = $(".nivel .estrelas i").map(function(i, el) {
					return $(el).text();
				}).get().join('+');

				var n = $('.screen-hidden .title i.number').text(formatted);
				var j = n.html();
				var jn = eval(j);
				$('.screen-hidden .title i.number').html(jn);
			}

			function seta_cookies() {

				var estrelas = $(".screen-hidden .status-jogo .title i.number").html();
				var numero_estrelas = $.cookie("estrelas");
				$.cookie("star", estrelas);

				var niveis = $(".screen-hidden .status-jogo .title-nivel i.number").html();
				var nivel_desbloqueado = $.cookie("nivel");
				$.cookie("nivel", niveis);

			}

			var tamanho = $(".estrelas i").length;

			function estrela_nivel() {

				var array_star = $(".estrelas i").map(function() { return $(this).text() }).get();
				$.cookie("estrelas", array_star);
				var cookie_star =  $.cookie("estrelas");
				teste = cookie_star.split(/,/);  
				for (j = 0; j <= tamanho; j++) {
					$("#nivel-"+j+" .estrelas i").html(teste[j-1]);
				}
			}

			function atualiza_cookie() {
				// Total de estrelas adquiridas no jogo
				var qtd_estrelas = $.cookie("star");
				$(".screen-hidden .status-jogo .title i.number").html(qtd_estrelas);
				// Total de níveis desbloqueados
				var qtd_nivel = $.cookie("nivel");
				$(".screen-hidden .status-jogo .title-nivel i.number").html(qtd_nivel);
				if (qtd_nivel > 1) {
					$('.screen-hidden .title-nivel i.text').html("níveis desbloqueados");
				}
				// Total de estrelas adquiridas na fase
				var qtd_star =  $.cookie("estrelas");
				if (qtd_star == null) {
					console.log("não existe o cookie setado");
				} else {
					console.log("o cookie está setado");
					teste2 = qtd_star.split(/,/);
					for (j = 0; j <= tamanho; j++) {
						$("#nivel-"+j+" .estrelas i").html(teste2[j-1]);
					}
				}				
			}

			atualiza_cookie();

			function resultado_estrelas() {

				var valor_inicial_estrelas = Number($("#"+nivel+" .estrelas i").html());
				var total_estrelas = Number($("#"+nivel+" .estrelas").attr("data-estrelas"));
				var star = $("#"+nivel+" .estrelas i").html();

				if (time <= "00:20") {
					$("#"+nivel+" .star li").addClass("win");
					$("#"+nivel+" .estrelas").attr("data-estrelas", "3");
					(3 >= star ? $("#"+nivel+" .estrelas i").html("3") : "");
					somar_estrelas();
					exibir_niveis();
					seta_cookies();
					estrela_nivel();
					atualiza_cookie();
					
					
				}
				if (time >= "00:21" && time <= "00:30") {
					$("#"+nivel+" .star li:nth-of-type(1)").addClass("win");
					$("#"+nivel+" .star li:nth-of-type(2)").addClass("win");
					$("#"+nivel+" .star li:nth-of-type(3)").removeClass("win");
					$("#"+nivel+" .estrelas").attr("data-estrelas", "2");
					(2 >= star ? $("#"+nivel+" .estrelas i").html("2") : "");
					somar_estrelas();
					exibir_niveis();
					seta_cookies();
					estrela_nivel();
					atualiza_cookie();
	
				}
				if (time >= "00:31") {
					$("#"+nivel+" .star li:nth-of-type(1)").addClass("win");
					$("#"+nivel+" .star li:nth-of-type(2)").removeClass("win");
					$("#"+nivel+" .star li:nth-of-type(3)").removeClass("win");
					$("#"+nivel+" .estrelas").attr("data-estrelas", "1");
					(1 >= star ? $("#"+nivel+" .estrelas i").html("1") : "");
					somar_estrelas();
					exibir_niveis();
					seta_cookies();
					estrela_nivel();
					atualiza_cookie();
				}

				var desb = $("#"+nivel+"").find(".status-nivel").attr("data-status");
				var n = $(".desbloqueado").closest("body").find("#c-"+nivel+"").addClass("desbloqueado");
			}

			$(".calculadora li:nth-of-type(3)").text("Limpar").addClass("clear clear-bloqueado");

			function explosao() {
				$('.valor-movimentos').addClass('explosao').delay(200).queue(function(next){
					$(this).removeClass('explosao');
					next();
				});
			}

			// $("#c-nivel-50").addClass("desbloqueado");
			// $("#c-nivel-50").removeClass("bloqueado");

			// Remove números

			function remove_ultimo_numero(d) {

				var g = $("#"+nivel+" .total span").html();

				if (g <= 9) {
					novo_valor = 0;
				} else {
					novo_valor = $("#"+nivel+" .total span").text().slice(0, -1);
					$("#"+nivel+" .total span").html(novo_valor);
				}
			}

			function agregar_numero(h) {

				var f = $("#"+nivel+" .total span").html();
				valor_juntado = $(h).find("span i").html();

				if (f == 0) {
					valor_inicial = $("#"+nivel+" .total span").text().slice(0, -1);
					$("#"+nivel+" .total span").html(valor_inicial);
				} else {
					Number($("#"+nivel+" .total span").html(valor_juntado));
				}

			}

			function trocar(p) {
				teste = $(p).find("span i").html();
				var first = teste.charAt(0);
				var last = teste.charAt(8);
				var regex = new RegExp("" + first + "", "g");

				temp = $("#"+nivel+" .total span").html();
				temp2 = temp.replace(regex, last);
			}

			function trocar2(p) {
				teste = $(p).find("span i").html();
				var first = teste.substr(0, 2);
				var last = teste.substr(9, 10);
				var regex = new RegExp("" + first + "", "g");

				temp = $("#"+nivel+" .total span").html();
				temp3 = temp.replace(regex, last);

			}

			function trocar3(k) {
				teste1 = $(k).find("span i").html();
				var first1 = teste1.charAt(0);
				var last1 = teste1.charAt(4);;

				temp1 = $("#"+nivel+" .total span").html();
				var menos = "-";

				if (temp1.charAt(0) == menos) {
					temp4 = temp1.substring(1);
					temp5 = temp4;
				} else {
					temp4 = menos+temp1;
				}

			}

			for (y = 1; y <= 50; y++) {
				var d = "n"+y;
				var d = $.cookie("nivel_"+y+"");
				
				if (d) {
					$("#c-nivel-"+y+"").removeClass("bloqueado").addClass(d);				
				}
			}

			function salva_fase() {

				for (x = 1; x <= 50; x++) {
					var c = "nivel_"+x;
					var c = $.cookie("nivel_"+x+"");
					
					if ($("#c-nivel-"+x+"").hasClass("desbloqueado")) {
						$.cookie("nivel_"+x+"", "desbloqueado");
					}
				}
				
			}

			function tela_introducao() {
				$.cookie("introducao", "hide");
			}

			var intro = $.cookie("introducao");

			if (intro) {
				$(".slider-container").addClass("hide");
				$(".tela-1").addClass("hide");
				$(".tela-2").addClass("hide");
				$(".tela-3").show();
				$("body").removeClass("intro");
				$("html").removeClass("introducao");

			}

			function remove_introducao() {
				$(".slider-container").fadeOut();
				$("body").removeClass("intro");
				$("html").removeClass("introducao");
			}

			$("body").on("click", ".pular", function() {
				tela_introducao();
				remove_introducao();
			});

			$("body").on("click", ".slider-control.right.inactive", function() {
				tela_introducao();
				remove_introducao();
			});
		

			$("body").on("click", ".item-right", function() {
				$(".screen-hidden").toggleClass("animated");
			});



			// Realiza o cálculo

			var click = 0;

			$('body').on('click', ".calculadora li[data-operador]", function(){
				pega_nivel(this);
				pega_inicia();
				pega_valor(this);
				pega_operador(this);
				pega_meta();
				pega_movimento_inicial();
				pega_movimento();
				click++;
				
				switch(operador) {
					case "soma":
					valor_inicial = valor_inicial+valor;
					break;
					case "multiplicacao":
					valor_inicial = valor_inicial*valor;
					break;
					case "subtracao":
					valor_inicial = valor_inicial-valor;
					break;
					case "divisao":
					valor_inicial = valor_inicial/valor;
					break;
					case "remover":
					remove_ultimo_numero();
					valor_inicial = novo_valor;
					break;
					case "agregar":
					agregar_numero(this);
					valor_inicial = valor_inicial+valor_juntado;
					break;
					case "trocar":
					trocar(this);
					valor_inicial = temp2;
					break;
					case "trocar2":
					trocar2(this);
					valor_inicial = temp3;
					break;
					case "trocar3":
					trocar3(this);
					valor_inicial = temp4;
					break;
					case "elevado":
					valor_inicial = valor_inicial*valor_inicial;
					break;

				}
				resultado = Number($("#"+nivel+" .total span").html(valor_inicial));
				resultado = eval(valor_inicial);
				novomovimento = movimentos-1;
				$("#"+nivel+" .valor-movimentos").html(novomovimento);

				explosao();

				// Verifica se ganhou ou perdeu e exibe mensagens

				// Aqui ganhou 
				if (meta_inicial == resultado) {
					pega_debloqueado();
					para_tempo();	
					resultado_estrelas();
					
					$("#"+nivel+" .mensagem-1").addClass("exibe");
					$("#"+nivel+" .mensagem-1").addClass("acertou");
					$("#"+nivel+" .mensagem-1").removeClass("errou");
					$("#"+nivel+" .status-msg").addClass("icon-win");
					$("#"+nivel+" .proximo-nivel").show();
					$("#"+nivel+" .status-nivel span i").addClass("resolvido");

					var frase_acertou = $("#"+nivel+" .frase_acertou").html()
					$("#"+nivel+" .mensagem-1 .status-win-or-loose").html(frase_acertou);
					$("#"+nivel+" .status-msg").html("Você acertou!");

					setTimeout(function() {
						$("#"+nivel+" .mensagem-1").removeClass("exibe");
						$("#"+nivel+" .mensagem-2").addClass("exibe");
						$("#"+nivel+" .mensagem-2").addClass("acertou");
						$("#"+nivel+" .mensagem-2").removeClass("errou");
					}, 1100);

					function win() {
						var snd = new Audio("musica/win.mp3");  
						snd.play();
					}

					win();

					time = $("#"+nivel+" time i").html();
					$("#"+nivel+" .time-box i").html(time);
					para_tempo();

				//  aqui errou
			} else if (resultado != meta_inicial && novomovimento === 0)	{

				$("#"+nivel+" .mensagem-1").addClass("exibe");
				$("#"+nivel+" .mensagem-1").addClass("errou");
				$("#"+nivel+" .status-msg").addClass("icon-loose");
				$("#"+nivel+" .proximo-nivel").hide();

				var frase_errou = $("#"+nivel+" .frase_errou").html()
				$("#"+nivel+" .mensagem-1 .status-win-or-loose").html(frase_errou);
				$("#"+nivel+" .status-msg").html("Você errou!");

				setTimeout(function() {
					$("#"+nivel+" .mensagem-1").removeClass("exibe");
					$("#"+nivel+" .mensagem-2").addClass("exibe");
					$("#"+nivel+" .mensagem-2").removeClass("acertou");
				}, 1500);

				time = $("#"+nivel+" time i").html();
				$("#"+nivel+" .time-box i").html(time);
				para_tempo();

				function loose() {
					var snd = new Audio("musica/loose.mp3");  
					snd.play();
				}

				loose();

				$(".lifes li:last-child").remove();

			}
			if (novomovimento === 0) {
				$("#"+nivel+" .calculadora li[data-operador]").addClass("disabled");

			}

			lifes = $(".lifes li").length;

			if (lifes <= 0) {
				$(".lifes").append('<li>Suas vidas acabaram!</li>');
				$(".msg-life").html("Aguarde...");
				$("#"+nivel+" .grupo-msg").addClass("game-over");
				$(".item-left").addClass("msg-game-over");
				$("#"+nivel+" .game-over .status-msg").html("Você ficou sem vida!");
				$("#"+nivel+" .conteudo-box .jogar-novamente").hide();
				$("#"+nivel+" .game-over .star").hide();
				$("#"+nivel+" .game-over .close-nivel").hide();
				$("#"+nivel+" .game-over .time-box").html("Espere um pouquinho para recarregarmos as pilhas");
				$("#"+nivel+" .game-over .time-box").append("<i id='time-game-over'></i>segundos restantes");

					// Bloqueia temporariamente para não voltar a trilha do mapa
					$(".msg-game-over").removeClass("item-left");

					// Mostra mensagem que não há vida se o usuário tenta voltar ao mapa
					$("body").on("click", ".msg-game-over", function() {
						$(this).addClass('show').delay(1000).queue(function(next){
							$(this).removeClass('show');
							next();
						});
					});

					// Ao clicar em next remove a mensagem de pilhas recarregadas
					$("body").on("click", ".game-over .close-nivel, .game-over .proximo-nivel", function() {
						$(this).closest(".grupo-msg").removeClass("game-over");
						$("#"+nivel+" .conteudo-box .jogar-novamente").show();
						$("#"+nivel+" .star").show();
						$("#"+nivel+" .close-nivel").show();
						$("#"+nivel+" .time-box").html("Seu tempo foi de: <i>00:00</i>");
						$("#"+nivel+" .status-msg").removeClass("icon-win");
						$("#"+nivel+" .proximo-nivel").html("Avançar");
					});

					var tempo_vida = 30;
					var elem = document.getElementById('time-game-over');
					var timerId = setInterval(countdown, 1000);

					function vida_volta() {
						$("#"+nivel+" .game-over .status-msg").html("Pilhas recarregadas");
						if ($(".grupo-msg").hasClass("game-over")) {
							$("#"+nivel+" .game-over .time-box").html("Você ganhou 5 novas vidas :)");
						}
						$("#"+nivel+" .proximo-nivel").css("display", "block");
						$("#"+nivel+" .proximo-nivel").html("Voltar ao jogo");
						$("#"+nivel+" .game-over .status-msg").removeClass("icon-loose").addClass("icon-win");
						$("#"+nivel+" .close-nivel").show();
						$(".msg-life").html("Vidas");
						$(".lifes").html("<li class='heart'></li><li class='heart'></li><li class='heart'></li><li class='heart'></li><li class='heart'></li>");

					    // Desbloqueia para voltar a trilha do mapa
					    $(".msg-game-over").addClass("item-left");
					    $(".status-top .item").removeClass("msg-game-over");
					    function recuperou() {
					    	var snd = new Audio("musica/recuperou.mp3");  
					    	snd.play();
					    }

					    recuperou();
					}

					function countdown() {
						if (tempo_vida == -1) {
							clearTimeout(timerId);
							vida_volta();
						} else {
							elem.innerHTML = ( tempo_vida < 10 ? "00:0" : "00:" ) + tempo_vida;
							tempo_vida--;
						}
					}
				}

			});

			// Libera nível da trilha ao passar de nível

			$("body").on("click", ".proximo-nivel", function() {
				nivel = $(this).closest(".nivel").attr("id");
				if ($(".grupo-msg").hasClass("game-over")) {
					$("#"+nivel).fadeOut();
				} else {
					$(this).closest(".conteudo").find(".niveis-controle #c-"+nivel+".desbloqueado").prev().addClass("desbloqueado");
					$("#"+nivel).fadeOut();
					$("#"+nivel).next().fadeIn();
					$(".meta-do-jogo").fadeIn();
				}
				salva_fase();
			});

			$("body").on("click", ".mensagem-2.acertou .close-nivel", function() {
				nivel = $(this).closest(".nivel").attr("id");
				$(this).closest(".conteudo").find(".niveis-controle #c-"+nivel+".desbloqueado").prev().addClass("desbloqueado");
				$("#"+nivel).fadeOut();
				salva_fase();
			});

			// Ao clicar sai da fase e volta ao mapa

			function sair() {
				var snd = new Audio("musica/sair.mp3");  
				snd.play();
			}

			$("body").on("click", ".item-left, .item-left img, .close, .close-nivel, .game-over .proximo-nivel", function() {
				sair();
				$(".nivel").fadeOut();
				$(".wrapper-calculadora").removeClass("hide");
				$(".mensagem-1").removeClass("exibe");
				$(".mensagem-2").removeClass("exibe");
				para_tempo();
				limpa_tempo(nivel)
				pega_limpa_jogada(nivel);
			});

			$('body').on('click', ".calculadora li.start-time", function(){
				inicia_tempo(nivel);
			});

			// Exibe mensagem que nível da trilha está bloqueado

			$("body").on("click", ".niveis-controle li", function() {
				$(this).addClass('msg-nivel').delay(500).queue(function(next){
					$(this).removeClass('msg-nivel');
					next();
				});
			});

			// Abre nível para jogar

			$("body").on("click", ".niveis-controle li.desbloqueado", function() {
				n = $(this).attr("data-n");
				$("#nivel-"+n+"").fadeIn();
				$("#"+n+"").removeClass("remove-msg");
				$(".meta-do-jogo").css("display", "block");
				$(this).removeClass(".msg-nivel");
			});

			var total_estrelas = $(".estrelas").attr("data-estrelas");

			// Joga novamente

			$('body').on('click', ".jogar-novamente", function(){
				pega_nivel(this);
				pega_inicia();
				para_tempo();
				limpa_tempo(nivel);
				$("#"+nivel+" time i").html("00:00");
				pega_limpa_jogada();
				var teste = $(this).closest(".nivel").find(".star").attr("data-adquiridas");
				var valor_estrelas_nivel = $(this).closest(".nivel").find(".estrelas i").html();
				$("#"+nivel+"").find(".star").attr("data-adquiridas", teste);
				$("#"+nivel+" .desbloqueado").closest(".nivel").find(".estrelas i").text(valor_estrelas_nivel);
				salva_fase();
			});

			$('body').on('click', ".clear", function(){
				pega_nivel(this);
				pega_inicia();
				pega_limpa_jogada();
				var teste = $(this).closest(".nivel").find(".star").attr("data-adquiridas");
				var valor_estrelas_nivel = $(this).closest(".nivel").find(".estrelas i").html();
				$("#"+nivel+"").find(".star").attr("data-adquiridas", teste);
				$("#"+nivel+" .desbloqueado").closest(".nivel").find(".estrelas i").text(valor_estrelas_nivel);
				
			});

			$('body').on('click', ".close-nivel, .jogar-novamente", function(){
				$(".mensagem-2").removeClass("exibe");
				limpa_tempo(nivel);
				pega_limpa_jogada();
			});

		    // Insere os símbolos dos operadores dinamicamente

		    $(".calculadora li").each(function (index) {

		    	simbolo = $(this).attr("data-operador");
		    	var nivel = $(this).closest('.nivel').attr("id");

		    	switch(simbolo) {
		    		case "soma":
		    		$("#"+nivel+" .operador-soma span em").html("+");
		    		break;
		    		case "divisao":
		    		$("#"+nivel+" .operador-divisao span em").html("/");
		    		break;
		    		case "subtracao":
		    		$("#"+nivel+" .operador-subtracao span em").html("-");
		    		break;
		    		case "multiplicacao":
		    		$("#"+nivel+" .operador-multiplicacao span em").html("x");
		    		break;
		    		case "remover":
		    		$("#"+nivel+" .operador-remover span em").html("&laquo;");
		    		break;
		    		case "agregar":
		    		$("#"+nivel+" .operador-agregar span em").html("");
		    		break;
		    		case "trocar":
		    		$("#"+nivel+" .operador-trocar span em").html("");
		    		break;
		    		case "trocar2":
		    		$("#"+nivel+" .operador-trocar2 span em").html("");
		    		break;
		    		case "trocar3":
		    		$("#"+nivel+" .operador-trocar3 span em").html("");
		    		break;
		    		case "elevado":
		    		$("#"+nivel+" .operador-elevado span em").html("x²");
		    		break;
		    	}

		    });

		    $("body").on("click", "#compartilhar", function(){
		    	html2canvas($("#html2canvas"), {
		    		onrendered: function(canvas) {
		    			$(".imagem-compartilhada").append(canvas);
		    			var img = canvas.toDataURL();
		    			$('#calendar_to_canvas').attr('src', img);
		    		}
		    	});
		    });


		})
.then(function(){


})
.fail(function(){
	console.log("Fail");
});

}

});

