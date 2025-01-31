const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');
const header = document.getElementById('header');
const menuOne = document.getElementById('menuOne');
const menuTwo = document.getElementById('menuTwo');
const menuTree = document.getElementById('menuTree');

let scrollEnabled = false;

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('opacity-0');
  menu.classList.toggle('-translate-y-full');
  header.classList.toggle('bg-color-primary');
  
  header.classList.toggle('h-screen');
  header.classList.toggle('h-32');
  
  menuOne.classList.toggle('-rotate-45');
  menuOne.classList.toggle('translate-y-[7px]');
  menuTwo.classList.toggle('hidden');
  menuTree.classList.toggle('rotate-45');
  menuTree.classList.toggle('-translate-y-[7px]');

  scrollEnabled = !scrollEnabled;
  if (scrollEnabled) document.body.style.overflow = 'hidden';
  else document.body.style.overflow = '';
});