"use strict";
document.body.style.background = "#6c6c6c";

class Button {
	constructor(parentElement, elementType = "button", text, bgColor, className, order) {
		this.element = document.createElement(elementType);
		this.element.textContent = text;
		this.element.style.order = order;
		this.element.style.background = bgColor;
		this.element.classList.add(className);
		parentElement.append(this.element);
	}
}

class AddButtonToPage extends Button {
	constructor(parentElement, elementType = "button", text, bgColor, className) {
		super(parentElement, elementType = "button", text, bgColor, className);
	}
	plusCounter() {
		this.element.onclick = () => {
			const counter = document.querySelector("span");
			counter.textContent = parseInt(counter.textContent) + 1;
		};
	}
	minusCounter() {
		this.element.onclick = () => {
			const counter = document.querySelector("span");
			counter.textContent = parseInt(counter.textContent) - 1;
		};
	}
	resetCounter() {
		this.element.onclick = () => {
			const counter = document.querySelector("span");
			counter.textContent = 0;
		};
	}
} 
class CreateCounterPage {
	constructor(parentElement, elementType = "div", className) {
		this.element = document.createElement(elementType);
		this.element.classList.add(className);
		parentElement.append(this.element);

		const btnPlus = new AddButtonToPage(
			this.element,
			"button",
			"plus",
			"green",
			"main-button",
			"1",
		).plusCounter();

		const btnMinus = new AddButtonToPage(
			this.element,
			"button",
			"minus",
			"red",
			"main-button",
			"2",
		).minusCounter();

		const btnReset = new AddButtonToPage(
			this.element,
			"button",
			"reset",
			"blue",
			"main-button"
		).resetCounter();
	}

	createCounterInit() {
		const counter = document.createElement("span");
		counter.textContent = 0;
		this.element.append(counter);
	}
}


const counterPage = new CreateCounterPage(
	document.body,
	"div",
	"counter-page"
).createCounterInit();

