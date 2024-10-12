const currentUrl = window.location.href;
const formData = currentUrl.split("?")[1].split("&");	
const thankyouData = document.querySelector("#data-coming-from-form");

function displayFormData(field){
    let result = "";
    formData.forEach(element => {
        if(element.startsWith(field)){
            result = element.split("=")[1].replace("%40","@");  
        }
    });
    return(result);
}

thankyouData.classList.add("thankyou-data");
thankyouData.innerHTML = `
<h2>Submission Successful!</h2>
<h3>Check your details: </h3>
<div class="submission-details">
<p><strong>Your Name:</strong> ${displayFormData("first")} ${displayFormData("last")}</p>
<p><strong>Your Email:</strong> ${displayFormData("email")}</p>
<p><strong>Your Phone:</strong> ${displayFormData("phone")}</p>
<p><strong>Your Title:</strong> ${displayFormData("title").replace("+", " ")}</p>
<p><strong>Your Business Name:</strong> ${displayFormData("business-name")}</p>
<p><strong>Your Membership Type:</strong> ${displayFormData("mem-type")}</p>
<p><strong>Date and Time completed:</strong> ${displayFormData("timestamp").replace("%", "+", "-", "")}</p>
</div>`;
