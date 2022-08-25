
function DOM (elements) {
    this.element = document.querySelectorAll(elements);
}



DOM.prototype.on = function on (typeEvent , callback) {
    Array.prototype.forEach.call(this.element , function(element){
        element.addEventListener(typeEvent , callback , false);
    });
}

DOM.prototype.off = function off (typeEvent , callback) {
    Array.prototype.forEach.call(this.element , function(element){
        element.removeEventListener(typeEvent , callback , false);
    });
}

DOM.prototype.get = function get() {
    return this.element;
} 

DOM.prototype.forEach = function forEach () {
    return Array.prototype.forEach.apply(this.element , arguments)
}

DOM.prototype.map = function map () {
    return Array.prototype.map.apply(this.element , arguments)
}

DOM.prototype.filter = function filter () {
    return Array.prototype.filter.apply(this.element , arguments)
}

DOM.prototype.reduce = function reduce () {
    return Array.prototype.reduce.apply(this.element , arguments)
}

DOM.prototype.reduceRigth = function reduceRigth () {
    return Array.prototype.reduceRight.apply(this.element , arguments)
}

DOM.prototype.every = function every () {
    return Array.prototype.every.apply(this.element , arguments)
}

DOM.prototype.some = function some() {
    return Array.prototype.some.apply(this.element , arguments)
}


DOM.isArray = function isArray (param) {
    return Object.prototype.toString.call(param) === '[object Array]';
}

DOM.isObject = function isObject (param) {
    return Object.prototype.toString.call(param) === '[object Object]';
}

DOM.isFunction = function isFunction (param) {
    return Object.prototype.toString.call(param) === '[object Function]';
}

DOM.isNumber = function isNumber(param) {
    return Object.prototype.toString.call(param) === '[object Number]';
}

DOM.isString = function isString(param) {
    return Object.prototype.toString.call(param) === '[object String]';
}

DOM.isBoolean = function isBoolean (param) {
    return Object.prototype.toString.call(param) === '[object Boolean]';
}

DOM.isNullorUndefined = function isNullorUndefined (param) {
    return Object.prototype.toString.call(param) === '[object Array]' 
    || Object.prototype.toString.call(param) === '[object Undefined]'
}

DOM.isArray();

DOM.isObject();

DOM.isFunction();

DOM.isNumber();

DOM.isString();

DOM.isBoolean();

DOM.isNullorUndefined();



const $toggles = new DOM('[data-js="toggles"]')
const $links = new DOM ('nav ul li a');
const $linksTwo = new DOM ('nav ul li a');
const $header = new DOM ('[ data-js="header"]'); 

const $nav = document.querySelector('[ data-js="container-menu"]');
const navHeight = $header.offsetHeight;




$toggles.on('click' , function(event){
    $nav.classList.toggle('show');
})


$links.on('click' , function(event){
    $nav.classList.remove('show');
})


$header.on('scroll' , function(event){
    if(window.scrollY >= navHeight) {
        $header.classList.add('scroll');
    }else {
        $header.classList.remove('scroll');
    }
})












