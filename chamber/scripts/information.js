const information = document.querySelector("#visit-message");
const today = Date.now();

const lastVisit = localStorage.getItem('lastVisit');



function displayLastVisit() {
    const lastVisit = localStorage.getItem('lastVisit');

    if(lastVisit == null) {
        information.innerText = "No last Visit";
        console.log("NO LAST VISIT");
    }
}


displayLastVisit();