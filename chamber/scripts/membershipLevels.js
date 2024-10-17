import {displayMemberShipDetails} from "./memberShipDetails.js";

const membershipLevelsJSON = "./data/membership-levels.json";
const membershipLevelsContainer = document.querySelector("#membership-levels");
const joinForm = document.querySelector("#join-form");
const timestamp = document.querySelector("#timestamp");

async function displayMembershipLevels(){
    const response = await fetch(membershipLevelsJSON); 
    const data = await response.json();
    renderMembershipLevels(data);
}

function renderMembershipLevels(membershipLevels){
    

    for(let i = 0; i < membershipLevels.length; i++){
        const membershipCardDiv = document.createElement("div");
        membershipCardDiv.classList.add("membership-card");
        const membershipCardTitle = document.createElement("h3");
        const membershipCardButton = document.createElement("button");
        membershipCardButton.classList.add("learn-more-btn-car-membership");
        membershipCardButton.classList.add("uppercase");


        membershipCardDiv.appendChild(membershipCardTitle);
        membershipCardDiv.appendChild(membershipCardButton);
        membershipCardTitle.textContent = membershipLevels[i].title;
        membershipCardButton.textContent = "Learn More";

        membershipLevelsContainer.appendChild(membershipCardDiv);

        membershipCardButton.addEventListener("click", () => {
            displayMemberShipDetails(membershipLevels[i], membershipCardDiv);
        });
    }        
}

joinForm.addEventListener('submit', () => {
    timestamp.value = Date.now();
})


displayMembershipLevels();