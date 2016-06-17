function eraseText() {
	var commentsForm = document.getElementById("commentsForm");
	commentsForm.textContent = "";
	commentsForm.style.color = "black";
}

function addEvent(el, event, callback) {
	if ('addEventListener' in el) {
		el.addEventListener(event, callback, false);
	} else {
		el['e' + event + callback] = callback;
		el[event + callback] = function() {
			el['e' + event + callback](window.event);
		};
		el.attachEvent('on' + event, el[event + callback]);
	}
}

(function() {
		var JSForm = document.getElementById("JSForm");
		
		addEvent(form, "submit", function(e) {
			e.preventDefault();
			var elements = this.elements;
			var buttonInput = elements.JSButton.value;
			var msg = "You input '" + buttonInput + "'. Is this input correct?";
			document.getElementById("main").textContent = msg;
		});
}())