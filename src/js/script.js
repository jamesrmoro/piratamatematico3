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
		    //button.innerHTML = "Música rolando...";
		  } else {
		    audio.pause();
		    //button.innerHTML = "Música pausada...";
		  }
		});

		function song() {
			var click = document.getElementById("song");
			click.play();
		}

		$('body').on("click", ".calculadora li", function(){

			
			song();


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

		// Onda

		var canvas = document.getElementById('onda');
		var ctx = canvas.getContext('2d');
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		var date = Date.now();
		function draw(delta) {
		    requestAnimationFrame(draw);
		    canvas.width = canvas.width;
		    ctx.fillStyle = "#6dafe1";
		    
		    var randomLeft = Math.abs(Math.pow( Math.sin(delta/1000), 2 )) * 100;
		    var randomRight = Math.abs(Math.pow( Math.sin((delta/1000) + 10), 2 )) * 100;
		    var randomLeftConstraint = Math.abs(Math.pow( Math.sin((delta/1000)+2), 2 )) * 100;
		    var randomRightConstraint = Math.abs(Math.pow( Math.sin((delta/1000)+1), 2)) * 100;
		    
		    ctx.beginPath();
		    ctx.moveTo(0, randomLeft);
		    
		    // ctx.lineTo(canvas.width, randomRight);
		    ctx.bezierCurveTo(canvas.width / 3, randomLeftConstraint, canvas.width / 3 * 2, randomRightConstraint, canvas.width, randomRight);
		    ctx.lineTo(canvas.width , canvas.height);
		    ctx.lineTo(0, canvas.height);
		    ctx.lineTo(0, randomLeft);
		    
		    ctx.closePath();
		    ctx.fill();
		}
		requestAnimationFrame(draw);

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
								retorno += '<li class="start-time operador-'+ v.operador[valor_botao] +'" data-operador="'+ v.operador[valor_botao] +'"><span><em>+</em><i>'+ v.numeros[valor_botao] +'</i></span></li>';
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

				// Verifica se ganhou ou perdeu e exibe mensagens

		       	if (meta_inicial == resultado) {
		       		pega_debloqueado();
					para_tempo();	
					resultado_estrelas();
					
					$("#"+nivel+" .mensagem-1").addClass("exibe");
					$("#"+nivel+" .mensagem-1").addClass("acertou");
					$("#"+nivel+" .mensagem-1").removeClass("errou");
					$("#"+nivel+" .status-msg").addClass("icon-win");
					$("#"+nivel+" .proximo-nivel").show();

					var frase_acertou = $("#"+nivel+" .frase_acertou").html()
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

						// Bloqueia temporariamente para não voltar a trilha do mapa
						$(".msg-game-over").removeClass("item-left");

						// Mostra mensagem que não há vida se o usuário tenta voltar ao mapa
						$("body").on("click", ".msg-game-over", function() {
							$(this).addClass('show').delay(1000).queue(function(next){
						        $(this).removeClass('show');
						        next();
						    });
						});

						//
						var tempo_vida = 30;
						var elem = document.getElementById('time-game-over');
						var timerId = setInterval(countdown, 1000);

						function vida_volta() {
						    $("#"+nivel+" .status-msg").html("Pilhas recarregadas");
						    $("#"+nivel+" .time-box").html("Você ganhou 5 novas vidas :)");
						    $("#"+nivel+" .proximo-nivel").css("display", "block");
						    $("#"+nivel+" .proximo-nivel").html("Voltar ao jogo");
						    $("#"+nivel+" .status-msg").removeClass("icon-loose").addClass("icon-win");
						    $("#"+nivel+" .close-nivel").show();
						    $(".msg-life").html("Vidas");
						    $(".lifes").html("<li class='heart'></li><li class='heart'></li><li class='heart'></li><li class='heart'></li><li class='heart'></li>");

						    // Desbloqueia para voltar a trilha do mapa
						    $(".msg-game-over").addClass("item-left");
						    $(".status-top .item").removeClass("msg-game-over");
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
				$(".mensagem-1").removeClass("exibe");
				$(".mensagem-2").removeClass("exibe");
				para_tempo();
				limpa_tempo(nivel)
				pega_limpa_jogada(nivel);
			});

			$('body').on('click', ".calculadora li.start-time", function(){
				$("#"+nivel+"").find(".calculadora li").removeClass("start-time");
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
		                $("#"+nivel+" .operador-multiplicacao span em").html("*");
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