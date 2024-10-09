document.getElementById('menu-toggle').addEventListener('click', () => {
    const menu = document.getElementById('main-menu');  
    if (menu.style.display === 'flex') {
         menu.style.display = 'none'; 
    }else{
     menu.style.display = 'flex';
    }
 });
 