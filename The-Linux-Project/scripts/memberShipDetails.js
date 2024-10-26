function displayMemberShipDetails(level, tagElement){

    const dialogBox = document.createElement("dialog");
    const closeButton = document.createElement("button");
    closeButton.innerHTML = "Close";


    dialogBox.innerHTML = `
    <div class="modal-header"> 
        <h4>${level.title}</h4>
    </div>
    <div class="modal-body-details">
        <div class="benefits">
        <p><strong>Benefits</strong>:</p>
        <ul>
            ${level.benefits.map(benefit => `<li>${benefit}</li>`).join("")}
        </ul>
        </div>
        <p><strong>Cost</strong>: ${level.cost}</p>
    </div>
    `;
    
    dialogBox.querySelector(".modal-body-details").appendChild(closeButton);
    tagElement.appendChild(dialogBox);
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
    
}

export {displayMemberShipDetails};