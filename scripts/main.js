var character = document.getElementById('character');
var enemy = document.getElementById('enemy');
var canMove = true;
character.style.marginLeft = "1vw";
enemy.style.marginLeft = "52vw";
enemy.onclick = function(){hit();};

window.addEventListener('keydown', function (e) {
  move(e);
}, false);

function move(direction) {
	if (direction.key == 'd' && canMove == true) {
		console.log(direction.key)
		character.style.marginLeft = parseInt(character.style.marginLeft, 10) + 1.5 + "vw";
		canMove = false;
		setTimeout(function(){canMove = true},50)
	}

	if (direction.key == 'a' && canMove == true) {
		console.log(direction.key)
		character.style.marginLeft = parseInt(character.style.marginLeft, 10) - 1.5 + "vw";
		canMove = false;
		setTimeout(function(){canMove = true},50)
	}
}

function hit() {
	if ((parseInt(character.style.marginLeft) - parseInt(enemy.style.marginLeft)) <= 15 && (parseInt(character.style.marginLeft) - parseInt(enemy.style.marginLeft)) >= -15) {
		console.log('hit')
	}else{
		console.log('miss')
	}
}