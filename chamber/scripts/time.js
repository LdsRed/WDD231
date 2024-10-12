document.addEventListener("DOMContentLoaded", () => {
    const timestamp = document.querySelector("#timestamp");
    const currentTime = new Date();

    const year = currentTime.getFullYear();
    const month = currentTime.getMonth() + 1;
    const day = currentTime.getDate();
    let hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const amPm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours || 12;
    const newMinutes = minutes < 10 ? '0' + minutes : minutes;

    
    timestamp.value = `${month}/${day}/${year} - ${hours}:${newMinutes} ${amPm}`;

});
