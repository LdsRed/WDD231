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


const memberJSON = './data/members.json';


async function fetchMembers(){
    const response = await fetch(memberJSON);
    const members = await response.json();
    displayMembers(members);
}




const displayMembers = (members) => {
    membersContainer.innerHTML = '';
    members.forEach(member => {
        const memberCard = document.createElement("div");
        memberCard.classList.add("member-card");

        memberCard.innerHTML = `
        <img src="./images/${member.icon}" alt="${member.name} Distribution loading="lazy" width="150" height="150">
        <h3 class="name">${member.name}</h3>
        <p class="address"><strong>Address:</strong> ${member.address}</p>
        <p class="phone"><strong>Phone:</strong> ${member.phone}</p>
        <p class="website"><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
        <p class="info"><strong>Info:</strong> ${member.additionalInfo}</p>
        `;

        const membership = document.createElement("p")
        membership.classList.add("membership");
        if(member.membership == 1) {
            membership.textContent = "Member";
        }
        if(member.membership == 2) {
            membership.classList.add("silver");
            membership.textContent = "Silver member";
        }
        if(member.membership == 3) {
            membership.classList.add("gold");
            membership.textContent = "Gold member";
        }

        memberCard.appendChild(membership);
        membersContainer.appendChild(memberCard);
    });
};  


fetchMembers();