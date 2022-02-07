let elMenuBox = document.getElementById('menubox');
let elopenMenuBox = document.getElementById('openMenubox');
let elcloseMenuBox = document.getElementById('closeMenubox');
let ellogo = document.getElementById('logo');
let ellogofoot = document.getElementById('logoFoot');
let ellogonight = document.getElementById('logoNight');
let elmood =document.getElementById('night');
let elzindex = document.getElementById('zIndex')

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