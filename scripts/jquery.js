function $$$(selectors) {
    return document.querySelectorAll(selectors);
}

function $$(selector){
	return document.querySelector(selector);
}

function setValue(elements){
	for (var i = 0; i < elements.length; i++) {
			elements[i].checked = 1;
	}
}

Object.prototype.on = function(e, f) {
	this.addEventListener(e, f);
	return this;
}

Object.prototype.off = function(e, f) {
	this.removeEventListener(e, f);
	return this;
}
Object.prototype.attr = function(attribute, value) {
		this.setAttribute(attribute, value);
		return this;
}
function log(text){
	return console.log(text);
}
