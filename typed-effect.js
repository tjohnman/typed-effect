document.addEventListener('DOMContentLoaded', function(e) {
	document.querySelectorAll('.typed-effect').forEach(function(el) {
		const words = el.dataset.words.split(',');
		let index = 0;

		function deleteCharacter() {
			if(el.innerHTML.length) {
				el.innerHTML = el.innerHTML.substr(0, el.innerHTML.length - 1);
				setTimeout(deleteCharacter, 40);
			} else {
				writeCharacter();
			}
		}

		function writeCharacter() {
			if(el.innerHTML == words[index]) {
				index = (index + 1) % words.length;
				setTimeout(deleteCharacter, 1800);
			} else {
				el.innerHTML = words[index].substr(0, el.innerHTML.length + 1);
				setTimeout(writeCharacter, 100);
			}
		}

		setTimeout(deleteCharacter, 1800);
	});
});