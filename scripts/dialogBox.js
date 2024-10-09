function displayCourseDetails(certificate, tag){
    const dialogBox = document.createElement("dialog");
    const closeButton = document.createElement("button");
    closeButton.innerHTML = "&times";


    dialogBox.innerHTML = `
    <div class="modal-header"> 
        <h2>${certificate.subject} ${certificate.number}</h2>
        <h3>${certificate.title}</h3>
    </div>
    <p><strong>Credits</strong>: ${certificate.credits}</p>
    <p><strong>Certificate</strong>: ${certificate.certificate}</p>
    <p>${certificate.description}</p>
    <p>Prerequisites: ${certificate.prerequisites}</p>
    <p><strong>Technologies</strong>: ${certificate.technology.join(", ")}</p>
    `;
    
    dialogBox.querySelector(".modal-header").appendChild(closeButton);
    tag.appendChild(dialogBox);
    dialogBox.showModal();

    closeButton.addEventListener("click", () => {
        dialogBox.close();
        dialogBox.remove();
    });

    dialogBox.addEventListener("click", (event) => {
        if (event.target === dialogBox) {
            dialogBox.close();
            dialogBox.remove();
        }
    });
    
};


export {displayCourseDetails};