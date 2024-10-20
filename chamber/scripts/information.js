const information = document.querySelector("#visit-message");

const lastVisit = localStorage.getItem('lastVisit');



function displayLastVisit() {
    const lastVisit = localStorage.getItem('lastVisit');
    let today = Date.now();
    const milisecondsInDay = 24*60*60*1000;

    if(lastVisit == null) {
        information.innerText = `Welcome! Let us know if you have any questions.`;
    }else {
        let timeSinceLastVisit = today - parseInt(lastVisit);
        if(timeSinceLastVisit < milisecondsInDay) {
            information.innerText = `Back so soon! Awesome!`;
        }else {
            let diffDays = Math.round(timeSinceLastVisit / milisecondsInDay);

            if(diffDays === 1){
                information.innerText = `You last visited ${diffDays} day ago.`;
            }else {
                information.innerText=`You last visited ${diffDays} days ago.`;
            }
        }
    }
}


displayLastVisit();