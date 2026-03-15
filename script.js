document.querySelectorAll('.nav-links a').forEach(function(link){

link.addEventListener('click', function(e){

e.preventDefault();

const target = document.querySelector(this.getAttribute('href'));

target.scrollIntoView({
behavior:'smooth'
});

});

});

const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', function(){

sections.forEach(function(section){

const sectionTop = section.getBoundingClientRect().top;

if(sectionTop < window.innerHeight - 100){
section.classList.add('show');
}

});

});
