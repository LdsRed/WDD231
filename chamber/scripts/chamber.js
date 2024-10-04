document.getElementById('currentyear').innerText = new Date().getFullYear();
document.getElementById('lastModified').innerText = "Last modified: " + document.lastModified;

const listView = document.querySelector('#list-view');
const membersContainer = document.querySelector('#members-container');
const hambMenu = document.querySelector('#menu-toggle');


//Event Listener Hamburger Menu
hambMenu.addEventListener('click', () => {
    const menu = document.getElementById('main-menu');  
    if (menu.style.display === 'flex') {
         menu.style.display = 'none'; 
    }else{
     menu.style.display = 'flex';
    }
 });
 

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}


//Toggle List View
listView.addEventListener('click', () =>{
    membersContainer.classList.toggle('list');
});


