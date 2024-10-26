const latestNewsContainer = document.querySelector("#latest-news");
const latestPostsData = "data/latestPostsData.json";


async function loadLatestPosts() {
    const response = await fetch(latestPostsData);
    const data = await response.json();
    renderLatestPosts(data);
}


function renderLatestPosts(data) {
    //latestNewsContainer.innerHTML = '';


    data.forEach((item) => {
        const articleContainer = document.createElement("article");
        articleContainer.classList.add("article-container");

        articleContainer.innerHTML = `
            
            <div class="article-img">
                <img alt="${item.alt}" src="./images/${item.url}"  loading="lazy"/>
            </div>
        
            <div class="article-text-container">
                <div class="article-text-content">
                    <span>${item.subtitle}</span>
                    <h4> ${item.title} </h4>
                    <p>${item.author} - ${item.date}</p>
                </div>
            </div>
            `;

        latestNewsContainer.appendChild(articleContainer);
    });
}


loadLatestPosts();
