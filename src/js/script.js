$(document).ready(function(){
		
	$("body").on("click", ".button-start", function() {
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

	var jnew = "game.json";
	$.getJSON(jnew).done(function(data){
		var retorno = '';
		var game = data.length;
		$.each(data, function(k, v){
			retorno += '<div id="nivel-'+v.id+'" class="nivel">';
			retorno += '<time class="tempo"><i>00:00</i></time>';
			retorno += '<span class="nome-nivel"><span>Você está no nível: </span>' + v.id + '</span>';
			retorno += '<span class="meta" data-meta="'+ v.meta +'">Meta: <span>' + v.meta + '</span></span>';
			retorno += '<span class="movimento" data-movimentos="'+ v.jogadas + '">Movimentos:  <span class="valor-movimentos">'+ v.jogadas + '</span></span>';
			retorno += '<span style="display: none" class="frase frase_acertou">' + v.frase_acertou + '</span>';
			retorno += '<span style="display: none" class="frase frase_errou">' + v.frase_errou + '</span>';
				retorno += '<div class="wrapper-calculadora">';
				retorno += '<span class="total" data-inicial="'+v.valor_inicial+'"><span>' + v.valor_inicial + '</span></span>';
				retorno += '<ul id="calculadora-'+v.id+'" class="calculadora">';
					for (x = 1; x <= 9; x++) {
						var valor_botao = 'botao'+x;
						if (v.operador[valor_botao] === "") { 
							retorno += '<li id="run">'+ v.numeros[valor_botao] +'</li>';
						} else {
							retorno += '<li id="run" class="start-time operador-'+ v.operador[valor_botao] +'" data-operador="'+ v.operador[valor_botao] +'"><span><em>+</em><i>'+ v.numeros[valor_botao] +'</i></span></li>';
						}
					}		
				retorno += '</ul></div>';
			retorno += '<span data-status="bloqueado" class="status-nivel"><span><strong>Nível:</strong> <i>Bloqueado</i></span></span>';

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
						retorno += '<span>Bem vindo!</span>';
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

		$('.calculadora li').each(function (index) {

			simbolo = $(this).attr("class");

				switch(simbolo) {
	            case "operador-soma":
	                $('.operador-soma span em').html("+");
	            break;
	            case "operador-divisao":
	                $('.operador-divisao span em').html("/");
	            break;
	            case "operador-subtracao":
	                $('.operador-subtracao span em').html("-");
	            break;
	            case "operador-multiplicacao":
	                $('.operador-multiplicacao span em').html("*");
	            break;
	        }

		});

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
	    	$("#"+nivel+" time i").html("00:00");
	    	$("#"+nivel+" .clear").addClass("clear-bloqueado");
	    	$("#"+nivel+" .frase").removeClass("perdeu, ganhou");
	    }

	    function pega_debloqueado() {
	    	$("#"+nivel+" .status-nivel").attr("data-status", "desbloqueado");
	    	$("#"+nivel+" .status-nivel").addClass("desbloqueado");
	       	$("#"+nivel+" .status-nivel span i").html("Desbloqueado");
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

		function inicia_tempo(){
			var segundos_decorrentes = 0;
			timer = setInterval(function() {
				segundos_decorrentes = segundos_decorrentes + 1;
				var time = $("#"+nivel+" time").find("i").html(pega_tempoJogo(segundos_decorrentes));
			}, 1000);
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

		function resultado_estrelas() {
			if (time <= "01:00") {
				$("#"+nivel+" .star li").addClass("win");
				$("#"+nivel+" .estrelas").attr("data-estrelas", "3");
			}
			if (time >= "01:01" && time <= "02:00") {
				$("#"+nivel+" .star li:nth-of-type(1)").addClass("win");
				$("#"+nivel+" .star li:nth-of-type(2)").addClass("win");
				$("#"+nivel+" .estrelas").attr("data-estrelas", "2");
			}
			if (time >= "02:01") {
				$("#"+nivel+" .star li:nth-of-type(1)").addClass("win");
				$("#"+nivel+" .estrelas").attr("data-estrelas", "1");
			}
			var valor_inicial_estrelas = Number($(".estrelas i").html());
			var total_estrelas = Number($(".estrelas").attr("data-estrelas"));
			resultado = valor_inicial_estrelas+total_estrelas;
			$(".estrelas i").html(resultado);
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
	        }
	       	resultado = Number($("#"+nivel+" .total span").html(valor_inicial));
			resultado = eval(valor_inicial);
			novomovimento = movimentos-1;
			$("#"+nivel+" .valor-movimentos").html(novomovimento);

			explosao();

	       	if (meta_inicial == resultado) {
	       		pega_debloqueado();
				para_tempo();	
				resultado_estrelas();
				
				$("#"+nivel+" .mensagem-1").addClass("exibe");
				$("#"+nivel+" .mensagem-1").addClass("acertou");
				$("#"+nivel+" .status-msg").addClass("icon-win");

				var frase_acertou = $(".frase_acertou").html()
				$("#"+nivel+" .mensagem-1 .status-win-or-loose").html(frase_acertou);
				$("#"+nivel+" .status-msg").html("Você acertou!");

				setTimeout(function() {
			       $("#"+nivel+" .mensagem-1").removeClass("exibe");
			       $("#"+nivel+" .mensagem-2").addClass("exibe");
			       $("#"+nivel+" .mensagem-2").addClass("acertou");
			       $("#"+nivel+" .mensagem-2").removeClass("errou");
			    }, 1500);

			    time = $("#"+nivel+" time i").html();
				$("#"+nivel+" .time-box i").html(time);
				para_tempo();

			} else if (resultado != meta_inicial && novomovimento === 0)	{

				$("#"+nivel+" .mensagem-1").addClass("exibe");
				$("#"+nivel+" .mensagem-1").addClass("errou");
				$("#"+nivel+" .status-msg").addClass("icon-loose");

				var frase_errou = $(".frase_errou").html()
				$("#"+nivel+" .mensagem-1 .status-win-or-loose").html(frase_errou);
				$("#"+nivel+" .status-msg").html("Você errou!");

				setTimeout(function() {
			       $("#"+nivel+" .mensagem-1").removeClass("exibe");
			       $("#"+nivel+" .mensagem-2").addClass("exibe");
			       $("#"+nivel+" .mensagem-2").addClass("errou");
			       $("#"+nivel+" .mensagem-2").removeClass("acertou");
			    }, 1500);

			    time = $("#"+nivel+" time i").html();
				$("#"+nivel+" .time-box i").html(time);
				para_tempo();

				$(".lifes li:last-child").remove();

				lifes = $(".lifes li").length;

				if (lifes <= 0) {
					$(".lifes").append('<li>Suas vidas acabaram!</li>');
					$(".msg-life").html("Aguarde...");
					$("#"+nivel+" .conteudo-box").addClass("game-over");
					$("#"+nivel+" .status-msg").html("Você ficou sem vida!");
					$("#"+nivel+" .conteudo-box .jogar-novamente").hide();
					$("#"+nivel+" .star").hide();
					$("#"+nivel+" .close-nivel").hide();
					$("#"+nivel+" .time-box").html("Espere um pouquinho para recarregarmos as pilhas");
					$("#"+nivel+" .time-box").append("<i id='time-game-over'></i>segundos restantes");
				}
				console.log(lifes);

				var timeLeft = 5;
				var elem = document.getElementById('time-game-over');
				var timerId = setInterval(countdown, 1000);

				function countdown() {
				    if (timeLeft == -1) {
				        clearTimeout(timerId);
				        aguarda_vida_voltar();
				    } else {
				        elem.innerHTML = timeLeft;
				        timeLeft--;
				    }
				}

				function aguarda_vida_voltar() {
				    $("#"+nivel+" .status-msg").html("Pilhas recarregadas");
				    $("#"+nivel+" .time-box").html("Você ganhou 5 novas vidas :)");
				    $("#"+nivel+" .proximo-nivel").css("display", "block");
				    $("#"+nivel+" .proximo-nivel").html("Voltar ao jogo");
				    $("#"+nivel+" .close-nivel").show();
				    $(".msg-life").html("Vidas");
				    $(".lifes").html("<li class='heart'></li><li class='heart'></li><li class='heart'></li><li class='heart'></li><li class='heart'></li>");
				}

				
			}
			if (novomovimento === 0) {
				$("#"+nivel+" .calculadora li[data-operador]").addClass("disabled");

			}

		});

		// Libera nível da trilha ao passar de nível

		$("body").on("click", ".proximo-nivel", function() {
			nivel = $(this).closest(".nivel").attr("id");
			$(this).closest(".conteudo").find(".niveis-controle #c-"+nivel+".desbloqueado").prev().addClass("desbloqueado");
			$("#"+nivel).fadeOut();
			$("#"+nivel).next().fadeIn();
			$(".meta-do-jogo").fadeIn();
		});

		$("body").on("click", ".mensagem-2.acertou .close-nivel", function() {
			nivel = $(this).closest(".nivel").attr("id");
			$(this).closest(".conteudo").find(".niveis-controle #c-"+nivel+".desbloqueado").prev().addClass("desbloqueado");
			$("#"+nivel).fadeOut();
		});

		// Ao clicar sai da fase e volta ao mapa

		$("body").on("click", ".item-left img, .close, .close-nivel", function() {
			$(".nivel").fadeOut();
			$(".wrapper-calculadora").removeClass("hide");
			para_tempo();
			limpa_tempo(nivel)
			pega_limpa_jogada();
		});

		$('body').on('click', ".calculadora li.start-time", function(){
			$("#"+nivel+"").find(".calculadora li").removeClass("start-time");
			inicia_tempo(nivel);
		});

		// Exibe mensagem que nível da trilha está bloqueado

		$("body").on("click", ".niveis-controle li", function() {
			$(this).addClass('msg-nivel').delay(1500).queue(function(next){
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

		$('body').on('click', ".clear, .jogar-novamente", function(){
			pega_nivel(this);
			pega_inicia();
			para_tempo();
			limpa_tempo(nivel);
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

	})
	.then(function(){

	})
	.fail(function(){
		console.log("Fail");
	});


});