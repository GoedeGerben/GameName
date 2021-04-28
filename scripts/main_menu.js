const startButton = document.getElementById('startButton');
const optionsButton = document.getElementById('optionsButton');
const creditsButton = document.getElementById('creditsButton');

var EE = '';
var gameMode = '';

startButton.onclick = function(){start(gameMode);};
optionsButton.onclick = function(){options();};
creditsButton.onclick = function(){credits();};

function start(gm) {
	window.location.href = 'game.html';
}

function options() {

}

function credits() {

}

window.addEventListener('keydown', function (e) {
  console.log(e.key);
  egg(e);
}, false);

function egg(e) {
	if (e.key == 'Enter') {
		if (EE == 'egg') {
			gameMode = 'dev';
			console.log('dev mode activated');
		}else {
			EE = '';
		}
	}else {
		EE = EE + e.key;
	}
}