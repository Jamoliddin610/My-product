let elMenuBox = document.getElementById('menubox');
let elopenMenuBox = document.getElementById('openMenubox');
let elcloseMenuBox = document.getElementById('closeMenubox');
let ellogo = document.getElementById('logo');
let ellogofoot = document.getElementById('logoFoot');
let ellogonight = document.getElementById('logoNight');
let elmood =document.getElementById('night');
let elzindex = document.getElementById('zIndex');
let elfirstFaq = document.getElementById('faqFirst');
let elfirstMinus = document.getElementById('firstMinus');
let elsecondFaq = document.getElementById('faqSecond');
let elsecondMinus = document.getElementById('secondMinus');
let elthirdFaq = document.getElementById('faqThird');
let elthirdMinus = document.getElementById('thirdMinus');
let elfourthFaq = document.getElementById('faqFourth');
let elfourthMinus = document.getElementById('fourthMinus');

elopenMenuBox.addEventListener('click',function(){
    elMenuBox.classList.add('show');
    ellogo.classList.add('hidelogo');
    elcloseMenuBox.classList.add('modalX');
    elzindex.classList.add('index')

})
elcloseMenuBox.addEventListener('click',function(){
    elMenuBox.classList.remove('show');
    ellogo.classList.remove('hidelogo');
    elcloseMenuBox.classList.remove('modalX');
    elzindex.classList.remove('index')

})
elmood.addEventListener('click', function(){
    document.body.classList.toggle('dark');
    ellogonight.classList.toggle('logofornight');
    elopenMenuBox.classList.toggle('white');
    ellogofoot.classList.toggle('logofoot');
})
elsecondFaq.addEventListener('click', function () {
    elsecondFaq.classList.toggle('bigger');
    elsecondMinus.classList.toggle('rotate');        

})
elthirdFaq.addEventListener('click', function () {
    elthirdFaq.classList.toggle('bigger');
    elthirdMinus.classList.toggle('rotate');        

})
elfirstFaq.addEventListener('click', function () {
    elfirstFaq.classList.toggle('bigger');
    elfirstMinus.classList.toggle('rotate');        

})
elfourthFaq.addEventListener('click', function () {
    elfourthFaq.classList.toggle('bigger');
    elfourthMinus.classList.toggle('rotate');        

})