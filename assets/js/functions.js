"use strict";

let setLocalStorage = function (obj, name) {
	let objInJSONFormat = JSON.stringify(obj);
	localStorage.setItem(name, objInJSONFormat);
	return objInJSONFormat;
}

let getLocalStorage = function (name) {
	let objGetInJSONFormat = localStorage.getItem(name);
	let obj = JSON.parse(objGetInJSONFormat);
	return obj;
}

let getIndexElem = function (array, value) {
	let index = array.map(function (key) {
		return key.id;
	}).indexOf(value);
	return index;
}