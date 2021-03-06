﻿<!DOCTYPE html>
<html class="introducao" lang="en">
<head>
	<meta charset="UTF-8">
	<title>Pirata Matemático</title>
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="viewport" content="initial-scale=1.0, maximum-scale=2.0, width=device-width" />
	<link rel="stylesheet" href="build/css/main.css?v=3.0.4">
	<script src="https://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60=" crossorigin="anonymous"></script>
	<link href="https://fonts.googleapis.com/css?family=Mouse+Memoirs" rel="stylesheet">
	<link rel="apple-touch-icon" sizes="120x120" href="favicon/apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png">
	<link rel="manifest" href="favicon/site.webmanifest">
	<link rel="mask-icon" href="favicon/safari-pinned-tab.svg" color="#5bbad5">
	<meta name="msapplication-TileColor" content="#f39e32">
	<meta name="theme-color" content="#f39e32">
	<meta name="msapplication-navbutton-color" content="#f39e32">
	<meta name="apple-mobile-web-app-status-bar-style" content="#f39e32">
	
	<!-- SEO -->

	<meta property="og:locale" content="pt_BR" />
    <meta property="og:type" content="article" />
    <meta property="og:title" content="Um jogo para você exercitar sua mente" />
    <meta property="og:description" content="Resolva cálculos e escape da ilha!" />
    <meta property="og:url" content="https://www.piratamatematico.com.br/" />
    <meta property="article:published_time" content="2017-08-05T14:42:54+00:00" />
    <meta property="og:image" content="https://www.piratamatematico.com.br/src/images/share.png" />
    <meta property="og:image:secure_url" content="https://www.piratamatematico.com.br/src/images/share.png" />
    <meta property="og:image:width" content="828" />
    <meta property="og:image:height" content="433" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:description" content="Um jogo para você exercitar sua mente" />
    <meta name="twitter:title" content="Resolva cálculos e escape da ilha!" />
    <meta name="twitter:image" content="https://www.piratamatematico.com.br/src/images/share.png" />

	<!-- Global site tag (gtag.js) - Google Analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-122084743-1"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());

		gtag('config', 'UA-122084743-1');
	</script>

</head>


<body class="intro">
	<div class="tela-principal">
	<div class="slider-container">
		<div class="slider-control left inactive"></div>
		<div class="slider-control right"></div>
		<ul class="slider-pagi"></ul>
		<div class="slider">
			<div class="slide slide-0 active">

				<div class="slide__content">
					<div class="slide__text">
						<p>Era uma vez...<br>Um pirata que encalhou seu navio em uma grande ilha...</p>
					</div>
				</div>
			</div>
			<div class="slide slide-1 ">
				<div class="slide__content">
					<div class="slide__text">
						<p>Para escapar desta ilha, foi lançado um desafio para resolver cálculos matemáticos...</p>
					</div>
				</div>
			</div>
			<div class="slide slide-2">
				<div class="slide__content">
					<div class="slide__text">
						<p>O navio está destruído.... A única alternativa para escapar desta ilha é pelo submarino...</p>
					</div>
				</div>
			</div>
		</div>
		<span class="pular">Pular</span>
	</div>


	<div id="game">
		<div class="screen-hidden">
			<div class="status-jogo">
				<span class="title"><i class="number">0</i> <i class="text">estrelas conquistadas</i></span>
				<span class="title-nivel"><i class="number">1</i> <i class="text">nível desbloqueado</i></span>
			</div>
			<div class="status-jogo status-share">
				<ul class="share-social">
					<li class="facebook-icon"><a href="https://www.facebook.com/piratamatematico" target="_blank" title="Facebook">Facebook</a></li>
					<li class="instagram-icon"><a href="https://www.instagram.com/piratamatematico" target="_">Instagram</a></li>
					<li class="youtube-icon"><a href="https://www.youtube.com/jamesrmoro?sub_confirmation=1" target="_blank" title="Youtube">Veja como foi feito</a></li>
				</ul>
			</div>
			<div class="status-jogo feedback">
				<ul>
					<li class="modal-feedback">Enviar comentário p/ o autor</li>
				</ul>
			</div>
			<div class="msg-feedback">
				<div class="wrapper">
					<div class="close-comment"></div>
					
					<script>

					/**
					*  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
					*  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/
					
					var disqus_config = function () {
					this.page.url = "https://www.piratamatematico.com.br";  // Replace PAGE_URL with your page's canonical URL variable
					this.page.identifier = "versao2"; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
					};

					
					
					(function() { // DON'T EDIT BELOW THIS LINE
					var d = document, s = d.createElement('script');
					s.src = 'https://pirata-matematico.disqus.com/embed.js';
					s.setAttribute('data-timestamp', +new Date());
					(d.head || d.body).appendChild(s);
					})();
					</script>
					<div id="disqus_thread_parent"><div id="disqus_thread"></div></div>
					<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
                            
				</div>
			</div>
		</div>

		<div class="tela tela-1">
			<div class="wrapper-button">
				<span class="button button-start">Jogar</span>
				<!-- <span class="button button-api">Conectar com Google</span> -->
				<i class="criador">Criado por <a href="https://jamesrmoro.github.io" target="_blank" title="James Moro">James Moro</a></i>
			</div>
		</div>
		<div class="tela tela-2">
			<div class="content-center">
				<div class="logo">
					<img src="src/images/logo.png" alt="">
				</div>
				<div class="msg-load">
					<p>Colocando as pilhas <br>na calculadora...</p>
				</div>
			</div>
		</div>
		<div class="tela tela-3">
			<div class="conteudo">

				<div class="clouds">

					<span class="click-down">
						Seu objetivo é chegar neste submarino abaixo. Resolva cálculos e fuja da ilha antes da grande onda chegar. <i>x</i><strong>Começar</strong></span>

					<div class="bg-noite">
						<div class="stars"></div>
						<div class="twinkling"></div>
					</div>

					<div class="cloud c1"></div>
					<div class="cloud c2"></div>
					<div class="cloud c3"></div>
					<div class="cloud c4"></div>
					<div class="cloud c5"></div>
				</div>
				<canvas id="onda" class="onda"></canvas>
				<div class="sea">
			        <div class="submarine-wrapper">
			            <div class="submarine-body">
			                <div class="janela janela1"></div>
			                <div class="janela janela2"></div>
			                <div class="motor"></div>
			            </div>
			            <div class="helice"></div>
			            <div class="topo-cabine">
			              <div class="luzes-area">
			                  <div class="cano"></div>
			                  <div class="luzes"></div>
			              </div>
			            </div>
			        </div>

				</div>

				<div class="status-top">
					<div class="item item-left msg-game-over"><img src="src/images/compass.svg" alt="Mapa"></div>
					<div class="item item-right"><img src="src/images/settings.svg" alt="Configurações"></div>
					<audio id="player" loop="true">
    					<source src="musica/trilha.mp3" />
                        <source src="musica/trilha.m4a" />
					    <source src="musica/trilha.ogg" />
  					</audio>
  					<span id="button" class="button-song active"></span>
  					<span class="msg-life">Vidas</span>
					<ul class="lifes vidas">
						<li class="heart"><i>1</i></li>
						<li class="heart"><i>2</i></li>
						<li class="heart"><i>3</i></li>
						<li class="heart"><i>4</i></li>
						<li class="heart"><i>5</i></li>
					</ul>
				</div>
				<div id="number" class="numero-niveis"></div>
				<div id="controle"></div>
				<div class="nome"></div>
				<div class="total-star"></div>
				<ul class="niveis-controle">
					<li id="c-nivel-70" data-n="70" class="bloqueado">70</li>
					<li id="c-nivel-69" data-n="69" class="bloqueado">69</li>
					<li id="c-nivel-68" data-n="68" class="bloqueado">68</li>
					<li id="c-nivel-67" data-n="67" class="bloqueado">67</li>
					<li id="c-nivel-66" data-n="66" class="bloqueado">66</li>
					<li id="c-nivel-65" data-n="65" class="bloqueado">65</li>
					<li id="c-nivel-64" data-n="64" class="bloqueado">64</li>
					<li id="c-nivel-63" data-n="63" class="bloqueado">63</li>
					<li id="c-nivel-62" data-n="62" class="bloqueado">62</li>
					<li id="c-nivel-61" data-n="61" class="bloqueado">61</li>
					<li id="c-nivel-60" data-n="60" class="bloqueado">60</li>
					<li id="c-nivel-59" data-n="59" class="bloqueado">59</li>
					<li id="c-nivel-58" data-n="58" class="bloqueado">58</li>
					<li id="c-nivel-57" data-n="57" class="bloqueado">57</li>
					<li id="c-nivel-56" data-n="56" class="bloqueado">56</li>
					<li id="c-nivel-55" data-n="55" class="bloqueado">55</li>
					<li id="c-nivel-54" data-n="54" class="bloqueado">54</li>
					<li id="c-nivel-53" data-n="53" class="bloqueado">53</li>
					<li id="c-nivel-52" data-n="52" class="bloqueado">52</li>
					<li id="c-nivel-51" data-n="51" class="bloqueado">51</li>
					<li id="c-nivel-50" data-n="50" class="bloqueado">50</li>
					<li id="c-nivel-49" data-n="49" class="bloqueado">49</li>
					<li id="c-nivel-48" data-n="48" class="bloqueado">48</li>
					<li id="c-nivel-47" data-n="47" class="bloqueado">47</li>
					<li id="c-nivel-46" data-n="46" class="bloqueado">46</li>
					<li id="c-nivel-45" data-n="45" class="bloqueado">45</li>
					<li id="c-nivel-44" data-n="44" class="bloqueado">44</li>
					<li id="c-nivel-43" data-n="43" class="bloqueado">43</li>
					<li id="c-nivel-42" data-n="42" class="bloqueado">42</li>
					<li id="c-nivel-41" data-n="41" class="bloqueado">41</li>
					<li id="c-nivel-40" data-n="40" class="bloqueado">40</li>
					<li id="c-nivel-39" data-n="39" class="bloqueado">39</li>
					<li id="c-nivel-38" data-n="38" class="bloqueado">38</li>
					<li id="c-nivel-37" data-n="37" class="bloqueado">37</li>
					<li id="c-nivel-36" data-n="36" class="bloqueado">36</li>
					<li id="c-nivel-35" data-n="35" class="bloqueado">35</li>
					<li id="c-nivel-34" data-n="34" class="bloqueado">34</li>
					<li id="c-nivel-33" data-n="33" class="bloqueado">33</li>
					<li id="c-nivel-32" data-n="32" class="bloqueado">32</li>
					<li id="c-nivel-31" data-n="31" class="bloqueado">31</li>
					<li id="c-nivel-30" data-n="30" class="bloqueado">30</li>
					<li id="c-nivel-29" data-n="29" class="bloqueado">29</li>
					<li id="c-nivel-28" data-n="28" class="bloqueado">28</li>
					<li id="c-nivel-27" data-n="27" class="bloqueado">27</li>
					<li id="c-nivel-26" data-n="26" class="bloqueado">26</li>
					<li id="c-nivel-25" data-n="25" class="bloqueado">25</li>
					<li id="c-nivel-24" data-n="24" class="bloqueado">24</li>
					<li id="c-nivel-23" data-n="23" class="bloqueado">23</li>
					<li id="c-nivel-22" data-n="22" class="bloqueado">22</li>
					<li id="c-nivel-21" data-n="21" class="bloqueado">21</li>
					<li id="c-nivel-20" data-n="20">20 <span class="msg"><strong>Quase lá!</strong>Falta pouco<br>para entrar <br>no submarino</span></li>
					<li id="c-nivel-19" data-n="19" class="bloqueado">19</li>
					<li id="c-nivel-18" data-n="18" class="bloqueado">18</li>
					<li id="c-nivel-17" data-n="17" class="bloqueado">17</li>
					<li id="c-nivel-16" data-n="16" class="bloqueado">16</li>
					<li id="c-nivel-15" data-n="15" class="bloqueado">15</li>
					<li id="c-nivel-14" data-n="14" class="bloqueado">14</li>
					<li id="c-nivel-13" data-n="13" class="bloqueado">13</li>
					<li id="c-nivel-12" data-n="12" class="bloqueado">12</li>
					<li id="c-nivel-11" data-n="11" class="bloqueado">11</li>
					<li id="c-nivel-10" data-n="10" class="bloqueado">10</li>
					<li id="c-nivel-9" data-n="9" class="bloqueado">09</li>
					<li id="c-nivel-8" data-n="8" class="bloqueado">08</li>
					<li id="c-nivel-7" data-n="7" class="bloqueado">07</li>
					<li id="c-nivel-6" data-n="6" class="bloqueado">06</li>
					<li id="c-nivel-5" data-n="5" class="bloqueado">05</li>
					<li id="c-nivel-4" data-n="4" class="bloqueado">04</li>
					<li id="c-nivel-3" data-n="3" class="bloqueado">03</li>
					<li id="c-nivel-2" data-n="2" class="bloqueado">02</li>
					<li id="c-nivel-1" data-n="1" class="first desbloqueado">01</li>
				</ul>
			</div>
		</div>
	</div>
	<div id="loading" style="display: block">
		<div class="content">
			<img src="src/images/loading.gif" alt="Carregando">
			<span>Acordando o Pirata<br> <strong>Aguarde...</strong></span>
		</div>
	</div>
	<script src="build/js/script.js"></script>
		<script type="text/javascript">
		function id(el) {
			return document.getElementById(el);
		}
		function hide(el) {
			id(el).style.display = 'none'; //escondendo tudo
		}
		window.onload = function() {
			id('game').style.display = 'block'; //liberando quando terminar de carregar
			hide('loading');
		}
	</script>
	<script type="text/javascript">
		hide('game');
	</script>
</div>
<script id="dsq-count-scr" src="//pirata-matematico.disqus.com/count.js" async></script>
</body>
</html>