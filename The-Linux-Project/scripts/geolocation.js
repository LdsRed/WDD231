const key = "a3554f8ce263449d90d9ce56855d0f3d";
const geolocationURL = "https://api.ipgeolocation.io";


const geolocationContainer = document.getElementById('geolocation');

async function getGeolocationData() {

    try {
        const response = await fetch(`${geolocationURL}/ipgeo?apiKey=${key}`);
        const data = await response.json();
        displayGeolocationDetails(data);
    }catch (error) {
        console.log(error);
    }
}

function displayGeolocationDetails(data) {
    geolocationContainer.innerHTML =`
        <h4>Information about you:</h4>
        <ul>
            <li><span>Your IP:</span> ${data.ip}</li>
            <li><span>Your Country:</span> ${data.country_code3}</li>
            <li><span>Country Capital:</span> ${data.country_capital}</li>
            <li><span>Your State:</span> ${data.state_prov}</li>
            <li><span>City:</span> ${data.city}</li>
            <li><span>Currency:</span> ${data.currency.code}</li>
            <li><span>Language:</span> ${data.languages}</li>
        </ul>
        <div class="awards">
            <p>This information is provided thanks to <strong>Ipgeolocation</strong> API</p>
            <p>This is Free IP Geolocation API and Accurate IP Lookup Database</p>
            <p>Feel free to visit<a href="https://ipgeolocation.io/">https://ipgeolocation.io/</a></p>
        </div>
    ` ;
}




getGeolocationData();