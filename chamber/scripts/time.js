document.addEventListener("DOMContentLoaded", () => {
    const timestamp = document.querySelector("#timestamp");
    const TODAY_DATE = new Date();
    const formatDate = new Intl.DateTimeFormat("en-US", {
        weekday: 'long',
        month: 'long',
        year:'2-digit',
        day:'2-digit'
    })

    timestamp.value = formatDate.format(TODAY_DATE);
});
