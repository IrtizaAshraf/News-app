
// crete th e variavbel in news app ----------------->


const search = document.querySelector('#search');
const input = document.querySelector('.form-control');
const cardsBox = document.querySelector('.container');
const head = document.querySelector(".head")
let allNews = [];


search.addEventListener('submit', async (e) => {
    e.preventDefault();
  /// passt the news API in Axios mehthod -------------->
    try {
        let News = await axios.get(`https://newsapi.org/v2/everything?q=${input.value}&apiKey=c503b61ff6f0498faae701d558977fb2`);
        console.log(News.data);
        // slice the news DATA in api ----------------->
        News = News.data.articles.slice(0, 20);
        console.log(News);
        /// spread the news ARRY in ALLARRY ------->
        allNews = [...News];
    


        // Clear existing cards---------->
        cardsBox.innerHTML = '';

        // create the conditon in spelling misktake ----------->
        if (News.length === 0) {
            cardsBox.innerHTML = '<p class="mt-4 text-2xl fw-bolder text-light ">No news articles found for the given query.</p>';
        } else {
            /// render the card in display --------------->
            head.innerHTML = `${input.value}  News`
            News.forEach((item, i) => { // Add index 'i' here
                ///create the element in discript in .......---------->
                const limitedDescription = item.description && item.description.length > 50
                    ? `${item.description.slice(0, 50)}...`
                    : item.description;
                const limitedTitle = item.title && item.title.length > 20
                    ? `${item.title.slice(0, 20)}...`
                    : item.title;
                cardsBox.innerHTML += `
                <div class="card grid gap-3" style="width: 20rem;">
                    <img class="images" src="${item.urlToImage ? item.urlToImage : 'https://img.freepik.com/free-vector/technology-background-with-earth-circuit-diagram_1017-19385.jpg'}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${limitedTitle}</h5>
                        <p class="card-text">${limitedDescription}</p>
                        <button onclick="MoreData(${i})" class="btn btn-primary">Read More</button>
                    </div>
                </div>
            `;
            });
        }
        input.value = '';
      // errore handle 
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});

//// more detail function create in localstorage ------------>

// function MoreData(i) {
    //     let oneNews = allNews[i];
    //     console.log(oneNews);
    
    //     const newss = JSON.stringify(oneNews);
    //     localStorage.setItem('new', newss);
    
    //     window.location = 'news.html';
    // }
    
    
    // relode the funtion in news api but no sole the issue -------->
    window.onbeforeunload = function () {
        localStorage.setItem('new', JSON.stringify(oneNews));
    };
    
    //// more detail function create in seccssionstorage ------------>
function MoreData(i) {
    let oneNews = allNews[i];
    console.log(oneNews);

    const newss = JSON.stringify(oneNews);
    sessionStorage.setItem('new', newss); 

    window.location = 'news.html';
}












/// paractice another mehthod -------------------------------> 

// function MoreData(i) {
//     // Check if data exists in localStorage
//     const storedData = sessionStorage.getItem('new');

//     if (storedData) {
//         // Use the existing data from localStorage
//         const moreinfo = JSON.parse(storedData);
//         displayNews(moreinfo);
//     } else {
//         // If data doesn't exist in localStorage, fetch it and store in localStorage
//         let oneNews = allNews[i];
//         console.log(oneNews);

//         const newss = JSON.stringify(oneNews);
//         sessionStorage.setItem('new', newss);

//         displayNews(oneNews);
//     }

//     window.location = 'news.html';
// }

// function displayNews(moreinfo) {
//     const newsBox = document.querySelector('.morenews');
//     newsBox.innerHTML = `
//         <div id="single-box">
//             <img src="${moreinfo.urlToImage}" alt="">
//             <h1>${moreinfo.title}</h1>
//             <p id="publish-date">Published at: ${moreinfo.publishedAt}</p>
//             <h4>${moreinfo.description}</h4>
//             <p>${moreinfo.content}</p>
//             <a href="${moreinfo.url}">Read Complete News</a>
//         </div>
//     `;
// }

// search.addEventListener('submit', async (e) => {
//     e.preventDefault();
//     console.log(input.value);

//     try {
//         let News = await axios.get(`https://newsapi.org/v2/everything?q=${input.value}&apiKey=c503b61ff6f0498faae701d558977fb2`);
//         console.log(News.data);
//         News = News.data.articles.slice(0, 20);
//         console.log(News);
//         allNews = [...News];

//         // Clear existing cards
//         cardsBox.innerHTML = '';


//         if (News.length === 0) {
//             cardsBox.innerHTML = '<p class="mt-4 text-2xl fw-bolder text-light ">No news articles found for the given query.</p>';
//         } else {
//             head.innerHTML =`${input.value}  News`
//             News.forEach((item) => {
//                 const limitedDescription = item.description && item.description.length > 50
//                 ? `${item.description.slice(0, 50)}.........`
//                 : item.description;
//                 const limitedtittle = item.title && item.title.length > 20
//                 ? `${item.title.slice(0, 20)}.........`
//                 : item.title;
//                 cardsBox.innerHTML += `
//                 <div class="card grid gap-3" style="width: 20rem; ">
//                     <img class="images" src="${item.urlToImage ? item.urlToImage : 'https://img.freepik.com/free-vector/technology-background-with-earth-circuit-diagram_1017-19385.jpg'}" class="card-img-top" alt="...">
//                     <div class="card-body">
//                         <h5 class="card-title">${limitedtittle}</h5>
//                         <p class="card-text">${limitedDescription}</p>
//                         <button onclick="MoreData(${i})"  class="btn btn-primary" target="_blank">Read More</button>
//                     </div>
//                 </div>
//                 `;
//             });
//         }

//         input.value = '';
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// });




// function MoreData(i) {
//     let onenews = allNews[i];
//     console.log(onenews);

//     const news = JSON.stringify(onenews)
//     localStorage.setItem('news', news)

//     window.location = 'news.html'
// }