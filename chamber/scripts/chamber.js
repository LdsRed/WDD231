document.getElementById('currentyear').innerText = new Date().getFullYear();
document.getElementById('lastModified').innerText = "Last modified: " + document.lastModified;

const listView = document.querySelector('#list-view');
const membersContainer = document.querySelector('#members-container');


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
        <h3>${member.name}</h3>
        <p><strong>Address:</strong> ${member.address}</p>
        <p><strong>Phone:</strong> ${member.phone}</p>
        <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
        <p><strong>Info:</strong> ${member.additionalInfo}</p>
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