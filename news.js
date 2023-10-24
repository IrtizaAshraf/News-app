// const newsBox = document.querySelector('.morenews');


// const news = localStorage.getItem('new');
// const moreinfo = JSON.parse(news);
// console.log(moreinfo);



// newsBox.innerHTML = `
//     <div   id="single-box">
//         <img src="${moreinfo.urlToImage}" alt="">
//         <h1> ${moreinfo.title} </h1>
//         <p  id="publish-date"> Published at: ${moreinfo.publishedAt}</p>
//         <h4> ${moreinfo.description} </h4>
//         <p> ${moreinfo.content}</p>
//         <a href="${moreinfo.url}">Read Complete News</a>
//     </div>
// `


const newsBox = document.querySelector('.morenews');


const news = localStorage.getItem('new');
const singleNews = JSON.parse(news);
console.log(singleNews);



// newsBox.innerHTML = `
//     <div   id="single-box">
//         <img src="${singleNews.urlToImage}" alt="">
//         <h1> ${singleNews.title} </h1>
//         <p  id="publish-date"> Published at: ${singleNews.publishedAt}</p>
//         <h4> ${singleNews.description} </h4>
//         <p> ${singleNews.content}</p>
//         <a href="${singleNews.url}">Read Complete News</a>
//     </div>
// `