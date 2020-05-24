/*
* Copyright 2020 Joan Dolz
*
* Permission is hereby granted, free of charge, to any person obtaining a copy of
* this software and associated documentation files (the "Software"), to deal in
* the Software without restriction, including without limitation the rights to
* use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
* of the Software, and to permit persons to whom the Software is furnished to do
* so, subject to the following conditions:

* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.

* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
* THE SOFTWARE.
*/

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