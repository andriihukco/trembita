// variables

const newsQuery = document.getElementById("newsQuery");
const newsDetails = document.getElementById("newsDetails");

// Array
var newsDataArr = [];

// apis 
const API_KEY = "51df4137b5b849898945ee492a1038de";
const HEADLINES_NEWS = "https://newsapi.org/v2/top-headlines?country=ua&apiKey=";

window.onload = function() {
    newsType.innerHTML="";
    fetchHeadlines();
};

const fetchHeadlines = async () => {
    const response = await fetch(HEADLINES_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    }

    displayNews();
}

function displayNews() {

    newsDetails.innerHTML = "";

    // if(newsDataArr.length == 0) {
    //     newsDetails.innerHTML = "<h5>No data found.</h5>"
    //     return;
    // }

    newsDataArr.forEach(news => {

        var date = news.publishedAt.split("T");
        
        var col = document.createElement('div');
        col.className="col-12 bg-white mt-5";

        var card = document.createElement('div');

        var cardBody = document.createElement('card-body');

        var dateHeading = document.createElement('mark');
        dateHeading.innerHTML = date[0];

        var newsHeading = document.createElement('a');
        newsHeading.className="link text-dark m-2 h1";
        newsHeading.setAttribute("target", "_blank");
        newsHeading.href = news.url;
        newsHeading.innerHTML= news.title;

        cardBody.appendChild(dateHeading);
        cardBody.appendChild(newsHeading);
        card.appendChild(cardBody);
        col.appendChild(card);

        newsDetails.appendChild(col);
    });

}

