const newsData = "data/widget-news.json";
const newsContainer = document.getElementById("news-container-items");



async function loadNews() {
    const response = await fetch(newsData);
    const data = await response.json();
    renderNews(data);
}


function renderNews(data) {
    //newsContainer.innerHTML = '';

    const newsContainerArticles = document.createElement("div");
    newsContainerArticles.classList.add("news-container-articles");
    newsContainerArticles.setAttribute("id", "news-container-articles");
    newsContainer.appendChild(newsContainerArticles);

    data.forEach((item) => {
        const recentNewsCard = document.createElement("section");
        recentNewsCard.classList.add("section-news");

        recentNewsCard.innerHTML = `
            <div class="img-section-news">
                <img src="./images/${item.url}" alt="${item.alt}" width="100" height="100" loading="lazy">
            </div>
            <div class="section-news-content">
                <span>${item.subtitle}</span>
                <h4>${item.title}</h4>
            </div>`;

        newsContainerArticles.appendChild(recentNewsCard);
    });
}


document.addEventListener("DOMContentLoaded", () => {
    loadNews();
});