function eraseText() {
	var commentsForm = document.getElementById("commentsForm");
	commentsForm.textContent = "";
	commentsForm.style.color = "black";
}

function eraseText(ele) {
	var content = ele.textContent
	content = "";
}


{let i = 1;

	function resetContent(content) {
		document.getElementById(content).innerHTML = "";
		i = 1;
	}

	function manipulate() {
		console.log(1);
		var JSForm = document.getElementById("JSButton");
		var formValue = JSForm.value;
		console.log(formValue);
		var inputLog = document.getElementById("inputLog");
		if (formValue) {
			var msgDiv = document.createElement("div");
			var msg = document.createTextNode(i + ". You input '" + formValue +"'");
			i++;
			msgDiv.appendChild(msg);
			inputLog.appendChild(msgDiv);
			JSForm.value = "";
		} else {
			var errorDiv = document.createElement("div");
			var errorMsg = document.createTextNode("C'mon, give me something.");
			errorDiv.appendChild(errorMsg);
			inputLog.appendChild(errorDiv);
		}
		
			
		return false;
	}
}
/* function addEvent(el, event, callback) {
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
}()) */