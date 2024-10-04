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

export {fetchMembers, displayMembers};