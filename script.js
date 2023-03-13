let toggleBtn = document.querySelector('.toggle-button');
let toggleBtnIcon = document.querySelector('.toggle-button i');
let dropdownMenu = document.querySelector('.dropdown_menu');


toggleBtn.addEventListener('click', () =>{
    dropdownMenu.classList.toggle("open");
    const isOpen = dropdownMenu.classList.contains('open');
    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
    
 })