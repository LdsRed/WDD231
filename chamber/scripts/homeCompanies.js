const homeMembers = document.querySelector("#company-spotlight");
const memberJSON = './data/members.json';




async function fetchPremiumMembers(){
    let premiumMembers = [];
    try{
    const response = await fetch(memberJSON);
    if (response.ok) {
        premiumMembers = await response.json();
        premiumMembers = premiumMembers.filter( member => member.membership > 1);
        displayPremiumMembers(premiumMembers);
    }
    }catch(error){
        console.log(error);
    }
}

function getMembershipClass(member){
    switch(member.membership){
        case 1:
            return "member";
        case 2:
            return "silver";
        case 3:
            return "gold";
        default:
            return "member";
    }
}

function getMembershipContent(member){
    switch(member.membership){
        case 1:
            return "Member";
        case 2:
            return "Silver member";
        case 3:
            return "Gold member";
        default:
            return "Member";
    }
}

const displayPremiumMembers = (members) => {
    homeMembers.innerHTML = '';
    const shuffleMembers = members.sort(() => Math.random() - 0.5);

    shuffleMembers.length = 3
    shuffleMembers.forEach(member => {
        const memberCard = document.createElement("div");
        memberCard.classList.add("premium-member-card");

        memberCard.innerHTML = `
        <div class="member-image">
        <img src="./images/${member.icon}" alt="${member.name} Distribution loading="lazy">
        </div>

        <div class="member-info">
        <h3 class="name">${member.name}</h3>
        <p class="address"><strong>Address:</strong> ${member.address}</p>
        <p class="phone"><strong>Phone:</strong> ${member.phone}</p>
        <p class="website"><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
        <p class="info"><strong>Info:</strong> ${member.additionalInfo}</p>
        <p class="membership member-type ${getMembershipClass(member)}">${getMembershipContent(member)}</p>
        </div>
        `;
        homeMembers.appendChild(memberCard);
    });
};  


fetchPremiumMembers();
